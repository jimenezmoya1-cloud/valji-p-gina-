# Plan de implementación — Rutina de marketing de Instagram para Valji

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construir el documento maestro de marca `MARCA.md` y la rutina `/valji-post` que genera paquetes de contenido de Instagram orientados a ventas para Valji.

**Architecture:** Una carpeta nueva `valji-marketing/` con el documento maestro, el banco de fotos y el historial de posts. Una skill de proyecto en `.claude/skills/valji-post/` que orquesta la generación de cada post leyendo el documento maestro y reglas de oficio en `referencias/`. No se toca el sitio web.

**Tech Stack:** Markdown. Skill de Claude Code (`SKILL.md` con frontmatter YAML). Sin código ejecutable ni dependencias.

**Nota sobre verificación:** Este proyecto produce documentos, no código. No hay tests unitarios. Cada tarea termina con una verificación manual concreta (revisar contenido contra una fuente, o una prueba de la rutina) y un commit.

**Spec de referencia:** `docs/superpowers/specs/2026-05-21-valji-rutina-instagram-design.md`

---

## Mapa de archivos

```
valji-marketing/
  MARCA.md                          ← Tareas 2, 3, 4
  fotos/LEEME.md                    ← Tarea 1
  posts/.gitkeep                    ← Tarea 1
.claude/skills/valji-post/
  SKILL.md                          ← Tarea 8
  referencias/prompt-imagen.md      ← Tarea 5
  referencias/captions-y-hashtags.md ← Tarea 6
  referencias/promos-y-rifas.md     ← Tarea 7
```

## Datos de marca ya confirmados (usar en las tareas de `MARCA.md`)

- **Empresa:** Distribuidora Valji S.A. Nutrición deportiva premium, Costa Rica, desde 1997 (+27 años). 100% costarricense, carbono neutro, PYME.
- **Marcas distribuidas:** PowerBar, Muscle Milk, Oikos.
- **Frase del sitio:** "Rinde al máximo con la nutrición que mereces."
- **Contacto / ventas:** WhatsApp y SINPE Móvil al **8672-4000** (formato internacional `50686724000`). Envío gratis a nivel nacional. IVA 13%. Pago: SINPE, transferencia o contra entrega.
- **Catálogo:** 22 productos en `app.js` (constante `PRODUCTS`). Categorías: `proteinas`, `geles` (PowerGel), `electrolitos`, `barras`, `suplementos`, `otros`.
- **Colores del sitio (de `style.css` `:root`):** `--accent` azul `#0070f3`, `--accent-2` azul oscuro `#0051cc`, `--accent-3` verde `#0f8e4e`, `--gold` `#f5c518`, `--wa-green` `#25D366`, `--text` casi-negro `#0f172a`, `--bg-0` casi-blanco `#f8fafc`.
- **Tipografías:** Outfit (títulos), Inter (cuerpo).
- **Archivos de logo:** `assets/img/nuevooo/logotipo-con-fondo-transparente.png` (el que usa el sitio en nav y footer), `assets/img/logos/valji-logo.png`, `assets/img/logo/logo.jpg`.
- **Sellos de confianza:** +27 años, Cologne List® (productos PowerBar), NSF Certified for Sport (Creatina ProSeries), opciones veganas (PowerGel Original, Iso Fuel 30), carbono neutro, PYME costarricense.
- **Códigos promocionales existentes (de `app.js` constante `PROMO_CODES`):** tier 5% (`PURAELITE`, `PISTA5`, `TICOFIT`, `PODIUM5`); 10% (`ELITE10`, `RECORD10`, `TICOSTRONG`, `SPRINT10`, `VOLTAJE10`); 15% (`ORO15`, `CAMPEON`, `MEDALLA15`); 20% (`FUEGO20`, `CUMBRE20`, `RESISTENCIA`, `VALJI20`, `JUEGOS20`); 23% para aliados (`COACHVALJI`, `GYMVALJI`, `NUTRIVALJI`, `ALIADOSVALJI`); 30% (`MAXIMA30`, `OFFSEASON`, `TRAINING30`, `NOPARA30`); 40% (`LEGEND40`, `CROWN40`, `GOAT40`, `ELITE40`).

