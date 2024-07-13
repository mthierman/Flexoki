import Color from "colorjs.io";
import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

type Mode = "Dark" | "Light";

type Accent = "Red" | "Orange" | "Yellow" | "Green" | "Cyan" | "Blue" | "Purple" | "Magenta";

interface Theme {
    [key: string]: Color | string;
    "bg": Color | string;
    "bg-2": Color | string;
    "ui": Color | string;
    "ui-2": Color | string;
    "ui-3": Color | string;
    "tx-3": Color | string;
    "tx-2": Color | string;
    "tx": Color | string;
    "re": Color | string;
    "re2": Color | string;
    "or": Color | string;
    "or2": Color | string;
    "ye": Color | string;
    "ye2": Color | string;
    "gr": Color | string;
    "gr2": Color | string;
    "cy": Color | string;
    "cy2": Color | string;
    "bl": Color | string;
    "bl2": Color | string;
    "pu": Color | string;
    "pu2": Color | string;
    "ma": Color | string;
    "ma2": Color | string;
    "transparent": Color | string;
}

interface UI {
    [key: string]: Color | string | undefined;
    "main-background": Color | string;
    "secondary-background": Color | string;
    "borders": Color | string;
    "hovered-borders": Color | string;
    "active-borders": Color | string;
    "faint-text": Color | string;
    "muted-text": Color | string;
    "primary-text": Color | string;
    "error-text": Color | string;
    "warning-text": Color | string;
    "success-text": Color | string;
    "links": Color | string;
    "active-states": Color | string;
    "transparent": Color | string;
    "shadow"?: Color | string;
}

interface Syntax {
    [key: string]: Color | string;
    "comments": Color | string;
    "punctuation": Color | string;
    "operators": Color | string;
    "invalid": Color | string;
    "imports": Color | string;
    "functions": Color | string;
    "constants": Color | string;
    "keywords": Color | string;
    "strings": Color | string;
    "variables": Color | string;
    "attributes": Color | string;
    "numbers": Color | string;
    "language-features": Color | string;
}

interface Mapping {
    ui: UI;
    syntax: Syntax;
}

const baseTones = {
    "black": new Color("#100F0F"),
    "base-950": new Color("#1C1B1A"),
    "base-900": new Color("#282726"),
    "base-850": new Color("#343331"),
    "base-800": new Color("#403E3C"),
    "base-700": new Color("#575653"),
    "base-600": new Color("#6F6E69"),
    "base-500": new Color("#878580"),
    "base-300": new Color("#B7B5AC"),
    "base-200": new Color("#CECDC3"),
    "base-150": new Color("#DAD8CE"),
    "base-100": new Color("#E6E4D9"),
    "base-50": new Color("#F2F0E5"),
    "paper": new Color("#FFFCF0"),
};

const accentColors = {
    "red-600": new Color("#AF3029"),
    "orange-600": new Color("#BC5215"),
    "yellow-600": new Color("#AD8301"),
    "green-600": new Color("#66800B"),
    "cyan-600": new Color("#24837B"),
    "blue-600": new Color("#205EA6"),
    "purple-600": new Color("#5E409D"),
    "magenta-600": new Color("#A02F6F"),
    "red-400": new Color("#D14D41"),
    "orange-400": new Color("#DA702C"),
    "yellow-400": new Color("#D0A215"),
    "green-400": new Color("#879A39"),
    "cyan-400": new Color("#3AA99F"),
    "blue-400": new Color("#4385BE"),
    "purple-400": new Color("#8B7EC8"),
    "magenta-400": new Color("#CE5D97"),
};

const darkTheme: Theme = {
    "bg": baseTones["black"],
    "bg-2": baseTones["base-950"],
    "ui": baseTones["base-900"],
    "ui-2": baseTones["base-850"],
    "ui-3": baseTones["base-800"],
    "tx-3": baseTones["base-700"],
    "tx-2": baseTones["base-500"],
    "tx": baseTones["base-200"],
    "re": accentColors["red-400"],
    "re2": accentColors["red-600"],
    "or": accentColors["orange-400"],
    "or2": accentColors["orange-600"],
    "ye": accentColors["yellow-400"],
    "ye2": accentColors["yellow-600"],
    "gr": accentColors["green-400"],
    "gr2": accentColors["green-600"],
    "cy": accentColors["cyan-400"],
    "cy2": accentColors["cyan-600"],
    "bl": accentColors["blue-400"],
    "bl2": accentColors["blue-600"],
    "pu": accentColors["purple-400"],
    "pu2": accentColors["purple-600"],
    "ma": accentColors["magenta-400"],
    "ma2": accentColors["magenta-600"],
    "transparent": new Color("#00000000"),
};

const lightTheme: Theme = {
    "bg": baseTones["paper"],
    "bg-2": baseTones["base-50"],
    "ui": baseTones["base-100"],
    "ui-2": baseTones["base-150"],
    "ui-3": baseTones["base-200"],
    "tx-3": baseTones["base-300"],
    "tx-2": baseTones["base-600"],
    "tx": baseTones["black"],
    "re": accentColors["red-600"],
    "re2": accentColors["red-400"],
    "or": accentColors["orange-600"],
    "or2": accentColors["orange-400"],
    "ye": accentColors["yellow-600"],
    "ye2": accentColors["yellow-400"],
    "gr": accentColors["green-600"],
    "gr2": accentColors["green-400"],
    "cy": accentColors["cyan-600"],
    "cy2": accentColors["cyan-400"],
    "bl": accentColors["blue-600"],
    "bl2": accentColors["blue-400"],
    "pu": accentColors["purple-600"],
    "pu2": accentColors["purple-400"],
    "ma": accentColors["magenta-600"],
    "ma2": accentColors["magenta-400"],
    "transparent": new Color("#FFFFFF00"),
};

