// Datos del calendario de contenido Saritos (5 oct 2026 – 3 ene 2027).
// Para cambiar textos, fechas o personas, editá este archivo.
export const PILARES={
  deseo:{n:"Colección y deseo",c:"var(--p-deseo)",d:"Mostrar las piezas como objetos de deseo: lo nuevo, los favoritos, los detalles de cerca.",pct:"25%"},
  estilo:{n:"Cómo usarlos",c:"var(--p-estilo)",d:"Resolver la duda de siempre con un aro grande y asimétrico: con qué, para qué ocasión, con qué peinado. Atrae gente nueva por guardados y compartidos.",pct:"20%"},
  confianza:{n:"Confianza",c:"var(--p-confianza)",d:"Quitar cada freno a la compra: cómo comprar, alias, envíos, retiro, cuidado, preguntas frecuentes.",pct:"15%"},
  marca:{n:"Detrás de Saritos",c:"var(--p-marca)",d:"Vos, tu mesa, el packaging, por qué existe la marca. La gente le compra a personas.",pct:"15%"},
  comunidad:{n:"Sarilovers",c:"var(--p-comunidad)",d:"Clientas reales con sus aros, mensajes, encuestas, el sorteo de los 1000. Prueba social y crecimiento.",pct:"10%"},
  venta:{n:"Oferta y fecha",c:"var(--p-venta)",d:"Lanzamientos, combos, fechas límite y promos, siempre con una palabra clave para WhatsApp.",pct:"15%"}
};
export const ETAPAS=["Por hacer","Material","Editado","Listo para subir","Programado","Publicado"];
export const PERSONAS=["Camila","Emi"];

export const SES={
 S0:{n:"Preparación sin productos",f:"2026-10-04",r:"25 sep – 4 oct",txt:"Todo lo que se puede diseñar antes de tener los productos: plantillas, piezas solo gráficas, destacados y accesos.",prep:["Plantillas de Canva: carrusel 4:5, portada de reel 9:16 e historia 9:16, con Cormorant Garamond y Jost y la paleta papel, arena y cacao","Accesos: Emi y Camila con acceso a Instagram en Meta Business Suite, a la carpeta de Drive y al equipo de Canva"],extra:[]},
 S1:{n:"Primavera + Día de la Madre",f:"2026-10-05",r:"Lunes 5 de octubre",txt:"La sesión más importante: sale el material de todo octubre. Edición lista el martes 6.",prep:["Productos nuevos limpios y ordenados por pieza","Cajitas, papel de seda, cinta y tarjetas ya comprados","Fondo papel o lino, flores secas, una remera blanca y un top liso","Luz natural de ventana lateral, entre las 10 y las 12, o un día nublado","Celular limpio, video en 4K vertical"],
  extra:["Cada pieza también en 9:16 para historias","Retrato tuyo trabajando en la mesa (banco de fotos)","Clips de manos armando y revisando pares (banco para reels)"]},
 S2:{n:"Combos Verano + estilo",f:"2026-10-26",r:"Lunes 26 de octubre",txt:"Combos Verano, looks puestos y planos cálidos para el reel de Navidad. Edición lista el martes 27.",prep:["Combos armados: bolso, manta, malla y aros","Lugar con pasto o pileta y sol de tarde","El mismo par de aros para los 3 looks","Papel de regalo, cinta y una lámpara cálida para los planos de envolver"],extra:["Cada combo en 9:16 para historias","Clips cortos de detalle de cada textura"]},
 S3:{n:"Fin de año + Black",f:"2026-11-16",r:"Lunes 16 de noviembre",txt:"Aros de fiesta, eventos de fin de año, detrás de escena del stock y el material de Black Saritos.",prep:["Stock nuevo recibido","Aros de fiesta separados","Copas, lucecitas y un fondo cacao u oscuro","Prendas de fiesta para 2 o 3 looks"],extra:["Fotoproducto de cada pieza nueva de stock"]},
 S4:{n:"Navidad y Año Nuevo",f:"2026-11-21",r:"Sábado 21 de noviembre",txt:"Todo diciembre sale de acá. Se hace antes de la semana de Black para no cargarla. Edición lista el lunes 23.",prep:["Regalitos para los combos y tarjetas con 10% ya impresas","Ramitas, luces cálidas y papel de regalo","Un prop por destinataria para la Gift Guide","Prendas para 3 looks de Año Nuevo"],extra:["Cada pieza de Navidad en 9:16"]},
 DIA:{n:"Del momento (celular)",f:null,r:"Se hace el día anterior",txt:"Contenido que se graba con el celular sobre la marcha: fotos de clientas, pedidos saliendo, stock que queda. Cualquiera de las dos puede hacerlo.",prep:[],extra:[]}
};

