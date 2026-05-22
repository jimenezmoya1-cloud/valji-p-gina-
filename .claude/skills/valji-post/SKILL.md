---
name: valji-post
description: Genera un paquete completo de contenido para un post nuevo de Instagram de Valji — prompt de imagen para ChatGPT, caption, promo/rifa, formato y logística — orientado a ventas. Usar cuando el usuario escriba /valji-post o pida una propuesta de post, contenido o publicación para el Instagram de Valji (@valjicr).
---

## Propósito y requisitos

Esta skill genera un paquete de contenido completo para un post de Instagram de @valjicr, orientado a ventas. El resultado cubre todos los elementos necesarios para publicar: concepto, prompt de imagen para ChatGPT, caption, mecánica de promo o rifa si aplica, y logística de publicación.

**Requisito previo obligatorio:** debe existir el archivo `valji-marketing/MARCA.md`. Si no existe, avisá al usuario con este mensaje: "El documento maestro de marca `valji-marketing/MARCA.md` no existe. Necesitás crearlo primero para que la rutina pueda funcionar." y detené la ejecución.

---

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

---

## Pilares de contenido

La rutina rota entre cuatro pilares, revisando el historial de `valji-marketing/posts/` para no repetir el mismo pilar en posts consecutivos. Cada pilar tiene un objetivo de venta distinto:

1. **Producto directo:** presentar un producto del catálogo de frente — sus características, diferenciadores y precio. El foco es la compra inmediata. Funciona mejor cuando se elige un único producto protagonista y se conecta con el perfil del atleta que más lo necesita.

2. **Educación / valor:** enseñar algo concreto y verificable sobre nutrición deportiva, sobre el cuerpo del atleta o sobre cómo usar un producto correctamente. No es contenido de relleno: cada post educativo termina con un camino de compra. La confianza que genera la educación convierte en ventas diferidas.

3. **Prueba social:** testimonios reales, atletas ticos que usan los productos, resultados en competencias del calendario costarricense. Apoya la credibilidad de la marca y reduce la fricción de la primera compra. Incluir los sellos de confianza que sean relevantes (Cologne List®, NSF, distribuidor exclusivo, 29 años de trayectoria).

4. **Promo / rifa / urgencia:** descuento con código, rifa de engagement, bundle de productos o campaña ligada a una fecha del calendario deportivo costarricense. No todos los posts son promo; la frecuencia recomendada es uno de cada tres o cuatro posts. Las promos pierden fuerza si se lanzan demasiado seguido.

**Regla de no-repetición:** si en los últimos 3 posts aparece el mismo pilar, elegir uno diferente. **Excepción:** si `valji-marketing/posts/` está vacío (primera corrida), empezar por "producto directo" sin ninguna restricción de no-repetir.

Todo post de cualquier pilar lleva CTA. El pilar educativo no es excusa para omitir el llamado a la acción.

---

## El paquete de salida

Llenar esta plantilla completa en cada corrida. No dejar secciones vacías ni con placeholders genéricos. Cada campo es una decisión accionable.

```
# Post Valji — [tema] — [fecha]

## A. Encabezado
- Tema · Formato (imagen/carrusel/reel) · Producto u objetivo · Ruta de venta

## B. Concepto
[El ángulo del post y por qué vende ahora.]

## C. Prompt(s) de imagen para ChatGPT
- Foto de referencia a subir: [ruta exacta del archivo]
- Prompt (en español): [prompt ultra-detallado siguiendo referencias/prompt-imagen.md]
- (Carrusel: un prompt por slide + hilo narrativo. Reel: concepto + guion por toma + texto en pantalla + sugerencia de audio.)

## D. Caption
[Hook + cuerpo + CTA + hashtags, siguiendo referencias/captions-y-hashtags.md]
Primer comentario sugerido: [...]

## E. Promo / rifa
[Mecánica completa si aplica, siguiendo referencias/promos-y-rifas.md. Si no aplica, escribir "Sin promo en este post" y explicar por qué.]

## F. Logística
- Mejor día y hora para publicar
- Consejo de interacción

## G. Gancho de venta medible
[Acción de conversión objetivo + cómo notar si funcionó.]

## H. Alternativas consideradas
[1-2 ángulos descartados.]
```

---

## Reglas de calidad

Antes de guardar el paquete, verificar que cumple todas estas condiciones. Si alguna falla, corregir antes de entregar.

