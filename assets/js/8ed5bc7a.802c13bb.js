"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[45341],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},74599:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={},l="Queries",o={unversionedId:"reference/sql-graphql/queries",id:"version-0.35.4/reference/sql-graphql/queries",title:"Queries",description:"A GraphQL query is automatically added to the GraphQL schema for each database",source:"@site/versioned_docs/version-0.35.4/reference/sql-graphql/queries.md",sourceDirName:"reference/sql-graphql",slug:"/reference/sql-graphql/queries",permalink:"/docs/0.35.4/reference/sql-graphql/queries",draft:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-0.35.4/reference/sql-graphql/queries.md",tags:[],version:"0.35.4",frontMatter:{},sidebar:"docs",previous:{title:"Introduction to the GraphQL API",permalink:"/docs/0.35.4/reference/sql-graphql/introduction"},next:{title:"Mutations",permalink:"/docs/0.35.4/reference/sql-graphql/mutations"}},s={},p=[{value:"Example",id:"example",level:2},{value:"Advanced Queries",id:"advanced-queries",level:2},{value:"<code>get[ENTITY]by[PRIMARY_KEY]</code>",id:"getentitybyprimary_key",level:3},{value:"Example",id:"example-1",level:4},{value:"<code>count[ENTITIES]</code>",id:"countentities",level:3},{value:"Pagination",id:"pagination",level:2},{value:"Limit",id:"limit",level:3},{value:"Offset",id:"offset",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"queries"},"Queries"),(0,a.kt)("p",null,"A GraphQL query is automatically added to the GraphQL schema for each database\ntable, along with a complete mapping for all table fields."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"'use strict'\n\nconst Fastify = require('fastify')\nconst graphqlPlugin = require('@platformatic/sql-graphql')\nconst sqlMapper = require('@platformatic/sql-mapper')\nasync function main() {\n  const app = Fastify({\n    logger: {\n      level: 'info'\n    }\n  })\n  app.register(sqlMapper, {\n    connectionString: 'postgres://postgres:postgres@127.0.0.1/postgres'\n  })\n  app.register(graphqlPlugin, {\n    graphiql: true\n  })\n  const res = await app.inject({\n    method: 'POST',\n    url: '/graphql',\n    body: {\n      query: `\n        query{\n          pages{\n            id,\n            title\n          }\n        }\n      `\n    }\n  })\n  const result = await res.json()\n  console.log(result.data)\n  await app.close()\n}\nmain()\n")),(0,a.kt)("h2",{id:"advanced-queries"},"Advanced Queries"),(0,a.kt)("p",null,"The following additional queries are added to the GraphQL schema for each entity:"),(0,a.kt)("h3",{id:"getentitybyprimary_key"},(0,a.kt)("inlineCode",{parentName:"h3"},"get[ENTITY]by[PRIMARY_KEY]")),(0,a.kt)("p",null,"If you have a table ",(0,a.kt)("inlineCode",{parentName:"p"},"pages")," with the field ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," as the primary key, you can run\na query called ",(0,a.kt)("inlineCode",{parentName:"p"},"getPageById"),"."),(0,a.kt)("h4",{id:"example-1"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"...\nconst res = await app.inject({\n  method: 'POST',\n  url: '/graphql',\n  body: {\n    query: `\n      query{\n        getPageById(id: 3) {\n          id,\n          title\n        }\n      }\n    `\n  }\n})\nconst result = await res.json()\nconsole.log(result.data) // { getPageById: { id: '3', title: 'A fiction' } }\n")),(0,a.kt)("h3",{id:"countentities"},(0,a.kt)("inlineCode",{parentName:"h3"},"count[ENTITIES]")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"...\nconst res = await app.inject({\n  method: 'POST',\n  url: '/graphql',\n  body: {\n    query: `\n      query {\n        countPages {\n          total\n        }\n      }\n    `\n  }\n})\nconst result = await res.json()\nconsole.log(result.data) // { countMovies : { total: { 17 } }\n")),(0,a.kt)("h2",{id:"pagination"},"Pagination"),(0,a.kt)("p",null,"The Platformatic DB supports for result's pagination through input parameters: ",(0,a.kt)("inlineCode",{parentName:"p"},"limit")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"offset")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"{\n  users(limit:5, offset: 10) {\n    name\n  }\n}\n")),(0,a.kt)("p",null,"It returns 5 users starting from position 10."),(0,a.kt)("h3",{id:"limit"},"Limit"),(0,a.kt)("p",null,"By default a ",(0,a.kt)("em",{parentName:"p"},"limit")," value (",(0,a.kt)("inlineCode",{parentName:"p"},"10"),") is applied to each request."),(0,a.kt)("p",null,"Clients can override this behavior by passing a value.\nIn this case the server validates the input and an error is return if exceeds the ",(0,a.kt)("inlineCode",{parentName:"p"},"max")," accepted value (",(0,a.kt)("inlineCode",{parentName:"p"},"100"),")."),(0,a.kt)("p",null,"Limit's values can be customized through configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  ...\n  "db": {\n    ...\n    "limit": {\n      "default": 50,\n      "max": 1000\n    }\n  }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Limit")," only accepts values ",(0,a.kt)("inlineCode",{parentName:"p"},">= 0"),". Otherwise an error is return."),(0,a.kt)("h3",{id:"offset"},"Offset"),(0,a.kt)("p",null,"By default ",(0,a.kt)("em",{parentName:"p"},"offset")," is not applied to the request.\nClients can override this behavior by passing a value."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Offset")," only accepts values ",(0,a.kt)("inlineCode",{parentName:"p"},">= 0"),". Otherwise an error is return."))}d.isMDXComponent=!0}}]);