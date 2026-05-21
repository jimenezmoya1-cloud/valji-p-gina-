# Documento de diseño — Rutina de marketing de Instagram para Valji

**Fecha:** 2026-05-21
**Estado:** Aprobado para planificación
**Origen:** Sesión de brainstorming con el dueño de Valji

---

## 1. Resumen ejecutivo

Construir dos piezas conectadas para convertir el Instagram **@valjicr** en una herramienta de ventas:

1. **`MARCA.md`** — un documento maestro en Markdown que concentra toda la información de la marca Valji (el "cerebro de marca").
2. **`/valji-post`** — una rutina (comando manual) que, en cada corrida, lee el cerebro de marca, intenta revisar Instagram y el banco de fotos, y entrega un **paquete completo de contenido** para un post nuevo: prompt de imagen para ChatGPT, caption, promoción/rifa y logística de publicación.

El objetivo no es "hacer posts bonitos" sino **generar ventas**: cada paquete apunta a una ruta de conversión concreta (WhatsApp, SINPE, carrito web).

---

## 2. Objetivo y resultado esperado

- **Objetivo de negocio:** que la actividad en Instagram se traduzca en ventas medibles para Valji.
- **Resultado al terminar:**
  - Existe un `MARCA.md` completo, preciso y editable.
  - El dueño puede escribir `/valji-post` y recibir, en una sola corrida, todo lo necesario para publicar un post que venda.
  - Cada paquete queda archivado con fecha, de modo que la rutina mejora con el tiempo y no repite ideas.

---

## 3. Contexto de la marca (lo ya conocido)

- **Empresa:** Distribuidora Valji S.A. — nutrición deportiva premium, Costa Rica, desde 1997 (+27 años).
- **Sello:** 100% costarricense, carbono neutro, PYME.
- **Marcas que distribuye:** PowerBar, Muscle Milk, Oikos.
- **Categorías de producto:** proteínas, suplementos (creatina), PowerGel (geles energéticos), electrolitos, barras de proteína, otros (ánfora, gainers, bebidas isotónicas).
- **Rutas de venta:** WhatsApp 8672-4000, SINPE móvil, sitio web con carrito (IVA 13%, códigos promocionales, envío gratis nacional).
- **Público:** clase media-alta y alta de Costa Rica; triatletas, ciclistas, corredores, atletismo, gente de gym y crossfit. Deportistas exigentes.
- **Activos existentes:** este repositorio es el sitio `valjicr.com`. La carpeta `valji-carousel/` ya tiene una filosofía visual definida ("Cadence Editorial": editorial atlética, premium; azul profundo, naranja, negro, crema; tipografía de contraste operático).
- **Tipografías web:** Outfit (display) + Inter (cuerpo).

---

## 4. Decisiones del brainstorming

| Tema | Decisión |
|---|---|
| Activación de la rutina | Comando manual `/valji-post` (lo corre el usuario cuando quiere). |
| Formato del documento maestro | Markdown en el repositorio. |
| Lectura de Instagram | Intento de extracción automática, con respaldo cuando falle. |
| Alcance `/impeccable` | Solo máxima calidad en doc + rutina. No se toca el sitio web. |
| Construcción del prompt de imagen | "Producto real + escena": el prompt indica qué foto de producto subir a ChatGPT como referencia y describe la escena alrededor, para que el empaque quede fiel. |
| Formatos de post soportados | Imagen única, carrusel y reel. La rutina elige el mejor para cada idea. |
| Promociones / rifas | Mecánica completa lista para lanzar (código, descuento, reglas, duración, copy). |
| Banco de fotos | El usuario tiene fotos propias (atletas, tienda, eventos) — irán en `valji-marketing/fotos/`. |

---

## 5. Arquitectura — estructura de archivos

```
valji-marketing/
  MARCA.md                      ← documento maestro (cerebro de marca)
  fotos/                        ← el usuario deja aquí SUS fotos propias
  posts/                        ← cada paquete generado, con fecha (historial)
      2026-05-21-<tema>.md
.claude/skills/valji-post/
  SKILL.md                      ← la rutina /valji-post (orquestación)
  referencias/
      prompt-imagen.md          ← guía para prompts ultrarealistas
      captions-y-hashtags.md    ← fórmulas de caption y banco de hashtags
      promos-y-rifas.md         ← plantillas de promoción y rifa
docs/superpowers/specs/
      2026-05-21-valji-rutina-instagram-design.md   ← este documento
```

