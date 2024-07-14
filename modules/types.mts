import Color from "colorjs.io";

export type Mode = "Dark" | "Light";

export type Accent = "Red" | "Orange" | "Yellow" | "Green" | "Cyan" | "Blue" | "Purple" | "Magenta";

export type BaseTones = {
    [key: string]: Color | string;
    "black": Color | string;
    "base-950": Color | string;
    "base-900": Color | string;
    "base-850": Color | string;
    "base-800": Color | string;
    "base-700": Color | string;
    "base-600": Color | string;
    "base-500": Color | string;
    "base-300": Color | string;
    "base-200": Color | string;
    "base-150": Color | string;
    "base-100": Color | string;
    "base-50": Color | string;
    "paper": Color | string;
};

export type AccentColors = {
    [key: string]: Color | string;
    "red-600": Color | string;
    "orange-600": Color | string;
    "yellow-600": Color | string;
    "green-600": Color | string;
    "cyan-600": Color | string;
    "blue-600": Color | string;
    "purple-600": Color | string;
    "magenta-600": Color | string;
    "red-400": Color | string;
    "orange-400": Color | string;
    "yellow-400": Color | string;
    "green-400": Color | string;
    "cyan-400": Color | string;
    "blue-400": Color | string;
    "purple-400": Color | string;
    "magenta-400": Color | string;
};

export interface Theme {
    [key: string]: Color | string;
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

export interface UI {
    [key: string]: Color | string | undefined;
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
    "transparent": Color | string;
    "shadow"?: Color | string;
    "accent"?: Color | string;
}

export interface Syntax {
    [key: string]: Color | string;
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
}

export interface Mapping {
    ui: UI;
    syntax: Syntax;
}
