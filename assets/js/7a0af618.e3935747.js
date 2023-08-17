"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[88459],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>d});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(t),g=o,d=f["".concat(p,".").concat(g)]||f[g]||u[g]||a;return t?n.createElement(d,i(i({ref:r},c),{},{components:t})):n.createElement(d,i({ref:r},c))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=g;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l[f]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},34541:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=t(87462),o=(t(67294),t(3905));const a={},i="Ignoring types and fields",l={unversionedId:"reference/sql-graphql/ignore",id:"version-0.23.2/reference/sql-graphql/ignore",title:"Ignoring types and fields",description:"@platformatic/sql-graphql allows to selectively ignore types and fields.",source:"@site/versioned_docs/version-0.23.2/reference/sql-graphql/ignore.md",sourceDirName:"reference/sql-graphql",slug:"/reference/sql-graphql/ignore",permalink:"/docs/0.23.2/reference/sql-graphql/ignore",draft:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-0.23.2/reference/sql-graphql/ignore.md",tags:[],version:"0.23.2",frontMatter:{},sidebar:"docs",previous:{title:"Many To Many Relationship",permalink:"/docs/0.23.2/reference/sql-graphql/many-to-many"},next:{title:"Introduction to the Platformatic DB Mapper",permalink:"/docs/0.23.2/reference/sql-mapper/introduction"}},p={},s=[],c={toc:s},f="wrapper";function u(e){let{components:r,...t}=e;return(0,o.kt)(f,(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ignoring-types-and-fields"},"Ignoring types and fields"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@platformatic/sql-graphql")," allows to selectively ignore types and fields."),(0,o.kt)("p",null,"To ignore types:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"app.register(require('@platformatic/sql-graphql'), {\n  ignore: {\n    categories: true\n  }\n})\n")),(0,o.kt)("p",null,"To ignore individual fields:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"app.register(require('@platformatic/sql-graphql'), {\n  ignore: {\n    categories: {\n      name: true\n    }\n  }\n})\n")))}u.isMDXComponent=!0}}]);