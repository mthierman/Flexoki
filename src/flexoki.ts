export type Theme = "Dark" | "Light";

export type Color = "Red" | "Orange" | "Yellow" | "Green" | "Cyan" | "Blue" | "Purple" | "Magenta";

export interface ColorTheme {
    "bg": string;
    "bg-2": string;
    "ui": string;
    "ui-2": string;
    "ui-3": string;
    "tx-3": string;
    "tx-2": string;
    "tx": string;
    "re": string;
    "re2": string;
    "or": string;
    "or2": string;
    "ye": string;
    "ye2": string;
    "gr": string;
    "gr2": string;
    "cy": string;
    "cy2": string;
    "bl": string;
    "bl2": string;
    "pu": string;
    "pu2": string;
    "ma": string;
    "ma2": string;
    "transparent": string;
}

export interface Mapping {
    ui: {
        "main-background": string;
        "secondary-background": string;
        "borders": string;
        "hovered-borders": string;
        "active-borders": string;
        "faint-text": string;
        "muted-text": string;
        "primary-text": string;
        "error-text": string;
        "warning-text": string;
        "success-text": string;
        "links": string;
        "active-states": string;
    };
    syntax: {
        "comments": string;
        "punctuation": string;
        "operators": string;
        "invalid": string;
        "imports": string;
        "functions": string;
        "constants": string;
        "keywords": string;
        "strings": string;
        "variables": string;
        "attributes": string;
        "numbers": string;
        "language-features": string;
    };
}

export const baseTone = {
    "black": "#100F0F",
    "base-950": "#1C1B1A",
    "base-900": "#282726",
    "base-850": "#343331",
    "base-800": "#403E3C",
    "base-700": "#575653",
    "base-600": "#6F6E69",
    "base-500": "#878580",
    "base-300": "#B7B5AC",
    "base-200": "#CECDC3",
    "base-150": "#DAD8CE",
    "base-100": "#E6E4D9",
    "base-50": "#F2F0E5",
    "paper": "#FFFCF0",
};

export const accentColor = {
    "red-600": "#AF3029",
    "orange-600": "#BC5215",
    "yellow-600": "#AD8301",
    "green-600": "#66800B",
    "cyan-600": "#24837B",
    "blue-600": "#205EA6",
    "purple-600": "#5E409D",
    "magenta-600": "#A02F6F",
    "red-400": "#D14D41",
    "orange-400": "#DA702C",
    "yellow-400": "#D0A215",
    "green-400": "#879A39",
    "cyan-400": "#3AA99F",
    "blue-400": "#4385BE",
    "purple-400": "#8B7EC8",
    "magenta-400": "#CE5D97",
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
    "transparent": "#00000000",
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
    "transparent": "#FFFFFF00",
};

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
