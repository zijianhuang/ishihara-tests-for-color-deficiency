## Fonts

Follow the suggestion @ https://stackoverflow.com/questions/15930003/downloading-a-google-font-and-setting-up-an-offline-site-that-uses-it by Marco Kerwitz and use [google webfonts helper](https://google-webfonts-helper.herokuapp.com/fonts).

1. Select a font desired.
2. Download the zip file.
3. Copy the files to a folder under "fonts".
4. Copy the generated CSS scripts to `fonts.css` as referenced in index.html
5. Change respective CSS class with the new font name.
`<link rel="stylesheet" href="fonts.css">` and this CSS is not included in `angular.json` while those in [styles] are all compiled into styles.css during ng build.


Examples:

```css
/* roboto-regular - latin */
@font-face {
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 400;
	src: local(''), url('assets/fonts/roboto-v30-latin/roboto-v30-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
	url('assets/fonts/') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
```

KaiShu Simplified Chinese, stored in `PoemsCollection/Design/fonts/`
```css
/* ma-shan-zheng-regular - latin_chinese-simplified */
@font-face {
  font-family: 'Ma Shan Zheng';
  font-style: normal;
  font-weight: 400;
  src: local(''),
	   url('assets/fonts/ma-shan-zheng-v10-latin_chinese-simplified/ma-shan-zheng-v10-latin_chinese-simplified-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
	   url('assets/fonts/ma-shan-zheng-v10-latin_chinese-simplified/ma-shan-zheng-v10-latin_chinese-simplified-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
```

For static readonly deployment, I may just alter `fonts.css` and copy respective fonts.

**Remarks**

However, KaiShu is not looking good on PC computer screen.

And Chinese fonts have a lot problems in Web usages, as described at https://blog.user.today/chinese-webfont-note/


## Prebuilt Angular Material Theme

Referenced in `angular.json` to "./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css", and `ng build` will combined it into `styles.less` then `styles.css` and inject to `index.html`.

## Material Symbols

Import through `@import "@fontsource/material-symbols-outlined/400.css";` in styles.css, for 400 only. `ng build` will copy the referenced files to folder "media" after adding hash to filename: 
1. "material-symbols-outlined-latin-400-normal-hash1.woff"
2. "material-symbols-outlined-latin-400-normal-hash2.woff2".

Fine tune after deployment could be done through adjust `fonts.css` with `.material-symbols-outlined`.

