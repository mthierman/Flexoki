export const getColors = (theme: string, color: string): any => {
    const base = {
        transparent: "#00000000",
        black: "#100F0F",
        base950: "#1C1B1A",
        base900: "#282726",
        base850: "#343331",
        base800: "#403E3C",
        base700: "#575653",
        base600: "#6F6E69",
        base500: "#878580",
        base300: "#B7B5AC",
        base200: "#CECDC3",
        base150: "#DAD8CE",
        base100: "#E6E4D9",
        base50: "#F2F0E5",
        paper: "#FFFCF0",
    };

    let colors;
    let accent;

    if (theme === "Dark") {
        colors = {
            bg: "#100F0F",
            bg2: "#1C1B1A",
            ui: "#282726",
            ui2: "#343331",
            ui3: "#403E3C",
            tx: "#CECDC3",
            tx2: "#878580",
            tx3: "#575653",
            re: "#D14D41",
            re2: "#AF3029",
            or: "#DA702C",
            or2: "#BC5215",
            ye: "#D0A215",
            ye2: "#AD8301",
            gr: "#879A39",
            gr2: "#66800B",
            cy: "#3AA99F",
            cy2: "#24837B",
            bl: "#4385BE",
            bl2: "#205EA6",
            pu: "#8B7EC8",
            pu2: "#5E409D",
            ma: "#CE5D97",
            ma2: "#A02F6F",
        };
        switch (color) {
            case "Red":
                accent = {
                    accentDark: colors.re2,
                    accentLight: colors.re,
                };
                break;
            case "Orange":
                accent = {
                    accentDark: colors.or2,
                    accentLight: colors.or,
                };
                break;
            case "Yellow":
                accent = {
                    accentDark: colors.ye2,
                    accentLight: colors.ye,
                };
                break;
            case "Green":
                accent = {
                    accentDark: colors.gr2,
                    accentLight: colors.gr,
                };
                break;
            case "Cyan":
                accent = {
                    accentDark: colors.cy2,
                    accentLight: colors.cy,
                };
                break;
            case "Blue":
                accent = {
                    accentDark: colors.bl2,
                    accentLight: colors.bl,
                };
                break;
            case "Purple":
                accent = {
                    accentDark: colors.pu2,
                    accentLight: colors.pu,
                };
                break;
            case "Magenta":
                accent = {
                    accentDark: colors.ma2,
                    accentLight: colors.ma,
                };
                break;
        }
    }

    if (theme === "Light") {
        colors = {
            bg: "#FFFCF0",
            bg2: "#F2F0E5",
            ui: "#E6E4D9",
            ui2: "#DAD8CE",
            ui3: "#CECDC3",
            tx: "#100F0F",
            tx2: "#6F6E69",
            tx3: "#B7B5AC",
            re: "#AF3029",
            re2: "#D14D41",
            or: "#BC5215",
            or2: "#DA702C",
            ye: "#AD8301",
            ye2: "#D0A215",
            gr: "#66800B",
            gr2: "#879A39",
            cy: "#24837B",
            cy2: "#3AA99F",
            bl: "#205EA6",
            bl2: "#4385BE",
            pu: "#5E409D",
            pu2: "#8B7EC8",
            ma: "#A02F6F",
            ma2: "#CE5D97",
        };
        switch (color) {
            case "Red":
                accent = {
                    accentDark: colors.re,
                    accentLight: colors.re2,
                };
                break;
            case "Orange":
                accent = {
                    accentDark: colors.or,
                    accentLight: colors.or2,
                };
                break;
            case "Yellow":
                accent = {
                    accentDark: colors.ye,
                    accentLight: colors.ye2,
                };
                break;
            case "Green":
                accent = {
                    accentDark: colors.gr,
                    accentLight: colors.gr2,
                };
                break;
            case "Cyan":
                accent = {
                    accentDark: colors.cy,
                    accentLight: colors.cy2,
                };
                break;
            case "Blue":
                accent = {
                    accentDark: colors.bl,
                    accentLight: colors.bl2,
                };
                break;
            case "Purple":
                accent = {
                    accentDark: colors.pu,
                    accentLight: colors.pu2,
                };
                break;
            case "Magenta":
                accent = {
                    accentDark: colors.ma,
                    accentLight: colors.ma2,
                };
                break;
        }
    }

    return {
        ...base,
        ...colors,
        ...accent,
    };
};

export default getColors;
