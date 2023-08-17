"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[64112],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),f=r,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||a;return n?i.createElement(m,o(o({ref:t},c),{},{components:n})):i.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},34772:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var i=n(87462),r=(n(67294),n(3905));const a={},o="Plugin",l={unversionedId:"reference/service/plugin",id:"version-0.35.2/reference/service/plugin",title:"Plugin",description:"If you want to add features to a service, you will need to register a plugin, which will be in the form of a standard Fastify plugin.",source:"@site/versioned_docs/version-0.35.2/reference/service/plugin.md",sourceDirName:"reference/service",slug:"/reference/service/plugin",permalink:"/docs/0.35.2/reference/service/plugin",draft:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-0.35.2/reference/service/plugin.md",tags:[],version:"0.35.2",frontMatter:{},sidebar:"docs",previous:{title:"Configuration",permalink:"/docs/0.35.2/reference/service/configuration"},next:{title:"Programmatic API",permalink:"/docs/0.35.2/reference/service/programmatic"}},p={},s=[{value:"Hot Reload",id:"hot-reload",level:2},{value:"Directories",id:"directories",level:2},{value:"Multiple plugins",id:"multiple-plugins",level:2},{value:"TypeScript and Autocompletion",id:"typescript-and-autocompletion",level:2},{value:"Plugin definition with TypeScript",id:"plugin-definition-with-typescript",level:3},{value:"Loading compiled files",id:"loading-compiled-files",level:3}],c={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"plugin"},"Plugin"),(0,r.kt)("p",null,"If you want to add features to a service, you will need to register a plugin, which will be in the form of a standard ",(0,r.kt)("a",{parentName:"p",href:"https://fastify.io"},"Fastify")," plugin."),(0,r.kt)("p",null,"The config file will specify where the plugin file is located as the example below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  ...\n  "plugins": {\n    "paths": ["./plugin/index.js"]\n  }\n}\n')),(0,r.kt)("p",null,"The path is relative to the config file path."),(0,r.kt)("p",null,"You should export an async ",(0,r.kt)("inlineCode",{parentName:"p"},"function")," which receives a parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"app")," (",(0,r.kt)("inlineCode",{parentName:"li"},"FastifyInstance"),") that is the main fastify ",(0,r.kt)("a",{parentName:"li",href:"https://www.fastify.io/docs/latest/Reference/Server/#instance"},"instance")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"opts")," all the options specified in the config file after ",(0,r.kt)("inlineCode",{parentName:"li"},"path"))),(0,r.kt)("h2",{id:"hot-reload"},"Hot Reload"),(0,r.kt)("p",null,"Plugin file is being watched by ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/api/fs.html#fspromiseswatchfilename-options"},(0,r.kt)("inlineCode",{parentName:"a"},"fs.watch"))," function."),(0,r.kt)("p",null,"You don't need to reload Platformatic Service server while working on your plugin. Every time you save, the watcher will trigger a reload event and the server will auto-restart and load your updated code."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"At this time, on Linux, file watch in subdirectories is not supported due to a Node.js limitation (documented ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/api/fs.html#caveats"},"here"),").")),(0,r.kt)("h2",{id:"directories"},"Directories"),(0,r.kt)("p",null,"The path can also be a directory. In that case, the directory will be loaded with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify-autoload"},(0,r.kt)("inlineCode",{parentName:"a"},"@fastify/autoload")),"."),(0,r.kt)("p",null,"Consider the following directory structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 routes\n\u2502   \u251c\u2500\u2500 foo\n\u2502   \u2502   \u251c\u2500\u2500 something.js\n\u2502   \u2502   \u2514\u2500\u2500 bar\n\u2502   \u2502       \u2514\u2500\u2500 baz.js\n\u2502   \u251c\u2500\u2500 single-plugin\n\u2502   \u2502   \u2514\u2500\u2500 utils.js\n\u2502   \u2514\u2500\u2500 another-plugin.js\n\u2514\u2500\u2500 platformatic.service.json\n")),(0,r.kt)("p",null,"By default the folder will be added as a prefix to all the routes defined within them.\nSee the autoload documentation for all the options to customize this behavior."),(0,r.kt)("h2",{id:"multiple-plugins"},"Multiple plugins"),(0,r.kt)("p",null,"Multiple plugins can be loaded in parallel by specifying an array:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  ...\n  "plugins": {\n    "paths": [{\n      "path": "./plugin/index.js"\n    }, {\n      "path": "./routes/"\n    }]\n  }\n}\n')),(0,r.kt)("h2",{id:"typescript-and-autocompletion"},"TypeScript and Autocompletion"),(0,r.kt)("p",null,"In order to provide the correct typings of the features added by Platformatic Service to your Fastify instance,\nadd the following at the top of your files:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'/// <references types="@platformatic/service" />\n')),(0,r.kt)("h3",{id:"plugin-definition-with-typescript"},"Plugin definition with TypeScript"),(0,r.kt)("p",null,"Here is an example of writing a plugin in TypeScript:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"/// <reference types=\"@platformatic/service\" />\nimport { FastifyInstance, FastifyPluginOptions } from 'fastify'\n\nexport default async function (fastify: FastifyInstance, opts: FastifyPluginOptions) {\n}\n")),(0,r.kt)("p",null,"Note that you need to add the ",(0,r.kt)("inlineCode",{parentName:"p"},'"typescript": true')," configuration to your ",(0,r.kt)("inlineCode",{parentName:"p"},"platformatic.service.json"),"."),(0,r.kt)("h3",{id:"loading-compiled-files"},"Loading compiled files"),(0,r.kt)("p",null,"Setting ",(0,r.kt)("inlineCode",{parentName:"p"},'"typescript": false')," but including a ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," with an ",(0,r.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/tsconfig#outDir"},(0,r.kt)("inlineCode",{parentName:"a"},"outDir")),"\noption, will instruct Platformatic Service to try loading your plugins from that folder instead.\nThis setup is needed to support pre-compiled sources to reduce cold start time during deployment."))}d.isMDXComponent=!0}}]);