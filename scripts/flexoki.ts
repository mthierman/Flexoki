import Color from "colorjs.io";
import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

type Mode = "Dark" | "Light";

type Accent = "Red" | "Orange" | "Yellow" | "Green" | "Cyan" | "Blue" | "Purple" | "Magenta";

interface Theme {
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

interface UI {
    [key: string]: Color | string;
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
}

interface Syntax {
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

interface Mapping {
    ui: UI;
    syntax: Syntax;
}

const baseTones = {
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

const accentColors = {
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

const darkTheme: Theme = {
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

const lightTheme: Theme = {
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

function colorToHex(color: Color) {
    return color.toString({ format: "hex" });
}

function colorsToHex(colors: Record<string, Color | string>) {
    Object.entries(colors).forEach(([key, value]: [string, Color | string]) => {
        colors[key] = colorToHex(value as Color);
    });
    return colors;
}

function mapColorTheme(theme: Theme): Mapping {
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
}

const makeAccentColor = (mode: Mode, accent: Accent) => {
    switch (accent) {
        case "Red": {
            return mode === "Dark" ? accentColors["red-600"] : accentColors["red-400"];
        }
        case "Orange": {
            return mode === "Dark" ? accentColors["orange-600"] : accentColors["orange-400"];
        }
        case "Yellow": {
            return mode === "Dark" ? accentColors["yellow-600"] : accentColors["yellow-400"];
        }
        case "Green": {
            return mode === "Dark" ? accentColors["green-600"] : accentColors["green-400"];
        }
        case "Cyan": {
            return mode === "Dark" ? accentColors["cyan-600"] : accentColors["cyan-400"];
        }
        case "Blue": {
            return mode === "Dark" ? accentColors["blue-600"] : accentColors["blue-400"];
        }
        case "Purple": {
            return mode === "Dark" ? accentColors["purple-600"] : accentColors["purple-400"];
        }
        case "Magenta": {
            return mode === "Dark" ? accentColors["magenta-600"] : accentColors["magenta-400"];
        }
    }
};

const makeThemes = () => {
    return {
        dark: colorsToHex(darkTheme) as Theme,
        light: colorsToHex(lightTheme) as Theme,
    };
};

const makeMappings = () => {
    const { dark, light } = makeThemes();

    return {
        dark: mapColorTheme(dark),
        light: mapColorTheme(light),
    };
};

const generateTerminal = (mode: Mode) => {
    const themes = makeThemes();
    const mappings = makeMappings();

    const base = colorsToHex(baseTones) as typeof baseTones;
    const { ui, syntax } = mode === "Dark" ? mappings.dark : mappings.light;
    const theme = mode === "Dark" ? themes.dark : themes.light;

    return {
        background: ui["main-background"],
        black: base["base-950"],
        blue: theme["bl2"],
        brightBlack: base["base-900"],
        brightBlue: theme["bl"],
        brightCyan: theme["cy"],
        brightGreen: theme["gr"],
        brightPurple: theme["ma"],
        brightRed: theme["re"],
        brightWhite: base["base-50"],
        brightYellow: theme["ye"],
        cursorColor: ui["primary-text"],
        cyan: theme["cy2"],
        foreground: ui["primary-text"],
        green: theme["gr2"],
        name: `Flexoki ${mode}`,
        purple: theme["ma2"],
        red: theme["re2"],
        selectionBackground: ui["active-borders"],
        white: base["base-100"],
        yellow: theme["ye2"],
    };
};

const generateTheme = (mode: Mode, accent: Accent) => {
    const accentColor = colorToHex(makeAccentColor(mode, accent));

    const themes = makeThemes();
    const mappings = makeMappings();

    const base = colorsToHex(baseTones) as typeof baseTones;
    const { ui, syntax } = mode === "Dark" ? mappings.dark : mappings.light;
    const theme = mode === "Dark" ? themes.dark : themes.light;
    const terminal = generateTerminal(mode);

    const test = "#FF00FF";
    const hoverBg = mode === "Dark" ? "#000000" : "#FFFFFF";

    return {
        $schema: "vscode://schemas/color-theme",
        name: `Flexoki ${mode} ${accent}`,
        colors: {
            "activityBar.activeBorder": ui["active-states"],
            "activityBar.background": ui["secondary-background"],
            "activityBar.border": ui["borders"],
            "activityBar.foreground": ui["active-states"],
            "activityBar.inactiveForeground": ui["primary-text"],
            "activityBar.activeBackground": ui["secondary-background"],
            "activityBar.activeFocusBorder": ui["active-states"],
            "activityBar.dropBorder": null,
            "activityBarBadge.background": ui["main-background"],
            "activityBarBadge.foreground": ui["primary-text"],
            "activityBarTop.activeBorder": ui["active-states"],
            "activityBarTop.dropBorder": null,
            "activityBarTop.foreground": ui["active-states"],
            "activityBarTop.inactiveForeground": ui["primary-text"],
            "activityBarTop.activeBackground": ui["secondary-background"],
            "activityBarTop.background": ui["secondary-background"],
            "button.background": theme["ui"],
            "button.hoverBackground": theme["ui-2"],
            "button.border": theme["ui-3"],
            "button.foreground": ui["primary-text"],
            "button.secondaryBackground": theme["ui"],
            "button.secondaryForeground": ui["primary-text"],
            "button.secondaryHoverBackground": theme["ui-2"],
            "button.separator": theme["ui-3"],
            "dropdown.background": ui["secondary-background"],
            "dropdown.border": ui["borders"],
            "dropdown.foreground": ui["primary-text"],
            "dropdown.listBackground": ui["secondary-background"],
            "editor.background": ui["main-background"],
            "editorGroupHeader.tabsBackground": ui["secondary-background"],
            "editorGroupHeader.border": ui["borders"],
            "editorGroupHeader.tabsBorder": ui["borders"],
            "editorGroup.border": ui["borders"],
            "editorStickyScroll.background": ui["main-background"],
            "editorStickyScroll.shadow": ui["borders"],
            "editorStickyScrollHover.background": theme["transparent"],
            "editorStickyScroll.border": ui["borders"],
            "focusBorder": ui["active-states"],
            "foreground": ui["primary-text"],
            "icon.foreground": ui["muted-text"],
            "input.background": ui["secondary-background"],
            "input.border": ui["active-borders"],
            "input.foreground": ui["primary-text"],
            "input.placeholderForeground": ui["faint-text"],
            "menu.background": ui["main-background"],
            "menu.border": ui["borders"],
            "menu.foreground": ui["primary-text"],
            "menu.selectionBackground": theme["ui-2"],
            "menu.selectionForeground": ui["primary-text"],
            "menu.separatorBackground": ui["borders"],
            "menubar.selectionBackground": theme["ui-2"],
            "menubar.selectionForeground": ui["primary-text"],
            "menu.selectionBorder": null,
            "menubar.selectionBorder": null,
            "sideBar.background": ui["secondary-background"],
            "sideBar.border": ui["borders"],
            "statusBar.background": ui["secondary-background"],
            "statusBar.border": ui["borders"],
            "statusBar.debuggingBackground": ui["active-states"],
            "statusBar.debuggingForeground": base["paper"],
            "statusBar.focusBorder": ui["active-states"],
            "statusBar.foreground": ui["primary-text"],
            "statusBar.noFolderBackground": ui["secondary-background"],
            "tab.activeBackground": ui["main-background"],
            "tab.activeBorder": ui["transparent"],
            "tab.activeBorderTop": ui["active-states"],
            "tab.activeForeground": ui["primary-text"],
            "tab.border": ui["borders"],
            "tab.hoverBackground": ui["main-background"],
            "tab.inactiveBackground": ui["transparent"],
            "tab.inactiveForeground": ui["muted-text"],
            "tab.lastPinnedBorder": test,
            "tab.selectedBackground": ui["main-background"],
            "tab.selectedBorderTop": ui["transparent"],
            "tab.selectedForeground": ui["muted-text"],
            "tab.unfocusedActiveBorder": ui["transparent"],
            "tab.unfocusedActiveBorderTop": ui["transparent"],
            "tab.unfocusedHoverBackground": ui["main-background"],
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
            "terminal.background": terminal["background"],
            "terminal.border": ui["borders"],
            "terminal.foreground": terminal["foreground"],
            "terminal.inactiveSelectionBackground": ui["hovered-borders"],
            "terminal.selectionBackground": terminal["selectionBackground"],
            "terminal.tab.activeBorder": ui["active-states"],
            "terminalCursor.background": terminal["background"],
            "terminalCursor.foreground": terminal["foreground"],
            "titleBar.activeBackground": ui["secondary-background"],
            "titleBar.border": ui["borders"],

            // "actionBar.toggledBackground": test,
            // "badge.background": "#616161",
            // "badge.foreground": "#f8f8f8",
            // "chat.slashCommandBackground": "#34414b",
            // "chat.slashCommandForeground": "#40a6ff",
            // "checkbox.background": "#313131",
            // "checkbox.border": "#3c3c3c",
            // "debugToolBar.background": "#181818",
            // "descriptionForeground": "#9d9d9d",
            // "editor.findMatchBackground": "#9e6a03",
            // "editor.foreground": "#cccccc",
            // "editor.inactiveSelectionBackground": "#3a3d41",
            // "editor.selectionHighlightBackground": "#add6ff26",
            // "editorGutter.addedBackground": "#2ea043",
            // "editorGutter.deletedBackground": "#f85149",
            // "editorGutter.modifiedBackground": "#0078d4",
            // "editorIndentGuide.activeBackground1": "#707070",
            // "editorIndentGuide.background1": "#404040",
            // "editorLineNumber.activeForeground": "#cccccc",
            // "editorLineNumber.foreground": "#6e7681",
            // "editorOverviewRuler.border": "#010409",
            // "editorWidget.background": "#202020",
            // "errorForeground": "#f85149",
            // "inputOption.activeBackground": "#2489db82",
            // "inputOption.activeBorder": "#2488db",
            // "keybindingLabel.foreground": "#cccccc",
            // "list.activeSelectionIconForeground": "#ffffff",
            // "list.dropBackground": "#383b3d",
            // "notificationCenterHeader.background": "#1f1f1f",
            // "notificationCenterHeader.foreground": "#cccccc",
            // "notifications.background": "#1f1f1f",
            // "notifications.border": "#2b2b2b",
            // "notifications.foreground": "#cccccc",
            // "panel.background": "#181818",
            // "panel.border": "#2b2b2b",
            // "panelInput.border": "#2b2b2b",
            // "panelTitle.activeBorder": "#0078d4",
            // "panelTitle.activeForeground": "#cccccc",
            // "panelTitle.inactiveForeground": "#9d9d9d",
            // "peekViewEditor.background": "#1f1f1f",
            // "peekViewEditor.matchHighlightBackground": "#bb800966",
            // "peekViewResult.background": "#1f1f1f",
            // "peekViewResult.matchHighlightBackground": "#bb800966",
            // "pickerGroup.border": "#3c3c3c",
            // "ports.iconRunningProcessForeground": "#369432",
            // "progressBar.background": "#0078d4",
            // "quickInput.background": "#222222",
            // "quickInput.foreground": "#cccccc",
            // "settings.dropdownBackground": "#313131",
            // "settings.dropdownBorder": "#3c3c3c",
            // "settings.headerForeground": "#ffffff",
            // "settings.modifiedItemIndicator": "#bb800966",
            // "sideBar.foreground": "#cccccc",
            // "sideBarSectionHeader.background": "#181818",
            // "sideBarSectionHeader.border": "#2b2b2b",
            // "sideBarSectionHeader.foreground": "#cccccc",
            // "sideBarTitle.foreground": "#cccccc",
            // "statusBarItem.focusBorder": "#0078d4",
            // "statusBarItem.prominentBackground": "#6e768166",
            // "statusBarItem.remoteBackground": "#0078d4",
            // "statusBarItem.remoteForeground": "#ffffff",
            // "terminal.findMatchBorder": null,
            // "terminal.findMatchHighlightBorder": null,
            // "terminal.selectionForeground": null,
            // "terminal.dropBackground": null,
            // "terminal.findMatchBackground": null,
            // "terminal.findMatchHighlightBackground": null,
            // "terminal.hoverHighlightBackground": null,
            // "terminal.initialHintForeground": null,
            // "terminalCommandDecoration.defaultBackground": "#ffffff40",
            // "terminalCommandDecoration.errorBackground": "#f14c4c",
            // "terminalCommandDecoration.successBackground": "#1b81a8",
            // "terminalOverviewRuler.cursorForeground": "#a0a0a0cc",
            // "terminalOverviewRuler.findMatchForeground": "#d186167e",
            // "terminalStickyScrollHover.background": "#2a2d2e",
            // "terminalStickyScroll.background": null,
            // "terminalStickyScroll.border": null,
            // "textBlockQuote.background": "#2b2b2b",
            // "textBlockQuote.border": "#616161",
            // "textCodeBlock.background": "#2b2b2b",
            // "textLink.activeForeground": "#4daafc",
            // "textLink.foreground": "#4daafc",
            // "textPreformat.background": "#3c3c3c",
            // "textPreformat.foreground": "#d0d0d0",
            // "textSeparator.foreground": "#21262d",
            // "titleBar.activeForeground": "#cccccc",
            // "titleBar.inactiveBackground": "#1f1f1f",
            // "titleBar.inactiveForeground": "#9d9d9d",
            // "welcomePage.progress.foreground": "#0078d4",
            // "welcomePage.tileBackground": "#2b2b2b",
            // "widget.border": "#313131",
        },
        semanticHighlighting: true,
        semanticTokenColors: {
            newOperator: syntax["operators"],
            stringLiteral: syntax["strings"],
            customLiteral: syntax["strings"],
            numberLiteral: syntax["numbers"],
        },
    };
};

const outdir = {
    themes: resolve(import.meta.dirname, "..", "themes"),
    terminal: resolve(import.meta.dirname, "..", "terminal"),
};

await mkdir(outdir.themes, { recursive: true });

await Promise.all([
    writeFile(
        resolve(outdir.themes, "flexoki-dark-red-color-theme.json"),
        JSON.stringify(generateTheme("Dark", "Red"), null, 4),
    ),
    writeFile(
        resolve(outdir.themes, "flexoki-dark-orange-color-theme.json"),
        JSON.stringify(generateTheme("Dark", "Orange"), null, 4),
    ),
    writeFile(
        resolve(outdir.themes, "flexoki-dark-yellow-color-theme.json"),
        JSON.stringify(generateTheme("Dark", "Yellow"), null, 4),
    ),
    writeFile(
        resolve(outdir.themes, "flexoki-dark-green-color-theme.json"),
        JSON.stringify(generateTheme("Dark", "Green"), null, 4),
    ),
    writeFile(
        resolve(outdir.themes, "flexoki-dark-cyan-color-theme.json"),
        JSON.stringify(generateTheme("Dark", "Cyan"), null, 4),
    ),
    writeFile(
        resolve(outdir.themes, "flexoki-dark-blue-color-theme.json"),
        JSON.stringify(generateTheme("Dark", "Blue"), null, 4),
    ),
    writeFile(
        resolve(outdir.themes, "flexoki-dark-purple-color-theme.json"),
        JSON.stringify(generateTheme("Dark", "Purple"), null, 4),
    ),
    writeFile(
        resolve(outdir.themes, "flexoki-dark-magenta-color-theme.json"),
        JSON.stringify(generateTheme("Dark", "Magenta"), null, 4),
    ),
    writeFile(
        resolve(outdir.themes, "flexoki-light-red-color-theme.json"),
        JSON.stringify(generateTheme("Light", "Red"), null, 4),
    ),
    writeFile(
        resolve(outdir.themes, "flexoki-light-orange-color-theme.json"),
        JSON.stringify(generateTheme("Light", "Orange"), null, 4),
    ),
    writeFile(
        resolve(outdir.themes, "flexoki-light-yellow-color-theme.json"),
        JSON.stringify(generateTheme("Light", "Yellow"), null, 4),
    ),
    writeFile(
        resolve(outdir.themes, "flexoki-light-green-color-theme.json"),
        JSON.stringify(generateTheme("Light", "Green"), null, 4),
    ),
    writeFile(
        resolve(outdir.themes, "flexoki-light-cyan-color-theme.json"),
        JSON.stringify(generateTheme("Light", "Cyan"), null, 4),
    ),
    writeFile(
        resolve(outdir.themes, "flexoki-light-blue-color-theme.json"),
        JSON.stringify(generateTheme("Light", "Blue"), null, 4),
    ),
    writeFile(
        resolve(outdir.themes, "flexoki-light-purple-color-theme.json"),
        JSON.stringify(generateTheme("Light", "Purple"), null, 4),
    ),
    writeFile(
        resolve(outdir.themes, "flexoki-light-magenta-color-theme.json"),
        JSON.stringify(generateTheme("Light", "Magenta"), null, 4),
    ),
]);

await mkdir(outdir.terminal, { recursive: true });

await Promise.all([
    writeFile(
        resolve(outdir.terminal, "dark.json"),
        JSON.stringify(generateTerminal("Dark"), null, 4),
    ),
    writeFile(
        resolve(outdir.terminal, "light.json"),
        JSON.stringify(generateTerminal("Light"), null, 4),
    ),
]);
