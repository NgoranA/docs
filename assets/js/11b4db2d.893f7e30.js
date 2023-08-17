"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[4904],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39700:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const o={},i="User Roles & Metadata",s={unversionedId:"reference/db/authorization/user-roles-metadata",id:"version-0.21.0/reference/db/authorization/user-roles-metadata",title:"User Roles & Metadata",description:"Introduction",source:"@site/versioned_docs/version-0.21.0/reference/db/authorization/user-roles-metadata.md",sourceDirName:"reference/db/authorization",slug:"/reference/db/authorization/user-roles-metadata",permalink:"/docs/0.21.0/reference/db/authorization/user-roles-metadata",draft:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-0.21.0/reference/db/authorization/user-roles-metadata.md",tags:[],version:"0.21.0",frontMatter:{},sidebar:"docs",previous:{title:"Strategies",permalink:"/docs/0.21.0/reference/db/authorization/strategies"},next:{title:"Rules",permalink:"/docs/0.21.0/reference/db/authorization/rules"}},l={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Roles",id:"roles",level:2},{value:"Reserved roles",id:"reserved-roles",level:3},{value:"Anonymous role",id:"anonymous-role",level:3},{value:"Role impersonation",id:"role-impersonation",level:3},{value:"Role configuration",id:"role-configuration",level:3},{value:"User metadata",id:"user-metadata",level:2}],p={toc:u},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"user-roles--metadata"},"User Roles & Metadata"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Roles and user information are passed to Platformatic DB from an external\nauthentication service as a string (JWT claims or HTTP headers). We refer to\nthis data as ",(0,r.kt)("a",{parentName:"p",href:"#user-metadata"},"user metadata"),"."),(0,r.kt)("h2",{id:"roles"},"Roles"),(0,r.kt)("p",null,"Users can have a list of roles associated with them. These roles can be specified\nin an ",(0,r.kt)("inlineCode",{parentName:"p"},"X-PLATFORMATIC-ROLE")," property as a list of comma separated role names\n(the key name is ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.21.0/reference/db/configuration#role-and-anonymous-keys"},"configurable"),")."),(0,r.kt)("p",null,"Note that role names are just strings."),(0,r.kt)("h3",{id:"reserved-roles"},"Reserved roles"),(0,r.kt)("p",null,"Some special role names are reserved by Platformatic DB:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"platformatic-admin")," : this identifies a user who has admin powers"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"anonymous"),": set automatically when no roles are associated")),(0,r.kt)("h3",{id:"anonymous-role"},"Anonymous role"),(0,r.kt)("p",null,"If a user has no role, the ",(0,r.kt)("inlineCode",{parentName:"p"},"anonymous")," role is assigned automatically. It's possible\nto specify rules to apply to users with this role:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    {\n      "role": "anonymous",\n      "entity": "page",\n      "find": false,\n      "delete": false,\n      "save": false\n    }\n')),(0,r.kt)("p",null,"In this case, a user that has no role or explicitly has the ",(0,r.kt)("inlineCode",{parentName:"p"},"anonymous")," role\ncannot perform any operations on the ",(0,r.kt)("inlineCode",{parentName:"p"},"page")," entity."),(0,r.kt)("h3",{id:"role-impersonation"},"Role impersonation"),(0,r.kt)("p",null,"If a request includes a valid ",(0,r.kt)("inlineCode",{parentName:"p"},"X-PLATFORMATIC-ADMIN-SECRET")," HTTP header it is\npossible to impersonate a user roles. The roles to impersonate can be specified\nby sending a ",(0,r.kt)("inlineCode",{parentName:"p"},"X-PLATFORMATIC-ROLE")," HTTP header containing a comma separated list\nof roles."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"When JWT or Webhook are set, user role impersonation is not enabled, and the role\nis always set as ",(0,r.kt)("inlineCode",{parentName:"p"},"platfomatic-admin")," automatically if the ",(0,r.kt)("inlineCode",{parentName:"p"},"X-PLATFORMATIC-ADMIN-SECRET"),"\nHTTP header is specified.")),(0,r.kt)("h3",{id:"role-configuration"},"Role configuration"),(0,r.kt)("p",null,"The roles key in user metadata defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"X-PLATFORMATIC-ROLE"),". It's possible to change it using the ",(0,r.kt)("inlineCode",{parentName:"p"},"roleKey")," field in configuration. Same for the ",(0,r.kt)("inlineCode",{parentName:"p"},"anonymous")," role, which value can be changed using ",(0,r.kt)("inlineCode",{parentName:"p"},"anonymousRole"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},' "authorization": {\n    "roleKey": "X-MYCUSTOM-ROLE_KEY",\n    "anonymousRole": "anonym",\n    "rules": [\n    ...\n    ]\n  }\n')),(0,r.kt)("h2",{id:"user-metadata"},"User metadata"),(0,r.kt)("p",null,"User roles and other user data, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"userId"),", are referred to by Platformatic\nDB as user metadata."),(0,r.kt)("p",null,"User metadata is parsed from an HTTP request and stored in a ",(0,r.kt)("inlineCode",{parentName:"p"},"user")," object on the\nFastify request object. This object is populated on-demand, but it's possible\nto populate it explicity with ",(0,r.kt)("inlineCode",{parentName:"p"},"await request.setupDBAuthorizationUser()"),"."))}c.isMDXComponent=!0}}]);