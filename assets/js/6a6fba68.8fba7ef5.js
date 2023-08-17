"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[98512],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),f=o,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||i;return n?r.createElement(d,a(a({ref:t},s),{},{components:n})):r.createElement(d,a({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},16123:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={},a="Programmatic API",c={unversionedId:"reference/client/programmatic",id:"version-0.34.1/reference/client/programmatic",title:"Programmatic API",description:"It is possible to use the Platformatic client without the generator.",source:"@site/versioned_docs/version-0.34.1/reference/client/programmatic.md",sourceDirName:"reference/client",slug:"/reference/client/programmatic",permalink:"/docs/0.34.1/reference/client/programmatic",draft:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-0.34.1/reference/client/programmatic.md",tags:[],version:"0.34.1",frontMatter:{},sidebar:"docs",previous:{title:"Platformatic Client",permalink:"/docs/0.34.1/reference/client/introduction"},next:{title:"Introduction to the REST API",permalink:"/docs/0.34.1/reference/sql-openapi/introduction"}},l={},p=[{value:"OpenAPI Client",id:"openapi-client",level:2},{value:"GraphQL Client",id:"graphql-client",level:2}],s={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"programmatic-api"},"Programmatic API"),(0,o.kt)("p",null,"It is possible to use the Platformatic client without the generator."),(0,o.kt)("h2",{id:"openapi-client"},"OpenAPI Client"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { buildOpenAPIClient } from '@platformatic/client'\n\nconst client = await buildOpenAPIClient({\n  url: `https://yourapi.com/documentation/json`, \n  // path: 'path/to/openapi.json',\n  headers: {\n    'foo': 'bar'\n  }\n})\n\nconst res = await client.yourOperationName({ foo: 'bar' })\n\nconsole.log(res)\n")),(0,o.kt)("h2",{id:"graphql-client"},"GraphQL Client"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { buildGraphQLClient } from '@platformatic/client'\n\nconst client = await buildGraphQLClient({\n  url: `https://yourapi.com/graphql`,\n  headers: {\n    'foo': 'bar'\n  }\n})\n\nconst res = await client.graphql({\n  query: `\n    mutation createMovie($title: String!) {\n      saveMovie(input: {title: $title}) {\n        id\n        title\n      }\n    }\n  `,\n  variables: {\n    title: 'The Matrix'\n  }\n})\n\nconsole.log(res)\n")))}m.isMDXComponent=!0}}]);