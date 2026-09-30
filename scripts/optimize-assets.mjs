import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = "public/assets";
const MIN_BYTES = 100 * 1024;
const SCALE = 2;
const QUALITY = 88;

async function* walk(dir) {
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

const kb = (bytes) => Math.round(bytes / 1024);
const rows = [];

for await (const file of walk(ROOT)) {
  const ext = path.extname(file).toLowerCase();
  if (ext !== ".svg" && ext !== ".png") continue;

  const { size } = await fs.stat(file);
  if (size < MIN_BYTES) continue;

  const out = file.slice(0, -ext.length) + ".webp";
  const input = await fs.readFile(file);
  const image =
    ext === ".svg" ? sharp(input, { density: 72 * SCALE }) : sharp(input);

  const info = await image
    .webp({ quality: QUALITY, alphaQuality: 90, effort: 5 })
    .toFile(out);

  rows.push({
    file: path.relative(".", file),
    beforeKB: kb(size),
    afterKB: kb(info.size),
    output: `${info.width}x${info.height}`,
  });
}

console.table(rows);

const url = (p) => "../../../" + p.split(path.sep).join("/");
const cell = (src, bg) =>
  `<div class="box ${bg}"><img src="${src}" alt="" /></div>`;
const html = `<!doctype html><meta charset="utf-8"><title>Asset compare</title>
<style>
  body{font-family:system-ui;margin:24px;background:#f4f4f5}
  h3{margin:28px 0 8px;font-size:14px}
  .row{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
  .box{padding:16px;border-radius:12px;display:flex;align-items:center;justify-content:center}
  .blue{background:#003be2}.light{background:#fff}
  img{width:200px;max-width:100%;height:auto}
</style>
<p>Columns: original on blue, WebP on blue, original on white, WebP on white. Each pair must look identical.</p>
${rows
  .map((r) => {
    const orig = url(r.file);
    const webp = orig.replace(/\.(svg|png)$/i, ".webp");
    return `<h3>${r.file} (${r.beforeKB} KB to ${r.afterKB} KB)</h3>
<div class="row">${cell(orig, "blue")}${cell(webp, "blue")}${cell(orig, "light")}${cell(webp, "light")}</div>`;
  })
  .join("\n")}`;

const previewDir = "node_modules/.cache/asset-compare";
await fs.mkdir(previewDir, { recursive: true });
await fs.writeFile(path.join(previewDir, "index.html"), html);
console.log("\nPreview: node_modules/.cache/asset-compare/index.html");
