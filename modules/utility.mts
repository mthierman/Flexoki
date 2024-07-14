import Color from "colorjs.io";

export const colorToHex = (color: Color) => {
    return color.toString({ format: "hex" });
};

export const colorsToHex = (colors: Record<string, Color | string>) => {
    Object.entries(colors).forEach(([key, value]: [string, Color | string]) => {
        colors[key] = colorToHex(value as Color);
    });
    return colors;
};