export const WEEKS=[
{id:"a",mes:"oct",r:"5 – 11 oct",t:"Llegaron: sesión y lanzamiento",a:"Sesión de fotos el lunes, lanzamiento de Primavera el jueves y arranque de Día de la Madre (dom 18).",kw:"PRIMAVERA · MAMÁ",
 st:["Lun 5: cajas abiertas sin mostrar nada + detrás de escena de la sesión","Mar 6: encuesta “¿Aros grandes o delicados esta primavera?”","Mié 7: cuenta regresiva “Lanzamiento jueves 8”","Jue 8: cada pieza en una historia con precio y link a WhatsApp","Vie 9: encuesta “¿Cómo es tu mamá?” clásica, audaz, minimal, coqueta","Sáb 10: resultado de la encuesta con la pieza ideal para cada una","Dom 11: fecha límite de envíos de Día de la Madre"],
 p:[
 {id:"a1",f:"2026-10-06",fm:"Carrusel",pl:"confianza",o:"Confianza",ses:"S0",tipo:"Diseño gráfico",t:"Cómo comprar en Saritos, paso a paso",h:"Comprar tus aros es más fácil de lo que pensás.",
  tomas:["No necesita productos nuevos: fondos lisos de marca o fotos que ya tenés"],arm:"Canva, plantilla carrusel 4:5, 7 slides. Fijar el post y sumarlo al destacado “Cómo comprar”.",
  dv:"Slide 1: “Cómo comprar en Saritos”. 2: elegís en la web o en el feed. 3: nos escribís por WhatsApp con el nombre del modelo. 4: confirmamos stock y te pasamos el alias. 5: envío a todo el país o retiro en Córdoba (con tiempos reales). 6: te llega con packaging listo para regalar. 7: “¿Dudas? Escribinos”.",
  cp:"Guardalo para cuando lo necesites 📌\n\nElegís → nos escribís → pagás por alias → te llega (o lo retirás en Córdoba).\nSin vueltas y con respuesta de una persona real.\n\nEl jueves llega la colección de primavera 🌿",cta:"Guardar · preguntar en comentarios"},
 {id:"a2",f:"2026-10-07",fm:"Reel",pl:"deseo",o:"Atraer",ses:"S1",tipo:"Video vertical",t:"Teaser: algo nuevo florece",h:"Guardamos esto todo el invierno…",
  tomas:["3 o 4 aros saliendo del papel de seda, plano muy cerrado, 3 s cada uno","Mano abriendo la caja de envío","Una pieza fuera de foco que se enfoca de a poco"],arm:"CapCut, 8–10 s, audio suave en tendencia, texto final “Primavera Saritos · jueves 8”.",
  dv:"Planos muy cerrados, luz natural de mañana sobre fondo papel. No mostrar ninguna pieza completa. Cierre con texto sobre el fondo crema.",
  cp:"Algo nuevo está por florecer.\nEl jueves 8 te mostramos la colección de primavera completa.\n\nActivá las notificaciones para verla primero 🌿",cta:"Activar notificaciones · responder con 🌸 para recibir el aviso por WhatsApp"},
 {id:"a3",f:"2026-10-08",fm:"Carrusel",pl:"venta",o:"Vender",ses:"S1",tipo:"Fotoproducto",t:"Lo que llegó: colección Primavera",h:"Llegó la primavera a tus orejas.",
  tomas:["Cada pieza sobre fondo papel, en 4:5: una de frente y una a 45°","Pieza estrella con flores secas (portada)","Pieza estrella puesta, de perfil con el pelo recogido"],arm:"Canva, 8 slides: portada, una pieza por slide con nombre y precio, cierre “cómo comprar”. Fijar el post.",
  dv:"Slide 1: portada “Lo que llegó”. Slides 2–7: una pieza por slide con nombre, material y precio. Slide 8: “Elegís → nos escribís → alias → envío o retiro”.",
  cp:"Colección Primavera 🌿\nAros grandes, asimétricos y livianos, pensados para días largos de sol.\n\nDeslizá y elegí tu favorito. Hay pocas unidades de cada modelo, y todos salen listos para regalar el Día de la Madre.\n\nEscribinos PRIMAVERA por WhatsApp (link en bio) y te reservamos el tuyo.",cta:"Palabra clave PRIMAVERA por WhatsApp"},
 {id:"a4",f:"2026-10-10",fm:"Carrusel",pl:"estilo",o:"Vender",ses:"S1",tipo:"Fotoproducto + packaging",t:"¿Qué aro le regalo a mamá? Según su estilo",h:"Decime cómo es tu mamá y te digo qué aro regalarle.",
  tomas:["4 piezas elegidas para regalo, cada una junto a su cajita abierta","Tarjeta escrita a mano, plano cenital"],arm:"Canva, 6 slides: una por perfil de mamá con pieza y precio, cierre con la fecha límite de envíos.",
  dv:"Una slide por perfil: la clásica, la audaz, la minimal, la que no se saca nada de encima. Cada una con la pieza recomendada, precio y una frase que la describa. Última: “¿No encontraste a tu mamá? Escribinos y la buscamos juntas”.",
  cp:"No hay dos mamás iguales, y tampoco dos Saritos.\nDeslizá, encontrá a la tuya y mandale este post a tu hermana para dividir el regalo 😉\n\nDía de la Madre es el domingo 18. Cada pedido sale envuelto y con tarjeta escrita a mano.\nEscribinos MAMÁ por WhatsApp.",cta:"Compartir por mensaje · palabra clave MAMÁ"}
 ]},
{id:"b",mes:"oct",r:"12 – 18 oct",t:"Urgencia Día de la Madre",a:"Packaging como diferencial, fecha límite de envíos, retiro de último momento y saludo del domingo 18.",kw:"MAMÁ",
 st:["Lun: pedidos saliendo, pila de cajitas","Mar: cuenta regresiva al último día de envíos","Mié: stock que queda de cada pieza (“quedan 2”)","Jue: horarios y punto de retiro en Córdoba","Vie y sáb: “todavía llegás con retiro”","Dom 18: saludo + repost de clientas que etiqueten"],
 p:[
 {id:"b1",f:"2026-10-12",fm:"Reel",pl:"venta",o:"Vender",ses:"S1",tipo:"Video vertical",t:"Unboxing del regalo para mamá",h:"Así llega tu regalo (y sí, la tarjeta la escribo yo).",
  tomas:["Abrir la cajita completa en una sola toma de 15 s, vista de quien la recibe","Tarjeta escrita a mano, plano cenital","Aro saliendo del papel, primer plano, con el sonido del papel"],arm:"CapCut, 12–15 s, audio del papel, texto final con la fecha límite.",
  dv:"Vista de quien recibe: cajita cerrada, se abre, papel de seda, tarjeta con letra a mano, el aro en primer plano.",
  cp:"Regalar un Saritos es regalar el momento de abrirlo 🎁\nCada pedido de Día de la Madre sale envuelto, con tarjeta escrita a mano y listo para entregar.\n\nÚltimo día de envíos: [completar fecha].\nEscribinos MAMÁ por WhatsApp.",cta:"Palabra clave MAMÁ · compartir con tus hermanas"},
 {id:"b2",f:"2026-10-13",fm:"Carrusel",pl:"venta",o:"Vender",ses:"S1",tipo:"Diseño + fotoproducto",t:"Último día de envíos para Día de la Madre",h:"Si querés que llegue a tiempo, es ahora.",
  tomas:["Reutiliza el fotoproducto del 8 de octubre","Cajitas apiladas y envueltas"],arm:"Canva: portada con la fecha límite grande en Cormorant, 5 slides.",
  dv:"Portada con la fecha límite. Slides: selección con precios, cómo pedir, fecha límite de envío y retiro en Córdoba hasta el sábado 17.",
  cp:"Última llamada para envíos de Día de la Madre ⏳\nPedí hasta el [fecha] y te llega antes del domingo 18.\nDespués, podés retirar en Córdoba hasta el sábado 17.\n\nEscribinos MAMÁ por WhatsApp.",cta:"Palabra clave MAMÁ"},
 {id:"b3",f:"2026-10-15",fm:"Reel",pl:"venta",o:"Vender",ses:"S1",tipo:"Video vertical",t:"Regalos listos para retirar",h:"¿Te olvidaste del regalo? Todavía llegás.",
  tomas:["Mesa con cajitas envueltas y listas","Mano que toma una y la entrega a cámara"],arm:"CapCut, 7–10 s, texto “Retiro en Córdoba hasta el sábado 17”.",
  dv:"Plano de la mesa con cajitas y el gesto de entrega. Texto con días de retiro.",
  cp:"Para las que dejan todo para último momento (te entendemos) 🙋‍♀️\nTenemos regalos envueltos y listos para retirar en Córdoba hasta el sábado.\n\nEscribinos MAMÁ y coordinamos.",cta:"Palabra clave MAMÁ"},
 {id:"b4",f:"2026-10-18",fm:"Post",pl:"marca",o:"Confianza",ses:"S1",tipo:"Foto de marca",t:"Feliz día a todas las mamás",h:"Para las que nos enseñaron a elegir con el corazón.",
  tomas:["Una pieza sobre flores, luz cálida (o una foto tuya con tu mamá, si te sentís cómoda)"],arm:"Foto única 4:5, sin texto encima. Programarla el viernes para que nadie tenga que subirla el domingo.",
  dv:"Foto cálida de marca, sin precios ni venta.",
  cp:"Feliz día a todas las mamás 🤍\nGracias a cada una que eligió regalar Saritos esta semana.\n\nSi hoy recibiste uno, sacale una foto y etiquetanos: nos encanta verlos puestos.",cta:"Etiquetar a Saritos con la foto del regalo"}
 ]},
{id:"c",mes:"oct",r:"19 – 25 oct",t:"Post Día de la Madre: clientas y confianza",a:"Aprovechar las fotos de clientas, enseñar a cuidar los aros y presentar a quien está detrás.",kw:"FAVORITOS",
 st:["Lun 19: mensaje a clientas pidiendo permiso para compartir sus fotos","Lun a mié: repost de todas las historias donde las etiqueten","Mar: quiz “¿Cuál fue el más elegido?” con 3 opciones","Jue: stock repuesto de los favoritos","Vie: pregunta “¿Qué querés ver en la próxima colección?”","Sáb: 3 historias hablando a cámara, adelanto del reel"],
 p:[
 {id:"c1",f:"2026-10-20",fm:"Reel",pl:"comunidad",o:"Confianza",ses:"DIA",tipo:"Fotos de clientas",t:"Así los recibieron",h:"Esto pasó el domingo en muchas casas.",
  tomas:["Fotos y videos que manden las clientas, siempre con su permiso","Si hay pocas: capturas de mensajes de agradecimiento con nombres tapados"],arm:"CapCut, 1 s por foto, música alegre. Se arma el lunes 19.",
  dv:"Compilado de fotos de clientas con sus regalos, o mensajes de agradecimiento reales.",
  cp:"Gracias por dejarnos ser parte de su Día de la Madre 🤍\nCada foto que nos mandaron la guardamos con mucho amor.\n\n¿Todavía no nos mandaste la tuya? Estamos a tiempo.",cta:"Mandar foto por mensaje · etiquetar"},
 {id:"c2",f:"2026-10-22",fm:"Carrusel",pl:"confianza",o:"Confianza",ses:"S1",tipo:"Diseño + detalle",t:"5 tips para que tus aros duren",h:"Si te encantan, cuidalos así.",
  tomas:["Detalle macro de un aro","Aros guardados en su bolsita","Mano poniéndose perfume, aros a un costado"],arm:"Canva, 7 slides: portada + un tip por slide + cierre.",
  dv:"Guardarlos separados en su bolsita; primero perfume y crema, después los aros; sacarlos para bañarse, nadar o hacer deporte; secarlos con paño suave; guardarlos lejos de la humedad. Ajustar a los materiales reales.",
  cp:"Tus Saritos pueden acompañarte años si los cuidás un poco 🤍\nGuardá este post y mandáselo a esa amiga que duerme con los aros puestos.\n\n¿Tenés alguna duda sobre tus piezas? Preguntanos.",cta:"Guardar · compartir"},
 {id:"c3",f:"2026-10-24",fm:"Reel",pl:"marca",o:"Confianza",ses:"DIA",tipo:"Video a cámara",t:"Hola, soy Camila",h:"Te cuento por qué empecé Saritos.",
  tomas:["Grabación suelta el miércoles 21: 30–45 s hablando a cámara en tu mesa","Celular vertical a la altura de los ojos, luz de ventana de frente","Plano extra de tus manos trabajando"],arm:"CapCut con subtítulos automáticos y corte de silencios.",
  dv:"Quién sos, cuándo y por qué empezó Saritos, por qué los aros grandes y asimétricos, qué querés que sienta quien los usa.",
  cp:"Detrás de cada Saritos estoy yo, Camila 🤍\nHoy te cuento cómo empezó todo y por qué me enamoré de los aros que no son iguales.\n\nSi llegaste hace poco, bienvenida. Contame de dónde nos seguís.",cta:"Comentar de dónde nos siguen"}
 ]},
{id:"d",mes:"oct",r:"26 oct – 1 nov",t:"Favoritos + anticipo de Combos Verano",a:"Sesión 2 el lunes. Mostrar lo más vendido, cómo se usan y anticipar los combos.",kw:"VERANO",
 st:["Lun: detrás de escena de la sesión 2 + “Estamos a X de ser 1000 sarilovers”","Mar: tips de cuidado en formato pregunta y respuesta","Mié: detalle de un bolso o manta tapado, “se viene…”","Jue: look del día con aros","Vie: encuesta “¿Playa o pileta?”","Sáb: cuenta regresiva a los Combos Verano"],
 p:[
 {id:"d1",f:"2026-10-27",fm:"Carrusel",pl:"deseo",o:"Vender",ses:"S1",tipo:"Fotoproducto",t:"Top 5 favoritos de octubre",h:"Los 5 que más se llevaron este mes.",
  tomas:["Reutiliza el fotoproducto de la sesión 1","Dato real: las 5 piezas más vendidas de octubre"],arm:"Canva, 7 slides: portada, ranking del 5 al 1, cierre.",
  dv:"Ranking del 5 al 1 con foto, nombre, precio y una frase de por qué gusta.",
  cp:"Los más elegidos de octubre ✨\nDel 5 al 1, deslizá hasta el final para ver el número uno.\n\nEscribinos FAVORITOS por WhatsApp y te contamos el stock.",cta:"Palabra clave FAVORITOS"},
 {id:"d2",f:"2026-10-29",fm:"Reel",pl:"estilo",o:"Atraer",ses:"S2",tipo:"Video con modelo",t:"3 formas de usar aros asimétricos",h:"¿Un aro distinto en cada oreja? Así se usa sin pensarlo.",
  tomas:["Look 1: pelo recogido + remera blanca, 5 s","Look 2: pelo suelto de un lado, mostrando solo el aro grande, 5 s","Look 3: top liso de noche, 5 s","Cierre: el par sobre la mano"],arm:"CapCut, transiciones con chasquido o giro, texto corto en cada look.",
  dv:"Tres looks con el mismo par. Termina con el par sobre la mano.",
  cp:"Tres looks, un solo par.\nLa asimetría es la gracia: un lado protagonista, el otro acompaña.\n\n¿Cuál es el tuyo: 1, 2 o 3? Contanos en comentarios.",cta:"Comentar 1, 2 o 3 · guardar"},
 {id:"d3",f:"2026-10-31",fm:"Reel",pl:"venta",o:"Atraer",ses:"S2",tipo:"Video vertical",t:"Se viene: Combos Verano",h:"¿Adivinás qué estamos armando?",
  tomas:["Textura de la manta, 2 s","Malla doblada, 2 s","Bolso, 2 s","Aros al final, 2 s"],arm:"CapCut, 8–10 s, texto “Martes 3 de noviembre”.",
  dv:"Pistas en planos cortos sin mostrar el combo completo.",
  cp:"Estamos armando algo para tus días de sol ☀️\nBolso, manta, malla y aros: todo lo que necesitás, en combo.\n\nSale el martes 3. Escribinos VERANO y te avisamos primero.",cta:"Palabra clave VERANO para aviso anticipado"}
 ]},
{id:"e",mes:"nov",r:"2 – 8 nov",t:"CyberMonday (3 – 5 nov) + Combos Verano",a:"Lanzar los Combos Verano aprovechando que la gente sale a comprar online en el CyberMonday.",kw:"VERANO",
 st:["Lun 2: “Mañana salen los Combos Verano”","Mar 3: cada combo en una historia con precio y link","Mié 4: “ya se fueron X combos” (solo con datos reales)","Jue 5: “último día del beneficio”","Vie y sáb: preguntas frecuentes respondidas en historias"],
 p:[
 {id:"e1",f:"2026-11-03",fm:"Carrusel",pl:"venta",o:"Vender",ses:"S2",tipo:"Fotoproducto de combo",t:"Llegaron los Combos Verano",h:"Todo lo que necesitás para tu verano, en un combo.",
  tomas:["Cada combo completo sobre la manta, plano cenital","Detalle de cada componente","Un combo en contexto: pasto o pileta"],arm:"Canva, 6–7 slides: portada, un combo por slide con precio y ahorro, beneficio, cómo pedir.",
  dv:"Portada con el combo sobre la manta. Una slide por combo con qué incluye y precio. Slide con el beneficio del 3 al 5 (sugerido: envío gratis o regalito).",
  cp:"Combos Verano ☀️\nBolso + manta + malla + aros, armados para que no pienses nada.\n\nDel 3 al 5 de noviembre: [beneficio].\nEscribinos VERANO por WhatsApp y elegí el tuyo.",cta:"Palabra clave VERANO"},
 {id:"e2",f:"2026-11-05",fm:"Reel",pl:"estilo",o:"Vender",ses:"S2",tipo:"Video vertical",t:"Armá tu día de pileta con un combo",h:"Llegar a la pileta así 👇",
  tomas:["Sacar la manta del bolso y extenderla","La malla","Aros puestos + anteojos","Plano final del combo completo"],arm:"CapCut, 10–12 s, texto “Último día del beneficio”.",
  dv:"Secuencia de preparación de un día de pileta.",
  cp:"Hoy es el último día para llevarte tu Combo Verano con [beneficio] ⏳\nDespués sigue disponible, pero sin el extra.\n\nEscribinos VERANO por WhatsApp.",cta:"Palabra clave VERANO"},
 {id:"e3",f:"2026-11-07",fm:"Carrusel",pl:"confianza",o:"Confianza",ses:"S0",tipo:"Diseño gráfico",t:"Preguntas frecuentes",h:"Todo lo que nos preguntan, en un solo lugar.",
  tomas:["No necesita fotos nuevas"],arm:"Canva, una pregunta por slide. Sumar al destacado “Envíos y retiro”.",
  dv:"¿Envíos a todo el país? ¿Cuánto tarda? ¿Retiro en Córdoba? ¿Cómo pago? ¿Puedo cambiar? ¿De qué material son? ¿Vienen listos para regalar? Con tus políticas reales.",
  cp:"Tus preguntas, respondidas 🤍\nGuardalo y compartilo con quien siempre pregunta “¿y cómo se compra?”.\n\n¿Falta alguna? Dejala en comentarios y la sumamos.",cta:"Guardar · preguntar en comentarios"}
 ]},
{id:"f",mes:"nov",r:"9 – 15 nov",t:"“Este año regalá Saritos”",a:"Instalar a Saritos como regalo de fin de año y abrir la lista VIP para Black Friday.",kw:"REGALO · VIP",
 st:["Lun: encuesta “¿Ya empezaste a pensar en regalos?”","Mar: moodboard navideño de la marca","Mié: armando la lista VIP (“solo por WhatsApp”)","Jue: regalos por rango de precio en historias","Vie: adelanto borroso de la promo Black","Sáb: recordatorio para sumarse a la lista VIP"],
 p:[
 {id:"f1",f:"2026-11-10",fm:"Reel",pl:"marca",o:"Atraer",ses:"S2",tipo:"Video vertical",t:"Este año regalá Saritos",h:"Regalá algo que no se parezca a nada.",
  tomas:["Manos envolviendo con papel y cinta, luz de lámpara cálida","Tarjeta escrita a mano","Alguien abriendo el regalo"],arm:"CapCut, 12–15 s, ritmo lento, texto o voz en off.",
  dv:"Reel manifiesto: algo hecho con cuidado, distinto, pensado para quien lo recibe.",
  cp:"Este año, regalá algo que tenga historia.\nCada Saritos se elige, se arma y se envuelve a mano, para que quien lo reciba sienta que lo pensaste de verdad 🤍\n\nSe viene la temporada de regalos. Activá notificaciones.",cta:"Activar notificaciones · compartir"},
 {id:"f2",f:"2026-11-12",fm:"Carrusel",pl:"venta",o:"Vender",ses:"S1",tipo:"Fotoproducto",t:"Regalos por rango de precio",h:"Tenemos un regalo para cada presupuesto.",
  tomas:["Reutiliza el fotoproducto de las sesiones 1 y 2"],arm:"Canva, 5 slides: hasta $A, hasta $B, más de $B, cierre.",
  dv:"Tres bloques de precio con 2 o 3 piezas cada uno. Última: “Todos salen listos para regalar”.",
  cp:"¿Cuánto querés gastar? Te ayudamos a elegir 🎁\nDeslizá y encontrá el regalo perfecto según tu presupuesto.\n\nEscribinos REGALO por WhatsApp.",cta:"Palabra clave REGALO · guardar"},
 {id:"f3",f:"2026-11-14",fm:"Post",pl:"venta",o:"Vender",ses:"S0",tipo:"Diseño gráfico",t:"Black Saritos se viene: sumate a la lista VIP",h:"Las VIP compran 24 horas antes.",
  tomas:["No necesita fotos"],arm:"Canva, pieza única 4:5 en cacao: “Black Saritos · 23 al 27 de noviembre · Lista VIP”.",
  dv:"Quienes se suman por WhatsApp reciben la promo 24 h antes y eligen primero.",
  cp:"Black Saritos llega el 23 de noviembre 🖤\nSi te sumás a la lista VIP, te mandamos la promo 24 horas antes que a nadie.\n\nEscribinos VIP por WhatsApp y listo.",cta:"Palabra clave VIP por WhatsApp"}
 ]},
{id:"g",mes:"nov",r:"16 – 22 nov",t:"Calentando Black Friday",a:"Dos sesiones esta semana (lunes y sábado). Generar expectativa y sumar gente a la lista VIP.",kw:"VIP",
 st:["Lun: detrás de escena de la sesión 3 + “Falta una semana”","Mar: stock nuevo llegando","Mié: cuántas personas ya están en la lista VIP (dato real)","Jue: look de fiesta de fin de año","Vie: pistas de la promo","Sáb: detrás de escena de la sesión 4","Dom 22: “Hoy a la noche la lista VIP recibe la promo”"],
 p:[
 {id:"g1",f:"2026-11-17",fm:"Reel",pl:"marca",o:"Confianza",ses:"S3",tipo:"Detrás de escena",t:"Preparando todo para fin de año",h:"Así se ve mi mesa a un mes de Navidad.",
  tomas:["Llegada del stock, cajas abriéndose","Cajitas y bolsas nuevas","Organizando pedidos en la mesa"],arm:"CapCut, 10–15 s, texto corto.",
  dv:"La marca lista para la temporada: stock, packaging y regalitos.",
  cp:"Se viene la temporada más linda (y más movida) del año 🎄\nYa llegaron las cajitas y el stock nuevo.\n\n¿Qué te gustaría encontrar en Black Saritos? Te leo.",cta:"Comentar · sumarse a la lista VIP"},
 {id:"g2",f:"2026-11-19",fm:"Carrusel",pl:"estilo",o:"Atraer",ses:"S3",tipo:"Foto puesta + fotoproducto",t:"Aros para cada evento de fin de año",h:"Diciembre tiene muchos eventos. Y un aro para cada uno.",
  tomas:["Aros de fiesta con copa y lucecitas","2 o 3 looks puestos: fiesta de trabajo, cena familiar, brindis","Sirven también las fotos de aros de fiesta que ya tenés"],arm:"Canva, 6 slides: portada + un evento por slide con pieza, precio y tip de look.",
  dv:"Fiesta de la empresa, egresos o recibida, cena de Navidad, Año Nuevo, amigo invisible.",
  cp:"Fiesta de fin de año, cena con la familia, brindis con amigas… 🥂\nTe armamos un aro para cada plan.\n\nGuardalo para diciembre y escribinos REGALO si querés reservar el tuyo.",cta:"Guardar · palabra clave REGALO"},
 {id:"g3",f:"2026-11-21",fm:"Reel",pl:"venta",o:"Vender",ses:"S3",tipo:"Video + diseño",t:"Faltan 2 días para Black Saritos",h:"La lista VIP se cierra mañana.",
  tomas:["Piezas apareciendo una por una sobre fondo oscuro"],arm:"CapCut, 7–8 s, números 2… 1… y texto “Las VIP eligen primero”.",
  dv:"Cuenta regresiva visual.",
  cp:"Faltan 2 días para Black Saritos 🖤\nLa lista VIP recibe la promo el domingo 22 a la noche, un día antes que el resto.\n\nÚltima chance: escribinos VIP por WhatsApp.",cta:"Palabra clave VIP"}
 ]},
{id:"h",mes:"nov",r:"23 – 29 nov",t:"Black Saritos (23 – 27 nov)",a:"Semana de venta fuerte. Todo lo posible queda programado de antemano, así las dos se concentran en responder y despachar.",kw:"BLACK",
 st:["Todos los días: 2 o 3 historias de piezas con precio promo y link","Lun: “Arrancó” + condiciones","Mar: pedidos saliendo","Mié: “los más elegidos” (datos reales)","Jue: stock que queda","Vie 27: cuenta regresiva de las últimas horas","Dom: gracias + adelanto de combos navideños"],
 p:[
 {id:"h1",f:"2026-11-23",fm:"Carrusel",pl:"venta",o:"Vender",ses:"S3",tipo:"Diseño + fotoproducto",t:"Arrancó Black Saritos",h:"Cinco días. Precios que no vuelven.",
  tomas:["Reutiliza fotoproducto de la sesión 3"],arm:"Canva, plantilla Black en cacao: portada, piezas con precio antes y después, condiciones.",
  dv:"Promo (descuento o combos), piezas incluidas, condiciones claras: medios de pago, stock limitado, envíos.",
  cp:"Black Saritos empezó 🖤\n[Descuento / combos] hasta el viernes 27 o hasta agotar stock.\n\nEscribinos BLACK por WhatsApp y te pasamos todo.",cta:"Palabra clave BLACK"},
 {id:"h2",f:"2026-11-25",fm:"Reel",pl:"comunidad",o:"Vender",ses:"DIA",tipo:"Video del día",t:"Los más elegidos de la Black",h:"Esto es lo que más se están llevando.",
  tomas:["Grabar el martes 24: las 3 o 4 piezas más vendidas con cajitas de fondo"],arm:"CapCut, 8–10 s, texto con unidades que quedan (datos reales).",
  dv:"Prueba social en tiempo real.",
  cp:"Mitad de semana y estos son los favoritos de Black Saritos 🔥\nDe algunos quedan muy pocas unidades.\n\nEscribinos BLACK antes de que se agoten.",cta:"Palabra clave BLACK"},
 {id:"h3",f:"2026-11-27",fm:"Reel",pl:"venta",o:"Vender",ses:"S3",tipo:"Video vertical",t:"Último día de Black Saritos",h:"Hoy a la medianoche se termina.",
  tomas:["Piezas pasando rápido sobre fondo oscuro","Cierre con el packaging"],arm:"CapCut, 7–8 s, texto “Últimas horas”. Dejarlo programado desde el sábado 21.",
  dv:"Publicar a la mañana y repetir en historias a la tarde y a la noche.",
  cp:"Último día de Black Saritos ⏳\nA la medianoche vuelven los precios de siempre.\n\nEscribinos BLACK por WhatsApp y te respondemos al toque.",cta:"Palabra clave BLACK"},
 {id:"h4",f:"2026-11-29",fm:"Post",pl:"comunidad",o:"Confianza",ses:"DIA",tipo:"Foto del día",t:"Gracias, sarilovers",h:"Qué semana hicimos juntas.",
  tomas:["Foto de la pila de pedidos o de la mesa con cajitas, el sábado 28"],arm:"Foto única 4:5.",
  dv:"Agradecimiento y adelanto de lo que viene.",
  cp:"Gracias por esta semana increíble 🤍\nYa estamos preparando cada pedido con el mismo cuidado de siempre.\n\nY se viene algo lindo: combos navideños con regalito incluido. Te contamos el martes.",cta:"Activar notificaciones"}
 ]},
{id:"i",mes:"dic",r:"30 nov – 6 dic",t:"Gift Guide de Navidad",a:"Guía de regalos, combos navideños con regalito y 10% para la próxima compra.",kw:"NAVIDAD",
 st:["Lun: encuesta “¿A quién le tenés que regalar?”","Mar: Gift Guide en historias, una por persona","Mié: el regalito sorpresa de los combos","Jue: calendario de envíos en historias","Vie: pedidos saliendo","Sáb: destacado nuevo “Navidad”"],
 p:[
 {id:"i1",f:"2026-12-01",fm:"Carrusel",pl:"venta",o:"Vender",ses:"S4",tipo:"Fotoproducto con props",t:"Gift Guide Saritos",h:"Un regalo para cada persona de tu lista.",
  tomas:["Una foto por destinataria (6), con un prop que la represente","Portada con ramitas y luces"],arm:"Canva, 8 slides: portada, 6 destinatarias, cierre.",
  dv:"Mamá, hermana, mejor amiga, amiga invisible, suegra, para vos.",
  cp:"Nuestra Gift Guide de Navidad 🎄\nTachá nombres de tu lista con un solo mensaje.\n\nEscribinos NAVIDAD por WhatsApp y armamos tus regalos juntas.",cta:"Palabra clave NAVIDAD · compartir"},
 {id:"i2",f:"2026-12-03",fm:"Reel",pl:"venta",o:"Vender",ses:"S4",tipo:"Video unboxing",t:"Combos navideños con regalito",h:"Comprás tus regalos y también hay uno para vos.",
  tomas:["Unboxing del combo: aros, regalito sorpresa y tarjeta con el 10%","Plano final del combo sobre fondo papel"],arm:"CapCut, 12–15 s.",
  dv:"Mostrar qué trae el combo y el beneficio para la próxima compra.",
  cp:"Combos navideños 🎁\nCada combo incluye un regalito sorpresa y un 10% de descuento para tu próxima compra.\n\nEscribinos NAVIDAD por WhatsApp.",cta:"Palabra clave NAVIDAD"},
 {id:"i3",f:"2026-12-05",fm:"Carrusel",pl:"confianza",o:"Confianza",ses:"S0",tipo:"Diseño gráfico",t:"Cómo recibir tu regalo a tiempo",h:"Fechas clave para que llegue antes del 24.",
  tomas:["No necesita fotos; hacen falta las fechas reales de envío"],arm:"Canva, calendario visual en 4 slides.",
  dv:"Último día de envío al interior, en Córdoba, días y horarios de retiro, cierre por fiestas.",
  cp:"Para que tu regalo llegue a tiempo, agendá estas fechas 📅\nGuardalo y que no te agarre el 23 a la noche.\n\nCualquier duda, escribinos NAVIDAD.",cta:"Guardar · palabra clave NAVIDAD"}
 ]},
{id:"j",mes:"dic",r:"7 – 13 dic",t:"Amigo invisible y razones para regalar",a:"Capturar el regalo de amigo invisible y reforzar la confianza con prueba social.",kw:"NAVIDAD",
 st:["Lun: “¿Te tocó amigo invisible? Te ayudo” (caja de preguntas)","Mar: respuestas con piezas por presupuesto","Mié: repost de clientas","Jue: stock que queda","Vie: empaquetando pedidos","Sáb: recordatorio de fecha límite"],
 p:[
 {id:"j1",f:"2026-12-08",fm:"Reel",pl:"estilo",o:"Vender",ses:"S4",tipo:"Video vertical",t:"Amigo invisible resuelto",h:"Te tocó amigo invisible y tenés presupuesto de $X.",
  tomas:["3 piezas dentro del presupuesto, una por una, con su cajita"],arm:"CapCut, 10 s, precio en pantalla.",
  dv:"Formato “mostrame qué regalar con $X”.",
  cp:"Amigo invisible resuelto 🎁\nRegalos lindos, distintos y listos para regalar, dentro de tu presupuesto.\n\nEscribinos NAVIDAD por WhatsApp.",cta:"Palabra clave NAVIDAD · mandar al grupo"},
 {id:"j2",f:"2026-12-10",fm:"Reel",pl:"comunidad",o:"Confianza",ses:"DIA",tipo:"Fotos de clientas",t:"Así los usan las sarilovers",h:"Ellas los eligieron. Mirá cómo los usan.",
  tomas:["Fotos de clientas con permiso, juntadas desde octubre en la carpeta CLIENTAS"],arm:"CapCut, 1 s por foto.",
  dv:"Compilado en distintos contextos.",
  cp:"Nada nos gusta más que verlos puestos 🤍\nGracias a todas las que nos mandan sus fotos.\n\n¿Querés aparecer en el próximo? Etiquetanos.",cta:"Etiquetar a Saritos"},
 {id:"j3",f:"2026-12-12",fm:"Carrusel",pl:"marca",o:"Confianza",ses:"S4",tipo:"Foto + diseño",t:"5 razones para regalar Saritos",h:"Por qué un Saritos es el regalo que se recuerda.",
  tomas:["Manos escribiendo una tarjeta","Cajita cerrada con cinta","Pieza en detalle"],arm:"Canva, 7 slides.",
  dv:"Piezas distintas; elegidas y armadas a mano; llegan listas para regalar; tarjeta escrita a mano; atención personal por WhatsApp.",
  cp:"¿Por qué regalar Saritos?\nPorque no es un regalo más, es uno que se nota que pensaste 🤍\n\nEscribinos NAVIDAD y armamos el tuyo.",cta:"Palabra clave NAVIDAD · guardar"}
 ]},
{id:"k",mes:"dic",r:"14 – 20 dic",t:"Urgencia: últimos días para recibir",a:"Fechas límite de envío y stock que se agota.",kw:"NAVIDAD",
 st:["Todos los días: cuenta regresiva al último día de envíos","Mar: stock que queda de cada pieza","Mié: pila de pedidos","Jue: “Mañana es el último día de envíos”","Vie: “Hoy último día de envíos”","Sáb: horarios de retiro de la semana que viene"],
 p:[
 {id:"k1",f:"2026-12-14",fm:"Post",pl:"venta",o:"Vender",ses:"S0",tipo:"Diseño gráfico",t:"Últimos días para recibir tu regalo",h:"Todavía llegás, pero no por mucho.",
  tomas:["No necesita fotos"],arm:"Canva, pieza única con la fecha límite grande.",
  dv:"“Después: solo retiro en Córdoba”.",
  cp:"Últimos días para recibir tu regalo antes de Navidad 🎄\nÚltimo día de envíos: [fecha].\n\nEscribinos NAVIDAD por WhatsApp y lo despachamos.",cta:"Palabra clave NAVIDAD"},
 {id:"k2",f:"2026-12-16",fm:"Reel",pl:"deseo",o:"Vender",ses:"DIA",tipo:"Video del día",t:"Quedan pocas unidades",h:"Estas son las últimas.",
  tomas:["Grabar el martes 15: piezas con pocas unidades con cartelito “quedan 2”, “última”"],arm:"CapCut, 8 s. Solo datos reales de stock.",
  dv:"Stock que se agota.",
  cp:"De estos quedan muy pocos 🤍\nSi tenías uno en la mira, este es el momento.\n\nEscribinos NAVIDAD por WhatsApp.",cta:"Palabra clave NAVIDAD"},
 {id:"k3",f:"2026-12-18",fm:"Carrusel",pl:"venta",o:"Vender",ses:"S4",tipo:"Diseño + fotoproducto",t:"Último día de envíos",h:"Hoy es el último día para que llegue a tiempo.",
  tomas:["Reutiliza fotoproducto de la sesión 4"],arm:"Canva, 5 slides.",
  dv:"Portada “Último día de envíos”, piezas disponibles, “Desde mañana, retiro en Córdoba hasta el 23”.",
  cp:"Hoy es el último día de envíos para Navidad ⏳\nDesde mañana podés retirar en Córdoba hasta el miércoles 23.\n\nEscribinos NAVIDAD ya.",cta:"Palabra clave NAVIDAD"},
 {id:"k4",f:"2026-12-20",fm:"Reel",pl:"marca",o:"Confianza",ses:"DIA",tipo:"Detrás de escena",t:"Maratón de pedidos",h:"Así se ve una semana antes de Navidad en Saritos.",
  tomas:["Time-lapse de la mesa empaquetando pedidos, grabado durante la semana"],arm:"CapCut, 10 s.",
  dv:"Tono cálido y de agradecimiento.",
  cp:"Una semana a puro papel, cinta y tarjetas escritas a mano 🎁\nGracias por elegirnos para regalar.\n\nTodavía podés retirar en Córdoba hasta el 23.",cta:"Escribir por WhatsApp para retiro"}
 ]},
{id:"l",mes:"dic",r:"21 – 27 dic",t:"Último minuto + Navidad",a:"Retiro de último minuto, saludo navideño y looks para Año Nuevo.",kw:"RETIRO",
 st:["Lun a mié: horarios y punto de retiro, todos los días","Mié 23: “Último día de retiro”","Jue 24: saludo","Vie 25: repost de clientas que etiqueten sus regalos","Sáb: pregunta “¿Qué te regalaron?”"],
 p:[
 {id:"l1",f:"2026-12-21",fm:"Carrusel",pl:"venta",o:"Vender",ses:"S4",tipo:"Fotoproducto + diseño",t:"Regalos de último minuto",h:"Olvidaste un regalo. Te lo solucionamos hoy.",
  tomas:["Reutiliza fotoproducto de la sesión 4"],arm:"Canva, 4 slides con piezas disponibles y horarios de retiro.",
  dv:"Piezas para retiro inmediato con precio, zona, días y horarios.",
  cp:"¿Te falta un regalo? Tranqui 😌\nTenemos piezas listas y envueltas para retirar en Córdoba hasta el miércoles 23.\n\nEscribinos RETIRO por WhatsApp y coordinamos.",cta:"Palabra clave RETIRO"},
 {id:"l2",f:"2026-12-23",fm:"Reel",pl:"venta",o:"Vender",ses:"S4",tipo:"Video vertical",t:"Todavía llegás",h:"Último día para retirar tu regalo.",
  tomas:["Cajita envuelta pasando de mano en mano"],arm:"CapCut, 6–8 s, texto “Hoy último día de retiro · hasta las [hora]”.",
  dv:"Urgencia amable.",
  cp:"Último día para retirar tu regalo de Navidad 🎄\nHasta las [hora] en Córdoba.\n\nEscribinos RETIRO por WhatsApp.",cta:"Palabra clave RETIRO"},
 {id:"l3",f:"2026-12-24",fm:"Post",pl:"marca",o:"Confianza",ses:"S4",tipo:"Foto de marca",t:"Feliz Navidad",h:"Gracias por hacer de este año algo especial.",
  tomas:["Una pieza entre luces o ramitas"],arm:"Foto única 4:5. Programar el 22 para que nadie tenga que subir nada el 24.",
  dv:"Sin venta.",
  cp:"Feliz Navidad, sarilovers 🤍\nGracias por cada mensaje, cada foto y cada regalo que eligieron con nosotras.\n\nQue esta noche brille.",cta:"Sin llamado a la venta"},
 {id:"l4",f:"2026-12-26",fm:"Reel",pl:"estilo",o:"Atraer",ses:"S4",tipo:"Video con modelo",t:"¿Te regalaron Saritos? Así los combinás",h:"Si ayer abriste una cajita Saritos, esto es para vos.",
  tomas:["3 looks con las piezas más vendidas de la temporada, pensando en Año Nuevo"],arm:"CapCut, 12 s.",
  dv:"Termina con “¿Y vos cuál recibiste?”.",
  cp:"Si ayer abriste un Saritos, bienvenida al club 🤍\nTe dejamos tres ideas para estrenarlo en Año Nuevo.\n\nMostranos cuál te regalaron.",cta:"Comentar · etiquetar"}
 ]},
{id:"m",mes:"dic",r:"28 dic – 3 ene",t:"Brillá en 2027",a:"Aros de fiesta para Año Nuevo, saludo y resumen del año.",kw:"BRILLA",
 st:["Lun: encuesta “¿Look dorado o plateado para el 31?”","Mar: aros de fiesta disponibles","Mié: “último día de retiro del año”","Jue 31: saludo y brindis","Sáb: caja de preguntas “¿Qué querés ver de Saritos en 2027?”"],
 p:[
 {id:"m1",f:"2026-12-28",fm:"Carrusel",pl:"estilo",o:"Atraer",ses:"S3",tipo:"Foto puesta",t:"Tu look de Año Nuevo según tu estilo",h:"Para el 31, que hablen tus aros.",
  tomas:["Reutiliza los looks de fiesta de la sesión 3"],arm:"Canva, 6 slides: portada, 4 estilos, cierre.",
  dv:"Clásica, audaz, minimal, bohemia: un look de Año Nuevo y el aro que lo completa.",
  cp:"Tu look del 31 empieza por las orejas ✨\nDeslizá, encontrá tu estilo y guardalo.\n\nEscribinos BRILLA por WhatsApp si querés el tuyo antes del jueves.",cta:"Palabra clave BRILLA · guardar"},
 {id:"m2",f:"2026-12-30",fm:"Reel",pl:"venta",o:"Vender",ses:"S4",tipo:"Video vertical",t:"Brillá en 2027",h:"Último día para tener tus aros de Año Nuevo.",
  tomas:["Aros de fiesta en movimiento con destellos de lucecitas reales y una copa de fondo"],arm:"CapCut, 8 s, texto “Retiro hasta mañana a las [hora]”.",
  dv:"Brillo y fiesta.",
  cp:"Brillá en 2027 ✨\nLos aros de fiesta que quedan, listos para retirar en Córdoba hasta mañana.\n\nEscribinos BRILLA.",cta:"Palabra clave BRILLA"},
 {id:"m3",f:"2026-12-31",fm:"Post",pl:"marca",o:"Confianza",ses:"S4",tipo:"Foto de marca",t:"Gracias, 2026",h:"Brindamos por vos.",
  tomas:["Foto festiva y sencilla: aros con copa"],arm:"Foto única 4:5. Programar el 29.",
  dv:"Mensaje de cierre de año.",
  cp:"Gracias por este año, sarilovers 🥂\nPor cada pedido, cada foto y cada mensaje lindo.\n\nQue en 2027 brilles mucho (y con buenos aros).",cta:"Sin llamado a la venta"},
 {id:"m4",f:"2027-01-02",fm:"Carrusel",pl:"comunidad",o:"Confianza",ses:"DIA",tipo:"Recopilación",t:"Recap 2026 de Saritos",h:"Así fue nuestro año.",
  tomas:["Fotos del año: lo más vendido, clientas, detrás de escena, los 1000 si se llegó"],arm:"Canva, 8 slides.",
  dv:"Última slide: “¿Qué querés ver en 2027?”.",
  cp:"Así fue 2026 en Saritos 🤍\nGracias por ser parte de cada paso.\n\nContanos en comentarios: ¿qué te gustaría ver de Saritos en 2027?",cta:"Comentar ideas para 2027"}
 ]}
];

