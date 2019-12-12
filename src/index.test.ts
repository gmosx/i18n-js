import { lc, localizeText, setLocalizationDictionary } from "./index";

const greekDictionary = {
    Hello: "Γεια σας",
    "{0} notifications are available": "{0} ειδοποιήσεις είναι διαθέσιμες",
    "I can change order {0}": "{0} μπορώ να αλλάξω σειρά",
    "I have {0} boxes and {1} balls": "Έχω {0} κουτιά και {1} μπάλλες",
};

const germanDictionary = {
    Hello: "Hallo",
};

test("setLocalizationDictionary should change the localization language", () => {
    setLocalizationDictionary(greekDictionary);
    expect(localizeText("Hello")).toBe("Γεια σας");

    setLocalizationDictionary(germanDictionary);
    expect(localizeText("Hello")).toBe("Hallo");
});

test("localizeText should localize raw strings", () => {
    setLocalizationDictionary(greekDictionary);
    expect(localizeText("Hello")).toBe("Γεια σας");
});

test("localizeText should return the input if no localization is found", () => {
    setLocalizationDictionary(greekDictionary);
    expect(localizeText("Not found")).toBe("Not found");
});

test("localizeText should handle edge cases gracefully", () => {
    setLocalizationDictionary(greekDictionary);
    expect(localizeText("")).toBe("");
    expect(localizeText(null)).toBe(null);
});

test("lc tag should handle raw strings", () => {
    setLocalizationDictionary(greekDictionary);
    expect(lc`Hello`).toBe("Γεια σας");
});

test("lc tag should handle interpolated strings", () => {
    setLocalizationDictionary(greekDictionary);
    const count = 7;
    expect(lc`${count} notifications are available`).toBe("7 ειδοποιήσεις είναι διαθέσιμες");
    expect(lc`I can change order ${count}`).toBe(`${count} μπορώ να αλλάξω σειρά`);

    const boxes = 3;
    const balls = 2;
    expect(lc`I have ${boxes} boxes and ${balls} balls`).toBe(`Έχω ${boxes} κουτιά και ${balls} μπάλλες`);
});