function colorToHex(color: Color) {
    return color.toString({ format: "hex" });
}

function colorsToHex(colors: Record<string, Color | string>) {
    Object.entries(colors).forEach(([key, value]: [string, Color | string]) => {
        colors[key] = colorToHex(value as Color);
    });
    return colors;
}

function mapColorTheme(theme: Theme): Mapping {
    return {
        ui: {
            "main-background": theme["bg"],
            "secondary-background": theme["bg-2"],
            "borders": theme["ui"],
            "hovered-borders": theme["ui-2"],
            "active-borders": theme["ui-3"],
            "faint-text": theme["tx-3"],
            "muted-text": theme["tx-2"],
            "primary-text": theme["tx"],
            "error-text": theme["re"],
            "warning-text": theme["or"],
            "success-text": theme["gr"],
            "links": theme["cy"],
            "active-states": theme["cy"],
            "transparent": theme["transparent"],
        },
        syntax: {
            "comments": theme["tx-3"],
            "punctuation": theme["tx-2"],
            "operators": theme["tx-2"],
            "invalid": theme["re"],
            "imports": theme["re"],
            "functions": theme["or"],
            "constants": theme["ye"],
            "keywords": theme["gr"],
            "strings": theme["cy"],
            "variables": theme["bl"],
            "attributes": theme["bl"],
            "numbers": theme["pu"],
            "language-features": theme["ma"],
        },
    };
}

const makeAccentColor = (mode: Mode, accent: Accent) => {
    switch (accent) {
        case "Red": {
            return mode === "Dark" ? accentColors["red-600"] : accentColors["red-400"];
        }
        case "Orange": {
            return mode === "Dark" ? accentColors["orange-600"] : accentColors["orange-400"];
        }
        case "Yellow": {
            return mode === "Dark" ? accentColors["yellow-600"] : accentColors["yellow-400"];
        }
        case "Green": {
            return mode === "Dark" ? accentColors["green-600"] : accentColors["green-400"];
        }
        case "Cyan": {
            return mode === "Dark" ? accentColors["cyan-600"] : accentColors["cyan-400"];
        }
        case "Blue": {
            return mode === "Dark" ? accentColors["blue-600"] : accentColors["blue-400"];
        }
        case "Purple": {
            return mode === "Dark" ? accentColors["purple-600"] : accentColors["purple-400"];
        }
        case "Magenta": {
            return mode === "Dark" ? accentColors["magenta-600"] : accentColors["magenta-400"];
        }
    }
};

const makeThemes = () => {
    return {
        dark: colorsToHex(darkTheme) as Theme,
        light: colorsToHex(lightTheme) as Theme,
    };
};

const makeMappings = () => {
    const { dark, light } = makeThemes();

    return {
        dark: mapColorTheme(dark),
        light: mapColorTheme(light),
    };
};

const generateTerminal = (mode: Mode) => {
    const base = colorsToHex(baseTones) as typeof baseTones;
    const themes = makeThemes();
    const mappings = makeMappings();

    const { ui, syntax } = mode === "Dark" ? mappings.dark : mappings.light;
    const theme = mode === "Dark" ? themes.dark : themes.light;

    return {
        background: ui["main-background"],
        black: base["base-950"],
        blue: theme["bl2"],
        brightBlack: base["base-900"],
        brightBlue: theme["bl"],
        brightCyan: theme["cy"],
        brightGreen: theme["gr"],
        brightPurple: theme["ma"],
        brightRed: theme["re"],
        brightWhite: base["base-50"],
        brightYellow: theme["ye"],
        cursorColor: ui["primary-text"],
        cyan: theme["cy2"],
        foreground: ui["primary-text"],
        green: theme["gr2"],
        name: `Flexoki ${mode}`,
        purple: theme["ma2"],
        red: theme["re2"],
        selectionBackground: ui["active-borders"],
        white: base["base-100"],
        yellow: theme["ye2"],
    };
};

