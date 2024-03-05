import * as esbuild from "esbuild";
import { exec } from "node:child_process";
import { dirname, join, resolve } from "node:path";
import * as process from "node:process";
import { stdin, stdout } from "node:process";
import * as readline from "node:readline";

const paths = () => {
    const root = dirname(import.meta.dirname);
    const src = resolve(root, "src");
    const build = resolve(root, "build");
    const input = join(src, "build.ts");
    const output = join(build, "build.js");

    return {
        root,
        src,
        build,
        input,
        output,
    };
};

const cli = readline.createInterface(stdin, stdout);

export default async ({
    build = paths().build,
    input = paths().input,
    output = paths().output,
}: WatchParams = {}) => {
    const plugin: esbuild.Plugin = {
        name: "exec",
        setup(build) {
            build.onEnd(async (result) => {
                const date = new Date();
                console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);

                if (result.metafile) {
                    console.log(await esbuild.analyzeMetafile(result.metafile));
                }

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

    await ctx.watch();

    cli.on("close", () => {
        ctx.dispose();
        process.exit();
    });
};
