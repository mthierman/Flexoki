import Color from "colorjs.io";

export const hex = <T extends Record<string, Color>>(colors: T) => {
    return Object.fromEntries(
        Object.entries(colors).map(([key, value]) => [key, value.toString({ format: "hex" })]),
    ) as Record<keyof T, string>;
};
