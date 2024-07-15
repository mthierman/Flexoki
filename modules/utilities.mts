import Color from "colorjs.io";

export const hex = <T extends Record<string, Color>>(colors: T): { [K in keyof T]: string } => {
    let newObj: Partial<{ [K in keyof T]: string }> = {};
    Object.entries(colors).forEach(([key, value]) => {
        newObj[key as keyof T] = value.toString({ format: "hex" });
    });
    return newObj as { [K in keyof T]: string };
};
