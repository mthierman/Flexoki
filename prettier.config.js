/** @type {import('prettier').Config} */

const config = {
    tabWidth: 4,
    bracketSameLine: true,
    overrides: [
        {
            files: ["*.yml", "*.yaml"],
            options: {
                tabWidth: 2,
            },
        },
    ],
};
export default config;
