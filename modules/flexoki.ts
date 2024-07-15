import Color from "colorjs.io";
import type { Mode } from "./types.mjs";

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

class Base extends Hex {
    constructor() {
        super();
    }

    black = new Color("#100F0F");
    base_950 = new Color("#1C1B1A");
    base_900 = new Color("#282726");
    base_850 = new Color("#343331");
    base_800 = new Color("#403E3C");
    base_700 = new Color("#575653");
    base_600 = new Color("#6F6E69");
    base_500 = new Color("#878580");
    base_300 = new Color("#B7B5AC");
    base_200 = new Color("#CECDC3");
    base_150 = new Color("#DAD8CE");
    base_100 = new Color("#E6E4D9");
    base_50 = new Color("#F2F0E5");
    paper = new Color("#FFFCF0");
}

class Accent extends Hex {
    constructor() {
        super();
    }

    red_600 = new Color("#AF3029");
    orange_600 = new Color("#BC5215");
    yellow_600 = new Color("#AD8301");
    green_600 = new Color("#66800B");
    cyan_600 = new Color("#24837B");
    blue_600 = new Color("#205EA6");
    purple_600 = new Color("#5E409D");
    magenta_600 = new Color("#A02F6F");
    red_400 = new Color("#D14D41");
    orange_400 = new Color("#DA702C");
    yellow_400 = new Color("#D0A215");
    green_400 = new Color("#879A39");
    cyan_400 = new Color("#3AA99F");
    blue_400 = new Color("#4385BE");
    purple_400 = new Color("#8B7EC8");
    magenta_400 = new Color("#CE5D97");
}

class Light extends Hex {
    constructor() {
        super();
    }

    base = new Base();
    accent = new Accent();
    bg = this.base.paper;
    bg2 = this.base.base_50;
    ui = this.base.base_100;
    ui2 = this.base.base_150;
    ui3 = this.base.base_200;
    tx3 = this.base.base_300;
    tx2 = this.base.base_600;
    tx = this.base.black;
    re = this.accent.red_600;
    or = this.accent.orange_600;
    ye = this.accent.yellow_600;
    gr = this.accent.green_600;
    cy = this.accent.cyan_600;
    bl = this.accent.blue_600;
    pu = this.accent.purple_600;
    ma = this.accent.magenta_600;
    re2 = this.accent.red_400;
    or2 = this.accent.orange_400;
    ye2 = this.accent.yellow_400;
    gr2 = this.accent.green_400;
    cy2 = this.accent.cyan_400;
    bl2 = this.accent.blue_400;
    pu2 = this.accent.purple_400;
    ma2 = this.accent.magenta_400;
    transparent = new Color("sRGB", [255, 255, 255], 0);
    shadow = new Color("sRGB", [0, 0, 0], 0.25);
}

class Dark extends Hex {
    constructor() {
        super();
    }

    base = new Base();
    accent = new Accent();
    bg = this.base.black;
    bg2 = this.base.base_950;
    ui = this.base.base_900;
    ui2 = this.base.base_850;
    ui3 = this.base.base_800;
    tx3 = this.base.base_700;
    tx2 = this.base.base_500;
    tx = this.base.base_200;
    re = this.accent.red_400;
    or = this.accent.orange_400;
    ye = this.accent.yellow_400;
    gr = this.accent.green_400;
    cy = this.accent.cyan_400;
    bl = this.accent.blue_400;
    pu = this.accent.purple_400;
    ma = this.accent.magenta_400;
    re2 = this.accent.red_600;
    or2 = this.accent.orange_600;
    ye2 = this.accent.yellow_600;
    gr2 = this.accent.green_600;
    cy2 = this.accent.cyan_600;
    bl2 = this.accent.blue_600;
    pu2 = this.accent.purple_600;
    ma2 = this.accent.magenta_600;
    transparent = new Color("sRGB", [0, 0, 0], 0);
    shadow = new Color("sRGB", [0, 0, 0], 0.25);
}

class UI extends Hex {
    constructor(theme: Dark | Light) {
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
    constructor(theme: Dark | Light) {
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

type Theme = {
    theme: Dark | Light;
    ui: UI;
    syntax: Syntax;
};

function makeTheme(mode: Mode): Theme {
    switch (mode) {
        case "Dark": {
            const theme = new Dark();
            return {
                theme: theme,
                ui: new UI(theme),
                syntax: new Syntax(theme),
            };
        }
        case "Light": {
            const theme = new Light();
            return {
                theme: theme,
                ui: new UI(theme),
                syntax: new Syntax(theme),
            };
        }
    }
}

const theme = makeTheme("Dark");
console.log(theme.ui.hex());
