interface Dictionary {
    [key: string]: string
}

let localizationDictionary: Dictionary = {}

/** setLocalizationDictionary sets the dictionary used for localization. */
export const setLocalizationDictionary = (dictionary: Dictionary) => {
    localizationDictionary = dictionary
}

/** localizeText translates the given text using the currentDictionary. */
export const localizeText = (text: string): string => {
    return localizationDictionary[text] || text
}

/** localize is used by the lc 'tag' function. */
const localize = (strings: readonly string[], ...values: any[]): string => {
    let input: string

    if (strings.length == 1) {
        return localizeText(strings[0])
    }

    input = strings[0]

    for (let i = 1; i < strings.length; i++) {
        input += `{${i - 1}}${strings[i]}`
    }

    const localizedTemplate = localizeText(input)

    return values.reduce(
        (result, value, i) => result.replace(`{${i}}`, value),
        localizedTemplate,
    )
}

/** lc is the 'tag' function that localizes a tagged template literal. */
export const lc = (strings: TemplateStringsArray, ...values: any[]): string => {
    return localize(strings.raw, ...values)
}
