// Publicaciones que ya tienen sus imágenes y texto listos.
// La clave es el id de la publicación en contenidoData.js (ej. "a3" = carrusel del jueves 8 de octubre).
// Las imágenes viven en public/contenido/<carpeta>/.
export const ARCHIVOS = {
  a4: {
    titulo: "Carrusel · ¿Qué le regalo a mamá? Según su estilo",
    fecha: "2026-10-13",
    nombre: "regalos-para-mama",
    carpeta: "/contenido/2026-10-13_regalos-para-mama",
    imagenes: ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg", "09.jpg", "10.jpg"],
    copy: `¿Qué le regalás a mamá este domingo? 💐
Armamos una guía según su estilo: la clásica, la audaz, la minimal, la romántica y la que quiere todo.

Todo está en saritos.com.ar (link en la bio) y hay pocas unidades de cada pieza, así que si ya sabés cuál es, no lo dejes para el sábado.

¿No sabés cuál elegir? Comentá MAMÁ y te ayudamos por DM 🤍

#DiaDeLaMadre #regalosparamama #aros #collares #bijou #accesorios #saritos`,
    historias: [
      "Subirlo el martes 13 a la mañana",
      "Ese día compartirlo en historias con la pregunta “¿Cuál es tu mamá?”",
      "Responder cada comentario MAMÁ por DM con 2 o 3 opciones según lo que cuenten",
    ],
  },
  b4: {
    titulo: "Post · Feliz día a todas las mamás",
    fecha: "2026-10-18",
    nombre: "feliz-dia-mamas",
    carpeta: "/contenido/2026-10-18_feliz-dia-mamas",
    imagenes: ["01.jpg"],
    copy: `Feliz día a todas las mamás 🤍
A las que nos prestaban los aros, a las que nos enseñaron a combinar y a las que siempre dicen “qué lindo eso que tenés puesto”.

Gracias a todas las que eligieron Saritos para regalar esta semana. Nos encanta ser parte.

#DiaDeLaMadre #felizdiamama #saritos`,
    historias: ["Subirlo el domingo 18 a la mañana, junto con la historia “Feliz día, mamás”"],
  },
  a3: {
    titulo: "Carrusel · Lo que llegó: colección Primavera",
    fecha: "2026-10-08",
    nombre: "lo-que-llego",
    carpeta: "/contenido/2026-10-08_lo-que-llego",
    imagenes: ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg"],
    copy: `Colección Primavera 🌿
Aros grandes, livianos y llenos de color, pensados para días largos de sol.

Deslizá y elegí tu favorito. Hay pocas unidades de cada modelo.

🧡 Flores naranjas · $16.000
💚 Media flor verde · $18.000
🤎 Orejas dulce de leche · $20.000
🤍 Verde, dorado y perla · $15.000
🖤 Flores blanca y negra · $20.000
❤️ Collar rojo y pez · $15.000

Escribinos PRIMAVERA por WhatsApp (link en bio) y te reservamos el tuyo.
Y si estás buscando regalo para el Día de la Madre (domingo 18), te ayudamos a elegir.`,
    historias: [
      "Compartir la publicación con el texto “Llegó Primavera 🌿”",
      "Una historia por pieza con el precio y el sticker de enlace a WhatsApp",
      "Caja de preguntas: “¿Cuál te llevás?”",
    ],
  },
};

// Piezas listas que no son una publicación del calendario (historias sueltas, anuncios, etc.).
export const SUELTOS = [
  {
    id: "historias-llego-lo-nuevo",
    titulo: "Historias · Llegó lo nuevo",
    fecha: "2026-10-05",
    nombre: "historias",
    carpeta: "/contenido/2026-10-05_historias-llego-lo-nuevo",
    imagenes: ["01_historia_llego-lo-nuevo.jpg", "02_historia_collage.jpg", "03_historia_tres-fotos.jpg", "05_historia_collage-aros.jpg", "06_historia_collage-collares.jpg"],
    videos: ["04_historia_video.mp4"],
    copy: `Las historias no llevan texto. Al subirlas, agregar el sticker "Enlace" con saritos.com.ar justo debajo de la flechita.`,
    historias: [
      "Orden sugerido: primero el video (con una canción de Instagram), después los collages de aros y de collares",
      "La de tres fotos va última, con una caja de preguntas: “¿Cuál te llevás?”",
    ],
  },
  {
    id: "historias-dia-de-la-madre",
    titulo: "Historias · Día de la Madre (lunes 12 al domingo 18)",
    fecha: "2026-10-12",
    nombre: "historias-mama",
    carpeta: "/contenido/2026-10-13_historias-dia-de-la-madre",
    imagenes: ["01_historia_regalos-para-mama.jpg", "02_historia_encuesta-estilo.jpg", "03_historia_hasta-13000.jpg", "05_historia_todavia-llegas.jpg", "06_historia_feliz-dia-domingo.jpg"],
    videos: ["04_historia_video-para-mama.mp4"],
    copy: `Las historias no llevan texto. En las que dicen “Tocá el link”, agregar el sticker "Enlace" con saritos.com.ar justo debajo de la flechita. En los recuadros punteados va el sticker que se indica (se tapa el recuadro con el sticker).`,
    historias: [
      "Lun 12 o mar 13: 01 Regalos para mamá (con link) + 04 video (con canción de Instagram)",
      "Mar 13: 02 ¿Cómo es tu mamá? con sticker Encuesta de 4 opciones: Clásica / Audaz / Minimal / Romántica. A las que voten, mandarles por DM la pieza de ese estilo",
      "Mié 14: 03 Hasta $13.000 (con link)",
      "Jue 15 a sáb 17: 05 Todavía llegás, con sticker Cuenta regresiva al domingo 18 y link. Se puede repetir cada día",
      "Entre medio: historias del momento con el celu (pedidos que salen, envolviendo regalos)",
      "Dom 18: 06 Feliz día, mamás (sin link)",
    ],
  },
  {
    id: "challenge-mama-con-saritos",
    titulo: "Challenge #MamáConSaritos (post + historias)",
    fecha: "2026-10-16",
    nombre: "challenge-mama",
    carpeta: "/contenido/2026-10-16_challenge-mama-con-saritos",
    imagenes: ["01.jpg", "02.jpg", "03_historia_challenge.jpg", "04_historia_domingo.jpg", "05_historia_plantilla-para-compartir.jpg"],
    copy: `Challenge Día de la Madre 🤍 #MamáConSaritos

Este domingo mostranos a tu mamá con sus Saritos puestos (o una foto de ustedes dos juntas).

Cómo participar:
1. Sacale la foto
2. Subila a tu historia o a tu feed y etiquetanos
3. Usá #MamáConSaritos

Las compartimos todas en nuestras historias. Tienen tiempo hasta el miércoles 21.

¿Tu mamá todavía no tiene? Estás a tiempo: saritos.com.ar (link en la bio)

#DiaDeLaMadre #MamáConSaritos #saritos`,
    historias: [
      "Post (01 y 02 juntas, como carrusel): viernes 16",
      "03 Tu mamá con Saritos: viernes 16 y sábado 17. Ponerle el sticker “Agregá el tuyo” con el texto: Tu mamá con Saritos 🤍 (tapa el recuadro punteado)",
      "04 ¿Ya le sacaste la foto?: domingo 18, después del saludo de Feliz día",
      "05 Plantilla: cada vez que alguien las etiquete, compartir su historia y poner la foto encima del recuadro gris. Hasta el miércoles 21",
      "Contestarle a cada una que participe con un mensaje (y si compró, agradecerle)",
    ],
  },
];
