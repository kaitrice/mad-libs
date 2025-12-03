import { isValidAge } from "./index.js";
import { themeModel } from "../../models/index.js";

const isValidBody = (body) => {
    try {
        const validBody = JSON.parse(body);
        if (typeof validBody !== 'object' ||
            !Array.isArray(validBody)
        ) throw new Error(
            "Invalid syntax: body"
        );
        return true;
    } catch (error) {
        throw error;
    }
}

export default function validateTheme(params, body) {
    console.log(params);
    console.log(body);
    const result = themeModel.parse(params);
    const age = result.age;
    try {
        body && isValidBody();
        if (age && !isValidAge(age)) return result.error;
    
        return {
            age,
            body
        };
    } catch (error) {
        throw error;
    }
}