- Toda la carpeta `valji-marketing/` es nueva y **no toca el sitio web**.
- La rutina vive como **skill de proyecto** en `.claude/skills/valji-post/`; se invoca escribiendo `/valji-post`.
- `MARCA.md` guarda el conocimiento *estable* de la marca. La carpeta `posts/` guarda el conocimiento *que crece* (historial), para que `MARCA.md` no se infle.

---

## 6. Componente 1 — El documento maestro `MARCA.md`

Documento único en Markdown, escrito extrayendo información del sitio (`index.html`, `app.js`, `style.css`), de `valji-carousel/` y de un intento de captura de `@valjicr`. Nueve secciones:

1. **Identidad de marca** — historia (desde 1997, +27 años), propósito, propuesta de valor única, posicionamiento premium como distribuidor exclusivo.
2. **Público objetivo** — clase media-alta y alta tica; sub-perfiles (triatleta, ciclista, corredor, atletismo, gym/crossfit) con sus motivaciones, dolores, lenguaje y disparadores de compra.
3. **Catálogo** — todas las categorías y productos con **precios** (extraídos de `app.js`), marcas, sabores y el "para quién / para qué" de cada producto. Diferenciadores clave (Cologne List®, opciones veganas).
4. **Identidad visual** — logo (archivos disponibles y uso correcto), **paleta de colores exacta** (extraída de `style.css`), tipografías (Outfit + Inter), estilo de fotografía y la filosofía "Cadence Editorial" ya existente.
5. **Voz y tono** — cómo habla Valji: premium, experta, motivadora, voseo costarricense, sin emojis recargados. Listas de palabras "sí" y "no", con ejemplos.
6. **Canales y rutas de venta** — WhatsApp 8672-4000, SINPE móvil, carrito web, envío gratis nacional. A qué ruta debe empujar cada post.
7. **Pruebas de confianza** — +27 años, 100% costarricense, carbono neutro, PYME, marcas exclusivas, Cologne List®. Los argumentos que cierran ventas.
8. **Instagram @valjicr** — estado actual capturado (lo que se logre extraer; si es limitado, se deja una plantilla para completar a mano), pilares de contenido, qué funciona y errores a evitar.
9. **Banco de promociones e ideas** — tipos de promo y rifa que funcionan, fechas clave del calendario deportivo costarricense (maratones, triatlones, competencias de ciclismo, temporada de gym de inicio de año) e ideas semilla.

---

## 7. Componente 2 — La rutina `/valji-post`

### 7.1 Implementación

- Skill de proyecto en `.claude/skills/valji-post/SKILL.md`.
- `SKILL.md` contiene la **orquestación** (el flujo). El conocimiento de la *marca* vive en `MARCA.md`; el conocimiento del *oficio* (cómo se arma un buen prompt, fórmulas de caption, plantillas de promo) vive en `referencias/`, para mantener `SKILL.md` enfocado.

### 7.2 Flujo paso a paso

Al escribir `/valji-post`:

1. **Carga el cerebro** — lee `MARCA.md` completo.
2. **Revisa el historial** — escanea `posts/` para conocer los temas recientes y no repetirlos; revisa `fotos/` y las fotos de producto del repo.
3. **Intenta leer `@valjicr`** automáticamente (búsqueda web + fetch del perfil). Ver manejo de respaldo en 7.3.
4. **Decide** — tema + objetivo de venta + formato óptimo (imagen / carrusel / reel), rotando respecto a los pilares de contenido recientes.
5. **Genera el paquete completo** (sección 7.4).
6. **Guarda y muestra** — escribe `posts/AAAA-MM-DD-<tema>.md` y presenta el paquete al usuario.

### 7.3 Manejo de Instagram (intento automático + respaldo)

Instagram normalmente bloquea la lectura automática. La rutina:

1. Intenta búsqueda web de actividad reciente de `@valjicr`.
2. Intenta un fetch del perfil público.
3. **Si el resultado es pobre o vacío** (caso esperado la mayoría de las veces): usa el snapshot de Instagram de `MARCA.md` + el historial de `posts/`, y hace **una pregunta corta** al usuario ("¿qué publicaste en los últimos días?").
4. Nunca se cuelga ni inventa datos: degrada con elegancia.

### 7.4 El paquete de salida

Cada corrida produce un archivo `posts/AAAA-MM-DD-<tema>.md` con:

