const getColor = (name: string): any => {
    switch (name) {
        case "Flexoki Dark":
            return {
                "bg": "#100F0F",
                "bg2": "#1C1B1A",
                "ui": "#282726",
                "ui-2": "#343331",
                "ui-3": "#403E3C",
                "tx": "#CECDC3",
                "tx-2": "#878580",
                "tx-3": "#575653",
                "re": "#D14D41",
                "re-2": "#AF3029",
                "or": "#DA702C",
                "or-2": "#BC5215",
                "ye": "#D0A215",
                "ye-2": "#AD8301",
                "gr": "#879A39",
                "gr-2": "#66800B",
                "cy": "#3AA99F",
                "cy-2": "#24837B",
                "bl": "#4385BE",
                "bl-2": "#205EA6",
                "pu": "#8B7EC8",
                "pu-2": "#5E409D",
                "ma": "#CE5D97",
                "ma-2": "#A02F6F",
            };
        case "Flexoki Light":
            return {
                "bg": "#FFFCF0",
                "bg2": "#F2F0E5",
                "ui": "#E6E4D9",
                "ui-2": "#DAD8CE",
                "ui-3": "#CECDC3",
                "tx": "#100F0F",
                "tx-2": "#6F6E69",
                "tx-3": "#B7B5AC",
                "re": "#AF3029",
                "re-2": "#D14D41",
                "or": "#BC5215",
                "or-2": "#DA702C",
                "ye": "#AD8301",
                "ye-2": "#D0A215",
                "gr": "#66800B",
                "gr-2": "#879A39",
                "cy": "#24837B",
                "cy-2": "#3AA99F",
                "bl": "#205EA6",
                "bl-2": "#4385BE",
                "pu": "#5E409D",
                "pu-2": "#8B7EC8",
                "ma": "#A02F6F",
                "ma-2": "#CE5D97",
            };
    }
};

export default getColor;
