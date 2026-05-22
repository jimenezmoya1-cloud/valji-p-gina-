# Guía de oficio: prompts de imagen ultrarealistas para ChatGPT

Esta guía le enseña a la rutina `/valji-post` cómo construir prompts de imagen para ChatGPT que produzcan fotografías ultrarealistas, fieles al producto y alineadas con la estética Cadence Editorial de Valji. El prompt final debe poder pegarse directamente en ChatGPT junto con la foto de referencia del producto y producir una imagen lista para publicar o iterar.

---

## 1. Principio base: producto real + escena

ChatGPT no conoce de memoria el empaque de PowerGel, Muscle Milk ni ningún producto de Valji. Si el prompt no incluye una foto de referencia, el modelo inventa un empaque genérico que no tiene nada que ver con el producto real — etiquetas incorrectas, colores equivocados, logos inexistentes.

**La regla es absoluta:** todo prompt de imagen debe instruir al usuario a subir una foto del producto como imagen de referencia a ChatGPT antes de generar.

### Cómo identificar la foto de referencia correcta

Las fotos de producto del repositorio están en `assets/img/productos/`. Cada producto tiene su propia subcarpeta:

```
assets/img/productos/
  powergel-original-24u/        → fresa-banano.webp, lima-limon.webp, manzana-verde-cafeina-.webp, vainilla.webp
  powergel-hydro-24u/
  powergel-shots-24u/
  powergel-smothies-16u/
  fuel-30-gel-12u/
  fuel-90-bebida-deportiva-alta-en-carbohidratos/
  iso-fuel-30-bebida-isotonica/
  isoactive-bebida-isotonica-600g/
  isoactive-bebida-isotonica-1320g/
  5-electrolytes/
  energize-original-15u/
  gainer-muscle-milk-5-lbs/
  proteina-muscle-milk-2-lbs/
  proteina-muscle-milk-5-lbs/
  proteina-muscle-milk-cero-1.65-lbs/
  proteina-muscle-milk-shake/
  hidratante-y-proteina-2-en-1/
  proteina-oikos-shake/
  creatina/
  anfora/
```

Si el dueño tiene fotos propias del producto (con mejor iluminación, en contexto real), están en `valji-marketing/fotos/` — preferirlas cuando existan, pues son más fieles al empaque físico que tiene en mano.

### Instrucción obligatoria dentro del prompt

El prompt de imagen **siempre** debe incluir esta instrucción explícita, adaptada al producto:

> "Usá la imagen de referencia adjunta para reproducir el empaque exacto del [nombre del producto], sin alterar logos, etiquetas, colores ni tipografía del empaque."

Esta línea va al inicio del prompt, antes de cualquier descripción de escena. Es lo que ancla la fidelidad del producto.

---

## 2. Anatomía del prompt

Un prompt bien construido sigue este orden de elementos. Ninguno es opcional — cada uno cumple una función específica en el resultado final.

### Orden canónico

1. **Instrucción de referencia** — indicar que se use la imagen de referencia para reproducir el empaque exacto.
2. **Sujeto / producto** — qué producto aparece, cómo está posicionado en el frame, si está en la mano de alguien o apoyado en una superficie.
3. **Acción o contexto** — qué está pasando: ¿un atleta en movimiento? ¿el producto sobre el asfalto justo después de cruzar la meta? ¿en la mesa de transición de un triatlón?
4. **Escenario** — dónde transcurre la escena: una carretera de montaña en Costa Rica, una pista de atletismo al amanecer, un gimnasio industrial con luz filtrada, una playa con salida de agua.
5. **Luz** — la fuente y calidad de la luz: hora dorada (6-7am o 5-6pm), luz lateral dura de mediodía en montaña, luz de estudio suave con softbox lateral, luz de neón en un box de CrossFit.
6. **Cámara y lente** — el sistema óptico que simula la toma: cámara de formato completo (Sony A7IV, Canon R5, Nikon Z6), lente específico y apertura (85mm f/1.8, 50mm f/2.0, 35mm f/1.4).
7. **Ambiente / mood** — el estado emocional de la imagen: épico y silencioso al amanecer, íntimo y concentrado antes de una competencia, crudo y sudoroso en medio de un WOD, limpio y aspiracional en studio.
8. **Paleta de color** — los tonos dominantes de la composición. Leer los colores exactos desde la sección 4 de `MARCA.md` (paleta Cadence Editorial). Nunca hardcodear valores hex en este prompt; decir "los colores de la paleta Cadence Editorial de MARCA.md".
9. **Composición y encuadre** — dónde vive el producto en el frame: centrado protagonista, off-center con espacio negativo para texto, en primer plano con fondo desfocado, en perfil a 3/4.
10. **Ubicación del logo Valji** — si el logo aparece en la imagen (en una camiseta, en el kit del atleta, en el fondo) o si no aparece (cuando el logo irá superpuesto en postproducción). Especificarlo siempre.
11. **Relación de aspecto** — el formato final (ver sección 5).

