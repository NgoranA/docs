"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[54851],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),f=i,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},53032:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const o={},a="Subscription",s={unversionedId:"reference/sql-graphql/subscriptions",id:"version-0.25.0/reference/sql-graphql/subscriptions",title:"Subscription",description:"When the GraphQL plugin is loaded, some subscriptions are automatically adding to",source:"@site/versioned_docs/version-0.25.0/reference/sql-graphql/subscriptions.md",sourceDirName:"reference/sql-graphql",slug:"/reference/sql-graphql/subscriptions",permalink:"/docs/0.25.0/reference/sql-graphql/subscriptions",draft:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-0.25.0/reference/sql-graphql/subscriptions.md",tags:[],version:"0.25.0",frontMatter:{}},l={},c=[{value:"<code>[ENTITY]Saved</code>",id:"entitysaved",level:2},{value:"<code>[ENTITY]Deleted</code>",id:"entitydeleted",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"subscription"},"Subscription"),(0,i.kt)("p",null,"When the GraphQL plugin is loaded, some subscriptions are automatically adding to\nthe GraphQL schema if the ",(0,i.kt)("inlineCode",{parentName:"p"},"@platformatic/sql-events")," plugin has been previously registered."),(0,i.kt)("p",null,"It's possible to avoid creating the subscriptions for a given entity by adding the ",(0,i.kt)("inlineCode",{parentName:"p"},"subscriptionIgnore")," config,\nlike so: ",(0,i.kt)("inlineCode",{parentName:"p"},"subscriptionIgnore: ['page']"),"."),(0,i.kt)("h2",{id:"entitysaved"},(0,i.kt)("inlineCode",{parentName:"h2"},"[ENTITY]Saved")),(0,i.kt)("p",null,"Published whenever an entity is saved, e.g. when the mutation ",(0,i.kt)("inlineCode",{parentName:"p"},"insert[ENTITY]")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"save[ENTITY]")," are called."),(0,i.kt)("h2",{id:"entitydeleted"},(0,i.kt)("inlineCode",{parentName:"h2"},"[ENTITY]Deleted")),(0,i.kt)("p",null,"Published whenever an entity is deleted, e.g. when the mutation ",(0,i.kt)("inlineCode",{parentName:"p"},"delete[ENTITY]")," is called.."))}d.isMDXComponent=!0}}]);