"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[61416],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(n),k=i,u=c["".concat(p,".").concat(k)]||c[k]||d[k]||r;return n?a.createElement(u,o(o({ref:t},m),{},{components:n})):a.createElement(u,o({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},54952:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const r={},o="Configuration",l={unversionedId:"reference/composer/configuration",id:"version-0.34.0/reference/composer/configuration",title:"Configuration",description:"Platformatic Composer configured with a configuration file. It supports the use",source:"@site/versioned_docs/version-0.34.0/reference/composer/configuration.md",sourceDirName:"reference/composer",slug:"/reference/composer/configuration",permalink:"/docs/0.34.0/reference/composer/configuration",draft:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-0.34.0/reference/composer/configuration.md",tags:[],version:"0.34.0",frontMatter:{},sidebar:"docs",previous:{title:"Platformatic Composer",permalink:"/docs/0.34.0/reference/composer/introduction"},next:{title:"Programmatic API",permalink:"/docs/0.34.0/reference/composer/programmatic"}},p={},s=[{value:"Configuration file",id:"configuration-file",level:2},{value:"Supported formats",id:"supported-formats",level:3},{value:"Settings",id:"settings",level:2},{value:"<code>server</code>",id:"server",level:3},{value:"<code>metrics</code>",id:"metrics",level:3},{value:"<code>plugins</code>",id:"plugins",level:3},{value:"<code>watch</code>",id:"watch",level:3},{value:"<code>composer</code>",id:"composer",level:3},{value:"<code>openapi</code>",id:"openapi",level:4},{value:"<code>openapi-configuration</code>",id:"openapi-configuration",level:5},{value:"<code>telemetry</code>",id:"telemetry",level:3},{value:"Environment variable placeholders",id:"environment-variable-placeholders",level:2},{value:"Example",id:"example",level:3},{value:"Setting environment variables",id:"setting-environment-variables",level:3},{value:"Allowed placeholder names",id:"allowed-placeholder-names",level:3}],m={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"Platformatic Composer configured with a configuration file. It supports the use\nof environment variables as setting values with ",(0,i.kt)("a",{parentName:"p",href:"#configuration-placeholders"},"configuration placeholders"),"."),(0,i.kt)("h2",{id:"configuration-file"},"Configuration file"),(0,i.kt)("p",null,"If the Platformatic CLI finds a file in the current working directory matching\none of these filenames, it will automatically load it:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"platformatic.composer.json")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"platformatic.composer.json5")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"platformatic.composer.yml")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"platformatic.composer.yaml")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"platformatic.composer.tml")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"platformatic.composer.toml"))),(0,i.kt)("p",null,"Alternatively, a ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.34.0/reference/cli#composer"},(0,i.kt)("inlineCode",{parentName:"a"},"--config")," option")," with a configuration\nfilepath can be passed to most ",(0,i.kt)("inlineCode",{parentName:"p"},"platformatic composer")," CLI commands."),(0,i.kt)("p",null,"The configuration examples in this reference use JSON."),(0,i.kt)("h3",{id:"supported-formats"},"Supported formats"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Format"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Extensions"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"JSON"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},".json"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"JSON5"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},".json5"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"YAML"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},".yml"),", ",(0,i.kt)("inlineCode",{parentName:"td"},".yaml"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"TOML"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},".tml"))))),(0,i.kt)("p",null,"Comments are supported by the JSON5, YAML and TOML file formats."),(0,i.kt)("h2",{id:"settings"},"Settings"),(0,i.kt)("p",null,"Configuration settings are organised into the following groups:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#server"},(0,i.kt)("inlineCode",{parentName:"a"},"server"))," ",(0,i.kt)("strong",{parentName:"li"},"(required)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#composer"},(0,i.kt)("inlineCode",{parentName:"a"},"composer"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#metrics"},(0,i.kt)("inlineCode",{parentName:"a"},"metrics"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#plugins"},(0,i.kt)("inlineCode",{parentName:"a"},"plugins"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#telemetry"},(0,i.kt)("inlineCode",{parentName:"a"},"telemetry")))),(0,i.kt)("p",null,"Sensitive configuration settings containing sensitive data should be set using ",(0,i.kt)("a",{parentName:"p",href:"#configuration-placeholders"},"configuration placeholders"),"."),(0,i.kt)("h3",{id:"server"},(0,i.kt)("inlineCode",{parentName:"h3"},"server")),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"required")," object with the following settings:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"hostname"))," (",(0,i.kt)("strong",{parentName:"p"},"required"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),") \u2014 Hostname where Platformatic Composer server will listen for connections.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"port"))," (",(0,i.kt)("strong",{parentName:"p"},"required"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),") \u2014 Port where Platformatic Composer server will listen for connections.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"healthCheck"))," (",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"object"),") \u2014 Enables the health check endpoint."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Powered by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/fastify/under-pressure"},(0,i.kt)("inlineCode",{parentName:"a"},"@fastify/under-pressure")),"."),(0,i.kt)("li",{parentName:"ul"},"The value can be an object, used to specify the interval between checks in milliseconds (default: ",(0,i.kt)("inlineCode",{parentName:"li"},"5000"),")")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"Example")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "server": {\n    ...\n    "healthCheck": {\n      "interval": 2000\n    }\n  }\n}\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"cors"))," (",(0,i.kt)("inlineCode",{parentName:"p"},"object"),") \u2014 Configuration for Cross-Origin Resource Sharing (CORS) headers."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"All options will be passed to the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/fastify/fastify-cors"},(0,i.kt)("inlineCode",{parentName:"a"},"@fastify/cors"))," plugin. In order to specify a ",(0,i.kt)("inlineCode",{parentName:"li"},"RegExp")," object, you can pass ",(0,i.kt)("inlineCode",{parentName:"li"},"{ regexp: 'yourregexp' }"),",\nit will be automatically converted."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"logger"))," (",(0,i.kt)("inlineCode",{parentName:"p"},"object"),") -- the ",(0,i.kt)("a",{parentName:"p",href:"https://www.fastify.io/docs/latest/Reference/Server/#logger"},"logger configuration"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"pluginTimeout"))," (",(0,i.kt)("inlineCode",{parentName:"p"},"integer"),") -- the number of milliseconds to wait for a Fastify plugin to load, see the ",(0,i.kt)("a",{parentName:"p",href:"https://www.fastify.io/docs/latest/Reference/Server/#plugintimeout"},"fastify docs")," for more details.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"https"))," (",(0,i.kt)("inlineCode",{parentName:"p"},"object"),") - Configuration for HTTPS supporting the following options."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key")," (",(0,i.kt)("strong",{parentName:"li"},"required"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),", or ",(0,i.kt)("inlineCode",{parentName:"li"},"array"),") - If ",(0,i.kt)("inlineCode",{parentName:"li"},"key")," is a string, it specifies the private key to be used. If ",(0,i.kt)("inlineCode",{parentName:"li"},"key")," is an object, it must have a ",(0,i.kt)("inlineCode",{parentName:"li"},"path")," property specifying the private key file. Multiple keys are supported by passing an array of keys."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cert")," (",(0,i.kt)("strong",{parentName:"li"},"required"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),", or ",(0,i.kt)("inlineCode",{parentName:"li"},"array"),") - If ",(0,i.kt)("inlineCode",{parentName:"li"},"cert")," is a string, it specifies the certificate to be used. If ",(0,i.kt)("inlineCode",{parentName:"li"},"cert")," is an object, it must have a ",(0,i.kt)("inlineCode",{parentName:"li"},"path")," property specifying the certificate file. Multiple certificates are supported by passing an array of keys.")))),(0,i.kt)("h3",{id:"metrics"},(0,i.kt)("inlineCode",{parentName:"h3"},"metrics")),(0,i.kt)("p",null,"Configuration for a ",(0,i.kt)("a",{parentName:"p",href:"https://prometheus.io/"},"Prometheus")," server that will export monitoring metrics\nfor the current server instance. It uses ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/SkeLLLa/fastify-metrics"},(0,i.kt)("inlineCode",{parentName:"a"},"fastify-metrics")),"\nunder the hood."),(0,i.kt)("p",null,"This setting can be a ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," or an ",(0,i.kt)("inlineCode",{parentName:"p"},"object"),". If set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," the Prometheus server will listen on ",(0,i.kt)("inlineCode",{parentName:"p"},"http://0.0.0.0:9090"),"."),(0,i.kt)("p",null,"Supported object properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"hostname"))," (",(0,i.kt)("inlineCode",{parentName:"li"},"string"),") \u2014 The hostname where Prometheus server will listen for connections."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"port"))," (",(0,i.kt)("inlineCode",{parentName:"li"},"number"),") \u2014 The port where Prometheus server will listen for connections."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"auth"))," (",(0,i.kt)("inlineCode",{parentName:"li"},"object"),") \u2014 Basic Auth configuration. ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"username"))," and ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"password"))," are required here\n(use ",(0,i.kt)("a",{parentName:"li",href:"#environment-variables"},"environment variables"),").")),(0,i.kt)("h3",{id:"plugins"},(0,i.kt)("inlineCode",{parentName:"h3"},"plugins")),(0,i.kt)("p",null,"An optional object that defines the plugins loaded by Platformatic Composer."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"paths"))," (",(0,i.kt)("strong",{parentName:"p"},"required"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"array"),"): an array of paths (",(0,i.kt)("inlineCode",{parentName:"p"},"string"),")\nor an array of objects composed as follows,"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"path")," (",(0,i.kt)("inlineCode",{parentName:"li"},"string"),"): Relative path to plugin's entry point."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," (",(0,i.kt)("inlineCode",{parentName:"li"},"object"),"): Optional plugin options."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"encapsulate")," (",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),"): if the path is a folder, it instruct Platformatic to not encapsulate those plugins."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"maxDepth")," (",(0,i.kt)("inlineCode",{parentName:"li"},"integer"),"): if the path is a folder, it limits the depth to load the content from."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"typescript"))," (",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),"): enable typescript compilation. A ",(0,i.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," file is required in the same folder."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"Example")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "plugins": {\n    "paths": [{\n      "path": "./my-plugin.js",\n      "options": {\n        "foo": "bar"\n      }\n    }]\n  }\n}\n')))),(0,i.kt)("h3",{id:"watch"},(0,i.kt)("inlineCode",{parentName:"h3"},"watch")),(0,i.kt)("p",null,"Disable watching for file changes if set to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),". It can also be customized with the following options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"ignore"))," (",(0,i.kt)("inlineCode",{parentName:"p"},"string[]"),", default: ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),"): List of glob patterns to ignore when watching for changes. If ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," or not specified, ignore rule is not applied. Ignore option doesn't work for typescript files.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"allow"))," (",(0,i.kt)("inlineCode",{parentName:"p"},"string[]"),", default: ",(0,i.kt)("inlineCode",{parentName:"p"},"['*.js', '**/*.js']"),"): List of glob patterns to allow when watching for changes. If ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," or not specified, allow rule is not applied. Allow option doesn't work for typescript files."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"Example")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "watch": {\n    "ignore": ["*.mjs", "**/*.mjs"],\n    "allow": ["my-plugin.js", "plugins/*.js"]\n  }\n}\n')))),(0,i.kt)("h3",{id:"composer"},(0,i.kt)("inlineCode",{parentName:"h3"},"composer")),(0,i.kt)("p",null,"Configure ",(0,i.kt)("inlineCode",{parentName:"p"},"@platformatic/composer")," specific settings such as ",(0,i.kt)("inlineCode",{parentName:"p"},"services")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"refreshTimeout"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"services"))," (",(0,i.kt)("inlineCode",{parentName:"p"},"array"),", default: ",(0,i.kt)("inlineCode",{parentName:"p"},"[]"),") \u2014 is an array of objects that defines\nthe services managed by the composer. Each service object supports the following settings:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"id"))," (",(0,i.kt)("strong",{parentName:"li"},"required"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),") - A unique identifier for the service."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"origin"))," (",(0,i.kt)("inlineCode",{parentName:"li"},"string"),") - A service origin. Skip this option if the service is executing inside of Platformatic Runtime. In this case, service id will be used instead of origin."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"openapi"))," (",(0,i.kt)("strong",{parentName:"li"},"required"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),") - The configuration file used to compose OpenAPI specification. See the ",(0,i.kt)("a",{parentName:"li",href:"#openapi"},"openapi")," for details."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"proxy"))," (",(0,i.kt)("inlineCode",{parentName:"li"},"object")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),") - Service proxy configuration. If ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),", the service proxy is disabled.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"prefix")," (",(0,i.kt)("strong",{parentName:"li"},"required"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),") - Service proxy prefix. All service routes will be prefixed with this value."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"refreshTimeout"))," (",(0,i.kt)("inlineCode",{parentName:"li"},"number"),") - The number of milliseconds to wait for check for changes in the service OpenAPI specification. If not specified, the default value is ",(0,i.kt)("inlineCode",{parentName:"li"},"1000"),".")))),(0,i.kt)("h4",{id:"openapi"},(0,i.kt)("inlineCode",{parentName:"h4"},"openapi")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"url"))," (",(0,i.kt)("inlineCode",{parentName:"li"},"string"),") - A path of the route that exposes the OpenAPI specification. If a service is a Platformatic Service or Platformatic DB, use ",(0,i.kt)("inlineCode",{parentName:"li"},"/documentation/json")," as a value. Use this or ",(0,i.kt)("inlineCode",{parentName:"li"},"file")," option to specify the OpenAPI specification."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"file"))," (",(0,i.kt)("inlineCode",{parentName:"li"},"string"),") - A path to the OpenAPI specification file. Use this or ",(0,i.kt)("inlineCode",{parentName:"li"},"url")," option to specify the OpenAPI specification."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"prefix"))," (",(0,i.kt)("inlineCode",{parentName:"li"},"string"),") - A prefix for the OpenAPI specification. All service routes will be prefixed with this value."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"config"))," (",(0,i.kt)("inlineCode",{parentName:"li"},"string"),") - A path to the OpenAPI configuration file. This file is used to customize the OpenAPI specification. See the ",(0,i.kt)("a",{parentName:"li",href:"#openapi-configuration"},"openapi-configuration")," for details.")),(0,i.kt)("h5",{id:"openapi-configuration"},(0,i.kt)("inlineCode",{parentName:"h5"},"openapi-configuration")),(0,i.kt)("p",null,"The OpenAPI configuration file is a JSON file that is used to customize the OpenAPI specification. It supports the following options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"ignore"))," (",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),") - If ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", the route will be ignored by the composer.\nIf you want to ignore a specific method, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"ignore")," option in the nested method object."),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("em",{parentName:"p"},"Example")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "paths": {\n    "/users": {\n      "ignore": true\n    },\n    "/users/{id}": {\n      "get": { "ignore": true },\n      "put": { "ignore": true }\n    }\n  }\n}\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"alias")," (",(0,i.kt)("inlineCode",{parentName:"p"},"string"),") - Use it create an alias for the route path. Original route path will be ignored."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"Example")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "paths": {\n    "/users": {\n      "alias": "/customers"\n    }\n  }\n}\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"rename"))," (",(0,i.kt)("inlineCode",{parentName:"p"},"string"),") - Use it to rename composed route response fields.\nUse json schema format to describe the response structure. For now it works only for ",(0,i.kt)("inlineCode",{parentName:"p"},"200")," response."),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("em",{parentName:"p"},"Example")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "paths": {\n    "/users": {\n      "responses": {\n          "200": {\n            "type": "array",\n            "items": {\n              "type": "object",\n              "properties": {\n                "id": { "rename": "user_id" },\n                "name": { "rename": "first_name" }\n              }\n            }\n          }\n        }\n    }\n  }\n}\n')))),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Examples")),(0,i.kt)("p",null,"  Composition of two remote services:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "composer": {\n    "services": [\n      {\n        "id": "auth-service",\n        "origin": "https://auth-service.com",\n        "openapi": {\n          "url": "/documentation/json",\n          "prefix": "auth"\n        }\n      },\n      {\n        "id": "payment-service",\n        "origin": "https://payment-service.com",\n        "openapi": {\n          "file": "./schemas/payment-service.json"\n        }\n      }\n    ],\n    "refreshTimeout": 1000\n  }\n}\n')),(0,i.kt)("p",null,"  Composition of two local services inside of Platformatic Runtime:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "composer": {\n    "services": [\n      {\n        "id": "auth-service",\n        "openapi": {\n          "url": "/documentation/json",\n          "prefix": "auth"\n        }\n      },\n      {\n        "id": "payment-service",\n        "openapi": {\n          "file": "./schemas/payment-service.json"\n        }\n      }\n    ],\n    "refreshTimeout": 1000\n  }\n}\n')),(0,i.kt)("h3",{id:"telemetry"},(0,i.kt)("inlineCode",{parentName:"h3"},"telemetry")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://opentelemetry.io/"},"Open Telemetry")," is optionally supported with these settings:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"serviceName"))," (",(0,i.kt)("strong",{parentName:"li"},"required"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),") \u2014 Name of the service as will be reported in open telemetry."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"version"))," (",(0,i.kt)("inlineCode",{parentName:"li"},"string"),") \u2014 Optional version (free form)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"exporter"))," (",(0,i.kt)("inlineCode",{parentName:"li"},"object"),") \u2014 Exporter configuration object. If not defined, the exporter defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"console"),". This object has the following properties:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"type"))," (",(0,i.kt)("inlineCode",{parentName:"li"},"string"),") \u2014 Exporter type. Supported values are ",(0,i.kt)("inlineCode",{parentName:"li"},"console"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"otlp"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"zipkin")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"memory")," (default: ",(0,i.kt)("inlineCode",{parentName:"li"},"console"),"). ",(0,i.kt)("inlineCode",{parentName:"li"},"memory")," is only supported for testing purposes. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"options"))," (",(0,i.kt)("inlineCode",{parentName:"li"},"object"),") \u2014 These options are supported:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"url"))," (",(0,i.kt)("inlineCode",{parentName:"li"},"string"),") \u2014 The URL to send the telemetry to. Required for ",(0,i.kt)("inlineCode",{parentName:"li"},"otlp")," exporter. This has no effect on ",(0,i.kt)("inlineCode",{parentName:"li"},"console")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"memory")," exporters."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"headers"))," (",(0,i.kt)("inlineCode",{parentName:"li"},"object"),") \u2014 Optional headers to send with the telemetry. This has no effect on ",(0,i.kt)("inlineCode",{parentName:"li"},"console")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"memory")," exporters.")))))),(0,i.kt)("p",null,"Note that OTLP traces can be consumed by different solutions, like ",(0,i.kt)("a",{parentName:"p",href:"https://www.jaegertracing.io/"},"Jaeger"),". ",(0,i.kt)("a",{parentName:"p",href:"https://opentelemetry.io/ecosystem/vendors/"},"Here")," the full list."),(0,i.kt)("p",null,"  ",(0,i.kt)("em",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "telemetry": {\n      "serviceName": "test-service",\n      "exporter": {\n          "type": "otlp",\n          "options": {\n              "url": "http://localhost:4318/v1/traces"\n          }\n      }\n  }\n}\n')),(0,i.kt)("h2",{id:"environment-variable-placeholders"},"Environment variable placeholders"),(0,i.kt)("p",null,"The value for any configuration setting can be replaced with an environment variable\nby adding a placeholder in the configuration file, for example ",(0,i.kt)("inlineCode",{parentName:"p"},"{PLT_SERVER_LOGGER_LEVEL}"),"."),(0,i.kt)("p",null,"All placeholders in a configuration must be available as an environment variable\nand must meet the ",(0,i.kt)("a",{parentName:"p",href:"#allowed-placeholder-names"},"allowed placeholder name")," rules."),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="platformatic.service.json"',title:'"platformatic.service.json"'},'{\n  "server": {\n    "port": "{PORT}"\n  }\n}\n')),(0,i.kt)("p",null,"Platformatic will replace the placeholders in this example with the environment\nvariables of the same name."),(0,i.kt)("h3",{id:"setting-environment-variables"},"Setting environment variables"),(0,i.kt)("p",null,"If a ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file exists it will automatically be loaded by Platformatic using\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/motdotla/dotenv"},(0,i.kt)("inlineCode",{parentName:"a"},"dotenv")),". For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plaintext",metastring:'title=".env"',title:'".env"'},"PLT_SERVER_LOGGER_LEVEL=info\nPORT=8080\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file must be located in the same folder as the Platformatic configuration\nfile or in the current working directory."),(0,i.kt)("p",null,"Environment variables can also be set directly on the commmand line, for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"PLT_SERVER_LOGGER_LEVEL=debug npx platformatic composer\n")),(0,i.kt)("h3",{id:"allowed-placeholder-names"},"Allowed placeholder names"),(0,i.kt)("p",null,"Only placeholder names prefixed with ",(0,i.kt)("inlineCode",{parentName:"p"},"PLT_"),", or that are in this allow list, will be\ndynamically replaced in the configuration file:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PORT"))),(0,i.kt)("p",null,"This restriction is to avoid accidentally exposing system environment variables.\nAn error will be raised by Platformatic if it finds a configuration placeholder\nthat isn't allowed."),(0,i.kt)("p",null,"The default allow list can be extended by passing a ",(0,i.kt)("inlineCode",{parentName:"p"},"--allow-env")," CLI option with a\ncomma separated list of strings, for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx platformatic composer --allow-env=HOST,SERVER_LOGGER_LEVEL\n")),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"--allow-env")," is passed as an option to the CLI, it will be merged with the\ndefault allow list."))}d.isMDXComponent=!0}}]);