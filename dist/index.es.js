let localizationDictionary = {};
/** setLocalizationDictionary sets the dictionary used for localization. */
const setLocalizationDictionary = (dictionary) => {
    localizationDictionary = dictionary;
};
/** localizeText translates the given text using the currentDictionary. */
const localizeText = (text) => {
    return localizationDictionary[text] || text;
};
/** localize is used by the lc 'tag' function. */
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
/** lc is the 'tag' function that localizes a tagged template literal. */
const lc = (strings, ...values) => {
    return localize(strings.raw, ...values);
};

export { lc, localizeText, setLocalizationDictionary };
