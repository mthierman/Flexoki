import getMappings from "./mappings.js";

const getTheme = (theme: string, color: string) => {
    let colors = getMappings(theme, color);

    let accent;
    let accentHover;
    let menuBg;

    if (theme === "Dark") {
        accent = colors.accentDark;
        accentHover = colors.accentLight;
        menuBg = colors.base900;
    }

    if (theme === "Light") {
        accent = colors.accentLight;
        accentHover = colors.accentDark;
        menuBg = colors.base100;
    }

    return {
        $schema: "vscode://schemas/color-theme",
        name: `Flexoki ${theme} ${color}`,
        semanticHighlighting: true,
        colors: {
            "activityBar.activeBackground": colors.borders,
            "activityBar.activeBorder": colors.transparent,
            "activityBar.activeFocusBorder": colors.transparent,
            "activityBar.background": colors.secondary_bg,
            "activityBar.border": colors.borders,
            "activityBar.dropBorder": colors.transparent,
            "activityBar.foreground": colors.primary_text,
            "activityBar.inactiveForeground": colors.muted_text,
            "activityBarBadge.background": accent,
            "activityBarBadge.foreground": colors.paper,
            "button.background": accent,
            "button.border": colors.transparent,
            "button.foreground": colors.paper,
            "button.hoverBackground": accentHover,
            "commandCenter.activeBackground": colors.main_bg,
            "commandCenter.activeBorder": colors.transparent,
            "commandCenter.activeForeground": colors.primary_text,
            "commandCenter.background": colors.main_bg,
            "commandCenter.border": colors.transparent,
            "commandCenter.debuggingBackground": colors.main_bg,
            "commandCenter.foreground": colors.muted_text,
            "commandCenter.inactiveBorder": colors.transparent,
            "commandCenter.inactiveForeground": colors.faint_text,
            "dropdown.background": colors.main_bg,
            "dropdown.border": colors.borders,
            "dropdown.foreground": colors.primary_text,
            "dropdown.listBackground": colors.main_bg,
            "editor.background": colors.main_bg,
            "editor.foreground": colors.primary_text,
            "editorCursor.background": accent,
            "editorCursor.foreground": accent,
            "editorGroup.border": colors.borders,
            "editorGroupHeader.border": colors.borders,
            "editorGroupHeader.tabsBackground": colors.main_bg,
            "editorSuggestWidget.background": colors.secondary_bg,
            "editorWidget.background": colors.borders,
            "editorWidget.border": colors.borders,
            "editorWidget.foreground": colors.primary_text,
            "focusBorder": colors.transparent,
            "icon.foreground": colors.primary_text,
            "input.background": colors.main_bg,
            "input.border": colors.borders,
            "input.foreground": colors.primary_text,
            "input.placeholderForeground": colors.muted_text,
            "list.activeSelectionBackground": colors.active_borders,
            "list.activeSelectionForeground": colors.primary_text,
            "list.hoverBackground": colors.hovered_borders,
            "list.inactiveSelectionBackground": colors.borders,
            "list.inactiveSelectionForeground": colors.primary_text,
            "menu.background": menuBg,
            "menu.border": colors.transparent,
            "menu.foreground": colors.primary_text,
            "menu.selectionBackground": colors.hovered_borders,
            "menu.selectionBorder": colors.transparent,
            "menu.selectionForeground": colors.primary_text,
            "menu.separatorBackground": colors.hovered_borders,
            "menubar.selectionBackground": colors.hovered_borders,
            "menubar.selectionBorder": colors.transparent,
            "menubar.selectionForeground": colors.primary_text,
            "panel.background": colors.secondary_bg,
            "panel.border": colors.borders,
            "quickInput.background": colors.main_bg,
            "quickInput.foreground": colors.primary_text,
            "quickInputList.focusBackground": colors.active_borders,
            "quickInputList.focusForeground": colors.primary_text,
            "quickInputList.focusIconForeground": colors.primary_text,
            "settings.focusedRowBackground": colors.secondary_bg,
            "settings.focusedRowBorder": colors.transparent,
            "settings.rowHoverBackground": colors.secondary_bg,
            "sideBar.background": colors.secondary_bg,
            "sideBar.border": colors.borders,
            "sideBar.foreground": colors.primary_text,
            "statusBar.background": colors.secondary_bg,
            "statusBar.border": colors.borders,
            "statusBar.debuggingBackground": accent,
            "statusBar.debuggingBorder": colors.borders,
            "statusBar.debuggingForeground": colors.paper,
            "statusBar.focusBorder": colors.borders,
            "statusBar.foreground": colors.primary_text,
            "statusBar.noFolderBackground": colors.secondary_bg,
            "statusBar.noFolderBorder": colors.borders,
            "statusBar.noFolderForeground": colors.primary_text,
            "tab.activeBackground": colors.main_bg,
            "tab.activeForeground": colors.primary_text,
            "tab.border": colors.borders,
            "tab.hoverBackground": colors.borders,
            "tab.inactiveBackground": colors.secondary_bg,
            "terminal.ansiBlack": colors.base950,
            "terminal.ansiBlue": colors.bl2,
            "terminal.ansiBrightBlack": colors.base900,
            "terminal.ansiBrightBlue": colors.bl,
            "terminal.ansiBrightCyan": colors.cy,
            "terminal.ansiBrightGreen": colors.gr,
            "terminal.ansiBrightMagenta": colors.ma,
            "terminal.ansiBrightRed": colors.re,
            "terminal.ansiBrightWhite": colors.base50,
            "terminal.ansiBrightYellow": colors.ye,
            "terminal.ansiCyan": colors.cy2,
            "terminal.ansiGreen": colors.gr2,
            "terminal.ansiMagenta": colors.ma2,
            "terminal.ansiRed": colors.re2,
            "terminal.ansiWhite": colors.base100,
            "terminal.ansiYellow": colors.ye2,
            "terminal.background": colors.main_bg,
            "terminal.border": colors.borders,
            "terminal.foreground": colors.primary_text,
            "terminal.selectionBackground": colors.bl,
            "terminalCursor.foreground": colors.primary_text,
            "titleBar.activeBackground": colors.secondary_bg,
            "titleBar.activeForeground": colors.primary_text,
            "titleBar.border": colors.borders,
            "titleBar.inactiveBackground": colors.main_bg,
            "titleBar.inactiveForeground": colors.faint_text,
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
                    foreground: colors.comments,
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
                    foreground: colors.constants,
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
                    foreground: colors.numbers,
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
                ],
                settings: {
                    foreground: colors.functions,
                },
            },
            {
                scope: ["invalid", "invalid.deprecated", "invalid.illegal"],
                settings: {
                    foreground: colors.invalid_imports,
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
                    foreground: colors.keywords,
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
                    foreground: colors.punctuation_operators,
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
                    foreground: colors.language_features,
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
                    foreground: colors.punctuation_operators,
                },
            },
            {
                scope: ["storage", "storage.modifier", "storage.type"],
                settings: {
                    foreground: colors.keywords,
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
                    foreground: colors.strings,
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
                    foreground: colors.variables_attributes,
                },
            },
        ],
    };
};

export default getTheme;
