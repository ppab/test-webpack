!function(n){function A(A){for(var e,i,s=A[0],a=A[1],C=A[2],c=0,d=[];c<s.length;c++)i=s[c],Object.prototype.hasOwnProperty.call(t,i)&&t[i]&&d.push(t[i][0]),t[i]=0;for(e in a)Object.prototype.hasOwnProperty.call(a,e)&&(n[e]=a[e]);for(p&&p(A);d.length;)d.shift()();return r.push.apply(r,C||[]),o()}function o(){for(var n,A=0;A<r.length;A++){for(var o=r[A],e=!0,s=1;s<o.length;s++){var a=o[s];0!==t[a]&&(e=!1)}e&&(r.splice(A--,1),n=i(i.s=o[0]))}return n}var e={},t={0:0},r=[];function i(A){if(e[A])return e[A].exports;var o=e[A]={i:A,l:!1,exports:{}};return n[A].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=n,i.c=e,i.d=function(n,A,o){i.o(n,A)||Object.defineProperty(n,A,{enumerable:!0,get:o})},i.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,A){if(1&A&&(n=i(n)),8&A)return n;if(4&A&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&A&&"string"!=typeof n)for(var e in n)i.d(o,e,function(A){return n[A]}.bind(null,e));return o},i.n=function(n){var A=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(A,"a",A),A},i.o=function(n,A){return Object.prototype.hasOwnProperty.call(n,A)},i.p="";var s=window.webpackJsonp=window.webpackJsonp||[],a=s.push.bind(s);s.push=A,s=s.slice();for(var C=0;C<s.length;C++)A(s[C]);var p=a;r.push([4,1]),o()}([,,,function(n,A,o){"use strict";o.d(A,"a",(function(){return e}));var e=function(){window.onscroll=function(){return n()};var n=function(){document.body.scrollTop>300||document.documentElement.scrollTop>300?(console.log("scroll"),document.querySelector("#flor-1").style.top="-200%"):document.querySelector("#flor-1").style.top=""}}},function(n,A,o){"use strict";o.r(A),function(n){o(5),o(6),o(7),o(8),o(10),o(12),o(14),o(16),o(18),o(20),o(22),o(23);var A=o(3);n(document).ready((function(){var A=n(".owl-carousel");A.owlCarousel({responsive:{0:{items:1},700:{items:3}},loop:!0,margin:300,nav:!0,autoplay:!0,autoplayTimeout:4e3,autoplayHoverPause:!0,fallbackEasing:500,animateOut:"slideOutDown",smartSpeed:450}),n(".play").on("click",(function(){A.trigger("play.owl.autoplay",[4e3])})),n(".stop").on("click",(function(){A.trigger("stop.owl.autoplay")}))})),Object(A.a)()}.call(this,o(2))},function(n,A,o){},function(n,A,o){},,function(n,A,o){var e=o(0),t=o(9);"string"==typeof(t=t.__esModule?t.default:t)&&(t=[[n.i,t,""]]);var r={insert:"head",singleton:!1};e(t,r);n.exports=t.locals||{}},function(n,A,o){(A=o(1)(!0)).push([n.i,"@import url(https://use.typekit.net/aix8qzm.css);"]),A.push([n.i,".tns-outer .tns-controls,.tns-outer .tns-nav,.tns-outer button{display:block}html,body{margin:0}html{font-family:pt-sans-pro,sans-serif;font-style:normal;font-weight:300}button{border-radius:40px;font-family:pt-sans-pro,sans-serif;font-weight:800;padding:.5rem 2rem;font-style:normal}a{text-decoration:none}[class*=content]{background-color:#3ec6bc;height:90vh;width:100vw;text-align:center;color:#fff200}[class*=content] h1,[class*=content] h2,[class*=content] h3,[class*=content] h4{color:#f6bc18}.content2{background:#771e68;overflow:hidden}","",{version:3,sources:["/Users/jab_macmini/Desktop/almanew/test-webpack/app/assets/scss/_variables.scss","/Users/jab_macmini/Desktop/almanew/test-webpack/app/assets/scss/styles.scss"],names:[],mappings:"AAaI,+DACI,aAAA,CCTR,UACE,QAAA,CAEF,KAEA,kCAAA,CACA,iBAAA,CACA,eAAA,CAEA,OACE,kBAAA,CACA,kCAAA,CAEA,eAAA,CACA,kBAAA,CACA,iBAAA,CAGF,EACE,oBAAA,CAIF,iBACI,wBD7BK,CC8BL,WAAA,CACA,WAAA,CACA,iBAAA,CACA,aD/BM,CCgCN,gFACI,aDhCE,CCmCR,UACE,kBAAA,CACA,eAAA",file:"styles.scss",sourcesContent:["$p-green:#3ec6bc;\n$p-green2:#48A9C0;\n$p-yellow:#FFF200;\n$p-orange:#F6BC18;\n$p-orange2:#ff8246;\n$red:#F91D0B;\n$gray:#F7F7F7;\n$shadow1:0px 3px 12px 0px rgba(0, 0, 0, 0.16);\n$shadow2:1px 3px 12px 4px rgba(0, 0, 0, 0.26);\n\n\n\n.tns-outer{\n    .tns-controls,.tns-nav,button{\n        display:block;\n    }\n}\n\n",'\n  @import url("https://use.typekit.net/aix8qzm.css");\n@import \'variables\';\n\n\nhtml,body{\n  margin: 0;\n}\nhtml{\n    \nfont-family: pt-sans-pro, sans-serif;\nfont-style: normal;\nfont-weight: 300;\n}\nbutton{\n  border-radius: 40px;\n  font-family: pt-sans-pro, sans-serif;\n\n  font-weight: 800;\n  padding: .5rem 2rem;\n  font-style: normal;\n\n}\na{\n  text-decoration: none;\n}\n\n\n[class*="content"] {\n    background-color:$p-green;\n    height: 90vh;\n    width: 100vw;\n    text-align: center;\n    color:$p-yellow;\n    h1,h2,h3,h4{\n        color:$p-orange;\n    }\n  }\n  .content2 {\n    background: rgb(119, 30, 104);\n    overflow: hidden;\n  }\n\n\n']}]),n.exports=A},function(n,A,o){var e=o(0),t=o(11);"string"==typeof(t=t.__esModule?t.default:t)&&(t=[[n.i,t,""]]);var r={insert:"head",singleton:!1};e(t,r);n.exports=t.locals||{}},function(n,A,o){(A=o(1)(!0)).push([n.i,".tns-outer .tns-controls,.tns-outer .tns-nav,.tns-outer button{display:block}section.two{background:#f7f7f7}.cursos{position:relative;display:flex;flex-flow:row wrap;text-align:center}.cursos-title{flex-basis:100%;justify-content:center}.cursos-title h2{font-size:66px;font-weight:300}.cursos-row{flex-basis:100%;display:flex;flex-flow:row wrap;justify-content:space-around;overflow:hidden}.cursos-row>div:first-child{order:2}.cursos-row>div:nth-child(1){filter:grayscale(0.8)}.cursosCard{overflow:hidden;border-radius:12px;-webkit-box-shadow:0px 3px 12px 0px rgba(0,0,0,.16);-moz-box-shadow:0px 3px 12px 0px rgba(0,0,0,.16);box-shadow:0px 3px 12px 0px rgba(0,0,0,.16);flex-basis:90vw;display:flex;flex-flow:column nowrap;justify-content:space-between;margin-bottom:2rem;padding-bottom:2rem;overflow:hidden;background-color:#fff}.cursosCard .cursosCard-image{background-color:#fff;width:100%;overflow:hidden}.cursosCard .cursosCard-image img{width:100%;position:relative}.cursosCard .cursosCard-title{color:rgba(0,0,0,.75)}.cursosCard .cursosCard-title h4{font-size:32px;font-weight:800;margin:1rem 0}.cursosCard .cursosCard-text p{font-size:16px;color:rgba(0,0,0,.71);width:80%;margin:auto}.cursosCard .comment-slider .commentCard{font-size:16px;box-shadow:0px 3px 12px 0px rgba(0,0,0,.16);width:258px;border-radius:8px;margin:1rem;padding:1rem 0rem}.cursosCard .comment-slider .commentCard p{font-size:13px}.cursosCard .cursosCard-button button{background-color:#ff8246;color:#fff;border:0px;font-weight:800;font-size:20px;box-shadow:1px 3px 12px 4px rgba(0,0,0,.26)}.cursosCard .commentCard-stars{display:flex;justify-content:center}.cursosCard .commentCard-stars .stars-wrapper{width:19.4px;height:18.3px}.cursosCard .commentCard-stars .stars-wrapper img{width:60%}@media(min-width: 340px){.cursosCard .comment-slider .commentCard{margin:2rem;padding:.5rem .4rem}}@media(min-width: 411px){.cursosCard .comment-slider .commentCard{margin:2rem;padding:.5rem 1.8rem}}@media(min-width: 414px){.cursosCard .comment-slider .commentCard{margin:2rem;padding:.5rem 1.5rem}}@media(min-width: 470px){.cursosCard .comment-slider .commentCard{margin:2rem 4rem;padding:.5rem 1.5rem}}@media(min-width: 540px){.cursosCard .comment-slider .commentCard{margin:2rem 9rem;padding:.5rem 1.5rem}}@media(min-width: 700px){.cursosCard h4{font-size:35px}.cursosCard .cursosCard-text p{font-size:22px}.cursosCard .comment-slider .commentCard{margin:2rem;padding:1rem .5rem}.cursosCard .comment-slider .commentCard p{font-size:15px}.cursosCard .cursosCard-button button{font-size:27px}.cursos-row{margin:auto;flex-basis:80%;padding:2rem}.cursosCard{flex-basis:670px;height:788px}.cursosCard-image{height:290px}}@media(min-width: 768px){.cursosCard .comment-slider .commentCard{margin:2rem 1rem;padding:.5rem .5rem}}@media(min-width: 1023px){.cursosCard{transform:scale(0.9)}.cursosCard .comment-slider .commentCard{margin:2rem;padding:.5rem .9rem}}.owl-nav{display:none}","",{version:3,sources:["/Users/jab_macmini/Desktop/almanew/test-webpack/app/assets/scss/_variables.scss","/Users/jab_macmini/Desktop/almanew/test-webpack/app/assets/scss/seccion_cursos.scss"],names:[],mappings:"AAaI,+DACI,aAAA,CCXR,YACE,kBDEI,CCEN,QACE,iBAAA,CACA,YAAA,CACA,kBAAA,CACA,iBAAA,CAIF,cACE,eAAA,CACA,sBAAA,CACA,iBACE,cAAA,CACA,eAAA,CAIJ,YACE,eAAA,CACA,YAAA,CACA,kBAAA,CACA,4BAAA,CACA,eAAA,CAEF,4BACE,OAAA,CAEF,6BACE,qBAAA,CAEF,YACE,eAAA,CACA,kBAAA,CACA,mDAAA,CACA,gDAAA,CACA,2CDpCO,CCqCP,eAAA,CACA,YAAA,CACA,uBAAA,CACA,6BAAA,CACA,kBAAA,CACA,mBAAA,CAEA,eAAA,CACA,qBAAA,CAEA,8BACE,qBAAA,CAEA,UAAA,CACA,eAAA,CAEA,kCACE,UAAA,CACA,iBAAA,CAIJ,8BAME,qBAAA,CALA,iCACE,cAAA,CACA,eAAA,CACA,aAAA,CAKF,+BACE,cAAA,CACA,qBAAA,CACA,SAAA,CACA,WAAA,CAOF,yCACE,cAAA,CACA,2CDjFG,CCkFH,WAAA,CAEA,iBAAA,CAEA,WAAA,CACA,iBAAA,CACA,2CACE,cAAA,CAMJ,sCACE,wBDnGK,CCoGL,UAAA,CACA,UAAA,CACA,eAAA,CACA,cAAA,CACA,2CDpGG,CCwGP,+BACE,YAAA,CACA,sBAAA,CACA,8CACE,YAAA,CACA,aAAA,CACA,kDACE,SAAA,CAMR,yBAGM,yCACE,WAAA,CACA,mBAAA,CAAA,CAMR,yBAGM,yCACE,WAAA,CACA,oBAAA,CAAA,CAMR,yBAGM,yCACE,WAAA,CACA,oBAAA,CAAA,CAMR,yBAGM,yCACE,gBAAA,CACA,oBAAA,CAAA,CAMR,yBAGM,yCACE,gBAAA,CACA,oBAAA,CAAA,CAOR,yBAEI,eACE,cAAA,CAGA,+BAEE,cAAA,CAIF,yCAEE,WAAA,CACA,kBAAA,CACA,2CACE,cAAA,CAOJ,sCACE,cAAA,CAKN,YACE,WAAA,CACA,cAAA,CACA,YAAA,CAGF,YACE,gBAAA,CAEA,YAAA,CAGF,kBACE,YAAA,CAAA,CAMJ,yBAGM,yCACE,gBAAA,CACA,mBAAA,CAAA,CAMR,0BACE,YACE,oBAAA,CAEE,yCACE,WAAA,CACA,mBAAA,CAAA,CAYR,SACE,YAAA",file:"seccion_cursos.scss",sourcesContent:["$p-green:#3ec6bc;\n$p-green2:#48A9C0;\n$p-yellow:#FFF200;\n$p-orange:#F6BC18;\n$p-orange2:#ff8246;\n$red:#F91D0B;\n$gray:#F7F7F7;\n$shadow1:0px 3px 12px 0px rgba(0, 0, 0, 0.16);\n$shadow2:1px 3px 12px 4px rgba(0, 0, 0, 0.26);\n\n\n\n.tns-outer{\n    .tns-controls,.tns-nav,button{\n        display:block;\n    }\n}\n\n",'@import "variables";\n\n\nsection.two{\n  background: $gray;\n\n}\n/*separar a file*/\n.cursos {\n  position: relative;\n  display: flex;\n  flex-flow: row wrap;\n  text-align: center;\n  \n\n}\n.cursos-title {\n  flex-basis: 100%;\n  justify-content: center;\n  h2 {\n    font-size: 66px;\n    font-weight: 300;\n  }\n}\n\n.cursos-row {\n  flex-basis: 100%;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-around;\n  overflow: hidden;\n}\n.cursos-row>div:first-child{\n  order:2;\n}\n.cursos-row>div:nth-child(1){\n  filter: grayscale(.8);\n}\n.cursosCard {\n  overflow: hidden;\n  border-radius: 12px;\n  -webkit-box-shadow: 0px 3px 12px 0px rgba(0, 0, 0, 0.16);\n  -moz-box-shadow: 0px 3px 12px 0px rgba(0, 0, 0, 0.16);\n  box-shadow: $shadow1;\n  flex-basis: 90vw;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: space-between;\n  margin-bottom: 2rem;\n  padding-bottom: 2rem;\n\n  overflow: hidden;\n  background-color: white;\n\n  .cursosCard-image {\n    background-color: white;\n    /*height: 20vh;*/\n    width: 100%;\n    overflow: hidden;\n\n    img {\n      width: 100%;\n      position: relative;\n    }\n  }\n\n  .cursosCard-title {\n    h4 {\n      font-size: 32px;\n      font-weight: 800;\n      margin: 1rem 0;\n    }\n    color: rgba(0, 0, 0, 0.75);\n  }\n  .cursosCard-text {\n    p {\n      font-size: 16px;\n      color: rgba(0, 0, 0, 0.71);\n      width: 80%;\n      margin: auto;\n\n    }\n\n  }\n\n  .comment-slider {\n    .commentCard {\n      font-size: 16px;\n      box-shadow: $shadow1;\n      width: 258px;\n\n      border-radius: 8px;\n\n      margin: 1rem;\n      padding: 1rem 0rem;\n      p {\n        font-size: 13px;\n      }\n    }\n  }\n\n  .cursosCard-button {\n    button {\n      background-color: $p-orange2;\n      color: white;\n      border: 0px;\n      font-weight: 800;\n      font-size: 20px;\n      box-shadow: $shadow2;\n    }\n  }\n\n  .commentCard-stars {\n    display: flex;\n    justify-content: center;\n    .stars-wrapper {\n      width: 19.4px;\n      height: 18.3px;\n      img {\n        width: 60%;\n      }\n    }\n  }\n}\n\n@media (min-width: 340px) {\n  .cursosCard {\n    .comment-slider {\n      .commentCard {\n        margin: 2rem ;\n        padding: 0.5rem 0.4rem;\n      }\n     \n    }\n  }\n}\n@media (min-width: 411px) {\n  .cursosCard {\n    .comment-slider {\n      .commentCard {\n        margin: 2rem;\n        padding: 0.5rem 1.8rem;\n      }\n     \n    }\n  }\n}\n@media (min-width: 414px) {\n  .cursosCard {\n    .comment-slider {\n      .commentCard {\n        margin: 2rem;\n        padding: 0.5rem 1.5rem;\n      }\n    }\n  }\n}\n\n@media (min-width: 470px) {\n  .cursosCard {\n    .comment-slider {\n      .commentCard {\n        margin: 2rem 4rem;\n        padding: 0.5rem 1.5rem;\n      }\n    }\n  }\n}\n\n@media (min-width: 540px) {\n  .cursosCard {\n    .comment-slider {\n      .commentCard {\n        margin: 2rem 9rem;\n        padding: 0.5rem 1.5rem;\n      }\n    }\n  }\n}\n\n\n@media (min-width: 700px) {\n  .cursosCard {\n    h4 {\n      font-size: 35px;\n    }\n    .cursosCard-text {\n      p{\n\n        font-size: 22px;\n      }\n    }\n    .comment-slider {\n      .commentCard {\n        \n        margin: 2rem;\n        padding: 1rem 0.5rem;\n        p {\n          font-size: 15px;\n        }\n      }\n      \n    }\n\n    .cursosCard-button {\n      button {\n        font-size: 27px;\n      }\n    }\n  }\n\n  .cursos-row {\n    margin: auto;\n    flex-basis: 80%;\n    padding: 2rem;\n  \n  }\n  .cursosCard {\n    flex-basis: 670px;\n\n    height: 788px;\n  }\n\n  .cursosCard-image {\n    height: 290px;\n  }\n}\n\n\n\n@media (min-width: 768px) {\n  .cursosCard {\n    .comment-slider {\n      .commentCard {\n        margin: 2rem 1rem;\n        padding: 0.5rem 0.5rem;\n      }\n    }\n  }\n}\n\n@media (min-width: 1023px) {\n  .cursosCard {\n    transform: scale(.9);\n    .comment-slider {\n      .commentCard {\n        margin: 2rem  ;\n        padding: 0.5rem .9rem;\n      }\n    }\n  }\n}\n\n\n\n\n\n\n\n.owl-nav {\n  display: none;\n}\n\n']}]),n.exports=A},function(n,A,o){var e=o(0),t=o(13);"string"==typeof(t=t.__esModule?t.default:t)&&(t=[[n.i,t,""]]);var r={insert:"head",singleton:!1};e(t,r);n.exports=t.locals||{}},function(n,A,o){(A=o(1)(!0)).push([n.i,".tns-outer .tns-controls,.tns-outer .tns-nav,.tns-outer button{display:block}section.three{background:#3ec6bc;position:relative}.contacto .row{width:90%;margin:auto;display:flex;justify-content:space-around;flex-flow:row wrap;padding-top:10rem;padding-bottom:4rem;height:auto}.contacto [class*=col]{flex-basis:90vw}.contacto .col-1 h4{font-size:66px;font-weight:300;padding-top:0px;margin-top:0px;margin-bottom:0px}.contacto .col-1 form,.contacto .col-1 h4,.contacto .col-1 p{color:#fff;display:flex;flex-flow:column nowrap;margin-left:auto}.contacto .col-1 form input,.contacto .col-1 h4 input,.contacto .col-1 p input{padding-top:2rem;margin-top:2rem;border-radius:6px}.contacto .logo-cerebro{max-width:90vw;width:100%;margin:auto;display:none}.redes-sociales{padding-top:4rem;text-align:center}@media(min-width: 700px){.contacto .row{display:flex;justify-content:space-around;flex-flow:row wrap;padding-top:10rem;padding-bottom:10rem;height:auto}.contacto [class*=col]{flex-basis:670px}.contacto .logo-cerebro{display:block}}","",{version:3,sources:["/Users/jab_macmini/Desktop/almanew/test-webpack/app/assets/scss/_variables.scss","/Users/jab_macmini/Desktop/almanew/test-webpack/app/assets/scss/contacto.scss"],names:[],mappings:"AAaI,+DACI,aAAA,CCZR,cACI,kBDHK,CCIL,iBAAA,CAIA,eACI,SAAA,CACA,WAAA,CACA,YAAA,CACA,4BAAA,CACA,kBAAA,CACA,iBAAA,CACA,mBAAA,CACA,WAAA,CAEJ,uBACI,eAAA,CAMJ,oBACI,cAAA,CACA,eAAA,CACA,eAAA,CACA,cAAA,CACA,iBAAA,CAEJ,6DACI,UAAA,CACA,YAAA,CACA,uBAAA,CACA,gBAAA,CACA,+EACI,gBAAA,CACA,eAAA,CACA,iBAAA,CAOR,wBACI,cAAA,CACA,UAAA,CACA,WAAA,CACA,YAAA,CAKR,gBACI,gBAAA,CACA,iBAAA,CAKJ,yBAII,eAEI,YAAA,CACA,4BAAA,CACA,kBAAA,CACA,iBAAA,CACA,oBAAA,CACA,WAAA,CAEJ,uBACI,gBAAA,CAIJ,wBACG,aAAA,CAAA",file:"contacto.scss",sourcesContent:["$p-green:#3ec6bc;\n$p-green2:#48A9C0;\n$p-yellow:#FFF200;\n$p-orange:#F6BC18;\n$p-orange2:#ff8246;\n$red:#F91D0B;\n$gray:#F7F7F7;\n$shadow1:0px 3px 12px 0px rgba(0, 0, 0, 0.16);\n$shadow2:1px 3px 12px 4px rgba(0, 0, 0, 0.26);\n\n\n\n.tns-outer{\n    .tns-controls,.tns-nav,button{\n        display:block;\n    }\n}\n\n","@import 'variables';\n\nsection.three{\n    background: $p-green;\n    position: relative;\n}\n\n.contacto{\n    .row{\n        width: 90%;\n        margin: auto;\n        display: flex;\n        justify-content: space-around;\n        flex-flow: row wrap;\n        padding-top:10rem;\n        padding-bottom:4rem;\n        height: auto;\n    }\n    [class*='col']{\n        flex-basis: 90vw;\n      \n    }\n    .col-1{\n     \n      \n    h4{\n        font-size: 66px;\n        font-weight: 300;\n        padding-top: 0px;\n        margin-top: 0px;\n        margin-bottom: 0px;\n    }\n    form, h4,p{\n        color:white;\n        display: flex;\n        flex-flow: column nowrap;\n        margin-left:auto ;\n        input{\n            padding-top: 2rem;\n            margin-top: 2rem; \n            border-radius: 6px;\n        }\n\n    }\n\n}\n\n    .logo-cerebro{\n        max-width: 90vw;\n        width: 100%;\n        margin:auto ;\n        display: none;\n    }\n}\n\n\n.redes-sociales{\n    padding-top: 4rem;\n    text-align: center;\n\n}\n\n\n@media (min-width: 700px) {\n\n\n.contacto{\n    .row{\n\n        display: flex;\n        justify-content: space-around;\n        flex-flow: row wrap;\n        padding-top:10rem;\n        padding-bottom:10rem;\n        height: auto;\n    }\n    [class*='col']{\n        flex-basis: 670px;\n      \n    }\n\n    .logo-cerebro{\n       display: block;\n    }\n\n}\n\n}"]}]),n.exports=A},function(n,A,o){var e=o(0),t=o(15);"string"==typeof(t=t.__esModule?t.default:t)&&(t=[[n.i,t,""]]);var r={insert:"head",singleton:!1};e(t,r);n.exports=t.locals||{}},function(n,A,o){(A=o(1)(!0)).push([n.i,'.tns-outer .tns-controls,.tns-outer .tns-nav,.tns-outer button{display:block}section.one{overflow:hidden;padding-top:2rem;background-color:#3ec6bc;color:#fff}section.one button{background-color:#ff8c55;border:2px solid #ff8950;color:#fff;border-radius:0px;font-size:1rem;font-weight:100}section.one button:hover{background-color:#ff8246}section.one .info [class*=col]{flex-basis:100%}section.one .row{height:auto;position:relative}section.one .logo-cerebro{width:57%;margin-left:auto}section.one .info{margin-top:-3rem;padding:2rem}section.one h2{text-shadow:2px 2px 5px rgba(63,68,68,.3);font-size:28px;font-family:"Raleway",sans-serif;font-weight:100}section.one p{font-size:16px}@media(min-width: 700px){section.one .info [class*=col]{flex-basis:40%;padding:5%}section.one .info [class*=col] h2{text-shadow:2px 2px 5px rgba(63,68,68,.3);font-family:"Raleway",sans-serif;font-size:29px}section.one .info [class*=col] p{font-size:16px}section.one .row{padding-top:4rem;align-items:center}section.one .logo-cerebro{width:100%;margin:auto}section.one .col-1{order:2;margin-top:-4rem}section.one .col-2{order:1;padding-top:3rem;padding-left:6%;flex-basis:60%}}@media(min-width: 920px){section.one .col-1{margin-top:-16rem}section.one .col-2{padding:2%}section.one .col-2 #Logo_cerebro{position:relative;top:-3rem}section.one .info [class*=col] h2{font-size:50px}section.one .info [class*=col] p{font-size:26px}}',"",{version:3,sources:["/Users/jab_macmini/Desktop/almanew/test-webpack/app/assets/scss/_variables.scss","/Users/jab_macmini/Desktop/almanew/test-webpack/app/assets/scss/intro-text.scss"],names:[],mappings:"AAaI,+DACI,aAAA,CCbR,YAeI,eAAA,CACF,gBAAA,CACA,wBDlBO,CCoBT,UAAA,CAjBE,mBACG,wBAAA,CACD,wBAAA,CACA,UAAA,CACA,iBAAA,CACA,cAAA,CACA,eAAA,CAEF,yBAEE,wBDTO,CC2BT,+BACE,eAAA,CAEF,iBACE,WAAA,CAAA,iBAAA,CAGF,0BACE,SAAA,CACA,gBAAA,CAGF,kBACE,gBAAA,CACA,YAAA,CAEF,eACE,yCAAA,CACA,cAAA,CACA,gCAAA,CACA,eAAA,CAEF,cACE,cAAA,CAIF,yBAGE,+BACE,cAAA,CACA,UAAA,CAEA,kCACE,yCAAA,CAEA,gCAAA,CACA,cAAA,CAEF,iCACE,cAAA,CAIJ,iBACE,gBAAA,CACA,kBAAA,CAGF,0BACE,UAAA,CACA,WAAA,CAEF,mBACE,OAAA,CACA,gBAAA,CAGF,mBACE,OAAA,CACA,gBAAA,CACA,eAAA,CACA,cAAA,CAAA,CAKN,yBAII,mBACE,iBAAA,CAGF,mBACE,UAAA,CACA,iCACE,iBAAA,CACA,SAAA,CAKF,kCACE,cAAA,CAEF,iCACE,cAAA,CAAA",file:"intro-text.scss",sourcesContent:["$p-green:#3ec6bc;\n$p-green2:#48A9C0;\n$p-yellow:#FFF200;\n$p-orange:#F6BC18;\n$p-orange2:#ff8246;\n$red:#F91D0B;\n$gray:#F7F7F7;\n$shadow1:0px 3px 12px 0px rgba(0, 0, 0, 0.16);\n$shadow2:1px 3px 12px 4px rgba(0, 0, 0, 0.26);\n\n\n\n.tns-outer{\n    .tns-controls,.tns-nav,button{\n        display:block;\n    }\n}\n\n",'@import "variables";\nsection.one {\n\n  button{\n     background-color: lighten($p-orange2, 3%);\n    border: 2px solid lighten($p-orange2, 2%);\n    color: #fff;\n    border-radius: 0px;\n    font-size: 1rem;\n    font-weight: 100;\n  }\n  button:hover{\n  \n    background-color: $p-orange2 ;\n  }\n  \n    overflow: hidden;\n  padding-top: 2rem;\n  background-color: $p-green;\n\ncolor: white;\n\n  // #flor-1 {\n  //   position: absolute;\n  //   top: -18%;\n  //   right: 77%;\n  //   z-index: 0;\n  //   filter: opacity(0.7);\n  //   transform: scale(1.5);\n  // }\n\n  .info [class*="col"] {\n    flex-basis: 100%;\n  }\n  .row {\n    height: auto;  position: relative;\n  }\n\n  .logo-cerebro {\n    width: 57%;\n    margin-left: auto;\n  }\n\n  .info {\n    margin-top: -3rem;\n    padding: 2rem;\n  }\n  h2 {\n    text-shadow: 2px 2px 5px rgba(63, 68, 68, 0.3);\n    font-size: 28px;\n    font-family: "Raleway", sans-serif;\n    font-weight: 100;\n  }\n  p {\n    font-size: 16px;\n\n  }\n\n  @media (min-width: 700px) {\n\n    \n    .info [class*="col"] {\n      flex-basis: 40%;\n      padding: 5%;\n\n      h2 {\n        text-shadow: 2px 2px 5px rgba(63, 68, 68, 0.3);\n\n        font-family: "Raleway", sans-serif;\n        font-size: 29px;\n      }\n      p {\n        font-size: 16px;\n       \n      }\n    }\n    .row {\n      padding-top: 4rem;\n      align-items: center;\n    }\n\n    .logo-cerebro {\n      width: 100%;\n      margin: auto;\n    }\n    .col-1 {\n      order: 2;\n      margin-top: -4rem;\n    }\n\n    .col-2 {\n      order: 1;\n      padding-top: 3rem;\n      padding-left: 6%;\n      flex-basis: 60%;\n    }\n  }\n}\n\n@media (min-width: 920px) {\n  section.one {\n   \n  \n    .col-1 {\n      margin-top: -16rem;\n    }\n\n    .col-2 {\n      padding: 2%;\n      #Logo_cerebro {\n        position: relative;\n        top: -3rem;\n      }\n    }\n\n    .info [class*="col"] {\n      h2 {\n        font-size: 50px;\n      }\n      p {\n        font-size: 26px;\n      }\n    }\n  }\n}\n']}]),n.exports=A},function(n,A,o){var e=o(0),t=o(17);"string"==typeof(t=t.__esModule?t.default:t)&&(t=[[n.i,t,""]]);var r={insert:"head",singleton:!1};e(t,r);n.exports=t.locals||{}},function(n,A,o){(A=o(1)(!0)).push([n.i,".tns-outer .tns-controls,.tns-outer .tns-nav,.tns-outer button{display:block}.header-row{overflow:hidden;width:100vw;background-color:#3ec6bc;top:0%;z-index:100;transition:top .3s}.header-row .row{padding-top:12px;height:100%;display:grid;grid-template-columns:2fr 1fr;grid-template-rows:1fr 40px}.header-row .row .col-1{grid-row:1/2;grid-column:1/2;position:relative;z-index:10}.header-row .row .col-2{grid-row:2/3;grid-column:1/3}.header-row .row .col-3{grid-row:1/2;grid-column:2/3}.header-row .row .Logo{position:absolute;width:425px;top:47px;padding-left:1rem}.header-row .row .main-menu{width:100%;position:relative;text-align:center;padding-top:1rem}.header-row .row .main-menu a{color:#fff;font-size:14px;text-decoration:none;padding:9px;text-transform:uppercase}.header-row .row .login-div{padding-right:1rem;height:100px;width:118px;margin-left:auto;text-align:center}.header-row .row img{width:28.54px;position:relative;z-index:1000;right:-52px;top:17px}.header-row .row .login-div span{position:relative;top:-2px;right:-14px;z-index:101;color:#3ec6bc;font-size:1rem}.header-row .row svg#loginsvg{position:relative;transform:scaleX(0.456) scaleY(0.4);right:178px;top:-96px;z-index:100}@media(min-width: 700px){.header-row .row .Logo{top:22px;width:585px;padding-left:5%}.header-row .row .login-div{width:200px}.header-row .row .login-div img{right:0;top:-10px;filter:opacity(0.7);transform:scale(0.8)}.header-row .row .login-div span{left:-6px;top:-15px;font-size:1rem}.header-row .row svg#loginsvg{transform:scaleX(0.4) scaleY(0.35);right:185px;top:-112px}.header-row .row .main-menu{position:relative;z-index:100;padding-top:3rem}.header-row .row .main-menu a{font-size:20px;padding:3rem}}@media(min-width: 1098px){.header-row .row{padding:1rem;grid-template-columns:1fr 577px 1fr;grid-template-rows:1fr}.header-row .row .col-2{grid-row:1/2;grid-column:2/3}.header-row .row .col-3{grid-column:3/3}}","",{version:3,sources:["/Users/jab_macmini/Desktop/almanew/test-webpack/app/assets/scss/_variables.scss","/Users/jab_macmini/Desktop/almanew/test-webpack/app/assets/scss/header.scss"],names:[],mappings:"AAaI,+DACI,aAAA,CCbR,YAEE,eAAA,CACA,WAAA,CACA,wBDLO,CCOP,MAAA,CACA,WAAA,CACA,kBAAA,CAEA,iBACE,gBAAA,CACA,WAAA,CACA,YAAA,CACA,6BAAA,CACA,2BAAA,CAEA,wBACE,YAAA,CACA,eAAA,CACA,iBAAA,CACA,UAAA,CAEF,wBACI,YAAA,CACF,eAAA,CAEF,wBACE,YAAA,CACA,eAAA,CAGF,uBACE,iBAAA,CACA,WAAA,CACA,QAAA,CACA,iBAAA,CAEF,4BAEE,UAAA,CACA,iBAAA,CACA,iBAAA,CACA,gBAAA,CACA,8BACE,UAAA,CACA,cAAA,CAEA,oBAAA,CAEA,WAAA,CAGA,wBAAA,CAIJ,4BACE,kBAAA,CAEA,YAAA,CACA,WAAA,CAEA,gBAAA,CACA,iBAAA,CAGF,qBACA,aAAA,CACE,iBAAA,CACA,YAAA,CACA,WAAA,CACA,QAAA,CAGF,iCACE,iBAAA,CAEA,QAAA,CACA,WAAA,CACA,WAAA,CACA,aDlFG,CCmFH,cAAA,CAGF,8BACI,iBAAA,CACJ,mCAAA,CACA,WAAA,CACA,SAAA,CACA,WAAA,CAIJ,yBAKM,uBACE,QAAA,CACA,WAAA,CACA,eAAA,CAEF,4BACE,WAAA,CACA,gCACE,OAAA,CACA,SAAA,CACA,mBAAA,CACA,oBAAA,CAIJ,iCACE,SAAA,CACJ,SAAA,CACA,cAAA,CAKE,8BACE,kCAAA,CACA,WAAA,CACA,UAAA,CAGF,4BACE,iBAAA,CACA,WAAA,CACH,gBAAA,CACG,8BAEE,cAAA,CAEF,YAAA,CAAA,CASR,0BAEE,iBACF,YAAA,CACA,mCAAA,CACA,sBAAA,CACA,wBACC,YAAA,CACA,eAAA,CAED,wBACE,eAAA,CAAA",file:"header.scss",sourcesContent:["$p-green:#3ec6bc;\n$p-green2:#48A9C0;\n$p-yellow:#FFF200;\n$p-orange:#F6BC18;\n$p-orange2:#ff8246;\n$red:#F91D0B;\n$gray:#F7F7F7;\n$shadow1:0px 3px 12px 0px rgba(0, 0, 0, 0.16);\n$shadow2:1px 3px 12px 4px rgba(0, 0, 0, 0.26);\n\n\n\n.tns-outer{\n    .tns-controls,.tns-nav,button{\n        display:block;\n    }\n}\n\n",'@import "variables";\n.header-row {\n\n  overflow: hidden;\n  width: 100vw;\n  background-color: $p-green;\n  // position: fixed;\n  top: 0%;\n  z-index: 100;\n  transition: top 0.3s;\n\n  .row {\n    padding-top: 12px;\n    height: 100%;\n    display: grid;\n    grid-template-columns: 2fr 1fr;\n    grid-template-rows: 1fr 40px;\n\n    .col-1 {\n      grid-row: 1/2;\n      grid-column: 1/2;\n      position: relative;\n      z-index: 10;\n    }\n    .col-2 {\n        grid-row: 2/3;\n      grid-column: 1/3;\n    }\n    .col-3 {\n      grid-row: 1/2;\n      grid-column: 2/3;\n    }\n\n    .Logo {\n      position: absolute;\n      width: 425px;\n      top: 47px;\n      padding-left: 1rem;\n    }\n    .main-menu {\n\n      width: 100%;\n      position: relative;\n      text-align: center;\n      padding-top: 1rem;\n      a {\n        color: white;\n        font-size: 14px;\n        /* font-size: 20px;*/\n        text-decoration: none;\n        /* padding: 1rem;*/\n        padding: 9px;\n        \n\n        text-transform: uppercase;\n      }\n    }\n\n    .login-div {\n      padding-right: 1rem;\n\n      height: 100px;\n      width: 118px;\n\n      margin-left: auto;\n      text-align: center;\n    }\n\n    img {\n    width: 28.54px;\n      position: relative;\n      z-index: 1000;\n      right: -52px;\n      top: 17px;\n    }\n\n    .login-div span {\n      position: relative;\n\n      top: -2px;\n      right: -14px;\n      z-index: 101;\n      color: $p-green;\n      font-size: 1rem;\n    }\n\n    svg#loginsvg {\n        position: relative;\n    transform: scaleX(0.456) scaleY(0.4);\n    right: 178px;\n    top: -96px;\n    z-index: 100;\n  }}\n}\n\n@media (min-width: 700px) {\n  .header-row {\n    .row {\n    \n      \n      .Logo {\n        top: 22px;\n        width: 585px;\n        padding-left: 5%;\n      }\n      .login-div {\n        width: 200px;\n        img {\n          right: 0;\n          top: -10px;\n          filter: opacity(.7);\n          transform: scale(.8);\n        }\n      }\n\n      .login-div span {\n        left: -6px;\n    top: -15px;\n    font-size: 1rem;\n  \n    \n      }\n\n      svg#loginsvg {\n        transform: scaleX(0.4) scaleY(0.35);\n        right: 185px;\n        top: -112px;\n      }\n\n      .main-menu {\n        position: relative;\n        z-index: 100;\n     padding-top: 3rem;\n        a {\n        \n          font-size: 20px;\n       \n        padding: 3rem;\n  \n    \n        }\n      }\n    }\n  }\n}\n\n@media (min-width: 1098px) {\n  .header-row {\n  .row{\npadding: 1rem;\ngrid-template-columns: 1fr 577px 1fr;\ngrid-template-rows: 1fr;\n.col-2 {\n grid-row: 1/2;\n grid-column: 2/3;\n}\n.col-3 {\n  grid-column: 3/3;\n }\n\n\n}\n\n}}']}]),n.exports=A},function(n,A,o){var e=o(0),t=o(19);"string"==typeof(t=t.__esModule?t.default:t)&&(t=[[n.i,t,""]]);var r={insert:"head",singleton:!1};e(t,r);n.exports=t.locals||{}},function(n,A,o){(A=o(1)(!0)).push([n.i,"section.one #flor-1{position:fixed;top:-22%;left:38%;filter:opacity(0.6);transform:scale(0.8);transition:top 1s}section.one .flor-div{width:50vw;position:fixed;width:50vw;top:-10%;left:162px}@media(min-width: 410px){section.one #flor-1{top:-22%}}@media(min-width: 450px){section.one #flor-1{top:-30%}}@media(min-width: 550px){section.one #flor-1{top:-25%}}@media(min-width: 600px){section.one #flor-1{top:-29%}}@media(min-width: 900px){section.one #flor-1{top:-70%;right:0;filter:opacity(0.6)}}@media(min-width: 1200px){section.one #flor-1{top:-76%;right:0;filter:opacity(0.6)}}","",{version:3,sources:["/Users/jab_macmini/Desktop/almanew/test-webpack/app/assets/scss/flor1.scss"],names:[],mappings:"AAEE,oBACE,cAAA,CACA,QAAA,CACA,QAAA,CACA,mBAAA,CACA,oBAAA,CACA,iBAAA,CAGA,sBAEE,UAAA,CACA,cAAA,CACA,UAAA,CACA,QAAA,CACA,UAAA,CAGN,yBAEE,oBACE,QAAA,CAAA,CAIJ,yBAEE,oBACE,QAAA,CAAA,CAIJ,yBAEE,oBACE,QAAA,CAAA,CAMJ,yBAEI,oBACE,QAAA,CAAA,CAIN,yBAKI,oBAEE,QAAA,CACA,OAAA,CACA,mBAAA,CAAA,CAKN,0BAKM,oBAEE,QAAA,CACA,OAAA,CACA,mBAAA,CAAA",file:"flor1.scss",sourcesContent:["\nsection.one {\n  #flor-1 { \n    position: fixed;\n    top: -22%;\n    left: 38%;\n    filter: opacity(0.6);\n    transform: scale(.8);\n    transition: top 1s;\n  }\n \n    .flor-div {\n   \n      width: 50vw;\n      position: fixed;\n      width: 50vw;\n      top: -10%;\n      left:162px;\n    }\n}\n@media (min-width: 410px) {\nsection.one {\n  #flor-1 {\n    top: -22%;\n \n  }\n}}\n@media (min-width: 450px) {\nsection.one {\n  #flor-1 {\n    top: -30%;\n \n  }\n}}\n@media (min-width:550px) {\nsection.one {\n  #flor-1 {\n    top: -25%;\n \n  }\n}}\n\n\n@media (min-width:600px) {\n  section.one {\n    #flor-1 {\n      top: -29%;\n   \n    }\n  }}\n@media (min-width: 900px) {\n  section.one {\n    .flor-div {\n  \n    }\n    #flor-1 {\n    \n      top: -70%;\n      right: 0;\n      filter: opacity(0.6);\n    }\n  }\n  }\n  \n@media (min-width: 1200px) {\n    section.one {\n      .flor-div {\n    \n      }\n      #flor-1 {\n      \n        top: -76%;\n        right: 0;\n        filter: opacity(0.6);\n      }\n    }\n  }\n  \n"]}]),n.exports=A},function(n,A,o){var e=o(0),t=o(21);"string"==typeof(t=t.__esModule?t.default:t)&&(t=[[n.i,t,""]]);var r={insert:"head",singleton:!1};e(t,r);n.exports=t.locals||{}},function(n,A,o){(A=o(1)(!0)).push([n.i,'.tns-outer .tns-controls,.tns-outer .tns-nav,.tns-outer button{display:block}section.alma{position:relative;z-index:-1;overflow:hidden;background-color:#f7c63a;color:#fff;margin-top:-33px}section.alma .row [class*=col]{align-items:center}section.alma .row .col-1{order:1;flex-basis:50%;padding-top:10rem;text-align:center}section.alma .row .col-2{order:2;flex-basis:40%;padding:5%;text-align:right}section.alma .row img{width:59%}h2{text-shadow:2px 2px 5px rgba(63,68,68,.3);font-size:28px;font-family:"Raleway",sans-serif;font-weight:100}p{font-size:16px}@media(min-width: 700px){section.alma .row{align-items:center}section.alma h2{text-shadow:2px 2px 5px rgba(63,68,68,.3);font-family:"Raleway",sans-serif;font-size:29px}section.alma p{font-size:38px;max-width:58.1rem;margin-left:auto;word-spacing:2px;word-break:keep-all}}',"",{version:3,sources:["/Users/jab_macmini/Desktop/almanew/test-webpack/app/assets/scss/_variables.scss","/Users/jab_macmini/Desktop/almanew/test-webpack/app/assets/scss/seccion_alma.scss"],names:[],mappings:"AAaI,+DACI,aAAA,CCZR,aACE,iBAAA,CACA,UAAA,CACA,eAAA,CAEA,wBAAA,CAGA,UAAA,CACA,gBAAA,CAGE,+BACE,kBAAA,CAEF,yBACE,OAAA,CACA,cAAA,CACA,iBAAA,CACA,iBAAA,CAEF,yBACE,OAAA,CACA,cAAA,CACA,UAAA,CACA,gBAAA,CAGF,sBACE,SAAA,CAKN,GACE,yCAAA,CACA,cAAA,CACA,gCAAA,CACA,eAAA,CAEF,EACE,cAAA,CAGF,yBAEI,kBACE,kBAAA,CAGF,gBACE,yCAAA,CAEA,gCAAA,CACA,cAAA,CAEF,eACE,cAAA,CACA,iBAAA,CACA,gBAAA,CACA,gBAAA,CACA,mBAAA,CAAA",file:"seccion_alma.scss",sourcesContent:["$p-green:#3ec6bc;\n$p-green2:#48A9C0;\n$p-yellow:#FFF200;\n$p-orange:#F6BC18;\n$p-orange2:#ff8246;\n$red:#F91D0B;\n$gray:#F7F7F7;\n$shadow1:0px 3px 12px 0px rgba(0, 0, 0, 0.16);\n$shadow2:1px 3px 12px 4px rgba(0, 0, 0, 0.26);\n\n\n\n.tns-outer{\n    .tns-controls,.tns-nav,button{\n        display:block;\n    }\n}\n\n",'@import "variables";\n\nsection.alma {\n  position: relative;\n  z-index: -1;\n  overflow: hidden;\n\n  background-color: lighten($p-orange, 7%);\n  // background-image: linear-gradient(450deg, rgba(236, 224, 217, 0.205) 0%, rgba(255, 255, 255, 0.233) 100%);\n\n  color: white;\n  margin-top: -33px;\n\n  .row {\n    [class*="col"] {\n      align-items: center;\n    }\n    .col-1 {\n      order: 1;\n      flex-basis: 50%;\n      padding-top: 10rem;\n      text-align: center;\n    }\n    .col-2 {\n      order: 2;\n      flex-basis: 40%;\n      padding: 5%;\n      text-align: right;\n    }\n\n    img {\n      width: 59%;\n    }\n  }\n}\n\nh2 {\n  text-shadow: 2px 2px 5px rgba(63, 68, 68, 0.3);\n  font-size: 28px;\n  font-family: "Raleway", sans-serif;\n  font-weight: 100;\n}\np {\n  font-size: 16px;\n}\n\n@media (min-width: 700px) {\n  section.alma {\n    .row {\n      align-items: center;\n    }\n\n    h2 {\n      text-shadow: 2px 2px 5px rgba(63, 68, 68, 0.3);\n\n      font-family: "Raleway", sans-serif;\n      font-size: 29px;\n    }\n    p {\n      font-size: 38px;\n      max-width: 58.1rem;\n      margin-left: auto;\n      word-spacing: 2px;\n      word-break: keep-all;\n    }\n  }\n}\n']}]),n.exports=A}]);