"use strict";(self.webpackChunkashk_aesthetics=self.webpackChunkashk_aesthetics||[]).push([[996],{9662:function(t,n,e){var r=e(614),o=e(6330),i=TypeError;t.exports=function(t){if(r(t))return t;throw i(o(t)+" is not a function")}},1223:function(t,n,e){var r=e(5112),o=e(30),i=e(3070).f,u=r("unscopables"),c=Array.prototype;void 0===c[u]&&i(c,u,{configurable:!0,value:o(null)}),t.exports=function(t){c[u][t]=!0}},9670:function(t,n,e){var r=e(111),o=String,i=TypeError;t.exports=function(t){if(r(t))return t;throw i(o(t)+" is not an object")}},1318:function(t,n,e){var r=e(5656),o=e(1400),i=e(6244),u=function(t){return function(n,e,u){var c,a=r(n),f=i(a),l=o(u,f);if(t&&e!=e){for(;f>l;)if((c=a[l++])!=c)return!0}else for(;f>l;l++)if((t||l in a)&&a[l]===e)return t||l||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},4326:function(t,n,e){var r=e(1702),o=r({}.toString),i=r("".slice);t.exports=function(t){return i(o(t),8,-1)}},3072:function(t,n,e){var r=e(7854),o=Object.defineProperty;t.exports=function(t,n){try{o(r,t,{value:n,configurable:!0,writable:!0})}catch(e){r[t]=n}return n}},9781:function(t,n,e){var r=e(7293);t.exports=!r((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(t){var n="object"==typeof document&&document.all,e=void 0===n&&void 0!==n;t.exports={all:n,IS_HTMLDDA:e}},317:function(t,n,e){var r=e(7854),o=e(111),i=r.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},8113:function(t){t.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7392:function(t,n,e){var r,o,i=e(7854),u=e(8113),c=i.process,a=i.Deno,f=c&&c.versions||a&&a.version,l=f&&f.v8;l&&(o=(r=l.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&u&&(!(r=u.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=u.match(/Chrome\/(\d+)/))&&(o=+r[1]),t.exports=o},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},7293:function(t){t.exports=function(t){try{return!!t()}catch(n){return!0}}},4374:function(t,n,e){var r=e(7293);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:function(t,n,e){var r=e(4374),o=Function.prototype.call;t.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},1702:function(t,n,e){var r=e(4374),o=Function.prototype,i=o.call,u=r&&o.bind.bind(i,i);t.exports=r?u:function(t){return function(){return i.apply(t,arguments)}}},5005:function(t,n,e){var r=e(7854),o=e(614);t.exports=function(t,n){return arguments.length<2?(e=r[t],o(e)?e:void 0):r[t]&&r[t][n];var e}},8173:function(t,n,e){var r=e(9662),o=e(8554);t.exports=function(t,n){var e=t[n];return o(e)?void 0:r(e)}},7854:function(t,n,e){var r=function(t){return t&&t.Math===Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof e.g&&e.g)||function(){return this}()||this||Function("return this")()},2597:function(t,n,e){var r=e(1702),o=e(7908),i=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,n){return i(o(t),n)}},3501:function(t){t.exports={}},490:function(t,n,e){var r=e(5005);t.exports=r("document","documentElement")},4664:function(t,n,e){var r=e(9781),o=e(7293),i=e(317);t.exports=!r&&!o((function(){return 7!==Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,n,e){var r=e(1702),o=e(7293),i=e(4326),u=Object,c=r("".split);t.exports=o((function(){return!u("z").propertyIsEnumerable(0)}))?function(t){return"String"===i(t)?c(t,""):u(t)}:u},614:function(t,n,e){var r=e(4154),o=r.all;t.exports=r.IS_HTMLDDA?function(t){return"function"==typeof t||t===o}:function(t){return"function"==typeof t}},8554:function(t){t.exports=function(t){return null==t}},111:function(t,n,e){var r=e(614),o=e(4154),i=o.all;t.exports=o.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:r(t)||t===i}:function(t){return"object"==typeof t?null!==t:r(t)}},1913:function(t){t.exports=!1},2190:function(t,n,e){var r=e(5005),o=e(614),i=e(7976),u=e(3307),c=Object;t.exports=u?function(t){return"symbol"==typeof t}:function(t){var n=r("Symbol");return o(n)&&i(n.prototype,c(t))}},6244:function(t,n,e){var r=e(7466);t.exports=function(t){return r(t.length)}},4758:function(t){var n=Math.ceil,e=Math.floor;t.exports=Math.trunc||function(t){var r=+t;return(r>0?e:n)(r)}},30:function(t,n,e){var r,o=e(9670),i=e(6048),u=e(748),c=e(3501),a=e(490),f=e(317),l=e(6200),s="prototype",p="script",v=l("IE_PROTO"),d=function(){},m=function(t){return"<"+p+">"+t+"</"+p+">"},y=function(t){t.write(m("")),t.close();var n=t.parentWindow.Object;return t=null,n},b=function(){try{r=new ActiveXObject("htmlfile")}catch(i){}var t,n,e;b="undefined"!=typeof document?document.domain&&r?y(r):(n=f("iframe"),e="java"+p+":",n.style.display="none",a.appendChild(n),n.src=String(e),(t=n.contentWindow.document).open(),t.write(m("document.F=Object")),t.close(),t.F):y(r);for(var o=u.length;o--;)delete b[s][u[o]];return b()};c[v]=!0,t.exports=Object.create||function(t,n){var e;return null!==t?(d[s]=o(t),e=new d,d[s]=null,e[v]=t):e=b(),void 0===n?e:i.f(e,n)}},6048:function(t,n,e){var r=e(9781),o=e(3353),i=e(3070),u=e(9670),c=e(5656),a=e(1956);n.f=r&&!o?Object.defineProperties:function(t,n){u(t);for(var e,r=c(n),o=a(n),f=o.length,l=0;f>l;)i.f(t,e=o[l++],r[e]);return t}},3070:function(t,n,e){var r=e(9781),o=e(4664),i=e(3353),u=e(9670),c=e(4948),a=TypeError,f=Object.defineProperty,l=Object.getOwnPropertyDescriptor,s="enumerable",p="configurable",v="writable";n.f=r?i?function(t,n,e){if(u(t),n=c(n),u(e),"function"==typeof t&&"prototype"===n&&"value"in e&&v in e&&!e[v]){var r=l(t,n);r&&r[v]&&(t[n]=e.value,e={configurable:p in e?e[p]:r[p],enumerable:s in e?e[s]:r[s],writable:!1})}return f(t,n,e)}:f:function(t,n,e){if(u(t),n=c(n),u(e),o)try{return f(t,n,e)}catch(r){}if("get"in e||"set"in e)throw a("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},7976:function(t,n,e){var r=e(1702);t.exports=r({}.isPrototypeOf)},6324:function(t,n,e){var r=e(1702),o=e(2597),i=e(5656),u=e(1318).indexOf,c=e(3501),a=r([].push);t.exports=function(t,n){var e,r=i(t),f=0,l=[];for(e in r)!o(c,e)&&o(r,e)&&a(l,e);for(;n.length>f;)o(r,e=n[f++])&&(~u(l,e)||a(l,e));return l}},1956:function(t,n,e){var r=e(6324),o=e(748);t.exports=Object.keys||function(t){return r(t,o)}},2140:function(t,n,e){var r=e(6916),o=e(614),i=e(111),u=TypeError;t.exports=function(t,n){var e,c;if("string"===n&&o(e=t.toString)&&!i(c=r(e,t)))return c;if(o(e=t.valueOf)&&!i(c=r(e,t)))return c;if("string"!==n&&o(e=t.toString)&&!i(c=r(e,t)))return c;throw u("Can't convert object to primitive value")}},4488:function(t,n,e){var r=e(8554),o=TypeError;t.exports=function(t){if(r(t))throw o("Can't call method on "+t);return t}},6200:function(t,n,e){var r=e(2309),o=e(9711),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:function(t,n,e){var r=e(7854),o=e(3072),i="__core-js_shared__",u=r[i]||o(i,{});t.exports=u},2309:function(t,n,e){var r=e(1913),o=e(5465);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.32.1",mode:r?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.32.1/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(t,n,e){var r=e(7392),o=e(7293),i=e(7854).String;t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol("symbol detection");return!i(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},1400:function(t,n,e){var r=e(9303),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},5656:function(t,n,e){var r=e(8361),o=e(4488);t.exports=function(t){return r(o(t))}},9303:function(t,n,e){var r=e(4758);t.exports=function(t){var n=+t;return n!=n||0===n?0:r(n)}},7466:function(t,n,e){var r=e(9303),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},7908:function(t,n,e){var r=e(4488),o=Object;t.exports=function(t){return o(r(t))}},7593:function(t,n,e){var r=e(6916),o=e(111),i=e(2190),u=e(8173),c=e(2140),a=e(5112),f=TypeError,l=a("toPrimitive");t.exports=function(t,n){if(!o(t)||i(t))return t;var e,a=u(t,l);if(a){if(void 0===n&&(n="default"),e=r(a,t,n),!o(e)||i(e))return e;throw f("Can't convert object to primitive value")}return void 0===n&&(n="number"),c(t,n)}},4948:function(t,n,e){var r=e(7593),o=e(2190);t.exports=function(t){var n=r(t,"string");return o(n)?n:n+""}},6330:function(t){var n=String;t.exports=function(t){try{return n(t)}catch(e){return"Object"}}},9711:function(t,n,e){var r=e(1702),o=0,i=Math.random(),u=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+u(++o+i,36)}},3307:function(t,n,e){var r=e(6293);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,n,e){var r=e(9781),o=e(7293);t.exports=r&&o((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5112:function(t,n,e){var r=e(7854),o=e(2309),i=e(2597),u=e(9711),c=e(6293),a=e(3307),f=r.Symbol,l=o("wks"),s=a?f.for||f:f&&f.withoutSetter||u;t.exports=function(t){return i(l,t)||(l[t]=c&&i(f,t)?f[t]:s("Symbol."+t)),l[t]}},9244:function(t,n,e){e(1223)("flatMap")},3008:function(t,n,e){e.d(n,{Z:function(){return u}});e(9244);var r=e(7294),o=e(902),i=e(6072);var u=t=>{let{meta:n,main:e,description:u}=t;return r.createElement("div",{className:"Introduction-module--Introduction--55917"},r.createElement("div",{className:"Introduction-module--Wrapper--e39ba"},n&&r.createElement(i.Z,null,r.createElement("h2",{className:"Introduction-module--Meta--e17d1"},n)),r.createElement(i.Z,null,r.createElement("h1",{className:"Introduction-module--Main--6dbfd"},e),r.createElement(o.Z,{color:"#B87332"})),u&&r.createElement(i.Z,{style:{width:"100%"}},r.createElement("p",{className:"Introduction-module--Description--2e8e0"},("string"==typeof u?u.split("\n"):u).flatMap(((t,n,e)=>e.length-1!==n?[t,r.createElement(r.Fragment,{key:n},r.createElement("br",null),r.createElement("br",null))]:t))))))}},5871:function(t,n,e){e.d(n,{Z:function(){return c}});var r=e(7294),o=e(902),i=e(747),u=e(6072);var c=t=>{let{children:n,id:e,background:c,description:a,linkTo:f,linkText:l}=t;return r.createElement("section",{className:"Section-module--Section--00ba2",style:{backgroundColor:c},id:e},n,a&&r.createElement(u.Z,null,r.createElement("p",{className:"Section-module--Description--307ac"},a)),f&&r.createElement(u.Z,null,r.createElement(o.Z,{color:a?"#B87332":"transparent"})),f&&r.createElement(u.Z,null,r.createElement(i.Z,{linkTo:f,centered:!0},l)))}},747:function(t,n,e){e.d(n,{Z:function(){return i}});var r=e(7294),o=e(1883);var i=t=>{let{children:n,linkTo:e,centered:i}=t;return r.createElement(o.Link,{className:"Button-module--Button--1826c",to:e,style:{margin:i?"0 auto":"0"}},n)}},902:function(t,n,e){e.d(n,{Z:function(){return o}});var r=e(7294);var o=t=>{let{color:n,style:e}=t;return r.createElement("div",{className:"Line-module--Line--59b7b",style:{backgroundColor:n,...e}})}},6072:function(t,n,e){e.d(n,{Z:function(){return o}});var r=e(7294);var o=t=>{let{style:n,className:e,children:o}=t;const{0:i,1:u}=(0,r.useState)(!1),c=(0,r.useState)(Math.random().toFixed(4).toString())[0];if("undefined"==typeof window)return;(0,r.useEffect)((()=>{a()}));const a=()=>{if(i)return;let t=15;window.screen.width>=720&&(t=20);let n=document.getElementById(c);n&&(100*(window.screen.height-n.getBoundingClientRect().top)/window.screen.height).toFixed(0)>=t&&u(!0)};return window.addEventListener("scroll",(()=>{a()})),r.createElement("div",{className:[i?"Animation-module--Animation--48715":"Animation-module--Hide--39d29",e].join(" "),style:n,id:c},o)}}}]);
//# sourceMappingURL=ef8f3dbdacf5eb5817b91fbe5a302d6c64a8d4e5-06db180531b6c9342ddc.js.map