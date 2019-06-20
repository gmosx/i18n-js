export let l10nDictionary: { [key: string]: string } = {}

/** localizeText translates the given text using the currentDictionary. */
export const localizeText = (text: string): string => {
    return l10nDictionary[text] || text
}

/** localize is the 'tag' function that translates a tagged template literal. */
export const localize = (strings: string[], ...values: any[]): string => {
    let input: string

    if (strings.length == 1) {
        return localizeText(strings[0])
    } else {
        let i = 0
        input = strings[i++]

        while (i < strings.length) {
            input += `{${i - 1}}${strings[i++]}`
        }

        const template = localizeText(input)

        return values.reduce(
            (result, value, i) => result.replace(`{${i}}`, value),
            template,
        )
    }
}
