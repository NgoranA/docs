"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[50517],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,d=u["".concat(l,".").concat(m)]||u[m]||f[m]||i;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},48933:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={},o="Fastify Plugin",p={unversionedId:"reference/sql-mapper/fastify-plugin",id:"version-0.27.0/reference/sql-mapper/fastify-plugin",title:"Fastify Plugin",description:"The @platformatic/sql-mapper package exports a Fastify plugin that can be used out-of the box in a server application.",source:"@site/versioned_docs/version-0.27.0/reference/sql-mapper/fastify-plugin.md",sourceDirName:"reference/sql-mapper",slug:"/reference/sql-mapper/fastify-plugin",permalink:"/docs/0.27.0/reference/sql-mapper/fastify-plugin",draft:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-0.27.0/reference/sql-mapper/fastify-plugin.md",tags:[],version:"0.27.0",frontMatter:{},sidebar:"docs",previous:{title:"Introduction to the Platformatic DB Mapper",permalink:"/docs/0.27.0/reference/sql-mapper/introduction"},next:{title:"Introduction to Entities",permalink:"/docs/0.27.0/reference/sql-mapper/entities/introduction"}},l={},s=[{value:"Usage",id:"usage",level:4}],c={toc:s},u="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"fastify-plugin"},"Fastify Plugin"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@platformatic/sql-mapper")," package exports a ",(0,r.kt)("a",{parentName:"p",href:"https://fastify.io"},"Fastify")," plugin that can be used out-of the box in a server application."),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"connectionString")," option must be passed to connect to your database."),(0,r.kt)("p",null,"The plugin decorates the server with a ",(0,r.kt)("inlineCode",{parentName:"p"},"platformatic")," object that has the following properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"db")," \u2014 the DB wrapper object provided by ",(0,r.kt)("a",{parentName:"li",href:"https://www.atdatabases.org/"},(0,r.kt)("inlineCode",{parentName:"a"},"@databases"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sql")," \u2014 the SQL query mapper object provided by ",(0,r.kt)("a",{parentName:"li",href:"https://www.atdatabases.org/"},(0,r.kt)("inlineCode",{parentName:"a"},"@databases"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"entities")," \u2014 all entity objects with their ",(0,r.kt)("a",{parentName:"li",href:"./entities/api"},"API methods")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"addEntityHooks")," \u2014 a function to add a ",(0,r.kt)("a",{parentName:"li",href:"./entities/hooks"},"hook")," to an entity API method.")),(0,r.kt)("p",null,"The plugin also decorates the Fastify ",(0,r.kt)("inlineCode",{parentName:"p"},"Request")," object with the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"platformaticContext"),": an object with the following two properties:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"app"),", the Fastify application of the given route"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"reply"),", the Fastify ",(0,r.kt)("inlineCode",{parentName:"li"},"Reply"),"  instance matching that request")))),(0,r.kt)("h4",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"'use strict'\n\nconst Fastify = require('fastify')\nconst mapper = require('@platformatic/sql-mapper')\n\nasync function main() {\n  const app = Fastify({\n    logger: {\n      level: 'info'\n    }\n  })\n  app.register(mapper.plugin, {\n    connectionString: 'postgres://postgres:postgres@127.0.0.1/postgres'\n  })\n\n  app.get('/all-pages', async (req, reply) => {\n    // Optionally get the platformatic context.\n    // Passing this to all sql-mapper functions allow to apply\n    // authorization rules to the database queries (amongst other things).\n    const ctx = req.platformaticContext\n\n    // Will return all rows from 'pages' table\n    const res = await app.platformatic.entities.page.find({ ctx })\n    return res\n  })\n\n  await app.listen({ port: 3333 })\n}\n\nmain()\n")))}f.isMDXComponent=!0}}]);