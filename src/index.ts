import * as fs from "node:fs/promises";
import { dirname, resolve } from "node:path";

export const baseTones: BaseTones = {
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

export const darkTones: DarkTones = {
    "red-600": "#AF3029",
    "orange-600": "#BC5215",
    "yellow-600": "#AD8301",
    "green-600": "#66800B",
    "cyan-600": "#24837B",
    "blue-600": "#205EA6",
    "purple-600": "#5E409D",
    "magenta-600": "#A02F6F",
};

export const lightTones: LightTones = {
    "red-400": "#D14D41",
    "orange-400": "#DA702C",
    "yellow-400": "#D0A215",
    "green-400": "#879A39",
    "cyan-400": "#3AA99F",
    "blue-400": "#4385BE",
    "purple-400": "#8B7EC8",
    "magenta-400": "#CE5D97",
};

export const getDarkMappings = (): Mappings => {
    return {
        "bg": baseTones["black"],
        "bg-2": baseTones["base-950"],
        "ui": baseTones["base-900"],
        "ui-2": baseTones["base-850"],
        "ui-3": baseTones["base-800"],
        "tx-3": baseTones["base-700"],
        "tx-2": baseTones["base-500"],
        "tx": baseTones["base-200"],
        "re": lightTones["red-400"],
        "re2": darkTones["red-600"],
        "or": lightTones["orange-400"],
        "or2": darkTones["orange-600"],
        "ye": lightTones["yellow-400"],
        "ye2": darkTones["yellow-600"],
        "gr": lightTones["green-400"],
        "gr2": darkTones["green-600"],
        "cy": lightTones["cyan-400"],
        "cy2": darkTones["cyan-600"],
        "bl": lightTones["blue-400"],
        "bl2": darkTones["blue-600"],
        "pu": lightTones["purple-400"],
        "pu2": darkTones["purple-600"],
        "ma": lightTones["magenta-400"],
        "ma2": darkTones["magenta-600"],
        "transparent": "#00000000",
    };
};

export const getLightMappings = (): Mappings => {
    return {
        "bg": baseTones["paper"],
        "bg-2": baseTones["base-50"],
        "ui": baseTones["base-100"],
        "ui-2": baseTones["base-150"],
        "ui-3": baseTones["base-200"],
        "tx-3": baseTones["base-300"],
        "tx-2": baseTones["base-600"],
        "tx": baseTones["black"],
        "re": darkTones["red-600"],
        "re2": lightTones["red-400"],
        "or": darkTones["orange-600"],
        "or2": lightTones["orange-400"],
        "ye": darkTones["yellow-600"],
        "ye2": lightTones["yellow-400"],
        "gr": darkTones["green-600"],
        "gr2": lightTones["green-400"],
        "cy": darkTones["cyan-600"],
        "cy2": lightTones["cyan-400"],
        "bl": darkTones["blue-600"],
        "bl2": lightTones["blue-400"],
        "pu": darkTones["purple-600"],
        "pu2": lightTones["purple-400"],
        "ma": darkTones["magenta-600"],
        "ma2": lightTones["magenta-400"],
        "transparent": "#FFFFFF00",
    };
};

const test = "#ff00dd";

export const getTheme = (dark: boolean, color: string) => {
    const mappings = dark ? getDarkMappings() : getLightMappings();

    let accent;
    let accentHover;

    switch (color) {
        case "Red":
            accent = dark ? mappings["re2"] : mappings["re"];
            accentHover = dark ? mappings["re"] : mappings["re2"];
            break;
        case "Orange":
            accent = dark ? mappings["or2"] : mappings["or"];
            accentHover = dark ? mappings["or"] : mappings["or2"];
            break;
        case "Yellow":
            accent = dark ? mappings["ye2"] : mappings["ye"];
            accentHover = dark ? mappings["ye"] : mappings["ye2"];
            break;
        case "Green":
            accent = dark ? mappings["gr2"] : mappings["gr"];
            accentHover = dark ? mappings["gr"] : mappings["gr2"];
            break;
        case "Cyan":
            accent = dark ? mappings["cy2"] : mappings["cy"];
            accentHover = dark ? mappings["cy"] : mappings["cy2"];
            break;
        case "Blue":
            accent = dark ? mappings["bl2"] : mappings["bl"];
            accentHover = dark ? mappings["bl"] : mappings["bl2"];
            break;
        case "Purple":
            accent = dark ? mappings["pu2"] : mappings["pu"];
            accentHover = dark ? mappings["pu"] : mappings["pu2"];
            break;
        case "Magenta":
            accent = dark ? mappings["ma2"] : mappings["ma"];
            accentHover = dark ? mappings["ma"] : mappings["ma2"];
            break;
    }

    return {
        $schema: "vscode://schemas/color-theme",
        name: `Flexoki ${dark ? "Dark" : "Light"} ${color}`,
        semanticHighlighting: true,
        colors: {
            "activityBar.activeBackground": mappings["ui"],
            "activityBar.activeBorder": mappings["transparent"],
            "activityBar.activeFocusBorder": mappings["transparent"],
            "activityBar.background": mappings["bg-2"],
            "activityBar.border": mappings["ui"],
            "activityBar.dropBorder": mappings["transparent"],
            "activityBar.foreground": mappings["tx"],
            "activityBar.inactiveForeground": mappings["tx-2"],
            "activityBarBadge.background": accent,
            "activityBarBadge.foreground": baseTones.paper,
            "button.background": accent,
            "button.border": mappings["transparent"],
            "button.foreground": baseTones.paper,
            "button.hoverBackground": accentHover,
            "commandCenter.activeBackground": mappings["ui-2"],
            "commandCenter.activeBorder": mappings["transparent"],
            "commandCenter.activeForeground": mappings["tx"],
            "commandCenter.background": mappings["bg-2"],
            "commandCenter.border": mappings["transparent"],
            "commandCenter.foreground": mappings["tx-2"],
            "commandCenter.inactiveBorder": mappings["transparent"],
            "commandCenter.inactiveForeground": mappings["tx-3"],
            "dropdown.background": mappings["bg"],
            "dropdown.border": mappings["ui"],
            "dropdown.foreground": mappings["tx"],
            "dropdown.listBackground": mappings["bg"],
            "editor.background": mappings["bg"],
            "editor.foreground": mappings["tx"],
            "editorCursor.background": accent,
            "editorCursor.foreground": accent,
            "editorGroup.border": mappings["ui"],
            "editorGroupHeader.border": mappings["ui-2"],
            "editorGroupHeader.tabsBorder": mappings["ui-2"],
            "editorGroupHeader.tabsBackground": dark ? mappings["ui"] : mappings["bg"],
            "editorSuggestWidget.background": mappings["bg-2"],
            "editorWidget.background": mappings["ui"],
            "editorWidget.border": mappings["ui"],
            "editorWidget.foreground": mappings["tx"],
            "editorHoverWidget.background": mappings["bg"],
            "editorHoverWidget.border": mappings["ui"],
            "focusBorder": mappings["transparent"],
            "icon.foreground": mappings["tx"],
            "input.background": mappings["bg"],
            "input.border": mappings["ui"],
            "input.foreground": mappings["tx"],
            "input.placeholderForeground": mappings["tx-2"],
            "list.activeSelectionBackground": mappings["ui-3"],
            "list.activeSelectionForeground": mappings["tx"],
            "list.hoverBackground": mappings["ui-2"],
            "list.inactiveSelectionBackground": mappings["ui"],
            "list.inactiveSelectionForeground": mappings["tx"],
            "menu.background": mappings["bg"],
            "menu.border": mappings["ui"],
            "menu.foreground": mappings["tx"],
            "menu.selectionBackground": mappings["ui-2"],
            "menu.selectionBorder": mappings["transparent"],
            "menu.selectionForeground": mappings["tx"],
            "menu.separatorBackground": mappings["ui-2"],
            "menubar.selectionBackground": mappings["ui-2"],
            "menubar.selectionBorder": mappings["transparent"],
            "menubar.selectionForeground": mappings["tx"],
            "panel.background": mappings["bg"],
            "panel.border": mappings["ui"],
            "quickInput.background": mappings["bg"],
            "quickInput.foreground": mappings["tx"],
            "quickInputList.focusBackground": mappings["ui-3"],
            "quickInputList.focusForeground": mappings["tx"],
            "quickInputList.focusIconForeground": mappings["tx"],
            "selection.background": accent,
            "settings.focusedRowBackground": mappings["bg-2"],
            "settings.focusedRowBorder": mappings["transparent"],
            "settings.rowHoverBackground": mappings["bg-2"],
            "sideBar.background": mappings["bg-2"],
            "sideBar.border": mappings["ui"],
            "sideBar.foreground": mappings["tx"],
            "sideBarSectionHeader.background": mappings["bg"],
            "statusBar.background": dark ? mappings["ui"] : mappings["bg"],
            "statusBar.border": mappings["ui"],
            "statusBar.debuggingBackground": accent,
            "statusBar.debuggingBorder": mappings["ui"],
            "statusBar.debuggingForeground": baseTones.paper,
            "statusBar.focusBorder": mappings["ui"],
            "statusBar.foreground": mappings["tx"],
            "statusBar.noFolderBackground": mappings["bg-2"],
            "statusBar.noFolderBorder": mappings["ui"],
            "statusBar.noFolderForeground": mappings["tx"],
            "tab.activeBackground": mappings["bg"],
            "tab.activeForeground": mappings["tx"],
            "tab.border": mappings["ui-2"],
            "tab.activeBorder": mappings["transparent"],
            "tab.activeBorderTop": accent,
            "tab.hoverBackground": mappings["ui-2"],
            "tab.inactiveBackground": dark ? mappings["ui"] : mappings["bg"],
            "terminal.ansiBlack": baseTones["base-950"],
            "terminal.ansiBlue": mappings["bl2"],
            "terminal.ansiBrightBlack": baseTones["base-900"],
            "terminal.ansiBrightBlue": mappings["bl"],
            "terminal.ansiBrightCyan": mappings["cy"],
            "terminal.ansiBrightGreen": mappings["gr"],
            "terminal.ansiBrightMagenta": mappings["ma"],
            "terminal.ansiBrightRed": mappings["re"],
            "terminal.ansiBrightWhite": baseTones["base-50"],
            "terminal.ansiBrightYellow": mappings["ye"],
            "terminal.ansiCyan": mappings["cy2"],
            "terminal.ansiGreen": mappings["gr2"],
            "terminal.ansiMagenta": mappings["ma2"],
            "terminal.ansiRed": mappings["re2"],
            "terminal.ansiWhite": baseTones["base-100"],
            "terminal.ansiYellow": mappings["ye2"],
            "terminal.background": mappings["bg"],
            "terminal.border": mappings["ui"],
            "terminal.foreground": mappings["tx"],
            "terminal.selectionBackground": accent,
            "terminalCursor.foreground": mappings["tx"],
            "titleBar.activeBackground": dark ? mappings["ui"] : mappings["bg"],
            "titleBar.activeForeground": mappings["tx"],
            "titleBar.border": mappings["ui"],
            "titleBar.inactiveBackground": mappings["bg-2"],
            "titleBar.inactiveForeground": mappings["tx-3"],
            "widget.border": mappings["ui"],
        },
        tokenColors: [
            {
                scope: ["comment", "comment.block", "comment.block.documentation", "comment.line"],
                settings: {
                    foreground: mappings["tx-3"],
                },
            },
            {
                scope: [
                    "constant",
                    "constant.character",
                    "constant.character.escape",
                    "constant.other",
                    "constant.regexp",
                    "constant.rgb-value",
                    "support.constant",
                ],
                settings: {
                    foreground: mappings["ye"],
                },
            },
            {
                scope: [
                    "constant.numeric",
                    "constant.numeric.float",
                    "constant.numeric.hex",
                    "constant.numeric.integer",
                    "constant.numeric.octal",
                ],
                settings: {
                    foreground: mappings["pu"],
                },
            },
            {
                scope: [
                    "entity",
                    "entity.name",
                    "entity.name.class",
                    "entity.name.function",
                    "entity.name.method",
                    "entity.name.section",
                    "entity.name.selector",
                    "entity.name.tag",
                    "entity.name.type",
                    "entity.other",
                    "entity.other.attribute-name",
                    "entity.other.inherited-class",
                    "markup.heading",
                    "support.function",
                ],
                settings: {
                    foreground: mappings["or"],
                },
            },
            {
                scope: ["invalid", "invalid.deprecated", "invalid.illegal"],
                settings: {
                    foreground: mappings["re"],
                },
            },
            {
                scope: ["keyword", "keyword.control", "keyword.other", "string.json"],
                settings: {
                    foreground: mappings["gr"],
                },
            },
            {
                scope: [
                    "keyword.operator",
                    "keyword.operator.arithmetic",
                    "keyword.operator.assignment",
                    "keyword.operator.logical",
                    "keyword.operator.new",
                ],
                settings: {
                    foreground: mappings["tx-2"],
                },
            },
            {
                scope: [
                    "meta",
                    "meta.block",
                    "meta.cast",
                    "meta.class",
                    "meta.function",
                    "meta.function-call",
                    "meta.preprocessor",
                    "meta.return-type",
                    "meta.selector",
                    "meta.tag",
                    "meta.type",
                    "meta.type.annotation",
                ],
                settings: {
                    foreground: mappings["ma"],
                },
            },
            {
                scope: [
                    "punctuation.definition.tag",
                    "punctuation.definition.string.begin",
                    "punctuation.definition.string.end",
                    "punctuation.separator",
                    "punctuation.separator.continuation",
                    "punctuation.terminator",
                ],
                settings: {
                    foreground: mappings["tx-2"],
                },
            },
            {
                scope: ["storage", "storage.modifier", "storage.type"],
                settings: {
                    foreground: mappings["gr"],
                },
            },
            {
                scope: [
                    "string",
                    "string.interpolated",
                    "string.other",
                    "string.regexp",
                    "string.quoted",
                    "string.quoted.double",
                    "string.quoted.other",
                    "string.quoted.single",
                    "string.quoted.triple",
                    "string.unquoted",
                ],
                settings: {
                    foreground: mappings["cy"],
                },
            },
            {
                scope: [
                    "variable",
                    "variable.language",
                    "variable.name",
                    "variable.other",
                    "variable.other.readwrite",
                    "variable.parameter",
                ],
                settings: {
                    foreground: mappings["bl"],
                },
            },
        ],
        semanticTokenColors: {
            newOperator: accent,
            stringLiteral: mappings["cy"],
            customLiteral: mappings["tx"],
            numberLiteral: mappings["pu"],
        },
    };
};

export const getTerminalTheme = (dark: boolean) => {
    const mappings = dark ? getDarkMappings() : getLightMappings();

    return {
        background: mappings["bg"],
        black: baseTones["base-950"],
        blue: mappings["bl2"],
        brightBlack: baseTones["base-900"],
        brightBlue: mappings["bl"],
        brightCyan: mappings["cy"],
        brightGreen: mappings["gr"],
        brightPurple: mappings["ma"],
        brightRed: mappings["re"],
        brightWhite: baseTones["base-50"],
        brightYellow: mappings["ye"],
        cursorColor: mappings["tx"],
        cyan: mappings["cy2"],
        foreground: mappings["tx"],
        green: mappings["gr2"],
        name: `Flexoki ${dark ? "Dark" : "Light"}`,
        purple: mappings["ma2"],
        red: mappings["re2"],
        selectionBackground: mappings["bl2"],
        white: baseTones["base-100"],
        yellow: mappings["ye2"],
    };
};

const themesDir = resolve(dirname(import.meta.dirname), "themes");

fs.mkdir(themesDir, { recursive: true })
    .then(() =>
        Promise.all([
            fs.writeFile(
                `${themesDir}/flexoki-dark-red-color-theme.json`,
                JSON.stringify(getTheme(true, "Red"), null, 4),
            ),
            fs.writeFile(
                `${themesDir}/flexoki-dark-orange-color-theme.json`,
                JSON.stringify(getTheme(true, "Orange"), null, 4),
            ),
            fs.writeFile(
                `${themesDir}/flexoki-dark-yellow-color-theme.json`,
                JSON.stringify(getTheme(true, "Yellow"), null, 4),
            ),
            fs.writeFile(
                `${themesDir}/flexoki-dark-green-color-theme.json`,
                JSON.stringify(getTheme(true, "Green"), null, 4),
            ),
            fs.writeFile(
                `${themesDir}/flexoki-dark-cyan-color-theme.json`,
                JSON.stringify(getTheme(true, "Cyan"), null, 4),
            ),
            fs.writeFile(
                `${themesDir}/flexoki-dark-blue-color-theme.json`,
                JSON.stringify(getTheme(true, "Blue"), null, 4),
            ),
            fs.writeFile(
                `${themesDir}/flexoki-dark-purple-color-theme.json`,
                JSON.stringify(getTheme(true, "Purple"), null, 4),
            ),
            fs.writeFile(
                `${themesDir}/flexoki-dark-magenta-color-theme.json`,
                JSON.stringify(getTheme(true, "Magenta"), null, 4),
            ),
            fs.writeFile(
                `${themesDir}/flexoki-light-red-color-theme.json`,
                JSON.stringify(getTheme(false, "Red"), null, 4),
            ),
            fs.writeFile(
                `${themesDir}/flexoki-light-orange-color-theme.json`,
                JSON.stringify(getTheme(false, "Orange"), null, 4),
            ),
            fs.writeFile(
                `${themesDir}/flexoki-light-yellow-color-theme.json`,
                JSON.stringify(getTheme(false, "Yellow"), null, 4),
            ),
            fs.writeFile(
                `${themesDir}/flexoki-light-green-color-theme.json`,
                JSON.stringify(getTheme(false, "Green"), null, 4),
            ),
            fs.writeFile(
                `${themesDir}/flexoki-light-cyan-color-theme.json`,
                JSON.stringify(getTheme(false, "Cyan"), null, 4),
            ),
            fs.writeFile(
                `${themesDir}/flexoki-light-blue-color-theme.json`,
                JSON.stringify(getTheme(false, "Blue"), null, 4),
            ),
            fs.writeFile(
                `${themesDir}/flexoki-light-purple-color-theme.json`,
                JSON.stringify(getTheme(false, "Purple"), null, 4),
            ),
            fs.writeFile(
                `${themesDir}/flexoki-light-magenta-color-theme.json`,
                JSON.stringify(getTheme(false, "Magenta"), null, 4),
            ),
        ]),
    )
    .catch(() => process.exit(1));

const terminalDir = resolve(dirname(import.meta.dirname), "terminal");

fs.mkdir(terminalDir, { recursive: true })
    .then(() =>
        Promise.all([
            fs.writeFile(
                `${terminalDir}/dark.json`,
                JSON.stringify(getTerminalTheme(true), null, 4),
            ),
            fs.writeFile(
                `${terminalDir}/light.json`,
                JSON.stringify(getTerminalTheme(false), null, 4),
            ),
        ]),
    )
    .catch(() => process.exit(1));
