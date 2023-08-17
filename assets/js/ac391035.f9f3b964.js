"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[4778],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=o,g=c["".concat(p,".").concat(m)]||c[m]||u[m]||r;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},24018:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(87462),o=(n(67294),n(3905));const r={},i="Deploy to Fly.io with SQLite",l={unversionedId:"guides/deployment/deploy-to-fly-io-with-sqlite",id:"version-0.29.0/guides/deployment/deploy-to-fly-io-with-sqlite",title:"Deploy to Fly.io with SQLite",description:"To follow this how-to guide, you'll first need to install the Fly CLI and create",source:"@site/versioned_docs/version-0.29.0/guides/deployment/deploy-to-fly-io-with-sqlite.md",sourceDirName:"guides/deployment",slug:"/guides/deployment/deploy-to-fly-io-with-sqlite",permalink:"/docs/0.29.0/guides/deployment/deploy-to-fly-io-with-sqlite",draft:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-0.29.0/guides/deployment/deploy-to-fly-io-with-sqlite.md",tags:[],version:"0.29.0",frontMatter:{},sidebar:"docs",previous:{title:"Deployment",permalink:"/docs/0.29.0/guides/deployment/"},next:{title:"Advanced Fly.io Deployment",permalink:"/docs/0.29.0/guides/deployment/advanced-fly-io-deployment"}},p={},s=[{value:"Explicit builder",id:"explicit-builder",level:2},{value:"Database storage",id:"database-storage",level:2},{value:"Configure server",id:"configure-server",level:2},{value:"Configure environment",id:"configure-environment",level:2},{value:"Deploy application",id:"deploy-application",level:2}],d={toc:s},c="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deploy-to-flyio-with-sqlite"},"Deploy to Fly.io with SQLite"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"To follow this how-to guide, you'll first need to install the Fly CLI and create\nan account by ",(0,o.kt)("a",{parentName:"p",href:"https://fly.io/docs/hands-on/"},"following this official guide"),".\nYou will also need an existing Platformatic DB project, please check out our\ngetting started guide if needed.")),(0,o.kt)("p",null,"Navigate to your Platformatic DB project in the terminal on your local machine.\nRun ",(0,o.kt)("inlineCode",{parentName:"p"},"fly launch"),' and follow the prompts. When it asks if you want to deploy\nnow, say "no" as there are a few things that you\'ll need to configure first.'),(0,o.kt)("p",null,"You can also create the fly application with one line. This will create your\napplication in London (",(0,o.kt)("inlineCode",{parentName:"p"},"lhr"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"fly launch --no-deploy --generate-name --region lhr --org personal --path .\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"fly")," CLI should have created a ",(0,o.kt)("strong",{parentName:"p"},"fly.toml")," file in your project\ndirectory."),(0,o.kt)("h2",{id:"explicit-builder"},"Explicit builder"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"fly.toml")," file may be missing an explicit builder setting. To have\nconsistent builds, it is best to add a ",(0,o.kt)("inlineCode",{parentName:"p"},"build")," section:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'[build]\n  builder = "heroku/buildpacks:20"\n')),(0,o.kt)("h2",{id:"database-storage"},"Database storage"),(0,o.kt)("p",null,"Create a volume for database storage, naming it ",(0,o.kt)("inlineCode",{parentName:"p"},"data"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"fly volumes create data\n")),(0,o.kt)("p",null,"This will create storage in the same region as the application. The volume\ndefaults to 3GB size, use  ",(0,o.kt)("inlineCode",{parentName:"p"},"-s")," to change the size. For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"-s 10")," is 10GB."),(0,o.kt)("p",null,"Add a ",(0,o.kt)("inlineCode",{parentName:"p"},"mounts")," section in ",(0,o.kt)("strong",{parentName:"p"},"fly.toml"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'[mounts]\n  source = "data"\n  destination = "/app/.platformatic/data"\n')),(0,o.kt)("p",null,"Create a directory in your project where your SQLite database will be created:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p .platformatic/data\n\ntouch .platformatic/data/.gitkeep\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},".gitkeep")," file ensures that this directory will always be created when\nyour application is deployed."),(0,o.kt)("p",null,"You should also ensure that your SQLite database is ignored by Git. This helps\navoid inconsistencies when your application is deployed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'echo "*.db" >> .gitignore\n')),(0,o.kt)("p",null,"The command above assumes that your SQLite database file ends with the extension\n",(0,o.kt)("inlineCode",{parentName:"p"},".db")," \u2014 if the extension is different then you must change the command to match."),(0,o.kt)("p",null,"Change the connection string to an environment variable and make sure that\nmigrations are ",(0,o.kt)("inlineCode",{parentName:"p"},"autoApply"),"ing (for ",(0,o.kt)("inlineCode",{parentName:"p"},"platformatic@^0.4.0"),") in ",(0,o.kt)("strong",{parentName:"p"},"platformatic.db.json"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "db": {\n    "connectionString": "{DATABASE_URL}"\n  },\n  "migrations": {\n    "dir": "./migrations",\n    "autoApply": true\n  }\n}\n')),(0,o.kt)("h2",{id:"configure-server"},"Configure server"),(0,o.kt)("p",null,"Make sure that your ",(0,o.kt)("strong",{parentName:"p"},"platformatic.db.json")," uses environment variables\nfor the server section:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "server": {\n    "logger": {\n      "level": "{PLT_SERVER_LOGGER_LEVEL}"\n    },\n    "hostname": "{PLT_SERVER_HOSTNAME}",\n    "port": "{PORT}"\n  }\n}\n')),(0,o.kt)("h2",{id:"configure-environment"},"Configure environment"),(0,o.kt)("p",null,"Start with your local environment, create a ",(0,o.kt)("strong",{parentName:"p"},".env")," file and put the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"PORT=3042\nPLT_SERVER_HOSTNAME=127.0.0.1\nPLT_SERVER_LOGGER_LEVEL=debug\nDATABASE_URL=sqlite://.platformatic/data/movie-quotes.db\n")),(0,o.kt)("p",null,"Avoid accidental leaks by ignoring your ",(0,o.kt)("strong",{parentName:"p"},".env")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'echo ".env" >> .gitignore\n')),(0,o.kt)("p",null,"This same configuration needs to added to ",(0,o.kt)("strong",{parentName:"p"},"fly.toml"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'[env]\n  PORT = 8080\n  PLT_SERVER_HOSTNAME = "0.0.0.0"\n  PLT_SERVER_LOGGER_LEVEL = "info"\n  DATABASE_URL = "sqlite:///app/.platformatic/data/movie-quotes.db"\n')),(0,o.kt)("h2",{id:"deploy-application"},"Deploy application"),(0,o.kt)("p",null,"A valid ",(0,o.kt)("strong",{parentName:"p"},"package.json")," will be needed so if you do not have one, generate one\nby running ",(0,o.kt)("inlineCode",{parentName:"p"},"npm init"),"."),(0,o.kt)("p",null,"In your ",(0,o.kt)("strong",{parentName:"p"},"package.json"),", make sure there is a ",(0,o.kt)("inlineCode",{parentName:"p"},"start")," script to run your\napplication:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "start": "platformatic db"\n  }\n}\n')),(0,o.kt)("p",null,"Before deploying, make sure a ",(0,o.kt)("strong",{parentName:"p"},".dockerignore")," file is created:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cp .gitignore .dockerignore\n")),(0,o.kt)("p",null,"Finally, deploy the application to Fly by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"fly deploy\n")))}u.isMDXComponent=!0}}]);