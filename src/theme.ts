import getColors from "./colors.js";
import getMappings from "./mappings.js";

const getTheme = (name: string) => {
    let color = getColors(name);
    let mapping = getMappings(name);
    return {
        $schema: "vscode://schemas/color-theme",
        name: name,
        semanticHighlighting: true,
        colors: {
            "titleBar.activeBackground": mapping.main_bg,
            "titleBar.inactiveBackground": mapping.secondary_bg,
            "titleBar.border": mapping.borders,
            "titleBar.activeForeground": mapping.primary_text,
            "titleBar.inactiveForeground": mapping.faint_text,

            "editor.background": mapping.main_bg,
            "editor.foreground": mapping.primary_text,

            "statusBar.background": mapping.main_bg,
            "statusBar.noFolderBackground": mapping.main_bg,
            "statusBar.debuggingBackground": color.bl,

            "statusBar.border": "#282726",
            "statusBar.noFolderBorder": "#282726",
            "statusBar.debuggingBorder": "#282726",
            "statusBar.focusBorder": "#282726",

            "statusBar.foreground": "#B7B5AC",
            "statusBar.debuggingForeground": "#B7B5AC",
            "statusBar.noFolderForeground": "#B7B5AC",

            "sideBar.background": "#1C1B1A",
            "sideBar.border": "#282726",
            "sideBar.foreground": "#B7B5AC",

            "activityBar.background": mapping.main_bg,
            "activityBar.border": "#282726",
            "activityBar.activeBackground": "#282726",
            "activityBar.activeBorder": "#5E409D",
            "activityBar.activeFocusBorder": "#5E409D",
            "activityBar.dropBorder": "#5E409D",
            "activityBar.foreground": "#B7B5AC",
            "activityBar.inactiveForeground": "#878580",
            "activityBarBadge.background": "#5E409D",
            "activityBarBadge.foreground": "#FFFCF0",

            "commandCenter.background": mapping.main_bg,
            "commandCenter.border": "#282726",
            "commandCenter.foreground": "#878580",
            "commandCenter.inactiveForeground": "#878580",
            "commandCenter.inactiveBorder": "#282726",
            "commandCenter.activeBorder": "#282726",
            "commandCenter.activeBackground": "#282726",
            "commandCenter.activeForeground": "#B7B5AC",
            "commandCenter.debuggingBackground": "#5E409D40",

            "quickInput.background": "#1C1B1A",
            "quickInput.foreground": "#B7B5AC",
            "quickInputList.focusBackground": "#5E409D",
            "quickInputList.focusForeground": "#FFFCF0",
            "quickInputList.focusIconForeground": "#FFFCF0",

            "input.background": "#1C1B1A",
            "input.border": "#282726",
            "input.foreground": "#B7B5AC",
            "input.placeholderForeground": "#878580",

            "menu.background": "#1C1B1A",
            "menu.border": "#282726",
            "menu.foreground": "#B7B5AC",
            "menu.selectionBackground": "#5E409D",
            "menu.selectionBorder": "#5E409D00",
            "menu.selectionForeground": "#FFFCF0",
            "menu.separatorBackground": "#343331",

            "menubar.selectionBackground": "#5E409D",
            "menubar.selectionBorder": "#205EA600",
            "menubar.selectionForeground": "#FFFCF0",

            "panel.background": "#1C1B1A",
            "panel.border": "#282726",

            "button.background": "#5E409D",
            "button.border": "#205EA600",
            "button.foreground": color.tx,
            "button.hoverBackground": "#8B7EC8",

            "dropdown.background": "#1C1B1A",
            "dropdown.border": "#282726",
            "dropdown.foreground": "#B7B5AC",
            "dropdown.listBackground": "#1C1B1A",

            "editorCursor.background": "#5E409D",
            "editorCursor.foreground": "#5E409D",

            "editorGroupHeader.tabsBackground": mapping.main_bg,
            "editorGroup.border": "#282726",
            "editorGroupHeader.border": "#282726",
            "tab.activeForeground": "#B7B5AC",
            "tab.activeBackground": "#1C1B1A",
            "tab.inactiveBackground": mapping.main_bg,
            "tab.hoverBackground": "#282726",
            "tab.border": "#282726",

            "settings.focusedRowBorder": "#5E409D",
            "focusBorder": "#5E409D",

            "settings.focusedRowBackground": "#282726",
            "settings.rowHoverBackground": "#1C1B1A",

            "terminal.border": mapping.borders,
            "terminal.background": mapping.main_bg,
            "terminal.ansiBlack": mapping.main_bg,
            "terminal.ansiBlue": "#205EA6",
            "terminal.ansiBrightBlack": "#575653",
            "terminal.ansiBrightBlue": "#4385BE",
            "terminal.ansiBrightCyan": "#3AA99F",
            "terminal.ansiBrightGreen": "#879A39",
            "terminal.ansiBrightMagenta": "#CE5D97",
            "terminal.ansiBrightRed": "#D14D41",
            "terminal.ansiBrightWhite": "#FFFCF0",
            "terminal.ansiBrightYellow": "#D0A215",
            "terminalCursor.foreground": color.tx,
            "terminal.ansiCyan": "#24837B",
            "terminal.foreground": color.tx,
            "terminal.ansiGreen": "#66800B",
            "terminal.ansiMagenta": "#A02F6F",
            "terminal.ansiRed": "#AF3029",
            "terminal.selectionBackground": "#DA702C",
            "terminal.ansiWhite": "#B7B5AC",
            "terminal.ansiYellow": "#C19C00",
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
                    foreground: "#575653",
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
                    foreground: "#D0A215",
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
                    foreground: "#8b7ec8",
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
                    foreground: "#da702c",
                },
            },
            {
                scope: ["invalid", "invalid.deprecated", "invalid.illegal"],
                settings: {
                    foreground: "#d14d41",
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
                    foreground: "#879a39",
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
                    foreground: "#878580",
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
                    foreground: "#ce5d97",
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
                    foreground: "#878580",
                },
            },
            {
                scope: ["storage", "storage.modifier", "storage.type"],
                settings: {
                    foreground: "#879a39",
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
                    foreground: "#3aa99f",
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
                    foreground: "#4385be",
                },
            },
        ],
    };
};

export default getTheme;
