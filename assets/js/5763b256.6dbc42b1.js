"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[40468],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),m=i,d=u["".concat(l,".").concat(m)]||u[m]||f[m]||a;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},67483:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(87462),i=(r(67294),r(3905));const a={},o="Platformatic Service",c={unversionedId:"reference/service/introduction",id:"version-0.30.1/reference/service/introduction",title:"Platformatic Service",description:"Platformatic Service is an HTTP server that provides a developer tools for",source:"@site/versioned_docs/version-0.30.1/reference/service/introduction.md",sourceDirName:"reference/service",slug:"/reference/service/introduction",permalink:"/docs/0.30.1/reference/service/introduction",draft:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-0.30.1/reference/service/introduction.md",tags:[],version:"0.30.1",frontMatter:{},sidebar:"docs",previous:{title:"Programmatic API",permalink:"/docs/0.30.1/reference/runtime/programmatic"},next:{title:"Configuration",permalink:"/docs/0.30.1/reference/service/configuration"}},l={},s=[{value:"Features",id:"features",level:2},{value:"Public beta",id:"public-beta",level:2},{value:"Standalone usage",id:"standalone-usage",level:2}],p={toc:s},u="wrapper";function f(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"platformatic-service"},"Platformatic Service"),(0,i.kt)("p",null,"Platformatic Service is an HTTP server that provides a developer tools for\nbuilding robust APIs with Node.js."),(0,i.kt)("p",null,"For a high level overview of how Platformatic DB works, please reference the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/0.30.1/getting-started/architecture"},"Architecture")," guide."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Platformatic Service is currently in ",(0,i.kt)("a",{parentName:"p",href:"#public-beta"},"public beta"),".")),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Command-line interface: ",(0,i.kt)("a",{parentName:"li",href:"/docs/0.30.1/reference/cli#service"},(0,i.kt)("inlineCode",{parentName:"a"},"platformatic service"))),(0,i.kt)("li",{parentName:"ul"},"Add custom functionality in a ",(0,i.kt)("a",{parentName:"li",href:"/docs/0.30.1/reference/db/plugin"},"Fastify plugin")),(0,i.kt)("li",{parentName:"ul"},"Write plugins in JavaScript or ",(0,i.kt)("a",{parentName:"li",href:"/docs/0.30.1/reference/cli#compile"},"TypeScript")),(0,i.kt)("li",{parentName:"ul"},"Start Platformatic Service ",(0,i.kt)("a",{parentName:"li",href:"/docs/0.30.1/reference/service/programmatic"},"programmatically")," in tests or other applications"),(0,i.kt)("li",{parentName:"ul"},"Fully typed")),(0,i.kt)("h2",{id:"public-beta"},"Public beta"),(0,i.kt)("p",null,"Platformatic Service is in public beta. You can use it in production, but it's quite\nlikely that you'll encounter significant bugs."),(0,i.kt)("p",null,"If you run into a bug or have a suggestion for improvement, please\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/platformatic/platformatic/issues/new"},"raise an issue on GitHub"),". "),(0,i.kt)("h2",{id:"standalone-usage"},"Standalone usage"),(0,i.kt)("p",null,"If you're only interested in the features available in Platformatic Service, you can simply switch ",(0,i.kt)("inlineCode",{parentName:"p"},"platformatic")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"@platformatic/service")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"dependencies")," of your ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),", so that you'll only import fewer deps."),(0,i.kt)("p",null,"You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"plt-service")," command, it's the equivalent of ",(0,i.kt)("inlineCode",{parentName:"p"},"plt service"),"."))}f.isMDXComponent=!0}}]);