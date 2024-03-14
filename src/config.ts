export enum Theme {
    Dark,
    Light,
}

export enum Color {
    Red,
    Orange,
    Yellow,
    Green,
    Cyan,
    Blue,
    Purple,
    Magenta,
}

export interface Tones {
    "black": string;
    "base-950": string;
    "base-900": string;
    "base-850": string;
    "base-800": string;
    "base-700": string;
    "base-600": string;
    "base-500": string;
    "base-300": string;
    "base-200": string;
    "base-150": string;
    "base-100": string;
    "base-50": string;
    "paper": string;
    "blue-400": string;
    "blue-600": string;
    "cyan-400": string;
    "cyan-600": string;
    "green-400": string;
    "green-600": string;
    "magenta-400": string;
    "magenta-600": string;
    "orange-400": string;
    "orange-600": string;
    "purple-400": string;
    "purple-600": string;
    "red-400": string;
    "red-600": string;
    "yellow-400": string;
    "yellow-600": string;
}

export interface Mappings {
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

export const tones: Tones = {
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

export const darkMappings: Mappings = {
    "bg": tones["black"],
    "bg-2": tones["base-950"],
    "ui": tones["base-900"],
    "ui-2": tones["base-850"],
    "ui-3": tones["base-800"],
    "tx-3": tones["base-700"],
    "tx-2": tones["base-500"],
    "tx": tones["base-200"],
    "re": tones["red-400"],
    "re2": tones["red-600"],
    "or": tones["orange-400"],
    "or2": tones["orange-600"],
    "ye": tones["yellow-400"],
    "ye2": tones["yellow-600"],
    "gr": tones["green-400"],
    "gr2": tones["green-600"],
    "cy": tones["cyan-400"],
    "cy2": tones["cyan-600"],
    "bl": tones["blue-400"],
    "bl2": tones["blue-600"],
    "pu": tones["purple-400"],
    "pu2": tones["purple-600"],
    "ma": tones["magenta-400"],
    "ma2": tones["magenta-600"],
    "transparent": "#00000000",
};

export const lightMappings: Mappings = {
    "bg": tones["paper"],
    "bg-2": tones["base-50"],
    "ui": tones["base-100"],
    "ui-2": tones["base-150"],
    "ui-3": tones["base-200"],
    "tx-3": tones["base-300"],
    "tx-2": tones["base-600"],
    "tx": tones["black"],
    "re": tones["red-600"],
    "re2": tones["red-400"],
    "or": tones["orange-600"],
    "or2": tones["orange-400"],
    "ye": tones["yellow-600"],
    "ye2": tones["yellow-400"],
    "gr": tones["green-600"],
    "gr2": tones["green-400"],
    "cy": tones["cyan-600"],
    "cy2": tones["cyan-400"],
    "bl": tones["blue-600"],
    "bl2": tones["blue-400"],
    "pu": tones["purple-600"],
    "pu2": tones["purple-400"],
    "ma": tones["magenta-600"],
    "ma2": tones["magenta-400"],
    "transparent": "#FFFFFF00",
};
