"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[97857],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>f});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(o),u=r,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||a;return o?n.createElement(f,i(i({ref:t},c),{},{components:o})):n.createElement(f,i({ref:t},c))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[m]="string"==typeof e?e:r,i[1]=p;for(var l=2;l<a;l++)i[l]=o[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},91089:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var n=o(87462),r=(o(67294),o(3905));const a={},i="API modification",p={unversionedId:"reference/composer/api-modification",id:"version-0.35.0/reference/composer/api-modification",title:"API modification",description:"If you want to modify automatically generated API, you can use composer custom onRoute hook.",source:"@site/versioned_docs/version-0.35.0/reference/composer/api-modification.md",sourceDirName:"reference/composer",slug:"/reference/composer/api-modification",permalink:"/docs/0.35.0/reference/composer/api-modification",draft:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-0.35.0/reference/composer/api-modification.md",tags:[],version:"0.35.0",frontMatter:{}},s={},l=[{value:"<code>addComposerOnRouteHook(openApiPath, methods, handler)</code>",id:"addcomposeronroutehookopenapipath-methods-handler",level:4},{value:"onComposerResponse",id:"oncomposerresponse",level:3}],c={toc:l},m="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(m,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"api-modification"},"API modification"),(0,r.kt)("p",null,"If you want to modify automatically generated API, you can use composer custom ",(0,r.kt)("inlineCode",{parentName:"p"},"onRoute")," hook."),(0,r.kt)("h4",{id:"addcomposeronroutehookopenapipath-methods-handler"},(0,r.kt)("inlineCode",{parentName:"h4"},"addComposerOnRouteHook(openApiPath, methods, handler)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"openApiPath"))," (",(0,r.kt)("inlineCode",{parentName:"li"},"string"),") - A route OpenAPI path that Platformatic Composer takes from the OpenAPI specification."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"methods"))," (",(0,r.kt)("inlineCode",{parentName:"li"},"string[]"),") - Route HTTP methods that Platformatic Composer takes from the OpenAPI specification."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"handler"))," (",(0,r.kt)("inlineCode",{parentName:"li"},"function"),") - fastify ",(0,r.kt)("a",{parentName:"li",href:"https://www.fastify.io/docs/latest/Reference/Hooks/#onroute"},"onRoute")," hook handler.")),(0,r.kt)("h3",{id:"oncomposerresponse"},"onComposerResponse"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"onComposerResponse")," hook is called after the response is received from a composed service.\nIt might be useful if you want to modify the response before it is sent to the client.\nIf you want to use it you need to add ",(0,r.kt)("inlineCode",{parentName:"p"},"onComposerResponse")," property to the ",(0,r.kt)("inlineCode",{parentName:"p"},"config")," object of the route options."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"request"))," (",(0,r.kt)("inlineCode",{parentName:"li"},"object"),") - fastify request object."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"reply"))," (",(0,r.kt)("inlineCode",{parentName:"li"},"object"),") - fastify reply object."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"body"))," (",(0,r.kt)("inlineCode",{parentName:"li"},"object"),") - ",(0,r.kt)("a",{parentName:"li",href:"https://undici.nodejs.org/"},"undici")," response body object.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"app.platformatic.addComposerOnRouteHook('/users/{id}', ['GET'], routeOptions => {\n  routeOptions.schema.response[200] = {\n    type: 'object',\n    properties: {\n      firstName: { type: 'string' },\n      lastName: { type: 'string' }\n    }\n  }\n\n  async function onComposerResponse (request, reply, body) {\n    const payload = await body.json()\n    const newPayload = {\n      firstName: payload.first_name,\n      lastName: payload.last_name\n    }\n    reply.send(newPayload)\n  }\n  routeOptions.config.onComposerResponse = onComposerResponse\n})\n")))}d.isMDXComponent=!0}}]);