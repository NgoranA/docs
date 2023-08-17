"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[81749],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),s=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,f=p["".concat(d,".").concat(m)]||p[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},285:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={},i="Platformatic DB Dashboard",l={unversionedId:"reference/db/dashboard",id:"version-0.35.0/reference/db/dashboard",title:"Platformatic DB Dashboard",description:"The Platformatic DB has a dashboard used to do several actions like see the current configuration and access documentation for your generated API.",source:"@site/versioned_docs/version-0.35.0/reference/db/dashboard.md",sourceDirName:"reference/db",slug:"/reference/db/dashboard",permalink:"/docs/0.35.0/reference/db/dashboard",draft:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-0.35.0/reference/db/dashboard.md",tags:[],version:"0.35.0",frontMatter:{},sidebar:"docs",previous:{title:"Programmatic API",permalink:"/docs/0.35.0/reference/db/programmatic"},next:{title:"Schema support",permalink:"/docs/0.35.0/reference/db/schema-support"}},d={},s=[{value:"Development Server",id:"development-server",level:2},{value:"Build",id:"build",level:2}],c={toc:s},p="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"platformatic-db-dashboard"},"Platformatic DB Dashboard"),(0,a.kt)("p",null,"The Platformatic DB has a dashboard used to do several actions like see the current configuration and access documentation for your generated API."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Be sure to set ",(0,a.kt)("inlineCode",{parentName:"p"},"dashboard: true")," on your ",(0,a.kt)("inlineCode",{parentName:"p"},"platformatic.db.json"),", as mentioned on the ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/db/configuration/#dashboard"},"config docs"),".")),(0,a.kt)("p",null,"It also integrates GraphiQL, to run queries and mutations against Platformatic DB Server."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"As mentioned on the ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/db/configuration#metrics"},"config docs"),", adding ",(0,a.kt)("inlineCode",{parentName:"p"},"metrics: true")," will allow to add also the Platformatic metrics to the dashboard.")),(0,a.kt)("h2",{id:"development-server"},"Development Server"),(0,a.kt)("p",null,"If you want to contribute on the dashboard, it needs to know where is Platformatic DB Server."),(0,a.kt)("p",null,"Create a ",(0,a.kt)("inlineCode",{parentName:"p"},"./packages/db-dashboard/.env")," file with the following content"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"VITE_SERVER_URL=http://localhost:3042\n")),(0,a.kt)("p",null,"If you set up Platformatic DB with a custom path for dashboard (found in ",(0,a.kt)("inlineCode",{parentName:"p"},"dashboard.path")," config value), you have to add"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"VITE_DASHBOARD_PATH=/your-custom-endpoint\n")),(0,a.kt)("p",null,"Note that this value is configured automatically by the script in ",(0,a.kt)("inlineCode",{parentName:"p"},"scripts/fix-dashboard-env.js")," that is executed before ",(0,a.kt)("inlineCode",{parentName:"p"},"dashboard:build"),"."),(0,a.kt)("p",null,"Or whatever port you are running platformatic DB server on. "),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Please double check the host too: if platformatic is running on ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," and you set ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost")," as ",(0,a.kt)("inlineCode",{parentName:"p"},"VITE_SERVER_URL"),", you'll get CORS errors.")),(0,a.kt)("p",null,"Then run "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm run dashboard:start\n")),(0,a.kt)("p",null,"You'll get vite's development server up and running."),(0,a.kt)("h2",{id:"build"},"Build"),(0,a.kt)("p",null,"Just run "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm run dashboard:build\n")),(0,a.kt)("p",null,"And ",(0,a.kt)("inlineCode",{parentName:"p"},"vite")," will create a production ready bundle that will be served by Platformatic DB."))}u.isMDXComponent=!0}}]);