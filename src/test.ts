import { exec } from "node:child_process";
import { watch } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { stdin as input, stdout as output } from "node:process";
import * as readline from "node:readline/promises";

const path = {
    src: resolve(dirname(import.meta.dirname), "src"),
    build: resolve(dirname(import.meta.dirname), "build"),
};

const cli = readline.createInterface(input, output);

const build = () => {
    exec(
        `esbuild ${path.src}/build.ts --bundle --outdir=${path.build} --platform=node --format=esm --packages=external && node ${path.build}/build.js`,
    );
};

const run = async () => {
    console.log("Building...");
    build();

    try {
        let watching;
        const watcher = watch(path.src, { persistent: true, recursive: true });

        for await (const event of watcher) {
            if (!watching) {
                build();
                console.log(`File changed: ${event.filename}, building...`);
            }

            watching = true;

            setTimeout(() => {
                watching = false;
            }, 100);
        }
    } catch (err: any) {
        throw err;
    }
};

const main = () => {
    run();

    cli.on("close", () => {
        console.log("Shutting down...");
        process.exit();
    });
};

main();