---

## Task 1: Estructura de carpetas y archivos guía

**Files:**
- Create: `valji-marketing/fotos/LEEME.md`
- Create: `valji-marketing/posts/.gitkeep`

- [ ] **Step 1: Crear las carpetas**

```bash
mkdir -p valji-marketing/fotos valji-marketing/posts .claude/skills/valji-post/referencias
```

- [ ] **Step 2: Crear `valji-marketing/fotos/LEEME.md`** con este contenido exacto:

```markdown
# Banco de fotos de Valji

Dejá aquí tus fotos propias para que la rutina `/valji-post` las pueda usar
como base real de las imágenes (atletas, entrenamientos, tienda, eventos,
producto en uso).

## Consejos
- Nombrá los archivos de forma descriptiva: `ciclista-ruta-amanecer.jpg`,
  `tienda-mostrador.jpg`, `triatleta-meta.jpg`.
- Mientras mejor la calidad y la luz, mejor el resultado en ChatGPT.
- Fotos horizontales y verticales sirven; las verticales (4:5 o 9:16) son
  ideales para feed y reels.
- No borres fotos viejas: la rutina puede reutilizarlas con enfoques nuevos.
```

- [ ] **Step 3: Crear `valji-marketing/posts/.gitkeep`** como archivo vacío (mantiene la carpeta en git).

- [ ] **Step 4: Verificación**

Run: `find valji-marketing .claude/skills/valji-post -type d && ls valji-marketing/fotos`
Esperado: se listan las carpetas `valji-marketing`, `valji-marketing/fotos`, `valji-marketing/posts`, `.claude/skills/valji-post`, `.claude/skills/valji-post/referencias`, y el archivo `LEEME.md`.

- [ ] **Step 5: Commit**

```bash
git add valji-marketing/fotos/LEEME.md valji-marketing/posts/.gitkeep
git commit -m "Estructura base de valji-marketing (fotos y posts)"
```

---

## Task 2: `MARCA.md` — Identidad, Público y Catálogo (secciones 1-3)

**Files:**
- Create: `valji-marketing/MARCA.md`
- Read (fuentes): `app.js`, `index.html`

- [ ] **Step 1: Crear `valji-marketing/MARCA.md`** con un encabezado y las secciones 1-3.

Encabezado del archivo:

```markdown
# MARCA.md — Documento maestro de Valji

Este es el "cerebro de marca" de Valji. La rutina `/valji-post` lo lee en cada
corrida. Mantenelo actualizado: si algo cambia (precios, productos, promos),
editá este archivo.

Última actualización: 2026-05-21
```

- [ ] **Step 2: Escribir la sección 1 — Identidad de marca**

Usar los "Datos de marca ya confirmados" de este plan. Cubrir: qué es Valji, historia (desde 1997, +27 años), propósito, propuesta de valor (distribuidor exclusivo de marcas premium de nutrición deportiva en CR), posicionamiento premium, y la frase "Rinde al máximo con la nutrición que mereces". Encabezado: `## 1. Identidad de marca`.

- [ ] **Step 3: Escribir la sección 2 — Público objetivo**

Encabezado `## 2. Público objetivo`. Describir: clase media-alta y alta de Costa Rica. Cinco sub-perfiles, cada uno con motivación, dolor y disparador de compra: **triatleta**, **ciclista**, **corredor / atletismo**, **gym / fisicoculturismo**, **crossfit**. Incluir también el segmento profesional (nutricionistas, entrenadores, clubes) que tiene códigos de aliados.

- [ ] **Step 4: Escribir la sección 3 — Catálogo**

Encabezado `## 3. Catálogo`. Leer la constante `PRODUCTS` de `app.js` y listar **los 22 productos**, agrupados por las 6 categorías. Para cada producto, una fila o bloque con: nombre, marca, precio (`priceLabel`), sabores, beneficio principal y "para quién / para qué". Usar este formato por categoría:

```markdown
### Proteínas
| Producto | Precio | Sabores | Para quién / para qué |
|---|---|---|---|
| Proteína Oikos Shake | ₡2.800 | Chocolate, Vainilla | Snack proteico listo para beber, post-entreno |
```

