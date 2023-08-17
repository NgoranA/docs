"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[20081],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(n),k=i,u=c["".concat(p,".").concat(k)]||c[k]||d[k]||r;return n?a.createElement(u,l(l({ref:t},m),{},{components:n})):a.createElement(u,l({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},92909:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const r={},l="Configuration",o={unversionedId:"reference/service/configuration",id:"version-0.32.0/reference/service/configuration",title:"Configuration",description:"Platformatic Service configured with a configuration file. It supports the use",source:"@site/versioned_docs/version-0.32.0/reference/service/configuration.md",sourceDirName:"reference/service",slug:"/reference/service/configuration",permalink:"/docs/0.32.0/reference/service/configuration",draft:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-0.32.0/reference/service/configuration.md",tags:[],version:"0.32.0",frontMatter:{},sidebar:"docs",previous:{title:"Platformatic Service",permalink:"/docs/0.32.0/reference/service/introduction"},next:{title:"Plugin",permalink:"/docs/0.32.0/reference/service/plugin"}},p={},s=[{value:"Configuration file",id:"configuration-file",level:2},{value:"Supported formats",id:"supported-formats",level:3},{value:"Settings",id:"settings",level:2},{value:"<code>server</code>",id:"server",level:3},{value:"<code>metrics</code>",id:"metrics",level:3},{value:"<code>plugins</code>",id:"plugins",level:3},{value:"<code>typescript</code> compilation options",id:"typescript-compilation-options",level:4},{value:"<code>watch</code>",id:"watch",level:3},{value:"<code>service</code>",id:"service",level:3},{value:"Environment variable placeholders",id:"environment-variable-placeholders",level:2},{value:"Example",id:"example",level:3},{value:"Setting environment variables",id:"setting-environment-variables",level:3},{value:"Allowed placeholder names",id:"allowed-placeholder-names",level:3}],m={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"Platformatic Service configured with a configuration file. It supports the use\nof environment variables as setting values with ",(0,i.kt)("a",{parentName:"p",href:"#configuration-placeholders"},"configuration placeholders"),"."),(0,i.kt)("h2",{id:"configuration-file"},"Configuration file"),(0,i.kt)("p",null,"If the Platformatic CLI finds a file in the current working directory matching\none of these filenames, it will automatically load it:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"platformatic.service.json")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"platformatic.service.json5")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"platformatic.service.yml")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"platformatic.service.yaml")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"platformatic.service.tml")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"platformatic.service.toml"))),(0,i.kt)("p",null,"Alternatively, a ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.32.0/reference/cli#service"},(0,i.kt)("inlineCode",{parentName:"a"},"--config")," option")," with a configuration\nfilepath can be passed to most ",(0,i.kt)("inlineCode",{parentName:"p"},"platformatic service")," CLI commands."),(0,i.kt)("p",null,"The configuration examples in this reference use JSON."),(0,i.kt)("h3",{id:"supported-formats"},"Supported formats"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Format"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Extensions"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"JSON"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},".json"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"JSON5"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},".json5"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"YAML"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},".yml"),", ",(0,i.kt)("inlineCode",{parentName:"td"},".yaml"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"TOML"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},".tml"))))),(0,i.kt)("p",null,"Comments are supported by the JSON5, YAML and TOML file formats."),(0,i.kt)("h2",{id:"settings"},"Settings"),(0,i.kt)("p",null,"Configuration settings are organised into the following groups:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#server"},(0,i.kt)("inlineCode",{parentName:"a"},"server"))," ",(0,i.kt)("strong",{parentName:"li"},"(required)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#service"},(0,i.kt)("inlineCode",{parentName:"a"},"service"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#metrics"},(0,i.kt)("inlineCode",{parentName:"a"},"metrics"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#plugins"},(0,i.kt)("inlineCode",{parentName:"a"},"plugins")))),(0,i.kt)("p",null,"Sensitive configuration settings, such as a database connection URL that contains\na password, should be set using ",(0,i.kt)("a",{parentName:"p",href:"#configuration-placeholders"},"configuration placeholders"),"."),(0,i.kt)("h3",{id:"server"},(0,i.kt)("inlineCode",{parentName:"h3"},"server")),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"required")," object with the following settings:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"hostname"))," (",(0,i.kt)("strong",{parentName:"p"},"required"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),") \u2014 Hostname where Platformatic Service server will listen for connections.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"port"))," (",(0,i.kt)("strong",{parentName:"p"},"required"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),") \u2014 Port where Platformatic Service server will listen for connections.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"healthCheck"))," (",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"object"),") \u2014 Enables the health check endpoint."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Powered by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/fastify/under-pressure"},(0,i.kt)("inlineCode",{parentName:"a"},"@fastify/under-pressure")),"."),(0,i.kt)("li",{parentName:"ul"},"The value can be an object, used to specify the interval between checks in milliseconds (default: ",(0,i.kt)("inlineCode",{parentName:"li"},"5000"),")")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"Example")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "server": {\n    ...\n    "healthCheck": {\n      "interval": 2000\n    }\n  }\n}\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"cors"))," (",(0,i.kt)("inlineCode",{parentName:"p"},"object"),") \u2014 Configuration for Cross-Origin Resource Sharing (CORS) headers."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"All options will be passed to the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/fastify/fastify-cors"},(0,i.kt)("inlineCode",{parentName:"a"},"@fastify/cors"))," plugin. In order to specify a ",(0,i.kt)("inlineCode",{parentName:"li"},"RegExp")," object, you can pass ",(0,i.kt)("inlineCode",{parentName:"li"},"{ regexp: 'yourregexp' }"),",\nit will be automatically converted."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"logger"))," (",(0,i.kt)("inlineCode",{parentName:"p"},"object"),") -- the ",(0,i.kt)("a",{parentName:"p",href:"https://www.fastify.io/docs/latest/Reference/Server/#logger"},"logger configuration"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"pluginTimeout"))," (",(0,i.kt)("inlineCode",{parentName:"p"},"integer"),") -- the number of milliseconds to wait for a Fastify plugin to load, see the ",(0,i.kt)("a",{parentName:"p",href:"https://www.fastify.io/docs/latest/Reference/Server/#plugintimeout"},"fastify docs")," for more details.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"https"))," (",(0,i.kt)("inlineCode",{parentName:"p"},"object"),") - Configuration for HTTPS supporting the following options."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key")," (",(0,i.kt)("strong",{parentName:"li"},"required"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),", or ",(0,i.kt)("inlineCode",{parentName:"li"},"array"),") - If ",(0,i.kt)("inlineCode",{parentName:"li"},"key")," is a string, it specifies the private key to be used. If ",(0,i.kt)("inlineCode",{parentName:"li"},"key")," is an object, it must have a ",(0,i.kt)("inlineCode",{parentName:"li"},"path")," property specifying the private key file. Multiple keys are supported by passing an array of keys."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cert")," (",(0,i.kt)("strong",{parentName:"li"},"required"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),", or ",(0,i.kt)("inlineCode",{parentName:"li"},"array"),") - If ",(0,i.kt)("inlineCode",{parentName:"li"},"cert")," is a string, it specifies the certificate to be used. If ",(0,i.kt)("inlineCode",{parentName:"li"},"cert")," is an object, it must have a ",(0,i.kt)("inlineCode",{parentName:"li"},"path")," property specifying the certificate file. Multiple certificates are supported by passing an array of keys.")))),(0,i.kt)("h3",{id:"metrics"},(0,i.kt)("inlineCode",{parentName:"h3"},"metrics")),(0,i.kt)("p",null,"Configuration for a ",(0,i.kt)("a",{parentName:"p",href:"https://prometheus.io/"},"Prometheus")," server that will export monitoring metrics\nfor the current server instance. It uses ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/SkeLLLa/fastify-metrics"},(0,i.kt)("inlineCode",{parentName:"a"},"fastify-metrics")),"\nunder the hood."),(0,i.kt)("p",null,"This setting can be a ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," or an ",(0,i.kt)("inlineCode",{parentName:"p"},"object"),". If set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," the Prometheus server will listen on ",(0,i.kt)("inlineCode",{parentName:"p"},"http://0.0.0.0:9090"),"."),(0,i.kt)("p",null,"Supported object properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"hostname"))," (",(0,i.kt)("inlineCode",{parentName:"li"},"string"),") \u2014 The hostname where Prometheus server will listen for connections."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"port"))," (",(0,i.kt)("inlineCode",{parentName:"li"},"number"),") \u2014 The port where Prometheus server will listen for connections."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"auth"))," (",(0,i.kt)("inlineCode",{parentName:"li"},"object"),") \u2014 Basic Auth configuration. ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"username"))," and ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"password"))," are required here\n(use ",(0,i.kt)("a",{parentName:"li",href:"#environment-variables"},"environment variables"),").")),(0,i.kt)("h3",{id:"plugins"},(0,i.kt)("inlineCode",{parentName:"h3"},"plugins")),(0,i.kt)("p",null,"An optional object that defines the plugins loaded by Platformatic Service."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"paths"))," (",(0,i.kt)("strong",{parentName:"li"},"required"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"array"),"): an array of paths (",(0,i.kt)("inlineCode",{parentName:"li"},"string"),")\nor an array of objects composed as follows,",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"path")," (",(0,i.kt)("inlineCode",{parentName:"li"},"string"),"): Relative path to plugin's entry point."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," (",(0,i.kt)("inlineCode",{parentName:"li"},"object"),"): Optional plugin options."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"encapsulate")," (",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),"): if the path is a folder, it instruct Platformatic to not encapsulate those plugins."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"maxDepth")," (",(0,i.kt)("inlineCode",{parentName:"li"},"integer"),"): if the path is a folder, it limits the depth to load the content from."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"typescript"))," (",(0,i.kt)("inlineCode",{parentName:"li"},"boolean")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),"): enable TypeScript compilation. A ",(0,i.kt)("inlineCode",{parentName:"li"},"tsconfig.json")," file is required in the same folder.")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "plugins": {\n    "paths": [{\n      "path": "./my-plugin.js",\n      "options": {\n        "foo": "bar"\n      }\n    }]\n  }\n}\n')),(0,i.kt)("h4",{id:"typescript-compilation-options"},(0,i.kt)("inlineCode",{parentName:"h4"},"typescript")," compilation options"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"typescript")," can also be an object to customize the compilation. Here are the supported options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enabled")," (",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),"): enables compilation"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tsConfig")," (",(0,i.kt)("inlineCode",{parentName:"li"},"string"),"): path to the ",(0,i.kt)("inlineCode",{parentName:"li"},"tsconfig.json")," file relative to the configuration"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"outDir")," (",(0,i.kt)("inlineCode",{parentName:"li"},"string"),"): the output directory of ",(0,i.kt)("inlineCode",{parentName:"li"},"tsconfig.json"),", in case ",(0,i.kt)("inlineCode",{parentName:"li"},"tsconfig.json")," is not available\nand and ",(0,i.kt)("inlineCode",{parentName:"li"},"enabled")," is set to ",(0,i.kt)("inlineCode",{parentName:"li"},"false")," (procution build)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"flags")," (array of ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),"): flags to be passed to ",(0,i.kt)("inlineCode",{parentName:"li"},"tsc"),". Overrides ",(0,i.kt)("inlineCode",{parentName:"li"},"tsConfig"),".\n")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "plugins": {\n    "paths": [{\n      "path": "./my-plugin.js",\n      "options": {\n        "foo": "bar"\n      }\n    }],\n    "typescript": {\n      "enabled": false,\n      "tsConfig": "./path/to/tsconfig.json",\n      "outDir": "dist"\n    }\n  }\n}\n')),(0,i.kt)("h3",{id:"watch"},(0,i.kt)("inlineCode",{parentName:"h3"},"watch")),(0,i.kt)("p",null,"Disable watching for file changes if set to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),". It can also be customized with the following options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"ignore"))," (",(0,i.kt)("inlineCode",{parentName:"p"},"string[]"),", default: ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),"): List of glob patterns to ignore when watching for changes. If ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," or not specified, ignore rule is not applied. Ignore option doesn't work for typescript files.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"allow"))," (",(0,i.kt)("inlineCode",{parentName:"p"},"string[]"),", default: ",(0,i.kt)("inlineCode",{parentName:"p"},"['*.js', '**/*.js']"),"): List of glob patterns to allow when watching for changes. If ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," or not specified, allow rule is not applied. Allow option doesn't work for typescript files."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"Example")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "watch": {\n    "ignore": ["*.mjs", "**/*.mjs"],\n    "allow": ["my-plugin.js", "plugins/*.js"]\n  }\n}\n')))),(0,i.kt)("h3",{id:"service"},(0,i.kt)("inlineCode",{parentName:"h3"},"service")),(0,i.kt)("p",null,"Configure ",(0,i.kt)("inlineCode",{parentName:"p"},"@platformatic/service")," specific settings such as ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"openapi"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"graphql"))," (",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"object"),", default: ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),") \u2014 Controls the GraphQL API interface, with optional GraphiQL UI."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"Examples")),(0,i.kt)("p",{parentName:"li"},"Enables GraphQL support"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "service": {\n    "graphql": true\n  }\n}\n')),(0,i.kt)("p",{parentName:"li"},"Enables GraphQL support with GraphiQL"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "service": {\n    "graphql": {\n      "graphiql": true\n    }\n  }\n}\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"openapi"))," (",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"object"),", default: ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),") \u2014 Enables OpenAPI REST support."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If value is an object, all ",(0,i.kt)("a",{parentName:"li",href:"https://swagger.io/specification/"},"OpenAPI v3")," allowed properties can be passed. Also a ",(0,i.kt)("inlineCode",{parentName:"li"},"prefix")," property can be passed to set the OpenAPI prefix."),(0,i.kt)("li",{parentName:"ul"},"Platformatic Service uses ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/fastify/fastify-swagger"},(0,i.kt)("inlineCode",{parentName:"a"},"@fastify/swagger"))," under the hood to manage this configuration.")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"Examples")),(0,i.kt)("p",{parentName:"li"},"Enables OpenAPI"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "service": {\n    ...\n    "openapi": true\n  }\n}\n')),(0,i.kt)("p",{parentName:"li"},"Enables OpenAPI with prefix"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "service": {\n    "openapi": {\n      "prefix": "/api"\n    }\n  }\n}\n')),(0,i.kt)("p",{parentName:"li"},"Enables OpenAPI with options"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "service": {\n    "openapi": {\n      "info": {\n        "title": "Platformatic Service",\n        "description": "Exposing a SQL database as REST"\n      }\n    }\n  }\n}\n')))),(0,i.kt)("h2",{id:"environment-variable-placeholders"},"Environment variable placeholders"),(0,i.kt)("p",null,"The value for any configuration setting can be replaced with an environment variable\nby adding a placeholder in the configuration file, for example ",(0,i.kt)("inlineCode",{parentName:"p"},"{PLT_SERVER_LOGGER_LEVEL}"),"."),(0,i.kt)("p",null,"All placeholders in a configuration must be available as an environment variable\nand must meet the ",(0,i.kt)("a",{parentName:"p",href:"#allowed-placeholder-names"},"allowed placeholder name")," rules."),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="platformatic.service.json"',title:'"platformatic.service.json"'},'{\n  "server": {\n    "port": "{PORT}"\n  }\n}\n')),(0,i.kt)("p",null,"Platformatic will replace the placeholders in this example with the environment\nvariables of the same name."),(0,i.kt)("h3",{id:"setting-environment-variables"},"Setting environment variables"),(0,i.kt)("p",null,"If a ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file exists it will automatically be loaded by Platformatic using\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/motdotla/dotenv"},(0,i.kt)("inlineCode",{parentName:"a"},"dotenv")),". For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plaintext",metastring:'title=".env"',title:'".env"'},"PLT_SERVER_LOGGER_LEVEL=info\nPORT=8080\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file must be located in the same folder as the Platformatic configuration\nfile or in the current working directory."),(0,i.kt)("p",null,"Environment variables can also be set directly on the commmand line, for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"PLT_SERVER_LOGGER_LEVEL=debug npx platformatic service\n")),(0,i.kt)("h3",{id:"allowed-placeholder-names"},"Allowed placeholder names"),(0,i.kt)("p",null,"Only placeholder names prefixed with ",(0,i.kt)("inlineCode",{parentName:"p"},"PLT_"),", or that are in this allow list, will be\ndynamically replaced in the configuration file:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PORT")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DATABASE_URL"))),(0,i.kt)("p",null,"This restriction is to avoid accidentally exposing system environment variables.\nAn error will be raised by Platformatic if it finds a configuration placeholder\nthat isn't allowed."),(0,i.kt)("p",null,"The default allow list can be extended by passing a ",(0,i.kt)("inlineCode",{parentName:"p"},"--allow-env")," CLI option with a\ncomma separated list of strings, for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx platformatic service --allow-env=HOST,SERVER_LOGGER_LEVEL\n")),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"--allow-env")," is passed as an option to the CLI, it will be merged with the\ndefault allow list."))}d.isMDXComponent=!0}}]);