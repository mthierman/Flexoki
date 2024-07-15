import Color from "colorjs.io";
import type { AccentColor, Mode } from "./types.mjs";

export const baseTones = {
    black: new Color("#100F0F"),
    base_950: new Color("#1C1B1A"),
    base_900: new Color("#282726"),
    base_850: new Color("#343331"),
    base_800: new Color("#403E3C"),
    base_700: new Color("#575653"),
    base_600: new Color("#6F6E69"),
    base_500: new Color("#878580"),
    base_300: new Color("#B7B5AC"),
    base_200: new Color("#CECDC3"),
    base_150: new Color("#DAD8CE"),
    base_100: new Color("#E6E4D9"),
    base_50: new Color("#F2F0E5"),
    paper: new Color("#FFFCF0"),
};

export const accentColors = {
    red_600: new Color("#AF3029"),
    orange_600: new Color("#BC5215"),
    yellow_600: new Color("#AD8301"),
    green_600: new Color("#66800B"),
    cyan_600: new Color("#24837B"),
    blue_600: new Color("#205EA6"),
    purple_600: new Color("#5E409D"),
    magenta_600: new Color("#A02F6F"),
    red_400: new Color("#D14D41"),
    orange_400: new Color("#DA702C"),
    yellow_400: new Color("#D0A215"),
    green_400: new Color("#879A39"),
    cyan_400: new Color("#3AA99F"),
    blue_400: new Color("#4385BE"),
    purple_400: new Color("#8B7EC8"),
    magenta_400: new Color("#CE5D97"),
};

export const darkTheme = {
    bg: baseTones.black,
    bg2: baseTones.base_950,
    ui: baseTones.base_900,
    ui2: baseTones.base_850,
    ui3: baseTones.base_800,
    tx3: baseTones.base_700,
    tx2: baseTones.base_500,
    tx: baseTones.base_200,
    re: accentColors.red_400,
    re2: accentColors.red_600,
    or: accentColors.orange_400,
    or2: accentColors.orange_600,
    ye: accentColors.yellow_400,
    ye2: accentColors.yellow_600,
    gr: accentColors.green_400,
    gr2: accentColors.green_600,
    cy: accentColors.cyan_400,
    cy2: accentColors.cyan_600,
    bl: accentColors.blue_400,
    bl2: accentColors.blue_600,
    pu: accentColors.purple_400,
    pu2: accentColors.purple_600,
    ma: accentColors.magenta_400,
    ma2: accentColors.magenta_600,
};

export const lightTheme = {
    bg: baseTones.paper,
    bg2: baseTones.base_50,
    ui: baseTones.base_100,
    ui2: baseTones.base_150,
    ui3: baseTones.base_200,
    tx3: baseTones.base_300,
    tx2: baseTones.base_600,
    tx: baseTones.black,
    re: accentColors.red_600,
    re2: accentColors.red_400,
    or: accentColors.orange_600,
    or2: accentColors.orange_400,
    ye: accentColors.yellow_600,
    ye2: accentColors.yellow_400,
    gr: accentColors.green_600,
    gr2: accentColors.green_400,
    cy: accentColors.cyan_600,
    cy2: accentColors.cyan_400,
    bl: accentColors.blue_600,
    bl2: accentColors.blue_400,
    pu: accentColors.purple_600,
    pu2: accentColors.purple_400,
    ma: accentColors.magenta_600,
    ma2: accentColors.magenta_400,
};

type Theme = typeof lightTheme | typeof darkTheme;

const makeUI = (theme: Theme) => {
    return {
        main_background: theme.bg,
        secondary_background: theme.bg2,
        borders: theme.ui,
        hovered_borders: theme.ui2,
        active_borders: theme.ui3,
        faint_text: theme.tx3,
        muted_text: theme.tx2,
        primary_text: theme.tx,
        error_text: theme.re,
        warning_text: theme.or,
        success_text: theme.gr,
        links: theme.cy,
        active_states: theme.cy,
    };
};

const makeSyntax = (theme: Theme) => {
    return {
        comments: theme.tx3,
        punctuation: theme.tx2,
        operators: theme.tx2,
        invalid: theme.re,
        imports: theme.re,
        functions: theme.or,
        constants: theme.ye,
        keywords: theme.gr,
        strings: theme.cy,
        variables: theme.bl,
        attributes: theme.bl,
        numbers: theme.pu,
        language_features: theme.ma,
    };
};

