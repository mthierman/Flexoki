import Color from "colorjs.io";

export const hex = <T extends Record<string, Color>>(colors: T) => {
    let newObj: Partial<Record<keyof T, string>> = {};
    Object.entries(colors).forEach(([key, value]) => {
        newObj[key as keyof T] = value.toString({ format: "hex" });
    });
    return newObj as Record<keyof T, string>;
};
