"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[8641],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,m=u["".concat(c,".").concat(d)]||u[d]||f[d]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},17933:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={},i="Introduction to the REST API",p={unversionedId:"reference/sql-openapi/introduction",id:"reference/sql-openapi/introduction",title:"Introduction to the REST API",description:"The Platformatic DB OpenAPI plugin automatically starts a REST API server (powered by Fastify) that provides CRUD (Create, Read, Update, Delete) functionality for each entity.",source:"@site/docs/reference/sql-openapi/introduction.md",sourceDirName:"reference/sql-openapi",slug:"/reference/sql-openapi/introduction",permalink:"/docs/next/reference/sql-openapi/introduction",draft:!1,editUrl:"https://github.com/platformatic/platformatic/edit/main/docs/reference/sql-openapi/introduction.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Programmatic API",permalink:"/docs/next/reference/client/programmatic"},next:{title:"API",permalink:"/docs/next/reference/sql-openapi/api"}},c={},l=[{value:"Configuration",id:"configuration",level:2}],s={toc:l},u="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction-to-the-rest-api"},"Introduction to the REST API"),(0,a.kt)("p",null,"The Platformatic DB OpenAPI plugin automatically starts a REST API server (powered by ",(0,a.kt)("a",{parentName:"p",href:"https://fastify.io"},"Fastify"),") that provides CRUD (",(0,a.kt)("strong",{parentName:"p"},"C"),"reate, ",(0,a.kt)("strong",{parentName:"p"},"R"),"ead, ",(0,a.kt)("strong",{parentName:"p"},"U"),"pdate, ",(0,a.kt)("strong",{parentName:"p"},"D"),"elete) functionality for each entity."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"In the config file, under the ",(0,a.kt)("inlineCode",{parentName:"p"},'"db"')," section, the OpenAPI server is enabled by default. Although you can disable it setting the property ",(0,a.kt)("inlineCode",{parentName:"p"},"openapi")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  ...\n  "db": {\n    "openapi": false\n  }\n}\n')),(0,a.kt)("p",null,"As Platformatic DB uses ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify-swagger"},(0,a.kt)("inlineCode",{parentName:"a"},"fastify-swagger"))," under the hood, the ",(0,a.kt)("inlineCode",{parentName:"p"},'"openapi"')," property can be an object that follows the ",(0,a.kt)("a",{parentName:"p",href:"https://swagger.io/specification/#oasObject"},"OpenAPI Specification Object")," format."),(0,a.kt)("p",null,"This allows you to extend the output of the Swagger UI documentation."))}f.isMDXComponent=!0}}]);