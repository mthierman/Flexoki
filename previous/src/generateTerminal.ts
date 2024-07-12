import { darkMappings, lightMappings, tones } from "./config";

export default (dark: boolean) => {
    const mappings = dark ? darkMappings : lightMappings;

    return {
        background: mappings["bg"],
        black: tones["base-950"],
        blue: mappings["bl2"],
        brightBlack: tones["base-900"],
        brightBlue: mappings["bl"],
        brightCyan: mappings["cy"],
        brightGreen: mappings["gr"],
        brightPurple: mappings["ma"],
        brightRed: mappings["re"],
        brightWhite: tones["base-50"],
        brightYellow: mappings["ye"],
        cursorColor: mappings["tx"],
        cyan: mappings["cy2"],
        foreground: mappings["tx"],
        green: mappings["gr2"],
        name: `Flexoki ${dark ? "Dark" : "Light"}`,
        purple: mappings["ma2"],
        red: mappings["re2"],
        selectionBackground: mappings["bl2"],
        white: tones["base-100"],
        yellow: mappings["ye2"],
    };
};
