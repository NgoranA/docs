"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[26156],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(t),d=a,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return t?r.createElement(g,o(o({ref:n},p),{},{components:t})):r.createElement(g,o({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},52451:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const i={},o="Relations",s={unversionedId:"reference/sql-mapper/entities/relations",id:"version-0.29.0/reference/sql-mapper/entities/relations",title:"Relations",description:"When Platformatic DB is reading your database schema, it identifies relationships",source:"@site/versioned_docs/version-0.29.0/reference/sql-mapper/entities/relations.md",sourceDirName:"reference/sql-mapper/entities",slug:"/reference/sql-mapper/entities/relations",permalink:"/docs/0.29.0/reference/sql-mapper/entities/relations",draft:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-0.29.0/reference/sql-mapper/entities/relations.md",tags:[],version:"0.29.0",frontMatter:{},sidebar:"docs",previous:{title:"Hooks",permalink:"/docs/0.29.0/reference/sql-mapper/entities/hooks"},next:{title:"Transactions",permalink:"/docs/0.29.0/reference/sql-mapper/entities/transactions"}},l={},c=[{value:"Example",id:"example",level:2}],p={toc:c},m="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"relations"},"Relations"),(0,a.kt)("p",null,"When Platformatic DB is reading your database schema, it identifies relationships\nbetween tables and stores metadata on them in the entity object's ",(0,a.kt)("inlineCode",{parentName:"p"},"relations")," field.\nThis is achieved by querying the database's internal metadata."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Given this PostgreSQL schema:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE SEQUENCE IF NOT EXISTS categories_id_seq;\n\nCREATE TABLE "categories" (\n    "id" int4 NOT NULL DEFAULT nextval(\'categories_id_seq\'::regclass),\n    "name" varchar(255) NOT NULL,\n    PRIMARY KEY ("id")\n);\n\nCREATE SEQUENCE IF NOT EXISTS pages_id_seq;\n\nCREATE TABLE "pages" (\n    "id" int4 NOT NULL DEFAULT nextval(\'pages_id_seq\'::regclass),\n    "title" varchar(255) NOT NULL,\n    "body_content" text,\n    "category_id" int4,\n    PRIMARY KEY ("id")\n);\n\nALTER TABLE "pages" ADD FOREIGN KEY ("category_id") REFERENCES "categories"("id");\n')),(0,a.kt)("p",null,"When this code is run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"'use strict'\nconst { connect } = require('@platformatic/sql-mapper')\nconst { pino } = require('pino')\nconst pretty = require('pino-pretty')\nconst logger = pino(pretty())\n\nasync function main() {\n  const pgConnectionString = 'postgres://postgres:postgres@127.0.0.1/postgres'\n  const mapper = await connect({\n    connectionString: pgConnectionString,\n    log: logger,\n  })\n  const pageEntity = mapper.entities.page\n  console.log(pageEntity.relations)\n  await mapper.db.dispose()\n}\nmain()\n")),(0,a.kt)("p",null,"The output will be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"[\n  {\n    constraint_catalog: 'postgres',\n    constraint_schema: 'public',\n    constraint_name: 'pages_category_id_fkey',\n    table_catalog: 'postgres',\n    table_schema: 'public',\n    table_name: 'pages',\n    constraint_type: 'FOREIGN KEY',\n    is_deferrable: 'NO',\n    initially_deferred: 'NO',\n    enforced: 'YES',\n    column_name: 'category_id',\n    ordinal_position: 1,\n    position_in_unique_constraint: 1,\n    foreign_table_name: 'categories',\n    foreign_column_name: 'id'\n  }\n]\n")),(0,a.kt)("p",null,"As Platformatic DB supports multiple database engines, the contents of the\n",(0,a.kt)("inlineCode",{parentName:"p"},"relations")," object will vary depending on the database being used."),(0,a.kt)("p",null,"The following ",(0,a.kt)("inlineCode",{parentName:"p"},"relations")," fields are common to all database engines:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"column_name")," \u2014 the column that stores the foreign key"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"foreign_table_name")," \u2014 the table hosting the related row"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"foreign_column_name")," \u2014 the column in foreign table that identifies the row")))}u.isMDXComponent=!0}}]);