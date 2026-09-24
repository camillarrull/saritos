// Módulo "Contenido" del panel de admin de Saritos.
// Uso: <Contenido supabase={supabase} />
// Guarda el avance (etapas, quién toma cada pieza, tomas y preparativos)
// en la tabla contenido_estado de Supabase, y se actualiza solo cuando otra persona cambia algo.
import { useCallback, useEffect, useMemo, useState } from "react";
import { PILARES, ETAPAS, PERSONAS, SES, WEEKS, TASKS, HOW_HTML, EST_HTML } from "./contenidoData";
import "./contenido.css";

const WD = ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"];
const MN = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
const D = (s) => new Date(s + "T12:00:00Z");
const iso = (d) => d.toISOString().slice(0, 10);
const addDays = (s, n) => { const d = D(s); d.setUTCDate(d.getUTCDate() + n); return iso(d); };
const fmt = (s) => { const d = D(s); return `${WD[d.getUTCDay()]} ${d.getUTCDate()} ${MN[d.getUTCMonth()]}`; };
const todayCordoba = () => iso(new Date(Date.now() - 3 * 3600 * 1000));

// Todas las publicaciones con su fecha de "listo para subir" y su carpeta
const ALL = [];
WEEKS.forEach((w) => w.p.forEach((p) => {
  let listo = p.ses === "DIA" ? addDays(p.f, -1) : addDays(p.f, -2);
  const s = SES[p.ses];
  if (s && s.f && p.ses !== "S0") { const min = addDays(s.f, 1); if (listo < min) listo = min; }
  const slug = p.t.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 32).replace(/-$/, "");
  ALL.push({ ...p, week: w, listo, carpeta: `03_LISTO-PARA-SUBIR/${p.f}_${p.fm.toLowerCase()}_${slug}` });
}));

/* ---------- estado compartido en Supabase ---------- */
function useSharedState(supabase) {
  const [rows, setRows] = useState({});
  const [status, setStatus] = useState({ ok: false, msg: "Conectando…" });

  const load = useCallback(async () => {
    const { data, error } = await supabase.from("contenido_estado").select("id,data");
    if (error) { setStatus({ ok: false, msg: "No se pudo leer el avance: " + error.message }); return; }
    const o = {}; data.forEach((r) => { o[r.id] = r.data; });
    setRows(o);
    setStatus({ ok: true, msg: "Compartido: lo que marca una lo ve la otra" });
  }, [supabase]);

  useEffect(() => {
    load();
    const ch = supabase
      .channel("contenido_estado_cambios")
      .on("postgres_changes", { event: "*", schema: "public", table: "contenido_estado" }, (payload) => {
        const r = payload.new;
        if (r && r.id) setRows((prev) => ({ ...prev, [r.id]: r.data }));
      })
      .subscribe();
    const t = setInterval(load, 30000); // respaldo por si el tiempo real se corta
    const onFocus = () => load();
    window.addEventListener("focus", onFocus);
    return () => { supabase.removeChannel(ch); clearInterval(t); window.removeEventListener("focus", onFocus); };
  }, [supabase, load]);

  const save = useCallback(async (id, data) => {
    setRows((prev) => ({ ...prev, [id]: data }));
    const { error } = await supabase.from("contenido_estado").upsert({ id, data, updated_at: new Date().toISOString() });
    if (error) setStatus({ ok: false, msg: "No se guardó el último cambio: " + error.message });
  }, [supabase]);

  return { rows, status, save };
}

/* ---------- piezas chicas ---------- */
function Who({ value, onPick }) {
  return (
    <div className="who">Lo toma:{" "}
      {PERSONAS.map((n) => (
        <button key={n} type="button" aria-pressed={value === n} onClick={() => onPick(value === n ? "" : n)}>{n}</button>
      ))}
    </div>
  );
}

function CopyButton({ text }) {
  const [label, setLabel] = useState("Copiar copy");
  const copy = async () => {
    try { await navigator.clipboard.writeText(text); setLabel("Copiado"); }
    catch { setLabel("No se pudo copiar: seleccioná el texto"); }
    setTimeout(() => setLabel("Copiar copy"), 1800);
  };
  return <button className="btn" type="button" onClick={copy}>{label}</button>;
}

