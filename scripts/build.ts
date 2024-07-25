import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { generateTerminal, generateTheme } from "../modules/generator.mjs";

const outdir = {
    themes: resolve(import.meta.dirname, "..", "..", "themes"),
    terminal: resolve(import.meta.dirname, "..", "..", "terminal"),
};

await mkdir(outdir.themes, { recursive: true });

await Promise.all([
    writeFile(
        resolve(outdir.themes, "flexoki-dark-red-color-theme.json"),
        generateTheme("Dark", "Red"),
    ),
    writeFile(
        resolve(outdir.themes, "flexoki-dark-orange-color-theme.json"),
        generateTheme("Dark", "Orange"),
    ),
    writeFile(
        resolve(outdir.themes, "flexoki-dark-yellow-color-theme.json"),
        generateTheme("Dark", "Yellow"),
    ),
    writeFile(
        resolve(outdir.themes, "flexoki-dark-green-color-theme.json"),
        generateTheme("Dark", "Green"),
    ),
    writeFile(
        resolve(outdir.themes, "flexoki-dark-cyan-color-theme.json"),
        generateTheme("Dark", "Cyan"),
    ),
    writeFile(
        resolve(outdir.themes, "flexoki-dark-blue-color-theme.json"),
        generateTheme("Dark", "Blue"),
    ),
    writeFile(
        resolve(outdir.themes, "flexoki-dark-purple-color-theme.json"),
        generateTheme("Dark", "Purple"),
    ),
    writeFile(
        resolve(outdir.themes, "flexoki-dark-magenta-color-theme.json"),
        generateTheme("Dark", "Magenta"),
    ),
    writeFile(
        resolve(outdir.themes, "flexoki-light-red-color-theme.json"),
        generateTheme("Light", "Red"),
    ),
    writeFile(
        resolve(outdir.themes, "flexoki-light-orange-color-theme.json"),
        generateTheme("Light", "Orange"),
    ),
    writeFile(
        resolve(outdir.themes, "flexoki-light-yellow-color-theme.json"),
        generateTheme("Light", "Yellow"),
    ),
    writeFile(
        resolve(outdir.themes, "flexoki-light-green-color-theme.json"),
        generateTheme("Light", "Green"),
    ),
    writeFile(
        resolve(outdir.themes, "flexoki-light-cyan-color-theme.json"),
        generateTheme("Light", "Cyan"),
    ),
    writeFile(
        resolve(outdir.themes, "flexoki-light-blue-color-theme.json"),
        generateTheme("Light", "Blue"),
    ),
    writeFile(
        resolve(outdir.themes, "flexoki-light-purple-color-theme.json"),
        generateTheme("Light", "Purple"),
    ),
    writeFile(
        resolve(outdir.themes, "flexoki-light-magenta-color-theme.json"),
        generateTheme("Light", "Magenta"),
    ),
]);

await mkdir(outdir.terminal, { recursive: true });

await Promise.all([
    writeFile(resolve(outdir.terminal, "dark.json"), generateTerminal("Dark")),
    writeFile(resolve(outdir.terminal, "light.json"), generateTerminal("Light")),
]);
