# Color Deficiency Test with Ishihara Plates

This repository hosts the following:
1. Mirror of 38 digitalized Ishihara plates created by Martin Krzywinski / Genome Sciences Centre (BCGSC, Canada) on /svg_sources/ .
2. Generated Ishihara-inspired pates on /SVG_Plates/ .
3. Backup hosting of "Ishihara Color Blind Test", through https://zijianhuang.github.io/ishihara-tests-for-color-deficiency/ for the official Web App on https://colorblindtest.fonlow.org/


## "Ishihara Color Blind Test" app
Native mobile apps are available for the better User Experience when using the app:
<p><a href="https://play.google.com/store/apps/details?id=com.fonlow.colorblindtest" target="_blank" style="color: rgb(13, 110, 253);"><img alt="Get it on Google Play" src="https://play.google.com/intl/en_us/badges/images/badge_new.png"></a></p>

<p><a href="https://apps.apple.com/au/app/ishihara-color-blind-test/id6772382532?ign-itscg=30200&amp;ign-itsct=apps_box_badge" target="_blank" style="color: rgb(13, 110, 253); display: inline-block; overflow: hidden; border-radius: 13px; width: 125px; height: 41.5px;"><img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=125x41.5&amp;releaseDate=1543449600" alt="Download on the App Store" style="height: 41.5px; border-radius: 13px; width: 125px;"></a></p>

<a href="https://get.microsoft.com/installer/download/9n1v94f3pkxp?referrer=appbadge" target="_self">
	<img src="https://get.microsoft.com/images/en-us%20light.svg" width="200">
</a>
<p> </p>

Remarks:
* "Ishihara Color Blind Test" is a static site [Progressive Web App](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps) based on Web app for pattern recognition questionnaire that Zijian has developed, with additional feature for checking color vision deficiency. The content of questionnaire may be created through a series of free tools plus some PowerShell or Bash scripts.
* And those in folder "SVG_Plates" may be used for trialing of new test contents. 


Other generators:
1. https://connorboyle.io/ishihara/

# Visual Identification Test

"Ishihara Color Blind Test" was initially developed for the specific needs of color vision deficiency test, however the architectural design is basically a config-driven (JSON-driven)  quiz engine. Therefore, it can be used for any graphical quiz content without code changes, and the content authors just need to compose JSON contents.

Searching "quiz app" or "quiz engine" you will find many commercial / free / open sourced solutions. 

Most of them are textural based and assume binary correctness. And this app supports:
* non-binary evaluation
* diagnostic interpretation (Ishihara patterns)
* The answer buttons could be textural or graphical.
* The editing of JSON content is through an advanced text editor like Visual Studio Code plus JSON Schema.

And if your quiz content is basically graphical, for either binary correctness or non-binary evaluation, the app may be an option.


