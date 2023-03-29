import { assertEquals } from "https://deno.land/std@0.181.0/testing/asserts.ts";
import { lc, localizeText, setLocalizationDictionary } from "./index.js";

Deno.test("url test", () => {
    const url = new URL("./foo.js", "https://deno.land/");
    assertEquals(url.href, "https://deno.land/foo.js");
});

const greekDictionary = {
    Hello: "Γεια σας",
    "{0} notifications are available": "{0} ειδοποιήσεις είναι διαθέσιμες",
    "I can change order {0}": "{0} μπορώ να αλλάξω σειρά",
    "I have {0} boxes and {1} balls": "Έχω {0} κουτιά και {1} μπάλλες",
};

const germanDictionary = {
    Hello: "Hallo",
};

Deno.test("setLocalizationDictionary should change the localization language", () => {
    setLocalizationDictionary(greekDictionary);
    assertEquals(localizeText("Hello"), "Γεια σας");

    setLocalizationDictionary(germanDictionary);
    assertEquals(localizeText("Hello"), "Hallo");
});

Deno.test("localizeText should localize raw strings", () => {
    setLocalizationDictionary(greekDictionary);
    assertEquals(localizeText("Hello"), "Γεια σας");
});

Deno.test("localizeText should return the input if no localization is found", () => {
    setLocalizationDictionary(greekDictionary);
    assertEquals(localizeText("Not found"), "Not found");
});

Deno.test("localizeText should handle edge cases gracefully", () => {
    setLocalizationDictionary(greekDictionary);
    assertEquals(localizeText(""), "");
    assertEquals(localizeText(null), null);
});

Deno.test("lc tag should handle raw strings", () => {
    setLocalizationDictionary(greekDictionary);
    assertEquals(lc`Hello`, "Γεια σας");
});

Deno.test("lc tag should handle interpolated strings", () => {
    setLocalizationDictionary(greekDictionary);
    const count = 7;
    assertEquals(lc`${count} notifications are available`, "7 ειδοποιήσεις είναι διαθέσιμες");
    assertEquals(lc`I can change order ${count}`, `${count} μπορώ να αλλάξω σειρά`);

    const boxes = 3;
    const balls = 2;
    assertEquals(lc`I have ${boxes} boxes and ${balls} balls`, `Έχω ${boxes} κουτιά και ${balls} μπάλλες`);
});
