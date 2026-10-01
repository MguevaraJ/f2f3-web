# F2+F3 web — contexto para agentes

Landing de **F2+F3** (`../f2f3`, app) y **F2+F3 Companion** (`../f2f3-companion`, mod). Astro estático, sin framework
de cliente. Publicada con GitHub Pages desde `main`: https://mguevaraj.github.io/f2f3-web/ (inglés) y `/es/`.
Estética del Minecraft Launcher y minecraft.net solo a nivel de estilos (grises planos, esquinas rectas, botón verde
con borde inferior, pestañas con subrayado): **no usar fuentes ni recursos de Mojang**; los títulos van en Silkscreen.

```bash
npm run dev      # http://localhost:4321/f2f3-web/
npm run build    # dist/
```

- `src/components/Landing.astro`: la página entera; recibe el texto de un idioma. `Bars.astro` y `Breakdown.astro`
  pintan los resultados de la IA local. Versiones y enlaces de descarga: constantes `APP` y `MOD` al principio.
- `src/i18n/en.ts` y `es.ts`: todo el texto, con la misma forma (`Copy`). Un cambio de texto va en los dos.
- `src/data/eval.json`: cifras medidas del modelo local. **Se generan, no se escriben a mano**: en la app,
  `npm run eval:dataset -- <dir> eval/manifest.tsv eval/out.json` y aquí `node scripts/eval-to-data.mjs eval/out.json
  1918×1078`. Las capturas del conjunto (248) están en `~/Proyectos/f2f3-eval-set`, fuera del repo.
- `public/media/`: capturas de la app en los dos idiomas (`nombre.en.webp` / `nombre.es.webp`, 1430×894) y del mod
  (solo en inglés) más dos vídeos `.mp4` con su póster `.webp`.
- Las capturas de la app se hicieron con su modo debug (`F2F3_CAPTURE` + `F2F3_SCRIPT`) apuntando al cliente de
  prueba del mod (`../f2f3-companion/fabric-26.3/run`), cuya carpeta `screenshots` quedó como biblioteca de muestra.
- El texto no debe prometer más de lo medido: los biomas del modelo local aciertan un 42 %; los mobs, un 85 %.
- Pie obligatorio: "Not an official Minecraft product…".
- Commits: autor "Moises Guevara <mguevaraj27@gmail.com>", terminar con `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`.