Cerrar la sección con los diferenciadores transversales: fórmula C2MAX, Cologne List®, opciones veganas, sistema Black Line de PowerBar.

- [ ] **Step 5: Verificación**

Run: `grep -c '|' valji-marketing/MARCA.md` y revisar a ojo.
Esperado: las 3 secciones presentes; los 22 productos listados; los precios coinciden con `app.js` (verificar 3 al azar, ej. PowerGel Original `₡36.465`, Proteína Muscle Milk 5 Lbs `₡57.400`, Ánfora PowerBar `₡4.000`).

- [ ] **Step 6: Commit**

```bash
git add valji-marketing/MARCA.md
git commit -m "MARCA.md: identidad, publico y catalogo"
```

---

## Task 3: `MARCA.md` — Identidad visual y Voz (secciones 4-5)

**Files:**
- Modify: `valji-marketing/MARCA.md` (agregar secciones 4-5)
- Read (fuentes): `style.css`, `valji-carousel/philosophy.md`, `valji-carousel/slide-1.html` … `slide-5.html`

- [ ] **Step 1: Escribir la sección 4 — Identidad visual**

Encabezado `## 4. Identidad visual`. Incluir:
- **Logo:** los 3 archivos listados en los datos confirmados; indicar que el principal es `logotipo-con-fondo-transparente.png`. Reglas de uso: espacio libre alrededor, no deformar, no cambiar de color.
- **Colores:** los 7 hex de `style.css` listados en los datos confirmados, con su rol (azul `#0070f3` = color principal de marca; verde `#0f8e4e` = acento; casi-negro `#0f172a` = texto; etc.).
- **Tipografías:** Outfit (títulos), Inter (cuerpo).
- **Filosofía visual para Instagram ("Cadence Editorial"):** leer `valji-carousel/philosophy.md` y resumir sus principios (editorial atlético, contraste tipográfico operático, máximo 3 colores + 1 acento por composición, fotografía como superficie protagonista, márgenes generosos). Leer los archivos `valji-carousel/slide-1.html` a `slide-5.html` y extraer los **códigos de color hex reales** usados en esas slides; documentarlos como la paleta editorial de Instagram.

- [ ] **Step 2: Escribir la sección 5 — Voz y tono**

Encabezado `## 5. Voz y tono`. Definir: Valji habla premium, experto, motivador y cercano; usa **voseo costarricense** ("rendí", "lográ", "escribinos"); sin sobrecarga de emojis. Incluir una lista "palabras y frases SÍ" (rendimiento, élite, meta, recuperación, energía, ciencia, asesoría) y "palabras y frases NO" (jerga exagerada, promesas médicas, mayúsculas gritando). Dar 2 ejemplos cortos de frase on-brand y off-brand.

- [ ] **Step 3: Verificación**

Run: `grep -nE '## 4\.|## 5\.|#0070f3' valji-marketing/MARCA.md`
Esperado: ambas secciones presentes; los hex de la paleta documentados; la filosofía Cadence Editorial resumida con la paleta editorial real de las slides.

- [ ] **Step 4: Commit**

```bash
git add valji-marketing/MARCA.md
git commit -m "MARCA.md: identidad visual y voz de marca"
```

---

## Task 4: `MARCA.md` — Canales, Confianza, Instagram y Promos (secciones 6-9)

**Files:**
- Modify: `valji-marketing/MARCA.md` (agregar secciones 6-9)
- Read (fuentes): `app.js` (constante `PROMO_CODES`)
- Web (intento): `valjicr.com`, `instagram.com/valjicr`

- [ ] **Step 1: Escribir la sección 6 — Canales y rutas de venta**

Encabezado `## 6. Canales y rutas de venta`. Documentar: WhatsApp 8672-4000 (link `https://wa.me/50686724000`), SINPE Móvil 8672-4000, sitio web `valjicr.com` con carrito, envío gratis nacional, IVA 13%. Indicar la ruta de venta preferida por tipo de post (consulta directa por WhatsApp para productos puntuales; carrito web para pedidos grandes).

