import { exec } from "node:child_process";
import { watch } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const src = resolve(dirname(import.meta.dirname), "src");

const runBuild = () => {
    exec(
        "esbuild src/index.ts --bundle --platform=node --format=esm --outfile=build/index.js && node build/index.js",
    );
};

const watchBuild = async () => {
    runBuild();

    try {
        let watching;
        const watcher = watch(src, { persistent: true, recursive: true });

        for await (const event of watcher) {
            if (!watching) {
                runBuild();
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

watchBuild();