- **A. Encabezado** — fecha, tema, formato elegido, producto/objetivo, ruta de venta.
- **B. Concepto** — el ángulo del post y por qué vende ahora.
- **C. Prompt(s) de imagen para ChatGPT:**
  - Qué foto subir como referencia (ruta exacta del archivo de producto, o foto propia de `fotos/`).
  - Prompt ultra-detallado, entregado en español para que el usuario lo lea y ajuste: sujeto, escena, luz, lente/cámara, ambiente, composición, paleta exacta de Valji, ubicación y tratamiento del logo, estilo "Cadence Editorial", relación de aspecto (4:5, 1:1 o 9:16).
  - Carrusel: un prompt por slide (3–7 slides) + hilo narrativo + consistencia visual.
  - Reel: concepto + guion por toma + lista de tomas + texto en pantalla + sugerencia de audio.
- **D. Caption** — hook en la primera línea, cuerpo en la voz de Valji, CTA explícito (WhatsApp/SINPE/web), bloque de hashtags (marca + nicho + locales CR) e idea de primer comentario.
- **E. Promo / rifa** (cuando aplica) — tipo, código, descuento o premio, reglas, duración, requisitos de participación y copy de anuncio.
- **F. Logística** — mejor día y hora para publicar, formato de publicación y un consejo de interacción.
- **G. Gancho de venta medible** — la acción de conversión objetivo y cómo notar si funcionó.
- **H. Alternativas** — 1–2 ángulos que se consideraron y descartaron, por si el usuario prefiere otro.

### 7.5 Enfoque en ventas

Para que el feed venda de verdad, la rutina **rota** entre cuatro pilares de contenido, usando el historial de `posts/`:

1. **Producto directo** — vende un producto puntual.
2. **Educación / valor** — cómo usar, ciencia del rendimiento, tips.
3. **Prueba social** — atletas, testimonios, resultados.
4. **Promo / rifa / urgencia** — a un ritmo sostenible, no en cada post.

Vender de forma agresiva en todos los posts quema a la audiencia; un feed equilibrado con un CTA claro en cada post es lo que convierte. Cada paquete apunta siempre a una ruta de venta concreta.

---

## 8. Flujo de datos

```
MARCA.md ─────────┐
posts/ (historial)├──► /valji-post ──► posts/AAAA-MM-DD-<tema>.md
fotos/ + productos┤                    (+ se muestra al usuario)
@valjicr (intento)┘
```

`MARCA.md` y `posts/` son las entradas estables; el intento de Instagram es una entrada opcional con respaldo. La salida es siempre un archivo de post fechado, que a su vez alimenta el historial de la próxima corrida.

---

## 9. Manejo de errores y casos borde

- **Instagram inaccesible** → respaldo a snapshot de `MARCA.md` + historial + pregunta corta al usuario.
- **`posts/` vacía (primera corrida)** → arranca con el pilar "producto directo", sin restricción de "no repetir".
- **No hay fotos nuevas en `fotos/`** → usa fotos de producto del repo, o propone qué fotografiar.
- **Producto sin foto de buena calidad** → lo marca y sugiere conseguir o tomar la foto.
- **`MARCA.md` no existe** → la rutina avisa que primero hay que crear el documento maestro.
- **Información de marca desactualizada** → trabaja con lo disponible y sugiere actualizar `MARCA.md`.

---

## 10. Fuera de alcance (YAGNI)

- **No** publica automáticamente en Instagram (Valji publica a mano).
- **No** genera la imagen final (eso lo hace ChatGPT con el prompt entregado).
- **No** toca ni rediseña el sitio web `valjicr.com`.
- **No** usa agentes en paralelo (Opción C — posible mejora futura).
- **No** corre en horario programado (posible mejora futura, fácil de añadir).
- **No** mide ventas reales automáticamente (sin integración con WhatsApp ni analítica).

---

## 11. Criterios de éxito y validación

**Éxito:**

- `MARCA.md` está completo, es preciso y refleja fielmente la marca.
- `/valji-post` corre y entrega un paquete completo (secciones A–H) en una sola corrida.
- El prompt de imagen es lo bastante detallado como para que ChatGPT produzca una imagen ultrarealista, fiel al empaque y on-brand.
- Cada paquete apunta a una ruta de venta concreta.
- La rutina no repite temas recientes (usa el historial).

**Validación tras la construcción:**

- Hacer una corrida de prueba de `/valji-post` y revisar el paquete completo.
- Verificar datos de `MARCA.md` contra el sitio (precios, productos, contacto).
- El usuario pega el prompt en ChatGPT y confirma que la imagen sale on-brand.

---

## 12. Mejoras futuras (no en este alcance)

- Programación automática (correr la rutina sola cada cierto tiempo).
- Calendario mensual de promociones.
- Agentes en paralelo para subir la calidad.
- Métricas: registrar qué post generó cuántos mensajes o ventas.
