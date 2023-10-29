import { getBaseColors, getColors } from "./colors.js";
import { getMappings } from "./mappings.js";

const getTheme = (name: string, accentColor: String) => {
    let base = getBaseColors();
    let color = getColors(name);
    let mapping = getMappings(name);

    let accent;
    let accentLight;
    let transparent = "#FFFFFF00";

    if (name === "Flexoki Dark") {
        accent = color.bl2;
        accentLight = color.bl;

        switch (accentColor) {
            case "red":
                accent = color.re2;
                accentLight = color.re;
            case "orange":
                accent = color.or2;
                accentLight = color.or;
            case "yellow":
                accent = color.ye2;
                accentLight = color.ye;
            case "green":
                accent = color.gr2;
                accentLight = color.gr;
            case "cyan":
                accent = color.cy2;
                accentLight = color.cy;
            case "blue":
                accent = color.bl2;
                accentLight = color.bl;
            case "purple":
                accent = color.pu2;
                accentLight = color.pu;
            case "magenta":
                accent = color.ma2;
                accentLight = color.ma;
        }
    }

    if (name === "Flexoki Light") {
        accent = color.bl;
        accentLight = color.bl2;

        switch (accentColor) {
            case "red":
                accent = color.re;
                accentLight = color.re2;
            case "orange":
                accent = color.or;
                accentLight = color.or2;
            case "yellow":
                accent = color.ye;
                accentLight = color.ye2;
            case "green":
                accent = color.gr;
                accentLight = color.gr2;
            case "cyan":
                accent = color.cy;
                accentLight = color.cy2;
            case "blue":
                accent = color.bl;
                accentLight = color.bl2;
            case "purple":
                accent = color.pu;
                accentLight = color.pu2;
            case "magenta":
                accent = color.ma;
                accentLight = color.ma2;
        }
    }

    return {
        $schema: "vscode://schemas/color-theme",
        name: name,
        semanticHighlighting: true,
        colors: {
            "titleBar.activeBackground": mapping.secondary_bg,
            "titleBar.inactiveBackground": mapping.main_bg,
            "titleBar.border": mapping.borders,
            "titleBar.activeForeground": mapping.primary_text,
            "titleBar.inactiveForeground": mapping.faint_text,

            "editor.background": mapping.main_bg,
            "editor.foreground": mapping.primary_text,

            "statusBar.background": mapping.secondary_bg,
            "statusBar.noFolderBackground": mapping.secondary_bg,
            "statusBar.debuggingBackground": mapping.active_borders,

            "statusBar.border": mapping.borders,
            "statusBar.noFolderBorder": mapping.borders,
            "statusBar.debuggingBorder": mapping.borders,
            "statusBar.focusBorder": mapping.borders,

            "statusBar.foreground": mapping.primary_text,
            "statusBar.debuggingForeground": mapping.primary_text,
            "statusBar.noFolderForeground": mapping.primary_text,

            "sideBar.background": mapping.secondary_bg,
            "sideBar.border": mapping.borders,
            "sideBar.foreground": mapping.primary_text,

            "activityBar.background": mapping.secondary_bg,
            "activityBar.border": mapping.borders,
            "activityBar.activeBackground": mapping.borders,
            "activityBar.activeBorder": transparent,
            "activityBar.activeFocusBorder": transparent,
            "activityBar.dropBorder": transparent,
            "activityBar.foreground": mapping.primary_text,
            "activityBar.inactiveForeground": mapping.muted_text,
            "activityBarBadge.background": accentLight,
            "activityBarBadge.foreground": mapping.primary_text,

            "commandCenter.background": mapping.secondary_bg,
            "commandCenter.border": mapping.borders,
            "commandCenter.foreground": mapping.muted_text,
            "commandCenter.inactiveForeground": mapping.faint_text,
            "commandCenter.inactiveBorder": mapping.borders,
            "commandCenter.activeBorder": mapping.borders,
            "commandCenter.activeBackground": mapping.main_bg,
            "commandCenter.activeForeground": mapping.primary_text,
            "commandCenter.debuggingBackground": mapping.main_bg,

            "quickInput.background": mapping.main_bg,
            "quickInput.foreground": mapping.primary_text,
            "quickInputList.focusBackground": mapping.active_borders,
            "quickInputList.focusForeground": mapping.primary_text,
            "quickInputList.focusIconForeground": mapping.primary_text,
            "list.hoverBackground": mapping.hovered_borders,

            "input.background": mapping.main_bg,
            "input.border": mapping.borders,
            "input.foreground": mapping.primary_text,
            "input.placeholderForeground": mapping.muted_text,

            "menu.background": mapping.secondary_bg,
            "menu.border": transparent,
            "menu.foreground": mapping.primary_text,
            "menu.selectionBackground": mapping.hovered_borders,
            "menu.selectionBorder": transparent,
            "menu.selectionForeground": mapping.primary_text,
            "menu.separatorBackground": mapping.borders,

            "menubar.selectionBackground": mapping.hovered_borders,
            "menubar.selectionBorder": transparent,
            "menubar.selectionForeground": mapping.primary_text,

            "panel.background": mapping.secondary_bg,
            "panel.border": mapping.borders,

            "button.background": mapping.borders,
            "button.border": transparent,
            "button.foreground": mapping.primary_text,
            "button.hoverBackground": mapping.hovered_borders,

            "dropdown.background": mapping.main_bg,
            "dropdown.border": mapping.borders,
            "dropdown.foreground": mapping.primary_text,
            "dropdown.listBackground": mapping.main_bg,

            "editorCursor.background": accentLight,
            "editorCursor.foreground": accentLight,

            "editorGroupHeader.tabsBackground": mapping.main_bg,
            "editorGroup.border": mapping.borders,
            "editorGroupHeader.border": mapping.borders,
            "tab.activeForeground": mapping.primary_text,
            "tab.activeBackground": mapping.secondary_bg,
            "tab.inactiveBackground": mapping.main_bg,
            "tab.hoverBackground": mapping.borders,
            "tab.border": mapping.borders,

            "settings.focusedRowBorder": transparent,
            "focusBorder": transparent,
            "list.activeSelectionBackground": mapping.active_borders,
            "list.inactiveSelectionBackground": mapping.borders,
            "list.activeSelectionForeground": mapping.primary_text,
            "list.inactiveSelectionForeground": mapping.primary_text,

            "settings.focusedRowBackground": mapping.secondary_bg,
            "settings.rowHoverBackground": mapping.secondary_bg,

            "editorWidget.background": mapping.borders,
            "editorWidget.foreground": mapping.primary_text,
            "editorWidget.border": mapping.borders,
            "editorSuggestWidget.background": mapping.secondary_bg,

            "icon.foreground": mapping.primary_text,

            "terminal.border": mapping.borders,
            "terminal.background": mapping.secondary_bg,
            "terminal.ansiBlack": base.black,
            "terminal.ansiBlue": color.bl2,
            "terminal.ansiBrightBlack": base.base700,
            "terminal.ansiBrightBlue": color.bl,
            "terminal.ansiBrightCyan": color.cy,
            "terminal.ansiBrightGreen": color.gr,
            "terminal.ansiBrightMagenta": color.ma,
            "terminal.ansiBrightRed": color.re,
            "terminal.ansiBrightWhite": base.paper,
            "terminal.ansiBrightYellow": color.ye,
            "terminalCursor.foreground": mapping.primary_text,
            "terminal.ansiCyan": color.cy2,
            "terminal.foreground": mapping.primary_text,
            "terminal.ansiGreen": color.gr2,
            "terminal.ansiMagenta": color.ma2,
            "terminal.ansiRed": color.re2,
            "terminal.selectionBackground": color.or2,
            "terminal.ansiWhite": base.base300,
            "terminal.ansiYellow": color.ye2,
        },
        tokenColors: [
            {
                scope: [
                    "comment",
                    "comment.block",
                    "comment.block.documentation",
                    "comment.line",
                ],
                settings: {
                    foreground: mapping.comments,
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
                    foreground: mapping.constants,
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
                    foreground: mapping.numbers,
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
                ],
                settings: {
                    foreground: mapping.functions,
                },
            },
            {
                scope: ["invalid", "invalid.deprecated", "invalid.illegal"],
                settings: {
                    foreground: mapping.invalid_imports,
                },
            },
            {
                scope: [
                    "keyword",
                    "keyword.control",
                    "keyword.other",
                    "string.json",
                ],
                settings: {
                    foreground: mapping.keywords,
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
                    foreground: mapping.punctuation_operators,
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
                    foreground: mapping.language_features,
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
                    foreground: mapping.punctuation_operators,
                },
            },
            {
                scope: ["storage", "storage.modifier", "storage.type"],
                settings: {
                    foreground: mapping.keywords,
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
                    foreground: mapping.strings,
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
                    foreground: mapping.variables_attributes,
                },
            },
        ],
    };
};

export default getTheme;
