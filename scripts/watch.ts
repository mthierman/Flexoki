import { exec } from "node:child_process";
import { watch } from "node:fs/promises";
import { resolve } from "node:path";
import { stdin, stdout } from "node:process";
import { createInterface } from "node:readline/promises";

const watchFolder = resolve(import.meta.dirname, "..", "..", "modules");

function build() {
    console.clear();
    console.log(
        `Watching ${watchFolder}... ${new Date().toLocaleTimeString("en-US", { hour12: false })}`,
    );
    exec(`pnpm build`);
}

const cli = createInterface(stdin, stdout);

cli.on("close", () => {
    console.log("Shutting down...");
    process.exit();
});

build();

const watcher = watch(watchFolder, {
    persistent: true,
    recursive: true,
});

let watching = true;

try {
    for await (const _ of watcher) {
        if (!watching) {
            build();
        }

        build();

        watching = true;

        setTimeout(() => {
            watching = false;
        }, 10);
    }
} catch (error) {
    console.log(error);
    if (error instanceof Error) {
        console.error(error.message);
    }
}
