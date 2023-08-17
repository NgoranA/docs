"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[1951],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,u=m["".concat(p,".").concat(d)]||m[d]||f[d]||o;return n?a.createElement(u,i(i({ref:t},s),{},{components:n})):a.createElement(u,i({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[m]="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61038:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={},i="Programmatic API",c={unversionedId:"reference/start/programmatic",id:"version-0.30.0/reference/start/programmatic",title:"Programmatic API",description:"In many cases it's useful to start Platformatic applications using an API",source:"@site/versioned_docs/version-0.30.0/reference/start/programmatic.md",sourceDirName:"reference/start",slug:"/reference/start/programmatic",permalink:"/docs/0.30.0/reference/start/programmatic",draft:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-0.30.0/reference/start/programmatic.md",tags:[],version:"0.30.0",frontMatter:{},sidebar:"docs",previous:{title:"Fastify Plugin",permalink:"/docs/0.30.0/reference/sql-events/fastify-plugin"},next:{title:"Programmatic API",permalink:"/docs/0.30.0/reference/start/programmatic"}},p={},l=[{value:"<code>buildServer()</code>",id:"buildserver",level:2},{value:"<code>getConfigType()</code>",id:"getconfigtype",level:2},{value:"<code>getCurrentSchema()</code>",id:"getcurrentschema",level:2},{value:"<code>loadConfig()</code>",id:"loadconfig",level:2},{value:"<code>start()</code>",id:"start",level:2},{value:"<code>startCommand()</code>",id:"startcommand",level:2}],s={toc:l},m="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"programmatic-api"},"Programmatic API"),(0,r.kt)("p",null,"In many cases it's useful to start Platformatic applications using an API\ninstead of the command line. The ",(0,r.kt)("inlineCode",{parentName:"p"},"@platformatic/start")," API makes it simple to\nwork with different application types (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"service"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"db"),") without needing to\nknow the application type a priori."),(0,r.kt)("h2",{id:"buildserver"},(0,r.kt)("inlineCode",{parentName:"h2"},"buildServer()")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"buildServer")," function creates a server from a provided configuration\nobject or configuration filename."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { buildServer } from '@platformatic/start'\n\n// This config can also be a config filename or obtained via loadConfig().\nconst config = {\n  server: {\n    hostname: '127.0.0.1',\n    port: 0\n  }\n}\nconst app = await buildServer(config)\n\nawait app.start()\n")),(0,r.kt)("h2",{id:"getconfigtype"},(0,r.kt)("inlineCode",{parentName:"h2"},"getConfigType()")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"getConfigType")," function takes an array of command line arguments and a\ndirectory, and returns a string indicating the application type."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { getConfigType } from '@platformatic/start'\n\n// Get the type from command line arguments.\nconst type = await getConfigType(['-c', '/path/to/platformatic.config.json'])\n\n// Search a directory for a config file and get the type from that file.\nconst type = await getConfigType(undefined, '/directory/of/project')\n\n// Search a the current working directory for a config file and get the type\n// from that file.\nconst type = await getConfigType()\n")),(0,r.kt)("h2",{id:"getcurrentschema"},(0,r.kt)("inlineCode",{parentName:"h2"},"getCurrentSchema()")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"getCurrentSchema")," function takes a Platformatic application type as input,\nand returns the corresponding configuration file schema for the current version.\nIf the input is not a recognized application type, an exception will be thrown."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { getCurrentSchema } from '@platformatic/start'\n\n// Get the type from command line arguments.\nconst type = await getCurrentSchema('service')\n")),(0,r.kt)("h2",{id:"loadconfig"},(0,r.kt)("inlineCode",{parentName:"h2"},"loadConfig()")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"loadConfig")," function is used to read and parse a configuration file for\nan arbitrary Platformatic application."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { loadConfig } from '@platformatic/start'\n\n// Read the config based on command line arguments. loadConfig() will detect\n// the application type.\nconst config = await loadConfig({}, ['-c', '/path/to/platformatic.config.json'])\n\n// Read the config based on command line arguments. The application type can\n// be provided explicitly.\nconst config = await loadConfig(\n  {},\n  ['-c', '/path/to/platformatic.config.json'],\n  undefined,\n  'service'\n)\n\n// Default config can be specified.\nconst config = await loadConfig(\n  {},\n  ['-c', '/path/to/platformatic.config.json'],\n  { key: 'value' }\n)\n")),(0,r.kt)("h2",{id:"start"},(0,r.kt)("inlineCode",{parentName:"h2"},"start()")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"start")," function loads a configuration, builds a server, and starts the\nserver. However, the server is not returned."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { start } from '@platformatic/start'\n\nawait start(['-c', '/path/to/platformatic.config.json])\n")),(0,r.kt)("h2",{id:"startcommand"},(0,r.kt)("inlineCode",{parentName:"h2"},"startCommand()")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"startCommand")," function is similar to ",(0,r.kt)("inlineCode",{parentName:"p"},"start"),". However, if an exception\noccurs, ",(0,r.kt)("inlineCode",{parentName:"p"},"startCommand")," logs the error and exits the process. This is different\nfrom ",(0,r.kt)("inlineCode",{parentName:"p"},"start"),", which throws the exception."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { start } from '@platformatic/start'\n\nawait startCommand(['-c', '/path/to/platformatic.config.json])\n")))}f.isMDXComponent=!0}}]);