function Post({ p, st, today, onStage, onWho, flash }) {
  const P = PILARES[p.pl]; const ses = SES[p.ses]; const d = D(p.f);
  const late = st.e < 3 && p.listo < today;
  const sesTxt = p.ses === "DIA" ? "Del momento (celular)" : p.ses === "S0" ? "Preparación sin productos" : `${p.ses} · ${ses.n}, ${fmt(ses.f)}`;
  return (
    <div className={`post${st.e >= 5 ? " pub" : ""}${late ? " late" : ""}${flash ? " flash" : ""}`} id={`post-${p.id}`}>
      <div className="date"><span className="d">{d.getUTCDate()}</span><span className="m">{MN[d.getUTCMonth()]}</span><span className="wd">{WD[d.getUTCDay()]}</span></div>
      <div className="pbody">
        <div className="meta"><span className="fmt">{p.fm}</span><span><span className="dot" style={{ background: P.c }} /> {P.n}</span><span className="obj">{p.o}</span></div>
        <h3>{p.t}</h3>
        <p className="hook">“{p.h}”</p>
        <div className="prod">
          <span>Contenido: <b>{p.tipo}</b></span>
          <span>Material: <b>{sesTxt}</b></span>
          <span className={late ? "late-t" : ""}>Listo para subir: <b>{fmt(p.listo)}</b>{late ? " · atrasada" : ""}</span>
        </div>
        <div className="steps" role="group" aria-label="Etapa">
          {ETAPAS.slice(1).map((n, i) => {
            const k = i + 1;
            return (
              <button key={n} type="button" className={`step${st.e >= k ? " on" : ""}${st.e === k ? " cur" : ""}`} aria-pressed={st.e >= k}
                onClick={() => onStage(st.e === k ? k - 1 : k)}>{st.e >= k ? "✓ " : ""}{n}</button>
            );
          })}
        </div>
        <Who value={st.q} onPick={onWho} />
        <details>
          <summary>Tomas, armado, guion y copy</summary>
          <div className="detail">
            <div><h4>Tomas que hacen falta</h4><ul>{p.tomas.map((t) => <li key={t}>{t}</li>)}</ul></div>
            <div><h4>Cómo se arma</h4><p>{p.arm}</p></div>
            <div><h4>Qué cuenta</h4><p>{p.dv}</p></div>
            <div><h4>Copy</h4><div className="copybox">{p.cp}</div></div>
            <div><h4>Llamado a la acción</h4><p>{p.cta}</p></div>
            <div><h4>Carpeta en Drive</h4><p><code>{p.carpeta}</code></p></div>
            <div><CopyButton text={p.cp} /></div>
          </div>
        </details>
      </div>
    </div>
  );
}

/* ---------- pestañas ---------- */
const MESES = [["all", "Todo"], ["oct", "Oct"], ["nov", "Nov"], ["dic", "Dic – Ene"]];
const ETAPA_F = [["all", "Todas"], ["pend", "Sin terminar"], ["listo", "Listas para subir"], ["late", "Atrasadas"]];

function Chips({ label, list, value, onChange }) {
  return (
    <div className="frow"><span className="lbl">{label}</span>
      {list.map(([v, t, c]) => (
        <button key={v} type="button" className="chip" aria-pressed={value === v} onClick={() => onChange(v)}>
          {c && <span className="dot" style={{ background: c }} />}{t}
        </button>
      ))}
    </div>
  );
}

