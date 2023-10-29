import getColors from "./colors.js";

const getMappings = (theme: string, color: string) => {
    let colors = getColors(theme, color);

    const mappings = {
        // UI
        main_bg: colors.bg,
        secondary_bg: colors.bg2,
        borders: colors.ui,
        hovered_borders: colors.ui2,
        active_borders: colors.ui3,
        faint_text: colors.tx3,
        muted_text: colors.tx2,
        primary_text: colors.tx,
        error_text: colors.re,
        warning_text: colors.or,
        success_text: colors.gr,
        links_active_states: colors.cy,

        // Syntax Highlighting
        comments: colors.tx3,
        punctuation_operators: colors.tx2,
        invalid_imports: colors.re,
        functions: colors.or,
        constants: colors.ye,
        keywords: colors.gr,
        strings: colors.cy,
        variables_attributes: colors.bl,
        numbers: colors.pu,
        language_features: colors.ma,
    };

    return {
        ...colors,
        ...mappings,
    };
};

export default getMappings;