export const TASKS=[
 ["t1","2026-09-30","Crear la carpeta compartida en Drive","Con la estructura de “Cómo trabajamos”, compartida con Emi como editora."],
 ["t2","2026-09-30","Dar accesos a Emi","Instagram en Meta Business Suite, Canva (equipo o carpeta compartida) y WhatsApp Business vinculado en su compu."],
 ["t3","2026-10-01","Escribir las políticas de envío, retiro y cambios","Tiempos y costo de envío, zona y horario de retiro, cambios. Se usan en “Cómo comprar” y en preguntas frecuentes."],
 ["t4","2026-10-02","Comprar cajitas, papel de seda y tarjetas","Tienen que estar para la sesión del 5: el packaging es el diferencial de Día de la Madre."],
 ["t5","2026-10-03","Armar las plantillas de Canva","Carrusel 4:5, portada de reel e historia 9:16. Con ellas cualquiera arma una pieza en 15 minutos."],
 ["t6","2026-10-04","Crear destacados de Instagram","Cómo comprar, Envíos y retiro, Sarilovers, Cuidados."],
 ["t7","2026-10-04","Guardar respuestas rápidas en WhatsApp Business","Una por palabra clave (PRIMAVERA, MAMÁ…), con precios y alias, para que las dos respondan igual."],
 ["t8","2026-10-05","Fijar la fecha límite de envíos de Día de la Madre","Según tu correo. Se publica el 12 y el 13 de octubre."],
 ["t9","2026-10-19","Pedir permiso y juntar fotos de clientas","“¿Me dejás compartir tu foto con los Saritos?”. Material para 3 publicaciones."],
 ["t10","2026-10-24","Armar los Combos Verano y definir precio y beneficio","Tienen que estar armados para la sesión del 26."],
 ["t11","2026-11-06","Comprar stock para noviembre y diciembre","Tiene que llegar antes de la sesión del 16 de noviembre."],
 ["t12","2026-11-09","Armar la lista VIP de WhatsApp","Etiqueta “VIP” o lista de difusión. La promo sale el 22 a la noche."],
 ["t13","2026-11-13","Definir la promo de Black Saritos","Descuento o combos, piezas, condiciones y stock."],
 ["t14","2026-11-16","Comprar los regalitos para los combos navideños","Tienen que estar para la sesión del 21."],
 ["t15","2026-11-19","Imprimir tarjetas con 10% para la próxima compra","Código simple (ej. VUELVE10) con vencimiento en febrero."],
 ["t16","2026-11-21","Programar toda la semana de Black","Dejar cargadas en Meta Business Suite las piezas del 23, 27 y 29 antes de que arranque."],
 ["t17","2026-11-27","Definir fechas límite de envío y retiro de Navidad","Se publican el 5 y el 14 de diciembre."],
 ["t18","2027-01-02","Revisar resultados de la temporada","Qué palabra clave vendió más, qué formato tuvo más guardados, qué pieza se agotó."]
];

