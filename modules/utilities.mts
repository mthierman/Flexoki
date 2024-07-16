import Color from "colorjs.io";

export const toHex = (color: Color) => {
    return color.toString({ format: "hex" });
};

export const colorsToHex = <T extends Record<string, Color>>(colors: T) => {
    return Object.fromEntries(
        Object.entries(colors).map(([key, value]) => [key, toHex(value)]),
    ) as Record<keyof T, string>;
};

export const transparent = (color: Color, alpha: number) => {
    const clone = color.clone();
    clone.alpha = alpha;
    return clone;
};
