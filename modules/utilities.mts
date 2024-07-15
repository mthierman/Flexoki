import Color from "colorjs.io";

export const colorToHex = (color: Color) => {
    return color.toString({ format: "hex" });
};

export const colorsToHex = (colors: Record<string, Color>) => {
    let newObj: { [key: string]: string } = {};
    Object.entries(colors).forEach(([key, value]) => {
        newObj[key] = colorToHex(value as Color);
    });
    return newObj as Record<keyof typeof colors, string>;
};