- [ ] **Step 2: Escribir la sección 7 — Pruebas de confianza**

Encabezado `## 7. Pruebas de confianza`. Listar y explicar como argumentos de venta: +27 años en el mercado, 100% costarricense, carbono neutro, PYME, marcas exclusivas, Cologne List® (seguro para antidopaje), NSF Certified for Sport, opciones veganas.

- [ ] **Step 3: Escribir la sección 8 — Instagram @valjicr**

Encabezado `## 8. Instagram @valjicr`. Intentar revisar `@valjicr` con búsqueda web y fetch del perfil. Documentar lo que se logre obtener (bio, temática, frecuencia, tipo de posts). Si la info es pobre o nula (lo más probable), escribir una **plantilla para completar a mano** con estos campos vacíos marcados con `_(completar)_`: bio actual, número de seguidores, frecuencia de publicación, 3 posts que mejor funcionaron, pilares de contenido actuales, errores a evitar. Esto NO es un placeholder del plan: es un formulario intencional dentro de `MARCA.md` para que el dueño lo llene.

- [ ] **Step 4: Escribir la sección 9 — Banco de promociones e ideas**

Encabezado `## 9. Banco de promociones e ideas`. Incluir:
- La tabla de **códigos promocionales existentes** por tier (5/10/15/20/23/30/40%), tomada de `PROMO_CODES` en `app.js`. Aclarar que los códigos de 23% (`COACHVALJI`, etc.) son para aliados profesionales.
- **Calendario deportivo costarricense** (fechas clave para atar promos): temporada de propósitos de gym (enero), maratones y carreras de ruta, triatlones nacionales, competencias de ciclismo de montaña y ruta, temporada seca de entrenamiento. Dejar como lista editable.
- **Ideas semilla de promo/rifa** (3-5 ideas) para que la rutina parta de ahí.

- [ ] **Step 5: Verificación**

Run: `grep -nE '## 6\.|## 7\.|## 8\.|## 9\.|VALJI20' valji-marketing/MARCA.md`
Esperado: las 4 secciones presentes; los códigos promocionales listados; la sección 8 con datos reales o con la plantilla `_(completar)_`.

- [ ] **Step 6: Commit**

```bash
git add valji-marketing/MARCA.md
git commit -m "MARCA.md: canales, confianza, Instagram y banco de promos"
```

---

## Task 5: Referencia — `referencias/prompt-imagen.md`

**Files:**
- Create: `.claude/skills/valji-post/referencias/prompt-imagen.md`

- [ ] **Step 1: Crear el archivo** — guía de oficio para construir prompts de imagen ultrarealistas para ChatGPT. Debe contener estas secciones con contenido real y accionable:

1. **Principio base:** producto real + escena. Siempre indicar al usuario qué foto de producto del repo (`assets/img/productos/...`) o de `valji-marketing/fotos/` subir a ChatGPT como referencia, e instruir explícitamente en el prompt: "usá la imagen de referencia para reproducir el empaque exacto, sin alterar logos ni etiquetas".
2. **Anatomía del prompt** (en este orden): sujeto/producto → acción o contexto → escenario → luz → cámara y lente → ambiente/mood → paleta de color → composición y encuadre → ubicación del logo Valji → relación de aspecto.
3. **Realismo:** especificar lente y profundidad de campo (ej. "85mm, f/2.0"), luz natural u hora dorada, texturas creíbles (sudor, asfalto mojado, polvo de gimnasio, fibra de carbono), y prohibir explícitamente el look "render 3D", "plástico", "IA genérica".
4. **Estética Cadence Editorial:** contraste fuerte, fotografía protagonista, paleta restringida (máx. 3 colores + 1 acento), márgenes amplios; tomar la paleta de la sección 4 de `MARCA.md`.
5. **Formatos:** 4:5 vertical (feed, recomendado), 1:1 (cuadrado), 9:16 (reel/story).
6. **Checklist final** del prompt antes de entregarlo (¿menciona la foto de referencia? ¿define luz, lente, paleta, logo y formato? ¿está en español?).
7. **Un ejemplo completo** de prompt bien hecho para un producto Valji (ej. PowerGel Original en escena de ciclismo al amanecer).