const h=(s)=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

// Contenido fijo de las pestañas "Cómo trabajamos" y "Estrategia"
export const HOW_HTML=`
<div class="sec"><span class="eyebrow">La regla</span><h2>Ninguna publicación depende de una sola persona</h2>
<p>Todo lo que se sube vive en una carpeta compartida y en esta página. Cada publicación dice qué tomas hacen falta, cómo se arma, el copy y en qué carpeta va. Cualquiera de las dos puede tomar cualquier paso: toca su nombre en la publicación y la otra ve que está tomado. Lo que llega a “Listo para subir” se programa en Meta Business Suite con dos días de anticipación, así si una se enferma o viaja, igual sale.</p></div>

<div class="sec"><span class="eyebrow">Paso a paso</span><h2>De la foto a la publicación</h2>
<ol class="plain">
<li><b>Sesión de fotos.</b> Seguir la lista de la pestaña “Sesiones de fotos”. En un día sale el material de varias semanas.</li>
<li><b>Subir el material crudo</b> el mismo día a <code>01_CRUDO/</code>, en la carpeta de la sesión.</li>
<li><b>Editar</b> con el estilo Saritos de abajo, o pasándome las fotos a mí. Lo editado va a <code>02_EDITADO/</code>.</li>
<li><b>Armar.</b> Carrusel en Canva con la plantilla, reel en CapCut. Se exporta a la carpeta de la publicación en <code>03_LISTO-PARA-SUBIR/</code>, con un <code>copy.txt</code> que tiene el texto de esta página. Marcar “Listo para subir”.</li>
<li><b>Programar</b> en Meta Business Suite con fecha y hora. Marcar “Programado”.</li>
<li><b>Publicado.</b> Ese día, quien tenga el turno comparte en historias y responde comentarios. La carpeta pasa a <code>04_PUBLICADO/</code>.</li>
</ol></div>

<div class="sec"><span class="eyebrow">Carpeta compartida en Drive</span><h2>Dónde va cada cosa</h2>
<div class="tree">SARITOS-CONTENIDO/
├─ 00_PLANTILLAS/          links de Canva, preset de edición, logos
├─ 01_CRUDO/
│  ├─ S1-2026-10-05_primavera/
│  ├─ S2-2026-10-26_verano/
│  ├─ S3-2026-11-16_fin-de-ano/
│  └─ S4-2026-11-21_navidad/
├─ 02_EDITADO/             misma estructura que 01_CRUDO
├─ 03_LISTO-PARA-SUBIR/
│  └─ 2026-10-08_carrusel_lo-que-llego-coleccion-primav/
│     ├─ 01.jpg  02.jpg  …  (en el orden del carrusel)
│     ├─ portada.jpg         (solo reels)
│     └─ copy.txt
├─ 04_PUBLICADO/
└─ CLIENTAS/               fotos de clientas con permiso</div>
<p class="note">Cada publicación trae el nombre exacto de su carpeta en “Tomas, armado, guion y copy”. Hoy tus fotos están en tu compu: para que Emi pueda trabajar, el material tiene que estar en Drive.</p></div>

<div class="sec"><span class="eyebrow">Para que todo se vea Saritos</span><h2>Estilo de fotos y edición</h2>
<div class="tbl"><table><tbody>
<tr><th>Luz</th><td>Natural, de ventana lateral, entre las 10 y las 12 o en día nublado. Nunca flash ni luz de techo.</td></tr>
<tr><th>Fondos</th><td>Papel, arena, lino o madera clara. Para Black y Año Nuevo, cacao u oscuro.</td></tr>
<tr><th>Color</th><td>Cálido y suave, poca saturación, sombras levantadas. El mismo preset para todas las fotos. Sin filtros de Instagram.</td></tr>
<tr><th>Tamaños</th><td>Feed 1080 × 1350 (4:5). Reels e historias 1080 × 1920 (9:16). En la portada del reel, lo importante va en el centro, porque en el perfil se ve recortada.</td></tr>
<tr><th>Tipografía</th><td>Títulos en Cormorant Garamond, textos en Jost. Colores de la web: papel #F8F6F3, arena #EDE9E3, cacao #1A3A5C, carao #2E6DA4, flor #A0BFDA.</td></tr>
<tr><th>Texto en pantalla</th><td>Máximo 7 palabras por pantalla en reels. Siempre con subtítulos si se habla.</td></tr>
</tbody></table></div></div>

<div class="sec"><span class="eyebrow">Si no hay tiempo de editar</span><h2>Pasame las fotos a mí</h2>
<p>Después de cada sesión, subí las fotos crudas a <code>01_CRUDO/</code> y avisame en el chat, o adjuntalas directamente. Te devuelvo:</p>
<ul class="plain"><li>Las mejores tomas elegidas para cada publicación</li><li>Recortes en 4:5 y 9:16 con color y luz parejos</li><li>Los carruseles armados con la tipografía y los colores de Saritos, numerados y listos para subir</li><li>El copy de cada uno en su <code>copy.txt</code></li></ul>
<p class="note">Lo que no puedo hacer es publicar ni programar en Instagram: ese paso lo hace Emi o Camila en Meta Business Suite.</p></div>

<div class="sec"><span class="eyebrow">Propuesta para arrancar, ajustala</span><h2>Quién hace qué</h2>
<div class="tbl"><table><thead><tr><th>Tarea</th><th>Principal</th><th>Respaldo</th><th>Por qué</th></tr></thead><tbody>
<tr><td>Sesiones de fotos</td><td>Camila</td><td>Emi</td><td>Camila tiene los productos. Con la lista de tomas, Emi puede hacerla igual.</td></tr>
<tr><td>Edición</td><td>Emi o Claude</td><td>Camila</td><td>Libera a quien hizo la sesión.</td></tr>
<tr><td>Armado en Canva y CapCut</td><td>Emi</td><td>Camila</td><td>Con plantillas, cualquiera arma una pieza en 15 minutos.</td></tr>
<tr><td>Programar</td><td>Quien la deja lista</td><td>La otra</td><td>La pieza no espera a nadie.</td></tr>
<tr><td>Historias diarias</td><td colspan="2">Turnos semanales alternados: una semana Camila, la siguiente Emi</td><td>Nadie las hace todos los días.</td></tr>
<tr><td>WhatsApp</td><td colspan="2">Las dos, con las mismas respuestas rápidas por palabra clave</td><td>La clienta recibe la misma información conteste quien conteste.</td></tr>
</tbody></table></div></div>

<div class="sec"><span class="eyebrow">Antes de marcar “Listo para subir”</span><h2>Checklist de 30 segundos</h2>
<ol class="plain">
<li>Archivos en el tamaño correcto y numerados en orden.</li>
<li><code>copy.txt</code> con el texto final: precios, fechas y palabra clave completos, sin corchetes.</li>
<li>Reels: portada elegida y audio anotado en el <code>copy.txt</code>.</li>
<li>Historias del día anotadas (están en cada semana).</li>
<li>Horario: martes, jueves y sábado entre las 19 y las 21 como punto de partida. Después se ajusta según las estadísticas.</li>
</ol></div>`;

