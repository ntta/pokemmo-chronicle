# Quasar App (counter-pokemon)

Pokedex of PokeMMO

---
## Install the dependencies
```bash
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```

### Lint the files
```bash
npm run lint
```

### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).

---
## Sprite filename convention
### File location  
```
\src\statics\sprites
```
### Convention

| Type                                               | Convention                  | Example        |
| -------------------------------------------------- | --------------------------- | -------------- |
| No alternate form, no gender difference, non-shiny | nationalNumber-n-x.png      | 001-n-x.png    |
| No alternate form, no gender difference, shiny     | nationalNumber-s-x.png      | 001-s-x.png    |
| No alternate form, gender difference, non-shiny    | nationalNumber-n-gender.png | 593-n-male.png |
| No alternate form, gender difference, shiny        | nationalNumber-s-gender.png | 593-s-male.png |
| Alternate form, no gender difference, non-shiny    | nationalNumber-n-number.png | 479-n-1.png    |
| Alternate form, no gender difference, shiny        | nationalNumber-s-number.png | 479-s-1.png    |

It looks like there is no pokemon has both alternate form and gender difference.