- [ ] **Step 2: Verificación**

Run: `wc -l .claude/skills/valji-post/referencias/prompt-imagen.md`
Esperado: el archivo existe, tiene las 7 secciones y el ejemplo completo. Leerlo y confirmar que no contiene placeholders vagos.

- [ ] **Step 3: Commit**

```bash
git add .claude/skills/valji-post/referencias/prompt-imagen.md
git commit -m "Referencia: guia para prompts de imagen ultrarealistas"
```

---

## Task 6: Referencia — `referencias/captions-y-hashtags.md`

**Files:**
- Create: `.claude/skills/valji-post/referencias/captions-y-hashtags.md`

- [ ] **Step 1: Crear el archivo** — fórmulas para captions y hashtags. Debe contener:

1. **Estructura del caption:** hook (línea 1, frena el scroll) → desarrollo (valor, historia o beneficio concreto) → CTA explícito → hashtags.
2. **Voz:** aplicar la sección 5 de `MARCA.md` (premium, experta, motivadora, voseo tico, sin sobrecarga de emojis).
3. **Tipos de hook** con ejemplo de cada uno: pregunta, dato sorprendente, afirmación audaz, dolor del atleta.
4. **CTAs según objetivo:** consultar por WhatsApp al 8672-4000, ordenar en el sitio, participar en una rifa, aprovechar un código. Cada CTA debe nombrar la acción exacta.
5. **Banco de hashtags**, agrupados: marca (`#Valji #ValjiCR #NutriciónConValji`), nicho (`#NutriciónDeportiva #PowerBarCR #MuscleMilk #Triatlón #Ciclismo #Running #CrossFit #Gym`), Costa Rica (`#CostaRica #DeporteCR #PuraVida #HechoEnCostaRica #AtletasTicos`), por deporte. Recomendar usar 10-20, mezclando los tres grupos.
6. **Primer comentario:** opción de mover hashtags o un CTA secundario ahí.
7. **Errores a evitar:** caption sin CTA, hook débil, exceso de emojis, prometer resultados médicos.

- [ ] **Step 2: Verificación**

Run: `grep -c '#' .claude/skills/valji-post/referencias/captions-y-hashtags.md`
Esperado: el archivo existe con las 7 secciones y un banco de hashtags real y usable.

- [ ] **Step 3: Commit**

```bash
git add .claude/skills/valji-post/referencias/captions-y-hashtags.md
git commit -m "Referencia: formulas de caption y banco de hashtags"
```

---

## Task 7: Referencia — `referencias/promos-y-rifas.md`

**Files:**
- Create: `.claude/skills/valji-post/referencias/promos-y-rifas.md`

- [ ] **Step 1: Crear el archivo** — plantillas de promoción y rifa con mecánica completa. Debe contener:

1. **Tipos de promo:** % de descuento con código, 2x1, combo/bundle de productos, regalo por compra, descuento de primera compra. (El envío ya es gratis: no usarlo como gancho.)
2. **Tipos de rifa:** sorteo por engagement (seguir + comentar + etiquetar + compartir en story), rifa por compra (cada pedido = una participación).
3. **Mecánica obligatoria** que toda promo/rifa debe llevar al entregarse: nombre, código (de los existentes en `MARCA.md` o uno nuevo propuesto), descuento o premio, productos aplicables, fecha de inicio y fin, condiciones, y cómo se redime (carrito web con el código o pedido por WhatsApp).
4. **Códigos disponibles:** remitir a la sección 9 de `MARCA.md`; recordar que los de 23% son solo para aliados profesionales.
5. **Reglas sanas:** términos claros y visibles, no prometer de más, cuidar el margen, una sola promo fuerte a la vez.
6. **Un ejemplo completo de promo** y **un ejemplo completo de rifa**, ambos con toda la mecánica llena.

- [ ] **Step 2: Verificación**

Run: `wc -l .claude/skills/valji-post/referencias/promos-y-rifas.md`
Esperado: el archivo existe con las 6 secciones y los dos ejemplos completos.

- [ ] **Step 3: Commit**