const lightTokenColors = () => {
    const vs = [
        {
            scope: [
                "meta.embedded",
                "source.groovy.embedded",
                "string meta.image.inline.markdown",
                "variable.legacy.builtin.python",
            ],
            settings: { foreground: "#000000ff" },
        },
        { scope: "emphasis", settings: { fontStyle: "italic" } },
        { scope: "strong", settings: { fontStyle: "bold" } },
        {
            scope: "meta.diff.header",
            settings: { foreground: "#000080" },
        },
        { scope: "comment", settings: { foreground: "#008000" } },
        {
            scope: "constant.language",
            settings: { foreground: "#0000ff" },
        },
        {
            scope: [
                "constant.numeric",
                "variable.other.enummember",
                "keyword.operator.plus.exponent",
                "keyword.operator.minus.exponent",
            ],
            settings: { foreground: "#098658" },
        },
        { scope: "constant.regexp", settings: { foreground: "#811f3f" } },
        {
            name: "css tags in selectors, xml tags",
            scope: "entity.name.tag",
            settings: { foreground: "#800000" },
        },
        {
            scope: "entity.name.selector",
            settings: { foreground: "#800000" },
        },
        {
            scope: "entity.other.attribute-name",
            settings: { foreground: "#e50000" },
        },
        {
            scope: [
                "entity.other.attribute-name.class.css",
                "source.css entity.other.attribute-name.class",
                "entity.other.attribute-name.id.css",
                "entity.other.attribute-name.parent-selector.css",
                "entity.other.attribute-name.parent.less",
                "source.css entity.other.attribute-name.pseudo-class",
                "entity.other.attribute-name.pseudo-element.css",
                "source.css.less entity.other.attribute-name.id",
                "entity.other.attribute-name.scss",
            ],
            settings: { foreground: "#800000" },
        },
        { scope: "invalid", settings: { foreground: "#cd3131" } },
        {
            scope: "markup.underline",
            settings: { fontStyle: "underline" },
        },
        {
            scope: "markup.bold",
            settings: { fontStyle: "bold", foreground: "#000080" },
        },
        {
            scope: "markup.heading",
            settings: { fontStyle: "bold", foreground: "#800000" },
        },
        { scope: "markup.italic", settings: { fontStyle: "italic" } },
        {
            scope: "markup.strikethrough",
            settings: { fontStyle: "strikethrough" },
        },
        { scope: "markup.inserted", settings: { foreground: "#098658" } },
        { scope: "markup.deleted", settings: { foreground: "#a31515" } },
        { scope: "markup.changed", settings: { foreground: "#0451a5" } },
        {
            scope: [
                "punctuation.definition.quote.begin.markdown",
                "punctuation.definition.list.begin.markdown",
            ],
            settings: { foreground: "#0451a5" },
        },
        {
            scope: "markup.inline.raw",
            settings: { foreground: "#800000" },
        },
        {
            name: "brackets of XML/HTML tags",
            scope: "punctuation.definition.tag",
            settings: { foreground: "#800000" },
        },
        {
            scope: ["meta.preprocessor", "entity.name.function.preprocessor"],
            settings: { foreground: "#0000ff" },
        },
        {
            scope: "meta.preprocessor.string",
            settings: { foreground: "#a31515" },
        },
        {
            scope: "meta.preprocessor.numeric",
            settings: { foreground: "#098658" },
        },
        {
            scope: "meta.structure.dictionary.key.python",
            settings: { foreground: "#0451a5" },
        },
        { scope: "storage", settings: { foreground: "#0000ff" } },
        { scope: "storage.type", settings: { foreground: "#0000ff" } },
        {
            scope: ["storage.modifier", "keyword.operator.noexcept"],
            settings: { foreground: "#0000ff" },
        },
        {
            scope: ["string", "meta.embedded.assembly"],
            settings: { foreground: "#a31515" },
        },
        {
            scope: [
                "string.comment.buffered.block.pug",
                "string.quoted.pug",
                "string.interpolated.pug",
                "string.unquoted.plain.in.yaml",
                "string.unquoted.plain.out.yaml",
                "string.unquoted.block.yaml",
                "string.quoted.single.yaml",
                "string.quoted.double.xml",
                "string.quoted.single.xml",
                "string.unquoted.cdata.xml",
                "string.quoted.double.html",
                "string.quoted.single.html",
                "string.unquoted.html",
                "string.quoted.single.handlebars",
                "string.quoted.double.handlebars",
            ],
            settings: { foreground: "#0000ff" },
        },
        { scope: "string.regexp", settings: { foreground: "#811f3f" } },
        {
            name: "String interpolation",
            scope: [
                "punctuation.definition.template-expression.begin",
                "punctuation.definition.template-expression.end",
                "punctuation.section.embedded",
            ],
            settings: { foreground: "#0000ff" },
        },
        {
            name: "Reset JavaScript string interpolation expression",
            scope: ["meta.template.expression"],
            settings: { foreground: "#000000" },
        },
        {
            scope: [
                "support.constant.property-value",
                "support.constant.font-name",
                "support.constant.media-type",
                "support.constant.media",
                "constant.other.color.rgb-value",
                "constant.other.rgb-value",
                "support.constant.color",
            ],
            settings: { foreground: "#0451a5" },
        },
        {
            scope: [
                "support.type.vendored.property-name",
                "support.type.property-name",
                "source.css variable",
                "source.coffee.embedded",
            ],
            settings: { foreground: "#e50000" },
        },
        {
            scope: ["support.type.property-name.json"],
            settings: { foreground: "#0451a5" },
        },
        { scope: "keyword", settings: { foreground: "#0000ff" } },
        { scope: "keyword.control", settings: { foreground: "#0000ff" } },
        {
            scope: "keyword.operator",
            settings: { foreground: "#000000" },
        },
        {
            scope: [
                "keyword.operator.new",
                "keyword.operator.expression",
                "keyword.operator.cast",
                "keyword.operator.sizeof",
                "keyword.operator.alignof",
                "keyword.operator.typeid",
                "keyword.operator.alignas",
                "keyword.operator.instanceof",
                "keyword.operator.logical.python",
                "keyword.operator.wordlike",
            ],
            settings: { foreground: "#0000ff" },
        },
        {
            scope: "keyword.other.unit",
            settings: { foreground: "#098658" },
        },
        {
            scope: [
                "punctuation.section.embedded.begin.php",
                "punctuation.section.embedded.end.php",
            ],
            settings: { foreground: "#800000" },
        },
        {
            scope: "support.function.git-rebase",
            settings: { foreground: "#0451a5" },
        },
        {
            scope: "constant.sha.git-rebase",
            settings: { foreground: "#098658" },
        },
        {
            name: "coloring of the Java import and package identifiers",
            scope: [
                "storage.modifier.import.java",
                "variable.language.wildcard.java",
                "storage.modifier.package.java",
            ],
            settings: { foreground: "#000000" },
        },
        {
            name: "this.self",
            scope: "variable.language",
            settings: { foreground: "#0000ff" },
        },
    ];

    const plus = [
        {
            name: "Function declarations",
            scope: [
                "entity.name.function",
                "support.function",
                "support.constant.handlebars",
                "source.powershell variable.other.member",
                "entity.name.operator.custom-literal",
            ],
            settings: { foreground: "#795E26" },
        },
        {
            name: "Types declaration and references",
            scope: [
                "support.class",
                "support.type",
                "entity.name.type",
                "entity.name.namespace",
                "entity.other.attribute",
                "entity.name.scope-resolution",
                "entity.name.class",
                "storage.type.numeric.go",
                "storage.type.byte.go",
                "storage.type.boolean.go",
                "storage.type.string.go",
                "storage.type.uintptr.go",
                "storage.type.error.go",
                "storage.type.rune.go",
                "storage.type.cs",
                "storage.type.generic.cs",
                "storage.type.modifier.cs",
                "storage.type.variable.cs",
                "storage.type.annotation.java",
                "storage.type.generic.java",
                "storage.type.java",
                "storage.type.object.array.java",
                "storage.type.primitive.array.java",
                "storage.type.primitive.java",
                "storage.type.token.java",
                "storage.type.groovy",
                "storage.type.annotation.groovy",
                "storage.type.parameters.groovy",
                "storage.type.generic.groovy",
                "storage.type.object.array.groovy",
                "storage.type.primitive.array.groovy",
                "storage.type.primitive.groovy",
            ],
            settings: { foreground: "#267f99" },
        },
        {
            name: "Types declaration and references, TS grammar specific",
            scope: [
                "meta.type.cast.expr",
                "meta.type.new.expr",
                "support.constant.math",
                "support.constant.dom",
                "support.constant.json",
                "entity.other.inherited-class",
            ],
            settings: { foreground: "#267f99" },
        },
        {
            name: "Control flow / Special keywords",
            scope: [
                "keyword.control",
                "source.cpp keyword.operator.new",
                "source.cpp keyword.operator.delete",
                "keyword.other.using",
                "keyword.other.directive.using",
                "keyword.other.operator",
                "entity.name.operator",
            ],
            settings: { foreground: "#AF00DB" },
        },
        {
            name: "Variable and parameter name",
            scope: [
                "variable",
                "meta.definition.variable.name",
                "support.variable",
                "entity.name.variable",
                "constant.other.placeholder",
            ],
            settings: { foreground: "#001080" },
        },
        {
            name: "Constants and enums",
            scope: ["variable.other.constant", "variable.other.enummember"],
            settings: { foreground: "#0070C1" },
        },
        {
            name: "Object keys, TS grammar specific",
            scope: ["meta.object-literal.key"],
            settings: { foreground: "#001080" },
        },
        {
            name: "CSS property value",
            scope: [
                "support.constant.property-value",
                "support.constant.font-name",
                "support.constant.media-type",
                "support.constant.media",
                "constant.other.color.rgb-value",
                "constant.other.rgb-value",
                "support.constant.color",
            ],
            settings: { foreground: "#0451a5" },
        },
        {
            name: "Regular expression groups",
            scope: [
                "punctuation.definition.group.regexp",
                "punctuation.definition.group.assertion.regexp",
                "punctuation.definition.character-class.regexp",
                "punctuation.character.set.begin.regexp",
                "punctuation.character.set.end.regexp",
                "keyword.operator.negation.regexp",
                "support.other.parenthesis.regexp",
            ],
            settings: { foreground: "#d16969" },
        },
        {
            scope: [
                "constant.character.character-class.regexp",
                "constant.other.character-class.set.regexp",
                "constant.other.character-class.regexp",
                "constant.character.set.regexp",
            ],
            settings: { foreground: "#811f3f" },
        },
        {
            scope: "keyword.operator.quantifier.regexp",
            settings: { foreground: "#000000" },
        },
        {
            scope: ["keyword.operator.or.regexp", "keyword.control.anchor.regexp"],
            settings: { foreground: "#EE0000" },
        },
        {
            scope: ["constant.character", "constant.other.option"],
            settings: { foreground: "#0000ff" },
        },
        {
            scope: "constant.character.escape",
            settings: { foreground: "#EE0000" },
        },
        {
            scope: "entity.name.label",
            settings: { foreground: "#000000" },
        },
    ];

    return vs.concat(plus);
};

