interface Dictionary {
    [key: string]: string;
}
/** setLocalizationDictionary sets the dictionary used for localization. */
export declare const setLocalizationDictionary: (dictionary: Dictionary) => void;
/** localizeText translates the given text using the currentDictionary. */
export declare const localizeText: (text: string) => string;
/** lc is the 'tag' function that localizes a tagged template literal. */
export declare const lc: (strings: TemplateStringsArray, ...values: any[]) => string;
export {};