```bash
git add .claude/skills/valji-post/referencias/promos-y-rifas.md
git commit -m "Referencia: plantillas de promociones y rifas"
```

---

## Task 8: La rutina — `.claude/skills/valji-post/SKILL.md`

**Files:**
- Create: `.claude/skills/valji-post/SKILL.md`

- [ ] **Step 1: Crear el archivo con este frontmatter exacto:**

```yaml
---
name: valji-post
description: Genera un paquete completo de contenido para un post nuevo de Instagram de Valji — prompt de imagen para ChatGPT, caption, promo/rifa, formato y logística — orientado a ventas. Usar cuando el usuario escriba /valji-post o pida una propuesta de post, contenido o publicación para el Instagram de Valji (@valjicr).
---
```

- [ ] **Step 2: Escribir la sección "Propósito y requisitos"**

Explicar que la skill genera un paquete de contenido para un post de Instagram orientado a ventas. Requisito previo: debe existir `valji-marketing/MARCA.md`. Si no existe, la rutina avisa que primero hay que crear el documento maestro y se detiene.

- [ ] **Step 3: Escribir la sección "Flujo de trabajo"** con estos 6 pasos exactos:

```markdown
## Flujo de trabajo

1. **Cargar el cerebro.** Leer `valji-marketing/MARCA.md` completo. Si no
   existe, avisar y detenerse.
2. **Revisar el historial.** Listar `valji-marketing/posts/` y leer los 3-5
   posts más recientes para conocer los temas ya usados. Listar y revisar
   `valji-marketing/fotos/` y las fotos de producto en `assets/img/productos/`.
3. **Intentar leer Instagram.** Buscar en la web actividad reciente de
   @valjicr e intentar un fetch de `instagram.com/valjicr`. Si el resultado es
   pobre o vacío, usar el snapshot de la sección 8 de `MARCA.md` + el historial
   y hacerle UNA pregunta corta al usuario: "¿Qué publicaste en los últimos
   días?". Nunca inventar datos ni detener la rutina por esto.
4. **Decidir el post.** Elegir tema + objetivo de venta + formato (imagen,
   carrusel o reel), rotando entre los 4 pilares de contenido (ver más abajo)
   respecto a lo publicado recientemente.
5. **Generar el paquete completo** (ver "El paquete de salida"), aplicando las
   guías de `referencias/`.
6. **Guardar y mostrar.** Escribir el paquete en
   `valji-marketing/posts/AAAA-MM-DD-<tema>.md` y presentárselo al usuario.
```

- [ ] **Step 4: Escribir la sección "Pilares de contenido"**

Explicar los 4 pilares que la rutina rota usando el historial: (1) producto directo, (2) educación/valor, (3) prueba social, (4) promo/rifa/urgencia. Regla: cada post lleva CTA; las promos van a ritmo sostenible, no en cada post. Si `posts/` está vacío (primera corrida), empezar por "producto directo" sin restricción de no-repetir.

- [ ] **Step 5: Escribir la sección "El paquete de salida"** con esta plantilla exacta:

````markdown
## El paquete de salida

Cada corrida produce un archivo `valji-marketing/posts/AAAA-MM-DD-<tema>.md`
con estas secciones:

```markdown
# Post Valji — [tema] — [fecha]

## A. Encabezado
- Tema · Formato (imagen/carrusel/reel) · Producto u objetivo · Ruta de venta

## B. Concepto
[El ángulo del post y por qué vende ahora.]

## C. Prompt(s) de imagen para ChatGPT
- Foto de referencia a subir: [ruta exacta del archivo]
- Prompt (en español): [prompt ultra-detallado siguiendo referencias/prompt-imagen.md]
- (Carrusel: un prompt por slide + hilo narrativo. Reel: concepto + guion por
  toma + texto en pantalla + sugerencia de audio.)

## D. Caption
[Hook + cuerpo + CTA + hashtags, siguiendo referencias/captions-y-hashtags.md]
Primer comentario sugerido: [...]

## E. Promo / rifa
[Mecánica completa si aplica, siguiendo referencias/promos-y-rifas.md. Si no
aplica, escribir "Sin promo en este post" y explicar por qué.]

## F. Logística
- Mejor día y hora para publicar
- Consejo de interacción

## G. Gancho de venta medible
[Acción de conversión objetivo + cómo notar si funcionó.]

## H. Alternativas consideradas
[1-2 ángulos descartados.]
```
````

