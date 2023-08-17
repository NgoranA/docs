"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[94937],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9300:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={},s="Rules",o={unversionedId:"reference/db/authorization/rules",id:"version-0.30.1/reference/db/authorization/rules",title:"Rules",description:"Introduction",source:"@site/versioned_docs/version-0.30.1/reference/db/authorization/rules.md",sourceDirName:"reference/db/authorization",slug:"/reference/db/authorization/rules",permalink:"/docs/0.30.1/reference/db/authorization/rules",draft:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-0.30.1/reference/db/authorization/rules.md",tags:[],version:"0.30.1",frontMatter:{},sidebar:"docs",previous:{title:"User Roles & Metadata",permalink:"/docs/0.30.1/reference/db/authorization/user-roles-metadata"},next:{title:"Plugin",permalink:"/docs/0.30.1/reference/db/plugin"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Operation checks",id:"operation-checks",level:2},{value:"GraphQL events and subscriptions",id:"graphql-events-and-subscriptions",level:3},{value:"Restrict access to entity fields",id:"restrict-access-to-entity-fields",level:2},{value:"Set entity fields from user metadata",id:"set-entity-fields-from-user-metadata",level:2},{value:"Programmatic rules",id:"programmatic-rules",level:2},{value:"Access validation on <code>entity mapper</code> for plugins",id:"access-validation-on-entity-mapper-for-plugins",level:2},{value:"Skip authorization rules",id:"skip-authorization-rules",level:2},{value:"Avoid repetition of the same rule multiple times",id:"avoid-repetition-of-the-same-rule-multiple-times",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rules"},"Rules"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Authorization rules can be defined to control what operations users are\nable to execute via the REST or GraphQL APIs that are exposed by a Platformatic\nDB app."),(0,r.kt)("p",null,"Every rule must specify:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"role")," (required) \u2014 A role name. It's a string and must match with the role(s) set by an external authentication service."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"entity")," (optional) \u2014 The Platformatic DB entity to apply this rule to."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"entities")," (optional) \u2014 The Platformatic DB entities to apply this rule to."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"defaults")," (optional) \u2014 Configure entity fields that will be\n",(0,r.kt)("a",{parentName:"li",href:"#set-entity-fields-from-user-metadata"},"automatically set from user data"),"."),(0,r.kt)("li",{parentName:"ul"},"One entry for each supported CRUD operation: ",(0,r.kt)("inlineCode",{parentName:"li"},"find"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"save"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"delete"))),(0,r.kt)("p",null,"One of ",(0,r.kt)("inlineCode",{parentName:"p"},"entity")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"entities")," must be specified."),(0,r.kt)("h2",{id:"operation-checks"},"Operation checks"),(0,r.kt)("p",null,"Every entity operation \u2014 such as ",(0,r.kt)("inlineCode",{parentName:"p"},"find"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"insert"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"save")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"delete")," \u2014 can have\nauthorization ",(0,r.kt)("inlineCode",{parentName:"p"},"checks")," specified for them. This value can be ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," (operation disabled)\nor ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," (operation enabled with no checks)."),(0,r.kt)("p",null,"To specify more fine-grained authorization controls, add a ",(0,r.kt)("inlineCode",{parentName:"p"},"checks")," field, e.g.:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "role": "user",\n  "entity": "page",\n  "find": {\n    "checks": {\n      "userId": "X-PLATFORMATIC-USER-ID"\n    }\n  },\n  ...\n}\n\n')),(0,r.kt)("p",null,"In this example, when a user with a ",(0,r.kt)("inlineCode",{parentName:"p"},"user")," role executes a ",(0,r.kt)("inlineCode",{parentName:"p"},"findPage"),", they can\naccess all the data that has ",(0,r.kt)("inlineCode",{parentName:"p"},"userId")," equal to the value  in user metadata with\nkey ",(0,r.kt)("inlineCode",{parentName:"p"},"X-PLATFORMATIC-USER-ID"),"."),(0,r.kt)("p",null,"Note that ",(0,r.kt)("inlineCode",{parentName:"p"},'"userId": "X-PLATFORMATIC-USER-ID"')," is syntactic sugar for:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'      "find": {\n        "checks": {\n          "userId": {\n            "eq": "X-PLATFORMATIC-USER-ID"\n          }\n        }\n      }\n')),(0,r.kt)("p",null,"It's possible to specify more complex rules using all the ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.30.1/reference/sql-mapper/entities/api#where-clause"},"supported where clause operators"),"."),(0,r.kt)("p",null,"Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"userId")," MUST exist as a field in the database table to use this feature."),(0,r.kt)("h3",{id:"graphql-events-and-subscriptions"},"GraphQL events and subscriptions"),(0,r.kt)("p",null,"Platformatic DB supports GraphQL subscriptions and therefore db-authorization must protect them.\nThe check is performed based on the ",(0,r.kt)("inlineCode",{parentName:"p"},"find")," permissions, the only permissions that are supported are:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"find: false"),", the subscription for that role is disabled"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"find: { checks: { [prop]: 'X-PLATFORMATIC-PROP' } }")," validates that the given prop is equal"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"find: { checks: { [prop]: { eq: 'X-PLATFORMATIC-PROP' } } }")," validates that the given prop is equal")),(0,r.kt)("p",null,"Conflicting rules across roles for different equality checks will not be supported."),(0,r.kt)("h2",{id:"restrict-access-to-entity-fields"},"Restrict access to entity fields"),(0,r.kt)("p",null,"If a ",(0,r.kt)("inlineCode",{parentName:"p"},"fields")," array is present on an operation, Platformatic DB restricts the columns on which the user can execute to that list.\nFor ",(0,r.kt)("inlineCode",{parentName:"p"},"save")," operations, the configuration must specify all the not-nullable fields (otherwise, it would fail at runtime).\nPlatformatic does these checks at startup."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    "rule": {\n        "entity": "page",\n        "role": "user",\n        "find": {\n          "checks": {\n            "userId": "X-PLATFORMATIC-USER-ID"\n          },\n          "fields": ["id", "title"]\n        }\n        ...\n    }\n')),(0,r.kt)("p",null,"In this case, only ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"title")," are returned for a user with a ",(0,r.kt)("inlineCode",{parentName:"p"},"user")," role on the ",(0,r.kt)("inlineCode",{parentName:"p"},"page")," entity."),(0,r.kt)("h2",{id:"set-entity-fields-from-user-metadata"},"Set entity fields from user metadata"),(0,r.kt)("p",null,"Defaults are used in database insert and are default fields added automatically populated from user metadata, e.g.:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'        "defaults": {\n          "userId": "X-PLATFORMATIC-USER-ID"\n        },\n')),(0,r.kt)("p",null,"When an entity is created, the ",(0,r.kt)("inlineCode",{parentName:"p"},"userId")," column is used and populated using the value from user metadata."),(0,r.kt)("h2",{id:"programmatic-rules"},"Programmatic rules"),(0,r.kt)("p",null,"If it's necessary to have more control over the authorizations, it's possible to specify the rules programmatically, e.g.:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"\n  app.register(auth, {\n    jwt: {\n      secret: 'supersecret'\n    },\n    rules: [{\n      role: 'user',\n      entity: 'page',\n      async find ({ user, ctx, where }) {\n        return {\n          ...where,\n          userId: {\n            eq: user['X-PLATFORMATIC-USER-ID']\n          }\n        }\n      },\n      async delete ({ user, ctx, where }) {\n        return {\n          ...where,\n          userId: {\n            eq: user['X-PLATFORMATIC-USER-ID']\n          }\n        }\n      },\n      defaults: {\n        userId: async function ({ user, ctx, input }) {\n          match(user, {\n            'X-PLATFORMATIC-USER-ID': generated.shift(),\n            'X-PLATFORMATIC-ROLE': 'user'\n          })\n          return user['X-PLATFORMATIC-USER-ID']\n        }\n\n      },\n      async save ({ user, ctx, where }) {\n        return {\n          ...where,\n          userId: {\n            eq: user['X-PLATFORMATIC-USER-ID']\n          }\n        }\n      }\n    }]\n  })\n\n")),(0,r.kt)("p",null,"In this example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"user")," role can delete all the posts edited before yesterday:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"}," app.register(auth, {\n    jwt: {\n      secret: 'supersecret'\n    },\n    roleKey: 'X-PLATFORMATIC-ROLE',\n    anonymousRole: 'anonymous',\n    rules: [{\n      role: 'user',\n      entity: 'page',\n      find: true,\n      save: true,\n      async delete ({ user, ctx, where }) {\n        return {\n          ...where,\n          editedAt: {\n            lt: yesterday\n          }\n        }\n      },\n      defaults: {\n        userId: 'X-PLATFORMATIC-USER-ID'\n      }\n    }]\n  })\n")),(0,r.kt)("h2",{id:"access-validation-on-entity-mapper-for-plugins"},"Access validation on ",(0,r.kt)("inlineCode",{parentName:"h2"},"entity mapper")," for plugins"),(0,r.kt)("p",null,"To assert that a specific user with it's ",(0,r.kt)("inlineCode",{parentName:"p"},"role(s)")," has the correct access rights to use entities on a ",(0,r.kt)("inlineCode",{parentName:"p"},"platformatic plugin")," the context should be passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"entity mapper")," in order to verify it's permissions like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"//plugin.js\n\napp.post('/', async (req, reply) => {\n  const ctx = req.createPlatformaticCtx()\n  \n  await app.platformatic.entities.movie.find({\n    where: { /*...*/ },\n    ctx\n  })\n})\n\n")),(0,r.kt)("h2",{id:"skip-authorization-rules"},"Skip authorization rules"),(0,r.kt)("p",null,"In custom plugins, it's possible to skip the authorization rules on entities programmatically by setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"skipAuth")," flag to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," or not passing a ",(0,r.kt)("inlineCode",{parentName:"p"},"ctx"),", e.g.:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// this works even if the user's role doesn't have the `find` permission.\nconst result = await app.platformatic.entities.page.find({skipAuth: true, ...})\n")),(0,r.kt)("p",null,"This has the same effect:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// this works even if the user's role doesn't have the `find` permission\nconst result = await app.platformatic.entities.page.find() // no `ctx`\n")),(0,r.kt)("p",null,"This is useful for custom plugins for which the authentication is not necessary, so there is no user role set when invoked."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Skip authorization rules is not possible on the automatically generated REST and GraphQL APIs.")),(0,r.kt)("h2",{id:"avoid-repetition-of-the-same-rule-multiple-times"},"Avoid repetition of the same rule multiple times"),(0,r.kt)("p",null,"Very often we end up writing the same rules over and over again.\nInstead, it's possible to condense the rule for multiple entities on a single entry:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"}," app.register(auth, {\n    jwt: {\n      secret: 'supersecret'\n    },\n    roleKey: 'X-PLATFORMATIC-ROLE',\n    anonymousRole: 'anonymous',\n    rules: [{\n      role: 'anonymous',\n      entities: ['category', 'page'],\n      find: true,\n      delete: false,\n      save: false\n    }]\n})\n")))}d.isMDXComponent=!0}}]);