import Color from "colorjs.io";

const hex = (color: Color) => {
    return color.toString({ format: "hex" });
};

export type Theme = "Dark" | "Light";

export type AccentColor =
    | "Red"
    | "Orange"
    | "Yellow"
    | "Green"
    | "Cyan"
    | "Blue"
    | "Purple"
    | "Magenta";

export interface ColorTheme {
    [index: string]: Color | string;
    "bg": Color | string;
    "bg-2": Color | string;
    "ui": Color | string;
    "ui-2": Color | string;
    "ui-3": Color | string;
    "tx-3": Color | string;
    "tx-2": Color | string;
    "tx": Color | string;
    "re": Color | string;
    "re2": Color | string;
    "or": Color | string;
    "or2": Color | string;
    "ye": Color | string;
    "ye2": Color | string;
    "gr": Color | string;
    "gr2": Color | string;
    "cy": Color | string;
    "cy2": Color | string;
    "bl": Color | string;
    "bl2": Color | string;
    "pu": Color | string;
    "pu2": Color | string;
    "ma": Color | string;
    "ma2": Color | string;
    "transparent": Color | string;
}

export interface Mapping {
    ui: {
        [index: string]: Color | string;
        "main-background": Color | string;
        "secondary-background": Color | string;
        "borders": Color | string;
        "hovered-borders": Color | string;
        "active-borders": Color | string;
        "faint-text": Color | string;
        "muted-text": Color | string;
        "primary-text": Color | string;
        "error-text": Color | string;
        "warning-text": Color | string;
        "success-text": Color | string;
        "links": Color | string;
        "active-states": Color | string;
    };
    syntax: {
        [index: string]: Color | string;
        "comments": Color | string;
        "punctuation": Color | string;
        "operators": Color | string;
        "invalid": Color | string;
        "imports": Color | string;
        "functions": Color | string;
        "constants": Color | string;
        "keywords": Color | string;
        "strings": Color | string;
        "variables": Color | string;
        "attributes": Color | string;
        "numbers": Color | string;
        "language-features": Color | string;
    };
}

export const baseTone = {
    "black": new Color("#100F0F"),
    "base-950": new Color("#1C1B1A"),
    "base-900": new Color("#282726"),
    "base-850": new Color("#343331"),
    "base-800": new Color("#403E3C"),
    "base-700": new Color("#575653"),
    "base-600": new Color("#6F6E69"),
    "base-500": new Color("#878580"),
    "base-300": new Color("#B7B5AC"),
    "base-200": new Color("#CECDC3"),
    "base-150": new Color("#DAD8CE"),
    "base-100": new Color("#E6E4D9"),
    "base-50": new Color("#F2F0E5"),
    "paper": new Color("#FFFCF0"),
};

export const accentColor = {
    "red-600": new Color("#AF3029"),
    "orange-600": new Color("#BC5215"),
    "yellow-600": new Color("#AD8301"),
    "green-600": new Color("#66800B"),
    "cyan-600": new Color("#24837B"),
    "blue-600": new Color("#205EA6"),
    "purple-600": new Color("#5E409D"),
    "magenta-600": new Color("#A02F6F"),
    "red-400": new Color("#D14D41"),
    "orange-400": new Color("#DA702C"),
    "yellow-400": new Color("#D0A215"),
    "green-400": new Color("#879A39"),
    "cyan-400": new Color("#3AA99F"),
    "blue-400": new Color("#4385BE"),
    "purple-400": new Color("#8B7EC8"),
    "magenta-400": new Color("#CE5D97"),
};

export const dark: ColorTheme = {
    "bg": baseTone["black"],
    "bg-2": baseTone["base-950"],
    "ui": baseTone["base-900"],
    "ui-2": baseTone["base-850"],
    "ui-3": baseTone["base-800"],
    "tx-3": baseTone["base-700"],
    "tx-2": baseTone["base-500"],
    "tx": baseTone["base-200"],
    "re": accentColor["red-400"],
    "re2": accentColor["red-600"],
    "or": accentColor["orange-400"],
    "or2": accentColor["orange-600"],
    "ye": accentColor["yellow-400"],
    "ye2": accentColor["yellow-600"],
    "gr": accentColor["green-400"],
    "gr2": accentColor["green-600"],
    "cy": accentColor["cyan-400"],
    "cy2": accentColor["cyan-600"],
    "bl": accentColor["blue-400"],
    "bl2": accentColor["blue-600"],
    "pu": accentColor["purple-400"],
    "pu2": accentColor["purple-600"],
    "ma": accentColor["magenta-400"],
    "ma2": accentColor["magenta-600"],
    "transparent": new Color("#00000000"),
};

export const light: ColorTheme = {
    "bg": baseTone["paper"],
    "bg-2": baseTone["base-50"],
    "ui": baseTone["base-100"],
    "ui-2": baseTone["base-150"],
    "ui-3": baseTone["base-200"],
    "tx-3": baseTone["base-300"],
    "tx-2": baseTone["base-600"],
    "tx": baseTone["black"],
    "re": accentColor["red-600"],
    "re2": accentColor["red-400"],
    "or": accentColor["orange-600"],
    "or2": accentColor["orange-400"],
    "ye": accentColor["yellow-600"],
    "ye2": accentColor["yellow-400"],
    "gr": accentColor["green-600"],
    "gr2": accentColor["green-400"],
    "cy": accentColor["cyan-600"],
    "cy2": accentColor["cyan-400"],
    "bl": accentColor["blue-600"],
    "bl2": accentColor["blue-400"],
    "pu": accentColor["purple-600"],
    "pu2": accentColor["purple-400"],
    "ma": accentColor["magenta-600"],
    "ma2": accentColor["magenta-400"],
    "transparent": new Color("#FFFFFF00"),
};

export function hexTheme(colorTheme: ColorTheme) {
    Object.entries(colorTheme).forEach(([key, value]: [string, Color | string]) => {
        colorTheme[key] = hex(value as Color);
    });
    return colorTheme;
}

console.log(hexTheme(dark));
console.log(hexTheme(light));

export function makeMapping(colorTheme: ColorTheme): Mapping {
    return {
        ui: {
            "main-background": colorTheme["bg"],
            "secondary-background": colorTheme["bg-2"],
            "borders": colorTheme["ui"],
            "hovered-borders": colorTheme["ui-2"],
            "active-borders": colorTheme["ui-3"],
            "faint-text": colorTheme["tx-3"],
            "muted-text": colorTheme["tx-2"],
            "primary-text": colorTheme["tx"],
            "error-text": colorTheme["re"],
            "warning-text": colorTheme["or"],
            "success-text": colorTheme["gr"],
            "links": colorTheme["cy"],
            "active-states": colorTheme["cy"],
        },
        syntax: {
            "comments": colorTheme["tx-3"],
            "punctuation": colorTheme["tx-2"],
            "operators": colorTheme["tx-2"],
            "invalid": colorTheme["re"],
            "imports": colorTheme["re"],
            "functions": colorTheme["or"],
            "constants": colorTheme["ye"],
            "keywords": colorTheme["gr"],
            "strings": colorTheme["cy"],
            "variables": colorTheme["bl"],
            "attributes": colorTheme["bl"],
            "numbers": colorTheme["pu"],
            "language-features": colorTheme["ma"],
        },
    };
}
