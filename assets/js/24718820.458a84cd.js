"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[31425],{3905:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>m});var t=r(67294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=t.createContext({}),s=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},c=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(r),d=i,m=f["".concat(p,".").concat(d)]||f[d]||u[d]||o;return r?t.createElement(m,a(a({ref:n},c),{},{components:r})):t.createElement(m,a({ref:n},c))}));function m(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[f]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=r[s];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85789:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var t=r(87462),i=(r(67294),r(3905));const o={},a="Ignoring entities and fields",l={unversionedId:"reference/sql-openapi/ignore",id:"version-0.31.0/reference/sql-openapi/ignore",title:"Ignoring entities and fields",description:"@platformatic/sql-openapi allows to selectively ignore entities and fields.",source:"@site/versioned_docs/version-0.31.0/reference/sql-openapi/ignore.md",sourceDirName:"reference/sql-openapi",slug:"/reference/sql-openapi/ignore",permalink:"/docs/0.31.0/reference/sql-openapi/ignore",draft:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-0.31.0/reference/sql-openapi/ignore.md",tags:[],version:"0.31.0",frontMatter:{},sidebar:"docs",previous:{title:"API",permalink:"/docs/0.31.0/reference/sql-openapi/api"},next:{title:"Introduction to the GraphQL API",permalink:"/docs/0.31.0/reference/sql-graphql/introduction"}},p={},s=[],c={toc:s},f="wrapper";function u(e){let{components:n,...r}=e;return(0,i.kt)(f,(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ignoring-entities-and-fields"},"Ignoring entities and fields"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@platformatic/sql-openapi")," allows to selectively ignore entities and fields."),(0,i.kt)("p",null,"To ignore entites:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"app.register(require('@platformatic/sql-openapi'), {\n  ignore: {\n    categories: true\n  }\n})\n")),(0,i.kt)("p",null,"To ignore individual fields:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"app.register(require('@platformatic/sql-openapi'), {\n  ignore: {\n    categories: {\n      name: true\n    }\n  }\n})\n")))}u.isMDXComponent=!0}}]);