import { rm } from "node:fs/promises";
import { resolve } from "node:path";

const outdir = {
    themes: resolve(import.meta.dirname, "..", "themes"),
    terminal: resolve(import.meta.dirname, "..", "terminal"),
};

try {
    await rm(outdir.themes, { recursive: true });
    await rm(outdir.terminal, { recursive: true });
} catch (error) {}
