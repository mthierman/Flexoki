import Color from "colorjs.io";

export type Mode = "Dark" | "Light";

export type Accent = "Red" | "Orange" | "Yellow" | "Green" | "Cyan" | "Blue" | "Purple" | "Magenta";

export type BaseTones = {
    [key: string]: Color | string;
    black: Color | string;
    base_950: Color | string;
    base_900: Color | string;
    base_850: Color | string;
    base_800: Color | string;
    base_700: Color | string;
    base_600: Color | string;
    base_500: Color | string;
    base_300: Color | string;
    base_200: Color | string;
    base_150: Color | string;
    base_100: Color | string;
    base_50: Color | string;
    paper: Color | string;
};

export type AccentColors = {
    [key: string]: Color | string;
    red_600: Color | string;
    orange_600: Color | string;
    yellow_600: Color | string;
    green_600: Color | string;
    cyan_600: Color | string;
    blue_600: Color | string;
    purple_600: Color | string;
    magenta_600: Color | string;
    red_400: Color | string;
    orange_400: Color | string;
    yellow_400: Color | string;
    green_400: Color | string;
    cyan_400: Color | string;
    blue_400: Color | string;
    purple_400: Color | string;
    magenta_400: Color | string;
};

export interface Theme {
    [key: string]: Color | string;
    bg: Color | string;
    bg2: Color | string;
    ui: Color | string;
    ui2: Color | string;
    ui3: Color | string;
    tx3: Color | string;
    tx2: Color | string;
    tx: Color | string;
    re: Color | string;
    re2: Color | string;
    or: Color | string;
    or2: Color | string;
    ye: Color | string;
    ye2: Color | string;
    gr: Color | string;
    gr2: Color | string;
    cy: Color | string;
    cy2: Color | string;
    bl: Color | string;
    bl2: Color | string;
    pu: Color | string;
    pu2: Color | string;
    ma: Color | string;
    ma2: Color | string;
    transparent: Color | string;
}

export interface UI {
    [key: string]: Color | string | undefined;
    main_background: Color | string;
    secondary_background: Color | string;
    borders: Color | string;
    hovered_borders: Color | string;
    active_borders: Color | string;
    faint_text: Color | string;
    muted_text: Color | string;
    primary_text: Color | string;
    error_text: Color | string;
    warning_text: Color | string;
    success_text: Color | string;
    links: Color | string;
    active_states: Color | string;
    transparent: Color | string;
    shadow?: Color | string;
    accent?: Color | string;
}

export interface Syntax {
    [key: string]: Color | string;
    comments: Color | string;
    punctuation: Color | string;
    operators: Color | string;
    invalid: Color | string;
    imports: Color | string;
    functions: Color | string;
    constants: Color | string;
    keywords: Color | string;
    strings: Color | string;
    variables: Color | string;
    attributes: Color | string;
    numbers: Color | string;
    language_features: Color | string;
}

export interface Mapping {
    ui: UI;
    syntax: Syntax;
}
