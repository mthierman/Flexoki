import * as fs from "node:fs/promises";
import getTheme from "./theme.js";
import getTerminal from "./terminal.js";

fs.mkdir("themes", { recursive: true })
    .then(() =>
        Promise.all([
            fs.writeFile(
                "themes/flexoki-dark-red-color-theme.json",
                JSON.stringify(getTheme("Dark", "Red"), null, 4),
            ),
            fs.writeFile(
                "themes/flexoki-dark-orange-color-theme.json",
                JSON.stringify(getTheme("Dark", "Orange"), null, 4),
            ),
            fs.writeFile(
                "themes/flexoki-dark-yellow-color-theme.json",
                JSON.stringify(getTheme("Dark", "Yellow"), null, 4),
            ),
            fs.writeFile(
                "themes/flexoki-dark-green-color-theme.json",
                JSON.stringify(getTheme("Dark", "Green"), null, 4),
            ),
            fs.writeFile(
                "themes/flexoki-dark-cyan-color-theme.json",
                JSON.stringify(getTheme("Dark", "Cyan"), null, 4),
            ),
            fs.writeFile(
                "themes/flexoki-dark-blue-color-theme.json",
                JSON.stringify(getTheme("Dark", "Blue"), null, 4),
            ),
            fs.writeFile(
                "themes/flexoki-dark-purple-color-theme.json",
                JSON.stringify(getTheme("Dark", "Purple"), null, 4),
            ),
            fs.writeFile(
                "themes/flexoki-dark-magenta-color-theme.json",
                JSON.stringify(getTheme("Dark", "Magenta"), null, 4),
            ),
            fs.writeFile(
                "themes/flexoki-light-red-color-theme.json",
                JSON.stringify(getTheme("Light", "Red"), null, 4),
            ),
            fs.writeFile(
                "themes/flexoki-light-orange-color-theme.json",
                JSON.stringify(getTheme("Light", "Orange"), null, 4),
            ),
            fs.writeFile(
                "themes/flexoki-light-yellow-color-theme.json",
                JSON.stringify(getTheme("Light", "Yellow"), null, 4),
            ),
            fs.writeFile(
                "themes/flexoki-light-green-color-theme.json",
                JSON.stringify(getTheme("Light", "Green"), null, 4),
            ),
            fs.writeFile(
                "themes/flexoki-light-cyan-color-theme.json",
                JSON.stringify(getTheme("Light", "Cyan"), null, 4),
            ),
            fs.writeFile(
                "themes/flexoki-light-blue-color-theme.json",
                JSON.stringify(getTheme("Light", "Blue"), null, 4),
            ),
            fs.writeFile(
                "themes/flexoki-light-purple-color-theme.json",
                JSON.stringify(getTheme("Light", "Purple"), null, 4),
            ),
            fs.writeFile(
                "themes/flexoki-light-magenta-color-theme.json",
                JSON.stringify(getTheme("Light", "Magenta"), null, 4),
            ),
        ]),
    )
    .catch(() => process.exit(1));

fs.mkdir("terminal", { recursive: true })
    .then(() =>
        Promise.all([
            fs.writeFile(
                "terminal/dark.json",
                JSON.stringify(getTerminal("Dark", "Blue"), null, 4),
            ),
            fs.writeFile(
                "terminal/light.json",
                JSON.stringify(getTerminal("Light", "Blue"), null, 4),
            ),
        ]),
    )
    .catch(() => process.exit(1));
