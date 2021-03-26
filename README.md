# third.goldcomparts.show

- [How to update biography](https://github.com/aubergene/2020.goldcomparts.show/blob/master/HOW_TO_UPDATE.md)

## Getting started

Ensure you have Node 12.6.0 installed, if you don't have Node installed I recommend using [nvm](https://github.com/nvm-sh/nvm), once you have nvm install you should be able to run `nvm install` from the root of this project.

You'll then need to install the node modules (library files) for this project by running `npm install`

### Running the project

```bash
npm run dev
```

### Data

Data which generates the site is in the `data` folder and is mostly `.tsv` (tab separated values) which can opened in many spreadsheet programs such as Google Sheets and LibreOffice (avoid Excel it has issues). It also uses Markdown files for longer text such as biography.

## Production mode and deployment

This will export the site to `public` and then commit it to the `gh-pages` and push to Github

```bash
npm run deploy
```

The url is https://third.goldcomparts.show