---

## 3. Realismo: cómo anclar la imagen en la realidad física

El enemigo del prompt de imagen para marketing deportivo es el look "render 3D", "plástico" o "generado por IA genérica". Una imagen que parece renderizada destruye la credibilidad de la marca. Estas técnicas específicas anclan el resultado en fotografía documental real.

### Especificaciones de lente y profundidad de campo

Siempre nombrar el lente y la apertura:

| Situación | Lente recomendado | Efecto |
|---|---|---|
| Retrato de producto con atleta | 85mm, f/2.0 | Fondo desfocado, producto nítido, separación del sujeto |
| Producto solo en superficie | 50mm, f/2.8 | Perspectiva natural, fondo ligeramente desfocado |
| Escena de acción amplia | 35mm, f/4.0 | Contexto visible, atleta + entorno en foco |
| Macro / detalle del empaque | 100mm macro, f/4.0 | Detalle extremo del producto, fondo completamente borrado |
| Escena épica de entorno | 24mm, f/8.0 | Todo en foco, paisaje dominante |

Incluir siempre la apertura numérica (f/1.8, f/2.0, f/4.0) — no solo "bokeh" ni "fondo desenfocado". La apertura es una instrucción técnica que el modelo entiende.

### Luz: hora dorada y luz natural

La luz natural de hora dorada (golden hour) es la más flattering para productos deportivos: crea sombras largas, añade calidez, y da un aura de esfuerzo épico sin parecer publicitaria en exceso.

Instrucciones de luz que funcionan:

- "Luz de hora dorada, sol a 15° sobre el horizonte, sombras largas hacia la derecha, luz lateral cálida en el producto"
- "Luz natural de mañana temprana, 7am, neblina difusa en el fondo, rayo de sol directo sobre el producto"
- "Luz de estudio: softbox octagonal lateral izquierdo, relleno suave derecho, fondo neutro oscuro"
- "Contraluz duro en hora dorada, silueta del atleta, rim light dorado en el borde del empaque"

Evitar: "buena luz", "luz bonita", "luz perfecta" — son instrucciones vacías.

### Texturas creíbles

Las texturas diferencian una fotografía creíble de una imagen de stock genérica. Mencionar al menos una textura de contexto:

- Sudor real en la piel y en los dedos que sostienen el gel
- Asfalto mojado con reflejo difuso de luz
- Polvo fino de pista de atletismo en los bordes del zapato
- Fibra de carbono del manillar de la bicicleta
- Tierra mojada de sendero de trail
- Toalla húmeda sobre la mesa de transición
- Neopreno de un traje de triatlón con gotas de agua del lago
- Tiza de gimnasio en las manos junto a la creatina

### Palabras prohibidas en el prompt (por lo que producen)

Nunca incluir estas frases — producen el look que queremos evitar:

- ~~"render 3D"~~, ~~"CGI"~~, ~~"3D render"~~
- ~~"plástico"~~, ~~"brilloso"~~, ~~"liso"~~
- ~~"estilo IA"~~, ~~"generado por inteligencia artificial"~~
- ~~"publicitario genérico"~~, ~~"stock photo"~~
- ~~"hiperealista"~~ (paradójicamente, lo hace falso) — usar en cambio "fotografía documental"

Incluir en cambio: "fotografía documental", "editorial deportivo", "shot on Sony A7IV", "RAW", "textura real".

---

## 4. Estética Cadence Editorial: trasladar la marca a la imagen

Cadence Editorial es el sistema visual de Instagram de Valji (sección 4 de `MARCA.md`). Para que las imágenes sean coherentes con el feed, el prompt debe traducir estos principios en instrucciones fotográficas concretas.

### Principios que tienen equivalencia fotográfica directa

**Contraste fuerte:** instruir contraste alto en la imagen, sombras profundas no aplastadas, altas luces con detalle. En términos fotográficos: "alto contraste, luces controladas, sombras con detalle, sin gamma plano".

