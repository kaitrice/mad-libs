import { isValidAge } from "./index.js";
import { storyModel } from "../../models/index.js";

const isValidTheme = (theme) => {
    /**
     * ✔ trim white space
     * check for special characters (i.e coding syntax and patterns)
     */
    if (!theme.trim()) throw new Error(
        "Theme required."
    );
    return true;
}

export default function validateStory(params) {
    console.log(params);
    const result = storyModel.parse(params);
    const age = result.age;
    const theme = result.theme;
    try {
        if (age && !isValidAge(age)) return result.error;
        if (theme && !isValidTheme(theme)) return result.error;
    
        return {
            age,
            theme
        };
    } catch (error) {
        throw error;
    }
}