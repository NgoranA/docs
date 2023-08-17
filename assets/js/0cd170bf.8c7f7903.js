"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[9987],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),f=o,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||a;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},17381:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={},i="Platformatic Composer",c={unversionedId:"reference/composer/introduction",id:"version-0.35.1/reference/composer/introduction",title:"Platformatic Composer",description:"Platformatic Composer is an HTTP server that automatically aggregates multiple",source:"@site/versioned_docs/version-0.35.1/reference/composer/introduction.md",sourceDirName:"reference/composer",slug:"/reference/composer/introduction",permalink:"/docs/0.35.1/reference/composer/introduction",draft:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-0.35.1/reference/composer/introduction.md",tags:[],version:"0.35.1",frontMatter:{},sidebar:"docs",previous:{title:"Platformatic CLI",permalink:"/docs/0.35.1/reference/cli"},next:{title:"Platformatic Composer",permalink:"/docs/0.35.1/reference/composer/introduction"}},l={},p=[{value:"Features",id:"features",level:2},{value:"Public beta",id:"public-beta",level:2},{value:"Standalone usage",id:"standalone-usage",level:2},{value:"Example configuration file",id:"example-configuration-file",level:2}],s={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"platformatic-composer"},"Platformatic Composer"),(0,o.kt)("p",null,"Platformatic Composer is an HTTP server that automatically aggregates multiple\nservices APIs into a single API."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Platformatic Composer is currently in ",(0,o.kt)("a",{parentName:"p",href:"#public-beta"},"public beta"),".")),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Command-line interface: ",(0,o.kt)("a",{parentName:"li",href:"/docs/0.35.1/reference/cli#composer"},(0,o.kt)("inlineCode",{parentName:"a"},"platformatic composer"))),(0,o.kt)("li",{parentName:"ul"},"Automatic ",(0,o.kt)("a",{parentName:"li",href:"/docs/0.35.1/reference/composer/configuration#composer"},"OpenApi composition")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/0.35.1/reference/composer/configuration#composer"},"Reverse proxy")," for composed services"),(0,o.kt)("li",{parentName:"ul"},"Add custom functionality in a ",(0,o.kt)("a",{parentName:"li",href:"/docs/0.35.1/reference/composer/plugin"},"Fastify plugin")),(0,o.kt)("li",{parentName:"ul"},"Write plugins in JavaScript or ",(0,o.kt)("a",{parentName:"li",href:"/docs/0.35.1/reference/cli#compile"},"TypeScript"))),(0,o.kt)("h2",{id:"public-beta"},"Public beta"),(0,o.kt)("p",null,"Platformatic Composer is in public beta. You can use it in production, but it's quite\nlikely that you'll encounter significant bugs."),(0,o.kt)("p",null,"If you run into a bug or have a suggestion for improvement, please\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/platformatic/platformatic/issues/new"},"raise an issue on GitHub"),"."),(0,o.kt)("h2",{id:"standalone-usage"},"Standalone usage"),(0,o.kt)("p",null,"If you're only interested in the features available in Platformatic Composer, you can replace ",(0,o.kt)("inlineCode",{parentName:"p"},"platformatic")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"@platformatic/composer")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"dependencies")," of your ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),", so that you'll import fewer deps."),(0,o.kt)("h2",{id:"example-configuration-file"},"Example configuration file"),(0,o.kt)("p",null,"The following configuration file can be used to start a new Platformatic\nComposer project. For more details on the configuration file, see the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/0.35.1/reference/composer/configuration"},"configuration documentation"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "https://platformatic.dev/schemas/v0.26.0/composer",\n  "server": {\n    "hostname": "127.0.0.1",\n    "port": 0,\n    "logger": {\n      "level": "info"\n    }\n  },\n  "composer": {\n    "services": [\n      {\n        "id": "auth-service",\n        "origin": "https://auth-service.com",\n        "openapi": {\n          "url": "/documentation/json",\n          "prefix": "auth"\n        }\n      },\n      {\n        "id": "payment-service",\n        "origin": "https://payment-service.com",\n        "openapi": {\n          "url": "/documentation/json"\n        }\n      }\n    ],\n    "refreshTimeout": 1000\n  },\n  "watch": true\n}\n')))}m.isMDXComponent=!0}}]);