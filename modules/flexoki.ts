import Color from "colorjs.io";

class Hex {
    constructor() {}

    hex() {
        let obj: this = Object.assign({}, this);
        Object.entries(this).forEach(([key, value]) => {
            obj[key as keyof this] = value.toString({ format: "hex" });
        });
        return obj;
    }
}

class Flexoki extends Hex {
    constructor() {
        super();
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

    black;
    base_950;
    base_900;
    base_850;
    base_800;
    base_700;
    base_600;
    base_500;
    base_300;
    base_200;
    base_150;
    base_100;
    base_50;
    paper;
    red_600;
    orange_600;
    yellow_600;
    green_600;
    cyan_600;
    blue_600;
    purple_600;
    magenta_600;
    red_400;
    orange_400;
    yellow_400;
    green_400;
    cyan_400;
    blue_400;
    purple_400;
    magenta_400;
}

class LightTheme extends Hex {
    constructor(flexoki: Flexoki) {
        super();
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
        this.transparent = new Color("sRGB", [255, 255, 255], 0);
        this.shadow = new Color("sRGB", [0, 0, 0], 0.25);
    }

    bg;
    bg2;
    ui;
    ui2;
    ui3;
    tx3;
    tx2;
    tx;
    re;
    or;
    ye;
    gr;
    cy;
    bl;
    pu;
    ma;
    re2;
    or2;
    ye2;
    gr2;
    cy2;
    bl2;
    pu2;
    ma2;
    transparent;
    shadow;
}

class DarkTheme extends Hex {
    constructor(flexoki: Flexoki) {
        super();
        this.bg = flexoki.black;
        this.bg2 = flexoki.base_950;
        this.ui = flexoki.base_900;
        this.ui2 = flexoki.base_850;
        this.ui3 = flexoki.base_800;
        this.tx3 = flexoki.base_700;
        this.tx2 = flexoki.base_500;
        this.tx = flexoki.base_200;
        this.re = flexoki.red_400;
        this.or = flexoki.orange_400;
        this.ye = flexoki.yellow_400;
        this.gr = flexoki.green_400;
        this.cy = flexoki.cyan_400;
        this.bl = flexoki.blue_400;
        this.pu = flexoki.purple_400;
        this.ma = flexoki.magenta_400;
        this.re2 = flexoki.red_600;
        this.or2 = flexoki.orange_600;
        this.ye2 = flexoki.yellow_600;
        this.gr2 = flexoki.green_600;
        this.cy2 = flexoki.cyan_600;
        this.bl2 = flexoki.blue_600;
        this.pu2 = flexoki.purple_600;
        this.ma2 = flexoki.magenta_600;
        this.transparent = new Color("sRGB", [0, 0, 0], 0);
        this.shadow = new Color("sRGB", [0, 0, 0], 0.25);
    }

    bg;
    bg2;
    ui;
    ui2;
    ui3;
    tx3;
    tx2;
    tx;
    re;
    or;
    ye;
    gr;
    cy;
    bl;
    pu;
    ma;
    re2;
    or2;
    ye2;
    gr2;
    cy2;
    bl2;
    pu2;
    ma2;
    transparent;
    shadow;
}

class UI extends Hex {
    constructor(theme: DarkTheme | LightTheme) {
        super();
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
    }

    main_background;
    secondary_background;
    borders;
    hovered_borders;
    active_borders;
    faint_text;
    muted_text;
    primary_text;
    error_text;
    warning_text;
    success_text;
    links;
    active_states;
    transparent;
    shadow;
}

class Syntax extends Hex {
    constructor(theme: DarkTheme | LightTheme) {
        super();
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
    }

    comments;
    punctuation;
    operators;
    invalid;
    imports;
    functions;
    constants;
    keywords;
    strings;
    variables;
    attributes;
    numbers;
    language_features;
}

const flexoki = new Flexoki();
const light = new LightTheme(flexoki);
const theme = new DarkTheme(flexoki);
const { ui, syntax } = { ui: new UI(theme), syntax: new Syntax(theme) };

console.log(flexoki.hex());
// console.log(light.hex());
// console.log(dark.hex());
// console.log(darkUi.hex());
// console.log(darkSyntax.hex());