- **Todo en español.** El caption, el prompt de imagen, las instrucciones de promo, la logística — sin excepción. El prompt de imagen también va en español: el usuario lo pega directamente en ChatGPT.
- **El prompt de imagen siempre nombra una foto de referencia real.** Una ruta exacta de archivo existente en `assets/img/productos/` o en `valji-marketing/fotos/`. Nunca generar un prompt sin ancla de referencia.
- **Cada paquete apunta a una ruta de venta concreta.** WhatsApp (wa.me/50686724000), carrito en valjicr.com o las dos. Nunca dejar un post sin camino de compra claro.
- **Respetar la voz y los colores de `MARCA.md`.** Voseo costarricense natural, terminología técnica cuando el contexto lo pide, sin superlatives vacíos, sin promesas médicas. Paleta Cadence Editorial en las instrucciones visuales. Consultar las listas de palabras SÍ y NO de la sección 5 de `MARCA.md` antes de validar el caption.
- **No repetir un tema usado en los últimos 3 posts.** Revisar `valji-marketing/posts/` y evitar el pilar, producto o ángulo que ya se usó recientemente.
- **Un paquete principal, no varios.** La rutina entrega una propuesta principal completa y accionable, no tres borradores a medias. Las alternativas van en la sección H del paquete como ángulos descartados, no como propuestas paralelas.

---

## Casos borde

**`valji-marketing/fotos/` no tiene fotos útiles para el post elegido.** Usar la foto de producto del repositorio en `assets/img/productos/` como referencia para el prompt de imagen. En el paquete, indicar claramente qué archivo usar. Si la foto disponible no es de buena calidad para producir una imagen convincente, señalarlo en la sección C y sugerir qué fotografiar y cómo.

**Un producto no tiene foto de buena calidad en el repositorio.** Marcarlo con una nota en la sección C: "La foto de referencia disponible en `[ruta]` tiene calidad limitada — considerar conseguir una foto mejor del empaque físico antes de publicar." Entregar el paquete de todas formas con la referencia disponible; no bloquear la corrida por esto.

**La información de `MARCA.md` parece desactualizada** (precios que no coinciden, productos que ya no están disponibles, fechas del calendario deportivo que ya pasaron). Trabajar con la información disponible en el documento tal como está. Agregar una nota al final del paquete: "Algunos datos de `MARCA.md` podrían necesitar actualización — revisá [campo específico] antes de publicar." No inventar datos ni hacer suposiciones sobre la situación actual del negocio.

**`valji-marketing/posts/` está vacío.** Es la primera corrida. Empezar por el pilar "producto directo" sin restricción de no-repetir. Elegir el producto más representativo del catálogo según el contexto actual (temporada, calendario deportivo, producto estrella).

**Instagram bloquea el acceso automático.** El comportamiento normal. No detener la rutina. Usar la sección 8 de `MARCA.md` como snapshot del canal y el historial de `valji-marketing/posts/` para inferir el contexto. Si la sección 8 todavía es la plantilla sin completar, inferir el contexto de las secciones 1-7 de `MARCA.md`. En la primera corrida (`posts/` vacío) no hace falta preguntar nada: seguí directo. En las demás corridas, hacer UNA sola pregunta al usuario sobre publicaciones recientes y continuar con la respuesta que dé — o con "sin datos recientes" si el usuario prefiere omitir.

---

## Referencias

Para generar cada sección del paquete, leer el archivo de referencia correspondiente antes de escribirla:

- **Sección C — Prompt(s) de imagen:** leer `.claude/skills/valji-post/referencias/prompt-imagen.md` completo. Seguir la anatomía del prompt (11 elementos en orden canónico), las técnicas de realismo (lente + apertura, luz, texturas) y el checklist de 8 puntos antes de entregar.
- **Sección D — Caption:** leer `.claude/skills/valji-post/referencias/captions-y-hashtags.md`. Usar la estructura hook → desarrollo → CTA → hashtags, elegir el tipo de hook adecuado, seleccionar el CTA según el objetivo del post, y rotar los hashtags del banco siguiendo las instrucciones de mezcla y rotación.
- **Sección E — Promo / rifa:** leer `.claude/skills/valji-post/referencias/promos-y-rifas.md`. Si el post lleva promo, elegir el tipo (descuento con código, combo, rifa), llenar la mecánica obligatoria campo por campo, y verificar que el código elegido corresponde a la tabla de la sección 9 de `MARCA.md`. Si el post no lleva promo, explicar brevemente por qué (ritmo de promos, tipo de contenido, post reciente de la misma categoría).
