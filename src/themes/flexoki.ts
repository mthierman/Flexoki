const tones: Tones = {
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
    "red-600": "#AF3029",
    "orange-600": "#BC5215",
    "yellow-600": "#AD8301",
    "green-600": "#66800B",
    "cyan-600": "#24837B",
    "blue-600": "#205EA6",
    "purple-600": "#5E409D",
    "magenta-600": "#A02F6F",
    "red-400": "#D14D41",
    "orange-400": "#DA702C",
    "yellow-400": "#D0A215",
    "green-400": "#879A39",
    "cyan-400": "#3AA99F",
    "blue-400": "#4385BE",
    "purple-400": "#8B7EC8",
    "magenta-400": "#CE5D97",
};

const darkMappings: Mappings = {
    "bg": tones["black"],
    "bg-2": tones["base-950"],
    "ui": tones["base-900"],
    "ui-2": tones["base-850"],
    "ui-3": tones["base-800"],
    "tx-3": tones["base-700"],
    "tx-2": tones["base-500"],
    "tx": tones["base-200"],
    "re": tones["red-400"],
    "re2": tones["red-600"],
    "or": tones["orange-400"],
    "or2": tones["orange-600"],
    "ye": tones["yellow-400"],
    "ye2": tones["yellow-600"],
    "gr": tones["green-400"],
    "gr2": tones["green-600"],
    "cy": tones["cyan-400"],
    "cy2": tones["cyan-600"],
    "bl": tones["blue-400"],
    "bl2": tones["blue-600"],
    "pu": tones["purple-400"],
    "pu2": tones["purple-600"],
    "ma": tones["magenta-400"],
    "ma2": tones["magenta-600"],
    "transparent": "#00000000",
};

const lightMappings: Mappings = {
    "bg": tones["paper"],
    "bg-2": tones["base-50"],
    "ui": tones["base-100"],
    "ui-2": tones["base-150"],
    "ui-3": tones["base-200"],
    "tx-3": tones["base-300"],
    "tx-2": tones["base-600"],
    "tx": tones["black"],
    "re": tones["red-600"],
    "re2": tones["red-400"],
    "or": tones["orange-600"],
    "or2": tones["orange-400"],
    "ye": tones["yellow-600"],
    "ye2": tones["yellow-400"],
    "gr": tones["green-600"],
    "gr2": tones["green-400"],
    "cy": tones["cyan-600"],
    "cy2": tones["cyan-400"],
    "bl": tones["blue-600"],
    "bl2": tones["blue-400"],
    "pu": tones["purple-600"],
    "pu2": tones["purple-400"],
    "ma": tones["magenta-600"],
    "ma2": tones["magenta-400"],
    "transparent": "#FFFFFF00",
};

export enum Theme {
    Dark,
    Light,
}

export enum Color {
    Red,
    Orange,
    Yellow,
    Green,
    Cyan,
    Blue,
    Purple,
    Magenta,
}

