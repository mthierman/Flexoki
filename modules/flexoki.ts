import Color from "colorjs.io";
import { mkdir, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

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

export interface Mapping {
    ui: {
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

export const baseTones = {
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

export const accentColors = {
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

export const light: ColorTheme = {
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

export function colorToHex(color: Color) {
    return color.toString({ format: "hex" });
}

export function colorsToHex(colors: Record<string, Color | string>) {
    Object.entries(colors).forEach(([key, value]: [string, Color | string]) => {
        colors[key] = colorToHex(value as Color);
    });
    return colors;
}

export function makeTheme(colorTheme: ColorTheme) {
    Object.entries(colorTheme).forEach(([key, value]: [string, Color | string]) => {
        colorTheme[key as keyof ColorTheme] = colorToHex(value as Color);
    });
    return colorTheme;
}

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

export const makeAccentColor = (theme: Theme, accentColor: AccentColor) => {
    switch (accentColor) {
        case "Red": {
            return theme === "Dark" ? accentColors["red-400"] : accentColors["red-600"];
        }
        case "Orange": {
            return theme === "Dark" ? accentColors["orange-400"] : accentColors["orange-600"];
        }
        case "Yellow": {
            return theme === "Dark" ? accentColors["yellow-400"] : accentColors["yellow-600"];
        }
        case "Green": {
            return theme === "Dark" ? accentColors["green-400"] : accentColors["green-600"];
        }
        case "Cyan": {
            return theme === "Dark" ? accentColors["cyan-400"] : accentColors["cyan-600"];
        }
        case "Blue": {
            return theme === "Dark" ? accentColors["blue-400"] : accentColors["blue-600"];
        }
        case "Purple": {
            return theme === "Dark" ? accentColors["purple-400"] : accentColors["purple-600"];
        }
        case "Magenta": {
            return theme === "Dark" ? accentColors["magenta-400"] : accentColors["magenta-600"];
        }
    }
};

export const generateTerminal = (theme: Theme) => {
    const base = colorsToHex(baseTones) as typeof baseTones;

    const themes = {
        dark: makeTheme(dark),
        light: makeTheme(light),
    };

    const mappings = {
        dark: makeMapping(themes.dark),
        light: makeMapping(themes.light),
    };

    const mapping = theme === "Dark" ? mappings.dark : mappings.light;
    const colorTheme = theme === "Dark" ? themes.dark : themes.light;

    return {
        background: mapping["ui"]["main-background"],
        black: base["base-950"],
        blue: colorTheme["bl2"],
        brightBlack: base["base-900"],
        brightBlue: colorTheme["bl"],
        brightCyan: colorTheme["cy"],
        brightGreen: colorTheme["gr"],
        brightPurple: colorTheme["ma"],
        brightRed: colorTheme["re"],
        brightWhite: base["base-50"],
        brightYellow: colorTheme["ye"],
        cursorColor: mapping["ui"]["primary-text"],
        cyan: colorTheme["cy2"],
        foreground: mapping["ui"]["primary-text"],
        green: colorTheme["gr2"],
        name: `Flexoki ${theme}`,
        purple: colorTheme["ma2"],
        red: colorTheme["re2"],
        selectionBackground: mapping["ui"]["secondary-background"],
        white: base["base-100"],
        yellow: colorTheme["ye2"],
    };
};

export const generateTheme = (theme: Theme, accentColor: AccentColor) => {
    const base = colorsToHex(baseTones) as typeof baseTones;
    const accent = colorToHex(makeAccentColor(theme, accentColor));

    const themes = {
        dark: makeTheme(dark),
        light: makeTheme(light),
    };

    const mappings = {
        dark: makeMapping(themes.dark),
        light: makeMapping(themes.light),
    };

    const mapping = theme === "Dark" ? mappings.dark : mappings.light;
    const colorTheme = theme === "Dark" ? themes.dark : themes.light;

    return {
        $schema: "vscode://schemas/color-theme",
        name: `Flexoki ${theme} ${accentColor}`,
        semanticHighlighting: true,
        colors: {
            "activityBar.activeBackground": colorTheme["transparent"],
            "activityBar.activeBorder": colorTheme["transparent"],
            "activityBar.activeFocusBorder": colorTheme["transparent"],
            "activityBar.background": mapping["ui"]["main-background"],
            "activityBar.border": mapping["ui"]["borders"],
            "activityBar.foreground": mapping["ui"]["primary-text"],
            "activityBar.inactiveForeground": mapping["ui"]["faint-text"],
            "activityBarBadge.background": mapping["ui"]["main-background"],
            "activityBarBadge.foreground": accent,
            "activityBarTop.activeBorder": colorTheme["transparent"],
            "activityBarTop.foreground": mapping["ui"]["primary-text"],
            "activityBarTop.inactiveForeground": mapping["ui"]["muted-text"],
            "badge.background": mapping["ui"]["main-background"],
            "badge.foreground": accent,
            "banner.background": mapping["ui"]["main-background"],
            "banner.foreground": mapping["ui"]["primary-text"],
            "banner.iconForeground": mapping["ui"]["primary-text"],
            "breadcrumb.activeSelectionForeground": mapping["ui"]["primary-text"],
            "breadcrumb.background": mapping["ui"]["main-background"],
            "breadcrumb.focusForeground": mapping["ui"]["primary-text"],
            "breadcrumb.foreground": mapping["ui"]["muted-text"],
            "breadcrumbPicker.background": mapping["ui"]["main-background"],
            "button.background": mapping["ui"]["main-background"],
            "button.border": mapping["ui"]["borders"],
            "button.foreground": mapping["ui"]["primary-text"],
            "button.hoverBackground": mapping["ui"]["secondary-background"],
            "button.secondaryBackground": mapping["ui"]["main-background"],
            "button.secondaryForeground": mapping["ui"]["primary-text"],
            "button.secondaryHoverBackground": mapping["ui"]["secondary-background"],
            "button.separator": mapping["ui"]["borders"],
            "commandCenter.activeBackground": mapping["ui"]["main-background"],
            "commandCenter.activeBorder": mapping["ui"]["active-borders"],
            "commandCenter.activeForeground": mapping["ui"]["primary-text"],
            "commandCenter.background": mapping["ui"]["secondary-background"],
            "commandCenter.border": mapping["ui"]["borders"],
            "commandCenter.foreground": mapping["ui"]["muted-text"],
            "commandCenter.inactiveBorder": mapping["ui"]["borders"],
            "commandCenter.inactiveForeground": mapping["ui"]["faint-text"],
            "dropdown.background": mapping["ui"]["main-background"],
            "dropdown.border": mapping["ui"]["borders"],
            "dropdown.foreground": mapping["ui"]["primary-text"],
            "dropdown.listBackground": mapping["ui"]["main-background"],
            "editor.background": mapping["ui"]["main-background"],
            "editor.foreground": mapping["ui"]["primary-text"],

            "editorActiveLineNumber.foreground": mapping["ui"]["primary-text"],
            "editorBracketHighlight.foreground1": colorTheme["ye"],
            "editorBracketHighlight.foreground2": colorTheme["ma"],
            "editorBracketHighlight.foreground3": colorTheme["bl"],
            "editorBracketHighlight.foreground4": colorTheme["or"],
            "editorBracketHighlight.foreground5": colorTheme["pu"],
            "editorBracketHighlight.foreground6": colorTheme["gr"],
            "editorBracketHighlight.unexpectedBracket.foreground": colorTheme["re"],
            "editorBracketMatch.background": colorTheme["transparent"],
            "editorBracketMatch.border": mapping["ui"]["borders"],

            "editorCursor.background": mapping["ui"]["main-background"],
            "editorCursor.foreground": mapping["ui"]["primary-text"],
            "editorGroup.border": mapping["ui"]["borders"],
            "editorGroup.emptyBackground": mapping["ui"]["main-background"],
            "editorGroupHeader.border": colorTheme["transparent"],
            "editorGroupHeader.noTabsBackground": mapping["ui"]["secondary-background"],
            "editorGroupHeader.tabsBackground": mapping["ui"]["secondary-background"],
            "editorGroupHeader.tabsBorder": colorTheme["transparent"],
            "editorHoverWidget.background": mapping["ui"]["main-background"],
            "editorHoverWidget.border": mapping["ui"]["borders"],
            "editorSuggestWidget.background": mapping["ui"]["secondary-background"],
            "editorWidget.background": mapping["ui"]["main-background"],
            "editorWidget.border": mapping["ui"]["borders"],
            "editorWidget.foreground": mapping["ui"]["primary-text"],
            "extensionBadge.remoteBackground": mapping["ui"]["main-background"],
            "extensionBadge.remoteForeground": accent,
            "extensionButton.background": mapping["ui"]["secondary-background"],
            "extensionButton.foreground": mapping["ui"]["primary-text"],
            "extensionButton.hoverBackground": mapping["ui"]["main-background"],
            "extensionButton.prominentBackground": mapping["ui"]["secondary-background"],
            "extensionButton.prominentForeground": mapping["ui"]["primary-text"],
            "extensionButton.prominentHoverBackground": mapping["ui"]["main-background"],
            "extensionButton.separator": mapping["ui"]["muted-text"],
            "focusBorder": colorTheme["transparent"],
            "foreground": mapping["ui"]["primary-text"],
            "gitDecoration.addedResourceForeground": colorTheme["gr"],
            "gitDecoration.conflictingResourceForeground": colorTheme["re"],
            "gitDecoration.deletedResourceForeground": colorTheme["or"],
            "gitDecoration.ignoredResourceForeground": mapping["ui"]["muted-text"],
            "gitDecoration.modifiedResourceForeground": colorTheme["ye"],
            "gitDecoration.renamedResourceForeground": colorTheme["gr"],
            "gitDecoration.stageDeletedResourceForeground": colorTheme["or"],
            "gitDecoration.stageModifiedResourceForeground": colorTheme["ye"],
            "gitDecoration.submoduleResourceForeground": colorTheme["bl"],
            "gitDecoration.untrackedResourceForeground": colorTheme["gr"],
            "icon.foreground": mapping["ui"]["muted-text"],
            "input.background": mapping["ui"]["main-background"],
            "input.border": mapping["ui"]["borders"],
            "input.foreground": mapping["ui"]["primary-text"],
            "input.placeholderForeground": mapping["ui"]["muted-text"],
            "keybindingLabel.background": mapping["ui"]["main-background"],
            "keybindingLabel.border": mapping["ui"]["borders"],
            "keybindingLabel.bottomBorder": mapping["ui"]["borders"],
            "keybindingLabel.foreground": mapping["ui"]["primary-text"],
            "keybindingTable.headerBackground": mapping["ui"]["secondary-background"],
            "keybindingTable.rowsBackground": mapping["ui"]["secondary-background"],
            "list.activeSelectionBackground": mapping["ui"]["main-background"],
            "list.activeSelectionForeground": mapping["ui"]["primary-text"],
            "list.hoverBackground": mapping["ui"]["main-background"],
            "list.inactiveSelectionBackground": mapping["ui"]["main-background"],
            "list.inactiveSelectionForeground": mapping["ui"]["primary-text"],
            "menu.background": mapping["ui"]["main-background"],
            "menu.border": mapping["ui"]["borders"],
            "menu.foreground": mapping["ui"]["primary-text"],
            "menu.selectionBackground": mapping["ui"]["main-background"],
            "menu.selectionBorder": colorTheme["transparent"],
            "menu.selectionForeground": mapping["ui"]["primary-text"],
            "menu.separatorBackground": mapping["ui"]["secondary-background"],
            "menubar.selectionBackground": mapping["ui"]["main-background"],
            "menubar.selectionBorder": colorTheme["transparent"],
            "menubar.selectionForeground": mapping["ui"]["primary-text"],
            "panel.background": mapping["ui"]["main-background"],
            "panel.border": mapping["ui"]["borders"],
            "panelInput.border": mapping["ui"]["borders"],
            "pickerGroup.border": mapping["ui"]["borders"],
            "pickerGroup.foreground": mapping["ui"]["primary-text"],
            "quickInput.background": mapping["ui"]["main-background"],
            "quickInput.foreground": mapping["ui"]["primary-text"],
            "quickInputList.focusBackground": mapping["ui"]["secondary-background"],
            "quickInputList.focusForeground": mapping["ui"]["primary-text"],
            "quickInputList.focusIconForeground": mapping["ui"]["primary-text"],
            "quickInputTitle.background": mapping["ui"]["secondary-background"],
            "selection.background": mapping["ui"]["secondary-background"],
            "settings.focusedRowBackground": mapping["ui"]["secondary-background"],
            "settings.focusedRowBorder": colorTheme["transparent"],
            "settings.rowHoverBackground": mapping["ui"]["secondary-background"],
            "sideBar.background": mapping["ui"]["secondary-background"],
            "sideBar.border": mapping["ui"]["borders"],
            "sideBar.foreground": mapping["ui"]["primary-text"],
            "sideBarSectionHeader.background": mapping["ui"]["secondary-background"],
            "sideBarSectionHeader.border": mapping["ui"]["borders"],
            "sideBarTitle.foreground": mapping["ui"]["primary-text"],
            "statusBar.background": mapping["ui"]["secondary-background"],
            "statusBar.border": mapping["ui"]["borders"],
            "statusBar.debuggingBackground": accent,
            "statusBar.debuggingBorder": mapping["ui"]["borders"],
            "statusBar.debuggingForeground": mapping["ui"]["primary-text"],
            "statusBar.focusBorder": mapping["ui"]["active-borders"],
            "statusBar.foreground": mapping["ui"]["primary-text"],
            "statusBar.noFolderBackground": mapping["ui"]["secondary-background"],
            "statusBar.noFolderBorder": mapping["ui"]["borders"],
            "statusBar.noFolderForeground": mapping["ui"]["primary-text"],
            "tab.activeBackground": mapping["ui"]["main-background"],
            "tab.activeBorder": colorTheme["transparent"],
            "tab.activeBorderTop": colorTheme["transparent"],
            "tab.activeForeground": mapping["ui"]["primary-text"],
            "tab.border": mapping["ui"]["borders"],
            "tab.hoverBackground": mapping["ui"]["main-background"],
            "tab.inactiveBackground": mapping["ui"]["secondary-background"],
            "terminal.ansiBlack": base["base-950"],
            "terminal.ansiBlue": colorTheme["bl2"],
            "terminal.ansiBrightBlack": base["base-900"],
            "terminal.ansiBrightBlue": colorTheme["bl"],
            "terminal.ansiBrightCyan": colorTheme["cy"],
            "terminal.ansiBrightGreen": colorTheme["gr"],
            "terminal.ansiBrightMagenta": colorTheme["ma"],
            "terminal.ansiBrightRed": colorTheme["re"],
            "terminal.ansiBrightWhite": base["base-50"],
            "terminal.ansiBrightYellow": colorTheme["ye"],
            "terminal.ansiCyan": colorTheme["cy2"],
            "terminal.ansiGreen": colorTheme["gr2"],
            "terminal.ansiMagenta": colorTheme["ma2"],
            "terminal.ansiRed": colorTheme["re2"],
            "terminal.ansiWhite": base["base-100"],
            "terminal.ansiYellow": colorTheme["ye2"],
            "terminal.background": mapping["ui"]["main-background"],
            "terminal.border": mapping["ui"]["borders"],
            "terminal.foreground": mapping["ui"]["primary-text"],
            "terminal.selectionBackground": mapping["ui"]["secondary-background"],
            "terminalCursor.foreground": mapping["ui"]["primary-text"],
            "titleBar.activeBackground": mapping["ui"]["secondary-background"],
            "titleBar.activeForeground": mapping["ui"]["primary-text"],
            "titleBar.border": mapping["ui"]["borders"],
            "titleBar.inactiveBackground": mapping["ui"]["secondary-background"],
            "titleBar.inactiveForeground": mapping["ui"]["faint-text"],
            "toolbar.activeBackground": mapping["ui"]["main-background"],
            "toolbar.hoverBackground": mapping["ui"]["secondary-background"],
            "toolbar.hoverOutline": colorTheme["transparent"],
            "widget.border": mapping["ui"]["borders"],
            "widget.shadow": mapping["ui"]["secondary-background"],
        },
        tokenColors: [
            { scope: ["strong", "markup.bold", "markup.heading"], settings: { fontStyle: "bold" } },
            { scope: ["emphasis, markup.italic"], settings: { fontStyle: "italic" } },
            { scope: ["markup.underline"], settings: { fontStyle: "underline" } },
            { scope: ["markup.strikethrough"], settings: { fontStyle: "strikethrough" } },
            {
                scope: ["markup.inserted"],
                settings: { foreground: colorTheme["gr"] },
            },
            { scope: ["markup.deleted"], settings: { foreground: colorTheme["re"] } },
            { scope: ["markup.changed"], settings: { foreground: colorTheme["ye"] } },
            {
                scope: ["comment", "comment.block", "comment.block.documentation", "comment.line"],
                settings: {
                    foreground: mapping["syntax"]["comments"],
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
                ],
                settings: {
                    foreground: mapping["syntax"]["constants"],
                },
            },
            {
                scope: [
                    "constant.numeric",
                    "constant.numeric.integer",
                    "constant.numeric.float",
                    "constant.numeric.hex",
                    "constant.numeric.octal",
                ],
                settings: {
                    foreground: mapping["syntax"]["numbers"],
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
                    "punctuation.definition.heading",
                ],
                settings: {
                    foreground: mapping["syntax"]["punctuation"],
                },
            },
            {
                scope: ["invalid", "invalid.deprecated", "invalid.illegal"],
                settings: {
                    foreground: mapping["syntax"]["invalid"],
                },
            },
            {
                scope: ["keyword", "keyword.control", "keyword.other", "string.json"],
                settings: {
                    foreground: mapping["syntax"]["keywords"],
                },
            },
            {
                scope: [
                    "keyword.operator",
                    "keyword.operator.new",
                    "keyword.operator.assignment",
                    "keyword.operator.arithmetic",
                    "keyword.operator.logical",
                ],
                settings: {
                    foreground: mapping["syntax"]["operators"],
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
                    "meta.type.annotation",
                    "meta.type",
                ],
                settings: {
                    foreground: mapping["syntax"]["language-features"],
                },
            },
            {
                scope: [
                    "punctuation.definition.string.begin",
                    "punctuation.definition.string.end",
                    "punctuation.separator",
                    "punctuation.separator.continuation",
                    "punctuation.terminator",
                ],
                settings: {
                    foreground: mapping["syntax"]["punctuation"],
                },
            },
            {
                scope: ["storage", "storage.modifier", "storage.type"],
                settings: {
                    foreground: mapping["syntax"]["language-features"],
                },
            },
            {
                scope: [
                    "string",
                    "string.interpolated",
                    "string.other",
                    "string.quoted",
                    "string.quoted.double",
                    "string.quoted.other",
                    "string.quoted.single",
                    "string.quoted.triple",
                    "string.regexp",
                    "string.unquoted",
                ],
                settings: {
                    foreground: mapping["syntax"]["strings"],
                },
            },
            {
                scope: [
                    "support",
                    "support.class",
                    "support.constant",
                    "support.function",
                    "support.other",
                    "support.type",
                    "support.type.property-name",
                    "support.variable",
                ],
                settings: {
                    foreground: mapping["syntax"]["functions"],
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
                    foreground: mapping["syntax"]["variables"],
                },
            },
        ],
        semanticTokenColors: {
            newOperator: mapping["syntax"]["operators"],
            stringLiteral: mapping["syntax"]["strings"],
            customLiteral: mapping["syntax"]["strings"],
            numberLiteral: mapping["syntax"]["numbers"],
        },
    };
};

const outdir = {
    themes: resolve(import.meta.dirname, "..", "themes"),
    terminal: resolve(import.meta.dirname, "..", "terminal"),
};

async function main() {
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

    await rm(resolve(import.meta.dirname, "flexoki.js"));
}

main();