- [ ] **Step 6: Escribir las secciones "Reglas de calidad" y "Casos borde"**

**Reglas de calidad:** todo se entrega en español; el prompt de imagen siempre nombra una foto de referencia real; cada paquete apunta a una ruta de venta concreta; respetar voz y colores de `MARCA.md`; no repetir un tema usado en los últimos 3 posts; ser decisivo (un paquete principal) pero ofrecer las alternativas de la sección H.

**Casos borde:** si `valji-marketing/fotos/` no tiene fotos útiles, usar las fotos de producto del repo o proponer qué fotografiar; si un producto no tiene foto de buena calidad, marcarlo y sugerir conseguirla; si la información de `MARCA.md` parece desactualizada, trabajar con lo disponible y sugerir actualizarla.

- [ ] **Step 7: Escribir la sección "Referencias"**

Apuntar a los 3 archivos de `referencias/`: `prompt-imagen.md` (para la sección C), `captions-y-hashtags.md` (para la D), `promos-y-rifas.md` (para la E).

- [ ] **Step 8: Verificación**

Run: `cat .claude/skills/valji-post/SKILL.md | head -5` y leer el archivo completo.
Esperado: frontmatter YAML válido con `name` y `description`; las secciones Propósito, Flujo de trabajo (6 pasos), Pilares, Paquete de salida (plantilla A-H), Reglas de calidad, Casos borde y Referencias presentes y sin placeholders vagos.

- [ ] **Step 9: Commit**

```bash
git add .claude/skills/valji-post/SKILL.md
git commit -m "Rutina /valji-post: skill orquestadora de contenido de Instagram"
```

---

## Task 9: Validación — prueba en seco de `/valji-post`

**Files:**
- Posible salida: `valji-marketing/posts/AAAA-MM-DD-<tema>.md` (de la prueba)

- [ ] **Step 1: Revisión de integridad**

Run: `ls -R valji-marketing .claude/skills/valji-post`
Esperado: existen `MARCA.md`, `fotos/LEEME.md`, `posts/.gitkeep`, `SKILL.md` y los 3 archivos de `referencias/`.

- [ ] **Step 2: Verificar consistencia `MARCA.md` ↔ sitio**

Revisar que precios, productos y contacto en `MARCA.md` coinciden con `app.js` e `index.html`. Corregir cualquier diferencia.

- [ ] **Step 3: Prueba en seco de la rutina**

Ejecutar la rutina `/valji-post` una vez. Si la skill recién creada todavía no está disponible como comando, reiniciar la sesión de Claude Code para que la cargue, o seguir manualmente los 6 pasos del flujo de `SKILL.md`.
Esperado: se produce un paquete con TODAS las secciones A-H; el prompt de imagen nombra una foto de referencia real; hay un CTA de venta claro; el archivo queda guardado en `valji-marketing/posts/`.

- [ ] **Step 4: Revisión de calidad del resultado**

Confirmar que el paquete de prueba: respeta la voz y los colores de `MARCA.md`, apunta a una ruta de venta, y el prompt de imagen es lo bastante detallado para ChatGPT. Anotar cualquier ajuste necesario en `SKILL.md` o las referencias y aplicarlo.

- [ ] **Step 5: Commit**

```bash
git add valji-marketing/posts/
git commit -m "Prueba en seco de /valji-post y validacion final"
```

---

## Resumen de tareas

1. Estructura de carpetas y archivos guía
2. `MARCA.md` — Identidad, Público, Catálogo
3. `MARCA.md` — Identidad visual, Voz
4. `MARCA.md` — Canales, Confianza, Instagram, Promos
5. Referencia — `prompt-imagen.md`
6. Referencia — `captions-y-hashtags.md`
7. Referencia — `promos-y-rifas.md`
8. La rutina — `SKILL.md`
9. Validación — prueba en seco de `/valji-post`
