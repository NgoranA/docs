"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[23463],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=o.createContext({}),p=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(d.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,y=s["".concat(d,".").concat(m)]||s[m]||u[m]||r;return n?o.createElement(y,i(i({ref:t},c),{},{components:n})):o.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},71743:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const r={},i="Advanced Fly.io Deployment",l={unversionedId:"guides/deployment/advanced-fly-io-deployment",id:"version-0.25.0/guides/deployment/advanced-fly-io-deployment",title:"Advanced Fly.io Deployment",description:"Techniques used in this guide are based on the Deploy to Fly.io with SQLite",source:"@site/versioned_docs/version-0.25.0/guides/deployment/advanced-fly-io-deployment.md",sourceDirName:"guides/deployment",slug:"/guides/deployment/advanced-fly-io-deployment",permalink:"/docs/0.25.0/guides/deployment/advanced-fly-io-deployment",draft:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-0.25.0/guides/deployment/advanced-fly-io-deployment.md",tags:[],version:"0.25.0",frontMatter:{},sidebar:"docs",previous:{title:"Deploy to Fly.io with SQLite",permalink:"/docs/0.25.0/guides/deployment/deploy-to-fly-io-with-sqlite"},next:{title:"Seed a Database",permalink:"/docs/0.25.0/guides/seed-a-database"}},d={},p=[{value:"Adding <code>sqlite</code> for debugging",id:"adding-sqlite-for-debugging",level:2}],c={toc:p},s="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"advanced-flyio-deployment"},"Advanced Fly.io Deployment"),(0,a.kt)("p",null,"Techniques used in this guide are based on ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.25.0/guides/deployment/deploy-to-fly-io-with-sqlite"},"the Deploy to Fly.io with SQLite"),"\ndeployment guide."),(0,a.kt)("h2",{id:"adding-sqlite-for-debugging"},"Adding ",(0,a.kt)("inlineCode",{parentName:"h2"},"sqlite")," for debugging"),(0,a.kt)("p",null,"With a combination of Docker and Fly.io, you can create an easy way to debug\nyour sqlite aplication without stopping your application or exporting the data.\nAt the end of this guide, you will be able to run ",(0,a.kt)("inlineCode",{parentName:"p"},"fly ssh console -C db-cli")," to\nbe dropped into your remote database."),(0,a.kt)("p",null,"Start by creating a script for launching the database, calling it ",(0,a.kt)("strong",{parentName:"p"},"db-cli.sh"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/sh\nset -x\n# DSN will be defined in the Dockerfile\nsqlite3 $DSN\n")),(0,a.kt)("p",null,"Create a new ",(0,a.kt)("strong",{parentName:"p"},"Dockerfile")," which will act as the build and deployment image:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dockerfile"},'FROM node:18-alpine\n\n# Setup sqlite viewer\nRUN apk add sqlite\nENV DSN "/app/.platformatic/data/app.db"\nCOPY db-cli.sh /usr/local/bin/db-cli\nRUN chmod +x /usr/local/bin/db-cli\n\nWORKDIR /app\nCOPY package.json package.json\nCOPY package-lock.json package-lock.json\n\nRUN npm ci --omit=dev\n\nCOPY platformatic.db.json platformatic.db.json\n\nCOPY migrations migrations\n# Uncomment if your application is running a plugin\n# COPY plugin.js plugin.js\n\nEXPOSE 8080\n\nCMD ["npm", "start"]\n')),(0,a.kt)("p",null,"Add a ",(0,a.kt)("inlineCode",{parentName:"p"},"start")," script to your ",(0,a.kt)("strong",{parentName:"p"},"package.json"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "start": "platformatic db"\n  }\n}\n')),(0,a.kt)("p",null,"With Fly, it becomes straightforward to connect directly to the database by\nrunning the following command from your local machine:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"fly ssh console -C db-cli\n")))}u.isMDXComponent=!0}}]);