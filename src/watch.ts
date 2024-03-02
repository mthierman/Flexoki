import * as process from "node:child_process";
import * as fs from "node:fs/promises";
import * as path from "node:path";

export const srcDir = path.resolve(path.dirname(import.meta.dirname), "src");

const runBuild = () => {
    const dev = process.exec(
        "esbuild src/index.ts --bundle --platform=node --format=esm --outfile=build/index.js && node build/index.js",
    );
};

runBuild();

(async () => {
    try {
        let watching;
        const watcher = fs.watch(srcDir, { persistent: true, recursive: true });

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
})();
