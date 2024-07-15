import Color from "colorjs.io";

export const colorToHex = (color: Color) => {
    return color.toString({ format: "hex" });
};

export const colorsToHex = <T extends Record<string, Color>>(
    colors: T,
): { [K in keyof T]: string } => {
    let newObj: Partial<{ [K in keyof T]: string }> = {};
    Object.entries(colors).forEach(([key, value]) => {
        newObj[key as keyof T] = colorToHex(value as Color);
    });
    return newObj as { [K in keyof T]: string };
};
