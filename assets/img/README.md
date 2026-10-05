# Fotos de Valji

Todo lo visual del sitio y de marketing vive acá. Está ordenado por **categoría de producto**,
las mismas que usa la web y las mismas con las que vos pensás el catálogo.

## Dónde busco una foto

| Busco... | Voy a |
|---|---|
| Un producto | `productos/<categoría>/<producto>/` |
| El logo de Valji | `marca/` |
| Sello PYME o Carbono Neutral | `marca/sellos/` |
| Foto de atleta, gente real | `lifestyle/` |
| Banner ancho para web | `banners/` |

Las categorías son las siete de la web: `geles`, `electrolitos`, `barras`, `proteinas`,
`suplementos`, `preentreno`, `otros`.

## Cómo se llaman los archivos

```
productos/<categoría>/<producto>/<sabor>.webp
```

- La carpeta del producto se llama igual que su `id` en `app.js`. Si el producto se llama
  `powergel-hydro` en el código, su carpeta es `powergel-hydro-24u`.
- El sabor va en minúscula, sin tildes, con guiones: `manzana-verde-cafeina.webp`.
- Formato para la web: **.webp**, cuadrado 1600x1600, fondo blanco.

### Dos tipos de toma por producto

| Se llama | Qué es | Para qué sirve |
|---|---|---|
| `<sabor>.webp` | el producto solo, el sachet o el envase | es lo que sale en la web |
| `caja-<sabor>.webp` | la caja display de 24 unidades | pauta, carrusel, mayoreo |

Hoy la web solo muestra las tomas de producto solo. Las `caja-` están guardadas para cuando las
necesités en marketing.

En `geles/caja-mix/` la distinción es la misma con otras palabras: `sachets-original.webp` son los
geles sueltos abanicados (lo que muestra la web hoy) y `caja-original.webp` es la caja cerrada, que
es lo que la persona realmente recibe por ₡36.465.

### `_fuente/`

Dentro de cada producto, `_fuente/` guarda lo que **no** se publica: el PNG original sin comprimir,
versiones viejas y el `.webloc` con el link de dónde salió la foto. Nada de ahí llega a la web.
Cada original se llama igual que su webp de producción, así sabés cuál es cuál.

Para regenerar un webp desde su original:

```bash
cwebp -q 88 _fuente/naranja.png -o naranja.webp
```

## Reglas al agregar fotos nuevas

1. Guardá el original en el `_fuente/` del producto.
2. Sacá el `.webp` con `cwebp -q 88`, cuadrado, fondo blanco.
3. Nombralo con el sabor en slug, o con prefijo `caja-` si es la caja.
4. **Solo si va a salir en la web**, agregá la ruta al array `images:` de ese producto en `app.js`.
   El sitio no lee carpetas: si la ruta no está en `app.js`, la foto no aparece. Por eso podés
   guardar material extra acá sin miedo a romper nada.

## Qué hay hoy sin usar en la web

Guardado a propósito, listo para marketing:

- Las 8 cajas display de PowerGel (4 Original, 4 Hydro) y las 2 Cajas MIX.
- `lifestyle/atleta-anfora-4x5.jpg` y `lifestyle/trail-runner-bastones-1x1.jpg`.
- `marca/valji-logo-blanco.png` (logo blanco con fondo transparente, para poner sobre foto),
  `marca/valji-logo-fondo-blanco.jpg` y las versiones alternas de los sellos.
- `proteinas/muscle-milk-shake/fresa.png`.

## Ojo

Las fotos de piezas ya publicadas (artes, carruseles, inspo de pauta) **no** van acá: viven en
`valji-marketing/posts/` y `valji-marketing/pautas/`. Esta carpeta es materia prima, no piezas
terminadas.
