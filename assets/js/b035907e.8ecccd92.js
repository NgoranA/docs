"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[85271],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},41396:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={},o="Timestamps",s={unversionedId:"reference/sql-mapper/entities/timestamps",id:"version-0.25.0/reference/sql-mapper/entities/timestamps",title:"Timestamps",description:"Timestamps can be used to automatically set the createdat and updatedat fields on your entities.",source:"@site/versioned_docs/version-0.25.0/reference/sql-mapper/entities/timestamps.md",sourceDirName:"reference/sql-mapper/entities",slug:"/reference/sql-mapper/entities/timestamps",permalink:"/docs/0.25.0/reference/sql-mapper/entities/timestamps",draft:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-0.25.0/reference/sql-mapper/entities/timestamps.md",tags:[],version:"0.25.0",frontMatter:{}},p={},l=[{value:"Configuration",id:"configuration",level:2},{value:"Customizing the field names",id:"customizing-the-field-names",level:2}],c={toc:l},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"timestamps"},"Timestamps"),(0,a.kt)("p",null,"Timestamps can be used to automatically set the ",(0,a.kt)("inlineCode",{parentName:"p"},"created_at")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"updated_at")," fields on your entities."),(0,a.kt)("p",null,"Timestamps are enabled by default"),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"To disable timestamps, you need to set the ",(0,a.kt)("inlineCode",{parentName:"p"},"autoTimestamp")," field to ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," in configuration file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n...\n  "db": {\n    "connectionString": "postgres://postgres:postgres@127.0.0.1/postgres",\n    "autoTimestamp": false\n  },\n...\n}\n')),(0,a.kt)("h2",{id:"customizing-the-field-names"},"Customizing the field names"),(0,a.kt)("p",null,"By default, the ",(0,a.kt)("inlineCode",{parentName:"p"},"created_at")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"updated_at")," fields are used. You can customize the field names by setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"createdAt")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"updatedAt")," options in ",(0,a.kt)("inlineCode",{parentName:"p"},"autoTimestamp")," field in configuration file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n...\n  "db": {\n    "connectionString": "postgres://postgres:postgres@127.0.0.1/postgres",\n    "autoTimestamp": {\n      "createdAt": "inserted_at",\n      "updatedAt": "updated_at"\n    }\n...\n}\n')))}u.isMDXComponent=!0}}]);