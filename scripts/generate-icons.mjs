import sharp from "sharp";
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

// Source: hand-authored public/icon.svg. No generated bitmap is the source of truth.
const root = new URL("../", import.meta.url);
const source = await readFile(new URL("public/icon.svg", root), "utf8");
const square = source.replace('rx="5"', 'rx="0"');
// Android's maskable artwork stays within the centered 80% safe-zone diameter.
const maskable = square.replace('transform="rotate(45 12 12)"', 'transform="translate(2.4 2.4) scale(.8) rotate(45 12 12)"');
const outputs = [
  ["favicon-16x16.png", 16, source],
  ["favicon-32x32.png", 32, source],
  ["apple-touch-icon.png", 180, square],
  ["icon-192x192.png", 192, source],
  ["icon-512x512.png", 512, source],
  ["android-chrome-192x192.png", 192, source],
  ["android-chrome-512x512.png", 512, source],
  ["icon-maskable-512x512.png", 512, maskable],
];

for (const [name, size, svg] of outputs) {
  await sharp(Buffer.from(svg)).resize(size, size).png().toFile(fileURLToPath(new URL(`public/${name}`, root)));
}

// Multi-resolution ICO: each entry embeds a PNG, supported by modern browsers.
const sizes = [16, 32, 48];
const frames = await Promise.all(sizes.map((size) => sharp(Buffer.from(source)).resize(size, size).png().toBuffer()));
const directory = Buffer.alloc(6 + sizes.length * 16);
directory.writeUInt16LE(1, 2);
directory.writeUInt16LE(sizes.length, 4);
let offset = directory.length;
frames.forEach((frame, index) => {
  const entry = 6 + index * 16;
  directory[entry] = sizes[index];
  directory[entry + 1] = sizes[index];
  directory.writeUInt16LE(1, entry + 4);
  directory.writeUInt16LE(32, entry + 6);
  directory.writeUInt32LE(frame.length, entry + 8);
  directory.writeUInt32LE(offset, entry + 12);
  offset += frame.length;
});
await writeFile(new URL("src/app/favicon.ico", root), Buffer.concat([directory, ...frames]));
console.log(`Exported ${outputs.length} PNGs and favicon.ico from public/icon.svg`);
