import { exec } from "node:child_process";
import { watch } from "node:fs/promises";
import { resolve } from "node:path";
import { stdin, stdout } from "node:process";
import { createInterface } from "node:readline/promises";

function build() {
    console.clear();
    console.log(`Building... ${new Date().toLocaleTimeString("en-US", { hour12: false })}`);
    exec(`pnpm build`);
}

const cli = createInterface(stdin, stdout);

cli.on("close", () => {
    console.log("Shutting down...");
    process.exit();
});

build();

const watcher = watch(resolve(import.meta.dirname, "..", "scripts", "flexoki.ts"), {
    persistent: true,
});

let watching = true;

try {
    for await (const _ of watcher) {
        if (!watching) {
            build();
        }

        watching = true;

        setTimeout(() => {
            watching = false;
        }, 50);
    }
} catch (error) {
    console.log(error);
    if (error instanceof Error) {
        console.error(error.message);
    }
}