**Fotografía protagonista:** el producto es el sujeto central — no un accesorio de lifestyle. Incluso cuando hay un atleta en la imagen, el encuadre debe dejar claro que el producto es el co-protagonista o el tema central.

**Paleta restringida (máx. 3 colores + 1 acento):** en la fotografía, esto se traduce en pedir un fondo o escenario que no compita cromáticamente con el producto. Ejemplos:
- Producto azul Valji → fondo de asfalto gris o niebla blanca (colores neutros que no compiten)
- Producto naranja-dorado → fondo de sombra oscura o negro azulado (contraste sin lucha cromática)
- Escena al amanecer → pedir "tonos naranjas y dorados dominantes, sin saturación de verdes"

Para la paleta exacta de colores de la paleta Cadence Editorial, leer la sección 4 de `MARCA.md`. No hardcodear valores hex en el prompt de imagen — en cambio, describir los tonos en lenguaje fotográfico: "tonos negro azulado, crema cálido y azul brillante como colores dominantes, con acento naranja dorado".

**Márgenes amplios:** en fotografía, esto equivale a pedir espacio negativo intencional. Ejemplos: "espacio negativo en el tercio superior para texto de superposición posterior", "producto en el tercio derecho, fondo limpio a la izquierda".

### Qué NO pedir (rompe la estética)

- Fondos blancos de estudio genérico (a menos que sea explícitamente una imagen de catálogo)
- Efectos de bokeh con burbujas de luz — es cliché de foto de smartphone
- Colores saturados al estilo "filtro Instagram" — la paleta Cadence es sobria y editorial
- Texto en la imagen generada (ChatGPT genera texto ilegible; el texto va en postproducción)
- Múltiples productos en fila — elegir uno como protagonista

---

## 5. Formatos y relación de aspecto

Cada destino tiene su relación de aspecto. Incluirla siempre al final del prompt.

| Formato | Relación | Resolución mínima | Cuándo usar |
|---|---|---|---|
| **Feed vertical** | **4:5** | 1080 × 1350 px | **Recomendado por defecto.** Ocupa más espacio en el feed, mayor visibilidad. Posts de producto, editoriales, posts de atletas. |
| Cuadrado | 1:1 | 1080 × 1080 px | Cuando la composición es simétrica o el producto está centrado. Carruseles donde se quiere consistencia perfecta. |
| Reel / Story | 9:16 | 1080 × 1920 px | Contenido vertical full-screen. Stories, reels con video, contenido efímero. |

### Cómo escribir la instrucción de aspecto en el prompt

Usar la instrucción exacta al final:

- "Relación de aspecto 4:5, orientación vertical"
- "Relación de aspecto 1:1, composición cuadrada"
- "Relación de aspecto 9:16, full vertical para story"

---

## 6. Checklist final antes de entregar el prompt

Antes de entregarle el prompt al usuario, verificar estos 8 puntos. Si alguno falla, corregir antes de entregar.

- [ ] **¿El prompt indica qué foto de referencia subir?** Nombrar el archivo exacto (ej: `assets/img/productos/powergel-original-24u/fresa-banano.webp`) y en qué carpeta está.
- [ ] **¿El prompt incluye la instrucción de empaque exacto?** La línea "usá la imagen de referencia adjunta para reproducir el empaque exacto, sin alterar logos ni etiquetas" debe estar presente.
- [ ] **¿Define la luz?** Fuente, dirección, calidad, y hora del día si aplica.
- [ ] **¿Define el lente y apertura?** Focal específico (85mm, 50mm, 35mm) y número f/ (f/1.8, f/2.0, f/4.0).
- [ ] **¿Define la paleta de color?** Con referencia a la paleta Cadence Editorial de `MARCA.md` o describiendo los tonos en lenguaje fotográfico.
- [ ] **¿Especifica la ubicación o ausencia del logo Valji?** Si el logo aparece en la escena o si irá en postproducción.
- [ ] **¿Incluye el formato/relación de aspecto?** 4:5, 1:1 o 9:16.
- [ ] **¿Está escrito en español?** Todo el prompt va en español — el usuario lo pega directamente en ChatGPT.

---

## 7. Ejemplo completo: PowerGel Original en escena de ciclismo al amanecer

Este es un prompt completo, listo para usar tal cual. Ilustra todos los principios de esta guía en acción.

---

### Instrucción previa al usuario (no va en el prompt de ChatGPT)

**Foto de referencia a subir en ChatGPT:** `assets/img/productos/powergel-original-24u/fresa-banano.webp`

