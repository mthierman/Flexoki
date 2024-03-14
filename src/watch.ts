import * as esbuild from "esbuild";
import { fork } from "node:child_process";
import { dirname, join, resolve } from "node:path";
import { exit, stdin, stdout } from "node:process";
import * as readline from "node:readline/promises";

export default async (script: string) => {
    const root = dirname(import.meta.dirname);
    const scripts = resolve(root, "scripts");
    const outdir = resolve(root, "build");

    const plugin: esbuild.Plugin = {
        name: "exec",
        setup(build) {
            build.onEnd(async (result) => {
                const date = new Date();
                console.log(`\n  ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);

                if (result.metafile) {
                    console.log(await esbuild.analyzeMetafile(result.metafile));
                }

                fork(join(outdir, `${script}.js`));
            });
        },
    };

    const ctx = await esbuild.context({
        entryPoints: [join(scripts, `${script}.ts`)],
        bundle: true,
        outdir: outdir,
        platform: "node",
        format: "esm",
        packages: "external",
        plugins: [plugin],
        metafile: true,
    });

    // console.clear();

    await ctx.watch();

    const cli = readline.createInterface(stdin, stdout);

    await cli.on("close", () => {
        console.log("Exiting...");
        ctx.dispose();
        exit();
    });
};
