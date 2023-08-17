"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[54124],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},98872:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={},i="Debug Platformatic DB",l={unversionedId:"guides/debug-platformatic-db",id:"version-0.23.0/guides/debug-platformatic-db",title:"Debug Platformatic DB",description:"Error: No tables found in the database",source:"@site/versioned_docs/version-0.23.0/guides/debug-platformatic-db.md",sourceDirName:"guides",slug:"/guides/debug-platformatic-db",permalink:"/docs/0.23.0/guides/debug-platformatic-db",draft:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-0.23.0/guides/debug-platformatic-db.md",tags:[],version:"0.23.0",frontMatter:{},sidebar:"docs",previous:{title:"Monitoring with Prometheus and Grafana",permalink:"/docs/0.23.0/guides/monitoring"},next:{title:"Integrate Prisma with Platformatic DB",permalink:"/docs/0.23.0/guides/prisma"}},s={},c=[{value:"Error: No tables found in the database",id:"error-no-tables-found-in-the-database",level:2},{value:"Logging SQL queries",id:"logging-sql-queries",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"debug-platformatic-db"},"Debug Platformatic DB"),(0,a.kt)("h2",{id:"error-no-tables-found-in-the-database"},"Error: No tables found in the database"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Verify your database connection string is correct in your Platformatic DB configuration",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Make sure the database name is correct"))),(0,a.kt)("li",{parentName:"ul"},"Ensure that you have run the migration command ",(0,a.kt)("inlineCode",{parentName:"li"},"npx platformatic db migrations apply")," before starting the server. See the Platformatic DB ",(0,a.kt)("a",{parentName:"li",href:"https://oss.platformatic.dev/docs/reference/db/migrations"},"Migrations")," documentation for more information on working with migrations.")),(0,a.kt)("h2",{id:"logging-sql-queries"},"Logging SQL queries"),(0,a.kt)("p",null,"You can see all the queries that are being run against your database in your terminal by setting the logger level to trace in your ",(0,a.kt)("inlineCode",{parentName:"p"},"platformatic.db.json")," config file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="platformatic.db.json"',title:'"platformatic.db.json"'},'{\n  "server": {\n    "logger": {\n      "level": "trace"\n    }\n  }\n}\n')))}p.isMDXComponent=!0}}]);