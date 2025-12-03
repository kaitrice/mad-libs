import storyValidator from './story.validate.js';
import themeValidator from './theme.validate.js';

const isValidAge = (age) => {
    /**
     * ✔ integer only
     * ✔ check age range
     */
    if (typeof age !== 'number' ||
        Number.isInteger(age)
    ) throw new Error(
        "Age must be an integer."
    );
    
    if (age < 0 ||
        age > 105
    ) throw new Error(
        "Invalid age."
    );

    return true;
}

export {
    isValidAge,
    storyValidator,
    themeValidator
};