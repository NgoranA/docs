"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[29802],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},31422:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const r={},i="Telemetry with Jaeger",l={unversionedId:"guides/telemetry",id:"version-0.35.0/guides/telemetry",title:"Telemetry with Jaeger",description:"Introduction",source:"@site/versioned_docs/version-0.35.0/guides/telemetry.md",sourceDirName:"guides",slug:"/guides/telemetry",permalink:"/docs/0.35.0/guides/telemetry",draft:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-0.35.0/guides/telemetry.md",tags:[],version:"0.35.0",frontMatter:{},sidebar:"docs",previous:{title:"Migrating an Express app to Platformatic Service",permalink:"/docs/0.35.0/guides/migrating-express-app-to-platformatic-service"},next:{title:"Reference",permalink:"/docs/0.35.0/category/reference"}},s={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Jaeger setup",id:"jaeger-setup",level:2},{value:"Platformatic setup",id:"platformatic-setup",level:2},{value:"Platformatic DB Service",id:"platformatic-db-service",level:3},{value:"Platformatic Service",id:"platformatic-service",level:3},{value:"Platformatic Composer",id:"platformatic-composer",level:3},{value:"Run the Test",id:"run-the-test",level:2},{value:"What if you want to use Zipkin?",id:"what-if-you-want-to-use-zipkin",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"telemetry-with-jaeger"},"Telemetry with Jaeger"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Platformatic supports Open Telemetry integration. This allows you to send telemetry data to one of the OTLP compatible servers (",(0,o.kt)("a",{parentName:"p",href:"https://opentelemetry.io/ecosystem/vendors/"},"see here"),") or to a Zipkin server. Let's show this with ",(0,o.kt)("a",{parentName:"p",href:"https://www.jaegertracing.io/"},"Jaeger"),"."),(0,o.kt)("h2",{id:"jaeger-setup"},"Jaeger setup"),(0,o.kt)("p",null,"The quickest way is to use docker: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d --name jaeger \\\n  -e COLLECTOR_OTLP_ENABLED=true \\\n  -p 16686:16686 \\\n  -p 4317:4317 \\\n  -p 4318:4318 \\\n  jaegertracing/all-in-one:latest\n")),(0,o.kt)("p",null,"Check that the server is running by opening ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:16686/"},"http://localhost:16686/")," in your browser."),(0,o.kt)("h2",{id:"platformatic-setup"},"Platformatic setup"),(0,o.kt)("p",null,"Will test this with a Platformatic Composer that proxy requests to a Platformatic Service, which in turn invokes a Platformatic DB Service.\nIn this way we show that the telemetry is propagated from the Composer throughout the services and the collected correctly.\nLet's setup all this components:"),(0,o.kt)("h3",{id:"platformatic-db-service"},"Platformatic DB Service"),(0,o.kt)("p",null,"Create a folder for DB and cd into it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir test-db\ncd test-db\n")),(0,o.kt)("p",null,"Then create a ",(0,o.kt)("inlineCode",{parentName:"p"},"db")," in the folder using ",(0,o.kt)("inlineCode",{parentName:"p"},"npx create-platformatic@latest"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-platformatic@latest\n")),(0,o.kt)("p",null,"To make it simple, use ",(0,o.kt)("inlineCode",{parentName:"p"},"sqlite")," and create/apply the default migrations. This DB Service is exposed on port ",(0,o.kt)("inlineCode",{parentName:"p"},"5042"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'\n\u279c npx create-platformatic@latest\n\n Hello user, welcome to Platformatic 0.32.0!\n Let\'s start by creating a new project.\n? Which kind of project do you want to create? DB\n? Where would you like to create your project? .\n? What database do you want to use? SQLite\n? Do you want to use the connection string "sqlite://./db.sqlite"? Confirm\n? Do you want to create default migrations? yes\n? Do you want to create a plugin? no\n? Do you want to use TypeScript? no\n? What port do you want to use? 5042\n[15:40:46] INFO: Configuration file platformatic.db.json successfully created.\n[15:40:46] INFO: Environment file .env successfully created.\n[15:40:46] INFO: Migrations folder migrations successfully created.\n[15:40:46] INFO: Migration file 001.do.sql successfully created.\n[15:40:46] INFO: Migration file 001.undo.sql successfully created.\n[15:40:46] INFO: Plugin file created at plugin.js\n? Do you want to run npm install? no\n? Do you want to apply migrations? yes\n\u2714 ...done!\n? Do you want to generate types? no\n? Do you want to create the github action to deploy this application to Platformatic Cloud dynamic workspace? no\n? Do you want to create the github action to deploy this application to Platformatic Cloud static workspace? no\n \nAll done! Please open the project directory and check the README.\nWill test this in one example with a Platformatic Composer that proxy requests to a Platformatic Service, which in turn invokes a Platformatic DB.\n\n')),(0,o.kt)("p",null,"Open the ",(0,o.kt)("inlineCode",{parentName:"p"},"platformatic.db.json")," file and add the telementry configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'  "telemetry": {\n    "serviceName": "test-db",\n    "exporter": {\n      "type": "otlp",\n      "options": {\n        "url": "http://localhost:4318/v1/traces"\n      }\n    }\n  }\n')),(0,o.kt)("p",null,"Finally, start the DB service:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx platformatic db start\n")),(0,o.kt)("h3",{id:"platformatic-service"},"Platformatic Service"),(0,o.kt)("p",null,"Create at the same level of ",(0,o.kt)("inlineCode",{parentName:"p"},"test-db")," another folder for Service and cd into it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir test-service\ncd test-service\n")),(0,o.kt)("p",null,"Then create a ",(0,o.kt)("inlineCode",{parentName:"p"},"service")," on the ",(0,o.kt)("inlineCode",{parentName:"p"},"5043")," port in the folder using ",(0,o.kt)("inlineCode",{parentName:"p"},"npx create-platformatic@latest"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'\u279c npx create-platformatic@latest\n\n Hello user, welcome to Platformatic 0.32.0!\n Let\'s start by creating a new project.\n? Which kind of project do you want to create? Service\n? Where would you like to create your project? .\n? Do you want to run npm install? no\n? Do you want to use TypeScript? no\n? What port do you want to use? 5043\n[15:55:35] INFO: Configuration file platformatic.service.json successfully created.\n[15:55:35] INFO: Environment file .env successfully created.\n[15:55:35] INFO: Plugins folder "plugins" successfully created.\n[15:55:35] INFO: Routes folder "routes" successfully created.\n? Do you want to create the github action to deploy this application to Platformatic Cloud dynamic workspace? no\n? Do you want to create the github action to deploy this application to Platformatic Cloud static workspace? no\n\n')),(0,o.kt)("p",null,"Open the ",(0,o.kt)("inlineCode",{parentName:"p"},"platformatic.service.json")," file and add the following telemetry configuration (it's exactly the same as ",(0,o.kt)("inlineCode",{parentName:"p"},"DB"),", but with a different ",(0,o.kt)("inlineCode",{parentName:"p"},"serviceName"),")"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'  "telemetry": {\n    "serviceName": "test-service",\n    "exporter": {\n      "type": "otlp",\n      "options": {\n        "url": "http://localhost:4318/v1/traces"\n      }\n    }\n  }\n')),(0,o.kt)("p",null,"We want this service to invoke the DB service, so we need to add a client for ",(0,o.kt)("inlineCode",{parentName:"p"},"test-db")," to it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx platformatic client http://127.0.0.1:5042 js --name movies\n")),(0,o.kt)("p",null,"Check ",(0,o.kt)("inlineCode",{parentName:"p"},"platformatic.service.json")," to see that the client has been added (",(0,o.kt)("inlineCode",{parentName:"p"},"PLT_MOVIES_URL")," is defined in ",(0,o.kt)("inlineCode",{parentName:"p"},".env"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'    "clients": [\n    {\n      "schema": "movies/movies.openapi.json",\n      "name": "movies",\n      "type": "openapi",\n      "url": "{PLT_MOVIES_URL}"\n    }\n  ]\n')),(0,o.kt)("p",null,"Now open ",(0,o.kt)("inlineCode",{parentName:"p"},"routes/root.js")," and add the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"  fastify.get('/movies-length', async (request, reply) => {\n    const movies = await request.movies.getMovies()\n    return { length: movies.length }\n  })\n")),(0,o.kt)("p",null,"This code calls ",(0,o.kt)("inlineCode",{parentName:"p"},"movies")," to get all the movies and returns the length of the array."),(0,o.kt)("p",null,"Finally, start the service:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx platformatic service start\n")),(0,o.kt)("h3",{id:"platformatic-composer"},"Platformatic Composer"),(0,o.kt)("p",null,"Create at the same level of ",(0,o.kt)("inlineCode",{parentName:"p"},"test-db")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"test-service")," another folder for Composer and cd into it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir test-composer\ncd test-composer\n")),(0,o.kt)("p",null,"Then create a ",(0,o.kt)("inlineCode",{parentName:"p"},"composer")," on the ",(0,o.kt)("inlineCode",{parentName:"p"},"5044")," port in the folder using ",(0,o.kt)("inlineCode",{parentName:"p"},"npx create-platformatic@latest"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\u279c npx create-platformatic@latest\n\n Hello marcopiraccini, welcome to Platformatic 0.32.0!\n Let's start by creating a new project.\n? Which kind of project do you want to create? Composer\n? Where would you like to create your project? .\n? What port do you want to use? 5044\n? Do you want to run npm install? no\n[16:05:28] INFO: Configuration file platformatic.composer.json successfully created.\n[16:05:28] INFO: Environment file .env successfully created.\n? Do you want to create the github action to deploy this application to Platformatic Cloud dynamic workspace? no\n? Do you want to create the github action to deploy this application to Platformatic Cloud static workspace? no\n \nAll done! Please open the project directory and check the README.\n")),(0,o.kt)("p",null,"Open ",(0,o.kt)("inlineCode",{parentName:"p"},"platformatic.composer.js")," and change it to the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "https://platformatic.dev/schemas/v0.32.0/composer",\n  "server": {\n    "hostname": "{PLT_SERVER_HOSTNAME}",\n    "port": "{PORT}",\n    "logger": {\n      "level": "{PLT_SERVER_LOGGER_LEVEL}"\n    }\n  },\n  "composer": {\n    "services": [\n      {\n        "id": "example",\n        "origin": "http://127.0.0.1:5043",\n        "openapi": {\n          "url": "/documentation/json"\n        }\n      }\n    ],\n    "refreshTimeout": 3000\n  },\n  "telemetry": {\n    "serviceName": "test-composer",\n    "exporter": {\n      "type": "otlp",\n      "options": {\n        "url": "http://localhost:4318/v1/traces"\n      }\n    }\n  },\n  "watch": true\n}\n')),(0,o.kt)("p",null,"Note that we just added ",(0,o.kt)("inlineCode",{parentName:"p"},"test-service")," as ",(0,o.kt)("inlineCode",{parentName:"p"},"origin")," of the proxed service and added the usual ",(0,o.kt)("inlineCode",{parentName:"p"},"telementry")," configuration, with a different ",(0,o.kt)("inlineCode",{parentName:"p"},"serviceName"),"."),(0,o.kt)("p",null,"Finally, start the composer:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx platformatic composer start\n")),(0,o.kt)("h2",{id:"run-the-test"},"Run the Test"),(0,o.kt)("p",null,"Check that the composer is exposing ",(0,o.kt)("inlineCode",{parentName:"p"},"movies-length")," opening: ",(0,o.kt)("a",{parentName:"p",href:"http://127.0.0.1:5044/documentation/"},"http://127.0.0.1:5044/documentation/")),(0,o.kt)("p",null,"You should see:\n",(0,o.kt)("img",{alt:"image",src:n(82939).Z,width:"1093",height:"342"})),(0,o.kt)("p",null,"To add some data, we can POST directly to the DB service (port ",(0,o.kt)("inlineCode",{parentName:"p"},"5042"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST -H "Content-Type: application/json" -d \'{"title":"The Matrix"}\' http://127.0.0.1:5042/movies \ncurl -X POST -H "Content-Type: application/json" -d \'{"title":"The Matrix Reloaded"}\'  http://127.0.0.1:5042/movies \n')),(0,o.kt)("p",null,"Now, let's check that the composer (port 5044) is working:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl http://127.0.0.1:5044/movies-length\n")),(0,o.kt)("p",null,"If the composer is working correctly, you should see:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{"length":2}\n')),(0,o.kt)("p",null,"However, the main interest of this example is to show how to use the Platformatic Telemetry, so let's check it.\nOpen the Jaeger UI at ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:16686/"},"http://localhost:16686/")," and you should see something like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(86435).Z,width:"1073",height:"698"})),(0,o.kt)("p",null,"Select on the left the ",(0,o.kt)("inlineCode",{parentName:"p"},"test-composer")," service and the ",(0,o.kt)("inlineCode",{parentName:"p"},"GET /movies-length"),' operation, click on "Find traces" and you should see something like this:'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(90502).Z,width:"1640",height:"606"})),(0,o.kt)("p",null,"You can then click on the trace and see the details:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(15425).Z,width:"1353",height:"404"})),(0,o.kt)("p",null,"Note that everytime a request is received or client call is done, a new span is started. So we have:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"One span for the request received by the ",(0,o.kt)("inlineCode",{parentName:"li"},"test-composer")," "),(0,o.kt)("li",{parentName:"ul"},"One span for the client call to ",(0,o.kt)("inlineCode",{parentName:"li"},"test-service")),(0,o.kt)("li",{parentName:"ul"},"One span for the request received by ",(0,o.kt)("inlineCode",{parentName:"li"},"test-service")),(0,o.kt)("li",{parentName:"ul"},"One span for the client call to ",(0,o.kt)("inlineCode",{parentName:"li"},"test-db")),(0,o.kt)("li",{parentName:"ul"},"One span for the request received by ",(0,o.kt)("inlineCode",{parentName:"li"},"test-db"))),(0,o.kt)("p",null,"All these spans are linked together, so you can see the whole trace."),(0,o.kt)("h2",{id:"what-if-you-want-to-use-zipkin"},"What if you want to use Zipkin?"),(0,o.kt)("p",null,"Starting from this example, it's also possible to run the same test using Zipkin. To do so, you need to start the Zipkin server:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d -p 9411:9411 openzipkin/zipkin\n")),(0,o.kt)("p",null,"Then, you need to change the ",(0,o.kt)("inlineCode",{parentName:"p"},"telemetry")," configuration in all the  ",(0,o.kt)("inlineCode",{parentName:"p"},"platformatic.*.json")," to the following (only the ",(0,o.kt)("inlineCode",{parentName:"p"},"exporter")," object is different`)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'  "telemetry": {\n    (...)\n    "exporter": {\n      "type": "zipkin",\n      "options": {\n        "url": "http://127.0.0.1:9411/api/v2/spans"\n      }\n    }\n  }\n')),(0,o.kt)("p",null,"The zipkin ui is available at ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:9411/"},"http://localhost:9411/")))}m.isMDXComponent=!0},82939:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/compose-openapi-336d2ae348d9fc45815c099b25e9b7ed.png"},86435:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/jaeger-1-24aa07f749ff6a07f71cf97b0fee13c2.png"},90502:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/jaeger-2-4dc771655ab5c0ded1490676a9fc3fd9.png"},15425:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/jaeger-3-ca388386c93e10b0833acbb652d9f4ff.png"}}]);