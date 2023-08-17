"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[68750],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),g=a,d=u["".concat(s,".").concat(g)]||u[g]||m[g]||i;return t?r.createElement(d,o(o({ref:n},c),{},{components:t})):r.createElement(d,o({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},63172:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const i={},o="Mutations",l={unversionedId:"reference/sql-graphql/mutations",id:"version-0.23.0/reference/sql-graphql/mutations",title:"Mutations",description:"When the GraphQL plugin is loaded, some mutations are automatically adding to",source:"@site/versioned_docs/version-0.23.0/reference/sql-graphql/mutations.md",sourceDirName:"reference/sql-graphql",slug:"/reference/sql-graphql/mutations",permalink:"/docs/0.23.0/reference/sql-graphql/mutations",draft:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-0.23.0/reference/sql-graphql/mutations.md",tags:[],version:"0.23.0",frontMatter:{},sidebar:"docs",previous:{title:"Queries",permalink:"/docs/0.23.0/reference/sql-graphql/queries"},next:{title:"Many To Many Relationship",permalink:"/docs/0.23.0/reference/sql-graphql/many-to-many"}},s={},p=[{value:"<code>save[ENTITY]</code>",id:"saveentity",level:2},{value:"Example",id:"example",level:3},{value:"<code>insert[ENTITY]</code>",id:"insertentity",level:2},{value:"Example",id:"example-1",level:3},{value:"<code>delete[ENTITIES]</code>",id:"deleteentities",level:2},{value:"Example",id:"example-2",level:3}],c={toc:p},u="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mutations"},"Mutations"),(0,a.kt)("p",null,"When the GraphQL plugin is loaded, some mutations are automatically adding to\nthe GraphQL schema."),(0,a.kt)("h2",{id:"saveentity"},(0,a.kt)("inlineCode",{parentName:"h2"},"save[ENTITY]")),(0,a.kt)("p",null,"Saves a new entity to the database or updates an existing entity.\nThis actually behaves as an ",(0,a.kt)("inlineCode",{parentName:"p"},"upsert"),", allowing both behaviours depending on the presence of the primary key field."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"'use strict'\n\nconst Fastify = require('fastify')\nconst graphqlPlugin = require('@platformatic/sql-graphql')\nconst sqlMapper = require('@platformatic/sql-mapper')\n\nasync function main() {\n  const app = Fastify({\n    logger: {\n      level: 'info'\n    }\n  })\n  app.register(sqlMapper, {\n    connectionString: 'postgres://postgres:postgres@127.0.0.1/postgres',\n    log: logger,\n  })\n  app.register(graphqlPlugin, {\n    graphiql: true\n  })\n  const res = await app.inject({\n    method: 'POST',\n    url: '/graphql',\n    body: {\n      query: `\n        mutation {\n          savePage(input: { id: 3 title: \"Platformatic is cool!\" }) {\n            id\n            title\n          }\n        }\n      `\n    }\n  })\n  const result = await res.json()\n  console.log(result.data) // { savePage: { id: '3', title: 'Platformatic is cool!' } }\n  await app.close()\n}\n\nmain()\n")),(0,a.kt)("h2",{id:"insertentity"},(0,a.kt)("inlineCode",{parentName:"h2"},"insert[ENTITY]")),(0,a.kt)("p",null,"Inserts a new entity in the database."),(0,a.kt)("h3",{id:"example-1"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"'use strict'\n\nconst Fastify = require('fastify')\nconst graphqlPlugin = require('@platformatic/sql-graphql')\nconst sqlMapper = require('@platformatic/sql-mapper')\n\nasync function main() {\n  const app = Fastify({\n    logger: {\n      level: 'info'\n    }\n  })\n  app.register(sqlMapper, {\n    connectionString: 'postgres://postgres:postgres@127.0.0.1/postgres',\n    log: logger,\n  })\n  app.register(graphqlPlugin, {\n    graphiql: true\n  })\n  const res = await app.inject({\n    method: 'POST',\n    url: '/graphql',\n    body: {\n      query: `\n        mutation {\n          savePage(input: { title: \"Platformatic is cool!\" }) {\n            id\n            title\n          }\n        }\n      `\n    }\n  })\n  const result = await res.json()\n  console.log(result.data) // { savePage: { id: '4', title: 'Platformatic is cool!' } }\n  await app.close()\n}\n\nmain()\n")),(0,a.kt)("h2",{id:"deleteentities"},(0,a.kt)("inlineCode",{parentName:"h2"},"delete[ENTITIES]")),(0,a.kt)("p",null,"Deletes one or more entities from the database, based on the ",(0,a.kt)("inlineCode",{parentName:"p"},"where")," clause\npassed as an input to the mutation."),(0,a.kt)("h3",{id:"example-2"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"'use strict'\n\nconst Fastify = require('fastify')\nconst graphqlPlugin = require('@platformatic/sql-graphql')\nconst sqlMapper = require('@platformatic/sql-mapper')\n\nasync function main() {\n  const app = Fastify({\n    logger: {\n      level: 'info'\n    }\n  })\n  app.register(sqlMapper, {\n    connectionString: 'postgres://postgres:postgres@127.0.0.1/postgres',\n    log: logger,\n  })\n  app.register(graphqlPlugin, {\n    graphiql: true\n  })\n  const res = await app.inject({\n    method: 'POST',\n    url: '/graphql',\n    body: {\n      query: `\n        mutation {\n          deletePages(where: { id: { eq: \"3\" } }) {\n            id\n            title\n          }\n        }\n      `\n    }\n  })\n  const result = await res.json()\n  console.log(result.data) // { deletePages: [ { id: '3', title: 'Platformatic is cool!' } ] }\n  await app.close()\n}\n\nmain()\n")))}m.isMDXComponent=!0}}]);