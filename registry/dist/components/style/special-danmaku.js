!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["style/special-danmaku"]=e():t["style/special-danmaku"]=e()}(globalThis,(()=>(()=>{var t,e,i={667:(t,e,i)=>{var n=i(355)((function(t){return t[1]}));n.push([t.id,"body.disable-highlight-danmaku-style .bili-dm.bili-high,\nbody.disable-highlight-danmaku-style .b-danmaku-high {\n  display: block !important;\n  padding: 0 !important;\n  line-height: 1.125 !important;\n}\nbody.disable-highlight-danmaku-style .bili-dm.bili-high .bili-high-icon,\nbody.disable-highlight-danmaku-style .bili-dm.bili-high .b-danmaku-high-icon,\nbody.disable-highlight-danmaku-style .b-danmaku-high .bili-high-icon,\nbody.disable-highlight-danmaku-style .b-danmaku-high .b-danmaku-high-icon {\n  display: none !important;\n}\nbody.disable-highlight-danmaku-style .bili-dm.bili-high .bili-high-text,\nbody.disable-highlight-danmaku-style .bili-dm.bili-high .b-danmaku-high-text,\nbody.disable-highlight-danmaku-style .b-danmaku-high .bili-high-text,\nbody.disable-highlight-danmaku-style .b-danmaku-high .b-danmaku-high-text {\n  margin: 0 !important;\n  text-shadow: inherit;\n}\n\nbody.disable-up-danmaku-style .bili-dm.bili-up,\nbody.disable-up-danmaku-style .b-danmaku-up {\n  padding: 0 !important;\n  line-height: 1.125 !important;\n  background-color: transparent !important;\n  border-radius: 0 !important;\n}\nbody.disable-up-danmaku-style .bili-dm.bili-up .bili-up-tip,\nbody.disable-up-danmaku-style .bili-dm.bili-up .b-danmaku-up-tip,\nbody.disable-up-danmaku-style .b-danmaku-up .bili-up-tip,\nbody.disable-up-danmaku-style .b-danmaku-up .b-danmaku-up-tip {\n  display: none !important;\n}",""]),t.exports=n},355:t=>{"use strict";
// eslint-disable-next-line func-names
t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var i=t(e);return e[2]?"@media ".concat(e[2]," {").concat(i,"}"):i})).join("")},
// eslint-disable-next-line func-names
e.i=function(t,i,n){"string"==typeof t&&(
// eslint-disable-next-line no-param-reassign
t=[[null,t,""]]);var a={};if(n)for(var o=0;o<this.length;o++){
// eslint-disable-next-line prefer-destructuring
var d=this[o][0];null!=d&&(a[d]=!0)}for(var l=0;l<t.length;l++){var r=[].concat(t[l]);n&&a[r[0]]||(i&&(r[2]?r[2]="".concat(i," and ").concat(r[2]):r[2]=i),e.push(r))}},e}},383:(t,e,i)=>{var n=i(667);n&&n.__esModule&&(n=n.default),t.exports="string"==typeof n?n:n.toString()}},n={};function a(t){var e=n[t];if(void 0!==e)return e.exports;var o=n[t]={id:t,exports:{}};return i[t](o,o.exports,a),o.exports}e=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__,a.t=function(i,n){if(1&n&&(i=this(i)),8&n)return i;if("object"==typeof i&&i){if(4&n&&i.__esModule)return i;if(16&n&&"function"==typeof i.then)return i}var o=Object.create(null);a.r(o);var d={};t=t||[null,e({}),e([]),e(e)];for(var l=2&n&&i;"object"==typeof l&&!~t.indexOf(l);l=e(l))Object.getOwnPropertyNames(l).forEach((t=>d[t]=()=>i[t]));return d.default=()=>i,a.d(o,d),o},a.d=(t,e)=>{for(var i in e)a.o(e,i)&&!a.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),a.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var o={};return(()=>{"use strict";a.d(o,{component:()=>l});const t=coreApis.componentApis.define,e=coreApis.utils.urls,i=coreApis.settings,n=(0,t.defineOptionsMetadata)({highlight:{displayName:"禁用高赞弹幕",defaultValue:!0},up:{displayName:"禁用UP主弹幕",defaultValue:!0}}),d="disableSpecialDanmaku",l=(0,t.defineComponentMetadata)({name:d,entry:t=>{let{metadata:e,settings:n}=t;Object.keys(n.options).forEach((t=>{(0,i.addComponentListener)(`${e.name}.${t}`,(e=>{document.body.classList.toggle(`disable-${t}-danmaku-style`,e)}),!0)}))},displayName:"禁用特殊弹幕样式",tags:[componentsTags.style],instantStyles:[{name:d,style:()=>Promise.resolve().then(a.t.bind(a,383,23))}],urlInclude:e.playerUrls,description:{"zh-CN":"移除高赞弹幕或 UP 主弹幕的特殊样式, 弹幕内容不会移除."},options:n,commitHash:"1758e7becce520b419864a9460b73ae0019beee4",coreVersion:"2.6.3"})})(),o=o.component})()));