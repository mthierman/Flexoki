import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { Color, Theme, terminal, theme } from "./config";

export default () => {
    const dir = {
        themes: resolve(dirname(import.meta.dirname), "themes"),
        terminal: resolve(dirname(import.meta.dirname), "terminal"),
    };

    mkdir(dir.themes, { recursive: true })
        .then(() =>
            Promise.all([
                writeFile(
                    `${dir.themes}/flexoki-dark-red-color-theme.json`,
                    JSON.stringify(theme(Theme.Dark, Color.Red), null, 4),
                ),
                writeFile(
                    `${dir.themes}/flexoki-dark-orange-color-theme.json`,
                    JSON.stringify(theme(Theme.Dark, Color.Orange), null, 4),
                ),
                writeFile(
                    `${dir.themes}/flexoki-dark-yellow-color-theme.json`,
                    JSON.stringify(theme(Theme.Dark, Color.Yellow), null, 4),
                ),
                writeFile(
                    `${dir.themes}/flexoki-dark-green-color-theme.json`,
                    JSON.stringify(theme(Theme.Dark, Color.Green), null, 4),
                ),
                writeFile(
                    `${dir.themes}/flexoki-dark-cyan-color-theme.json`,
                    JSON.stringify(theme(Theme.Dark, Color.Cyan), null, 4),
                ),
                writeFile(
                    `${dir.themes}/flexoki-dark-blue-color-theme.json`,
                    JSON.stringify(theme(Theme.Dark, Color.Blue), null, 4),
                ),
                writeFile(
                    `${dir.themes}/flexoki-dark-purple-color-theme.json`,
                    JSON.stringify(theme(Theme.Dark, Color.Purple), null, 4),
                ),
                writeFile(
                    `${dir.themes}/flexoki-dark-magenta-color-theme.json`,
                    JSON.stringify(theme(Theme.Dark, Color.Magenta), null, 4),
                ),
                writeFile(
                    `${dir.themes}/flexoki-light-red-color-theme.json`,
                    JSON.stringify(theme(Theme.Light, Color.Red), null, 4),
                ),
                writeFile(
                    `${dir.themes}/flexoki-light-orange-color-theme.json`,
                    JSON.stringify(theme(Theme.Light, Color.Orange), null, 4),
                ),
                writeFile(
                    `${dir.themes}/flexoki-light-yellow-color-theme.json`,
                    JSON.stringify(theme(Theme.Light, Color.Yellow), null, 4),
                ),
                writeFile(
                    `${dir.themes}/flexoki-light-green-color-theme.json`,
                    JSON.stringify(theme(Theme.Light, Color.Green), null, 4),
                ),
                writeFile(
                    `${dir.themes}/flexoki-light-cyan-color-theme.json`,
                    JSON.stringify(theme(Theme.Light, Color.Cyan), null, 4),
                ),
                writeFile(
                    `${dir.themes}/flexoki-light-blue-color-theme.json`,
                    JSON.stringify(theme(Theme.Light, Color.Blue), null, 4),
                ),
                writeFile(
                    `${dir.themes}/flexoki-light-purple-color-theme.json`,
                    JSON.stringify(theme(Theme.Light, Color.Purple), null, 4),
                ),
                writeFile(
                    `${dir.themes}/flexoki-light-magenta-color-theme.json`,
                    JSON.stringify(theme(Theme.Light, Color.Magenta), null, 4),
                ),
            ]),
        )
        .catch(() => process.exit(1));

    mkdir(dir.terminal, { recursive: true })
        .then(() =>
            Promise.all([
                writeFile(`${dir.terminal}/dark.json`, JSON.stringify(terminal(true), null, 4)),
                writeFile(`${dir.terminal}/light.json`, JSON.stringify(terminal(false), null, 4)),
            ]),
        )
        .catch(() => process.exit(1));
};
