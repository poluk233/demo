export default {
    plugins: {
        tailwindcss: {},
        autoprefixer: {
            overrideBrowserslist: ["Last 10 Versions"],
            grid: true,
        },
        "postcss-pxtorem": {
            rootValue: 16,
            propList: ["*"],
        },
    },
};
