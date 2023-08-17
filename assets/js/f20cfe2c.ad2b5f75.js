"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[88980],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},74435:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={},o="Extend REST API",l={unversionedId:"guides/add-custom-functionality/extend-rest",id:"version-0.35.2/guides/add-custom-functionality/extend-rest",title:"Extend REST API",description:"We will follow same examples implemented in GraphQL examples: a sum function and an API to get pages by title.",source:"@site/versioned_docs/version-0.35.2/guides/add-custom-functionality/extend-rest.md",sourceDirName:"guides/add-custom-functionality",slug:"/guides/add-custom-functionality/extend-rest",permalink:"/docs/0.35.2/guides/add-custom-functionality/extend-rest",draft:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-0.35.2/guides/add-custom-functionality/extend-rest.md",tags:[],version:"0.35.2",frontMatter:{},sidebar:"docs",previous:{title:"Extend GraphQL Schema",permalink:"/docs/0.35.2/guides/add-custom-functionality/extend-graphql"},next:{title:"Securing Platformatic DB with Authorization",permalink:"/docs/0.35.2/guides/securing-platformatic-db"}},s={},p=[{value:"Sum Function",id:"sum-function",level:2},{value:"Extend Entities API",id:"extend-entities-api",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"extend-rest-api"},"Extend REST API"),(0,a.kt)("p",null,"We will follow same examples implemented in ",(0,a.kt)("a",{parentName:"p",href:"./extend-graphql"},"GraphQL examples"),": a sum function and an API to get pages by title."),(0,a.kt)("h2",{id:"sum-function"},"Sum Function"),(0,a.kt)("p",null,"Copy and paste this code into ",(0,a.kt)("inlineCode",{parentName:"p"},"./sample-plugin.js")," file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"'use strict'\nmodule.exports = async(app, opts) => {\n  app.post('/sum', async(req, reply) => {\n    const { x, y } = req.body\n    return { sum: (x + y)}\n  })\n}\n")),(0,a.kt)("p",null,"You don't need to reload the server, since it will watch this file and hot-reload itself."),(0,a.kt)("p",null,"Let's make a ",(0,a.kt)("inlineCode",{parentName:"p"},"POST /sum")," request to the server with the following body"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "x": 1,\n  "y": 2\n}\n')),(0,a.kt)("p",null,"You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"curl")," command to run this query"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ curl --location --request POST 'http://localhost:3042/sum' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    \"x\": 1,\n    \"y\": 2\n}'\n")),(0,a.kt)("p",null,"You will get this output, with the sum."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "sum": 3\n}\n')),(0,a.kt)("h2",{id:"extend-entities-api"},"Extend Entities API"),(0,a.kt)("p",null,"Let's implement a ",(0,a.kt)("inlineCode",{parentName:"p"},"/page-by-title")," endpoint, using Entities API"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"'use strict'\nmodule.exports = async(app, opts) => {\n  app.get('/page-by-title', async(req, reply) => {\n    const { title } = req.query\n    const res = await app.platformatic.entities.page.find({\n      where: {\n        title: {\n          eq: title\n        }\n      }\n    })\n    if (res) {\n      return res[0]\n    }\n    return null\n  })\n}\n")),(0,a.kt)("p",null,"We will make a ",(0,a.kt)("inlineCode",{parentName:"p"},"GET /page-by-title?title=First%20Page")," request, and we expect a single page as output."),(0,a.kt)("p",null,"You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"curl")," command to run this query"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ curl --location --request GET 'http://localhost:3042/page-by-title?title=First Page'\n\n")),(0,a.kt)("p",null,"You will get an output similar to this"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "1",\n    "title": "First Page",\n    "body": "This is the first sample page"\n}\n')))}d.isMDXComponent=!0}}]);