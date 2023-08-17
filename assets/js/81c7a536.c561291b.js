"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[53587],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(r),f=a,h=u["".concat(l,".").concat(f)]||u[f]||d[f]||i;return r?n.createElement(h,o(o({ref:t},s),{},{components:r})):n.createElement(h,o({ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},90528:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={},o="Introduction to the GraphQL API",p={unversionedId:"reference/sql-graphql/introduction",id:"version-0.27.0/reference/sql-graphql/introduction",title:"Introduction to the GraphQL API",description:"The Platformatic DB GraphQL plugin starts a GraphQL server wand makes it available",source:"@site/versioned_docs/version-0.27.0/reference/sql-graphql/introduction.md",sourceDirName:"reference/sql-graphql",slug:"/reference/sql-graphql/introduction",permalink:"/docs/0.27.0/reference/sql-graphql/introduction",draft:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-0.27.0/reference/sql-graphql/introduction.md",tags:[],version:"0.27.0",frontMatter:{},sidebar:"docs",previous:{title:"Ignoring entities and fields",permalink:"/docs/0.27.0/reference/sql-openapi/ignore"},next:{title:"Queries",permalink:"/docs/0.27.0/reference/sql-graphql/queries"}},l={},c=[{value:"GraphiQL",id:"graphiql",level:2}],s={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction-to-the-graphql-api"},"Introduction to the GraphQL API"),(0,a.kt)("p",null,"The Platformatic DB GraphQL plugin starts a GraphQL server wand makes it available\nvia a ",(0,a.kt)("inlineCode",{parentName:"p"},"/graphql")," endpoint. This endpoint is automatically ready to run queries and\nmutations against your entities. This functionality is powered by\n",(0,a.kt)("a",{parentName:"p",href:"https://mercurius.dev"},"Mercurius"),"."),(0,a.kt)("h2",{id:"graphiql"},"GraphiQL"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/graphql/graphiql"},"GraphiQL")," web UI is integrated into\nPlatformatic DB. To enable it you can pass an option to the ",(0,a.kt)("inlineCode",{parentName:"p"},"sql-graphql")," plugin:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"app.register(graphqlPlugin, { graphiql: true })\n")),(0,a.kt)("p",null,"The GraphiQL interface is made available under the ",(0,a.kt)("inlineCode",{parentName:"p"},"/graphiql")," path."))}d.isMDXComponent=!0}}]);