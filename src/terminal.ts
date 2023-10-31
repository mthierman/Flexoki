import getMappings from "./mappings.js";

const getTerminal = (theme: string, color: string) => {
    let colors = getMappings(theme, color);

    return {
        background: colors.main_bg,
        black: colors.base950,
        blue: colors.bl2,
        brightBlack: colors.base900,
        brightBlue: colors.bl,
        brightCyan: colors.cy,
        brightGreen: colors.gr,
        brightPurple: colors.ma,
        brightRed: colors.re,
        brightWhite: colors.base50,
        brightYellow: colors.ye,
        cursorColor: colors.primary_text,
        cyan: colors.cy2,
        foreground: colors.primary_text,
        green: colors.gr2,
        name: `Flexoki ${theme}`,
        purple: colors.ma2,
        red: colors.re2,
        selectionBackground: colors.bl2,
        white: colors.base100,
        yellow: colors.ye2,
    };
};

export default getTerminal;
