import { exec } from "node:child_process";
import { watch } from "node:fs/promises";
import { resolve } from "node:path";
import { stdin, stdout } from "node:process";
import { createInterface } from "node:readline/promises";

async function main() {
    const cli = createInterface(stdin, stdout);

    cli.on("close", () => {
        console.log("Shutting down...");
        process.exit();
    });

    exec(`pnpm build`);

    const watcher = watch(resolve(import.meta.dirname, "..", "modules", "flexoki.ts"), {
        persistent: true,
        recursive: true,
    });

    let watching = true;

    try {
        for await (const event of watcher) {
            if (!watching) {
                exec(`pnpm build`);
                console.clear();
                console.log(
                    `Rebuilding... ${new Date().toLocaleTimeString("en-US", { hour12: false })}`,
                );
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
}

main();
