"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[7687],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),f=a,d=u["".concat(c,".").concat(f)]||u[f]||m[f]||r;return n?o.createElement(d,i(i({ref:t},p),{},{components:n})):o.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},81182:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=n(87462),a=(n(67294),n(3905));const r={},i="Packaging a Platformatic Application as a module",l={unversionedId:"guides/packaging-an-application-as-a-module",id:"guides/packaging-an-application-as-a-module",title:"Packaging a Platformatic Application as a module",description:"Platformatic Service and Platformatic DB",source:"@site/docs/guides/packaging-an-application-as-a-module.md",sourceDirName:"guides",slug:"/guides/packaging-an-application-as-a-module",permalink:"/docs/next/guides/packaging-an-application-as-a-module",draft:!1,editUrl:"https://github.com/platformatic/platformatic/edit/main/docs/guides/packaging-an-application-as-a-module.md",tags:[],version:"current",frontMatter:{}},c={},s=[{value:"Creating a custom Service",id:"creating-a-custom-service",level:2},{value:"Consuming a custom application",id:"consuming-a-custom-application",level:2},{value:"Building your own CLI",id:"building-your-own-cli",level:2}],p={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"packaging-a-platformatic-application-as-a-module"},"Packaging a Platformatic Application as a module"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/next/reference/db/introduction"},"Platformatic Service")," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/reference/db/introduction"},"Platformatic DB"),"\noffer a good starting point to create new applications. However, most developers or organizations might want to\ncreate reusable services or applications built on top of Platformatic.\nThis is useful to publish the application on the public npm registry (or a private one!), including building your own CLI,\nor to create a specialized template for your organization to allow for centralized bugfixes and updates."),(0,a.kt)("p",null,"This process is the same one we use to maintain Platformatic DB and Platformatic Composer on top of Platformatic Service."),(0,a.kt)("h2",{id:"creating-a-custom-service"},"Creating a custom Service"),(0,a.kt)("p",null,"We are creating the module ",(0,a.kt)("inlineCode",{parentName:"p"},"foo.js")," as follows: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const { schema, platformaticService } = require('@platformatic/service')\n\n/**  @type {import('fastify').FastifyPluginAsync<{}>} */\nasync function foo (app, opts) {\n  const text = app.platformatic.config.foo.text\n  app.get('/foo', async (request, reply) => {\n    return text\n  })\n\n  await platformaticService(app, opts)\n}\n\nfoo.configType = 'foo'\n\n// break Fastify encapsulation\nfoo[Symbol.for('skip-override')] = true\n\n// The schema for our configuration file\nfoo.schema = {\n  $id: 'https://example.com/schemas/foo.json',\n  title: 'Foo Service',\n  type: 'object',\n  properties: {\n    server: schema.server,\n    plugins: schema.plugins,\n    metrics: schema.metrics,\n    watch: {\n      anyOf: [schema.watch, {\n        type: 'boolean'\n      }, {\n        type: 'string'\n      }]\n    },\n    $schema: {\n      type: 'string'\n    },\n    module: {\n      type: 'string'\n    },\n    foo: {\n      type: 'object',\n      properties: {\n        text: {\n          type: 'string'\n        }\n      },\n      required: ['text']\n    }\n  },\n  additionalProperties: false,\n  required: ['server']\n}\n\n// The configuration for the ConfigManager\nfoo.configManagerConfig = {\n  schema: foo.schema,\n  envWhitelist: ['PORT', 'HOSTNAME'],\n  allowToWatch: ['.env'],\n  schemaOptions: {\n    useDefaults: true,\n    coerceTypes: true,\n    allErrors: true,\n    strict: false\n  }\n}\n\nmodule.exports = foo\n")),(0,a.kt)("p",null,"Note that the ",(0,a.kt)("inlineCode",{parentName:"p"},"$id")," property of the schema identifies the module in our system,\nallowing us to retrieve the schema correctly.\nIt is recommended, but not required, that the JSON schema is actually\npublished in this location. Doing so allows tooling such as the VSCode\nlanguage server to provide autocompletion."),(0,a.kt)("p",null,"In this example, the ",(0,a.kt)("inlineCode",{parentName:"p"},"schema")," adds a custom top-level ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," property\nthat users can use to configure this specific module."),(0,a.kt)("p",null,"ESM is also supported."),(0,a.kt)("h2",{id:"consuming-a-custom-application"},"Consuming a custom application"),(0,a.kt)("p",null,"Consuming ",(0,a.kt)("inlineCode",{parentName:"p"},"foo.js")," is simple. We can create a ",(0,a.kt)("inlineCode",{parentName:"p"},"platformatic.json")," file as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "https://example.com/schemas/foo.json",\n  "module": "./foo",\n  "server": {\n    "port": 0,\n    "hostname": "127.0.0.1"\n  },\n  "foo": {\n    "text": "Hello World"\n  }\n}\n')),(0,a.kt)("p",null,"Note that we ",(0,a.kt)("strong",{parentName:"p"},"must")," specify both the ",(0,a.kt)("inlineCode",{parentName:"p"},"$schema")," property and ",(0,a.kt)("inlineCode",{parentName:"p"},"module"),".\nModule can also be any modules published on npm and installed via your package manager."),(0,a.kt)("h2",{id:"building-your-own-cli"},"Building your own CLI"),(0,a.kt)("p",null,"It is possible to build your own CLI with the following ",(0,a.kt)("inlineCode",{parentName:"p"},"cli.mjs")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"import foo from './foo.js'\nimport { start } from '@platformatic/service'\nimport { printAndExitLoadConfigError } from '@platformatic/config'\n\nawait start(foo, process.argv.splice(2)).catch(printConfigValidationErrors)\n")),(0,a.kt)("p",null,"This will also load ",(0,a.kt)("inlineCode",{parentName:"p"},"platformatic.foo.json")," files."))}m.isMDXComponent=!0}}]);