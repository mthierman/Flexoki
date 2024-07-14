import Color from "colorjs.io";
import { defaultDarkTokens, defaultLightTokens } from "./tokens.mjs";
import type { Accent, AccentColors, BaseTones, Mapping, Mode, Theme } from "./types.mjs";
import { colorToHex, colorsToHex } from "./utilities.mjs";

export const makeBaseTones = (): BaseTones => {
    return {
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
};

export const makeAccentColors = (): AccentColors => {
    return {
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
};

export const makeTheme = (mode: Mode): Theme => {
    const baseTones = makeBaseTones();
    const accentColors = makeAccentColors();

    switch (mode) {
        case "Dark": {
            return {
                "bg": baseTones["black"],
                "bg-2": baseTones["base-950"],
                "ui": baseTones["base-900"],
                "ui-2": baseTones["base-850"],
                "ui-3": baseTones["base-800"],
                "tx-3": baseTones["base-700"],
                "tx-2": baseTones["base-500"],
                "tx": baseTones["base-200"],
                "re": accentColors["red-400"],
                "re2": accentColors["red-600"],
                "or": accentColors["orange-400"],
                "or2": accentColors["orange-600"],
                "ye": accentColors["yellow-400"],
                "ye2": accentColors["yellow-600"],
                "gr": accentColors["green-400"],
                "gr2": accentColors["green-600"],
                "cy": accentColors["cyan-400"],
                "cy2": accentColors["cyan-600"],
                "bl": accentColors["blue-400"],
                "bl2": accentColors["blue-600"],
                "pu": accentColors["purple-400"],
                "pu2": accentColors["purple-600"],
                "ma": accentColors["magenta-400"],
                "ma2": accentColors["magenta-600"],
                "transparent": new Color("#00000000"),
            };
        }
        case "Light": {
            return {
                "bg": baseTones["paper"],
                "bg-2": baseTones["base-50"],
                "ui": baseTones["base-100"],
                "ui-2": baseTones["base-150"],
                "ui-3": baseTones["base-200"],
                "tx-3": baseTones["base-300"],
                "tx-2": baseTones["base-600"],
                "tx": baseTones["black"],
                "re": accentColors["red-600"],
                "re2": accentColors["red-400"],
                "or": accentColors["orange-600"],
                "or2": accentColors["orange-400"],
                "ye": accentColors["yellow-600"],
                "ye2": accentColors["yellow-400"],
                "gr": accentColors["green-600"],
                "gr2": accentColors["green-400"],
                "cy": accentColors["cyan-600"],
                "cy2": accentColors["cyan-400"],
                "bl": accentColors["blue-600"],
                "bl2": accentColors["blue-400"],
                "pu": accentColors["purple-600"],
                "pu2": accentColors["purple-400"],
                "ma": accentColors["magenta-600"],
                "ma2": accentColors["magenta-400"],
                "transparent": new Color("#FFFFFF00"),
            };
        }
    }
};

export const makeMapping = (theme: Theme): Mapping => {
    return {
        ui: {
            "main-background": theme["bg"],
            "secondary-background": theme["bg-2"],
            "borders": theme["ui"],
            "hovered-borders": theme["ui-2"],
            "active-borders": theme["ui-3"],
            "faint-text": theme["tx-3"],
            "muted-text": theme["tx-2"],
            "primary-text": theme["tx"],
            "error-text": theme["re"],
            "warning-text": theme["or"],
            "success-text": theme["gr"],
            "links": theme["cy"],
            "active-states": theme["cy"],
            "transparent": theme["transparent"],
        },
        syntax: {
            "comments": theme["tx-3"],
            "punctuation": theme["tx-2"],
            "operators": theme["tx-2"],
            "invalid": theme["re"],
            "imports": theme["re"],
            "functions": theme["or"],
            "constants": theme["ye"],
            "keywords": theme["gr"],
            "strings": theme["cy"],
            "variables": theme["bl"],
            "attributes": theme["bl"],
            "numbers": theme["pu"],
            "language-features": theme["ma"],
        },
    };
};

export const makeAccentColor = (mode: Mode, accent: Accent) => {
    const accentColors = makeAccentColors();
    const dark = mode === "Dark";

    switch (accent) {
        case "Red": {
            return dark ? accentColors["red-600"] : accentColors["red-400"];
        }
        case "Orange": {
            return dark ? accentColors["orange-600"] : accentColors["orange-400"];
        }
        case "Yellow": {
            return dark ? accentColors["yellow-600"] : accentColors["yellow-400"];
        }
        case "Green": {
            return dark ? accentColors["green-600"] : accentColors["green-400"];
        }
        case "Cyan": {
            return dark ? accentColors["cyan-600"] : accentColors["cyan-400"];
        }
        case "Blue": {
            return dark ? accentColors["blue-600"] : accentColors["blue-400"];
        }
        case "Purple": {
            return dark ? accentColors["purple-600"] : accentColors["purple-400"];
        }
        case "Magenta": {
            return dark ? accentColors["magenta-600"] : accentColors["magenta-400"];
        }
    }
};

export const makeThemes = () => {
    return {
        dark: colorsToHex(makeTheme("Dark")) as Theme,
        light: colorsToHex(makeTheme("Light")) as Theme,
    };
};

export const makeMappings = () => {
    const { dark, light } = makeThemes();

    return {
        dark: makeMapping(dark),
        light: makeMapping(light),
    };
};

export const generateTerminal = (mode: Mode) => {
    const themes = makeThemes();
    const mappings = makeMappings();
    const dark = mode === "Dark";

    const baseTones = colorsToHex(makeBaseTones()) as BaseTones;
    const theme = dark ? themes.dark : themes.light;
    const { ui, syntax } = dark ? mappings.dark : mappings.light;

    return {
        background: ui["main-background"],
        black: baseTones["base-950"],
        blue: theme["bl2"],
        brightBlack: baseTones["base-900"],
        brightBlue: theme["bl"],
        brightCyan: theme["cy"],
        brightGreen: theme["gr"],
        brightPurple: theme["ma"],
        brightRed: theme["re"],
        brightWhite: baseTones["base-50"],
        brightYellow: theme["ye"],
        cursorColor: ui["primary-text"],
        cyan: theme["cy2"],
        foreground: ui["primary-text"],
        green: theme["gr2"],
        name: `Flexoki ${mode}`,
        purple: theme["ma2"],
        red: theme["re2"],
        selectionBackground: ui["active-borders"],
        white: baseTones["base-100"],
        yellow: theme["ye2"],
    };
};

export const generateTheme = (mode: Mode, accent: Accent) => {
    const themes = makeThemes();
    const mappings = makeMappings();
    const dark = mode === "Dark";

    const terminal = generateTerminal(mode);
    const baseTones = colorsToHex(makeBaseTones()) as BaseTones;
    const theme = dark ? themes.dark : themes.light;
    const { ui, syntax } = dark ? mappings.dark : mappings.light;
    ui["shadow"] = (baseTones["black"] as string).concat("40");
    ui["accent"] = colorToHex(makeAccentColor(mode, accent) as Color);

    const test = "#FF00FF";

    return {
        $schema: "vscode://schemas/color-theme",
        name: `Flexoki ${mode} ${accent}`,
        colors: {
            "activityBar.activeBackground": theme["ui"],
            "activityBar.activeBorder": ui["accent"],
            "activityBar.activeFocusBorder": ui["accent"],
            "activityBar.background": theme["ui"],
            "activityBar.border": ui["borders"],
            "activityBar.dropBorder": ui["accent"],
            "activityBar.foreground": ui["accent"],
            "activityBar.inactiveForeground": ui["primary-text"],
            "activityBarBadge.background": ui["accent"],
            "activityBarBadge.foreground": baseTones["paper"],
            "activityBarTop.activeBackground": theme["ui"],
            "activityBarTop.activeBorder": ui["accent"],
            "activityBarTop.background": theme["ui"],
            "activityBarTop.dropBorder": ui["accent"],
            "activityBarTop.foreground": ui["accent"],
            "activityBarTop.inactiveForeground": ui["primary-text"],
            "badge.background": ui["accent"],
            "badge.foreground": baseTones["paper"],
            "banner.background": theme["ui"],
            "banner.foreground": ui["primary-text"],
            "banner.iconForeground": ui["primary-text"],
            "button.background": theme["ui"],
            "button.border": theme["ui-3"],
            "button.foreground": ui["primary-text"],
            "button.hoverBackground": theme["ui-2"],
            "button.secondaryBackground": theme["ui"],
            "button.secondaryForeground": ui["primary-text"],
            "button.secondaryHoverBackground": theme["ui-2"],
            "button.separator": theme["ui-3"],
            "commandCenter.activeBackground": theme["ui-2"],
            "commandCenter.activeBorder": theme["ui-3"],
            "commandCenter.activeForeground": ui["primary-text"],
            "commandCenter.background": theme["ui"],
            "commandCenter.border": theme["ui-3"],
            "commandCenter.foreground": ui["muted-text"],
            "commandCenter.inactiveForeground": ui["faint-text"],
            "dropdown.background": ui["secondary-background"],
            "dropdown.border": ui["active-borders"],
            "dropdown.foreground": ui["primary-text"],
            "dropdown.listBackground": ui["secondary-background"],
            "editor.background": ui["main-background"],
            "editorGroup.border": ui["borders"],
            "editorGroupHeader.border": ui["borders"],
            "editorGroupHeader.tabsBackground": theme["ui"],
            "editorGroupHeader.tabsBorder": ui["borders"],
            "editorHoverWidget.background": theme["ui"],
            "editorHoverWidget.border": ui["borders"],
            "editorHoverWidget.foreground": ui["primary-text"],
            "editorHoverWidget.highlightForeground": ui["primary-text"],
            "editorHoverWidget.statusBarBackground": theme["ui-2"],
            "editorStickyScroll.background": ui["main-background"],
            "editorStickyScroll.border": ui["borders"],
            "editorStickyScroll.shadow": ui["shadow"],
            "editorStickyScrollHover.background": theme["transparent"],
            "editorWidget.background": theme["ui"],
            "editorWidget.border": ui["borders"],
            "editorWidget.foreground": ui["primary-text"],
            "editorWidget.resizeBorder": ui["borders"],
            "focusBorder": ui["accent"],
            "foreground": ui["primary-text"],
            "icon.foreground": ui["muted-text"],
            "input.background": ui["secondary-background"],
            "input.border": ui["active-borders"],
            "input.foreground": ui["primary-text"],
            "input.placeholderForeground": ui["faint-text"],
            "list.hoverBackground": theme["ui-2"],
            "menu.background": ui["main-background"],
            "menu.border": ui["borders"],
            "menu.foreground": ui["primary-text"],
            "menu.selectionBackground": theme["ui-2"],
            "menu.selectionForeground": ui["primary-text"],
            "menu.separatorBackground": ui["borders"],
            "menubar.selectionBackground": theme["ui-2"],
            "menubar.selectionForeground": ui["primary-text"],
            "panel.background": ui["secondary-background"],
            "panel.border": ui["borders"],
            "panelInput.border": ui["active-borders"],
            "panelSection.border": ui["borders"],
            "panelSectionHeader.background": ui["main-background"],
            "panelSectionHeader.border": ui["borders"],
            "panelSectionHeader.foreground": ui["primary-text"],
            "panelStickyScroll.background": ui["main-background"],
            "panelStickyScroll.border": ui["borders"],
            "panelStickyScroll.shadow": ui["shadow"],
            "panelTitle.activeBorder": ui["accent"],
            "panelTitle.activeForeground": ui["primary-text"],
            "panelTitle.inactiveForeground": ui["muted-text"],
            "quickInput.background": ui["main-background"],
            "quickInput.foreground": ui["primary-text"],
            "quickInputList.focusBackground": theme["ui-2"],
            "quickInputList.focusForeground": ui["primary-text"],
            "quickInputList.focusIconForeground": ui["primary-text"],
            "quickInputTitle.background": test,
            "sideBar.background": ui["secondary-background"],
            "sideBar.border": ui["borders"],
            "sideBar.foreground": ui["primary-text"],
            "sideBarSectionHeader.background": theme["ui"],
            "sideBarSectionHeader.border": ui["borders"],
            "sideBarSectionHeader.foreground": ui["primary-text"],
            "sideBarTitle.foreground": ui["primary-text"],
            "statusBar.background": theme["ui"],
            "statusBar.border": ui["borders"],
            "statusBar.debuggingBackground": ui["accent"],
            "statusBar.debuggingForeground": baseTones["paper"],
            "statusBar.focusBorder": ui["accent"],
            "statusBar.foreground": ui["primary-text"],
            "statusBar.noFolderBackground": theme["ui"],
            "tab.activeBackground": ui["main-background"],
            "tab.activeBorder": ui["transparent"],
            "tab.activeBorderTop": ui["accent"],
            "tab.activeForeground": ui["primary-text"],
            "tab.border": ui["borders"],
            "tab.hoverBackground": ui["main-background"],
            "tab.hoverBorder": ui["hovered-borders"],
            "tab.hoverForeground": ui["primary-text"],
            "tab.inactiveBackground": ui["transparent"],
            "tab.inactiveForeground": ui["muted-text"],
            "tab.lastPinnedBorder": test,
            "tab.selectedBackground": ui["main-background"],
            "tab.selectedBorderTop": ui["transparent"],
            "tab.selectedForeground": ui["muted-text"],
            "tab.unfocusedActiveBorder": ui["transparent"],
            "tab.unfocusedActiveBorderTop": ui["transparent"],
            "tab.unfocusedHoverBackground": ui["main-background"],
            "tab.unfocusedHoverBorder": ui["hovered-borders"],
            "tab.unfocusedHoverForeground": ui["primary-text"],
            "terminal.ansiBlack": terminal["black"],
            "terminal.ansiBlue": terminal["blue"],
            "terminal.ansiBrightBlack": terminal["brightBlack"],
            "terminal.ansiBrightBlue": terminal["brightBlue"],
            "terminal.ansiBrightCyan": terminal["brightCyan"],
            "terminal.ansiBrightGreen": terminal["brightGreen"],
            "terminal.ansiBrightMagenta": terminal["brightPurple"],
            "terminal.ansiBrightRed": terminal["brightRed"],
            "terminal.ansiBrightWhite": terminal["brightWhite"],
            "terminal.ansiBrightYellow": terminal["brightYellow"],
            "terminal.ansiCyan": terminal["cyan"],
            "terminal.ansiGreen": terminal["green"],
            "terminal.ansiMagenta": terminal["purple"],
            "terminal.ansiRed": terminal["red"],
            "terminal.ansiWhite": terminal["white"],
            "terminal.ansiYellow": terminal["yellow"],
            "terminal.background": ui["secondary-background"],
            "terminal.border": ui["borders"],
            "terminal.foreground": terminal["foreground"],
            "terminal.inactiveSelectionBackground": ui["hovered-borders"],
            "terminal.selectionBackground": terminal["selectionBackground"],
            "terminal.tab.activeBorder": ui["accent"],
            "terminalCursor.background": terminal["background"],
            "terminalCursor.foreground": terminal["foreground"],
            "titleBar.activeBackground": theme["ui"],
            "titleBar.activeForeground": ui["primary-text"],
            "titleBar.border": ui["borders"],
            "titleBar.inactiveBackground": theme["ui"],
            "titleBar.inactiveForeground": ui["muted-text"],
            "welcomePage.background": ui["main-background"],
            "welcomePage.progress.background": theme["ui"],
            "welcomePage.progress.foreground": theme["ui-3"],
            "welcomePage.tileBackground": theme["ui"],
            "welcomePage.tileBorder": ui["borders"],
            "welcomePage.tileHoverBackground": theme["ui-2"],
            "widget.border": ui["borders"],
            "widget.shadow": ui["shadow"],
            // "commandCenter.debuggingBackground": null,
            // "commandCenter.inactiveBorder": null,
            // "menu.selectionBorder": null,
            // "menubar.selectionBorder": null,
            // "panel.dropBorder": null,
            // "panelSection.dropBackground": null,
            // "quickInput.list.focusBackground": ui["accent"],
            // Use quickInputList.focusBackground instead
        },
        tokenColors: dark ? defaultDarkTokens() : defaultLightTokens(),
        semanticHighlighting: true,
        // semanticTokenColors: {
        //     newOperator: syntax["operators"],
        //     stringLiteral: syntax["strings"],
        //     customLiteral: syntax["strings"],
        //     numberLiteral: syntax["numbers"],
        // },
    };
};
