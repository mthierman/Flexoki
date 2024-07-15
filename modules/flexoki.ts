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
        this.hex = { ...this };
        Object.entries(this).forEach(([key, value]) => {
            this.hex[key as keyof Flexoki] = value.toString({ format: "hex" });
        });
    }

    // hex() {
    //     let obj: Flexoki = Object.assign({}, this);
    //     Object.entries(this).forEach(([key, value]) => {
    //         obj[key as keyof Flexoki] = value.toString({ format: "hex" });
    //     });
    //     return obj;
    // }

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
    hex: Flexoki;
}

class LightTheme {
    constructor(flexoki: Flexoki) {
        this.bg = flexoki.paper;
        this.bg2 = flexoki.base_50;
        this.ui = flexoki.base_100;
        this.ui2 = flexoki.base_150;
        this.ui3 = flexoki.base_200;
        this.tx3 = flexoki.base_300;
        this.tx2 = flexoki.base_600;
        this.tx = flexoki.black;
        this.re = flexoki.red_600;
        this.or = flexoki.orange_600;
        this.ye = flexoki.yellow_600;
        this.gr = flexoki.green_600;
        this.cy = flexoki.cyan_600;
        this.bl = flexoki.blue_600;
        this.pu = flexoki.purple_600;
        this.ma = flexoki.magenta_600;
        this.re2 = flexoki.red_400;
        this.or2 = flexoki.orange_400;
        this.ye2 = flexoki.yellow_400;
        this.gr2 = flexoki.green_400;
        this.cy2 = flexoki.cyan_400;
        this.bl2 = flexoki.blue_400;
        this.pu2 = flexoki.purple_400;
        this.ma2 = flexoki.magenta_400;
        this.transparent = new Color("#FFFFFF00");
        this.shadow = new Color("#00000040");
        this.hex = { ...this };
        Object.entries(this).forEach(([key, value]) => {
            this.hex[key as keyof LightTheme] = value.toString({ format: "hex" });
        });
    }

    bg: Color | string;
    bg2: Color | string;
    ui: Color | string;
    ui2: Color | string;
    ui3: Color | string;
    tx3: Color | string;
    tx2: Color | string;
    tx: Color | string;
    re: Color | string;
    or: Color | string;
    ye: Color | string;
    gr: Color | string;
    cy: Color | string;
    bl: Color | string;
    pu: Color | string;
    ma: Color | string;
    re2: Color | string;
    or2: Color | string;
    ye2: Color | string;
    gr2: Color | string;
    cy2: Color | string;
    bl2: Color | string;
    pu2: Color | string;
    ma2: Color | string;
    transparent: Color | string;
    shadow: Color | string;
    hex: LightTheme;
}

class DarkTheme {
    constructor(flexoki: Flexoki) {
        this.bg = flexoki.paper;
        this.bg2 = flexoki.base_50;
        this.ui = flexoki.base_100;
        this.ui2 = flexoki.base_150;
        this.ui3 = flexoki.base_200;
        this.tx3 = flexoki.base_300;
        this.tx2 = flexoki.base_600;
        this.tx = flexoki.black;
        this.re = flexoki.red_600;
        this.or = flexoki.orange_600;
        this.ye = flexoki.yellow_600;
        this.gr = flexoki.green_600;
        this.cy = flexoki.cyan_600;
        this.bl = flexoki.blue_600;
        this.pu = flexoki.purple_600;
        this.ma = flexoki.magenta_600;
        this.re2 = flexoki.red_400;
        this.or2 = flexoki.orange_400;
        this.ye2 = flexoki.yellow_400;
        this.gr2 = flexoki.green_400;
        this.cy2 = flexoki.cyan_400;
        this.bl2 = flexoki.blue_400;
        this.pu2 = flexoki.purple_400;
        this.ma2 = flexoki.magenta_400;
        this.transparent = new Color("#FFFFFF00");
        this.shadow = new Color("#00000040");
        this.hex = { ...this };
        Object.entries(this).forEach(([key, value]) => {
            this.hex[key as keyof DarkTheme] = value.toString({ format: "hex" });
        });
    }

    bg: Color | string;
    bg2: Color | string;
    ui: Color | string;
    ui2: Color | string;
    ui3: Color | string;
    tx3: Color | string;
    tx2: Color | string;
    tx: Color | string;
    re: Color | string;
    or: Color | string;
    ye: Color | string;
    gr: Color | string;
    cy: Color | string;
    bl: Color | string;
    pu: Color | string;
    ma: Color | string;
    re2: Color | string;
    or2: Color | string;
    ye2: Color | string;
    gr2: Color | string;
    cy2: Color | string;
    bl2: Color | string;
    pu2: Color | string;
    ma2: Color | string;
    transparent: Color | string;
    shadow: Color | string;
    hex: DarkTheme;
}

class UI {
    constructor(theme: DarkTheme | LightTheme) {
        this.main_background = theme.bg;
        this.secondary_background = theme.bg2;
        this.borders = theme.ui;
        this.hovered_borders = theme.ui2;
        this.active_borders = theme.ui3;
        this.faint_text = theme.tx3;
        this.muted_text = theme.tx2;
        this.primary_text = theme.tx;
        this.error_text = theme.re;
        this.warning_text = theme.or;
        this.success_text = theme.gr;
        this.links = theme.cy;
        this.active_states = theme.cy;
        this.transparent = theme.transparent;
        this.shadow = theme.shadow;
        this.hex = { ...this };
        Object.entries(this).forEach(([key, value]) => {
            this.hex[key as keyof UI] = value.toString({ format: "hex" });
        });
    }

    main_background: Color | string;
    secondary_background: Color | string;
    borders: Color | string;
    hovered_borders: Color | string;
    active_borders: Color | string;
    faint_text: Color | string;
    muted_text: Color | string;
    primary_text: Color | string;
    error_text: Color | string;
    warning_text: Color | string;
    success_text: Color | string;
    links: Color | string;
    active_states: Color | string;
    transparent: Color | string;
    shadow: Color | string;
    hex: UI;
}

class Syntax {
    constructor(theme: DarkTheme | LightTheme) {
        this.comments = theme.tx3;
        this.punctuation = theme.tx2;
        this.operators = theme.tx2;
        this.invalid = theme.re;
        this.imports = theme.re;
        this.functions = theme.or;
        this.constants = theme.ye;
        this.keywords = theme.gr;
        this.strings = theme.cy;
        this.variables = theme.bl;
        this.attributes = theme.bl;
        this.numbers = theme.pu;
        this.language_features = theme.ma;
        this.hex = { ...this };
        Object.entries(this).forEach(([key, value]) => {
            this.hex[key as keyof Syntax] = value.toString({ format: "hex" });
        });
    }

    comments: Color | string;
    punctuation: Color | string;
    operators: Color | string;
    invalid: Color | string;
    imports: Color | string;
    functions: Color | string;
    constants: Color | string;
    keywords: Color | string;
    strings: Color | string;
    variables: Color | string;
    attributes: Color | string;
    numbers: Color | string;
    language_features: Color | string;
    hex: Syntax;
}

const flex = new Flexoki();
// console.log(flex);
// console.log(flex.hex());
// console.log(flex.hex().black);
console.log(flex.magenta_400);
console.log(flex.hex.magenta_400);
