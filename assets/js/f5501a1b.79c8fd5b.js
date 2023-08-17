"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[77507],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(n),d=i,m=f["".concat(p,".").concat(d)]||f[d]||u[d]||o;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[f]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},64926:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const o={},a="Ignoring entities and fields",l={unversionedId:"reference/sql-openapi/ignore",id:"reference/sql-openapi/ignore",title:"Ignoring entities and fields",description:"@platformatic/sql-openapi allows to selectively ignore entities and fields.",source:"@site/docs/reference/sql-openapi/ignore.md",sourceDirName:"reference/sql-openapi",slug:"/reference/sql-openapi/ignore",permalink:"/docs/next/reference/sql-openapi/ignore",draft:!1,editUrl:"https://github.com/platformatic/platformatic/edit/main/docs/reference/sql-openapi/ignore.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"API",permalink:"/docs/next/reference/sql-openapi/api"},next:{title:"Introduction to the GraphQL API",permalink:"/docs/next/reference/sql-graphql/introduction"}},p={},c=[],s={toc:c},f="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(f,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ignoring-entities-and-fields"},"Ignoring entities and fields"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@platformatic/sql-openapi")," allows to selectively ignore entities and fields."),(0,i.kt)("p",null,"To ignore entites:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"app.register(require('@platformatic/sql-openapi'), {\n  ignore: {\n    categories: true\n  }\n})\n")),(0,i.kt)("p",null,"To ignore individual fields:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"app.register(require('@platformatic/sql-openapi'), {\n  ignore: {\n    categories: {\n      name: true\n    }\n  }\n})\n")))}u.isMDXComponent=!0}}]);