const darkTokenColors = () => {
    const vs = [
        {
            scope: [
                "meta.embedded",
                "source.groovy.embedded",
                "string meta.image.inline.markdown",
                "variable.legacy.builtin.python",
            ],
            settings: { foreground: "#D4D4D4" },
        },
        { scope: "emphasis", settings: { fontStyle: "italic" } },
        { scope: "strong", settings: { fontStyle: "bold" } },
        { scope: "header", settings: { foreground: "#000080" } },
        { scope: "comment", settings: { foreground: "#6A9955" } },
        {
            scope: "constant.language",
            settings: { foreground: "#569cd6" },
        },
        {
            scope: [
                "constant.numeric",
                "variable.other.enummember",
                "keyword.operator.plus.exponent",
                "keyword.operator.minus.exponent",
            ],
            settings: { foreground: "#b5cea8" },
        },
        { scope: "constant.regexp", settings: { foreground: "#646695" } },
        { scope: "entity.name.tag", settings: { foreground: "#569cd6" } },
        {
            scope: ["entity.name.tag.css", "entity.name.tag.less"],
            settings: { foreground: "#d7ba7d" },
        },
        {
            scope: "entity.other.attribute-name",
            settings: { foreground: "#9cdcfe" },
        },
        {
            scope: [
                "entity.other.attribute-name.class.css",
                "source.css entity.other.attribute-name.class",
                "entity.other.attribute-name.id.css",
                "entity.other.attribute-name.parent-selector.css",
                "entity.other.attribute-name.parent.less",
                "source.css entity.other.attribute-name.pseudo-class",
                "entity.other.attribute-name.pseudo-element.css",
                "source.css.less entity.other.attribute-name.id",
                "entity.other.attribute-name.scss",
            ],
            settings: { foreground: "#d7ba7d" },
        },
        { scope: "invalid", settings: { foreground: "#f44747" } },
        {
            scope: "markup.underline",
            settings: { fontStyle: "underline" },
        },
        {
            scope: "markup.bold",
            settings: { fontStyle: "bold", foreground: "#569cd6" },
        },
        {
            scope: "markup.heading",
            settings: { fontStyle: "bold", foreground: "#569cd6" },
        },
        { scope: "markup.italic", settings: { fontStyle: "italic" } },
        {
            scope: "markup.strikethrough",
            settings: { fontStyle: "strikethrough" },
        },
        { scope: "markup.inserted", settings: { foreground: "#b5cea8" } },
        { scope: "markup.deleted", settings: { foreground: "#ce9178" } },
        { scope: "markup.changed", settings: { foreground: "#569cd6" } },
        {
            scope: "punctuation.definition.quote.begin.markdown",
            settings: { foreground: "#6A9955" },
        },
        {
            scope: "punctuation.definition.list.begin.markdown",
            settings: { foreground: "#6796e6" },
        },
        {
            scope: "markup.inline.raw",
            settings: { foreground: "#ce9178" },
        },
        {
            name: "brackets of XML/HTML tags",
            scope: "punctuation.definition.tag",
            settings: { foreground: "#808080" },
        },
        {
            scope: ["meta.preprocessor", "entity.name.function.preprocessor"],
            settings: { foreground: "#569cd6" },
        },
        {
            scope: "meta.preprocessor.string",
            settings: { foreground: "#ce9178" },
        },
        {
            scope: "meta.preprocessor.numeric",
            settings: { foreground: "#b5cea8" },
        },
        {
            scope: "meta.structure.dictionary.key.python",
            settings: { foreground: "#9cdcfe" },
        },
        {
            scope: "meta.diff.header",
            settings: { foreground: "#569cd6" },
        },
        { scope: "storage", settings: { foreground: "#569cd6" } },
        { scope: "storage.type", settings: { foreground: "#569cd6" } },
        {
            scope: ["storage.modifier", "keyword.operator.noexcept"],
            settings: { foreground: "#569cd6" },
        },
        {
            scope: ["string", "meta.embedded.assembly"],
            settings: { foreground: "#ce9178" },
        },
        { scope: "string.tag", settings: { foreground: "#ce9178" } },
        { scope: "string.value", settings: { foreground: "#ce9178" } },
        { scope: "string.regexp", settings: { foreground: "#d16969" } },
        {
            name: "String interpolation",
            scope: [
                "punctuation.definition.template-expression.begin",
                "punctuation.definition.template-expression.end",
                "punctuation.section.embedded",
            ],
            settings: { foreground: "#569cd6" },
        },
        {
            name: "Reset JavaScript string interpolation expression",
            scope: ["meta.template.expression"],
            settings: { foreground: "#d4d4d4" },
        },
        {
            scope: [
                "support.type.vendored.property-name",
                "support.type.property-name",
                "source.css variable",
                "source.coffee.embedded",
            ],
            settings: { foreground: "#9cdcfe" },
        },
        { scope: "keyword", settings: { foreground: "#569cd6" } },
        { scope: "keyword.control", settings: { foreground: "#569cd6" } },
        {
            scope: "keyword.operator",
            settings: { foreground: "#d4d4d4" },
        },
        {
            scope: [
                "keyword.operator.new",
                "keyword.operator.expression",
                "keyword.operator.cast",
                "keyword.operator.sizeof",
                "keyword.operator.alignof",
                "keyword.operator.typeid",
                "keyword.operator.alignas",
                "keyword.operator.instanceof",
                "keyword.operator.logical.python",
                "keyword.operator.wordlike",
            ],
            settings: { foreground: "#569cd6" },
        },
        {
            scope: "keyword.other.unit",
            settings: { foreground: "#b5cea8" },
        },
        {
            scope: [
                "punctuation.section.embedded.begin.php",
                "punctuation.section.embedded.end.php",
            ],
            settings: { foreground: "#569cd6" },
        },
        {
            scope: "support.function.git-rebase",
            settings: { foreground: "#9cdcfe" },
        },
        {
            scope: "constant.sha.git-rebase",
            settings: { foreground: "#b5cea8" },
        },
        {
            name: "coloring of the Java import and package identifiers",
            scope: [
                "storage.modifier.import.java",
                "variable.language.wildcard.java",
                "storage.modifier.package.java",
            ],
            settings: { foreground: "#d4d4d4" },
        },
        {
            name: "this.self",
            scope: "variable.language",
            settings: { foreground: "#569cd6" },
        },
    ];

    const plus = [
        {
            name: "Function declarations",
            scope: [
                "entity.name.function",
                "support.function",
                "support.constant.handlebars",
                "source.powershell variable.other.member",
                "entity.name.operator.custom-literal",
            ],
            settings: { foreground: "#DCDCAA" },
        },
        {
            name: "Types declaration and references",
            scope: [
                "support.class",
                "support.type",
                "entity.name.type",
                "entity.name.namespace",
                "entity.other.attribute",
                "entity.name.scope-resolution",
                "entity.name.class",
                "storage.type.numeric.go",
                "storage.type.byte.go",
                "storage.type.boolean.go",
                "storage.type.string.go",
                "storage.type.uintptr.go",
                "storage.type.error.go",
                "storage.type.rune.go",
                "storage.type.cs",
                "storage.type.generic.cs",
                "storage.type.modifier.cs",
                "storage.type.variable.cs",
                "storage.type.annotation.java",
                "storage.type.generic.java",
                "storage.type.java",
                "storage.type.object.array.java",
                "storage.type.primitive.array.java",
                "storage.type.primitive.java",
                "storage.type.token.java",
                "storage.type.groovy",
                "storage.type.annotation.groovy",
                "storage.type.parameters.groovy",
                "storage.type.generic.groovy",
                "storage.type.object.array.groovy",
                "storage.type.primitive.array.groovy",
                "storage.type.primitive.groovy",
            ],
            settings: { foreground: "#4EC9B0" },
        },
        {
            name: "Types declaration and references, TS grammar specific",
            scope: [
                "meta.type.cast.expr",
                "meta.type.new.expr",
                "support.constant.math",
                "support.constant.dom",
                "support.constant.json",
                "entity.other.inherited-class",
            ],
            settings: { foreground: "#4EC9B0" },
        },
        {
            name: "Control flow / Special keywords",
            scope: [
                "keyword.control",
                "source.cpp keyword.operator.new",
                "keyword.operator.delete",
                "keyword.other.using",
                "keyword.other.directive.using",
                "keyword.other.operator",
                "entity.name.operator",
            ],
            settings: { foreground: "#C586C0" },
        },
        {
            name: "Variable and parameter name",
            scope: [
                "variable",
                "meta.definition.variable.name",
                "support.variable",
                "entity.name.variable",
                "constant.other.placeholder",
            ],
            settings: { foreground: "#9CDCFE" },
        },
        {
            name: "Constants and enums",
            scope: ["variable.other.constant", "variable.other.enummember"],
            settings: { foreground: "#4FC1FF" },
        },
        {
            name: "Object keys, TS grammar specific",
            scope: ["meta.object-literal.key"],
            settings: { foreground: "#9CDCFE" },
        },
        {
            name: "CSS property value",
            scope: [
                "support.constant.property-value",
                "support.constant.font-name",
                "support.constant.media-type",
                "support.constant.media",
                "constant.other.color.rgb-value",
                "constant.other.rgb-value",
                "support.constant.color",
            ],
            settings: { foreground: "#CE9178" },
        },
        {
            name: "Regular expression groups",
            scope: [
                "punctuation.definition.group.regexp",
                "punctuation.definition.group.assertion.regexp",
                "punctuation.definition.character-class.regexp",
                "punctuation.character.set.begin.regexp",
                "punctuation.character.set.end.regexp",
                "keyword.operator.negation.regexp",
                "support.other.parenthesis.regexp",
            ],
            settings: { foreground: "#CE9178" },
        },
        {
            scope: [
                "constant.character.character-class.regexp",
                "constant.other.character-class.set.regexp",
                "constant.other.character-class.regexp",
                "constant.character.set.regexp",
            ],
            settings: { foreground: "#d16969" },
        },
        {
            scope: ["keyword.operator.or.regexp", "keyword.control.anchor.regexp"],
            settings: { foreground: "#DCDCAA" },
        },
        {
            scope: "keyword.operator.quantifier.regexp",
            settings: { foreground: "#d7ba7d" },
        },
        {
            scope: ["constant.character", "constant.other.option"],
            settings: { foreground: "#569cd6" },
        },
        {
            scope: "constant.character.escape",
            settings: { foreground: "#d7ba7d" },
        },
        {
            scope: "entity.name.label",
            settings: { foreground: "#C8C8C8" },
        },
    ];

    return vs.concat(plus);
};