export const theme = (theme: Theme, color: Color) => {
    const dark = theme === Theme.Dark;
    const mappings = dark ? darkMappings : lightMappings;

    let accent: string | undefined = undefined;
    let accentHover: string | undefined = undefined;
    const test = "#ff00dd";

    switch (color) {
        case Color.Red:
            accent = dark ? mappings["re2"] : mappings["re"];
            accentHover = dark ? mappings["re"] : mappings["re2"];
            break;
        case Color.Orange:
            accent = dark ? mappings["or2"] : mappings["or"];
            accentHover = dark ? mappings["or"] : mappings["or2"];
            break;
        case Color.Yellow:
            accent = dark ? mappings["ye2"] : mappings["ye"];
            accentHover = dark ? mappings["ye"] : mappings["ye2"];
            break;
        case Color.Green:
            accent = dark ? mappings["gr2"] : mappings["gr"];
            accentHover = dark ? mappings["gr"] : mappings["gr2"];
            break;
        case Color.Cyan:
            accent = dark ? mappings["cy2"] : mappings["cy"];
            accentHover = dark ? mappings["cy"] : mappings["cy2"];
            break;
        case Color.Blue:
            accent = dark ? mappings["bl2"] : mappings["bl"];
            accentHover = dark ? mappings["bl"] : mappings["bl2"];
            break;
        case Color.Purple:
            accent = dark ? mappings["pu2"] : mappings["pu"];
            accentHover = dark ? mappings["pu"] : mappings["pu2"];
            break;
        case Color.Magenta:
            accent = dark ? mappings["ma2"] : mappings["ma"];
            accentHover = dark ? mappings["ma"] : mappings["ma2"];
            break;
    }

    return {
        $schema: "vscode://schemas/color-theme",
        name: `Flexoki ${Theme[theme]} ${Color[color]}`,
        semanticHighlighting: true,
        colors: {
            "foreground": mappings["tx"],
            "activityBar.activeBackground": mappings["transparent"],
            "activityBar.activeBorder": mappings["transparent"],
            "activityBar.activeFocusBorder": mappings["transparent"],
            "activityBar.background": dark ? mappings["ui"] : mappings["bg"],
            "activityBar.border": mappings["bg-2"],
            "activityBar.foreground": accent,
            "activityBar.inactiveForeground": mappings["tx-2"],
            "activityBarTop.activeBorder": mappings["transparent"],
            "activityBarTop.foreground": accent,
            "activityBarTop.inactiveForeground": mappings["tx-2"],
            "activityBarBadge.background": accent,
            "activityBarBadge.foreground": tones.paper,
            "breadcrumb.activeSelectionForeground": accent,
            "breadcrumb.background": mappings["bg"],
            "breadcrumb.focusForeground": accent,
            "breadcrumbPicker.background": mappings["bg"],
            "button.background": accent,
            "button.border": mappings["transparent"],
            "button.foreground": tones.paper,
            "button.hoverBackground": accentHover,
            "commandCenter.activeBackground": mappings["bg"],
            "commandCenter.activeBorder": dark ? mappings["ui-2"] : mappings["ui"],
            "commandCenter.activeForeground": mappings["tx"],
            "commandCenter.background": mappings["bg-2"],
            "commandCenter.border": dark ? mappings["ui-2"] : mappings["ui"],
            "commandCenter.foreground": mappings["tx-2"],
            "commandCenter.inactiveBorder": dark ? mappings["ui-2"] : mappings["ui"],
            "commandCenter.inactiveForeground": mappings["tx-3"],
            "dropdown.background": mappings["bg"],
            "dropdown.border": mappings["ui"],
            "dropdown.foreground": mappings["tx"],
            "dropdown.listBackground": mappings["bg"],
            "editor.background": mappings["bg"],
            "editor.foreground": mappings["tx"],
            "editorCursor.background": accent,
            "editorCursor.foreground": accent,
            "editorGroup.border": dark ? mappings["ui"] : mappings["bg-2"],
            "editorGroupHeader.border": mappings["transparent"],
            "editorGroupHeader.tabsBackground": dark ? mappings["ui"] : mappings["bg"],
            "editorGroupHeader.tabsBorder": mappings["transparent"],
            "editorHoverWidget.background": mappings["bg"],
            "editorHoverWidget.border": mappings["ui"],
            "editorSuggestWidget.background": mappings["bg-2"],
            "editorWidget.background": mappings["ui"],
            "editorWidget.border": mappings["ui"],
            "editorWidget.foreground": mappings["tx"],
            "focusBorder": mappings["transparent"],
            "icon.foreground": mappings["tx"],
            "input.background": mappings["bg"],
            "input.border": mappings["ui"],
            "input.foreground": mappings["tx"],
            "input.placeholderForeground": mappings["tx-2"],
            "list.activeSelectionBackground": mappings["ui-3"],
            "list.activeSelectionForeground": mappings["tx"],
            // "list.hoverBackground": mappings["ui-2"],
            "list.hoverBackground": mappings["ui"],
            "list.inactiveSelectionBackground": mappings["ui"],
            "list.inactiveSelectionForeground": mappings["tx"],
            "menu.background": mappings["bg"],
            "menu.border": mappings["ui"],
            "menu.foreground": mappings["tx"],
            "menu.selectionBackground": mappings["bg-2"],
            "menu.selectionBorder": mappings["transparent"],
            "menu.selectionForeground": accent,
            "menu.separatorBackground": mappings["ui-2"],
            "menubar.selectionBackground": mappings["ui-2"],
            "menubar.selectionBorder": mappings["transparent"],
            "menubar.selectionForeground": accent,
            "panel.background": mappings["bg"],
            "panel.border": dark ? mappings["ui"] : mappings["bg-2"],
            "panelInput.border": mappings["ui"],
            "quickInput.background": mappings["bg"],
            "quickInput.foreground": mappings["tx"],
            "quickInputList.focusBackground": mappings["ui-2"],
            "quickInputList.focusForeground": accent,
            "quickInputList.focusIconForeground": accent,
            "selection.background": accent,
            "settings.focusedRowBackground": mappings["bg-2"],
            "settings.focusedRowBorder": mappings["transparent"],
            "settings.rowHoverBackground": mappings["bg-2"],
            "sideBar.background": mappings["bg-2"],
            "sideBar.border": dark ? mappings["ui"] : mappings["bg-2"],
            "sideBar.foreground": mappings["tx"],
            "sideBarSectionHeader.background": mappings["bg"],
            "sideBarSectionHeader.border": mappings["ui-2"],
            "sideBarTitle.foreground": mappings["tx"],
            "statusBar.background": dark ? mappings["ui"] : mappings["bg"],
            "statusBar.border": dark ? mappings["ui"] : mappings["bg-2"],
            "statusBar.debuggingBackground": accent,
            "statusBar.debuggingBorder": mappings["ui"],
            "statusBar.debuggingForeground": tones.paper,
            "statusBar.focusBorder": mappings["ui"],
            "statusBar.foreground": mappings["tx"],
            "statusBar.noFolderBackground": mappings["bg-2"],
            "statusBar.noFolderBorder": mappings["ui"],
            "statusBar.noFolderForeground": mappings["tx"],
            "tab.activeBackground": mappings["bg"],
            "tab.activeBorder": mappings["transparent"],
            "tab.activeBorderTop": mappings["transparent"],
            "tab.activeForeground": mappings["tx"],
            "tab.border": dark ? mappings["ui-2"] : mappings["ui"],
            "tab.hoverBackground": mappings["bg"],
            "tab.inactiveBackground": mappings["bg-2"],
            "terminal.ansiBlack": tones["base-950"],
            "terminal.ansiBlue": mappings["bl2"],
            "terminal.ansiBrightBlack": tones["base-900"],
            "terminal.ansiBrightBlue": mappings["bl"],
            "terminal.ansiBrightCyan": mappings["cy"],
            "terminal.ansiBrightGreen": mappings["gr"],
            "terminal.ansiBrightMagenta": mappings["ma"],
            "terminal.ansiBrightRed": mappings["re"],
            "terminal.ansiBrightWhite": tones["base-50"],
            "terminal.ansiBrightYellow": mappings["ye"],
            "terminal.ansiCyan": mappings["cy2"],
            "terminal.ansiGreen": mappings["gr2"],
            "terminal.ansiMagenta": mappings["ma2"],
            "terminal.ansiRed": mappings["re2"],
            "terminal.ansiWhite": tones["base-100"],
            "terminal.ansiYellow": mappings["ye2"],
            "terminal.background": mappings["bg"],
            "terminal.border": mappings["ui"],
            "terminal.foreground": mappings["tx"],
            "terminal.selectionBackground": accent,
            "terminalCursor.foreground": mappings["tx"],
            "titleBar.activeBackground": dark ? mappings["ui"] : mappings["bg"],
            "titleBar.activeForeground": mappings["tx"],
            "titleBar.border": dark ? mappings["ui"] : mappings["bg-2"],
            "titleBar.inactiveBackground": dark ? mappings["ui"] : mappings["bg"],
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

export const terminal = (dark: boolean) => {
    const mappings = dark ? darkMappings : lightMappings;

    return {
        background: mappings["bg"],
        black: tones["base-950"],
        blue: mappings["bl2"],
        brightBlack: tones["base-900"],
        brightBlue: mappings["bl"],
        brightCyan: mappings["cy"],
        brightGreen: mappings["gr"],
        brightPurple: mappings["ma"],
        brightRed: mappings["re"],
        brightWhite: tones["base-50"],
        brightYellow: mappings["ye"],
        cursorColor: mappings["tx"],
        cyan: mappings["cy2"],
        foreground: mappings["tx"],
        green: mappings["gr2"],
        name: `Flexoki ${dark ? "Dark" : "Light"}`,
        purple: mappings["ma2"],
        red: mappings["re2"],
        selectionBackground: mappings["bl2"],
        white: tones["base-100"],
        yellow: mappings["ye2"],
    };
};
