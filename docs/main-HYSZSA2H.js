var VO=Object.create;var Jp=Object.defineProperty,jO=Object.defineProperties,UO=Object.getOwnPropertyDescriptor,HO=Object.getOwnPropertyDescriptors,zO=Object.getOwnPropertyNames,xu=Object.getOwnPropertySymbols,$O=Object.getPrototypeOf,eg=Object.prototype.hasOwnProperty,LC=Object.prototype.propertyIsEnumerable;var FC=(t,n,e)=>n in t?Jp(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,_=(t,n)=>{for(var e in n||={})eg.call(n,e)&&FC(t,e,n[e]);if(xu)for(var e of xu(n))LC.call(n,e)&&FC(t,e,n[e]);return t},te=(t,n)=>jO(t,HO(n));var Eu=(t,n)=>{var e={};for(var i in t)eg.call(t,i)&&n.indexOf(i)<0&&(e[i]=t[i]);if(t!=null&&xu)for(var i of xu(t))n.indexOf(i)<0&&LC.call(t,i)&&(e[i]=t[i]);return e};var WO=(t,n)=>()=>(n||t((n={exports:{}}).exports,n),n.exports);var GO=(t,n,e,i)=>{if(n&&typeof n=="object"||typeof n=="function")for(let r of zO(n))!eg.call(t,r)&&r!==e&&Jp(t,r,{get:()=>n[r],enumerable:!(i=UO(n,r))||i.enumerable});return t};var BC=(t,n,e)=>(e=t!=null?VO($O(t)):{},GO(n||!t||!t.__esModule?Jp(e,"default",{value:t,enumerable:!0}):e,t));var DC=WO((Up,_u)=>{"use strict";(function(){"use strict";var t={function:!0,object:!0},n=t[typeof window]&&window||this,e=n,i=t[typeof Up]&&Up,r=t[typeof _u]&&_u&&!_u.nodeType&&_u,o=i&&r&&typeof global=="object"&&global;o&&(o.global===o||o.window===o||o.self===o)&&(n=o);var a=Math.pow(2,53)-1,s=/\bOpera/,l=this,c=Object.prototype,d=c.hasOwnProperty,m=c.toString;function f(x){return x=String(x),x.charAt(0).toUpperCase()+x.slice(1)}function h(x,Ee,Ve){var zt={"10.0":"10","6.4":"10 Technical Preview","6.3":"8.1","6.2":"8","6.1":"Server 2008 R2 / 7","6.0":"Server 2008 / Vista","5.2":"Server 2003 / XP 64-bit","5.1":"XP","5.01":"2000 SP1","5.0":"2000","4.0":"NT","4.90":"ME"};return Ee&&Ve&&/^Win/i.test(x)&&!/^Windows Phone /i.test(x)&&(zt=zt[/[\d.]+$/.exec(x)])&&(x="Windows "+zt),x=String(x),Ee&&Ve&&(x=x.replace(RegExp(Ee,"i"),Ve)),x=D(x.replace(/ ce$/i," CE").replace(/\bhpw/i,"web").replace(/\bMacintosh\b/,"Mac OS").replace(/_PowerPC\b/i," OS").replace(/\b(OS X) [^ \d]+/i,"$1").replace(/\bMac (OS X)\b/,"$1").replace(/\/(\d)/," $1").replace(/_/g,".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i,"").replace(/\bx86\.64\b/gi,"x86_64").replace(/\b(Windows Phone) OS\b/,"$1").replace(/\b(Chrome OS \w+) [\d.]+\b/,"$1").split(" on ")[0]),x}function b(x,Ee){var Ve=-1,zt=x?x.length:0;if(typeof zt=="number"&&zt>-1&&zt<=a)for(;++Ve<zt;)Ee(x[Ve],Ve,x);else S(x,Ee)}function D(x){return x=Yt(x),/^(?:webOS|i(?:OS|P))/.test(x)?x:f(x)}function S(x,Ee){for(var Ve in x)d.call(x,Ve)&&Ee(x[Ve],Ve,x)}function k(x){return x==null?f(x):m.call(x).slice(8,-1)}function _e(x,Ee){var Ve=x!=null?typeof x[Ee]:"number";return!/^(?:boolean|number|string|undefined)$/.test(Ve)&&(Ve=="object"?!!x[Ee]:!0)}function Pe(x){return String(x).replace(/([ -])(?!$)/g,"$1?")}function Ue(x,Ee){var Ve=null;return b(x,function(zt,vu){Ve=Ee(Ve,zt,vu,x)}),Ve}function Yt(x){return String(x).replace(/^ +| +$/g,"")}function tn(x){var Ee=n,Ve=x&&typeof x=="object"&&k(x)!="String";Ve&&(Ee=x,x=null);var zt=Ee.navigator||{},vu=zt.userAgent||"";x||(x=vu);var d4=Ve||l==e,MO=Ve?!!zt.likeChrome:/\bChrome\b/.test(x)&&!/internal|\n/i.test(m.toString()),Qp="Object",SO=Ve?Qp:"ScriptBridgingProxyObject",IO=Ve?Qp:"Environment",TO=Ve&&Ee.java?"JavaPackage":k(Ee.java),kO=Ve?Qp:"RuntimeObject",Zl=/\bJava/.test(TO)&&Ee.java,OO=Zl&&k(Ee.environment)==IO,RO=Zl?"a":"\u03B1",AO=Zl?"b":"\u03B2",Xp=Ee.document||{},eo=Ee.operamini||Ee.opera,yu=s.test(yu=Ve&&eo?eo["[[Class]]"]:k(eo))?yu:eo=null,y,Cu=x,Le=[],wu=null,to=x==vu,ie=to&&eo&&typeof eo.version=="function"&&eo.version(),Kp,We=NO([{label:"EdgeHTML",pattern:"Edge"},"Trident",{label:"WebKit",pattern:"AppleWebKit"},"iCab","Presto","NetFront","Tasman","KHTML","Gecko"]),N=FO(["Adobe AIR","Arora","Avant Browser","Breach","Camino","Electron","Epiphany","Fennec","Flock","Galeon","GreenBrowser","iCab","Iceweasel","K-Meleon","Konqueror","Lunascape","Maxthon",{label:"Microsoft Edge",pattern:"(?:Edge|Edg|EdgA|EdgiOS)"},"Midori","Nook Browser","PaleMoon","PhantomJS","Raven","Rekonq","RockMelt",{label:"Samsung Internet",pattern:"SamsungBrowser"},"SeaMonkey",{label:"Silk",pattern:"(?:Cloud9|Silk-Accelerated)"},"Sleipnir","SlimBrowser",{label:"SRWare Iron",pattern:"Iron"},"Sunrise","Swiftfox","Vivaldi","Waterfox","WebPositive",{label:"Yandex Browser",pattern:"YaBrowser"},{label:"UC Browser",pattern:"UCBrowser"},"Opera Mini",{label:"Opera Mini",pattern:"OPiOS"},"Opera",{label:"Opera",pattern:"OPR"},"Chromium","Chrome",{label:"Chrome",pattern:"(?:HeadlessChrome)"},{label:"Chrome Mobile",pattern:"(?:CriOS|CrMo)"},{label:"Firefox",pattern:"(?:Firefox|Minefield)"},{label:"Firefox for iOS",pattern:"FxiOS"},{label:"IE",pattern:"IEMobile"},{label:"IE",pattern:"MSIE"},"Safari"]),Oe=NC([{label:"BlackBerry",pattern:"BB10"},"BlackBerry",{label:"Galaxy S",pattern:"GT-I9000"},{label:"Galaxy S2",pattern:"GT-I9100"},{label:"Galaxy S3",pattern:"GT-I9300"},{label:"Galaxy S4",pattern:"GT-I9500"},{label:"Galaxy S5",pattern:"SM-G900"},{label:"Galaxy S6",pattern:"SM-G920"},{label:"Galaxy S6 Edge",pattern:"SM-G925"},{label:"Galaxy S7",pattern:"SM-G930"},{label:"Galaxy S7 Edge",pattern:"SM-G935"},"Google TV","Lumia","iPad","iPod","iPhone","Kindle",{label:"Kindle Fire",pattern:"(?:Cloud9|Silk-Accelerated)"},"Nexus","Nook","PlayBook","PlayStation Vita","PlayStation","TouchPad","Transformer",{label:"Wii U",pattern:"WiiU"},"Wii","Xbox One",{label:"Xbox 360",pattern:"Xbox"},"Xoom"]),$t=PO({Apple:{iPad:1,iPhone:1,iPod:1},Alcatel:{},Archos:{},Amazon:{Kindle:1,"Kindle Fire":1},Asus:{Transformer:1},"Barnes & Noble":{Nook:1},BlackBerry:{PlayBook:1},Google:{"Google TV":1,Nexus:1},HP:{TouchPad:1},HTC:{},Huawei:{},Lenovo:{},LG:{},Microsoft:{Xbox:1,"Xbox One":1},Motorola:{Xoom:1},Nintendo:{"Wii U":1,Wii:1},Nokia:{Lumia:1},Oppo:{},Samsung:{"Galaxy S":1,"Galaxy S2":1,"Galaxy S3":1,"Galaxy S4":1},Sony:{PlayStation:1,"PlayStation Vita":1},Xiaomi:{Mi:1,Redmi:1}}),z=LO(["Windows Phone","KaiOS","Android","CentOS",{label:"Chrome OS",pattern:"CrOS"},"Debian",{label:"DragonFly BSD",pattern:"DragonFly"},"Fedora","FreeBSD","Gentoo","Haiku","Kubuntu","Linux Mint","OpenBSD","Red Hat","SuSE","Ubuntu","Xubuntu","Cygwin","Symbian OS","hpwOS","webOS ","webOS","Tablet OS","Tizen","Linux","Mac OS X","Macintosh","Mac","Windows 98;","Windows "]);function NO(nn){return Ue(nn,function(ut,Ge){return ut||RegExp("\\b"+(Ge.pattern||Pe(Ge))+"\\b","i").exec(x)&&(Ge.label||Ge)})}function PO(nn){return Ue(nn,function(ut,Ge,ui){return ut||(Ge[Oe]||Ge[/^[a-z]+(?: +[a-z]+\b)*/i.exec(Oe)]||RegExp("\\b"+Pe(ui)+"(?:\\b|\\w*\\d)","i").exec(x))&&ui})}function FO(nn){return Ue(nn,function(ut,Ge){return ut||RegExp("\\b"+(Ge.pattern||Pe(Ge))+"\\b","i").exec(x)&&(Ge.label||Ge)})}function LO(nn){return Ue(nn,function(ut,Ge){var ui=Ge.pattern||Pe(Ge);return!ut&&(ut=RegExp("\\b"+ui+"(?:/[\\d.]+|[ \\w.]*)","i").exec(x))&&(ut=h(ut,ui,Ge.label||Ge)),ut})}function NC(nn){return Ue(nn,function(ut,Ge){var ui=Ge.pattern||Pe(Ge);return!ut&&(ut=RegExp("\\b"+ui+" *\\d+[.\\w_]*","i").exec(x)||RegExp("\\b"+ui+" *\\w+-[\\w]*","i").exec(x)||RegExp("\\b"+ui+"(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)","i").exec(x))&&((ut=String(Ge.label&&!RegExp(ui,"i").test(Ge.label)?Ge.label:ut).split("/"))[1]&&!/[\d.]+/.test(ut[0])&&(ut[0]+=" "+ut[1]),Ge=Ge.label||Ge,ut=D(ut[0].replace(RegExp(ui,"i"),Ge).replace(RegExp("; *(?:"+Ge+"[_-])?","i")," ").replace(RegExp("("+Ge+")[-_.]?(\\w)","i"),"$1 $2"))),ut})}function PC(nn){return Ue(nn,function(ut,Ge){return ut||(RegExp(Ge+"(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)","i").exec(x)||0)[1]||null})}function BO(){return this.description||""}if(We&&(We=[We]),/\bAndroid\b/.test(z)&&!Oe&&(y=/\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i.exec(x))&&(Oe=Yt(y[1]).replace(/^[a-z]{2}-[a-z]{2};\s*/i,"")||null),$t&&!Oe?Oe=NC([$t]):$t&&Oe&&(Oe=Oe.replace(RegExp("^("+Pe($t)+")[-_.\\s]","i"),$t+" ").replace(RegExp("^("+Pe($t)+")[-_.]?(\\w)","i"),$t+" $2")),(y=/\bGoogle TV\b/.exec(Oe))&&(Oe=y[0]),/\bSimulator\b/i.test(x)&&(Oe=(Oe?Oe+" ":"")+"Simulator"),N=="Opera Mini"&&/\bOPiOS\b/.test(x)&&Le.push("running in Turbo/Uncompressed mode"),N=="IE"&&/\blike iPhone OS\b/.test(x)?(y=tn(x.replace(/like iPhone OS/,"")),$t=y.manufacturer,Oe=y.product):/^iP/.test(Oe)?(N||(N="Safari"),z="iOS"+((y=/ OS ([\d_]+)/i.exec(x))?" "+y[1].replace(/_/g,"."):"")):N=="Konqueror"&&/^Linux\b/i.test(z)?z="Kubuntu":$t&&$t!="Google"&&(/Chrome/.test(N)&&!/\bMobile Safari\b/i.test(x)||/\bVita\b/.test(Oe))||/\bAndroid\b/.test(z)&&/^Chrome/.test(N)&&/\bVersion\//i.test(x)?(N="Android Browser",z=/\bAndroid\b/.test(z)?z:"Android"):N=="Silk"?(/\bMobi/i.test(x)||(z="Android",Le.unshift("desktop mode")),/Accelerated *= *true/i.test(x)&&Le.unshift("accelerated")):N=="UC Browser"&&/\bUCWEB\b/.test(x)?Le.push("speed mode"):N=="PaleMoon"&&(y=/\bFirefox\/([\d.]+)\b/.exec(x))?Le.push("identifying as Firefox "+y[1]):N=="Firefox"&&(y=/\b(Mobile|Tablet|TV)\b/i.exec(x))?(z||(z="Firefox OS"),Oe||(Oe=y[1])):!N||(y=!/\bMinefield\b/i.test(x)&&/\b(?:Firefox|Safari)\b/.exec(N))?(N&&!Oe&&/[\/,]|^[^(]+?\)/.test(x.slice(x.indexOf(y+"/")+8))&&(N=null),(y=Oe||$t||z)&&(Oe||$t||/\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(z))&&(N=/[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(z)?z:y)+" Browser")):N=="Electron"&&(y=(/\bChrome\/([\d.]+)\b/.exec(x)||0)[1])&&Le.push("Chromium "+y),ie||(ie=PC(["(?:Cloud9|CriOS|CrMo|Edge|Edg|EdgA|EdgiOS|FxiOS|HeadlessChrome|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$)|UCBrowser|YaBrowser)","Version",Pe(N),"(?:Firefox|Minefield|NetFront)"])),(y=We=="iCab"&&parseFloat(ie)>3&&"WebKit"||/\bOpera\b/.test(N)&&(/\bOPR\b/.test(x)?"Blink":"Presto")||/\b(?:Midori|Nook|Safari)\b/i.test(x)&&!/^(?:Trident|EdgeHTML)$/.test(We)&&"WebKit"||!We&&/\bMSIE\b/i.test(x)&&(z=="Mac OS"?"Tasman":"Trident")||We=="WebKit"&&/\bPlayStation\b(?! Vita\b)/i.test(N)&&"NetFront")&&(We=[y]),N=="IE"&&(y=(/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(x)||0)[1])?(N+=" Mobile",z="Windows Phone "+(/\+$/.test(y)?y:y+".x"),Le.unshift("desktop mode")):/\bWPDesktop\b/i.test(x)?(N="IE Mobile",z="Windows Phone 8.x",Le.unshift("desktop mode"),ie||(ie=(/\brv:([\d.]+)/.exec(x)||0)[1])):N!="IE"&&We=="Trident"&&(y=/\brv:([\d.]+)/.exec(x))&&(N&&Le.push("identifying as "+N+(ie?" "+ie:"")),N="IE",ie=y[1]),to){if(_e(Ee,"global"))if(Zl&&(y=Zl.lang.System,Cu=y.getProperty("os.arch"),z=z||y.getProperty("os.name")+" "+y.getProperty("os.version")),OO){try{ie=Ee.require("ringo/engine").version.join("."),N="RingoJS"}catch{(y=Ee.system)&&y.global.system==Ee.system&&(N="Narwhal",z||(z=y[0].os||null))}N||(N="Rhino")}else typeof Ee.process=="object"&&!Ee.process.browser&&(y=Ee.process)&&(typeof y.versions=="object"&&(typeof y.versions.electron=="string"?(Le.push("Node "+y.versions.node),N="Electron",ie=y.versions.electron):typeof y.versions.nw=="string"&&(Le.push("Chromium "+ie,"Node "+y.versions.node),N="NW.js",ie=y.versions.nw)),N||(N="Node.js",Cu=y.arch,z=y.platform,ie=/[\d.]+/.exec(y.version),ie=ie?ie[0]:null));else k(y=Ee.runtime)==SO?(N="Adobe AIR",z=y.flash.system.Capabilities.os):k(y=Ee.phantom)==kO?(N="PhantomJS",ie=(y=y.version||null)&&y.major+"."+y.minor+"."+y.patch):typeof Xp.documentMode=="number"&&(y=/\bTrident\/(\d+)/i.exec(x))?(ie=[ie,Xp.documentMode],(y=+y[1]+4)!=ie[1]&&(Le.push("IE "+ie[1]+" mode"),We&&(We[1]=""),ie[1]=y),ie=N=="IE"?String(ie[1].toFixed(1)):ie[0]):typeof Xp.documentMode=="number"&&/^(?:Chrome|Firefox)\b/.test(N)&&(Le.push("masking as "+N+" "+ie),N="IE",ie="11.0",We=["Trident"],z="Windows");z=z&&D(z)}if(ie&&(y=/(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(ie)||/(?:alpha|beta)(?: ?\d)?/i.exec(x+";"+(to&&zt.appMinorVersion))||/\bMinefield\b/i.test(x)&&"a")&&(wu=/b/i.test(y)?"beta":"alpha",ie=ie.replace(RegExp(y+"\\+?$"),"")+(wu=="beta"?AO:RO)+(/\d+\+?/.exec(y)||"")),N=="Fennec"||N=="Firefox"&&/\b(?:Android|Firefox OS|KaiOS)\b/.test(z))N="Firefox Mobile";else if(N=="Maxthon"&&ie)ie=ie.replace(/\.[\d.]+/,".x");else if(/\bXbox\b/i.test(Oe))Oe=="Xbox 360"&&(z=null),Oe=="Xbox 360"&&/\bIEMobile\b/.test(x)&&Le.unshift("mobile mode");else if((/^(?:Chrome|IE|Opera)$/.test(N)||N&&!Oe&&!/Browser|Mobi/.test(N))&&(z=="Windows CE"||/Mobi/i.test(x)))N+=" Mobile";else if(N=="IE"&&to)try{Ee.external===null&&Le.unshift("platform preview")}catch{Le.unshift("embedded")}else(/\bBlackBerry\b/.test(Oe)||/\bBB10\b/.test(x))&&(y=(RegExp(Oe.replace(/ +/g," *")+"/([.\\d]+)","i").exec(x)||0)[1]||ie)?(y=[y,/BB10/.test(x)],z=(y[1]?(Oe=null,$t="BlackBerry"):"Device Software")+" "+y[0],ie=null):this!=S&&Oe!="Wii"&&(to&&eo||/Opera/.test(N)&&/\b(?:MSIE|Firefox)\b/i.test(x)||N=="Firefox"&&/\bOS X (?:\d+\.){2,}/.test(z)||N=="IE"&&(z&&!/^Win/.test(z)&&ie>5.5||/\bWindows XP\b/.test(z)&&ie>8||ie==8&&!/\bTrident\b/.test(x)))&&!s.test(y=tn.call(S,x.replace(s,"")+";"))&&y.name&&(y="ing as "+y.name+((y=y.version)?" "+y:""),s.test(N)?(/\bIE\b/.test(y)&&z=="Mac OS"&&(z=null),y="identify"+y):(y="mask"+y,yu?N=D(yu.replace(/([a-z])([A-Z])/g,"$1 $2")):N="Opera",/\bIE\b/.test(y)&&(z=null),to||(ie=null)),We=["Presto"],Le.push(y));(y=(/\bAppleWebKit\/([\d.]+\+?)/i.exec(x)||0)[1])&&(y=[parseFloat(y.replace(/\.(\d)$/,".0$1")),y],N=="Safari"&&y[1].slice(-1)=="+"?(N="WebKit Nightly",wu="alpha",ie=y[1].slice(0,-1)):(ie==y[1]||ie==(y[2]=(/\bSafari\/([\d.]+\+?)/i.exec(x)||0)[1]))&&(ie=null),y[1]=(/\b(?:Headless)?Chrome\/([\d.]+)/i.exec(x)||0)[1],y[0]==537.36&&y[2]==537.36&&parseFloat(y[1])>=28&&We=="WebKit"&&(We=["Blink"]),!to||!MO&&!y[1]?(We&&(We[1]="like Safari"),y=(y=y[0],y<400?1:y<500?2:y<526?3:y<533?4:y<534?"4+":y<535?5:y<537?6:y<538?7:y<601?8:y<602?9:y<604?10:y<606?11:y<608?12:"12")):(We&&(We[1]="like Chrome"),y=y[1]||(y=y[0],y<530?1:y<532?2:y<532.05?3:y<533?4:y<534.03?5:y<534.07?6:y<534.1?7:y<534.13?8:y<534.16?9:y<534.24?10:y<534.3?11:y<535.01?12:y<535.02?"13+":y<535.07?15:y<535.11?16:y<535.19?17:y<536.05?18:y<536.1?19:y<537.01?20:y<537.11?"21+":y<537.13?23:y<537.18?24:y<537.24?25:y<537.36?26:We!="Blink"?"27":"28")),We&&(We[1]+=" "+(y+=typeof y=="number"?".x":/[.+]/.test(y)?"":"+")),N=="Safari"&&(!ie||parseInt(ie)>45)?ie=y:N=="Chrome"&&/\bHeadlessChrome/i.test(x)&&Le.unshift("headless")),N=="Opera"&&(y=/\bzbov|zvav$/.exec(z))?(N+=" ",Le.unshift("desktop mode"),y=="zvav"?(N+="Mini",ie=null):N+="Mobile",z=z.replace(RegExp(" *"+y+"$"),"")):N=="Safari"&&/\bChrome\b/.exec(We&&We[1])?(Le.unshift("desktop mode"),N="Chrome Mobile",ie=null,/\bOS X\b/.test(z)?($t="Apple",z="iOS 4.3+"):z=null):/\bSRWare Iron\b/.test(N)&&!ie&&(ie=PC("Chrome")),ie&&ie.indexOf(y=/[\d.]+$/.exec(z))==0&&x.indexOf("/"+y+"-")>-1&&(z=Yt(z.replace(y,""))),z&&z.indexOf(N)!=-1&&!RegExp(N+" OS").test(z)&&(z=z.replace(RegExp(" *"+Pe(N)+" *"),"")),We&&!/\b(?:Avant|Nook)\b/.test(N)&&(/Browser|Lunascape|Maxthon/.test(N)||N!="Safari"&&/^iOS/.test(z)&&/\bSafari\b/.test(We[1])||/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/.test(N)&&We[1])&&(y=We[We.length-1])&&Le.push(y),Le.length&&(Le=["("+Le.join("; ")+")"]),$t&&Oe&&Oe.indexOf($t)<0&&Le.push("on "+$t),Oe&&Le.push((/^on /.test(Le[Le.length-1])?"":"on ")+Oe),z&&(y=/ ([\d.+]+)$/.exec(z),Kp=y&&z.charAt(z.length-y[0].length-1)=="/",z={architecture:32,family:y&&!Kp?z.replace(y[0],""):z,version:y?y[1]:null,toString:function(){var nn=this.version;return this.family+(nn&&!Kp?" "+nn:"")+(this.architecture==64?" 64-bit":"")}}),(y=/\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(Cu))&&!/\bi686\b/i.test(Cu)?(z&&(z.architecture=64,z.family=z.family.replace(RegExp(" *"+y),"")),N&&(/\bWOW64\b/i.test(x)||to&&/\w(?:86|32)$/.test(zt.cpuClass||zt.platform)&&!/\bWin64; x64\b/i.test(x))&&Le.unshift("32-bit")):z&&/^OS X/.test(z.family)&&N=="Chrome"&&parseFloat(ie)>=39&&(z.architecture=64),x||(x=null);var fn={};return fn.description=x,fn.layout=We&&We[0],fn.manufacturer=$t,fn.name=N,fn.prerelease=wu,fn.product=Oe,fn.ua=x,fn.version=N&&ie,fn.os=z||{architecture:null,family:null,version:null,toString:function(){return"null"}},fn.parse=tn,fn.toString=BO,fn.version&&Le.unshift(ie),fn.name&&Le.unshift(N),z&&N&&!(z==String(z).split(" ")[0]&&(z==N.split(" ")[0]||Oe))&&Le.push(Oe?"("+z+")":"on "+z),Le.length&&(fn.description=Le.join(" ")),fn}var gt=tn();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(n.platform=gt,define(function(){return gt})):i&&r?S(gt,function(x,Ee){i[Ee]=x}):n.platform=gt}).call(Up)});var rn=null,Du=!1,tg=1,qO=null,Rt=Symbol("SIGNAL");function se(t){let n=rn;return rn=t,n}function Tu(){return rn}var Yo={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Qo(t){if(Du)throw new Error("");if(rn===null)return;rn.consumerOnSignalRead(t);let n=rn.producersTail;if(n!==void 0&&n.producer===t)return;let e,i=rn.recomputing;if(i&&(e=n!==void 0?n.nextProducer:rn.producers,e!==void 0&&e.producer===t)){rn.producersTail=e,e.lastReadVersion=t.version;return}let r=t.consumersTail;if(r!==void 0&&r.consumer===rn&&(!i||YO(r,rn)))return;let o=ts(rn),a={producer:t,consumer:rn,nextProducer:e,prevConsumer:r,lastReadVersion:t.version,nextConsumer:void 0};rn.producersTail=a,n!==void 0?n.nextProducer=a:rn.producers=a,o&&HC(t,a)}function VC(){tg++}function ku(t){if(!(ts(t)&&!t.dirty)&&!(!t.dirty&&t.lastCleanEpoch===tg)){if(!t.producerMustRecompute(t)&&!es(t)){Iu(t);return}t.producerRecomputeValue(t),Iu(t)}}function ng(t){if(t.consumers===void 0)return;let n=Du;Du=!0;try{for(let e=t.consumers;e!==void 0;e=e.nextConsumer){let i=e.consumer;i.dirty||ZO(i)}}finally{Du=n}}function ig(){return rn?.consumerAllowSignalWrites!==!1}function ZO(t){t.dirty=!0,ng(t),t.consumerMarkedDirty?.(t)}function Iu(t){t.dirty=!1,t.lastCleanEpoch=tg}function no(t){return t&&jC(t),se(t)}function jC(t){t.producersTail=void 0,t.recomputing=!0}function Xo(t,n){se(n),t&&UC(t)}function UC(t){t.recomputing=!1;let n=t.producersTail,e=n!==void 0?n.nextProducer:t.producers;if(e!==void 0){if(ts(t))do e=rg(e);while(e!==void 0);n!==void 0?n.nextProducer=void 0:t.producers=void 0}}function es(t){for(let n=t.producers;n!==void 0;n=n.nextProducer){let e=n.producer,i=n.lastReadVersion;if(i!==e.version||(ku(e),i!==e.version))return!0}return!1}function io(t){if(ts(t)){let n=t.producers;for(;n!==void 0;)n=rg(n)}t.producers=void 0,t.producersTail=void 0,t.consumers=void 0,t.consumersTail=void 0}function HC(t,n){let e=t.consumersTail,i=ts(t);if(e!==void 0?(n.nextConsumer=e.nextConsumer,e.nextConsumer=n):(n.nextConsumer=void 0,t.consumers=n),n.prevConsumer=e,t.consumersTail=n,!i)for(let r=t.producers;r!==void 0;r=r.nextProducer)HC(r.producer,r)}function rg(t){let n=t.producer,e=t.nextProducer,i=t.nextConsumer,r=t.prevConsumer;if(t.nextConsumer=void 0,t.prevConsumer=void 0,i!==void 0?i.prevConsumer=r:n.consumersTail=r,r!==void 0)r.nextConsumer=i;else if(n.consumers=i,!ts(n)){let o=n.producers;for(;o!==void 0;)o=rg(o)}return e}function ts(t){return t.consumerIsAlwaysLive||t.consumers!==void 0}function Ou(t){qO?.(t)}function YO(t,n){let e=n.producersTail;if(e!==void 0){let i=n.producers;do{if(i===t)return!0;if(i===e)break;i=i.nextProducer}while(i!==void 0)}return!1}function Ru(t,n){return Object.is(t,n)}function Ql(t,n){let e=Object.create(QO);e.computation=t,n!==void 0&&(e.equal=n);let i=()=>{if(ku(e),Qo(e),e.value===Yl)throw e.error;return e.value};return i[Rt]=e,Ou(e),i}var Mu=Symbol("UNSET"),Su=Symbol("COMPUTING"),Yl=Symbol("ERRORED"),QO=te(_({},Yo),{value:Mu,dirty:!0,error:null,equal:Ru,kind:"computed",producerMustRecompute(t){return t.value===Mu||t.value===Su},producerRecomputeValue(t){if(t.value===Su)throw new Error("");let n=t.value;t.value=Su;let e=no(t),i,r=!1;try{i=t.computation(),se(null),r=n!==Mu&&n!==Yl&&i!==Yl&&t.equal(n,i)}catch(o){i=Yl,t.error=o}finally{Xo(t,e)}if(r){t.value=n;return}t.value=i,t.version++}});function XO(){throw new Error}var zC=XO;function $C(t){zC(t)}function og(t){zC=t}var KO=null;function ag(t,n){let e=Object.create(Xl);e.value=t,n!==void 0&&(e.equal=n);let i=()=>WC(e);return i[Rt]=e,Ou(e),[i,a=>ns(e,a),a=>sg(e,a)]}function WC(t){return Qo(t),t.value}function ns(t,n){ig()||$C(t),t.equal(t.value,n)||(t.value=n,JO(t))}function sg(t,n){ig()||$C(t),ns(t,n(t.value))}var Xl=te(_({},Yo),{equal:Ru,value:void 0,kind:"signal"});function JO(t){t.version++,VC(),ng(t),KO?.(t)}var lg=te(_({},Yo),{consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,dirty:!0,kind:"effect"});function cg(t){if(t.dirty=!1,t.version>0&&!es(t))return;t.version++;let n=no(t);try{t.cleanup(),t.fn()}finally{Xo(t,n)}}function ce(t){return typeof t=="function"}function is(t){let e=t(i=>{Error.call(i),i.stack=new Error().stack});return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var Au=is(t=>function(e){t(this),this.message=e?`${e.length} errors occurred during unsubscription:
${e.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=e});function Ko(t,n){if(t){let e=t.indexOf(n);0<=e&&t.splice(e,1)}}var Re=class t{constructor(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let n;if(!this.closed){this.closed=!0;let{_parentage:e}=this;if(e)if(this._parentage=null,Array.isArray(e))for(let o of e)o.remove(this);else e.remove(this);let{initialTeardown:i}=this;if(ce(i))try{i()}catch(o){n=o instanceof Au?o.errors:[o]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let o of r)try{GC(o)}catch(a){n=n??[],a instanceof Au?n=[...n,...a.errors]:n.push(a)}}if(n)throw new Au(n)}}add(n){var e;if(n&&n!==this)if(this.closed)GC(n);else{if(n instanceof t){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(n)}}_hasParent(n){let{_parentage:e}=this;return e===n||Array.isArray(e)&&e.includes(n)}_addParent(n){let{_parentage:e}=this;this._parentage=Array.isArray(e)?(e.push(n),e):e?[e,n]:n}_removeParent(n){let{_parentage:e}=this;e===n?this._parentage=null:Array.isArray(e)&&Ko(e,n)}remove(n){let{_finalizers:e}=this;e&&Ko(e,n),n instanceof t&&n._removeParent(this)}};Re.EMPTY=(()=>{let t=new Re;return t.closed=!0,t})();var dg=Re.EMPTY;function Nu(t){return t instanceof Re||t&&"closed"in t&&ce(t.remove)&&ce(t.add)&&ce(t.unsubscribe)}function GC(t){ce(t)?t():t.unsubscribe()}var mi={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var rs={setTimeout(t,n,...e){let{delegate:i}=rs;return i?.setTimeout?i.setTimeout(t,n,...e):setTimeout(t,n,...e)},clearTimeout(t){let{delegate:n}=rs;return(n?.clearTimeout||clearTimeout)(t)},delegate:void 0};function Pu(t){rs.setTimeout(()=>{let{onUnhandledError:n}=mi;if(n)n(t);else throw t})}function Jo(){}var qC=ug("C",void 0,void 0);function ZC(t){return ug("E",void 0,t)}function YC(t){return ug("N",t,void 0)}function ug(t,n,e){return{kind:t,value:n,error:e}}var ea=null;function os(t){if(mi.useDeprecatedSynchronousErrorHandling){let n=!ea;if(n&&(ea={errorThrown:!1,error:null}),t(),n){let{errorThrown:e,error:i}=ea;if(ea=null,e)throw i}}else t()}function QC(t){mi.useDeprecatedSynchronousErrorHandling&&ea&&(ea.errorThrown=!0,ea.error=t)}var ta=class extends Re{constructor(n){super(),this.isStopped=!1,n?(this.destination=n,Nu(n)&&n.add(this)):this.destination=nR}static create(n,e,i){return new vr(n,e,i)}next(n){this.isStopped?hg(YC(n),this):this._next(n)}error(n){this.isStopped?hg(ZC(n),this):(this.isStopped=!0,this._error(n))}complete(){this.isStopped?hg(qC,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(n){this.destination.next(n)}_error(n){try{this.destination.error(n)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},eR=Function.prototype.bind;function mg(t,n){return eR.call(t,n)}var fg=class{constructor(n){this.partialObserver=n}next(n){let{partialObserver:e}=this;if(e.next)try{e.next(n)}catch(i){Fu(i)}}error(n){let{partialObserver:e}=this;if(e.error)try{e.error(n)}catch(i){Fu(i)}else Fu(n)}complete(){let{partialObserver:n}=this;if(n.complete)try{n.complete()}catch(e){Fu(e)}}},vr=class extends ta{constructor(n,e,i){super();let r;if(ce(n)||!n)r={next:n??void 0,error:e??void 0,complete:i??void 0};else{let o;this&&mi.useDeprecatedNextContext?(o=Object.create(n),o.unsubscribe=()=>this.unsubscribe(),r={next:n.next&&mg(n.next,o),error:n.error&&mg(n.error,o),complete:n.complete&&mg(n.complete,o)}):r=n}this.destination=new fg(r)}};function Fu(t){mi.useDeprecatedSynchronousErrorHandling?QC(t):Pu(t)}function tR(t){throw t}function hg(t,n){let{onStoppedNotification:e}=mi;e&&rs.setTimeout(()=>e(t,n))}var nR={closed:!0,next:Jo,error:tR,complete:Jo};var as=typeof Symbol=="function"&&Symbol.observable||"@@observable";function In(t){return t}function pg(...t){return gg(t)}function gg(t){return t.length===0?In:t.length===1?t[0]:function(e){return t.reduce((i,r)=>r(i),e)}}var de=(()=>{class t{constructor(e){e&&(this._subscribe=e)}lift(e){let i=new t;return i.source=this,i.operator=e,i}subscribe(e,i,r){let o=rR(e)?e:new vr(e,i,r);return os(()=>{let{operator:a,source:s}=this;o.add(a?a.call(o,s):s?this._subscribe(o):this._trySubscribe(o))}),o}_trySubscribe(e){try{return this._subscribe(e)}catch(i){e.error(i)}}forEach(e,i){return i=XC(i),new i((r,o)=>{let a=new vr({next:s=>{try{e(s)}catch(l){o(l),a.unsubscribe()}},error:o,complete:r});this.subscribe(a)})}_subscribe(e){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(e)}[as](){return this}pipe(...e){return gg(e)(this)}toPromise(e){return e=XC(e),new e((i,r)=>{let o;this.subscribe(a=>o=a,a=>r(a),()=>i(o))})}}return t.create=n=>new t(n),t})();function XC(t){var n;return(n=t??mi.Promise)!==null&&n!==void 0?n:Promise}function iR(t){return t&&ce(t.next)&&ce(t.error)&&ce(t.complete)}function rR(t){return t&&t instanceof ta||iR(t)&&Nu(t)}function oR(t){return ce(t?.lift)}function De(t){return n=>{if(oR(n))return n.lift(function(e){try{return t(e,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function Se(t,n,e,i,r){return new _g(t,n,e,i,r)}var _g=class extends ta{constructor(n,e,i,r,o,a){super(n),this.onFinalize=o,this.shouldUnsubscribe=a,this._next=e?function(s){try{e(s)}catch(l){n.error(l)}}:super._next,this._error=r?function(s){try{r(s)}catch(l){n.error(l)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(s){n.error(s)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:e}=this;super.unsubscribe(),!e&&((n=this.onFinalize)===null||n===void 0||n.call(this))}}};var KC=is(t=>function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var I=(()=>{class t extends de{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(e){let i=new Lu(this,this);return i.operator=e,i}_throwIfClosed(){if(this.closed)throw new KC}next(e){os(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(e)}})}error(e){os(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=e;let{observers:i}=this;for(;i.length;)i.shift().error(e)}})}complete(){os(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:e}=this;for(;e.length;)e.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var e;return((e=this.observers)===null||e===void 0?void 0:e.length)>0}_trySubscribe(e){return this._throwIfClosed(),super._trySubscribe(e)}_subscribe(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)}_innerSubscribe(e){let{hasError:i,isStopped:r,observers:o}=this;return i||r?dg:(this.currentObservers=null,o.push(e),new Re(()=>{this.currentObservers=null,Ko(o,e)}))}_checkFinalizedStatuses(e){let{hasError:i,thrownError:r,isStopped:o}=this;i?e.error(r):o&&e.complete()}asObservable(){let e=new de;return e.source=this,e}}return t.create=(n,e)=>new Lu(n,e),t})(),Lu=class extends I{constructor(n,e){super(),this.destination=n,this.source=e}next(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.next)===null||i===void 0||i.call(e,n)}error(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.error)===null||i===void 0||i.call(e,n)}complete(){var n,e;(e=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||e===void 0||e.call(n)}_subscribe(n){var e,i;return(i=(e=this.source)===null||e===void 0?void 0:e.subscribe(n))!==null&&i!==void 0?i:dg}};var At=class extends I{constructor(n){super(),this._value=n}get value(){return this.getValue()}_subscribe(n){let e=super._subscribe(n);return!e.closed&&n.next(this._value),e}getValue(){let{hasError:n,thrownError:e,_value:i}=this;if(n)throw e;return this._throwIfClosed(),i}next(n){super.next(this._value=n)}};var Kl={now(){return(Kl.delegate||Date).now()},delegate:void 0};var ro=class extends I{constructor(n=1/0,e=1/0,i=Kl){super(),this._bufferSize=n,this._windowTime=e,this._timestampProvider=i,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=e===1/0,this._bufferSize=Math.max(1,n),this._windowTime=Math.max(1,e)}next(n){let{isStopped:e,_buffer:i,_infiniteTimeWindow:r,_timestampProvider:o,_windowTime:a}=this;e||(i.push(n),!r&&i.push(o.now()+a)),this._trimBuffer(),super.next(n)}_subscribe(n){this._throwIfClosed(),this._trimBuffer();let e=this._innerSubscribe(n),{_infiniteTimeWindow:i,_buffer:r}=this,o=r.slice();for(let a=0;a<o.length&&!n.closed;a+=i?1:2)n.next(o[a]);return this._checkFinalizedStatuses(n),e}_trimBuffer(){let{_bufferSize:n,_timestampProvider:e,_buffer:i,_infiniteTimeWindow:r}=this,o=(r?1:2)*n;if(n<1/0&&o<i.length&&i.splice(0,i.length-o),!r){let a=e.now(),s=0;for(let l=1;l<i.length&&i[l]<=a;l+=2)s=l;s&&i.splice(0,s+1)}}};var Bu=class extends Re{constructor(n,e){super()}schedule(n,e=0){return this}};var Jl={setInterval(t,n,...e){let{delegate:i}=Jl;return i?.setInterval?i.setInterval(t,n,...e):setInterval(t,n,...e)},clearInterval(t){let{delegate:n}=Jl;return(n?.clearInterval||clearInterval)(t)},delegate:void 0};var Vu=class extends Bu{constructor(n,e){super(n,e),this.scheduler=n,this.work=e,this.pending=!1}schedule(n,e=0){var i;if(this.closed)return this;this.state=n;let r=this.id,o=this.scheduler;return r!=null&&(this.id=this.recycleAsyncId(o,r,e)),this.pending=!0,this.delay=e,this.id=(i=this.id)!==null&&i!==void 0?i:this.requestAsyncId(o,this.id,e),this}requestAsyncId(n,e,i=0){return Jl.setInterval(n.flush.bind(n,this),i)}recycleAsyncId(n,e,i=0){if(i!=null&&this.delay===i&&this.pending===!1)return e;e!=null&&Jl.clearInterval(e)}execute(n,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;let i=this._execute(n,e);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(n,e){let i=!1,r;try{this.work(n)}catch(o){i=!0,r=o||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){let{id:n,scheduler:e}=this,{actions:i}=e;this.work=this.state=this.scheduler=null,this.pending=!1,Ko(i,this),n!=null&&(this.id=this.recycleAsyncId(e,n,null)),this.delay=null,super.unsubscribe()}}};var ss=class t{constructor(n,e=t.now){this.schedulerActionCtor=n,this.now=e}schedule(n,e=0,i){return new this.schedulerActionCtor(this,n).schedule(i,e)}};ss.now=Kl.now;var ju=class extends ss{constructor(n,e=ss.now){super(n,e),this.actions=[],this._active=!1}flush(n){let{actions:e}=this;if(this._active){e.push(n);return}let i;this._active=!0;do if(i=n.execute(n.state,n.delay))break;while(n=e.shift());if(this._active=!1,i){for(;n=e.shift();)n.unsubscribe();throw i}}};var ec=new ju(Vu),JC=ec;var wt=new de(t=>t.complete());function Uu(t){return t&&ce(t.schedule)}function bg(t){return t[t.length-1]}function Hu(t){return ce(bg(t))?t.pop():void 0}function Ui(t){return Uu(bg(t))?t.pop():void 0}function ew(t,n){return typeof bg(t)=="number"?t.pop():n}function nw(t,n,e,i){function r(o){return o instanceof e?o:new e(function(a){a(o)})}return new(e||(e=Promise))(function(o,a){function s(d){try{c(i.next(d))}catch(m){a(m)}}function l(d){try{c(i.throw(d))}catch(m){a(m)}}function c(d){d.done?o(d.value):r(d.value).then(s,l)}c((i=i.apply(t,n||[])).next())})}function tw(t){var n=typeof Symbol=="function"&&Symbol.iterator,e=n&&t[n],i=0;if(e)return e.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function na(t){return this instanceof na?(this.v=t,this):new na(t)}function iw(t,n,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=e.apply(t,n||[]),r,o=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),s("next"),s("throw"),s("return",a),r[Symbol.asyncIterator]=function(){return this},r;function a(h){return function(b){return Promise.resolve(b).then(h,m)}}function s(h,b){i[h]&&(r[h]=function(D){return new Promise(function(S,k){o.push([h,D,S,k])>1||l(h,D)})},b&&(r[h]=b(r[h])))}function l(h,b){try{c(i[h](b))}catch(D){f(o[0][3],D)}}function c(h){h.value instanceof na?Promise.resolve(h.value.v).then(d,m):f(o[0][2],h)}function d(h){l("next",h)}function m(h){l("throw",h)}function f(h,b){h(b),o.shift(),o.length&&l(o[0][0],o[0][1])}}function rw(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=t[Symbol.asyncIterator],e;return n?n.call(t):(t=typeof tw=="function"?tw(t):t[Symbol.iterator](),e={},i("next"),i("throw"),i("return"),e[Symbol.asyncIterator]=function(){return this},e);function i(o){e[o]=t[o]&&function(a){return new Promise(function(s,l){a=t[o](a),r(s,l,a.done,a.value)})}}function r(o,a,s,l){Promise.resolve(l).then(function(c){o({value:c,done:s})},a)}}var ls=t=>t&&typeof t.length=="number"&&typeof t!="function";function zu(t){return ce(t?.then)}function $u(t){return ce(t[as])}function Wu(t){return Symbol.asyncIterator&&ce(t?.[Symbol.asyncIterator])}function Gu(t){return new TypeError(`You provided ${t!==null&&typeof t=="object"?"an invalid object":`'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function aR(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var qu=aR();function Zu(t){return ce(t?.[qu])}function Yu(t){return iw(this,arguments,function*(){let e=t.getReader();try{for(;;){let{value:i,done:r}=yield na(e.read());if(r)return yield na(void 0);yield yield na(i)}}finally{e.releaseLock()}})}function Qu(t){return ce(t?.getReader)}function Je(t){if(t instanceof de)return t;if(t!=null){if($u(t))return sR(t);if(ls(t))return lR(t);if(zu(t))return cR(t);if(Wu(t))return ow(t);if(Zu(t))return dR(t);if(Qu(t))return uR(t)}throw Gu(t)}function sR(t){return new de(n=>{let e=t[as]();if(ce(e.subscribe))return e.subscribe(n);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function lR(t){return new de(n=>{for(let e=0;e<t.length&&!n.closed;e++)n.next(t[e]);n.complete()})}function cR(t){return new de(n=>{t.then(e=>{n.closed||(n.next(e),n.complete())},e=>n.error(e)).then(null,Pu)})}function dR(t){return new de(n=>{for(let e of t)if(n.next(e),n.closed)return;n.complete()})}function ow(t){return new de(n=>{mR(t,n).catch(e=>n.error(e))})}function uR(t){return ow(Yu(t))}function mR(t,n){var e,i,r,o;return nw(this,void 0,void 0,function*(){try{for(e=rw(t);i=yield e.next(),!i.done;){let a=i.value;if(n.next(a),n.closed)return}}catch(a){r={error:a}}finally{try{i&&!i.done&&(o=e.return)&&(yield o.call(e))}finally{if(r)throw r.error}}n.complete()})}function vn(t,n,e,i=0,r=!1){let o=n.schedule(function(){e(),r?t.add(this.schedule(null,i)):this.unsubscribe()},i);if(t.add(o),!r)return o}function Xu(t,n=0){return De((e,i)=>{e.subscribe(Se(i,r=>vn(i,t,()=>i.next(r),n),()=>vn(i,t,()=>i.complete(),n),r=>vn(i,t,()=>i.error(r),n)))})}function Ku(t,n=0){return De((e,i)=>{i.add(t.schedule(()=>e.subscribe(i),n))})}function aw(t,n){return Je(t).pipe(Ku(n),Xu(n))}function sw(t,n){return Je(t).pipe(Ku(n),Xu(n))}function lw(t,n){return new de(e=>{let i=0;return n.schedule(function(){i===t.length?e.complete():(e.next(t[i++]),e.closed||this.schedule())})})}function cw(t,n){return new de(e=>{let i;return vn(e,n,()=>{i=t[qu](),vn(e,n,()=>{let r,o;try{({value:r,done:o}=i.next())}catch(a){e.error(a);return}o?e.complete():e.next(r)},0,!0)}),()=>ce(i?.return)&&i.return()})}function Ju(t,n){if(!t)throw new Error("Iterable cannot be null");return new de(e=>{vn(e,n,()=>{let i=t[Symbol.asyncIterator]();vn(e,n,()=>{i.next().then(r=>{r.done?e.complete():e.next(r.value)})},0,!0)})})}function dw(t,n){return Ju(Yu(t),n)}function uw(t,n){if(t!=null){if($u(t))return aw(t,n);if(ls(t))return lw(t,n);if(zu(t))return sw(t,n);if(Wu(t))return Ju(t,n);if(Zu(t))return cw(t,n);if(Qu(t))return dw(t,n)}throw Gu(t)}function nt(t,n){return n?uw(t,n):Je(t)}function ne(...t){let n=Ui(t);return nt(t,n)}function tc(t,n){let e=ce(t)?t:()=>t,i=r=>r.error(e());return new de(n?r=>n.schedule(i,0,r):i)}function nc(t){return!!t&&(t instanceof de||ce(t.lift)&&ce(t.subscribe))}var ia=is(t=>function(){t(this),this.name="EmptyError",this.message="no elements in sequence"});function mw(t){return t instanceof Date&&!isNaN(t)}function le(t,n){return De((e,i)=>{let r=0;e.subscribe(Se(i,o=>{i.next(t.call(n,o,r++))}))})}var{isArray:hR}=Array;function fR(t,n){return hR(n)?t(...n):t(n)}function cs(t){return le(n=>fR(t,n))}var{isArray:pR}=Array,{getPrototypeOf:gR,prototype:_R,keys:bR}=Object;function em(t){if(t.length===1){let n=t[0];if(pR(n))return{args:n,keys:null};if(vR(n)){let e=bR(n);return{args:e.map(i=>n[i]),keys:e}}}return{args:t,keys:null}}function vR(t){return t&&typeof t=="object"&&gR(t)===_R}function tm(t,n){return t.reduce((e,i,r)=>(e[i]=n[r],e),{})}function ds(...t){let n=Ui(t),e=Hu(t),{args:i,keys:r}=em(t);if(i.length===0)return nt([],n);let o=new de(yR(i,n,r?a=>tm(r,a):In));return e?o.pipe(cs(e)):o}function yR(t,n,e=In){return i=>{hw(n,()=>{let{length:r}=t,o=new Array(r),a=r,s=r;for(let l=0;l<r;l++)hw(n,()=>{let c=nt(t[l],n),d=!1;c.subscribe(Se(i,m=>{o[l]=m,d||(d=!0,s--),s||i.next(e(o.slice()))},()=>{--a||i.complete()}))},i)},i)}}function hw(t,n,e){t?vn(e,t,n):n()}function fw(t,n,e,i,r,o,a,s){let l=[],c=0,d=0,m=!1,f=()=>{m&&!l.length&&!c&&n.complete()},h=D=>c<i?b(D):l.push(D),b=D=>{o&&n.next(D),c++;let S=!1;Je(e(D,d++)).subscribe(Se(n,k=>{r?.(k),o?h(k):n.next(k)},()=>{S=!0},void 0,()=>{if(S)try{for(c--;l.length&&c<i;){let k=l.shift();a?vn(n,a,()=>b(k)):b(k)}f()}catch(k){n.error(k)}}))};return t.subscribe(Se(n,h,()=>{m=!0,f()})),()=>{s?.()}}function Nt(t,n,e=1/0){return ce(n)?Nt((i,r)=>le((o,a)=>n(i,o,r,a))(Je(t(i,r))),e):(typeof n=="number"&&(e=n),De((i,r)=>fw(i,r,t,e)))}function oo(t=1/0){return Nt(In,t)}function pw(){return oo(1)}function ao(...t){return pw()(nt(t,Ui(t)))}function hi(t){return new de(n=>{Je(t()).subscribe(n)})}function ic(...t){let n=Hu(t),{args:e,keys:i}=em(t),r=new de(o=>{let{length:a}=e;if(!a){o.complete();return}let s=new Array(a),l=a,c=a;for(let d=0;d<a;d++){let m=!1;Je(e[d]).subscribe(Se(o,f=>{m||(m=!0,c--),s[d]=f},()=>l--,void 0,()=>{(!l||!m)&&(c||o.next(i?tm(i,s):s),o.complete())}))}});return n?r.pipe(cs(n)):r}var CR=["addListener","removeListener"],wR=["addEventListener","removeEventListener"],xR=["on","off"];function rc(t,n,e,i){if(ce(e)&&(i=e,e=void 0),i)return rc(t,n,e).pipe(cs(i));let[r,o]=MR(t)?wR.map(a=>s=>t[a](n,s,e)):ER(t)?CR.map(gw(t,n)):DR(t)?xR.map(gw(t,n)):[];if(!r&&ls(t))return Nt(a=>rc(a,n,e))(Je(t));if(!r)throw new TypeError("Invalid event target");return new de(a=>{let s=(...l)=>a.next(1<l.length?l:l[0]);return r(s),()=>o(s)})}function gw(t,n){return e=>i=>t[e](n,i)}function ER(t){return ce(t.addListener)&&ce(t.removeListener)}function DR(t){return ce(t.on)&&ce(t.off)}function MR(t){return ce(t.addEventListener)&&ce(t.removeEventListener)}function _w(t=0,n,e=JC){let i=-1;return n!=null&&(Uu(n)?e=n:i=n),new de(r=>{let o=mw(t)?+t-e.now():t;o<0&&(o=0);let a=0;return e.schedule(function(){r.closed||(r.next(a++),0<=i?this.schedule(void 0,i):r.complete())},o)})}function Tn(...t){let n=Ui(t),e=ew(t,1/0),i=t;return i.length?i.length===1?Je(i[0]):oo(e)(nt(i,n)):wt}var yr=new de(Jo);function Ce(t,n){return De((e,i)=>{let r=0;e.subscribe(Se(i,o=>t.call(n,o,r++)&&i.next(o)))})}function bw(t){return De((n,e)=>{let i=!1,r=null,o=null,a=!1,s=()=>{if(o?.unsubscribe(),o=null,i){i=!1;let c=r;r=null,e.next(c)}a&&e.complete()},l=()=>{o=null,a&&e.complete()};n.subscribe(Se(e,c=>{i=!0,r=c,o||Je(t(c)).subscribe(o=Se(e,s,l))},()=>{a=!0,(!i||!o||o.closed)&&e.complete()}))})}function nm(t,n=ec){return bw(()=>_w(t,n))}function so(t){return De((n,e)=>{let i=null,r=!1,o;i=n.subscribe(Se(e,void 0,void 0,a=>{o=Je(t(a,so(t)(n))),i?(i.unsubscribe(),i=null,o.subscribe(e)):r=!0})),r&&(i.unsubscribe(),i=null,o.subscribe(e))})}function lo(t,n){return ce(n)?Nt(t,n,1):Nt(t,1)}function oc(t,n=ec){return De((e,i)=>{let r=null,o=null,a=null,s=()=>{if(r){r.unsubscribe(),r=null;let c=o;o=null,i.next(c)}};function l(){let c=a+t,d=n.now();if(d<c){r=this.schedule(void 0,c-d),i.add(r);return}s()}e.subscribe(Se(i,c=>{o=c,a=n.now(),r||(r=n.schedule(l,t),i.add(r))},()=>{s(),i.complete()},void 0,()=>{o=r=null}))})}function vw(t){return De((n,e)=>{let i=!1;n.subscribe(Se(e,r=>{i=!0,e.next(r)},()=>{i||e.next(t),e.complete()}))})}function He(t){return t<=0?()=>wt:De((n,e)=>{let i=0;n.subscribe(Se(e,r=>{++i<=t&&(e.next(r),t<=i&&e.complete())}))})}function im(t,n=In){return t=t??SR,De((e,i)=>{let r,o=!0;e.subscribe(Se(i,a=>{let s=n(a);(o||!t(r,s))&&(o=!1,r=s,i.next(a))}))})}function SR(t,n){return t===n}function yw(t=IR){return De((n,e)=>{let i=!1;n.subscribe(Se(e,r=>{i=!0,e.next(r)},()=>i?e.complete():e.error(t())))})}function IR(){return new ia}function ra(t){return De((n,e)=>{try{n.subscribe(e)}finally{e.add(t)}})}function Cr(t,n){let e=arguments.length>=2;return i=>i.pipe(t?Ce((r,o)=>t(r,o,i)):In,He(1),e?vw(n):yw(()=>new ia))}function rm(t){return t<=0?()=>wt:De((n,e)=>{let i=[];n.subscribe(Se(e,r=>{i.push(r),t<i.length&&i.shift()},()=>{for(let r of i)e.next(r);e.complete()},void 0,()=>{i=null}))})}function om(){return De((t,n)=>{let e,i=!1;t.subscribe(Se(n,r=>{let o=e;e=r,i&&n.next([o,r]),i=!0}))})}function ac(t={}){let{connector:n=()=>new I,resetOnError:e=!0,resetOnComplete:i=!0,resetOnRefCountZero:r=!0}=t;return o=>{let a,s,l,c=0,d=!1,m=!1,f=()=>{s?.unsubscribe(),s=void 0},h=()=>{f(),a=l=void 0,d=m=!1},b=()=>{let D=a;h(),D?.unsubscribe()};return De((D,S)=>{c++,!m&&!d&&f();let k=l=l??n();S.add(()=>{c--,c===0&&!m&&!d&&(s=vg(b,r))}),k.subscribe(S),!a&&c>0&&(a=new vr({next:_e=>k.next(_e),error:_e=>{m=!0,f(),s=vg(h,e,_e),k.error(_e)},complete:()=>{d=!0,f(),s=vg(h,i),k.complete()}}),Je(D).subscribe(a))})(o)}}function vg(t,n,...e){if(n===!0){t();return}if(n===!1)return;let i=new vr({next:()=>{i.unsubscribe(),t()}});return Je(n(...e)).subscribe(i)}function am(t,n,e){let i,r=!1;return t&&typeof t=="object"?{bufferSize:i=1/0,windowTime:n=1/0,refCount:r=!1,scheduler:e}=t:i=t??1/0,ac({connector:()=>new ro(i,n,e),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:r})}function sc(t){return Ce((n,e)=>t<=e)}function Pt(...t){let n=Ui(t);return De((e,i)=>{(n?ao(t,e,n):ao(t,e)).subscribe(i)})}function ot(t,n){return De((e,i)=>{let r=null,o=0,a=!1,s=()=>a&&!r&&i.complete();e.subscribe(Se(i,l=>{r?.unsubscribe();let c=0,d=o++;Je(t(l,d)).subscribe(r=Se(i,m=>i.next(n?n(l,m,d,c++):m),()=>{r=null,s()}))},()=>{a=!0,s()}))})}function ze(t){return De((n,e)=>{Je(t).subscribe(Se(e,()=>e.complete(),Jo)),!e.closed&&n.subscribe(e)})}function lc(t,n=!1){return De((e,i)=>{let r=0;e.subscribe(Se(i,o=>{let a=t(o,r++);(a||n)&&i.next(o),!a&&i.complete()}))})}function Wt(t,n,e){let i=ce(t)||n||e?{next:t,error:n,complete:e}:t;return i?De((r,o)=>{var a;(a=i.subscribe)===null||a===void 0||a.call(i);let s=!0;r.subscribe(Se(o,l=>{var c;(c=i.next)===null||c===void 0||c.call(i,l),o.next(l)},()=>{var l;s=!1,(l=i.complete)===null||l===void 0||l.call(i),o.complete()},l=>{var c;s=!1,(c=i.error)===null||c===void 0||c.call(i,l),o.error(l)},()=>{var l,c;s&&((l=i.unsubscribe)===null||l===void 0||l.call(i)),(c=i.finalize)===null||c===void 0||c.call(i)}))}):In}var yg;function sm(){return yg}function Hi(t){let n=yg;return yg=t,n}var Cw=Symbol("NotFound");function us(t){return t===Cw||t?.name==="\u0275NotFound"}function ww(t){let n=se(null);try{return t()}finally{se(n)}}var fm="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",R=class extends Error{code;constructor(n,e){super(qn(n,e)),this.code=n}};function TR(t){return`NG0${Math.abs(t)}`}function qn(t,n){return`${TR(t)}${n?": "+n:""}`}var mo=globalThis;function Qe(t){for(let n in t)if(t[n]===Qe)return n;throw Error("")}function Sw(t,n){for(let e in n)n.hasOwnProperty(e)&&!t.hasOwnProperty(e)&&(t[e]=n[e])}function pc(t){if(typeof t=="string")return t;if(Array.isArray(t))return`[${t.map(pc).join(", ")}]`;if(t==null)return""+t;let n=t.overriddenName||t.name;if(n)return`${n}`;let e=t.toString();if(e==null)return""+e;let i=e.indexOf(`
`);return i>=0?e.slice(0,i):e}function pm(t,n){return t?n?`${t} ${n}`:t:n||""}var kR=Qe({__forward_ref__:Qe});function St(t){return t.__forward_ref__=St,t}function Ft(t){return Ag(t)?t():t}function Ag(t){return typeof t=="function"&&t.hasOwnProperty(kR)&&t.__forward_ref__===St}function Iw(t,n,e){t!=n&&Tw(e,t,n,"==")}function Tw(t,n,e,i){throw new Error(`ASSERTION ERROR: ${t}`+(i==null?"":` [Expected=> ${e} ${i} ${n} <=Actual]`))}function w(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function P(t){return{providers:t.providers||[],imports:t.imports||[]}}function gc(t){return OR(t,gm)}function Ng(t){return gc(t)!==null}function OR(t,n){return t.hasOwnProperty(n)&&t[n]||null}function RR(t){let n=t?.[gm]??null;return n||null}function wg(t){return t&&t.hasOwnProperty(cm)?t[cm]:null}var gm=Qe({\u0275prov:Qe}),cm=Qe({\u0275inj:Qe}),C=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(n,e){this._desc=n,this.\u0275prov=void 0,typeof e=="number"?this.__NG_ELEMENT_ID__=e:e!==void 0&&(this.\u0275prov=w({token:this,providedIn:e.providedIn||"root",factory:e.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function Pg(t){return t&&!!t.\u0275providers}var Fg=Qe({\u0275cmp:Qe}),Lg=Qe({\u0275dir:Qe}),Bg=Qe({\u0275pipe:Qe}),Vg=Qe({\u0275mod:Qe}),dc=Qe({\u0275fac:Qe}),da=Qe({__NG_ELEMENT_ID__:Qe}),xw=Qe({__NG_ENV_ID__:Qe});function jg(t){return bm(t,"@NgModule"),t[Vg]||null}function $i(t){return bm(t,"@Component"),t[Fg]||null}function _m(t){return bm(t,"@Directive"),t[Lg]||null}function kw(t){return bm(t,"@Pipe"),t[Bg]||null}function bm(t,n){if(t==null)throw new R(-919,!1)}function ho(t){return typeof t=="string"?t:t==null?"":String(t)}var Ow=Qe({ngErrorCode:Qe}),AR=Qe({ngErrorMessage:Qe}),NR=Qe({ngTokenPath:Qe});function Ug(t,n){return Rw("",-200,n)}function vm(t,n){throw new R(-201,!1)}function Rw(t,n,e){let i=new R(n,t);return i[Ow]=n,i[AR]=t,e&&(i[NR]=e),i}function PR(t){return t[Ow]}var xg;function Aw(){return xg}function kn(t){let n=xg;return xg=t,n}function Hg(t,n,e){let i=gc(t);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(e&8)return null;if(n!==void 0)return n;vm(t,"")}var FR={},oa=FR,LR="__NG_DI_FLAG__",Eg=class{injector;constructor(n){this.injector=n}retrieve(n,e){let i=aa(e)||0;try{return this.injector.get(n,i&8?null:oa,i)}catch(r){if(us(r))return r;throw r}}};function BR(t,n=0){let e=sm();if(e===void 0)throw new R(-203,!1);if(e===null)return Hg(t,void 0,n);{let i=VR(n),r=e.retrieve(t,i);if(us(r)){if(i.optional)return null;throw r}return r}}function A(t,n=0){return(Aw()||BR)(Ft(t),n)}function u(t,n){return A(t,aa(n))}function aa(t){return typeof t>"u"||typeof t=="number"?t:0|(t.optional&&8)|(t.host&&1)|(t.self&&2)|(t.skipSelf&&4)}function VR(t){return{optional:!!(t&8),host:!!(t&1),self:!!(t&2),skipSelf:!!(t&4)}}function Dg(t){let n=[];for(let e=0;e<t.length;e++){let i=Ft(t[e]);if(Array.isArray(i)){if(i.length===0)throw new R(900,!1);let r,o=0;for(let a=0;a<i.length;a++){let s=i[a],l=jR(s);typeof l=="number"?l===-1?r=s.token:o|=l:r=s}n.push(A(r,o))}else n.push(A(i))}return n}function jR(t){return t[LR]}function sa(t,n){let e=t.hasOwnProperty(dc);return e?t[dc]:null}function Nw(t,n,e){if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(e&&(r=e(r),o=e(o)),o!==r)return!1}return!0}function Pw(t){return t.flat(Number.POSITIVE_INFINITY)}function ym(t,n){t.forEach(e=>Array.isArray(e)?ym(e,n):n(e))}function zg(t,n,e){n>=t.length?t.push(e):t.splice(n,0,e)}function _c(t,n){return n>=t.length-1?t.pop():t.splice(n,1)[0]}function Fw(t,n){let e=[];for(let i=0;i<t;i++)e.push(n);return e}function Lw(t,n,e,i){let r=t.length;if(r==n)t.push(e,i);else if(r===1)t.push(i,t[0]),t[0]=e;else{for(r--,t.push(t[r-1],t[r]);r>n;){let o=r-2;t[r]=t[o],r--}t[n]=e,t[n+1]=i}}function Cm(t,n,e){let i=hs(t,n);return i>=0?t[i|1]=e:(i=~i,Lw(t,i,n,e)),i}function wm(t,n){let e=hs(t,n);if(e>=0)return t[e|1]}function hs(t,n){return UR(t,n,1)}function UR(t,n,e){let i=0,r=t.length>>e;for(;r!==i;){let o=i+(r-i>>1),a=t[o<<e];if(n===a)return o<<e;a>n?r=o:i=o+1}return~(r<<e)}var fi={},Qt=[],fo=new C(""),$g=new C("",-1),Wg=new C(""),uc=class{get(n,e=oa){if(e===oa){let r=Rw("",-201);throw r.name="\u0275NotFound",r}return e}};function On(t){return{\u0275providers:t}}function Bw(t){return On([{provide:fo,multi:!0,useValue:t}])}function Vw(...t){return{\u0275providers:Gg(!0,t),\u0275fromNgModule:!0}}function Gg(t,...n){let e=[],i=new Set,r,o=a=>{e.push(a)};return ym(n,a=>{let s=a;dm(s,o,[],i)&&(r||=[],r.push(s))}),r!==void 0&&jw(r,o),e}function jw(t,n){for(let e=0;e<t.length;e++){let{ngModule:i,providers:r}=t[e];qg(r,o=>{n(o,i)})}}function dm(t,n,e,i){if(t=Ft(t),!t)return!1;let r=null,o=wg(t),a=!o&&$i(t);if(!o&&!a){let l=t.ngModule;if(o=wg(l),o)r=l;else return!1}else{if(a&&!a.standalone)return!1;r=t}let s=i.has(r);if(a){if(s)return!1;if(i.add(r),a.dependencies){let l=typeof a.dependencies=="function"?a.dependencies():a.dependencies;for(let c of l)dm(c,n,e,i)}}else if(o){if(o.imports!=null&&!s){i.add(r);let c;ym(o.imports,d=>{dm(d,n,e,i)&&(c||=[],c.push(d))}),c!==void 0&&jw(c,n)}if(!s){let c=sa(r)||(()=>new r);n({provide:r,useFactory:c,deps:Qt},r),n({provide:Wg,useValue:r,multi:!0},r),n({provide:fo,useValue:()=>A(r),multi:!0},r)}let l=o.providers;if(l!=null&&!s){let c=t;qg(l,d=>{n(d,c)})}}else return!1;return r!==t&&t.providers!==void 0}function qg(t,n){for(let e of t)Pg(e)&&(e=e.\u0275providers),Array.isArray(e)?qg(e,n):n(e)}var HR=Qe({provide:String,useValue:Qe});function Uw(t){return t!==null&&typeof t=="object"&&HR in t}function zR(t){return!!(t&&t.useExisting)}function $R(t){return!!(t&&t.useFactory)}function la(t){return typeof t=="function"}function Hw(t){return!!t.useClass}var bc=new C(""),lm={},Ew={},Cg;function fs(){return Cg===void 0&&(Cg=new uc),Cg}var Xe=class{},ca=class extends Xe{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(n,e,i,r){super(),this.parent=e,this.source=i,this.scopes=r,Sg(n,a=>this.processProvider(a)),this.records.set($g,ms(void 0,this)),r.has("environment")&&this.records.set(Xe,ms(void 0,this));let o=this.records.get(bc);o!=null&&typeof o.value=="string"&&this.scopes.add(o.value),this.injectorDefTypes=new Set(this.get(Wg,Qt,{self:!0}))}retrieve(n,e){let i=aa(e)||0;try{return this.get(n,oa,i)}catch(r){if(us(r))return r;throw r}}destroy(){cc(this),this._destroyed=!0;let n=se(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let e=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of e)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),se(n)}}onDestroy(n){return cc(this),this._onDestroyHooks.push(n),()=>this.removeOnDestroy(n)}runInContext(n){cc(this);let e=Hi(this),i=kn(void 0),r;try{return n()}finally{Hi(e),kn(i)}}get(n,e=oa,i){if(cc(this),n.hasOwnProperty(xw))return n[xw](this);let r=aa(i),o,a=Hi(this),s=kn(void 0);try{if(!(r&4)){let c=this.records.get(n);if(c===void 0){let d=YR(n)&&gc(n);d&&this.injectableDefInScope(d)?c=ms(Mg(n),lm):c=null,this.records.set(n,c)}if(c!=null)return this.hydrate(n,c,r)}let l=r&2?fs():this.parent;return e=r&8&&e===oa?null:e,l.get(n,e)}catch(l){let c=PR(l);throw c===-200||c===-201?new R(c,null):l}finally{kn(s),Hi(a)}}resolveInjectorInitializers(){let n=se(null),e=Hi(this),i=kn(void 0),r;try{let o=this.get(fo,Qt,{self:!0});for(let a of o)a()}finally{Hi(e),kn(i),se(n)}}toString(){return"R3Injector[...]"}processProvider(n){n=Ft(n);let e=la(n)?n:Ft(n&&n.provide),i=GR(n);if(!la(n)&&n.multi===!0){let r=this.records.get(e);r||(r=ms(void 0,lm,!0),r.factory=()=>Dg(r.multi),this.records.set(e,r)),e=n,r.multi.push(n)}this.records.set(e,i)}hydrate(n,e,i){let r=se(null);try{if(e.value===Ew)throw Ug("");return e.value===lm&&(e.value=Ew,e.value=e.factory(void 0,i)),typeof e.value=="object"&&e.value&&ZR(e.value)&&this._ngOnDestroyHooks.add(e.value),e.value}finally{se(r)}}injectableDefInScope(n){if(!n.providedIn)return!1;let e=Ft(n.providedIn);return typeof e=="string"?e==="any"||this.scopes.has(e):this.injectorDefTypes.has(e)}removeOnDestroy(n){let e=this._onDestroyHooks.indexOf(n);e!==-1&&this._onDestroyHooks.splice(e,1)}};function Mg(t){let n=gc(t),e=n!==null?n.factory:sa(t);if(e!==null)return e;if(t instanceof C)throw new R(-204,!1);if(t instanceof Function)return WR(t);throw new R(-204,!1)}function WR(t){if(t.length>0)throw new R(-204,!1);let e=RR(t);return e!==null?()=>e.factory(t):()=>new t}function GR(t){if(Uw(t))return ms(void 0,t.useValue);{let n=Zg(t);return ms(n,lm)}}function Zg(t,n,e){let i;if(la(t)){let r=Ft(t);return sa(r)||Mg(r)}else if(Uw(t))i=()=>Ft(t.useValue);else if($R(t))i=()=>t.useFactory(...Dg(t.deps||[]));else if(zR(t))i=(r,o)=>A(Ft(t.useExisting),o!==void 0&&o&8?8:void 0);else{let r=Ft(t&&(t.useClass||t.provide));if(qR(t))i=()=>new r(...Dg(t.deps));else return sa(r)||Mg(r)}return i}function cc(t){if(t.destroyed)throw new R(-205,!1)}function ms(t,n,e=!1){return{factory:t,value:n,multi:e?[]:void 0}}function qR(t){return!!t.deps}function ZR(t){return t!==null&&typeof t=="object"&&typeof t.ngOnDestroy=="function"}function YR(t){return typeof t=="function"||typeof t=="object"&&t.ngMetadataName==="InjectionToken"}function Sg(t,n){for(let e of t)Array.isArray(e)?Sg(e,n):e&&Pg(e)?Sg(e.\u0275providers,n):n(e)}function Bt(t,n){let e;t instanceof ca?(cc(t),e=t):e=new Eg(t);let i,r=Hi(e),o=kn(void 0);try{return n()}finally{Hi(r),kn(o)}}function zw(){return Aw()!==void 0||sm()!=null}var pi=0,ae=1,he=2,Lt=3,Zn=4,on=5,ua=6,ps=7,xt=8,xr=9,gi=10,qe=11,gs=12,Yg=13,ma=14,an=15,po=16,ha=17,Wi=18,Er=19,Qg=20,wr=21,xm=22,co=23,Rn=24,fa=25,go=26,mt=27,$w=1,Xg=6,_o=7,vc=8,pa=9,_t=10;function Dr(t){return Array.isArray(t)&&typeof t[$w]=="object"}function _i(t){return Array.isArray(t)&&t[$w]===!0}function Kg(t){return(t.flags&4)!==0}function Mr(t){return t.componentOffset>-1}function _s(t){return(t.flags&1)===1}function bi(t){return!!t.template}function bs(t){return(t[he]&512)!==0}function ga(t){return(t[he]&256)===256}var Jg="svg",Ww="math";function An(t){for(;Array.isArray(t);)t=t[pi];return t}function e_(t,n){return An(n[t])}function Nn(t,n){return An(n[t.index])}function Em(t,n){return t.data[n]}function Gw(t,n){return t[n]}function Yn(t,n){let e=n[t];return Dr(e)?e:e[pi]}function qw(t){return(t[he]&4)===4}function Dm(t){return(t[he]&128)===128}function Zw(t){return _i(t[Lt])}function Cn(t,n){return n==null?null:t[n]}function t_(t){t[ha]=0}function n_(t){t[he]&1024||(t[he]|=1024,Dm(t)&&_a(t))}function Yw(t,n){for(;t>0;)n=n[ma],t--;return n}function yc(t){return!!(t[he]&9216||t[Rn]?.dirty)}function Mm(t){t[gi].changeDetectionScheduler?.notify(8),t[he]&64&&(t[he]|=1024),yc(t)&&_a(t)}function _a(t){t[gi].changeDetectionScheduler?.notify(0);let n=uo(t);for(;n!==null&&!(n[he]&8192||(n[he]|=8192,!Dm(n)));)n=uo(n)}function i_(t,n){if(ga(t))throw new R(911,!1);t[wr]===null&&(t[wr]=[]),t[wr].push(n)}function Qw(t,n){if(t[wr]===null)return;let e=t[wr].indexOf(n);e!==-1&&t[wr].splice(e,1)}function uo(t){let n=t[Lt];return _i(n)?n[Lt]:n}function r_(t){return t[ps]??=[]}function o_(t){return t.cleanup??=[]}function Xw(t,n,e,i){let r=r_(n);r.push(e),t.firstCreatePass&&o_(t).push(i,r.length-1)}var we={lFrame:lx(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var Ig=!1;function Kw(){return we.lFrame.elementDepthCount}function Jw(){we.lFrame.elementDepthCount++}function a_(){we.lFrame.elementDepthCount--}function Sm(){return we.bindingsEnabled}function s_(){return we.skipHydrationRootTNode!==null}function l_(t){return we.skipHydrationRootTNode===t}function c_(){we.skipHydrationRootTNode=null}function re(){return we.lFrame.lView}function at(){return we.lFrame.tView}function Ae(t){return we.lFrame.contextLView=t,t[xt]}function Ne(t){return we.lFrame.contextLView=null,t}function Vt(){let t=d_();for(;t!==null&&t.type===64;)t=t.parent;return t}function d_(){return we.lFrame.currentTNode}function vs(){let t=we.lFrame,n=t.currentTNode;return t.isParent?n:n.parent}function Sr(t,n){let e=we.lFrame;e.currentTNode=t,e.isParent=n}function u_(){return we.lFrame.isParent}function m_(){we.lFrame.isParent=!1}function ex(){return we.lFrame.contextLView}function h_(){return Ig}function mc(t){let n=Ig;return Ig=t,n}function ys(){let t=we.lFrame,n=t.bindingRootIndex;return n===-1&&(n=t.bindingRootIndex=t.tView.bindingStartIndex),n}function tx(){return we.lFrame.bindingIndex}function nx(t){return we.lFrame.bindingIndex=t}function Ir(){return we.lFrame.bindingIndex++}function Im(t){let n=we.lFrame,e=n.bindingIndex;return n.bindingIndex=n.bindingIndex+t,e}function ix(){return we.lFrame.inI18n}function f_(t){we.lFrame.inI18n=t}function rx(t,n){let e=we.lFrame;e.bindingIndex=e.bindingRootIndex=t,Tm(n)}function ox(){return we.lFrame.currentDirectiveIndex}function Tm(t){we.lFrame.currentDirectiveIndex=t}function ax(t){let n=we.lFrame.currentDirectiveIndex;return n===-1?null:t[n]}function km(){return we.lFrame.currentQueryIndex}function Cc(t){we.lFrame.currentQueryIndex=t}function QR(t){let n=t[ae];return n.type===2?n.declTNode:n.type===1?t[on]:null}function p_(t,n,e){if(e&4){let r=n,o=t;for(;r=r.parent,r===null&&!(e&1);)if(r=QR(o),r===null||(o=o[ma],r.type&10))break;if(r===null)return!1;n=r,t=o}let i=we.lFrame=sx();return i.currentTNode=n,i.lView=t,!0}function Om(t){let n=sx(),e=t[ae];we.lFrame=n,n.currentTNode=e.firstChild,n.lView=t,n.tView=e,n.contextLView=t,n.bindingIndex=e.bindingStartIndex,n.inI18n=!1}function sx(){let t=we.lFrame,n=t===null?null:t.child;return n===null?lx(t):n}function lx(t){let n={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return t!==null&&(t.child=n),n}function cx(){let t=we.lFrame;return we.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}var g_=cx;function Rm(){let t=cx();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function dx(t){return(we.lFrame.contextLView=Yw(t,we.lFrame.contextLView))[xt]}function Gi(){return we.lFrame.selectedIndex}function bo(t){we.lFrame.selectedIndex=t}function Cs(){let t=we.lFrame;return Em(t.tView,t.selectedIndex)}function qi(){we.lFrame.currentNamespace=Jg}function wc(){XR()}function XR(){we.lFrame.currentNamespace=null}function ux(){return we.lFrame.currentNamespace}var mx=!0;function xc(){return mx}function ws(t){mx=t}function Tg(t,n=null,e=null,i){let r=__(t,n,e,i);return r.resolveInjectorInitializers(),r}function __(t,n=null,e=null,i,r=new Set){let o=[e||Qt,Vw(t)],a;return new ca(o,n||fs(),a||null,r)}var Y=class t{static THROW_IF_NOT_FOUND=oa;static NULL=new uc;static create(n,e){if(Array.isArray(n))return Tg({name:""},e,n,"");{let i=n.name??"";return Tg({name:i},n.parent,n.providers,i)}}static \u0275prov=w({token:t,providedIn:"any",factory:()=>A($g)});static __NG_ELEMENT_ID__=-1},J=new C(""),pn=(()=>{class t{static __NG_ELEMENT_ID__=KR;static __NG_ENV_ID__=e=>e}return t})(),um=class extends pn{_lView;constructor(n){super(),this._lView=n}get destroyed(){return ga(this._lView)}onDestroy(n){let e=this._lView;return i_(e,n),()=>Qw(e,n)}};function KR(){return new um(re())}var hx=!1,fx=new C(""),Tr=(()=>{class t{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new At(!1);debugTaskTracker=u(fx,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new de(e=>{e.next(!1),e.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let e=this.taskId++;return this.pendingTasks.add(e),this.debugTaskTracker?.add(e),e}has(e){return this.pendingTasks.has(e)}remove(e){this.pendingTasks.delete(e),this.debugTaskTracker?.remove(e),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=w({token:t,providedIn:"root",factory:()=>new t})}return t})(),kg=class extends I{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(n=!1){super(),this.__isAsync=n,zw()&&(this.destroyRef=u(pn,{optional:!0})??void 0,this.pendingTasks=u(Tr,{optional:!0})??void 0)}emit(n){let e=se(null);try{super.next(n)}finally{se(e)}}subscribe(n,e,i){let r=n,o=e||(()=>null),a=i;if(n&&typeof n=="object"){let l=n;r=l.next?.bind(l),o=l.error?.bind(l),a=l.complete?.bind(l)}this.__isAsync&&(o=this.wrapInTimeout(o),r&&(r=this.wrapInTimeout(r)),a&&(a=this.wrapInTimeout(a)));let s=super.subscribe({next:r,error:o,complete:a});return n instanceof Re&&n.add(s),s}wrapInTimeout(n){return e=>{let i=this.pendingTasks?.add();setTimeout(()=>{try{n(e)}finally{i!==void 0&&this.pendingTasks?.remove(i)}})}}},K=kg;function mm(...t){}function b_(t){let n,e;function i(){t=mm;try{e!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(e),n!==void 0&&clearTimeout(n)}catch{}}return n=setTimeout(()=>{t(),i()}),typeof requestAnimationFrame=="function"&&(e=requestAnimationFrame(()=>{t(),i()})),()=>i()}function px(t){return queueMicrotask(()=>t()),()=>{t=mm}}var v_="isAngularZone",hc=v_+"_ID",JR=0,B=class t{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new K(!1);onMicrotaskEmpty=new K(!1);onStable=new K(!1);onError=new K(!1);constructor(n){let{enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:o=hx}=n;if(typeof Zone>"u")throw new R(908,!1);Zone.assertZonePatched();let a=this;a._nesting=0,a._outer=a._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(a._inner=a._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(a._inner=a._inner.fork(Zone.longStackTraceZoneSpec)),a.shouldCoalesceEventChangeDetection=!r&&i,a.shouldCoalesceRunChangeDetection=r,a.callbackScheduled=!1,a.scheduleInRootZone=o,nA(a)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(v_)===!0}static assertInAngularZone(){if(!t.isInAngularZone())throw new R(909,!1)}static assertNotInAngularZone(){if(t.isInAngularZone())throw new R(909,!1)}run(n,e,i){return this._inner.run(n,e,i)}runTask(n,e,i,r){let o=this._inner,a=o.scheduleEventTask("NgZoneEvent: "+r,n,eA,mm,mm);try{return o.runTask(a,e,i)}finally{o.cancelTask(a)}}runGuarded(n,e,i){return this._inner.runGuarded(n,e,i)}runOutsideAngular(n){return this._outer.run(n)}},eA={};function y_(t){if(t._nesting==0&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular(()=>t.onStable.emit(null))}finally{t.isStable=!0}}}function tA(t){if(t.isCheckStableRunning||t.callbackScheduled)return;t.callbackScheduled=!0;function n(){b_(()=>{t.callbackScheduled=!1,Og(t),t.isCheckStableRunning=!0,y_(t),t.isCheckStableRunning=!1})}t.scheduleInRootZone?Zone.root.run(()=>{n()}):t._outer.run(()=>{n()}),Og(t)}function nA(t){let n=()=>{tA(t)},e=JR++;t._inner=t._inner.fork({name:"angular",properties:{[v_]:!0,[hc]:e,[hc+e]:!0},onInvokeTask:(i,r,o,a,s,l)=>{if(iA(l))return i.invokeTask(o,a,s,l);try{return Dw(t),i.invokeTask(o,a,s,l)}finally{(t.shouldCoalesceEventChangeDetection&&a.type==="eventTask"||t.shouldCoalesceRunChangeDetection)&&n(),Mw(t)}},onInvoke:(i,r,o,a,s,l,c)=>{try{return Dw(t),i.invoke(o,a,s,l,c)}finally{t.shouldCoalesceRunChangeDetection&&!t.callbackScheduled&&!rA(l)&&n(),Mw(t)}},onHasTask:(i,r,o,a)=>{i.hasTask(o,a),r===o&&(a.change=="microTask"?(t._hasPendingMicrotasks=a.microTask,Og(t),y_(t)):a.change=="macroTask"&&(t.hasPendingMacrotasks=a.macroTask))},onHandleError:(i,r,o,a)=>(i.handleError(o,a),t.runOutsideAngular(()=>t.onError.emit(a)),!1)})}function Og(t){t._hasPendingMicrotasks||(t.shouldCoalesceEventChangeDetection||t.shouldCoalesceRunChangeDetection)&&t.callbackScheduled===!0?t.hasPendingMicrotasks=!0:t.hasPendingMicrotasks=!1}function Dw(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function Mw(t){t._nesting--,y_(t)}var fc=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new K;onMicrotaskEmpty=new K;onStable=new K;onError=new K;run(n,e,i){return n.apply(e,i)}runGuarded(n,e,i){return n.apply(e,i)}runOutsideAngular(n){return n()}runTask(n,e,i,r){return n.apply(e,i)}};function iA(t){return gx(t,"__ignore_ng_zone__")}function rA(t){return gx(t,"__scheduler_tick__")}function gx(t,n){return!Array.isArray(t)||t.length!==1?!1:t[0]?.data?.[n]===!0}var yn=class{_console=console;handleError(n){this._console.error("ERROR",n)}},Qn=new C("",{factory:()=>{let t=u(B),n=u(Xe),e;return i=>{t.runOutsideAngular(()=>{n.destroyed&&!e?setTimeout(()=>{throw i}):(e??=n.get(yn),e.handleError(i))})}}}),_x={provide:fo,useValue:()=>{let t=u(yn,{optional:!0})},multi:!0},oA=new C("",{factory:()=>{let t=u(J).defaultView;if(!t)return;let n=u(Qn),e=o=>{n(o.reason),o.preventDefault()},i=o=>{o.error?n(o.error):n(new Error(o.message,{cause:o})),o.preventDefault()},r=()=>{t.addEventListener("unhandledrejection",e),t.addEventListener("error",i)};typeof Zone<"u"?Zone.root.run(r):r(),u(pn).onDestroy(()=>{t.removeEventListener("error",i),t.removeEventListener("unhandledrejection",e)})}});function C_(){return On([Bw(()=>{u(oA)})])}function Fe(t,n){let[e,i,r]=ag(t,n?.equal),o=e,a=o[Rt];return o.set=i,o.update=r,o.asReadonly=bx.bind(o),o}function bx(){let t=this[Rt];if(t.readonlyFn===void 0){let n=()=>this();n[Rt]=t,t.readonlyFn=n}return t.readonlyFn}var xs=(()=>{class t{view;node;constructor(e,i){this.view=e,this.node=i}static __NG_ELEMENT_ID__=aA}return t})();function aA(){return new xs(re(),Vt())}var zi=class{},Ec=new C("",{factory:()=>!0});var w_=new C(""),Am=(()=>{class t{internalPendingTasks=u(Tr);scheduler=u(zi);errorHandler=u(Qn);add(){let e=this.internalPendingTasks.add();return()=>{this.internalPendingTasks.has(e)&&(this.scheduler.notify(11),this.internalPendingTasks.remove(e))}}run(e){let i=this.add();e().catch(this.errorHandler).finally(i)}static \u0275prov=w({token:t,providedIn:"root",factory:()=>new t})}return t})(),Nm=(()=>{class t{static \u0275prov=w({token:t,providedIn:"root",factory:()=>new Rg})}return t})(),Rg=class{dirtyEffectCount=0;queues=new Map;add(n){this.enqueue(n),this.schedule(n)}schedule(n){n.dirty&&this.dirtyEffectCount++}remove(n){let e=n.zone,i=this.queues.get(e);i.has(n)&&(i.delete(n),n.dirty&&this.dirtyEffectCount--)}enqueue(n){let e=n.zone;this.queues.has(e)||this.queues.set(e,new Set);let i=this.queues.get(e);i.has(n)||i.add(n)}flush(){for(;this.dirtyEffectCount>0;){let n=!1;for(let[e,i]of this.queues)e===null?n||=this.flushQueue(i):n||=e.run(()=>this.flushQueue(i));n||(this.dirtyEffectCount=0)}}flushQueue(n){let e=!1;for(let i of n)i.dirty&&(this.dirtyEffectCount--,e=!0,i.run());return e}},hm=class{[Rt];constructor(n){this[Rt]=n}destroy(){this[Rt].destroy()}};function vo(t,n){let e=n?.injector??u(Y),i=n?.manualCleanup!==!0?e.get(pn):null,r,o=e.get(xs,null,{optional:!0}),a=e.get(zi);return o!==null?(r=cA(o.view,a,t),i instanceof um&&i._lView===o.view&&(i=null)):r=dA(t,e.get(Nm),a),r.injector=e,i!==null&&(r.onDestroyFns=[i.onDestroy(()=>r.destroy())]),new hm(r)}var vx=te(_({},lg),{cleanupFns:void 0,zone:null,onDestroyFns:null,run(){let t=mc(!1);try{cg(this)}finally{mc(t)}},cleanup(){if(!this.cleanupFns?.length)return;let t=se(null);try{for(;this.cleanupFns.length;)this.cleanupFns.pop()()}finally{this.cleanupFns=[],se(t)}}}),sA=te(_({},vx),{consumerMarkedDirty(){this.scheduler.schedule(this),this.notifier.notify(12)},destroy(){if(io(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.scheduler.remove(this)}}),lA=te(_({},vx),{consumerMarkedDirty(){this.view[he]|=8192,_a(this.view),this.notifier.notify(13)},destroy(){if(io(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.view[co]?.delete(this)}});function cA(t,n,e){let i=Object.create(lA);return i.view=t,i.zone=typeof Zone<"u"?Zone.current:null,i.notifier=n,i.fn=yx(i,e),t[co]??=new Set,t[co].add(i),i.consumerMarkedDirty(i),i}function dA(t,n,e){let i=Object.create(sA);return i.fn=yx(i,t),i.scheduler=n,i.notifier=e,i.zone=typeof Zone<"u"?Zone.current:null,i.scheduler.add(i),i.notifier.notify(12),i}function yx(t,n){return()=>{n(e=>(t.cleanupFns??=[]).push(e))}}function Pc(t){return{toString:t}.toString()}function bA(t){return typeof t=="function"}function rE(t,n,e,i){n!==null?n.applyValueToInputSignal(n,i):t[e]=i}var Wm=class{previousValue;currentValue;firstChange;constructor(n,e,i){this.previousValue=n,this.currentValue=e,this.firstChange=i}isFirstChange(){return this.firstChange}},it=(()=>{let t=()=>oE;return t.ngInherit=!0,t})();function oE(t){return t.type.prototype.ngOnChanges&&(t.setInput=yA),vA}function vA(){let t=sE(this),n=t?.current;if(n){let e=t.previous;if(e===fi)t.previous=n;else for(let i in n)e[i]=n[i];t.current=null,this.ngOnChanges(n)}}function yA(t,n,e,i,r){let o=this.declaredInputs[i],a=sE(t)||CA(t,{previous:fi,current:null}),s=a.current||(a.current={}),l=a.previous,c=l[o];s[o]=new Wm(c&&c.currentValue,e,l===fi),rE(t,n,r,e)}var aE="__ngSimpleChanges__";function sE(t){return t[aE]||null}function CA(t,n){return t[aE]=n}var Cx=[];var Ke=function(t,n=null,e){for(let i=0;i<Cx.length;i++){let r=Cx[i];r(t,n,e)}},je=(function(t){return t[t.TemplateCreateStart=0]="TemplateCreateStart",t[t.TemplateCreateEnd=1]="TemplateCreateEnd",t[t.TemplateUpdateStart=2]="TemplateUpdateStart",t[t.TemplateUpdateEnd=3]="TemplateUpdateEnd",t[t.LifecycleHookStart=4]="LifecycleHookStart",t[t.LifecycleHookEnd=5]="LifecycleHookEnd",t[t.OutputStart=6]="OutputStart",t[t.OutputEnd=7]="OutputEnd",t[t.BootstrapApplicationStart=8]="BootstrapApplicationStart",t[t.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",t[t.BootstrapComponentStart=10]="BootstrapComponentStart",t[t.BootstrapComponentEnd=11]="BootstrapComponentEnd",t[t.ChangeDetectionStart=12]="ChangeDetectionStart",t[t.ChangeDetectionEnd=13]="ChangeDetectionEnd",t[t.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",t[t.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",t[t.AfterRenderHooksStart=16]="AfterRenderHooksStart",t[t.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",t[t.ComponentStart=18]="ComponentStart",t[t.ComponentEnd=19]="ComponentEnd",t[t.DeferBlockStateStart=20]="DeferBlockStateStart",t[t.DeferBlockStateEnd=21]="DeferBlockStateEnd",t[t.DynamicComponentStart=22]="DynamicComponentStart",t[t.DynamicComponentEnd=23]="DynamicComponentEnd",t[t.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",t[t.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",t})(je||{});function wA(t,n,e){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:o}=n.type.prototype;if(i){let a=oE(n);(e.preOrderHooks??=[]).push(t,a),(e.preOrderCheckHooks??=[]).push(t,a)}r&&(e.preOrderHooks??=[]).push(0-t,r),o&&((e.preOrderHooks??=[]).push(t,o),(e.preOrderCheckHooks??=[]).push(t,o))}function lE(t,n){for(let e=n.directiveStart,i=n.directiveEnd;e<i;e++){let o=t.data[e].type.prototype,{ngAfterContentInit:a,ngAfterContentChecked:s,ngAfterViewInit:l,ngAfterViewChecked:c,ngOnDestroy:d}=o;a&&(t.contentHooks??=[]).push(-e,a),s&&((t.contentHooks??=[]).push(e,s),(t.contentCheckHooks??=[]).push(e,s)),l&&(t.viewHooks??=[]).push(-e,l),c&&((t.viewHooks??=[]).push(e,c),(t.viewCheckHooks??=[]).push(e,c)),d!=null&&(t.destroyHooks??=[]).push(e,d)}}function jm(t,n,e){cE(t,n,3,e)}function Um(t,n,e,i){(t[he]&3)===e&&cE(t,n,e,i)}function x_(t,n){let e=t[he];(e&3)===n&&(e&=16383,e+=1,t[he]=e)}function cE(t,n,e,i){let r=i!==void 0?t[ha]&65535:0,o=i??-1,a=n.length-1,s=0;for(let l=r;l<a;l++)if(typeof n[l+1]=="number"){if(s=n[l],i!=null&&s>=i)break}else n[l]<0&&(t[ha]+=65536),(s<o||o==-1)&&(xA(t,e,n,l),t[ha]=(t[ha]&4294901760)+l+2),l++}function wx(t,n){Ke(je.LifecycleHookStart,t,n);let e=se(null);try{n.call(t)}finally{se(e),Ke(je.LifecycleHookEnd,t,n)}}function xA(t,n,e,i){let r=e[i]<0,o=e[i+1],a=r?-e[i]:e[i],s=t[a];r?t[he]>>14<t[ha]>>16&&(t[he]&3)===n&&(t[he]+=16384,wx(s,o)):wx(s,o)}var Ds=-1,va=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(n,e,i,r){this.factory=n,this.name=r,this.canSeeViewProviders=e,this.injectImpl=i}};function EA(t){return(t.flags&8)!==0}function DA(t){return(t.flags&16)!==0}function MA(t,n,e){let i=0;for(;i<e.length;){let r=e[i];if(typeof r=="number"){if(r!==0)break;i++;let o=e[i++],a=e[i++],s=e[i++];t.setAttribute(n,a,s,o)}else{let o=r,a=e[++i];SA(o)?t.setProperty(n,o,a):t.setAttribute(n,o,a),i++}}return i}function dE(t){return t===3||t===4||t===6}function SA(t){return t.charCodeAt(0)===64}function Ms(t,n){if(!(n===null||n.length===0))if(t===null||t.length===0)t=n.slice();else{let e=-1;for(let i=0;i<n.length;i++){let r=n[i];typeof r=="number"?e=r:e===0||(e===-1||e===2?xx(t,e,r,null,n[++i]):xx(t,e,r,null,null))}}return t}function xx(t,n,e,i,r){let o=0,a=t.length;if(n===-1)a=-1;else for(;o<t.length;){let s=t[o++];if(typeof s=="number"){if(s===n){a=-1;break}else if(s>n){a=o-1;break}}}for(;o<t.length;){let s=t[o];if(typeof s=="number")break;if(s===e){r!==null&&(t[o+1]=r);return}o++,r!==null&&o++}a!==-1&&(t.splice(a,0,n),o=a+1),t.splice(o++,0,e),r!==null&&t.splice(o++,0,r)}function uE(t){return t!==Ds}function Gm(t){return t&32767}function IA(t){return t>>16}function qm(t,n){let e=IA(t),i=n;for(;e>0;)i=i[ma],e--;return i}var N_=!0;function Ex(t){let n=N_;return N_=t,n}var TA=256,mE=TA-1,hE=5,kA=0,Zi={};function OA(t,n,e){let i;typeof e=="string"?i=e.charCodeAt(0)||0:e.hasOwnProperty(da)&&(i=e[da]),i==null&&(i=e[da]=kA++);let r=i&mE,o=1<<r;n.data[t+(r>>hE)]|=o}function Zm(t,n){let e=fE(t,n);if(e!==-1)return e;let i=n[ae];i.firstCreatePass&&(t.injectorIndex=n.length,E_(i.data,t),E_(n,null),E_(i.blueprint,null));let r=Mb(t,n),o=t.injectorIndex;if(uE(r)){let a=Gm(r),s=qm(r,n),l=s[ae].data;for(let c=0;c<8;c++)n[o+c]=s[a+c]|l[a+c]}return n[o+8]=r,o}function E_(t,n){t.push(0,0,0,0,0,0,0,0,n)}function fE(t,n){return t.injectorIndex===-1||t.parent&&t.parent.injectorIndex===t.injectorIndex||n[t.injectorIndex+8]===null?-1:t.injectorIndex}function Mb(t,n){if(t.parent&&t.parent.injectorIndex!==-1)return t.parent.injectorIndex;let e=0,i=null,r=n;for(;r!==null;){if(i=vE(r),i===null)return Ds;if(e++,r=r[ma],i.injectorIndex!==-1)return i.injectorIndex|e<<16}return Ds}function P_(t,n,e){OA(t,n,e)}function RA(t,n){if(n==="class")return t.classes;if(n==="style")return t.styles;let e=t.attrs;if(e){let i=e.length,r=0;for(;r<i;){let o=e[r];if(dE(o))break;if(o===0)r=r+2;else if(typeof o=="number")for(r++;r<i&&typeof e[r]=="string";)r++;else{if(o===n)return e[r+1];r=r+2}}}return null}function pE(t,n,e){if(e&8||t!==void 0)return t;vm(n,"NodeInjector")}function gE(t,n,e,i){if(e&8&&i===void 0&&(i=null),(e&3)===0){let r=t[xr],o=kn(void 0);try{return r?r.get(n,i,e&8):Hg(n,i,e&8)}finally{kn(o)}}return pE(i,n,e)}function _E(t,n,e,i=0,r){if(t!==null){if(n[he]&2048&&!(i&2)){let a=FA(t,n,e,i,Zi);if(a!==Zi)return a}let o=bE(t,n,e,i,Zi);if(o!==Zi)return o}return gE(n,e,i,r)}function bE(t,n,e,i,r){let o=NA(e);if(typeof o=="function"){if(!p_(n,t,i))return i&1?pE(r,e,i):gE(n,e,i,r);try{let a;if(a=o(i),a==null&&!(i&8))vm(e);else return a}finally{g_()}}else if(typeof o=="number"){let a=null,s=fE(t,n),l=Ds,c=i&1?n[an][on]:null;for((s===-1||i&4)&&(l=s===-1?Mb(t,n):n[s+8],l===Ds||!Mx(i,!1)?s=-1:(a=n[ae],s=Gm(l),n=qm(l,n)));s!==-1;){let d=n[ae];if(Dx(o,s,d.data)){let m=AA(s,n,e,a,i,c);if(m!==Zi)return m}l=n[s+8],l!==Ds&&Mx(i,n[ae].data[s+8]===c)&&Dx(o,s,n)?(a=d,s=Gm(l),n=qm(l,n)):s=-1}}return r}function AA(t,n,e,i,r,o){let a=n[ae],s=a.data[t+8],l=i==null?Mr(s)&&N_:i!=a&&(s.type&3)!==0,c=r&1&&o===s,d=Hm(s,a,e,l,c);return d!==null?Tc(n,a,d,s,r):Zi}function Hm(t,n,e,i,r){let o=t.providerIndexes,a=n.data,s=o&1048575,l=t.directiveStart,c=t.directiveEnd,d=o>>20,m=i?s:s+d,f=r?s+d:c;for(let h=m;h<f;h++){let b=a[h];if(h<l&&e===b||h>=l&&b.type===e)return h}if(r){let h=a[l];if(h&&bi(h)&&h.type===e)return l}return null}function Tc(t,n,e,i,r){let o=t[e],a=n.data;if(o instanceof va){let s=o;if(s.resolving)throw Ug("");let l=Ex(s.canSeeViewProviders);s.resolving=!0;let c=a[e].type||a[e],d,m=s.injectImpl?kn(s.injectImpl):null,f=p_(t,i,0);try{o=t[e]=s.factory(void 0,r,a,t,i),n.firstCreatePass&&e>=i.directiveStart&&wA(e,a[e],n)}finally{m!==null&&kn(m),Ex(l),s.resolving=!1,g_()}}return o}function NA(t){if(typeof t=="string")return t.charCodeAt(0)||0;let n=t.hasOwnProperty(da)?t[da]:void 0;return typeof n=="number"?n>=0?n&mE:PA:n}function Dx(t,n,e){let i=1<<t;return!!(e[n+(t>>hE)]&i)}function Mx(t,n){return!(t&2)&&!(t&1&&n)}var ba=class{_tNode;_lView;constructor(n,e){this._tNode=n,this._lView=e}get(n,e,i){return _E(this._tNode,this._lView,n,aa(i),e)}};function PA(){return new ba(Vt(),re())}function Tt(t){return Pc(()=>{let n=t.prototype.constructor,e=n[dc]||F_(n),i=Object.prototype,r=Object.getPrototypeOf(t.prototype).constructor;for(;r&&r!==i;){let o=r[dc]||F_(r);if(o&&o!==e)return o;r=Object.getPrototypeOf(r)}return o=>new o})}function F_(t){return Ag(t)?()=>{let n=F_(Ft(t));return n&&n()}:sa(t)}function FA(t,n,e,i,r){let o=t,a=n;for(;o!==null&&a!==null&&a[he]&2048&&!bs(a);){let s=bE(o,a,e,i|2,Zi);if(s!==Zi)return s;let l=o.parent;if(!l){let c=a[Qg];if(c){let d=c.get(e,Zi,i&-5);if(d!==Zi)return d}l=vE(a),a=a[ma]}o=l}return r}function vE(t){let n=t[ae],e=n.type;return e===2?n.declTNode:e===1?t[on]:null}function lh(t){return RA(Vt(),t)}function LA(){return Rs(Vt(),re())}function Rs(t,n){return new U(Nn(t,n))}var U=(()=>{class t{nativeElement;constructor(e){this.nativeElement=e}static __NG_ELEMENT_ID__=LA}return t})();function yE(t){return t instanceof U?t.nativeElement:t}function BA(){return this._results[Symbol.iterator]()}var Ci=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new I}constructor(n=!1){this._emitDistinctChangesOnly=n}get(n){return this._results[n]}map(n){return this._results.map(n)}filter(n){return this._results.filter(n)}find(n){return this._results.find(n)}reduce(n,e){return this._results.reduce(n,e)}forEach(n){this._results.forEach(n)}some(n){return this._results.some(n)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(n,e){this.dirty=!1;let i=Pw(n);(this._changesDetected=!Nw(this._results,i,e))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(n){this._onDirty=n}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=BA};function CE(t){return(t.flags&128)===128}var Sb=(function(t){return t[t.OnPush=0]="OnPush",t[t.Eager=1]="Eager",t[t.Default=1]="Default",t})(Sb||{}),wE=new Map,VA=0;function jA(){return VA++}function UA(t){wE.set(t[Er],t)}function L_(t){wE.delete(t[Er])}var Sx="__ngContext__";function Ss(t,n){Dr(n)?(t[Sx]=n[Er],UA(n)):t[Sx]=n}function xE(t){return DE(t[gs])}function EE(t){return DE(t[Zn])}function DE(t){for(;t!==null&&!_i(t);)t=t[Zn];return t}var B_;function Ib(t){B_=t}function Tb(){if(B_!==void 0)return B_;if(typeof document<"u")return document;throw new R(210,!1)}var wo=new C("",{factory:()=>HA}),HA="ng";var ch=new C(""),wa=new C("",{providedIn:"platform",factory:()=>"unknown"}),Fc=new C(""),xa=new C("",{factory:()=>u(J).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var ME="r";var SE="di";var IE=!1,TE=new C("",{factory:()=>IE});var dh=new C("");var Ix=new WeakMap;function zA(t,n){if(t==null||typeof t!="object")return;let e=Ix.get(t);e||(e=new WeakSet,Ix.set(t,e)),e.add(n)}var $A=(t,n,e,i)=>{};function WA(t,n,e,i){$A(t,n,e,i)}function uh(t){return(t.flags&32)===32}var GA=()=>null;function kE(t,n,e=!1){return GA(t,n,e)}function OE(t,n){let e=t.contentQueries;if(e!==null){let i=se(null);try{for(let r=0;r<e.length;r+=2){let o=e[r],a=e[r+1];if(a!==-1){let s=t.data[a];Cc(o),s.contentQueries(2,n[a],a)}}}finally{se(i)}}}function V_(t,n,e){Cc(0);let i=se(null);try{n(t,e)}finally{se(i)}}function kb(t,n,e){if(Kg(n)){let i=se(null);try{let r=n.directiveStart,o=n.directiveEnd;for(let a=r;a<o;a++){let s=t.data[a];if(s.contentQueries){let l=e[a];s.contentQueries(1,l,a)}}}finally{se(i)}}}var wi=(function(t){return t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom",t[t.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",t})(wi||{});var Pm;function qA(){if(Pm===void 0&&(Pm=null,mo.trustedTypes))try{Pm=mo.trustedTypes.createPolicy("angular",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return Pm}function Lc(t){return qA()?.createHTML(t)||t}var Fm;function RE(){if(Fm===void 0&&(Fm=null,mo.trustedTypes))try{Fm=mo.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return Fm}function Tx(t){return RE()?.createHTML(t)||t}function kx(t){return RE()?.createScriptURL(t)||t}var Or=class{changingThisBreaksApplicationSecurity;constructor(n){this.changingThisBreaksApplicationSecurity=n}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${fm})`}},j_=class extends Or{getTypeName(){return"HTML"}},U_=class extends Or{getTypeName(){return"Style"}},H_=class extends Or{getTypeName(){return"Script"}},z_=class extends Or{getTypeName(){return"URL"}},$_=class extends Or{getTypeName(){return"ResourceURL"}};function Pn(t){return t instanceof Or?t.changingThisBreaksApplicationSecurity:t}function Qi(t,n){let e=AE(t);if(e!=null&&e!==n){if(e==="ResourceURL"&&n==="URL")return!0;throw new Error(`Required a safe ${n}, got a ${e} (see ${fm})`)}return e===n}function AE(t){return t instanceof Or&&t.getTypeName()||null}function Ob(t){return new j_(t)}function Rb(t){return new U_(t)}function Ab(t){return new H_(t)}function Nb(t){return new z_(t)}function Pb(t){return new $_(t)}function NE(t){let n=new G_(t);return ZA()?new W_(n):n}var W_=class{inertDocumentHelper;constructor(n){this.inertDocumentHelper=n}getInertBodyElement(n){n="<body><remove></remove>"+n;try{let e=new window.DOMParser().parseFromString(Lc(n),"text/html").body;return e===null?this.inertDocumentHelper.getInertBodyElement(n):(e.firstChild?.remove(),e)}catch{return null}}},G_=class{defaultDoc;inertDocument;constructor(n){this.defaultDoc=n,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")}getInertBodyElement(n){let e=this.inertDocument.createElement("template");return e.innerHTML=Lc(n),e}};function ZA(){try{return!!new window.DOMParser().parseFromString(Lc(""),"text/html")}catch{return!1}}var YA=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function As(t){return t=String(t),t.match(YA)?t:"unsafe:"+t}function Xi(t){let n={};for(let e of t.split(","))n[e]=!0;return n}function Ns(...t){let n={};for(let e of t)for(let i in e)e.hasOwnProperty(i)&&(n[i]=!0);return n}var PE=Xi("area,br,col,hr,img,wbr"),FE=Xi("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),LE=Xi("rp,rt"),QA=Ns(LE,FE),XA=Ns(FE,Xi("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),KA=Ns(LE,Xi("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),q_=Ns(PE,XA,KA,QA),Fb=Xi("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),JA=Xi("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),eN=Xi("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),Z_=Ns(Fb,JA,eN),tN=Xi("script,style,template"),BE=Ns(Fb,Xi("action,formaction,data,codebase")),Y_=class{sanitizedSomething=!1;buf=[];sanitizeChildren(n){let e=n.firstChild,i=!0,r=[];for(;e;){if(e.nodeType===Node.ELEMENT_NODE?i=this.startElement(e):e.nodeType===Node.TEXT_NODE?this.chars(e.nodeValue):this.sanitizedSomething=!0,i&&e.firstChild){r.push(e),e=rN(e);continue}for(;e;){e.nodeType===Node.ELEMENT_NODE&&this.endElement(e);let o=iN(e);if(o){e=o;break}e=r.pop()}}return this.buf.join("")}startElement(n){let e=Ox(n).toLowerCase();if(!q_.hasOwnProperty(e))return this.sanitizedSomething=!0,!tN.hasOwnProperty(e);this.buf.push("<"),this.buf.push(e);let i=n.attributes;for(let r=0;r<i.length;r++){let o=i.item(r),a=o.name,s=a.toLowerCase();if(!Z_.hasOwnProperty(s)){this.sanitizedSomething=!0;continue}let l=o.value;Fb[s]&&(l=As(l)),this.buf.push(" ",a,'="',Rx(l),'"')}return this.buf.push(">"),!0}endElement(n){let e=Ox(n).toLowerCase();q_.hasOwnProperty(e)&&!PE.hasOwnProperty(e)&&(this.buf.push("</"),this.buf.push(e),this.buf.push(">"))}chars(n){this.buf.push(Rx(n))}};function nN(t,n){return(t.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY)!==Node.DOCUMENT_POSITION_CONTAINED_BY}function iN(t){let n=t.nextSibling;if(n&&t!==n.previousSibling)throw VE(n);return n}function rN(t){let n=t.firstChild;if(n&&nN(t,n))throw VE(n);return n}function Ox(t){let n=t.nodeName;return typeof n=="string"?n:"FORM"}function VE(t){return new Error(`Failed to sanitize html because the element is clobbered: ${t.outerHTML}`)}var oN=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,aN=/([^\#-~ |!])/g;function Rx(t){return t.replace(/&/g,"&amp;").replace(oN,function(n){let e=n.charCodeAt(0),i=n.charCodeAt(1);return"&#"+((e-55296)*1024+(i-56320)+65536)+";"}).replace(aN,function(n){return"&#"+n.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}var Lm;function mh(t,n){let e=null;try{Lm=Lm||NE(t);let i=n?String(n):"";e=Lm.getInertBodyElement(i);let r=5,o=i;do{if(r===0)throw new Error("Failed to sanitize html because the input is unstable");r--,i=o,o=e.innerHTML,e=Lm.getInertBodyElement(i)}while(i!==o);let s=new Y_().sanitizeChildren(Q_(e)||e);return Lc(s)}finally{if(e){let i=Q_(e)||e;for(;i.firstChild;)i.firstChild.remove()}}}function Q_(t){return"content"in t&&sN(t)?t.content:null}function sN(t){return t.nodeType===Node.ELEMENT_NODE&&t.nodeName==="TEMPLATE"}var lN=/^>|^->|<!--|-->|--!>|<!-$/g,cN=/(<|>)/g,dN="\u200B$1\u200B";function uN(t){return t.replace(lN,n=>n.replace(cN,dN))}function jE(t,n){return t.createText(n)}function mN(t,n,e){t.setValue(n,e)}function UE(t,n){return t.createComment(uN(n))}function Lb(t,n,e){return t.createElement(n,e)}function Is(t,n,e,i,r){t.insertBefore(n,e,i,r)}function HE(t,n,e){t.appendChild(n,e)}function Ax(t,n,e,i,r){i!==null?Is(t,n,e,i,r):HE(t,n,e)}function Bb(t,n,e,i){t.removeChild(null,n,e,i)}function hN(t,n,e){t.setAttribute(n,"style",e)}function fN(t,n,e){e===""?t.removeAttribute(n,"class"):t.setAttribute(n,"class",e)}function zE(t,n,e){let{mergedAttrs:i,classes:r,styles:o}=e;i!==null&&MA(t,n,i),r!==null&&fN(t,n,r),o!==null&&hN(t,n,o)}function pN(t){let n=re();t.src="",t.srcdoc=Lc(""),Bb(n[qe],t)}var bt=(function(t){return t[t.NONE=0]="NONE",t[t.HTML=1]="HTML",t[t.STYLE=2]="STYLE",t[t.SCRIPT=3]="SCRIPT",t[t.URL=4]="URL",t[t.RESOURCE_URL=5]="RESOURCE_URL",t})(bt||{});function Vb(t){let n=Ub();return n?Tx(n.sanitize(bt.HTML,t)||""):Qi(t,"HTML")?Tx(Pn(t)):mh(Tb(),ho(t))}function Rr(t){let n=Ub();return n?n.sanitize(bt.URL,t)||"":Qi(t,"URL")?Pn(t):As(ho(t))}function jb(t){let n=Ub();if(n)return kx(n.sanitize(bt.RESOURCE_URL,t)||"");if(Qi(t,"ResourceURL"))return kx(Pn(t));throw new R(904,!1)}function Ub(){let t=re();return t&&t[gi].sanitizer}var Bm=new Set(["href","xlink:href"]),$E={iframe:{sandbox:!0,allow:!0,allowfullscreen:!0,referrerpolicy:!0,csp:!0,fetchpriority:!0},animate:{attributename:!0,to:Bm,values:Bm,from:Bm},set:{attributename:!0,to:Bm},animatemotion:{attributename:!0},animatetransform:{attributename:!0}};function WE(t,n,e){let i=n.toLowerCase(),r=e.toLowerCase(),o=$E[i]?.[r];if(!o)return t;let a=Cs();if(a.type!==2)return t;let s=re();if(i==="iframe"){let c=Nn(a,s);pN(c)}if(typeof o!="boolean"){let d=Nn(a,s).getAttribute("attributeName");if(d&&o.has(d.toLowerCase()))throw new R(-910,!1);return t}let l=!1;throw new R(-910,l)}function GE(t){return t instanceof Function?t():t}function gN(t,n,e){let i=t.length;for(;;){let r=t.indexOf(n,e);if(r===-1)return r;if(r===0||t.charCodeAt(r-1)<=32){let o=n.length;if(r+o===i||t.charCodeAt(r+o)<=32)return r}e=r+1}}var qE="ng-template";function _N(t,n,e,i){let r=0;if(i){for(;r<n.length&&typeof n[r]=="string";r+=2)if(n[r]==="class"&&gN(n[r+1].toLowerCase(),e,0)!==-1)return!0}else if(Hb(t))return!1;if(r=n.indexOf(1,r),r>-1){let o;for(;++r<n.length&&typeof(o=n[r])=="string";)if(o.toLowerCase()===e)return!0}return!1}function Hb(t){return t.type===4&&t.value!==qE}function bN(t,n,e){let i=t.type===4&&!e?qE:t.value;return n===i}function vN(t,n,e){let i=4,r=t.attrs,o=r!==null?wN(r):0,a=!1;for(let s=0;s<n.length;s++){let l=n[s];if(typeof l=="number"){if(!a&&!vi(i)&&!vi(l))return!1;if(a&&vi(l))continue;a=!1,i=l|i&1;continue}if(!a)if(i&4){if(i=2|i&1,l!==""&&!bN(t,l,e)||l===""&&n.length===1){if(vi(i))return!1;a=!0}}else if(i&8){if(r===null||!_N(t,r,l,e)){if(vi(i))return!1;a=!0}}else{let c=n[++s],d=yN(l,r,Hb(t),e);if(d===-1){if(vi(i))return!1;a=!0;continue}if(c!==""){let m;if(d>o?m="":m=r[d+1].toLowerCase(),i&2&&c!==m){if(vi(i))return!1;a=!0}}}}return vi(i)||a}function vi(t){return(t&1)===0}function yN(t,n,e,i){if(n===null)return-1;let r=0;if(i||!e){let o=!1;for(;r<n.length;){let a=n[r];if(a===t)return r;if(a===3||a===6)o=!0;else if(a===1||a===2){let s=n[++r];for(;typeof s=="string";)s=n[++r];continue}else{if(a===4)break;if(a===0){r+=4;continue}}r+=o?1:2}return-1}else return xN(n,t)}function ZE(t,n,e=!1){for(let i=0;i<n.length;i++)if(vN(t,n[i],e))return!0;return!1}function CN(t){let n=t.attrs;if(n!=null){let e=n.indexOf(5);if((e&1)===0)return n[e+1]}return null}function wN(t){for(let n=0;n<t.length;n++){let e=t[n];if(dE(e))return n}return t.length}function xN(t,n){let e=t.indexOf(4);if(e>-1)for(e++;e<t.length;){let i=t[e];if(typeof i=="number")return-1;if(i===n)return e;e++}return-1}function EN(t,n){e:for(let e=0;e<n.length;e++){let i=n[e];if(t.length===i.length){for(let r=0;r<t.length;r++)if(t[r]!==i[r])continue e;return!0}}return!1}function Nx(t,n){return t?":not("+n.trim()+")":n}function DN(t){let n=t[0],e=1,i=2,r="",o=!1;for(;e<t.length;){let a=t[e];if(typeof a=="string")if(i&2){let s=t[++e];r+="["+a+(s.length>0?'="'+s+'"':"")+"]"}else i&8?r+="."+a:i&4&&(r+=" "+a);else r!==""&&!vi(a)&&(n+=Nx(o,r),r=""),i=a,o=o||!vi(i);e++}return r!==""&&(n+=Nx(o,r)),n}function MN(t){return t.map(DN).join(",")}function SN(t){let n=[],e=[],i=1,r=2;for(;i<t.length;){let o=t[i];if(typeof o=="string")r===2?o!==""&&n.push(o,t[++i]):r===8&&e.push(o);else{if(!vi(r))break;r=o}i++}return e.length&&n.push(1,...e),n}var sn={};function zb(t,n,e,i,r,o,a,s,l,c,d){let m=mt+i,f=m+r,h=IN(m,f),b=typeof c=="function"?c():c;return h[ae]={type:t,blueprint:h,template:e,queries:null,viewQuery:s,declTNode:n,data:h.slice().fill(null,m),bindingStartIndex:m,expandoStartIndex:f,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof o=="function"?o():o,pipeRegistry:typeof a=="function"?a():a,firstChild:null,schemas:l,consts:b,incompleteFirstPass:!1,ssrId:d}}function IN(t,n){let e=[];for(let i=0;i<n;i++)e.push(i<t?null:sn);return e}function TN(t){let n=t.tView;return n===null||n.incompleteFirstPass?t.tView=zb(1,null,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts,t.id):n}function $b(t,n,e,i,r,o,a,s,l,c,d){let m=n.blueprint.slice();return m[pi]=r,m[he]=i|4|128|8|64|1024,(c!==null||t&&t[he]&2048)&&(m[he]|=2048),t_(m),m[Lt]=m[ma]=t,m[xt]=e,m[gi]=a||t&&t[gi],m[qe]=s||t&&t[qe],m[xr]=l||t&&t[xr]||null,m[on]=o,m[Er]=jA(),m[ua]=d,m[Qg]=c,m[an]=n.type==2?t[an]:m,m}function kN(t,n,e){let i=Nn(n,t),r=TN(e),o=t[gi].rendererFactory,a=Wb(t,$b(t,r,null,YE(e),i,n,null,o.createRenderer(i,e),null,null,null));return t[n.index]=a}function YE(t){let n=16;return t.signals?n=4096:t.onPush&&(n=64),n}function Bc(t,n,e,i){if(e===0)return-1;let r=n.length;for(let o=0;o<e;o++)n.push(i),t.blueprint.push(i),t.data.push(null);return r}function Wb(t,n){return t[gs]?t[Yg][Zn]=n:t[gs]=n,t[Yg]=n,n}function v(t=1){QE(at(),re(),Gi()+t,!1)}function QE(t,n,e,i){if(!i)if((n[he]&3)===3){let o=t.preOrderCheckHooks;o!==null&&jm(n,o,e)}else{let o=t.preOrderHooks;o!==null&&Um(n,o,0,e)}bo(e)}var hh=(function(t){return t[t.None=0]="None",t[t.SignalBased=1]="SignalBased",t[t.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",t})(hh||{});function X_(t,n,e,i){let r=se(null);try{let[o,a,s]=t.inputs[e],l=null;(a&hh.SignalBased)!==0&&(l=n[o][Rt]),l!==null&&l.transformFn!==void 0?i=l.transformFn(i):s!==null&&(i=s.call(n,i)),t.setInput!==null?t.setInput(n,l,i,e,o):rE(n,l,o,i)}finally{se(r)}}var xi=(function(t){return t[t.Important=1]="Important",t[t.DashCase=2]="DashCase",t})(xi||{}),K_;function Gb(t,n){return K_(t,n)}function ON(t){K_===void 0&&(K_=t())}var RZ=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";var J_=new WeakMap,Dc=new WeakSet;function RN(t,n){let e=J_.get(t);if(!e||e.length===0)return;let i=n.parentNode,r=n.previousSibling;for(let o=e.length-1;o>=0;o--){let a=e[o],s=a.parentNode;a===n?(e.splice(o,1),Dc.add(a),a.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}}))):(r&&a===r||s&&i&&s!==i)&&(e.splice(o,1),a.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),a.parentNode?.removeChild(a))}}function AN(t,n){let e=J_.get(t);e?e.includes(n)||e.push(n):J_.set(t,[n])}var ya=new Set,fh=(function(t){return t[t.CHANGE_DETECTION=0]="CHANGE_DETECTION",t[t.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",t})(fh||{}),Ei=new C(""),Px=new Set;function Di(t){Px.has(t)||(Px.add(t),performance?.mark?.("mark_feature_usage",{detail:{feature:t}}))}var ph=(()=>{class t{impl=null;execute(){this.impl?.execute()}static \u0275prov=w({token:t,providedIn:"root",factory:()=>new t})}return t})(),qb=[0,1,2,3],Zb=(()=>{class t{ngZone=u(B);scheduler=u(zi);errorHandler=u(yn,{optional:!0});sequences=new Set;deferredRegistrations=new Set;executing=!1;constructor(){u(Ei,{optional:!0})}execute(){let e=this.sequences.size>0;e&&Ke(je.AfterRenderHooksStart),this.executing=!0;for(let i of qb)for(let r of this.sequences)if(!(r.erroredOrDestroyed||!r.hooks[i]))try{r.pipelinedValue=this.ngZone.runOutsideAngular(()=>this.maybeTrace(()=>{let o=r.hooks[i];return o(r.pipelinedValue)},r.snapshot))}catch(o){r.erroredOrDestroyed=!0,this.errorHandler?.handleError(o)}this.executing=!1;for(let i of this.sequences)i.afterRun(),i.once&&(this.sequences.delete(i),i.destroy());for(let i of this.deferredRegistrations)this.sequences.add(i);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear(),e&&Ke(je.AfterRenderHooksEnd)}register(e){let{view:i}=e;i!==void 0?((i[fa]??=[]).push(e),_a(i),i[he]|=8192):this.executing?this.deferredRegistrations.add(e):this.addSequence(e)}addSequence(e){this.sequences.add(e),this.scheduler.notify(7)}unregister(e){this.executing&&this.sequences.has(e)?(e.erroredOrDestroyed=!0,e.pipelinedValue=void 0,e.once=!0):(this.sequences.delete(e),this.deferredRegistrations.delete(e))}maybeTrace(e,i){return i?i.run(fh.AFTER_NEXT_RENDER,e):e()}static \u0275prov=w({token:t,providedIn:"root",factory:()=>new t})}return t})(),kc=class{impl;hooks;view;once;snapshot;erroredOrDestroyed=!1;pipelinedValue=void 0;unregisterOnDestroy;constructor(n,e,i,r,o,a=null){this.impl=n,this.hooks=e,this.view=i,this.once=r,this.snapshot=a,this.unregisterOnDestroy=o?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.snapshot?.dispose(),this.snapshot=null}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.();let n=this.view?.[fa];n&&(this.view[fa]=n.filter(e=>e!==this))}};function ct(t,n){let e=n?.injector??u(Y);return Di("NgAfterNextRender"),PN(t,e,n,!0)}function NN(t){return t instanceof Function?[void 0,void 0,t,void 0]:[t.earlyRead,t.write,t.mixedReadWrite,t.read]}function PN(t,n,e,i){let r=n.get(ph);r.impl??=n.get(Zb);let o=n.get(Ei,null,{optional:!0}),a=e?.manualCleanup!==!0?n.get(pn):null,s=n.get(xs,null,{optional:!0}),l=new kc(r.impl,NN(t),s?.view,i,a,o?.snapshot(null));return r.impl.register(l),l}var XE=new C("",{factory:()=>({queue:new Set,isScheduled:!1,scheduler:null,injector:u(Xe)})});function KE(t,n,e){let i=t.get(XE);if(Array.isArray(n))for(let r of n)i.queue.add(r),e?.detachedLeaveAnimationFns?.push(r);else i.queue.add(n),e?.detachedLeaveAnimationFns?.push(n);i.scheduler&&i.scheduler(t)}function FN(t,n){let e=t.get(XE);if(n.detachedLeaveAnimationFns){for(let i of n.detachedLeaveAnimationFns)e.queue.delete(i);n.detachedLeaveAnimationFns=void 0}}function LN(t,n){for(let[e,i]of n)KE(t,i.animateFns)}function Fx(t,n,e,i){let r=t?.[go]?.enter;n!==null&&r&&r.has(e.index)&&LN(i,r)}function Es(t,n,e,i,r,o,a,s){if(r!=null){let l,c=!1;_i(r)?l=r:Dr(r)&&(c=!0,r=r[pi]);let d=An(r);t===0&&i!==null?(Fx(s,i,o,e),a==null?HE(n,i,d):Is(n,i,d,a||null,!0)):t===1&&i!==null?(Fx(s,i,o,e),Is(n,i,d,a||null,!0),RN(o,d)):t===2?(s?.[go]?.leave?.has(o.index)&&AN(o,d),Dc.delete(d),Lx(s,o,e,m=>{if(Dc.has(d)){Dc.delete(d);return}Bb(n,d,c,m)})):t===3&&(Dc.delete(d),Lx(s,o,e,()=>{n.destroyNode(d)})),l!=null&&WN(n,t,e,l,o,i,a)}}function BN(t,n){JE(t,n),n[pi]=null,n[on]=null}function VN(t,n,e,i,r,o){i[pi]=r,i[on]=n,_h(t,i,e,1,r,o)}function JE(t,n){n[gi].changeDetectionScheduler?.notify(9),_h(t,n,n[qe],2,null,null)}function jN(t){let n=t[gs];if(!n)return D_(t[ae],t);for(;n;){let e=null;if(Dr(n))e=n[gs];else{let i=n[_t];i&&(e=i)}if(!e){for(;n&&!n[Zn]&&n!==t;)Dr(n)&&D_(n[ae],n),n=n[Lt];n===null&&(n=t),Dr(n)&&D_(n[ae],n),e=n&&n[Zn]}n=e}}function Yb(t,n){let e=t[pa],i=e.indexOf(n);e.splice(i,1)}function gh(t,n){if(ga(n))return;let e=n[qe];e.destroyNode&&_h(t,n,e,3,null,null),jN(n)}function D_(t,n){if(ga(n))return;let e=se(null);try{n[he]&=-129,n[he]|=256,n[Rn]&&io(n[Rn]),zN(t,n),HN(t,n),n[ae].type===1&&n[qe].destroy();let i=n[po];if(i!==null&&_i(n[Lt])){i!==n[Lt]&&Yb(i,n);let r=n[Wi];r!==null&&r.detachView(t)}L_(n)}finally{se(e)}}function Lx(t,n,e,i){let r=t?.[go];if(r==null||r.leave==null||!r.leave.has(n.index))return i(!1);t&&ya.add(t[Er]),KE(e,()=>{if(r.leave&&r.leave.has(n.index)){let a=r.leave.get(n.index),s=[];if(a){for(let l=0;l<a.animateFns.length;l++){let c=a.animateFns[l],{promise:d}=c();s.push(d)}r.detachedLeaveAnimationFns=void 0}r.running=Promise.allSettled(s),UN(t,i)}else t&&ya.delete(t[Er]),i(!1)},r)}function UN(t,n){let e=t[go]?.running;if(e){e.then(()=>{t[go].running=void 0,ya.delete(t[Er]),n(!0)});return}n(!1)}function HN(t,n){let e=t.cleanup,i=n[ps];if(e!==null)for(let a=0;a<e.length-1;a+=2)if(typeof e[a]=="string"){let s=e[a+3];s>=0?i[s]():i[-s].unsubscribe(),a+=2}else{let s=i[e[a+1]];e[a].call(s)}i!==null&&(n[ps]=null);let r=n[wr];if(r!==null){n[wr]=null;for(let a=0;a<r.length;a++){let s=r[a];s()}}let o=n[co];if(o!==null){n[co]=null;for(let a of o)a.destroy()}}function zN(t,n){let e;if(t!=null&&(e=t.destroyHooks)!=null)for(let i=0;i<e.length;i+=2){let r=n[e[i]];if(!(r instanceof va)){let o=e[i+1];if(Array.isArray(o))for(let a=0;a<o.length;a+=2){let s=r[o[a]],l=o[a+1];Ke(je.LifecycleHookStart,s,l);try{l.call(s)}finally{Ke(je.LifecycleHookEnd,s,l)}}else{Ke(je.LifecycleHookStart,r,o);try{o.call(r)}finally{Ke(je.LifecycleHookEnd,r,o)}}}}}function eD(t,n,e){return tD(t,n.parent,e)}function tD(t,n,e){let i=n;for(;i!==null&&i.type&168;)n=i,i=n.parent;if(i===null)return e[pi];if(Mr(i)){let{encapsulation:r}=t.data[i.directiveStart+i.componentOffset];if(r===wi.None||r===wi.Emulated)return null}return Nn(i,e)}function nD(t,n,e){return rD(t,n,e)}function iD(t,n,e){return t.type&40?Nn(t,e):null}var rD=iD,eb;function oD(t,n){rD=t,eb=n}function Qb(t,n,e,i){let r=eD(t,i,n),o=n[qe],a=i.parent||n[on],s=nD(a,i,n);if(r!=null)if(Array.isArray(e))for(let l=0;l<e.length;l++)Ax(o,r,e[l],s,!1);else Ax(o,r,e,s,!1);eb!==void 0&&eb(o,i,n,e,r)}function Mc(t,n){if(n!==null){let e=n.type;if(e&3)return Nn(n,t);if(e&4)return tb(-1,t[n.index]);if(e&8){let i=n.child;if(i!==null)return Mc(t,i);{let r=t[n.index];return _i(r)?tb(-1,r):An(r)}}else{if(e&128)return Mc(t,n.next);if(e&32)return Gb(n,t)()||An(t[n.index]);{let i=aD(t,n);if(i!==null){if(Array.isArray(i))return i[0];let r=uo(t[an]);return Mc(r,i)}else return Mc(t,n.next)}}}return null}function aD(t,n){if(n!==null){let i=t[an][on],r=n.projection;return i.projection[r]}return null}function tb(t,n){let e=_t+t+1;if(e<n.length){let i=n[e],r=i[ae].firstChild;if(r!==null)return Mc(i,r)}return n[_o]}function Xb(t,n,e,i,r,o,a){for(;e!=null;){let s=i[xr];if(e.type===128){e=e.next;continue}let l=i[e.index],c=e.type;if(a&&n===0&&(l&&Ss(An(l),i),e.flags|=2),!uh(e))if(c&8)Xb(t,n,e.child,i,r,o,!1),Es(n,t,s,r,l,e,o,i);else if(c&32){let d=Gb(e,i),m;for(;m=d();)Es(n,t,s,r,m,e,o,i);Es(n,t,s,r,l,e,o,i)}else c&16?sD(t,n,i,e,r,o):Es(n,t,s,r,l,e,o,i);e=a?e.projectionNext:e.next}}function _h(t,n,e,i,r,o){Xb(e,i,t.firstChild,n,r,o,!1)}function $N(t,n,e){let i=n[qe],r=eD(t,e,n),o=e.parent||n[on],a=nD(o,e,n);sD(i,0,n,e,r,a)}function sD(t,n,e,i,r,o){let a=e[an],l=a[on].projection[i.projection];if(Array.isArray(l))for(let c=0;c<l.length;c++){let d=l[c];Es(n,t,e[xr],r,d,i,o,e)}else{let c=l,d=a[Lt];CE(i)&&(c.flags|=128),Xb(t,n,c,d,r,o,!0)}}function WN(t,n,e,i,r,o,a){let s=i[_o],l=An(i);s!==l&&Es(n,t,e,o,s,r,a);for(let c=_t;c<i.length;c++){let d=i[c];_h(d[ae],d,t,n,o,s)}}function GN(t,n,e,i,r){if(n)r?t.addClass(e,i):t.removeClass(e,i);else{let o=i.indexOf("-")===-1?void 0:xi.DashCase;r==null?t.removeStyle(e,i,o):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),o|=xi.Important),t.setStyle(e,i,r,o))}}function lD(t,n,e,i,r){let o=Gi(),a=i&2;try{bo(-1),a&&n.length>mt&&QE(t,n,mt,!1);let s=a?je.TemplateUpdateStart:je.TemplateCreateStart;Ke(s,r,e),e(i,r)}finally{bo(o);let s=a?je.TemplateUpdateEnd:je.TemplateCreateEnd;Ke(s,r,e)}}function bh(t,n,e){KN(t,n,e),(e.flags&64)===64&&JN(t,n,e)}function Vc(t,n,e=Nn){let i=n.localNames;if(i!==null){let r=n.index+1;for(let o=0;o<i.length;o+=2){let a=i[o+1],s=a===-1?e(n,t):t[a];t[r++]=s}}}function qN(t,n,e,i){let o=i.get(TE,IE)||e===wi.ShadowDom||e===wi.ExperimentalIsolatedShadowDom,a=t.selectRootElement(n,o);return ZN(a),a}function ZN(t){YN(t)}var YN=()=>null;function QN(t){return t==="class"?"className":t==="for"?"htmlFor":t==="formaction"?"formAction":t==="innerHtml"?"innerHTML":t==="readonly"?"readOnly":t==="tabindex"?"tabIndex":t}function cD(t,n,e,i,r,o){let a=n[ae];if(tv(t,a,n,e,i)){Mr(t)&&XN(n,t.index);return}t.type&3&&(e=QN(e)),dD(t,n,e,i,r,o)}function dD(t,n,e,i,r,o){if(t.type&3){let a=Nn(t,n);i=o!=null?o(i,t.value||"",e):i,r.setProperty(a,e,i)}else t.type&12}function XN(t,n){let e=Yn(n,t);e[he]&16||(e[he]|=64)}function KN(t,n,e){let i=e.directiveStart,r=e.directiveEnd;Mr(e)&&kN(n,e,t.data[i+e.componentOffset]),t.firstCreatePass||Zm(e,n);let o=e.initialInputs;for(let a=i;a<r;a++){let s=t.data[a],l=Tc(n,t,a,e);if(Ss(l,n),o!==null&&iP(n,a-i,l,s,e,o),bi(s)){let c=Yn(e.index,n);c[xt]=Tc(n,t,a,e)}}}function JN(t,n,e){let i=e.directiveStart,r=e.directiveEnd,o=e.index,a=ox();try{bo(o);for(let s=i;s<r;s++){let l=t.data[s],c=n[s];Tm(s),(l.hostBindings!==null||l.hostVars!==0||l.hostAttrs!==null)&&eP(l,c)}}finally{bo(-1),Tm(a)}}function eP(t,n){t.hostBindings!==null&&t.hostBindings(1,n)}function Kb(t,n){let e=t.directiveRegistry,i=null;if(e)for(let r=0;r<e.length;r++){let o=e[r];ZE(n,o.selectors,!1)&&(i??=[],bi(o)?i.unshift(o):i.push(o))}return i}function tP(t,n,e,i,r,o){let a=Nn(t,n);nP(n[qe],a,o,t.value,e,i,r)}function nP(t,n,e,i,r,o,a){if(o==null)t.removeAttribute(n,r,e);else{let s=a==null?ho(o):a(o,i||"",r);t.setAttribute(n,r,s,e)}}function iP(t,n,e,i,r,o){let a=o[n];if(a!==null)for(let s=0;s<a.length;s+=2){let l=a[s],c=a[s+1];X_(i,e,l,c)}}function Jb(t,n,e,i,r){let o=mt+e,a=n[ae],s=r(a,n,t,i,e);n[o]=s,Sr(t,!0);let l=t.type===2;return l?(zE(n[qe],s,t),(Kw()===0||_s(t))&&Ss(s,n),Jw()):Ss(s,n),xc()&&(!l||!uh(t))&&Qb(a,n,s,t),t}function ev(t){let n=t;return u_()?m_():(n=n.parent,Sr(n,!1)),n}function rP(t,n){let e=t[xr];if(!e)return;let i;try{i=e.get(Qn,null)}catch{i=null}i?.(n)}function tv(t,n,e,i,r){let o=t.inputs?.[i],a=t.hostDirectiveInputs?.[i],s=!1;if(a)for(let l=0;l<a.length;l+=2){let c=a[l],d=a[l+1],m=n.data[c];X_(m,e[c],d,r),s=!0}if(o)for(let l of o){let c=e[l],d=n.data[l];X_(d,c,i,r),s=!0}return s}function oP(t,n){let e=Yn(n,t),i=e[ae];aP(i,e);let r=e[pi];r!==null&&e[ua]===null&&(e[ua]=kE(r,e[xr])),Ke(je.ComponentStart);try{nv(i,e,e[xt])}finally{Ke(je.ComponentEnd,e[xt])}}function aP(t,n){for(let e=n.length;e<t.blueprint.length;e++)n.push(t.blueprint[e])}function nv(t,n,e){Om(n);try{let i=t.viewQuery;i!==null&&V_(1,i,e);let r=t.template;r!==null&&lD(t,n,r,1,e),t.firstCreatePass&&(t.firstCreatePass=!1),n[Wi]?.finishViewCreation(t),t.staticContentQueries&&OE(t,n),t.staticViewQueries&&V_(2,t.viewQuery,e);let o=t.components;o!==null&&sP(n,o)}catch(i){throw t.firstCreatePass&&(t.incompleteFirstPass=!0,t.firstCreatePass=!1),i}finally{n[he]&=-5,Rm()}}function sP(t,n){for(let e=0;e<n.length;e++)oP(t,n[e])}function jc(t,n,e,i){let r=se(null);try{let o=n.tView,s=t[he]&4096?4096:16,l=$b(t,o,e,s,null,n,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),c=t[n.index];l[po]=c;let d=t[Wi];return d!==null&&(l[Wi]=d.createEmbeddedView(o)),nv(o,l,e),l}finally{se(r)}}function Ts(t,n){return!n||n.firstChild===null||CE(t)}function Oc(t,n,e,i,r=!1){for(;e!==null;){if(e.type===128){e=r?e.projectionNext:e.next;continue}let o=n[e.index];o!==null&&i.push(An(o)),_i(o)&&uD(o,i);let a=e.type;if(a&8)Oc(t,n,e.child,i);else if(a&32){let s=Gb(e,n),l;for(;l=s();)i.push(l)}else if(a&16){let s=aD(n,e);if(Array.isArray(s))i.push(...s);else{let l=uo(n[an]);Oc(l[ae],l,s,i,!0)}}e=r?e.projectionNext:e.next}return i}function uD(t,n){for(let e=_t;e<t.length;e++){let i=t[e],r=i[ae].firstChild;r!==null&&Oc(i[ae],i,r,n)}t[_o]!==t[pi]&&n.push(t[_o])}function mD(t){if(t[fa]!==null){for(let n of t[fa])n.impl.addSequence(n);t[fa].length=0}}var hD=[];function lP(t){return t[Rn]??cP(t)}function cP(t){let n=hD.pop()??Object.create(uP);return n.lView=t,n}function dP(t){t.lView[Rn]!==t&&(t.lView=null,hD.push(t))}var uP=te(_({},Yo),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{_a(t.lView)},consumerOnSignalRead(){this.lView[Rn]=this}});function mP(t){let n=t[Rn]??Object.create(hP);return n.lView=t,n}var hP=te(_({},Yo),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{let n=uo(t.lView);for(;n&&!fD(n[ae]);)n=uo(n);n&&n_(n)},consumerOnSignalRead(){this.lView[Rn]=this}});function fD(t){return t.type!==2}function pD(t){if(t[co]===null)return;let n=!0;for(;n;){let e=!1;for(let i of t[co])i.dirty&&(e=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()));n=e&&!!(t[he]&8192)}}var fP=100;function gD(t,n=0){let i=t[gi].rendererFactory,r=!1;r||i.begin?.();try{pP(t,n)}finally{r||i.end?.()}}function pP(t,n){let e=h_();try{mc(!0),nb(t,n);let i=0;for(;yc(t);){if(i===fP)throw new R(103,!1);i++,nb(t,1)}}finally{mc(e)}}function gP(t,n,e,i){if(ga(n))return;let r=n[he],o=!1,a=!1;Om(n);let s=!0,l=null,c=null;o||(fD(t)?(c=lP(n),l=no(c)):Tu()===null?(s=!1,c=mP(n),l=no(c)):n[Rn]&&(io(n[Rn]),n[Rn]=null));try{t_(n),nx(t.bindingStartIndex),e!==null&&lD(t,n,e,2,i);let d=(r&3)===3;if(!o)if(d){let h=t.preOrderCheckHooks;h!==null&&jm(n,h,null)}else{let h=t.preOrderHooks;h!==null&&Um(n,h,0,null),x_(n,0)}if(a||_P(n),pD(n),_D(n,0),t.contentQueries!==null&&OE(t,n),!o)if(d){let h=t.contentCheckHooks;h!==null&&jm(n,h)}else{let h=t.contentHooks;h!==null&&Um(n,h,1),x_(n,1)}vP(t,n);let m=t.components;m!==null&&vD(n,m,0);let f=t.viewQuery;if(f!==null&&V_(2,f,i),!o)if(d){let h=t.viewCheckHooks;h!==null&&jm(n,h)}else{let h=t.viewHooks;h!==null&&Um(n,h,2),x_(n,2)}if(t.firstUpdatePass===!0&&(t.firstUpdatePass=!1),n[xm]){for(let h of n[xm])h();n[xm]=null}o||(mD(n),n[he]&=-73)}catch(d){throw o||_a(n),d}finally{c!==null&&(Xo(c,l),s&&dP(c)),Rm()}}function _D(t,n){for(let e=xE(t);e!==null;e=EE(e))for(let i=_t;i<e.length;i++){let r=e[i];bD(r,n)}}function _P(t){for(let n=xE(t);n!==null;n=EE(n)){if(!(n[he]&2))continue;let e=n[pa];for(let i=0;i<e.length;i++){let r=e[i];n_(r)}}}function bP(t,n,e){Ke(je.ComponentStart);let i=Yn(n,t);try{bD(i,e)}finally{Ke(je.ComponentEnd,i[xt])}}function bD(t,n){Dm(t)&&nb(t,n)}function nb(t,n){let i=t[ae],r=t[he],o=t[Rn],a=!!(n===0&&r&16);if(a||=!!(r&64&&n===0),a||=!!(r&1024),a||=!!(o?.dirty&&es(o)),a||=!1,o&&(o.dirty=!1),t[he]&=-9217,a)gP(i,t,i.template,t[xt]);else if(r&8192){let s=se(null);try{pD(t),_D(t,1);let l=i.components;l!==null&&vD(t,l,1),mD(t)}finally{se(s)}}}function vD(t,n,e){for(let i=0;i<n.length;i++)bP(t,n[i],e)}function vP(t,n){let e=t.hostBindingOpCodes;if(e!==null)try{for(let i=0;i<e.length;i++){let r=e[i];if(r<0)bo(~r);else{let o=r,a=e[++i],s=e[++i];rx(a,o);let l=n[o];Ke(je.HostBindingsUpdateStart,l);try{s(2,l)}finally{Ke(je.HostBindingsUpdateEnd,l)}}}}finally{bo(-1)}}function iv(t,n){let e=h_()?64:1088;for(t[gi].changeDetectionScheduler?.notify(n);t;){t[he]|=e;let i=uo(t);if(bs(t)&&!i)return t;t=i}return null}function yD(t,n,e,i){return[t,!0,0,n,null,i,null,e,null,null]}function CD(t,n){let e=_t+n;if(e<t.length)return t[e]}function Uc(t,n,e,i=!0){let r=n[ae];if(yP(r,n,t,e),i){let a=tb(e,t),s=n[qe],l=s.parentNode(t[_o]);l!==null&&VN(r,t[on],s,n,l,a)}let o=n[ua];o!==null&&o.firstChild!==null&&(o.firstChild=null)}function wD(t,n){let e=Rc(t,n);return e!==void 0&&gh(e[ae],e),e}function Rc(t,n){if(t.length<=_t)return;let e=_t+n,i=t[e];if(i){let r=i[po];r!==null&&r!==t&&Yb(r,i),n>0&&(t[e-1][Zn]=i[Zn]);let o=_c(t,_t+n);BN(i[ae],i);let a=o[Wi];a!==null&&a.detachView(o[ae]),i[Lt]=null,i[Zn]=null,i[he]&=-129}return i}function yP(t,n,e,i){let r=_t+i,o=e.length;i>0&&(e[r-1][Zn]=n),i<o-_t?(n[Zn]=e[r],zg(e,_t+i,n)):(e.push(n),n[Zn]=null),n[Lt]=e;let a=n[po];a!==null&&e!==a&&xD(a,n);let s=n[Wi];s!==null&&s.insertView(t),Mm(n),n[he]|=128}function xD(t,n){let e=t[pa],i=n[Lt];if(Dr(i))t[he]|=2;else{let r=i[Lt][an];n[an]!==r&&(t[he]|=2)}e===null?t[pa]=[n]:e.push(n)}var yo=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let n=this._lView,e=n[ae];return Oc(e,n,e.firstChild,[])}constructor(n,e){this._lView=n,this._cdRefInjectingView=e}get context(){return this._lView[xt]}set context(n){this._lView[xt]=n}get destroyed(){return ga(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let n=this._lView[Lt];if(_i(n)){let e=n[vc],i=e?e.indexOf(this):-1;i>-1&&(Rc(n,i),_c(e,i))}this._attachedToViewContainer=!1}gh(this._lView[ae],this._lView)}onDestroy(n){i_(this._lView,n)}markForCheck(){iv(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[he]&=-129}reattach(){Mm(this._lView),this._lView[he]|=128}detectChanges(){this._lView[he]|=1024,gD(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new R(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let n=bs(this._lView),e=this._lView[po];e!==null&&!n&&Yb(e,this._lView),JE(this._lView[ae],this._lView)}attachToAppRef(n){if(this._attachedToViewContainer)throw new R(902,!1);this._appRef=n;let e=bs(this._lView),i=this._lView[po];i!==null&&!e&&xD(i,this._lView),Mm(this._lView)}};var Xt=(()=>{class t{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=CP;constructor(e,i,r){this._declarationLView=e,this._declarationTContainer=i,this.elementRef=r}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,i){return this.createEmbeddedViewImpl(e,i)}createEmbeddedViewImpl(e,i,r){let o=jc(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:i,dehydratedView:r});return new yo(o)}}return t})();function CP(){return vh(Vt(),re())}function vh(t,n){return t.type&4?new Xt(n,t,Rs(t,n)):null}function ED(t,n,e){let i=n.insertBeforeIndex,r=Array.isArray(i)?i[0]:i;return r===null?iD(t,n,e):An(e[r])}function DD(t,n,e,i,r){let o=n.insertBeforeIndex;if(Array.isArray(o)){let a=i,s=null;if(n.type&3||(s=a,a=r),a!==null&&n.componentOffset===-1)for(let l=1;l<o.length;l++){let c=e[o[l]];Is(t,a,c,s,!1)}}}function Ps(t,n,e,i,r){let o=t.data[n];if(o===null)o=rv(t,n,e,i,r),ix()&&(o.flags|=32);else if(o.type&64){o.type=e,o.value=i,o.attrs=r;let a=vs();o.injectorIndex=a===null?-1:a.injectorIndex}return Sr(o,!0),o}function rv(t,n,e,i,r){let o=d_(),a=u_(),s=a?o:o&&o.parent,l=t.data[n]=xP(t,s,e,n,i,r);return wP(t,l,o,a),l}function wP(t,n,e,i){t.firstChild===null&&(t.firstChild=n),e!==null&&(i?e.child==null&&n.parent!==null&&(e.child=n):e.next===null&&(e.next=n,n.prev=e))}function xP(t,n,e,i,r,o){let a=n?n.injectorIndex:-1,s=0;return s_()&&(s|=128),{type:e,index:i,insertBeforeIndex:null,injectorIndex:a,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:s,providerIndexes:0,value:r,attrs:o,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:n,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function MD(t,n){if(t.push(n),t.length>1)for(let e=t.length-2;e>=0;e--){let i=t[e];SD(i)||EP(i,n)&&DP(i)===null&&MP(i,n.index)}}function SD(t){return!(t.type&64)}function EP(t,n){return SD(n)||t.index>n.index}function DP(t){let n=t.insertBeforeIndex;return Array.isArray(n)?n[0]:n}function MP(t,n){let e=t.insertBeforeIndex;Array.isArray(e)?e[0]=n:(oD(ED,DD),t.insertBeforeIndex=n)}function SP(t,n,e){let i=t.data[n];i===null?t.data[n]=e:i.value=e}function IP(t,n){let e=t.insertBeforeIndex;e===null?(oD(ED,DD),e=t.insertBeforeIndex=[null,n]):(Iw(Array.isArray(e),!0,"Expecting array here"),e.push(n))}function TP(t,n,e){let i=rv(t,e,64,null,null);return MD(n,i),i}function kP(t,n){let e=n[t.currentCaseLViewIndex];return e===null?e:e<0?~e:e}function OP(t,n,e){return t|n<<17|e<<1}function RP(t){return t===-1}function ID(t,n,e){t.index=0;let i=kP(n,e);i!==null?t.removes=n.remove[i]:t.removes=Qt}function ib(t){if(t.index<t.removes.length){let n=t.removes[t.index++];if(n>0)return t.lView[n];{t.stack.push(t.index,t.removes);let e=~n,i=t.lView[ae].data[e];return ID(t,i,t.lView),ib(t)}}else return t.stack.length===0?(t.lView=void 0,null):(t.removes=t.stack.pop(),t.index=t.stack.pop(),ib(t))}function AP(){let t={stack:[],index:-1};function n(e,i){for(t.lView=i;t.stack.length;)t.stack.pop();return ID(t,e.value,i),ib.bind(null,t)}return n}var NP=()=>{};function PP(t,n,e,i){NP(t,n,e,i)}function FP(t){let n=t[Xg]??[],i=t[Lt][qe],r=[];for(let o of n)o.data[SE]!==void 0?r.push(o):LP(o,i);t[Xg]=r}function LP(t,n){let e=0,i=t.firstChild;if(i){let r=t.data[ME];for(;e<r;){let o=i.nextSibling;Bb(n,i,!1),i=o,e++}}}var BP=()=>null,VP=()=>null;function Ym(t,n){return BP(t,n)}function TD(t,n,e){return VP(t,n,e)}var kD=class{},yh=class{},rb=class{resolveComponentFactory(n){throw new R(917,!1)}},Hc=class{static NULL=new rb},It=class{},xe=(()=>{class t{destroyNode=null;static __NG_ELEMENT_ID__=()=>jP()}return t})();function jP(){let t=re(),n=Vt(),e=Yn(n.index,t);return(Dr(e)?e:t)[qe]}var OD=(()=>{class t{static \u0275prov=w({token:t,providedIn:"root",factory:()=>null})}return t})();var zm={},ob=class{injector;parentInjector;constructor(n,e){this.injector=n,this.parentInjector=e}get(n,e,i){let r=this.injector.get(n,zm,i);return r!==zm||e===zm?r:this.parentInjector.get(n,e,i)}};function Qm(t,n,e){let i=e?t.styles:null,r=e?t.classes:null,o=0;if(n!==null)for(let a=0;a<n.length;a++){let s=n[a];if(typeof s=="number")o=s;else if(o==1)r=pm(r,s);else if(o==2){let l=s,c=n[++a];i=pm(i,l+": "+c+";")}}e?t.styles=i:t.stylesWithoutHost=i,e?t.classes=r:t.classesWithoutHost=r}function T(t,n=0){let e=re();if(e===null)return A(t,n);let i=Vt();return _E(i,e,Ft(t),n)}function zc(){let t="invalid";throw new Error(t)}function RD(t,n,e,i,r){let o=i===null?null:{"":-1},a=r(t,e);if(a!==null){let s=a,l=null,c=null;for(let d of a)if(d.resolveHostDirectives!==null){[s,l,c]=d.resolveHostDirectives(a);break}zP(t,n,e,s,o,l,c)}o!==null&&i!==null&&UP(e,i,o)}function UP(t,n,e){let i=t.localNames=[];for(let r=0;r<n.length;r+=2){let o=e[n[r+1]];if(o==null)throw new R(-301,!1);i.push(n[r],o)}}function HP(t,n,e){n.componentOffset=e,(t.components??=[]).push(n.index)}function zP(t,n,e,i,r,o,a){let s=i.length,l=null;for(let f=0;f<s;f++){let h=i[f];l===null&&bi(h)&&(l=h,HP(t,e,f)),P_(Zm(e,n),t,h.type)}YP(e,t.data.length,s),l?.viewProvidersResolver&&l.viewProvidersResolver(l);for(let f=0;f<s;f++){let h=i[f];h.providersResolver&&h.providersResolver(h)}let c=!1,d=!1,m=Bc(t,n,s,null);s>0&&(e.directiveToIndex=new Map);for(let f=0;f<s;f++){let h=i[f];if(e.mergedAttrs=Ms(e.mergedAttrs,h.hostAttrs),WP(t,e,n,m,h),ZP(m,h,r),a!==null&&a.has(h)){let[D,S]=a.get(h);e.directiveToIndex.set(h.type,[m,D+e.directiveStart,S+e.directiveStart])}else(o===null||!o.has(h))&&e.directiveToIndex.set(h.type,m);h.contentQueries!==null&&(e.flags|=4),(h.hostBindings!==null||h.hostAttrs!==null||h.hostVars!==0)&&(e.flags|=64);let b=h.type.prototype;!c&&(b.ngOnChanges||b.ngOnInit||b.ngDoCheck)&&((t.preOrderHooks??=[]).push(e.index),c=!0),!d&&(b.ngOnChanges||b.ngDoCheck)&&((t.preOrderCheckHooks??=[]).push(e.index),d=!0),m++}$P(t,e,o)}function $P(t,n,e){for(let i=n.directiveStart;i<n.directiveEnd;i++){let r=t.data[i];if(e===null||!e.has(r))Bx(0,n,r,i),Bx(1,n,r,i),jx(n,i,!1);else{let o=e.get(r);Vx(0,n,o,i),Vx(1,n,o,i),jx(n,i,!0)}}}function Bx(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let a;t===0?a=n.inputs??={}:a=n.outputs??={},a[o]??=[],a[o].push(i),AD(n,o)}}function Vx(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let a=r[o],s;t===0?s=n.hostDirectiveInputs??={}:s=n.hostDirectiveOutputs??={},s[a]??=[],s[a].push(i,o),AD(n,a)}}function AD(t,n){n==="class"?t.flags|=8:n==="style"&&(t.flags|=16)}function jx(t,n,e){let{attrs:i,inputs:r,hostDirectiveInputs:o}=t;if(i===null||!e&&r===null||e&&o===null||Hb(t)){t.initialInputs??=[],t.initialInputs.push(null);return}let a=null,s=0;for(;s<i.length;){let l=i[s];if(l===0){s+=4;continue}else if(l===5){s+=2;continue}else if(typeof l=="number")break;if(!e&&r.hasOwnProperty(l)){let c=r[l];for(let d of c)if(d===n){a??=[],a.push(l,i[s+1]);break}}else if(e&&o.hasOwnProperty(l)){let c=o[l];for(let d=0;d<c.length;d+=2)if(c[d]===n){a??=[],a.push(c[d+1],i[s+1]);break}}s+=2}t.initialInputs??=[],t.initialInputs.push(a)}function WP(t,n,e,i,r){t.data[i]=r;let o=r.factory||(r.factory=sa(r.type,!0)),a=new va(o,bi(r),T,null);t.blueprint[i]=a,e[i]=a,GP(t,n,i,Bc(t,e,r.hostVars,sn),r)}function GP(t,n,e,i,r){let o=r.hostBindings;if(o){let a=t.hostBindingOpCodes;a===null&&(a=t.hostBindingOpCodes=[]);let s=~n.index;qP(a)!=s&&a.push(s),a.push(e,i,o)}}function qP(t){let n=t.length;for(;n>0;){let e=t[--n];if(typeof e=="number"&&e<0)return e}return 0}function ZP(t,n,e){if(e){if(n.exportAs)for(let i=0;i<n.exportAs.length;i++)e[n.exportAs[i]]=t;bi(n)&&(e[""]=t)}}function YP(t,n,e){t.flags|=1,t.directiveStart=n,t.directiveEnd=n+e,t.providerIndexes=n}function ov(t,n,e,i,r,o,a,s){let l=n[ae],c=l.consts,d=Cn(c,a),m=Ps(l,t,e,i,d);return o&&RD(l,n,m,Cn(c,s),r),m.mergedAttrs=Ms(m.mergedAttrs,m.attrs),m.attrs!==null&&Qm(m,m.attrs,!1),m.mergedAttrs!==null&&Qm(m,m.mergedAttrs,!0),l.queries!==null&&l.queries.elementStart(l,m),m}function av(t,n){lE(t,n),Kg(n)&&t.queries.elementEnd(n)}function QP(t,n,e,i,r,o){let a=n.consts,s=Cn(a,r),l=Ps(n,t,e,i,s);if(l.mergedAttrs=Ms(l.mergedAttrs,l.attrs),o!=null){let c=Cn(a,o);l.localNames=[];for(let d=0;d<c.length;d+=2)l.localNames.push(c[d],-1)}return l.attrs!==null&&Qm(l,l.attrs,!1),l.mergedAttrs!==null&&Qm(l,l.mergedAttrs,!0),n.queries!==null&&n.queries.elementStart(n,l),l}function sv(t){return t!==null&&(typeof t=="function"||typeof t=="object")}function $c(t,n,e){return t[n]=e}function ND(t,n){return t[n]}function wn(t,n,e){if(e===sn)return!1;let i=t[n];return Object.is(i,e)?!1:(t[n]=e,!0)}function Xm(t,n,e,i){let r=wn(t,n,e);return wn(t,n+1,i)||r}function PD(t,n,e,i,r,o){let a=Xm(t,n,e,i);return Xm(t,n+2,r,o)||a}function $m(t,n,e){return function i(r){let o=i.__ngNativeEl__;o!==void 0&&zA(r,o);let a=Mr(t)?Yn(t.index,n):n;iv(a,5);let s=n[xt],l=Ux(n,s,e,r),c=i.__ngNextListenerFn__;for(;c;)l=Ux(n,s,c,r)&&l,c=c.__ngNextListenerFn__;return l}}function Ux(t,n,e,i){let r=se(null);try{return Ke(je.OutputStart,n,e),e(i)!==!1}catch(o){return rP(t,o),!1}finally{Ke(je.OutputEnd,n,e),se(r)}}function FD(t,n,e,i,r,o,a,s){let l=_s(t),c=!1,d=null;if(!i&&l&&(d=KP(n,e,o,t.index)),d!==null){let m=d.__ngLastListenerFn__||d;m.__ngNextListenerFn__=a,d.__ngLastListenerFn__=a,c=!0}else{let m=Nn(t,e),f=i?i(m):m;WA(e,f,o,s),i||(s.__ngNativeEl__=m);let h=r.listen(f,o,s);if(!XP(o)){let b=i?D=>i(An(D[t.index])):t.index;LD(b,n,e,o,s,h,!1)}}return c}function XP(t){return t.startsWith("animation")||t.startsWith("transition")}function KP(t,n,e,i){let r=t.cleanup;if(r!=null)for(let o=0;o<r.length-1;o+=2){let a=r[o];if(a===e&&r[o+1]===i){let s=n[ps],l=r[o+2];return s&&s.length>l?s[l]:null}typeof a=="string"&&(o+=2)}return null}function LD(t,n,e,i,r,o,a){let s=n.firstCreatePass?o_(n):null,l=r_(e),c=l.length;l.push(r,o),s&&s.push(i,t,c,(c+1)*(a?-1:1))}function Hx(t,n,e,i,r,o){let a=n[e],s=n[ae],c=s.data[e].outputs[i],m=a[c].subscribe(o);LD(t.index,s,n,r,o,m,!0)}var ab=Symbol("BINDING");function BD(t){return t.debugInfo?.className||t.type.name||null}var Km=class extends Hc{ngModule;constructor(n){super(),this.ngModule=n}resolveComponentFactory(n){let e=$i(n);return new Co(e,this.ngModule)}};function JP(t){return Object.keys(t).map(n=>{let[e,i,r]=t[n],o={propName:e,templateName:n,isSignal:(i&hh.SignalBased)!==0};return r&&(o.transform=r),o})}function eF(t){return Object.keys(t).map(n=>({propName:t[n],templateName:n}))}function tF(t,n,e){let i=n instanceof Xe?n:n?.injector;return i&&t.getStandaloneInjector!==null&&(i=t.getStandaloneInjector(i)||i),i?new ob(e,i):e}function nF(t){let n=t.get(It,null);if(n===null)throw new R(407,!1);let e=t.get(OD,null),i=t.get(zi,null),r=t.get(Ei,null,{optional:!0});return{rendererFactory:n,sanitizer:e,changeDetectionScheduler:i,ngReflect:!1,tracingService:r}}function iF(t,n){let e=VD(t);return Lb(n,e,e==="svg"?Jg:e==="math"?Ww:null)}function VD(t){return(t.selectors[0][0]||"div").toLowerCase()}var Co=class extends yh{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=JP(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=eF(this.componentDef.outputs),this.cachedOutputs}constructor(n,e){super(),this.componentDef=n,this.ngModule=e,this.componentType=n.type,this.selector=MN(n.selectors),this.ngContentSelectors=n.ngContentSelectors??[],this.isBoundToModule=!!e}create(n,e,i,r,o,a){Ke(je.DynamicComponentStart);let s=se(null);try{let l=this.componentDef,c=tF(l,r||this.ngModule,n),d=nF(c),m=d.tracingService;return m&&m.componentCreate?m.componentCreate(BD(l),()=>this.createComponentRef(d,c,e,i,o,a)):this.createComponentRef(d,c,e,i,o,a)}finally{se(s)}}createComponentRef(n,e,i,r,o,a){let s=this.componentDef,l=rF(r,s,a,o),c=n.rendererFactory.createRenderer(null,s),d=r?qN(c,r,s.encapsulation,e):iF(s,c),m=a?.some(zx)||o?.some(b=>typeof b!="function"&&b.bindings.some(zx)),f=$b(null,l,null,512|YE(s),null,null,n,c,e,null,kE(d,e,!0));f[mt]=d,Om(f);let h=null;try{let b=ov(mt,f,2,"#host",()=>l.directiveRegistry,!0,0);zE(c,d,b),Ss(d,f),bh(l,f,b),kb(l,b,f),av(l,b),i!==void 0&&aF(b,this.ngContentSelectors,i),h=Yn(b.index,f),f[xt]=h[xt],nv(l,f,null)}catch(b){throw h!==null&&L_(h),L_(f),b}finally{Ke(je.DynamicComponentEnd),Rm()}return new Jm(this.componentType,f,!!m)}};function rF(t,n,e,i){let r=t?["ng-version","21.2.13"]:SN(n.selectors[0]),o=null,a=null,s=0;if(e)for(let d of e)s+=d[ab].requiredVars,d.create&&(d.targetIdx=0,(o??=[]).push(d)),d.update&&(d.targetIdx=0,(a??=[]).push(d));if(i)for(let d=0;d<i.length;d++){let m=i[d];if(typeof m!="function")for(let f of m.bindings){s+=f[ab].requiredVars;let h=d+1;f.create&&(f.targetIdx=h,(o??=[]).push(f)),f.update&&(f.targetIdx=h,(a??=[]).push(f))}}let l=[n];if(i)for(let d of i){let m=typeof d=="function"?d:d.type,f=_m(m);l.push(f)}return zb(0,null,oF(o,a),1,s,l,null,null,null,[r],null)}function oF(t,n){return!t&&!n?null:e=>{if(e&1&&t)for(let i of t)i.create();if(e&2&&n)for(let i of n)i.update()}}function zx(t){let n=t[ab].kind;return n==="input"||n==="twoWay"}var Jm=class extends kD{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(n,e,i){super(),this._rootLView=e,this._hasInputBindings=i,this._tNode=Em(e[ae],mt),this.location=Rs(this._tNode,e),this.instance=Yn(this._tNode.index,e)[xt],this.hostView=this.changeDetectorRef=new yo(e,void 0),this.componentType=n}setInput(n,e){this._hasInputBindings;let i=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(n)&&Object.is(this.previousInputValues.get(n),e))return;let r=this._rootLView,o=tv(i,r[ae],r,n,e);this.previousInputValues.set(n,e);let a=Yn(i.index,r);iv(a,1)}get injector(){return new ba(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(n){this.hostView.onDestroy(n)}};function aF(t,n,e){let i=t.projection=[];for(let r=0;r<n.length;r++){let o=e[r];i.push(o!=null&&o.length?Array.from(o):null)}}var jt=(()=>{class t{static __NG_ELEMENT_ID__=sF}return t})();function sF(){let t=Vt();return jD(t,re())}var sb=class t extends jt{_lContainer;_hostTNode;_hostLView;constructor(n,e,i){super(),this._lContainer=n,this._hostTNode=e,this._hostLView=i}get element(){return Rs(this._hostTNode,this._hostLView)}get injector(){return new ba(this._hostTNode,this._hostLView)}get parentInjector(){let n=Mb(this._hostTNode,this._hostLView);if(uE(n)){let e=qm(n,this._hostLView),i=Gm(n),r=e[ae].data[i+8];return new ba(r,e)}else return new ba(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(n){let e=$x(this._lContainer);return e!==null&&e[n]||null}get length(){return this._lContainer.length-_t}createEmbeddedView(n,e,i){let r,o;typeof i=="number"?r=i:i!=null&&(r=i.index,o=i.injector);let a=Ym(this._lContainer,n.ssrId),s=n.createEmbeddedViewImpl(e||{},o,a);return this.insertImpl(s,r,Ts(this._hostTNode,a)),s}createComponent(n,e,i,r,o,a,s){let l=n&&!bA(n),c;if(l)c=e;else{let S=e||{};c=S.index,i=S.injector,r=S.projectableNodes,o=S.environmentInjector||S.ngModuleRef,a=S.directives,s=S.bindings}let d=l?n:new Co($i(n)),m=i||this.parentInjector;if(!o&&d.ngModule==null){let k=(l?m:this.parentInjector).get(Xe,null);k&&(o=k)}let f=$i(d.componentType??{}),h=Ym(this._lContainer,f?.id??null),b=h?.firstChild??null,D=d.create(m,r,b,o,a,s);return this.insertImpl(D.hostView,c,Ts(this._hostTNode,h)),D}insert(n,e){return this.insertImpl(n,e,!0)}insertImpl(n,e,i){let r=n._lView;if(Zw(r)){let s=this.indexOf(n);if(s!==-1)this.detach(s);else{let l=r[Lt],c=new t(l,l[on],l[Lt]);c.detach(c.indexOf(n))}}let o=this._adjustIndex(e),a=this._lContainer;return Uc(a,r,o,i),n.attachToViewContainerRef(),zg(M_(a),o,n),n}move(n,e){return this.insert(n,e)}indexOf(n){let e=$x(this._lContainer);return e!==null?e.indexOf(n):-1}remove(n){let e=this._adjustIndex(n,-1),i=Rc(this._lContainer,e);i&&(_c(M_(this._lContainer),e),gh(i[ae],i))}detach(n){let e=this._adjustIndex(n,-1),i=Rc(this._lContainer,e);return i&&_c(M_(this._lContainer),e)!=null?new yo(i):null}_adjustIndex(n,e=0){return n??this.length+e}};function $x(t){return t[vc]}function M_(t){return t[vc]||(t[vc]=[])}function jD(t,n){let e,i=n[t.index];return _i(i)?e=i:(e=yD(i,n,null,t),n[t.index]=e,Wb(n,e)),cF(e,n,t,i),new sb(e,t,n)}function lF(t,n){let e=t[qe],i=e.createComment(""),r=Nn(n,t),o=e.parentNode(r);return Is(e,o,i,e.nextSibling(r),!1),i}var cF=mF,dF=()=>!1;function uF(t,n,e){return dF(t,n,e)}function mF(t,n,e,i){if(t[_o])return;let r;e.type&8?r=An(i):r=lF(n,e),t[_o]=r}var lb=class t{queryList;matches=null;constructor(n){this.queryList=n}clone(){return new t(this.queryList)}setDirty(){this.queryList.setDirty()}},cb=class t{queries;constructor(n=[]){this.queries=n}createEmbeddedView(n){let e=n.queries;if(e!==null){let i=n.contentQueries!==null?n.contentQueries[0]:e.length,r=[];for(let o=0;o<i;o++){let a=e.getByIndex(o),s=this.queries[a.indexInDeclarationView];r.push(s.clone())}return new t(r)}return null}insertView(n){this.dirtyQueriesWithMatches(n)}detachView(n){this.dirtyQueriesWithMatches(n)}finishViewCreation(n){this.dirtyQueriesWithMatches(n)}dirtyQueriesWithMatches(n){for(let e=0;e<this.queries.length;e++)cv(n,e).matches!==null&&this.queries[e].setDirty()}},eh=class{flags;read;predicate;constructor(n,e,i=null){this.flags=e,this.read=i,typeof n=="string"?this.predicate=_F(n):this.predicate=n}},db=class t{queries;constructor(n=[]){this.queries=n}elementStart(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(n,e)}elementEnd(n){for(let e=0;e<this.queries.length;e++)this.queries[e].elementEnd(n)}embeddedTView(n){let e=null;for(let i=0;i<this.length;i++){let r=e!==null?e.length:0,o=this.getByIndex(i).embeddedTView(n,r);o&&(o.indexInDeclarationView=i,e!==null?e.push(o):e=[o])}return e!==null?new t(e):null}template(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].template(n,e)}getByIndex(n){return this.queries[n]}get length(){return this.queries.length}track(n){this.queries.push(n)}},ub=class t{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(n,e=-1){this.metadata=n,this._declarationNodeIndex=e}elementStart(n,e){this.isApplyingToNode(e)&&this.matchTNode(n,e)}elementEnd(n){this._declarationNodeIndex===n.index&&(this._appliesToNextNode=!1)}template(n,e){this.elementStart(n,e)}embeddedTView(n,e){return this.isApplyingToNode(n)?(this.crossesNgTemplate=!0,this.addMatch(-n.index,e),new t(this.metadata)):null}isApplyingToNode(n){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let e=this._declarationNodeIndex,i=n.parent;for(;i!==null&&i.type&8&&i.index!==e;)i=i.parent;return e===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(n,e){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let o=i[r];this.matchTNodeWithReadOption(n,e,hF(e,o)),this.matchTNodeWithReadOption(n,e,Hm(e,n,o,!1,!1))}else i===Xt?e.type&4&&this.matchTNodeWithReadOption(n,e,-1):this.matchTNodeWithReadOption(n,e,Hm(e,n,i,!1,!1))}matchTNodeWithReadOption(n,e,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===U||r===jt||r===Xt&&e.type&4)this.addMatch(e.index,-2);else{let o=Hm(e,n,r,!1,!1);o!==null&&this.addMatch(e.index,o)}else this.addMatch(e.index,i)}}addMatch(n,e){this.matches===null?this.matches=[n,e]:this.matches.push(n,e)}};function hF(t,n){let e=t.localNames;if(e!==null){for(let i=0;i<e.length;i+=2)if(e[i]===n)return e[i+1]}return null}function fF(t,n){return t.type&11?Rs(t,n):t.type&4?vh(t,n):null}function pF(t,n,e,i){return e===-1?fF(n,t):e===-2?gF(t,n,i):Tc(t,t[ae],e,n)}function gF(t,n,e){if(e===U)return Rs(n,t);if(e===Xt)return vh(n,t);if(e===jt)return jD(n,t)}function UD(t,n,e,i){let r=n[Wi].queries[i];if(r.matches===null){let o=t.data,a=e.matches,s=[];for(let l=0;a!==null&&l<a.length;l+=2){let c=a[l];if(c<0)s.push(null);else{let d=o[c];s.push(pF(n,d,a[l+1],e.metadata.read))}}r.matches=s}return r.matches}function mb(t,n,e,i){let r=t.queries.getByIndex(e),o=r.matches;if(o!==null){let a=UD(t,n,r,e);for(let s=0;s<o.length;s+=2){let l=o[s];if(l>0)i.push(a[s/2]);else{let c=o[s+1],d=n[-l];for(let m=_t;m<d.length;m++){let f=d[m];f[po]===f[Lt]&&mb(f[ae],f,c,i)}if(d[pa]!==null){let m=d[pa];for(let f=0;f<m.length;f++){let h=m[f];mb(h[ae],h,c,i)}}}}}return i}function lv(t,n){return t[Wi].queries[n].queryList}function HD(t,n,e){let i=new Ci((e&4)===4);return Xw(t,n,i,i.destroy),(n[Wi]??=new cb).queries.push(new lb(i))-1}function zD(t,n,e){let i=at();return i.firstCreatePass&&(WD(i,new eh(t,n,e),-1),(n&2)===2&&(i.staticViewQueries=!0)),HD(i,re(),n)}function $D(t,n,e,i){let r=at();if(r.firstCreatePass){let o=Vt();WD(r,new eh(n,e,i),o.index),bF(r,t),(e&2)===2&&(r.staticContentQueries=!0)}return HD(r,re(),e)}function _F(t){return t.split(",").map(n=>n.trim())}function WD(t,n,e){t.queries===null&&(t.queries=new db),t.queries.track(new ub(n,e))}function bF(t,n){let e=t.contentQueries||(t.contentQueries=[]),i=e.length?e[e.length-1]:-1;n!==i&&e.push(t.queries.length-1,n)}function cv(t,n){return t.queries.getByIndex(n)}function GD(t,n){let e=t[ae],i=cv(e,n);return i.crossesNgTemplate?mb(e,t,n,[]):UD(e,t,i,n)}function qD(t,n,e){let i,r=Ql(()=>{i._dirtyCounter();let o=vF(i,t);if(n&&o===void 0)throw new R(-951,!1);return o});return i=r[Rt],i._dirtyCounter=Fe(0),i._flatValue=void 0,r}function dv(t){return qD(!0,!1,t)}function uv(t){return qD(!0,!0,t)}function ZD(t,n){let e=t[Rt];e._lView=re(),e._queryIndex=n,e._queryList=lv(e._lView,n),e._queryList.onDirty(()=>e._dirtyCounter.update(i=>i+1))}function vF(t,n){let e=t._lView,i=t._queryIndex;if(e===void 0||i===void 0||e[he]&4)return n?void 0:Qt;let r=lv(e,i),o=GD(e,i);return r.reset(o,yE),n?r.first:r._changesDetected||t._flatValue===void 0?t._flatValue=r.toArray():t._flatValue}var Yi=class{},Ch=class{};var th=class extends Yi{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new Km(this);constructor(n,e,i,r=!0){super(),this.ngModuleType=n,this._parent=e;let o=jg(n);this._bootstrapComponents=GE(o.bootstrap),this._r3Injector=__(n,e,[{provide:Yi,useValue:this},{provide:Hc,useValue:this.componentFactoryResolver},...i],pc(n),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let n=this._r3Injector;!n.destroyed&&n.destroy(),this.destroyCbs.forEach(e=>e()),this.destroyCbs=null}onDestroy(n){this.destroyCbs.push(n)}},nh=class extends Ch{moduleType;constructor(n){super(),this.moduleType=n}create(n){return new th(this.moduleType,n,[])}};var Ac=class extends Yi{injector;componentFactoryResolver=new Km(this);instance=null;constructor(n){super();let e=new ca([...n.providers,{provide:Yi,useValue:this},{provide:Hc,useValue:this.componentFactoryResolver}],n.parent||fs(),n.debugName,new Set(["environment"]));this.injector=e,n.runEnvironmentInitializers&&e.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(n){this.injector.onDestroy(n)}};function Fs(t,n,e=null){return new Ac({providers:t,parent:n,debugName:e,runEnvironmentInitializers:!0}).injector}var yF=(()=>{class t{_injector;cachedInjectors=new Map;constructor(e){this._injector=e}getOrCreateStandaloneInjector(e){if(!e.standalone)return null;if(!this.cachedInjectors.has(e)){let i=Gg(!1,e.type),r=i.length>0?Fs([i],this._injector,""):null;this.cachedInjectors.set(e,r)}return this.cachedInjectors.get(e)}ngOnDestroy(){try{for(let e of this.cachedInjectors.values())e!==null&&e.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=w({token:t,providedIn:"environment",factory:()=>new t(A(Xe))})}return t})();function O(t){return Pc(()=>{let n=YD(t),e=te(_({},n),{decls:t.decls,vars:t.vars,template:t.template,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,onPush:t.changeDetection===Sb.OnPush,directiveDefs:null,pipeDefs:null,dependencies:n.standalone&&t.dependencies||null,getStandaloneInjector:n.standalone?r=>r.get(yF).getOrCreateStandaloneInjector(e):null,getExternalStyles:null,signals:t.signals??!1,data:t.data||{},encapsulation:t.encapsulation||wi.Emulated,styles:t.styles||Qt,_:null,schemas:t.schemas||null,tView:null,id:""});n.standalone&&Di("NgStandalone"),QD(e);let i=t.dependencies;return e.directiveDefs=Wx(i,CF),e.pipeDefs=Wx(i,kw),e.id=EF(e),e})}function CF(t){return $i(t)||_m(t)}function F(t){return Pc(()=>({type:t.type,bootstrap:t.bootstrap||Qt,declarations:t.declarations||Qt,imports:t.imports||Qt,exports:t.exports||Qt,transitiveCompileScopes:null,schemas:t.schemas||null,id:t.id||null}))}function wF(t,n){if(t==null)return fi;let e={};for(let i in t)if(t.hasOwnProperty(i)){let r=t[i],o,a,s,l;Array.isArray(r)?(s=r[0],o=r[1],a=r[2]??o,l=r[3]||null):(o=r,a=r,s=hh.None,l=null),e[o]=[i,s,l],n[o]=a}return e}function xF(t){if(t==null)return fi;let n={};for(let e in t)t.hasOwnProperty(e)&&(n[t[e]]=e);return n}function W(t){return Pc(()=>{let n=YD(t);return QD(n),n})}function YD(t){let n={};return{type:t.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:n,inputConfig:t.inputs||fi,exportAs:t.exportAs||null,standalone:t.standalone??!0,signals:t.signals===!0,selectors:t.selectors||Qt,viewQuery:t.viewQuery||null,features:t.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,inputs:wF(t.inputs,n),outputs:xF(t.outputs),debugInfo:null}}function QD(t){t.features?.forEach(n=>n(t))}function Wx(t,n){return t?()=>{let e=typeof t=="function"?t():t,i=[];for(let r of e){let o=n(r);o!==null&&i.push(o)}return i}:null}function EF(t){let n=0,e=typeof t.consts=="function"?"":t.consts,i=[t.selectors,t.ngContentSelectors,t.hostVars,t.hostAttrs,e,t.vars,t.decls,t.encapsulation,t.standalone,t.signals,t.exportAs,JSON.stringify(t.inputs),JSON.stringify(t.outputs),Object.getOwnPropertyNames(t.type.prototype),!!t.contentQueries,!!t.viewQuery];for(let o of i.join("|"))n=Math.imul(31,n)+o.charCodeAt(0)<<0;return n+=2147483648,"c"+n}function mv(t){let n=e=>{let i=Array.isArray(t);e.hostDirectives===null?(e.resolveHostDirectives=DF,e.hostDirectives=i?t.map(hb):[t]):i?e.hostDirectives.unshift(...t.map(hb)):e.hostDirectives.unshift(t)};return n.ngInherit=!0,n}function DF(t){let n=[],e=!1,i=null,r=null;for(let o=0;o<t.length;o++){let a=t[o];if(a.hostDirectives!==null){let s=n.length;i??=new Map,r??=new Map,XD(a,n,i),r.set(a,[s,n.length-1])}o===0&&bi(a)&&(e=!0,n.push(a))}for(let o=e?1:0;o<t.length;o++)n.push(t[o]);return[n,i,r]}function XD(t,n,e){if(t.hostDirectives!==null)for(let i of t.hostDirectives)if(typeof i=="function"){let r=i();for(let o of r)Gx(hb(o),n,e)}else Gx(i,n,e)}function Gx(t,n,e){let i=_m(t.directive);MF(i.declaredInputs,t.inputs),XD(i,n,e),e.set(i,t),n.push(i)}function hb(t){return typeof t=="function"?{directive:Ft(t),inputs:fi,outputs:fi}:{directive:Ft(t.directive),inputs:qx(t.inputs),outputs:qx(t.outputs)}}function qx(t){if(t===void 0||t.length===0)return fi;let n={};for(let e=0;e<t.length;e+=2)n[t[e]]=t[e+1];return n}function MF(t,n){for(let e in n)if(n.hasOwnProperty(e)){let i=n[e],r=t[e];t[i]=r}}function SF(t){return Object.getPrototypeOf(t.prototype).constructor}function Ie(t){let n=SF(t.type),e=!0,i=[t];for(;n;){let r;if(bi(t))r=n.\u0275cmp||n.\u0275dir;else{if(n.\u0275cmp)throw new R(903,!1);r=n.\u0275dir}if(r){if(e){i.push(r);let a=t;a.inputs=S_(t.inputs),a.declaredInputs=S_(t.declaredInputs),a.outputs=S_(t.outputs);let s=r.hostBindings;s&&RF(t,s);let l=r.viewQuery,c=r.contentQueries;if(l&&kF(t,l),c&&OF(t,c),IF(t,r),Sw(t.outputs,r.outputs),bi(r)&&r.data.animation){let d=t.data;d.animation=(d.animation||[]).concat(r.data.animation)}}let o=r.features;if(o)for(let a=0;a<o.length;a++){let s=o[a];s&&s.ngInherit&&s(t),s===Ie&&(e=!1)}}n=Object.getPrototypeOf(n)}TF(i)}function IF(t,n){for(let e in n.inputs){if(!n.inputs.hasOwnProperty(e)||t.inputs.hasOwnProperty(e))continue;let i=n.inputs[e];i!==void 0&&(t.inputs[e]=i,t.declaredInputs[e]=n.declaredInputs[e])}}function TF(t){let n=0,e=null;for(let i=t.length-1;i>=0;i--){let r=t[i];r.hostVars=n+=r.hostVars,r.hostAttrs=Ms(r.hostAttrs,e=Ms(e,r.hostAttrs))}}function S_(t){return t===fi?{}:t===Qt?[]:t}function kF(t,n){let e=t.viewQuery;e?t.viewQuery=(i,r)=>{n(i,r),e(i,r)}:t.viewQuery=n}function OF(t,n){let e=t.contentQueries;e?t.contentQueries=(i,r,o)=>{n(i,r,o),e(i,r,o)}:t.contentQueries=n}function RF(t,n){let e=t.hostBindings;e?t.hostBindings=(i,r)=>{n(i,r),e(i,r)}:t.hostBindings=n}function KD(t,n,e,i,r,o,a,s){if(e.firstCreatePass){t.mergedAttrs=Ms(t.mergedAttrs,t.attrs);let d=t.tView=zb(2,t,r,o,a,e.directiveRegistry,e.pipeRegistry,null,e.schemas,e.consts,null);e.queries!==null&&(e.queries.template(e,t),d.queries=e.queries.embeddedTView(t))}s&&(t.flags|=s),Sr(t,!1);let l=NF(e,n,t,i);xc()&&Qb(e,n,l,t),Ss(l,n);let c=yD(l,n,l,t);n[i+mt]=c,Wb(n,c),uF(c,t,n)}function AF(t,n,e,i,r,o,a,s,l,c,d){let m=e+mt,f;return n.firstCreatePass?(f=Ps(n,m,4,a||null,s||null),Sm()&&RD(n,t,f,Cn(n.consts,c),Kb),lE(n,f)):f=n.data[m],KD(f,t,n,e,i,r,o,l),_s(f)&&bh(n,t,f),c!=null&&Vc(t,f,d),f}function ks(t,n,e,i,r,o,a,s,l,c,d){let m=e+mt,f;if(n.firstCreatePass){if(f=Ps(n,m,4,a||null,s||null),c!=null){let h=Cn(n.consts,c);f.localNames=[];for(let b=0;b<h.length;b+=2)f.localNames.push(h[b],-1)}}else f=n.data[m];return KD(f,t,n,e,i,r,o,l),c!=null&&Vc(t,f,d),f}function vt(t,n,e,i,r,o,a,s){let l=re(),c=at(),d=Cn(c.consts,o);return AF(l,c,t,n,e,i,r,d,void 0,a,s),vt}function Wc(t,n,e,i,r,o,a,s){let l=re(),c=at(),d=Cn(c.consts,o);return ks(l,c,t,n,e,i,r,d,void 0,a,s),Wc}var NF=PF;function PF(t,n,e,i){return ws(!0),n[qe].createComment("")}var wh=(()=>{class t{log(e){console.log(e)}warn(e){console.warn(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"platform"})}return t})();function Ki(t){return typeof t=="function"&&t[Rt]!==void 0}function hv(t){return Ki(t)&&typeof t.set=="function"}var fv=new C("");function xo(t){return!!t&&typeof t.then=="function"}function pv(t){return!!t&&typeof t.subscribe=="function"}var gv=new C("");function Ls(t){return On([{provide:gv,multi:!0,useValue:t}])}var _v=(()=>{class t{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((e,i)=>{this.resolve=e,this.reject=i});appInits=u(gv,{optional:!0})??[];injector=u(Y);constructor(){}runInitializers(){if(this.initialized)return;let e=[];for(let r of this.appInits){let o=Bt(this.injector,r);if(xo(o))e.push(o);else if(pv(o)){let a=new Promise((s,l)=>{o.subscribe({complete:s,error:l})});e.push(a)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(e).then(()=>{i()}).catch(r=>{this.reject(r)}),e.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Gc=new C("");function JD(){og(()=>{let t="";throw new R(600,t)})}function eM(t){return t.isBoundToModule}var FF=10;var Ut=(()=>{class t{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=u(Qn);afterRenderManager=u(ph);zonelessEnabled=u(Ec);rootEffectScheduler=u(Nm);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new I;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=u(Tr);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(le(e=>!e))}constructor(){u(Ei,{optional:!0})}whenStable(){let e;return new Promise(i=>{e=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{e.unsubscribe()})}_injector=u(Xe);_rendererFactory=null;get injector(){return this._injector}bootstrap(e,i){return this.bootstrapImpl(e,i)}bootstrapImpl(e,i,r=Y.NULL){return this._injector.get(B).run(()=>{Ke(je.BootstrapComponentStart);let a=e instanceof yh;if(!this._injector.get(_v).done){let b="";throw new R(405,b)}let l;a?l=e:l=this._injector.get(Hc).resolveComponentFactory(e),this.componentTypes.push(l.componentType);let c=eM(l)?void 0:this._injector.get(Yi),d=i||l.selector,m=l.create(r,[],d,c),f=m.location.nativeElement,h=m.injector.get(fv,null);return h?.registerApplication(f),m.onDestroy(()=>{this.detachView(m.hostView),Sc(this.components,m),h?.unregisterApplication(f)}),this._loadComponent(m),Ke(je.BootstrapComponentEnd,m),m})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){Ke(je.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(fh.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw Ke(je.ChangeDetectionEnd),new R(101,!1);let e=se(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,se(e),this.afterTick.next(),Ke(je.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(It,null,{optional:!0}));let e=0;for(;this.dirtyFlags!==0&&e++<FF;){Ke(je.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{Ke(je.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let e=!1;if(this.dirtyFlags&7){let i=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:r}of this.allViews){if(!i&&!yc(r))continue;let o=i&&!this.zonelessEnabled?0:1;gD(r,o),e=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}e||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:e})=>yc(e))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(e){let i=e;this._views.push(i),i.attachToAppRef(this)}detachView(e){let i=e;Sc(this._views,i),i.detachFromAppRef()}_loadComponent(e){this.attachView(e.hostView);try{this.tick()}catch(r){this.internalErrorHandler(r)}this.components.push(e),this._injector.get(Gc,[]).forEach(r=>r(e))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(e=>e()),this._views.slice().forEach(e=>e.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(e){return this._destroyListeners.push(e),()=>Sc(this._destroyListeners,e)}destroy(){if(this._destroyed)throw new R(406,!1);let e=this._injector;e.destroy&&!e.destroyed&&e.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Sc(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function fe(t,n,e,i){let r=re(),o=Ir();if(wn(r,o,n)){let a=at(),s=Cs();tP(s,r,t,n,e,i)}return fe}var fb=class{destroy(n){}updateValue(n,e){}swap(n,e){let i=Math.min(n,e),r=Math.max(n,e),o=this.detach(r);if(r-i>1){let a=this.detach(i);this.attach(i,o),this.attach(r,a)}else this.attach(i,o)}move(n,e){this.attach(e,this.detach(n))}};function I_(t,n,e,i,r){return t===e&&Object.is(n,i)?1:Object.is(r(t,n),r(e,i))?-1:0}function LF(t,n,e,i){let r,o,a=0,s=t.length-1,l=void 0;if(Array.isArray(n)){se(i);let c=n.length-1;for(se(null);a<=s&&a<=c;){let d=t.at(a),m=n[a],f=I_(a,d,a,m,e);if(f!==0){f<0&&t.updateValue(a,m),a++;continue}let h=t.at(s),b=n[c],D=I_(s,h,c,b,e);if(D!==0){D<0&&t.updateValue(s,b),s--,c--;continue}let S=e(a,d),k=e(s,h),_e=e(a,m);if(Object.is(_e,k)){let Pe=e(c,b);Object.is(Pe,S)?(t.swap(a,s),t.updateValue(s,b),c--,s--):t.move(s,a),t.updateValue(a,m),a++;continue}if(r??=new ih,o??=Yx(t,a,s,e),pb(t,r,a,_e))t.updateValue(a,m),a++,s++;else if(o.has(_e))r.set(S,t.detach(a)),s--;else{let Pe=t.create(a,n[a]);t.attach(a,Pe),a++,s++}}for(;a<=c;)Zx(t,r,e,a,n[a]),a++}else if(n!=null){se(i);let c=n[Symbol.iterator]();se(null);let d=c.next();for(;!d.done&&a<=s;){let m=t.at(a),f=d.value,h=I_(a,m,a,f,e);if(h!==0)h<0&&t.updateValue(a,f),a++,d=c.next();else{r??=new ih,o??=Yx(t,a,s,e);let b=e(a,f);if(pb(t,r,a,b))t.updateValue(a,f),a++,s++,d=c.next();else if(!o.has(b))t.attach(a,t.create(a,f)),a++,s++,d=c.next();else{let D=e(a,m);r.set(D,t.detach(a)),s--}}}for(;!d.done;)Zx(t,r,e,t.length,d.value),d=c.next()}for(;a<=s;)t.destroy(t.detach(s--));r?.forEach(c=>{t.destroy(c)})}function pb(t,n,e,i){return n!==void 0&&n.has(i)?(t.attach(e,n.get(i)),n.delete(i),!0):!1}function Zx(t,n,e,i,r){if(pb(t,n,i,e(i,r)))t.updateValue(i,r);else{let o=t.create(i,r);t.attach(i,o)}}function Yx(t,n,e,i){let r=new Set;for(let o=n;o<=e;o++)r.add(i(o,t.at(o)));return r}var ih=class{kvMap=new Map;_vMap=void 0;has(n){return this.kvMap.has(n)}delete(n){if(!this.has(n))return!1;let e=this.kvMap.get(n);return this._vMap!==void 0&&this._vMap.has(e)?(this.kvMap.set(n,this._vMap.get(e)),this._vMap.delete(e)):this.kvMap.delete(n),!0}get(n){return this.kvMap.get(n)}set(n,e){if(this.kvMap.has(n)){let i=this.kvMap.get(n);this._vMap===void 0&&(this._vMap=new Map);let r=this._vMap;for(;r.has(i);)i=r.get(i);r.set(i,e)}else this.kvMap.set(n,e)}forEach(n){for(let[e,i]of this.kvMap)if(n(i,e),this._vMap!==void 0){let r=this._vMap;for(;r.has(i);)i=r.get(i),n(i,e)}}};function G(t,n,e,i,r,o,a,s){Di("NgControlFlow");let l=re(),c=at(),d=Cn(c.consts,o);return ks(l,c,t,n,e,i,r,d,256,a,s),bv}function bv(t,n,e,i,r,o,a,s){Di("NgControlFlow");let l=re(),c=at(),d=Cn(c.consts,o);return ks(l,c,t,n,e,i,r,d,512,a,s),bv}function q(t,n){Di("NgControlFlow");let e=re(),i=Ir(),r=e[i]!==sn?e[i]:-1,o=r!==-1?rh(e,mt+r):void 0,a=0;if(wn(e,i,t)){let s=se(null);try{if(o!==void 0&&wD(o,a),t!==-1){let l=mt+t,c=rh(e,l),d=vb(e[ae],l),m=TD(c,d,e),f=jc(e,d,n,{dehydratedView:m});Uc(c,f,a,Ts(d,m))}}finally{se(s)}}else if(o!==void 0){let s=CD(o,a);s!==void 0&&(s[xt]=n)}}var gb=class{lContainer;$implicit;$index;constructor(n,e,i){this.lContainer=n,this.$implicit=e,this.$index=i}get $count(){return this.lContainer.length-_t}};function qc(t){return t}function Ji(t,n){return n}var _b=class{hasEmptyBlock;trackByFn;liveCollection;constructor(n,e,i){this.hasEmptyBlock=n,this.trackByFn=e,this.liveCollection=i}};function ln(t,n,e,i,r,o,a,s,l,c,d,m,f){Di("NgControlFlow");let h=re(),b=at(),D=l!==void 0,S=re(),k=s?a.bind(S[an][xt]):a,_e=new _b(D,k);S[mt+t]=_e,ks(h,b,t+1,n,e,i,r,Cn(b.consts,o),256),D&&ks(h,b,t+2,l,c,d,m,Cn(b.consts,f),512)}var bb=class extends fb{lContainer;hostLView;templateTNode;operationsCounter=void 0;needsIndexUpdate=!1;constructor(n,e,i){super(),this.lContainer=n,this.hostLView=e,this.templateTNode=i}get length(){return this.lContainer.length-_t}at(n){return this.getLView(n)[xt].$implicit}attach(n,e){let i=e[ua];this.needsIndexUpdate||=n!==this.length,Uc(this.lContainer,e,n,Ts(this.templateTNode,i)),BF(this.lContainer,n)}detach(n){return this.needsIndexUpdate||=n!==this.length-1,VF(this.lContainer,n),jF(this.lContainer,n)}create(n,e){let i=Ym(this.lContainer,this.templateTNode.tView.ssrId);return jc(this.hostLView,this.templateTNode,new gb(this.lContainer,e,n),{dehydratedView:i})}destroy(n){gh(n[ae],n)}updateValue(n,e){this.getLView(n)[xt].$implicit=e}reset(){this.needsIndexUpdate=!1}updateIndexes(){if(this.needsIndexUpdate)for(let n=0;n<this.length;n++)this.getLView(n)[xt].$index=n}getLView(n){return UF(this.lContainer,n)}};function cn(t){let n=se(null),e=Gi();try{let i=re(),r=i[ae],o=i[e],a=e+1,s=rh(i,a);if(o.liveCollection===void 0){let c=vb(r,a);o.liveCollection=new bb(s,i,c)}else o.liveCollection.reset();let l=o.liveCollection;if(LF(l,t,o.trackByFn,n),l.updateIndexes(),o.hasEmptyBlock){let c=Ir(),d=l.length===0;if(wn(i,c,d)){let m=e+2,f=rh(i,m);if(d){let h=vb(r,m),b=TD(f,h,i),D=jc(i,h,void 0,{dehydratedView:b});Uc(f,D,0,Ts(h,b))}else r.firstUpdatePass&&FP(f),wD(f,0)}}}finally{se(n)}}function rh(t,n){return t[n]}function BF(t,n){if(t.length<=_t)return;let e=_t+n,i=t[e],r=i?i[go]:void 0;if(i&&r&&r.detachedLeaveAnimationFns&&r.detachedLeaveAnimationFns.length>0){let o=i[xr];FN(o,r),ya.delete(i[Er]),r.detachedLeaveAnimationFns=void 0}}function VF(t,n){if(t.length<=_t)return;let e=_t+n,i=t[e],r=i?i[go]:void 0;r&&r.leave&&r.leave.size>0&&(r.detachedLeaveAnimationFns=[])}function jF(t,n){return Rc(t,n)}function UF(t,n){return CD(t,n)}function vb(t,n){return Em(t,n)}function L(t,n,e){let i=re(),r=Ir();if(wn(i,r,n)){let o=at(),a=Cs();cD(a,i,t,n,i[qe],e)}return L}function yb(t,n,e,i,r){tv(n,t,e,r?"class":"style",i)}function p(t,n,e,i){let r=re(),o=r[ae],a=t+mt,s=o.firstCreatePass?ov(a,r,2,n,Kb,Sm(),e,i):o.data[a];if(Mr(s)){let l=r[gi].tracingService;if(l&&l.componentCreate){let c=o.data[s.directiveStart+s.componentOffset];return l.componentCreate(BD(c),()=>(Qx(t,n,r,s,i),p))}}return Qx(t,n,r,s,i),p}function Qx(t,n,e,i,r){if(Jb(i,e,t,n,tM),_s(i)){let o=e[ae];bh(o,e,i),kb(o,i,e)}r!=null&&Vc(e,i)}function g(){let t=at(),n=Vt(),e=ev(n);return t.firstCreatePass&&av(t,e),l_(e)&&c_(),a_(),e.classesWithoutHost!=null&&EA(e)&&yb(t,e,re(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&DA(e)&&yb(t,e,re(),e.stylesWithoutHost,!1),g}function V(t,n,e,i){return p(t,n,e,i),g(),V}function ht(t,n,e,i){let r=re(),o=r[ae],a=t+mt,s=o.firstCreatePass?QP(a,o,2,n,e,i):o.data[a];return Jb(s,r,t,n,tM),i!=null&&Vc(r,s),ht}function yt(){let t=Vt(),n=ev(t);return l_(n)&&c_(),a_(),yt}function Et(t,n,e,i){return ht(t,n,e,i),yt(),Et}var tM=(t,n,e,i,r)=>(ws(!0),Lb(n[qe],i,ux()));function vv(t,n,e){let i=re(),r=i[ae],o=t+mt,a=r.firstCreatePass?ov(o,i,8,"ng-container",Kb,Sm(),n,e):r.data[o];if(Jb(a,i,t,"ng-container",HF),_s(a)){let s=i[ae];bh(s,i,a),kb(s,a,i)}return e!=null&&Vc(i,a),vv}function yv(){let t=at(),n=Vt(),e=ev(n);return t.firstCreatePass&&av(t,e),yv}function Bs(t,n,e){return vv(t,n,e),yv(),Bs}var HF=(t,n,e,i,r)=>(ws(!0),UE(n[qe],""));function ft(){return re()}function dn(t,n,e){let i=re(),r=Ir();if(wn(i,r,n)){let o=at(),a=Cs();dD(a,i,t,n,i[qe],e)}return dn}var Zc="en-US";var zF={marker:"element"},$F={marker:"ICU"},kr=(function(t){return t[t.SHIFT=2]="SHIFT",t[t.APPEND_EAGERLY=1]="APPEND_EAGERLY",t[t.COMMENT=2]="COMMENT",t})(kr||{}),WF=Zc;function nM(t){typeof t=="string"&&(WF=t.toLowerCase().replace(/_/g,"-"))}function GF(t,n,e){let i=t[qe];switch(e){case Node.COMMENT_NODE:return UE(i,n);case Node.TEXT_NODE:return jE(i,n);case Node.ELEMENT_NODE:return Lb(i,n,null)}}var qF=(t,n,e,i)=>(ws(!0),GF(t,e,i));function ZF(t,n,e,i){let r=t[qe];for(let o=0;o<n.length;o++){let a=n[o++],s=n[o],l=(a&kr.COMMENT)===kr.COMMENT,c=(a&kr.APPEND_EAGERLY)===kr.APPEND_EAGERLY,d=a>>>kr.SHIFT,m=t[d],f=!1;m===null&&(m=t[d]=qF(t,d,s,l?Node.COMMENT_NODE:Node.TEXT_NODE),f=xc()),c&&e!==null&&f&&Is(r,e,m,i,!1)}}var oh=/�(\d+):?\d*�/gi;var YF=/�(\d+)�/,iM=/^\s*(�\d+:?\d*�)\s*,\s*(select|plural)\s*,/,Ic="\uFFFD",QF=/�\/?\*(\d+:\d+)�/gi,XF=/�(\/?[#*]\d+):?\d*�/gi,KF=/\uE500/g;function JF(t){return t.replace(KF," ")}function eL(t,n,e,i,r,o){let a=vs(),s=[],l=[],c=[[]],d=[[]];r=nL(r,o);let m=JF(r).split(XF);for(let f=0;f<m.length;f++){let h=m[f];if((f&1)===0){let b=wb(h);for(let D=0;D<b.length;D++){let S=b[D];if((D&1)===0){let k=S;k!==""&&tL(d[0],t,a,c[0],s,l,e,k)}else{let k=S;if(typeof k!="object")throw new Error(`Unable to parse ICU expression in "${r}" message.`);let Pe=rM(t,a,c[0],e,s,"",!0).index;aM(d[0],t,e,l,n,k,Pe)}}}else{let b=h.charCodeAt(0)===47,D=h.charCodeAt(b?1:0),S=mt+Number.parseInt(h.substring(b?2:1));if(b)c.shift(),d.shift(),Sr(vs(),!1);else{let k=TP(t,c[0],S);c.unshift([]),Sr(k,!0);let _e={kind:2,index:S,children:[],type:D===35?0:1};d[0].push(_e),d.unshift(_e.children)}}}t.data[i]={create:s,update:l,ast:d[0],parentTNodeIndex:n}}function rM(t,n,e,i,r,o,a){let s=Bc(t,i,1,null),l=s<<kr.SHIFT,c=vs();n===c&&(c=null),c===null&&(l|=kr.APPEND_EAGERLY),a&&(l|=kr.COMMENT,ON(AP)),r.push(l,o===null?"":o);let d=rv(t,s,a?32:1,o===null?"":o,null);MD(e,d);let m=d.index;return Sr(d,!1),c!==null&&n!==c&&IP(c,m),d}function tL(t,n,e,i,r,o,a,s){let l=s.match(oh),d=rM(n,e,i,a,r,l?null:s,!1).index;l&&Cb(o,s,d,null,0,null),t.push({kind:0,index:d})}function Cb(t,n,e,i,r,o){let a=t.length,s=a+1;t.push(null,null);let l=a+2,c=n.split(oh),d=0;for(let m=0;m<c.length;m++){let f=c[m];if(m&1){let h=r+parseInt(f,10);t.push(-1-h),d=d|oM(h)}else f!==""&&t.push(f)}return t.push(e<<2|(i?1:0)),i&&t.push(i,o),t[a]=d,t[s]=t.length-l,d}function oM(t){return 1<<Math.min(t,31)}function Xx(t){let n,e="",i=0,r=!1,o;for(;(n=QF.exec(t))!==null;)r?n[0]===`${Ic}/*${o}${Ic}`&&(i=n.index,r=!1):(e+=t.substring(i,n.index+n[0].length),o=n[1],r=!0);return e+=t.slice(i),e}function nL(t,n){if(RP(n))return Xx(t);{let e=t.indexOf(`:${n}${Ic}`)+2+n.toString().length,i=t.search(new RegExp(`${Ic}\\/\\*\\d+:${n}${Ic}`));return Xx(t.substring(e,i))}}function aM(t,n,e,i,r,o,a){let s=0,l={type:o.type,currentCaseLViewIndex:Bc(n,e,1,null),anchorIdx:a,cases:[],create:[],remove:[],update:[]};aL(i,o,a),SP(n,a,l);let c=o.values,d=[];for(let m=0;m<c.length;m++){let f=c[m],h=[];for(let D=0;D<f.length;D++){let S=f[D];if(typeof S!="string"){let k=h.push(S)-1;f[D]=`<!--\uFFFD${k}\uFFFD-->`}}let b=[];d.push(b),s=rL(b,n,l,e,i,r,o.cases[m],f.join(""),h)|s}s&&sL(i,s,a),t.push({kind:3,index:a,cases:d,currentCaseLViewIndex:l.currentCaseLViewIndex})}function iL(t){let n=[],e=[],i=1,r=0;t=t.replace(iM,function(a,s,l){return l==="select"?i=0:i=1,r=parseInt(s.slice(1),10),""});let o=wb(t);for(let a=0;a<o.length;){let s=o[a++].trim();i===1&&(s=s.replace(/\s*(?:=)?(\w+)\s*/,"$1")),s.length&&n.push(s);let l=wb(o[a++]);n.length>e.length&&e.push(l)}return{type:i,mainBinding:r,cases:n,values:e}}function wb(t){if(!t)return[];let n=0,e=[],i=[],r=/[{}]/g;r.lastIndex=0;let o;for(;o=r.exec(t);){let s=o.index;if(o[0]=="}"){if(e.pop(),e.length==0){let l=t.substring(n,s);iM.test(l)?i.push(iL(l)):i.push(l),n=s+1}}else{if(e.length==0){let l=t.substring(n,s);i.push(l),n=s+1}e.push("{")}}let a=t.substring(n);return i.push(a),i}function rL(t,n,e,i,r,o,a,s,l){let c=[],d=[],m=[];e.cases.push(a),e.create.push(c),e.remove.push(d),e.update.push(m);let h=NE(Tb()).getInertBodyElement(s),b=Q_(h)||h;return b?sM(t,n,e,i,r,c,d,m,b,o,l,0):0}function sM(t,n,e,i,r,o,a,s,l,c,d,m){let f=0,h=l.firstChild;for(;h;){let b=Bc(n,i,1,null);switch(h.nodeType){case Node.ELEMENT_NODE:let D=h,S=D.tagName.toLowerCase();if(q_.hasOwnProperty(S)){T_(o,zF,S,c,b),n.data[b]=S;let Ue=D.attributes;for(let tn=0;tn<Ue.length;tn++){let gt=Ue.item(tn),x=gt.name.toLowerCase();!!gt.value.match(oh)?Z_.hasOwnProperty(x)&&Cb(s,gt.value,b,gt.name,0,cL(x)):Z_[x]&&(BE[x]?Jx(o,b,gt.name,"unsafe:blocked"):Jx(o,b,gt.name,gt.value))}let Yt={kind:1,index:b,children:[]};t.push(Yt),f=sM(Yt.children,n,e,i,r,o,a,s,h,b,d,m+1)|f,Kx(a,b,m)}break;case Node.TEXT_NODE:let k=h.textContent||"",_e=k.match(oh);T_(o,null,_e?"":k,c,b),Kx(a,b,m),_e&&(f=Cb(s,k,b,null,0,null)|f),t.push({kind:0,index:b});break;case Node.COMMENT_NODE:let Pe=YF.exec(h.textContent||"");if(Pe){let Ue=parseInt(Pe[1],10),Yt=d[Ue];T_(o,$F,"",c,b),aM(t,n,i,r,c,Yt,b),oL(a,b,m)}break}h=h.nextSibling}return f}function Kx(t,n,e){e===0&&t.push(n)}function oL(t,n,e){e===0&&(t.push(~n),t.push(n))}function aL(t,n,e){t.push(oM(n.mainBinding),2,-1-n.mainBinding,e<<2|2)}function sL(t,n,e){t.push(n,1,e<<2|3)}function T_(t,n,e,i,r){n!==null&&t.push(n),t.push(e,r,OP(0,i,r))}function Jx(t,n,e,i){t.push(n<<1|1,e,i)}var lL=new Set(Object.values($E).flatMap(t=>t?Object.keys(t):[]));function cL(t){let n=t.toLowerCase();return BE[n]?As:lL.has(n)?WE:null}function lM(t,n,e=-1){let i=at(),r=re(),o=mt+t,a=Cn(i.consts,n),s=vs();if(i.firstCreatePass&&eL(i,s===null?0:s.index,r,o,a,e),i.type===2){let f=r[an];f[he]|=32}else r[he]|=32;let l=i.data[o],c=s===r[on]?null:s,d=tD(i,c,r),m=s&&s.type&8?r[s.index]:null;PP(r,o,s,e),ZF(r,l.create,d,m),f_(!0)}function cM(){f_(!1)}function st(t,n,e){lM(t,n,e),cM()}function H(t,n,e){let i=re(),r=at(),o=Vt();return dM(r,i,i[qe],o,t,n,e),H}function Ea(t,n,e){let i=re(),r=at(),o=Vt();return(o.type&3||e)&&FD(o,r,i,e,i[qe],t,n,$m(o,i,n)),Ea}function dM(t,n,e,i,r,o,a){let s=!0,l=null;if((i.type&3||a)&&(l??=$m(i,n,o),FD(i,t,n,a,e,r,o,l)&&(s=!1)),s){let c=i.outputs?.[r],d=i.hostDirectiveOutputs?.[r];if(d&&d.length)for(let m=0;m<d.length;m+=2){let f=d[m],h=d[m+1];l??=$m(i,n,o),Hx(i,n,f,h,r,l)}if(c&&c.length)for(let m of c)l??=$m(i,n,o),Hx(i,n,m,r,r,l)}}function E(t=1){return dx(t)}function dL(t,n){let e=null,i=CN(t);for(let r=0;r<n.length;r++){let o=n[r];if(o==="*"){e=r;continue}if(i===null?ZE(t,o,!0):EN(i,o))return r}return e}function Be(t){let n=re()[an][on];if(!n.projection){let e=t?t.length:1,i=n.projection=Fw(e,null),r=i.slice(),o=n.child;for(;o!==null;){if(o.type!==128){let a=t?dL(o,t):0;a!==null&&(r[a]?r[a].projectionNext=o:i[a]=o,r[a]=o)}o=o.next}}}function ue(t,n=0,e,i,r,o){let a=re(),s=at(),l=i?t+1:null;l!==null&&ks(a,s,l,i,r,o,null,e);let c=Ps(s,mt+t,16,null,e||null);c.projection===null&&(c.projection=n),m_();let m=!a[ua]||s_();a[an][on].projection[c.projection]===null&&l!==null?uL(a,s,l):m&&!uh(c)&&$N(s,a,c)}function uL(t,n,e){let i=mt+e,r=n.data[i],o=t[i],a=Ym(o,r.tView.ssrId),s=jc(t,r,void 0,{dehydratedView:a});Uc(o,s,0,Ts(r,a))}function Kt(t,n,e,i){return $D(t,n,e,i),Kt}function Te(t,n,e){return zD(t,n,e),Te}function Q(t){let n=re(),e=at(),i=km();Cc(i+1);let r=cv(e,i);if(t.dirty&&qw(n)===((r.metadata.flags&2)===2)){if(r.matches===null)t.reset([]);else{let o=GD(n,i);t.reset(o,yE),t.notifyOnChanges()}return!0}return!1}function X(){return lv(re(),km())}function xh(t,n,e,i,r){return ZD(n,$D(t,e,i,r)),xh}function Eh(t,n,e,i){return ZD(t,zD(n,e,i)),Eh}function Dh(t=1){Cc(km()+t)}function Jt(t){let n=ex();return Gw(n,mt+t)}function Vm(t,n){return t<<17|n<<2}function Ca(t){return t>>17&32767}function mL(t){return(t&2)==2}function hL(t,n){return t&131071|n<<17}function xb(t){return t|2}function Os(t){return(t&131068)>>2}function k_(t,n){return t&-131069|n<<2}function fL(t){return(t&1)===1}function Eb(t){return t|1}function pL(t,n,e,i,r,o){let a=o?n.classBindings:n.styleBindings,s=Ca(a),l=Os(a);t[i]=e;let c=!1,d;if(Array.isArray(e)){let m=e;d=m[1],(d===null||hs(m,d)>0)&&(c=!0)}else d=e;if(r)if(l!==0){let f=Ca(t[s+1]);t[i+1]=Vm(f,s),f!==0&&(t[f+1]=k_(t[f+1],i)),t[s+1]=hL(t[s+1],i)}else t[i+1]=Vm(s,0),s!==0&&(t[s+1]=k_(t[s+1],i)),s=i;else t[i+1]=Vm(l,0),s===0?s=i:t[l+1]=k_(t[l+1],i),l=i;c&&(t[i+1]=xb(t[i+1])),eE(t,d,i,!0),eE(t,d,i,!1),gL(n,d,t,i,o),a=Vm(s,l),o?n.classBindings=a:n.styleBindings=a}function gL(t,n,e,i,r){let o=r?t.residualClasses:t.residualStyles;o!=null&&typeof n=="string"&&hs(o,n)>=0&&(e[i+1]=Eb(e[i+1]))}function eE(t,n,e,i){let r=t[e+1],o=n===null,a=i?Ca(r):Os(r),s=!1;for(;a!==0&&(s===!1||o);){let l=t[a],c=t[a+1];_L(l,n)&&(s=!0,t[a+1]=i?Eb(c):xb(c)),a=i?Ca(c):Os(c)}s&&(t[e+1]=i?xb(r):Eb(r))}function _L(t,n){return t===null||n==null||(Array.isArray(t)?t[1]:t)===n?!0:Array.isArray(t)&&typeof n=="string"?hs(t,n)>=0:!1}var yi={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function bL(t){return t.substring(yi.key,yi.keyEnd)}function vL(t){return yL(t),uM(t,mM(t,0,yi.textEnd))}function uM(t,n){let e=yi.textEnd;return e===n?-1:(n=yi.keyEnd=CL(t,yi.key=n,e),mM(t,n,e))}function yL(t){yi.key=0,yi.keyEnd=0,yi.value=0,yi.valueEnd=0,yi.textEnd=t.length}function mM(t,n,e){for(;n<e&&t.charCodeAt(n)<=32;)n++;return n}function CL(t,n,e){for(;n<e&&t.charCodeAt(n)>32;)n++;return n}function er(t,n,e){return hM(t,n,e,!1),er}function ee(t,n){return hM(t,n,null,!0),ee}function Dt(t){xL(TL,wL,t,!0)}function wL(t,n){for(let e=vL(n);e>=0;e=uM(n,e))Cm(t,bL(n),!0)}function hM(t,n,e,i){let r=re(),o=at(),a=Im(2);if(o.firstUpdatePass&&pM(o,t,a,i),n!==sn&&wn(r,a,n)){let s=o.data[Gi()];gM(o,s,r,r[qe],t,r[a+1]=OL(n,e),i,a)}}function xL(t,n,e,i){let r=at(),o=Im(2);r.firstUpdatePass&&pM(r,null,o,i);let a=re();if(e!==sn&&wn(a,o,e)){let s=r.data[Gi()];if(_M(s,i)&&!fM(r,o)){let l=i?s.classesWithoutHost:s.stylesWithoutHost;l!==null&&(e=pm(l,e||"")),yb(r,s,a,e,i)}else kL(r,s,a,a[qe],a[o+1],a[o+1]=IL(t,n,e),i,o)}}function fM(t,n){return n>=t.expandoStartIndex}function pM(t,n,e,i){let r=t.data;if(r[e+1]===null){let o=r[Gi()],a=fM(t,e);_M(o,i)&&n===null&&!a&&(n=!1),n=EL(r,o,n,i),pL(r,o,n,e,a,i)}}function EL(t,n,e,i){let r=ax(t),o=i?n.residualClasses:n.residualStyles;if(r===null)(i?n.classBindings:n.styleBindings)===0&&(e=O_(null,t,n,e,i),e=Nc(e,n.attrs,i),o=null);else{let a=n.directiveStylingLast;if(a===-1||t[a]!==r)if(e=O_(r,t,n,e,i),o===null){let l=DL(t,n,i);l!==void 0&&Array.isArray(l)&&(l=O_(null,t,n,l[1],i),l=Nc(l,n.attrs,i),ML(t,n,i,l))}else o=SL(t,n,i)}return o!==void 0&&(i?n.residualClasses=o:n.residualStyles=o),e}function DL(t,n,e){let i=e?n.classBindings:n.styleBindings;if(Os(i)!==0)return t[Ca(i)]}function ML(t,n,e,i){let r=e?n.classBindings:n.styleBindings;t[Ca(r)]=i}function SL(t,n,e){let i,r=n.directiveEnd;for(let o=1+n.directiveStylingLast;o<r;o++){let a=t[o].hostAttrs;i=Nc(i,a,e)}return Nc(i,n.attrs,e)}function O_(t,n,e,i,r){let o=null,a=e.directiveEnd,s=e.directiveStylingLast;for(s===-1?s=e.directiveStart:s++;s<a&&(o=n[s],i=Nc(i,o.hostAttrs,r),o!==t);)s++;return t!==null&&(e.directiveStylingLast=s),i}function Nc(t,n,e){let i=e?1:2,r=-1;if(n!==null)for(let o=0;o<n.length;o++){let a=n[o];typeof a=="number"?r=a:r===i&&(Array.isArray(t)||(t=t===void 0?[]:["",t]),Cm(t,a,e?!0:n[++o]))}return t===void 0?null:t}function IL(t,n,e){if(e==null||e==="")return Qt;let i=[],r=Pn(e);if(Array.isArray(r))for(let o=0;o<r.length;o++)t(i,r[o],!0);else if(r instanceof Set)for(let o of r)t(i,o,!0);else if(typeof r=="object")for(let o in r)r.hasOwnProperty(o)&&t(i,o,r[o]);else typeof r=="string"&&n(i,r);return i}function TL(t,n,e){let i=String(n);i!==""&&!i.includes(" ")&&Cm(t,i,e)}function kL(t,n,e,i,r,o,a,s){r===sn&&(r=Qt);let l=0,c=0,d=0<r.length?r[0]:null,m=0<o.length?o[0]:null;for(;d!==null||m!==null;){let f=l<r.length?r[l+1]:void 0,h=c<o.length?o[c+1]:void 0,b=null,D;d===m?(l+=2,c+=2,f!==h&&(b=m,D=h)):m===null||d!==null&&d<m?(l+=2,b=d):(c+=2,b=m,D=h),b!==null&&gM(t,n,e,i,b,D,a,s),d=l<r.length?r[l]:null,m=c<o.length?o[c]:null}}function gM(t,n,e,i,r,o,a,s){if(!(n.type&3))return;let l=t.data,c=l[s+1],d=fL(c)?tE(l,n,e,r,Os(c),a):void 0;if(!ah(d)){ah(o)||mL(c)&&(o=tE(l,null,e,r,s,a));let m=e_(Gi(),e);GN(i,a,m,r,o)}}function tE(t,n,e,i,r,o){let a=n===null,s;for(;r>0;){let l=t[r],c=Array.isArray(l),d=c?l[1]:l,m=d===null,f=e[r+1];f===sn&&(f=m?Qt:void 0);let h=m?wm(f,i):d===i?f:void 0;if(c&&!ah(h)&&(h=wm(l,i)),ah(h)&&(s=h,a))return s;let b=t[r+1];r=a?Ca(b):Os(b)}if(n!==null){let l=o?n.residualClasses:n.residualStyles;l!=null&&(s=wm(l,i))}return s}function ah(t){return t!==void 0}function OL(t,n){return t==null||t===""||(typeof n=="string"?t=t+n:typeof t=="object"&&(t=pc(Pn(t)))),t}function _M(t,n){return(t.flags&(n?8:16))!==0}function M(t,n=""){let e=re(),i=at(),r=t+mt,o=i.firstCreatePass?Ps(i,r,1,n,null):i.data[r],a=RL(i,e,o,n);e[r]=a,xc()&&Qb(i,e,a,o),Sr(o,!1)}var RL=(t,n,e,i)=>(ws(!0),jE(n[qe],i));function AL(t,n,e,i=""){return wn(t,Ir(),e)?n+ho(e)+i:sn}function NL(t,n,e,i,r,o=""){let a=tx(),s=Xm(t,a,e,r);return Im(2),s?n+ho(e)+i+ho(r)+o:sn}function oe(t){return gn("",t),oe}function gn(t,n,e){let i=re(),r=AL(i,t,n,e);return r!==sn&&bM(i,Gi(),r),gn}function Mh(t,n,e,i,r){let o=re(),a=NL(o,t,n,e,i,r);return a!==sn&&bM(o,Gi(),a),Mh}function bM(t,n,e){let i=e_(n,t);mN(t[qe],i,e)}function Da(t,n,e){hv(n)&&(n=n());let i=re(),r=Ir();if(wn(i,r,n)){let o=at(),a=Cs();cD(a,i,t,n,i[qe],e)}return Da}function Vs(t,n){let e=hv(t);return e&&t.set(n),e}function Ma(t,n){let e=re(),i=at(),r=Vt();return dM(i,e,e[qe],r,t,n),Ma}function Sh(t){return wn(re(),Ir(),t)?ho(t):sn}function nE(t,n,e){let i=at();i.firstCreatePass&&vM(n,i.data,i.blueprint,bi(t),e)}function vM(t,n,e,i,r){if(t=Ft(t),Array.isArray(t))for(let o=0;o<t.length;o++)vM(t[o],n,e,i,r);else{let o=at(),a=re(),s=Vt(),l=la(t)?t:Ft(t.provide),c=Zg(t),d=s.providerIndexes&1048575,m=s.directiveStart,f=s.providerIndexes>>20;if(la(t)||!t.multi){let h=new va(c,r,T,null),b=A_(l,n,r?d:d+f,m);b===-1?(P_(Zm(s,a),o,l),R_(o,t,n.length),n.push(l),s.directiveStart++,s.directiveEnd++,r&&(s.providerIndexes+=1048576),e.push(h),a.push(h)):(e[b]=h,a[b]=h)}else{let h=A_(l,n,d+f,m),b=A_(l,n,d,d+f),D=h>=0&&e[h],S=b>=0&&e[b];if(r&&!S||!r&&!D){P_(Zm(s,a),o,l);let k=LL(r?FL:PL,e.length,r,i,c,t);!r&&S&&(e[b].providerFactory=k),R_(o,t,n.length,0),n.push(l),s.directiveStart++,s.directiveEnd++,r&&(s.providerIndexes+=1048576),e.push(k),a.push(k)}else{let k=yM(e[r?b:h],c,!r&&i);R_(o,t,h>-1?h:b,k)}!r&&i&&S&&e[b].componentProviders++}}}function R_(t,n,e,i){let r=la(n),o=Hw(n);if(r||o){let l=(o?Ft(n.useClass):n).prototype.ngOnDestroy;if(l){let c=t.destroyHooks||(t.destroyHooks=[]);if(!r&&n.multi){let d=c.indexOf(e);d===-1?c.push(e,[i,l]):c[d+1].push(i,l)}else c.push(e,l)}}}function yM(t,n,e){return e&&t.componentProviders++,t.multi.push(n)-1}function A_(t,n,e,i){for(let r=e;r<i;r++)if(n[r]===t)return r;return-1}function PL(t,n,e,i,r){return Db(this.multi,[])}function FL(t,n,e,i,r){let o=this.multi,a;if(this.providerFactory){let s=this.providerFactory.componentProviders,l=Tc(i,i[ae],this.providerFactory.index,r);a=l.slice(0,s),Db(o,a);for(let c=s;c<l.length;c++)a.push(l[c])}else a=[],Db(o,a);return a}function Db(t,n){for(let e=0;e<t.length;e++){let i=t[e];n.push(i())}return n}function LL(t,n,e,i,r,o){let a=new va(t,e,T,null);return a.multi=[],a.index=n,a.componentProviders=0,yM(a,r,i&&!e),a}function Me(t,n){return e=>{e.providersResolver=(i,r)=>nE(i,r?r(t):t,!1),n&&(e.viewProvidersResolver=(i,r)=>nE(i,r?r(n):n,!0))}}function Cv(t,n){let e=ys()+t,i=re();return i[e]===sn?$c(i,e,n()):ND(i,e)}function wv(t,n,e){return BL(re(),ys(),t,n,e)}function xv(t,n,e,i){return VL(re(),ys(),t,n,e,i)}function Ev(t,n,e,i,r,o,a){return jL(re(),ys(),t,n,e,i,r,o)}function Ih(t,n,e,i,r,o,a){let s=ys()+t,l=re(),c=PD(l,s,e,i,r,o);return wn(l,s+4,a)||c?$c(l,s+5,n(e,i,r,o,a)):ND(l,s+5)}function Dv(t,n){let e=t[n];return e===sn?void 0:e}function BL(t,n,e,i,r,o){let a=n+e;return wn(t,a,r)?$c(t,a+1,o?i.call(o,r):i(r)):Dv(t,a+1)}function VL(t,n,e,i,r,o,a){let s=n+e;return Xm(t,s,r,o)?$c(t,s+2,a?i.call(a,r,o):i(r,o)):Dv(t,s+2)}function jL(t,n,e,i,r,o,a,s,l){let c=n+e;return PD(t,c,r,o,a,s)?$c(t,c+4,l?i.call(l,r,o,a,s):i(r,o,a,s)):Dv(t,c+4)}function js(t,n){return vh(t,n)}var sh=class{ngModuleFactory;componentFactories;constructor(n,e){this.ngModuleFactory=n,this.componentFactories=e}},Mv=(()=>{class t{compileModuleSync(e){return new nh(e)}compileModuleAsync(e){return Promise.resolve(this.compileModuleSync(e))}compileModuleAndAllComponentsSync(e){let i=this.compileModuleSync(e),r=jg(e),o=GE(r.declarations).reduce((a,s)=>{let l=$i(s);return l&&a.push(new Co(l)),a},[]);return new sh(i,o)}compileModuleAndAllComponentsAsync(e){return Promise.resolve(this.compileModuleAndAllComponentsSync(e))}clearCache(){}clearCacheFor(e){}getModuleId(e){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var CM=(()=>{class t{applicationErrorHandler=u(Qn);appRef=u(Ut);taskService=u(Tr);ngZone=u(B);zonelessEnabled=u(Ec);tracing=u(Ei,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new Re;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(hc):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(u(w_,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let e=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(e);return}this.switchToMicrotaskScheduler(),this.taskService.remove(e)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let e=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(e)})})}notify(e){if(!this.zonelessEnabled&&e===5)return;switch(e){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let i=this.useMicrotaskScheduler?px:b_;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>i(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>i(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(hc+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let e=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){this.applicationErrorHandler(i)}finally{this.taskService.remove(e),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let e=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Sv(){return Di("NgZoneless"),On([...Iv(),[]])}function Iv(){return[{provide:zi,useExisting:CM},{provide:B,useClass:fc},{provide:Ec,useValue:!0}]}function UL(){return typeof $localize<"u"&&$localize.locale||Zc}var Th=new C("",{factory:()=>u(Th,{optional:!0,skipSelf:!0})||UL()});function kt(t){return ww(t)}function un(t,n){return Ql(t,n?.equal)}var SM=Symbol("InputSignalNode#UNSET"),a2=te(_({},Xl),{transformFn:void 0,applyValueToInputSignal(t,n){ns(t,n)}});function IM(t,n){let e=Object.create(a2);e.value=t,e.transformFn=n?.transform;function i(){if(Qo(e),e.value===SM){let r=null;throw new R(-950,r)}return e.value}return i[Rt]=e,i}var Xn=class{attributeName;constructor(n){this.attributeName=n}__NG_ELEMENT_ID__=()=>lh(this.attributeName);toString(){return`HostAttributeToken ${this.attributeName}`}};function wM(t,n){return IM(t,n)}function s2(t){return IM(SM,t)}var TM=(wM.required=s2,wM);function xM(t,n){return dv(n)}function l2(t,n){return uv(n)}var Qc=(xM.required=l2,xM);function EM(t,n){return dv(n)}function c2(t,n){return uv(n)}var kM=(EM.required=c2,EM);var kv=new C(""),d2=new C("");function Yc(t){return!t.moduleRef}function u2(t){let n=Yc(t)?t.r3Injector:t.moduleRef.injector,e=n.get(B);return e.run(()=>{Yc(t)?t.r3Injector.resolveInjectorInitializers():t.moduleRef.resolveInjectorInitializers();let i=n.get(Qn),r;if(e.runOutsideAngular(()=>{r=e.onError.subscribe({next:i})}),Yc(t)){let o=()=>n.destroy(),a=t.platformInjector.get(kv);a.add(o),n.onDestroy(()=>{r.unsubscribe(),a.delete(o)})}else{let o=()=>t.moduleRef.destroy(),a=t.platformInjector.get(kv);a.add(o),t.moduleRef.onDestroy(()=>{Sc(t.allPlatformModules,t.moduleRef),r.unsubscribe(),a.delete(o)})}return h2(i,e,()=>{let o=n.get(Tr),a=o.add(),s=n.get(_v);return s.runInitializers(),s.donePromise.then(()=>{let l=n.get(Th,Zc);if(nM(l||Zc),!n.get(d2,!0))return Yc(t)?n.get(Ut):(t.allPlatformModules.push(t.moduleRef),t.moduleRef);if(Yc(t)){let d=n.get(Ut);return t.rootComponent!==void 0&&d.bootstrap(t.rootComponent),d}else return m2?.(t.moduleRef,t.allPlatformModules),t.moduleRef}).finally(()=>{o.remove(a)})})})}var m2;function h2(t,n,e){try{let i=e();return xo(i)?i.catch(r=>{throw n.runOutsideAngular(()=>t(r)),r}):i}catch(i){throw n.runOutsideAngular(()=>t(i)),i}}var kh=null;function f2(t=[],n){return Y.create({name:n,providers:[{provide:bc,useValue:"platform"},{provide:kv,useValue:new Set([()=>kh=null])},...t]})}function p2(t=[]){if(kh)return kh;let n=f2(t);return kh=n,JD(),g2(n),n}function g2(t){let n=t.get(ch,null);Bt(t,()=>{n?.forEach(e=>e())})}var _2=1e4;var fee=_2-1e3;var ve=(()=>{class t{static __NG_ELEMENT_ID__=b2}return t})();function b2(t){return v2(Vt(),re(),(t&16)===16)}function v2(t,n,e){if(Mr(t)&&!e){let i=Yn(t.index,n);return new yo(i,i)}else if(t.type&175){let i=n[an];return new yo(i,n)}return null}var Ov=class{supports(n){return n instanceof Map||sv(n)}create(){return new Rv}},Rv=class{_records=new Map;_mapHead=null;_appendAfter=null;_previousMapHead=null;_changesHead=null;_changesTail=null;_additionsHead=null;_additionsTail=null;_removalsHead=null;get isDirty(){return this._additionsHead!==null||this._changesHead!==null||this._removalsHead!==null}forEachItem(n){let e;for(e=this._mapHead;e!==null;e=e._next)n(e)}forEachPreviousItem(n){let e;for(e=this._previousMapHead;e!==null;e=e._nextPrevious)n(e)}forEachChangedItem(n){let e;for(e=this._changesHead;e!==null;e=e._nextChanged)n(e)}forEachAddedItem(n){let e;for(e=this._additionsHead;e!==null;e=e._nextAdded)n(e)}forEachRemovedItem(n){let e;for(e=this._removalsHead;e!==null;e=e._nextRemoved)n(e)}diff(n){if(!n)n=new Map;else if(!(n instanceof Map||sv(n)))throw new R(900,!1);return this.check(n)?this:null}check(n){this._reset();let e=this._mapHead;if(this._appendAfter=null,this._forEach(n,(i,r)=>{if(e&&e.key===r)this._maybeAddToChanges(e,i),this._appendAfter=e,e=e._next;else{let o=this._getOrCreateRecordForKey(r,i);e=this._insertBeforeOrAppend(e,o)}}),e){e._prev&&(e._prev._next=null),this._removalsHead=e;for(let i=e;i!==null;i=i._nextRemoved)i===this._mapHead&&(this._mapHead=null),this._records.delete(i.key),i._nextRemoved=i._next,i.previousValue=i.currentValue,i.currentValue=null,i._prev=null,i._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(n,e){if(n){let i=n._prev;return e._next=n,e._prev=i,n._prev=e,i&&(i._next=e),n===this._mapHead&&(this._mapHead=e),this._appendAfter=n,n}return this._appendAfter?(this._appendAfter._next=e,e._prev=this._appendAfter):this._mapHead=e,this._appendAfter=e,null}_getOrCreateRecordForKey(n,e){if(this._records.has(n)){let r=this._records.get(n);this._maybeAddToChanges(r,e);let o=r._prev,a=r._next;return o&&(o._next=a),a&&(a._prev=o),r._next=null,r._prev=null,r}let i=new Av(n);return this._records.set(n,i),i.currentValue=e,this._addToAdditions(i),i}_reset(){if(this.isDirty){let n;for(this._previousMapHead=this._mapHead,n=this._previousMapHead;n!==null;n=n._next)n._nextPrevious=n._next;for(n=this._changesHead;n!==null;n=n._nextChanged)n.previousValue=n.currentValue;for(n=this._additionsHead;n!=null;n=n._nextAdded)n.previousValue=n.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(n,e){Object.is(e,n.currentValue)||(n.previousValue=n.currentValue,n.currentValue=e,this._addToChanges(n))}_addToAdditions(n){this._additionsHead===null?this._additionsHead=this._additionsTail=n:(this._additionsTail._nextAdded=n,this._additionsTail=n)}_addToChanges(n){this._changesHead===null?this._changesHead=this._changesTail=n:(this._changesTail._nextChanged=n,this._changesTail=n)}_forEach(n,e){n instanceof Map?n.forEach(e):Object.keys(n).forEach(i=>e(n[i],i))}},Av=class{key;previousValue=null;currentValue=null;_nextPrevious=null;_next=null;_prev=null;_nextAdded=null;_nextRemoved=null;_nextChanged=null;constructor(n){this.key=n}};function DM(){return new Fv([new Ov])}var Fv=(()=>{class t{static \u0275prov=w({token:t,providedIn:"root",factory:DM});factories;constructor(e){this.factories=e}static create(e,i){if(i){let r=i.factories.slice();e=e.concat(r)}return new t(e)}static extend(e){return{provide:t,useFactory:()=>{let i=u(t,{optional:!0,skipSelf:!0});return t.create(e,i||DM())}}}find(e){let i=this.factories.find(r=>r.supports(e));if(i)return i;throw new R(901,!1)}}return t})();function OM(t){let{rootComponent:n,appProviders:e,platformProviders:i,platformRef:r}=t;Ke(je.BootstrapApplicationStart);try{let o=r?.injector??p2(i),a=[Iv(),_x,...e||[]],s=new Ac({providers:a,parent:o,debugName:"",runEnvironmentInitializers:!1});return u2({r3Injector:s.injector,platformInjector:o,rootComponent:n})}catch(o){return Promise.reject(o)}finally{Ke(je.BootstrapApplicationEnd)}}function Z(t){return typeof t=="boolean"?t:t!=null&&t!=="false"}function dt(t,n=NaN){return!isNaN(parseFloat(t))&&!isNaN(Number(t))?Number(t):n}var Tv=Symbol("NOT_SET"),RM=new Set,y2=te(_({},Xl),{kind:"afterRenderEffectPhase",consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,value:Tv,cleanup:null,consumerMarkedDirty(){if(this.sequence.impl.executing){if(this.sequence.lastPhase===null||this.sequence.lastPhase<this.phase)return;this.sequence.erroredOrDestroyed=!0}this.sequence.scheduler.notify(7)},phaseFn(t){if(this.sequence.lastPhase=this.phase,!this.dirty)return this.signal;if(this.dirty=!1,this.value!==Tv&&!es(this))return this.signal;try{for(let r of this.cleanup??RM)r()}finally{this.cleanup?.clear()}let n=[];t!==void 0&&n.push(t),n.push(this.registerCleanupFn);let e=no(this),i;try{i=this.userFn.apply(null,n)}finally{Xo(this,e)}return(this.value===Tv||!this.equal(this.value,i))&&(this.value=i,this.version++),this.signal}}),Nv=class extends kc{scheduler;lastPhase=null;nodes=[void 0,void 0,void 0,void 0];onDestroyFns=null;constructor(n,e,i,r,o,a=null){super(n,[void 0,void 0,void 0,void 0],i,!1,o.get(pn),a),this.scheduler=r;for(let s of qb){let l=e[s];if(l===void 0)continue;let c=Object.create(y2);c.sequence=this,c.phase=s,c.userFn=l,c.dirty=!0,c.signal=()=>(Qo(c),c.value),c.signal[Rt]=c,c.registerCleanupFn=d=>(c.cleanup??=new Set).add(d),this.nodes[s]=c,this.hooks[s]=d=>c.phaseFn(d)}}afterRun(){super.afterRun(),this.lastPhase=null}destroy(){if(this.onDestroyFns!==null)for(let n of this.onDestroyFns)n();super.destroy();for(let n of this.nodes)if(n)try{for(let e of n.cleanup??RM)e()}finally{io(n)}}};function Oh(t,n){let e=n?.injector??u(Y),i=e.get(zi),r=e.get(ph),o=e.get(Ei,null,{optional:!0});r.impl??=e.get(Zb);let a=t;typeof a=="function"&&(a={mixedReadWrite:t});let s=e.get(xs,null,{optional:!0}),l=new Nv(r.impl,[a.earlyRead,a.write,a.mixedReadWrite,a.read],s?.view,i,e,o?.snapshot(null));return r.impl.register(l),l}function Rh(t,n){let e=$i(t),i=n.elementInjector||fs();return new Co(e).create(i,n.projectableNodes,n.hostElement,n.environmentInjector,n.directives,n.bindings)}function AM(t){let n=$i(t);if(!n)return null;let e=new Co(n);return{get selector(){return e.selector},get type(){return e.componentType},get inputs(){return e.inputs},get outputs(){return e.outputs},get ngContentSelectors(){return e.ngContentSelectors},get isStandalone(){return n.standalone},get isSignal(){return n.signals}}}var NM=null;function Kn(){return NM}function Lv(t){NM??=t}var Xc=class{},Ar=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:()=>u(PM),providedIn:"platform"})}return t})(),Bv=new C(""),PM=(()=>{class t extends Ar{_location;_history;_doc=u(J);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Kn().getBaseHref(this._doc)}onPopState(e){let i=Kn().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",e,!1),()=>i.removeEventListener("popstate",e)}onHashChange(e){let i=Kn().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",e,!1),()=>i.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,i,r){this._history.pushState(e,i,r)}replaceState(e,i,r){this._history.replaceState(e,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function Ah(t,n){return t?n?t.endsWith("/")?n.startsWith("/")?t+n.slice(1):t+n:n.startsWith("/")?t+n:`${t}/${n}`:t:n}function FM(t){let n=t.search(/#|\?|$/);return t[n-1]==="/"?t.slice(0,n-1)+t.slice(n):t}function Mi(t){return t&&t[0]!=="?"?`?${t}`:t}var Nr=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:()=>u(Ph),providedIn:"root"})}return t})(),Nh=new C(""),Ph=(()=>{class t extends Nr{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,i){super(),this._platformLocation=e,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??u(J).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return Ah(this._baseHref,e)}path(e=!1){let i=this._platformLocation.pathname+Mi(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${i}${r}`:i}pushState(e,i,r,o){let a=this.prepareExternalUrl(r+Mi(o));this._platformLocation.pushState(e,i,a)}replaceState(e,i,r,o){let a=this.prepareExternalUrl(r+Mi(o));this._platformLocation.replaceState(e,i,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(i){return new(i||t)(A(Ar),A(Nh,8))};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Jn=(()=>{class t{_subject=new I;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let i=this._locationStrategy.getBaseHref();this._basePath=x2(FM(LM(i))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,i=""){return this.path()==this.normalize(e+Mi(i))}normalize(e){return t.stripTrailingSlash(w2(this._basePath,LM(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,i="",r=null){this._locationStrategy.pushState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Mi(i)),r)}replaceState(e,i="",r=null){this._locationStrategy.replaceState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Mi(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",i){this._urlChangeListeners.forEach(r=>r(e,i))}subscribe(e,i,r){return this._subject.subscribe({next:e,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=Mi;static joinWithSlash=Ah;static stripTrailingSlash=FM;static \u0275fac=function(i){return new(i||t)(A(Nr))};static \u0275prov=w({token:t,factory:()=>C2(),providedIn:"root"})}return t})();function C2(){return new Jn(A(Nr))}function w2(t,n){if(!t||!n.startsWith(t))return n;let e=n.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:n}function LM(t){return t.replace(/\/index.html$/,"")}function x2(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var jv=(()=>{class t extends Nr{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(e,i){super(),this._platformLocation=e,i!=null&&(this._baseHref=i)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let i=this._platformLocation.hash??"#";return i.length>0?i.substring(1):i}prepareExternalUrl(e){let i=Ah(this._baseHref,e);return i.length>0?"#"+i:i}pushState(e,i,r,o){let a=this.prepareExternalUrl(r+Mi(o))||this._platformLocation.pathname;this._platformLocation.pushState(e,i,a)}replaceState(e,i,r,o){let a=this.prepareExternalUrl(r+Mi(o))||this._platformLocation.pathname;this._platformLocation.replaceState(e,i,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(i){return new(i||t)(A(Ar),A(Nh,8))};static \u0275prov=w({token:t,factory:t.\u0275fac})}return t})();var Vv=/\s+/,BM=[],Pr=(()=>{class t{_ngEl;_renderer;initialClasses=BM;rawClass;stateMap=new Map;constructor(e,i){this._ngEl=e,this._renderer=i}set klass(e){this.initialClasses=e!=null?e.trim().split(Vv):BM}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(Vv):e}ngDoCheck(){for(let i of this.initialClasses)this._updateState(i,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let i of e)this._updateState(i,!0);else if(e!=null)for(let i of Object.keys(e))this._updateState(i,!!e[i]);this._applyStateDiff()}_updateState(e,i){let r=this.stateMap.get(e);r!==void 0?(r.enabled!==i&&(r.changed=!0,r.enabled=i),r.touched=!0):this.stateMap.set(e,{enabled:i,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let i=e[0],r=e[1];r.changed?(this._toggleClass(i,r.enabled),r.changed=!1):r.touched||(r.enabled&&this._toggleClass(i,!1),this.stateMap.delete(i)),r.touched=!1}}_toggleClass(e,i){e=e.trim(),e.length>0&&e.split(Vv).forEach(r=>{i?this._renderer.addClass(this._ngEl.nativeElement,r):this._renderer.removeClass(this._ngEl.nativeElement,r)})}static \u0275fac=function(i){return new(i||t)(T(U),T(xe))};static \u0275dir=W({type:t,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return t})();var Uv=(()=>{class t{_ngEl;_differs;_renderer;_ngStyle=null;_differ=null;constructor(e,i,r){this._ngEl=e,this._differs=i,this._renderer=r}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){let e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,i){let[r,o]=e.split("."),a=r.indexOf("-")===-1?void 0:xi.DashCase;i!=null?this._renderer.setStyle(this._ngEl.nativeElement,r,o?`${i}${o}`:i,a):this._renderer.removeStyle(this._ngEl.nativeElement,r,a)}_applyChanges(e){e.forEachRemovedItem(i=>this._setStyle(i.key,null)),e.forEachAddedItem(i=>this._setStyle(i.key,i.currentValue)),e.forEachChangedItem(i=>this._setStyle(i.key,i.currentValue))}static \u0275fac=function(i){return new(i||t)(T(U),T(Fv),T(xe))};static \u0275dir=W({type:t,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}})}return t})(),Kc=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=u(Y);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let i=this._viewContainerRef;if(this._viewRef&&i.remove(i.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=i.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,i,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,i,r):!1,get:(e,i,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,i,r)}})}static \u0275fac=function(i){return new(i||t)(T(jt))};static \u0275dir=W({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[it]})}return t})();var _n=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=P({})}return t})();function Jc(t,n){n=encodeURIComponent(n);for(let e of t.split(";")){let i=e.indexOf("="),[r,o]=i==-1?[e,""]:[e.slice(0,i),e.slice(i+1)];if(r.trim()===n)return decodeURIComponent(o)}return null}var Ia=class{};var zv="browser";function VM(t){return t===zv}var $v=(()=>{class t{static \u0275prov=w({token:t,providedIn:"root",factory:()=>new Hv(u(J),window)})}return t})(),Hv=class{document;window;offset=()=>[0,0];constructor(n,e){this.document=n,this.window=e}setOffset(n){Array.isArray(n)?this.offset=()=>n:this.offset=n}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(n,e){this.window.scrollTo(te(_({},e),{left:n[0],top:n[1]}))}scrollToAnchor(n,e){let i=M2(this.document,n);i&&(this.scrollToElement(i,e),i.focus({preventScroll:!0}))}setHistoryScrollRestoration(n){try{this.window.history.scrollRestoration=n}catch{console.warn(qn(2400,!1))}}scrollToElement(n,e){let i=n.getBoundingClientRect(),r=i.left+this.window.pageXOffset,o=i.top+this.window.pageYOffset,a=this.offset();this.window.scrollTo(te(_({},e),{left:r-a[0],top:o-a[1]}))}};function M2(t,n){let e=t.getElementById(n)||t.getElementsByName(n)[0];if(e)return e;if(typeof t.createTreeWalker=="function"&&t.body&&typeof t.body.attachShadow=="function"){let i=t.createTreeWalker(t.body,NodeFilter.SHOW_ELEMENT),r=i.currentNode;for(;r;){let o=r.shadowRoot;if(o){let a=o.getElementById(n)||o.querySelector(`[name="${n}"]`);if(a)return a}r=i.nextNode()}}return null}var ed=class{_doc;constructor(n){this._doc=n}manager},Lh=(()=>{class t extends ed{constructor(e){super(e)}supports(e){return!0}addEventListener(e,i,r,o){return e.addEventListener(i,r,o),()=>this.removeEventListener(e,i,r,o)}removeEventListener(e,i,r,o){return e.removeEventListener(i,r,o)}static \u0275fac=function(i){return new(i||t)(A(J))};static \u0275prov=w({token:t,factory:t.\u0275fac})}return t})(),jh=new C(""),Zv=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,i){this._zone=i,e.forEach(a=>{a.manager=this});let r=e.filter(a=>!(a instanceof Lh));this._plugins=r.slice().reverse();let o=e.find(a=>a instanceof Lh);o&&this._plugins.push(o)}addEventListener(e,i,r,o){return this._findPluginFor(i).addEventListener(e,i,r,o)}getZone(){return this._zone}_findPluginFor(e){let i=this._eventNameToPlugin.get(e);if(i)return i;if(i=this._plugins.find(o=>o.supports(e)),!i)throw new R(5101,!1);return this._eventNameToPlugin.set(e,i),i}static \u0275fac=function(i){return new(i||t)(A(jh),A(B))};static \u0275prov=w({token:t,factory:t.\u0275fac})}return t})(),Wv="ng-app-id";function jM(t){for(let n of t)n.remove()}function UM(t,n){let e=n.createElement("style");return e.textContent=t,e}function S2(t,n,e,i){let r=t.head?.querySelectorAll(`style[${Wv}="${n}"],link[${Wv}="${n}"]`);if(r)for(let o of r)o.removeAttribute(Wv),o instanceof HTMLLinkElement?i.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function qv(t,n){let e=n.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var Yv=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,i,r,o={}){this.doc=e,this.appId=i,this.nonce=r,S2(e,i,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,i){for(let r of e)this.addUsage(r,this.inline,UM);i?.forEach(r=>this.addUsage(r,this.external,qv))}removeStyles(e,i){for(let r of e)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,i,r){let o=i.get(e);o?o.usage++:i.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,r(e,this.doc)))})}removeUsage(e,i){let r=i.get(e);r&&(r.usage--,r.usage<=0&&(jM(r.elements),i.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])jM(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(e,UM(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(e,qv(i,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,i){return this.nonce&&i.setAttribute("nonce",this.nonce),e.appendChild(i)}static \u0275fac=function(i){return new(i||t)(A(J),A(wo),A(xa,8),A(wa))};static \u0275prov=w({token:t,factory:t.\u0275fac})}return t})(),Gv={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Qv=/%COMP%/g;var zM="%COMP%",I2=`_nghost-${zM}`,T2=`_ngcontent-${zM}`,k2=!0,O2=new C("",{factory:()=>k2});function R2(t){return T2.replace(Qv,t)}function A2(t){return I2.replace(Qv,t)}function $M(t,n){return n.map(e=>e.replace(Qv,t))}var Xv=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,i,r,o,a,s,l=null,c=null){this.eventManager=e,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=s,this.nonce=l,this.tracingService=c,this.defaultRenderer=new td(e,a,s,this.tracingService)}createRenderer(e,i){if(!e||!i)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,i);return r instanceof Vh?r.applyToHost(e):r instanceof nd&&r.applyStyles(),r}getOrCreateRenderer(e,i){let r=this.rendererByCompId,o=r.get(i.id);if(!o){let a=this.doc,s=this.ngZone,l=this.eventManager,c=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,m=this.tracingService;switch(i.encapsulation){case wi.Emulated:o=new Vh(l,c,i,this.appId,d,a,s,m);break;case wi.ShadowDom:return new Bh(l,e,i,a,s,this.nonce,m,c);case wi.ExperimentalIsolatedShadowDom:return new Bh(l,e,i,a,s,this.nonce,m);default:o=new nd(l,c,i,d,a,s,m);break}r.set(i.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(i){return new(i||t)(A(Zv),A(Yv),A(wo),A(O2),A(J),A(B),A(xa),A(Ei,8))};static \u0275prov=w({token:t,factory:t.\u0275fac})}return t})(),td=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,e,i,r){this.eventManager=n,this.doc=e,this.ngZone=i,this.tracingService=r}destroy(){}destroyNode=null;createElement(n,e){return e?this.doc.createElementNS(Gv[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){(HM(n)?n.content:n).appendChild(e)}insertBefore(n,e,i){n&&(HM(n)?n.content:n).insertBefore(e,i)}removeChild(n,e){e.remove()}selectRootElement(n,e){let i=typeof n=="string"?this.doc.querySelector(n):n;if(!i)throw new R(-5104,!1);return e||(i.textContent=""),i}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,i,r){if(r){e=r+":"+e;let o=Gv[r];o?n.setAttributeNS(o,e,i):n.setAttribute(e,i)}else n.setAttribute(e,i)}removeAttribute(n,e,i){if(i){let r=Gv[i];r?n.removeAttributeNS(r,e):n.removeAttribute(`${i}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,i,r){r&(xi.DashCase|xi.Important)?n.style.setProperty(e,i,r&xi.Important?"important":""):n.style[e]=i}removeStyle(n,e,i){i&xi.DashCase?n.style.removeProperty(e):n.style[e]=""}setProperty(n,e,i){n!=null&&(n[e]=i)}setValue(n,e){n.nodeValue=e}listen(n,e,i,r){if(typeof n=="string"&&(n=Kn().getGlobalEventTarget(this.doc,n),!n))throw new R(5102,!1);let o=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(n,e,o)),this.eventManager.addEventListener(n,e,o,r)}decoratePreventDefault(n){return e=>{if(e==="__ngUnwrap__")return n;n(e)===!1&&e.preventDefault()}}};function HM(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var Bh=class extends td{hostEl;sharedStylesHost;shadowRoot;constructor(n,e,i,r,o,a,s,l){super(n,r,o,s),this.hostEl=e,this.sharedStylesHost=l,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let c=i.styles;c=$M(i.id,c);for(let m of c){let f=document.createElement("style");a&&f.setAttribute("nonce",a),f.textContent=m,this.shadowRoot.appendChild(f)}let d=i.getExternalStyles?.();if(d)for(let m of d){let f=qv(m,r);a&&f.setAttribute("nonce",a),this.shadowRoot.appendChild(f)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,i){return super.insertBefore(this.nodeOrShadowRoot(n),e,i)}removeChild(n,e){return super.removeChild(null,e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},nd=class extends td{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,e,i,r,o,a,s,l){super(n,o,a,s),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let c=i.styles;this.styles=l?$M(l,c):c,this.styleUrls=i.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&ya.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Vh=class extends nd{contentAttr;hostAttr;constructor(n,e,i,r,o,a,s,l){let c=r+"-"+i.id;super(n,e,i,o,a,s,l,c),this.contentAttr=R2(c),this.hostAttr=A2(c)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,e){let i=super.createElement(n,e);return super.setAttribute(i,this.contentAttr,""),i}};var Uh=class t extends Xc{supportsDOMEvents=!0;static makeCurrent(){Lv(new t)}onAndCancel(n,e,i,r){return n.addEventListener(e,i,r),()=>{n.removeEventListener(e,i,r)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.remove()}createElement(n,e){return e=e||this.getDefaultDocument(),e.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return e==="window"?window:e==="document"?n:e==="body"?n.body:null}getBaseHref(n){let e=N2();return e==null?null:P2(e)}resetBaseElement(){id=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return Jc(document.cookie,n)}},id=null;function N2(){return id=id||document.head.querySelector("base"),id?id.getAttribute("href"):null}function P2(t){return new URL(t,document.baseURI).pathname}var F2=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac})}return t})(),WM=["alt","control","meta","shift"],L2={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},B2={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},GM=(()=>{class t extends ed{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,i,r,o){let a=t.parseEventName(i),s=t.eventCallback(a.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Kn().onAndCancel(e,a.domEventName,s,o))}static parseEventName(e){let i=e.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let o=t._normalizeKey(i.pop()),a="",s=i.indexOf("code");if(s>-1&&(i.splice(s,1),a="code."),WM.forEach(c=>{let d=i.indexOf(c);d>-1&&(i.splice(d,1),a+=c+".")}),a+=o,i.length!=0||o.length===0)return null;let l={};return l.domEventName=r,l.fullKey=a,l}static matchEventFullKeyCode(e,i){let r=L2[e.key]||e.key,o="";return i.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),WM.forEach(a=>{if(a!==r){let s=B2[a];s(e)&&(o+=a+".")}}),o+=r,o===i)}static eventCallback(e,i,r){return o=>{t.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>i(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(i){return new(i||t)(A(J))};static \u0275prov=w({token:t,factory:t.\u0275fac})}return t})();async function Kv(t,n,e){let i=_({rootComponent:t},V2(n,e));return OM(i)}function V2(t,n){return{platformRef:n?.platformRef,appProviders:[...$2,...t?.providers??[]],platformProviders:z2}}function j2(){Uh.makeCurrent()}function U2(){return new yn}function H2(){return Ib(document),document}var z2=[{provide:wa,useValue:zv},{provide:ch,useValue:j2,multi:!0},{provide:J,useFactory:H2}];var $2=[{provide:bc,useValue:"root"},{provide:yn,useFactory:U2},{provide:jh,useClass:Lh,multi:!0},{provide:jh,useClass:GM,multi:!0},Xv,Yv,Zv,{provide:It,useExisting:Xv},{provide:Ia,useClass:F2},[]];var Eo=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(e=>{let i=e.indexOf(":");if(i>0){let r=e.slice(0,i),o=e.slice(i+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((e,i)=>{this.addHeaderEntry(i,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([e,i])=>{this.setHeaderEntries(e,i)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let e=this.headers.get(n.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,e){return this.clone({name:n,value:e,op:"a"})}set(n,e){return this.clone({name:n,value:e,op:"s"})}delete(n,e){return this.clone({name:n,value:e,op:"d"})}maybeSetNormalizedName(n,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,n)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(e=>{this.headers.set(e,n.headers.get(e)),this.normalizedNames.set(e,n.normalizedNames.get(e))})}clone(n){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([n]),e}applyUpdate(n){let e=n.name.toLowerCase();switch(n.op){case"a":case"s":let i=n.value;if(typeof i=="string"&&(i=[i]),i.length===0)return;this.maybeSetNormalizedName(n.name,e);let r=(n.op==="a"?this.headers.get(e):void 0)||[];r.push(...i),this.headers.set(e,r);break;case"d":let o=n.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=this.headers.get(e);if(!a)return;a=a.filter(s=>o.indexOf(s)===-1),a.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,a)}break}}addHeaderEntry(n,e){let i=n.toLowerCase();this.maybeSetNormalizedName(n,i),this.headers.has(i)?this.headers.get(i).push(e):this.headers.set(i,[e])}setHeaderEntries(n,e){let i=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=n.toLowerCase();this.headers.set(r,i),this.maybeSetNormalizedName(n,r)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>n(this.normalizedNames.get(e),this.headers.get(e)))}};var zh=class{map=new Map;set(n,e){return this.map.set(n,e),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}},$h=class{encodeKey(n){return qM(n)}encodeValue(n){return qM(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function W2(t,n){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[a,s]=o==-1?[n.decodeKey(r),""]:[n.decodeKey(r.slice(0,o)),n.decodeValue(r.slice(o+1))],l=e.get(a)||[];l.push(s),e.set(a,l)}),e}var G2=/%(\d[a-f0-9])/gi,q2={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function qM(t){return encodeURIComponent(t).replace(G2,(n,e)=>q2[e]??n)}function Hh(t){return`${t}`}var Fr=class t{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new $h,n.fromString){if(n.fromObject)throw new R(2805,!1);this.map=W2(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(e=>{let i=n.fromObject[e],r=Array.isArray(i)?i.map(Hh):[Hh(i)];this.map.set(e,r)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let e=this.map.get(n);return e?e[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,e){return this.clone({param:n,value:e,op:"a"})}appendAll(n){let e=[];return Object.keys(n).forEach(i=>{let r=n[i];Array.isArray(r)?r.forEach(o=>{e.push({param:i,value:o,op:"a"})}):e.push({param:i,value:r,op:"a"})}),this.clone(e)}set(n,e){return this.clone({param:n,value:e,op:"s"})}delete(n,e){return this.clone({param:n,value:e,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let e=this.encoder.encodeKey(n);return this.map.get(n).map(i=>e+"="+this.encoder.encodeValue(i)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(n),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":let e=(n.op==="a"?this.map.get(n.param):void 0)||[];e.push(Hh(n.value)),this.map.set(n.param,e);break;case"d":if(n.value!==void 0){let i=this.map.get(n.param)||[],r=i.indexOf(Hh(n.value));r!==-1&&i.splice(r,1),i.length>0?this.map.set(n.param,i):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null)}};function Z2(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function ZM(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function YM(t){return typeof Blob<"u"&&t instanceof Blob}function QM(t){return typeof FormData<"u"&&t instanceof FormData}function Y2(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var XM="Content-Type",KM="Accept",JM="text/plain",eS="application/json",Q2=`${eS}, ${JM}, */*`,Us=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(n,e,i,r){this.url=e,this.method=n.toUpperCase();let o;if(Z2(this.method)||r?(this.body=i!==void 0?i:null,o=r):o=i,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new R(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new Eo,this.context??=new zh,!this.params)this.params=new Fr,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let s=e.indexOf("?"),l=s===-1?"?":s<e.length-1?"&":"";this.urlWithParams=e+l+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||ZM(this.body)||YM(this.body)||QM(this.body)||Y2(this.body)?this.body:this.body instanceof Fr?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||QM(this.body)?null:YM(this.body)?this.body.type||null:ZM(this.body)?null:typeof this.body=="string"?JM:this.body instanceof Fr?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?eS:null}clone(n={}){let e=n.method||this.method,i=n.url||this.url,r=n.responseType||this.responseType,o=n.keepalive??this.keepalive,a=n.priority||this.priority,s=n.cache||this.cache,l=n.mode||this.mode,c=n.redirect||this.redirect,d=n.credentials||this.credentials,m=n.referrer||this.referrer,f=n.integrity||this.integrity,h=n.referrerPolicy||this.referrerPolicy,b=n.transferCache??this.transferCache,D=n.timeout??this.timeout,S=n.body!==void 0?n.body:this.body,k=n.withCredentials??this.withCredentials,_e=n.reportProgress??this.reportProgress,Pe=n.headers||this.headers,Ue=n.params||this.params,Yt=n.context??this.context;return n.setHeaders!==void 0&&(Pe=Object.keys(n.setHeaders).reduce((tn,gt)=>tn.set(gt,n.setHeaders[gt]),Pe)),n.setParams&&(Ue=Object.keys(n.setParams).reduce((tn,gt)=>tn.set(gt,n.setParams[gt]),Ue)),new t(e,i,S,{params:Ue,headers:Pe,context:Yt,reportProgress:_e,responseType:r,withCredentials:k,transferCache:b,keepalive:o,cache:s,priority:a,timeout:D,mode:l,redirect:c,credentials:d,referrer:m,integrity:f,referrerPolicy:h})}},Ta=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(Ta||{}),Hs=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(n,e=200,i="OK"){this.headers=n.headers||new Eo,this.status=n.status!==void 0?n.status:e,this.statusText=n.statusText||i,this.url=n.url||null,this.redirected=n.redirected,this.responseType=n.responseType,this.ok=this.status>=200&&this.status<300}},Wh=class t extends Hs{constructor(n={}){super(n)}type=Ta.ResponseHeader;clone(n={}){return new t({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},rd=class t extends Hs{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=Ta.Response;clone(n={}){return new t({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0,redirected:n.redirected??this.redirected,responseType:n.responseType??this.responseType})}},tr=class extends Hs{name="HttpErrorResponse";message;error;ok=!1;constructor(n){super(n,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},X2=200,K2=204;var J2=new C("");var eB=/^\)\]\}',?\n/;var ey=(()=>{class t{xhrFactory;tracingService=u(Ei,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new R(-2800,!1);let i=this.xhrFactory;return ne(null).pipe(ot(()=>new de(o=>{let a=i.build();if(a.open(e.method,e.urlWithParams),e.withCredentials&&(a.withCredentials=!0),e.headers.forEach((S,k)=>a.setRequestHeader(S,k.join(","))),e.headers.has(KM)||a.setRequestHeader(KM,Q2),!e.headers.has(XM)){let S=e.detectContentTypeHeader();S!==null&&a.setRequestHeader(XM,S)}if(e.timeout&&(a.timeout=e.timeout),e.responseType){let S=e.responseType.toLowerCase();a.responseType=S!=="json"?S:"text"}let s=e.serializeBody(),l=null,c=()=>{if(l!==null)return l;let S=a.statusText||"OK",k=new Eo(a.getAllResponseHeaders()),_e=a.responseURL||e.url;return l=new Wh({headers:k,status:a.status,statusText:S,url:_e}),l},d=this.maybePropagateTrace(()=>{let{headers:S,status:k,statusText:_e,url:Pe}=c(),Ue=null;k!==K2&&(Ue=typeof a.response>"u"?a.responseText:a.response),k===0&&(k=Ue?X2:0);let Yt=k>=200&&k<300;if(e.responseType==="json"&&typeof Ue=="string"){let tn=Ue;Ue=Ue.replace(eB,"");try{Ue=Ue!==""?JSON.parse(Ue):null}catch(gt){Ue=tn,Yt&&(Yt=!1,Ue={error:gt,text:Ue})}}Yt?(o.next(new rd({body:Ue,headers:S,status:k,statusText:_e,url:Pe||void 0})),o.complete()):o.error(new tr({error:Ue,headers:S,status:k,statusText:_e,url:Pe||void 0}))}),m=this.maybePropagateTrace(S=>{let{url:k}=c(),_e=new tr({error:S,status:a.status||0,statusText:a.statusText||"Unknown Error",url:k||void 0});o.error(_e)}),f=m;e.timeout&&(f=this.maybePropagateTrace(S=>{let{url:k}=c(),_e=new tr({error:new DOMException("Request timed out","TimeoutError"),status:a.status||0,statusText:a.statusText||"Request timeout",url:k||void 0});o.error(_e)}));let h=!1,b=this.maybePropagateTrace(S=>{h||(o.next(c()),h=!0);let k={type:Ta.DownloadProgress,loaded:S.loaded};S.lengthComputable&&(k.total=S.total),e.responseType==="text"&&a.responseText&&(k.partialText=a.responseText),o.next(k)}),D=this.maybePropagateTrace(S=>{let k={type:Ta.UploadProgress,loaded:S.loaded};S.lengthComputable&&(k.total=S.total),o.next(k)});return a.addEventListener("load",d),a.addEventListener("error",m),a.addEventListener("timeout",f),a.addEventListener("abort",m),e.reportProgress&&(a.addEventListener("progress",b),s!==null&&a.upload&&a.upload.addEventListener("progress",D)),a.send(s),o.next({type:Ta.Sent}),()=>{a.removeEventListener("error",m),a.removeEventListener("abort",m),a.removeEventListener("load",d),a.removeEventListener("timeout",f),e.reportProgress&&(a.removeEventListener("progress",b),s!==null&&a.upload&&a.upload.removeEventListener("progress",D)),a.readyState!==a.DONE&&a.abort()}})))}static \u0275fac=function(i){return new(i||t)(A(Ia))};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function tB(t,n){return n(t)}function nB(t,n,e){return(i,r)=>Bt(e,()=>n(i,o=>t(o,r)))}var tS=new C("",{factory:()=>[]}),nS=new C(""),iS=new C("",{factory:()=>!0});var ty=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=A(ey),r},providedIn:"root"})}return t})();var Gh=(()=>{class t{backend;injector;chain=null;pendingTasks=u(Am);contributeToStability=u(iS);constructor(e,i){this.backend=e,this.injector=i}handle(e){if(this.chain===null){let i=Array.from(new Set([...this.injector.get(tS),...this.injector.get(nS,[])]));this.chain=i.reduceRight((r,o)=>nB(r,o,this.injector),tB)}if(this.contributeToStability){let i=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe(ra(i))}else return this.chain(e,i=>this.backend.handle(i))}static \u0275fac=function(i){return new(i||t)(A(ty),A(Xe))};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ny=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=A(Gh),r},providedIn:"root"})}return t})();function Jv(t,n){return{body:n,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,credentials:t.credentials,transferCache:t.transferCache,timeout:t.timeout,keepalive:t.keepalive,priority:t.priority,cache:t.cache,mode:t.mode,redirect:t.redirect,integrity:t.integrity,referrer:t.referrer,referrerPolicy:t.referrerPolicy}}var nr=(()=>{class t{handler;constructor(e){this.handler=e}request(e,i,r={}){let o;if(e instanceof Us)o=e;else{let l;r.headers instanceof Eo?l=r.headers:l=new Eo(r.headers);let c;r.params&&(r.params instanceof Fr?c=r.params:c=new Fr({fromObject:r.params})),o=new Us(e,i,r.body!==void 0?r.body:null,{headers:l,context:r.context,params:c,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let a=ne(o).pipe(lo(l=>this.handler.handle(l)));if(e instanceof Us||r.observe==="events")return a;let s=a.pipe(Ce(l=>l instanceof rd));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return s.pipe(le(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new R(2806,!1);return l.body}));case"blob":return s.pipe(le(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new R(2807,!1);return l.body}));case"text":return s.pipe(le(l=>{if(l.body!==null&&typeof l.body!="string")throw new R(2808,!1);return l.body}));default:return s.pipe(le(l=>l.body))}case"response":return s;default:throw new R(2809,!1)}}delete(e,i={}){return this.request("DELETE",e,i)}get(e,i={}){return this.request("GET",e,i)}head(e,i={}){return this.request("HEAD",e,i)}jsonp(e,i){return this.request("JSONP",e,{params:new Fr().append(i,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,i={}){return this.request("OPTIONS",e,i)}patch(e,i,r={}){return this.request("PATCH",e,Jv(r,i))}post(e,i,r={}){return this.request("POST",e,Jv(r,i))}put(e,i,r={}){return this.request("PUT",e,Jv(r,i))}static \u0275fac=function(i){return new(i||t)(A(ny))};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var iB=new C("",{factory:()=>!0}),rB="XSRF-TOKEN",oB=new C("",{factory:()=>rB}),aB="X-XSRF-TOKEN",sB=new C("",{factory:()=>aB}),lB=(()=>{class t{cookieName=u(oB);doc=u(J);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Jc(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),rS=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=A(lB),r},providedIn:"root"})}return t})();function cB(t,n){if(!u(iB)||t.method==="GET"||t.method==="HEAD")return n(t);try{let r=u(Ar).href,{origin:o}=new URL(r),{origin:a}=new URL(t.url,o);if(o!==a)return n(t)}catch{return n(t)}let e=u(rS).getToken(),i=u(sB);return e!=null&&!t.headers.has(i)&&(t=t.clone({headers:t.headers.set(i,e)})),n(t)}function iy(...t){let n=[nr,Gh,{provide:ny,useExisting:Gh},{provide:ty,useFactory:()=>u(J2,{optional:!0})??u(ey)},{provide:tS,useValue:cB,multi:!0}];for(let e of t)n.push(...e.\u0275providers);return On(n)}var oS=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(i){return new(i||t)(A(J))};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Si=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=A(dB),r},providedIn:"root"})}return t})(),dB=(()=>{class t extends Si{_doc;constructor(e){super(),this._doc=e}sanitize(e,i){if(i==null)return null;switch(e){case bt.NONE:return i;case bt.HTML:return Qi(i,"HTML")?Pn(i):mh(this._doc,String(i)).toString();case bt.STYLE:return Qi(i,"Style")?Pn(i):i;case bt.SCRIPT:if(Qi(i,"Script"))return Pn(i);throw new R(5200,!1);case bt.URL:return Qi(i,"URL")?Pn(i):As(String(i));case bt.RESOURCE_URL:if(Qi(i,"ResourceURL"))return Pn(i);throw new R(5201,!1);default:throw new R(5202,!1)}}bypassSecurityTrustHtml(e){return Ob(e)}bypassSecurityTrustStyle(e){return Rb(e)}bypassSecurityTrustScript(e){return Ab(e)}bypassSecurityTrustUrl(e){return Nb(e)}bypassSecurityTrustResourceUrl(e){return Pb(e)}static \u0275fac=function(i){return new(i||t)(A(J))};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ye="primary",_d=Symbol("RouteTitle"),ly=class{params;constructor(n){this.params=n||{}}has(n){return Object.prototype.hasOwnProperty.call(this.params,n)}get(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e[0]:e}return null}getAll(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function Oa(t){return new ly(t)}function ry(t,n,e){for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function hS(t,n,e){let i=e.path.split("/"),r=i.indexOf("**");if(r===-1){if(i.length>t.length||e.pathMatch==="full"&&(n.hasChildren()||i.length<t.length))return null;let l={},c=t.slice(0,i.length);return ry(i,c,l)?{consumed:c,posParams:l}:null}if(r!==i.lastIndexOf("**"))return null;let o=i.slice(0,r),a=i.slice(r+1);if(o.length+a.length>t.length||e.pathMatch==="full"&&n.hasChildren()&&e.path!=="**")return null;let s={};return!ry(o,t.slice(0,o.length),s)||!ry(a,t.slice(t.length-a.length),s)?null:{consumed:t,posParams:s}}function Jh(t){return new Promise((n,e)=>{t.pipe(Cr()).subscribe({next:i=>n(i),error:i=>e(i)})})}function uB(t,n){if(t.length!==n.length)return!1;for(let e=0;e<t.length;++e)if(!ir(t[e],n[e]))return!1;return!0}function ir(t,n){let e=t?cy(t):void 0,i=n?cy(n):void 0;if(!e||!i||e.length!=i.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!fS(t[r],n[r]))return!1;return!0}function cy(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function fS(t,n){if(Array.isArray(t)&&Array.isArray(n)){if(t.length!==n.length)return!1;let e=[...t].sort(),i=[...n].sort();return e.every((r,o)=>i[o]===r)}else return t===n}function mB(t){return t.length>0?t[t.length-1]:null}function Aa(t){return nc(t)?t:xo(t)?nt(Promise.resolve(t)):ne(t)}function pS(t){return nc(t)?Jh(t):Promise.resolve(t)}var hB={exact:bS,subset:vS},gS={exact:fB,subset:pB,ignored:()=>!0},_S={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},dy={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function aS(t,n,e){return hB[e.paths](t.root,n.root,e.matrixParams)&&gS[e.queryParams](t.queryParams,n.queryParams)&&!(e.fragment==="exact"&&t.fragment!==n.fragment)}function fB(t,n){return ir(t,n)}function bS(t,n,e){if(!ka(t.segments,n.segments)||!Qh(t.segments,n.segments,e)||t.numberOfChildren!==n.numberOfChildren)return!1;for(let i in n.children)if(!t.children[i]||!bS(t.children[i],n.children[i],e))return!1;return!0}function pB(t,n){return Object.keys(n).length<=Object.keys(t).length&&Object.keys(n).every(e=>fS(t[e],n[e]))}function vS(t,n,e){return yS(t,n,n.segments,e)}function yS(t,n,e,i){if(t.segments.length>e.length){let r=t.segments.slice(0,e.length);return!(!ka(r,e)||n.hasChildren()||!Qh(r,e,i))}else if(t.segments.length===e.length){if(!ka(t.segments,e)||!Qh(t.segments,e,i))return!1;for(let r in n.children)if(!t.children[r]||!vS(t.children[r],n.children[r],i))return!1;return!0}else{let r=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!ka(t.segments,r)||!Qh(t.segments,r,i)||!t.children[ye]?!1:yS(t.children[ye],n,o,i)}}function Qh(t,n,e){return n.every((i,r)=>gS[e](t[r].parameters,i.parameters))}var ti=class{root;queryParams;fragment;_queryParamMap;constructor(n=new Ze([],{}),e={},i=null){this.root=n,this.queryParams=e,this.fragment=i}get queryParamMap(){return this._queryParamMap??=Oa(this.queryParams),this._queryParamMap}toString(){return bB.serialize(this)}},Ze=class{segments;children;parent=null;constructor(n,e){this.segments=n,this.children=e,Object.values(e).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Xh(this)}},Do=class{path;parameters;_parameterMap;constructor(n,e){this.path=n,this.parameters=e}get parameterMap(){return this._parameterMap??=Oa(this.parameters),this._parameterMap}toString(){return wS(this)}};function gB(t,n){return ka(t,n)&&t.every((e,i)=>ir(e.parameters,n[i].parameters))}function ka(t,n){return t.length!==n.length?!1:t.every((e,i)=>e.path===n[i].path)}function _B(t,n){let e=[];return Object.entries(t.children).forEach(([i,r])=>{i===ye&&(e=e.concat(n(r,i)))}),Object.entries(t.children).forEach(([i,r])=>{i!==ye&&(e=e.concat(n(r,i)))}),e}var Na=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:()=>new Br,providedIn:"root"})}return t})(),Br=class{parse(n){let e=new my(n);return new ti(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(n){let e=`/${ad(n.root,!0)}`,i=CB(n.queryParams),r=typeof n.fragment=="string"?`#${vB(n.fragment)}`:"";return`${e}${i}${r}`}},bB=new Br;function Xh(t){return t.segments.map(n=>wS(n)).join("/")}function ad(t,n){if(!t.hasChildren())return Xh(t);if(n){let e=t.children[ye]?ad(t.children[ye],!1):"",i=[];return Object.entries(t.children).forEach(([r,o])=>{r!==ye&&i.push(`${r}:${ad(o,!1)}`)}),i.length>0?`${e}(${i.join("//")})`:e}else{let e=_B(t,(i,r)=>r===ye?[ad(t.children[ye],!1)]:[`${r}:${ad(i,!1)}`]);return Object.keys(t.children).length===1&&t.children[ye]!=null?`${Xh(t)}/${e[0]}`:`${Xh(t)}/(${e.join("//")})`}}function CS(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Zh(t){return CS(t).replace(/%3B/gi,";")}function vB(t){return encodeURI(t)}function uy(t){return CS(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Kh(t){return decodeURIComponent(t)}function sS(t){return Kh(t.replace(/\+/g,"%20"))}function wS(t){return`${uy(t.path)}${yB(t.parameters)}`}function yB(t){return Object.entries(t).map(([n,e])=>`;${uy(n)}=${uy(e)}`).join("")}function CB(t){let n=Object.entries(t).map(([e,i])=>Array.isArray(i)?i.map(r=>`${Zh(e)}=${Zh(r)}`).join("&"):`${Zh(e)}=${Zh(i)}`).filter(e=>e);return n.length?`?${n.join("&")}`:""}var wB=/^[^\/()?;#]+/;function oy(t){let n=t.match(wB);return n?n[0]:""}var xB=/^[^\/()?;=#]+/;function EB(t){let n=t.match(xB);return n?n[0]:""}var DB=/^[^=?&#]+/;function MB(t){let n=t.match(DB);return n?n[0]:""}var SB=/^[^&#]+/;function IB(t){let n=t.match(SB);return n?n[0]:""}var my=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new Ze([],{}):new Ze([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional("?"))do this.parseQueryParam(n);while(this.consumeOptional("&"));return n}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(n=0){if(n>50)throw new R(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let i={};this.peekStartsWith("/(")&&(this.capture("/"),i=this.parseParens(!0,n));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,n)),(e.length>0||Object.keys(i).length>0)&&(r[ye]=new Ze(e,i)),r}parseSegment(){let n=oy(this.remaining);if(n===""&&this.peekStartsWith(";"))throw new R(4009,!1);return this.capture(n),new Do(Kh(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(";");)this.parseParam(n);return n}parseParam(n){let e=EB(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let r=oy(this.remaining);r&&(i=r,this.capture(i))}n[Kh(e)]=Kh(i)}parseQueryParam(n){let e=MB(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let a=IB(this.remaining);a&&(i=a,this.capture(i))}let r=sS(e),o=sS(i);if(n.hasOwnProperty(r)){let a=n[r];Array.isArray(a)||(a=[a],n[r]=a),a.push(o)}else n[r]=o}parseParens(n,e){let i={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=oy(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new R(4010,!1);let a;r.indexOf(":")>-1?(a=r.slice(0,r.indexOf(":")),this.capture(a),this.capture(":")):n&&(a=ye);let s=this.parseChildren(e+1);i[a??ye]=Object.keys(s).length===1&&s[ye]?s[ye]:new Ze([],s),this.consumeOptional("//")}return i}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new R(4011,!1)}};function xS(t){return t.segments.length>0?new Ze([],{[ye]:t}):t}function ES(t){let n={};for(let[i,r]of Object.entries(t.children)){let o=ES(r);if(i===ye&&o.segments.length===0&&o.hasChildren())for(let[a,s]of Object.entries(o.children))n[a]=s;else(o.segments.length>0||o.hasChildren())&&(n[i]=o)}let e=new Ze(t.segments,n);return TB(e)}function TB(t){if(t.numberOfChildren===1&&t.children[ye]){let n=t.children[ye];return new Ze(t.segments.concat(n.segments),n.children)}return t}function qs(t){return t instanceof ti}function DS(t,n,e=null,i=null,r=new Br){let o=MS(t);return SS(o,n,e,i,r)}function MS(t){let n;function e(o){let a={};for(let l of o.children){let c=e(l);a[l.outlet]=c}let s=new Ze(o.url,a);return o===t&&(n=s),s}let i=e(t.root),r=xS(i);return n??r}function SS(t,n,e,i,r){let o=t;for(;o.parent;)o=o.parent;if(n.length===0)return ay(o,o,o,e,i,r);let a=kB(n);if(a.toRoot())return ay(o,o,new Ze([],{}),e,i,r);let s=OB(a,o,t),l=s.processChildren?ld(s.segmentGroup,s.index,a.commands):TS(s.segmentGroup,s.index,a.commands);return ay(o,s.segmentGroup,l,e,i,r)}function ef(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function dd(t){return typeof t=="object"&&t!=null&&t.outlets}function lS(t,n,e){t||="\u0275";let i=new ti;return i.queryParams={[t]:n},e.parse(e.serialize(i)).queryParams[t]}function ay(t,n,e,i,r,o){let a={};for(let[c,d]of Object.entries(i??{}))a[c]=Array.isArray(d)?d.map(m=>lS(c,m,o)):lS(c,d,o);let s;t===n?s=e:s=IS(t,n,e);let l=xS(ES(s));return new ti(l,a,r)}function IS(t,n,e){let i={};return Object.entries(t.children).forEach(([r,o])=>{o===n?i[r]=e:i[r]=IS(o,n,e)}),new Ze(t.segments,i)}var tf=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,e,i){if(this.isAbsolute=n,this.numberOfDoubleDots=e,this.commands=i,n&&i.length>0&&ef(i[0]))throw new R(4003,!1);let r=i.find(dd);if(r&&r!==mB(i))throw new R(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function kB(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new tf(!0,0,t);let n=0,e=!1,i=t.reduce((r,o,a)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let s={};return Object.entries(o.outlets).forEach(([l,c])=>{s[l]=typeof c=="string"?c.split("/"):c}),[...r,{outlets:s}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:a===0?(o.split("/").forEach((s,l)=>{l==0&&s==="."||(l==0&&s===""?e=!0:s===".."?n++:s!=""&&r.push(s))}),r):[...r,o]},[]);return new tf(e,n,i)}var $s=class{segmentGroup;processChildren;index;constructor(n,e,i){this.segmentGroup=n,this.processChildren=e,this.index=i}};function OB(t,n,e){if(t.isAbsolute)return new $s(n,!0,0);if(!e)return new $s(n,!1,NaN);if(e.parent===null)return new $s(e,!0,0);let i=ef(t.commands[0])?0:1,r=e.segments.length-1+i;return RB(e,r,t.numberOfDoubleDots)}function RB(t,n,e){let i=t,r=n,o=e;for(;o>r;){if(o-=r,i=i.parent,!i)throw new R(4005,!1);r=i.segments.length}return new $s(i,!1,r-o)}function AB(t){return dd(t[0])?t[0].outlets:{[ye]:t}}function TS(t,n,e){if(t??=new Ze([],{}),t.segments.length===0&&t.hasChildren())return ld(t,n,e);let i=NB(t,n,e),r=e.slice(i.commandIndex);if(i.match&&i.pathIndex<t.segments.length){let o=new Ze(t.segments.slice(0,i.pathIndex),{});return o.children[ye]=new Ze(t.segments.slice(i.pathIndex),t.children),ld(o,0,r)}else return i.match&&r.length===0?new Ze(t.segments,{}):i.match&&!t.hasChildren()?hy(t,n,e):i.match?ld(t,0,r):hy(t,n,e)}function ld(t,n,e){if(e.length===0)return new Ze(t.segments,{});{let i=AB(e),r={};if(Object.keys(i).some(o=>o!==ye)&&t.children[ye]&&t.numberOfChildren===1&&t.children[ye].segments.length===0){let o=ld(t.children[ye],n,e);return new Ze(t.segments,o.children)}return Object.entries(i).forEach(([o,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(r[o]=TS(t.children[o],n,a))}),Object.entries(t.children).forEach(([o,a])=>{i[o]===void 0&&(r[o]=a)}),new Ze(t.segments,r)}}function NB(t,n,e){let i=0,r=n,o={match:!1,pathIndex:0,commandIndex:0};for(;r<t.segments.length;){if(i>=e.length)return o;let a=t.segments[r],s=e[i];if(dd(s))break;let l=`${s}`,c=i<e.length-1?e[i+1]:null;if(r>0&&l===void 0)break;if(l&&c&&typeof c=="object"&&c.outlets===void 0){if(!dS(l,c,a))return o;i+=2}else{if(!dS(l,{},a))return o;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function hy(t,n,e){let i=t.segments.slice(0,n),r=0;for(;r<e.length;){let o=e[r];if(dd(o)){let l=PB(o.outlets);return new Ze(i,l)}if(r===0&&ef(e[0])){let l=t.segments[n];i.push(new Do(l.path,cS(e[0]))),r++;continue}let a=dd(o)?o.outlets[ye]:`${o}`,s=r<e.length-1?e[r+1]:null;a&&s&&ef(s)?(i.push(new Do(a,cS(s))),r+=2):(i.push(new Do(a,{})),r++)}return new Ze(i,{})}function PB(t){let n={};return Object.entries(t).forEach(([e,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(n[e]=hy(new Ze([],{}),0,i))}),n}function cS(t){let n={};return Object.entries(t).forEach(([e,i])=>n[e]=`${i}`),n}function dS(t,n,e){return t==e.path&&ir(n,e.parameters)}var Ws="imperative",Ht=(function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t})(Ht||{}),Ln=class{id;url;constructor(n,e){this.id=n,this.url=e}},rr=class extends Ln{type=Ht.NavigationStart;navigationTrigger;restoredState;constructor(n,e,i="imperative",r=null){super(n,e),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Ti=class extends Ln{urlAfterRedirects;type=Ht.NavigationEnd;constructor(n,e,i){super(n,e),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},mn=(function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t[t.Aborted=4]="Aborted",t})(mn||{}),Zs=(function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t})(Zs||{}),ei=class extends Ln{reason;code;type=Ht.NavigationCancel;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function kS(t){return t instanceof ei&&(t.code===mn.Redirect||t.code===mn.SupersededByNewNavigation)}var or=class extends Ln{reason;code;type=Ht.NavigationSkipped;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}},Ra=class extends Ln{error;target;type=Ht.NavigationError;constructor(n,e,i,r){super(n,e),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},ud=class extends Ln{urlAfterRedirects;state;type=Ht.RoutesRecognized;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},nf=class extends Ln{urlAfterRedirects;state;type=Ht.GuardsCheckStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},rf=class extends Ln{urlAfterRedirects;state;shouldActivate;type=Ht.GuardsCheckEnd;constructor(n,e,i,r,o){super(n,e),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},of=class extends Ln{urlAfterRedirects;state;type=Ht.ResolveStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},af=class extends Ln{urlAfterRedirects;state;type=Ht.ResolveEnd;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},sf=class{route;type=Ht.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},lf=class{route;type=Ht.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},cf=class{snapshot;type=Ht.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},df=class{snapshot;type=Ht.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},uf=class{snapshot;type=Ht.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},mf=class{snapshot;type=Ht.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Ys=class{routerEvent;position;anchor;scrollBehavior;type=Ht.Scroll;constructor(n,e,i,r){this.routerEvent=n,this.position=e,this.anchor=i,this.scrollBehavior=r}toString(){let n=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${n}')`}},Qs=class{},md=class{},Xs=class{url;navigationBehaviorOptions;constructor(n,e){this.url=n,this.navigationBehaviorOptions=e}};function FB(t){return!(t instanceof Qs)&&!(t instanceof Xs)&&!(t instanceof md)}var hf=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new Pa(this.rootInjector)}},Pa=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,i){let r=this.getOrCreateContext(e);r.outlet=i,this.contexts.set(e,r)}onChildOutletDestroyed(e){let i=this.getContext(e);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let i=this.getContext(e);return i||(i=new hf(this.rootInjector),this.contexts.set(e,i)),i}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(i){return new(i||t)(A(Xe))};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ff=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let e=this.pathFromRoot(n);return e.length>1?e[e.length-2]:null}children(n){let e=fy(n,this._root);return e?e.children.map(i=>i.value):[]}firstChild(n){let e=fy(n,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(n){let e=py(n,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==n)}pathFromRoot(n){return py(n,this._root).map(e=>e.value)}};function fy(t,n){if(t===n.value)return n;for(let e of n.children){let i=fy(t,e);if(i)return i}return null}function py(t,n){if(t===n.value)return[n];for(let e of n.children){let i=py(t,e);if(i.length)return i.unshift(n),i}return[]}var Fn=class{value;children;constructor(n,e){this.value=n,this.children=e}toString(){return`TreeNode(${this.value})`}};function zs(t){let n={};return t&&t.children.forEach(e=>n[e.value.outlet]=e),n}var hd=class extends ff{snapshot;constructor(n,e){super(n),this.snapshot=e,Ey(this,n)}toString(){return this.snapshot.toString()}};function OS(t,n){let e=LB(t,n),i=new At([new Do("",{})]),r=new At({}),o=new At({}),a=new At({}),s=new At(""),l=new Vr(i,r,a,s,o,ye,t,e.root);return l.snapshot=e.root,new hd(new Fn(l,[]),e)}function LB(t,n){let e={},i={},r={},a=new Ks([],e,r,"",i,ye,t,null,{},n);return new fd("",new Fn(a,[]))}var Vr=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(n,e,i,r,o,a,s,l){this.urlSubject=n,this.paramsSubject=e,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=o,this.outlet=a,this.component=s,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(le(c=>c[_d]))??ne(void 0),this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(le(n=>Oa(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(le(n=>Oa(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function xy(t,n,e="emptyOnly"){let i,{routeConfig:r}=t;return n!==null&&(e==="always"||r?.path===""||!n.component&&!n.routeConfig?.loadComponent)?i={params:_(_({},n.params),t.params),data:_(_({},n.data),t.data),resolve:_(_(_(_({},t.data),n.data),r?.data),t._resolvedData)}:i={params:_({},t.params),data:_({},t.data),resolve:_(_({},t.data),t._resolvedData??{})},r&&AS(r)&&(i.resolve[_d]=r.title),i}var Ks=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[_d]}constructor(n,e,i,r,o,a,s,l,c,d){this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o,this.outlet=a,this.component=s,this.routeConfig=l,this._resolve=c,this._environmentInjector=d}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Oa(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Oa(this.queryParams),this._queryParamMap}toString(){let n=this.url.map(i=>i.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${n}', path:'${e}')`}},fd=class extends ff{url;constructor(n,e){super(e),this.url=n,Ey(this,e)}toString(){return RS(this._root)}};function Ey(t,n){n.value._routerState=t,n.children.forEach(e=>Ey(t,e))}function RS(t){let n=t.children.length>0?` { ${t.children.map(RS).join(", ")} } `:"";return`${t.value}${n}`}function sy(t){if(t.snapshot){let n=t.snapshot,e=t._futureSnapshot;t.snapshot=e,ir(n.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),n.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),ir(n.params,e.params)||t.paramsSubject.next(e.params),uB(n.url,e.url)||t.urlSubject.next(e.url),ir(n.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function gy(t,n){let e=ir(t.params,n.params)&&gB(t.url,n.url),i=!t.parent!=!n.parent;return e&&!i&&(!t.parent||gy(t.parent,n.parent))}function AS(t){return typeof t.title=="string"||t.title===null}var NS=new C(""),bd=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=ye;activateEvents=new K;deactivateEvents=new K;attachEvents=new K;detachEvents=new K;routerOutletData=TM();parentContexts=u(Pa);location=u(jt);changeDetector=u(ve);inputBinder=u(vd,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:i,previousValue:r}=e.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new R(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new R(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new R(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,i){this.activated=e,this._activatedRoute=i,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,i){if(this.isActivated)throw new R(4013,!1);this._activatedRoute=e;let r=this.location,a=e.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,l=new _y(e,s,r.injector,this.routerOutletData);this.activated=r.createComponent(a,{index:r.length,injector:l,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=W({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[it]})}return t})(),_y=class{route;childContexts;parent;outletData;constructor(n,e,i,r){this.route=n,this.childContexts=e,this.parent=i,this.outletData=r}get(n,e){return n===Vr?this.route:n===Pa?this.childContexts:n===NS?this.outletData:this.parent.get(n,e)}},vd=new C(""),Dy=(()=>{class t{outletDataSubscriptions=new Map;bindActivatedRouteToOutletComponent(e){this.unsubscribeFromRouteData(e),this.subscribeToRouteData(e)}unsubscribeFromRouteData(e){this.outletDataSubscriptions.get(e)?.unsubscribe(),this.outletDataSubscriptions.delete(e)}subscribeToRouteData(e){let{activatedRoute:i}=e,r=ds([i.queryParams,i.params,i.data]).pipe(ot(([o,a,s],l)=>(s=_(_(_({},o),a),s),l===0?ne(s):Promise.resolve(s)))).subscribe(o=>{if(!e.isActivated||!e.activatedComponentRef||e.activatedRoute!==i||i.component===null){this.unsubscribeFromRouteData(e);return}let a=AM(i.component);if(!a){this.unsubscribeFromRouteData(e);return}for(let{templateName:s}of a.inputs)e.activatedComponentRef.setInput(s,o[s])});this.outletDataSubscriptions.set(e,r)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac})}return t})(),My=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=O({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(i,r){i&1&&V(0,"router-outlet")},dependencies:[bd],encapsulation:2})}return t})();function Sy(t){let n=t.children&&t.children.map(Sy),e=n?te(_({},t),{children:n}):_({},t);return!e.component&&!e.loadComponent&&(n||e.loadChildren)&&e.outlet&&e.outlet!==ye&&(e.component=My),e}function BB(t,n,e){let i=pd(t,n._root,e?e._root:void 0);return new hd(i,n)}function pd(t,n,e){if(e&&t.shouldReuseRoute(n.value,e.value.snapshot)){let i=e.value;i._futureSnapshot=n.value;let r=VB(t,n,e);return new Fn(i,r)}else{if(t.shouldAttach(n.value)){let o=t.retrieve(n.value);if(o!==null){let a=o.route;return a.value._futureSnapshot=n.value,a.children=n.children.map(s=>pd(t,s)),a}}let i=jB(n.value),r=n.children.map(o=>pd(t,o));return new Fn(i,r)}}function VB(t,n,e){return n.children.map(i=>{for(let r of e.children)if(t.shouldReuseRoute(i.value,r.value.snapshot))return pd(t,i,r);return pd(t,i)})}function jB(t){return new Vr(new At(t.url),new At(t.params),new At(t.queryParams),new At(t.fragment),new At(t.data),t.outlet,t.component,t)}var Js=class{redirectTo;navigationBehaviorOptions;constructor(n,e){this.redirectTo=n,this.navigationBehaviorOptions=e}},PS="ngNavigationCancelingError";function pf(t,n){let{redirectTo:e,navigationBehaviorOptions:i}=qs(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,r=FS(!1,mn.Redirect);return r.url=e,r.navigationBehaviorOptions=i,r}function FS(t,n){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[PS]=!0,e.cancellationCode=n,e}function UB(t){return LS(t)&&qs(t.url)}function LS(t){return!!t&&t[PS]}var by=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,e,i,r,o){this.routeReuseStrategy=n,this.futureState=e,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=o}activate(n){let e=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,i,n),sy(this.futureState.root),this.activateChildRoutes(e,i,n)}deactivateChildRoutes(n,e,i){let r=zs(e);n.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,r[a],i),delete r[a]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,i)})}deactivateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(r===o)if(r.component){let a=i.getContext(r.outlet);a&&this.deactivateChildRoutes(n,e,a.children)}else this.deactivateChildRoutes(n,e,i);else o&&this.deactivateRouteAndItsChildren(e,i)}deactivateRouteAndItsChildren(n,e){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,e):this.deactivateRouteAndOutlet(n,e)}detachAndStoreRouteSubtree(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=zs(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);if(i&&i.outlet){let a=i.outlet.detach(),s=i.children.onOutletDeactivated();this.routeReuseStrategy.store(n.value.snapshot,{componentRef:a,route:n,contexts:s})}}deactivateRouteAndOutlet(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=zs(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(n,e,i){let r=zs(e);n.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],i),this.forwardEvent(new mf(o.value.snapshot))}),n.children.length&&this.forwardEvent(new df(n.value.snapshot))}activateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(sy(r),r===o)if(r.component){let a=i.getOrCreateContext(r.outlet);this.activateChildRoutes(n,e,a.children)}else this.activateChildRoutes(n,e,i);else if(r.component){let a=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let s=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),a.children.onOutletReAttached(s.contexts),a.attachRef=s.componentRef,a.route=s.route.value,a.outlet&&a.outlet.attach(s.componentRef,s.route.value),sy(s.route.value),this.activateChildRoutes(n,null,a.children)}else a.attachRef=null,a.route=r,a.outlet&&a.outlet.activateWith(r,a.injector),this.activateChildRoutes(n,null,a.children)}else this.activateChildRoutes(n,null,i)}},gf=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}},Gs=class{component;route;constructor(n,e){this.component=n,this.route=e}};function HB(t,n,e){let i=t._root,r=n?n._root:null;return sd(i,r,e,[i.value])}function zB(t){let n=t.routeConfig?t.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:t,guards:n}}function tl(t,n){let e=Symbol(),i=n.get(t,e);return i===e?typeof t=="function"&&!Ng(t)?t:n.get(t):i}function sd(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=zs(n);return t.children.forEach(a=>{$B(a,o[a.value.outlet],e,i.concat([a.value]),r),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,s])=>cd(s,e.getContext(a),r)),r}function $B(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,a=n?n.value:null,s=e?e.getContext(t.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let l=WB(a,o,o.routeConfig.runGuardsAndResolvers);l?r.canActivateChecks.push(new gf(i)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?sd(t,n,s?s.children:null,i,r):sd(t,n,e,i,r),l&&s&&s.outlet&&s.outlet.isActivated&&r.canDeactivateChecks.push(new Gs(s.outlet.component,a))}else a&&cd(n,s,r),r.canActivateChecks.push(new gf(i)),o.component?sd(t,null,s?s.children:null,i,r):sd(t,null,e,i,r);return r}function WB(t,n,e){if(typeof e=="function")return Bt(n._environmentInjector,()=>e(t,n));switch(e){case"pathParamsChange":return!ka(t.url,n.url);case"pathParamsOrQueryParamsChange":return!ka(t.url,n.url)||!ir(t.queryParams,n.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!gy(t,n)||!ir(t.queryParams,n.queryParams);default:return!gy(t,n)}}function cd(t,n,e){let i=zs(t),r=t.value;Object.entries(i).forEach(([o,a])=>{r.component?n?cd(a,n.children.getContext(o),e):cd(a,null,e):cd(a,n,e)}),r.component?n&&n.outlet&&n.outlet.isActivated?e.canDeactivateChecks.push(new Gs(n.outlet.component,r)):e.canDeactivateChecks.push(new Gs(null,r)):e.canDeactivateChecks.push(new Gs(null,r))}function yd(t){return typeof t=="function"}function GB(t){return typeof t=="boolean"}function qB(t){return t&&yd(t.canLoad)}function ZB(t){return t&&yd(t.canActivate)}function YB(t){return t&&yd(t.canActivateChild)}function QB(t){return t&&yd(t.canDeactivate)}function XB(t){return t&&yd(t.canMatch)}function BS(t){return t instanceof ia||t?.name==="EmptyError"}var Yh=Symbol("INITIAL_VALUE");function el(){return ot(t=>ds(t.map(n=>n.pipe(He(1),Pt(Yh)))).pipe(le(n=>{for(let e of n)if(e!==!0){if(e===Yh)return Yh;if(e===!1||KB(e))return e}return!0}),Ce(n=>n!==Yh),He(1)))}function KB(t){return qs(t)||t instanceof Js}function VS(t){return t.aborted?ne(void 0).pipe(He(1)):new de(n=>{let e=()=>{n.next(),n.complete()};return t.addEventListener("abort",e),()=>t.removeEventListener("abort",e)})}function jS(t){return ze(VS(t))}function JB(t){return Nt(n=>{let{targetSnapshot:e,currentSnapshot:i,guards:{canActivateChecks:r,canDeactivateChecks:o}}=n;return o.length===0&&r.length===0?ne(te(_({},n),{guardsResult:!0})):eV(o,e,i).pipe(Nt(a=>a&&GB(a)?tV(e,r,t):ne(a)),le(a=>te(_({},n),{guardsResult:a})))})}function eV(t,n,e){return nt(t).pipe(Nt(i=>aV(i.component,i.route,e,n)),Cr(i=>i!==!0,!0))}function tV(t,n,e){return nt(n).pipe(lo(i=>ao(iV(i.route.parent,e),nV(i.route,e),oV(t,i.path),rV(t,i.route))),Cr(i=>i!==!0,!0))}function nV(t,n){return t!==null&&n&&n(new uf(t)),ne(!0)}function iV(t,n){return t!==null&&n&&n(new cf(t)),ne(!0)}function rV(t,n){let e=n.routeConfig?n.routeConfig.canActivate:null;if(!e||e.length===0)return ne(!0);let i=e.map(r=>hi(()=>{let o=n._environmentInjector,a=tl(r,o),s=ZB(a)?a.canActivate(n,t):Bt(o,()=>a(n,t));return Aa(s).pipe(Cr())}));return ne(i).pipe(el())}function oV(t,n){let e=n[n.length-1],r=n.slice(0,n.length-1).reverse().map(o=>zB(o)).filter(o=>o!==null).map(o=>hi(()=>{let a=o.guards.map(s=>{let l=o.node._environmentInjector,c=tl(s,l),d=YB(c)?c.canActivateChild(e,t):Bt(l,()=>c(e,t));return Aa(d).pipe(Cr())});return ne(a).pipe(el())}));return ne(r).pipe(el())}function aV(t,n,e,i){let r=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!r||r.length===0)return ne(!0);let o=r.map(a=>{let s=n._environmentInjector,l=tl(a,s),c=QB(l)?l.canDeactivate(t,n,e,i):Bt(s,()=>l(t,n,e,i));return Aa(c).pipe(Cr())});return ne(o).pipe(el())}function sV(t,n,e,i,r){let o=n.canLoad;if(o===void 0||o.length===0)return ne(!0);let a=o.map(s=>{let l=tl(s,t),c=qB(l)?l.canLoad(n,e):Bt(t,()=>l(n,e)),d=Aa(c);return r?d.pipe(jS(r)):d});return ne(a).pipe(el(),US(i))}function US(t){return pg(Wt(n=>{if(typeof n!="boolean")throw pf(t,n)}),le(n=>n===!0))}function lV(t,n,e,i,r,o){let a=n.canMatch;if(!a||a.length===0)return ne(!0);let s=a.map(l=>{let c=tl(l,t),d=XB(c)?c.canMatch(n,e,r):Bt(t,()=>c(n,e,r));return Aa(d).pipe(jS(o))});return ne(s).pipe(el(),US(i))}var Lr=class t extends Error{segmentGroup;constructor(n){super(),this.segmentGroup=n||null,Object.setPrototypeOf(this,t.prototype)}},gd=class t extends Error{urlTree;constructor(n){super(),this.urlTree=n,Object.setPrototypeOf(this,t.prototype)}};function cV(t){throw new R(4e3,!1)}function dV(t){throw FS(!1,mn.GuardRejected)}var vy=class{urlSerializer;urlTree;constructor(n,e){this.urlSerializer=n,this.urlTree=e}async lineralizeSegments(n,e){let i=[],r=e.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return i;if(r.numberOfChildren>1||!r.children[ye])throw cV(`${n.redirectTo}`);r=r.children[ye]}}async applyRedirectCommands(n,e,i,r,o){let a=await uV(e,r,o);if(a instanceof ti)throw new gd(a);let s=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),n,i);if(a[0]==="/")throw new gd(s);return s}applyRedirectCreateUrlTree(n,e,i,r){let o=this.createSegmentGroup(n,e.root,i,r);return new ti(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(n,e){let i={};return Object.entries(n).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let s=o.substring(1);i[r]=e[s]}else i[r]=o}),i}createSegmentGroup(n,e,i,r){let o=this.createSegments(n,e.segments,i,r),a={};return Object.entries(e.children).forEach(([s,l])=>{a[s]=this.createSegmentGroup(n,l,i,r)}),new Ze(o,a)}createSegments(n,e,i,r){return e.map(o=>o.path[0]===":"?this.findPosParam(n,o,r):this.findOrReturn(o,i))}findPosParam(n,e,i){let r=i[e.path.substring(1)];if(!r)throw new R(4001,!1);return r}findOrReturn(n,e){let i=0;for(let r of e){if(r.path===n.path)return e.splice(i),r;i++}return n}};function uV(t,n,e){if(typeof t=="string")return Promise.resolve(t);let i=t;return Jh(Aa(Bt(e,()=>i(n))))}function mV(t,n){return t.providers&&!t._injector&&(t._injector=Fs(t.providers,n,`Route: ${t.path}`)),t._injector??n}function Ii(t){return t.outlet||ye}function hV(t,n){let e=t.filter(i=>Ii(i)===n);return e.push(...t.filter(i=>Ii(i)!==n)),e}var yy={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function HS(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function fV(t,n,e,i,r,o,a){let s=zS(t,n,e);if(!s.matched)return ne(s);let l=HS(o(s));return i=mV(n,i),lV(i,n,e,r,l,a).pipe(le(c=>c===!0?s:_({},yy)))}function zS(t,n,e){if(n.path==="")return n.pathMatch==="full"&&(t.hasChildren()||e.length>0)?_({},yy):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(n.matcher||hS)(e,t,n);if(!r)return _({},yy);let o={};Object.entries(r.posParams??{}).forEach(([s,l])=>{o[s]=l.path});let a=r.consumed.length>0?_(_({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:a,positionalParamSegments:r.posParams??{}}}function uS(t,n,e,i,r){return e.length>0&&_V(t,e,i,r)?{segmentGroup:new Ze(n,gV(i,new Ze(e,t.children))),slicedSegments:[]}:e.length===0&&bV(t,e,i)?{segmentGroup:new Ze(t.segments,pV(t,e,i,t.children)),slicedSegments:e}:{segmentGroup:new Ze(t.segments,t.children),slicedSegments:e}}function pV(t,n,e,i){let r={};for(let o of e)if(bf(t,n,o)&&!i[Ii(o)]){let a=new Ze([],{});r[Ii(o)]=a}return _(_({},i),r)}function gV(t,n){let e={};e[ye]=n;for(let i of t)if(i.path===""&&Ii(i)!==ye){let r=new Ze([],{});e[Ii(i)]=r}return e}function _V(t,n,e,i){return e.some(r=>!bf(t,n,r)||!(Ii(r)!==ye)?!1:!(i!==void 0&&Ii(r)===i))}function bV(t,n,e){return e.some(i=>bf(t,n,i))}function bf(t,n,e){return(t.hasChildren()||n.length>0)&&e.pathMatch==="full"?!1:e.path===""}function vV(t,n,e){return n.length===0&&!t.children[e]}var Cy=class{};async function yV(t,n,e,i,r,o,a="emptyOnly",s){return new wy(t,n,e,i,r,a,o,s).recognize()}var CV=31,wy=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(n,e,i,r,o,a,s,l){this.injector=n,this.configLoader=e,this.rootComponentType=i,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=s,this.abortSignal=l,this.applyRedirects=new vy(this.urlSerializer,this.urlTree)}noMatchError(n){return new R(4002,`'${n.segmentGroup}'`)}async recognize(){let n=uS(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:i}=await this.match(n),r=new Fn(i,e),o=new fd("",r),a=DS(i,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}}async match(n){let e=new Ks([],Object.freeze({}),Object.freeze(_({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),ye,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,n,ye,e),rootSnapshot:e}}catch(i){if(i instanceof gd)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof Lr?this.noMatchError(i):i}}async processSegmentGroup(n,e,i,r,o){if(i.segments.length===0&&i.hasChildren())return this.processChildren(n,e,i,o);let a=await this.processSegment(n,e,i,i.segments,r,!0,o);return a instanceof Fn?[a]:[]}async processChildren(n,e,i,r){let o=[];for(let l of Object.keys(i.children))l==="primary"?o.unshift(l):o.push(l);let a=[];for(let l of o){let c=i.children[l],d=hV(e,l),m=await this.processSegmentGroup(n,d,c,l,r);a.push(...m)}let s=$S(a);return wV(s),s}async processSegment(n,e,i,r,o,a,s){for(let l of e)try{return await this.processSegmentAgainstRoute(l._injector??n,e,l,i,r,o,a,s)}catch(c){if(c instanceof Lr||BS(c))continue;throw c}if(vV(i,r,o))return new Cy;throw new Lr(i)}async processSegmentAgainstRoute(n,e,i,r,o,a,s,l){if(Ii(i)!==a&&(a===ye||!bf(r,o,i)))throw new Lr(r);if(i.redirectTo===void 0)return this.matchSegmentAgainstRoute(n,r,i,o,a,l);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(n,r,e,i,o,a,l);throw new Lr(r)}async expandSegmentAgainstRouteUsingRedirect(n,e,i,r,o,a,s){let{matched:l,parameters:c,consumedSegments:d,positionalParamSegments:m,remainingSegments:f}=zS(e,r,o);if(!l)throw new Lr(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>CV&&(this.allowRedirects=!1));let h=this.createSnapshot(n,r,o,c,s);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let b=await this.applyRedirects.applyRedirectCommands(d,r.redirectTo,m,HS(h),n),D=await this.applyRedirects.lineralizeSegments(r,b);return this.processSegment(n,i,e,D.concat(f),a,!1,s)}createSnapshot(n,e,i,r,o){let a=new Ks(i,r,Object.freeze(_({},this.urlTree.queryParams)),this.urlTree.fragment,EV(e),Ii(e),e.component??e._loadedComponent??null,e,DV(e),n),s=xy(a,o,this.paramsInheritanceStrategy);return a.params=Object.freeze(s.params),a.data=Object.freeze(s.data),a}async matchSegmentAgainstRoute(n,e,i,r,o,a){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=Pe=>this.createSnapshot(n,i,Pe.consumedSegments,Pe.parameters,a),l=await Jh(fV(e,i,r,n,this.urlSerializer,s,this.abortSignal));if(i.path==="**"&&(e.children={}),!l?.matched)throw new Lr(e);n=i._injector??n;let{routes:c}=await this.getChildConfig(n,i,r),d=i._loadedInjector??n,{parameters:m,consumedSegments:f,remainingSegments:h}=l,b=this.createSnapshot(n,i,f,m,a),{segmentGroup:D,slicedSegments:S}=uS(e,f,h,c,o);if(S.length===0&&D.hasChildren()){let Pe=await this.processChildren(d,c,D,b);return new Fn(b,Pe)}if(c.length===0&&S.length===0)return new Fn(b,[]);let k=Ii(i)===o,_e=await this.processSegment(d,c,D,S,k?ye:o,!0,b);return new Fn(b,_e instanceof Fn?[_e]:[])}async getChildConfig(n,e,i){if(e.children)return{routes:e.children,injector:n};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(n).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await Jh(sV(n,e,i,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(n,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw dV(e)}return{routes:[],injector:n}}};function wV(t){t.sort((n,e)=>n.value.outlet===ye?-1:e.value.outlet===ye?1:n.value.outlet.localeCompare(e.value.outlet))}function xV(t){let n=t.value.routeConfig;return n&&n.path===""}function $S(t){let n=[],e=new Set;for(let i of t){if(!xV(i)){n.push(i);continue}let r=n.find(o=>i.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...i.children),e.add(r)):n.push(i)}for(let i of e){let r=$S(i.children);n.push(new Fn(i.value,r))}return n.filter(i=>!e.has(i))}function EV(t){return t.data||{}}function DV(t){return t.resolve||{}}function MV(t,n,e,i,r,o,a){return Nt(async s=>{let{state:l,tree:c}=await yV(t,n,e,i,s.extractedUrl,r,o,a);return te(_({},s),{targetSnapshot:l,urlAfterRedirects:c})})}function SV(t){return Nt(n=>{let{targetSnapshot:e,guards:{canActivateChecks:i}}=n;if(!i.length)return ne(n);let r=new Set(i.map(s=>s.route)),o=new Set;for(let s of r)if(!o.has(s))for(let l of WS(s))o.add(l);let a=0;return nt(o).pipe(lo(s=>r.has(s)?IV(s,e,t):(s.data=xy(s,s.parent,t).resolve,ne(void 0))),Wt(()=>a++),rm(1),Nt(s=>a===o.size?ne(n):wt))})}function WS(t){let n=t.children.map(e=>WS(e)).flat();return[t,...n]}function IV(t,n,e){let i=t.routeConfig,r=t._resolve;return i?.title!==void 0&&!AS(i)&&(r[_d]=i.title),hi(()=>(t.data=xy(t,t.parent,e).resolve,TV(r,t,n).pipe(le(o=>(t._resolvedData=o,t.data=_(_({},t.data),o),null)))))}function TV(t,n,e){let i=cy(t);if(i.length===0)return ne({});let r={};return nt(i).pipe(Nt(o=>kV(t[o],n,e).pipe(Cr(),Wt(a=>{if(a instanceof Js)throw pf(new Br,a);r[o]=a}))),rm(1),le(()=>r),so(o=>BS(o)?wt:tc(o)))}function kV(t,n,e){let i=n._environmentInjector,r=tl(t,i),o=r.resolve?r.resolve(n,e):Bt(i,()=>r(n,e));return Aa(o)}function mS(t){return ot(n=>{let e=t(n);return e?nt(e).pipe(le(()=>n)):ne(n)})}var Iy=(()=>{class t{buildTitle(e){let i,r=e.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(o=>o.outlet===ye);return i}getResolvedTitleForRoute(e){return e.data[_d]}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:()=>u(GS),providedIn:"root"})}return t})(),GS=(()=>{class t extends Iy{title;constructor(e){super(),this.title=e}updateTitle(e){let i=this.buildTitle(e);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||t)(A(oS))};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Fa=new C("",{factory:()=>({})}),La=new C(""),vf=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=u(Mv);async loadComponent(e,i){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Promise.resolve(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await pS(Bt(e,()=>i.loadComponent())),a=await YS(ZS(o));return this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=a,a}finally{this.componentLoaders.delete(i)}})();return this.componentLoaders.set(i,r),r}loadChildren(e,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Promise.resolve({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await qS(i,this.compiler,e,this.onLoadEndListener);return i._loadedRoutes=o.routes,i._loadedInjector=o.injector,i._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(i)}})();return this.childrenLoaders.set(i,r),r}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();async function qS(t,n,e,i){let r=await pS(Bt(e,()=>t.loadChildren())),o=await YS(ZS(r)),a;o instanceof Ch||Array.isArray(o)?a=o:a=await n.compileModuleAsync(o),i&&i(t);let s,l,c=!1,d;return Array.isArray(a)?(l=a,c=!0):(s=a.create(e).injector,d=a,l=s.get(La,[],{optional:!0,self:!0}).flat()),{routes:l.map(Sy),injector:s,factory:d}}function OV(t){return t&&typeof t=="object"&&"default"in t}function ZS(t){return OV(t)?t.default:t}async function YS(t){return t}var yf=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:()=>u(RV),providedIn:"root"})}return t})(),RV=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,i){return e}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ty=new C(""),ky=new C("");function QS(t,n,e){let i=t.get(ky),r=t.get(J);if(!r.startViewTransition||i.skipNextTransition)return i.skipNextTransition=!1,new Promise(c=>setTimeout(c));let o,a=new Promise(c=>{o=c}),s=r.startViewTransition(()=>(o(),AV(t)));s.updateCallbackDone.catch(c=>{}),s.ready.catch(c=>{}),s.finished.catch(c=>{});let{onViewTransitionCreated:l}=i;return l&&Bt(t,()=>l({transition:s,from:n,to:e})),a}function AV(t){return new Promise(n=>{ct({read:()=>setTimeout(n)},{injector:t})})}var NV=()=>{},Oy=new C(""),Cf=(()=>{class t{currentNavigation=Fe(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=Fe(null);events=new I;transitionAbortWithErrorSubject=new I;configLoader=u(vf);environmentInjector=u(Xe);destroyRef=u(pn);urlSerializer=u(Na);rootContexts=u(Pa);location=u(Jn);inputBindingEnabled=u(vd,{optional:!0})!==null;titleStrategy=u(Iy);options=u(Fa,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=u(yf);createViewTransition=u(Ty,{optional:!0});navigationErrorHandler=u(Oy,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>ne(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new sf(r)),i=r=>this.events.next(new lf(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let i=++this.navigationId;kt(()=>{this.transitions?.next(te(_({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:i,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new At(null),this.transitions.pipe(Ce(i=>i!==null),ot(i=>{let r=!1,o=new AbortController,a=()=>!r&&this.currentTransition?.id===i.id;return ne(i).pipe(ot(s=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",mn.SupersededByNewNavigation),wt;this.currentTransition=i;let l=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:l?te(_({},l),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let c=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),d=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!c&&d!=="reload")return this.events.next(new or(s.id,this.urlSerializer.serialize(s.rawUrl),"",Zs.IgnoredSameUrlNavigation)),s.resolve(!1),wt;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return ne(s).pipe(ot(m=>(this.events.next(new rr(m.id,this.urlSerializer.serialize(m.extractedUrl),m.source,m.restoredState)),m.id!==this.navigationId?wt:Promise.resolve(m))),MV(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),Wt(m=>{i.targetSnapshot=m.targetSnapshot,i.urlAfterRedirects=m.urlAfterRedirects,this.currentNavigation.update(f=>(f.finalUrl=m.urlAfterRedirects,f)),this.events.next(new md)}),ot(m=>nt(i.routesRecognizeHandler.deferredHandle??ne(void 0)).pipe(le(()=>m))),Wt(()=>{let m=new ud(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(m)}));if(c&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:m,extractedUrl:f,source:h,restoredState:b,extras:D}=s,S=new rr(m,this.urlSerializer.serialize(f),h,b);this.events.next(S);let k=OS(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=i=te(_({},s),{targetSnapshot:k,urlAfterRedirects:f,extras:te(_({},D),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(_e=>(_e.finalUrl=f,_e)),ne(i)}else return this.events.next(new or(s.id,this.urlSerializer.serialize(s.extractedUrl),"",Zs.IgnoredByUrlHandlingStrategy)),s.resolve(!1),wt}),le(s=>{let l=new nf(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(l),this.currentTransition=i=te(_({},s),{guards:HB(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),i}),JB(s=>this.events.next(s)),ot(s=>{if(i.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw pf(this.urlSerializer,s.guardsResult);let l=new rf(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(l),!a())return wt;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",mn.GuardRejected),wt;if(s.guards.canActivateChecks.length===0)return ne(s);let c=new of(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(c),!a())return wt;let d=!1;return ne(s).pipe(SV(this.paramsInheritanceStrategy),Wt({next:()=>{d=!0;let m=new af(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(m)},complete:()=>{d||this.cancelNavigationTransition(s,"",mn.NoDataFromResolver)}}))}),mS(s=>{let l=d=>{let m=[];if(d.routeConfig?._loadedComponent)d.component=d.routeConfig?._loadedComponent;else if(d.routeConfig?.loadComponent){let f=d._environmentInjector;m.push(this.configLoader.loadComponent(f,d.routeConfig).then(h=>{d.component=h}))}for(let f of d.children)m.push(...l(f));return m},c=l(s.targetSnapshot.root);return c.length===0?ne(s):nt(Promise.all(c).then(()=>s))}),mS(()=>this.afterPreactivation()),ot(()=>{let{currentSnapshot:s,targetSnapshot:l}=i,c=this.createViewTransition?.(this.environmentInjector,s.root,l.root);return c?nt(c).pipe(le(()=>i)):ne(i)}),He(1),ot(s=>{let l=BB(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);this.currentTransition=i=s=te(_({},s),{targetRouterState:l}),this.currentNavigation.update(d=>(d.targetRouterState=l,d)),this.events.next(new Qs);let c=i.beforeActivateHandler.deferredHandle;return c?nt(c.then(()=>s)):ne(s)}),Wt(s=>{new by(e.routeReuseStrategy,i.targetRouterState,i.currentRouterState,l=>this.events.next(l),this.inputBindingEnabled).activate(this.rootContexts),a()&&(r=!0,this.currentNavigation.update(l=>(l.abort=NV,l)),this.lastSuccessfulNavigation.set(kt(this.currentNavigation)),this.events.next(new Ti(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),ze(VS(o.signal).pipe(Ce(()=>!r&&!i.targetRouterState),Wt(()=>{this.cancelNavigationTransition(i,o.signal.reason+"",mn.Aborted)}))),Wt({complete:()=>{r=!0}}),ze(this.transitionAbortWithErrorSubject.pipe(Wt(s=>{throw s}))),ra(()=>{o.abort(),r||this.cancelNavigationTransition(i,"",mn.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),so(s=>{if(r=!0,this.destroyed)return i.resolve(!1),wt;if(LS(s))this.events.next(new ei(i.id,this.urlSerializer.serialize(i.extractedUrl),s.message,s.cancellationCode)),UB(s)?this.events.next(new Xs(s.url,s.navigationBehaviorOptions)):i.resolve(!1);else{let l=new Ra(i.id,this.urlSerializer.serialize(i.extractedUrl),s,i.targetSnapshot??void 0);try{let c=Bt(this.environmentInjector,()=>this.navigationErrorHandler?.(l));if(c instanceof Js){let{message:d,cancellationCode:m}=pf(this.urlSerializer,c);this.events.next(new ei(i.id,this.urlSerializer.serialize(i.extractedUrl),d,m)),this.events.next(new Xs(c.redirectTo,c.navigationBehaviorOptions))}else throw this.events.next(l),s}catch(c){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(c)}}return wt}))}))}cancelNavigationTransition(e,i,r){let o=new ei(e.id,this.urlSerializer.serialize(e.extractedUrl),i,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=kt(this.currentNavigation),r=i?.targetBrowserUrl??i?.extractedUrl;return e.toString()!==r?.toString()&&!i?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function PV(t){return t!==Ws}var XS=new C("");var KS=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:()=>u(FV),providedIn:"root"})}return t})(),_f=class{shouldDetach(n){return!1}store(n,e){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,e){return n.routeConfig===e.routeConfig}shouldDestroyInjector(n){return!0}},FV=(()=>{class t extends _f{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Tt(t)))(r||t)}})();static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ry=(()=>{class t{urlSerializer=u(Na);options=u(Fa,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=u(Jn);urlHandlingStrategy=u(yf);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new ti;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:i,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,i):i,a=r??o;return a instanceof ti?this.urlSerializer.serialize(a):a}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:i,initialUrl:r}){i&&e?(this.currentUrlTree=i,this.rawUrlTree=this.urlHandlingStrategy.merge(i,r),this.routerState=e):this.rawUrlTree=r}routerState=OS(null,u(Xe));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:()=>u(LV),providedIn:"root"})}return t})(),LV=(()=>{class t extends Ry{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(i=>{i.type==="popstate"&&setTimeout(()=>{e(i.url,i.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,i){e instanceof rr?this.updateStateMemento():e instanceof or?this.commitTransition(i):e instanceof ud?this.urlUpdateStrategy==="eager"&&(i.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof Qs?(this.commitTransition(i),this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof ei&&!kS(e)?this.restoreHistory(i):e instanceof Ra?this.restoreHistory(i,!0):e instanceof Ti&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,i){let{extras:r,id:o}=i,{replaceUrl:a,state:s}=r;if(this.location.isCurrentPathEqualTo(e)||a){let l=this.browserPageId,c=_(_({},s),this.generateNgRouterState(o,l,i));this.location.replaceState(e,"",c)}else{let l=_(_({},s),this.generateNgRouterState(o,this.browserPageId+1,i));this.location.go(e,"",l)}}restoreHistory(e,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,i,r){return this.canceledNavigationResolution==="computed"?_({navigationId:e,\u0275routerPageId:i},this.routerUrlState(r)):_({navigationId:e},this.routerUrlState(r))}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Tt(t)))(r||t)}})();static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function wf(t,n){t.events.pipe(Ce(e=>e instanceof Ti||e instanceof ei||e instanceof Ra||e instanceof or),le(e=>e instanceof Ti||e instanceof or?0:(e instanceof ei?e.code===mn.Redirect||e.code===mn.SupersededByNewNavigation:!1)?2:1),Ce(e=>e!==2),He(1)).subscribe(()=>{n()})}var Bn=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=u(wh);stateManager=u(Ry);options=u(Fa,{optional:!0})||{};pendingTasks=u(Tr);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=u(Cf);urlSerializer=u(Na);location=u(Jn);urlHandlingStrategy=u(yf);injector=u(Xe);_events=new I;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=u(KS);injectorCleanup=u(XS,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=u(La,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!u(vd,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new Re;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,o=kt(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(i,o),i instanceof ei&&i.code!==mn.Redirect&&i.code!==mn.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof Ti)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(i instanceof Xs){let a=i.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),l=_({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||PV(r.source)},a);this.scheduleNavigation(s,Ws,null,l,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}FB(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Ws,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,i,r,o)=>{this.navigateToSyncWithBrowser(e,r,i,o)})}navigateToSyncWithBrowser(e,i,r,o){let a=r?.navigationId?r:null,s=r?.\u0275routerUrl??e;if(r?.\u0275routerUrl&&(o=te(_({},o),{browserUrl:e})),r){let c=_({},r);delete c.navigationId,delete c.\u0275routerPageId,delete c.\u0275routerUrl,Object.keys(c).length!==0&&(o.state=c)}let l=this.parseUrl(s);this.scheduleNavigation(l,i,a,o).catch(c=>{this.disposed||this.injector.get(Qn)(c)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return kt(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(Sy),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,i={}){let{relativeTo:r,queryParams:o,fragment:a,queryParamsHandling:s,preserveFragment:l}=i,c=l?this.currentUrlTree.fragment:a,d=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":d=_(_({},this.currentUrlTree.queryParams),o);break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=o||null}d!==null&&(d=this.removeEmptyProps(d));let m;try{let f=r?r.snapshot:this.routerState.snapshot.root;m=MS(f)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),m=this.currentUrlTree.root}return SS(m,e,d,c??null,this.urlSerializer)}navigateByUrl(e,i={skipLocationChange:!1}){let r=qs(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,Ws,null,i)}navigate(e,i={skipLocationChange:!1}){return BV(e),this.navigateByUrl(this.createUrlTree(e,i),i)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(qn(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,i){let r;if(i===!0?r=_({},_S):i===!1?r=_({},dy):r=_(_({},dy),i),qs(e))return aS(this.currentUrlTree,e,r);let o=this.parseUrl(e);return aS(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((i,[r,o])=>(o!=null&&(i[r]=o),i),{})}scheduleNavigation(e,i,r,o,a){if(this.disposed)return Promise.resolve(!1);let s,l,c;a?(s=a.resolve,l=a.reject,c=a.promise):c=new Promise((m,f)=>{s=m,l=f});let d=this.pendingTasks.add();return wf(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(d))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:s,reject:l,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(Promise.reject.bind(Promise))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function BV(t){for(let n=0;n<t.length;n++)if(t[n]==null)throw new R(4008,!1)}var Cd=class{};var JS=(()=>{class t{router;injector;preloadingStrategy;loader;subscription;constructor(e,i,r,o){this.router=e,this.injector=i,this.preloadingStrategy=r,this.loader=o}setUpPreloading(){this.subscription=this.router.events.pipe(Ce(e=>e instanceof Ti),lo(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription?.unsubscribe()}processRoutes(e,i){let r=[];for(let o of i){o.providers&&!o._injector&&(o._injector=Fs(o.providers,e,""));let a=o._injector??e;o._loadedNgModuleFactory&&!o._loadedInjector&&(o._loadedInjector=o._loadedNgModuleFactory.create(a).injector);let s=o._loadedInjector??a;(o.loadChildren&&!o._loadedRoutes&&o.canLoad===void 0||o.loadComponent&&!o._loadedComponent)&&r.push(this.preloadConfig(a,o)),(o.children||o._loadedRoutes)&&r.push(this.processRoutes(s,o.children??o._loadedRoutes))}return nt(r).pipe(oo())}preloadConfig(e,i){return this.preloadingStrategy.preload(i,()=>{if(e.destroyed)return ne(null);let r;i.loadChildren&&i.canLoad===void 0?r=nt(this.loader.loadChildren(e,i)):r=ne(null);let o=r.pipe(Nt(a=>a===null?ne(void 0):(i._loadedRoutes=a.routes,i._loadedInjector=a.injector,i._loadedNgModuleFactory=a.factory,this.processRoutes(a.injector??e,a.routes))));if(i.loadComponent&&!i._loadedComponent){let a=this.loader.loadComponent(e,i);return nt([o,a]).pipe(oo())}else return o})}static \u0275fac=function(i){return new(i||t)(A(Bn),A(Xe),A(Cd),A(vf))};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),eI=new C(""),jV=(()=>{class t{options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource=Ws;restoredId=0;store={};urlSerializer=u(Na);zone=u(B);viewportScroller=u($v);transitions=u(Cf);constructor(e){this.options=e,this.options.scrollPositionRestoration||="disabled",this.options.anchorScrolling||="disabled"}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(e=>{e instanceof rr?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=e.navigationTrigger,this.restoredId=e.restoredState?e.restoredState.navigationId:0):e instanceof Ti?(this.lastId=e.id,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.urlAfterRedirects).fragment)):e instanceof or&&e.code===Zs.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(e=>{if(!(e instanceof Ys)||e.scrollBehavior==="manual")return;let i={behavior:"instant"};e.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0],i):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(e.position,i):e.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(e.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0])})}scheduleScrollEvent(e,i){let r=kt(this.transitions.currentNavigation)?.extras.scroll;this.zone.runOutsideAngular(async()=>{await new Promise(o=>{setTimeout(o),typeof requestAnimationFrame<"u"&&requestAnimationFrame(o)}),this.zone.run(()=>{this.transitions.events.next(new Ys(e,this.lastSource==="popstate"?this.store[this.restoredId]:null,i,r))})})}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(i){zc()};static \u0275prov=w({token:t,factory:t.\u0275fac})}return t})();function Ny(t,...n){return On([{provide:La,multi:!0,useValue:t},[],{provide:Vr,useFactory:tI},{provide:Gc,multi:!0,useFactory:nI},n.map(e=>e.\u0275providers)])}function tI(){return u(Bn).routerState.root}function wd(t,n){return{\u0275kind:t,\u0275providers:n}}function nI(){let t=u(Y);return n=>{let e=t.get(Ut);if(n!==e.components[0])return;let i=t.get(Bn),r=t.get(iI);t.get(Py)===1&&i.initialNavigation(),t.get(aI,null,{optional:!0})?.setUpPreloading(),t.get(eI,null,{optional:!0})?.init(),i.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var iI=new C("",{factory:()=>new I}),Py=new C("",{factory:()=>1});function rI(){let t=[{provide:dh,useValue:!0},{provide:Py,useValue:0},Ls(()=>{let n=u(Y);return n.get(Bv,Promise.resolve()).then(()=>new Promise(i=>{let r=n.get(Bn),o=n.get(iI);wf(r,()=>{i(!0)}),n.get(Cf).afterPreactivation=()=>(i(!0),o.closed?ne(void 0):o),r.initialNavigation()}))})];return wd(2,t)}function oI(){let t=[Ls(()=>{u(Bn).setUpLocationChangeListener()}),{provide:Py,useValue:2}];return wd(3,t)}var aI=new C("");function sI(t){return wd(0,[{provide:aI,useExisting:JS},{provide:Cd,useExisting:t}])}function lI(){return wd(8,[Dy,{provide:vd,useExisting:Dy}])}function cI(t){Di("NgRouterViewTransitions");let n=[{provide:Ty,useValue:QS},{provide:ky,useValue:_({skipNextTransition:!!t?.skipInitialTransition},t)}];return wd(9,n)}var dI=[Jn,{provide:Na,useClass:Br},Bn,Pa,{provide:Vr,useFactory:tI},vf,[]],Fy=(()=>{class t{constructor(){}static forRoot(e,i){return{ngModule:t,providers:[dI,[],{provide:La,multi:!0,useValue:e},[],i?.errorHandler?{provide:Oy,useValue:i.errorHandler}:[],{provide:Fa,useValue:i||{}},i?.useHash?HV():zV(),UV(),i?.preloadingStrategy?sI(i.preloadingStrategy).\u0275providers:[],i?.initialNavigation?$V(i):[],i?.bindToComponentInputs?lI().\u0275providers:[],i?.enableViewTransitions?cI().\u0275providers:[],WV()]}}static forChild(e){return{ngModule:t,providers:[{provide:La,multi:!0,useValue:e}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=P({})}return t})();function UV(){return{provide:eI,useFactory:()=>{let t=u($v),n=u(Fa);return n.scrollOffset&&t.setOffset(n.scrollOffset),new jV(n)}}}function HV(){return{provide:Nr,useClass:jv}}function zV(){return{provide:Nr,useClass:Ph}}function $V(t){return[t.initialNavigation==="disabled"?oI().\u0275providers:[],t.initialNavigation==="enabledBlocking"?rI().\u0275providers:[]]}var Ay=new C("");function WV(){return[{provide:Ay,useFactory:nI},{provide:Gc,multi:!0,useExisting:Ay}]}var mI=[];var Ly;try{Ly=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Ly=!1}var ke=(()=>{class t{_platformId=u(wa);isBrowser=this._platformId?VM(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Ly)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var By;function hI(){if(By==null){let t=typeof document<"u"?document.head:null;By=!!(t&&(t.createShadowRoot||t.attachShadow))}return By}function Vy(t){if(hI()){let n=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function xd(){let t=typeof document<"u"&&document?document.activeElement:null;for(;t&&t.shadowRoot;){let n=t.shadowRoot.activeElement;if(n===t)break;t=n}return t}function en(t){return t.composedPath?t.composedPath()[0]:t.target}function jy(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var xf=new WeakMap,lt=(()=>{class t{_appRef;_injector=u(Y);_environmentInjector=u(Xe);load(e){let i=this._appRef=this._appRef||this._injector.get(Ut),r=xf.get(i);r||(r={loaders:new Set,refs:[]},xf.set(i,r),i.onDestroy(()=>{xf.get(i)?.refs.forEach(o=>o.destroy()),xf.delete(i)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(Rh(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Mt(t){return t==null?"":typeof t=="string"?t:`${t}px`}function nl(t){return Array.isArray(t)?t:[t]}function jr(t,n=0){return fI(t)?Number(t):arguments.length===2?n:0}function fI(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function Vn(t){return t instanceof U?t.nativeElement:t}var qV=new C("cdk-dir-doc",{providedIn:"root",factory:()=>u(J)}),ZV=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function pI(t){let n=t?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?ZV.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var Ct=(()=>{class t{get value(){return this.valueSignal()}valueSignal=Fe("ltr");change=new K;constructor(){let e=u(qV,{optional:!0});if(e){let i=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(pI(i||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ki=(function(t){return t[t.NORMAL=0]="NORMAL",t[t.NEGATED=1]="NEGATED",t[t.INVERTED=2]="INVERTED",t})(ki||{}),Ef,Ba;function Df(){if(Ba==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return Ba=!1,Ba;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)Ba=!0;else{let t=Element.prototype.scrollTo;t?Ba=!/\{\s*\[native code\]\s*\}/.test(t.toString()):Ba=!1}}return Ba}function il(){if(typeof document!="object"||!document)return ki.NORMAL;if(Ef==null){let t=document.createElement("div"),n=t.style;t.dir="rtl",n.width="1px",n.overflow="auto",n.visibility="hidden",n.pointerEvents="none",n.position="absolute";let e=document.createElement("div"),i=e.style;i.width="2px",i.height="1px",t.appendChild(e),document.body.appendChild(t),Ef=ki.NORMAL,t.scrollLeft===0&&(t.scrollLeft=1,Ef=t.scrollLeft===0?ki.NEGATED:ki.INVERTED),t.remove()}return Ef}var me=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=P({})}return t})();var YV=20,Ur=(()=>{class t{_ngZone=u(B);_platform=u(ke);_renderer=u(It).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new I;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let i=this.scrollContainers.get(e);i&&(i.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=YV){return this._platform.isBrowser?new de(i=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(nm(e)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):ne()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(e,i){let r=this.getAncestorScrollContainers(e);return this.scrolled(i).pipe(Ce(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let i=[];return this.scrollContainers.forEach((r,o)=>{this._scrollableContainsElement(o,e)&&i.push(o)}),i}_scrollableContainsElement(e,i){let r=Vn(i),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Mf=(()=>{class t{elementRef=u(U);scrollDispatcher=u(Ur);ngZone=u(B);dir=u(Ct,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new I;_renderer=u(xe);_cleanupScroll;_elementScrolled=new I;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let i=this.elementRef.nativeElement,r=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=r?e.end:e.start),e.right==null&&(e.right=r?e.start:e.end),e.bottom!=null&&(e.top=i.scrollHeight-i.clientHeight-e.bottom),r&&il()!=ki.NORMAL?(e.left!=null&&(e.right=i.scrollWidth-i.clientWidth-e.left),il()==ki.INVERTED?e.left=e.right:il()==ki.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=i.scrollWidth-i.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let i=this.elementRef.nativeElement;Df()?i.scrollTo(e):(e.top!=null&&(i.scrollTop=e.top),e.left!=null&&(i.scrollLeft=e.left))}measureScrollOffset(e){let i="left",r="right",o=this.elementRef.nativeElement;if(e=="top")return o.scrollTop;if(e=="bottom")return o.scrollHeight-o.clientHeight-o.scrollTop;let a=this.dir&&this.dir.value=="rtl";return e=="start"?e=a?r:i:e=="end"&&(e=a?i:r),a&&il()==ki.INVERTED?e==i?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:a&&il()==ki.NEGATED?e==i?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==i?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static \u0275fac=function(i){return new(i||t)};static \u0275dir=W({type:t,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return t})(),QV=20,ar=(()=>{class t{_platform=u(ke);_listeners;_viewportSize=null;_change=new I;_document=u(J);constructor(){let e=u(B),i=u(It).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[i.listen("window","resize",r),i.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:i,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+i,height:r,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,i=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect(),a=-o.top||e.body?.scrollTop||i.scrollY||r.scrollTop||0,s=-o.left||e.body?.scrollLeft||i.scrollX||r.scrollLeft||0;return{top:a,left:s}}change(e=QV){return e>0?this._change.pipe(nm(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ni=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=P({})}return t})(),Uy=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=P({imports:[me,ni,me,ni]})}return t})();var Hy={},et=class t{_appId=u(wo);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,e=!1){return this._appId!=="ng"&&(n+=this._appId),Hy.hasOwnProperty(n)||(Hy[n]=0),`${n}${e?t._infix+"-":""}${Hy[n]++}`}static \u0275fac=function(e){return new(e||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})};var Ed=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},Oi=class extends Ed{component;viewContainerRef;injector;projectableNodes;bindings;constructor(n,e,i,r,o){super(),this.component=n,this.viewContainerRef=e,this.injector=i,this.projectableNodes=r,this.bindings=o||null}},Ri=class extends Ed{templateRef;viewContainerRef;context;injector;constructor(n,e,i,r){super(),this.templateRef=n,this.viewContainerRef=e,this.context=i,this.injector=r}get origin(){return this.templateRef.elementRef}attach(n,e=this.context){return this.context=e,super.attach(n)}detach(){return this.context=void 0,super.detach()}},zy=class extends Ed{element;constructor(n){super(),this.element=n instanceof U?n.nativeElement:n}},Mo=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof Oi)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof Ri)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof zy)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},Dd=class extends Mo{outletElement;_appRef;_defaultInjector;constructor(n,e,i){super(),this.outletElement=n,this._appRef=e,this._defaultInjector=i}attachComponentPortal(n){let e;if(n.viewContainerRef){let i=n.injector||n.viewContainerRef.injector,r=i.get(Yi,null,{optional:!0})||void 0;e=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:i,ngModuleRef:r,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let i=this._appRef,r=n.injector||this._defaultInjector||Y.NULL,o=r.get(Xe,i.injector);e=Rh(n.component,{elementInjector:r,environmentInjector:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),i.attachView(e.hostView),this.setDisposeFn(()=>{i.viewCount>0&&i.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=n,e}attachTemplatePortal(n){let e=n.viewContainerRef,i=e.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return i.rootNodes.forEach(r=>this.outletElement.appendChild(r)),i.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(i);r!==-1&&e.remove(r)}),this._attachedPortal=n,i}attachDomPortal=n=>{let e=n.element;e.parentNode;let i=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(i,e),this.outletElement.appendChild(e),this._attachedPortal=n,super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(e,i)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}};var So=(()=>{class t extends Mo{_moduleRef=u(Yi,{optional:!0});_document=u(J);_viewContainerRef=u(jt);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new K;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let i=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,r=i.createComponent(e.component,{index:i.length,injector:e.injector||i.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return i!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(e){e.setAttachedHost(this);let i=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=i,this.attached.emit(i),i}attachDomPortal=e=>{let i=e.element;i.parentNode;let r=this._document.createComment("dom-portal");e.setAttachedHost(this),i.parentNode.insertBefore(r,i),this._getRootNode().appendChild(i),this._attachedPortal=e,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(i,r)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(i){return new(i||t)};static \u0275dir=W({type:t,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[Ie]})}return t})(),Io=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=P({})}return t})();function Gt(t,...n){return n.length?n.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}var gI=Df();function ol(t){return new Sf(t.get(ar),t.get(J))}var Sf=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,e){this._viewportRuler=n,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||"",this._previousHTMLStyles.top=n.style.top||"",n.style.left=Mt(-this._previousScrollPosition.left),n.style.top=Mt(-this._previousScrollPosition.top),n.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,e=this._document.body,i=n.style,r=e.style,o=i.scrollBehavior||"",a=r.scrollBehavior||"";this._isEnabled=!1,i.left=this._previousHTMLStyles.left,i.top=this._previousHTMLStyles.top,n.classList.remove("cdk-global-scrollblock"),gI&&(i.scrollBehavior=r.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),gI&&(i.scrollBehavior=o,r.scrollBehavior=a)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,i=this._viewportRuler.getViewportSize();return e.scrollHeight>i.height||e.scrollWidth>i.width}};function xI(t,n){return new If(t.get(Ur),t.get(B),t.get(ar),n)}var If=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,e,i,r){this._scrollDispatcher=n,this._ngZone=e,this._viewportRuler=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(Ce(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=n.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var Md=class{enable(){}disable(){}attach(){}};function $y(t,n){return n.some(e=>{let i=t.bottom<e.top,r=t.top>e.bottom,o=t.right<e.left,a=t.left>e.right;return i||r||o||a})}function _I(t,n){return n.some(e=>{let i=t.top<e.top,r=t.bottom>e.bottom,o=t.left<e.left,a=t.right>e.right;return i||r||o||a})}function zr(t,n){return new Tf(t.get(Ur),t.get(ar),t.get(B),n)}var Tf=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,e,i,r){this._scrollDispatcher=n,this._viewportRuler=e,this._ngZone=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:i,height:r}=this._viewportRuler.getViewportSize();$y(e,[{width:i,height:r,bottom:r,right:i,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},EI=(()=>{class t{_injector=u(Y);constructor(){}noop=()=>new Md;close=e=>xI(this._injector,e);block=()=>ol(this._injector);reposition=e=>zr(this._injector,e);static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ai=class{positionStrategy;scrollStrategy=new Md;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let e=Object.keys(n);for(let i of e)n[i]!==void 0&&(this[i]=n[i])}}};var kf=class{connectionPair;scrollableViewProperties;constructor(n,e){this.connectionPair=n,this.scrollableViewProperties=e}};var DI=(()=>{class t{_attachedOverlays=[];_document=u(J);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let i=this._attachedOverlays.indexOf(e);i>-1&&this._attachedOverlays.splice(i,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,i,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(i):!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),MI=(()=>{class t extends DI{_ngZone=u(B);_renderer=u(It).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let i=this._attachedOverlays;for(let r=i.length-1;r>-1;r--){let o=i[r];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=Tt(t)))(r||t)}})();static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),SI=(()=>{class t extends DI{_platform=u(ke);_ngZone=u(B);_renderer=u(It).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let i=this._document.body,r={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(i,"pointerdown",this._pointerDownListener,r),o.listen(i,"click",this._clickListener,r),o.listen(i,"auxclick",this._clickListener,r),o.listen(i,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=i.style.cursor,i.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=en(e)};_clickListener=e=>{let i=en(e),r=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:i;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let a=o.length-1;a>-1;a--){let s=o[a],l=s._outsidePointerEvents;if(!(!s.hasAttached()||!this.canReceiveEvent(s,e,l))){if(bI(s.overlayElement,i)||bI(s.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>l.next(e)):l.next(e)}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=Tt(t)))(r||t)}})();static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function bI(t,n){let e=typeof ShadowRoot<"u"&&ShadowRoot,i=n;for(;i;){if(i===t)return!0;i=e&&i instanceof ShadowRoot?i.host:i.parentNode}return!1}var II=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=O({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2,changeDetection:0})}return t})(),Af=(()=>{class t{_platform=u(ke);_containerElement;_document=u(J);_styleLoader=u(lt);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||jy()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<r.length;o++)r[o].remove()}let i=this._document.createElement("div");i.classList.add(e),jy()?i.setAttribute("platform","test"):this._platform.isBrowser||i.setAttribute("platform","server"),this._document.body.appendChild(i),this._containerElement=i}_loadStyles(){this._styleLoader.load(II)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Wy=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,e,i,r){this._renderer=e,this._ngZone=i,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",r)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Gy(t){return t&&t.nodeType===1}var rl=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new I;_attachments=new I;_detachments=new I;_positionStrategy;_scrollStrategy;_locationChanges=Re.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new I;_outsidePointerEvents=new I;_afterNextRenderRef;constructor(n,e,i,r,o,a,s,l,c,d=!1,m,f){this._portalOutlet=n,this._host=e,this._pane=i,this._config=r,this._ngZone=o,this._keyboardDispatcher=a,this._document=s,this._location=l,this._outsideClickDispatcher=c,this._animationsDisabled=d,this._injector=m,this._renderer=f,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(n);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=ct(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=_(_({},this._config),n),this._updateElementSize()}setDirection(n){this._config=te(_({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr"}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=Mt(this._config.width),n.height=Mt(this._config.height),n.minWidth=Mt(this._config.minWidth),n.minHeight=Mt(this._config.minHeight),n.maxWidth=Mt(this._config.maxWidth),n.maxHeight=Mt(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none"}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Gy(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new Wy(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,e,i){let r=nl(e||[]).filter(o=>!!o);r.length&&(i?n.classList.add(...r):n.classList.remove(...r))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=ct(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(e){if(n)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}},vI="cdk-overlay-connected-position-bounding-box",KV=/([A-Za-z%]+)$/;function ja(t,n){return new Of(n,t.get(ar),t.get(J),t.get(ke),t.get(Af))}var Of=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new I;_resizeSubscription=Re.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,e,i,r,o){this._viewportRuler=e,this._document=i,this._platform=r,this._overlayContainer=o,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(vI),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,e=this._overlayRect,i=this._viewportRect,r=this._containerRect,o=[],a;for(let s of this._preferredPositions){let l=this._getOriginPoint(n,r,s),c=this._getOverlayPoint(l,e,s),d=this._getOverlayFit(c,e,i,s);if(d.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(s,l);return}if(this._canFitWithFlexibleDimensions(d,c,i)){o.push({position:s,origin:l,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(l,s)});continue}(!a||a.overlayFit.visibleArea<d.visibleArea)&&(a={overlayFit:d,overlayPoint:c,originPoint:l,position:s,overlayRect:e})}if(o.length){let s=null,l=-1;for(let c of o){let d=c.boundingBoxRect.width*c.boundingBoxRect.height*(c.position.weight||1);d>l&&(l=d,s=c)}this._isPushed=!1,this._applyPosition(s.position,s.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Va(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(vI),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof U?this._origin.nativeElement:Gy(this._origin)?this._origin:null}_getOriginPoint(n,e,i){let r;if(i.originX=="center")r=n.left+n.width/2;else{let a=this._isRtl()?n.right:n.left,s=this._isRtl()?n.left:n.right;r=i.originX=="start"?a:s}e.left<0&&(r-=e.left);let o;return i.originY=="center"?o=n.top+n.height/2:o=i.originY=="top"?n.top:n.bottom,e.top<0&&(o-=e.top),{x:r,y:o}}_getOverlayPoint(n,e,i){let r;i.overlayX=="center"?r=-e.width/2:i.overlayX==="start"?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let o;return i.overlayY=="center"?o=-e.height/2:o=i.overlayY=="top"?0:-e.height,{x:n.x+r,y:n.y+o}}_getOverlayFit(n,e,i,r){let o=CI(e),{x:a,y:s}=n,l=this._getOffset(r,"x"),c=this._getOffset(r,"y");l&&(a+=l),c&&(s+=c);let d=0-a,m=a+o.width-i.width,f=0-s,h=s+o.height-i.height,b=this._subtractOverflows(o.width,d,m),D=this._subtractOverflows(o.height,f,h),S=b*D;return{visibleArea:S,isCompletelyWithinViewport:o.width*o.height===S,fitsInViewportVertically:D===o.height,fitsInViewportHorizontally:b==o.width}}_canFitWithFlexibleDimensions(n,e,i){if(this._hasFlexibleDimensions){let r=i.bottom-e.y,o=i.right-e.x,a=yI(this._overlayRef.getConfig().minHeight),s=yI(this._overlayRef.getConfig().minWidth),l=n.fitsInViewportVertically||a!=null&&a<=r,c=n.fitsInViewportHorizontally||s!=null&&s<=o;return l&&c}return!1}_pushOverlayOnScreen(n,e,i){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let r=CI(e),o=this._viewportRect,a=Math.max(n.x+r.width-o.width,0),s=Math.max(n.y+r.height-o.height,0),l=Math.max(o.top-i.top-n.y,0),c=Math.max(o.left-i.left-n.x,0),d=0,m=0;return r.width<=o.width?d=c||-a:d=n.x<this._getViewportMarginStart()?o.left-i.left-n.x:0,r.height<=o.height?m=l||-s:m=n.y<this._getViewportMarginTop()?o.top-i.top-n.y:0,this._previousPushAmount={x:d,y:m},{x:n.x+d,y:n.y+m}}_applyPosition(n,e){if(this._setTransformOrigin(n),this._setOverlayElementStyles(e,n),this._setBoundingBoxStyles(e,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let i=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!JV(this._lastScrollVisibility,i)){let r=new kf(n,i);this._positionChanges.next(r)}this._lastScrollVisibility=i}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),i,r=n.overlayY;n.overlayX==="center"?i="center":this._isRtl()?i=n.overlayX==="start"?"right":"left":i=n.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${i} ${r}`}_calculateBoundingBoxRect(n,e){let i=this._viewportRect,r=this._isRtl(),o,a,s;if(e.overlayY==="top")a=n.y,o=i.height-a+this._getViewportMarginBottom();else if(e.overlayY==="bottom")s=i.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=i.height-s+this._getViewportMarginTop();else{let h=Math.min(i.bottom-n.y+i.top,n.y),b=this._lastBoundingBoxSize.height;o=h*2,a=n.y-h,o>b&&!this._isInitialRender&&!this._growAfterOpen&&(a=n.y-b/2)}let l=e.overlayX==="start"&&!r||e.overlayX==="end"&&r,c=e.overlayX==="end"&&!r||e.overlayX==="start"&&r,d,m,f;if(c)f=i.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),d=n.x-this._getViewportMarginStart();else if(l)m=n.x,d=i.right-n.x-this._getViewportMarginEnd();else{let h=Math.min(i.right-n.x+i.left,n.x),b=this._lastBoundingBoxSize.width;d=h*2,m=n.x-h,d>b&&!this._isInitialRender&&!this._growAfterOpen&&(m=n.x-b/2)}return{top:a,left:m,bottom:s,right:f,width:d,height:o}}_setBoundingBoxStyles(n,e){let i=this._calculateBoundingBoxRect(n,e);!this._isInitialRender&&!this._growAfterOpen&&(i.height=Math.min(i.height,this._lastBoundingBoxSize.height),i.width=Math.min(i.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left="0",r.bottom=r.right="auto",r.maxHeight=r.maxWidth="",r.width=r.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;r.width=Mt(i.width),r.height=Mt(i.height),r.top=Mt(i.top)||"auto",r.bottom=Mt(i.bottom)||"auto",r.left=Mt(i.left)||"auto",r.right=Mt(i.right)||"auto",e.overlayX==="center"?r.alignItems="center":r.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?r.justifyContent="center":r.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(r.maxHeight=Mt(o)),a&&(r.maxWidth=Mt(a))}this._lastBoundingBoxSize=i,Va(this._boundingBox.style,r)}_resetBoundingBoxStyles(){Va(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){Va(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(n,e){let i={},r=this._hasExactPosition(),o=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(r){let d=this._viewportRuler.getViewportScrollPosition();Va(i,this._getExactOverlayY(e,n,d)),Va(i,this._getExactOverlayX(e,n,d))}else i.position="static";let s="",l=this._getOffset(e,"x"),c=this._getOffset(e,"y");l&&(s+=`translateX(${l}px) `),c&&(s+=`translateY(${c}px)`),i.transform=s.trim(),a.maxHeight&&(r?i.maxHeight=Mt(a.maxHeight):o&&(i.maxHeight="")),a.maxWidth&&(r?i.maxWidth=Mt(a.maxWidth):o&&(i.maxWidth="")),Va(this._pane.style,i)}_getExactOverlayY(n,e,i){let r={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,n);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i)),n.overlayY==="bottom"){let a=this._document.documentElement.clientHeight;r.bottom=`${a-(o.y+this._overlayRect.height)}px`}else r.top=Mt(o.y);return r}_getExactOverlayX(n,e,i){let r={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,n);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i));let a;if(this._isRtl()?a=n.overlayX==="end"?"left":"right":a=n.overlayX==="end"?"right":"left",a==="right"){let s=this._document.documentElement.clientWidth;r.right=`${s-(o.x+this._overlayRect.width)}px`}else r.left=Mt(o.x);return r}_getScrollVisibility(){let n=this._getOriginRect(),e=this._pane.getBoundingClientRect(),i=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:_I(n,i),isOriginOutsideView:$y(n,i),isOverlayClipped:_I(e,i),isOverlayOutsideView:$y(e,i)}}_subtractOverflows(n,...e){return e.reduce((i,r)=>i-Math.max(r,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,i=this._viewportRuler.getViewportScrollPosition();return{top:i.top+this._getViewportMarginTop(),left:i.left+this._getViewportMarginStart(),right:i.left+n-this._getViewportMarginEnd(),bottom:i.top+e-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,e){return e==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&nl(n).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof U)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let e=n.width||0,i=n.height||0;return{top:n.y,bottom:n.y+i,left:n.x,right:n.x+e,height:i,width:e}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();n&&(e.style.display="block");let i=e.getBoundingClientRect();return n&&(e.style.display=""),i}};function Va(t,n){for(let e in n)n.hasOwnProperty(e)&&(t[e]=n[e]);return t}function yI(t){if(typeof t!="number"&&t!=null){let[n,e]=t.split(KV);return!e||e==="px"?parseFloat(n):null}return t||null}function CI(t){return{top:Math.floor(t.top),right:Math.floor(t.right),bottom:Math.floor(t.bottom),left:Math.floor(t.left),width:Math.floor(t.width),height:Math.floor(t.height)}}function JV(t,n){return t===n?!0:t.isOriginClipped===n.isOriginClipped&&t.isOriginOutsideView===n.isOriginOutsideView&&t.isOverlayClipped===n.isOverlayClipped&&t.isOverlayOutsideView===n.isOverlayOutsideView}var wI="cdk-global-overlay-wrapper";function ko(t){return new Rf}var Rf=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(n){let e=n.getConfig();this._overlayRef=n,this._width&&!e.width&&n.updateSize({width:this._width}),this._height&&!e.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(wI),this._isDisposed=!1}top(n=""){return this._bottomOffset="",this._topOffset=n,this._alignItems="flex-start",this}left(n=""){return this._xOffset=n,this._xPosition="left",this}bottom(n=""){return this._topOffset="",this._bottomOffset=n,this._alignItems="flex-end",this}right(n=""){return this._xOffset=n,this._xPosition="right",this}start(n=""){return this._xOffset=n,this._xPosition="start",this}end(n=""){return this._xOffset=n,this._xPosition="end",this}width(n=""){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=""){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=""){return this.left(n),this._xPosition="center",this}centerVertically(n=""){return this.top(n),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,i=this._overlayRef.getConfig(),{width:r,height:o,maxWidth:a,maxHeight:s}=i,l=(r==="100%"||r==="100vw")&&(!a||a==="100%"||a==="100vw"),c=(o==="100%"||o==="100vh")&&(!s||s==="100%"||s==="100vh"),d=this._xPosition,m=this._xOffset,f=this._overlayRef.getConfig().direction==="rtl",h="",b="",D="";l?D="flex-start":d==="center"?(D="center",f?b=m:h=m):f?d==="left"||d==="end"?(D="flex-end",h=m):(d==="right"||d==="start")&&(D="flex-start",b=m):d==="left"||d==="start"?(D="flex-start",h=m):(d==="right"||d==="end")&&(D="flex-end",b=m),n.position=this._cssPosition,n.marginLeft=l?"0":h,n.marginTop=c?"0":this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=l?"0":b,e.justifyContent=D,e.alignItems=c?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,i=e.style;e.classList.remove(wI),i.justifyContent=i.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position="",this._overlayRef=null,this._isDisposed=!0}},TI=(()=>{class t{_injector=u(Y);constructor(){}global(){return ko()}flexibleConnectedTo(e){return ja(this._injector,e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Sd=new C("OVERLAY_DEFAULT_CONFIG");function Ni(t,n){t.get(lt).load(II);let e=t.get(Af),i=t.get(J),r=t.get(et),o=t.get(Ut),a=t.get(Ct),s=t.get(xe,null,{optional:!0})||t.get(It).createRenderer(null,null),l=new Ai(n),c=t.get(Sd,null,{optional:!0})?.usePopover??!0;l.direction=l.direction||a.value,"showPopover"in i.body?l.usePopover=n?.usePopover??c:l.usePopover=!1;let d=i.createElement("div"),m=i.createElement("div");d.id=r.getId("cdk-overlay-"),d.classList.add("cdk-overlay-pane"),m.appendChild(d),l.usePopover&&(m.setAttribute("popover","manual"),m.classList.add("cdk-overlay-popover"));let f=l.usePopover?l.positionStrategy?.getPopoverInsertionPoint?.():null;return Gy(f)?f.after(m):f?.type==="parent"?f.element.appendChild(m):e.getContainerElement().appendChild(m),new rl(new Dd(d,o,t),m,d,l,t.get(B),t.get(MI),i,t.get(Jn),t.get(SI),n?.disableAnimations??t.get(Fc,null,{optional:!0})==="NoopAnimations",t.get(Xe),s)}var kI=(()=>{class t{scrollStrategies=u(EI);_positionBuilder=u(TI);_injector=u(Y);constructor(){}create(e){return Ni(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ej=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],tj=new C("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let t=u(Y);return()=>zr(t)}}),To=(()=>{class t{elementRef=u(U);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=W({type:t,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"]})}return t})(),OI=new C("cdk-connected-overlay-default-config"),al=(()=>{class t{_dir=u(Ct,{optional:!0});_injector=u(Y);_overlayRef;_templatePortal;_backdropSubscription=Re.EMPTY;_attachSubscription=Re.EMPTY;_detachSubscription=Re.EMPTY;_positionSubscription=Re.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=u(tj);_ngZone=u(B);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!="string"&&this._assignConfig(e)}backdropClick=new K;positionChange=new K;attach=new K;detach=new K;overlayKeydown=new K;overlayOutsideClick=new K;constructor(){let e=u(Xt),i=u(jt),r=u(OI,{optional:!0}),o=u(Sd,{optional:!0});this.usePopover=o?.usePopover===!1?null:"global",this._templatePortal=new Ri(e,i),this.scrollStrategy=this._scrollStrategyFactory(),r&&this._assignConfig(r)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:"ltr"}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=ej);let e=this._overlayRef=Ni(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(i=>{this.overlayKeydown.next(i),i.keyCode===27&&!this.disableClose&&!Gt(i)&&(i.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(i=>{let r=this._getOriginElement(),o=en(i);(!r||r!==o&&!r.contains(o))&&this.overlayOutsideClick.next(i)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),i=new Ai({direction:this._dir||"ltr",positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(i.height=this.height),(this.minWidth||this.minWidth===0)&&(i.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(i.minHeight=this.minHeight),this.backdropClass&&(i.backdropClass=this.backdropClass),this.panelClass&&(i.panelClass=this.panelClass),i}_updatePositionStrategy(e){let i=this.positions.map(r=>({originX:r.originX,originY:r.originY,overlayX:r.overlayX,overlayY:r.overlayY,offsetX:r.offsetX||this.offsetX,offsetY:r.offsetY||this.offsetY,panelClass:r.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(i).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?"global":this.usePopover)}_createPositionStrategy(){let e=ja(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof To?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof To?this.origin.elementRef.nativeElement:this.origin instanceof U?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(i=>this.backdropClick.emit(i)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(lc(()=>this.positionChange.observers.length>0)).subscribe(i=>{this._ngZone.run(()=>this.positionChange.emit(i)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static \u0275fac=function(i){return new(i||t)};static \u0275dir=W({type:t,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",Z],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",Z],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",Z],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",Z],push:[2,"cdkConnectedOverlayPush","push",Z],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",Z],usePopover:[0,"cdkConnectedOverlayUsePopover","usePopover"],matchWidth:[2,"cdkConnectedOverlayMatchWidth","matchWidth",Z],_config:[0,"cdkConnectedOverlay","_config"]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],features:[it]})}return t})(),xn=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=P({providers:[kI],imports:[me,Io,Uy,Uy]})}return t})();function Ua(t){return t.buttons===0||t.detail===0}function Ha(t){let n=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var Id;function RI(){if(Id==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>Id=!0}))}finally{Id=Id||!1}return Id}function sl(t){return RI()?t:!!t.capture}var AI=new C("cdk-input-modality-detector-options"),NI={ignoreKeys:[18,17,224,91,16]},PI=650,qy={passive:!0,capture:!0},FI=(()=>{class t{_platform=u(ke);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new At(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(i=>i===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=en(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<PI||(this._modality.next(Ua(e)?"keyboard":"mouse"),this._mostRecentTarget=en(e))};_onTouchstart=e=>{if(Ha(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=en(e)};constructor(){let e=u(B),i=u(J),r=u(AI,{optional:!0});if(this._options=_(_({},NI),r),this.modalityDetected=this._modality.pipe(sc(1)),this.modalityChanged=this.modalityDetected.pipe(im()),this._platform.isBrowser){let o=u(It).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(i,"keydown",this._onKeydown,qy),o.listen(i,"mousedown",this._onMousedown,qy),o.listen(i,"touchstart",this._onTouchstart,qy)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Td=(function(t){return t[t.IMMEDIATE=0]="IMMEDIATE",t[t.EVENTUAL=1]="EVENTUAL",t})(Td||{}),LI=new C("cdk-focus-monitor-default-options"),Nf=sl({passive:!0,capture:!0}),ii=(()=>{class t{_ngZone=u(B);_platform=u(ke);_inputModalityDetector=u(FI);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=u(J);_stopInputModalityDetector=new I;constructor(){let e=u(LI,{optional:!0});this._detectionMode=e?.detectionMode||Td.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let i=en(e);for(let r=i;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,i=!1){let r=Vn(e);if(!this._platform.isBrowser||r.nodeType!==1)return ne();let o=Vy(r)||this._document,a=this._elementInfo.get(r);if(a)return i&&(a.checkChildren=!0),a.subject;let s={checkChildren:i,subject:new I,rootNode:o};return this._elementInfo.set(r,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(e){let i=Vn(e),r=this._elementInfo.get(i);r&&(r.subject.complete(),this._setClasses(i),this._elementInfo.delete(i),this._removeGlobalListeners(r))}focusVia(e,i,r){let o=Vn(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([s,l])=>this._originChanged(s,i,l)):(this._setOrigin(i),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,i)=>this.stopMonitoring(i))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===Td.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,i){e.classList.toggle("cdk-focused",!!i),e.classList.toggle("cdk-touch-focused",i==="touch"),e.classList.toggle("cdk-keyboard-focused",i==="keyboard"),e.classList.toggle("cdk-mouse-focused",i==="mouse"),e.classList.toggle("cdk-program-focused",i==="program")}_setOrigin(e,i=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&i,this._detectionMode===Td.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?PI:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,i){let r=this._elementInfo.get(i),o=en(e);!r||!r.checkChildren&&i!==o||this._originChanged(i,this._getFocusOrigin(o),r)}_onBlur(e,i){let r=this._elementInfo.get(i);!r||r.checkChildren&&e.relatedTarget instanceof Node&&i.contains(e.relatedTarget)||(this._setClasses(i),this._emitOrigin(r,null))}_emitOrigin(e,i){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(i))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let i=e.rootNode,r=this._rootNodeFocusListenerCount.get(i)||0;r||this._ngZone.runOutsideAngular(()=>{i.addEventListener("focus",this._rootNodeFocusAndBlurListener,Nf),i.addEventListener("blur",this._rootNodeFocusAndBlurListener,Nf)}),this._rootNodeFocusListenerCount.set(i,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(ze(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let i=e.rootNode;if(this._rootNodeFocusListenerCount.has(i)){let r=this._rootNodeFocusListenerCount.get(i);r>1?this._rootNodeFocusListenerCount.set(i,r-1):(i.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Nf),i.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Nf),this._rootNodeFocusListenerCount.delete(i))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,i,r){this._setClasses(e,i),this._emitOrigin(r,i),this._lastFocusOrigin=i}_getClosestElementsInfo(e){let i=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&i.push([o,r])}),i}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:i,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!i||i===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(i))return!0}return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Oo=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=O({type:t,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2,changeDetection:0})}return t})(),Pf;function ij(){if(Pf===void 0&&(Pf=null,typeof window<"u")){let t=window;t.trustedTypes!==void 0&&(Pf=t.trustedTypes.createPolicy("angular#components",{createHTML:n=>n}))}return Pf}function za(t){return ij()?.createHTML(t)||t}function BI(t,n,e){let i=e.sanitize(bt.HTML,n);t.innerHTML=za(i||"")}var VI=new Set,$a,ll=(()=>{class t{_platform=u(ke);_nonce=u(xa,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):oj}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&rj(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function rj(t,n){if(!VI.has(t))try{$a||($a=document.createElement("style"),n&&$a.setAttribute("nonce",n),$a.setAttribute("type","text/css"),document.head.appendChild($a)),$a.sheet&&($a.sheet.insertRule(`@media ${t} {body{ }}`,0),VI.add(t))}catch(e){console.error(e)}}function oj(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}var kd=(()=>{class t{_mediaMatcher=u(ll);_zone=u(B);_queries=new Map;_destroySubject=new I;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return jI(nl(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){let r=jI(nl(e)).map(a=>this._registerQuery(a).observable),o=ds(r);return o=ao(o.pipe(He(1)),o.pipe(sc(1),oc(0))),o.pipe(le(a=>{let s={matches:!1,breakpoints:{}};return a.forEach(({matches:l,query:c})=>{s.matches=s.matches||l,s.breakpoints[c]=l}),s}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let i=this._mediaMatcher.matchMedia(e),o={observable:new de(a=>{let s=l=>this._zone.run(()=>a.next(l));return i.addListener(s),()=>{i.removeListener(s)}}).pipe(Pt(i),le(({matches:a})=>({query:e,matches:a})),ze(this._destroySubject)),mql:i};return this._queries.set(e,o),o}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function jI(t){return t.map(n=>n.split(",")).reduce((n,e)=>n.concat(e)).map(n=>n.trim())}var aj=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var cl=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=P({providers:[aj]})}return t})();var dl=(()=>{class t{_platform=u(ke);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return lj(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let i=sj(gj(e));if(i&&(UI(i)===-1||!this.isVisible(i)))return!1;let r=e.nodeName.toLowerCase(),o=UI(e);return e.hasAttribute("contenteditable")?o!==-1:r==="iframe"||r==="object"||this._platform.WEBKIT&&this._platform.IOS&&!fj(e)?!1:r==="audio"?e.hasAttribute("controls")?o!==-1:!1:r==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,i){return pj(e)&&!this.isDisabled(e)&&(i?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function sj(t){try{return t.frameElement}catch{return null}}function lj(t){return!!(t.offsetWidth||t.offsetHeight||typeof t.getClientRects=="function"&&t.getClientRects().length)}function cj(t){let n=t.nodeName.toLowerCase();return n==="input"||n==="select"||n==="button"||n==="textarea"}function dj(t){return mj(t)&&t.type=="hidden"}function uj(t){return hj(t)&&t.hasAttribute("href")}function mj(t){return t.nodeName.toLowerCase()=="input"}function hj(t){return t.nodeName.toLowerCase()=="a"}function $I(t){if(!t.hasAttribute("tabindex")||t.tabIndex===void 0)return!1;let n=t.getAttribute("tabindex");return!!(n&&!isNaN(parseInt(n,10)))}function UI(t){if(!$I(t))return null;let n=parseInt(t.getAttribute("tabindex")||"",10);return isNaN(n)?-1:n}function fj(t){let n=t.nodeName.toLowerCase(),e=n==="input"&&t.type;return e==="text"||e==="password"||n==="select"||n==="textarea"}function pj(t){return dj(t)?!1:cj(t)||uj(t)||t.hasAttribute("contenteditable")||$I(t)}function gj(t){return t.ownerDocument&&t.ownerDocument.defaultView||window}var Ff=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(n){this._enabled=n,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_enabled=!0;constructor(n,e,i,r,o=!1,a){this._element=n,this._checker=e,this._ngZone=i,this._document=r,this._injector=a,o||this.attachAnchors()}destroy(){let n=this._startAnchor,e=this._endAnchor;n&&(n.removeEventListener("focus",this.startAnchorListener),n.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(n)))})}focusFirstTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(n)))})}focusLastTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(n)))})}_getRegionBoundary(n){let e=this._element.querySelectorAll(`[cdk-focus-region-${n}], [cdkFocusRegion${n}], [cdk-focus-${n}]`);return n=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(n){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let i=this._getFirstTabbableElement(e);return i?.focus(n),!!i}return e.focus(n),!0}return this.focusFirstTabbableElement(n)}focusFirstTabbableElement(n){let e=this._getRegionBoundary("start");return e&&e.focus(n),!!e}focusLastTabbableElement(n){let e=this._getRegionBoundary("end");return e&&e.focus(n),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let i=0;i<e.length;i++){let r=e[i].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[i]):null;if(r)return r}return null}_getLastTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let i=e.length-1;i>=0;i--){let r=e[i].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[i]):null;if(r)return r}return null}_createAnchor(){let n=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,n),n.classList.add("cdk-visually-hidden"),n.classList.add("cdk-focus-trap-anchor"),n.setAttribute("aria-hidden","true"),n}_toggleAnchorTabIndex(n,e){n?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(n){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_executeOnStable(n){this._injector?ct(n,{injector:this._injector}):setTimeout(n)}},Yy=(()=>{class t{_checker=u(dl);_ngZone=u(B);_document=u(J);_injector=u(Y);constructor(){u(lt).load(Oo)}create(e,i=!1){return new Ff(e,this._checker,this._ngZone,this._document,i,this._injector)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var WI=new C("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),GI=new C("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),_j=0,Od=(()=>{class t{_ngZone=u(B);_defaultOptions=u(GI,{optional:!0});_liveElement;_document=u(J);_sanitizer=u(Si);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=u(WI,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...i){let r=this._defaultOptions,o,a;return i.length===1&&typeof i[0]=="number"?a=i[0]:[o,a]=i,this.clear(),clearTimeout(this._previousTimeout),o||(o=r&&r.politeness?r.politeness:"polite"),a==null&&r&&(a=r.duration),this._liveElement.setAttribute("aria-live",o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(s=>this._currentResolve=s)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:BI(this._liveElement,e,this._sanitizer),typeof a=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),a)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",i=this._document.getElementsByClassName(e),r=this._document.createElement("div");for(let o=0;o<i.length;o++)i[o].remove();return r.classList.add(e),r.classList.add("cdk-visually-hidden"),r.setAttribute("aria-atomic","true"),r.setAttribute("aria-live","polite"),r.id=`cdk-live-announcer-${_j++}`,this._document.body.appendChild(r),r}_exposeAnnouncerToModals(e){let i=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<i.length;r++){let o=i[r],a=o.getAttribute("aria-owns");a?a.indexOf(e)===-1&&o.setAttribute("aria-owns",a+" "+e):o.setAttribute("aria-owns",e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ro=(function(t){return t[t.NONE=0]="NONE",t[t.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",t[t.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",t})(Ro||{}),HI="cdk-high-contrast-black-on-white",zI="cdk-high-contrast-white-on-black",Zy="cdk-high-contrast-active",qI=(()=>{class t{_platform=u(ke);_hasCheckedHighContrastMode=!1;_document=u(J);_breakpointSubscription;constructor(){this._breakpointSubscription=u(kd).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return Ro.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let i=this._document.defaultView||window,r=i&&i.getComputedStyle?i.getComputedStyle(e):null,o=(r&&r.backgroundColor||"").replace(/ /g,"");switch(e.remove(),o){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return Ro.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return Ro.BLACK_ON_WHITE}return Ro.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(Zy,HI,zI),this._hasCheckedHighContrastMode=!0;let i=this.getHighContrastMode();i===Ro.BLACK_ON_WHITE?e.add(Zy,HI):i===Ro.WHITE_ON_BLACK&&e.add(Zy,zI)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Wa=(()=>{class t{constructor(){u(qI)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=P({imports:[cl]})}return t})();function bj(t,n){}var Ao=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext};var Xy=(()=>{class t extends Mo{_elementRef=u(U);_focusTrapFactory=u(Yy);_config;_interactivityChecker=u(dl);_ngZone=u(B);_focusMonitor=u(ii);_renderer=u(xe);_changeDetectorRef=u(ve);_injector=u(Y);_platform=u(ke);_document=u(J);_portalOutlet;_focusTrapped=new I;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=u(Ao,{optional:!0})||new Ao,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let i=this._ariaLabelledByQueue.indexOf(e);i>-1&&(this._ariaLabelledByQueue.splice(i,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let i=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),i}attachTemplatePortal(e){this._portalOutlet.hasAttached();let i=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),i}attachDomPortal=e=>{this._portalOutlet.hasAttached();let i=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),i};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,i){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let r=()=>{o(),a(),e.removeAttribute("tabindex")},o=this._renderer.listen(e,"blur",r),a=this._renderer.listen(e,"mousedown",r)})),e.focus(i)}_focusByCssSelector(e,i){let r=this._elementRef.nativeElement.querySelector(e);r&&this._forceFocus(r,i)}_trapFocus(e){this._isDestroyed||ct(()=>{let i=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||i.focus(e);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,i=null;if(typeof e=="string"?i=this._document.querySelector(e):typeof e=="boolean"?i=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(i=e),this._config.restoreFocus&&i&&typeof i.focus=="function"){let r=xd(),o=this._elementRef.nativeElement;(!r||r===this._document.body||r===o||o.contains(r))&&(this._focusMonitor?(this._focusMonitor.focusVia(i,this._closeInteractionType),this._closeInteractionType=null):i.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,i=xd();return e===i||e.contains(i)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=xd()))}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=O({type:t,selectors:[["cdk-dialog-container"]],viewQuery:function(i,r){if(i&1&&Te(So,7),i&2){let o;Q(o=X())&&(r._portalOutlet=o.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(i,r){i&2&&fe("id",r._config.id||null)("role",r._config.role)("aria-modal",r._config.ariaModal)("aria-labelledby",r._config.ariaLabel?null:r._ariaLabelledByQueue[0])("aria-label",r._config.ariaLabel)("aria-describedby",r._config.ariaDescribedBy||null)},features:[Ie],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(i,r){i&1&&vt(0,bj,0,0,"ng-template",0)},dependencies:[So],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2})}return t})(),Rd=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new I;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(n,e){this.overlayRef=n,this.config=e,this.disableClose=e.disableClose,this.backdropClick=n.backdropClick(),this.keydownEvents=n.keydownEvents(),this.outsidePointerEvents=n.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(i=>{i.keyCode===27&&!this.disableClose&&!Gt(i)&&(i.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=n.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(n,e){if(this._canClose(n)){let i=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),i.next(n),i.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(n="",e=""){return this.overlayRef.updateSize({width:n,height:e}),this}addPanelClass(n){return this.overlayRef.addPanelClass(n),this}removePanelClass(n){return this.overlayRef.removePanelClass(n),this}_canClose(n){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(n,e,this.componentInstance))}},vj=new C("DialogScrollStrategy",{providedIn:"root",factory:()=>{let t=u(Y);return()=>ol(t)}}),yj=new C("DialogData"),Cj=new C("DefaultDialogConfig");function wj(t){let n=Fe(t),e=new K;return{valueSignal:n,get value(){return n()},change:e,ngOnDestroy(){e.complete()}}}var Ky=(()=>{class t{_injector=u(Y);_defaultOptions=u(Cj,{optional:!0});_parentDialog=u(t,{optional:!0,skipSelf:!0});_overlayContainer=u(Af);_idGenerator=u(et);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new I;_afterOpenedAtThisLevel=new I;_ariaHiddenElements=new Map;_scrollStrategy=u(vj);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=hi(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Pt(void 0)));constructor(){}open(e,i){let r=this._defaultOptions||new Ao;i=_(_({},r),i),i.id=i.id||this._idGenerator.getId("cdk-dialog-"),i.id&&this.getDialogById(i.id);let o=this._getOverlayConfig(i),a=Ni(this._injector,o),s=new Rd(a,i),l=this._attachContainer(a,s,i);if(s.containerInstance=l,!this.openDialogs.length){let c=this._overlayContainer.getContainerElement();l._focusTrapped?l._focusTrapped.pipe(He(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(c)}):this._hideNonDialogContentFromAssistiveTechnology(c)}return this._attachDialogContent(e,s,l,i),this.openDialogs.push(s),s.closed.subscribe(()=>this._removeOpenDialog(s,!0)),this.afterOpened.next(s),s}closeAll(){Qy(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(i=>i.id===e)}ngOnDestroy(){Qy(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),Qy(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let i=new Ai({positionStrategy:e.positionStrategy||ko().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(i.backdropClass=e.backdropClass),i}_attachContainer(e,i,r){let o=r.injector||r.viewContainerRef?.injector,a=[{provide:Ao,useValue:r},{provide:Rd,useValue:i},{provide:rl,useValue:e}],s;r.container?typeof r.container=="function"?s=r.container:(s=r.container.type,a.push(...r.container.providers(r))):s=Xy;let l=new Oi(s,r.viewContainerRef,Y.create({parent:o||this._injector,providers:a}));return e.attach(l).instance}_attachDialogContent(e,i,r,o){if(e instanceof Xt){let a=this._createInjector(o,i,r,void 0),s={$implicit:o.data,dialogRef:i};o.templateContext&&(s=_(_({},s),typeof o.templateContext=="function"?o.templateContext():o.templateContext)),r.attachTemplatePortal(new Ri(e,null,s,a))}else{let a=this._createInjector(o,i,r,this._injector),s=r.attachComponentPortal(new Oi(e,o.viewContainerRef,a));i.componentRef=s,i.componentInstance=s.instance}}_createInjector(e,i,r,o){let a=e.injector||e.viewContainerRef?.injector,s=[{provide:yj,useValue:e.data},{provide:Rd,useValue:i}];return e.providers&&(typeof e.providers=="function"?s.push(...e.providers(i,e,r)):s.push(...e.providers)),e.direction&&(!a||!a.get(Ct,null,{optional:!0}))&&s.push({provide:Ct,useValue:wj(e.direction)}),Y.create({parent:a||o,providers:s})}_removeOpenDialog(e,i){let r=this.openDialogs.indexOf(e);r>-1&&(this.openDialogs.splice(r,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((o,a)=>{o?a.setAttribute("aria-hidden",o):a.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),i&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let i=e.parentElement.children;for(let r=i.length-1;r>-1;r--){let o=i[r];o!==e&&o.nodeName!=="SCRIPT"&&o.nodeName!=="STYLE"&&!o.hasAttribute("aria-live")&&!o.hasAttribute("popover")&&(this._ariaHiddenElements.set(o,o.getAttribute("aria-hidden")),o.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Qy(t,n){let e=t.length;for(;e--;)n(t[e])}var ZI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=P({providers:[Ky],imports:[xn,Io,Wa,Io]})}return t})();function $r(t){return t!=null&&`${t}`!="false"}var YI={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var xj=new C("MATERIAL_ANIMATIONS"),QI=null;function Jy(){return u(xj,{optional:!0})?.animationsDisabled||u(Fc,{optional:!0})==="NoopAnimations"?"di-disabled":(QI??=u(ll).matchMedia("(prefers-reduced-motion)").matches,QI?"reduced-motion":"enabled")}function $e(){return Jy()!=="enabled"}var Ej=200,Lf=class{_letterKeyStream=new I;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new I;selectedItem=this._selectedItem;constructor(n,e){let i=typeof e?.debounceInterval=="number"?e.debounceInterval:Ej;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(n),this._setupKeyHandler(i)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(n){this._selectedItemIndex=n}setItems(n){this._items=n}handleKey(n){let e=n.keyCode;n.key&&n.key.length===1?this._letterKeyStream.next(n.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(n){this._letterKeyStream.pipe(Wt(e=>this._pressedLetters.push(e)),oc(n),Ce(()=>this._pressedLetters.length>0),le(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let i=1;i<this._items.length+1;i++){let r=(this._selectedItemIndex+i)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};var ul=class{_items;_activeItemIndex=Fe(-1);_activeItem=Fe(null);_wrap=!1;_typeaheadSubscription=Re.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=n=>n.disabled;constructor(n,e){this._items=n,n instanceof Ci?this._itemChangesSubscription=n.changes.subscribe(i=>this._itemsChanged(i.toArray())):Ki(n)&&(this._effectRef=vo(()=>this._itemsChanged(n()),{injector:e}))}tabOut=new I;change=new I;skipPredicate(n){return this._skipPredicateFn=n,this}withWrap(n=!0){return this._wrap=n,this}withVerticalOrientation(n=!0){return this._vertical=n,this}withHorizontalOrientation(n){return this._horizontal=n,this}withAllowedModifierKeys(n){return this._allowedModifierKeys=n,this}withTypeAhead(n=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new Lf(e,{debounceInterval:typeof n=="number"?n:void 0,skipPredicate:i=>this._skipPredicateFn(i)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(i=>{this.setActiveItem(i)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(n=!0){return this._homeAndEnd=n,this}withPageUpDown(n=!0,e=10){return this._pageUpAndDown={enabled:n,delta:e},this}setActiveItem(n){let e=this._activeItem();this.updateActiveItem(n),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(n){let e=n.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!n[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(o<a?o:a-1,-1);break}else return;default:(r||Gt(n,"shiftKey"))&&this._typeahead?.handleKey(n);return}this._typeahead?.reset(),n.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(n){let e=this._getItemsArray(),i=typeof n=="number"?n:e.indexOf(n),r=e[i];this._activeItem.set(r??null),this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(n){this._wrap?this._setActiveInWrapMode(n):this._setActiveInDefaultMode(n)}_setActiveInWrapMode(n){let e=this._getItemsArray();for(let i=1;i<=e.length;i++){let r=(this._activeItemIndex()+n*i+e.length)%e.length,o=e[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(n){this._setActiveItemByIndex(this._activeItemIndex()+n,n)}_setActiveItemByIndex(n,e){let i=this._getItemsArray();if(i[n]){for(;this._skipPredicateFn(i[n]);)if(n+=e,!i[n])return;this.setActiveItem(n)}}_getItemsArray(){return Ki(this._items)?this._items():this._items instanceof Ci?this._items.toArray():this._items}_itemsChanged(n){this._typeahead?.setItems(n);let e=this._activeItem();if(e){let i=n.indexOf(e);i>-1&&i!==this._activeItemIndex()&&(this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i))}}};var Ld=class extends ul{setActiveItem(n){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(n),this.activeItem&&this.activeItem.setActiveStyles()}};var Bd=class extends ul{_origin="program";setFocusOrigin(n){return this._origin=n,this}setActiveItem(n){super.setActiveItem(n),this.activeItem&&this.activeItem.focus(this._origin)}};var JI=" ";function n0(t,n,e){let i=Vf(t,n);e=e.trim(),!i.some(r=>r.trim()===e)&&(i.push(e),t.setAttribute(n,i.join(JI)))}function jf(t,n,e){let i=Vf(t,n);e=e.trim();let r=i.filter(o=>o!==e);r.length?t.setAttribute(n,r.join(JI)):t.removeAttribute(n)}function Vf(t,n){return t.getAttribute(n)?.match(/\S+/g)??[]}var eT="cdk-describedby-message",Bf="cdk-describedby-host",t0=0,Uf=(()=>{class t{_platform=u(ke);_document=u(J);_messageRegistry=new Map;_messagesContainer=null;_id=`${t0++}`;constructor(){u(lt).load(Oo),this._id=u(wo)+"-"+t0++}describe(e,i,r){if(!this._canBeDescribed(e,i))return;let o=e0(i,r);typeof i!="string"?(KI(i,this._id),this._messageRegistry.set(o,{messageElement:i,referenceCount:0})):this._messageRegistry.has(o)||this._createMessageElement(i,r),this._isElementDescribedByMessage(e,o)||this._addMessageReference(e,o)}removeDescription(e,i,r){if(!i||!this._isElementNode(e))return;let o=e0(i,r);if(this._isElementDescribedByMessage(e,o)&&this._removeMessageReference(e,o),typeof i=="string"){let a=this._messageRegistry.get(o);a&&a.referenceCount===0&&this._deleteMessageElement(o)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${Bf}="${this._id}"]`);for(let i=0;i<e.length;i++)this._removeCdkDescribedByReferenceIds(e[i]),e[i].removeAttribute(Bf);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,i){let r=this._document.createElement("div");KI(r,this._id),r.textContent=e,i&&r.setAttribute("role",i),this._createMessagesContainer(),this._messagesContainer.appendChild(r),this._messageRegistry.set(e0(e,i),{messageElement:r,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e="cdk-describedby-message-container",i=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let o=0;o<i.length;o++)i[o].remove();let r=this._document.createElement("div");r.style.visibility="hidden",r.classList.add(e),r.classList.add("cdk-visually-hidden"),this._platform.isBrowser||r.setAttribute("platform","server"),this._document.body.appendChild(r),this._messagesContainer=r}_removeCdkDescribedByReferenceIds(e){let i=Vf(e,"aria-describedby").filter(r=>r.indexOf(eT)!=0);e.setAttribute("aria-describedby",i.join(" "))}_addMessageReference(e,i){let r=this._messageRegistry.get(i);n0(e,"aria-describedby",r.messageElement.id),e.setAttribute(Bf,this._id),r.referenceCount++}_removeMessageReference(e,i){let r=this._messageRegistry.get(i);r.referenceCount--,jf(e,"aria-describedby",r.messageElement.id),e.removeAttribute(Bf)}_isElementDescribedByMessage(e,i){let r=Vf(e,"aria-describedby"),o=this._messageRegistry.get(i),a=o&&o.messageElement.id;return!!a&&r.indexOf(a)!=-1}_canBeDescribed(e,i){if(!this._isElementNode(e))return!1;if(i&&typeof i=="object")return!0;let r=i==null?"":`${i}`.trim(),o=e.getAttribute("aria-label");return r?!o||o.trim()!==r:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function e0(t,n){return typeof t=="string"?`${n||""}/${t}`:t}function KI(t,n){t.id||(t.id=`${eT}-${n}-${t0++}`)}function Dj(t,n){}var zf=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration},i0="mdc-dialog--open",tT="mdc-dialog--opening",nT="mdc-dialog--closing",Mj=150,Sj=75,Ij=(()=>{class t extends Xy{_animationStateChanged=new K;_animationsEnabled=!$e();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?rT(this._config.enterAnimationDuration)??Mj:0;_exitAnimationDuration=this._animationsEnabled?rT(this._config.exitAnimationDuration)??Sj:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(iT,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(tT,i0)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(i0),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(i0),this._animationsEnabled?(this._hostElement.style.setProperty(iT,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(nT)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(tT,nT)}_waitForAnimationToComplete(e,i){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(i,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let i=super.attachComponentPortal(e);return i.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),i}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Tt(t)))(r||t)}})();static \u0275cmp=O({type:t,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(i,r){i&2&&(dn("id",r._config.id),fe("aria-modal",r._config.ariaModal)("role",r._config.role)("aria-labelledby",r._config.ariaLabel?null:r._ariaLabelledByQueue[0])("aria-label",r._config.ariaLabel)("aria-describedby",r._config.ariaDescribedBy||null),ee("_mat-animation-noopable",!r._animationsEnabled)("mat-mdc-dialog-container-with-actions",r._actionSectionCount>0))},features:[Ie],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(i,r){i&1&&(p(0,"div",0)(1,"div",1),vt(2,Dj,0,0,"ng-template",2),g()())},dependencies:[So],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--mat-dialog-container-max-width, 560px);
  min-width: var(--mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--mat-dialog-container-elevation-shadow, none);
  border-radius: var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));
  background-color: var(--mat-dialog-container-color, var(--mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));
  line-height: var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));
  font-weight: var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));
  letter-spacing: var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));
  line-height: var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));
  font-weight: var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));
  letter-spacing: var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2})}return t})(),iT="--mat-dialog-transition-duration";function rT(t){return t==null?null:typeof t=="number"?t:t.endsWith("ms")?jr(t.substring(0,t.length-2)):t.endsWith("s")?jr(t.substring(0,t.length-1))*1e3:t==="0"?0:null}var Hf=(function(t){return t[t.OPEN=0]="OPEN",t[t.CLOSING=1]="CLOSING",t[t.CLOSED=2]="CLOSED",t})(Hf||{}),En=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new ro(1);_beforeClosed=new ro(1);_result;_closeFallbackTimeout;_state=Hf.OPEN;_closeInteractionType;constructor(n,e,i){this._ref=n,this._config=e,this._containerInstance=i,this.disableClose=e.disableClose,this.id=n.id,n.addPanelClass("mat-mdc-dialog-panel"),i._animationStateChanged.pipe(Ce(r=>r.state==="opened"),He(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),i._animationStateChanged.pipe(Ce(r=>r.state==="closed"),He(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),n.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),Tn(this.backdropClick(),this.keydownEvents().pipe(Ce(r=>r.keyCode===27&&!this.disableClose&&!Gt(r)))).subscribe(r=>{this.disableClose||(r.preventDefault(),oT(this,r.type==="keydown"?"keyboard":"mouse"))})}close(n){let e=this._config.closePredicate;e&&!e(n,this._config,this.componentInstance)||(this._result=n,this._containerInstance._animationStateChanged.pipe(Ce(i=>i.state==="closing"),He(1)).subscribe(i=>{this._beforeClosed.next(n),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),i.totalTime+100)}),this._state=Hf.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(n){let e=this._ref.config.positionStrategy;return n&&(n.left||n.right)?n.left?e.left(n.left):e.right(n.right):e.centerHorizontally(),n&&(n.top||n.bottom)?n.top?e.top(n.top):e.bottom(n.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(n="",e=""){return this._ref.updateSize(n,e),this}addPanelClass(n){return this._ref.addPanelClass(n),this}removePanelClass(n){return this._ref.removePanelClass(n),this}getState(){return this._state}_finishDialogClose(){this._state=Hf.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function oT(t,n,e){return t._closeInteractionType=n,t.close(e)}var Wr=new C("MatMdcDialogData"),Tj=new C("mat-mdc-dialog-default-options"),kj=new C("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let t=u(Y);return()=>ol(t)}}),jn=(()=>{class t{_defaultOptions=u(Tj,{optional:!0});_scrollStrategy=u(kj);_parentDialog=u(t,{optional:!0,skipSelf:!0});_idGenerator=u(et);_injector=u(Y);_dialog=u(Ky);_animationsDisabled=$e();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new I;_afterOpenedAtThisLevel=new I;dialogConfigClass=zf;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=hi(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Pt(void 0)));constructor(){this._dialogRefConstructor=En,this._dialogContainerType=Ij,this._dialogDataToken=Wr}open(e,i){let r;i=_(_({},this._defaultOptions||new zf),i),i.id=i.id||this._idGenerator.getId("mat-mdc-dialog-"),i.scrollStrategy=i.scrollStrategy||this._scrollStrategy();let o=this._dialog.open(e,te(_({},i),{positionStrategy:ko(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||i.enterAnimationDuration?.toLocaleString()==="0"||i.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:i},{provide:Ao,useValue:i}]},templateContext:()=>({dialogRef:r}),providers:(a,s,l)=>(r=new this._dialogRefConstructor(a,i,l),r.updatePosition(i?.position),[{provide:this._dialogContainerType,useValue:l},{provide:this._dialogDataToken,useValue:s.data},{provide:this._dialogRefConstructor,useValue:r}])}));return r.componentRef=o.componentRef,r.componentInstance=o.componentInstance,this.openDialogs.push(r),this.afterOpened.next(r),r.afterClosed().subscribe(()=>{let a=this.openDialogs.indexOf(r);a>-1&&(this.openDialogs.splice(a,1),this.openDialogs.length||this._getAfterAllClosed().next())}),r}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(i=>i.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let i=e.length;for(;i--;)e[i].close()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),sr=(()=>{class t{dialogRef=u(En,{optional:!0});_elementRef=u(U);_dialog=u(jn);ariaLabel;type="button";dialogResult;_matDialogClose;constructor(){}ngOnInit(){this.dialogRef||(this.dialogRef=sT(this._elementRef,this._dialog.openDialogs))}ngOnChanges(e){let i=e._matDialogClose||e._matDialogCloseResult;i&&(this.dialogResult=i.currentValue)}_onButtonClick(e){oT(this.dialogRef,e.screenX===0&&e.screenY===0?"keyboard":"mouse",this.dialogResult)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=W({type:t,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(i,r){i&1&&H("click",function(a){return r._onButtonClick(a)}),i&2&&fe("aria-label",r.ariaLabel||null)("type",r.type)},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],type:"type",dialogResult:[0,"mat-dialog-close","dialogResult"],_matDialogClose:[0,"matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],features:[it]})}return t})(),aT=(()=>{class t{_dialogRef=u(En,{optional:!0});_elementRef=u(U);_dialog=u(jn);constructor(){}ngOnInit(){this._dialogRef||(this._dialogRef=sT(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static \u0275fac=function(i){return new(i||t)};static \u0275dir=W({type:t})}return t})(),lr=(()=>{class t extends aT{id=u(et).getId("mat-mdc-dialog-title-");_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Tt(t)))(r||t)}})();static \u0275dir=W({type:t,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(i,r){i&2&&dn("id",r.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],features:[Ie]})}return t})(),cr=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=W({type:t,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],features:[mv([Mf])]})}return t})(),$f=(()=>{class t extends aT{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Tt(t)))(r||t)}})();static \u0275dir=W({type:t,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:6,hostBindings:function(i,r){i&2&&ee("mat-mdc-dialog-actions-align-start",r.align==="start")("mat-mdc-dialog-actions-align-center",r.align==="center")("mat-mdc-dialog-actions-align-end",r.align==="end")},inputs:{align:"align"},features:[Ie]})}return t})();function sT(t,n){let e=t.nativeElement.parentElement;for(;e&&!e.classList.contains("mat-mdc-dialog-container");)e=e.parentElement;return e?n.find(i=>i.id===e.id):null}var No=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=P({providers:[jn],imports:[ZI,xn,Io,me]})}return t})();var fT=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,i){this._renderer=e,this._elementRef=i}setProperty(e,i){this._renderer.setProperty(this._elementRef.nativeElement,e,i)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(i){return new(i||t)(T(xe),T(U))};static \u0275dir=W({type:t})}return t})(),Oj=(()=>{class t extends fT{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Tt(t)))(r||t)}})();static \u0275dir=W({type:t,features:[Ie]})}return t})(),Fo=new C("");var Rj={provide:Fo,useExisting:St(()=>Ga),multi:!0};function Aj(){let t=Kn()?Kn().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var Nj=new C(""),Ga=(()=>{class t extends fT{_compositionMode;_composing=!1;constructor(e,i,r){super(e,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!Aj())}writeValue(e){let i=e??"";this.setProperty("value",i)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(i){return new(i||t)(T(xe),T(U),T(Nj,8))};static \u0275dir=W({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&H("input",function(a){return r._handleInput(a.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(a){return r._compositionEnd(a.target.value)})},standalone:!1,features:[Me([Rj]),Ie]})}return t})();function o0(t){return t==null||a0(t)===0}function a0(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var Lo=new C(""),Wd=new C(""),Pj=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Gr=class{static min(n){return Fj(n)}static max(n){return Lj(n)}static required(n){return Bj(n)}static requiredTrue(n){return Vj(n)}static email(n){return jj(n)}static minLength(n){return Uj(n)}static maxLength(n){return Hj(n)}static pattern(n){return pT(n)}static nullValidator(n){return qf()}static compose(n){return CT(n)}static composeAsync(n){return wT(n)}};function Fj(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e<t?{min:{min:t,actual:n.value}}:null}}function Lj(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e>t?{max:{max:t,actual:n.value}}:null}}function Bj(t){return o0(t.value)?{required:!0}:null}function Vj(t){return t.value===!0?null:{required:!0}}function jj(t){return o0(t.value)||Pj.test(t.value)?null:{email:!0}}function Uj(t){return n=>{let e=n.value?.length??a0(n.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function Hj(t){return n=>{let e=n.value?.length??a0(n.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function pT(t){if(!t)return qf;let n,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),n=new RegExp(e)):(e=t.toString(),n=t),i=>{if(o0(i.value))return null;let r=i.value;return n.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function qf(t){return null}function gT(t){return t!=null}function _T(t){return xo(t)?nt(t):t}function bT(t){let n={};return t.forEach(e=>{n=e!=null?_(_({},n),e):n}),Object.keys(n).length===0?null:n}function vT(t,n){return n.map(e=>e(t))}function zj(t){return!t.validate}function yT(t){return t.map(n=>zj(n)?n:e=>n.validate(e))}function CT(t){if(!t)return null;let n=t.filter(gT);return n.length==0?null:function(e){return bT(vT(e,n))}}function s0(t){return t!=null?CT(yT(t)):null}function wT(t){if(!t)return null;let n=t.filter(gT);return n.length==0?null:function(e){let i=vT(e,n).map(_T);return ic(i).pipe(le(bT))}}function l0(t){return t!=null?wT(yT(t)):null}function lT(t,n){return t===null?[n]:Array.isArray(t)?[...t,n]:[t,n]}function xT(t){return t._rawValidators}function ET(t){return t._rawAsyncValidators}function r0(t){return t?Array.isArray(t)?t:[t]:[]}function Zf(t,n){return Array.isArray(t)?t.includes(n):t===n}function cT(t,n){let e=r0(n);return r0(t).forEach(r=>{Zf(e,r)||e.push(r)}),e}function dT(t,n){return r0(n).filter(e=>!Zf(t,e))}var Yf=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=s0(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=l0(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,e){return this.control?this.control.hasError(n,e):!1}getError(n,e){return this.control?this.control.getError(n,e):null}},qr=class extends Yf{name;get formDirective(){return null}get path(){return null}},Un=class extends Yf{_parent=null;name=null;valueAccessor=null},Qf=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var Bo=(()=>{class t extends Qf{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(T(Un,2))};static \u0275dir=W({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&ee("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[Ie]})}return t})(),c0=(()=>{class t extends Qf{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(T(qr,10))};static \u0275dir=W({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(i,r){i&2&&ee("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[Ie]})}return t})();var Vd="VALID",Gf="INVALID",ml="PENDING",jd="DISABLED",Po=class{},Xf=class extends Po{value;source;constructor(n,e){super(),this.value=n,this.source=e}},Hd=class extends Po{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e}},zd=class extends Po{touched;source;constructor(n,e){super(),this.touched=n,this.source=e}},hl=class extends Po{status;source;constructor(n,e){super(),this.status=n,this.source=e}},Kf=class extends Po{source;constructor(n){super(),this.source=n}},Jf=class extends Po{source;constructor(n){super(),this.source=n}};function DT(t){return(rp(t)?t.validators:t)||null}function $j(t){return Array.isArray(t)?s0(t):t||null}function MT(t,n){return(rp(n)?n.asyncValidators:t)||null}function Wj(t){return Array.isArray(t)?l0(t):t||null}function rp(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function Gj(t,n,e){let i=t.controls;if(!(n?Object.keys(i):i).length)throw new R(1e3,"");if(!i[e])throw new R(1001,"")}function qj(t,n,e){t._forEachChild((i,r)=>{if(e[r]===void 0)throw new R(-1002,"")})}var ep=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this._assignValidators(n),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return kt(this.statusReactive)}set status(n){kt(()=>this.statusReactive.set(n))}_status=un(()=>this.statusReactive());statusReactive=Fe(void 0);get valid(){return this.status===Vd}get invalid(){return this.status===Gf}get pending(){return this.status===ml}get disabled(){return this.status===jd}get enabled(){return this.status!==jd}errors;get pristine(){return kt(this.pristineReactive)}set pristine(n){kt(()=>this.pristineReactive.set(n))}_pristine=un(()=>this.pristineReactive());pristineReactive=Fe(!0);get dirty(){return!this.pristine}get touched(){return kt(this.touchedReactive)}set touched(n){kt(()=>this.touchedReactive.set(n))}_touched=un(()=>this.touchedReactive());touchedReactive=Fe(!1);get untouched(){return!this.touched}_events=new I;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(cT(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(cT(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(dT(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(dT(n,this._rawAsyncValidators))}hasValidator(n){return Zf(this._rawValidators,n)}hasAsyncValidator(n){return Zf(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let e=this.touched===!1;this.touched=!0;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(te(_({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new zd(!0,i))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n))}markAsUntouched(n={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:i})}),n.onlySelf||this._parent?._updateTouched(n,i),e&&n.emitEvent!==!1&&this._events.next(new zd(!1,i))}markAsDirty(n={}){let e=this.pristine===!0;this.pristine=!1;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(te(_({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new Hd(!1,i))}markAsPristine(n={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,i),e&&n.emitEvent!==!1&&this._events.next(new Hd(!0,i))}markAsPending(n={}){this.status=ml;let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new hl(this.status,e)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(te(_({},n),{sourceControl:e}))}disable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=jd,this.errors=null,this._forEachChild(r=>{r.disable(te(_({},n),{onlySelf:!0}))}),this._updateValue();let i=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Xf(this.value,i)),this._events.next(new hl(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(te(_({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Vd,this._forEachChild(i=>{i.enable(te(_({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(te(_({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(n,e){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Vd||this.status===ml)&&this._runAsyncValidator(i,n.emitEvent)}let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Xf(this.value,e)),this._events.next(new hl(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(te(_({},n),{sourceControl:e}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?jd:Vd}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=ml,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:n!==!1};let i=_T(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((i,r)=>i&&i._find(r),this)}getError(n,e){let i=e?this.get(e):this;return i?.errors?i.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,e,i){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||i)&&this._events.next(new hl(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,i)}_initObservables(){this.valueChanges=new K,this.statusChanges=new K}_calculateStatus(){return this._allControlsDisabled()?jd:this.errors?Gf:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(ml)?ml:this._anyControlsHaveStatus(Gf)?Gf:Vd}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,e){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,n.onlySelf||this._parent?._updatePristine(n,e),r&&this._events.next(new Hd(this.pristine,e))}_updateTouched(n={},e){this.touched=this._anyControlsTouched(),this._events.next(new zd(this.touched,e)),n.onlySelf||this._parent?._updateTouched(n,e)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){rp(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=$j(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=Wj(this._rawAsyncValidators)}},fl=class extends ep{constructor(n,e,i){super(DT(e),MT(i,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,e){return this.controls[n]?this.controls[n]:(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(n,e,i={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(n,e={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(n,e,i={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,e={}){qj(this,!0,n),Object.keys(n).forEach(i=>{Gj(this,!0,i),this.controls[i].setValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){n!=null&&(Object.keys(n).forEach(i=>{let r=this.controls[i];r&&r.patchValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n={},e={}){this._forEachChild((i,r)=>{i.reset(n?n[r]:null,te(_({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Jf(this))}getRawValue(){return this._reduceChildren({},(n,e,i)=>(n[i]=e.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(e,i)=>i._syncPendingControls()?!0:e);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(e=>{let i=this.controls[e];i&&n(i,e)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[e,i]of Object.entries(this.controls))if(this.contains(e)&&n(i))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(e,i,r)=>((i.enabled||this.disabled)&&(e[r]=i.value),e))}_reduceChildren(n,e){let i=n;return this._forEachChild((r,o)=>{i=e(i,r,o)}),i}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}};var pl=new C("",{factory:()=>op}),op="always";function ST(t,n){return[...n.path,t]}function $d(t,n,e=op){d0(t,n),n.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&n.valueAccessor.setDisabledState?.(t.disabled),Yj(t,n),Xj(t,n),Qj(t,n),Zj(t,n)}function tp(t,n,e=!0){let i=()=>{};n?.valueAccessor?.registerOnChange(i),n?.valueAccessor?.registerOnTouched(i),ip(t,n),t&&(n._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function np(t,n){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function Zj(t,n){if(n.valueAccessor.setDisabledState){let e=i=>{n.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(e),n._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function d0(t,n){let e=xT(t);n.validator!==null?t.setValidators(lT(e,n.validator)):typeof e=="function"&&t.setValidators([e]);let i=ET(t);n.asyncValidator!==null?t.setAsyncValidators(lT(i,n.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();np(n._rawValidators,r),np(n._rawAsyncValidators,r)}function ip(t,n){let e=!1;if(t!==null){if(n.validator!==null){let r=xT(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==n.validator);o.length!==r.length&&(e=!0,t.setValidators(o))}}if(n.asyncValidator!==null){let r=ET(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==n.asyncValidator);o.length!==r.length&&(e=!0,t.setAsyncValidators(o))}}}let i=()=>{};return np(n._rawValidators,i),np(n._rawAsyncValidators,i),e}function Yj(t,n){n.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&IT(t,n)})}function Qj(t,n){n.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&IT(t,n),t.updateOn!=="submit"&&t.markAsTouched()})}function IT(t,n){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Xj(t,n){let e=(i,r)=>{n.valueAccessor.writeValue(i),r&&n.viewToModelUpdate(i)};t.registerOnChange(e),n._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function TT(t,n){t==null,d0(t,n)}function Kj(t,n){return ip(t,n)}function u0(t,n){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(n,e.currentValue)}function Jj(t){return Object.getPrototypeOf(t.constructor)===Oj}function kT(t,n){t._syncPendingControls(),n.forEach(e=>{let i=e.control;i.updateOn==="submit"&&i._pendingChange&&(e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function m0(t,n){if(!n)return null;Array.isArray(n);let e,i,r;return n.forEach(o=>{o.constructor===Ga?e=o:Jj(o)?i=o:r=o}),r||i||e||null}function eU(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}var tU={provide:qr,useExisting:St(()=>gl)},Ud=Promise.resolve(),gl=(()=>{class t extends qr{callSetDisabledState;get submitted(){return kt(this.submittedReactive)}_submitted=un(()=>this.submittedReactive());submittedReactive=Fe(!1);_directives=new Set;form;ngSubmit=new K;options;constructor(e,i,r){super(),this.callSetDisabledState=r,this.form=new fl({},s0(e),l0(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){Ud.then(()=>{let i=this._findContainer(e.path);e.control=i.registerControl(e.name,e.control),$d(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){Ud.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){Ud.then(()=>{let i=this._findContainer(e.path),r=new fl({});TT(r,e),i.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){Ud.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,i){Ud.then(()=>{this.form.get(e.path).setValue(i)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),kT(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new Kf(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(i){return new(i||t)(T(Lo,10),T(Wd,10),T(pl,8))};static \u0275dir=W({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(i,r){i&1&&H("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Me([tU]),Ie]})}return t})();function uT(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function mT(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var Dn=class extends ep{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,i){super(DT(e),MT(i,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),rp(e)&&(e.nonNullable||e.initialValueIsDefault)&&(mT(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,e={}){this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new Jf(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){uT(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){uT(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){mT(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var nU=t=>t instanceof Dn;var iU={provide:Un,useExisting:St(()=>Gd)},hT=Promise.resolve(),Gd=(()=>{class t extends Un{_changeDetectorRef;callSetDisabledState;control=new Dn;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new K;constructor(e,i,r,o,a,s){super(),this._changeDetectorRef=a,this.callSetDisabledState=s,this._parent=e,this._setValidators(i),this._setAsyncValidators(r),this.valueAccessor=m0(this,o)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let i=e.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),u0(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){$d(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){hT.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let i=e.isDisabled.currentValue,r=i!==0&&Z(i);hT.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?ST(e,this._parent):[e]}static \u0275fac=function(i){return new(i||t)(T(qr,9),T(Lo,10),T(Wd,10),T(Fo,10),T(ve,8),T(pl,8))};static \u0275dir=W({type:t,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[Me([iU]),Ie,it]})}return t})();var rU=(()=>{class t extends qr{callSetDisabledState;get submitted(){return kt(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=un(()=>this._submittedReactive());_submittedReactive=Fe(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,i,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(i)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(ip(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let i=this.form.get(e.path);return $d(i,e,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),i}getControl(e){return this.form.get(e.path)}removeControl(e){tp(e.control||null,e,!1),eU(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,i){this.form.get(e.path).setValue(i)}onReset(){this.resetForm()}resetForm(e=void 0,i={}){this.form.reset(e,i),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,kT(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new Kf(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let i=e.control,r=this.form.get(e.path);i!==r&&(tp(i||null,e),nU(r)&&($d(r,e,this.callSetDisabledState),e.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let i=this.form.get(e.path);TT(i,e),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let i=this.form?.get(e.path);i&&Kj(i,e)&&i.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){d0(this.form,this),this._oldForm&&ip(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(i){return new(i||t)(T(Lo,10),T(Wd,10),T(pl,8))};static \u0275dir=W({type:t,features:[Ie,it]})}return t})();var h0=new C(""),oU={provide:Un,useExisting:St(()=>ap)},ap=(()=>{class t extends Un{_ngModelWarningConfig;callSetDisabledState;viewModel;form;set isDisabled(e){}model;update=new K;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,i,r,o,a){super(),this._ngModelWarningConfig=o,this.callSetDisabledState=a,this._setValidators(e),this._setAsyncValidators(i),this.valueAccessor=m0(this,r)}ngOnChanges(e){if(this._isControlChanged(e)){let i=e.form.previousValue;i&&tp(i,this,!1),$d(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}u0(e,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&tp(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_isControlChanged(e){return e.hasOwnProperty("form")}static \u0275fac=function(i){return new(i||t)(T(Lo,10),T(Wd,10),T(Fo,10),T(h0,8),T(pl,8))};static \u0275dir=W({type:t,selectors:[["","formControl",""]],inputs:{form:[0,"formControl","form"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],standalone:!1,features:[Me([oU]),Ie,it]})}return t})();var aU={provide:Un,useExisting:St(()=>f0)},f0=(()=>{class t extends Un{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new K;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,i,r,o,a){super(),this._ngModelWarningConfig=a,this._parent=e,this._setValidators(i),this._setAsyncValidators(r),this.valueAccessor=m0(this,o)}ngOnChanges(e){this._added||this._setUpControl(),u0(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return ST(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(i){return new(i||t)(T(qr,13),T(Lo,10),T(Wd,10),T(Fo,10),T(h0,8))};static \u0275dir=W({type:t,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[Me([aU]),Ie,it]})}return t})();var sU={provide:qr,useExisting:St(()=>qa)},qa=(()=>{class t extends rU{form=null;ngSubmit=new K;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Tt(t)))(r||t)}})();static \u0275dir=W({type:t,selectors:[["","formGroup",""]],hostBindings:function(i,r){i&1&&H("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Me([sU]),Ie]})}return t})();var lU=(()=>{class t{_validator=qf;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let i=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(i),this._validator=this._enabled?this.createValidator(i):qf,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(i){return new(i||t)};static \u0275dir=W({type:t,features:[it]})}return t})();var cU={provide:Lo,useExisting:St(()=>p0),multi:!0},p0=(()=>{class t extends lU{pattern;inputName="pattern";normalizeInput=e=>e;createValidator=e=>pT(e);static \u0275fac=(()=>{let e;return function(r){return(e||(e=Tt(t)))(r||t)}})();static \u0275dir=W({type:t,selectors:[["","pattern","","formControlName",""],["","pattern","","formControl",""],["","pattern","","ngModel",""]],hostVars:1,hostBindings:function(i,r){i&2&&fe("pattern",r._enabled?r.pattern:null)},inputs:{pattern:"pattern"},standalone:!1,features:[Me([cU]),Ie]})}return t})();var OT=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=P({})}return t})();var dr=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:pl,useValue:e.callSetDisabledState??op}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=P({imports:[OT]})}return t})(),ri=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:h0,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:pl,useValue:e.callSetDisabledState??op}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=P({imports:[OT]})}return t})();var _l,RT=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function g0(){if(_l)return _l;if(typeof document!="object"||!document)return _l=new Set(RT),_l;let t=document.createElement("input");return _l=new Set(RT.filter(n=>(t.setAttribute("type",n),t.type===n))),_l}var bn=(function(t){return t[t.FADING_IN=0]="FADING_IN",t[t.VISIBLE=1]="VISIBLE",t[t.FADING_OUT=2]="FADING_OUT",t[t.HIDDEN=3]="HIDDEN",t})(bn||{}),_0=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=bn.HIDDEN;constructor(n,e,i,r=!1){this._renderer=n,this.element=e,this.config=i,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},AT=sl({passive:!0,capture:!0}),b0=class{_events=new Map;addHandler(n,e,i,r){let o=this._events.get(e);if(o){let a=o.get(i);a?a.add(r):o.set(i,new Set([r]))}else this._events.set(e,new Map([[i,new Set([r])]])),n.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,AT)})}removeHandler(n,e,i){let r=this._events.get(n);if(!r)return;let o=r.get(e);o&&(o.delete(i),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,AT)))}_delegateEventHandler=n=>{let e=en(n);e&&this._events.get(n.type)?.forEach((i,r)=>{(r===e||r.contains(e))&&i.forEach(o=>o.handleEvent(n))})}},qd={enterDuration:225,exitDuration:150},dU=800,NT=sl({passive:!0,capture:!0}),PT=["mousedown","touchstart"],FT=["mouseup","mouseleave","touchend","touchcancel"],uU=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=O({type:t,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return t})(),Zd=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new b0;constructor(n,e,i,r,o){this._target=n,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=Vn(i)),o&&o.get(lt).load(uU)}fadeInRipple(n,e,i={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=_(_({},qd),i.animation);i.centered&&(n=r.left+r.width/2,e=r.top+r.height/2);let a=i.radius||mU(n,e,r),s=n-r.left,l=e-r.top,c=o.enterDuration,d=document.createElement("div");d.classList.add("mat-ripple-element"),d.style.left=`${s-a}px`,d.style.top=`${l-a}px`,d.style.height=`${a*2}px`,d.style.width=`${a*2}px`,i.color!=null&&(d.style.backgroundColor=i.color),d.style.transitionDuration=`${c}ms`,this._containerElement.appendChild(d);let m=window.getComputedStyle(d),f=m.transitionProperty,h=m.transitionDuration,b=f==="none"||h==="0s"||h==="0s, 0s"||r.width===0&&r.height===0,D=new _0(this,d,i,b);d.style.transform="scale3d(1, 1, 1)",D.state=bn.FADING_IN,i.persistent||(this._mostRecentTransientRipple=D);let S=null;return!b&&(c||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let k=()=>{S&&(S.fallbackTimer=null),clearTimeout(Pe),this._finishRippleTransition(D)},_e=()=>this._destroyRipple(D),Pe=setTimeout(_e,c+100);d.addEventListener("transitionend",k),d.addEventListener("transitioncancel",_e),S={onTransitionEnd:k,onTransitionCancel:_e,fallbackTimer:Pe}}),this._activeRipples.set(D,S),(b||!c)&&this._finishRippleTransition(D),D}fadeOutRipple(n){if(n.state===bn.FADING_OUT||n.state===bn.HIDDEN)return;let e=n.element,i=_(_({},qd),n.config.animation);e.style.transitionDuration=`${i.exitDuration}ms`,e.style.opacity="0",n.state=bn.FADING_OUT,(n._animationForciblyDisabledThroughCss||!i.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let e=Vn(n);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,PT.forEach(i=>{t._eventManager.addHandler(this._ngZone,i,e,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{FT.forEach(e=>{this._triggerElement.addEventListener(e,this,NT)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===bn.FADING_IN?this._startFadeOutTransition(n):n.state===bn.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let e=n===this._mostRecentTransientRipple,{persistent:i}=n.config;n.state=bn.VISIBLE,!i&&(!e||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let e=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=bn.HIDDEN,e!==null&&(n.element.removeEventListener("transitionend",e.onTransitionEnd),n.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),n.element.remove()}_onMousedown(n){let e=Ua(n),i=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+dU;!this._target.rippleDisabled&&!e&&!i&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!Ha(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=n.changedTouches;if(e)for(let i=0;i<e.length;i++)this.fadeInRipple(e[i].clientX,e[i].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let e=n.state===bn.VISIBLE||n.config.terminateOnPointerUp&&n.state===bn.FADING_IN;!n.config.persistent&&e&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(PT.forEach(e=>t._eventManager.removeHandler(e,n,this)),this._pointerUpEventsRegistered&&(FT.forEach(e=>n.removeEventListener(e,this,NT)),this._pointerUpEventsRegistered=!1))}};function mU(t,n,e){let i=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),r=Math.max(Math.abs(n-e.top),Math.abs(n-e.bottom));return Math.sqrt(i*i+r*r)}var Yd=new C("mat-ripple-global-options"),Pi=(()=>{class t{_elementRef=u(U);_animationsDisabled=$e();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=u(B),i=u(ke),r=u(Yd,{optional:!0}),o=u(Y);this._globalOptions=r||{},this._rippleRenderer=new Zd(this,e,this._elementRef,i,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:_(_(_({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,i=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,i,_(_({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,_(_({},this.rippleConfig),e))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=W({type:t,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(i,r){i&2&&ee("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return t})();var hU={capture:!0},fU=["focus","mousedown","mouseenter","touchstart"],v0="mat-ripple-loader-uninitialized",y0="mat-ripple-loader-class-name",LT="mat-ripple-loader-centered",lp="mat-ripple-loader-disabled",BT=(()=>{class t{_document=u(J);_animationsDisabled=$e();_globalRippleOptions=u(Yd,{optional:!0});_platform=u(ke);_ngZone=u(B);_injector=u(Y);_eventCleanups;_hosts=new Map;constructor(){let e=u(It).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>fU.map(i=>e.listen(this._document,i,this._onInteraction,hU)))}ngOnDestroy(){let e=this._hosts.keys();for(let i of e)this.destroyRipple(i);this._eventCleanups.forEach(i=>i())}configureRipple(e,i){e.setAttribute(v0,this._globalRippleOptions?.namespace??""),(i.className||!e.hasAttribute(y0))&&e.setAttribute(y0,i.className||""),i.centered&&e.setAttribute(LT,""),i.disabled&&e.setAttribute(lp,"")}setDisabled(e,i){let r=this._hosts.get(e);r?(r.target.rippleDisabled=i,!i&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):i?e.setAttribute(lp,""):e.removeAttribute(lp)}_onInteraction=e=>{let i=en(e);if(i instanceof HTMLElement){let r=i.closest(`[${v0}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let i=this._document.createElement("span");i.classList.add("mat-ripple",e.getAttribute(y0)),e.append(i);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??qd.enterDuration,a=this._animationsDisabled?0:r?.animation?.exitDuration??qd.exitDuration,s={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(lp),rippleConfig:{centered:e.hasAttribute(LT),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},l=new Zd(s,this._ngZone,i,this._platform,this._injector),c=!s.rippleDisabled;c&&l.setupTriggerEvents(e),this._hosts.set(e,{target:s,renderer:l,hasSetUpEvents:c}),e.removeAttribute(v0)}destroyRipple(e){let i=this._hosts.get(e);i&&(i.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var oi=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=O({type:t,selectors:[["structural-styles"]],decls:0,vars:0,template:function(i,r){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var pU=["mat-icon-button",""],gU=["*"],_U=new C("MAT_BUTTON_CONFIG");function VT(t){return t==null?void 0:dt(t)}var Qd=(()=>{class t{_elementRef=u(U);_ngZone=u(B);_animationsDisabled=$e();_config=u(_U,{optional:!0});_focusMonitor=u(ii);_cleanupClick;_renderer=u(xe);_rippleLoader=u(BT);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){u(lt).load(oi);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",i){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,i):this._elementRef.nativeElement.focus(i)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=W({type:t,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(i,r){i&2&&(fe("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),Dt(r.color?"mat-"+r.color:""),ee("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",Z],disabled:[2,"disabled","disabled",Z],ariaDisabled:[2,"aria-disabled","ariaDisabled",Z],disabledInteractive:[2,"disabledInteractive","disabledInteractive",Z],tabIndex:[2,"tabIndex","tabIndex",VT],_tabindex:[2,"tabindex","_tabindex",VT]}})}return t})(),cp=(()=>{class t extends Qd{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=O({type:t,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[Ie],attrs:pU,ngContentSelectors:gU,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(Be(),Et(0,"span",0),ue(1),Et(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var Mn=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=P({imports:[me]})}return t})();var bU=["matButton",""],C0=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],w0=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"],vU=["mat-fab",""],yU=["mat-mini-fab",""],CU=`.mat-mdc-fab-base {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 56px;
  height: 56px;
  padding: 0;
  border: none;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  -moz-appearance: none;
  -webkit-appearance: none;
  overflow: visible;
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 15ms linear 30ms, transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);
  flex-shrink: 0;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-fab-base .mat-mdc-button-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-fab-base .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-fab-base .mdc-button__label,
.mat-mdc-fab-base .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-fab-base .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-mdc-fab-base:focus-visible > .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-fab-base._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-fab-base::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mat-mdc-fab-base[hidden] {
  display: none;
}
.mat-mdc-fab-base::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mat-mdc-fab-base:active, .mat-mdc-fab-base:focus {
  outline: none;
}
.mat-mdc-fab-base:hover {
  cursor: pointer;
}
.mat-mdc-fab-base > svg {
  width: 100%;
}
.mat-mdc-fab-base .mat-icon, .mat-mdc-fab-base .material-icons {
  transition: transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);
  fill: currentColor;
  will-change: transform;
}
.mat-mdc-fab-base .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base[disabled]:focus, .mat-mdc-fab-base.mat-mdc-button-disabled, .mat-mdc-fab-base.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-fab-base.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-fab {
  background-color: var(--mat-fab-container-color, var(--mat-sys-primary-container));
  border-radius: var(--mat-fab-container-shape, var(--mat-sys-corner-large));
  color: var(--mat-fab-foreground-color, var(--mat-sys-on-primary-container, inherit));
  box-shadow: var(--mat-fab-container-elevation-shadow, var(--mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-fab:hover {
    box-shadow: var(--mat-fab-hover-container-elevation-shadow, var(--mat-sys-level4));
  }
}
.mat-mdc-fab:focus {
  box-shadow: var(--mat-fab-focus-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-fab:active, .mat-mdc-fab:focus:active {
  box-shadow: var(--mat-fab-pressed-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-fab[disabled], .mat-mdc-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-fab-disabled-state-foreground-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-fab-disabled-state-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-fab-touch-target-size, 48px);
  display: var(--mat-fab-touch-target-display, block);
  left: 50%;
  width: var(--mat-fab-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-fab .mat-ripple-element {
  background-color: var(--mat-fab-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-state-layer-color, var(--mat-sys-on-primary-container));
}
.mat-mdc-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-disabled-state-layer-color);
}
.mat-mdc-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-mini-fab {
  width: 40px;
  height: 40px;
  background-color: var(--mat-fab-small-container-color, var(--mat-sys-primary-container));
  border-radius: var(--mat-fab-small-container-shape, var(--mat-sys-corner-medium));
  color: var(--mat-fab-small-foreground-color, var(--mat-sys-on-primary-container, inherit));
  box-shadow: var(--mat-fab-small-container-elevation-shadow, var(--mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-mini-fab:hover {
    box-shadow: var(--mat-fab-small-hover-container-elevation-shadow, var(--mat-sys-level4));
  }
}
.mat-mdc-mini-fab:focus {
  box-shadow: var(--mat-fab-small-focus-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-mini-fab:active, .mat-mdc-mini-fab:focus:active {
  box-shadow: var(--mat-fab-small-pressed-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-mini-fab[disabled], .mat-mdc-mini-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-fab-small-disabled-state-foreground-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-fab-small-disabled-state-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-mini-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-fab-small-touch-target-size, 48px);
  display: var(--mat-fab-small-touch-target-display);
  left: 50%;
  width: var(--mat-fab-small-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-mini-fab .mat-ripple-element {
  background-color: var(--mat-fab-small-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-small-state-layer-color, var(--mat-sys-on-primary-container));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-small-disabled-state-layer-color);
}
.mat-mdc-mini-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-small-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-mini-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-small-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-mini-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-small-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-extended-fab {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  padding-left: 20px;
  padding-right: 20px;
  width: auto;
  max-width: 100%;
  line-height: normal;
  box-shadow: var(--mat-fab-extended-container-elevation-shadow, var(--mat-sys-level3));
  height: var(--mat-fab-extended-container-height, 56px);
  border-radius: var(--mat-fab-extended-container-shape, var(--mat-sys-corner-large));
  font-family: var(--mat-fab-extended-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-fab-extended-label-text-size, var(--mat-sys-label-large-size));
  font-weight: var(--mat-fab-extended-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-fab-extended-label-text-tracking, var(--mat-sys-label-large-tracking));
}
@media (hover: hover) {
  .mat-mdc-extended-fab:hover {
    box-shadow: var(--mat-fab-extended-hover-container-elevation-shadow, var(--mat-sys-level4));
  }
}
.mat-mdc-extended-fab:focus {
  box-shadow: var(--mat-fab-extended-focus-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-extended-fab:active, .mat-mdc-extended-fab:focus:active {
  box-shadow: var(--mat-fab-extended-pressed-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab[disabled]:focus, .mat-mdc-extended-fab.mat-mdc-button-disabled, .mat-mdc-extended-fab.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-extended-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
[dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .mat-icon, [dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .material-icons,
.mat-mdc-extended-fab > .mat-icon,
.mat-mdc-extended-fab > .material-icons {
  margin-left: -8px;
  margin-right: 12px;
}
.mat-mdc-extended-fab .mdc-button__label + .mat-icon,
.mat-mdc-extended-fab .mdc-button__label + .material-icons, [dir=rtl] .mat-mdc-extended-fab > .mat-icon, [dir=rtl] .mat-mdc-extended-fab > .material-icons {
  margin-left: 12px;
  margin-right: -8px;
}
.mat-mdc-extended-fab .mat-mdc-button-touch-target {
  width: 100%;
}
`,jT=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),ur=(()=>{class t extends Qd{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=wU(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let i=this._elementRef.nativeElement.classList,r=this._appearance?jT.get(this._appearance):null,o=jT.get(e);r&&i.remove(...r),i.add(...o),this._appearance=e}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=O({type:t,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[Ie],attrs:bU,ngContentSelectors:w0,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(Be(C0),Et(0,"span",0),ue(1),ht(2,"span",1),ue(3,1),yt(),ue(4,2),Et(5,"span",2)(6,"span",3)),i&2&&ee("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();function wU(t){return t.hasAttribute("mat-raised-button")?"elevated":t.hasAttribute("mat-stroked-button")?"outlined":t.hasAttribute("mat-flat-button")?"filled":t.hasAttribute("mat-button")?"text":null}var UT=new C("mat-mdc-fab-default-options",{providedIn:"root",factory:()=>Xd}),Xd={color:"accent"},HT=(()=>{class t extends Qd{_options=u(UT,{optional:!0});_isFab=!0;extended=!1;constructor(){super(),this._options=this._options||Xd,this.color=this._options.color||Xd.color}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=O({type:t,selectors:[["button","mat-fab",""],["a","mat-fab",""],["button","matFab",""],["a","matFab",""]],hostAttrs:[1,"mdc-fab","mat-mdc-fab-base","mat-mdc-fab"],hostVars:4,hostBindings:function(i,r){i&2&&ee("mdc-fab--extended",r.extended)("mat-mdc-extended-fab",r.extended)},inputs:{extended:[2,"extended","extended",Z]},exportAs:["matButton","matAnchor"],features:[Ie],attrs:vU,ngContentSelectors:w0,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(Be(C0),Et(0,"span",0),ue(1),ht(2,"span",1),ue(3,1),yt(),ue(4,2),Et(5,"span",2)(6,"span",3)),i&2&&ee("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-fab-base {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 56px;
  height: 56px;
  padding: 0;
  border: none;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  -moz-appearance: none;
  -webkit-appearance: none;
  overflow: visible;
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 15ms linear 30ms, transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);
  flex-shrink: 0;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-fab-base .mat-mdc-button-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-fab-base .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-fab-base .mdc-button__label,
.mat-mdc-fab-base .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-fab-base .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-mdc-fab-base:focus-visible > .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-fab-base._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-fab-base::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mat-mdc-fab-base[hidden] {
  display: none;
}
.mat-mdc-fab-base::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mat-mdc-fab-base:active, .mat-mdc-fab-base:focus {
  outline: none;
}
.mat-mdc-fab-base:hover {
  cursor: pointer;
}
.mat-mdc-fab-base > svg {
  width: 100%;
}
.mat-mdc-fab-base .mat-icon, .mat-mdc-fab-base .material-icons {
  transition: transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);
  fill: currentColor;
  will-change: transform;
}
.mat-mdc-fab-base .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base[disabled]:focus, .mat-mdc-fab-base.mat-mdc-button-disabled, .mat-mdc-fab-base.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-fab-base.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-fab {
  background-color: var(--mat-fab-container-color, var(--mat-sys-primary-container));
  border-radius: var(--mat-fab-container-shape, var(--mat-sys-corner-large));
  color: var(--mat-fab-foreground-color, var(--mat-sys-on-primary-container, inherit));
  box-shadow: var(--mat-fab-container-elevation-shadow, var(--mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-fab:hover {
    box-shadow: var(--mat-fab-hover-container-elevation-shadow, var(--mat-sys-level4));
  }
}
.mat-mdc-fab:focus {
  box-shadow: var(--mat-fab-focus-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-fab:active, .mat-mdc-fab:focus:active {
  box-shadow: var(--mat-fab-pressed-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-fab[disabled], .mat-mdc-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-fab-disabled-state-foreground-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-fab-disabled-state-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-fab-touch-target-size, 48px);
  display: var(--mat-fab-touch-target-display, block);
  left: 50%;
  width: var(--mat-fab-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-fab .mat-ripple-element {
  background-color: var(--mat-fab-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-state-layer-color, var(--mat-sys-on-primary-container));
}
.mat-mdc-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-disabled-state-layer-color);
}
.mat-mdc-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-mini-fab {
  width: 40px;
  height: 40px;
  background-color: var(--mat-fab-small-container-color, var(--mat-sys-primary-container));
  border-radius: var(--mat-fab-small-container-shape, var(--mat-sys-corner-medium));
  color: var(--mat-fab-small-foreground-color, var(--mat-sys-on-primary-container, inherit));
  box-shadow: var(--mat-fab-small-container-elevation-shadow, var(--mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-mini-fab:hover {
    box-shadow: var(--mat-fab-small-hover-container-elevation-shadow, var(--mat-sys-level4));
  }
}
.mat-mdc-mini-fab:focus {
  box-shadow: var(--mat-fab-small-focus-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-mini-fab:active, .mat-mdc-mini-fab:focus:active {
  box-shadow: var(--mat-fab-small-pressed-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-mini-fab[disabled], .mat-mdc-mini-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-fab-small-disabled-state-foreground-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-fab-small-disabled-state-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-mini-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-fab-small-touch-target-size, 48px);
  display: var(--mat-fab-small-touch-target-display);
  left: 50%;
  width: var(--mat-fab-small-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-mini-fab .mat-ripple-element {
  background-color: var(--mat-fab-small-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-small-state-layer-color, var(--mat-sys-on-primary-container));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-small-disabled-state-layer-color);
}
.mat-mdc-mini-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-small-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-mini-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-small-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-mini-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-small-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-extended-fab {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  padding-left: 20px;
  padding-right: 20px;
  width: auto;
  max-width: 100%;
  line-height: normal;
  box-shadow: var(--mat-fab-extended-container-elevation-shadow, var(--mat-sys-level3));
  height: var(--mat-fab-extended-container-height, 56px);
  border-radius: var(--mat-fab-extended-container-shape, var(--mat-sys-corner-large));
  font-family: var(--mat-fab-extended-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-fab-extended-label-text-size, var(--mat-sys-label-large-size));
  font-weight: var(--mat-fab-extended-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-fab-extended-label-text-tracking, var(--mat-sys-label-large-tracking));
}
@media (hover: hover) {
  .mat-mdc-extended-fab:hover {
    box-shadow: var(--mat-fab-extended-hover-container-elevation-shadow, var(--mat-sys-level4));
  }
}
.mat-mdc-extended-fab:focus {
  box-shadow: var(--mat-fab-extended-focus-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-extended-fab:active, .mat-mdc-extended-fab:focus:active {
  box-shadow: var(--mat-fab-extended-pressed-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab[disabled]:focus, .mat-mdc-extended-fab.mat-mdc-button-disabled, .mat-mdc-extended-fab.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-extended-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
[dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .mat-icon, [dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .material-icons,
.mat-mdc-extended-fab > .mat-icon,
.mat-mdc-extended-fab > .material-icons {
  margin-left: -8px;
  margin-right: 12px;
}
.mat-mdc-extended-fab .mdc-button__label + .mat-icon,
.mat-mdc-extended-fab .mdc-button__label + .material-icons, [dir=rtl] .mat-mdc-extended-fab > .mat-icon, [dir=rtl] .mat-mdc-extended-fab > .material-icons {
  margin-left: 12px;
  margin-right: -8px;
}
.mat-mdc-extended-fab .mat-mdc-button-touch-target {
  width: 100%;
}
`],encapsulation:2,changeDetection:0})}return t})(),ai=(()=>{class t extends Qd{_options=u(UT,{optional:!0});_isFab=!0;constructor(){super(),this._options=this._options||Xd,this.color=this._options.color||Xd.color}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=O({type:t,selectors:[["button","mat-mini-fab",""],["a","mat-mini-fab",""],["button","matMiniFab",""],["a","matMiniFab",""]],hostAttrs:[1,"mdc-fab","mat-mdc-fab-base","mdc-fab--mini","mat-mdc-mini-fab"],exportAs:["matButton","matAnchor"],features:[Ie],attrs:yU,ngContentSelectors:w0,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(Be(C0),Et(0,"span",0),ue(1),ht(2,"span",1),ue(3,1),yt(),ue(4,2),Et(5,"span",2)(6,"span",3)),i&2&&ee("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[CU],encapsulation:2,changeDetection:0})}return t})();var Hn=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=P({imports:[Mn,me]})}return t})();function zT(t){return Error(`Unable to find icon with the name "${t}"`)}function xU(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function $T(t){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${t}".`)}function WT(t){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${t}".`)}var Zr=class{url;svgText;options;svgElement=null;constructor(n,e,i){this.url=n,this.svgText=e,this.options=i}},up=(()=>{class t{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,i,r,o){this._httpClient=e,this._sanitizer=i,this._errorHandler=o,this._document=r}addSvgIcon(e,i,r){return this.addSvgIconInNamespace("",e,i,r)}addSvgIconLiteral(e,i,r){return this.addSvgIconLiteralInNamespace("",e,i,r)}addSvgIconInNamespace(e,i,r,o){return this._addSvgIconConfig(e,i,new Zr(r,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,i,r,o){let a=this._sanitizer.sanitize(bt.HTML,r);if(!a)throw WT(r);let s=za(a);return this._addSvgIconConfig(e,i,new Zr("",s,o))}addSvgIconSet(e,i){return this.addSvgIconSetInNamespace("",e,i)}addSvgIconSetLiteral(e,i){return this.addSvgIconSetLiteralInNamespace("",e,i)}addSvgIconSetInNamespace(e,i,r){return this._addSvgIconSetConfig(e,new Zr(i,null,r))}addSvgIconSetLiteralInNamespace(e,i,r){let o=this._sanitizer.sanitize(bt.HTML,i);if(!o)throw WT(i);let a=za(o);return this._addSvgIconSetConfig(e,new Zr("",a,r))}registerFontClassAlias(e,i=e){return this._fontCssClassesByAlias.set(e,i),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let i=this._sanitizer.sanitize(bt.RESOURCE_URL,e);if(!i)throw $T(e);let r=this._cachedIconsByUrl.get(i);return r?ne(dp(r)):this._loadSvgIconFromConfig(new Zr(e,null)).pipe(Wt(o=>this._cachedIconsByUrl.set(i,o)),le(o=>dp(o)))}getNamedSvgIcon(e,i=""){let r=GT(i,e),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(i,e),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(i);return a?this._getSvgFromIconSetConfigs(e,a):tc(zT(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?ne(dp(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(le(i=>dp(i)))}_getSvgFromIconSetConfigs(e,i){let r=this._extractIconWithNameFromAnySet(e,i);if(r)return ne(r);let o=i.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(so(s=>{let c=`Loading icon set URL: ${this._sanitizer.sanitize(bt.RESOURCE_URL,a.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(c)),ne(null)})));return ic(o).pipe(le(()=>{let a=this._extractIconWithNameFromAnySet(e,i);if(!a)throw zT(e);return a}))}_extractIconWithNameFromAnySet(e,i){for(let r=i.length-1;r>=0;r--){let o=i[r];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(o),s=this._extractSvgIconFromSet(a,e,o.options);if(s)return s}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(Wt(i=>e.svgText=i),le(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?ne(null):this._fetchIcon(e).pipe(Wt(i=>e.svgText=i))}_extractSvgIconFromSet(e,i,r){let o=e.querySelector(`[id="${i}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,r);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),r);let s=this._svgElementFromString(za("<svg></svg>"));return s.appendChild(a),this._setSvgAttributes(s,r)}_svgElementFromString(e){let i=this._document.createElement("DIV");i.innerHTML=e;let r=i.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let i=this._svgElementFromString(za("<svg></svg>")),r=e.attributes;for(let o=0;o<r.length;o++){let{name:a,value:s}=r[o];a!=="id"&&i.setAttribute(a,s)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&i.appendChild(e.childNodes[o].cloneNode(!0));return i}_setSvgAttributes(e,i){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),i&&i.viewBox&&e.setAttribute("viewBox",i.viewBox),e}_fetchIcon(e){let{url:i,options:r}=e,o=r?.withCredentials??!1;if(!this._httpClient)throw xU();if(i==null)throw Error(`Cannot fetch icon from URL "${i}".`);let a=this._sanitizer.sanitize(bt.RESOURCE_URL,i);if(!a)throw $T(i);let s=this._inProgressUrlFetches.get(a);if(s)return s;let l=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe(le(c=>za(c)),ra(()=>this._inProgressUrlFetches.delete(a)),ac());return this._inProgressUrlFetches.set(a,l),l}_addSvgIconConfig(e,i,r){return this._svgIconConfigs.set(GT(e,i),r),this}_addSvgIconSetConfig(e,i){let r=this._iconSetConfigs.get(e);return r?r.push(i):this._iconSetConfigs.set(e,[i]),this}_svgElementFromConfig(e){if(!e.svgElement){let i=this._svgElementFromString(e.svgText);this._setSvgAttributes(i,e.options),e.svgElement=i}return e.svgElement}_getIconConfigFromResolvers(e,i){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](i,e);if(o)return EU(o)?new Zr(o.url,null,o.options):new Zr(o,null)}}static \u0275fac=function(i){return new(i||t)(A(nr,8),A(Si),A(J,8),A(yn))};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function dp(t){return t.cloneNode(!0)}function GT(t,n){return t+":"+n}function EU(t){return!!(t.url&&t.options)}var DU=["*"],MU=new C("MAT_ICON_DEFAULT_OPTIONS"),SU=new C("mat-icon-location",{providedIn:"root",factory:()=>{let t=u(J),n=t?t.location:null;return{getPathname:()=>n?n.pathname+n.search:""}}}),qT=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],IU=qT.map(t=>`[${t}]`).join(", "),TU=/^url\(['"]?#(.*?)['"]?\)$/,zn=(()=>{class t{_elementRef=u(U);_iconRegistry=u(up);_location=u(SU);_errorHandler=u(yn);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let i=this._cleanupFontValue(e);i!==this._fontSet&&(this._fontSet=i,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let i=this._cleanupFontValue(e);i!==this._fontIcon&&(this._fontIcon=i,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=Re.EMPTY;constructor(){let e=u(new Xn("aria-hidden"),{optional:!0}),i=u(MU,{optional:!0});i&&(i.color&&(this.color=this._defaultColor=i.color),i.fontSet&&(this.fontSet=i.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let i=e.split(":");switch(i.length){case 1:return["",i[0]];case 2:return i;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let i=this._location.getPathname();i!==this._previousPath&&(this._previousPath=i,this._prependPathToReferences(i))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let i=this._location.getPathname();this._previousPath=i,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(i),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,i=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();i--;){let r=e.childNodes[i];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,i=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),i.forEach(r=>e.classList.add(r)),this._previousFontSetClass=i,this.fontIcon!==this._previousFontIconClass&&!i.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let i=this._elementsWithExternalReferences;i&&i.forEach((r,o)=>{r.forEach(a=>{o.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){let i=e.querySelectorAll(IU),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<i.length;o++)qT.forEach(a=>{let s=i[o],l=s.getAttribute(a),c=l?l.match(TU):null;if(c){let d=r.get(s);d||(d=[],r.set(s,d)),d.push({name:a,value:c[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[i,r]=this._splitIconName(e);i&&(this._svgNamespace=i),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,i).pipe(He(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${i}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=O({type:t,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(i,r){i&2&&(fe("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),Dt(r.color?"mat-"+r.color:""),ee("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",Z],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:DU,decls:1,vars:0,template:function(i,r){i&1&&(Be(),ue(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2,changeDetection:0})}return t})(),Yr=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=P({imports:[me]})}return t})();function kU(t,n){if(t&1){let e=ft();p(0,"div",1)(1,"button",2),H("click",function(){Ae(e);let r=E();return Ne(r.action())}),M(2),g()()}if(t&2){let e=E();v(2),gn(" ",e.data.action," ")}}var OU=["label"];function RU(t,n){}var AU=Math.pow(2,31)-1,Kd=class{_overlayRef;instance;containerInstance;_afterDismissed=new I;_afterOpened=new I;_onAction=new I;_durationTimeoutId;_dismissedByAction=!1;constructor(n,e){this._overlayRef=e,this.containerInstance=n,n._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(n){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(n,AU))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},mp=new C("MatSnackBarData"),yl=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},NU=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=W({type:t,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return t})(),PU=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=W({type:t,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return t})(),FU=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=W({type:t,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return t})(),LU=(()=>{class t{snackBarRef=u(Kd);data=u(mp);constructor(){}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=O({type:t,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(i,r){i&1&&(p(0,"div",0),M(1),g(),G(2,kU,3,1,"div",1)),i&2&&(v(),gn(" ",r.data.message,`
`),v(),q(r.hasAction?2:-1))},dependencies:[ur,NU,PU,FU],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2,changeDetection:0})}return t})(),x0="_mat-snack-bar-enter",E0="_mat-snack-bar-exit",BU=(()=>{class t extends Mo{_ngZone=u(B);_elementRef=u(U);_changeDetectorRef=u(ve);_platform=u(ke);_animationsDisabled=$e();snackBarConfig=u(yl);_document=u(J);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=u(Y);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new I;_onExit=new I;_onEnter=new I;_animationState="void";_live;_label;_role;_liveElementId=u(et).getId("mat-snack-bar-container-live-");constructor(){super();let e=this.snackBarConfig;e.politeness==="assertive"&&!e.announcementMessage?this._live="assertive":e.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();let i=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),i}attachTemplatePortal(e){this._assertNotAttached();let i=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),i}attachDomPortal=e=>{this._assertNotAttached();let i=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),i};onAnimationEnd(e){e===E0?this._completeExit():e===x0&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?ct(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(x0)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(x0)},200)))}exit(){return this._destroyed?ne(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?ct(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(E0)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(E0),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,i=this.snackBarConfig.panelClass;i&&(Array.isArray(i)?i.forEach(a=>e.classList.add(a)):e.classList.add(i)),this._exposeToModals();let r=this._label.nativeElement,o="mdc-snackbar__label";r.classList.toggle(o,!r.querySelector(`.${o}`))}_exposeToModals(){let e=this._liveElementId,i=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<i.length;r++){let o=i[r],a=o.getAttribute("aria-owns");this._trackedModals.add(o),a?a.indexOf(e)===-1&&o.setAttribute("aria-owns",a+" "+e):o.setAttribute("aria-owns",e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let i=e.getAttribute("aria-owns");if(i){let r=i.replace(this._liveElementId,"").trim();r.length>0?e.setAttribute("aria-owns",r):e.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,i=e.querySelector("[aria-hidden]"),r=e.querySelector("[aria-live]");if(i&&r){let o=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&i.contains(document.activeElement)&&(o=document.activeElement),i.removeAttribute("aria-hidden"),r.appendChild(i),o?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=O({type:t,selectors:[["mat-snack-bar-container"]],viewQuery:function(i,r){if(i&1&&Te(So,7)(OU,7),i&2){let o;Q(o=X())&&(r._portalOutlet=o.first),Q(o=X())&&(r._label=o.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(i,r){i&1&&H("animationend",function(a){return r.onAnimationEnd(a.animationName)})("animationcancel",function(a){return r.onAnimationEnd(a.animationName)}),i&2&&ee("mat-snack-bar-container-enter",r._animationState==="visible")("mat-snack-bar-container-exit",r._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!r._animationsDisabled)},features:[Ie],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(i,r){i&1&&(p(0,"div",1)(1,"div",2,0)(3,"div",3),vt(4,RU,0,0,"ng-template",4),g(),V(5,"div"),g()()),i&2&&(v(5),fe("aria-live",r._live)("role",r._role)("id",r._liveElementId))},dependencies:[So],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--mat-snack-bar-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-snack-bar-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-snack-bar-container-color, var(--mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--mat-snack-bar-supporting-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-snack-bar-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-snack-bar-supporting-text-weight, var(--mat-sys-body-medium-weight));
  line-height: var(--mat-snack-bar-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--mat-snack-bar-button-color, var(--mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --mat-button-text-state-layer-color: currentColor;
  --mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2})}return t})(),VU=new C("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new yl}),ZT=(()=>{class t{_live=u(Od);_injector=u(Y);_breakpointObserver=u(kd);_parentSnackBar=u(t,{optional:!0,skipSelf:!0});_defaultConfig=u(VU);_animationsDisabled=$e();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=LU;snackBarContainerComponent=BU;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}constructor(){}openFromComponent(e,i){return this._attach(e,i)}openFromTemplate(e,i){return this._attach(e,i)}open(e,i="",r){let o=_(_({},this._defaultConfig),r);return o.data={message:e,action:i},o.announcementMessage===e&&(o.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,o)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,i){let r=i&&i.viewContainerRef&&i.viewContainerRef.injector,o=Y.create({parent:r||this._injector,providers:[{provide:yl,useValue:i}]}),a=new Oi(this.snackBarContainerComponent,i.viewContainerRef,o),s=e.attach(a);return s.instance.snackBarConfig=i,s.instance}_attach(e,i){let r=_(_(_({},new yl),this._defaultConfig),i),o=this._createOverlay(r),a=this._attachSnackBarContainer(o,r),s=new Kd(a,o);if(e instanceof Xt){let l=new Ri(e,null,{$implicit:r.data,snackBarRef:s});s.instance=a.attachTemplatePortal(l)}else{let l=this._createInjector(r,s),c=new Oi(e,void 0,l),d=a.attachComponentPortal(c);s.instance=d.instance}return this._breakpointObserver.observe(YI.HandsetPortrait).pipe(ze(o.detachments())).subscribe(l=>{o.overlayElement.classList.toggle(this.handsetCssClass,l.matches)}),r.announcementMessage&&a._onAnnounce.subscribe(()=>{this._live.announce(r.announcementMessage,r.politeness)}),this._animateSnackBar(s,r),this._openedSnackBarRef=s,this._openedSnackBarRef}_animateSnackBar(e,i){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),i.announcementMessage&&this._live.clear()}),i.duration&&i.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(i.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let i=new Ai;i.direction=e.direction;let r=ko(this._injector),o=e.direction==="rtl",a=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!o||e.horizontalPosition==="end"&&o,s=!a&&e.horizontalPosition!=="center";return a?r.left("0"):s?r.right("0"):r.centerHorizontally(),e.verticalPosition==="top"?r.top("0"):r.bottom("0"),i.positionStrategy=r,i.disableAnimations=this._animationsDisabled,Ni(this._injector,i)}_createInjector(e,i){let r=e&&e.viewContainerRef&&e.viewContainerRef.injector;return Y.create({parent:r||this._injector,providers:[{provide:Kd,useValue:i},{provide:mp,useValue:e.data}]})}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Xr=class extends Error{},N0=class extends Xr{constructor(n){super(`Invalid DateTime: ${n.toMessage()}`)}},P0=class extends Xr{constructor(n){super(`Invalid Interval: ${n.toMessage()}`)}},F0=class extends Xr{constructor(n){super(`Invalid Duration: ${n.toMessage()}`)}},Uo=class extends Xr{},yp=class extends Xr{constructor(n){super(`Invalid unit ${n}`)}},qt=class extends Xr{},mr=class extends Xr{constructor(){super("Zone is an abstract class")}},$="numeric",Bi="short",Gn="long",Cp={year:$,month:$,day:$},Dk={year:$,month:Bi,day:$},UU={year:$,month:Bi,day:$,weekday:Bi},Mk={year:$,month:Gn,day:$},Sk={year:$,month:Gn,day:$,weekday:Gn},Ik={hour:$,minute:$},Tk={hour:$,minute:$,second:$},kk={hour:$,minute:$,second:$,timeZoneName:Bi},Ok={hour:$,minute:$,second:$,timeZoneName:Gn},Rk={hour:$,minute:$,hourCycle:"h23"},Ak={hour:$,minute:$,second:$,hourCycle:"h23"},Nk={hour:$,minute:$,second:$,hourCycle:"h23",timeZoneName:Bi},Pk={hour:$,minute:$,second:$,hourCycle:"h23",timeZoneName:Gn},Fk={year:$,month:$,day:$,hour:$,minute:$},Lk={year:$,month:$,day:$,hour:$,minute:$,second:$},Bk={year:$,month:Bi,day:$,hour:$,minute:$},Vk={year:$,month:Bi,day:$,hour:$,minute:$,second:$},HU={year:$,month:Bi,day:$,weekday:Bi,hour:$,minute:$},jk={year:$,month:Gn,day:$,hour:$,minute:$,timeZoneName:Bi},Uk={year:$,month:Gn,day:$,hour:$,minute:$,second:$,timeZoneName:Bi},Hk={year:$,month:Gn,day:$,weekday:Gn,hour:$,minute:$,timeZoneName:Gn},zk={year:$,month:Gn,day:$,weekday:Gn,hour:$,minute:$,second:$,timeZoneName:Gn},Xa=class{get type(){throw new mr}get name(){throw new mr}get ianaName(){return this.name}get isUniversal(){throw new mr}offsetName(n,e){throw new mr}formatOffset(n,e){throw new mr}offset(n){throw new mr}equals(n){throw new mr}get isValid(){throw new mr}},D0=null,wp=class t extends Xa{static get instance(){return D0===null&&(D0=new t),D0}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(n,{format:e,locale:i}){return e1(n,e,i)}formatOffset(n,e){return iu(this.offset(n),e)}offset(n){return-new Date(n).getTimezoneOffset()}equals(n){return n.type==="system"}get isValid(){return!0}},L0=new Map;function zU(t){let n=L0.get(t);return n===void 0&&(n=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"}),L0.set(t,n)),n}var $U={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function WU(t,n){let e=t.format(n).replace(/\u200E/g,""),i=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(e),[,r,o,a,s,l,c,d]=i;return[a,r,o,s,l,c,d]}function GU(t,n){let e=t.formatToParts(n),i=[];for(let r=0;r<e.length;r++){let{type:o,value:a}=e[r],s=$U[o];o==="era"?i[s]=a:pe(s)||(i[s]=parseInt(a,10))}return i}var M0=new Map,zo=class t extends Xa{static create(n){let e=M0.get(n);return e===void 0&&M0.set(n,e=new t(n)),e}static resetCache(){M0.clear(),L0.clear()}static isValidSpecifier(n){return this.isValidZone(n)}static isValidZone(n){if(!n)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:n}).format(),!0}catch{return!1}}constructor(n){super(),this.zoneName=n,this.valid=t.isValidZone(n)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(n,{format:e,locale:i}){return e1(n,e,i,this.name)}formatOffset(n,e){return iu(this.offset(n),e)}offset(n){if(!this.valid)return NaN;let e=new Date(n);if(isNaN(e))return NaN;let i=zU(this.name),[r,o,a,s,l,c,d]=i.formatToParts?GU(i,e):WU(i,e);s==="BC"&&(r=-Math.abs(r)+1);let f=Ip({year:r,month:o,day:a,hour:l===24?0:l,minute:c,second:d,millisecond:0}),h=+e,b=h%1e3;return h-=b>=0?b:1e3+b,(f-h)/(60*1e3)}equals(n){return n.type==="iana"&&n.name===this.name}get isValid(){return this.valid}},YT={};function qU(t,n={}){let e=JSON.stringify([t,n]),i=YT[e];return i||(i=new Intl.ListFormat(t,n),YT[e]=i),i}var B0=new Map;function V0(t,n={}){let e=JSON.stringify([t,n]),i=B0.get(e);return i===void 0&&(i=new Intl.DateTimeFormat(t,n),B0.set(e,i)),i}var j0=new Map;function ZU(t,n={}){let e=JSON.stringify([t,n]),i=j0.get(e);return i===void 0&&(i=new Intl.NumberFormat(t,n),j0.set(e,i)),i}var U0=new Map;function YU(t,n={}){let a=n,{base:e}=a,i=Eu(a,["base"]),r=JSON.stringify([t,i]),o=U0.get(r);return o===void 0&&(o=new Intl.RelativeTimeFormat(t,n),U0.set(r,o)),o}var eu=null;function QU(){return eu||(eu=new Intl.DateTimeFormat().resolvedOptions().locale,eu)}var H0=new Map;function $k(t){let n=H0.get(t);return n===void 0&&(n=new Intl.DateTimeFormat(t).resolvedOptions(),H0.set(t,n)),n}var z0=new Map;function XU(t){let n=z0.get(t);if(!n){let e=new Intl.Locale(t);n="getWeekInfo"in e?e.getWeekInfo():e.weekInfo,"minimalDays"in n||(n=_(_({},Wk),n)),z0.set(t,n)}return n}function KU(t){let n=t.indexOf("-x-");n!==-1&&(t=t.substring(0,n));let e=t.indexOf("-u-");if(e===-1)return[t];{let i,r;try{i=V0(t).resolvedOptions(),r=t}catch{let l=t.substring(0,e);i=V0(l).resolvedOptions(),r=l}let{numberingSystem:o,calendar:a}=i;return[r,o,a]}}function JU(t,n,e){return(e||n)&&(t.includes("-u-")||(t+="-u"),e&&(t+=`-ca-${e}`),n&&(t+=`-nu-${n}`)),t}function eH(t){let n=[];for(let e=1;e<=12;e++){let i=tt.utc(2009,e,1);n.push(t(i))}return n}function tH(t){let n=[];for(let e=1;e<=7;e++){let i=tt.utc(2016,11,13+e);n.push(t(i))}return n}function hp(t,n,e,i){let r=t.listingMode();return r==="error"?null:r==="en"?e(n):i(n)}function nH(t){return t.numberingSystem&&t.numberingSystem!=="latn"?!1:t.numberingSystem==="latn"||!t.locale||t.locale.startsWith("en")||$k(t.locale).numberingSystem==="latn"}var $0=class{constructor(n,e,i){this.padTo=i.padTo||0,this.floor=i.floor||!1;let s=i,{padTo:r,floor:o}=s,a=Eu(s,["padTo","floor"]);if(!e||Object.keys(a).length>0){let l=_({useGrouping:!1},i);i.padTo>0&&(l.minimumIntegerDigits=i.padTo),this.inf=ZU(n,l)}}format(n){if(this.inf){let e=this.floor?Math.floor(n):n;return this.inf.format(e)}else{let e=this.floor?Math.floor(n):nC(n,3);return Ot(e,this.padTo)}}},W0=class{constructor(n,e,i){this.opts=i,this.originalZone=void 0;let r;if(this.opts.timeZone)this.dt=n;else if(n.zone.type==="fixed"){let a=-1*(n.offset/60),s=a>=0?`Etc/GMT+${a}`:`Etc/GMT${a}`;n.offset!==0&&zo.create(s).valid?(r=s,this.dt=n):(r="UTC",this.dt=n.offset===0?n:n.setZone("UTC").plus({minutes:n.offset}),this.originalZone=n.zone)}else n.zone.type==="system"?this.dt=n:n.zone.type==="iana"?(this.dt=n,r=n.zone.name):(r="UTC",this.dt=n.setZone("UTC").plus({minutes:n.offset}),this.originalZone=n.zone);let o=_({},this.opts);o.timeZone=o.timeZone||r,this.dtf=V0(e,o)}format(){return this.originalZone?this.formatToParts().map(({value:n})=>n).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){let n=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?n.map(e=>{if(e.type==="timeZoneName"){let i=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return te(_({},e),{value:i})}else return e}):n}resolvedOptions(){return this.dtf.resolvedOptions()}},G0=class{constructor(n,e,i){this.opts=_({style:"long"},i),!e&&Kk()&&(this.rtf=YU(n,i))}format(n,e){return this.rtf?this.rtf.format(n,e):xH(e,n,this.opts.numeric,this.opts.style!=="long")}formatToParts(n,e){return this.rtf?this.rtf.formatToParts(n,e):[]}},Wk={firstDay:1,minimalDays:4,weekend:[6,7]},rt=class t{static fromOpts(n){return t.create(n.locale,n.numberingSystem,n.outputCalendar,n.weekSettings,n.defaultToEN)}static create(n,e,i,r,o=!1){let a=n||pt.defaultLocale,s=a||(o?"en-US":QU()),l=e||pt.defaultNumberingSystem,c=i||pt.defaultOutputCalendar,d=Y0(r)||pt.defaultWeekSettings;return new t(s,l,c,d,a)}static resetCache(){eu=null,B0.clear(),j0.clear(),U0.clear(),H0.clear(),z0.clear()}static fromObject({locale:n,numberingSystem:e,outputCalendar:i,weekSettings:r}={}){return t.create(n,e,i,r)}constructor(n,e,i,r,o){let[a,s,l]=KU(n);this.locale=a,this.numberingSystem=e||s||null,this.outputCalendar=i||l||null,this.weekSettings=r,this.intl=JU(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=o,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=nH(this)),this.fastNumbersCached}listingMode(){let n=this.isEnglish(),e=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return n&&e?"en":"intl"}clone(n){return!n||Object.getOwnPropertyNames(n).length===0?this:t.create(n.locale||this.specifiedLocale,n.numberingSystem||this.numberingSystem,n.outputCalendar||this.outputCalendar,Y0(n.weekSettings)||this.weekSettings,n.defaultToEN||!1)}redefaultToEN(n={}){return this.clone(te(_({},n),{defaultToEN:!0}))}redefaultToSystem(n={}){return this.clone(te(_({},n),{defaultToEN:!1}))}months(n,e=!1){return hp(this,n,i1,()=>{let i=this.intl==="ja"||this.intl.startsWith("ja-");e&=!i;let r=e?{month:n,day:"numeric"}:{month:n},o=e?"format":"standalone";if(!this.monthsCache[o][n]){let a=i?s=>this.dtFormatter(s,r).format():s=>this.extract(s,r,"month");this.monthsCache[o][n]=eH(a)}return this.monthsCache[o][n]})}weekdays(n,e=!1){return hp(this,n,a1,()=>{let i=e?{weekday:n,year:"numeric",month:"long",day:"numeric"}:{weekday:n},r=e?"format":"standalone";return this.weekdaysCache[r][n]||(this.weekdaysCache[r][n]=tH(o=>this.extract(o,i,"weekday"))),this.weekdaysCache[r][n]})}meridiems(){return hp(this,void 0,()=>s1,()=>{if(!this.meridiemCache){let n={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[tt.utc(2016,11,13,9),tt.utc(2016,11,13,19)].map(e=>this.extract(e,n,"dayperiod"))}return this.meridiemCache})}eras(n){return hp(this,n,l1,()=>{let e={era:n};return this.eraCache[n]||(this.eraCache[n]=[tt.utc(-40,1,1),tt.utc(2017,1,1)].map(i=>this.extract(i,e,"era"))),this.eraCache[n]})}extract(n,e,i){let r=this.dtFormatter(n,e),o=r.formatToParts(),a=o.find(s=>s.type.toLowerCase()===i);return a?a.value:null}numberFormatter(n={}){return new $0(this.intl,n.forceSimple||this.fastNumbers,n)}dtFormatter(n,e={}){return new W0(n,this.intl,e)}relFormatter(n={}){return new G0(this.intl,this.isEnglish(),n)}listFormatter(n={}){return qU(this.intl,n)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||$k(this.intl).locale.startsWith("en-us")}getWeekSettings(){return this.weekSettings?this.weekSettings:Jk()?XU(this.locale):Wk}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(n){return this.locale===n.locale&&this.numberingSystem===n.numberingSystem&&this.outputCalendar===n.outputCalendar}toString(){return`Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`}},S0=null,di=class t extends Xa{static get utcInstance(){return S0===null&&(S0=new t(0)),S0}static instance(n){return n===0?t.utcInstance:new t(n)}static parseSpecifier(n){if(n){let e=n.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(e)return new t(Tp(e[1],e[2]))}return null}constructor(n){super(),this.fixed=n}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${iu(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${iu(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(n,e){return iu(this.fixed,e)}get isUniversal(){return!0}offset(){return this.fixed}equals(n){return n.type==="fixed"&&n.fixed===this.fixed}get isValid(){return!0}},q0=class extends Xa{constructor(n){super(),this.zoneName=n}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}};function jo(t,n){if(pe(t)||t===null)return n;if(t instanceof Xa)return t;if(lH(t)){let e=t.toLowerCase();return e==="default"?n:e==="local"||e==="system"?wp.instance:e==="utc"||e==="gmt"?di.utcInstance:di.parseSpecifier(e)||zo.create(t)}else return Ho(t)?di.instance(t):typeof t=="object"&&"offset"in t&&typeof t.offset=="function"?t:new q0(t)}var K0={arab:"[\u0660-\u0669]",arabext:"[\u06F0-\u06F9]",bali:"[\u1B50-\u1B59]",beng:"[\u09E6-\u09EF]",deva:"[\u0966-\u096F]",fullwide:"[\uFF10-\uFF19]",gujr:"[\u0AE6-\u0AEF]",hanidec:"[\u3007|\u4E00|\u4E8C|\u4E09|\u56DB|\u4E94|\u516D|\u4E03|\u516B|\u4E5D]",khmr:"[\u17E0-\u17E9]",knda:"[\u0CE6-\u0CEF]",laoo:"[\u0ED0-\u0ED9]",limb:"[\u1946-\u194F]",mlym:"[\u0D66-\u0D6F]",mong:"[\u1810-\u1819]",mymr:"[\u1040-\u1049]",orya:"[\u0B66-\u0B6F]",tamldec:"[\u0BE6-\u0BEF]",telu:"[\u0C66-\u0C6F]",thai:"[\u0E50-\u0E59]",tibt:"[\u0F20-\u0F29]",latn:"\\d"},QT={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},iH=K0.hanidec.replace(/[\[|\]]/g,"").split("");function rH(t){let n=parseInt(t,10);if(isNaN(n)){n="";for(let e=0;e<t.length;e++){let i=t.charCodeAt(e);if(t[e].search(K0.hanidec)!==-1)n+=iH.indexOf(t[e]);else for(let r in QT){let[o,a]=QT[r];i>=o&&i<=a&&(n+=i-o)}}return parseInt(n,10)}else return n}var Z0=new Map;function oH(){Z0.clear()}function Fi({numberingSystem:t},n=""){let e=t||"latn",i=Z0.get(e);i===void 0&&(i=new Map,Z0.set(e,i));let r=i.get(n);return r===void 0&&(r=new RegExp(`${K0[e]}${n}`),i.set(n,r)),r}var XT=()=>Date.now(),KT="system",JT=null,ek=null,tk=null,nk=60,ik,rk=null,pt=class{static get now(){return XT}static set now(n){XT=n}static set defaultZone(n){KT=n}static get defaultZone(){return jo(KT,wp.instance)}static get defaultLocale(){return JT}static set defaultLocale(n){JT=n}static get defaultNumberingSystem(){return ek}static set defaultNumberingSystem(n){ek=n}static get defaultOutputCalendar(){return tk}static set defaultOutputCalendar(n){tk=n}static get defaultWeekSettings(){return rk}static set defaultWeekSettings(n){rk=Y0(n)}static get twoDigitCutoffYear(){return nk}static set twoDigitCutoffYear(n){nk=n%100}static get throwOnInvalid(){return ik}static set throwOnInvalid(n){ik=n}static resetCaches(){rt.resetCache(),zo.resetCache(),tt.resetCache(),oH()}},Wn=class{constructor(n,e){this.reason=n,this.explanation=e}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}},Gk=[0,31,59,90,120,151,181,212,243,273,304,334],qk=[0,31,60,91,121,152,182,213,244,274,305,335];function li(t,n){return new Wn("unit out of range",`you specified ${n} (of type ${typeof n}) as a ${t}, which is invalid`)}function J0(t,n,e){let i=new Date(Date.UTC(t,n-1,e));t<100&&t>=0&&i.setUTCFullYear(i.getUTCFullYear()-1900);let r=i.getUTCDay();return r===0?7:r}function Zk(t,n,e){return e+(ou(t)?qk:Gk)[n-1]}function Yk(t,n){let e=ou(t)?qk:Gk,i=e.findIndex(o=>o<n),r=n-e[i];return{month:i+1,day:r}}function eC(t,n){return(t-n+7)%7+1}function xp(t,n=4,e=1){let{year:i,month:r,day:o}=t,a=Zk(i,r,o),s=eC(J0(i,r,o),e),l=Math.floor((a-s+14-n)/7),c;return l<1?(c=i-1,l=ru(c,n,e)):l>ru(i,n,e)?(c=i+1,l=1):c=i,_({weekYear:c,weekNumber:l,weekday:s},kp(t))}function ok(t,n=4,e=1){let{weekYear:i,weekNumber:r,weekday:o}=t,a=eC(J0(i,1,n),e),s=Dl(i),l=r*7+o-a-7+n,c;l<1?(c=i-1,l+=Dl(c)):l>s?(c=i+1,l-=Dl(i)):c=i;let{month:d,day:m}=Yk(c,l);return _({year:c,month:d,day:m},kp(t))}function I0(t){let{year:n,month:e,day:i}=t,r=Zk(n,e,i);return _({year:n,ordinal:r},kp(t))}function ak(t){let{year:n,ordinal:e}=t,{month:i,day:r}=Yk(n,e);return _({year:n,month:i,day:r},kp(t))}function sk(t,n){if(!pe(t.localWeekday)||!pe(t.localWeekNumber)||!pe(t.localWeekYear)){if(!pe(t.weekday)||!pe(t.weekNumber)||!pe(t.weekYear))throw new Uo("Cannot mix locale-based week fields with ISO-based week fields");return pe(t.localWeekday)||(t.weekday=t.localWeekday),pe(t.localWeekNumber)||(t.weekNumber=t.localWeekNumber),pe(t.localWeekYear)||(t.weekYear=t.localWeekYear),delete t.localWeekday,delete t.localWeekNumber,delete t.localWeekYear,{minDaysInFirstWeek:n.getMinDaysInFirstWeek(),startOfWeek:n.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}function aH(t,n=4,e=1){let i=Sp(t.weekYear),r=ci(t.weekNumber,1,ru(t.weekYear,n,e)),o=ci(t.weekday,1,7);return i?r?o?!1:li("weekday",t.weekday):li("week",t.weekNumber):li("weekYear",t.weekYear)}function sH(t){let n=Sp(t.year),e=ci(t.ordinal,1,Dl(t.year));return n?e?!1:li("ordinal",t.ordinal):li("year",t.year)}function Qk(t){let n=Sp(t.year),e=ci(t.month,1,12),i=ci(t.day,1,Ep(t.year,t.month));return n?e?i?!1:li("day",t.day):li("month",t.month):li("year",t.year)}function Xk(t){let{hour:n,minute:e,second:i,millisecond:r}=t,o=ci(n,0,23)||n===24&&e===0&&i===0&&r===0,a=ci(e,0,59),s=ci(i,0,59),l=ci(r,0,999);return o?a?s?l?!1:li("millisecond",r):li("second",i):li("minute",e):li("hour",n)}function pe(t){return typeof t>"u"}function Ho(t){return typeof t=="number"}function Sp(t){return typeof t=="number"&&t%1===0}function lH(t){return typeof t=="string"}function cH(t){return Object.prototype.toString.call(t)==="[object Date]"}function Kk(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}function Jk(){try{return typeof Intl<"u"&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch{return!1}}function dH(t){return Array.isArray(t)?t:[t]}function lk(t,n,e){if(t.length!==0)return t.reduce((i,r)=>{let o=[n(r),r];return i&&e(i[0],o[0])===i[0]?i:o},null)[1]}function uH(t,n){return n.reduce((e,i)=>(e[i]=t[i],e),{})}function Il(t,n){return Object.prototype.hasOwnProperty.call(t,n)}function Y0(t){if(t==null)return null;if(typeof t!="object")throw new qt("Week settings must be an object");if(!ci(t.firstDay,1,7)||!ci(t.minimalDays,1,7)||!Array.isArray(t.weekend)||t.weekend.some(n=>!ci(n,1,7)))throw new qt("Invalid week settings");return{firstDay:t.firstDay,minimalDays:t.minimalDays,weekend:Array.from(t.weekend)}}function ci(t,n,e){return Sp(t)&&t>=n&&t<=e}function mH(t,n){return t-n*Math.floor(t/n)}function Ot(t,n=2){let e=t<0,i;return e?i="-"+(""+-t).padStart(n,"0"):i=(""+t).padStart(n,"0"),i}function Vo(t){if(!(pe(t)||t===null||t===""))return parseInt(t,10)}function Za(t){if(!(pe(t)||t===null||t===""))return parseFloat(t)}function tC(t){if(!(pe(t)||t===null||t==="")){let n=parseFloat("0."+t)*1e3;return Math.floor(n)}}function nC(t,n,e="round"){let i=10**n;switch(e){case"expand":return t>0?Math.ceil(t*i)/i:Math.floor(t*i)/i;case"trunc":return Math.trunc(t*i)/i;case"round":return Math.round(t*i)/i;case"floor":return Math.floor(t*i)/i;case"ceil":return Math.ceil(t*i)/i;default:throw new RangeError(`Value rounding ${e} is out of range`)}}function ou(t){return t%4===0&&(t%100!==0||t%400===0)}function Dl(t){return ou(t)?366:365}function Ep(t,n){let e=mH(n-1,12)+1,i=t+(n-e)/12;return e===2?ou(i)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][e-1]}function Ip(t){let n=Date.UTC(t.year,t.month-1,t.day,t.hour,t.minute,t.second,t.millisecond);return t.year<100&&t.year>=0&&(n=new Date(n),n.setUTCFullYear(t.year,t.month-1,t.day)),+n}function ck(t,n,e){return-eC(J0(t,1,n),e)+n-1}function ru(t,n=4,e=1){let i=ck(t,n,e),r=ck(t+1,n,e);return(Dl(t)-i+r)/7}function Q0(t){return t>99?t:t>pt.twoDigitCutoffYear?1900+t:2e3+t}function e1(t,n,e,i=null){let r=new Date(t),o={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};i&&(o.timeZone=i);let a=_({timeZoneName:n},o),s=new Intl.DateTimeFormat(e,a).formatToParts(r).find(l=>l.type.toLowerCase()==="timezonename");return s?s.value:null}function Tp(t,n){let e=parseInt(t,10);Number.isNaN(e)&&(e=0);let i=parseInt(n,10)||0,r=e<0||Object.is(e,-0)?-i:i;return e*60+r}function t1(t){let n=Number(t);if(typeof t=="boolean"||t===""||!Number.isFinite(n))throw new qt(`Invalid unit value ${t}`);return n}function Dp(t,n){let e={};for(let i in t)if(Il(t,i)){let r=t[i];if(r==null)continue;e[n(i)]=t1(r)}return e}function iu(t,n){let e=Math.trunc(Math.abs(t/60)),i=Math.trunc(Math.abs(t%60)),r=t>=0?"+":"-";switch(n){case"short":return`${r}${Ot(e,2)}:${Ot(i,2)}`;case"narrow":return`${r}${e}${i>0?`:${i}`:""}`;case"techie":return`${r}${Ot(e,2)}${Ot(i,2)}`;default:throw new RangeError(`Value format ${n} is out of range for property format`)}}function kp(t){return uH(t,["hour","minute","second","millisecond"])}var hH=["January","February","March","April","May","June","July","August","September","October","November","December"],n1=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],fH=["J","F","M","A","M","J","J","A","S","O","N","D"];function i1(t){switch(t){case"narrow":return[...fH];case"short":return[...n1];case"long":return[...hH];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}var r1=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],o1=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],pH=["M","T","W","T","F","S","S"];function a1(t){switch(t){case"narrow":return[...pH];case"short":return[...o1];case"long":return[...r1];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}var s1=["AM","PM"],gH=["Before Christ","Anno Domini"],_H=["BC","AD"],bH=["B","A"];function l1(t){switch(t){case"narrow":return[...bH];case"short":return[..._H];case"long":return[...gH];default:return null}}function vH(t){return s1[t.hour<12?0:1]}function yH(t,n){return a1(n)[t.weekday-1]}function CH(t,n){return i1(n)[t.month-1]}function wH(t,n){return l1(n)[t.year<0?0:1]}function xH(t,n,e="always",i=!1){let r={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},o=["hours","minutes","seconds"].indexOf(t)===-1;if(e==="auto"&&o){let m=t==="days";switch(n){case 1:return m?"tomorrow":`next ${r[t][0]}`;case-1:return m?"yesterday":`last ${r[t][0]}`;case 0:return m?"today":`this ${r[t][0]}`}}let a=Object.is(n,-0)||n<0,s=Math.abs(n),l=s===1,c=r[t],d=i?l?c[1]:c[2]||c[1]:l?r[t][0]:t;return a?`${s} ${d} ago`:`in ${s} ${d}`}function dk(t,n){let e="";for(let i of t)i.literal?e+=i.val:e+=n(i.val);return e}var EH={D:Cp,DD:Dk,DDD:Mk,DDDD:Sk,t:Ik,tt:Tk,ttt:kk,tttt:Ok,T:Rk,TT:Ak,TTT:Nk,TTTT:Pk,f:Fk,ff:Bk,fff:jk,ffff:Hk,F:Lk,FF:Vk,FFF:Uk,FFFF:zk},$n=class t{static create(n,e={}){return new t(n,e)}static parseFormat(n){let e=null,i="",r=!1,o=[];for(let a=0;a<n.length;a++){let s=n.charAt(a);s==="'"?((i.length>0||r)&&o.push({literal:r||/^\s+$/.test(i),val:i===""?"'":i}),e=null,i="",r=!r):r||s===e?i+=s:(i.length>0&&o.push({literal:/^\s+$/.test(i),val:i}),i=s,e=s)}return i.length>0&&o.push({literal:r||/^\s+$/.test(i),val:i}),o}static macroTokenToFormatOpts(n){return EH[n]}constructor(n,e){this.opts=e,this.loc=n,this.systemLoc=null}formatWithSystemDefault(n,e){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(n,_(_({},this.opts),e)).format()}dtFormatter(n,e={}){return this.loc.dtFormatter(n,_(_({},this.opts),e))}formatDateTime(n,e){return this.dtFormatter(n,e).format()}formatDateTimeParts(n,e){return this.dtFormatter(n,e).formatToParts()}formatInterval(n,e){return this.dtFormatter(n.start,e).dtf.formatRange(n.start.toJSDate(),n.end.toJSDate())}resolvedOptions(n,e){return this.dtFormatter(n,e).resolvedOptions()}num(n,e=0,i=void 0){if(this.opts.forceSimple)return Ot(n,e);let r=_({},this.opts);return e>0&&(r.padTo=e),i&&(r.signDisplay=i),this.loc.numberFormatter(r).format(n)}formatDateTimeFromString(n,e){let i=this.loc.listingMode()==="en",r=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",o=(h,b)=>this.loc.extract(n,h,b),a=h=>n.isOffsetFixed&&n.offset===0&&h.allowZ?"Z":n.isValid?n.zone.formatOffset(n.ts,h.format):"",s=()=>i?vH(n):o({hour:"numeric",hourCycle:"h12"},"dayperiod"),l=(h,b)=>i?CH(n,h):o(b?{month:h}:{month:h,day:"numeric"},"month"),c=(h,b)=>i?yH(n,h):o(b?{weekday:h}:{weekday:h,month:"long",day:"numeric"},"weekday"),d=h=>{let b=t.macroTokenToFormatOpts(h);return b?this.formatWithSystemDefault(n,b):h},m=h=>i?wH(n,h):o({era:h},"era"),f=h=>{switch(h){case"S":return this.num(n.millisecond);case"u":case"SSS":return this.num(n.millisecond,3);case"s":return this.num(n.second);case"ss":return this.num(n.second,2);case"uu":return this.num(Math.floor(n.millisecond/10),2);case"uuu":return this.num(Math.floor(n.millisecond/100));case"m":return this.num(n.minute);case"mm":return this.num(n.minute,2);case"h":return this.num(n.hour%12===0?12:n.hour%12);case"hh":return this.num(n.hour%12===0?12:n.hour%12,2);case"H":return this.num(n.hour);case"HH":return this.num(n.hour,2);case"Z":return a({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return a({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return a({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return n.zone.offsetName(n.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return n.zone.offsetName(n.ts,{format:"long",locale:this.loc.locale});case"z":return n.zoneName;case"a":return s();case"d":return r?o({day:"numeric"},"day"):this.num(n.day);case"dd":return r?o({day:"2-digit"},"day"):this.num(n.day,2);case"c":return this.num(n.weekday);case"ccc":return c("short",!0);case"cccc":return c("long",!0);case"ccccc":return c("narrow",!0);case"E":return this.num(n.weekday);case"EEE":return c("short",!1);case"EEEE":return c("long",!1);case"EEEEE":return c("narrow",!1);case"L":return r?o({month:"numeric",day:"numeric"},"month"):this.num(n.month);case"LL":return r?o({month:"2-digit",day:"numeric"},"month"):this.num(n.month,2);case"LLL":return l("short",!0);case"LLLL":return l("long",!0);case"LLLLL":return l("narrow",!0);case"M":return r?o({month:"numeric"},"month"):this.num(n.month);case"MM":return r?o({month:"2-digit"},"month"):this.num(n.month,2);case"MMM":return l("short",!1);case"MMMM":return l("long",!1);case"MMMMM":return l("narrow",!1);case"y":return r?o({year:"numeric"},"year"):this.num(n.year);case"yy":return r?o({year:"2-digit"},"year"):this.num(n.year.toString().slice(-2),2);case"yyyy":return r?o({year:"numeric"},"year"):this.num(n.year,4);case"yyyyyy":return r?o({year:"numeric"},"year"):this.num(n.year,6);case"G":return m("short");case"GG":return m("long");case"GGGGG":return m("narrow");case"kk":return this.num(n.weekYear.toString().slice(-2),2);case"kkkk":return this.num(n.weekYear,4);case"W":return this.num(n.weekNumber);case"WW":return this.num(n.weekNumber,2);case"n":return this.num(n.localWeekNumber);case"nn":return this.num(n.localWeekNumber,2);case"ii":return this.num(n.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(n.localWeekYear,4);case"o":return this.num(n.ordinal);case"ooo":return this.num(n.ordinal,3);case"q":return this.num(n.quarter);case"qq":return this.num(n.quarter,2);case"X":return this.num(Math.floor(n.ts/1e3));case"x":return this.num(n.ts);default:return d(h)}};return dk(t.parseFormat(e),f)}formatDurationFromString(n,e){let i=this.opts.signMode==="negativeLargestOnly"?-1:1,r=d=>{switch(d[0]){case"S":return"milliseconds";case"s":return"seconds";case"m":return"minutes";case"h":return"hours";case"d":return"days";case"w":return"weeks";case"M":return"months";case"y":return"years";default:return null}},o=(d,m)=>f=>{let h=r(f);if(h){let b=m.isNegativeDuration&&h!==m.largestUnit?i:1,D;return this.opts.signMode==="negativeLargestOnly"&&h!==m.largestUnit?D="never":this.opts.signMode==="all"?D="always":D="auto",this.num(d.get(h)*b,f.length,D)}else return f},a=t.parseFormat(e),s=a.reduce((d,{literal:m,val:f})=>m?d:d.concat(f),[]),l=n.shiftTo(...s.map(r).filter(d=>d)),c={isNegativeDuration:l<0,largestUnit:Object.keys(l.values)[0]};return dk(a,o(l,c))}},c1=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function Tl(...t){let n=t.reduce((e,i)=>e+i.source,"");return RegExp(`^${n}$`)}function kl(...t){return n=>t.reduce(([e,i,r],o)=>{let[a,s,l]=o(n,r);return[_(_({},e),a),s||i,l]},[{},null,1]).slice(0,2)}function Ol(t,...n){if(t==null)return[null,null];for(let[e,i]of n){let r=e.exec(t);if(r)return i(r)}return[null,null]}function d1(...t){return(n,e)=>{let i={},r;for(r=0;r<t.length;r++)i[t[r]]=Vo(n[e+r]);return[i,null,e+r]}}var u1=/(?:([Zz])|([+-]\d\d)(?::?(\d\d))?)/,DH=`(?:${u1.source}?(?:\\[(${c1.source})\\])?)?`,iC=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,m1=RegExp(`${iC.source}${DH}`),rC=RegExp(`(?:[Tt]${m1.source})?`),MH=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,SH=/(\d{4})-?W(\d\d)(?:-?(\d))?/,IH=/(\d{4})-?(\d{3})/,TH=d1("weekYear","weekNumber","weekDay"),kH=d1("year","ordinal"),OH=/(\d{4})-(\d\d)-(\d\d)/,h1=RegExp(`${iC.source} ?(?:${u1.source}|(${c1.source}))?`),RH=RegExp(`(?: ${h1.source})?`);function Ml(t,n,e){let i=t[n];return pe(i)?e:Vo(i)}function AH(t,n){return[{year:Ml(t,n),month:Ml(t,n+1,1),day:Ml(t,n+2,1)},null,n+3]}function Rl(t,n){return[{hours:Ml(t,n,0),minutes:Ml(t,n+1,0),seconds:Ml(t,n+2,0),milliseconds:tC(t[n+3])},null,n+4]}function au(t,n){let e=!t[n]&&!t[n+1],i=Tp(t[n+1],t[n+2]),r=e?null:di.instance(i);return[{},r,n+3]}function su(t,n){let e=t[n]?zo.create(t[n]):null;return[{},e,n+1]}var NH=RegExp(`^T?${iC.source}$`),PH=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function FH(t){let[n,e,i,r,o,a,s,l,c]=t,d=n[0]==="-",m=l&&l[0]==="-",f=(h,b=!1)=>h!==void 0&&(b||h&&d)?-h:h;return[{years:f(Za(e)),months:f(Za(i)),weeks:f(Za(r)),days:f(Za(o)),hours:f(Za(a)),minutes:f(Za(s)),seconds:f(Za(l),l==="-0"),milliseconds:f(tC(c),m)}]}var LH={GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function oC(t,n,e,i,r,o,a){let s={year:n.length===2?Q0(Vo(n)):Vo(n),month:n1.indexOf(e)+1,day:Vo(i),hour:Vo(r),minute:Vo(o)};return a&&(s.second=Vo(a)),t&&(s.weekday=t.length>3?r1.indexOf(t)+1:o1.indexOf(t)+1),s}var BH=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function VH(t){let[,n,e,i,r,o,a,s,l,c,d,m]=t,f=oC(n,r,i,e,o,a,s),h;return l?h=LH[l]:c?h=0:h=Tp(d,m),[f,new di(h)]}function jH(t){return t.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}var UH=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,HH=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,zH=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function uk(t){let[,n,e,i,r,o,a,s]=t;return[oC(n,r,i,e,o,a,s),di.utcInstance]}function $H(t){let[,n,e,i,r,o,a,s]=t;return[oC(n,s,e,i,r,o,a),di.utcInstance]}var WH=Tl(MH,rC),GH=Tl(SH,rC),qH=Tl(IH,rC),ZH=Tl(m1),f1=kl(AH,Rl,au,su),YH=kl(TH,Rl,au,su),QH=kl(kH,Rl,au,su),XH=kl(Rl,au,su);function KH(t){return Ol(t,[WH,f1],[GH,YH],[qH,QH],[ZH,XH])}function JH(t){return Ol(jH(t),[BH,VH])}function e3(t){return Ol(t,[UH,uk],[HH,uk],[zH,$H])}function t3(t){return Ol(t,[PH,FH])}var n3=kl(Rl);function i3(t){return Ol(t,[NH,n3])}var r3=Tl(OH,RH),o3=Tl(h1),a3=kl(Rl,au,su);function s3(t){return Ol(t,[r3,f1],[o3,a3])}var mk="Invalid Duration",p1={weeks:{days:7,hours:168,minutes:10080,seconds:10080*60,milliseconds:10080*60*1e3},days:{hours:24,minutes:1440,seconds:1440*60,milliseconds:1440*60*1e3},hours:{minutes:60,seconds:3600,milliseconds:3600*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},l3=_({years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:2184,minutes:2184*60,seconds:2184*60*60,milliseconds:2184*60*60*1e3},months:{weeks:4,days:30,hours:720,minutes:720*60,seconds:720*60*60,milliseconds:720*60*60*1e3}},p1),si=146097/400,Cl=146097/4800,c3=_({years:{quarters:4,months:12,weeks:si/7,days:si,hours:si*24,minutes:si*24*60,seconds:si*24*60*60,milliseconds:si*24*60*60*1e3},quarters:{months:3,weeks:si/28,days:si/4,hours:si*24/4,minutes:si*24*60/4,seconds:si*24*60*60/4,milliseconds:si*24*60*60*1e3/4},months:{weeks:Cl/7,days:Cl,hours:Cl*24,minutes:Cl*24*60,seconds:Cl*24*60*60,milliseconds:Cl*24*60*60*1e3}},p1),Qa=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],d3=Qa.slice(0).reverse();function Qr(t,n,e=!1){let i={values:e?n.values:_(_({},t.values),n.values||{}),loc:t.loc.clone(n.loc),conversionAccuracy:n.conversionAccuracy||t.conversionAccuracy,matrix:n.matrix||t.matrix};return new Zt(i)}function g1(t,n){let e=n.milliseconds??0;for(let i of d3.slice(1))n[i]&&(e+=n[i]*t[i].milliseconds);return e}function hk(t,n){let e=g1(t,n)<0?-1:1;Qa.reduceRight((i,r)=>{if(pe(n[r]))return i;if(i){let o=n[i]*e,a=t[r][i],s=Math.floor(o/a);n[r]+=s*e,n[i]-=s*a*e}return r},null),Qa.reduce((i,r)=>{if(pe(n[r]))return i;if(i){let o=n[i]%1;n[i]-=o,n[r]+=o*t[i][r]}return r},null)}function fk(t){let n={};for(let[e,i]of Object.entries(t))i!==0&&(n[e]=i);return n}var Zt=class t{constructor(n){let e=n.conversionAccuracy==="longterm"||!1,i=e?c3:l3;n.matrix&&(i=n.matrix),this.values=n.values,this.loc=n.loc||rt.create(),this.conversionAccuracy=e?"longterm":"casual",this.invalid=n.invalid||null,this.matrix=i,this.isLuxonDuration=!0}static fromMillis(n,e){return t.fromObject({milliseconds:n},e)}static fromObject(n,e={}){if(n==null||typeof n!="object")throw new qt(`Duration.fromObject: argument expected to be an object, got ${n===null?"null":typeof n}`);return new t({values:Dp(n,t.normalizeUnit),loc:rt.fromObject(e),conversionAccuracy:e.conversionAccuracy,matrix:e.matrix})}static fromDurationLike(n){if(Ho(n))return t.fromMillis(n);if(t.isDuration(n))return n;if(typeof n=="object")return t.fromObject(n);throw new qt(`Unknown duration argument ${n} of type ${typeof n}`)}static fromISO(n,e){let[i]=t3(n);return i?t.fromObject(i,e):t.invalid("unparsable",`the input "${n}" can't be parsed as ISO 8601`)}static fromISOTime(n,e){let[i]=i3(n);return i?t.fromObject(i,e):t.invalid("unparsable",`the input "${n}" can't be parsed as ISO 8601`)}static invalid(n,e=null){if(!n)throw new qt("need to specify a reason the Duration is invalid");let i=n instanceof Wn?n:new Wn(n,e);if(pt.throwOnInvalid)throw new F0(i);return new t({invalid:i})}static normalizeUnit(n){let e={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[n&&n.toLowerCase()];if(!e)throw new yp(n);return e}static isDuration(n){return n&&n.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(n,e={}){let i=te(_({},e),{floor:e.round!==!1&&e.floor!==!1});return this.isValid?$n.create(this.loc,i).formatDurationFromString(this,n):mk}toHuman(n={}){if(!this.isValid)return mk;let e=n.showZeros!==!1,i=Qa.map(r=>{let o=this.values[r];return pe(o)||o===0&&!e?null:this.loc.numberFormatter(te(_({style:"unit",unitDisplay:"long"},n),{unit:r.slice(0,-1)})).format(o)}).filter(r=>r);return this.loc.listFormatter(_({type:"conjunction",style:n.listStyle||"narrow"},n)).format(i)}toObject(){return this.isValid?_({},this.values):{}}toISO(){if(!this.isValid)return null;let n="P";return this.years!==0&&(n+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(n+=this.months+this.quarters*3+"M"),this.weeks!==0&&(n+=this.weeks+"W"),this.days!==0&&(n+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(n+="T"),this.hours!==0&&(n+=this.hours+"H"),this.minutes!==0&&(n+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(n+=nC(this.seconds+this.milliseconds/1e3,3)+"S"),n==="P"&&(n+="T0S"),n}toISOTime(n={}){if(!this.isValid)return null;let e=this.toMillis();return e<0||e>=864e5?null:(n=te(_({suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended"},n),{includeOffset:!1}),tt.fromMillis(e,{zone:"UTC"}).toISOTime(n))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?g1(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(n){if(!this.isValid)return this;let e=t.fromDurationLike(n),i={};for(let r of Qa)(Il(e.values,r)||Il(this.values,r))&&(i[r]=e.get(r)+this.get(r));return Qr(this,{values:i},!0)}minus(n){if(!this.isValid)return this;let e=t.fromDurationLike(n);return this.plus(e.negate())}mapUnits(n){if(!this.isValid)return this;let e={};for(let i of Object.keys(this.values))e[i]=t1(n(this.values[i],i));return Qr(this,{values:e},!0)}get(n){return this[t.normalizeUnit(n)]}set(n){if(!this.isValid)return this;let e=_(_({},this.values),Dp(n,t.normalizeUnit));return Qr(this,{values:e})}reconfigure({locale:n,numberingSystem:e,conversionAccuracy:i,matrix:r}={}){let a={loc:this.loc.clone({locale:n,numberingSystem:e}),matrix:r,conversionAccuracy:i};return Qr(this,a)}as(n){return this.isValid?this.shiftTo(n).get(n):NaN}normalize(){if(!this.isValid)return this;let n=this.toObject();return hk(this.matrix,n),Qr(this,{values:n},!0)}rescale(){if(!this.isValid)return this;let n=fk(this.normalize().shiftToAll().toObject());return Qr(this,{values:n},!0)}shiftTo(...n){if(!this.isValid)return this;if(n.length===0)return this;n=n.map(a=>t.normalizeUnit(a));let e={},i={},r=this.toObject(),o;for(let a of Qa)if(n.indexOf(a)>=0){o=a;let s=0;for(let c in i)s+=this.matrix[c][a]*i[c],i[c]=0;Ho(r[a])&&(s+=r[a]);let l=Math.trunc(s);e[a]=l,i[a]=(s*1e3-l*1e3)/1e3}else Ho(r[a])&&(i[a]=r[a]);for(let a in i)i[a]!==0&&(e[o]+=a===o?i[a]:i[a]/this.matrix[o][a]);return hk(this.matrix,e),Qr(this,{values:e},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;let n={};for(let e of Object.keys(this.values))n[e]=this.values[e]===0?0:-this.values[e];return Qr(this,{values:n},!0)}removeZeros(){if(!this.isValid)return this;let n=fk(this.values);return Qr(this,{values:n},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(n){if(!this.isValid||!n.isValid||!this.loc.equals(n.loc))return!1;function e(i,r){return i===void 0||i===0?r===void 0||r===0:i===r}for(let i of Qa)if(!e(this.values[i],n.values[i]))return!1;return!0}},wl="Invalid Interval";function u3(t,n){return!t||!t.isValid?Sl.invalid("missing or invalid start"):!n||!n.isValid?Sl.invalid("missing or invalid end"):n<t?Sl.invalid("end before start",`The end of an interval must be after its start, but you had start=${t.toISO()} and end=${n.toISO()}`):null}var Sl=class t{constructor(n){this.s=n.start,this.e=n.end,this.invalid=n.invalid||null,this.isLuxonInterval=!0}static invalid(n,e=null){if(!n)throw new qt("need to specify a reason the Interval is invalid");let i=n instanceof Wn?n:new Wn(n,e);if(pt.throwOnInvalid)throw new P0(i);return new t({invalid:i})}static fromDateTimes(n,e){let i=Jd(n),r=Jd(e),o=u3(i,r);return o??new t({start:i,end:r})}static after(n,e){let i=Zt.fromDurationLike(e),r=Jd(n);return t.fromDateTimes(r,r.plus(i))}static before(n,e){let i=Zt.fromDurationLike(e),r=Jd(n);return t.fromDateTimes(r.minus(i),r)}static fromISO(n,e){let[i,r]=(n||"").split("/",2);if(i&&r){let o,a;try{o=tt.fromISO(i,e),a=o.isValid}catch{a=!1}let s,l;try{s=tt.fromISO(r,e),l=s.isValid}catch{l=!1}if(a&&l)return t.fromDateTimes(o,s);if(a){let c=Zt.fromISO(r,e);if(c.isValid)return t.after(o,c)}else if(l){let c=Zt.fromISO(i,e);if(c.isValid)return t.before(s,c)}}return t.invalid("unparsable",`the input "${n}" can't be parsed as ISO 8601`)}static isInterval(n){return n&&n.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get lastDateTime(){return this.isValid&&this.e?this.e.minus(1):null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(n="milliseconds"){return this.isValid?this.toDuration(n).get(n):NaN}count(n="milliseconds",e){if(!this.isValid)return NaN;let i=this.start.startOf(n,e),r;return e?.useLocaleWeeks?r=this.end.reconfigure({locale:i.locale}):r=this.end,r=r.startOf(n,e),Math.floor(r.diff(i,n).get(n))+(r.valueOf()!==this.end.valueOf())}hasSame(n){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,n):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(n){return this.isValid?this.s>n:!1}isBefore(n){return this.isValid?this.e<=n:!1}contains(n){return this.isValid?this.s<=n&&this.e>n:!1}set({start:n,end:e}={}){return this.isValid?t.fromDateTimes(n||this.s,e||this.e):this}splitAt(...n){if(!this.isValid)return[];let e=n.map(Jd).filter(a=>this.contains(a)).sort((a,s)=>a.toMillis()-s.toMillis()),i=[],{s:r}=this,o=0;for(;r<this.e;){let a=e[o]||this.e,s=+a>+this.e?this.e:a;i.push(t.fromDateTimes(r,s)),r=s,o+=1}return i}splitBy(n){let e=Zt.fromDurationLike(n);if(!this.isValid||!e.isValid||e.as("milliseconds")===0)return[];let{s:i}=this,r=1,o,a=[];for(;i<this.e;){let s=this.start.plus(e.mapUnits(l=>l*r));o=+s>+this.e?this.e:s,a.push(t.fromDateTimes(i,o)),i=o,r+=1}return a}divideEqually(n){return this.isValid?this.splitBy(this.length()/n).slice(0,n):[]}overlaps(n){return this.e>n.s&&this.s<n.e}abutsStart(n){return this.isValid?+this.e==+n.s:!1}abutsEnd(n){return this.isValid?+n.e==+this.s:!1}engulfs(n){return this.isValid?this.s<=n.s&&this.e>=n.e:!1}equals(n){return!this.isValid||!n.isValid?!1:this.s.equals(n.s)&&this.e.equals(n.e)}intersection(n){if(!this.isValid)return this;let e=this.s>n.s?this.s:n.s,i=this.e<n.e?this.e:n.e;return e>=i?null:t.fromDateTimes(e,i)}union(n){if(!this.isValid)return this;let e=this.s<n.s?this.s:n.s,i=this.e>n.e?this.e:n.e;return t.fromDateTimes(e,i)}static merge(n){let[e,i]=n.sort((r,o)=>r.s-o.s).reduce(([r,o],a)=>o?o.overlaps(a)||o.abutsStart(a)?[r,o.union(a)]:[r.concat([o]),a]:[r,a],[[],null]);return i&&e.push(i),e}static xor(n){let e=null,i=0,r=[],o=n.map(l=>[{time:l.s,type:"s"},{time:l.e,type:"e"}]),a=Array.prototype.concat(...o),s=a.sort((l,c)=>l.time-c.time);for(let l of s)i+=l.type==="s"?1:-1,i===1?e=l.time:(e&&+e!=+l.time&&r.push(t.fromDateTimes(e,l.time)),e=null);return t.merge(r)}difference(...n){return t.xor([this].concat(n)).map(e=>this.intersection(e)).filter(e=>e&&!e.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} \u2013 ${this.e.toISO()})`:wl}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(n=Cp,e={}){return this.isValid?$n.create(this.s.loc.clone(e),n).formatInterval(this):wl}toISO(n){return this.isValid?`${this.s.toISO(n)}/${this.e.toISO(n)}`:wl}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:wl}toISOTime(n){return this.isValid?`${this.s.toISOTime(n)}/${this.e.toISOTime(n)}`:wl}toFormat(n,{separator:e=" \u2013 "}={}){return this.isValid?`${this.s.toFormat(n)}${e}${this.e.toFormat(n)}`:wl}toDuration(n,e){return this.isValid?this.e.diff(this.s,n,e):Zt.invalid(this.invalidReason)}mapEndpoints(n){return t.fromDateTimes(n(this.s),n(this.e))}},El=class{static hasDST(n=pt.defaultZone){let e=tt.now().setZone(n).set({month:12});return!n.isUniversal&&e.offset!==e.set({month:6}).offset}static isValidIANAZone(n){return zo.isValidZone(n)}static normalizeZone(n){return jo(n,pt.defaultZone)}static getStartOfWeek({locale:n=null,locObj:e=null}={}){return(e||rt.create(n)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:n=null,locObj:e=null}={}){return(e||rt.create(n)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:n=null,locObj:e=null}={}){return(e||rt.create(n)).getWeekendDays().slice()}static months(n="long",{locale:e=null,numberingSystem:i=null,locObj:r=null,outputCalendar:o="gregory"}={}){return(r||rt.create(e,i,o)).months(n)}static monthsFormat(n="long",{locale:e=null,numberingSystem:i=null,locObj:r=null,outputCalendar:o="gregory"}={}){return(r||rt.create(e,i,o)).months(n,!0)}static weekdays(n="long",{locale:e=null,numberingSystem:i=null,locObj:r=null}={}){return(r||rt.create(e,i,null)).weekdays(n)}static weekdaysFormat(n="long",{locale:e=null,numberingSystem:i=null,locObj:r=null}={}){return(r||rt.create(e,i,null)).weekdays(n,!0)}static meridiems({locale:n=null}={}){return rt.create(n).meridiems()}static eras(n="short",{locale:e=null}={}){return rt.create(e,null,"gregory").eras(n)}static features(){return{relative:Kk(),localeWeek:Jk()}}};function pk(t,n){let e=r=>r.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),i=e(n)-e(t);return Math.floor(Zt.fromMillis(i).as("days"))}function m3(t,n,e){let i=[["years",(l,c)=>c.year-l.year],["quarters",(l,c)=>c.quarter-l.quarter+(c.year-l.year)*4],["months",(l,c)=>c.month-l.month+(c.year-l.year)*12],["weeks",(l,c)=>{let d=pk(l,c);return(d-d%7)/7}],["days",pk]],r={},o=t,a,s;for(let[l,c]of i)e.indexOf(l)>=0&&(a=l,r[l]=c(t,n),s=o.plus(r),s>n?(r[l]--,t=o.plus(r),t>n&&(s=t,r[l]--,t=o.plus(r))):t=s);return[t,r,s,a]}function h3(t,n,e,i){let[r,o,a,s]=m3(t,n,e),l=n-r,c=e.filter(m=>["hours","minutes","seconds","milliseconds"].indexOf(m)>=0);c.length===0&&(a<n&&(a=r.plus({[s]:1})),a!==r&&(o[s]=(o[s]||0)+l/(a-r)));let d=Zt.fromObject(o,i);return c.length>0?Zt.fromMillis(l,i).shiftTo(...c).plus(d):d}var f3="missing Intl.DateTimeFormat.formatToParts support";function Ye(t,n=e=>e){return{regex:t,deser:([e])=>n(rH(e))}}var p3="\xA0",_1=`[ ${p3}]`,b1=new RegExp(_1,"g");function g3(t){return t.replace(/\./g,"\\.?").replace(b1,_1)}function gk(t){return t.replace(/\./g,"").replace(b1," ").toLowerCase()}function Li(t,n){return t===null?null:{regex:RegExp(t.map(g3).join("|")),deser:([e])=>t.findIndex(i=>gk(e)===gk(i))+n}}function _k(t,n){return{regex:t,deser:([,e,i])=>Tp(e,i),groups:n}}function fp(t){return{regex:t,deser:([n])=>n}}function _3(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function b3(t,n){let e=Fi(n),i=Fi(n,"{2}"),r=Fi(n,"{3}"),o=Fi(n,"{4}"),a=Fi(n,"{6}"),s=Fi(n,"{1,2}"),l=Fi(n,"{1,3}"),c=Fi(n,"{1,6}"),d=Fi(n,"{1,9}"),m=Fi(n,"{2,4}"),f=Fi(n,"{4,6}"),h=S=>({regex:RegExp(_3(S.val)),deser:([k])=>k,literal:!0}),D=(S=>{if(t.literal)return h(S);switch(S.val){case"G":return Li(n.eras("short"),0);case"GG":return Li(n.eras("long"),0);case"y":return Ye(c);case"yy":return Ye(m,Q0);case"yyyy":return Ye(o);case"yyyyy":return Ye(f);case"yyyyyy":return Ye(a);case"M":return Ye(s);case"MM":return Ye(i);case"MMM":return Li(n.months("short",!0),1);case"MMMM":return Li(n.months("long",!0),1);case"L":return Ye(s);case"LL":return Ye(i);case"LLL":return Li(n.months("short",!1),1);case"LLLL":return Li(n.months("long",!1),1);case"d":return Ye(s);case"dd":return Ye(i);case"o":return Ye(l);case"ooo":return Ye(r);case"HH":return Ye(i);case"H":return Ye(s);case"hh":return Ye(i);case"h":return Ye(s);case"mm":return Ye(i);case"m":return Ye(s);case"q":return Ye(s);case"qq":return Ye(i);case"s":return Ye(s);case"ss":return Ye(i);case"S":return Ye(l);case"SSS":return Ye(r);case"u":return fp(d);case"uu":return fp(s);case"uuu":return Ye(e);case"a":return Li(n.meridiems(),0);case"kkkk":return Ye(o);case"kk":return Ye(m,Q0);case"W":return Ye(s);case"WW":return Ye(i);case"E":case"c":return Ye(e);case"EEE":return Li(n.weekdays("short",!1),1);case"EEEE":return Li(n.weekdays("long",!1),1);case"ccc":return Li(n.weekdays("short",!0),1);case"cccc":return Li(n.weekdays("long",!0),1);case"Z":case"ZZ":return _k(new RegExp(`([+-]${s.source})(?::(${i.source}))?`),2);case"ZZZ":return _k(new RegExp(`([+-]${s.source})(${i.source})?`),2);case"z":return fp(/[a-z_+-/]{1,256}?/i);case" ":return fp(/[^\S\n\r]/);default:return h(S)}})(t)||{invalidReason:f3};return D.token=t,D}var v3={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function y3(t,n,e){let{type:i,value:r}=t;if(i==="literal"){let l=/^\s+$/.test(r);return{literal:!l,val:l?" ":r}}let o=n[i],a=i;i==="hour"&&(n.hour12!=null?a=n.hour12?"hour12":"hour24":n.hourCycle!=null?n.hourCycle==="h11"||n.hourCycle==="h12"?a="hour12":a="hour24":a=e.hour12?"hour12":"hour24");let s=v3[a];if(typeof s=="object"&&(s=s[o]),s)return{literal:!1,val:s}}function C3(t){return[`^${t.map(e=>e.regex).reduce((e,i)=>`${e}(${i.source})`,"")}$`,t]}function w3(t,n,e){let i=t.match(n);if(i){let r={},o=1;for(let a in e)if(Il(e,a)){let s=e[a],l=s.groups?s.groups+1:1;!s.literal&&s.token&&(r[s.token.val[0]]=s.deser(i.slice(o,o+l))),o+=l}return[i,r]}else return[i,{}]}function x3(t){let n=o=>{switch(o){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}},e=null,i;return pe(t.z)||(e=zo.create(t.z)),pe(t.Z)||(e||(e=new di(t.Z)),i=t.Z),pe(t.q)||(t.M=(t.q-1)*3+1),pe(t.h)||(t.h<12&&t.a===1?t.h+=12:t.h===12&&t.a===0&&(t.h=0)),t.G===0&&t.y&&(t.y=-t.y),pe(t.u)||(t.S=tC(t.u)),[Object.keys(t).reduce((o,a)=>{let s=n(a);return s&&(o[s]=t[a]),o},{}),e,i]}var T0=null;function E3(){return T0||(T0=tt.fromMillis(1555555555555)),T0}function D3(t,n){if(t.literal)return t;let e=$n.macroTokenToFormatOpts(t.val),i=C1(e,n);return i==null||i.includes(void 0)?t:i}function v1(t,n){return Array.prototype.concat(...t.map(e=>D3(e,n)))}var Mp=class{constructor(n,e){if(this.locale=n,this.format=e,this.tokens=v1($n.parseFormat(e),n),this.units=this.tokens.map(i=>b3(i,n)),this.disqualifyingUnit=this.units.find(i=>i.invalidReason),!this.disqualifyingUnit){let[i,r]=C3(this.units);this.regex=RegExp(i,"i"),this.handlers=r}}explainFromTokens(n){if(this.isValid){let[e,i]=w3(n,this.regex,this.handlers),[r,o,a]=i?x3(i):[null,null,void 0];if(Il(i,"a")&&Il(i,"H"))throw new Uo("Can't include meridiem when specifying 24-hour format");return{input:n,tokens:this.tokens,regex:this.regex,rawMatches:e,matches:i,result:r,zone:o,specificOffset:a}}else return{input:n,tokens:this.tokens,invalidReason:this.invalidReason}}get isValid(){return!this.disqualifyingUnit}get invalidReason(){return this.disqualifyingUnit?this.disqualifyingUnit.invalidReason:null}};function y1(t,n,e){return new Mp(t,e).explainFromTokens(n)}function M3(t,n,e){let{result:i,zone:r,specificOffset:o,invalidReason:a}=y1(t,n,e);return[i,r,o,a]}function C1(t,n){if(!t)return null;let i=$n.create(n,t).dtFormatter(E3()),r=i.formatToParts(),o=i.resolvedOptions();return r.map(a=>y3(a,t,o))}var k0="Invalid DateTime",bk=864e13;function tu(t){return new Wn("unsupported zone",`the zone "${t.name}" is not supported`)}function O0(t){return t.weekData===null&&(t.weekData=xp(t.c)),t.weekData}function R0(t){return t.localWeekData===null&&(t.localWeekData=xp(t.c,t.loc.getMinDaysInFirstWeek(),t.loc.getStartOfWeek())),t.localWeekData}function Ya(t,n){let e={ts:t.ts,zone:t.zone,c:t.c,o:t.o,loc:t.loc,invalid:t.invalid};return new tt(te(_(_({},e),n),{old:e}))}function w1(t,n,e){let i=t-n*60*1e3,r=e.offset(i);if(n===r)return[i,n];i-=(r-n)*60*1e3;let o=e.offset(i);return r===o?[i,r]:[t-Math.min(r,o)*60*1e3,Math.max(r,o)]}function pp(t,n){t+=n*60*1e3;let e=new Date(t);return{year:e.getUTCFullYear(),month:e.getUTCMonth()+1,day:e.getUTCDate(),hour:e.getUTCHours(),minute:e.getUTCMinutes(),second:e.getUTCSeconds(),millisecond:e.getUTCMilliseconds()}}function _p(t,n,e){return w1(Ip(t),n,e)}function vk(t,n){let e=t.o,i=t.c.year+Math.trunc(n.years),r=t.c.month+Math.trunc(n.months)+Math.trunc(n.quarters)*3,o=te(_({},t.c),{year:i,month:r,day:Math.min(t.c.day,Ep(i,r))+Math.trunc(n.days)+Math.trunc(n.weeks)*7}),a=Zt.fromObject({years:n.years-Math.trunc(n.years),quarters:n.quarters-Math.trunc(n.quarters),months:n.months-Math.trunc(n.months),weeks:n.weeks-Math.trunc(n.weeks),days:n.days-Math.trunc(n.days),hours:n.hours,minutes:n.minutes,seconds:n.seconds,milliseconds:n.milliseconds}).as("milliseconds"),s=Ip(o),[l,c]=w1(s,e,t.zone);return a!==0&&(l+=a,c=t.zone.offset(l)),{ts:l,o:c}}function xl(t,n,e,i,r,o){let{setZone:a,zone:s}=e;if(t&&Object.keys(t).length!==0||n){let l=n||s,c=tt.fromObject(t,te(_({},e),{zone:l,specificOffset:o}));return a?c:c.setZone(s)}else return tt.invalid(new Wn("unparsable",`the input "${r}" can't be parsed as ${i}`))}function gp(t,n,e=!0){return t.isValid?$n.create(rt.create("en-US"),{allowZ:e,forceSimple:!0}).formatDateTimeFromString(t,n):null}function A0(t,n,e){let i=t.c.year>9999||t.c.year<0,r="";if(i&&t.c.year>=0&&(r+="+"),r+=Ot(t.c.year,i?6:4),e==="year")return r;if(n){if(r+="-",r+=Ot(t.c.month),e==="month")return r;r+="-"}else if(r+=Ot(t.c.month),e==="month")return r;return r+=Ot(t.c.day),r}function yk(t,n,e,i,r,o,a){let s=!e||t.c.millisecond!==0||t.c.second!==0,l="";switch(a){case"day":case"month":case"year":break;default:if(l+=Ot(t.c.hour),a==="hour")break;if(n){if(l+=":",l+=Ot(t.c.minute),a==="minute")break;s&&(l+=":",l+=Ot(t.c.second))}else{if(l+=Ot(t.c.minute),a==="minute")break;s&&(l+=Ot(t.c.second))}if(a==="second")break;s&&(!i||t.c.millisecond!==0)&&(l+=".",l+=Ot(t.c.millisecond,3))}return r&&(t.isOffsetFixed&&t.offset===0&&!o?l+="Z":t.o<0?(l+="-",l+=Ot(Math.trunc(-t.o/60)),l+=":",l+=Ot(Math.trunc(-t.o%60))):(l+="+",l+=Ot(Math.trunc(t.o/60)),l+=":",l+=Ot(Math.trunc(t.o%60)))),o&&(l+="["+t.zone.ianaName+"]"),l}var x1={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},S3={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},I3={ordinal:1,hour:0,minute:0,second:0,millisecond:0},bp=["year","month","day","hour","minute","second","millisecond"],T3=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],k3=["year","ordinal","hour","minute","second","millisecond"];function vp(t){let n={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[t.toLowerCase()];if(!n)throw new yp(t);return n}function Ck(t){switch(t.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return vp(t)}}function O3(t){if(nu===void 0&&(nu=pt.now()),t.type!=="iana")return t.offset(nu);let n=t.name,e=X0.get(n);return e===void 0&&(e=t.offset(nu),X0.set(n,e)),e}function wk(t,n){let e=jo(n.zone,pt.defaultZone);if(!e.isValid)return tt.invalid(tu(e));let i=rt.fromObject(n),r,o;if(pe(t.year))r=pt.now();else{for(let l of bp)pe(t[l])&&(t[l]=x1[l]);let a=Qk(t)||Xk(t);if(a)return tt.invalid(a);let s=O3(e);[r,o]=_p(t,s,e)}return new tt({ts:r,zone:e,loc:i,o})}function xk(t,n,e){let i=pe(e.round)?!0:e.round,r=pe(e.rounding)?"trunc":e.rounding,o=(s,l)=>(s=nC(s,i||e.calendary?0:2,e.calendary?"round":r),n.loc.clone(e).relFormatter(e).format(s,l)),a=s=>e.calendary?n.hasSame(t,s)?0:n.startOf(s).diff(t.startOf(s),s).get(s):n.diff(t,s).get(s);if(e.unit)return o(a(e.unit),e.unit);for(let s of e.units){let l=a(s);if(Math.abs(l)>=1)return o(l,s)}return o(t>n?-0:0,e.units[e.units.length-1])}function Ek(t){let n={},e;return t.length>0&&typeof t[t.length-1]=="object"?(n=t[t.length-1],e=Array.from(t).slice(0,t.length-1)):e=Array.from(t),[n,e]}var nu,X0=new Map,tt=class t{constructor(n){let e=n.zone||pt.defaultZone,i=n.invalid||(Number.isNaN(n.ts)?new Wn("invalid input"):null)||(e.isValid?null:tu(e));this.ts=pe(n.ts)?pt.now():n.ts;let r=null,o=null;if(!i)if(n.old&&n.old.ts===this.ts&&n.old.zone.equals(e))[r,o]=[n.old.c,n.old.o];else{let s=Ho(n.o)&&!n.old?n.o:e.offset(this.ts);r=pp(this.ts,s),i=Number.isNaN(r.year)?new Wn("invalid input"):null,r=i?null:r,o=i?null:s}this._zone=e,this.loc=n.loc||rt.create(),this.invalid=i,this.weekData=null,this.localWeekData=null,this.c=r,this.o=o,this.isLuxonDateTime=!0}static now(){return new t({})}static local(){let[n,e]=Ek(arguments),[i,r,o,a,s,l,c]=e;return wk({year:i,month:r,day:o,hour:a,minute:s,second:l,millisecond:c},n)}static utc(){let[n,e]=Ek(arguments),[i,r,o,a,s,l,c]=e;return n.zone=di.utcInstance,wk({year:i,month:r,day:o,hour:a,minute:s,second:l,millisecond:c},n)}static fromJSDate(n,e={}){let i=cH(n)?n.valueOf():NaN;if(Number.isNaN(i))return t.invalid("invalid input");let r=jo(e.zone,pt.defaultZone);return r.isValid?new t({ts:i,zone:r,loc:rt.fromObject(e)}):t.invalid(tu(r))}static fromMillis(n,e={}){if(Ho(n))return n<-bk||n>bk?t.invalid("Timestamp out of range"):new t({ts:n,zone:jo(e.zone,pt.defaultZone),loc:rt.fromObject(e)});throw new qt(`fromMillis requires a numerical input, but received a ${typeof n} with value ${n}`)}static fromSeconds(n,e={}){if(Ho(n))return new t({ts:n*1e3,zone:jo(e.zone,pt.defaultZone),loc:rt.fromObject(e)});throw new qt("fromSeconds requires a numerical input")}static fromObject(n,e={}){n=n||{};let i=jo(e.zone,pt.defaultZone);if(!i.isValid)return t.invalid(tu(i));let r=rt.fromObject(e),o=Dp(n,Ck),{minDaysInFirstWeek:a,startOfWeek:s}=sk(o,r),l=pt.now(),c=pe(e.specificOffset)?i.offset(l):e.specificOffset,d=!pe(o.ordinal),m=!pe(o.year),f=!pe(o.month)||!pe(o.day),h=m||f,b=o.weekYear||o.weekNumber;if((h||d)&&b)throw new Uo("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(f&&d)throw new Uo("Can't mix ordinal dates with month/day");let D=b||o.weekday&&!h,S,k,_e=pp(l,c);D?(S=T3,k=S3,_e=xp(_e,a,s)):d?(S=k3,k=I3,_e=I0(_e)):(S=bp,k=x1);let Pe=!1;for(let Ve of S){let zt=o[Ve];pe(zt)?Pe?o[Ve]=k[Ve]:o[Ve]=_e[Ve]:Pe=!0}let Ue=D?aH(o,a,s):d?sH(o):Qk(o),Yt=Ue||Xk(o);if(Yt)return t.invalid(Yt);let tn=D?ok(o,a,s):d?ak(o):o,[gt,x]=_p(tn,c,i),Ee=new t({ts:gt,zone:i,o:x,loc:r});return o.weekday&&h&&n.weekday!==Ee.weekday?t.invalid("mismatched weekday",`you can't specify both a weekday of ${o.weekday} and a date of ${Ee.toISO()}`):Ee.isValid?Ee:t.invalid(Ee.invalid)}static fromISO(n,e={}){let[i,r]=KH(n);return xl(i,r,e,"ISO 8601",n)}static fromRFC2822(n,e={}){let[i,r]=JH(n);return xl(i,r,e,"RFC 2822",n)}static fromHTTP(n,e={}){let[i,r]=e3(n);return xl(i,r,e,"HTTP",e)}static fromFormat(n,e,i={}){if(pe(n)||pe(e))throw new qt("fromFormat requires an input string and a format");let{locale:r=null,numberingSystem:o=null}=i,a=rt.fromOpts({locale:r,numberingSystem:o,defaultToEN:!0}),[s,l,c,d]=M3(a,n,e);return d?t.invalid(d):xl(s,l,i,`format ${e}`,n,c)}static fromString(n,e,i={}){return t.fromFormat(n,e,i)}static fromSQL(n,e={}){let[i,r]=s3(n);return xl(i,r,e,"SQL",n)}static invalid(n,e=null){if(!n)throw new qt("need to specify a reason the DateTime is invalid");let i=n instanceof Wn?n:new Wn(n,e);if(pt.throwOnInvalid)throw new N0(i);return new t({invalid:i})}static isDateTime(n){return n&&n.isLuxonDateTime||!1}static parseFormatForOpts(n,e={}){let i=C1(n,rt.fromObject(e));return i?i.map(r=>r?r.val:null).join(""):null}static expandFormat(n,e={}){return v1($n.parseFormat(n),rt.fromObject(e)).map(r=>r.val).join("")}static resetCache(){nu=void 0,X0.clear()}get(n){return this[n]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?O0(this).weekYear:NaN}get weekNumber(){return this.isValid?O0(this).weekNumber:NaN}get weekday(){return this.isValid?O0(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?R0(this).weekday:NaN}get localWeekNumber(){return this.isValid?R0(this).weekNumber:NaN}get localWeekYear(){return this.isValid?R0(this).weekYear:NaN}get ordinal(){return this.isValid?I0(this.c).ordinal:NaN}get monthShort(){return this.isValid?El.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?El.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?El.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?El.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];let n=864e5,e=6e4,i=Ip(this.c),r=this.zone.offset(i-n),o=this.zone.offset(i+n),a=this.zone.offset(i-r*e),s=this.zone.offset(i-o*e);if(a===s)return[this];let l=i-a*e,c=i-s*e,d=pp(l,a),m=pp(c,s);return d.hour===m.hour&&d.minute===m.minute&&d.second===m.second&&d.millisecond===m.millisecond?[Ya(this,{ts:l}),Ya(this,{ts:c})]:[this]}get isInLeapYear(){return ou(this.year)}get daysInMonth(){return Ep(this.year,this.month)}get daysInYear(){return this.isValid?Dl(this.year):NaN}get weeksInWeekYear(){return this.isValid?ru(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?ru(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(n={}){let{locale:e,numberingSystem:i,calendar:r}=$n.create(this.loc.clone(n),n).resolvedOptions(this);return{locale:e,numberingSystem:i,outputCalendar:r}}toUTC(n=0,e={}){return this.setZone(di.instance(n),e)}toLocal(){return this.setZone(pt.defaultZone)}setZone(n,{keepLocalTime:e=!1,keepCalendarTime:i=!1}={}){if(n=jo(n,pt.defaultZone),n.equals(this.zone))return this;if(n.isValid){let r=this.ts;if(e||i){let o=n.offset(this.ts),a=this.toObject();[r]=_p(a,o,n)}return Ya(this,{ts:r,zone:n})}else return t.invalid(tu(n))}reconfigure({locale:n,numberingSystem:e,outputCalendar:i}={}){let r=this.loc.clone({locale:n,numberingSystem:e,outputCalendar:i});return Ya(this,{loc:r})}setLocale(n){return this.reconfigure({locale:n})}set(n){if(!this.isValid)return this;let e=Dp(n,Ck),{minDaysInFirstWeek:i,startOfWeek:r}=sk(e,this.loc),o=!pe(e.weekYear)||!pe(e.weekNumber)||!pe(e.weekday),a=!pe(e.ordinal),s=!pe(e.year),l=!pe(e.month)||!pe(e.day),c=s||l,d=e.weekYear||e.weekNumber;if((c||a)&&d)throw new Uo("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(l&&a)throw new Uo("Can't mix ordinal dates with month/day");let m;o?m=ok(_(_({},xp(this.c,i,r)),e),i,r):pe(e.ordinal)?(m=_(_({},this.toObject()),e),pe(e.day)&&(m.day=Math.min(Ep(m.year,m.month),m.day))):m=ak(_(_({},I0(this.c)),e));let[f,h]=_p(m,this.o,this.zone);return Ya(this,{ts:f,o:h})}plus(n){if(!this.isValid)return this;let e=Zt.fromDurationLike(n);return Ya(this,vk(this,e))}minus(n){if(!this.isValid)return this;let e=Zt.fromDurationLike(n).negate();return Ya(this,vk(this,e))}startOf(n,{useLocaleWeeks:e=!1}={}){if(!this.isValid)return this;let i={},r=Zt.normalizeUnit(n);switch(r){case"years":i.month=1;case"quarters":case"months":i.day=1;case"weeks":case"days":i.hour=0;case"hours":i.minute=0;case"minutes":i.second=0;case"seconds":i.millisecond=0;break}if(r==="weeks")if(e){let o=this.loc.getStartOfWeek(),{weekday:a}=this;a<o&&(i.weekNumber=this.weekNumber-1),i.weekday=o}else i.weekday=1;if(r==="quarters"){let o=Math.ceil(this.month/3);i.month=(o-1)*3+1}return this.set(i)}endOf(n,e){return this.isValid?this.plus({[n]:1}).startOf(n,e).minus(1):this}toFormat(n,e={}){return this.isValid?$n.create(this.loc.redefaultToEN(e)).formatDateTimeFromString(this,n):k0}toLocaleString(n=Cp,e={}){return this.isValid?$n.create(this.loc.clone(e),n).formatDateTime(this):k0}toLocaleParts(n={}){return this.isValid?$n.create(this.loc.clone(n),n).formatDateTimeParts(this):[]}toISO({format:n="extended",suppressSeconds:e=!1,suppressMilliseconds:i=!1,includeOffset:r=!0,extendedZone:o=!1,precision:a="milliseconds"}={}){if(!this.isValid)return null;a=vp(a);let s=n==="extended",l=A0(this,s,a);return bp.indexOf(a)>=3&&(l+="T"),l+=yk(this,s,e,i,r,o,a),l}toISODate({format:n="extended",precision:e="day"}={}){return this.isValid?A0(this,n==="extended",vp(e)):null}toISOWeekDate(){return gp(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:n=!1,suppressSeconds:e=!1,includeOffset:i=!0,includePrefix:r=!1,extendedZone:o=!1,format:a="extended",precision:s="milliseconds"}={}){return this.isValid?(s=vp(s),(r&&bp.indexOf(s)>=3?"T":"")+yk(this,a==="extended",e,n,i,o,s)):null}toRFC2822(){return gp(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return gp(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?A0(this,!0):null}toSQLTime({includeOffset:n=!0,includeZone:e=!1,includeOffsetSpace:i=!0}={}){let r="HH:mm:ss.SSS";return(e||n)&&(i&&(r+=" "),e?r+="z":n&&(r+="ZZ")),gp(this,r,!0)}toSQL(n={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(n)}`:null}toString(){return this.isValid?this.toISO():k0}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(n={}){if(!this.isValid)return{};let e=_({},this.c);return n.includeConfig&&(e.outputCalendar=this.outputCalendar,e.numberingSystem=this.loc.numberingSystem,e.locale=this.loc.locale),e}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(n,e="milliseconds",i={}){if(!this.isValid||!n.isValid)return Zt.invalid("created by diffing an invalid DateTime");let r=_({locale:this.locale,numberingSystem:this.numberingSystem},i),o=dH(e).map(Zt.normalizeUnit),a=n.valueOf()>this.valueOf(),s=a?this:n,l=a?n:this,c=h3(s,l,o,r);return a?c.negate():c}diffNow(n="milliseconds",e={}){return this.diff(t.now(),n,e)}until(n){return this.isValid?Sl.fromDateTimes(this,n):this}hasSame(n,e,i){if(!this.isValid)return!1;let r=n.valueOf(),o=this.setZone(n.zone,{keepLocalTime:!0});return o.startOf(e,i)<=r&&r<=o.endOf(e,i)}equals(n){return this.isValid&&n.isValid&&this.valueOf()===n.valueOf()&&this.zone.equals(n.zone)&&this.loc.equals(n.loc)}toRelative(n={}){if(!this.isValid)return null;let e=n.base||t.fromObject({},{zone:this.zone}),i=n.padding?this<e?-n.padding:n.padding:0,r=["years","months","days","hours","minutes","seconds"],o=n.unit;return Array.isArray(n.unit)&&(r=n.unit,o=void 0),xk(e,this.plus(i),te(_({},n),{numeric:"always",units:r,unit:o}))}toRelativeCalendar(n={}){return this.isValid?xk(n.base||t.fromObject({},{zone:this.zone}),this,te(_({},n),{numeric:"auto",units:["years","months","days"],calendary:!0})):null}static min(...n){if(!n.every(t.isDateTime))throw new qt("min requires all arguments be DateTimes");return lk(n,e=>e.valueOf(),Math.min)}static max(...n){if(!n.every(t.isDateTime))throw new qt("max requires all arguments be DateTimes");return lk(n,e=>e.valueOf(),Math.max)}static fromFormatExplain(n,e,i={}){let{locale:r=null,numberingSystem:o=null}=i,a=rt.fromOpts({locale:r,numberingSystem:o,defaultToEN:!0});return y1(a,n,e)}static fromStringExplain(n,e,i={}){return t.fromFormatExplain(n,e,i)}static buildFormatParser(n,e={}){let{locale:i=null,numberingSystem:r=null}=e,o=rt.fromOpts({locale:i,numberingSystem:r,defaultToEN:!0});return new Mp(o,n)}static fromFormatParser(n,e,i={}){if(pe(n)||pe(e))throw new qt("fromFormatParser requires an input string and a format parser");let{locale:r=null,numberingSystem:o=null}=i,a=rt.fromOpts({locale:r,numberingSystem:o,defaultToEN:!0});if(!a.equals(e.locale))throw new qt(`fromFormatParser called with a locale of ${a}, but the format parser was created for ${e.locale}`);let{result:s,zone:l,specificOffset:c,invalidReason:d}=e.explainFromTokens(n);return d?t.invalid(d):xl(s,l,i,`format ${e.format}`,n,c)}static get DATE_SHORT(){return Cp}static get DATE_MED(){return Dk}static get DATE_MED_WITH_WEEKDAY(){return UU}static get DATE_FULL(){return Mk}static get DATE_HUGE(){return Sk}static get TIME_SIMPLE(){return Ik}static get TIME_WITH_SECONDS(){return Tk}static get TIME_WITH_SHORT_OFFSET(){return kk}static get TIME_WITH_LONG_OFFSET(){return Ok}static get TIME_24_SIMPLE(){return Rk}static get TIME_24_WITH_SECONDS(){return Ak}static get TIME_24_WITH_SHORT_OFFSET(){return Nk}static get TIME_24_WITH_LONG_OFFSET(){return Pk}static get DATETIME_SHORT(){return Fk}static get DATETIME_SHORT_WITH_SECONDS(){return Lk}static get DATETIME_MED(){return Bk}static get DATETIME_MED_WITH_SECONDS(){return Vk}static get DATETIME_MED_WITH_WEEKDAY(){return HU}static get DATETIME_FULL(){return jk}static get DATETIME_FULL_WITH_SECONDS(){return Uk}static get DATETIME_HUGE(){return Hk}static get DATETIME_HUGE_WITH_SECONDS(){return zk}};function Jd(t){if(tt.isDateTime(t))return t;if(t&&t.valueOf&&Ho(t.valueOf()))return tt.fromJSDate(t);if(t&&typeof t=="object")return tt.fromObject(t);throw new qt(`Unknown datetime argument: ${t}, of type ${typeof t}`)}var aC=class{_box;_destroyed=new I;_resizeSubject=new I;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new de(e=>{let i=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),i.unsubscribe(),this._elementObservables.delete(n)}}).pipe(Ce(e=>e.some(i=>i.target===n)),am({bufferSize:1,refCount:!0}),ze(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},E1=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=u(B);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,i){let r=i?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new aC(r)),this._observers.get(r).observe(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var R3=["notch"],A3=["matFormFieldNotchedOutline",""],N3=["*"],D1=["iconPrefixContainer"],M1=["textPrefixContainer"],S1=["iconSuffixContainer"],I1=["textSuffixContainer"],P3=["textField"],F3=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],L3=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function B3(t,n){t&1&&V(0,"span",21)}function V3(t,n){if(t&1&&(p(0,"label",20),ue(1,1),G(2,B3,1,0,"span",21),g()),t&2){let e=E(2);L("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),fe("for",e._control.disableAutomaticLabeling?null:e._control.id),v(2),q(!e.hideRequiredMarker&&e._control.required?2:-1)}}function j3(t,n){if(t&1&&G(0,V3,3,5,"label",20),t&2){let e=E();q(e._hasFloatingLabel()?0:-1)}}function U3(t,n){t&1&&V(0,"div",7)}function H3(t,n){}function z3(t,n){if(t&1&&vt(0,H3,0,0,"ng-template",13),t&2){E(2);let e=Jt(1);L("ngTemplateOutlet",e)}}function $3(t,n){if(t&1&&(p(0,"div",9),G(1,z3,1,1,null,13),g()),t&2){let e=E();L("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),v(),q(e._forceDisplayInfixLabel()?-1:1)}}function W3(t,n){t&1&&(p(0,"div",10,2),ue(2,2),g())}function G3(t,n){t&1&&(p(0,"div",11,3),ue(2,3),g())}function q3(t,n){}function Z3(t,n){if(t&1&&vt(0,q3,0,0,"ng-template",13),t&2){E();let e=Jt(1);L("ngTemplateOutlet",e)}}function Y3(t,n){t&1&&(p(0,"div",14,4),ue(2,4),g())}function Q3(t,n){t&1&&(p(0,"div",15,5),ue(2,5),g())}function X3(t,n){t&1&&V(0,"div",16)}function K3(t,n){t&1&&(p(0,"div",18),ue(1,6),g())}function J3(t,n){if(t&1&&(p(0,"mat-hint",22),M(1),g()),t&2){let e=E(2);L("id",e._hintLabelId),v(),oe(e.hintLabel)}}function ez(t,n){if(t&1&&(p(0,"div",19),G(1,J3,2,2,"mat-hint",22),ue(2,7),V(3,"div",23),ue(4,8),g()),t&2){let e=E();v(),q(e.hintLabel?1:-1)}}var Vi=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=W({type:t,selectors:[["mat-label"]]})}return t})(),tz=new C("MatError");var lu=(()=>{class t{align="start";id=u(et).getId("mat-mdc-hint-");static \u0275fac=function(i){return new(i||t)};static \u0275dir=W({type:t,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(i,r){i&2&&(dn("id",r.id),fe("align",null),ee("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return t})(),nz=new C("MatPrefix");var P1=new C("MatSuffix"),Al=(()=>{class t{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(i){return new(i||t)};static \u0275dir=W({type:t,selectors:[["","matSuffix",""],["","matIconSuffix",""],["","matTextSuffix",""]],inputs:{_isTextSelector:[0,"matTextSuffix","_isTextSelector"]},features:[Me([{provide:P1,useExisting:t}])]})}return t})(),F1=new C("FloatingLabelParent"),T1=(()=>{class t{_elementRef=u(U);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=u(E1);_ngZone=u(B);_parent=u(F1);_resizeSubscription=new Re;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return iz(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(i){return new(i||t)};static \u0275dir=W({type:t,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(i,r){i&2&&ee("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return t})();function iz(t){let n=t;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let i=e.scrollWidth;return e.remove(),i}var k1="mdc-line-ripple--active",Op="mdc-line-ripple--deactivating",O1=(()=>{class t{_elementRef=u(U);_cleanupTransitionEnd;constructor(){let e=u(B),i=u(xe);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=i.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Op),e.add(k1)}deactivate(){this._elementRef.nativeElement.classList.add(Op)}_handleTransitionEnd=e=>{let i=this._elementRef.nativeElement.classList,r=i.contains(Op);e.propertyName==="opacity"&&r&&i.remove(k1,Op)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=W({type:t,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return t})(),R1=(()=>{class t{_elementRef=u(U);_ngZone=u(B);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,i=e.querySelector(".mdc-floating-label");i?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(i.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>i.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let i=this._notch.nativeElement;!this.open||!e?i.style.width="":i.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=O({type:t,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(i,r){if(i&1&&Te(R3,5),i&2){let o;Q(o=X())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(i,r){i&2&&ee("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:A3,ngContentSelectors:N3,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(i,r){i&1&&(Be(),Et(0,"div",1),ht(1,"div",2,0),ue(3),yt(),Et(4,"div",3))},encapsulation:2,changeDetection:0})}return t})(),cu=(()=>{class t{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(i){return new(i||t)};static \u0275dir=W({type:t})}return t})();var du=new C("MatFormField"),rz=new C("MAT_FORM_FIELD_DEFAULT_OPTIONS"),A1="fill",oz="auto",N1="fixed",az="translateY(-50%)",hr=(()=>{class t{_elementRef=u(U);_changeDetectorRef=u(ve);_platform=u(ke);_idGenerator=u(et);_ngZone=u(B);_defaults=u(rz,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Qc("iconPrefixContainer");_textPrefixContainerSignal=Qc("textPrefixContainer");_iconSuffixContainerSignal=Qc("iconSuffixContainer");_textSuffixContainerSignal=Qc("textSuffixContainer");_prefixSuffixContainers=un(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=kM(Vi);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=$r(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||oz}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let i=e||this._defaults?.appearance||A1;this._appearanceSignal.set(i)}_appearanceSignal=Fe(A1);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||N1}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||N1}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new I;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=$e();constructor(){let e=this._defaults,i=u(Ct);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),vo(()=>this._currentDirection=i.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=un(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let i=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),i.controlType&&this._elementRef.nativeElement.classList.add(r+i.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=i.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=i.stateChanges.pipe(Pt([void 0,void 0]),le(()=>[i.errorState,i.userAriaDescribedBy]),om(),Ce(([[o,a],[s,l]])=>o!==s||a!==l)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),i.ngControl&&i.ngControl.valueChanges&&(this._valueChanges=i.ngControl.valueChanges.pipe(ze(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Tn(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){Oh({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=un(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let i=this._control?this._control.ngControl:null;return i&&i[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(s=>s.align==="start"):null,a=this._hintChildren?this._hintChildren.find(s=>s.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let i=this._control.describedByIds,r;if(i){let o=this._describedByIds||e;r=e.concat(i.filter(a=>a&&!o.includes(a)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,i=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,s=i?.getBoundingClientRect().width??0,l=r?.getBoundingClientRect().width??0,c=o?.getBoundingClientRect().width??0,d=this._currentDirection==="rtl"?"-1":"1",m=`${a+s}px`,h=`calc(${d} * (${m} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,b=`var(--mat-mdc-form-field-label-transform, ${az} translateX(${h}))`,D=a+s+l+c;return[b,D]}_writeOutlinedLabelStyles(e){if(e!==null){let[i,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=i),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let i=e.getRootNode();return i&&i!==e}return document.documentElement.contains(e)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=O({type:t,selectors:[["mat-form-field"]],contentQueries:function(i,r,o){if(i&1&&(xh(o,r._labelChild,Vi,5),Kt(o,cu,5)(o,nz,5)(o,P1,5)(o,tz,5)(o,lu,5)),i&2){Dh();let a;Q(a=X())&&(r._formFieldControl=a.first),Q(a=X())&&(r._prefixChildren=a),Q(a=X())&&(r._suffixChildren=a),Q(a=X())&&(r._errorChildren=a),Q(a=X())&&(r._hintChildren=a)}},viewQuery:function(i,r){if(i&1&&(Eh(r._iconPrefixContainerSignal,D1,5)(r._textPrefixContainerSignal,M1,5)(r._iconSuffixContainerSignal,S1,5)(r._textSuffixContainerSignal,I1,5),Te(P3,5)(D1,5)(M1,5)(S1,5)(I1,5)(T1,5)(R1,5)(O1,5)),i&2){Dh(4);let o;Q(o=X())&&(r._textField=o.first),Q(o=X())&&(r._iconPrefixContainer=o.first),Q(o=X())&&(r._textPrefixContainer=o.first),Q(o=X())&&(r._iconSuffixContainer=o.first),Q(o=X())&&(r._textSuffixContainer=o.first),Q(o=X())&&(r._floatingLabel=o.first),Q(o=X())&&(r._notchedOutline=o.first),Q(o=X())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(i,r){i&2&&ee("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[Me([{provide:du,useExisting:t},{provide:F1,useExisting:t}])],ngContentSelectors:L3,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(i,r){if(i&1&&(Be(F3),vt(0,j3,1,1,"ng-template",null,0,js),p(2,"div",6,1),H("click",function(a){return r._control.onContainerClick(a)}),G(4,U3,1,0,"div",7),p(5,"div",8),G(6,$3,2,2,"div",9),G(7,W3,3,0,"div",10),G(8,G3,3,0,"div",11),p(9,"div",12),G(10,Z3,1,1,null,13),ue(11),g(),G(12,Y3,3,0,"div",14),G(13,Q3,3,0,"div",15),g(),G(14,X3,1,0,"div",16),g(),p(15,"div",17),G(16,K3,2,0,"div",18)(17,ez,5,1,"div",19),g()),i&2){let o;v(2),ee("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),v(2),q(!r._hasOutline()&&!r._control.disabled?4:-1),v(2),q(r._hasOutline()?6:-1),v(),q(r._hasIconPrefix?7:-1),v(),q(r._hasTextPrefix?8:-1),v(2),q(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),v(2),q(r._hasTextSuffix?12:-1),v(),q(r._hasIconSuffix?13:-1),v(),q(r._hasOutline()?-1:14),v(),ee("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let a=r._getSubscriptMessageType();v(),q((o=a)==="error"?16:o==="hint"?17:-1)}},dependencies:[T1,R1,Kc,O1,lu],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2,changeDetection:0})}return t})();var uu=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=P({imports:[cl,hr,me]})}return t})();var mu=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new I;constructor(n=!1,e,i=!0,r){this._multiple=n,this._emitChanges=i,this.compareWith=r,e&&e.length&&(n?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...n){this._verifyValueAssignment(n),n.forEach(i=>this._markSelected(i));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...n){this._verifyValueAssignment(n),n.forEach(i=>this._unmarkSelected(i));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...n){this._verifyValueAssignment(n);let e=this.selected,i=new Set(n.map(o=>this._getConcreteValue(o)));n.forEach(o=>this._markSelected(o)),e.filter(o=>!i.has(this._getConcreteValue(o,i))).forEach(o=>this._unmarkSelected(o));let r=this._hasQueuedChanges();return this._emitChangeEvent(),r}toggle(n){return this.isSelected(n)?this.deselect(n):this.select(n)}clear(n=!0){this._unmarkAll();let e=this._hasQueuedChanges();return n&&this._emitChangeEvent(),e}isSelected(n){return this._selection.has(this._getConcreteValue(n))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(n){this._multiple&&this.selected&&this._selected.sort(n)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(n){n=this._getConcreteValue(n),this.isSelected(n)||(this._multiple||this._unmarkAll(),this.isSelected(n)||this._selection.add(n),this._emitChanges&&this._selectedToEmit.push(n))}_unmarkSelected(n){n=this._getConcreteValue(n),this.isSelected(n)&&(this._selection.delete(n),this._emitChanges&&this._deselectedToEmit.push(n))}_unmarkAll(){this.isEmpty()||this._selection.forEach(n=>this._unmarkSelected(n))}_verifyValueAssignment(n){n.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(n,e){if(this.compareWith){e=e??this._selection;for(let i of e)if(this.compareWith(n,i))return i;return n}else return n}};var sC=(()=>{class t{_listeners=[];notify(e,i){for(let r of this._listeners)r(e,i)}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(i=>e!==i)}}ngOnDestroy(){this._listeners=[]}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var V1=(()=>{class t{_animationsDisabled=$e();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=O({type:t,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(i,r){i&2&&ee("mat-pseudo-checkbox-indeterminate",r.state==="indeterminate")("mat-pseudo-checkbox-checked",r.state==="checked")("mat-pseudo-checkbox-disabled",r.disabled)("mat-pseudo-checkbox-minimal",r.appearance==="minimal")("mat-pseudo-checkbox-full",r.appearance==="full")("_mat-animation-noopable",r._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(i,r){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2,changeDetection:0})}return t})();var lz=["text"],cz=[[["mat-icon"]],"*"],dz=["mat-icon","*"];function uz(t,n){if(t&1&&V(0,"mat-pseudo-checkbox",1),t&2){let e=E();L("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function mz(t,n){if(t&1&&V(0,"mat-pseudo-checkbox",3),t&2){let e=E();L("disabled",e.disabled)}}function hz(t,n){if(t&1&&(p(0,"span",4),M(1),g()),t&2){let e=E();v(),gn("(",e.group.label,")")}}var cC=new C("MAT_OPTION_PARENT_COMPONENT"),dC=new C("MatOptgroup");var lC=class{source;isUserInput;constructor(n,e=!1){this.source=n,this.isUserInput=e}},Wo=(()=>{class t{_element=u(U);_changeDetectorRef=u(ve);_parent=u(cC,{optional:!0});group=u(dC,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=u(et).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=Fe(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new K;_text;_stateChanges=new I;constructor(){let e=u(lt);e.load(oi),e.load(Oo),this._signalDisableRipple=!!this._parent&&Ki(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,i){let r=this._getHostElement();typeof r.focus=="function"&&r.focus(i)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!Gt(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new lC(this,e))}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=O({type:t,selectors:[["mat-option"]],viewQuery:function(i,r){if(i&1&&Te(lz,7),i&2){let o;Q(o=X())&&(r._text=o.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(i,r){i&1&&H("click",function(){return r._selectViaInteraction()})("keydown",function(a){return r._handleKeydown(a)}),i&2&&(dn("id",r.id),fe("aria-selected",r.selected)("aria-disabled",r.disabled.toString()),ee("mdc-list-item--selected",r.selected)("mat-mdc-option-multiple",r.multiple)("mat-mdc-option-active",r.active)("mdc-list-item--disabled",r.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",Z]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:dz,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(i,r){i&1&&(Be(cz),G(0,uz,1,2,"mat-pseudo-checkbox",1),ue(1),p(2,"span",2,0),ue(4,1),g(),G(5,mz,1,1,"mat-pseudo-checkbox",3),G(6,hz,2,1,"span",4),V(7,"div",5)),i&2&&(q(r.multiple?0:-1),v(5),q(!r.multiple&&r.selected&&!r.hideSingleSelectionIndicator?5:-1),v(),q(r.group&&r.group._inert?6:-1),v(),L("matRippleTrigger",r._getHostElement())("matRippleDisabled",r.disabled||r.disableRipple))},dependencies:[V1,Pi],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--mat-option-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-option-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-option-label-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return t})();function j1(t,n,e){if(e.length){let i=n.toArray(),r=e.toArray(),o=0;for(let a=0;a<t+1;a++)i[a].group&&i[a].group===r[o]&&o++;return o}return 0}function U1(t,n,e,i){return t<e?t:t+n>e+i?Math.max(0,t-i+n):e}var Pl=(()=>{class t{isErrorState(e,i){return!!(e&&e.invalid&&(e.touched||i&&i.submitted))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Fl=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(n,e,i,r,o){this._defaultMatcher=n,this.ngControl=e,this._parentFormGroup=i,this._parentForm=r,this._stateChanges=o}updateErrorState(){let n=this.errorState,e=this._parentFormGroup||this._parentForm,i=this.matcher||this._defaultMatcher,r=this.ngControl?this.ngControl.control:null,o=i?.isErrorState(r,e)??!1;o!==n&&(this.errorState=o,this._stateChanges.next())}};var Rp=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=P({imports:[me]})}return t})();var uC=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=P({imports:[Mn,Rp,Wo,me]})}return t})();var fz=["trigger"],pz=["panel"],gz=[[["mat-select-trigger"]],"*"],_z=["mat-select-trigger","*"];function bz(t,n){if(t&1&&(p(0,"span",4),M(1),g()),t&2){let e=E();v(),oe(e.placeholder)}}function vz(t,n){t&1&&ue(0)}function yz(t,n){if(t&1&&(p(0,"span",11),M(1),g()),t&2){let e=E(2);v(),oe(e.triggerValue)}}function Cz(t,n){if(t&1&&(p(0,"span",5),G(1,vz,1,0)(2,yz,2,1,"span",11),g()),t&2){let e=E();v(),q(e.customTrigger?1:2)}}function wz(t,n){if(t&1){let e=ft();p(0,"div",12,1),H("keydown",function(r){Ae(e);let o=E();return Ne(o._handleKeydown(r))}),ue(2,1),g()}if(t&2){let e=E();Dt(e.panelClass),ee("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",(e._parentFormField==null?null:e._parentFormField.color)==="primary")("mat-accent",(e._parentFormField==null?null:e._parentFormField.color)==="accent")("mat-warn",(e._parentFormField==null?null:e._parentFormField.color)==="warn")("mat-undefined",!(e._parentFormField!=null&&e._parentFormField.color)),fe("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var xz=new C("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let t=u(Y);return()=>zr(t)}}),Ez=new C("MAT_SELECT_CONFIG"),Dz=new C("MatSelectTrigger"),mC=class{source;value;constructor(n,e){this.source=n,this.value=e}},Ap=(()=>{class t{_viewportRuler=u(ar);_changeDetectorRef=u(ve);_elementRef=u(U);_dir=u(Ct,{optional:!0});_idGenerator=u(et);_renderer=u(xe);_parentFormField=u(du,{optional:!0});ngControl=u(Un,{self:!0,optional:!0});_liveAnnouncer=u(Od);_defaultOptions=u(Ez,{optional:!0});_animationsDisabled=$e();_popoverLocation;_initialized=new I;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let i=this.options.toArray()[e];if(i){let r=this.panel.nativeElement,o=j1(e,this.options,this.optionGroups),a=i._getHostElement();e===0&&o===1?r.scrollTop=0:r.scrollTop=U1(a.offsetTop,a.offsetHeight,r.scrollTop,r.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new mC(this,e)}_scrollStrategyFactory=u(xz);_panelOpen=!1;_compareWith=(e,i)=>e===i;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new I;_errorStateTracker;stateChanges=new I;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=Fe(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(Gr.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=hi(()=>{let e=this.options;return e?e.changes.pipe(Pt(e),ot(()=>Tn(...e.map(i=>i.onSelectionChange)))):this._initialized.pipe(ot(()=>this.optionSelectionChanges))});openedChange=new K;_openedStream=this.openedChange.pipe(Ce(e=>e),le(()=>{}));_closedStream=this.openedChange.pipe(Ce(e=>!e),le(()=>{}));selectionChange=new K;valueChange=new K;constructor(){let e=u(Pl),i=u(gl,{optional:!0}),r=u(qa,{optional:!0}),o=u(new Xn("tabindex"),{optional:!0}),a=u(Sd,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new Fl(e,this.ngControl,r,i,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=o==null?0:parseInt(o)||0,this._popoverLocation=a?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new mu(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(ze(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(ze(this._destroy)).subscribe(e=>{e.added.forEach(i=>i.select()),e.removed.forEach(i=>i.deselect())}),this.options.changes.pipe(Pt(null),ze(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),i=this.ngControl;if(e!==this._triggerAriaLabelledBy){let r=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?r.setAttribute("aria-labelledby",e):r.removeAttribute("aria-labelledby")}i&&(this._previousControl!==i.control&&(this._previousControl!==void 0&&i.disabled!==null&&i.disabled!==this.disabled&&(this.disabled=i.disabled),this._previousControl=i.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(He(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let i=`${this.id}-panel`;this._trackedModal&&jf(this._trackedModal,"aria-owns",i),n0(e,"aria-owns",i),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;jf(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{i(),clearTimeout(r),this._cleanupDetach=void 0};let e=this.panel.nativeElement,i=this._renderer.listen(e,"animationend",o=>{o.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),r=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(i=>i.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let i=e.keyCode,r=i===40||i===38||i===37||i===39,o=i===13||i===32,a=this._keyManager;if(!a.isTyping()&&o&&!Gt(e)||(this.multiple||e.altKey)&&r)e.preventDefault(),this.open();else if(!this.multiple){let s=this.selected;a.onKeydown(e);let l=this.selected;l&&s!==l&&this._liveAnnouncer.announce(l.viewValue,1e4)}}_handleOpenKeydown(e){let i=this._keyManager,r=e.keyCode,o=r===40||r===38,a=i.isTyping();if(o&&e.altKey)e.preventDefault(),this.close();else if(!a&&(r===13||r===32)&&i.activeItem&&!Gt(e))e.preventDefault(),i.activeItem._selectViaInteraction();else if(!a&&this._multiple&&r===65&&e.ctrlKey){e.preventDefault();let s=this.options.some(l=>!l.disabled&&!l.selected);this.options.forEach(l=>{l.disabled||(s?l.select():l.deselect())})}else{let s=i.activeItemIndex;i.onKeydown(e),this._multiple&&o&&e.shiftKey&&i.activeItem&&i.activeItemIndex!==s&&i.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!Gt(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(i=>i.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(i=>this._selectOptionByValue(i)),this._sortValues();else{let i=this._selectOptionByValue(e);i?this._keyManager.updateActiveItem(i):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let i=this.options.find(r=>{if(this._selectionModel.isSelected(r))return!1;try{return(r.value!=null||this.canSelectNullableOptions)&&this._compareWith(r.value,e)}catch{return!1}});return i&&this._selectionModel.select(i),i}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof To?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new Ld(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=Tn(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(ze(e)).subscribe(i=>{this._onSelect(i.source,i.isUserInput),i.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),Tn(...this.options.map(i=>i._stateChanges)).pipe(ze(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,i){let r=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(r!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),i&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),i&&this.focus())),r!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((i,r)=>this.sortComparator?this.sortComparator(i,r,e):e.indexOf(i)-e.indexOf(r)),this.stateChanges.next()}}_propagateChanges(e){let i;this.multiple?i=this.selected.map(r=>r.value):i=this.selected?this.selected.value:e,this._value=i,this.valueChange.emit(i),this._onChange(i),this.selectionChange.emit(this._getChangeEvent(i)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let i=0;i<this.options.length;i++)if(!this.options.get(i).disabled){e=i;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,i=e?e+" ":"";return this.ariaLabelledby?i+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let i=this._elementRef.nativeElement;e.length?i.setAttribute("aria-describedby",e.join(" ")):i.removeAttribute("aria-describedby")}onContainerClick(e){let i=en(e);i&&(i.tagName==="MAT-OPTION"||i.classList.contains("cdk-overlay-backdrop")||i.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=O({type:t,selectors:[["mat-select"]],contentQueries:function(i,r,o){if(i&1&&Kt(o,Dz,5)(o,Wo,5)(o,dC,5),i&2){let a;Q(a=X())&&(r.customTrigger=a.first),Q(a=X())&&(r.options=a),Q(a=X())&&(r.optionGroups=a)}},viewQuery:function(i,r){if(i&1&&Te(fz,5)(pz,5)(al,5),i&2){let o;Q(o=X())&&(r.trigger=o.first),Q(o=X())&&(r.panel=o.first),Q(o=X())&&(r._overlayDir=o.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(i,r){i&1&&H("keydown",function(a){return r._handleKeydown(a)})("focus",function(){return r._onFocus()})("blur",function(){return r._onBlur()}),i&2&&(fe("id",r.id)("tabindex",r.disabled?-1:r.tabIndex)("aria-controls",r.panelOpen?r.id+"-panel":null)("aria-expanded",r.panelOpen)("aria-label",r.ariaLabel||null)("aria-required",r.required.toString())("aria-disabled",r.disabled.toString())("aria-invalid",r.errorState)("aria-activedescendant",r._getAriaActiveDescendant()),ee("mat-mdc-select-disabled",r.disabled)("mat-mdc-select-invalid",r.errorState)("mat-mdc-select-required",r.required)("mat-mdc-select-empty",r.empty)("mat-mdc-select-multiple",r.multiple)("mat-select-open",r.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",Z],disableRipple:[2,"disableRipple","disableRipple",Z],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:dt(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",Z],placeholder:"placeholder",required:[2,"required","required",Z],multiple:[2,"multiple","multiple",Z],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",Z],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",dt],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",Z]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[Me([{provide:cu,useExisting:t},{provide:cC,useExisting:t}]),it],ngContentSelectors:_z,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(i,r){if(i&1&&(Be(gz),p(0,"div",2,0),H("click",function(){return r.open()}),p(3,"div",3),G(4,bz,2,1,"span",4)(5,Cz,3,1,"span",5),g(),p(6,"div",6)(7,"div",7),qi(),p(8,"svg",8),V(9,"path",9),g()()()(),vt(10,wz,3,16,"ng-template",10),H("detach",function(){return r.close()})("backdropClick",function(){return r.close()})("overlayKeydown",function(a){return r._handleOverlayKeydown(a)})),i&2){let o=Jt(1);v(3),fe("id",r._valueId),v(),q(r.empty?4:5),v(6),L("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",r._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",r._scrollStrategy)("cdkConnectedOverlayOrigin",r._preferredOverlayOrigin||o)("cdkConnectedOverlayPositions",r._positions)("cdkConnectedOverlayWidth",r._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",r._popoverLocation)}},dependencies:[To,al],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--mat-select-invalid-arrow-color, var(--mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--mat-select-focused-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--mat-select-panel-background-color, var(--mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2,changeDetection:0})}return t})();var Np=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=P({imports:[xn,uC,me,ni,uu,uC]})}return t})();var Sz=["tooltip"],Iz=20;var Tz=new C("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let t=u(Y);return()=>zr(t,{scrollThrottle:Iz})}}),kz=new C("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var H1="tooltip-panel",Oz={passive:!0},Rz=8,Az=8,Nz=24,Pz=200,Kr=(()=>{class t{_elementRef=u(U);_ngZone=u(B);_platform=u(ke);_ariaDescriber=u(Uf);_focusMonitor=u(ii);_dir=u(Ct);_injector=u(Y);_viewContainerRef=u(jt);_mediaMatcher=u(ll);_document=u(J);_renderer=u(xe);_animationsDisabled=$e();_defaultOptions=u(kz,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=z1;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=$r(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let i=$r(e);this._disabled!==i&&(this._disabled=i,i?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=jr(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=jr(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(e){let i=this._message;this._message=e!=null?String(e).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(i)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new I;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=Rz}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(ze(this._destroyed)).subscribe(e=>{e?e==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(i=>i()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,"tooltip"),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,i){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let r=this._createOverlay(i);this._detach(),this._portal=this._portal||new Oi(this._tooltipComponent,this._viewContainerRef);let o=this._tooltipInstance=r.attach(this._portal).instance;o._triggerElement=this._elementRef.nativeElement,o._mouseLeaveHideDelay=this._hideDelay,o.afterHidden().pipe(ze(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),o.show(e)}hide(e=this.hideDelay){let i=this._tooltipInstance;i&&(i.isVisible()?i.hide(e):(i._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let a=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&a._origin instanceof U)return this._overlayRef;this._detach()}let i=this._injector.get(Ur).getAncestorScrollContainers(this._elementRef),r=`${this._cssClassPrefix}-${H1}`,o=ja(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(i).withPopoverLocation("global");return o.positionChanges.pipe(ze(this._destroyed)).subscribe(a=>{this._updateCurrentPositionClass(a.connectionPair),this._tooltipInstance&&a.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=Ni(this._injector,{direction:this._dir,positionStrategy:o,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,r]:r,scrollStrategy:this._injector.get(Tz)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(ze(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(ze(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(ze(this._destroyed)).subscribe(a=>{a.preventDefault(),a.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(ze(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let i=e.getConfig().positionStrategy,r=this._getOrigin(),o=this._getOverlayPosition();i.withPositions([this._addOffset(_(_({},r.main),o.main)),this._addOffset(_(_({},r.fallback),o.fallback))])}_addOffset(e){let i=Az,r=!this._dir||this._dir.value=="ltr";return e.originY==="top"?e.offsetY=-i:e.originY==="bottom"?e.offsetY=i:e.originX==="start"?e.offsetX=r?-i:i:e.originX==="end"&&(e.offsetX=r?i:-i),e}_getOrigin(){let e=!this._dir||this._dir.value=="ltr",i=this.position,r;i=="above"||i=="below"?r={originX:"center",originY:i=="above"?"top":"bottom"}:i=="before"||i=="left"&&e||i=="right"&&!e?r={originX:"start",originY:"center"}:(i=="after"||i=="right"&&e||i=="left"&&!e)&&(r={originX:"end",originY:"center"});let{x:o,y:a}=this._invertPosition(r.originX,r.originY);return{main:r,fallback:{originX:o,originY:a}}}_getOverlayPosition(){let e=!this._dir||this._dir.value=="ltr",i=this.position,r;i=="above"?r={overlayX:"center",overlayY:"bottom"}:i=="below"?r={overlayX:"center",overlayY:"top"}:i=="before"||i=="left"&&e||i=="right"&&!e?r={overlayX:"end",overlayY:"center"}:(i=="after"||i=="right"&&e||i=="left"&&!e)&&(r={overlayX:"start",overlayY:"center"});let{x:o,y:a}=this._invertPosition(r.overlayX,r.overlayY);return{main:r,fallback:{overlayX:o,overlayY:a}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),ct(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,i){return this.position==="above"||this.position==="below"?i==="top"?i="bottom":i==="bottom"&&(i="top"):e==="end"?e="start":e==="start"&&(e="end"),{x:e,y:i}}_updateCurrentPositionClass(e){let{overlayY:i,originX:r,originY:o}=e,a;if(i==="center"?this._dir&&this._dir.value==="rtl"?a=r==="end"?"left":"right":a=r==="start"?"left":"right":a=i==="bottom"&&o==="top"?"above":"below",a!==this._currentPosition){let s=this._overlayRef;if(s){let l=`${this._cssClassPrefix}-${H1}-`;s.removePanelClass(l+this._currentPosition),s.addPanelClass(l+a)}this._currentPosition=a}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",e=>{let i=e.targetTouches?.[0],r=i?{x:i.clientX,y:i.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let o=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,r)},this._defaultOptions?.touchLongPressShowDelay??o)})):this._addListener("mouseenter",e=>{this._setupPointerExitEventsIfNeeded();let i;e.x!==void 0&&e.y!==void 0&&(i=e),this.show(void 0,i)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",e=>{let i=e.relatedTarget;(!i||!this._overlayRef?.overlayElement.contains(i))&&this.hide()}),this._addListener("wheel",e=>{if(this._isTooltipVisible()){let i=this._document.elementFromPoint(e.clientX,e.clientY),r=this._elementRef.nativeElement;i!==r&&!r.contains(i)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",e),this._addListener("touchcancel",e)}}}_addListener(e,i){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,i,Oz))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e=="function"?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!=="off"){let i=this._elementRef.nativeElement,r=i.style;(e==="on"||i.nodeName!=="INPUT"&&i.nodeName!=="TEXTAREA")&&(r.userSelect=r.msUserSelect=r.webkitUserSelect=r.MozUserSelect="none"),(e==="on"||!i.draggable)&&(r.webkitUserDrag="none"),r.touchAction="none",r.webkitTapHighlightColor="transparent"}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,"tooltip"),this._isDestroyed||ct({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type==="keydown"?this._isTooltipVisible()&&e.keyCode===27&&!Gt(e):!0;static \u0275fac=function(i){return new(i||t)};static \u0275dir=W({type:t,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(i,r){i&2&&ee("mat-mdc-tooltip-disabled",r.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return t})(),z1=(()=>{class t{_changeDetectorRef=u(ve);_elementRef=u(U);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=$e();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new I;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";constructor(){}show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>Nz&&e.width>=Pz}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let i=this._tooltip.nativeElement,r=this._showAnimation,o=this._hideAnimation;if(i.classList.remove(e?o:r),i.classList.add(e?r:o),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let a=getComputedStyle(i);(a.getPropertyValue("animation-duration")==="0s"||a.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(i.classList.add("_mat-animation-noopable"),this._finalizeAnimation(e))}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=O({type:t,selectors:[["mat-tooltip-component"]],viewQuery:function(i,r){if(i&1&&Te(Sz,7),i&2){let o;Q(o=X())&&(r._tooltip=o.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(i,r){i&1&&H("mouseleave",function(a){return r._handleMouseLeave(a)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(i,r){i&1&&(ht(0,"div",1,0),Ea("animationend",function(a){return r._handleAnimationEnd(a)}),ht(2,"div",2),M(3),yt()()),i&2&&(Dt(r.tooltipClass),ee("mdc-tooltip--multiline",r._isMultiline),v(3),oe(r.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));
  color: var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));
  font-family: var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));
  font-size: var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));
  line-height: var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));
  letter-spacing: var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2,changeDetection:0})}return t})();var $1=new C("MAT_INPUT_VALUE_ACCESSOR");var Fz=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=O({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2,changeDetection:0})}return t})(),Lz={passive:!0},W1=(()=>{class t{_platform=u(ke);_ngZone=u(B);_renderer=u(It).createRenderer(null,null);_styleLoader=u(lt);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return wt;this._styleLoader.load(Fz);let i=Vn(e),r=this._monitoredElements.get(i);if(r)return r.subject;let o=new I,a="cdk-text-field-autofilled",s=c=>{c.animationName==="cdk-text-field-autofill-start"&&!i.classList.contains(a)?(i.classList.add(a),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!0}))):c.animationName==="cdk-text-field-autofill-end"&&i.classList.contains(a)&&(i.classList.remove(a),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!1})))},l=this._ngZone.runOutsideAngular(()=>(i.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(i,"animationstart",s,Lz)));return this._monitoredElements.set(i,{subject:o,unlisten:l}),o}stopMonitoring(e){let i=Vn(e),r=this._monitoredElements.get(i);r&&(r.unlisten(),r.subject.complete(),i.classList.remove("cdk-text-field-autofill-monitored"),i.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(i))}ngOnDestroy(){this._monitoredElements.forEach((e,i)=>this.stopMonitoring(i))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var G1=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=P({})}return t})();var Bz=["button","checkbox","file","hidden","image","radio","range","reset","submit"],Vz=new C("MAT_INPUT_CONFIG"),Pp=(()=>{class t{_elementRef=u(U);_platform=u(ke);ngControl=u(Un,{optional:!0,self:!0});_autofillMonitor=u(W1);_ngZone=u(B);_formField=u(du,{optional:!0});_renderer=u(xe);_uid=u(et).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=u(Vz,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new I;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=$r(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(Gr.required)??!1}set required(e){this._required=$r(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&g0().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=$r(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>g0().has(e));constructor(){let e=u(gl,{optional:!0}),i=u(qa,{optional:!0}),r=u(Pl),o=u($1,{optional:!0,self:!0}),a=this._elementRef.nativeElement,s=a.nodeName.toLowerCase();o?Ki(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new Fl(r,this.ngControl,i,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=s==="select",this._isTextarea=s==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&vo(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let i=this._elementRef.nativeElement;i.type==="number"?(i.type="text",i.setSelectionRange(0,0),i.type="number"):i.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let i=this._elementRef.nativeElement;this._previousPlaceholder=e,e?i.setAttribute("placeholder",e):i.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){Bz.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,i=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&i&&i.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let i=this._elementRef.nativeElement;e.length?i.setAttribute("aria-describedby",e.join(" ")):i.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let i=e.target;!i.value&&i.selectionStart===0&&i.selectionEnd===0&&(i.setSelectionRange(1,1),i.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(i){return new(i||t)};static \u0275dir=W({type:t,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(i,r){i&1&&H("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),i&2&&(dn("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),fe("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),ee("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",Z]},exportAs:["matInput"],features:[Me([{provide:cu,useExisting:t}]),it]})}return t})(),q1=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=P({imports:[uu,uu,G1,me]})}return t})();var Z1=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=P({imports:[me]})}return t})();var Y1=new C("MAT_LIST_CONFIG");var Q1=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=P({imports:[cl,Mn,Rp,me,Z1]})}return t})();function Uz(t,n){t&1&&Et(0,"div",2)}var Hz=new C("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");var hC=(()=>{class t{_elementRef=u(U);_ngZone=u(B);_changeDetectorRef=u(ve);_renderer=u(xe);_cleanupTransitionEnd;constructor(){let e=Jy(),i=u(Hz,{optional:!0});this._isNoopAnimation=e==="di-disabled",e==="reduced-motion"&&this._elementRef.nativeElement.classList.add("mat-progress-bar-reduced-motion"),i&&(i.color&&(this.color=this._defaultColor=i.color),this.mode=i.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";get value(){return this._value}set value(e){this._value=X1(e||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(e){this._bufferValue=X1(e||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new K;get mode(){return this._mode}set mode(e){this._mode=e,this._changeDetectorRef.markForCheck()}_mode="determinate";ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode==="buffer"?this.bufferValue:100}%`}_isIndeterminate(){return this.mode==="indeterminate"||this.mode==="query"}_transitionendHandler=e=>{this.animationEnd.observers.length===0||!e.target||!e.target.classList.contains("mdc-linear-progress__primary-bar")||(this.mode==="determinate"||this.mode==="buffer")&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=O({type:t,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:10,hostBindings:function(i,r){i&2&&(fe("aria-valuenow",r._isIndeterminate()?null:r.value)("mode",r.mode),Dt("mat-"+r.color),ee("_mat-animation-noopable",r._isNoopAnimation)("mdc-linear-progress--animation-ready",!r._isNoopAnimation)("mdc-linear-progress--indeterminate",r._isIndeterminate()))},inputs:{color:"color",value:[2,"value","value",dt],bufferValue:[2,"bufferValue","bufferValue",dt],mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],decls:7,vars:5,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(i,r){i&1&&(ht(0,"div",0),Et(1,"div",1),G(2,Uz,1,0,"div",2),yt(),ht(3,"div",3),Et(4,"span",4),yt(),ht(5,"div",5),Et(6,"span",4),yt()),i&2&&(v(),er("flex-basis",r._getBufferBarFlexBasis()),v(),q(r.mode==="buffer"?2:-1),v(),er("transform",r._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
  --mat-progress-bar-animation-multiplier: 1;
  display: block;
  text-align: start;
}
.mat-mdc-progress-bar[mode=query] {
  transform: scaleX(-1);
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {
  animation: none;
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {
  transition: transform 1ms;
}

.mat-progress-bar-reduced-motion {
  --mat-progress-bar-animation-multiplier: 2;
}

.mdc-linear-progress {
  position: relative;
  width: 100%;
  transform: translateZ(0);
  outline: 1px solid transparent;
  overflow-x: hidden;
  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: max(var(--mat-progress-bar-track-height, 4px), var(--mat-progress-bar-active-indicator-height, 4px));
}
@media (forced-colors: active) {
  .mdc-linear-progress {
    outline-color: CanvasText;
  }
}

.mdc-linear-progress__bar {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  animation: none;
  transform-origin: top left;
  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: var(--mat-progress-bar-active-indicator-height, 4px);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {
  transition: none;
}
[dir=rtl] .mdc-linear-progress__bar {
  right: 0;
  transform-origin: center right;
}

.mdc-linear-progress__bar-inner {
  display: inline-block;
  position: absolute;
  width: 100%;
  animation: none;
  border-top-style: solid;
  border-color: var(--mat-progress-bar-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-progress-bar-active-indicator-height, 4px);
}

.mdc-linear-progress__buffer {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  overflow: hidden;
  height: var(--mat-progress-bar-track-height, 4px);
  border-radius: var(--mat-progress-bar-track-shape, var(--mat-sys-corner-none));
}

.mdc-linear-progress__buffer-dots {
  background-image: radial-gradient(circle, var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant)) calc(var(--mat-progress-bar-track-height, 4px) / 2), transparent 0);
  background-repeat: repeat-x;
  background-size: calc(calc(var(--mat-progress-bar-track-height, 4px) / 2) * 5);
  background-position: left;
  flex: auto;
  transform: rotate(180deg);
  animation: mdc-linear-progress-buffering calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
@media (forced-colors: active) {
  .mdc-linear-progress__buffer-dots {
    background-color: ButtonBorder;
  }
}
[dir=rtl] .mdc-linear-progress__buffer-dots {
  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
  transform: rotate(0);
}

.mdc-linear-progress__buffer-bar {
  flex: 0 1 100%;
  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  background-color: var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant));
}

.mdc-linear-progress__primary-bar {
  transform: scaleX(0);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  left: -145.166611%;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  right: -145.166611%;
  left: auto;
}

.mdc-linear-progress__secondary-bar {
  display: none;
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  left: -54.888891%;
  display: block;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  right: -54.888891%;
  left: auto;
}

@keyframes mdc-linear-progress-buffering {
  from {
    transform: rotate(180deg) translateX(calc(var(--mat-progress-bar-track-height, 4px) * -2.5));
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(83.67142%);
  }
  100% {
    transform: translateX(200.611057%);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-scale {
  0% {
    transform: scaleX(0.08);
  }
  36.65% {
    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
    transform: scaleX(0.08);
  }
  69.15% {
    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
    transform: scaleX(0.661479);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(84.386165%);
  }
  100% {
    transform: translateX(160.277782%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-scale {
  0% {
    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);
    transform: scaleX(0.08);
  }
  19.15% {
    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);
    transform: scaleX(0.457104);
  }
  44.15% {
    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);
    transform: scaleX(0.72796);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(-83.67142%);
  }
  100% {
    transform: translateX(-200.611057%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(-37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(-84.386165%);
  }
  100% {
    transform: translateX(-160.277782%);
  }
}
@keyframes mdc-linear-progress-buffering-reverse {
  from {
    transform: translateX(-10px);
  }
}
`],encapsulation:2,changeDetection:0})}return t})();function X1(t,n=0,e=100){return Math.max(n,Math.min(e,t))}var Fp=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=P({imports:[me]})}return t})();var $z=["mat-internal-form-field",""],Wz=["*"],Lp=(()=>{class t{labelPosition="after";static \u0275fac=function(i){return new(i||t)};static \u0275cmp=O({type:t,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(i,r){i&2&&ee("mdc-form-field--align-end",r.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:$z,ngContentSelectors:Wz,decls:1,vars:0,template:function(i,r){i&1&&(Be(),ue(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2,changeDetection:0})}return t})();var Gz=["input"],qz=["label"],Zz=["*"],fC={color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1},Yz=new C("mat-checkbox-default-options",{providedIn:"root",factory:()=>fC}),hn=(function(t){return t[t.Init=0]="Init",t[t.Checked=1]="Checked",t[t.Unchecked=2]="Unchecked",t[t.Indeterminate=3]="Indeterminate",t})(hn||{}),pC=class{source;checked},gC=(()=>{class t{_elementRef=u(U);_changeDetectorRef=u(ve);_ngZone=u(B);_animationsDisabled=$e();_options=u(Yz,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let i=new pC;return i.source=this,i.checked=e,i}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition="after";name=null;change=new K;indeterminateChange=new K;value;disableRipple=!1;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=hn.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){u(lt).load(oi);let e=u(new Xn("tabindex"),{optional:!0});this._options=this._options||fC,this.color=this._options.color||fC.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=u(et).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let i=e!=this._indeterminate();this._indeterminate.set(e),i&&(e?this._transitionCheckState(hn.Indeterminate):this._transitionCheckState(this.checked?hn.Checked:hn.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=Fe(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let i=this._currentCheckState,r=this._getAnimationTargetElement();if(!(i===e||!r)&&(this._currentAnimationClass&&r.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(i,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){r.classList.add(this._currentAnimationClass);let o=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{r.classList.remove(o)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?hn.Checked:hn.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,i){if(this._animationsDisabled)return"";switch(e){case hn.Init:if(i===hn.Checked)return this._animationClasses.uncheckedToChecked;if(i==hn.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case hn.Unchecked:return i===hn.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case hn.Checked:return i===hn.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case hn.Indeterminate:return i===hn.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(e){let i=this._inputElement;i&&(i.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus()}_preventBubblingFromLabel(e){e.target&&this._labelElement.nativeElement.contains(e.target)&&e.stopPropagation()}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=O({type:t,selectors:[["mat-checkbox"]],viewQuery:function(i,r){if(i&1&&Te(Gz,5)(qz,5),i&2){let o;Q(o=X())&&(r._inputElement=o.first),Q(o=X())&&(r._labelElement=o.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(i,r){i&2&&(dn("id",r.id),fe("tabindex",null)("aria-label",null)("aria-labelledby",null),Dt(r.color?"mat-"+r.color:"mat-accent"),ee("_mat-animation-noopable",r._animationsDisabled)("mdc-checkbox--disabled",r.disabled)("mat-mdc-checkbox-disabled",r.disabled)("mat-mdc-checkbox-checked",r.checked)("mat-mdc-checkbox-disabled-interactive",r.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",Z],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",Z],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",Z],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:dt(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",Z],checked:[2,"checked","checked",Z],disabled:[2,"disabled","disabled",Z],indeterminate:[2,"indeterminate","indeterminate",Z]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[Me([{provide:Fo,useExisting:St(()=>t),multi:!0},{provide:Lo,useExisting:t,multi:!0}]),it],ngContentSelectors:Zz,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(i,r){if(i&1&&(Be(),p(0,"div",3),H("click",function(a){return r._preventBubblingFromLabel(a)}),p(1,"div",4,0)(3,"div",5),H("click",function(){return r._onTouchTargetClick()}),g(),p(4,"input",6,1),H("blur",function(){return r._onBlur()})("click",function(){return r._onInputClick()})("change",function(a){return r._onInteractionEvent(a)}),g(),V(6,"div",7),p(7,"div",8),qi(),p(8,"svg",9),V(9,"path",10),g(),wc(),V(10,"div",11),g(),V(11,"div",12),g(),p(12,"label",13,2),ue(14),g()()),i&2){let o=Jt(2);L("labelPosition",r.labelPosition),v(4),ee("mdc-checkbox--selected",r.checked),L("checked",r.checked)("indeterminate",r.indeterminate)("disabled",r.disabled&&!r.disabledInteractive)("id",r.inputId)("required",r.required)("tabIndex",r.disabled&&!r.disabledInteractive?-1:r.tabIndex),fe("aria-label",r.ariaLabel||null)("aria-labelledby",r.ariaLabelledby)("aria-describedby",r.ariaDescribedby)("aria-checked",r.indeterminate?"mixed":null)("aria-controls",r.ariaControls)("aria-disabled",r.disabled&&r.disabledInteractive?!0:null)("aria-expanded",r.ariaExpanded)("aria-owns",r.ariaOwns)("name",r.name)("value",r.value),v(7),L("matRippleTrigger",o)("matRippleDisabled",r.disableRipple||r.disabled)("matRippleCentered",!0),v(),L("for",r.inputId)}},dependencies:[Pi,Lp],styles:[`.mdc-checkbox {
  display: inline-block;
  position: relative;
  flex: 0 0 18px;
  box-sizing: content-box;
  width: 18px;
  height: 18px;
  line-height: 0;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: bottom;
  padding: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}
.mdc-checkbox:hover > .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--mat-checkbox-state-layer-size, 40px);
  height: var(--mat-checkbox-state-layer-size, 40px);
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}

.mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}

.mdc-checkbox__background {
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  border-color: var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}

.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));
  background-color: transparent;
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface));
}

.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}

.mdc-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);
  color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}

.mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}

.mdc-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border-width: 1px;
  border-style: solid;
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  border-color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}

.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}

.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}

@keyframes mdc-checkbox-unchecked-checked-checkmark-path {
  0%, 50% {
    stroke-dashoffset: 29.7833385;
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
  0%, 68.2% {
    transform: scaleX(0);
  }
  68.2% {
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes mdc-checkbox-checked-unchecked-checkmark-path {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 0;
    stroke-dashoffset: -29.7833385;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-checkmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(45deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-checkmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(-45deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(315deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
  0% {
    animation-timing-function: linear;
    transform: scaleX(1);
    opacity: 1;
  }
  32.8%, 100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
.mat-mdc-checkbox {
  display: inline-block;
  position: relative;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-checkbox label {
  cursor: pointer;
}
.mat-mdc-checkbox .mat-internal-form-field {
  color: var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
  cursor: default;
  color: var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
    color: GrayText;
  }
}
.mat-mdc-checkbox label:empty {
  display: none;
}
.mat-mdc-checkbox .mdc-checkbox__ripple {
  opacity: 0;
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple,
.mdc-checkbox__ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),
.mdc-checkbox__ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-mdc-checkbox-ripple .mat-ripple-element {
  opacity: 0.1;
}

.mat-mdc-checkbox-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-checkbox-touch-target-size, 48px);
  width: var(--mat-checkbox-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--mat-checkbox-touch-target-display, block);
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {
  border-radius: 50%;
}

.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return t})(),K1=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=P({imports:[gC,me]})}return t})();var eO=["htmlContent"],Xz=()=>["text","html","json"],tO=(t,n,e,i,r)=>({alert:t,"alert-success":n,"alert-error":e,"alert-info":i,"alert-warning":r});function Kz(t,n){if(t&1&&(p(0,"mat-icon",3),M(1),g()),t&2){let e=E();L("color",e.iconColor),v(),oe(e.titleIcon)}}function Jz(t,n){if(t&1&&(p(0,"label",4),M(1),g()),t&2){let e=E();v(),oe(e.title)}}function e8(t,n){if(t&1&&(p(0,"div",5),M(1),g()),t&2){let e=E();L("ngClass",Ih(2,tO,e.message,e.messageType==="success",e.messageType==="error",e.messageType==="info",e.messageType==="warning")),v(),gn("",e.message==null?null:e.message.text," ")}}function t8(t,n){if(t&1&&(p(0,"div",5),M(1),g()),t&2){let e=E();L("ngClass",Ih(3,tO,e.message,e.messageType==="success",e.messageType==="error",e.messageType==="info",e.messageType==="warning")),v(),Mh("HTTP Status: ",e.message==null?null:e.message.status," ",e.message==null?null:e.message.statusText," ")}}function n8(t,n){t&1&&V(0,"iframe",9,0)}function i8(t,n){t&1&&V(0,"div",null,0)}function r8(t,n){if(t&1&&(p(0,"html")(1,"head"),V(2,"base",8),g(),p(3,"body"),G(4,n8,2,0,"iframe",9),G(5,i8,2,0,"div"),g()()),t&2){let e=E();v(4),q(e.message!=null&&e.message.status||(e.message==null?null:e.message.status)===0?4:-1),v(),q(!(e.message!=null&&e.message.status)&&(e.message==null?null:e.message.status)!==0?5:-1)}}var o8=(t,n)=>["alert",t,n],bC="iframe.frame-dialog-content[_ngcontent-%COMP%]{width:75dvw;height:45dvh}.top-margin-half[_ngcontent-%COMP%]{margin-top:.5em}img.max-width-auto-height[_ngcontent-%COMP%]{max-width:100%;max-height:100%}img.original-size[_ngcontent-%COMP%]{-webkit-user-select:none;margin:auto}",vC=".alert-success[_ngcontent-%COMP%]{border-color:#d0e9c6;color:#3c763d}.alert-background-success[_ngcontent-%COMP%]{background-color:#dff0d8!important}.alert-info[_ngcontent-%COMP%]{border-color:#bcdff1;color:#31708f}.alert-background-info[_ngcontent-%COMP%]{background-color:#d9edf7}.alert-warning[_ngcontent-%COMP%]{border-color:#faf2cc;color:#8a6d3b}.alert-background-warning[_ngcontent-%COMP%]{background-color:#fcf8e3}.alert-error[_ngcontent-%COMP%]{border-color:#ebcccc;color:#a94442}.alert-background-error[_ngcontent-%COMP%]{background-color:#f2dede}",yC=".fx-layout-row[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center}.fx-layout-column[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start}.fx-layout-wrap[_ngcontent-%COMP%]{flex-wrap:wrap}.fx-column-gap-1[_ngcontent-%COMP%]{display:flex;flex-direction:row;column-gap:1em}.fx-row-gap-1[_ngcontent-%COMP%]{display:flex;flex-direction:column;row-gap:1em}.fx-column-gap-2[_ngcontent-%COMP%]{display:flex;flex-direction:row;column-gap:2em}.fx-row-gap-2[_ngcontent-%COMP%]{display:flex;flex-direction:column;row-gap:2em}.fx-column-gap-half[_ngcontent-%COMP%]{display:flex;flex-direction:row;column-gap:.5em}.fx-row-gap-half[_ngcontent-%COMP%]{display:flex;flex-direction:column;row-gap:.5em}.fx-align-center-center[_ngcontent-%COMP%]{justify-content:center;align-content:center}.fx-align-start[_ngcontent-%COMP%]{justify-content:flex-start}.fx-align-start-start[_ngcontent-%COMP%]{justify-content:flex-start;align-content:flex-start}.fx-align-end[_ngcontent-%COMP%]{justify-content:flex-end}.fx-align-end-end[_ngcontent-%COMP%]{justify-content:flex-end;align-content:flex-end}.fx-align-space-between[_ngcontent-%COMP%]{justify-content:space-between}.fx-grow-1[_ngcontent-%COMP%]{flex-grow:1}.fx-grow-2[_ngcontent-%COMP%]{flex-grow:2}.fx-shrink-1[_ngcontent-%COMP%]{flex-shrink:1}.flex-100pc[_ngcontent-%COMP%]{flex:100%}.flex-95pc[_ngcontent-%COMP%]{flex:95%}.flex-80pc[_ngcontent-%COMP%]{flex:80%}.fx-full-width[_ngcontent-%COMP%]{margin:0;width:100%;min-width:100%}.fx-95pc-width[_ngcontent-%COMP%]{margin:0;width:95%;min-width:95%}.fx-80pc-width[_ngcontent-%COMP%]{margin:0;width:80%;min-width:80%}.fx-50pc-width[_ngcontent-%COMP%]{margin:0;width:50%;min-width:50%}.fx-offset-80px[_ngcontent-%COMP%]{margin-left:80px}.line-ellipsis[_ngcontent-%COMP%]{display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.line2-ellipsis[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.flex-half[_ngcontent-%COMP%]{flex:0 0 .5em;flex-wrap:nowrap}.flex-1[_ngcontent-%COMP%]{flex:0 0 1em}.flex-2[_ngcontent-%COMP%]{flex:0 0 2em}.flex-3[_ngcontent-%COMP%]{flex:0 0 3em}.flex-4[_ngcontent-%COMP%]{flex:0 0 4em}.flex-5[_ngcontent-%COMP%]{flex:0 0 5em}.flex-6[_ngcontent-%COMP%]{flex:0 0 6em}.flex-7[_ngcontent-%COMP%]{flex:0 0 7em}.flex-8[_ngcontent-%COMP%]{flex:0 0 8em}.flex-9[_ngcontent-%COMP%]{flex:0 0 9em}.flex-10[_ngcontent-%COMP%]{flex:0 0 10em}.flex-11[_ngcontent-%COMP%]{flex:0 0 11em}.flex-12[_ngcontent-%COMP%]{flex:0 0 12em}.flex-13[_ngcontent-%COMP%]{flex:0 0 13em}.flex-14[_ngcontent-%COMP%]{flex:0 0 14em}.flex-15[_ngcontent-%COMP%]{flex:0 0 15em}.flex-16[_ngcontent-%COMP%]{flex:0 0 16em}.flex-17[_ngcontent-%COMP%]{flex:0 0 17em}.flex-18[_ngcontent-%COMP%]{flex:0 0 18em}.flex-19[_ngcontent-%COMP%]{flex:0 0 19em}.flex-20[_ngcontent-%COMP%]{flex:0 0 20em}.flex-21[_ngcontent-%COMP%]{flex:0 0 21em}.flex-22[_ngcontent-%COMP%]{flex:0 0 22em}.flex-23[_ngcontent-%COMP%]{flex:0 0 23em}.flex-24[_ngcontent-%COMP%]{flex:0 0 24em}.flex-25[_ngcontent-%COMP%]{flex:0 0 25em}.flex-26[_ngcontent-%COMP%]{flex:0 0 26em}.flex-27[_ngcontent-%COMP%]{flex:0 0 27em}.flex-28[_ngcontent-%COMP%]{flex:0 0 28em}.flex-29[_ngcontent-%COMP%]{flex:0 0 29em}.flex-30[_ngcontent-%COMP%]{flex:0 0 30em}.flex-31[_ngcontent-%COMP%]{flex:0 0 31em}.flex-33[_ngcontent-%COMP%]{flex:0 0 32em}.flex-33[_ngcontent-%COMP%]{flex:0 0 33em}.flex-34[_ngcontent-%COMP%]{flex:0 0 34em}.flex-35[_ngcontent-%COMP%]{flex:0 0 35em}.flex-36[_ngcontent-%COMP%]{flex:0 0 36em}.flex-37[_ngcontent-%COMP%]{flex:0 0 37em}.flex-38[_ngcontent-%COMP%]{flex:0 0 38em}.flex-39[_ngcontent-%COMP%]{flex:0 0 39em}.flex11-half[_ngcontent-%COMP%]{flex:1 1 .5em}.flex11-1[_ngcontent-%COMP%]{flex:1 1 1em}.flex11-2[_ngcontent-%COMP%]{flex:1 1 2em}.flex11-3[_ngcontent-%COMP%]{flex:1 1 3em}.flex11-4[_ngcontent-%COMP%]{flex:1 1 4em}.flex11-5[_ngcontent-%COMP%]{flex:1 1 5em}.flex11-6[_ngcontent-%COMP%]{flex:1 1 6em}.flex11-7[_ngcontent-%COMP%]{flex:1 1 7em}.flex11-8[_ngcontent-%COMP%]{flex:1 1 8em}.flex11-9[_ngcontent-%COMP%]{flex:1 1 9em}.flex11-10[_ngcontent-%COMP%]{flex:1 1 10em}.flex11-11[_ngcontent-%COMP%]{flex:1 1 11em}.flex11-12[_ngcontent-%COMP%]{flex:1 1 12em}.flex11-13[_ngcontent-%COMP%]{flex:1 1 13em}.flex11-14[_ngcontent-%COMP%]{flex:1 1 14em}.flex11-15[_ngcontent-%COMP%]{flex:1 1 15em}.flex11-16[_ngcontent-%COMP%]{flex:1 1 16em}.flex11-17[_ngcontent-%COMP%]{flex:1 1 17em}.flex11-18[_ngcontent-%COMP%]{flex:1 1 18em}.flex11-19[_ngcontent-%COMP%]{flex:1 1 19em}.flex11-20[_ngcontent-%COMP%]{flex:1 1 20em}.flex11-21[_ngcontent-%COMP%]{flex:1 1 21em}.flex11-22[_ngcontent-%COMP%]{flex:1 1 22em}.flex11-23[_ngcontent-%COMP%]{flex:1 1 23em}.flex11-24[_ngcontent-%COMP%]{flex:1 1 24em}.flex11-25[_ngcontent-%COMP%]{flex:1 1 25em}.flex11-26[_ngcontent-%COMP%]{flex:1 1 26em}.flex11-27[_ngcontent-%COMP%]{flex:1 1 27em}.flex11-28[_ngcontent-%COMP%]{flex:1 1 28em}.flex11-29[_ngcontent-%COMP%]{flex:1 1 29em}.flex11-30[_ngcontent-%COMP%]{flex:1 1 30em}.flex11-31[_ngcontent-%COMP%]{flex:1 1 31em}.flex11-33[_ngcontent-%COMP%]{flex:1 1 32em}.flex11-33[_ngcontent-%COMP%]{flex:1 1 33em}.flex11-34[_ngcontent-%COMP%]{flex:1 1 34em}.flex11-35[_ngcontent-%COMP%]{flex:1 1 35em}.flex11-36[_ngcontent-%COMP%]{flex:1 1 36em}.flex11-37[_ngcontent-%COMP%]{flex:1 1 37em}.flex11-38[_ngcontent-%COMP%]{flex:1 1 38em}.flex11-39[_ngcontent-%COMP%]{flex:1 1 39em}.width-half[_ngcontent-%COMP%]{width:.5em}.width-1[_ngcontent-%COMP%]{width:1em}.width-2[_ngcontent-%COMP%]{width:2em}.width-3[_ngcontent-%COMP%]{width:3em}.width-4[_ngcontent-%COMP%]{width:4em}.width-5[_ngcontent-%COMP%]{width:5em}.width-6[_ngcontent-%COMP%]{width:6em}.width-7[_ngcontent-%COMP%]{width:7em}.width-8[_ngcontent-%COMP%]{width:8em}.width-9[_ngcontent-%COMP%]{width:9em}.width-10[_ngcontent-%COMP%]{width:10em}.width-11[_ngcontent-%COMP%]{width:11em}.width-12[_ngcontent-%COMP%]{width:12em}.width-13[_ngcontent-%COMP%]{width:13em}.width-14[_ngcontent-%COMP%]{width:14em}.width-15[_ngcontent-%COMP%]{width:15em}.width-16[_ngcontent-%COMP%]{width:16em}.width-17[_ngcontent-%COMP%]{width:17em}.width-18[_ngcontent-%COMP%]{width:18em}.width-19[_ngcontent-%COMP%]{width:19em}.width-20[_ngcontent-%COMP%]{width:20em}.width-21[_ngcontent-%COMP%]{width:21em}.width-22[_ngcontent-%COMP%]{width:22em}.width-23[_ngcontent-%COMP%]{width:23em}.width-24[_ngcontent-%COMP%]{width:24em}.width-25[_ngcontent-%COMP%]{width:25em}.width-26[_ngcontent-%COMP%]{width:26em}.width-27[_ngcontent-%COMP%]{width:27em}.width-28[_ngcontent-%COMP%]{width:28em}.width-29[_ngcontent-%COMP%]{width:29em}.width-30[_ngcontent-%COMP%]{width:30em}.width-31[_ngcontent-%COMP%]{width:31em}.width-33[_ngcontent-%COMP%]{width:32em}.width-33[_ngcontent-%COMP%]{width:33em}.width-34[_ngcontent-%COMP%]{width:34em}.width-35[_ngcontent-%COMP%]{width:35em}.width-36[_ngcontent-%COMP%]{width:36em}.width-37[_ngcontent-%COMP%]{width:37em}.width-38[_ngcontent-%COMP%]{width:38em}.width-39[_ngcontent-%COMP%]{width:39em}";function a8(t,n){t&1&&(p(0,"button",2)(1,"mat-icon"),M(2,"arrow_back"),g()())}function s8(t,n){if(t&1){let e=ft();p(0,"button",5),M(1),g(),p(2,"button",6),H("click",function(){Ae(e);let r=E(2);return Ne(r.confirm())}),M(3),g()}if(t&2){let e=E(2);v(),oe(e.no),v(2),oe(e.yes)}}function l8(t,n){t&1&&(p(0,"button",5),M(1,"Close"),g())}function c8(t,n){if(t&1&&(p(0,"mat-dialog-actions",4),G(1,s8,4,2)(2,l8,2,0,"button",5),g()),t&2){let e=E();L("align",e.actionsAlign),v(),q(e.toConfirm?1:2)}}var d8=(t,n,e,i)=>({"alert-success":t,"alert-error":n,"alert-info":e,"alert-warning":i});function u8(t,n){if(t&1&&(p(0,"div")(1,"div",0),M(2),g()()),t&2){let e=E();v(),L("ngClass",Ev(2,d8,e.message.type==="success",e.message.type==="error",e.message.type==="info",e.message.type==="warning")),v(),oe(e.message.text)}}function m8(t,n){if(t&1&&(p(0,"mat-option",5),M(1),g()),t&2){let e=n.$implicit;L("value",e.value),v(),oe(e.display)}}function h8(t,n){if(t&1&&(p(0,"mat-option",5),M(1),g()),t&2){let e=n.$implicit;L("value",e.value),v(),oe(e.display)}}function f8(t,n){t&1&&V(0,"mat-progress-bar",0)}function p8(t,n){if(t&1&&V(0,"mat-progress-bar",1),t&2){let e=E();L("mode",e.mode)("value",e.value)("bufferValue",e.bufferValue)}}var hu=class{constructor(n){if(!n)throw Error($localize`The derived concrete class had not called super(DerivedClassName) properly.`);if(console.debug(`Global [${n.name}] created.`),u(n,{optional:!0,skipSelf:!0}))throw Error($localize`[${n.name}]: trying to create multiple instances, but this service should be a singleton. Please removed references in providers`)}};var Bp=class extends hu{subject=new I;subjectObservable;constructor(n){super(n),this.subjectObservable=this.subject.asObservable()}getMessage(){return this.subjectObservable}emit(n){this.subject.next(n)}};var fu=new C("Material Dialog action buttons align"),CC=new C("Dialog Options",{providedIn:"root",factory:()=>({useIcon:!1,useTitle:!0})}),g8=(()=>{class t{dialogOptions;actionsAlign;renderer;_message;get message(){return this._message}set message(e){this._message=e}htmlContentElement;constructor(e,i,r,o){this.dialogOptions=e,this.actionsAlign=r,this.renderer=o,this.message=i.message}ngAfterViewInit(){this.message?(console.debug("message text: "+this.message.text),this.htmlContentElement&&(this.message.contentType==="html"?this.message.status||this.message.status===0?this.htmlContentElement.nativeElement.srcdoc=this.message.text:this.renderer.setProperty(this.htmlContentElement.nativeElement,"innerHTML",this.message.text):this.message.contentType==="json"&&this.message.status>=0?this.htmlContentElement.nativeElement.srcdoc="<pre>"+this.message.text+"</pre>":this.message.contentType==="text"&&(this.htmlContentElement.nativeElement.srcdoc="<pre>"+this.message.text+"</pre>"))):console.error("this.message is not yet available")}get title(){if(this.message)switch(this.message.type){case"success":return"Success";case"info":return"Info";case"warning":return"Warning";case"error":return"Error";case"notify":return"Notification";case"response":return"Response";default:return"Info"}}get titleIcon(){if(this.message){let e={info:"info",success:"star",warning:"warning",error:"error",response:"chat",notify:"notifications"};return this.message.type?e[this.message.type]:void 0}}get iconColor(){if(this.message){let e={info:"primary",success:"primary",warning:"accent",error:"warn",response:"primary",notify:"primary"};return this.message.type?e[this.message.type]:void 0}}get useIcon(){return this.dialogOptions&&this.dialogOptions.useIcon}get useTitle(){return this.dialogOptions&&this.dialogOptions.useTitle||!this.dialogOptions||!this.dialogOptions.useIcon&&!this.dialogOptions.useTitle}get subtitle(){return this.message?.subtitle}get messageType(){return this.message?this.message.type??"":""}static \u0275fac=function(i){return new(i||t)(T(CC),T(Wr),T(fu),T(xe))};static \u0275cmp=O({type:t,selectors:[["ng-component"]],viewQuery:function(i,r){if(i&1&&Te(eO,7),i&2){let o;Q(o=X())&&(r.htmlContentElement=o.first)}},decls:12,vars:8,consts:()=>{let e;return e=$localize`Close`,[["htmlContent",""],e,["mat-dialog-title","",1,"block-items-gap-1"],[3,"color"],[1,"fx-align-start"],["role","alert",3,"ngClass"],[3,"align"],["type","button","mat-raised-button","","matDialogClose",""],["target","_blank"],[1,"frame-dialog-content"]]},template:function(i,r){i&1&&(p(0,"h1",2),G(1,Kz,2,2,"mat-icon",3),G(2,Jz,2,1,"label",4),p(3,"label"),M(4),g()(),p(5,"mat-dialog-content"),G(6,e8,2,8,"div",5),G(7,t8,2,9,"div",5),G(8,r8,6,2,"html"),g(),p(9,"mat-dialog-actions",6)(10,"button",7),st(11,1),g()()),i&2&&(v(),q(r.useIcon?1:-1),v(),q(r.useTitle?2:-1),v(2),gn(" ",r.subtitle," "),v(2),q(!(r.message!=null&&r.message.status)&&(r.message==null?null:r.message.contentType)==="text"?6:-1),v(),q((r.message==null?null:r.message.status)>=0?7:-1),v(),q(Cv(7,Xz).indexOf(r.message==null?null:r.message.contentType)>=0&&(r.message!=null&&r.message.text)?8:-1),v(),L("align",r.actionsAlign))},dependencies:[ri,Hn,ur,No,sr,lr,$f,cr,_n,Pr,Yr,zn],styles:["iframe.frame-dialog-content[_ngcontent-%COMP%]{width:75dvw;height:45dvh}.top-margin-half[_ngcontent-%COMP%]{margin-top:.5em}img.max-width-auto-height[_ngcontent-%COMP%]{max-width:100%;max-height:100%}img.original-size[_ngcontent-%COMP%]{-webkit-user-select:none;margin:auto}",".alert-success[_ngcontent-%COMP%]{border-color:#d0e9c6;color:#3c763d}.alert-background-success[_ngcontent-%COMP%]{background-color:#dff0d8!important}.alert-info[_ngcontent-%COMP%]{border-color:#bcdff1;color:#31708f}.alert-background-info[_ngcontent-%COMP%]{background-color:#d9edf7}.alert-warning[_ngcontent-%COMP%]{border-color:#faf2cc;color:#8a6d3b}.alert-background-warning[_ngcontent-%COMP%]{background-color:#fcf8e3}.alert-error[_ngcontent-%COMP%]{border-color:#ebcccc;color:#a94442}.alert-background-error[_ngcontent-%COMP%]{background-color:#f2dede}",".fx-layout-row[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center}.fx-layout-column[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start}.fx-layout-wrap[_ngcontent-%COMP%]{flex-wrap:wrap}.fx-column-gap-1[_ngcontent-%COMP%]{display:flex;flex-direction:row;column-gap:1em}.fx-row-gap-1[_ngcontent-%COMP%]{display:flex;flex-direction:column;row-gap:1em}.fx-column-gap-2[_ngcontent-%COMP%]{display:flex;flex-direction:row;column-gap:2em}.fx-row-gap-2[_ngcontent-%COMP%]{display:flex;flex-direction:column;row-gap:2em}.fx-column-gap-half[_ngcontent-%COMP%]{display:flex;flex-direction:row;column-gap:.5em}.fx-row-gap-half[_ngcontent-%COMP%]{display:flex;flex-direction:column;row-gap:.5em}.fx-align-center-center[_ngcontent-%COMP%]{justify-content:center;align-content:center}.fx-align-start[_ngcontent-%COMP%]{justify-content:flex-start}.fx-align-start-start[_ngcontent-%COMP%]{justify-content:flex-start;align-content:flex-start}.fx-align-end[_ngcontent-%COMP%]{justify-content:flex-end}.fx-align-end-end[_ngcontent-%COMP%]{justify-content:flex-end;align-content:flex-end}.fx-align-space-between[_ngcontent-%COMP%]{justify-content:space-between}.fx-grow-1[_ngcontent-%COMP%]{flex-grow:1}.fx-grow-2[_ngcontent-%COMP%]{flex-grow:2}.fx-shrink-1[_ngcontent-%COMP%]{flex-shrink:1}.flex-100pc[_ngcontent-%COMP%]{flex:100%}.flex-95pc[_ngcontent-%COMP%]{flex:95%}.flex-80pc[_ngcontent-%COMP%]{flex:80%}.fx-full-width[_ngcontent-%COMP%]{margin:0;width:100%;min-width:100%}.fx-95pc-width[_ngcontent-%COMP%]{margin:0;width:95%;min-width:95%}.fx-80pc-width[_ngcontent-%COMP%]{margin:0;width:80%;min-width:80%}.fx-50pc-width[_ngcontent-%COMP%]{margin:0;width:50%;min-width:50%}.fx-offset-80px[_ngcontent-%COMP%]{margin-left:80px}.line-ellipsis[_ngcontent-%COMP%]{display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.line2-ellipsis[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.flex-half[_ngcontent-%COMP%]{flex:0 0 .5em;flex-wrap:nowrap}.flex-1[_ngcontent-%COMP%]{flex:0 0 1em}.flex-2[_ngcontent-%COMP%]{flex:0 0 2em}.flex-3[_ngcontent-%COMP%]{flex:0 0 3em}.flex-4[_ngcontent-%COMP%]{flex:0 0 4em}.flex-5[_ngcontent-%COMP%]{flex:0 0 5em}.flex-6[_ngcontent-%COMP%]{flex:0 0 6em}.flex-7[_ngcontent-%COMP%]{flex:0 0 7em}.flex-8[_ngcontent-%COMP%]{flex:0 0 8em}.flex-9[_ngcontent-%COMP%]{flex:0 0 9em}.flex-10[_ngcontent-%COMP%]{flex:0 0 10em}.flex-11[_ngcontent-%COMP%]{flex:0 0 11em}.flex-12[_ngcontent-%COMP%]{flex:0 0 12em}.flex-13[_ngcontent-%COMP%]{flex:0 0 13em}.flex-14[_ngcontent-%COMP%]{flex:0 0 14em}.flex-15[_ngcontent-%COMP%]{flex:0 0 15em}.flex-16[_ngcontent-%COMP%]{flex:0 0 16em}.flex-17[_ngcontent-%COMP%]{flex:0 0 17em}.flex-18[_ngcontent-%COMP%]{flex:0 0 18em}.flex-19[_ngcontent-%COMP%]{flex:0 0 19em}.flex-20[_ngcontent-%COMP%]{flex:0 0 20em}.flex-21[_ngcontent-%COMP%]{flex:0 0 21em}.flex-22[_ngcontent-%COMP%]{flex:0 0 22em}.flex-23[_ngcontent-%COMP%]{flex:0 0 23em}.flex-24[_ngcontent-%COMP%]{flex:0 0 24em}.flex-25[_ngcontent-%COMP%]{flex:0 0 25em}.flex-26[_ngcontent-%COMP%]{flex:0 0 26em}.flex-27[_ngcontent-%COMP%]{flex:0 0 27em}.flex-28[_ngcontent-%COMP%]{flex:0 0 28em}.flex-29[_ngcontent-%COMP%]{flex:0 0 29em}.flex-30[_ngcontent-%COMP%]{flex:0 0 30em}.flex-31[_ngcontent-%COMP%]{flex:0 0 31em}.flex-33[_ngcontent-%COMP%]{flex:0 0 32em}.flex-33[_ngcontent-%COMP%]{flex:0 0 33em}.flex-34[_ngcontent-%COMP%]{flex:0 0 34em}.flex-35[_ngcontent-%COMP%]{flex:0 0 35em}.flex-36[_ngcontent-%COMP%]{flex:0 0 36em}.flex-37[_ngcontent-%COMP%]{flex:0 0 37em}.flex-38[_ngcontent-%COMP%]{flex:0 0 38em}.flex-39[_ngcontent-%COMP%]{flex:0 0 39em}.flex11-half[_ngcontent-%COMP%]{flex:1 1 .5em}.flex11-1[_ngcontent-%COMP%]{flex:1 1 1em}.flex11-2[_ngcontent-%COMP%]{flex:1 1 2em}.flex11-3[_ngcontent-%COMP%]{flex:1 1 3em}.flex11-4[_ngcontent-%COMP%]{flex:1 1 4em}.flex11-5[_ngcontent-%COMP%]{flex:1 1 5em}.flex11-6[_ngcontent-%COMP%]{flex:1 1 6em}.flex11-7[_ngcontent-%COMP%]{flex:1 1 7em}.flex11-8[_ngcontent-%COMP%]{flex:1 1 8em}.flex11-9[_ngcontent-%COMP%]{flex:1 1 9em}.flex11-10[_ngcontent-%COMP%]{flex:1 1 10em}.flex11-11[_ngcontent-%COMP%]{flex:1 1 11em}.flex11-12[_ngcontent-%COMP%]{flex:1 1 12em}.flex11-13[_ngcontent-%COMP%]{flex:1 1 13em}.flex11-14[_ngcontent-%COMP%]{flex:1 1 14em}.flex11-15[_ngcontent-%COMP%]{flex:1 1 15em}.flex11-16[_ngcontent-%COMP%]{flex:1 1 16em}.flex11-17[_ngcontent-%COMP%]{flex:1 1 17em}.flex11-18[_ngcontent-%COMP%]{flex:1 1 18em}.flex11-19[_ngcontent-%COMP%]{flex:1 1 19em}.flex11-20[_ngcontent-%COMP%]{flex:1 1 20em}.flex11-21[_ngcontent-%COMP%]{flex:1 1 21em}.flex11-22[_ngcontent-%COMP%]{flex:1 1 22em}.flex11-23[_ngcontent-%COMP%]{flex:1 1 23em}.flex11-24[_ngcontent-%COMP%]{flex:1 1 24em}.flex11-25[_ngcontent-%COMP%]{flex:1 1 25em}.flex11-26[_ngcontent-%COMP%]{flex:1 1 26em}.flex11-27[_ngcontent-%COMP%]{flex:1 1 27em}.flex11-28[_ngcontent-%COMP%]{flex:1 1 28em}.flex11-29[_ngcontent-%COMP%]{flex:1 1 29em}.flex11-30[_ngcontent-%COMP%]{flex:1 1 30em}.flex11-31[_ngcontent-%COMP%]{flex:1 1 31em}.flex11-33[_ngcontent-%COMP%]{flex:1 1 32em}.flex11-33[_ngcontent-%COMP%]{flex:1 1 33em}.flex11-34[_ngcontent-%COMP%]{flex:1 1 34em}.flex11-35[_ngcontent-%COMP%]{flex:1 1 35em}.flex11-36[_ngcontent-%COMP%]{flex:1 1 36em}.flex11-37[_ngcontent-%COMP%]{flex:1 1 37em}.flex11-38[_ngcontent-%COMP%]{flex:1 1 38em}.flex11-39[_ngcontent-%COMP%]{flex:1 1 39em}.width-half[_ngcontent-%COMP%]{width:.5em}.width-1[_ngcontent-%COMP%]{width:1em}.width-2[_ngcontent-%COMP%]{width:2em}.width-3[_ngcontent-%COMP%]{width:3em}.width-4[_ngcontent-%COMP%]{width:4em}.width-5[_ngcontent-%COMP%]{width:5em}.width-6[_ngcontent-%COMP%]{width:6em}.width-7[_ngcontent-%COMP%]{width:7em}.width-8[_ngcontent-%COMP%]{width:8em}.width-9[_ngcontent-%COMP%]{width:9em}.width-10[_ngcontent-%COMP%]{width:10em}.width-11[_ngcontent-%COMP%]{width:11em}.width-12[_ngcontent-%COMP%]{width:12em}.width-13[_ngcontent-%COMP%]{width:13em}.width-14[_ngcontent-%COMP%]{width:14em}.width-15[_ngcontent-%COMP%]{width:15em}.width-16[_ngcontent-%COMP%]{width:16em}.width-17[_ngcontent-%COMP%]{width:17em}.width-18[_ngcontent-%COMP%]{width:18em}.width-19[_ngcontent-%COMP%]{width:19em}.width-20[_ngcontent-%COMP%]{width:20em}.width-21[_ngcontent-%COMP%]{width:21em}.width-22[_ngcontent-%COMP%]{width:22em}.width-23[_ngcontent-%COMP%]{width:23em}.width-24[_ngcontent-%COMP%]{width:24em}.width-25[_ngcontent-%COMP%]{width:25em}.width-26[_ngcontent-%COMP%]{width:26em}.width-27[_ngcontent-%COMP%]{width:27em}.width-28[_ngcontent-%COMP%]{width:28em}.width-29[_ngcontent-%COMP%]{width:29em}.width-30[_ngcontent-%COMP%]{width:30em}.width-31[_ngcontent-%COMP%]{width:31em}.width-33[_ngcontent-%COMP%]{width:32em}.width-33[_ngcontent-%COMP%]{width:33em}.width-34[_ngcontent-%COMP%]{width:34em}.width-35[_ngcontent-%COMP%]{width:35em}.width-36[_ngcontent-%COMP%]{width:36em}.width-37[_ngcontent-%COMP%]{width:37em}.width-38[_ngcontent-%COMP%]{width:38em}.width-39[_ngcontent-%COMP%]{width:39em}"]})}return t})(),_8=(()=>{class t{message;get messageType(){if(this.message)return this.message.type}get messageText(){return this.message?this.message.text:""}constructor(e){this.message=e.message}static \u0275fac=function(i){return new(i||t)(T(mp))};static \u0275cmp=O({type:t,selectors:[["ng-component"]],decls:2,vars:5,consts:[["role","alert","matSnackBarLabel","",3,"ngClass"]],template:function(i,r){i&1&&(p(0,"div",0),M(1),g()),i&2&&(L("ngClass",xv(2,o8,"alert-"+r.messageType,"alert-background-"+r.messageType)),v(),oe(r.messageText))},dependencies:[_n,Pr],styles:[bC,vC,yC]})}return t})(),fr=(()=>{class t extends hu{snackBarService;dialog;subject=new I;initOnceSubscription;constructor(e,i){super(t),this.snackBarService=e,this.dialog=i,console.debug("AlertService Created.")}initOnce(){if(this.initOnceSubscription){console.error("initOnce is called more than once. Please fix the program.");return}this.initOnceSubscription=this.getMessage().subscribe(e=>{if(e&&e.text){switch(e.type){case"success":console.info(e.text);break;case"info":console.info(e.text);break;case"warning":console.warn(e.text);break;case"error":console.error(e.text);break;default:console.warn(e.text);break}e.contentType==="text"&&(e.snackBar||e.type==="success"&&e.text.length<=50&&e.snackBar==null)?this.snackBarService.openFromComponent(_8,{duration:3e3,data:{message:e}}):this.dialog.open(g8,{data:{message:e}})}}),console.debug("AlertService.initOnce(), and listen now.")}success(e,i,r,o="text"){this.subject.next({type:"success",text:e,snackBar:i,subtitle:r,contentType:o})}info(e,i=!1,r,o="text"){this.subject.next({type:"info",text:e,snackBar:i,subtitle:r,contentType:o})}error(e,i=!1,r){this.errorOrWarning(e,"error",i,r)}warn(e,i=!1,r){this.errorOrWarning(e,"warning",i,r)}notify(e,i,r="text"){this.subject.next({type:"notify",text:e,snackBar:!1,subtitle:i,contentType:r})}errorOrWarning(e,i,r=!1,o){let a,s="text";if(e instanceof tr){let l=e.headers.get("Content-Type");if(l||(l=e.headers.get("content-type")),l?l.indexOf("html")>=0?s="html":l.indexOf("json")>=0&&(s="json"):s="text",console.debug("now content Type: "+s),e.status===0)if(e.url){let c=new URL(e.url).host;a=$localize`No response from backend ${c}. Connection is unavailable.`}else a=$localize`No response from backend. Connection is unavailable.`;else e.error?a=s==="json"&&e.error instanceof Object?JSON.stringify(e.error,null,"	"):e.error:(a=`${e.status} - ${e.statusText}`,s="text")}else typeof e=="string"?(a=e,s="text"):(a=JSON.stringify(e,null,"	"),s="json");this.subject.next({type:i,text:a,snackBar:r,contentType:s,status:e.status,statusText:e.statusText,subtitle:o})}warnMessage(e,i,r="text"){this.subject.next({type:"warning",text:e,snackBar:!1,subtitle:i,contentType:r})}errorMessage(e,i,r="text"){this.subject.next({type:"error",text:e,snackBar:!1,subtitle:i,contentType:r})}getMessage(){return this.subject.asObservable()}clear(){this.subject.next({type:void 0,text:void 0})}static \u0275fac=function(i){return new(i||t)(A(ZT),A(jn))};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),b8=(()=>{class t{data;actionsAlign;dialogRef;title;body;actionLabel=$localize`Yes`;cancelLabel=$localize`No`;constructor(e,i,r){this.data=e,this.actionsAlign=i,this.dialogRef=r,this.title=e.title,this.body=e.body,this.actionLabel=e.action,this.cancelLabel=e.cancel}confirm(){this.dialogRef.close(!0)}static \u0275fac=function(i){return new(i||t)(T(Wr),T(fu),T(En))};static \u0275cmp=O({type:t,selectors:[["confirm-content"]],inputs:{title:"title",body:"body"},decls:11,vars:5,consts:[["mat-dialog-title",""],[1,"fx-align-start"],[3,"align"],["type","button","mat-raised-button","","matDialogClose",""],["type","submit","mat-raised-button","",3,"click"]],template:function(i,r){i&1&&(p(0,"div",0)(1,"strong",1),M(2),g()(),p(3,"mat-dialog-content")(4,"p"),M(5),g()(),p(6,"mat-dialog-actions",2)(7,"button",3),M(8),g(),p(9,"button",4),H("click",function(){return r.confirm()}),M(10),g()()),i&2&&(v(2),oe(r.title),v(3),oe(r.body),v(),L("align",r.actionsAlign),v(2),oe(r.cancelLabel),v(2),oe(r.actionLabel))},dependencies:[Hn,ur,No,sr,lr,$f,cr],styles:[bC,vC,yC]})}return t})(),nO=(()=>{class t{dialog;modalRef;_opened=!1;get opened(){return this._opened}set opened(e){this._opened=e}constructor(e){this.dialog=e}open(e,i,r=$localize`Yes`,o=$localize`No`){this.modalRef=this.dialog.open(b8,{data:{title:e,body:i,action:r,cancel:o}}),this.opened=!0;let a=this.modalRef.afterClosed();return a.subscribe(()=>this.opened=!1),a}openDefault(){return this.open($localize`Confirm`,$localize`Are you sure?`)}closeIfOpened(){this.opened&&this.modalRef.close()}static \u0275fac=function(i){return new(i||t)(A(jn))};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ji=(function(t){return t[t.Auto=0]="Auto",t[t.Large=1]="Large",t[t.Medium=2]="Medium",t[t.Smart=3]="Smart",t})(ji||{}),J1=(t,n,e)=>{switch(t){case ji.Auto:return;case ji.Large:return"98"+e;case ji.Medium:return"50"+e;case ji.Smart:return n?"98"+e:void 0;default:return}},_C=class{dialog;constructor(n){this.dialog=n}modalRef;displayComponent(n,e){let i=window.innerWidth<800||window.innerHeight<800;return e.useBackButton==null&&(e.size===ji.Large?e.useBackButton=!0:e.useBackButton=i),this.modalRef=this.dialog.open(n,{minWidth:J1(e.size,e.useBackButton,"dvw"),minHeight:J1(e.size,e.useBackButton,"dvh"),panelClass:e.size===ji.Large?e.useBackButton?"dialog-full-content-height":"dialog-full-content-height2":void 0,data:e}),this.modalRef.afterClosed()}};var v8=(()=>{class t{subject=new I;constructor(){}success(e){this.subject.next({type:"success",text:e})}info(e){this.subject.next({type:"info",text:e})}error(e){this.handleResponse(e,"error")}warn(e){this.handleResponse(e,"warning")}response(e){this.handleResponse(e,"response")}handleResponse(e,i){let r,o="text";if(e instanceof tr){let a=e.headers.get("Content-Type");if(a||(a=e.headers.get("content-type")),a?a.indexOf("html")>=0&&(o="html"):o="text",e.status===0)if(e.url){let s=new URL(e.url).host;r=$localize`No response from backend ${s}. Connection is unavailable.`}else r=$localize`No response from backend. Connection is unavailable.`;else e.message?r=`${e.status} - ${e.statusText}: ${e.message}`:r=`${e.status} - ${e.statusText}`}else r=e.message?e.message:e.toString();console.debug("contentType: "+o),this.subject.next({type:i,text:r,contentType:o})}getMessage(){return this.subject.asObservable()}clear(){this.subject.next({type:void 0,text:void 0})}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Vp=class extends hu{subject=new I;keepAfterNavigationChange=!1;loading=!1;constructor(n,e){super(e),n.events.subscribe(i=>{i instanceof rr&&(this.keepAfterNavigationChange?this.keepAfterNavigationChange=!1:this.subject.next({loading:!1}))})}setWait(n){this.loading=n.loading,this.subject.next(n)}getMessage(){return this.subject.asObservable()}},y8=(()=>{class t extends Vp{constructor(e){super(e,t),console.debug("WaitService created.")}static \u0275fac=function(i){return new(i||t)(A(Bn))};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var C8=(()=>{class t extends Vp{constructor(e){super(e,t),console.debug("WaitProgressService created.")}static \u0275fac=function(i){return new(i||t)(A(Bn))};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),w8=(()=>{class t{data;actionsAlign;dialogRef;httpClient;renderer;sanitizer;ref;title;htmlContentRef;url;useBackButton;toConfirm;yes;no;constructor(e,i,r,o,a,s,l){this.data=e,this.actionsAlign=i,this.dialogRef=r,this.httpClient=o,this.renderer=a,this.sanitizer=s,this.ref=l,this.title=e.title,this.url=e.url,this.useBackButton=e.useBackButton,this.toConfirm=e.toConfirm,this.yes=e.yes,this.no=e.no}ngOnInit(){this.httpClient.get(this.url,{responseType:"text"}).subscribe({next:e=>{this.htmlContentRef.nativeElement.innerHTML=this.sanitizer.sanitize(bt.HTML,e),this.ref.detectChanges()},error:e=>{this.title="Cannot retrieve "+this.title;let i;if(e instanceof tr){if(e.status===0)if(e.url){let r=new URL(e.url).host;i=$localize`No response from backend ${r}. Connection is unavailable.`}else i=$localize`No response from backend. Connection is unavailable.`;else e.message?i=`${e.status} - ${e.statusText}: ${e.message}`:i=`${e.status} - ${e.statusText}`;i+=e.error?" "+JSON.stringify(e.error):""}else i=e.message?e.message:e.toString();this.htmlContentRef.nativeElement.innerHTML=i,this.ref.detectChanges()}})}ngAfterViewInit(){}confirm(){this.dialogRef.close(!0)}static \u0275fac=function(i){return new(i||t)(T(Wr),T(fu),T(En),T(nr),T(xe),T(Si),T(ve))};static \u0275cmp=O({type:t,selectors:[["html-ref-dialog"]],viewQuery:function(i,r){if(i&1&&Te(eO,7),i&2){let o;Q(o=X())&&(r.htmlContentRef=o.first)}},decls:8,vars:3,consts:[["htmlContent",""],["mat-dialog-title","",1,"block-items-gap-1","line-ellipsis"],["type","button","mat-mini-fab","","color","any","matDialogClose","","aria-label","Close"],[1,"html-content-wrapper"],[3,"align"],["type","button","mat-raised-button","","matDialogClose",""],["type","button","mat-raised-button","","color","primary",3,"click"]],template:function(i,r){i&1&&(p(0,"h1",1),G(1,a8,3,0,"button",2),p(2,"span"),M(3),g()(),p(4,"mat-dialog-content"),V(5,"div",3,0),g(),G(7,c8,3,2,"mat-dialog-actions",4)),i&2&&(v(),q(r.useBackButton?1:-1),v(2),oe(r.title),v(4),q(r.useBackButton?-1:7))},dependencies:[ri,Hn,ur,ai,No,sr,lr,$f,cr,Yr,zn],encapsulation:2,changeDetection:0})}return t})(),Go=(()=>{class t extends _C{dialog;constructor(e){super(e),this.dialog=e}open(e){return super.displayComponent(w8,e)}static \u0275fac=function(i){return new(i||t)(A(jn))};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var x8=(()=>{class t{alertService;ref;alive=!0;message={};get hasContent(){return!!(this.message&&this.message.text)}constructor(e,i){this.alertService=e,this.ref=i}ngOnInit(){this.alertService.getMessage().pipe(lc(()=>this.alive)).subscribe(e=>{this.message=e,e&&(e.type==="success"?console.info(e.text):e.type==="error"?console.error(e.text):e.type==="info"?console.info(e.text):(e.type,console.warn(e.text))),this.ref.detectChanges()})}ngOnDestroy(){this.alive=!1}static \u0275fac=function(i){return new(i||t)(T(v8),T(ve))};static \u0275cmp=O({type:t,selectors:[["alert"],["nmce-alert"],["nmceAlert"]],exportAs:["nmceAlert"],decls:1,vars:1,consts:[["role","alert",3,"ngClass"]],template:function(i,r){i&1&&G(0,u8,3,7,"div"),i&2&&q(r.hasContent?0:-1)},dependencies:[_n,Pr,dr,ri],styles:[bC,vC,yC]})}return t})(),E8=(()=>{class t{yearSlots=[{value:void 0,display:""}];monthSlots=[{value:void 0,display:""},{value:1,display:"01"},{value:2,display:"02"},{value:3,display:"03"},{value:4,display:"04"},{value:5,display:"05"},{value:6,display:"06"},{value:7,display:"07"},{value:8,display:"08"},{value:9,display:"09"},{value:10,display:"10"},{value:11,display:"11"},{value:12,display:"12"}];selectedYear;selectedMonth;yearsInFuture=20;yearMonthExpiry;get value(){let e=0;return this.selectedYear&&(e+=this.selectedYear*100),this.selectedMonth&&(e+=this.selectedMonth),console.debug(e),e}set value(e){e?(this.selectedYear=Math.trunc(e/100),this.selectedMonth=Math.trunc(e%100)):(this.selectedMonth=void 0,this.selectedYear=void 0)}change=new K;constructor(){}ngOnInit(){let e=tt.now().year;for(let i=0;i<this.yearsInFuture;i++)this.yearSlots.push({value:i+e,display:(i+e).toString()});this.yearMonthExpiry&&this.yearMonthExpiry.value&&(this.value=parseInt(this.yearMonthExpiry.value))}onSelectionChange(e){console.debug(`selected: ${e.value} m: ${this.selectedMonth}  y: ${this.selectedYear} `),this.change.emit(this.value),this.yearMonthExpiry.setValue(this.value),this.yearMonthExpiry.markAsDirty()}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=O({type:t,selectors:[["month-year-expiry"],["nmce-month-year-expiry"]],inputs:{yearsInFuture:"yearsInFuture",yearMonthExpiry:"yearMonthExpiry"},outputs:{change:"change"},decls:13,vars:2,consts:()=>{let e;e=$localize`Month`;let i;return i=$localize`Year`,[e,i,[1,"fx-column-gap-half"],[1,"flex-7"],["placeholder","MM","name","month",3,"ngModelChange","selectionChange","ngModel"],[3,"value"],["placeholder","YYYY","name","year",3,"ngModelChange","selectionChange","ngModel"]]},template:function(i,r){i&1&&(p(0,"div",2)(1,"mat-form-field",3)(2,"mat-label"),st(3,0),g(),p(4,"mat-select",4),Ma("ngModelChange",function(a){return Vs(r.selectedMonth,a)||(r.selectedMonth=a),a}),H("selectionChange",function(a){return r.onSelectionChange(a)}),ln(5,m8,2,2,"mat-option",5,Ji),g()(),p(7,"mat-form-field",3)(8,"mat-label"),st(9,1),g(),p(10,"mat-select",6),Ma("ngModelChange",function(a){return Vs(r.selectedYear,a)||(r.selectedYear=a),a}),H("selectionChange",function(a){return r.onSelectionChange(a)}),ln(11,h8,2,2,"mat-option",5,Ji),g()()()),i&2&&(v(4),Da("ngModel",r.selectedMonth),v(),cn(r.monthSlots),v(5),Da("ngModel",r.selectedYear),v(),cn(r.yearSlots))},dependencies:[dr,Bo,Gd,ri,Fp,Np,hr,Vi,Ap,Wo],encapsulation:2})}return t})();var D8=(()=>{class t{waitService;message;bs;constructor(e){this.waitService=e}loading=!1;ngOnInit(){console.debug("WaitComponent init."),this.bs=this.waitService.getMessage().subscribe(e=>{this.message=e,e&&(this.loading=this.message.loading,console.debug("WaitComponent: "+this.loading+" "+e.text))})}ngOnDestroy(){console.debug("WaitComponent ngOnDestroy"),this.bs.unsubscribe()}static \u0275fac=function(i){return new(i||t)(T(y8))};static \u0275cmp=O({type:t,selectors:[["wait"],["nmce-wait"],["nmceWait"]],decls:2,vars:1,consts:[["mode","indeterminate"]],template:function(i,r){i&1&&(p(0,"div"),G(1,f8,1,0,"mat-progress-bar",0),g()),i&2&&(v(),q(r.loading?1:-1))},dependencies:[Fp,hC],encapsulation:2})}return t})(),M8=(()=>{class t{waitService;message;bs;constructor(e){this.waitService=e}loading=!1;value=0;bufferValue=100;mode="determinate";ngOnInit(){this.bs=this.waitService.getMessage().subscribe(e=>{this.message=e,e&&(this.loading=this.message.loading,this.value=this.message.value,this.message.mode&&this.message.mode!==this.mode?this.mode=this.message.mode:this.value&&this.mode!=="determinate"&&(this.mode="determinate"))})}ngOnDestroy(){this.bs.unsubscribe()}static \u0275fac=function(i){return new(i||t)(T(C8))};static \u0275cmp=O({type:t,selectors:[["waitProgress"],["nmce-wait-progress"],["nmceWaitProgress"]],inputs:{value:"value",bufferValue:"bufferValue"},exportAs:["nmceWaitProgress"],decls:2,vars:1,consts:[[2,"height","1em"],[3,"mode","value","bufferValue"]],template:function(i,r){i&1&&(p(0,"div",0),G(1,p8,1,3,"mat-progress-bar",1),g()),i&2&&(v(),q(r.loading?1:-1))},dependencies:[Fp,hC],encapsulation:2})}return t})();var iO=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=P({imports:[_n,dr,ri,x8,D8,M8,E8]})}return t})();var pr=_(_({version:"20260522.08",helpUri:"https://visualacuity.info/color-blind-test/",formFieldAppearance:0},typeof SITE_CONFIG>"u"?{}:SITE_CONFIG),typeof BUILD_META>"u"?{buildTime:0}:BUILD_META);var wC="Service workers are disabled or not supported by this browser",Ll=class{serviceWorker;worker;registration;events;constructor(n,e){if(this.serviceWorker=n,!n)this.worker=this.events=this.registration=new de(i=>i.error(new R(5601,!1)));else{let i=null,r=new I;this.worker=new de(c=>(i!==null&&c.next(i),r.subscribe(d=>c.next(d))));let o=()=>{let{controller:c}=n;c!==null&&(i=c,r.next(i))};n.addEventListener("controllerchange",o),o(),this.registration=this.worker.pipe(ot(()=>n.getRegistration().then(c=>{if(!c)throw new R(5601,!1);return c})));let a=new I;this.events=a.asObservable();let s=c=>{let{data:d}=c;d?.type&&a.next(d)};n.addEventListener("message",s),e?.get(Ut,null,{optional:!0})?.onDestroy(()=>{n.removeEventListener("controllerchange",o),n.removeEventListener("message",s)})}}postMessage(n,e){return new Promise(i=>{this.worker.pipe(He(1)).subscribe(r=>{r.postMessage(_({action:n},e)),i()})})}postMessageWithOperation(n,e,i){let r=this.waitForOperationCompleted(i),o=this.postMessage(n,e);return Promise.all([o,r]).then(([,a])=>a)}generateNonce(){return Math.round(Math.random()*1e7)}eventsOfType(n){let e;return typeof n=="string"?e=i=>i.type===n:e=i=>n.includes(i.type),this.events.pipe(Ce(e))}nextEventOfType(n){return this.eventsOfType(n).pipe(He(1))}waitForOperationCompleted(n){return new Promise((e,i)=>{this.eventsOfType("OPERATION_COMPLETED").pipe(Ce(r=>r.nonce===n),He(1),le(r=>{if(r.result!==void 0)return r.result;throw new Error(r.error)})).subscribe({next:e,error:i})})}get isEnabled(){return!!this.serviceWorker}},S8=(()=>{class t{sw;messages;notificationClicks;notificationCloses;pushSubscriptionChanges;subscription;get isEnabled(){return this.sw.isEnabled}pushManager=null;subscriptionChanges=new I;constructor(e){if(this.sw=e,!e.isEnabled){this.messages=yr,this.notificationClicks=yr,this.notificationCloses=yr,this.pushSubscriptionChanges=yr,this.subscription=yr;return}this.messages=this.sw.eventsOfType("PUSH").pipe(le(r=>r.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(le(r=>r.data)),this.notificationCloses=this.sw.eventsOfType("NOTIFICATION_CLOSE").pipe(le(r=>r.data)),this.pushSubscriptionChanges=this.sw.eventsOfType("PUSH_SUBSCRIPTION_CHANGE").pipe(le(r=>r.data)),this.pushManager=this.sw.registration.pipe(le(r=>r.pushManager));let i=this.pushManager.pipe(ot(r=>r.getSubscription()));this.subscription=new de(r=>{let o=i.subscribe(r),a=this.subscriptionChanges.subscribe(r);return()=>{o.unsubscribe(),a.unsubscribe()}})}requestSubscription(e){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(wC));let i={userVisibleOnly:!0},r=this.decodeBase64(e.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),o=new Uint8Array(new ArrayBuffer(r.length));for(let a=0;a<r.length;a++)o[a]=r.charCodeAt(a);return i.applicationServerKey=o,new Promise((a,s)=>{this.pushManager.pipe(ot(l=>l.subscribe(i)),He(1)).subscribe({next:l=>{this.subscriptionChanges.next(l),a(l)},error:s})})}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(wC));let e=i=>{if(i===null)throw new R(5602,!1);return i.unsubscribe().then(r=>{if(!r)throw new R(5603,!1);this.subscriptionChanges.next(null)})};return new Promise((i,r)=>{this.subscription.pipe(He(1),ot(e)).subscribe({next:i,error:r})})}decodeBase64(e){return atob(e)}static \u0275fac=function(i){return new(i||t)(A(Ll))};static \u0275prov=w({token:t,factory:t.\u0275fac})}return t})(),xC=(()=>{class t{sw;versionUpdates;unrecoverable;get isEnabled(){return this.sw.isEnabled}ongoingCheckForUpdate=null;constructor(e){if(this.sw=e,!e.isEnabled){this.versionUpdates=yr,this.unrecoverable=yr;return}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE")}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(wC));if(this.ongoingCheckForUpdate)return this.ongoingCheckForUpdate;let e=this.sw.generateNonce();return this.ongoingCheckForUpdate=this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:e},e).finally(()=>{this.ongoingCheckForUpdate=null}),this.ongoingCheckForUpdate}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new R(5601,!1));let e=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:e},e)}static \u0275fac=function(i){return new(i||t)(A(Ll))};static \u0275prov=w({token:t,factory:t.\u0275fac})}return t})(),oO=new C("");function I8(){let t=u(gu);if(!("serviceWorker"in navigator&&t.enabled!==!1))return;let n=u(oO),e=u(B),i=u(Ut);e.runOutsideAngular(()=>{let r=navigator.serviceWorker,o=()=>r.controller?.postMessage({action:"INITIALIZE"});r.addEventListener("controllerchange",o),i.onDestroy(()=>{r.removeEventListener("controllerchange",o)})}),e.runOutsideAngular(()=>{let r,{registrationStrategy:o}=t;if(typeof o=="function")r=new Promise(a=>o().subscribe(()=>a()));else{let[a,...s]=(o||"registerWhenStable:30000").split(":");switch(a){case"registerImmediately":r=Promise.resolve();break;case"registerWithDelay":r=rO(+s[0]||0);break;case"registerWhenStable":r=Promise.race([i.whenStable(),rO(+s[0])]);break;default:throw new R(5600,!1)}}r.then(()=>{i.destroyed||navigator.serviceWorker.register(n,{scope:t.scope,updateViaCache:t.updateViaCache,type:t.type}).catch(a=>console.error(qn(5604,!1)))})})}function rO(t){return new Promise(n=>setTimeout(n,t))}function T8(){let t=u(gu),n=u(Y),e=!0;return new Ll(e&&t.enabled!==!1?navigator.serviceWorker:void 0,n)}var gu=class{enabled;updateViaCache;type;scope;registrationStrategy};function aO(t,n={}){return On([S8,xC,{provide:oO,useValue:t},{provide:gu,useValue:n},{provide:Ll,useFactory:T8},Ls(I8)])}function O8(t,n){for(let e=1,i=1;e<t.length;e++,i++)if(n[i]==="\\")i++;else if(t[e]===":")return e;throw new Error(`Unterminated $localize metadata block in "${n}".`)}var Jr=function(t,...n){if(Jr.translate){let i=Jr.translate(t,n);t=i[0],n=i[1]}let e=sO(t[0],t.raw[0]);for(let i=1;i<t.length;i++)e+=n[i-1]+sO(t[i],t.raw[i]);return e},R8=":";function sO(t,n){return n.charAt(0)===R8?t.substring(O8(t,n)+1):t}globalThis.$localize=Jr;var EC=new C("app.siteVersion"),qo=class t{constructor(n,e,i,r,o){this.siteVersionInfo=n;this.confirmService=e;this.alertService=i;this.swUpdate=r;this.router=o}versionUpdatesSubscribed=!1;checkAvailable(){this.swUpdate.isEnabled&&!this.versionUpdatesSubscribed&&(this.swUpdate.versionUpdates.subscribe(n=>{if(console.info("versionEvent: "+JSON.stringify(n)),n.type==="VERSION_DETECTED")this.alertService.info(Jr`New FE version detected`,!0);else if(n.type==="VERSION_READY"){let e=tt.fromMillis(this.siteVersionInfo.buildTime,{zone:"utc"}).toFormat("yyyyLLdd'T'HHmmss'Z'");this.confirmService.open("System Notification",Jr`New version of ${this.siteVersionInfo.siteName} available to replace current ${this.siteVersionInfo.version} / ${e}. Load the update now? However, you may say NO before finishing current works and then upgrade.`).subscribe(i=>{i&&this.loadUpdate()})}}),this.versionUpdatesSubscribed=!0)}loadUpdate(){this.router.navigate(["/"]).then(()=>{window.location.reload()})}checkUpdate(){console.info("Check update"),this.swUpdate.checkForUpdate().then(n=>{n?console.info(Jr`Update may be available.`):this.alertService.info(Jr`No update this time`)})}static \u0275fac=function(e){return new(e||t)(A(EC),A(nO),A(fr),A(xC),A(Bn))};static \u0275prov=w({token:t,factory:t.\u0275fac})};var cO={providers:[iy(),C_(),Sv(),Ny(mI),aO("ngsw-worker.js",{enabled:!0,registrationStrategy:"registerImmediately"}),{provide:EC,useValue:{siteName:pr.siteName??"",version:pr.version,buildTime:pr.buildTime}},qo,{provide:CC,useFactory:()=>({useIcon:!0,useTitle:!0})},{provide:fu,useValue:pr.actionsAlign??"end"}]};var Bl=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=P({imports:[Wa,xn,me,ni]})}return t})();var dO=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=P({imports:[ni,me,ni]})}return t})();var gr=BC(DC()),Hp=class{get viewPortSize(){let n=Math.max(document.documentElement.clientWidth,window.innerWidth||0),e=Math.max(document.documentElement.clientHeight,window.innerHeight||0);return n+", "+e}get screenSize(){return window.screen.width+", "+window.screen.height}get browserInfo(){return gr.name+" "+gr.version+"  "+gr.layout}get osInfo(){return gr.os.toString()}get ua(){return gr.ua}get pixelRatio(){return window.devicePixelRatio}};var ge=class t{static init(){let n=new Hp;t.isAppleDevice=n.osInfo.startsWith("iOS")||n.osInfo.startsWith("OS"),t.isSafari=n.browserInfo.startsWith("Safari"),t.isSmartPhone=(n.osInfo.startsWith("iOS")||n.osInfo.startsWith("Android"))&&t.isSmallScreen,console.debug("APP_DI_CONFIG.init() done"),t.initialized=!0}static initialized=!1;static _appOrigin=window.location.origin+"/";static get appOrigin(){return this._appOrigin}static appStartupUrl=window.location.pathname=="/"?this._appOrigin:`${window.location.origin}${window.location.pathname}`;static DialogActionsAlign="end";static deviceDpi=96;static startupBaseHref=location.toString();static helpUri=pr.helpUri;static siteName=pr.siteName??"";static version=pr.version;static buildTime=pr.buildTime;static isAppleDevice=!1;static isSafari=!1;static isSmartPhone=!1;static isSmallScreen=window.innerWidth<600||window.innerHeight<600;static fixedSizeEnabled=!1;static imageSizeMax=0;static testSettings={get alwaysUseAllPlates(){return t.getStorageBooleanItem("settings.alwaysUseAllPlates")},set alwaysUseAllPlates(n){t.setStorageBooleanItem("settings.alwaysUseAllPlates",n)},get alwaysRandomizePlates(){return t.getStorageBooleanItem("settings.alwaysRandomizePlates")},set alwaysRandomizePlates(n){t.setStorageBooleanItem("settings.alwaysRandomizePlates",n)},get alwaysRandomizeButtons(){return t.getStorageBooleanItem("settings.alwaysRandomizeButtons")},set alwaysRandomizeButtons(n){t.setStorageBooleanItem("settings.alwaysRandomizeButtons",n)},get useKeyboardToSelect(){return t.getStorageBooleanItem("settings.useKeyboardToSelect")},set useKeyboardToSelect(n){t.setStorageBooleanItem("settings.useKeyboardToSelect",n)},get showStartupHelp(){return t.getStorageBooleanItem("settings.showStartupHelp","true")},set showStartupHelp(n){t.setStorageBooleanItem("settings.showStartupHelp",n)},get showTestHelp(){return t.getStorageBooleanItem("settings.showTestHelp","true")},set showTestHelp(n){t.setStorageBooleanItem("settings.showTestHelp",n)},get fixedSize(){return t.getStorageBooleanItem("settings.fixedSize")},set fixedSize(n){t.setStorageBooleanItem("settings.fixedSize",n)},get imageWH(){return t.getStorageIntItem("settings.imageWH")},set imageWH(n){t.setStorageIntItem("settings.imageWH",n)}};static getStorageBooleanItem(n,e){let i=localStorage.getItem(n);return i?i==="true":e==="true"}static setStorageBooleanItem(n,e){localStorage.setItem(n,e?"true":"false")}static getStorageIntItem(n,e){let i=localStorage.getItem(n);return i?parseInt(i):0}static setStorageIntItem(n,e){localStorage.setItem(n,e.toString())}static get dataTimestamp(){return t.getStorageIntItem("webapp.dataTimestamp")}static set dataTimestamp(n){t.setStorageIntItem("webapp.dataTimestamp",n)}static get toUpdateData(){return t.getStorageBooleanItem("webapp.toUpdateData")}static set toUpdateData(n){t.setStorageBooleanItem("webapp.toUpdateData",n)}};var Sn;(e=>{let t;(d=>(d.ImageButtons="ImageButtons",d.Buttons="Buttons",d.NumPad="NumPad",d.LetterPad="LetterPad",d.Voice="Voice",d.Drawing="Drawing",d.Keyboarding="Keyboarding"))(t=e.InputMethod||={});let n;(m=>(m.Letter="Letter",m.Letter_2="Letter_2",m.Letter_3="Letter_3",m.Digit="Digit",m.Digit_2="Digit_2",m.Digit_3="Digit_3",m.Shape_Simple="Shape_Simple",m.Shape_Object="Shape_Object"))(n=e.PlateNature||={})})(Sn||={});var uO="mat-badge-content",A8=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=O({type:t,selectors:[["ng-component"]],decls:0,vars:0,template:function(i,r){},styles:[`.mat-badge {
  position: relative;
}
.mat-badge.mat-badge {
  overflow: visible;
}

.mat-badge-content {
  position: absolute;
  text-align: center;
  display: inline-block;
  transition: transform 200ms ease-in-out;
  transform: scale(0.6);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  box-sizing: border-box;
  pointer-events: none;
  background-color: var(--mat-badge-background-color, var(--mat-sys-error));
  color: var(--mat-badge-text-color, var(--mat-sys-on-error));
  font-family: var(--mat-badge-text-font, var(--mat-sys-label-small-font));
  font-weight: var(--mat-badge-text-weight, var(--mat-sys-label-small-weight));
  border-radius: var(--mat-badge-container-shape, var(--mat-sys-corner-full));
}
.mat-badge-above .mat-badge-content {
  bottom: 100%;
}
.mat-badge-below .mat-badge-content {
  top: 100%;
}
.mat-badge-before .mat-badge-content {
  right: 100%;
}
[dir=rtl] .mat-badge-before .mat-badge-content {
  right: auto;
  left: 100%;
}
.mat-badge-after .mat-badge-content {
  left: 100%;
}
[dir=rtl] .mat-badge-after .mat-badge-content {
  left: auto;
  right: 100%;
}
@media (forced-colors: active) {
  .mat-badge-content {
    outline: solid 1px;
    border-radius: 0;
  }
}

.mat-badge-disabled .mat-badge-content {
  background-color: var(--mat-badge-disabled-state-background-color, color-mix(in srgb, var(--mat-sys-error) 38%, transparent));
  color: var(--mat-badge-disabled-state-text-color, var(--mat-sys-on-error));
}

.mat-badge-hidden .mat-badge-content {
  display: none;
}

.ng-animate-disabled .mat-badge-content,
.mat-badge-content._mat-animation-noopable {
  transition: none;
}

.mat-badge-content.mat-badge-active {
  transform: none;
}

.mat-badge-small .mat-badge-content {
  width: var(--mat-badge-legacy-small-size-container-size, unset);
  height: var(--mat-badge-legacy-small-size-container-size, unset);
  min-width: var(--mat-badge-small-size-container-size, 6px);
  min-height: var(--mat-badge-small-size-container-size, 6px);
  line-height: var(--mat-badge-small-size-line-height, 6px);
  padding: var(--mat-badge-small-size-container-padding, 0);
  font-size: var(--mat-badge-small-size-text-size, 0);
  margin: var(--mat-badge-small-size-container-offset, -6px 0);
}
.mat-badge-small.mat-badge-overlap .mat-badge-content {
  margin: var(--mat-badge-small-size-container-overlap-offset, -6px);
}

.mat-badge-medium .mat-badge-content {
  width: var(--mat-badge-legacy-container-size, unset);
  height: var(--mat-badge-legacy-container-size, unset);
  min-width: var(--mat-badge-container-size, 16px);
  min-height: var(--mat-badge-container-size, 16px);
  line-height: var(--mat-badge-line-height, 16px);
  padding: var(--mat-badge-container-padding, 0 4px);
  font-size: var(--mat-badge-text-size, var(--mat-sys-label-small-size));
  margin: var(--mat-badge-container-offset, -12px 0);
}
.mat-badge-medium.mat-badge-overlap .mat-badge-content {
  margin: var(--mat-badge-container-overlap-offset, -12px);
}

.mat-badge-large .mat-badge-content {
  width: var(--mat-badge-legacy-large-size-container-size, unset);
  height: var(--mat-badge-legacy-large-size-container-size, unset);
  min-width: var(--mat-badge-large-size-container-size, 16px);
  min-height: var(--mat-badge-large-size-container-size, 16px);
  line-height: var(--mat-badge-large-size-line-height, 16px);
  padding: var(--mat-badge-large-size-container-padding, 0 4px);
  font-size: var(--mat-badge-large-size-text-size, var(--mat-sys-label-small-size));
  margin: var(--mat-badge-large-size-container-offset, -12px 0);
}
.mat-badge-large.mat-badge-overlap .mat-badge-content {
  margin: var(--mat-badge-large-size-container-overlap-offset, -12px);
}
`],encapsulation:2,changeDetection:0})}return t})(),mO=(()=>{class t{_ngZone=u(B);_elementRef=u(U);_ariaDescriber=u(Uf);_renderer=u(xe);_animationsDisabled=$e();_idGenerator=u(et);get color(){return this._color}set color(e){this._setColor(e),this._color=e}_color="primary";overlap=!0;disabled=!1;position="above after";get content(){return this._content}set content(e){this._updateRenderedContent(e)}_content;get description(){return this._description}set description(e){this._updateDescription(e)}_description;size="medium";hidden=!1;_badgeElement;_inlineBadgeDescription;_isInitialized=!1;_interactivityChecker=u(dl);_document=u(J);constructor(){let e=u(lt);e.load(A8),e.load(Oo)}isAbove(){return this.position.indexOf("below")===-1}isAfter(){return this.position.indexOf("before")===-1}getBadgeElement(){return this._badgeElement}ngOnInit(){this._clearExistingBadges(),this.content&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement(),this._updateRenderedContent(this.content)),this._isInitialized=!0}ngAfterViewInit(){}ngOnDestroy(){this._renderer.destroyNode&&(this._renderer.destroyNode(this._badgeElement),this._inlineBadgeDescription?.remove()),this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description)}_isHostInteractive(){return this._interactivityChecker.isFocusable(this._elementRef.nativeElement,{ignoreVisibility:!0})}_createBadgeElement(){let e=this._renderer.createElement("span"),i="mat-badge-active";return e.setAttribute("id",this._idGenerator.getId("mat-badge-content-")),e.setAttribute("aria-hidden","true"),e.classList.add(uO),this._animationsDisabled&&e.classList.add("_mat-animation-noopable"),this._elementRef.nativeElement.appendChild(e),typeof requestAnimationFrame=="function"&&!this._animationsDisabled?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{e.classList.add(i)})}):e.classList.add(i),e}_updateRenderedContent(e){let i=`${e??""}`.trim();this._isInitialized&&i&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement()),this._badgeElement&&(this._badgeElement.textContent=i),this._content=i}_updateDescription(e){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description),(!e||this._isHostInteractive())&&this._removeInlineDescription(),this._description=e,this._isHostInteractive()?this._ariaDescriber.describe(this._elementRef.nativeElement,e):this._updateInlineDescription()}_updateInlineDescription(){this._inlineBadgeDescription||(this._inlineBadgeDescription=this._document.createElement("span"),this._inlineBadgeDescription.classList.add("cdk-visually-hidden")),this._inlineBadgeDescription.textContent=this.description,this._badgeElement?.appendChild(this._inlineBadgeDescription)}_removeInlineDescription(){this._inlineBadgeDescription?.remove(),this._inlineBadgeDescription=void 0}_setColor(e){let i=this._elementRef.nativeElement.classList;i.remove(`mat-badge-${this._color}`),e&&i.add(`mat-badge-${e}`)}_clearExistingBadges(){let e=this._elementRef.nativeElement.querySelectorAll(`:scope > .${uO}`);for(let i of Array.from(e))i!==this._badgeElement&&i.remove()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=W({type:t,selectors:[["","matBadge",""]],hostAttrs:[1,"mat-badge"],hostVars:20,hostBindings:function(i,r){i&2&&ee("mat-badge-overlap",r.overlap)("mat-badge-above",r.isAbove())("mat-badge-below",!r.isAbove())("mat-badge-before",!r.isAfter())("mat-badge-after",r.isAfter())("mat-badge-small",r.size==="small")("mat-badge-medium",r.size==="medium")("mat-badge-large",r.size==="large")("mat-badge-hidden",r.hidden||!r.content)("mat-badge-disabled",r.disabled)},inputs:{color:[0,"matBadgeColor","color"],overlap:[2,"matBadgeOverlap","overlap",Z],disabled:[2,"matBadgeDisabled","disabled",Z],position:[0,"matBadgePosition","position"],content:[0,"matBadge","content"],description:[0,"matBadgeDescription","description"],size:[0,"matBadgeSize","size"],hidden:[2,"matBadgeHidden","hidden",Z]}})}return t})(),hO=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=P({imports:[Wa,me]})}return t})();var fO=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=P({imports:[me]})}return t})();var P8=new C("mat-chips-default-options",{providedIn:"root",factory:()=>({separatorKeyCodes:[13]})});var pO=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=P({providers:[Pl,{provide:P8,useValue:{separatorKeyCodes:[13]}}],imports:[Mn,me]})}return t})();var F8=["mat-menu-item",""],L8=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],B8=["mat-icon, [matMenuItemIcon]","*"];function V8(t,n){t&1&&(qi(),p(0,"svg",2),V(1,"polygon",3),g())}var j8=["*"];function U8(t,n){if(t&1){let e=ft();ht(0,"div",0),Ea("click",function(){Ae(e);let r=E();return Ne(r.closed.emit("click"))})("animationstart",function(r){Ae(e);let o=E();return Ne(o._onAnimationStart(r.animationName))})("animationend",function(r){Ae(e);let o=E();return Ne(o._onAnimationDone(r.animationName))})("animationcancel",function(r){Ae(e);let o=E();return Ne(o._onAnimationDone(r.animationName))}),ht(1,"div",1),ue(2),yt()()}if(t&2){let e=E();Dt(e._classList),ee("mat-menu-panel-animations-disabled",e._animationsDisabled)("mat-menu-panel-exit-animation",e._panelAnimationState==="void")("mat-menu-panel-animating",e._isAnimating()),dn("id",e.panelId),fe("aria-label",e.ariaLabel||null)("aria-labelledby",e.ariaLabelledby||null)("aria-describedby",e.ariaDescribedby||null)}}var SC=new C("MAT_MENU_PANEL"),bu=(()=>{class t{_elementRef=u(U);_document=u(J);_focusMonitor=u(ii);_parentMenu=u(SC,{optional:!0});_changeDetectorRef=u(ve);role="menuitem";disabled=!1;disableRipple=!1;_hovered=new I;_focused=new I;_highlighted=!1;_triggersSubmenu=!1;constructor(){u(lt).load(oi),this._parentMenu?.addItem?.(this)}focus(e,i){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,i):this._getHostElement().focus(i),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),i=e.querySelectorAll("mat-icon, .material-icons");for(let r=0;r<i.length;r++)i[r].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=O({type:t,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(i,r){i&1&&H("click",function(a){return r._checkDisabled(a)})("mouseenter",function(){return r._handleMouseEnter()}),i&2&&(fe("role",r.role)("tabindex",r._getTabIndex())("aria-disabled",r.disabled)("disabled",r.disabled||null),ee("mat-mdc-menu-item-highlighted",r._highlighted)("mat-mdc-menu-item-submenu-trigger",r._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",Z],disableRipple:[2,"disableRipple","disableRipple",Z]},exportAs:["matMenuItem"],attrs:F8,ngContentSelectors:B8,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(i,r){i&1&&(Be(L8),ue(0),p(1,"span",0),ue(2,1),g(),V(3,"div",1),G(4,V8,2,0,":svg:svg",2)),i&2&&(v(3),L("matRippleDisabled",r.disableRipple||r.disabled)("matRippleTrigger",r._getHostElement()),v(),q(r._triggersSubmenu?4:-1))},dependencies:[Pi],encapsulation:2,changeDetection:0})}return t})();var H8=new C("MatMenuContent");var z8=new C("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),MC="_mat-menu-enter",zp="_mat-menu-exit",jl=(()=>{class t{_elementRef=u(U);_changeDetectorRef=u(ve);_injector=u(Y);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=$e();_allItems;_directDescendantItems=new Ci;_classList={};_panelAnimationState="void";_animationDone=new I;_isAnimating=Fe(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;set panelClass(e){let i=this._previousPanelClass,r=_({},this._classList);i&&i.length&&i.split(" ").forEach(o=>{r[o]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(o=>{r[o]=!0}),this._elementRef.nativeElement.className=""),this._classList=r}_previousPanelClass;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new K;close=this.closed;panelId=u(et).getId("mat-menu-panel-");constructor(){let e=u(z8);this.overlayPanelClass=e.overlayPanelClass||"",this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new Bd(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(Pt(this._directDescendantItems),ot(e=>Tn(...e.map(i=>i._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let i=this._keyManager;if(this._panelAnimationState==="enter"&&i.activeItem?._hasFocus()){let r=e.toArray(),o=Math.max(0,Math.min(r.length-1,i.activeItemIndex||0));r[o]&&!r[o].disabled?i.setActiveItem(o):i.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(Pt(this._directDescendantItems),ot(i=>Tn(...i.map(r=>r._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let i=e.keyCode,r=this._keyManager;switch(i){case 27:Gt(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(i===38||i===40)&&r.setFocusOrigin("keyboard"),r.onKeydown(e);return}}focusFirstItem(e="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=ct(()=>{let i=this._resolvePanel();if(!i||!i.contains(document.activeElement)){let r=this._keyManager;r.setFocusOrigin(e).setFirstItemActive(),!r.activeItem&&i&&i.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,i=this.yPosition){this._classList=te(_({},this._classList),{"mat-menu-before":e==="before","mat-menu-after":e==="after","mat-menu-above":i==="above","mat-menu-below":i==="below"}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let i=e===zp;(i||e===MC)&&(i&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(i?"void":"enter"),this._isAnimating.set(!1))}_onAnimationStart(e){(e===MC||e===zp)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?"enter":"void",e){if(this._keyManager.activeItemIndex===0){let i=this._resolvePanel();i&&(i.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(zp),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?MC:zp)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(Pt(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(i=>i._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),e}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=O({type:t,selectors:[["mat-menu"]],contentQueries:function(i,r,o){if(i&1&&Kt(o,H8,5)(o,bu,5)(o,bu,4),i&2){let a;Q(a=X())&&(r.lazyContent=a.first),Q(a=X())&&(r._allItems=a),Q(a=X())&&(r.items=a)}},viewQuery:function(i,r){if(i&1&&Te(Xt,5),i&2){let o;Q(o=X())&&(r.templateRef=o.first)}},hostVars:3,hostBindings:function(i,r){i&2&&fe("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",Z],hasBackdrop:[2,"hasBackdrop","hasBackdrop",e=>e==null?null:Z(e)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[Me([{provide:SC,useExisting:t}])],ngContentSelectors:j8,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(i,r){i&1&&(Be(),Wc(0,U8,3,12,"ng-template"))},styles:[`mat-menu {
  display: none;
}

.mat-mdc-menu-content {
  margin: 0;
  padding: 8px 0;
  outline: 0;
}
.mat-mdc-menu-content,
.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  flex: 1;
  white-space: normal;
  font-family: var(--mat-menu-item-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-menu-item-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-menu-item-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-menu-item-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-menu-item-label-text-weight, var(--mat-sys-label-large-weight));
}

@keyframes _mat-menu-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-menu-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-menu-panel {
  min-width: 112px;
  max-width: 280px;
  overflow: auto;
  box-sizing: border-box;
  outline: 0;
  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);
  border-radius: var(--mat-menu-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-menu-container-color, var(--mat-sys-surface-container));
  box-shadow: var(--mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  will-change: transform, opacity;
}
.mat-mdc-menu-panel.mat-menu-panel-exit-animation {
  animation: _mat-menu-exit 100ms 25ms linear forwards;
}
.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {
  animation: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating {
  pointer-events: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {
  display: none;
}
@media (forced-colors: active) {
  .mat-mdc-menu-panel {
    outline: solid 1px;
  }
}
.mat-mdc-menu-panel .mat-divider {
  border-top-color: var(--mat-menu-divider-color, var(--mat-sys-surface-variant));
  margin-bottom: var(--mat-menu-divider-bottom-spacing, 8px);
  margin-top: var(--mat-menu-divider-top-spacing, 8px);
}

.mat-mdc-menu-item {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  background: none;
  text-decoration: none;
  margin: 0;
  min-height: 48px;
  padding-left: var(--mat-menu-item-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-trailing-spacing, 12px);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-menu-item::-moz-focus-inner {
  border: 0;
}
[dir=rtl] .mat-mdc-menu-item {
  padding-left: var(--mat-menu-item-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-leading-spacing, 12px);
}
.mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-leading-spacing, 12px);
}
.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {
  color: var(--mat-menu-item-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-menu-item .mat-icon-no-color,
.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {
  color: var(--mat-menu-item-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-menu-item[disabled] {
  cursor: default;
  opacity: 0.38;
}
.mat-mdc-menu-item[disabled]::after {
  display: block;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.mat-mdc-menu-item:focus {
  outline: 0;
}
.mat-mdc-menu-item .mat-icon {
  flex-shrink: 0;
  margin-right: var(--mat-menu-item-spacing, 12px);
  height: var(--mat-menu-item-icon-size, 24px);
  width: var(--mat-menu-item-icon-size, 24px);
}
[dir=rtl] .mat-mdc-menu-item {
  text-align: right;
}
[dir=rtl] .mat-mdc-menu-item .mat-icon {
  margin-right: 0;
  margin-left: var(--mat-menu-item-spacing, 12px);
}
.mat-mdc-menu-item:not([disabled]):hover {
  background-color: var(--mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {
  background-color: var(--mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
@media (forced-colors: active) {
  .mat-mdc-menu-item {
    margin-top: 1px;
  }
}

.mat-mdc-menu-submenu-icon {
  width: var(--mat-menu-item-icon-size, 24px);
  height: 10px;
  fill: currentColor;
  padding-left: var(--mat-menu-item-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-submenu-icon {
  padding-right: var(--mat-menu-item-spacing, 12px);
  padding-left: 0;
}
[dir=rtl] .mat-mdc-menu-submenu-icon polygon {
  transform: scaleX(-1);
  transform-origin: center;
}
@media (forced-colors: active) {
  .mat-mdc-menu-submenu-icon {
    fill: CanvasText;
  }
}

.mat-mdc-menu-item .mat-mdc-menu-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
`],encapsulation:2,changeDetection:0})}return t})(),$8=new C("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let t=u(Y);return()=>zr(t)}});var Vl=new WeakMap,W8=(()=>{class t{_canHaveBackdrop;_element=u(U);_viewContainerRef=u(jt);_menuItemInstance=u(bu,{optional:!0,self:!0});_dir=u(Ct,{optional:!0});_focusMonitor=u(ii);_ngZone=u(B);_injector=u(Y);_scrollStrategy=u($8);_changeDetectorRef=u(ve);_animationsDisabled=$e();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=Re.EMPTY;_menuCloseSubscription=Re.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e&&(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(i=>{this._destroyMenu(i),(i==="click"||i==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(i)})),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let i=u(SC,{optional:!0});this._parentMaterialMenu=i instanceof jl?i:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&Vl.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let i=this._menu;if(this._menuOpen||!i)return;this._pendingRemoval?.unsubscribe();let r=Vl.get(i);Vl.set(i,this),r&&r!==this&&r._closeMenu();let o=this._createOverlay(i),a=o.getConfig(),s=a.positionStrategy;this._setPosition(i,s),this._canHaveBackdrop?a.hasBackdrop=i.hasBackdrop==null?!this._triggersSubmenu():i.hasBackdrop:a.hasBackdrop=i.hasBackdrop??!1,o.hasAttached()||(o.attach(this._getPortal(i)),i.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),i.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,i.direction=this.dir,e&&i.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0),i instanceof jl&&(i._setIsOpen(!0),i._directDescendantItems.changes.pipe(ze(i.close)).subscribe(()=>{s.withLockedPosition(!1).reapplyLastPosition(),s.withLockedPosition(!0)}))}focus(e,i){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,i):this._element.nativeElement.focus(i)}_destroyMenu(e){let i=this._overlayRef,r=this._menu;!i||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),r instanceof jl&&this._ownsMenu(r)?(this._pendingRemoval=r._animationDone.pipe(He(1)).subscribe(()=>{i.detach(),Vl.has(r)||r.lazyContent?.detach()}),r._setIsOpen(!1)):(i.detach(),r?.lazyContent?.detach()),r&&this._ownsMenu(r)&&Vl.delete(r),this.restoreFocus&&(e==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let i=this._getOverlayConfig(e);this._subscribeToPositions(e,i.positionStrategy),this._overlayRef=Ni(this._injector,i),this._overlayRef.keydownEvents().subscribe(r=>{this._menu instanceof jl&&this._menu._handleKeydown(r)})}return this._overlayRef}_getOverlayConfig(e){return new Ai({positionStrategy:ja(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,i){e.setPositionClasses&&i.positionChanges.subscribe(r=>{this._ngZone.run(()=>{let o=r.connectionPair.overlayX==="start"?"after":"before",a=r.connectionPair.overlayY==="top"?"below":"above";e.setPositionClasses(o,a)})})}_setPosition(e,i){let[r,o]=e.xPosition==="before"?["end","start"]:["start","end"],[a,s]=e.yPosition==="above"?["bottom","top"]:["top","bottom"],[l,c]=[a,s],[d,m]=[r,o],f=0;if(this._triggersSubmenu()){if(m=r=e.xPosition==="before"?"start":"end",o=d=r==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let h=this._parentMaterialMenu.items.first;this._parentInnerPadding=h?h._getHostElement().offsetTop:0}f=a==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(l=a==="top"?"bottom":"top",c=s==="top"?"bottom":"top");i.withPositions([{originX:r,originY:l,overlayX:d,overlayY:a,offsetY:f},{originX:o,originY:l,overlayX:m,overlayY:a,offsetY:f},{originX:r,originY:c,overlayX:d,overlayY:s,offsetY:-f},{originX:o,originY:c,overlayX:m,overlayY:s,offsetY:-f}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),i=this._overlayRef.detachments(),r=this._parentMaterialMenu?this._parentMaterialMenu.closed:ne(),o=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(Ce(a=>this._menuOpen&&a!==this._menuItemInstance)):ne();return Tn(e,r,o,i)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new Ri(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return Vl.get(e)===this}_triggerIsAriaDisabled(){return Z(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(i){zc()};static \u0275dir=W({type:t})}return t})(),gO=(()=>{class t extends W8{_cleanupTouchstart;_hoverSubscription=Re.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new K;onMenuOpen=this.menuOpened;menuClosed=new K;onMenuClose=this.menuClosed;constructor(){super(!0);let e=u(xe);this._cleanupTouchstart=e.listen(this._element.nativeElement,"touchstart",i=>{Ha(i)||(this._openedBy="touch")},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){Ua(e)||(this._openedBy=e.button===0?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let i=e.keyCode;(i===13||i===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(i===39&&this.dir==="ltr"||i===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(!1))}))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=W({type:t,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(i,r){i&1&&H("click",function(a){return r._handleClick(a)})("mousedown",function(a){return r._handleMousedown(a)})("keydown",function(a){return r._handleKeydown(a)}),i&2&&fe("aria-haspopup",r.menu?"menu":null)("aria-expanded",r.menuOpen)("aria-controls",r.menuOpen?r.menu==null?null:r.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[Ie]})}return t})();var Ul=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=P({imports:[Mn,xn,me,ni]})}return t})();var q8=["input"],Z8=["formField"],Y8=["*"],IC=class{source;value;constructor(n,e){this.source=n,this.value=e}};var Q8=new C("MatRadioGroup"),X8=new C("mat-radio-default-options",{providedIn:"root",factory:()=>({color:"accent",disabledInteractive:!1})});var K8=(()=>{class t{_elementRef=u(U);_changeDetector=u(ve);_focusMonitor=u(ii);_radioDispatcher=u(sC);_defaultOptions=u(X8,{optional:!0});_ngZone=u(B);_renderer=u(xe);_uniqueId=u(et).getId("mat-radio-");_cleanupClick;id=this._uniqueId;name;ariaLabel;ariaLabelledby;ariaDescribedby;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked!==e&&(this._checked=e,e&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!e&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),e&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this.radioGroup!==null&&(this.checked||(this.checked=this.radioGroup.value===e),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||"after"}set labelPosition(e){this._labelPosition=e}_labelPosition;get disabled(){return this._disabled||this.radioGroup!==null&&this.radioGroup.disabled}set disabled(e){this._setDisabled(e)}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(e){e!==this._required&&this._changeDetector.markForCheck(),this._required=e}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._defaultOptions&&this._defaultOptions.color||"accent"}set color(e){this._color=e}_color;get disabledInteractive(){return this._disabledInteractive||this.radioGroup!==null&&this.radioGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new K;radioGroup;get inputId(){return`${this.id||this._uniqueId}-input`}_checked=!1;_disabled=!1;_required=!1;_value=null;_removeUniqueSelectionListener=()=>{};_previousTabIndex;_inputElement;_rippleTrigger;_noopAnimations=$e();_injector=u(Y);constructor(){u(lt).load(oi);let e=u(Q8,{optional:!0}),i=u(new Xn("tabindex"),{optional:!0});this.radioGroup=e,this._disabledInteractive=this._defaultOptions?.disabledInteractive??!1,i&&(this.tabIndex=dt(i,0))}focus(e,i){i?this._focusMonitor.focusVia(this._inputElement,i,e):this._inputElement.nativeElement.focus(e)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((e,i)=>{e!==this.id&&i===this.name&&(this.checked=!1)})}ngDoCheck(){this._updateTabIndex()}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{!e&&this.radioGroup&&this.radioGroup._touch()}),this._ngZone.runOutsideAngular(()=>{this._cleanupClick=this._renderer.listen(this._inputElement.nativeElement,"click",this._onInputClick)})}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new IC(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputInteraction(e){if(e.stopPropagation(),!this.checked&&!this.disabled){let i=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),i&&this.radioGroup._emitChangeEvent())}}_onTouchTargetClick(e){this._onInputInteraction(e),(!this.disabled||this.disabledInteractive)&&this._inputElement?.nativeElement.focus()}_setDisabled(e){this._disabled!==e&&(this._disabled=e,this._changeDetector.markForCheck())}_onInputClick=e=>{this.disabled&&this.disabledInteractive&&e.preventDefault()};_updateTabIndex(){let e=this.radioGroup,i;if(!e||!e.selected||this.disabled?i=this.tabIndex:i=e.selected===this?this.tabIndex:-1,i!==this._previousTabIndex){let r=this._inputElement?.nativeElement;r&&(r.setAttribute("tabindex",i+""),this._previousTabIndex=i,ct(()=>{queueMicrotask(()=>{e&&e.selected&&e.selected!==this&&document.activeElement===r&&(e.selected?._inputElement.nativeElement.focus(),document.activeElement===r&&this._inputElement.nativeElement.blur())})},{injector:this._injector}))}}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=O({type:t,selectors:[["mat-radio-button"]],viewQuery:function(i,r){if(i&1&&Te(q8,5)(Z8,7,U),i&2){let o;Q(o=X())&&(r._inputElement=o.first),Q(o=X())&&(r._rippleTrigger=o.first)}},hostAttrs:[1,"mat-mdc-radio-button"],hostVars:19,hostBindings:function(i,r){i&1&&H("focus",function(){return r._inputElement.nativeElement.focus()}),i&2&&(fe("id",r.id)("tabindex",null)("aria-label",null)("aria-labelledby",null)("aria-describedby",null),ee("mat-primary",r.color==="primary")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("mat-mdc-radio-checked",r.checked)("mat-mdc-radio-disabled",r.disabled)("mat-mdc-radio-disabled-interactive",r.disabledInteractive)("_mat-animation-noopable",r._noopAnimations))},inputs:{id:"id",name:"name",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],disableRipple:[2,"disableRipple","disableRipple",Z],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:dt(e)],checked:[2,"checked","checked",Z],value:"value",labelPosition:"labelPosition",disabled:[2,"disabled","disabled",Z],required:[2,"required","required",Z],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",Z]},outputs:{change:"change"},exportAs:["matRadioButton"],ngContentSelectors:Y8,decls:13,vars:17,consts:[["formField",""],["input",""],["mat-internal-form-field","",3,"labelPosition"],[1,"mdc-radio"],["aria-hidden","true",1,"mat-mdc-radio-touch-target",3,"click"],["type","radio","aria-invalid","false",1,"mdc-radio__native-control",3,"change","id","checked","disabled","required"],["aria-hidden","true",1,"mdc-radio__background"],[1,"mdc-radio__outer-circle"],[1,"mdc-radio__inner-circle"],["mat-ripple","","aria-hidden","true",1,"mat-radio-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mat-ripple-element","mat-radio-persistent-ripple"],[1,"mdc-label",3,"for"]],template:function(i,r){i&1&&(Be(),p(0,"div",2,0)(2,"div",3)(3,"div",4),H("click",function(a){return r._onTouchTargetClick(a)}),g(),p(4,"input",5,1),H("change",function(a){return r._onInputInteraction(a)}),g(),p(6,"div",6),V(7,"div",7)(8,"div",8),g(),p(9,"div",9),V(10,"div",10),g()(),p(11,"label",11),ue(12),g()()),i&2&&(L("labelPosition",r.labelPosition),v(2),ee("mdc-radio--disabled",r.disabled),v(2),L("id",r.inputId)("checked",r.checked)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),fe("name",r.name)("value",r.value)("aria-label",r.ariaLabel)("aria-labelledby",r.ariaLabelledby)("aria-describedby",r.ariaDescribedby)("aria-disabled",r.disabled&&r.disabledInteractive?"true":null),v(5),L("matRippleTrigger",r._rippleTrigger.nativeElement)("matRippleDisabled",r._isRippleDisabled())("matRippleCentered",!0),v(2),L("for",r.inputId))},dependencies:[Pi,Lp],styles:[`.mat-mdc-radio-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-radio-button .mdc-radio {
  display: inline-block;
  position: relative;
  flex: 0 0 auto;
  box-sizing: content-box;
  width: 20px;
  height: 20px;
  cursor: pointer;
  will-change: opacity, transform, border-color, color;
  padding: calc((var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]):not(:focus) ~ .mdc-radio__background::before {
  opacity: 0.04;
  transform: scale(1);
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]) ~ .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-hover-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-hover-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-hover-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-pressed-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-pressed-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-pressed-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__background {
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
}
.mat-mdc-radio-button .mdc-radio__background::before {
  position: absolute;
  transform: scale(0, 0);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  content: "";
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  width: var(--mat-radio-state-layer-size, 40px);
  height: var(--mat-radio-state-layer-size, 40px);
  top: calc(-1 * (var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
  left: calc(-1 * (var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
}
.mat-mdc-radio-button .mdc-radio__outer-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-width: 2px;
  border-style: solid;
  border-radius: 50%;
  transition: border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-radio-button .mdc-radio__inner-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  transform: scale(0);
  border-radius: 50%;
  transition: transform 90ms cubic-bezier(0.4, 0, 0.6, 1), background-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
@media (forced-colors: active) {
  .mat-mdc-radio-button .mdc-radio__inner-circle {
    background-color: CanvasText !important;
  }
}
.mat-mdc-radio-button .mdc-radio__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  top: 0;
  right: 0;
  left: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--mat-radio-state-layer-size, 40px);
  height: var(--mat-radio-state-layer-size, 40px);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:focus + .mdc-radio__background::before {
  transform: scale(1);
  opacity: 0.12;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {
  cursor: default;
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface, currentColor));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-focus-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-focus-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  transform: scale(0.5);
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled {
  pointer-events: auto;
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__outer-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__inner-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface, currentColor));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle {
  transition: none !important;
}
.mat-mdc-radio-button label {
  cursor: pointer;
}
.mat-mdc-radio-button label:empty {
  display: none;
}
.mat-mdc-radio-button .mdc-radio__background::before {
  background-color: var(--mat-radio-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element,
.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before {
  background-color: var(--mat-radio-checked-ripple-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mat-ripple-element,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__background::before {
  background-color: var(--mat-radio-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button .mat-internal-form-field {
  color: var(--mat-radio-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-radio-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-radio-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-radio-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-radio-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-radio-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-radio-button .mdc-radio--disabled + label {
  color: var(--mat-radio-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-radio-button .mat-radio-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: 50%;
}
.mat-mdc-radio-button .mat-radio-ripple > .mat-ripple-element {
  opacity: 0.14;
}
.mat-mdc-radio-button .mat-radio-ripple::before {
  border-radius: 50%;
}
.mat-mdc-radio-button .mdc-radio > .mdc-radio__native-control:focus:enabled:not(:checked) ~ .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-focus-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button.cdk-focused .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-radio-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-radio-disabled.mat-mdc-radio-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-radio-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-radio-touch-target-size, 48px);
  width: var(--mat-radio-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--mat-radio-touch-target-display, block);
}
[dir=rtl] .mat-mdc-radio-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2,changeDetection:0})}return t})(),_O=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=P({imports:[Mn,K8,me]})}return t})();var bO=new C("MAT_TABS_CONFIG");var vO=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=P({imports:[me]})}return t})();var $p=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=P({imports:[me]})}return t})();var Zo=class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=F({type:t});static \u0275inj=P({providers:[{provide:bO,useValue:{animationDuration:"0ms"}},{provide:Y1,useValue:{hideSingleSelectionIndicator:!0}}],imports:[Hn,fO,K1,hO,pO,No,Yr,q1,Q1,Ul,_O,Np,vO,$p,Bl]})};function Ka(...t){let n=t.filter(Boolean);return n.length===0?"":n.map((e,i)=>i===0?e.replace(/\/+$/,""):e.replace(/^\/+|\/+$/g,"")).filter(e=>e.length>0).join("/")}function yO(){let t=document.createElement("div");t.style.width="100mm",t.style.position="absolute",t.style.visibility="hidden",document.body.appendChild(t);let n=t.getBoundingClientRect().width;return document.body.removeChild(t),n/100*25.4}function J8(t,n){if(t&1&&(p(0,"label"),M(1),g()),t&2){let e=E().$implicit;v(),oe(e.answer)}}function e$(t,n){if(t&1&&V(0,"img",11),t&2){let e=E().$implicit,i=E();L("src",i.getImgUrl(e.answer),Rr)}}function t$(t,n){if(t&1&&(p(0,"label"),M(1),g()),t&2){let e=E().$implicit;v(),oe(e.answer)}}function n$(t,n){if(t&1&&(p(0,"label"),M(1),g()),t&2){let e=E().$implicit;v(),oe(e.answer)}}function i$(t,n){if(t&1&&(p(0,"label"),M(1),g()),t&2){let e=E().$implicit;v(),oe(e.answer)}}function r$(t,n){t&1&&(p(0,"p"),M(1,"Input: "),g())}function o$(t,n){if(t&1&&(p(0,"label"),M(1),g()),t&2){let e=E(2).$index,i=E();v(),oe(i.data.answered[e])}}function a$(t,n){if(t&1&&V(0,"img",11),t&2){let e=E(2).$index,i=E();L("src",i.getImgUrl(i.data.answered[e]),Rr)}}function s$(t,n){if(t&1&&(p(0,"label"),M(1),g()),t&2){let e=E(2).$index,i=E();v(),oe(i.data.answered[e])}}function l$(t,n){if(t&1&&(p(0,"label"),M(1),g()),t&2){let e=E(2).$index,i=E();v(),oe(i.data.answered[e])}}function c$(t,n){if(t&1&&(p(0,"label"),M(1),g()),t&2){let e=E(2).$index,i=E();v(),oe(i.data.answered[e])}}function d$(t,n){t&1&&(p(0,"p"),M(1,"Input: "),g())}function u$(t,n){if(t&1&&G(0,o$,2,1,"label")(1,a$,1,1,"img",11)(2,s$,2,1,"label")(3,l$,2,1,"label")(4,c$,2,1,"label")(5,d$,2,0,"p"),t&2){let e,i=E().$implicit,r=E();q((e=i.input)===r.Fonlow_ColorBlind_Models_Client.InputMethod.Buttons?0:e===r.Fonlow_ColorBlind_Models_Client.InputMethod.ImageButtons?1:e===r.Fonlow_ColorBlind_Models_Client.InputMethod.Keyboarding?2:e===r.Fonlow_ColorBlind_Models_Client.InputMethod.NumPad?3:e===r.Fonlow_ColorBlind_Models_Client.InputMethod.LetterPad?4:5)}}function m$(t,n){}function h$(t,n){if(t&1&&M(0),t&2){let e=E(2).$implicit;gn(" ",e.description," ")}}function f$(t,n){if(t&1&&G(0,m$,0,0)(1,h$,1,1),t&2){let e,i=E().$index,r=E();q((e=r.getScoreRowBackground(i))==="correct"?0:1)}}function p$(t,n){if(t&1&&(p(0,"tr",10)(1,"td"),M(2),g(),p(3,"td"),G(4,J8,2,1,"label")(5,e$,1,1,"img",11)(6,t$,2,1,"label")(7,n$,2,1,"label")(8,i$,2,1,"label")(9,r$,2,0,"p"),g(),p(10,"td"),G(11,u$,6,1),g(),p(12,"td"),G(13,f$,2,1),g()()),t&2){let e,i=n.$implicit,r=n.$index,o=E();L("ngClass",o.getScoreRowBackground(r)),v(2),oe(r+1),v(2),q((e=i.input)===o.Fonlow_ColorBlind_Models_Client.InputMethod.Buttons?4:e===o.Fonlow_ColorBlind_Models_Client.InputMethod.ImageButtons?5:e===o.Fonlow_ColorBlind_Models_Client.InputMethod.Keyboarding?6:e===o.Fonlow_ColorBlind_Models_Client.InputMethod.NumPad?7:e===o.Fonlow_ColorBlind_Models_Client.InputMethod.LetterPad?8:9),v(7),q(r<o.data.answered.length?11:-1),v(2),q(r<o.data.answered.length?13:-1)}}var TC=class t{constructor(n,e,i){this.data=n;this.dialogRef=e;this.sanitizer=i;console.debug("ViewSettingsComponent created")}get isSmallScreen(){return ge.isSmallScreen}get testSettings(){return ge.testSettings}Fonlow_ColorBlind_Models_Client=Sn;showTitle=!0;ngOnInit(){}close(){}getImgUrl(n){if(!this.data.baseUrl)return"";let e=Ka(this.data.baseUrl,n);return this.sanitizer.bypassSecurityTrustUrl(e)}getScoreRowBackground(n){return this.data.answered[n]==this.data.usedPlates[n].answer?"correct":this.data.usedPlates[n].deficiency&&this.data.usedPlates[n].deficiency.includes(this.data.answered[n])?"deficiency":"wrong"}static \u0275fac=function(e){return new(e||t)(T(Wr),T(En),T(Si))};static \u0275cmp=O({type:t,selectors:[["scores"]],inputs:{showTitle:"showTitle"},features:[Me([])],decls:27,vars:0,consts:()=>{let n;n=$localize`Result`;let e;e=$localize`Plate`;let i;i=$localize`Correct`;let r;r=$localize`Your Answer`;let o;return o=$localize`Note`,[n,e,i,r,o,["mat-dialog-title","",1,"block-items-gap-1"],["mat-mini-fab","","color","any","matTooltip","Back","mat-dialog-close",""],[2,"width","2em"],[2,"width","7em"],[1,"thead-inverse"],[3,"ngClass"],[2,"width","36px","height","36px",3,"src"]]},template:function(e,i){e&1&&(p(0,"div",5)(1,"button",6)(2,"mat-icon"),M(3,"arrow_back_ios"),g()(),p(4,"span"),st(5,0),g()(),p(6,"mat-dialog-content")(7,"table")(8,"colgroup"),V(9,"col",7)(10,"col",8)(11,"col",8)(12,"col"),g(),p(13,"thead",9)(14,"tr")(15,"th"),st(16,1),g(),p(17,"th"),st(18,2),g(),p(19,"th"),st(20,3),g(),p(21,"th"),st(22,4),g()()(),p(23,"tbody"),ln(24,p$,14,5,"tr",10,Ji),g(),V(26,"tfoot"),g()()),e&2&&(v(24),cn(i.data.usedPlates))},dependencies:[_n,Pr,dr,ri,Zo,ai,sr,lr,cr,zn,Kr],styles:["th[_ngcontent-%COMP%]{text-align:left}"],changeDetection:0})},Hl=class t{constructor(n){this.dialog=n}open(n){return this.dialog.open(TC,{disableClose:!0,autoFocus:!1,minWidth:"98dvw",minHeight:"98dvh",panelClass:"dialog-full-content-height",data:n}).afterClosed()}static \u0275fac=function(e){return new(e||t)(A(jn))};static \u0275prov=w({token:t,factory:t.\u0275fac})};var zl=class t extends Bp{constructor(){super(t)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})};var _$=["answerInput"];function b$(t,n){if(t&1&&V(0,"object",2),t&2){let e=E();L("data",e.currentPlateImageUrl,jb)("ngClass",e.fixedSize?"fixed-size":"max-size")("ngStyle",e.fixedSizeStyle)}}function v$(t,n){if(t&1&&V(0,"img",3),t&2){let e=E();L("src",e.currentPlateImageUrl,Rr)("ngClass",e.fixedSize?"fixed-size":"max-size")("ngStyle",e.fixedSizeStyle)}}function y$(t,n){if(t&1){let e=ft();p(0,"button",11),H("click",function(){let r=Ae(e).$implicit,o=E(2);return Ne(o.handleAnswer(r))}),M(1),g()}if(t&2){let e=n.$implicit,i=n.$index,r=E(2);L("matBadgeHidden",!r.useKbd)("matBadge",i+1),v(),oe(e)}}function C$(t,n){if(t&1&&ln(0,y$,2,3,"button",10,Ji),t&2){let e=E();cn(e.currentPlate.buttonTexts)}}function w$(t,n){if(t&1){let e=ft();p(0,"button",13),H("click",function(){let r=Ae(e).$implicit,o=E(2);return Ne(o.handleAnswer(r))}),V(1,"span",14),g()}if(t&2){let e=n.$implicit,i=n.$index,r=E(2);L("matBadgeHidden",!r.useKbd)("matBadge",i+1),v(),L("innerHTML",r.getSvg(e),Vb)}}function x$(t,n){if(t&1&&ln(0,w$,2,3,"button",12,Ji),t&2){let e=E();cn(e.currentPlate.buttonTexts)}}function E$(t,n){t&1&&(p(0,"p"),M(1,"Input: 2"),g())}function D$(t,n){if(t&1){let e=ft();p(0,"mat-form-field")(1,"mat-label"),M(2,"Number"),g(),p(3,"input",15,0),H("keydown.enter",function(){Ae(e);let r=E();return Ne(r.handleNumberInput())}),g(),p(5,"button",16),H("click",function(){Ae(e);let r=E();return Ne(r.handleNumberInput())}),p(6,"mat-icon"),M(7,"check"),g()(),p(8,"button",17),H("click",function(){Ae(e);let r=E();return Ne(r.clearNumberInput())}),p(9,"mat-icon"),M(10,"close"),g()()()}if(t&2){let e=E();v(3),L("formControl",e.numberFormControl),v(5),L("disabled",e.numberFormControl.pristine)}}function M$(t,n){if(t&1){let e=ft();p(0,"mat-form-field")(1,"mat-label"),M(2,"Letters"),g(),p(3,"input",18,0),H("keydown.enter",function(){Ae(e);let r=E();return Ne(r.handleNumberInput())}),g(),p(5,"button",16),H("click",function(){Ae(e);let r=E();return Ne(r.handleNumberInput())}),p(6,"mat-icon"),M(7,"check"),g()(),p(8,"button",17),H("click",function(){Ae(e);let r=E();return Ne(r.clearNumberInput())}),p(9,"mat-icon"),M(10,"close"),g()()()}if(t&2){let e=E();v(3),L("formControl",e.numberFormControl),v(5),L("disabled",e.numberFormControl.pristine)}}function S$(t,n){if(t&1&&(p(0,"p"),M(1),g()),t&2){let e=E();v(),gn("Input: ",e.currentPlate.input)}}function I$(t,n){if(t&1){let e=ft();p(0,"button",19),H("click",function(){Ae(e);let r=E();return Ne(r.showDescription())}),p(1,"mat-icon"),M(2,"description"),g()()}}function T$(t,n){if(t&1&&(p(0,"label"),M(1),g()),t&2){let e=E();v(),oe(e.currentIndex+1)}}function k$(t,n){if(t&1){let e=ft();p(0,"button",20),H("click",function(){Ae(e);let r=E();return Ne(r.firstPlate())}),p(1,"mat-icon"),M(2,"first_page"),g()(),p(3,"button",20),H("click",function(){Ae(e);let r=E();return Ne(r.previousPlate())}),p(4,"mat-icon"),M(5,"arrow_back_ios"),g()(),p(6,"button",20),H("click",function(){Ae(e);let r=E();return Ne(r.nextPlate())}),p(7,"mat-icon"),M(8,"arrow_forward_ios"),g()(),p(9,"button",20),H("click",function(){Ae(e);let r=E();return Ne(r.lastPlate())}),p(10,"mat-icon"),M(11,"last_page"),g()()}if(t&2){let e=E();L("disabled",e.firstButtonDisabled),v(3),L("disabled",e.previousButtonDisabled),v(3),L("disabled",e.nextButtonDisabled),v(3),L("disabled",e.lastButtonDisabled)}}var Wp=class t{constructor(n,e,i,r,o,a,s){this.sanitizer=n;this.ref=e;this.alertService=i;this.scoresDialogService=r;this.htmlHRefDialogService=o;this.httpClient=a;this.sliderSubjectService=s;this.setImageSize(),this.subscription=this.sliderSubjectService.getMessage().subscribe(l=>{this.setImageSize(),this.ref.detectChanges()})}_testContent={dir:"dummyUrl",test:{title:"dummy",plates:[]}};Fonlow_ColorBlind_Models_Client=Sn;get testContent(){return this._testContent}set testContent(n){this.reload(n)}platesRandomized=!1;usedPlates;contentRootFolder="SVG_Plates/";title;get testSettings(){return ge.testSettings}get fixedSize(){return this.testSettings.fixedSize}fixedSizeStyle={};_currentIndex=0;get currentIndex(){return this._currentIndex}set currentIndex(n){if(this._currentIndex=n,!!this.usedPlates){if(this.setCurrentPlateImageUrl(n),this.currentPlate=this.usedPlates?this.usedPlates[this.currentIndex]:{input:Sn.InputMethod.Buttons,nature:Sn.PlateNature.Letter,answer:"",platePath:"",buttonTexts:[]},!this.currentPlate.answer){console.error(`Plate ${this.currentIndex} is of nature Digit and input Buttons, but has no answer defined.`);return}if((this.currentPlate.input===Sn.InputMethod.Buttons||this.currentPlate.input===Sn.InputMethod.ImageButtons)&&(!this.currentPlate.buttonTexts||this.currentPlate.buttonTexts.length===0)){if(!this.currentPlate.answer){console.error(`Plate ${this.currentIndex} is of nature Letter and input Buttons, but has no answer defined.`);return}this.currentPlate.buttonTexts=this.getRandom5Letters(this.currentPlate.answer)}else this.currentPlate.buttonTexts&&this.currentPlate.buttonTexts.length>0&&this.testSettings.alwaysRandomizeButtons&&this.shuffleArrayInPlace(this.currentPlate.buttonTexts);console.info("Current Plate: "+JSON.stringify(this.currentPlate))}}_currentPlate={input:Sn.InputMethod.Buttons,nature:Sn.PlateNature.Letter,answer:"",platePath:"",buttonTexts:[]};get currentPlate(){return this._currentPlate}set currentPlate(n){n.input==Sn.InputMethod.Buttons||n.input==Sn.InputMethod.ImageButtons||ge.isSmartPhone&&(n.input=Sn.InputMethod.Buttons),this._currentPlate=n}baseUrl;get previousButtonDisabled(){return this.currentIndex<=0}get firstButtonDisabled(){return this.currentIndex==0}get nextButtonDisabled(){return this.currentIndex>=(this.usedPlates?.length??0)-1}get lastButtonDisabled(){return this.currentIndex==(this.usedPlates?.length??0)-1}lastKey="";sub;currentPlateImageUrl;isSvgPlate=!1;answered=[];playing=!1;get playButtonHint(){return this.useKbd?this.playing?$localize`Stop and summarize results [S]`:$localize`Start test [K]`:this.playing?$localize`Stop and summarize results`:$localize`Start test`}get useKbd(){return this.testSettings.useKeyboardToSelect}svgCache=new Map;subscription;numberFormControl=new Dn("",[Gr.required,Gr.pattern(/^\d{1,3}$/)]);set answerInput(n){n&&setTimeout(()=>n.focus())}setImageSize(){if(ge.testSettings.fixedSize){let n=Math.min(window.innerWidth,window.innerHeight)*.9;this.fixedSizeStyle=ge.testSettings.fixedSize?{width:`${ge.testSettings.imageWH}px`,height:`${ge.testSettings.imageWH}px`,"max-width":`${n}px`,"max-height":`${n}px`}:{}}}ngOnInit(){this.sub=rc(document,"keydown").pipe(Ce(n=>/^[a-zA-Z0-9]$/.test(n.key)||["ArrowLeft","ArrowRight","Home","End"].includes(n.key))).subscribe(n=>{if(this.testSettings.useKeyboardToSelect)if(this.lastKey=n.key,console.debug(`Key: ${this.lastKey}`),/^[a-zA-Z0-9]$/.test(n.key))this.handleKeyNumInput(this.lastKey);else switch(n.key){case"ArrowLeft":this.playing||this.previousPlate();break;case"ArrowRight":this.playing||this.nextPlate();break;case"Home":this.playing||this.firstPlate();break;case"End":this.playing||this.lastPlate();break}})}ngOnDestroy(){this.subscription.unsubscribe(),this.sub?.unsubscribe()}getImgUrl(n){if(!this.baseUrl)return"";let e=Ka(this.baseUrl,n);return this.sanitizer.bypassSecurityTrustUrl(e)}getSvg(n){let e=Ka(this.baseUrl,n);return this.svgCache.has(e)?this.svgCache.get(e):(this.httpClient.get(e,{responseType:"text"}).subscribe(i=>{let r=this.sanitizer.bypassSecurityTrustHtml(i);this.svgCache.set(e,r),this.ref.detectChanges()}),null)}nextPlate(){return this.usedPlates&&this.currentIndex<(this.usedPlates.length??0)-1?(this.currentIndex++,this.ref.detectChanges(),!0):!1}previousPlate(){return this.currentIndex>0?(this.currentIndex--,this.ref.detectChanges(),!0):!1}firstPlate(){this.currentIndex=0,this.ref.detectChanges()}lastPlate(){this.usedPlates&&(this.currentIndex=this.usedPlates.length-1,this.ref.detectChanges())}handleAnswer(n){this.playing?(this.answered.push(n),this.nextPlate()||this.stopPlay()):n===this.currentPlate.answer?this.alertService.success("Correct",!0):this.currentPlate.deficiency&&this.currentPlate.deficiency.includes(n)?this.alertService.warn("Deficiency",!0):this.alertService.error("Incorrect",!0)}handleNumberInput(){this.handleAnswer(this.numberFormControl.value),this.clearNumberInput()}clearNumberInput(){this.numberFormControl.setValue(""),this.numberFormControl.markAsPristine()}setCurrentPlateImageUrl(n){if(!this.baseUrl||!this.usedPlates)return;let e=Ka(this.baseUrl,this.usedPlates[n].platePath);this.currentPlateImageUrl=this.sanitizer.bypassSecurityTrustResourceUrl(e),this.isSvgPlate=e.toLowerCase().endsWith(".svg")}getRandom5Letters(n){let e=this.usedPlates?.map(i=>i.answer);return this.getRandom5Chars(n,e??[])}getRandom5Chars(n,e){let i=[n];if(!e||e.length===0)return i;for(;i.length<5&&i.length<e.length;){let r=e[Math.floor(Math.random()*e.length)];i.includes(r)||i.push(r)}for(let r=i.length-1;r>0;r--){let o=Math.floor(Math.random()*(r+1));[i[r],i[o]]=[i[o],i[r]]}return i}shuffleArrayInPlace(n){for(let e=n.length-1;e>0;e--){let i=Math.floor(Math.random()*(e+1));[n[e],n[i]]=[n[i],n[e]]}}showDescription(){this.alertService.info(this.currentPlate.description)}handleKeyNumInput(n){if(["1","2","3","4","5","6","7","8","9","0"].includes(n)){let e=parseInt(n,10);if(e>0&&e<=this.currentPlate.buttonTexts.length){let i=this.currentPlate.buttonTexts[e-1];console.debug(i),this.handleAnswer(i)}}else["K","k"].includes(n)&&!this.playing?(this.startPlay(),this.ref.detectChanges()):["S","s"].includes(n)&&this.playing&&(this.stopPlay(),this.ref.detectChanges())}startPlay(){ge.testSettings.showTestHelp&&this.showHelp(),this.currentIndex=0,this.playing=!0,this.answerInput?.focus()}stopPlay(){this.answered.length>0&&this.scoresDialogService.open({usedPlates:this.usedPlates,answered:this.answered,baseUrl:this.baseUrl}),this.resetTest()}tooglePlay(){this.playing?this.stopPlay():this.startPlay()}resetTest(){this.playing=!1,this.answered=[]}reload(n){if(this._testContent=n,this.baseUrl=Ka(this.contentRootFolder,n.dir,n.test.dir),this.resetTest(),this.platesRandomized=!!(this.testContent?.test?.maxPlates&&this.testContent.test.maxPlates>0)||this.testSettings.alwaysRandomizePlates,this.platesRandomized&&this.shuffleArrayInPlace(this.testContent.test.plates??[]),this.usedPlates=this.testSettings.alwaysUseAllPlates?this.testContent.test.plates:this.testContent.test.plates?.slice(0,this.testContent.test.maxPlates)??[],this.currentIndex=0,this.title=n.test?.title+(this.platesRandomized?" \u{1F500}":""),this.usedPlates.length<this.testContent.test.plates.length){let e=`${this.usedPlates.length}/${this.testContent.test.plates?.length}`;this.title+=" "+e}this.ref.detectChanges(),console.debug(JSON.stringify(this.testContent))}showHelp(){this.htmlHRefDialogService.open({title:"Test Guidelines",url:"assets/help/testHelp.html",size:ji.Large,useBackButton:!1,toConfirm:!0,yes:"OK",no:"Don't show again"}).subscribe(n=>{n||(ge.testSettings.showTestHelp=!1)})}static \u0275fac=function(e){return new(e||t)(T(Si),T(ve),T(fr),T(Hl),T(Go),T(nr),T(zl))};static \u0275cmp=O({type:t,selectors:[["plate-card"]],viewQuery:function(e,i){if(e&1&&Te(_$,5,Pp),e&2){let r;Q(r=X())&&(i.answerInput=r.first)}},inputs:{testContent:"testContent"},features:[Me([Hl,Go])],decls:21,vars:8,consts:[["answerInput",""],[1,"image-stage"],["type","image/svg+xml",3,"data","ngClass","ngStyle"],[3,"src","ngClass","ngStyle"],[1,"fx-column-gap-1","buttons-bottom"],[1,"bottom-toolbar"],["mat-mini-fab","","matTooltip","Description"],["mat-mini-fab","",3,"click","matTooltip"],[1,"toolbar-spacer"],[1,"rainbow-bar"],["mat-fab","",1,"answer-button","big-fab-text",3,"matBadgeHidden","matBadge"],["mat-fab","",1,"answer-button","big-fab-text",3,"click","matBadgeHidden","matBadge"],["mat-fab","",1,"answer-button",3,"matBadgeHidden","matBadge"],["mat-fab","",1,"answer-button",3,"click","matBadgeHidden","matBadge"],[1,"svg-icon",3,"innerHTML"],["matInput","","placeholder","0-9*","inputmode","numeric","type","text","pattern","[0-9]*",3,"keydown.enter","formControl"],["mat-icon-button","","matSuffix","",3,"click"],["mat-icon-button","","matSuffix","",3,"click","disabled"],["matInput","","inputmode","text","type","text",3,"keydown.enter","formControl"],["mat-mini-fab","","matTooltip","Description",3,"click"],["mat-mini-fab","",3,"click","disabled"]],template:function(e,i){if(e&1&&(p(0,"main",1)(1,"label"),M(2),g(),G(3,b$,1,3,"object",2)(4,v$,1,3,"img",3),p(5,"div",4),G(6,C$,2,0)(7,x$,2,0)(8,E$,2,0,"p")(9,D$,11,2,"mat-form-field")(10,M$,11,2,"mat-form-field")(11,S$,2,1,"p"),g()(),p(12,"div",5),G(13,I$,3,0,"button",6),p(14,"button",7),H("click",function(){return i.tooglePlay()}),p(15,"mat-icon"),M(16),g()(),G(17,T$,2,1,"label"),V(18,"span",8),G(19,k$,12,4),g(),V(20,"div",9)),e&2){let r;v(2),oe(i.title),v(),q(i.isSvgPlate?3:4),v(3),q((r=i.currentPlate.input)===i.Fonlow_ColorBlind_Models_Client.InputMethod.Buttons?6:r===i.Fonlow_ColorBlind_Models_Client.InputMethod.ImageButtons?7:r===i.Fonlow_ColorBlind_Models_Client.InputMethod.Keyboarding?8:r===i.Fonlow_ColorBlind_Models_Client.InputMethod.NumPad?9:r===i.Fonlow_ColorBlind_Models_Client.InputMethod.LetterPad?10:11),v(7),q(i.currentPlate.description?13:-1),v(),L("matTooltip",i.playButtonHint),v(2),oe(i.playing?"stop":"play_arrow"),v(),q(i.platesRandomized?-1:17),v(2),q(i.playing?-1:19)}},dependencies:[_n,Pr,Uv,iO,ri,Ga,Bo,p0,ap,Zo,ai,cp,HT,mO,zn,Pp,hr,Vi,Al,Kr],styles:[".answer-button[_ngcontent-%COMP%]{--mat-badge-background-color: #0d47a1;--mat-badge-text-color: white}.answer-button[_ngcontent-%COMP%]   .svg-icon[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:42px;height:42px}.answer-button[_ngcontent-%COMP%]   .svg-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:100%;height:100%;display:block;color:var(--mat-sys-on-primary)}.answer-button[_ngcontent-%COMP%]   .svg-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{fill:currentColor}.big-fab-text[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:450;line-height:1}.rainbow-bar[_ngcontent-%COMP%]{width:100%;height:1em;background:linear-gradient(to right,red,#ff8000,#ff0,#0f0,#0ff,#00f,#7f00ff)}@media(orientation:landscape){.rainbow-bar[_ngcontent-%COMP%]{position:fixed;right:0;top:0;width:1em;height:100%;background:linear-gradient(to bottom,red,#ff8000,#ff0,#0f0,#0ff,#00f,#7f00ff)}}"],changeDetection:0})};var _r=_({},typeof THEME_CONFIG>"u"?{}:THEME_CONFIG),Ja=class{static settings=_r.themeLoaderSettings;static get selectedTheme(){return this.settings?localStorage.getItem(this.settings.storageKey):null}static set selectedTheme(n){this.settings&&localStorage.setItem(this.settings.storageKey,n)}static init(){this.loadTheme(this.selectedTheme)}static loadTheme(n){if(!_r.themesDic||!this.settings||Object.keys(_r.themesDic).length===0){console.error("AppConfigConstants need to have themesDic with at least 1 item, and themeKeys.");return}let e=document.getElementById(this.settings.themeLinkId);if(e){let i=e.href.substring(e.href.lastIndexOf("/")+1);if(n==i)return;let o=_r.themesDic[n];if(!o)return;if(e.href=n,this.selectedTheme=n,console.info(`theme altered to ${n}.`),this.settings.appColorsLinkId){let a=document.getElementById(this.settings.appColorsLinkId);if(a)if(o.dark!=null&&this.settings.colorsDarkCss&&this.settings.colorsCss){let s=o.dark?this.settings.colorsDarkCss:this.settings.colorsCss;a.href=(this.settings.appColorsDir??"")+s}else this.settings.colorsCss&&(a.href=(this.settings.appColorsDir??"")+this.settings.colorsCss)}}else{e=document.createElement("link"),e.id=this.settings.themeLinkId,e.rel="stylesheet";let i=n??Object.keys(_r.themesDic)[0];if(e.href=i,document.head.appendChild(e),this.selectedTheme=i,console.info(`Initially loaded theme ${i}`),this.settings.appColorsLinkId){let r=document.createElement("link");r.id=this.settings.appColorsLinkId,r.rel="stylesheet";let o=_r.themesDic[i];if(o.dark!=null&&this.settings.colorsDarkCss&&this.settings.colorsCss){let a=o.dark?this.settings.colorsDarkCss:this.settings.colorsCss;r.href=(this.settings.appColorsDir??"")+a}else this.settings.colorsCss&&(r.href=(this.settings.appColorsDir??"")+this.settings.colorsCss);r.href?(document.head.appendChild(r),console.info(`appColors ${r} loaded.`)):console.warn("With appColorsLinkId defined, dark&colorsCss&colorDarkCss or colorsCss should be defined.")}}}};function O$(t,n){if(t&1&&(p(0,"mat-option",2),M(1),g()),t&2){let e=n.$implicit;L("value",e.filePath),v(),oe(e.display)}}var Gp=class t{themes;get currentTheme(){return Ja.selectedTheme}constructor(){this.themes=_r.themesDic?Object.keys(_r.themesDic).map(n=>{let e=_r.themesDic[n];return{display:e.display,filePath:n,dark:e.dark}}):void 0}themeSelectionChang(n){Ja.loadTheme(n.value)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=O({type:t,selectors:[["theme-select"]],decls:7,vars:1,consts:[["themeSelect",""],[3,"selectionChange","value"],[3,"value"]],template:function(e,i){e&1&&(p(0,"mat-form-field")(1,"mat-label"),M(2,"Themes"),g(),p(3,"mat-select",1,0),H("selectionChange",function(o){return i.themeSelectionChang(o)}),ln(5,O$,2,2,"mat-option",2,qc),g()()),e&2&&(v(3),L("value",i.currentTheme),v(2),cn(i.themes))},dependencies:[Yr,Hn,Fy,hr,Ap,Vi,Wo,Bl,Ul],encapsulation:2,changeDetection:0})};var br=BC(DC());var $l=class t{getScreenInfo(){let n=window.screen.width,e=window.screen.height,i=window.devicePixelRatio||1,r=n*i,o=e*i,{dpiX:a,dpiY:s}=this.measureDpi(),l=a*i,c=s*i,d=r/l,m=o/c,f=d*2.54,h=m*2.54,b=Math.sqrt(d**2+m**2),D=b*2.54;return{pixels:{width:r,height:o},dpi:{x:l,y:c},inches:{width:d,height:m,diagonal:b},cm:{width:Math.round(f*100)/100,height:Math.round(h*100)/100,diagonal:Math.round(D*100)/100}}}measureDpi(){let n=document.createElement("div");n.style.cssText="width:1in;height:1in;position:absolute;left:-9999px",document.body.appendChild(n);let e=n.offsetWidth,i=n.offsetHeight;return document.body.removeChild(n),{dpiX:e,dpiY:i}}static \u0275fac=function(e){return new(e||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})};var A$=["bioSection"];function N$(t,n){if(t&1&&(p(0,"tr")(1,"td"),M(2,"Browser"),g(),p(3,"td"),M(4),g()(),p(5,"tr")(6,"td"),M(7,"OS"),g(),p(8,"td"),M(9),g()()),t&2){let e=E();v(4),oe(e.browserInfo),v(5),oe(e.osInfo)}}var kC=class t{constructor(n,e,i,r){this.dialogRef=n;this.alertService=e;this.updateAppService=i;this.screenPhysicalSizeService=r;this.buildTimeInUtcText=tt.fromMillis(ge.buildTime,{zone:"utc"}).toFormat("yyyyLLdd'T'HHmmss'Z'"),this.deviceScreenInfo=r.getScreenInfo()}data;apiVersion;backendAppName;get screenSize(){return window.screen.availWidth+", "+window.screen.availHeight}get browserInfo(){return br.name+" "+br.version+"  "+br.layout}get osInfo(){return br.os?.toString()}get ua(){return br.ua}penname;authorName;bio;get viewPortSize(){let n=Math.max(document.documentElement.clientWidth,window.innerWidth||0),e=Math.max(document.documentElement.clientHeight,window.innerHeight||0);return n+", "+e}get version(){return ge.version}buildTimeInUtcText;get pixelRatio(){return Math.round(window.devicePixelRatio)}get siteName(){return ge.siteName}get aboutLabel(){return ge.siteName}get currentUrl(){return window.location.href}deviceScreenInfo;enableDeviceDetail=!1;bioSection;ngOnInit(){}ngAfterViewInit(){}checkUpdate(){this.updateAppService.checkUpdate(),this.dialogRef.close()}showDeviceDetail(){this.enableDeviceDetail=!0}static \u0275fac=function(e){return new(e||t)(T(En),T(fr),T(qo),T($l))};static \u0275cmp=O({type:t,selectors:[["about"]],viewQuery:function(e,i){if(e&1&&Te(A$,5),e&2){let r;Q(r=X())&&(i.bioSection=r.first)}},features:[Me([$l])],decls:62,vars:7,consts:()=>{let n;n=$localize`Version`;let e;e=$localize`Build`;let i;return i=$localize`Check for Updates`,[n,e,i,["mat-dialog-title","",1,"block-items-gap-1"],["mat-mini-fab","","color","any","matTooltip","Back","mat-dialog-close",""],[1,"dialog-full-content-height"],[1,"table"],[2,"width","10em"],["mat-raised-button","",3,"click"],[3,"click"]]},template:function(e,i){e&1&&(p(0,"h1",3)(1,"button",4)(2,"mat-icon"),M(3,"arrow_back_ios"),g()(),p(4,"span"),M(5),g()(),p(6,"mat-dialog-content",5),V(7,"p"),p(8,"table",6)(9,"colgroup"),V(10,"col",7)(11,"col"),g(),p(12,"tbody")(13,"tr")(14,"td"),st(15,0),g(),p(16,"td"),M(17),g()(),p(18,"tr")(19,"td"),st(20,1),g(),p(21,"td"),M(22),g()(),p(23,"tr"),V(24,"td")(25,"td"),g(),p(26,"tr"),V(27,"td")(28,"td"),g()()(),V(29,"p"),p(30,"div")(31,"button",8),H("click",function(){return i.checkUpdate()}),st(32,2),g()(),V(33,"p")(34,"p"),p(35,"h3",9),H("click",function(){return i.showDeviceDetail()}),M(36,"Device"),g(),p(37,"table",6)(38,"colgroup"),V(39,"col",7)(40,"col"),g(),p(41,"tbody")(42,"tr")(43,"td"),M(44,"Screen Resolution"),g(),p(45,"td"),M(46),g()(),p(47,"tr")(48,"td"),M(49,"Viewport Resolution"),g(),p(50,"td"),M(51),g()(),p(52,"tr")(53,"td"),M(54,"Pixel Ratio"),g(),p(55,"td"),M(56),g()(),G(57,N$,10,2),p(58,"tr"),V(59,"td")(60,"td"),g()()(),V(61,"p"),g()),e&2&&(v(5),oe(i.aboutLabel),v(12),oe(i.version),v(5),oe(i.buildTimeInUtcText),v(24),oe(i.screenSize),v(5),oe(i.viewPortSize),v(5),oe(i.pixelRatio),v(),q(i.enableDeviceDetail?57:-1))},dependencies:[zn,No,sr,lr,cr,Hn,ur,ai],encapsulation:2})},Wl=class t{constructor(n){this.dialog=n}get isSmallScreen(){return ge.isSmallScreen}open(){return this.dialog.open(kC,{disableClose:!0,autoFocus:!1,minWidth:this.isSmallScreen?"98dvw":"80dvw",minHeight:"80dvh",panelClass:"dialog-full-content-height"}).afterClosed()}static \u0275fac=function(e){return new(e||t)(A(jn))};static \u0275prov=w({token:t,factory:t.\u0275fac})};var F$=t=>({settings:t});function L$(t,n){t&1&&Bs(0)}function B$(t,n){if(t&1){let e=ft();p(0,"div",11)(1,"button",12)(2,"mat-icon"),M(3,"close"),g()(),p(4,"button",13)(5,"mat-icon"),M(6,"check"),g()(),p(7,"span"),st(8,1),g(),p(9,"button",14),H("click",function(){Ae(e);let r=E();return Ne(r.showAbout())}),p(10,"mat-icon"),M(11,"info"),g()()(),p(12,"mat-dialog-content"),vt(13,L$,1,0,"ng-container",15),g()}if(t&2){let e=E(),i=Jt(3);v(4),L("mat-dialog-close",wv(3,F$,e.getTestSettingsFormValue()))("disabled",!e.testSettingsForm.dirty),v(9),L("ngTemplateOutlet",i)}}function V$(t,n){t&1&&Bs(0)}function j$(t,n){if(t&1&&vt(0,V$,1,0,"ng-container",15),t&2){E();let e=Jt(3);L("ngTemplateOutlet",e)}}function U$(t,n){if(t&1){let e=ft();V(0,"p"),p(1,"button",25),H("click",function(){Ae(e);let r=E(3);return Ne(r.showSlider())}),p(2,"mat-icon"),M(3,"resize"),g(),p(4,"span"),st(5,10),g()()}}function H$(t,n){if(t&1&&(p(0,"mat-checkbox",24),st(1,9),g(),G(2,U$,6,0)),t&2){let e=E(2);v(2),q(e.testSettingsForm.controls.fixedSize.value?2:-1)}}function z$(t,n){if(t&1&&(V(0,"p"),p(1,"div")(2,"fieldset",16)(3,"legend"),st(4,2),g(),p(5,"div",17)(6,"mat-checkbox",18),st(7,3),g(),p(8,"mat-checkbox",19),st(9,4),g(),p(10,"mat-checkbox",20),st(11,5),g(),p(12,"mat-checkbox",21),st(13,6),g(),p(14,"mat-checkbox",22),st(15,7),g(),p(16,"mat-checkbox",23),st(17,8),g(),G(18,H$,3,1),g()()(),V(19,"p"),p(20,"div"),V(21,"theme-select"),g(),V(22,"p")),t&2){let e=E();v(2),L("formGroup",e.testSettingsForm),v(16),q(e.fixedSizeEnabled?18:-1)}}var OC=class t{constructor(n,e,i){this.testSettings=n;this.dialogRef=e;this.aboutDialogService=i;console.debug("ViewSettingsComponent created"),this.testSettingsForm=$$(n)}get isSmallScreen(){return ge.isSmallScreen}showTitle=!0;clonedSettings={};testSettingsForm;get fixedSizeEnabled(){return ge.fixedSizeEnabled}ngOnInit(){}showAbout(){this.aboutDialogService.open()}getTestSettingsFormValue(){return this.testSettingsForm.getRawValue()}showSlider(){this.dialogRef.close({settings:this.testSettingsForm.dirty?this.getTestSettingsFormValue():void 0,showResize:!0})}static \u0275fac=function(e){return new(e||t)(T(Wr),T(En),T(Wl))};static \u0275cmp=O({type:t,selectors:[["view-settings"]],inputs:{showTitle:"showTitle"},features:[Me([Wl])],decls:4,vars:1,consts:()=>{let n;n=$localize`About`;let e;e=$localize`Settings`;let i;i=$localize`Plates`;let r;r=$localize`Always use all plates`;let o;o=$localize`Always randomize plates`;let a;a=$localize`Always randomize buttons`;let s;s=$localize`Use physical keyboard to select answer`;let l;l=$localize`Show startup onboarding help`;let c;c=$localize`Show color vision test help before starting test`;let d;d=$localize`Fixed image size`;let m;return m=$localize`Set Image Size`,[["groups",""],e,i,r,o,a,s,l,c,d,m,["mat-dialog-title","",1,"block-items-gap-1"],["mat-mini-fab","","color","any","matTooltip","Cancel","mat-dialog-close",""],["mat-mini-fab","","color","any","matTooltip","Confirm",3,"mat-dialog-close","disabled"],["mat-mini-fab","","color","any","matTooltip",n,1,"float-right-margin-half",3,"click"],[4,"ngTemplateOutlet"],[1,"fx-80pc-width",3,"formGroup"],[1,"fx-layout-column"],["formControlName","alwaysUseAllPlates"],["formControlName","alwaysRandomizePlates"],["formControlName","alwaysRandomizeButtons"],["formControlName","useKeyboardToSelect"],["formControlName","showStartupHelp"],["formControlName","showTestHelp"],["formControlName","fixedSize"],["mat-raised-button","",3,"click"]]},template:function(e,i){e&1&&(G(0,B$,14,5)(1,j$,1,1,"ng-container"),vt(2,z$,23,2,"ng-template",null,0,js)),e&2&&q(i.showTitle?0:1)},dependencies:[_n,Kc,dr,Bo,c0,ri,qa,f0,Gp,Zo,ur,ai,gC,sr,lr,cr,zn,Kr],encapsulation:2,changeDetection:0})},Gl=class t{constructor(n){this.dialog=n}open(n){return this.dialog.open(OC,{disableClose:!0,autoFocus:!1,minWidth:"98dvw",minHeight:"98dvh",panelClass:"dialog-full-content-height",data:n}).afterClosed()}static \u0275fac=function(e){return new(e||t)(A(jn))};static \u0275prov=w({token:t,factory:t.\u0275fac})};function $$(t){return new fl({alwaysUseAllPlates:new Dn(t.alwaysUseAllPlates,{nonNullable:!0}),alwaysRandomizePlates:new Dn(t.alwaysRandomizePlates,{nonNullable:!0}),alwaysRandomizeButtons:new Dn(t.alwaysRandomizeButtons,{nonNullable:!0}),useKeyboardToSelect:new Dn(t.useKeyboardToSelect,{nonNullable:!0}),showStartupHelp:new Dn(t.showStartupHelp,{nonNullable:!0}),showTestHelp:new Dn(t.showTestHelp,{nonNullable:!0}),fixedSize:new Dn(t.fixedSize,{nonNullable:!0}),imageWH:new Dn(t.imageWH,{nonNullable:!0})})}var G$=["knob"],q$=["valueIndicatorContainer"];function Z$(t,n){if(t&1&&(p(0,"div",2,1)(2,"div",5)(3,"span",6),M(4),g()()()),t&2){let e=E();v(4),oe(e.valueIndicatorText)}}var Y$=["trackActive"],Q$=["*"];function X$(t,n){if(t&1&&V(0,"div"),t&2){let e=n.$implicit,i=n.$index,r=E(3);Dt(e===0?"mdc-slider__tick-mark--active":"mdc-slider__tick-mark--inactive"),er("transform",r._calcTickMarkTransform(i))}}function K$(t,n){if(t&1&&ln(0,X$,1,4,"div",8,qc),t&2){let e=E(2);cn(e._tickMarks)}}function J$(t,n){if(t&1&&(p(0,"div",6,1),G(2,K$,2,0),g()),t&2){let e=E();v(2),q(e._cachedWidth?2:-1)}}function e4(t,n){if(t&1&&V(0,"mat-slider-visual-thumb",7),t&2){let e=E();L("discrete",e.discrete)("thumbPosition",1)("valueIndicatorText",e.startValueIndicatorText)}}var be=(function(t){return t[t.START=1]="START",t[t.END=2]="END",t})(be||{}),ql=(function(t){return t[t.ACTIVE=0]="ACTIVE",t[t.INACTIVE=1]="INACTIVE",t})(ql||{}),RC=new C("_MatSlider"),wO=new C("_MatSliderThumb"),t4=new C("_MatSliderRangeThumb"),xO=new C("_MatSliderVisualThumb");var n4=(()=>{class t{_cdr=u(ve);_ngZone=u(B);_slider=u(RC);_renderer=u(xe);_listenerCleanups;discrete=!1;thumbPosition;valueIndicatorText;_ripple;_knob;_valueIndicatorContainer;_sliderInput;_sliderInputEl;_hoverRippleRef;_focusRippleRef;_activeRippleRef;_isHovered=!1;_isActive=!1;_isValueIndicatorVisible=!1;_hostElement=u(U).nativeElement;_platform=u(ke);constructor(){}ngAfterViewInit(){let e=this._slider._getInput(this.thumbPosition);e&&(this._ripple.radius=24,this._sliderInput=e,this._sliderInputEl=this._sliderInput._hostElement,this._ngZone.runOutsideAngular(()=>{let i=this._sliderInputEl,r=this._renderer;this._listenerCleanups=[r.listen(i,"pointermove",this._onPointerMove),r.listen(i,"pointerdown",this._onDragStart),r.listen(i,"pointerup",this._onDragEnd),r.listen(i,"pointerleave",this._onMouseLeave),r.listen(i,"focus",this._onFocus),r.listen(i,"blur",this._onBlur)]}))}ngOnDestroy(){this._listenerCleanups?.forEach(e=>e())}_onPointerMove=e=>{if(this._sliderInput._isFocused)return;let i=this._hostElement.getBoundingClientRect(),r=this._slider._isCursorOnSliderThumb(e,i);this._isHovered=r,r?this._showHoverRipple():this._hideRipple(this._hoverRippleRef)};_onMouseLeave=()=>{this._isHovered=!1,this._hideRipple(this._hoverRippleRef)};_onFocus=()=>{this._hideRipple(this._hoverRippleRef),this._showFocusRipple(),this._hostElement.classList.add("mdc-slider__thumb--focused")};_onBlur=()=>{this._isActive||this._hideRipple(this._focusRippleRef),this._isHovered&&this._showHoverRipple(),this._hostElement.classList.remove("mdc-slider__thumb--focused")};_onDragStart=e=>{e.button===0&&(this._isActive=!0,this._showActiveRipple())};_onDragEnd=()=>{this._isActive=!1,this._hideRipple(this._activeRippleRef),this._sliderInput._isFocused||this._hideRipple(this._focusRippleRef),this._platform.SAFARI&&this._showHoverRipple()};_showHoverRipple(){this._isShowingRipple(this._hoverRippleRef)||(this._hoverRippleRef=this._showRipple({enterDuration:0,exitDuration:0}),this._hoverRippleRef?.element.classList.add("mat-mdc-slider-hover-ripple"))}_showFocusRipple(){this._isShowingRipple(this._focusRippleRef)||(this._focusRippleRef=this._showRipple({enterDuration:0,exitDuration:0},!0),this._focusRippleRef?.element.classList.add("mat-mdc-slider-focus-ripple"))}_showActiveRipple(){this._isShowingRipple(this._activeRippleRef)||(this._activeRippleRef=this._showRipple({enterDuration:225,exitDuration:400}),this._activeRippleRef?.element.classList.add("mat-mdc-slider-active-ripple"))}_isShowingRipple(e){return e?.state===bn.FADING_IN||e?.state===bn.VISIBLE}_showRipple(e,i){if(!this._slider.disabled&&(this._showValueIndicator(),this._slider._isRange&&this._slider._getThumb(this.thumbPosition===be.START?be.END:be.START)._showValueIndicator(),!(this._slider._globalRippleOptions?.disabled&&!i)))return this._ripple.launch({animation:this._slider._noopAnimations?{enterDuration:0,exitDuration:0}:e,centered:!0,persistent:!0})}_hideRipple(e){if(e?.fadeOut(),this._isShowingAnyRipple())return;this._slider._isRange||this._hideValueIndicator();let i=this._getSibling();i._isShowingAnyRipple()||(this._hideValueIndicator(),i._hideValueIndicator())}_showValueIndicator(){this._hostElement.classList.add("mdc-slider__thumb--with-indicator")}_hideValueIndicator(){this._hostElement.classList.remove("mdc-slider__thumb--with-indicator")}_getSibling(){return this._slider._getThumb(this.thumbPosition===be.START?be.END:be.START)}_getValueIndicatorContainer(){return this._valueIndicatorContainer?.nativeElement}_getKnob(){return this._knob.nativeElement}_isShowingAnyRipple(){return this._isShowingRipple(this._hoverRippleRef)||this._isShowingRipple(this._focusRippleRef)||this._isShowingRipple(this._activeRippleRef)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=O({type:t,selectors:[["mat-slider-visual-thumb"]],viewQuery:function(i,r){if(i&1&&Te(Pi,5)(G$,5)(q$,5),i&2){let o;Q(o=X())&&(r._ripple=o.first),Q(o=X())&&(r._knob=o.first),Q(o=X())&&(r._valueIndicatorContainer=o.first)}},hostAttrs:[1,"mdc-slider__thumb","mat-mdc-slider-visual-thumb"],inputs:{discrete:"discrete",thumbPosition:"thumbPosition",valueIndicatorText:"valueIndicatorText"},features:[Me([{provide:xO,useExisting:t}])],decls:4,vars:2,consts:[["knob",""],["valueIndicatorContainer",""],[1,"mdc-slider__value-indicator-container"],[1,"mdc-slider__thumb-knob"],["matRipple","",1,"mat-focus-indicator",3,"matRippleDisabled"],[1,"mdc-slider__value-indicator"],[1,"mdc-slider__value-indicator-text"]],template:function(i,r){i&1&&(G(0,Z$,5,1,"div",2),V(1,"div",3,0)(3,"div",4)),i&2&&(q(r.discrete?0:-1),v(3),L("matRippleDisabled",!0))},dependencies:[Pi],styles:[`.mat-mdc-slider-visual-thumb .mat-ripple {
  height: 100%;
  width: 100%;
}

.mat-mdc-slider .mdc-slider__tick-marks {
  justify-content: start;
}
.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--active,
.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--inactive {
  position: absolute;
  left: 2px;
}
`],encapsulation:2,changeDetection:0})}return t})(),EO=(()=>{class t{_ngZone=u(B);_cdr=u(ve);_elementRef=u(U);_dir=u(Ct,{optional:!0});_globalRippleOptions=u(Yd,{optional:!0});_trackActive;_thumbs;_input;_inputs;get disabled(){return this._disabled}set disabled(e){this._disabled=e;let i=this._getInput(be.END),r=this._getInput(be.START);i&&(i.disabled=this._disabled),r&&(r.disabled=this._disabled)}_disabled=!1;get discrete(){return this._discrete}set discrete(e){this._discrete=e,this._updateValueIndicatorUIs()}_discrete=!1;get showTickMarks(){return this._showTickMarks}set showTickMarks(e){this._showTickMarks=e,this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI())}_showTickMarks=!1;get min(){return this._min}set min(e){let i=e==null||isNaN(e)?this._min:e;this._min!==i&&this._updateMin(i)}_min=0;color;disableRipple=!1;_updateMin(e){let i=this._min;this._min=e,this._isRange?this._updateMinRange({old:i,new:e}):this._updateMinNonRange(e),this._onMinMaxOrStepChange()}_updateMinRange(e){let i=this._getInput(be.END),r=this._getInput(be.START),o=i.value,a=r.value;r.min=e.new,i.min=Math.max(e.new,r.value),r.max=Math.min(i.max,i.value),r._updateWidthInactive(),i._updateWidthInactive(),e.new<e.old?this._onTranslateXChangeBySideEffect(i,r):this._onTranslateXChangeBySideEffect(r,i),o!==i.value&&this._onValueChange(i),a!==r.value&&this._onValueChange(r)}_updateMinNonRange(e){let i=this._getInput(be.END);if(i){let r=i.value;i.min=e,i._updateThumbUIByValue(),this._updateTrackUI(i),r!==i.value&&this._onValueChange(i)}}get max(){return this._max}set max(e){let i=e==null||isNaN(e)?this._max:e;this._max!==i&&this._updateMax(i)}_max=100;_updateMax(e){let i=this._max;this._max=e,this._isRange?this._updateMaxRange({old:i,new:e}):this._updateMaxNonRange(e),this._onMinMaxOrStepChange()}_updateMaxRange(e){let i=this._getInput(be.END),r=this._getInput(be.START),o=i.value,a=r.value;i.max=e.new,r.max=Math.min(e.new,i.value),i.min=r.value,i._updateWidthInactive(),r._updateWidthInactive(),e.new>e.old?this._onTranslateXChangeBySideEffect(r,i):this._onTranslateXChangeBySideEffect(i,r),o!==i.value&&this._onValueChange(i),a!==r.value&&this._onValueChange(r)}_updateMaxNonRange(e){let i=this._getInput(be.END);if(i){let r=i.value;i.max=e,i._updateThumbUIByValue(),this._updateTrackUI(i),r!==i.value&&this._onValueChange(i)}}get step(){return this._step}set step(e){let i=isNaN(e)?this._step:e;this._step!==i&&this._updateStep(i)}_step=1;_updateStep(e){this._step=e,this._isRange?this._updateStepRange():this._updateStepNonRange(),this._onMinMaxOrStepChange()}_updateStepRange(){let e=this._getInput(be.END),i=this._getInput(be.START),r=e.value,o=i.value,a=i.value;e.min=this._min,i.max=this._max,e.step=this._step,i.step=this._step,this._platform.SAFARI&&(e.value=e.value,i.value=i.value),e.min=Math.max(this._min,i.value),i.max=Math.min(this._max,e.value),i._updateWidthInactive(),e._updateWidthInactive(),e.value<a?this._onTranslateXChangeBySideEffect(i,e):this._onTranslateXChangeBySideEffect(e,i),r!==e.value&&this._onValueChange(e),o!==i.value&&this._onValueChange(i)}_updateStepNonRange(){let e=this._getInput(be.END);if(e){let i=e.value;e.step=this._step,this._platform.SAFARI&&(e.value=e.value),e._updateThumbUIByValue(),i!==e.value&&this._onValueChange(e)}}displayWith=e=>`${e}`;_tickMarks;_noopAnimations=$e();_resizeObserver=null;_cachedWidth;_cachedLeft;_rippleRadius=24;startValueIndicatorText="";endValueIndicatorText="";_endThumbTransform;_startThumbTransform;_isRange=!1;_isRtl=un(()=>this._dir?.valueSignal()==="rtl");_hasViewInitialized=!1;_tickMarkTrackWidth=0;_hasAnimation=!1;_resizeTimer=null;_platform=u(ke);constructor(){u(lt).load(oi);let e=this._isRtl();Oh(()=>{let i=this._isRtl();i!==e&&(e=i,this._isRange?this._onDirChangeRange():this._onDirChangeNonRange(),this._updateTickMarkUI())})}_knobRadius=8;_inputPadding;ngAfterViewInit(){this._platform.isBrowser&&this._updateDimensions();let e=this._getInput(be.END),i=this._getInput(be.START);this._isRange=!!e&&!!i,this._cdr.detectChanges();let r=this._getThumb(be.END);this._rippleRadius=r._ripple.radius,this._inputPadding=this._rippleRadius-this._knobRadius,this._isRange?this._initUIRange(e,i):this._initUINonRange(e),this._updateTrackUI(e),this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._observeHostResize(),this._cdr.detectChanges()}_initUINonRange(e){e.initProps(),e.initUI(),this._updateValueIndicatorUI(e),this._hasViewInitialized=!0,e._updateThumbUIByValue()}_initUIRange(e,i){e.initProps(),e.initUI(),i.initProps(),i.initUI(),e._updateMinMax(),i._updateMinMax(),e._updateStaticStyles(),i._updateStaticStyles(),this._updateValueIndicatorUIs(),this._hasViewInitialized=!0,e._updateThumbUIByValue(),i._updateThumbUIByValue()}ngOnDestroy(){this._resizeObserver?.disconnect(),this._resizeObserver=null}_onDirChangeRange(){let e=this._getInput(be.END),i=this._getInput(be.START);e._setIsLeftThumb(),i._setIsLeftThumb(),e.translateX=e._calcTranslateXByValue(),i.translateX=i._calcTranslateXByValue(),e._updateStaticStyles(),i._updateStaticStyles(),e._updateWidthInactive(),i._updateWidthInactive(),e._updateThumbUIByValue(),i._updateThumbUIByValue()}_onDirChangeNonRange(){this._getInput(be.END)._updateThumbUIByValue()}_observeHostResize(){typeof ResizeObserver>"u"||!ResizeObserver||this._ngZone.runOutsideAngular(()=>{this._resizeObserver=new ResizeObserver(()=>{this._isActive()||(this._resizeTimer&&clearTimeout(this._resizeTimer),this._onResize())}),this._resizeObserver.observe(this._elementRef.nativeElement)})}_isActive(){return this._getThumb(be.START)._isActive||this._getThumb(be.END)._isActive}_getValue(e=be.END){let i=this._getInput(e);return i?i.value:this.min}_skipUpdate(){return!!(this._getInput(be.START)?._skipUIUpdate||this._getInput(be.END)?._skipUIUpdate)}_updateDimensions(){this._cachedWidth=this._elementRef.nativeElement.offsetWidth,this._cachedLeft=this._elementRef.nativeElement.getBoundingClientRect().left}_setTrackActiveStyles(e){let i=this._trackActive.nativeElement.style;i.left=e.left,i.right=e.right,i.transformOrigin=e.transformOrigin,i.transform=e.transform}_calcTickMarkTransform(e){let i=e*(this._tickMarkTrackWidth/(this._tickMarks.length-1));return`translateX(${this._isRtl()?this._cachedWidth-6-i:i}px)`}_onTranslateXChange(e){this._hasViewInitialized&&(this._updateThumbUI(e),this._updateTrackUI(e),this._updateOverlappingThumbUI(e))}_onTranslateXChangeBySideEffect(e,i){this._hasViewInitialized&&(e._updateThumbUIByValue(),i._updateThumbUIByValue())}_onValueChange(e){this._hasViewInitialized&&(this._updateValueIndicatorUI(e),this._updateTickMarkUI(),this._cdr.detectChanges())}_onMinMaxOrStepChange(){this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.markForCheck())}_onResize(){if(this._hasViewInitialized){if(this._updateDimensions(),this._isRange){let e=this._getInput(be.END),i=this._getInput(be.START);e._updateThumbUIByValue(),i._updateThumbUIByValue(),e._updateStaticStyles(),i._updateStaticStyles(),e._updateMinMax(),i._updateMinMax(),e._updateWidthInactive(),i._updateWidthInactive()}else{let e=this._getInput(be.END);e&&e._updateThumbUIByValue()}this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.detectChanges()}}_thumbsOverlap=!1;_areThumbsOverlapping(){let e=this._getInput(be.START),i=this._getInput(be.END);return!e||!i?!1:i.translateX-e.translateX<20}_updateOverlappingThumbClassNames(e){let i=e.getSibling(),r=this._getThumb(e.thumbPosition);this._getThumb(i.thumbPosition)._hostElement.classList.remove("mdc-slider__thumb--top"),r._hostElement.classList.toggle("mdc-slider__thumb--top",this._thumbsOverlap)}_updateOverlappingThumbUI(e){!this._isRange||this._skipUpdate()||this._thumbsOverlap!==this._areThumbsOverlapping()&&(this._thumbsOverlap=!this._thumbsOverlap,this._updateOverlappingThumbClassNames(e))}_updateThumbUI(e){if(this._skipUpdate())return;let i=this._getThumb(e.thumbPosition===be.END?be.END:be.START);i._hostElement.style.transform=`translateX(${e.translateX}px)`}_updateValueIndicatorUI(e){if(this._skipUpdate())return;let i=this.displayWith(e.value);if(this._hasViewInitialized?e._valuetext.set(i):e._hostElement.setAttribute("aria-valuetext",i),this.discrete){e.thumbPosition===be.START?this.startValueIndicatorText=i:this.endValueIndicatorText=i;let r=this._getThumb(e.thumbPosition);i.length<3?r._hostElement.classList.add("mdc-slider__thumb--short-value"):r._hostElement.classList.remove("mdc-slider__thumb--short-value")}}_updateValueIndicatorUIs(){let e=this._getInput(be.END),i=this._getInput(be.START);e&&this._updateValueIndicatorUI(e),i&&this._updateValueIndicatorUI(i)}_updateTickMarkTrackUI(){if(!this.showTickMarks||this._skipUpdate())return;let e=this._step&&this._step>0?this._step:1,r=(Math.floor(this.max/e)*e-this.min)/(this.max-this.min);this._tickMarkTrackWidth=(this._cachedWidth-6)*r}_updateTrackUI(e){this._skipUpdate()||(this._isRange?this._updateTrackUIRange(e):this._updateTrackUINonRange(e))}_updateTrackUIRange(e){let i=e.getSibling();if(!i||!this._cachedWidth)return;let r=Math.abs(i.translateX-e.translateX)/this._cachedWidth;e._isLeftThumb&&this._cachedWidth?this._setTrackActiveStyles({left:"auto",right:`${this._cachedWidth-i.translateX}px`,transformOrigin:"right",transform:`scaleX(${r})`}):this._setTrackActiveStyles({left:`${i.translateX}px`,right:"auto",transformOrigin:"left",transform:`scaleX(${r})`})}_updateTrackUINonRange(e){this._isRtl()?this._setTrackActiveStyles({left:"auto",right:"0px",transformOrigin:"right",transform:`scaleX(${1-e.fillPercentage})`}):this._setTrackActiveStyles({left:"0px",right:"auto",transformOrigin:"left",transform:`scaleX(${e.fillPercentage})`})}_updateTickMarkUI(){if(!this.showTickMarks||this.step===void 0||this.min===void 0||this.max===void 0)return;let e=this.step>0?this.step:1;this._isRange?this._updateTickMarkUIRange(e):this._updateTickMarkUINonRange(e)}_updateTickMarkUINonRange(e){let i=this._getValue(),r=Math.max(Math.round((i-this.min)/e),0)+1,o=Math.max(Math.round((this.max-i)/e),0)-1;this._isRtl()?r++:o++,this._tickMarks=Array(r).fill(ql.ACTIVE).concat(Array(o).fill(ql.INACTIVE))}_updateTickMarkUIRange(e){let i=this._getValue(),r=this._getValue(be.START),o=Math.max(Math.round((r-this.min)/e),0),a=Math.max(Math.round((i-r)/e)+1,0),s=Math.max(Math.round((this.max-i)/e),0);this._tickMarks=Array(o).fill(ql.INACTIVE).concat(Array(a).fill(ql.ACTIVE),Array(s).fill(ql.INACTIVE))}_getInput(e){if(e===be.END&&this._input)return this._input;if(this._inputs?.length)return e===be.START?this._inputs.first:this._inputs.last}_getThumb(e){return e===be.END?this._thumbs?.last:this._thumbs?.first}_setTransition(e){this._hasAnimation=!this._platform.IOS&&e&&!this._noopAnimations,this._elementRef.nativeElement.classList.toggle("mat-mdc-slider-with-animation",this._hasAnimation)}_isCursorOnSliderThumb(e,i){let r=i.width/2,o=i.x+r,a=i.y+r,s=e.clientX-o,l=e.clientY-a;return Math.pow(s,2)+Math.pow(l,2)<Math.pow(r,2)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=O({type:t,selectors:[["mat-slider"]],contentQueries:function(i,r,o){if(i&1&&Kt(o,wO,5)(o,t4,4),i&2){let a;Q(a=X())&&(r._input=a.first),Q(a=X())&&(r._inputs=a)}},viewQuery:function(i,r){if(i&1&&Te(Y$,5)(xO,5),i&2){let o;Q(o=X())&&(r._trackActive=o.first),Q(o=X())&&(r._thumbs=o)}},hostAttrs:[1,"mat-mdc-slider","mdc-slider"],hostVars:12,hostBindings:function(i,r){i&2&&(Dt("mat-"+(r.color||"primary")),ee("mdc-slider--range",r._isRange)("mdc-slider--disabled",r.disabled)("mdc-slider--discrete",r.discrete)("mdc-slider--tick-marks",r.showTickMarks)("_mat-animation-noopable",r._noopAnimations))},inputs:{disabled:[2,"disabled","disabled",Z],discrete:[2,"discrete","discrete",Z],showTickMarks:[2,"showTickMarks","showTickMarks",Z],min:[2,"min","min",dt],color:"color",disableRipple:[2,"disableRipple","disableRipple",Z],max:[2,"max","max",dt],step:[2,"step","step",dt],displayWith:"displayWith"},exportAs:["matSlider"],features:[Me([{provide:RC,useExisting:t}])],ngContentSelectors:Q$,decls:9,vars:5,consts:[["trackActive",""],["tickMarkContainer",""],[1,"mdc-slider__track"],[1,"mdc-slider__track--inactive"],[1,"mdc-slider__track--active"],[1,"mdc-slider__track--active_fill"],[1,"mdc-slider__tick-marks"],[3,"discrete","thumbPosition","valueIndicatorText"],[3,"class","transform"]],template:function(i,r){i&1&&(Be(),ue(0),p(1,"div",2),V(2,"div",3),p(3,"div",4),V(4,"div",5,0),g(),G(6,J$,3,1,"div",6),g(),G(7,e4,1,3,"mat-slider-visual-thumb",7),V(8,"mat-slider-visual-thumb",7)),i&2&&(v(6),q(r.showTickMarks?6:-1),v(),q(r._isRange?7:-1),v(),L("discrete",r.discrete)("thumbPosition",2)("valueIndicatorText",r.endValueIndicatorText))},dependencies:[n4],styles:[`.mdc-slider__track {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  pointer-events: none;
  height: var(--mat-slider-inactive-track-height, 4px);
}

.mdc-slider__track--active,
.mdc-slider__track--inactive {
  display: flex;
  height: 100%;
  position: absolute;
  width: 100%;
}

.mdc-slider__track--active {
  overflow: hidden;
  border-radius: var(--mat-slider-active-track-shape, var(--mat-sys-corner-full));
  height: var(--mat-slider-active-track-height, 4px);
  top: calc((var(--mat-slider-inactive-track-height, 4px) - var(--mat-slider-active-track-height, 4px)) / 2);
}

.mdc-slider__track--active_fill {
  border-top-style: solid;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  position: relative;
  transform-origin: left;
  transition: transform 80ms ease;
  border-color: var(--mat-slider-active-track-color, var(--mat-sys-primary));
  border-top-width: var(--mat-slider-active-track-height, 4px);
}
.mdc-slider--disabled .mdc-slider__track--active_fill {
  border-color: var(--mat-slider-disabled-active-track-color, var(--mat-sys-on-surface));
}
[dir=rtl] .mdc-slider__track--active_fill {
  -webkit-transform-origin: right;
  transform-origin: right;
}

.mdc-slider__track--inactive {
  left: 0;
  top: 0;
  opacity: 0.24;
  background-color: var(--mat-slider-inactive-track-color, var(--mat-sys-surface-variant));
  height: var(--mat-slider-inactive-track-height, 4px);
  border-radius: var(--mat-slider-inactive-track-shape, var(--mat-sys-corner-full));
}
.mdc-slider--disabled .mdc-slider__track--inactive {
  background-color: var(--mat-slider-disabled-inactive-track-color, var(--mat-sys-on-surface));
  opacity: 0.24;
}
.mdc-slider__track--inactive::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-slider__track--inactive::before {
    border-color: CanvasText;
  }
}

.mdc-slider__value-indicator-container {
  bottom: 44px;
  left: 50%;
  pointer-events: none;
  position: absolute;
  transform: var(--mat-slider-value-indicator-container-transform, translateX(-50%) rotate(-45deg));
}
.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator-container {
  pointer-events: auto;
}

.mdc-slider__value-indicator {
  display: flex;
  align-items: center;
  transform: scale(0);
  transform-origin: var(--mat-slider-value-indicator-transform-origin, 0 28px);
  transition: transform 100ms cubic-bezier(0.4, 0, 1, 1);
  word-break: normal;
  background-color: var(--mat-slider-label-container-color, var(--mat-sys-primary));
  color: var(--mat-slider-label-label-text-color, var(--mat-sys-on-primary));
  width: var(--mat-slider-value-indicator-width, 28px);
  height: var(--mat-slider-value-indicator-height, 28px);
  padding: var(--mat-slider-value-indicator-padding, 0);
  opacity: var(--mat-slider-value-indicator-opacity, 1);
  border-radius: var(--mat-slider-value-indicator-border-radius, 50% 50% 50% 0);
}
.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator {
  transition: transform 100ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale(1);
}
.mdc-slider__value-indicator::before {
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid;
  bottom: -5px;
  content: "";
  height: 0;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  width: 0;
  display: var(--mat-slider-value-indicator-caret-display, none);
  border-top-color: var(--mat-slider-label-container-color, var(--mat-sys-primary));
}
.mdc-slider__value-indicator::after {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-slider__value-indicator::after {
    border-color: CanvasText;
  }
}

.mdc-slider__value-indicator-text {
  text-align: center;
  width: var(--mat-slider-value-indicator-width, 28px);
  transform: var(--mat-slider-value-indicator-text-transform, rotate(45deg));
  font-family: var(--mat-slider-label-label-text-font, var(--mat-sys-label-medium-font));
  font-size: var(--mat-slider-label-label-text-size, var(--mat-sys-label-medium-size));
  font-weight: var(--mat-slider-label-label-text-weight, var(--mat-sys-label-medium-weight));
  line-height: var(--mat-slider-label-label-text-line-height, var(--mat-sys-label-medium-line-height));
  letter-spacing: var(--mat-slider-label-label-text-tracking, var(--mat-sys-label-medium-tracking));
}

.mdc-slider__thumb {
  -webkit-user-select: none;
  user-select: none;
  display: flex;
  left: -24px;
  outline: none;
  position: absolute;
  height: 48px;
  width: 48px;
  pointer-events: none;
}
.mdc-slider--discrete .mdc-slider__thumb {
  transition: transform 80ms ease;
}
.mdc-slider--disabled .mdc-slider__thumb {
  pointer-events: none;
}

.mdc-slider__thumb--top {
  z-index: 1;
}

.mdc-slider__thumb-knob {
  position: absolute;
  box-sizing: border-box;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-style: solid;
  width: var(--mat-slider-handle-width, 20px);
  height: var(--mat-slider-handle-height, 20px);
  border-width: calc(var(--mat-slider-handle-height, 20px) / 2) calc(var(--mat-slider-handle-width, 20px) / 2);
  box-shadow: var(--mat-slider-handle-elevation, var(--mat-sys-level1));
  background-color: var(--mat-slider-handle-color, var(--mat-sys-primary));
  border-color: var(--mat-slider-handle-color, var(--mat-sys-primary));
  border-radius: var(--mat-slider-handle-shape, var(--mat-sys-corner-full));
}
.mdc-slider__thumb:hover .mdc-slider__thumb-knob {
  background-color: var(--mat-slider-hover-handle-color, var(--mat-sys-primary));
  border-color: var(--mat-slider-hover-handle-color, var(--mat-sys-primary));
}
.mdc-slider__thumb--focused .mdc-slider__thumb-knob {
  background-color: var(--mat-slider-focus-handle-color, var(--mat-sys-primary));
  border-color: var(--mat-slider-focus-handle-color, var(--mat-sys-primary));
}
.mdc-slider--disabled .mdc-slider__thumb-knob {
  background-color: var(--mat-slider-disabled-handle-color, var(--mat-sys-on-surface));
  border-color: var(--mat-slider-disabled-handle-color, var(--mat-sys-on-surface));
}
.mdc-slider__thumb--top .mdc-slider__thumb-knob, .mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob, .mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob {
  border: solid 1px #fff;
  box-sizing: content-box;
  border-color: var(--mat-slider-with-overlap-handle-outline-color, var(--mat-sys-on-primary));
  border-width: var(--mat-slider-with-overlap-handle-outline-width, 1px);
}

.mdc-slider__tick-marks {
  align-items: center;
  box-sizing: border-box;
  display: flex;
  height: 100%;
  justify-content: space-between;
  padding: 0 1px;
  position: absolute;
  width: 100%;
}

.mdc-slider__tick-mark--active,
.mdc-slider__tick-mark--inactive {
  width: var(--mat-slider-with-tick-marks-container-size, 2px);
  height: var(--mat-slider-with-tick-marks-container-size, 2px);
  border-radius: var(--mat-slider-with-tick-marks-container-shape, var(--mat-sys-corner-full));
}

.mdc-slider__tick-mark--inactive {
  opacity: var(--mat-slider-with-tick-marks-inactive-container-opacity, 0.38);
  background-color: var(--mat-slider-with-tick-marks-inactive-container-color, var(--mat-sys-on-surface-variant));
}
.mdc-slider--disabled .mdc-slider__tick-mark--inactive {
  opacity: var(--mat-slider-with-tick-marks-inactive-container-opacity, 0.38);
  background-color: var(--mat-slider-with-tick-marks-disabled-container-color, var(--mat-sys-on-surface));
}

.mdc-slider__tick-mark--active {
  opacity: var(--mat-slider-with-tick-marks-active-container-opacity, 0.38);
  background-color: var(--mat-slider-with-tick-marks-active-container-color, var(--mat-sys-on-primary));
}

.mdc-slider__input {
  cursor: pointer;
  left: 2px;
  margin: 0;
  height: 44px;
  opacity: 0;
  position: absolute;
  top: 2px;
  width: 44px;
  box-sizing: content-box;
}
.mdc-slider__input.mat-mdc-slider-input-no-pointer-events {
  pointer-events: none;
}
.mdc-slider__input.mat-slider__right-input {
  left: auto;
  right: 0;
}

.mat-mdc-slider {
  display: inline-block;
  box-sizing: border-box;
  outline: none;
  vertical-align: middle;
  cursor: pointer;
  height: 48px;
  margin: 0 8px;
  position: relative;
  touch-action: pan-y;
  width: auto;
  min-width: 112px;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-slider.mdc-slider--disabled {
  cursor: auto;
  opacity: 0.38;
}
.mat-mdc-slider.mdc-slider--disabled .mdc-slider__input {
  cursor: auto;
}
.mat-mdc-slider .mdc-slider__thumb,
.mat-mdc-slider .mdc-slider__track--active_fill {
  transition-duration: 0ms;
}
.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,
.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill {
  transition-duration: 80ms;
}
.mat-mdc-slider.mdc-slider--discrete .mdc-slider__thumb,
.mat-mdc-slider.mdc-slider--discrete .mdc-slider__track--active_fill {
  transition-duration: 0ms;
}
.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,
.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill {
  transition-duration: 80ms;
}
.mat-mdc-slider .mat-ripple .mat-ripple-element {
  background-color: var(--mat-slider-ripple-color, var(--mat-sys-primary));
}
.mat-mdc-slider .mat-ripple .mat-mdc-slider-hover-ripple {
  background-color: var(--mat-slider-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-primary) 5%, transparent));
}
.mat-mdc-slider .mat-ripple .mat-mdc-slider-focus-ripple,
.mat-mdc-slider .mat-ripple .mat-mdc-slider-active-ripple {
  background-color: var(--mat-slider-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-primary) 20%, transparent));
}
.mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__thumb, .mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__track--active_fill,
.mat-mdc-slider._mat-animation-noopable .mdc-slider__value-indicator {
  transition: none;
}
.mat-mdc-slider .mat-focus-indicator::before {
  border-radius: 50%;
}

.mdc-slider__thumb--focused .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return t})();var i4={provide:Fo,useExisting:St(()=>AC),multi:!0};var AC=(()=>{class t{_ngZone=u(B);_elementRef=u(U);_cdr=u(ve);_slider=u(RC);_platform=u(ke);_listenerCleanups;get value(){return dt(this._hostElement.value,0)}set value(e){e===null&&(e=this._getDefaultValue()),e=isNaN(e)?0:e;let i=e+"";if(!this._hasSetInitialValue){this._initialValue=i;return}this._isActive||this._setValue(i)}_setValue(e){this._hostElement.value=e,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges(),this._slider._cdr.markForCheck()}valueChange=new K;dragStart=new K;dragEnd=new K;get translateX(){return this._slider.min>=this._slider.max?(this._translateX=this._tickMarkOffset,this._translateX):(this._translateX===void 0&&(this._translateX=this._calcTranslateXByValue()),this._translateX)}set translateX(e){this._translateX=e}_translateX;thumbPosition=be.END;get min(){return dt(this._hostElement.min,0)}set min(e){this._hostElement.min=e+"",this._cdr.detectChanges()}get max(){return dt(this._hostElement.max,0)}set max(e){this._hostElement.max=e+"",this._cdr.detectChanges()}get step(){return dt(this._hostElement.step,0)}set step(e){this._hostElement.step=e+"",this._cdr.detectChanges()}get disabled(){return Z(this._hostElement.disabled)}set disabled(e){this._hostElement.disabled=e,this._cdr.detectChanges(),this._slider.disabled!==this.disabled&&(this._slider.disabled=this.disabled)}get percentage(){return this._slider.min>=this._slider.max?this._slider._isRtl()?1:0:(this.value-this._slider.min)/(this._slider.max-this._slider.min)}get fillPercentage(){return this._slider._cachedWidth?this._translateX===0?0:this.translateX/this._slider._cachedWidth:this._slider._isRtl()?1:0}_hostElement=this._elementRef.nativeElement;_valuetext=Fe("");_knobRadius=8;_tickMarkOffset=3;_isActive=!1;_isFocused=!1;_setIsFocused(e){this._isFocused=e}_hasSetInitialValue=!1;_initialValue;_formControl;_destroyed=new I;_skipUIUpdate=!1;_onChangeFn;_onTouchedFn=()=>{};_isControlInitialized=!1;constructor(){let e=u(xe);this._ngZone.runOutsideAngular(()=>{this._listenerCleanups=[e.listen(this._hostElement,"pointerdown",this._onPointerDown.bind(this)),e.listen(this._hostElement,"pointermove",this._onPointerMove.bind(this)),e.listen(this._hostElement,"pointerup",this._onPointerUp.bind(this))]})}ngOnDestroy(){this._listenerCleanups.forEach(e=>e()),this._destroyed.next(),this._destroyed.complete(),this.dragStart.complete(),this.dragEnd.complete()}initProps(){this._updateWidthInactive(),this.disabled!==this._slider.disabled&&(this._slider.disabled=!0),this.step=this._slider.step,this.min=this._slider.min,this.max=this._slider.max,this._initValue()}initUI(){this._updateThumbUIByValue()}_initValue(){this._hasSetInitialValue=!0,this._initialValue===void 0?this.value=this._getDefaultValue():(this._hostElement.value=this._initialValue,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges())}_getDefaultValue(){return this.min}_onBlur(){this._setIsFocused(!1),this._onTouchedFn()}_onFocus(){this._slider._setTransition(!1),this._slider._updateTrackUI(this),this._setIsFocused(!0)}_onChange(){this.valueChange.emit(this.value),this._isActive&&this._updateThumbUIByValue({withAnimation:!0})}_onInput(){this._onChangeFn?.(this.value),(this._slider.step||!this._isActive)&&this._updateThumbUIByValue({withAnimation:!0}),this._slider._onValueChange(this)}_onNgControlValueChange(){(!this._isActive||!this._isFocused)&&(this._slider._onValueChange(this),this._updateThumbUIByValue()),this._slider.disabled=this._formControl.disabled}_onPointerDown(e){if(!(this.disabled||e.button!==0)){if(this._platform.IOS){let i=this._slider._isCursorOnSliderThumb(e,this._slider._getThumb(this.thumbPosition)._hostElement.getBoundingClientRect());this._isActive=i,this._updateWidthActive(),this._slider._updateDimensions();return}this._isActive=!0,this._setIsFocused(!0),this._updateWidthActive(),this._slider._updateDimensions(),this._slider.step||this._updateThumbUIByPointerEvent(e,{withAnimation:!0}),this.disabled||(this._handleValueCorrection(e),this.dragStart.emit({source:this,parent:this._slider,value:this.value}))}}_handleValueCorrection(e){this._skipUIUpdate=!0,setTimeout(()=>{this._skipUIUpdate=!1,this._fixValue(e)},0)}_fixValue(e){let i=e.clientX-this._slider._cachedLeft,r=this._slider._cachedWidth,o=this._slider.step===0?1:this._slider.step,a=Math.floor((this._slider.max-this._slider.min)/o),s=this._slider._isRtl()?1-i/r:i/r,c=Math.round(s*a)/a*(this._slider.max-this._slider.min)+this._slider.min,d=Math.round(c/o)*o,m=this.value;if(d===m){this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(e,{withAnimation:this._slider._hasAnimation});return}this.value=d,this.valueChange.emit(this.value),this._onChangeFn?.(this.value),this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(e,{withAnimation:this._slider._hasAnimation})}_onPointerMove(e){!this._slider.step&&this._isActive&&this._updateThumbUIByPointerEvent(e)}_onPointerUp(){this._isActive&&(this._isActive=!1,this._platform.SAFARI&&this._setIsFocused(!1),this.dragEnd.emit({source:this,parent:this._slider,value:this.value}),setTimeout(()=>this._updateWidthInactive(),this._platform.IOS?10:0))}_clamp(e){let i=this._tickMarkOffset,r=this._slider._cachedWidth-this._tickMarkOffset;return Math.max(Math.min(e,r),i)}_calcTranslateXByValue(){return this._slider._isRtl()?(1-this.percentage)*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset:this.percentage*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset}_calcTranslateXByPointerEvent(e){return e.clientX-this._slider._cachedLeft}_updateWidthActive(){}_updateWidthInactive(){this._hostElement.style.padding=`0 ${this._slider._inputPadding}px`,this._hostElement.style.width=`calc(100% + ${this._slider._inputPadding-this._tickMarkOffset*2}px)`,this._hostElement.style.left=`-${this._slider._rippleRadius-this._tickMarkOffset}px`}_updateThumbUIByValue(e){this.translateX=this._clamp(this._calcTranslateXByValue()),this._updateThumbUI(e)}_updateThumbUIByPointerEvent(e,i){this.translateX=this._clamp(this._calcTranslateXByPointerEvent(e)),this._updateThumbUI(i)}_updateThumbUI(e){this._slider._setTransition(!!e?.withAnimation),this._slider._onTranslateXChange(this)}writeValue(e){(this._isControlInitialized||e!==null)&&(this.value=e)}registerOnChange(e){this._onChangeFn=e,this._isControlInitialized=!0}registerOnTouched(e){this._onTouchedFn=e}setDisabledState(e){this.disabled=e}focus(){this._hostElement.focus()}blur(){this._hostElement.blur()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=W({type:t,selectors:[["input","matSliderThumb",""]],hostAttrs:["type","range",1,"mdc-slider__input"],hostVars:1,hostBindings:function(i,r){i&1&&H("change",function(){return r._onChange()})("input",function(){return r._onInput()})("blur",function(){return r._onBlur()})("focus",function(){return r._onFocus()}),i&2&&fe("aria-valuetext",r._valuetext())},inputs:{value:[2,"value","value",dt]},outputs:{valueChange:"valueChange",dragStart:"dragStart",dragEnd:"dragEnd"},exportAs:["matSliderThumb"],features:[Me([i4,{provide:wO,useExisting:t}])]})}return t})();var DO=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=P({imports:[Mn,me]})}return t})();var o4=["mainCard"],a4=(t,n)=>n.dir;function s4(t,n){if(t&1){let e=ft();p(0,"button",14),H("click",function(){let r=Ae(e).$implicit,o=E();return Ne(o.handleTestContentClick(r))}),p(1,"mat-icon"),M(2),g(),p(3,"span"),M(4),g()()}if(t&2){let e=n.$implicit,i=E();L("matTooltip",Sh(e.test.description)),v(2),oe((i.currentTestContent==null?null:i.currentTestContent.dir)===e.dir?"radio_button_checked":"radio_button_unchecked"),v(2),oe(e.test.title)}}function l4(t,n){if(t&1){let e=ft();p(0,"div",15)(1,"mat-icon"),M(2,"resize"),g(),M(3," \xA0\xA0 "),p(4,"mat-slider",16)(5,"input",17),Ma("ngModelChange",function(r){Ae(e);let o=E();return Vs(o.imageWH,r)||(o.imageWH=r),Ne(r)}),H("dragEnd",function(r){Ae(e);let o=E();return Ne(o.handleDragEnd(r))}),g()(),M(6," \xA0\xA0 "),p(7,"button",9),H("click",function(){Ae(e);let r=E();return Ne(r.closeSlider())}),p(8,"mat-icon"),M(9,"close"),g()(),M(10," \xA0\xA0 "),g()}if(t&2){let e=E();v(4),L("max",e.imageSizeMax),v(),Da("ngModel",e.imageWH)}}function c4(t,n){if(t&1&&V(0,"plate-card",13,2),t&2){let e=E();L("testContent",e.currentTestContent)}}var qp=class t{constructor(n,e,i,r,o,a){this.httpClient=n;this.ref=e;this.alertService=i;this.settingsService=r;this.htmlHRefDialogService=o;this.sliderSubjectService=a}title;baseUrl;get isSmallScreen(){return ge.isSmallScreen}allTests;plateCard;get helpUri(){return ge.helpUri}isSliderOpen=!1;get imageWH(){return ge.testSettings.imageWH}set imageWH(n){ge.testSettings.imageWH=n}currentTestContent={dir:"",test:{title:"InitialEmpty"}};get imageSizeMax(){return ge.imageSizeMax}ngOnInit(){ge.deviceDpi=yO(),ge.imageSizeMax=window.screen.availWidth*.9,ge.fixedSizeEnabled=this.imageSizeMax>500,this.reloadAll(),ge.testSettings.showStartupHelp&&this.showStartupHelp()}reloadAll(){this.httpClient.get("SVG_Plates/index.json").subscribe({next:n=>{this.allTests=n,console.debug(`All tests: ${this.allTests.testContents?.length}`),this.allTests.testContents?.sort((e,i)=>e.test.title.localeCompare(i.test.title)),this.allTests.testContents?.length?(this.currentTestContent=this.allTests.testContents[0],this.ref.detectChanges()):this.alertService.error("No test content found.")},error:n=>{this.alertService.error(n)}})}handleTestContentClick(n){this.currentTestContent=n,this.ref.detectChanges()}showSettings(){this.settingsService.open(ge.testSettings).subscribe(n=>{if(n){let e=n.settings;if(e){this.alertService.success("Settings applied",!0);let i=ge.testSettings.alwaysRandomizePlates!=e.alwaysRandomizePlates&&ge.testSettings.alwaysRandomizePlates;ge.testSettings.alwaysRandomizeButtons=e.alwaysRandomizeButtons,ge.testSettings.alwaysRandomizePlates=e.alwaysRandomizePlates,ge.testSettings.alwaysUseAllPlates=e.alwaysUseAllPlates,ge.testSettings.showStartupHelp=e.showStartupHelp,ge.testSettings.showTestHelp=e.showTestHelp,ge.testSettings.fixedSize=e.fixedSize,ge.testSettings.imageWH=e.imageWH,ge.testSettings.useKeyboardToSelect=e.useKeyboardToSelect,i?(this.reloadAll(),this.alertService.info("All reloaded.",!0)):(this.plateCard?.reload(this.currentTestContent),this.ref.detectChanges(),this.alertService.success("Test content reloaded",!0))}n.showResize&&(this.isSliderOpen=!0,this.ref.detectChanges())}})}showStartupHelp(){this.htmlHRefDialogService.open({title:"Onboarding",url:"assets/help/startupHelp.html",size:ji.Large,useBackButton:!1,toConfirm:!0,yes:"OK",no:"Don't show again"}).subscribe(n=>{n||(ge.testSettings.showStartupHelp=!1)})}closeSlider(){this.isSliderOpen=!1}handleDragEnd(n){console.debug("emitting: "+n.value),this.sliderSubjectService.emit(n.value)}static \u0275fac=function(e){return new(e||t)(T(nr),T(ve),T(fr),T(Gl),T(Go),T(zl))};static \u0275cmp=O({type:t,selectors:[["main-tests"]],viewQuery:function(e,i){if(e&1&&Te(o4,5),e&2){let r;Q(r=X())&&(i.plateCard=r.first)}},features:[Me([Gl,Go])],decls:21,vars:5,consts:[["plateMenu","matMenu"],["overlayAnchor","","customOrigin","cdkOverlayOrigin"],["mainCard",""],[1,"viewer-shell"],[1,"toolbar"],["mat-mini-fab","","aria-label","Select test","matTooltip","Select plate collection",1,"docs-theme-picker-trigger",3,"mat-menu-trigger-for"],["xPosition","before"],["mat-menu-item","",3,"matTooltip"],[1,"toolbar-spacer"],["mat-mini-fab","",3,"click"],["cdkOverlayOrigin","",2,"position","fixed","top","6em","left","3em","width","0","height","0"],["cdkConnectedOverlay","",3,"cdkConnectedOverlayOrigin","cdkConnectedOverlayOpen"],["target","_blank","rel","noopener noreferrer","mat-mini-fab","",3,"href"],[3,"testContent"],["mat-menu-item","",3,"click","matTooltip"],[1,"floating-bar","floating-bar-background"],["min","350","step","1","showTickMarks","","discrete","",3,"max"],["matSliderThumb","",3,"ngModelChange","dragEnd","ngModel"]],template:function(e,i){if(e&1&&(p(0,"div",3)(1,"div",4)(2,"button",5)(3,"mat-icon"),M(4,"palette"),g()(),p(5,"mat-menu",6,0),ln(7,s4,5,4,"button",7,a4),g(),V(9,"span",8),p(10,"button",9),H("click",function(){return i.showSettings()}),p(11,"mat-icon"),M(12,"settings"),g()(),V(13,"div",10,1),vt(16,l4,11,2,"ng-template",11),p(17,"a",12)(18,"mat-icon"),M(19,"help"),g()()(),G(20,c4,2,1,"plate-card",13),g()),e&2){let r=Jt(6),o=Jt(15);v(2),L("mat-menu-trigger-for",r),v(5),cn(i.allTests==null?null:i.allTests.testContents),v(9),L("cdkConnectedOverlayOrigin",o)("cdkConnectedOverlayOpen",i.isSliderOpen),v(),L("href",i.helpUri,Rr),v(3),q(!(i.allTests==null||i.allTests.testContents==null)&&i.allTests.testContents.length?20:-1)}},dependencies:[_n,dr,Ga,Bo,Gd,dO,Hn,ai,Yr,zn,Bl,Kr,Wp,$p,xn,al,To,DO,EO,AC,Ul,jl,bu,gO],encapsulation:2,changeDetection:0})};var Zp=class t{async requestPersistentStorage(){if(!navigator.storage?.persist)return console.warn("Storage Persistence API not supported"),!1;if(await navigator.storage.persisted())return console.log("Storage already persisted"),!0;let e=await navigator.storage.persist();return console.log(e?"Persistent storage granted":"Persistent storage denied"),e}async getStorageEstimate(){return navigator.storage?.estimate?navigator.storage.estimate():null}static \u0275fac=function(e){return new(e||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})};var Yp=class t{constructor(n,e,i){this.iconRegistry=n;this.alertService=e;this.updateAppService=i;this.alertService.initOnce(),n.setDefaultFontSetClass("material-symbols-outlined")}appRef=u(Ut);storageSvc=u(Zp);ngOnInit(){this.updateAppService.checkAvailable(),this.appRef.isStable.pipe(Ce(n=>n),He(1)).subscribe(async()=>{await this.storageSvc.requestPersistentStorage()})}static \u0275fac=function(e){return new(e||t)(T(up),T(fr),T(qo))};static \u0275cmp=O({type:t,selectors:[["app-root"]],decls:2,vars:0,template:function(e,i){e&1&&V(0,"main-tests")(1,"router-outlet")},dependencies:[bd,qp],encapsulation:2,changeDetection:0})};Ja.init();ge.init();Kv(Yp,cO).catch(t=>console.error(t));
