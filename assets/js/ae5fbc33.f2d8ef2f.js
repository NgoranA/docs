"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[11056],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),f=a,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},17751:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={},i="Programmatic API",l={unversionedId:"reference/db/programmatic",id:"version-0.30.1/reference/db/programmatic",title:"Programmatic API",description:"It's possible to start an instance of Platformatic DB from JavaScript.",source:"@site/versioned_docs/version-0.30.1/reference/db/programmatic.md",sourceDirName:"reference/db",slug:"/reference/db/programmatic",permalink:"/docs/0.30.1/reference/db/programmatic",draft:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-0.30.1/reference/db/programmatic.md",tags:[],version:"0.30.1",frontMatter:{},sidebar:"docs",previous:{title:"Logging",permalink:"/docs/0.30.1/reference/db/logging"},next:{title:"Platformatic DB Dashboard",permalink:"/docs/0.30.1/reference/db/dashboard"}},s={},c=[{value:"API",id:"api",level:2},{value:"buildServer(config)",id:"buildserverconfig",level:3},{value:"RestartableApp",id:"restartableapp",level:3},{value:".start()",id:"start",level:4},{value:".restart()",id:"restart",level:4},{value:".close()",id:"close",level:4}],p={toc:c},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"programmatic-api"},"Programmatic API"),(0,a.kt)("p",null,"It's possible to start an instance of Platformatic DB from JavaScript."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { buildServer } from '@platformatic/db'\n\nconst app = await buildServer('/path/to/platformatic.db.json')\n\nawait app.start() // this will start our server\n\nconsole.log('URL', app.url)\n\nconst res = await fetch(app.url)\nconsole.log(await res.json())\n\n// do something\n\nawait app.close()\n")),(0,a.kt)("p",null,"It is also possible to customize the configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { buildServer } from '@platformatic/db'\n\nconst app = await buildServer({\n  server: {\n    hostname: '127.0.0.1',\n    port: 0\n  },\n  db: {\n    connectionString: 'sqlite://test.sqlite'\n  },\n})\n\nawait app.start() // this will start our server\n\nconsole.log('URL', app.url)\n\nconst res = await fetch(app.url)\nconsole.log(await res.json())\n\n// do something\n\nawait app.close()\n")),(0,a.kt)("p",null,"For more details on how this is implemented, read ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.30.1/reference/service/programmatic"},"Platformatic Service Programmatic API"),"."),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("h3",{id:"buildserverconfig"},"buildServer(config)"),(0,a.kt)("p",null,"Returns an instance of the ",(0,a.kt)("a",{parentName:"p",href:"#RestartableApp"},"restartable application")),(0,a.kt)("h3",{id:"restartableapp"},"RestartableApp"),(0,a.kt)("h4",{id:"start"},".start()"),(0,a.kt)("p",null,"Listen to the hostname/port combination specified in the config."),(0,a.kt)("h4",{id:"restart"},".restart()"),(0,a.kt)("p",null,"Restart the Fastify application"),(0,a.kt)("h4",{id:"close"},".close()"),(0,a.kt)("p",null,"Stops the application."))}u.isMDXComponent=!0}}]);