const generateTheme = (mode: Mode, accent: Accent) => {
    const base = colorsToHex(baseTones) as typeof baseTones;
    const accentColor = colorToHex(makeAccentColor(mode, accent));
    const terminal = generateTerminal(mode);
    const themes = makeThemes();
    const mappings = makeMappings();

    const { ui, syntax } = mode === "Dark" ? mappings.dark : mappings.light;
    ui["shadow"] = colorToHex(baseTones["black"]).concat("40");
    const theme = mode === "Dark" ? themes.dark : themes.light;

    const test = "#FF00FF";

    return {
        $schema: "vscode://schemas/color-theme",
        name: `Flexoki ${mode} ${accent}`,
        colors: {
            "activityBar.activeBackground": ui["secondary-background"],
            "activityBar.activeBorder": ui["active-states"],
            "activityBar.activeFocusBorder": ui["active-states"],
            "activityBar.background": ui["secondary-background"],
            "activityBar.border": ui["borders"],
            // "activityBar.dropBorder": null,
            "activityBar.foreground": ui["active-states"],
            "activityBar.inactiveForeground": ui["primary-text"],
            "activityBarBadge.background": ui["main-background"],
            "activityBarBadge.foreground": ui["primary-text"],
            "activityBarTop.activeBackground": ui["secondary-background"],
            "activityBarTop.activeBorder": ui["active-states"],
            "activityBarTop.background": ui["secondary-background"],
            // "activityBarTop.dropBorder": null,
            "activityBarTop.foreground": ui["active-states"],
            "activityBarTop.inactiveForeground": ui["primary-text"],
            "button.background": theme["ui"],
            "button.border": theme["ui-3"],
            "button.foreground": ui["primary-text"],
            "button.hoverBackground": theme["ui-2"],
            "button.secondaryBackground": theme["ui"],
            "button.secondaryForeground": ui["primary-text"],
            "button.secondaryHoverBackground": theme["ui-2"],
            "button.separator": theme["ui-3"],
            "commandCenter.activeBackground": theme["ui-2"],
            "commandCenter.activeBorder": theme["ui-3"],
            "commandCenter.activeForeground": ui["active-states"],
            "commandCenter.background": theme["ui"],
            "commandCenter.border": theme["ui-3"],
            // "commandCenter.debuggingBackground": null,
            "commandCenter.foreground": ui["primary-text"],
            // "commandCenter.inactiveBorder": null,
            "commandCenter.inactiveForeground": ui["muted-text"],
            "dropdown.background": ui["secondary-background"],
            "dropdown.border": ui["active-borders"],
            "dropdown.foreground": ui["primary-text"],
            "dropdown.listBackground": ui["secondary-background"],
            "editor.background": ui["main-background"],
            "editorGroup.border": ui["borders"],
            "editorGroupHeader.border": ui["borders"],
            "editorGroupHeader.tabsBackground": ui["secondary-background"],
            "editorGroupHeader.tabsBorder": ui["borders"],
            "editorHoverWidget.background": theme["ui"],
            "editorHoverWidget.border": ui["borders"],
            "editorHoverWidget.foreground": ui["primary-text"],
            "editorHoverWidget.highlightForeground": ui["primary-text"],
            "editorHoverWidget.statusBarBackground": theme["ui-2"],
            "editorStickyScroll.background": ui["main-background"],
            "editorStickyScroll.border": ui["borders"],
            "editorStickyScroll.shadow": ui["shadow"],
            "editorStickyScrollHover.background": theme["transparent"],
            "editorWidget.background": theme["ui"],
            "editorWidget.border": ui["borders"],
            "editorWidget.foreground": ui["primary-text"],
            "editorWidget.resizeBorder": ui["borders"],
            "focusBorder": ui["active-states"],
            "foreground": ui["primary-text"],
            "icon.foreground": ui["muted-text"],
            "input.background": ui["secondary-background"],
            "input.border": ui["active-borders"],
            "input.foreground": ui["primary-text"],
            "input.placeholderForeground": ui["faint-text"],
            "list.hoverBackground": theme["ui-2"],
            "menu.background": ui["main-background"],
            "menu.border": ui["borders"],
            "menu.foreground": ui["primary-text"],
            "menu.selectionBackground": theme["ui-2"],
            // "menu.selectionBorder": null,
            "menu.selectionForeground": ui["primary-text"],
            "menu.separatorBackground": ui["borders"],
            "menubar.selectionBackground": theme["ui-2"],
            // "menubar.selectionBorder": null,
            "menubar.selectionForeground": ui["primary-text"],
            "panel.background": ui["secondary-background"],
            "panel.border": ui["borders"],
            // "panel.dropBorder": null,
            "panelInput.border": ui["active-borders"],
            "panelSection.border": ui["borders"],
            // "panelSection.dropBackground": null,
            "panelSectionHeader.background": ui["main-background"],
            "panelSectionHeader.border": ui["borders"],
            "panelSectionHeader.foreground": ui["primary-text"],
            "panelStickyScroll.background": ui["main-background"],
            "panelStickyScroll.border": ui["borders"],
            "panelStickyScroll.shadow": ui["shadow"],
            "panelTitle.activeBorder": ui["active-states"],
            "panelTitle.activeForeground": ui["primary-text"],
            "panelTitle.inactiveForeground": ui["muted-text"],
            "quickInput.background": ui["main-background"],
            "quickInput.foreground": ui["primary-text"],
            // Use quickInputList.focusBackground instead
            // "quickInput.list.focusBackground": ui["active-states"],
            "quickInputList.focusBackground": theme["ui-2"],
            "quickInputList.focusForeground": ui["primary-text"],
            "quickInputList.focusIconForeground": ui["primary-text"],
            "quickInputTitle.background": test,
            "sideBar.background": ui["secondary-background"],
            "sideBar.border": ui["borders"],
            "sideBar.foreground": ui["primary-text"],
            "sideBarSectionHeader.background": theme["ui"],
            "sideBarSectionHeader.border": ui["borders"],
            "sideBarSectionHeader.foreground": ui["primary-text"],
            "sideBarTitle.foreground": ui["primary-text"],
            "statusBar.background": ui["secondary-background"],
            "statusBar.border": ui["borders"],
            "statusBar.debuggingBackground": theme["cy2"],
            "statusBar.debuggingForeground": base["paper"],
            "statusBar.focusBorder": ui["active-states"],
            "statusBar.foreground": ui["primary-text"],
            "statusBar.noFolderBackground": ui["secondary-background"],
            "tab.activeBackground": ui["main-background"],
            "tab.activeBorder": ui["transparent"],
            "tab.activeBorderTop": ui["active-states"],
            "tab.activeForeground": ui["primary-text"],
            "tab.border": ui["borders"],
            "tab.hoverBackground": ui["main-background"],
            "tab.hoverBorder": ui["hovered-borders"],
            "tab.hoverForeground": ui["primary-text"],
            "tab.inactiveBackground": ui["transparent"],
            "tab.inactiveForeground": ui["muted-text"],
            "tab.lastPinnedBorder": test,
            "tab.selectedBackground": ui["main-background"],
            "tab.selectedBorderTop": ui["transparent"],
            "tab.selectedForeground": ui["muted-text"],
            "tab.unfocusedActiveBorder": ui["transparent"],
            "tab.unfocusedActiveBorderTop": ui["transparent"],
            "tab.unfocusedHoverBackground": ui["main-background"],
            "tab.unfocusedHoverBorder": ui["hovered-borders"],
            "tab.unfocusedHoverForeground": ui["primary-text"],
            "terminal.ansiBlack": terminal["black"],
            "terminal.ansiBlue": terminal["blue"],
            "terminal.ansiBrightBlack": terminal["brightBlack"],
            "terminal.ansiBrightBlue": terminal["brightBlue"],
            "terminal.ansiBrightCyan": terminal["brightCyan"],
            "terminal.ansiBrightGreen": terminal["brightGreen"],
            "terminal.ansiBrightMagenta": terminal["brightPurple"],
            "terminal.ansiBrightRed": terminal["brightRed"],
            "terminal.ansiBrightWhite": terminal["brightWhite"],
            "terminal.ansiBrightYellow": terminal["brightYellow"],
            "terminal.ansiCyan": terminal["cyan"],
            "terminal.ansiGreen": terminal["green"],
            "terminal.ansiMagenta": terminal["purple"],
            "terminal.ansiRed": terminal["red"],
            "terminal.ansiWhite": terminal["white"],
            "terminal.ansiYellow": terminal["yellow"],
            "terminal.background": ui["secondary-background"],
            "terminal.border": ui["borders"],
            "terminal.foreground": terminal["foreground"],
            "terminal.inactiveSelectionBackground": ui["hovered-borders"],
            "terminal.selectionBackground": terminal["selectionBackground"],
            "terminal.tab.activeBorder": ui["active-states"],
            "terminalCursor.background": terminal["background"],
            "terminalCursor.foreground": terminal["foreground"],
            "titleBar.activeBackground": ui["secondary-background"],
            "titleBar.activeForeground": ui["primary-text"],
            "titleBar.border": ui["borders"],
            "titleBar.inactiveBackground": ui["secondary-background"],
            "titleBar.inactiveForeground": ui["muted-text"],
            "welcomePage.background": ui["main-background"],
            "welcomePage.progress.background": theme["ui"],
            "welcomePage.progress.foreground": theme["ui-3"],
            "welcomePage.tileBackground": theme["ui"],
            "welcomePage.tileBorder": ui["borders"],
            "welcomePage.tileHoverBackground": theme["ui-2"],
            "widget.border": ui["borders"],
            "widget.shadow": ui["shadow"],
        },
        tokenColors: mode === "Dark" ? darkTokenColors() : lightTokenColors(),
        semanticHighlighting: true,
        // semanticTokenColors: {
        //     newOperator: syntax["operators"],
        //     stringLiteral: syntax["strings"],
        //     customLiteral: syntax["strings"],
        //     numberLiteral: syntax["numbers"],
        // },
    };
};

