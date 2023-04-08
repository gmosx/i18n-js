/** @typedef {import("./index.d.ts").Dictionary} Dictionary */

/**
 * @type {Dictionary | null | undefined}
 */
let localizationDictionary;

/**
 * Sets the dictionary used for localization.
 *
 * @param {Dictionary | null | undefined} dictionary
 */
export const setLocalizationDictionary = (dictionary) => {
    localizationDictionary = dictionary;
};

/**
 * Translates the given text using the currentDictionary.
 *
 * @param {string} text
 * @returns {string}
 */
export const localizeText = (text) => {
    if (!localizationDictionary) {
        return text;
    }

    return localizationDictionary[text] ?? text;
};

/**
 * Used by the lc 'tag' function.
 *
 * @param {readonly string[]} strings
 * @param {any[]} values
 * @returns {string}
 */
const localize = (strings, ...values) => {
    let input;

    if (strings.length == 1) {
        return localizeText(strings[0]);
    }

    input = strings[0];

    for (let i = 1; i < strings.length; i++) {
        input += `{${i - 1}}${strings[i]}`;
    }

    const localizedTemplate = localizeText(input);

    return values.reduce((result, value, i) => result.replace(`{${i}}`, value), localizedTemplate);
};

/**
 * The 'tag' function that localizes a tagged template literal.
 *
 * @param {TemplateStringsArray} strings
 * @param {any[]} values
 * @returns {string}
 */
export const lc = (strings, ...values) => {
    return localize(strings.raw, ...values);
};
