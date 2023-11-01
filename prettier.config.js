/** @type {import('prettier').Config} */

export default {
    tabWidth: 4,
    bracketSameLine: true,
    quoteProps: "consistent",
    overrides: [
        {
            files: ["*.yml", "*.yaml"],
            options: {
                tabWidth: 2,
            },
        },
    ],
};
