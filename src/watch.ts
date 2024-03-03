import * as esbuild from "esbuild";
import { exec } from "node:child_process";
import { dirname, join, resolve } from "node:path";
import * as process from "node:process";
import * as readline from "node:readline";

const dir = {
    src: resolve(dirname(import.meta.dirname), "src"),
    build: resolve(dirname(import.meta.dirname), "build"),
};

const files = {
    input: join(dir.src, "build.ts"),
    output: join(dir.build, "build.js"),
};

export const watch = async ({
    build = dir.build,
    input = files.input,
    output = files.output,
}: WatchParams = {}) => {
    const plugin: esbuild.Plugin = {
        name: "exec",
        setup(build) {
            build.onEnd(async (result) => {
                const date = new Date();
                console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
                if (result.metafile) console.log(await esbuild.analyzeMetafile(result.metafile));
                exec(`node ${output}`);
            });
        },
    };

    const ctx = await esbuild.context({
        entryPoints: [input],
        bundle: true,
        outdir: build,
        platform: "node",
        format: "esm",
        packages: "external",
        plugins: [plugin],
        metafile: true,
    });

    const cleanup = () => {
        ctx.dispose();
        console.log("Shutting down...");
        process.exit();
    };

    await ctx.watch();

    if (process.platform === "win32") {
        readline
            .createInterface({
                input: process.stdin,
                output: process.stdout,
            })
            .on("SIGINT", () => {
                cleanup();
            });
    } else {
        process.on("SIGINT", () => {
            cleanup();
        });
    }
};