const makeAccentColor = (mode: Mode, accentColor: AccentColor) => {
    switch (mode) {
        case "Dark": {
            switch (accentColor) {
                case "Red": {
                    return accentColors.red_600;
                }
                case "Orange": {
                    return accentColors.orange_600;
                }
                case "Yellow": {
                    return accentColors.yellow_600;
                }
                case "Green": {
                    return accentColors.green_600;
                }
                case "Cyan": {
                    return accentColors.cyan_600;
                }
                case "Blue": {
                    return accentColors.blue_600;
                }
                case "Purple": {
                    return accentColors.purple_600;
                }
                case "Magenta": {
                    return accentColors.magenta_600;
                }
            }
        }
        case "Light": {
            switch (accentColor) {
                case "Red": {
                    return accentColors.red_400;
                }
                case "Orange": {
                    return accentColors.orange_400;
                }
                case "Yellow": {
                    return accentColors.yellow_400;
                }
                case "Green": {
                    return accentColors.green_400;
                }
                case "Cyan": {
                    return accentColors.cyan_400;
                }
                case "Blue": {
                    return accentColors.blue_400;
                }
                case "Purple": {
                    return accentColors.purple_400;
                }
                case "Magenta": {
                    return accentColors.magenta_400;
                }
            }
        }
    }
};

export const makeTerminal = (mode: Mode) => {
    const theme = mode === "Dark" ? darkTheme : lightTheme;
    const ui = mode === "Dark" ? makeUI(darkTheme) : makeUI(lightTheme);

    return {
        background: ui.main_background,
        black: baseTones.black,
        blue: theme.bl2,
        brightBlack: baseTones.base_800,
        brightBlue: theme.bl,
        brightCyan: theme.cy,
        brightGreen: theme.gr,
        brightPurple: theme.ma,
        brightRed: theme.re,
        brightWhite: baseTones.paper,
        brightYellow: theme.ye,
        cursorColor: ui.primary_text,
        cyan: theme.cy2,
        foreground: ui.primary_text,
        green: theme.gr2,
        name: `Flexoki ${mode}`,
        purple: theme.ma2,
        red: theme.re2,
        selectionBackground: ui.active_borders,
        white: baseTones.base_200,
        yellow: theme.ye2,
    };
};

export const makeTheme = (mode: Mode, accentColor: AccentColor) => {
    const accent = makeAccentColor(mode, accentColor);

    switch (mode) {
        case "Dark": {
            const theme = darkTheme;
            const { ui, syntax, terminal } = {
                ui: makeUI(theme),
                syntax: makeSyntax(theme),
                terminal: makeTerminal(mode),
            };
            return {
                mapping: {
                    ui: {
                        ...ui,
                    },
                    syntax: {
                        ...syntax,
                    },
                    terminal: {
                        ...terminal,
                    },
                },
                theme: {
                    ...theme,
                    accent: accent,
                    transparent: new Color("sRGB", [0, 0, 0], 0),
                    transparent_bg: new Color("sRGB", [accent.r, accent.g, accent.b], 0.15),
                    transparent_bg_hover: new Color("sRGB", [accent.r, accent.g, accent.b], 0.2),
                    transparent_bg_active: new Color("sRGB", [accent.r, accent.g, accent.b], 0.25),
                    shadow: new Color("sRGB", [0, 0, 0], 0.5),
                },
            };
        }
        case "Light": {
            const theme = lightTheme;
            const { ui, syntax, terminal } = {
                ui: makeUI(theme),
                syntax: makeSyntax(theme),
                terminal: makeTerminal(mode),
            };
            return {
                mapping: {
                    ui: {
                        ...ui,
                    },
                    syntax: {
                        ...syntax,
                    },
                    terminal: {
                        ...terminal,
                    },
                },
                theme: {
                    ...theme,
                    accent: accent,
                    transparent: new Color("sRGB", [255, 255, 255], 0),
                    transparent_bg: new Color("sRGB", [accent.r, accent.g, accent.b], 0.15),
                    transparent_bg_hover: new Color("sRGB", [accent.r, accent.g, accent.b], 0.2),
                    transparent_bg_active: new Color("sRGB", [accent.r, accent.g, accent.b], 0.25),
                    shadow: new Color("sRGB", [0.75, 0.75, 0.75], 0.5),
                },
            };
        }
    }
};
