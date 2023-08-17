"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[4064],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,y=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?i.createElement(y,p(p({ref:t},c),{},{components:n})):i.createElement(y,p({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:r,p[1]=a;for(var s=2;s<o;s++)p[s]=n[s];return i.createElement.apply(null,p)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91425:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>s});var i=n(87462),r=(n(67294),n(3905));const o={},p="Compiling Typescript for Deployment",a={unversionedId:"guides/compiling-typescript-for-deployment",id:"version-0.31.0/guides/compiling-typescript-for-deployment",title:"Compiling Typescript for Deployment",description:"Platformatic Service provides automatic TypeScript compilation during the startup",source:"@site/versioned_docs/version-0.31.0/guides/compiling-typescript-for-deployment.md",sourceDirName:"guides",slug:"/guides/compiling-typescript-for-deployment",permalink:"/docs/0.31.0/guides/compiling-typescript-for-deployment",draft:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-0.31.0/guides/compiling-typescript-for-deployment.md",tags:[],version:"0.31.0",frontMatter:{}},l={},s=[{value:"Setup",id:"setup",level:2},{value:"Compiling for deployment",id:"compiling-for-deployment",level:2},{value:"Usage with Runtime",id:"usage-with-runtime",level:2},{value:"Avoid shipping TypeScript sources",id:"avoid-shipping-typescript-sources",level:2}],c={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"compiling-typescript-for-deployment"},"Compiling Typescript for Deployment"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/0.31.0/reference/service/introduction"},"Platformatic Service")," provides automatic TypeScript compilation during the startup\nof your Node.js server. While this provides an amazing developer experience, in production it adds additional\nstart time and it requires more resources. In this guide, we show how to compile your TypeScript\nsource files before shipping to a server."),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"The following is supported by all Platformatic applications, as they are all based on the same ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.31.0/reference/service/plugin"},"plugin system"),".\nIf you have generated your application using ",(0,r.kt)("inlineCode",{parentName:"p"},"npx create-platformatic@latest"),", you will have a similar section in your config file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  ...\n  "plugins": {\n    "paths": [{\n      "path": "plugins",\n      "encapsulate": false\n    }, "routes"],\n    "typescript": "{PLT_TYPESCRIPT}"\n  }\n}\n')),(0,r.kt)("p",null,"Note that the ",(0,r.kt)("inlineCode",{parentName:"p"},"{PLT_TYPESCRIPT}")," will be automatically replaced with the ",(0,r.kt)("inlineCode",{parentName:"p"},"PLT_TYPESCRIPT")," environment variable, that is configured in your\n",(0,r.kt)("inlineCode",{parentName:"p"},".env")," (and ",(0,r.kt)("inlineCode",{parentName:"p"},".env.sample"),") file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"PLT_TYPESCRIPT=true\n")),(0,r.kt)("p",null,"Older Platformatic applications might not have the same layout, if so you can update your settings to match (after updating your dependencies)."),(0,r.kt)("h2",{id:"compiling-for-deployment"},"Compiling for deployment"),(0,r.kt)("p",null,"Compiling for deployment is then as easy as running ",(0,r.kt)("inlineCode",{parentName:"p"},"plt service compile")," in that same folder.\nRememeber to set ",(0,r.kt)("inlineCode",{parentName:"p"},"PLT_TYPESCRIPT=false")," in your environment variables in the deployed environments."),(0,r.kt)("h2",{id:"usage-with-runtime"},"Usage with Runtime"),(0,r.kt)("p",null,"If you are building a ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.31.0/reference/runtime/introduction"},"Runtime"),"-based application, you will need\nto compile every service independently or use the ",(0,r.kt)("inlineCode",{parentName:"p"},"plt runtime compile")," command."),(0,r.kt)("h2",{id:"avoid-shipping-typescript-sources"},"Avoid shipping TypeScript sources"),(0,r.kt)("p",null,"If you want to avoid shipping the TypeScript sources you need to configure Platformatic with the location\nwhere your files have been built by adding an ",(0,r.kt)("inlineCode",{parentName:"p"},"outDir")," option:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  ...\n  "plugins": {\n    "paths": [{\n      "path": "plugins",\n      "encapsulate": false\n    }, "routes"],\n    "typescript": {\n      "enabled": "{PLT_TYPESCRIPT}",\n      "outDir": "dist"\n    }\n  }\n}\n')),(0,r.kt)("p",null,"This is not necessary if you include ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," together with the compiled code."))}m.isMDXComponent=!0}}]);