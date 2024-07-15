import Color from "colorjs.io";
import type {
    Accent,
    AccentColors,
    BaseTones,
    Mode,
    Syntax,
    Terminal,
    Theme,
    UI,
} from "./types.mjs";
import { colorsToHex } from "./utilities.mjs";

export const makeBaseTones = (): BaseTones => {
    return {
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
};

export const makeAccentColors = (): AccentColors => {
    return {
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
};

export const makeAccentColor = (mode: Mode, accent: Accent) => {
    const accentColors = makeAccentColors();

    switch (mode) {
        case "Dark": {
            switch (accent) {
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
            switch (accent) {
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

export const makeTheme = (mode: Mode, accent: Accent): Theme => {
    const baseTones = makeBaseTones();
    const accentColors = makeAccentColors();
    const accentColor = makeAccentColor(mode, accent) as Color;

    switch (mode) {
        case "Dark": {
            return {
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
                accent: accentColor,
                transparent: new Color("sRGB", [0, 0, 0], 0),
                transparent_bg: new Color(
                    "sRGB",
                    [accentColor.r, accentColor.g, accentColor.b],
                    0.15,
                ),
                transparent_bg_hover: new Color(
                    "sRGB",
                    [accentColor.r, accentColor.g, accentColor.b],
                    0.2,
                ),
                transparent_bg_active: new Color(
                    "sRGB",
                    [accentColor.r, accentColor.g, accentColor.b],
                    0.25,
                ),
                shadow: new Color("sRGB", [0, 0, 0], 0.5),
            };
        }
        case "Light": {
            return {
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
                accent: accentColor,
                transparent: new Color("sRGB", [255, 255, 255], 0),
                transparent_bg: new Color(
                    "sRGB",
                    [accentColor.r, accentColor.g, accentColor.b],
                    0.15,
                ),
                transparent_bg_hover: new Color(
                    "sRGB",
                    [accentColor.r, accentColor.g, accentColor.b],
                    0.2,
                ),
                transparent_bg_active: new Color(
                    "sRGB",
                    [accentColor.r, accentColor.g, accentColor.b],
                    0.25,
                ),
                shadow: new Color("sRGB", [0.75, 0.75, 0.75], 0.5),
            };
        }
    }
};

export const makeUI = (theme: Theme): UI => {
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
        accent: theme.accent,
        transparent: theme.transparent,
        transparent_bg: theme.transparent_bg,
        transparent_bg_hover: theme.transparent_bg_hover,
        transparent_bg_active: theme.transparent_bg_active,
        shadow: theme.shadow,
    };
};

export const makeSyntax = (theme: Theme): Syntax => {
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

export const generateTerminal = (mode: Mode, accent: Accent = "Blue"): Terminal => {
    const baseTones = colorsToHex(makeBaseTones()) as BaseTones;
    const theme = colorsToHex(makeTheme(mode, accent)) as Theme;
    const ui = colorsToHex(makeUI(theme)) as UI;

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

export const generateTheme = (mode: Mode, accent: Accent) => {
    const baseTones = colorsToHex(makeBaseTones()) as BaseTones;
    const theme = colorsToHex(makeTheme(mode, accent)) as Theme;
    const ui = colorsToHex(makeUI(theme)) as UI;
    const syntax = colorsToHex(makeSyntax(theme)) as Syntax;
    const terminal = colorsToHex(generateTerminal(mode)) as Terminal;

    const test = "#FF00FF";

    return {
        $schema: "vscode://schemas/color-theme",
        name: `Flexoki ${mode} ${accent}`,
        colors: {
            "scrollbar.shadow": ui.shadow,
            "scrollbarSlider.activeBackground": ui.transparent_bg_active,
            "scrollbarSlider.background": ui.transparent_bg,
            "scrollbarSlider.hoverBackground": ui.transparent_bg_hover,

            "activityBar.activeBackground": ui.secondary_background,
            "activityBar.activeBorder": ui.accent,
            "activityBar.activeFocusBorder": ui.accent,
            "activityBar.background": ui.secondary_background,
            "activityBar.border": ui.borders,
            "activityBar.dropBorder": ui.accent,
            "activityBar.foreground": ui.accent,
            "activityBar.inactiveForeground": ui.primary_text,
            "activityBarBadge.background": ui.accent,
            "activityBarBadge.foreground": baseTones.paper,
            "activityBarTop.activeBackground": ui.secondary_background,
            "activityBarTop.activeBorder": ui.accent,
            "activityBarTop.background": ui.secondary_background,
            "activityBarTop.dropBorder": ui.accent,
            "activityBarTop.foreground": ui.accent,
            "activityBarTop.inactiveForeground": ui.primary_text,
            "badge.background": ui.accent,
            "badge.foreground": baseTones.paper,
            "banner.background": theme.ui,
            "banner.foreground": ui.primary_text,
            "banner.iconForeground": ui.primary_text,
            "breadcrumb.activeSelectionForeground": ui.accent,
            "breadcrumb.background": ui.main_background,
            "breadcrumb.focusForeground": ui.primary_text,
            "breadcrumb.foreground": ui.muted_text,
            "breadcrumbPicker.background": ui.main_background,
            "button.background": theme.ui,
            "button.border": theme.ui3,
            "button.foreground": ui.primary_text,
            "button.hoverBackground": theme.ui2,
            "button.secondaryBackground": theme.ui,
            "button.secondaryForeground": ui.primary_text,
            "button.secondaryHoverBackground": theme.ui2,
            "button.separator": theme.ui3,
            "checkbox.background": theme.ui,
            "checkbox.border": theme.ui3,
            "checkbox.foreground": ui.primary_text,
            "checkbox.selectBackground": ui.accent,
            "checkbox.selectBorder": ui.accent,
            "commandCenter.activeBackground": theme.ui2,
            "commandCenter.activeBorder": theme.ui3,
            "commandCenter.activeForeground": ui.primary_text,
            "commandCenter.background": theme.ui,
            "commandCenter.border": theme.ui3,
            "commandCenter.debuggingBackground": ui.transparent_bg_active,
            "commandCenter.foreground": ui.muted_text,
            "commandCenter.inactiveBorder": theme.ui3,
            "commandCenter.inactiveForeground": ui.faint_text,
            "debugConsole.errorForeground": ui.error_text,
            "debugConsole.infoForeground": ui.primary_text,
            "debugConsole.sourceForeground": ui.primary_text,
            "debugConsole.warningForeground": ui.warning_text,
            "debugConsoleInputIcon.foreground": ui.primary_text,
            "dropdown.background": ui.secondary_background,
            "dropdown.border": ui.active_borders,
            "dropdown.foreground": ui.primary_text,
            "dropdown.listBackground": ui.secondary_background,
            "editor.background": ui.main_background,
            "editorBracketHighlight.foreground1": theme.or,
            "editorBracketHighlight.foreground2": theme.ye,
            "editorBracketHighlight.foreground3": theme.cy,
            "editorBracketHighlight.foreground4": theme.bl,
            "editorBracketHighlight.foreground5": theme.pu,
            "editorBracketHighlight.foreground6": theme.ma,
            "editorBracketHighlight.unexpectedBracket.foreground": ui.error_text,
            "editorBracketMatch.background": ui.transparent,
            "editorBracketMatch.border": ui.accent,
            "editorBracketPairGuide.activeBackground1": theme.or,
            "editorBracketPairGuide.activeBackground2": theme.ye,
            "editorBracketPairGuide.activeBackground3": theme.cy,
            "editorBracketPairGuide.activeBackground4": theme.bl,
            "editorBracketPairGuide.activeBackground5": theme.pu,
            "editorBracketPairGuide.activeBackground6": theme.ma,
            "editorBracketPairGuide.background1": theme.or,
            "editorBracketPairGuide.background2": theme.ye,
            "editorBracketPairGuide.background3": theme.cy,
            "editorBracketPairGuide.background4": theme.bl,
            "editorBracketPairGuide.background5": theme.pu,
            "editorBracketPairGuide.background6": theme.ma,
            "editorCursor.background": ui.main_background,
            "editorCursor.foreground": ui.primary_text,
            "editorGroup.border": ui.borders,
            "editorGroup.dropBackground": ui.transparent_bg_hover,
            "editorGroupHeader.border": ui.borders,
            "editorGroupHeader.tabsBackground": ui.secondary_background,
            "editorGroupHeader.tabsBorder": ui.borders,
            "editorHoverWidget.background": theme.ui,
            "editorHoverWidget.border": ui.borders,
            "editorHoverWidget.foreground": ui.primary_text,
            "editorHoverWidget.highlightForeground": ui.primary_text,
            "editorHoverWidget.statusBarBackground": theme.ui2,
            "editorInlayHint.background": ui.transparent_bg,
            "editorInlayHint.foreground": ui.muted_text,
            "editorInlayHint.parameterBackground": ui.transparent_bg,
            "editorInlayHint.parameterForeground": ui.muted_text,
            "editorInlayHint.typeBackground": ui.transparent_bg,
            "editorInlayHint.typeForeground": ui.muted_text,
            "editorLineNumber.activeForeground": ui.primary_text,
            "editorLineNumber.dimmedForeground": ui.faint_text,
            "editorLineNumber.foreground": ui.muted_text,
            "editorStickyScroll.background": ui.main_background,
            "editorStickyScroll.border": ui.borders,
            "editorStickyScroll.shadow": ui.shadow,
            "editorStickyScrollHover.background": theme.transparent,
            "editorWidget.background": theme.ui,
            "editorWidget.border": ui.borders,
            "editorWidget.foreground": ui.primary_text,
            "editorWidget.resizeBorder": ui.borders,
            "extensionBadge.remoteBackground": ui.accent,
            "extensionBadge.remoteForeground": baseTones.paper,
            "extensionButton.background": theme.ui,
            "extensionButton.foreground": ui.primary_text,
            "extensionButton.hoverBackground": theme.ui2,
            "extensionButton.prominentBackground": theme.ui,
            "extensionButton.prominentForeground": ui.primary_text,
            "extensionButton.prominentHoverBackground": theme.ui2,
            "extensionButton.separator": theme.ui3,
            "extensionIcon.preReleaseForeground": theme.gr,
            "extensionIcon.sponsorForeground": theme.ma,
            "extensionIcon.starForeground": theme.or,
            "extensionIcon.verifiedForeground": theme.bl,
            "focusBorder": ui.accent,
            "foreground": ui.primary_text,
            "gitDecoration.addedResourceForeground": theme.gr,
            "gitDecoration.conflictingResourceForeground": theme.ma,
            "gitDecoration.deletedResourceForeground": theme.re,
            "gitDecoration.ignoredResourceForeground": ui.muted_text,
            "gitDecoration.modifiedResourceForeground": theme.ye,
            "gitDecoration.renamedResourceForeground": theme.gr,
            "gitDecoration.stageDeletedResourceForeground": theme.re,
            "gitDecoration.stageModifiedResourceForeground": theme.ye,
            "gitDecoration.submoduleResourceForeground": theme.bl,
            "gitDecoration.untrackedResourceForeground": theme.gr,
            "icon.foreground": ui.muted_text,
            "input.background": ui.secondary_background,
            "input.border": ui.active_borders,
            "input.foreground": ui.primary_text,
            "input.placeholderForeground": ui.faint_text,
            "keybindingLabel.background": ui.secondary_background,
            "keybindingLabel.border": ui.borders,
            "keybindingLabel.bottomBorder": ui.borders,
            "keybindingLabel.foreground": ui.accent,
            "keybindingTable.headerBackground": ui.secondary_background,
            "keybindingTable.rowsBackground": ui.secondary_background,
            "list.activeSelectionBackground": ui.transparent_bg_hover,
            "list.activeSelectionForeground": ui.primary_text,
            "list.activeSelectionIconForeground": ui.primary_text,
            "list.deemphasizedForeground": ui.muted_text,
            "list.dropBackground": ui.transparent_bg_hover,
            "list.dropBetweenBackground": ui.transparent_bg_hover,
            "list.errorForeground": ui.error_text,
            "list.filterMatchBackground": ui.accent,
            "list.filterMatchBorder": ui.transparent,
            "list.focusAndSelectionOutline": ui.accent,
            "list.focusBackground": ui.transparent_bg_hover,
            "list.focusForeground": ui.primary_text,
            "list.focusHighlightForeground": ui.primary_text,
            "list.focusOutline": ui.transparent,
            "list.highlightForeground": ui.primary_text,
            "list.hoverBackground": ui.transparent_bg_hover,
            "list.hoverForeground": ui.primary_text,
            "list.inactiveFocusBackground": ui.transparent_bg_hover,
            "list.inactiveFocusOutline": ui.transparent,
            "list.inactiveSelectionBackground": ui.transparent_bg,
            "list.inactiveSelectionForeground": ui.primary_text,
            "list.inactiveSelectionIconForeground": ui.primary_text,
            "list.invalidItemForeground": ui.error_text,
            "list.warningForeground": ui.warning_text,
            "listFilterWidget.background": theme.ui,
            "listFilterWidget.noMatchesOutline": ui.transparent,
            "listFilterWidget.outline": ui.borders,
            "listFilterWidget.shadow": ui.shadow,
            "menu.background": ui.main_background,
            "menu.border": ui.borders,
            "menu.foreground": ui.primary_text,
            "menu.selectionBackground": theme.ui2,
            "menu.selectionBorder": ui.transparent,
            "menu.selectionForeground": ui.primary_text,
            "menu.separatorBackground": ui.borders,
            "menubar.selectionBackground": theme.ui2,
            "menubar.selectionBorder": ui.transparent,
            "menubar.selectionForeground": ui.primary_text,
            "minimap.background": ui.transparent,
            "minimapSlider.activeBackground": ui.transparent_bg_active,
            "minimapSlider.background": ui.transparent_bg,
            "minimapSlider.hoverBackground": ui.transparent_bg_hover,
            "panel.background": ui.secondary_background,
            "panel.border": ui.borders,
            "panel.dropBorder": ui.accent,
            "panelInput.border": ui.active_borders,
            "panelSection.border": ui.borders,
            "panelSection.dropBackground": ui.transparent_bg_hover,
            "panelSectionHeader.background": ui.main_background,
            "panelSectionHeader.border": ui.borders,
            "panelSectionHeader.foreground": ui.primary_text,
            "panelStickyScroll.background": ui.main_background,
            "panelStickyScroll.border": ui.borders,
            "panelStickyScroll.shadow": ui.shadow,
            "panelTitle.activeBorder": ui.accent,
            "panelTitle.activeForeground": ui.primary_text,
            "panelTitle.inactiveForeground": ui.muted_text,
            "quickInput.background": ui.main_background,
            "quickInput.foreground": ui.primary_text,
            "quickInputList.focusBackground": theme.ui2,
            "quickInputList.focusForeground": ui.primary_text,
            "quickInputList.focusIconForeground": ui.primary_text,
            "quickInputTitle.background": test,
            "sideBar.background": ui.secondary_background,
            "sideBar.border": ui.borders,
            "sideBar.dropBackground": ui.transparent_bg_hover,
            "sideBar.foreground": ui.primary_text,
            "sideBarSectionHeader.background": theme.ui,
            "sideBarSectionHeader.border": ui.borders,
            "sideBarSectionHeader.foreground": ui.primary_text,
            "sideBarTitle.foreground": ui.primary_text,
            "statusBar.background": ui.secondary_background,
            "statusBar.border": ui.borders,
            "statusBar.debuggingBackground": ui.accent,
            "statusBar.debuggingForeground": baseTones.paper,
            "statusBar.focusBorder": ui.accent,
            "statusBar.foreground": ui.primary_text,
            "statusBar.noFolderBackground": ui.secondary_background,
            "tab.activeBackground": ui.main_background,
            "tab.activeBorder": ui.transparent,
            "tab.activeBorderTop": ui.accent,
            "tab.activeForeground": ui.primary_text,
            "tab.border": ui.borders,
            "tab.hoverBackground": ui.main_background,
            "tab.hoverBorder": ui.hovered_borders,
            "tab.hoverForeground": ui.primary_text,
            "tab.inactiveBackground": ui.transparent,
            "tab.inactiveForeground": ui.muted_text,
            "tab.lastPinnedBorder": test,
            "tab.selectedBackground": ui.main_background,
            "tab.selectedBorderTop": ui.transparent,
            "tab.selectedForeground": ui.muted_text,
            "tab.unfocusedActiveBorder": ui.transparent,
            "tab.unfocusedActiveBorderTop": ui.transparent,
            "tab.unfocusedHoverBackground": ui.main_background,
            "tab.unfocusedHoverBorder": ui.hovered_borders,
            "tab.unfocusedHoverForeground": ui.primary_text,
            "terminal.ansiBlack": terminal.black,
            "terminal.ansiBlue": terminal.blue,
            "terminal.ansiBrightBlack": terminal.brightBlack,
            "terminal.ansiBrightBlue": terminal.brightBlue,
            "terminal.ansiBrightCyan": terminal.brightCyan,
            "terminal.ansiBrightGreen": terminal.brightGreen,
            "terminal.ansiBrightMagenta": terminal.brightPurple,
            "terminal.ansiBrightRed": terminal.brightRed,
            "terminal.ansiBrightWhite": terminal.brightWhite,
            "terminal.ansiBrightYellow": terminal.brightYellow,
            "terminal.ansiCyan": terminal.cyan,
            "terminal.ansiGreen": terminal.green,
            "terminal.ansiMagenta": terminal.purple,
            "terminal.ansiRed": terminal.red,
            "terminal.ansiWhite": terminal.white,
            "terminal.ansiYellow": terminal.yellow,
            "terminal.background": ui.secondary_background,
            "terminal.border": ui.borders,
            "terminal.dropBackground": ui.transparent_bg_hover,
            "terminal.foreground": terminal.foreground,
            "terminal.inactiveSelectionBackground": ui.hovered_borders,
            "terminal.selectionBackground": terminal.selectionBackground,
            "terminal.tab.activeBorder": ui.accent,
            "terminalCursor.background": terminal.background,
            "terminalCursor.foreground": terminal.foreground,
            "titleBar.activeBackground": theme.ui,
            "titleBar.activeForeground": ui.primary_text,
            "titleBar.border": ui.borders,
            "titleBar.inactiveBackground": ui.secondary_background,
            "titleBar.inactiveForeground": ui.muted_text,
            "welcomePage.background": ui.main_background,
            "welcomePage.progress.background": theme.ui,
            "welcomePage.progress.foreground": theme.ui3,
            "welcomePage.tileBackground": theme.ui,
            "welcomePage.tileBorder": ui.borders,
            "welcomePage.tileHoverBackground": theme.ui2,
            "widget.border": ui.borders,
            "widget.shadow": ui.shadow,
        },
        // tokenColors: dark ? darkTokens() : lightTokens(),
        tokenColors: [
            { scope: ["emphasis"], settings: { fontStyle: "italic" } },
            { scope: ["strong"], settings: { fontStyle: "bold" } },
            { scope: ["header", "markup.heading"], settings: { foreground: theme.bl } },
            { scope: ["comment"], settings: { foreground: syntax.comments } },
            {
                scope: ["token.info-token"],
                settings: {
                    foreground: theme.bl,
                },
            },
            {
                scope: ["token.warn-token"],
                settings: {
                    foreground: ui.warning_text,
                },
            },
            {
                scope: ["token.error-token"],
                settings: {
                    foreground: ui.error_text,
                },
            },
            {
                scope: ["token.debug-token"],
                settings: {
                    foreground: theme.pu,
                },
            },
            {
                scope: ["entity.name.function"],
                settings: {
                    foreground: syntax.functions,
                },
            },
            {
                scope: ["keyword", "entity.name.keyword"],
                settings: {
                    foreground: syntax.keywords,
                },
            },
            {
                scope: ["entity.name.type", "storage.type", "support.type"],
                settings: {
                    foreground: theme.pu,
                },
            },
            {
                scope: ["storage.modifier"],
                settings: {
                    foreground: theme.pu,
                },
            },
            {
                scope: ["string"],
                settings: {
                    foreground: syntax.strings,
                },
            },
            {
                scope: ["meta.object"],
                settings: {
                    foreground: syntax.constants,
                },
            },
            {
                scope: ["meta.block.namespace"],
                settings: {
                    foreground: syntax.keywords,
                },
            },
            {
                scope: ["punctuation"],
                settings: {
                    foreground: syntax.punctuation,
                },
            },
            {
                scope: ["variable"],
                settings: {
                    foreground: syntax.variables,
                },
            },
            {
                scope: ["constant"],
                settings: {
                    foreground: syntax.constants,
                },
            },
            {
                scope: ["constant.numeric"],
                settings: {
                    foreground: syntax.numbers,
                },
            },
            {
                scope: ["constant.character"],
                settings: {
                    foreground: syntax.strings,
                },
            },
            {
                scope: ["constant.language"],
                settings: {
                    foreground: syntax.language_features,
                },
            },
            {
                scope: ["invalid"],
                settings: {
                    foreground: syntax.invalid,
                },
            },
        ],
        semanticHighlighting: true,
        semanticTokenColors: {
            newOperator: syntax.operators,
            stringLiteral: syntax.strings,
            customLiteral: syntax.strings,
            numberLiteral: syntax.numbers,
            namespace: syntax.punctuation,
            type: theme.pu,
        },
    };
};
