-- Módulo Contenido de Saritos
-- Pegar completo en Supabase → SQL Editor → New query → Run.
-- Crea la tabla donde se guarda el avance del calendario (etapas, quién toma cada pieza,
-- tomas hechas y preparativos).
-- El admin de Saritos entra con una contraseña propia (VITE_ADMIN_PASSWORD) y habla con Supabase
-- con la clave pública, igual que la tabla de productos. Por eso las políticas permiten leer y
-- escribir con esa clave. En la tabla solo se guardan marcas de avance, nada privado.

create table if not exists public.contenido_estado (
  id          text primary key,              -- ej. 'post:a1', 'prep:t4', 'tomas:S1'
  data        jsonb not null default '{}',   -- ej. {"e": 3, "q": "Emi"}
  updated_at  timestamptz not null default now()
);

alter table public.contenido_estado enable row level security;

drop policy if exists "contenido lectura" on public.contenido_estado;
create policy "contenido lectura" on public.contenido_estado
  for select to anon, authenticated using (true);

drop policy if exists "contenido alta" on public.contenido_estado;
create policy "contenido alta" on public.contenido_estado
  for insert to anon, authenticated with check (true);

drop policy if exists "contenido edicion" on public.contenido_estado;
create policy "contenido edicion" on public.contenido_estado
  for update to anon, authenticated using (true) with check (true);

-- Para que los cambios de una persona le aparezcan a la otra sin recargar
do $$
begin
  if not exists (
    select 1 from pg_publication_tables
    where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'contenido_estado'
  ) then
    alter publication supabase_realtime add table public.contenido_estado;
  end if;
end $$;
