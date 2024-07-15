import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
// import { generateTerminal, generateTheme } from "../modules/generators.mjs";
import { generateTerminal } from "../modules/generators.mjs";

const outdir = {
    themes: resolve(import.meta.dirname, "..", "..", "themes"),
    terminal: resolve(import.meta.dirname, "..", "..", "terminal"),
};

// await mkdir(outdir.themes, { recursive: true });

// await Promise.all([
//     writeFile(
//         resolve(outdir.themes, "flexoki-dark-red-color-theme.json"),
//         JSON.stringify(generateTheme("Dark", "Red"), null, 4),
//     ),
//     writeFile(
//         resolve(outdir.themes, "flexoki-dark-orange-color-theme.json"),
//         JSON.stringify(generateTheme("Dark", "Orange"), null, 4),
//     ),
//     writeFile(
//         resolve(outdir.themes, "flexoki-dark-yellow-color-theme.json"),
//         JSON.stringify(generateTheme("Dark", "Yellow"), null, 4),
//     ),
//     writeFile(
//         resolve(outdir.themes, "flexoki-dark-green-color-theme.json"),
//         JSON.stringify(generateTheme("Dark", "Green"), null, 4),
//     ),
//     writeFile(
//         resolve(outdir.themes, "flexoki-dark-cyan-color-theme.json"),
//         JSON.stringify(generateTheme("Dark", "Cyan"), null, 4),
//     ),
//     writeFile(
//         resolve(outdir.themes, "flexoki-dark-blue-color-theme.json"),
//         JSON.stringify(generateTheme("Dark", "Blue"), null, 4),
//     ),
//     writeFile(
//         resolve(outdir.themes, "flexoki-dark-purple-color-theme.json"),
//         JSON.stringify(generateTheme("Dark", "Purple"), null, 4),
//     ),
//     writeFile(
//         resolve(outdir.themes, "flexoki-dark-magenta-color-theme.json"),
//         JSON.stringify(generateTheme("Dark", "Magenta"), null, 4),
//     ),
//     writeFile(
//         resolve(outdir.themes, "flexoki-light-red-color-theme.json"),
//         JSON.stringify(generateTheme("Light", "Red"), null, 4),
//     ),
//     writeFile(
//         resolve(outdir.themes, "flexoki-light-orange-color-theme.json"),
//         JSON.stringify(generateTheme("Light", "Orange"), null, 4),
//     ),
//     writeFile(
//         resolve(outdir.themes, "flexoki-light-yellow-color-theme.json"),
//         JSON.stringify(generateTheme("Light", "Yellow"), null, 4),
//     ),
//     writeFile(
//         resolve(outdir.themes, "flexoki-light-green-color-theme.json"),
//         JSON.stringify(generateTheme("Light", "Green"), null, 4),
//     ),
//     writeFile(
//         resolve(outdir.themes, "flexoki-light-cyan-color-theme.json"),
//         JSON.stringify(generateTheme("Light", "Cyan"), null, 4),
//     ),
//     writeFile(
//         resolve(outdir.themes, "flexoki-light-blue-color-theme.json"),
//         JSON.stringify(generateTheme("Light", "Blue"), null, 4),
//     ),
//     writeFile(
//         resolve(outdir.themes, "flexoki-light-purple-color-theme.json"),
//         JSON.stringify(generateTheme("Light", "Purple"), null, 4),
//     ),
//     writeFile(
//         resolve(outdir.themes, "flexoki-light-magenta-color-theme.json"),
//         JSON.stringify(generateTheme("Light", "Magenta"), null, 4),
//     ),
// ]);

await mkdir(outdir.terminal, { recursive: true });

await Promise.all([
    writeFile(resolve(outdir.terminal, "dark.json"), generateTerminal("Dark")),
    writeFile(resolve(outdir.terminal, "light.json"), generateTerminal("Light")),
]);
