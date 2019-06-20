import { l10nDictionary, localizeText } from "./index";

test("localizeText should localize simple strings", () => {
    l10nDictionary["Hello"] = "Γεια σας"
    expect(localizeText("Hello")).toBe("Γεια σας")
})
