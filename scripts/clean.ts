import { existsSync } from "node:fs";
import { rm } from "node:fs/promises";
import { resolve } from "node:path";

const outdir = {
    themes: resolve(import.meta.dirname, "..", "themes"),
    terminal: resolve(import.meta.dirname, "..", "terminal"),
};

Object.values(outdir).forEach(async (dir) => {
    if (existsSync(dir)) {
        await rm(dir, { recursive: true });
    }
});
