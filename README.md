# I18N

`I18N` is a JavaScript internationalization library. It leverages `tagged template literals` to provide an intuitive interface.

## Features

* Uses the english text as the lookup key
* Supports interpolated strings
* Supports reordering of template parameters

## Example

```ts
const greekDictionary = {
    "Hello": "Γεια σας",
    "{0} notifications are available": "{0} ειδοποιήσεις είναι διαθέσιμες",
    "I can change order {0}": "{0} μπορώ να αλλάξω σειρά",
    "I have {0} boxes and {1} balls": "Έχω {0} κουτιά και {1} μπάλλες",
}

setLocalizationDictionary(greekDictionary)

lc`Hello` // => "Γεια σας"
const count = 7
lc`${count} notifications are available` // => "7 ειδοποιήσεις είναι διαθέσιμες"
lc`I can change order ${count}` // => "7 μπορώ να αλλάξω σειρά"

const boxes = 3
const balls = 2
lc`I have ${boxes} boxes and ${balls} balls`) // => "Έχω 3 κουτιά και 2 μπάλλες"

```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. Please make sure to update tests as appropriate.

## Contact

[@gmosx](https://twitter.com/gmosx) on Twitter.

## License

MIT, see [LICENSE](./LICENSE) file for details.

Copyright © 2019 George Moschovitis.
