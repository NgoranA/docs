"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[97852],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(r),f=a,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(d,i(i({ref:t},l),{},{components:r})):n.createElement(d,i({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[m]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},84244:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={},i="Programmatic API",c={unversionedId:"reference/runtime/programmatic",id:"version-0.30.1/reference/runtime/programmatic",title:"Programmatic API",description:"In many cases it's useful to start Platformatic Runtime using an API instead of",source:"@site/versioned_docs/version-0.30.1/reference/runtime/programmatic.md",sourceDirName:"reference/runtime",slug:"/reference/runtime/programmatic",permalink:"/docs/0.30.1/reference/runtime/programmatic",draft:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-0.30.1/reference/runtime/programmatic.md",tags:[],version:"0.30.1",frontMatter:{},sidebar:"docs",previous:{title:"Platformatic Runtime",permalink:"/docs/0.30.1/reference/runtime/introduction"},next:{title:"Platformatic Service",permalink:"/docs/0.30.1/reference/service/introduction"}},s={},p=[],l={toc:p},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"programmatic-api"},"Programmatic API"),(0,a.kt)("p",null,"In many cases it's useful to start Platformatic Runtime using an API instead of\ncommand line, e.g. in tests we want to start and stop our server."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"buildServer")," function allows that:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { buildServer } from '@platformatic/runtime'\n\nconst app = await buildServer('path/to/platformatic.runtime.json')\nconst entrypointUrl = await app.start()\n\n// Make a request to the entrypoint.\nconst res = await fetch(entrypointUrl)\nconsole.log(await res.json())\n\n// Do other interesting things.\n\nawait app.close()\n")),(0,a.kt)("p",null,"It is also possible to customize the configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { buildServer } from '@platformatic/runtime'\n\nconst app = await buildServer({\n  $schema: 'https://platformatic.dev/schemas/v0.26.0/runtime',\n  entrypoint: 'entrypointApp',\n  autoload: {\n    path: './packages',\n    exclude: ['docs']\n  }\n})\n\nconst entrypointUrl = await app.start()\n\n// Make a request to the entrypoint.\nconst res = await fetch(entrypointUrl)\nconsole.log(await res.json())\n\n// Do other interesting things.\n\nawait app.close()\n")))}u.isMDXComponent=!0}}]);