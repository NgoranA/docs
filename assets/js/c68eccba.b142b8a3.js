"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[18740],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),f=a,d=u["".concat(p,".").concat(f)]||u[f]||m[f]||i;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},30114:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={},o="Fastify Plugin",l={unversionedId:"reference/sql-events/fastify-plugin",id:"version-0.27.0/reference/sql-events/fastify-plugin",title:"Fastify Plugin",description:"The @platformatic/sql-events package exports a Fastify plugin that can be used out-of the box in a server application.",source:"@site/versioned_docs/version-0.27.0/reference/sql-events/fastify-plugin.md",sourceDirName:"reference/sql-events",slug:"/reference/sql-events/fastify-plugin",permalink:"/docs/0.27.0/reference/sql-events/fastify-plugin",draft:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-0.27.0/reference/sql-events/fastify-plugin.md",tags:[],version:"0.27.0",frontMatter:{},sidebar:"docs",previous:{title:"Introduction to the sql-events module",permalink:"/docs/0.27.0/reference/sql-events/introduction"},next:{title:"Programmatic API",permalink:"/docs/0.27.0/reference/start/programmatic"}},p={},s=[{value:"Usage",id:"usage",level:4}],c={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"fastify-plugin"},"Fastify Plugin"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@platformatic/sql-events")," package exports a ",(0,a.kt)("a",{parentName:"p",href:"https://fastify.io"},"Fastify")," plugin that can be used out-of the box in a server application.\nIt requires that ",(0,a.kt)("inlineCode",{parentName:"p"},"@platformatic/sql-mapper")," is registered before it."),(0,a.kt)("p",null,"The plugin has the following options:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"mq")," - an instance of ",(0,a.kt)("a",{parentName:"li",href:"https://npm.im/mqemitter"},(0,a.kt)("inlineCode",{parentName:"a"},"mqemitter")),", optional.")),(0,a.kt)("p",null,"The plugin adds the following properties to the ",(0,a.kt)("inlineCode",{parentName:"p"},"app.platformatic")," object:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"mq")," \u2014 an instance of ",(0,a.kt)("a",{parentName:"li",href:"https://npm.im/mqemitter"},(0,a.kt)("inlineCode",{parentName:"a"},"mqemitter"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"subscribe(topics)")," \u2014 a method to create a node ",(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/api/stream.html#new-streamreadableoptions"},(0,a.kt)("inlineCode",{parentName:"a"},"Readable")),"\nthat will contain the events emitted by those topics.")),(0,a.kt)("p",null,"Each entities of ",(0,a.kt)("inlineCode",{parentName:"p"},"app.platformatic.entities")," will be augmented with two functions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"entity.getPublishTopic({ ctx, data, action })")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"entity.getSubscriptionTopic({ ctx, action })"))),(0,a.kt)("p",null,"Where ",(0,a.kt)("inlineCode",{parentName:"p"},"ctx")," is the GraphQL Context, ",(0,a.kt)("inlineCode",{parentName:"p"},"data")," is the object that will be emitted and ",(0,a.kt)("inlineCode",{parentName:"p"},"action")," is either ",(0,a.kt)("inlineCode",{parentName:"p"},"save")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"delete"),"."),(0,a.kt)("h4",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"'use strict'\n\nconst Fastify = require('fastify')\nconst mapper = require('@platformatic/sql-mapper')\nconst events = require('@platformatic/sql-events')\n\nasync function main() {\n  const app = Fastify({\n    logger: {\n      level: 'info'\n    }\n  })\n  app.register(mapper.plugin, {\n    connectionString: 'postgres://postgres:postgres@127.0.0.1/postgres'\n  })\n\n  app.register(events)\n\n  // setup your routes\n\n\n  await app.listen({ port: 3333 })\n}\n\nmain()\n")))}m.isMDXComponent=!0}}]);