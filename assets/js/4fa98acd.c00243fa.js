"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[37919],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(r),f=o,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||a;return r?n.createElement(d,i(i({ref:t},l),{},{components:r})):n.createElement(d,i({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[m]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},46128:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={},i="Programmatic API",c={unversionedId:"reference/composer/programmatic",id:"version-0.26.0/reference/composer/programmatic",title:"Programmatic API",description:"In many cases it's useful to start Platformatic Composer using an API instead of",source:"@site/versioned_docs/version-0.26.0/reference/composer/programmatic.md",sourceDirName:"reference/composer",slug:"/reference/composer/programmatic",permalink:"/docs/0.26.0/reference/composer/programmatic",draft:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-0.26.0/reference/composer/programmatic.md",tags:[],version:"0.26.0",frontMatter:{}},s={},p=[],l={toc:p},m="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"programmatic-api"},"Programmatic API"),(0,o.kt)("p",null,"In many cases it's useful to start Platformatic Composer using an API instead of\ncommand line, e.g. in tests we want to start and stop our server."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"buildServer")," function allows that:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { buildServer } from '@platformatic/composer'\n\nconst app = await buildServer('path/to/platformatic.composer.json')\nawait app.start()\n\nconst res = await fetch(app.url)\nconsole.log(await res.json())\n\n// do something\n\nawait app.close()\n")),(0,o.kt)("p",null,"It is also possible to customize the configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { buildServer } from '@platformatic/composer'\n\nconst app = await buildServer({\n  server: {\n    hostname: '127.0.0.1',\n    port: 0\n  },\n  services: [\n    {\n      id: 'auth-service',\n      origin: 'https://auth-service.com',\n      openapi: {\n        url: '/documentation/json',\n        prefix: 'auth'\n      }\n    },\n    {\n      id: 'payment-service',\n      origin: 'https://payment-service.com',\n      openapi: {\n        file: './schemas/payment-service.json'\n      }\n    }\n  ]\n})\n\nawait app.start()\n\nconst res = await fetch(app.url)\nconsole.log(await res.json())\n\n// do something\n\nawait app.close()\n")))}u.isMDXComponent=!0}}]);