export const EST_HTML=`
<div class="sec"><span class="eyebrow">Posicionamiento</span><h2>Qué tiene que sentir quien ve Saritos</h2>
<p><b>Saritos es la marca de aros grandes y asimétricos para mujeres que usan los accesorios como firma personal.</b> Cada pieza se elige, se arma y se envuelve a mano en Córdoba, y se compra fácil y con trato humano por WhatsApp.</p>
<p>El contenido repite tres ideas: <b>piezas distintas</b>, <b>hechas con cuidado</b> y <b>compra sin riesgo</b>.</p></div>
<div class="sec"><span class="eyebrow">A quién le hablamos</span><h2>La clienta Saritos</h2>
<div class="grid2"><p><b>La que se compra a sí misma.</b> Entre 25 y 45 años, busca algo que la distinga. La atraen el contenido de estilo y los lanzamientos.</p><p><b>La que busca un regalo distinto.</b> Tiene que regalar y no quiere lo de siempre. La convencen el packaging, las fechas límite claras y la guía por perfil. Es la protagonista de octubre a diciembre.</p></div></div>
<div class="sec"><span class="eyebrow">Pilares de contenido</span><h2>Seis temas que se alternan</h2>
<div class="pillars">${Object.values(PILARES).map(p=>`<div class="pillar"><h3><span class="dot" style="background:${p.c}"></span>${h(p.n)}</h3><span class="pct">≈ ${p.pct} del contenido</span><p>${h(p.d)}</p></div>`).join("")}</div></div>
<div class="sec"><span class="eyebrow">Mezcla por objetivo</span><h2>Atraer, dar confianza, vender</h2>
<div class="mix"><div style="flex:30;background:var(--p-estilo)">Atraer · 30%</div><div style="flex:30;background:var(--p-confianza)">Confianza · 30%</div><div style="flex:40;background:var(--p-deseo)">Vender · 40%</div></div>
<p class="note">La venta sube a 40% porque este período concentra Día de la Madre, Black Friday y Navidad. En enero conviene volver a 40% atraer, 30% confianza y 30% vender.</p></div>
<div class="sec"><span class="eyebrow">Palabras clave por WhatsApp</span><h2>Cómo medir qué vende</h2>
<p>Cada campaña tiene su palabra (PRIMAVERA, MAMÁ, VERANO, VIP, BLACK, NAVIDAD, RETIRO, BRILLA). Anotá cada semana: <b>mensajes por palabra, ventas cerradas y pieza vendida</b>. Con eso se sabe qué repetir.</p></div>
<div class="sec"><span class="eyebrow">Banco de ganchos</span><h2>Primeras frases para cualquier reel</h2>
<ul class="hooks"><li>Si tus aros no se notan, no son Saritos.</li><li>El accesorio que hace el look sin cambiarte la ropa.</li><li>Esto es lo que pasa cuando un aro no es igual al otro.</li><li>Tres formas de usar el mismo par.</li><li>El regalo que nadie más le va a hacer.</li><li>Así llega tu pedido (mirá hasta el final).</li><li>Lo que me preguntan todos los días por WhatsApp.</li><li>No lo digo yo, lo dicen ellas.</li><li>Quedan dos. Después, no vuelven.</li><li>POV: abriste tu primer Saritos.</li></ul></div>
<div class="sec"><span class="eyebrow">Comodín</span><h2>Sorteo 1000 sarilovers</h2>
<div class="sorteo">
<p><b>Cuándo:</b> apenas lleguen a 1000. Si cae en la semana de Black (23–27 nov) o en los días antes de Navidad, esperar a la semana siguiente. Mejores ventanas: del 19 de octubre al 1 de noviembre, o del 9 al 15 de noviembre.</p>
<p><b>Empujón previo:</b> cuando falten 50, historias diarias con “Estamos a X de ser 1000” y “¿Qué querés que sorteemos?”.</p>
<p><b>Mecánica (5 días):</b> seguir a Saritos, dar me gusta y etiquetar a dos amigas (cada comentario es una chance); compartir en historias suma una chance extra. Premio: un par a elección + packaging. La ganadora se elige al azar en un video en historias.</p>
<p><b>Bases:</b> solo Argentina, mayores de 18, fecha y hora de cierre, y la aclaración de que Instagram no patrocina ni administra el sorteo.</p>
<p><b>Copy:</b> “¡Somos 1000 sarilovers! 🤍 Para festejar, sorteamos un par de Saritos a elección. Para participar: seguinos, dale me gusta y etiquetá a dos amigas (podés comentar todas las veces que quieras). Si lo compartís en historias, sumás una chance extra. Cerramos el [fecha] a las [hora]. Suerte.”</p>
</div></div>`;
