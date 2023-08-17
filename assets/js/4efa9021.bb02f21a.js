"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[15786],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(a),u=o,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||r;return a?n.createElement(f,i(i({ref:t},p),{},{components:a})):n.createElement(f,i({ref:t},p))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},77666:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=a(87462),o=(a(67294),a(3905));const r={},i="Deploying on AWS Lambda",l={unversionedId:"guides/deploying-on-lambda",id:"version-0.26.0/guides/deploying-on-lambda",title:"Deploying on AWS Lambda",description:"It is possible to deploy Platformatic applications to AWS Lambda",source:"@site/versioned_docs/version-0.26.0/guides/deploying-on-lambda.md",sourceDirName:"guides",slug:"/guides/deploying-on-lambda",permalink:"/docs/0.26.0/guides/deploying-on-lambda",draft:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-0.26.0/guides/deploying-on-lambda.md",tags:[],version:"0.26.0",frontMatter:{}},c={},s=[{value:"Avoiding cold start",id:"avoiding-cold-start",level:2},{value:"Caching the DB schema",id:"caching-the-db-schema",level:3},{value:"Provisioned concurrency",id:"provisioned-concurrency",level:3}],p={toc:s},d="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deploying-on-aws-lambda"},"Deploying on AWS Lambda"),(0,o.kt)("p",null,"It is possible to deploy Platformatic applications to ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/lambda/"},"AWS Lambda"),"\nby leveraging ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/fastify/aws-lambda-fastify"},(0,o.kt)("inlineCode",{parentName:"a"},"@fastify/aws-lambda")),"."),(0,o.kt)("p",null,"Once you set up your Platformatic DB application, such as following\n",(0,o.kt)("a",{parentName:"p",href:"/docs/0.26.0/getting-started/quick-start-guide"},"our tutorial"),", you can create a\n",(0,o.kt)("inlineCode",{parentName:"p"},"server.mjs")," file as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import awsLambdaFastify from '@fastify/aws-lambda'\nimport { buildServer } from '@platformatic/db'\n\nconst app = await buildServer('./platformatic.db.json')\n// You can use the same approach with both Platformatic DB and\n// and service\n// const app = await buildServer('./platformatic.service.json')\n\n// The following also work for Platformatic Service applications\n// import { buildServer } from '@platformatic/service'\nexport const handler = awsLambdaFastify(app)\n\n// Loads the Application, must be after the call to `awsLambdaFastify`\nawait app.ready()\n")),(0,o.kt)("p",null,"This would be the entry point for your AWS Lambda function."),(0,o.kt)("h2",{id:"avoiding-cold-start"},"Avoiding cold start"),(0,o.kt)("h3",{id:"caching-the-db-schema"},"Caching the DB schema"),(0,o.kt)("p",null,"If you use Platformatic DB, you want to turn on the ",(0,o.kt)("inlineCode",{parentName:"p"},"schemalock"),"\n",(0,o.kt)("a",{parentName:"p",href:"/docs/0.26.0/reference/db/configuration"},"configuration")," to cache the schema\ninformation on disk."),(0,o.kt)("p",null,"Set the ",(0,o.kt)("inlineCode",{parentName:"p"},"db.schemalock")," configuration to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", start the application,\nand a ",(0,o.kt)("inlineCode",{parentName:"p"},"schema.lock")," file should appear. Make sure to commit that file and\ndeploy your lambda."),(0,o.kt)("h3",{id:"provisioned-concurrency"},"Provisioned concurrency"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Since ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/blogs/compute/using-node-js-es-modules-and-top-level-await-in-aws-lambda/"},"AWS Lambda now enables the use of ECMAScript (ES) modules")," in Node.js 14 runtimes,\nyou could lower the cold start latency when used with ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/blogs/compute/new-for-aws-lambda-predictable-start-up-times-with-provisioned-concurrency/"},"Provisioned Concurrency"),"\nthanks to the top-level await functionality. (Excerpt taken from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/fastify/aws-lambda-fastify#lower-cold-start-latency"},(0,o.kt)("inlineCode",{parentName:"a"},"@fastify/aws-lambda")),")")))}m.isMDXComponent=!0}}]);