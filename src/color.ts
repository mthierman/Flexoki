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
            };
    }
};

export default getColor;