Subila en ChatGPT como imagen adjunta antes de pegar el prompt. Si tenés una foto propia del empaque físico en `valji-marketing/fotos/`, usá esa en cambio — será más fiel al producto real que tenés en mano.

---

### Prompt de imagen (pegar en ChatGPT con la foto adjunta)

```
Usá la imagen de referencia adjunta para reproducir el empaque exacto del PowerGel Original sabor fresa-banano, sin alterar logos, etiquetas, colores ni tipografía del empaque. Es crítico que el empaque sea idéntico al de la referencia.

Fotografía editorial deportiva. Un ciclista masculino de aproximadamente 35 años, vestido con maillot de ciclismo azul oscuro y culote negro, sostiene el PowerGel Original fresa-banano con los dos dedos mientras pedalea en una carretera de montaña sinuosa en Costa Rica. La carretera tiene asfalto oscuro ligeramente húmedo con reflejos de la luz del amanecer. El ciclista está en posición aerodinámica, en el acto de llevarse el gel a la boca, concentración absoluta en el rostro.

Escenario: carretera de montaña en el Valle Central costarricense, curva larga hacia la izquierda, vegetación densa verde oscuro en los bordes, neblina difusa a media altura en el fondo de los cerros. El horizonte está parcialmente iluminado por el sol que acaba de salir.

Luz: hora dorada de madrugada, 6:15am. Sol a 8° sobre el horizonte, a la espalda derecha del ciclista. Luz lateral cálida naranja-dorada baña el lado derecho del ciclista y del gel, creando un rim light nítido en el borde del empaque. Las sombras caen largas y suaves hacia la izquierda. La niebla del fondo difumina la luz y da profundidad a la escena.

Cámara: Sony A7IV con lente 85mm f/2.0. El ciclista y el gel están en foco nítido. El fondo de montaña y carretera está desfocado de forma natural, con bokeh suave. La toma es lateral, ligeramente en picado desde el nivel del manillar, como si un fotógrafo en moto estuviera disparando en paralelo al ciclista.

Textura: sudor real visible en el dorso de la mano que sostiene el gel. El maillot tiene la textura real del tejido técnico ciclista. El asfalto tiene microgranos y una capa húmeda con reflejos especulares largos.

Mood: épico y silencioso, el instante de fuerzas reunidas antes de una subida larga. Concentración pura. Sin sonrisa, sin pose — es un momento real dentro de un esfuerzo real.

Paleta de color: dominante negro azulado en el asfalto y cielo pre-amanecer, con acento naranja dorado de la luz de hora dorada. El empaque del PowerGel mantiene sus colores originales de la referencia. Máximo tres colores dominantes más el acento.

Composición: producto en el tercio central-derecho del frame. El ciclista llena el encuadre en diagonal, con espacio negativo en el tercio superior izquierdo (cielo y neblina) donde eventualmente irá texto superpuesto en postproducción. Encuadre horizontal ligeramente rotado 3° en sentido de la dirección del ciclista para dar dinamismo.

Logo Valji: no aparece en la imagen — se añadirá en postproducción.

Estilo: fotografía documental editorial deportivo. Fotografía de autor, shot on Sony A7IV. Sin efectos de postproducción artificiales, sin filtros de color saturados, sin look de render 3D ni CGI. Tonos naturales con contraste fuerte.

Relación de aspecto 4:5, orientación vertical.
```

---

### Por qué este prompt funciona

- **Referencia de producto:** el prompt empieza anclando el empaque a la imagen de referencia — sin esto, ChatGPT inventaría el gel.
- **Contexto específico:** "carretera de montaña en el Valle Central costarricense" + "6:15am" + "neblina a media altura" dan al modelo instrucciones visuales concretas, no vagas.
- **Lente y apertura:** "85mm f/2.0" produce la separación de fondo correcta para que el producto sea protagonista sin que el escenario desaparezca.
- **Texturas:** "sudor real en el dorso de la mano", "asfalto con capa húmeda" evitan el look de render plástico.
- **Paleta restringida:** al nombrar solo dos colores dominantes + el acento de la hora dorada, la imagen respeta el sistema Cadence Editorial.
- **Espacio negativo intencional:** el tercio superior izquierdo limpio permite añadir el copy del post en postproducción sin tapar la acción.
- **Sin logo en la imagen:** el logo de Valji tiene más control y consistencia si se añade en postproducción con las reglas exactas de `MARCA.md`.
