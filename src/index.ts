import * as fs from "node:fs/promises";
import getTheme from "./theme.js";

const themes = "./themes-new";

const light = {
    name: "Flexoki Light",
    file: `${themes}/flexoki-light-color-theme.json`,
};

const dark = {
    name: "Flexoki Dark",
    file: `${themes}/flexoki-dark-color-theme.json`,
};

fs.mkdir(themes, { recursive: true })
    .then(() =>
        Promise.all([
            fs.writeFile(
                dark.file,
                JSON.stringify(getTheme(dark.name), null, 4),
            ),
            fs.writeFile(
                light.file,
                JSON.stringify(getTheme(light.name), null, 4),
            ),
        ]),
    )
    .catch(() => process.exit(1));
