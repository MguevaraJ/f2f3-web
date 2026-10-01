# F2+F3 — landing page

Website of [F2+F3](https://github.com/MguevaraJ/f2f3), the screenshot manager for technical Minecraft, and its
Fabric mod [F2+F3 Companion](https://github.com/MguevaraJ/f2f3-companion).

Live: https://mguevaraj.github.io/f2f3-web/ (English) · https://mguevaraj.github.io/f2f3-web/es/ (Español)

Static site built with [Astro](https://astro.build). No client framework: one component, two languages.

The figures of the local AI model shown on the page are measured: the labelled set (248 screenshots), the manifest
and the raw results are described below and kept in `eval/`.

```bash
npm install
npm run dev       # http://localhost:4321/f2f3-web/
npm run build     # dist/
```

## Layout

```
src/components/Landing.astro   the page; receives the copy of one language
src/i18n/{en,es}.ts            all the text (same shape in both)
src/data/eval.json             measured results of the local AI model
src/styles/global.css          design tokens and styles
public/media/                  screenshots and videos of the app and the mod
scripts/eval-to-data.mjs       converts the app's evaluation output into eval.json
```

## The local AI figures

`src/data/eval.json` is generated, not written by hand. In the app repository:

```bash
npm run eval:dataset -- <screenshots dir> <manifest.tsv> out.json
```

scores the local model against screenshots whose real biome was recorded by the mod, and
`node scripts/eval-to-data.mjs out.json 1920×1080` turns that output into the file the page reads.

Pushing to `main` publishes the site with GitHub Pages (`.github/workflows/pages.yml`).

Not an official Minecraft product. Not approved by or associated with Mojang or Microsoft.
