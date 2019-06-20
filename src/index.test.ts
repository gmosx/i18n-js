import { l10n, localizeText, setLocalizationDictionary } from "./index";

const greekDictionary = {
    "Hello": "Γεια σας",
    "{0} notifications are available": "{0} ειδοποιήσεις είναι διαθέσιμες",
    "I can change order {0}": "{0} μπορώ να αλλάξω σειρά",
    "I have {0} boxes and {1} balls": "Έχω {0} κουτιά και {1} μπάλλες",
}

test("localizeText should localize raw strings", () => {
    setLocalizationDictionary(greekDictionary)
    expect(localizeText("Hello")).toBe("Γεια σας")
})

test("localizeText should return the input if no localization is found", () => {
    setLocalizationDictionary(greekDictionary)
    expect(localizeText("Not found")).toBe("Not found")
})

test("localizeText should handle edge cases gracefully", () => {
    setLocalizationDictionary(greekDictionary)
    expect(localizeText("")).toBe("")
    expect(localizeText(null)).toBe(null)
})

test("l10n tag should handle raw strings", () => {
    setLocalizationDictionary(greekDictionary)
    expect(l10n`Hello`).toBe("Γεια σας")
})

test("l10n tag should handle interpolated strings", () => {
    setLocalizationDictionary(greekDictionary)
    const count = 7
    expect(l10n`${count} notifications are available`).toBe("7 ειδοποιήσεις είναι διαθέσιμες")
    expect(l10n`I can change order ${count}`).toBe(`${count} μπορώ να αλλάξω σειρά`)

    const boxes = 3
    const balls = 2
    expect(l10n`I have ${boxes} boxes and ${balls} balls`).toBe(`Έχω ${boxes} κουτιά και ${balls} μπάλλες`)
})
