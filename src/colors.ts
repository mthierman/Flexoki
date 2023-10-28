export const getBaseColors = () => {
    return {
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
};

export const getColors = (name: string): any => {
    switch (name) {
        case "Flexoki Dark":
            return {
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
        case "Flexoki Light":
            return {
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
    }
};