const outdir = {
    themes: resolve(import.meta.dirname, "..", "themes"),
    terminal: resolve(import.meta.dirname, "..", "terminal"),
};

await mkdir(outdir.themes, { recursive: true });

await Promise.all([
    writeFile(
        resolve(outdir.themes, "flexoki-dark-red-color-theme.json"),
        JSON.stringify(generateTheme("Dark", "Red"), null, 4),
    ),
    writeFile(
        resolve(outdir.themes, "flexoki-dark-orange-color-theme.json"),
        JSON.stringify(generateTheme("Dark", "Orange"), null, 4),
    ),
    writeFile(
        resolve(outdir.themes, "flexoki-dark-yellow-color-theme.json"),
        JSON.stringify(generateTheme("Dark", "Yellow"), null, 4),
    ),
    writeFile(
        resolve(outdir.themes, "flexoki-dark-green-color-theme.json"),
        JSON.stringify(generateTheme("Dark", "Green"), null, 4),
    ),
    writeFile(
        resolve(outdir.themes, "flexoki-dark-cyan-color-theme.json"),
        JSON.stringify(generateTheme("Dark", "Cyan"), null, 4),
    ),
    writeFile(
        resolve(outdir.themes, "flexoki-dark-blue-color-theme.json"),
        JSON.stringify(generateTheme("Dark", "Blue"), null, 4),
    ),
    writeFile(
        resolve(outdir.themes, "flexoki-dark-purple-color-theme.json"),
        JSON.stringify(generateTheme("Dark", "Purple"), null, 4),
    ),
    writeFile(
        resolve(outdir.themes, "flexoki-dark-magenta-color-theme.json"),
        JSON.stringify(generateTheme("Dark", "Magenta"), null, 4),
    ),
    writeFile(
        resolve(outdir.themes, "flexoki-light-red-color-theme.json"),
        JSON.stringify(generateTheme("Light", "Red"), null, 4),
    ),
    writeFile(
        resolve(outdir.themes, "flexoki-light-orange-color-theme.json"),
        JSON.stringify(generateTheme("Light", "Orange"), null, 4),
    ),
    writeFile(
        resolve(outdir.themes, "flexoki-light-yellow-color-theme.json"),
        JSON.stringify(generateTheme("Light", "Yellow"), null, 4),
    ),
    writeFile(
        resolve(outdir.themes, "flexoki-light-green-color-theme.json"),
        JSON.stringify(generateTheme("Light", "Green"), null, 4),
    ),
    writeFile(
        resolve(outdir.themes, "flexoki-light-cyan-color-theme.json"),
        JSON.stringify(generateTheme("Light", "Cyan"), null, 4),
    ),
    writeFile(
        resolve(outdir.themes, "flexoki-light-blue-color-theme.json"),
        JSON.stringify(generateTheme("Light", "Blue"), null, 4),
    ),
    writeFile(
        resolve(outdir.themes, "flexoki-light-purple-color-theme.json"),
        JSON.stringify(generateTheme("Light", "Purple"), null, 4),
    ),
    writeFile(
        resolve(outdir.themes, "flexoki-light-magenta-color-theme.json"),
        JSON.stringify(generateTheme("Light", "Magenta"), null, 4),
    ),
]);

await mkdir(outdir.terminal, { recursive: true });

await Promise.all([
    writeFile(
        resolve(outdir.terminal, "dark.json"),
        JSON.stringify(generateTerminal("Dark"), null, 4),
    ),
    writeFile(
        resolve(outdir.terminal, "light.json"),
        JSON.stringify(generateTerminal("Light"), null, 4),
    ),
]);