function CalendarView({ est, setEst, today }) {
  const [F, setF] = useState({ mes: "all", pilar: "all", etapa: "all" });
  const [flash, setFlash] = useState(null);
  const pend = ALL.filter((p) => est(p.id).e < 3).sort((a, b) => (a.listo < b.listo ? -1 : a.listo > b.listo ? 1 : 0)).slice(0, 6);
  const goTo = (id) => {
    setF({ mes: "all", pilar: "all", etapa: "all" });
    setFlash(id);
    setTimeout(() => document.getElementById("post-" + id)?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
    setTimeout(() => setFlash(null), 1800);
  };
  const keep = (p) => {
    const s = est(p.id);
    if (F.pilar !== "all" && p.pl !== F.pilar) return false;
    if (F.etapa === "pend" && s.e >= 5) return false;
    if (F.etapa === "listo" && s.e !== 3) return false;
    if (F.etapa === "late" && !(s.e < 3 && p.listo < today)) return false;
    return true;
  };
  const weeks = WEEKS.filter((w) => F.mes === "all" || w.mes === F.mes).map((w) => ({ w, posts: ALL.filter((p) => p.week === w && keep(p)) })).filter((x) => x.posts.length);
  return (
    <section>
      <div className="flow" aria-label="Etapas de cada publicación">
        <div><small>1</small><b>Material</b><span>Fotos y videos sacados en la sesión</span></div>
        <div><small>2</small><b>Editado</b><span>Color parejo, recortes 4:5 y 9:16</span></div>
        <div><small>3</small><b>Listo para subir</b><span>Carrusel o reel armado + copy en su carpeta</span></div>
        <div><small>4</small><b>Programado</b><span>Cargado en Meta Business Suite</span></div>
        <div><small>5</small><b>Publicado</b><span>Salió, y se hacen las historias</span></div>
        <div><small>+</small><b>Cualquiera</b><span>Cada paso lo puede tomar cualquiera del equipo</span></div>
      </div>
      <div className="next"><h2>Lo próximo por preparar</h2>
        <div className="nlist">
          {pend.length ? pend.map((p) => {
            const s = est(p.id); const late = p.listo < today;
            return (
              <button key={p.id} type="button" className={`ncard${late ? " late" : ""}`} onClick={() => goTo(p.id)}>
                <span className="due">{late ? "Atrasada · " : ""}Lista el {fmt(p.listo)} · sale el {fmt(p.f)}</span>
                <span className="nt">{p.t}</span>
                <span className="ns">{p.fm} · {ETAPAS[s.e]} · {s.q || "sin asignar"}</span>
              </button>
            );
          }) : <p className="empty">Todo listo para subir.</p>}
        </div>
      </div>
      <div className="filters">
        <Chips label="Mes" list={MESES} value={F.mes} onChange={(v) => setF({ ...F, mes: v })} />
        <Chips label="Pilar" list={[["all", "Todos"], ...Object.entries(PILARES).map(([k, p]) => [k, p.n, p.c])]} value={F.pilar} onChange={(v) => setF({ ...F, pilar: v })} />
        <Chips label="Etapa" list={ETAPA_F} value={F.etapa} onChange={(v) => setF({ ...F, etapa: v })} />
      </div>
      {weeks.length ? weeks.map(({ w, posts }) => (
        <article className="week" key={w.id}>
          <div className="whead"><span className="range">{w.r}</span><h2>{w.t}</h2><p>{w.a}</p><span className="kw">Palabra clave WhatsApp: <b>{w.kw}</b></span></div>
          <div className="posts">
            {posts.map((p) => (
              <Post key={p.id} p={p} st={est(p.id)} today={today} flash={flash === p.id}
                onStage={(e) => setEst(p.id, { e })} onWho={(q) => setEst(p.id, { q })} />
            ))}
            {F.pilar === "all" && F.etapa === "all" && (
              <div className="stories"><h4>Historias de la semana · las hace quien tenga el turno</h4><ul>{w.st.map((s) => <li key={s}>{s}</li>)}</ul></div>
            )}
          </div>
        </article>
      )) : <p className="empty">No hay publicaciones con esos filtros.</p>}
    </section>
  );
}

function SessionsView({ rows, save }) {
  return (
    <section>
      <p className="note" style={{ marginBottom: 8 }}>Cada sesión junta las tomas de todas las publicaciones que salen de ella: se saca todo en un día y no hay que volver a armar el set. Tildá cada toma a medida que la hacen, así la otra persona ve qué falta.</p>
      {["S0", "S1", "S2", "S3", "S4", "DIA"].map((k) => {
        const s = SES[k]; const posts = ALL.filter((p) => p.ses === k);
        const shots = [];
        posts.forEach((p) => p.tomas.forEach((t) => { if (!/^Reutiliza|^No necesita/.test(t)) shots.push({ t, p }); }));
        s.extra.forEach((t) => shots.push({ t, p: null }));
        const st = rows["tomas:" + k] || {};
        const done = shots.filter((_, i) => st["k" + i]).length;
        return (
          <article className="sess" key={k}>
            <div className="sh">
              <span className="when">{s.r}</span>
              <h2>{k === "DIA" || k === "S0" ? "" : k + " · "}{s.n}</h2>
              <p>{s.txt}</p>
              <p>{posts.length} publicaciones salen de acá{k !== "S0" && shots.length ? ` · ${done} de ${shots.length} tomas hechas` : ""}</p>
            </div>
            <div>
              {s.prep.length > 0 && <div className="prepbox"><b>Tener listo antes</b><ul>{s.prep.map((x) => <li key={x}>{x}</li>)}</ul></div>}
              {k === "S0" ? (
                <div className="prepbox"><b>Piezas que se diseñan sin productos</b><ul>{posts.map((p) => <li key={p.id}>{fmt(p.f)} · {p.t}</li>)}</ul></div>
              ) : (
                <div>
                  {shots.map((x, i) => (
                    <div key={i} className={`shot${st["k" + i] ? " done" : ""}`}>
                      <input type="checkbox" id={`shot-${k}-${i}`} checked={!!st["k" + i]} onChange={(e) => save("tomas:" + k, { ...st, ["k" + i]: e.target.checked })} />
                      <label htmlFor={`shot-${k}-${i}`}><span>{x.t}</span><small>{x.p ? `Para: ${x.p.t} · ${fmt(x.p.f)}` : "Banco de contenido"}</small></label>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </article>
        );
      })}
    </section>
  );
}

function PrepView({ rows, save, today }) {
  return (
    <section>
      <div className="sec"><span className="eyebrow">Incluye las inversiones del plan</span><h2>Lo que tiene que estar antes de cada sesión y publicación</h2>
        <div>
          {TASKS.map(([id, f, t, d]) => {
            const s = rows["prep:" + id] || { hecho: false, q: "" };
            const late = !s.hecho && f < today;
            return (
              <div key={id} className={`task${s.hecho ? " done" : ""}${late ? " late" : ""}`}>
                <input type="checkbox" id={`task-${id}`} checked={!!s.hecho} aria-label={t} onChange={(e) => save("prep:" + id, { ...s, hecho: e.target.checked })} />
                <span className="when">{fmt(f)}</span>
                <div><b>{t}</b><p>{d}</p><div style={{ marginTop: 6 }}><Who value={s.q} onPick={(q) => save("prep:" + id, { ...s, q })} /></div></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- módulo ---------- */
const TABS = [["cal", "Calendario"], ["ses", "Sesiones de fotos"], ["how", "Cómo trabajamos"], ["prep", "Preparativos"], ["est", "Estrategia"]];

export default function Contenido({ supabase }) {
  const { rows, status, save } = useSharedState(supabase);
  const [tab, setTab] = useState("cal");
  const today = useMemo(todayCordoba, []);
  const est = (id) => rows["post:" + id] || { e: 0, q: "" };
  const setEst = (id, patch) => save("post:" + id, { e: 0, q: "", ...est(id), ...patch });
  const listas = ALL.filter((p) => est(p.id).e >= 3).length;
  const publicadas = ALL.filter((p) => est(p.id).e >= 5).length;

  return (
    <div className="sc">
      <div className="wrap">
        <header className="top">
          <span className="eyebrow">Saritos · Instagram · 5 oct 2026 → 3 ene 2027</span>
          <h1>Calendario <em>Saritos</em></h1>
          <p className="lede">45 publicaciones en 13 semanas para atraer clientas nuevas, generar confianza para comprar por WhatsApp y vender en Día de la Madre, Black Friday y Navidad. Cada pieza dice qué fotos hacen falta, en qué sesión se sacan, para cuándo tiene que estar lista y en qué carpeta va.</p>
          <div className="statusline">
            <span className={`sync${status.ok ? " on" : ""}`}><i />{status.msg}</span>
            <span>{listas} de {ALL.length} listas · {publicadas} publicadas</span>
            <div className="bar"><i style={{ width: (listas / ALL.length) * 100 + "%" }} /></div>
          </div>
        </header>
        <nav className="tabs" role="tablist">
          {TABS.map(([k, n]) => <button key={k} role="tab" type="button" aria-selected={tab === k} onClick={() => setTab(k)}>{n}</button>)}
        </nav>
        {tab === "cal" && <CalendarView est={est} setEst={setEst} today={today} />}
        {tab === "ses" && <SessionsView rows={rows} save={save} />}
        {tab === "how" && <section dangerouslySetInnerHTML={{ __html: HOW_HTML }} />}
        {tab === "prep" && <PrepView rows={rows} save={save} today={today} />}
        {tab === "est" && <section dangerouslySetInnerHTML={{ __html: EST_HTML }} />}
      </div>
    </div>
  );
}
