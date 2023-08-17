"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[50341],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>y});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,y=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return t?r.createElement(y,i(i({ref:n},c),{},{components:t})):r.createElement(y,i({ref:n},c))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9959:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const o={},i="Many To Many Relationship",l={unversionedId:"reference/sql-graphql/many-to-many",id:"version-0.30.0/reference/sql-graphql/many-to-many",title:"Many To Many Relationship",description:"Many-to-Many relationship lets you relate each row in one table to many rows in",source:"@site/versioned_docs/version-0.30.0/reference/sql-graphql/many-to-many.md",sourceDirName:"reference/sql-graphql",slug:"/reference/sql-graphql/many-to-many",permalink:"/docs/0.30.0/reference/sql-graphql/many-to-many",draft:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-0.30.0/reference/sql-graphql/many-to-many.md",tags:[],version:"0.30.0",frontMatter:{},sidebar:"docs",previous:{title:"Mutations",permalink:"/docs/0.30.0/reference/sql-graphql/mutations"},next:{title:"Ignoring types and fields",permalink:"/docs/0.30.0/reference/sql-graphql/ignore"}},s={},p=[{value:"Example",id:"example",level:2}],c={toc:p},u="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"many-to-many-relationship"},"Many To Many Relationship"),(0,a.kt)("p",null,"Many-to-Many relationship lets you relate each row in one table to many rows in\nanother table and vice versa. "),(0,a.kt)("p",null,'Many-to-many relationship are implemented in SQL via a "join table", a table whose ',(0,a.kt)("strong",{parentName:"p"},"primary key"),"\nis composed by the identifier of the two parts of the many-to-many relationship."),(0,a.kt)("p",null,"Platformatic DB fully support many-to-many relationships on all supported databases."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Consider the following schema (SQLite):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-SQL"},"CREATE TABLE pages (\n  id INTEGER PRIMARY KEY,\n  the_title VARCHAR(42)\n);\n\nCREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  username VARCHAR(255) NOT NULL\n);\n\nCREATE TABLE editors (\n  page_id INTEGER NOT NULL,\n  user_id INTEGER NOT NULL,\n  role VARCHAR(255) NOT NULL,\n  CONSTRAINT fk_editor_pages FOREIGN KEY (page_id) REFERENCES pages(id),\n  CONSTRAINT fk_editor_users FOREIGN KEY (user_id) REFERENCES users(id),\n  PRIMARY KEY (page_id, user_id)\n);\n")),(0,a.kt)("p",null,"The table ",(0,a.kt)("inlineCode",{parentName:"p"},"editors"),' is a "join table" between users and pages.\nGiven this schema, you could issue queries like:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"query {\n  editors(orderBy: { field: role, direction: DESC }) {\n    user {\n      id\n      username\n    }\n    page {\n      id\n      theTitle\n    }\n    role\n  }\n}\n")),(0,a.kt)("p",null,"Mutation works exactly the same as before:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  saveEditor(input: { userId: "1", pageId: "1", role: "captain" }) {\n    user {\n      id\n      username\n    }\n    page {\n      id\n      theTitle\n    }\n    role\n  }\n}\n')))}m.isMDXComponent=!0}}]);