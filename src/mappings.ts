import getColors from "./colors.js";

const getMappings = (name: string) => {
    let color = getColors(name);
    return {
        // UI
        main_bg: color.bg,
        secondary_bg: color.bg2,
        borders: color.ui,
        hovered_borders: color.ui2,
        active_borders: color.ui3,
        faint_text: color.tx3,
        muted_text: color.tx2,
        primary_text: color.tx,
        error_text: color.re,
        warning_text: color.or,
        success_text: color.gr,
        links_active_states: color.cy,

        // Syntax Highlighting
        comments: color.tx3,
        punctuation_operators: color.tx2,
        invalid_imports: color.re,
        functions: color.or,
        constants: color.ye,
        keywords: color.gr,
        strings: color.cy,
        variables_attributes: color.bl,
        numbers: color.pu,
        language_features: color.ma,
    };
};

export default getMappings;
