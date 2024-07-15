import Color from "colorjs.io";

class Flexoki {
    constructor() {
        this.black = new Color("#100F0F");
        this.base_950 = new Color("#1C1B1A");
        this.base_900 = new Color("#282726");
        this.base_850 = new Color("#343331");
        this.base_800 = new Color("#403E3C");
        this.base_700 = new Color("#575653");
        this.base_600 = new Color("#6F6E69");
        this.base_500 = new Color("#878580");
        this.base_300 = new Color("#B7B5AC");
        this.base_200 = new Color("#CECDC3");
        this.base_150 = new Color("#DAD8CE");
        this.base_100 = new Color("#E6E4D9");
        this.base_50 = new Color("#F2F0E5");
        this.paper = new Color("#FFFCF0");
        this.red_600 = new Color("#AF3029");
        this.orange_600 = new Color("#BC5215");
        this.yellow_600 = new Color("#AD8301");
        this.green_600 = new Color("#66800B");
        this.cyan_600 = new Color("#24837B");
        this.blue_600 = new Color("#205EA6");
        this.purple_600 = new Color("#5E409D");
        this.magenta_600 = new Color("#A02F6F");
        this.red_400 = new Color("#D14D41");
        this.orange_400 = new Color("#DA702C");
        this.yellow_400 = new Color("#D0A215");
        this.green_400 = new Color("#879A39");
        this.cyan_400 = new Color("#3AA99F");
        this.blue_400 = new Color("#4385BE");
        this.purple_400 = new Color("#8B7EC8");
        this.magenta_400 = new Color("#CE5D97");
    }

    hex() {
        let obj: Flexoki = Object.assign({}, this);
        Object.entries(this).forEach(([key, value]) => {
            obj[key as keyof Flexoki] = value.toString({ format: "hex" });
        });
        return obj;
    }

    black: Color | string;
    base_950: Color | string;
    base_900: Color | string;
    base_850: Color | string;
    base_800: Color | string;
    base_700: Color | string;
    base_600: Color | string;
    base_500: Color | string;
    base_300: Color | string;
    base_200: Color | string;
    base_150: Color | string;
    base_100: Color | string;
    base_50: Color | string;
    paper: Color | string;
    red_600: Color | string;
    orange_600: Color | string;
    yellow_600: Color | string;
    green_600: Color | string;
    cyan_600: Color | string;
    blue_600: Color | string;
    purple_600: Color | string;
    magenta_600: Color | string;
    red_400: Color | string;
    orange_400: Color | string;
    yellow_400: Color | string;
    green_400: Color | string;
    cyan_400: Color | string;
    blue_400: Color | string;
    purple_400: Color | string;
    magenta_400: Color | string;
}

const flex = new Flexoki();
// console.log(flex);
// console.log(flex.hex());
console.log(flex.hex().black);
