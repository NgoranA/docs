"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[59295],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},54511:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const r={},i="Strategies",s={unversionedId:"reference/db/authorization/strategies",id:"version-0.23.2/reference/db/authorization/strategies",title:"Strategies",description:"Introduction",source:"@site/versioned_docs/version-0.23.2/reference/db/authorization/strategies.md",sourceDirName:"reference/db/authorization",slug:"/reference/db/authorization/strategies",permalink:"/docs/0.23.2/reference/db/authorization/strategies",draft:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-0.23.2/reference/db/authorization/strategies.md",tags:[],version:"0.23.2",frontMatter:{},sidebar:"docs",previous:{title:"Authorization",permalink:"/docs/0.23.2/reference/db/authorization/introduction"},next:{title:"User Roles & Metadata",permalink:"/docs/0.23.2/reference/db/authorization/user-roles-metadata"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"JSON Web Token (JWT)",id:"json-web-token-jwt",level:2},{value:"JSON Web Key Sets (JWKS)",id:"json-web-key-sets-jwks",level:3},{value:"JWT Custom Claim Namespace",id:"jwt-custom-claim-namespace",level:3},{value:"Webhook",id:"webhook",level:2},{value:"HTTP headers (development only)",id:"http-headers-development-only",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"strategies"},"Strategies"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Platformatic DB supports the following authorization strategies:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#json-web-token-jwt"},"JSON Web Token (JWT)")," with support for ",(0,o.kt)("a",{parentName:"li",href:"#json-web-key-sets-jwks"},"JSON Web Key Sets (JWKS)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#webhook"},"Webhook")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#http-headers-development-only"},"HTTP headers (development only)"))),(0,o.kt)("h2",{id:"json-web-token-jwt"},"JSON Web Token (JWT)"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://jwt.io/"},"JSON Web Token")," (JWT) authorization strategy is built on top\nof the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify-jwt"},(0,o.kt)("inlineCode",{parentName:"a"},"@fastify/jwt"))," Fastify plugin."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Platformatic DB JWT integration",src:n(29678).Z,width:"513",height:"274"})),(0,o.kt)("p",null,"To configure it, the quickest way is to pass a shared ",(0,o.kt)("inlineCode",{parentName:"p"},"secret")," in your\nPlatformatic DB configuration file, for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="platformatic.db.json"',title:'"platformatic.db.json"'},'{\n  "authorization": {\n    "jwt": {\n      "secret": "<shared-secret>"\n    }\n  }\n}\n')),(0,o.kt)("p",null,"By default ",(0,o.kt)("inlineCode",{parentName:"p"},"@fastify/jwt")," looks for a JWT in an HTTP request's ",(0,o.kt)("inlineCode",{parentName:"p"},"Authorization"),"\nheader. This requires HTTP requests to the Platformatic DB API to include an\n",(0,o.kt)("inlineCode",{parentName:"p"},"Authorization")," header like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Authorization: Bearer <token>\n")),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify-jwt#options"},(0,o.kt)("inlineCode",{parentName:"a"},"@fastify/jwt")," documentation"),"\nfor all of the available configuration options."),(0,o.kt)("h3",{id:"json-web-key-sets-jwks"},"JSON Web Key Sets (JWKS)"),(0,o.kt)("p",null,"The JWT authorization strategy includes support for ",(0,o.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc7517"},"JSON Web Key")," Sets."),(0,o.kt)("p",null,"To configure it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="platformatic.db.json"',title:'"platformatic.db.json"'},'{\n  "authorization": {\n    "jwt": {\n      "jwks": {\n        "allowedDomains": [\n          "https://ISSUER_DOMAIN"\n        ]\n      }\n    }\n  }\n}\n')),(0,o.kt)("p",null,"When a JSON Web Token is included in a request to Platformatic DB, it retrieves the\ncorrect public key from ",(0,o.kt)("inlineCode",{parentName:"p"},"https:/ISSUER_DOMAIN/.well-known/jwks.json")," and uses it to\nverify the JWT signature. The token carries all the informations, like the ",(0,o.kt)("inlineCode",{parentName:"p"},"kid"),",\nwhich is the key id used to sign the token itself, so no other configuration is required."),(0,o.kt)("p",null,"JWKS can be enabled without any options:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="platformatic.db.json"',title:'"platformatic.db.json"'},'{\n  "authorization": {\n    "jwt": {\n      "jwks": true\n    }\n  }\n}\n')),(0,o.kt)("p",null,"When configured like this, the JWK URL is calculated from the ",(0,o.kt)("inlineCode",{parentName:"p"},"iss")," (issuer) field of JWT, so\nevery JWT token from an issuer that exposes a valid JWKS token will pass the validation.\n",(0,o.kt)("strong",{parentName:"p"},"This configuration should only be used in development"),", while\nin every other case the ",(0,o.kt)("inlineCode",{parentName:"p"},"allowedDomains")," option should be specified."),(0,o.kt)("p",null,"Any option supported by the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nearform/get-jwks#options"},(0,o.kt)("inlineCode",{parentName:"a"},"get-jwks")),"\nlibrary can be specified in the ",(0,o.kt)("inlineCode",{parentName:"p"},"authorization.jwt.jwks")," object."),(0,o.kt)("h3",{id:"jwt-custom-claim-namespace"},"JWT Custom Claim Namespace"),(0,o.kt)("p",null,"JWT claims can be namespaced to avoid name collisions. If so, we will receive tokens\nwith custom claims such as: ",(0,o.kt)("inlineCode",{parentName:"p"},"https://platformatic.dev/X-PLATFORMATIC-ROLE"),"\n(where ",(0,o.kt)("inlineCode",{parentName:"p"},"https://platformatic.cloud/")," is the namespace).\nIf we want to map these claims to user metadata removing our namespace, we can\nspecify the namespace in the JWT options:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="platformatic.db.json"',title:'"platformatic.db.json"'},'{\n  "authorization": {\n    "jwt": {\n      "namespace": "https://platformatic.dev/"\n    }\n  }\n}\n')),(0,o.kt)("p",null,"With this configuration, the ",(0,o.kt)("inlineCode",{parentName:"p"},"https://platformatic.dev/X-PLATFORMATIC-ROLE")," claim\nis mapped to ",(0,o.kt)("inlineCode",{parentName:"p"},"X-PLATFORMATIC-ROLE")," user metadata."),(0,o.kt)("h2",{id:"webhook"},"Webhook"),(0,o.kt)("p",null,"Platformatic DB can use a webhook to authenticate requests."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Platformatic DB Webhook integration",src:n(99444).Z,width:"606",height:"324"})),(0,o.kt)("p",null,"In this case, the URL is configured on authorization:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="platformatic.db.json"',title:'"platformatic.db.json"'},'{\n  "authorization": {\n    "webhook": {\n      "url": "<webhook url>"\n    }\n  }\n}\n')),(0,o.kt)("p",null,"When a request is received, Platformatic sends a ",(0,o.kt)("inlineCode",{parentName:"p"},"POST")," to the webhook, replicating\nthe same body and headers, except for:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"host")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"connection"))),(0,o.kt)("p",null,"In the Webhook case, the HTTP response contains the roles/user information as HTTP headers."),(0,o.kt)("h2",{id:"http-headers-development-only"},"HTTP headers (development only)"),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Passing an admin API key via HTTP headers is highly insecure and should only be used\nduring development or within protected networks.")),(0,o.kt)("p",null,"If a request has ",(0,o.kt)("inlineCode",{parentName:"p"},"X-PLATFORMATIC-ADMIN-SECRET")," HTTP header set with a valid ",(0,o.kt)("inlineCode",{parentName:"p"},"adminSecret"),"\n(see ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.23.2/reference/db/configuration#authorization"},"configuration reference"),") the\nrole is set automatically as ",(0,o.kt)("inlineCode",{parentName:"p"},"platformatic-admin"),", unless a different role is set for\nuser impersonation (which is disabled if JWT or Webhook are set, see ",(0,o.kt)("a",{parentName:"p",href:"#user-impersonation"},"below"),")."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Platformatic DB HTTP Headers",src:n(98562).Z,width:"472",height:"310"})),(0,o.kt)("p",null,"Also, the following rule is automatically added to every entity, allowing the user\nthat presented the ",(0,o.kt)("inlineCode",{parentName:"p"},"adminSecret")," to perform any operation on any entity:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "role": "platformatic-admin",\n  "find": false,\n  "delete": false,\n  "save": false\n}\n')))}d.isMDXComponent=!0},98562:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/http-16e850f4929a4d5c21a629cbe609b67e.png"},29678:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/jwt-f72781533567349fb71fc37b9768e847.png"},99444:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/webhook-35d01c3e23ac75c26c9d519daa16cf1b.png"}}]);