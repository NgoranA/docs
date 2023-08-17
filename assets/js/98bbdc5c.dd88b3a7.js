"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[31346],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,k=d["".concat(p,".").concat(u)]||d[u]||c[u]||r;return n?i.createElement(k,o(o({ref:t},m),{},{components:n})):i.createElement(k,o({ref:t},m))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},57530:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var i=n(87462),a=(n(67294),n(3905));const r={},o="Configuration",l={unversionedId:"reference/runtime/configuration",id:"version-0.36.0/reference/runtime/configuration",title:"Configuration",description:"Platformatic Runtime is configured with a configuration file. It supports the",source:"@site/versioned_docs/version-0.36.0/reference/runtime/configuration.md",sourceDirName:"reference/runtime",slug:"/reference/runtime/configuration",permalink:"/docs/reference/runtime/configuration",draft:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-0.36.0/reference/runtime/configuration.md",tags:[],version:"0.36.0",frontMatter:{}},p={},s=[{value:"Configuration file",id:"configuration-file",level:2},{value:"Supported formats",id:"supported-formats",level:3},{value:"Settings",id:"settings",level:2},{value:"<code>autoload</code>",id:"autoload",level:3},{value:"<code>services</code>",id:"services",level:3},{value:"<code>entrypoint</code>",id:"entrypoint",level:3},{value:"<code>hotReload</code>",id:"hotreload",level:3},{value:"<code>allowCycles</code>",id:"allowcycles",level:3},{value:"<code>telemetry</code>",id:"telemetry",level:3},{value:"Environment variable placeholders",id:"environment-variable-placeholders",level:2},{value:"Setting environment variables",id:"setting-environment-variables",level:3},{value:"Allowed placeholder names",id:"allowed-placeholder-names",level:3}],m={toc:s},d="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Platformatic Runtime is configured with a configuration file. It supports the\nuse of environment variables as setting values with ",(0,a.kt)("a",{parentName:"p",href:"#configuration-placeholders"},"configuration placeholders"),"."),(0,a.kt)("h2",{id:"configuration-file"},"Configuration file"),(0,a.kt)("p",null,"If the Platformatic CLI finds a file in the current working directory matching\none of these filenames, it will automatically load it:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"platformatic.runtime.json")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"platformatic.runtime.json5")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"platformatic.runtime.yml")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"platformatic.runtime.yaml")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"platformatic.runtime.tml")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"platformatic.runtime.toml"))),(0,a.kt)("p",null,"Alternatively, a ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/cli#service"},(0,a.kt)("inlineCode",{parentName:"a"},"--config")," option")," with a configuration\nfilepath can be passed to most ",(0,a.kt)("inlineCode",{parentName:"p"},"platformatic runtime")," CLI commands."),(0,a.kt)("p",null,"The configuration examples in this reference use JSON."),(0,a.kt)("h3",{id:"supported-formats"},"Supported formats"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Format"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Extensions"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"JSON"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},".json"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"JSON5"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},".json5"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"YAML"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},".yml"),", ",(0,a.kt)("inlineCode",{parentName:"td"},".yaml"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"TOML"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},".tml"))))),(0,a.kt)("p",null,"Comments are supported by the JSON5, YAML and TOML file formats."),(0,a.kt)("h2",{id:"settings"},"Settings"),(0,a.kt)("p",null,"Configuration settings are organized into the following groups:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#autoload"},(0,a.kt)("inlineCode",{parentName:"a"},"autoload"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#services"},(0,a.kt)("inlineCode",{parentName:"a"},"services"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#entrypoint"},(0,a.kt)("inlineCode",{parentName:"a"},"entrypoint"))," ",(0,a.kt)("strong",{parentName:"li"},"(required)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#hotReload"},(0,a.kt)("inlineCode",{parentName:"a"},"hotReload"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#allowCycles"},(0,a.kt)("inlineCode",{parentName:"a"},"allowCycles"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#telemetry"},(0,a.kt)("inlineCode",{parentName:"a"},"telemetry")))),(0,a.kt)("p",null,"Configuration settings containing sensitive data should be set using\n",(0,a.kt)("a",{parentName:"p",href:"#configuration-placeholders"},"configuration placeholders"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"autoload")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"services")," settings can be used together, but at least one\nof them must be provided. When the configuration file is parsed, ",(0,a.kt)("inlineCode",{parentName:"p"},"autoload"),"\nconfiguration is translated into ",(0,a.kt)("inlineCode",{parentName:"p"},"services")," configuration."),(0,a.kt)("h3",{id:"autoload"},(0,a.kt)("inlineCode",{parentName:"h3"},"autoload")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"autoload")," configuration is intended to be used with monorepo applications.\n",(0,a.kt)("inlineCode",{parentName:"p"},"autoload")," is an object with the following settings:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"path"))," (",(0,a.kt)("strong",{parentName:"li"},"required"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),") - The path to a directory containing the\nmicroservices to load. In a traditional monorepo application, this directory is\ntypically named ",(0,a.kt)("inlineCode",{parentName:"li"},"packages"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"exclude"))," (",(0,a.kt)("inlineCode",{parentName:"li"},"array")," of ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),"s) - Child directories inside of ",(0,a.kt)("inlineCode",{parentName:"li"},"path")," that\nshould not be processed."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"mappings"))," (",(0,a.kt)("inlineCode",{parentName:"li"},"object"),") - Each microservice is given an ID and is expected\nto have a Platformatic configuration file. By default the ID is the\nmicroservice's directory name, and the configuration file is expected to be a\nwell-known Platformatic configuration file. ",(0,a.kt)("inlineCode",{parentName:"li"},"mappings")," can be used to override\nthese default values.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"id"))," (",(0,a.kt)("strong",{parentName:"li"},"required"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),") - The overridden ID. This becomes the new\nmicroservice ID."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"config")," ("),"required**, ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),") - The overridden configuration file\nname. This is the file that will be used when starting the microservice.")))),(0,a.kt)("h3",{id:"services"},(0,a.kt)("inlineCode",{parentName:"h3"},"services")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"services")," is an array of objects that defines the microservices managed by the\nruntime. Each service object supports the following settings:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"id"))," (",(0,a.kt)("strong",{parentName:"li"},"required"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),") - A unique identifier for the microservice.\nWhen working with the Platformatic Composer, this value corresponds to the ",(0,a.kt)("inlineCode",{parentName:"li"},"id"),"\nproperty of each object in the ",(0,a.kt)("inlineCode",{parentName:"li"},"services")," section of the config file. When\nworking with client objects, this corresponds to the optional ",(0,a.kt)("inlineCode",{parentName:"li"},"serviceId"),"\nproperty or the ",(0,a.kt)("inlineCode",{parentName:"li"},"name")," field in the client's ",(0,a.kt)("inlineCode",{parentName:"li"},"package.json")," file if a\n",(0,a.kt)("inlineCode",{parentName:"li"},"serviceId")," is not explicitly provided."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"path"))," (",(0,a.kt)("strong",{parentName:"li"},"required"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),") - The path to the directory containing\nthe microservice."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"config"))," (",(0,a.kt)("strong",{parentName:"li"},"required"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),") - The configuration file used to start\nthe microservice.")),(0,a.kt)("h3",{id:"entrypoint"},(0,a.kt)("inlineCode",{parentName:"h3"},"entrypoint")),(0,a.kt)("p",null,"The Platformatic Runtime's entrypoint is a microservice that is exposed\npublicly. This value must be the ID of a service defined via the ",(0,a.kt)("inlineCode",{parentName:"p"},"autoload")," or\n",(0,a.kt)("inlineCode",{parentName:"p"},"services")," configuration."),(0,a.kt)("h3",{id:"hotreload"},(0,a.kt)("inlineCode",{parentName:"h3"},"hotReload")),(0,a.kt)("p",null,"An optional boolean, defaulting to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),", indicating if hot reloading should\nbe enabled for the runtime. If this value is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),", it will disable\nhot reloading for any microservices managed by the runtime. If this value is\n",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", hot reloading for individual microservices is managed by the\nconfiguration of that microservice."),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"While hot reloading is useful for development, it is not recommended for use in\nproduction.")),(0,a.kt)("h3",{id:"allowcycles"},(0,a.kt)("inlineCode",{parentName:"h3"},"allowCycles")),(0,a.kt)("p",null,"An optional boolean, defaulting to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),", indicating if dependency cycles\nare allowed between microservices managed by the runtime. When the Platformatic\nRuntime parses the provided configuration, it examines the clients of each\nmicroservice, as well as the services of Platformatic Composer applications to\nbuild a dependency graph. A topological sort is performed on this dependency\ngraph so that each service is started after all of its dependencies have been\nstarted. If there are cycles, the topological sort fails and the Runtime does\nnot start any applications."),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"allowCycles")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", the topological sort is skipped, and the\nmicroservices are started in the order specified in the configuration file."),(0,a.kt)("h3",{id:"telemetry"},(0,a.kt)("inlineCode",{parentName:"h3"},"telemetry")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://opentelemetry.io/"},"Open Telemetry")," is optionally supported with these settings:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"serviceName"))," (",(0,a.kt)("strong",{parentName:"li"},"required"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),") \u2014 Name of the service as will be reported in open telemetry. In the ",(0,a.kt)("inlineCode",{parentName:"li"},"runtime")," case, the name of the services as reported in traces is ",(0,a.kt)("inlineCode",{parentName:"li"},"${serviceName}-${serviceId}"),", where ",(0,a.kt)("inlineCode",{parentName:"li"},"serviceId")," is the id of the service in the runtime."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"version"))," (",(0,a.kt)("inlineCode",{parentName:"li"},"string"),") \u2014 Optional version (free form)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"exporter"))," (",(0,a.kt)("inlineCode",{parentName:"li"},"object"),") \u2014 Exporter configuration object. If not defined, the exporter defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"console"),". This object has the following properties:"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"skip"))," (",(0,a.kt)("inlineCode",{parentName:"li"},"array"),"). Optional list of operations to skip when exporting telemetry in the form of ",(0,a.kt)("inlineCode",{parentName:"li"},"${method}/${path}"),". e.g.: ",(0,a.kt)("inlineCode",{parentName:"li"},"GET/documentation/json")," ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"type"))," (",(0,a.kt)("inlineCode",{parentName:"li"},"string"),") \u2014 Exporter type. Supported values are ",(0,a.kt)("inlineCode",{parentName:"li"},"console"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"otlp"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"zipkin")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"memory")," (default: ",(0,a.kt)("inlineCode",{parentName:"li"},"console"),"). ",(0,a.kt)("inlineCode",{parentName:"li"},"memory")," is only supported for testing purposes. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"options"))," (",(0,a.kt)("inlineCode",{parentName:"li"},"object"),") \u2014 These options are supported:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"url"))," (",(0,a.kt)("inlineCode",{parentName:"li"},"string"),") \u2014 The URL to send the telemetry to. Required for ",(0,a.kt)("inlineCode",{parentName:"li"},"otlp")," exporter. This has no effect on ",(0,a.kt)("inlineCode",{parentName:"li"},"console")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"memory")," exporters."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"headers"))," (",(0,a.kt)("inlineCode",{parentName:"li"},"object"),") \u2014 Optional headers to send with the telemetry. This has no effect on ",(0,a.kt)("inlineCode",{parentName:"li"},"console")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"memory")," exporters.")))))),(0,a.kt)("p",null,"Note that OTLP traces can be consumed by different solutions, like ",(0,a.kt)("a",{parentName:"p",href:"https://www.jaegertracing.io/"},"Jaeger"),". ",(0,a.kt)("a",{parentName:"p",href:"https://opentelemetry.io/ecosystem/vendors/"},"Here")," the full list."),(0,a.kt)("p",null,"  ",(0,a.kt)("em",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "telemetry": {\n      "serviceName": "test-service",\n      "exporter": {\n          "type": "otlp",\n          "options": {\n              "url": "http://localhost:4318/v1/traces"\n          }\n      }\n  }\n}\n')),(0,a.kt)("h2",{id:"environment-variable-placeholders"},"Environment variable placeholders"),(0,a.kt)("p",null,"The value for any configuration setting can be replaced with an environment\nvariable by adding a placeholder in the configuration file, for example\n",(0,a.kt)("inlineCode",{parentName:"p"},"{PLT_ENTRYPOINT}"),"."),(0,a.kt)("p",null,"All placeholders in a configuration must be available as an environment\nvariable and must meet the\n",(0,a.kt)("a",{parentName:"p",href:"#allowed-placeholder-names"},"allowed placeholder name")," rules."),(0,a.kt)("h3",{id:"setting-environment-variables"},"Setting environment variables"),(0,a.kt)("p",null,"If a ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file exists it will automatically be loaded by Platformatic using\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/motdotla/dotenv"},(0,a.kt)("inlineCode",{parentName:"a"},"dotenv")),". For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext",metastring:'title=".env"',title:'".env"'},"PLT_ENTRYPOINT=service\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file must be located in the same folder as the Platformatic\nconfiguration file or in the current working directory."),(0,a.kt)("p",null,"Environment variables can also be set directly on the commmand line, for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"PLT_ENTRYPOINT=service npx platformatic runtime\n")),(0,a.kt)("h3",{id:"allowed-placeholder-names"},"Allowed placeholder names"),(0,a.kt)("p",null,"Only placeholder names prefixed with ",(0,a.kt)("inlineCode",{parentName:"p"},"PLT_"),", or that are in this allow list,\nwill be dynamically replaced in the configuration file:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PORT")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"DATABASE_URL"))),(0,a.kt)("p",null,"This restriction is to avoid accidentally exposing system environment variables.\nAn error will be raised by Platformatic if it finds a configuration placeholder\nthat isn't allowed."),(0,a.kt)("p",null,"The default allow list can be extended by passing a ",(0,a.kt)("inlineCode",{parentName:"p"},"--allow-env")," CLI option\nwith a comma separated list of strings, for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx platformatic runtime --allow-env=HOST,SERVER_LOGGER_LEVEL\n")),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"--allow-env")," is passed as an option to the CLI, it will be merged with the\ndefault allow list."))}c.isMDXComponent=!0}}]);