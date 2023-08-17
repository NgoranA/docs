"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[77219],{3905:(e,n,i)=>{i.d(n,{Zo:()=>m,kt:()=>g});var l=i(67294);function t(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function I(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,l)}return i}function d(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?I(Object(i),!0).forEach((function(n){t(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):I(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function a(e,n){if(null==e)return{};var i,l,t=function(e,n){if(null==e)return{};var i,l,t={},I=Object.keys(e);for(l=0;l<I.length;l++)i=I[l],n.indexOf(i)>=0||(t[i]=e[i]);return t}(e,n);if(Object.getOwnPropertySymbols){var I=Object.getOwnPropertySymbols(e);for(l=0;l<I.length;l++)i=I[l],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}var c=l.createContext({}),o=function(e){var n=l.useContext(c),i=n;return e&&(i="function"==typeof e?e(n):d(d({},n),e)),i},m=function(e){var n=o(e.components);return l.createElement(c.Provider,{value:n},e.children)},Z="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},p=l.forwardRef((function(e,n){var i=e.components,t=e.mdxType,I=e.originalType,c=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),Z=o(i),p=t,g=Z["".concat(c,".").concat(p)]||Z[p]||s[p]||I;return i?l.createElement(g,d(d({ref:n},m),{},{components:i})):l.createElement(g,d({ref:n},m))}));function g(e,n){var i=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var I=i.length,d=new Array(I);d[0]=p;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[Z]="string"==typeof e?e:t,d[1]=a;for(var o=2;o<I;o++)d[o]=i[o];return l.createElement.apply(null,d)}return l.createElement.apply(null,i)}p.displayName="MDXCreateElement"},73161:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>s,frontMatter:()=>I,metadata:()=>a,toc:()=>o});var l=i(87462),t=(i(67294),i(3905));const I={},d="Hooks",a={unversionedId:"reference/sql-mapper/entities/hooks",id:"version-0.33.1/reference/sql-mapper/entities/hooks",title:"Hooks",description:"Entity hooks are a way to wrap the API methods for an entity and add custom behaviour.",source:"@site/versioned_docs/version-0.33.1/reference/sql-mapper/entities/hooks.md",sourceDirName:"reference/sql-mapper/entities",slug:"/reference/sql-mapper/entities/hooks",permalink:"/docs/0.33.1/reference/sql-mapper/entities/hooks",draft:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-0.33.1/reference/sql-mapper/entities/hooks.md",tags:[],version:"0.33.1",frontMatter:{},sidebar:"docs",previous:{title:"Example",permalink:"/docs/0.33.1/reference/sql-mapper/entities/example"},next:{title:"Relations",permalink:"/docs/0.33.1/reference/sql-mapper/entities/relations"}},c={},o=[{value:"How to use hooks",id:"how-to-use-hooks",level:2},{value:"Usage",id:"usage",level:3},{value:"Multiple Hooks",id:"multiple-hooks",level:2}],m={toc:o},Z="wrapper";function s(e){let{components:n,...I}=e;return(0,t.kt)(Z,(0,l.Z)({},m,I,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"hooks"},"Hooks"),(0,t.kt)("p",null,"Entity hooks are a way to wrap the ",(0,t.kt)("a",{parentName:"p",href:"./api"},"API methods")," for an entity and add custom behaviour."),(0,t.kt)("p",null,"The Platformatic DB SQL Mapper provides an ",(0,t.kt)("inlineCode",{parentName:"p"},"addEntityHooks(entityName, spec)")," function that can be used to add hooks for an entity."),(0,t.kt)("h2",{id:"how-to-use-hooks"},"How to use hooks"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"addEntityHooks")," accepts two arguments:"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},"A string representing the entity name (singularized), for example ",(0,t.kt)("inlineCode",{parentName:"li"},"'page'"),"."),(0,t.kt)("li",{parentName:"ol"},"A key/value object where the key is one of the API methods (",(0,t.kt)("inlineCode",{parentName:"li"},"find"),", ",(0,t.kt)("inlineCode",{parentName:"li"},"insert"),", ",(0,t.kt)("inlineCode",{parentName:"li"},"save"),", ",(0,t.kt)("inlineCode",{parentName:"li"},"delete"),") and the value is a callback function. The callback will be called with the ",(0,t.kt)("em",{parentName:"li"},"original")," API method and the options that were passed to that method. See the example below.")),(0,t.kt)("h3",{id:"usage"},"Usage"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'\'use strict\'\nconst { connect } = require(\'@platformatic/sql-mapper\')\nconst { pino } = require(\'pino\')\nconst pretty = require(\'pino-pretty\')\nconst logger = pino(pretty())\n\nasync function main() {\n  const pgConnectionString = \'postgres://postgres:postgres@127.0.0.1/postgres\'\n  const mapper = await connect({\n    connectionString: pgConnectionString,\n    log: logger,\n  })\n  mapper.addEntityHooks(\'page\', {\n    find: async (originalFind, opts) => {\n      // Add a `foo` field with `bar` value to each row\n      const res = await originalFind(opts)\n      return res.map((row) => {\n        row.foo = \'bar\'\n        return row\n      })\n    }\n  })\n  const res = await mapper.entities.page.find({\n    fields: [\'id\', \'title\',],\n    where: {\n      id: {\n        lt: 10\n      }\n    },\n  })\n  logger.info(res)\n  /**\n  [\n    0: {\n      "id": "5",\n      "title": "Page 1",\n      "foo": "bar"\n    },\n    1: {\n      "id": "6",\n      "title": "Page 2",\n      "foo": "bar"\n    }\n  ]\n  */\n  await mapper.db.dispose()\n}\nmain()\n')),(0,t.kt)("h2",{id:"multiple-hooks"},"Multiple Hooks"),(0,t.kt)("p",null,"Multiple hooks can be added for the same entity and API method, for example:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'\'use strict\'\nconst { connect } = require(\'@platformatic/sql-mapper\')\nconst { pino } = require(\'pino\')\nconst pretty = require(\'pino-pretty\')\nconst logger = pino(pretty())\n\nasync function main() {\n  const pgConnectionString = \'postgres://postgres:postgres@127.0.0.1/postgres\'\n  const mapper = await connect({\n    connectionString: pgConnectionString,\n    log: logger,\n  })\n  mapper.addEntityHooks(\'page\', {\n    find: async function firstHook(previousFunction, opts) {\n      // Add a `foo` field with `bar` value to each row\n      const res = await previousFunction(opts)\n      return res.map((row) => {\n        row.foo = \'bar\'\n        return row\n      })\n    }\n  })\n  mapper.addEntityHooks(\'page\', {\n    find: async function secondHook(previousFunction, opts) {\n      // Add a `bar` field with `baz` value to each row\n      const res = await previousFunction(opts)\n      return res.map((row) => {\n        row.bar = \'baz\'\n        return row\n      })\n    }\n  })\n  const res = await mapper.entities.page.find({\n    fields: [\'id\', \'title\',],\n    where: {\n      id: {\n        lt: 10\n      }\n    },\n  })\n  logger.info(res)\n  /**\n  [\n    0: {\n      "id": "5",\n      "title": "Page 1",\n      "foo": "bar",\n      "bar": "baz"\n    },\n    1: {\n      "id": "6",\n      "title": "Page 2",\n      "foo": "bar",\n      "bar": "baz"\n    }\n  ]\n  */\n  await mapper.db.dispose()\n}\nmain()\n')),(0,t.kt)("p",null,"Since hooks are wrappers, they are being called in reverse order, like the image below"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Hooks Lifecycle",src:i(51043).Z,width:"791",height:"91"})),(0,t.kt)("p",null,"So even though we defined two hooks, the Database will be hit only once."),(0,t.kt)("p",null,"Query result will be processed by ",(0,t.kt)("inlineCode",{parentName:"p"},"firstHook"),", which will pass the result to ",(0,t.kt)("inlineCode",{parentName:"p"},"secondHook"),", which will, finally, send the processed result to the original ",(0,t.kt)("inlineCode",{parentName:"p"},".find({...})")," function."))}s.isMDXComponent=!0},51043:(e,n,i)=>{i.d(n,{Z:()=>l});const l="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCEtLSBEbyBub3QgZWRpdCB0aGlzIGZpbGUgd2l0aCBlZGl0b3JzIG90aGVyIHRoYW4gZGlhZ3JhbXMubmV0IC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgd2lkdGg9Ijc5MXB4IiBoZWlnaHQ9IjkxcHgiIHZpZXdCb3g9Ii0wLjUgLTAuNSA3OTEgOTEiIGNvbnRlbnQ9IiZsdDtteGZpbGUgaG9zdD0mcXVvdDthcHAuZGlhZ3JhbXMubmV0JnF1b3Q7IG1vZGlmaWVkPSZxdW90OzIwMjItMDktMDZUMTQ6MTU6NTUuNDgzWiZxdW90OyBhZ2VudD0mcXVvdDs1LjAgKE1hY2ludG9zaDsgSW50ZWwgTWFjIE9TIFggMTBfMTVfNykgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEwNS4wLjAuMCBTYWZhcmkvNTM3LjM2JnF1b3Q7IGV0YWc9JnF1b3Q7cWlVeEJ2cUlHZ3NFOWhSQzZxN0QmcXVvdDsgdmVyc2lvbj0mcXVvdDsyMC4yLjgmcXVvdDsgdHlwZT0mcXVvdDtkZXZpY2UmcXVvdDsmZ3Q7Jmx0O2RpYWdyYW0gaWQ9JnF1b3Q7MjlyOWk1NzQzakJuTXpOR1lwUEQmcXVvdDsgbmFtZT0mcXVvdDtQYWdlLTEmcXVvdDsmZ3Q7NVZkTmM5b3dFUDAxekxTSE1QZ0RERmNJQ1lkK1RUbTBWd1V2dGhMWjY4cHJEUG4xbFpHTWNaMFFad3FEWjNKQ2V0cTFkdmZwclZEUG1VWGJlOG1TOEN2NklIcjJ3Ti8ybk51ZWJWdldlS1IrQ21TbkVjOXlOUkJJN2h1akNsanlaekRnd0tBWjl5R3RHUktpSUo3VXdSWEdNYXlvaGpFcE1hK2JyVkhVZDAxWUFBMWd1V0tpaWY3aVBvVWFIZHRlaFMrQUIyRzVzeldhNkpXSWxjWW1relJrUHVaSGtEUHZPVE9KU0hvVWJXY2dpdUtWZGRGK2Q2K3NIZ0tURUZNYmgxd3UxNW1YYkw0N3Y1OGU3L256OXNmUDZNYXdzMkVpTXdtYllHbFhWZ0I4VlJBelJVa2hCaGd6TWEvUXFjUXM5cUhZWnFCbWxjMFh4RVNCbGdJZmdXaG4yR1Vab1lKQ2lvUlpYV05NZHl6aW9qZ2tNOHdrQjZtQytBYXFYRk1kVUJIRnE0a2JLRldlS3ppUnJVbU9tQXlBVHRpNUIzclV1UWFNZ09STytVa1FqUGltSGdjekJ5dzQyRlVjcUlHaDRSMlUyQzlRTWhKa3lsU2NZV2FTSFAzSmlzTXpyVmZzQUt0UnNIZmpNcVVGNHRPbnorV1hWR0Q2WTlxaXdYbkZhRUZQSG5LQ1phSzN6WlhPNit5WmVFRVNiRTlUMUN5cGNYQWRJeExUSmV6aFVNL3pTbk5XS2FUd1NHK2p3WVZZR0g0b1lUZ3RoV0ZmVXhqT3VZV1Jncm8xL0c0cnd4NTNUUm5qN2lsakFXSUR4RmZzdktwd1c2ckN1NllxM0hPclFwV0owNjYvNXJIZlhWa01PeWNMNzkwOFZLZTJ3Y0V0SS9iQVVtaGJmdlhmTWltR3Z2SkxDU1c4VFVLTHErVy9HUEwrdmRMZFFZT2g4UXNFVFM1RlVQbWk2RkxqdXVDVlBtblp2SnhyTnEvSnVadFh4SklFWkgvZnd6aWsvZUo5MXZGV1pyL2R5ZXd6ZFRJMXJkNmIrN1dqVjdzei93cz0mbHQ7L2RpYWdyYW0mZ3Q7Jmx0Oy9teGZpbGUmZ3Q7IiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpOyI+PGRlZnMvPjxnPjxwYXRoIGQ9Ik0gNTMwIDQ1IEwgNTUwIDQ1IEwgNTQwIDQ1IEwgNTUzLjYzIDQ1IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigwLCAwLCAwKSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0ic3Ryb2tlIi8+PHBhdGggZD0iTSA1NTguODggNDUgTCA1NTEuODggNDguNSBMIDU1My42MyA0NSBMIDU1MS44OCA0MS41IFoiIGZpbGw9InJnYigwLCAwLCAwKSIgc3Ryb2tlPSJyZ2IoMCwgMCwgMCkiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxyZWN0IHg9IjQxMCIgeT0iMTUiIHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIHJ4PSI5IiByeT0iOSIgZmlsbD0icmdiKDI1NSwgMjU1LCAyNTUpIiBzdHJva2U9InJnYigwLCAwLCAwKSIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjUgLTAuNSkiPjxzd2l0Y2g+PGZvcmVpZ25PYmplY3QgcG9pbnRlci1ldmVudHM9Im5vbmUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSIgc3R5bGU9Im92ZXJmbG93OiB2aXNpYmxlOyB0ZXh0LWFsaWduOiBsZWZ0OyI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiB1bnNhZmUgY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHVuc2FmZSBjZW50ZXI7IHdpZHRoOiAxMThweDsgaGVpZ2h0OiAxcHg7IHBhZGRpbmctdG9wOiA0NXB4OyBtYXJnaW4tbGVmdDogNDExcHg7Ij48ZGl2IGRhdGEtZHJhd2lvLWNvbG9ycz0iY29sb3I6IHJnYigwLCAwLCAwKTsgIiBzdHlsZT0iYm94LXNpemluZzogYm9yZGVyLWJveDsgZm9udC1zaXplOiAwcHg7IHRleHQtYWxpZ246IGNlbnRlcjsiPjxkaXYgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAxMnB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogcmdiKDAsIDAsIDApOyBsaW5lLWhlaWdodDogMS4yOyBwb2ludGVyLWV2ZW50czogYWxsOyB3aGl0ZS1zcGFjZTogbm9ybWFsOyBvdmVyZmxvdy13cmFwOiBub3JtYWw7Ij48Zm9udCBmYWNlPSJDb3VyaWVyIE5ldyI+Zmlyc3RIb29rKCk8L2ZvbnQ+PC9kaXY+PC9kaXY+PC9kaXY+PC9mb3JlaWduT2JqZWN0Pjx0ZXh0IHg9IjQ3MCIgeT0iNDkiIGZpbGw9InJnYigwLCAwLCAwKSIgZm9udC1mYW1pbHk9IkhlbHZldGljYSIgZm9udC1zaXplPSIxMnB4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5maXJzdEhvb2soKTwvdGV4dD48L3N3aXRjaD48L2c+PHBhdGggZD0iTSAzODAgNDUgTCA0MDAgNDUgTCAzOTAgNDUgTCA0MDMuNjMgNDUiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiKDAsIDAsIDApIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJzdHJva2UiLz48cGF0aCBkPSJNIDQwOC44OCA0NSBMIDQwMS44OCA0OC41IEwgNDAzLjYzIDQ1IEwgNDAxLjg4IDQxLjUgWiIgZmlsbD0icmdiKDAsIDAsIDApIiBzdHJva2U9InJnYigwLCAwLCAwKSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PHJlY3QgeD0iMjYwIiB5PSIxNSIgd2lkdGg9IjEyMCIgaGVpZ2h0PSI2MCIgcng9IjkiIHJ5PSI5IiBmaWxsPSJyZ2IoMjU1LCAyNTUsIDI1NSkiIHN0cm9rZT0icmdiKDAsIDAsIDApIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuNSAtMC41KSI+PHN3aXRjaD48Zm9yZWlnbk9iamVjdCBwb2ludGVyLWV2ZW50cz0ibm9uZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgcmVxdWlyZWRGZWF0dXJlcz0iaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNFeHRlbnNpYmlsaXR5IiBzdHlsZT0ib3ZlcmZsb3c6IHZpc2libGU7IHRleHQtYWxpZ246IGxlZnQ7Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IHVuc2FmZSBjZW50ZXI7IGp1c3RpZnktY29udGVudDogdW5zYWZlIGNlbnRlcjsgd2lkdGg6IDExOHB4OyBoZWlnaHQ6IDFweDsgcGFkZGluZy10b3A6IDQ1cHg7IG1hcmdpbi1sZWZ0OiAyNjFweDsiPjxkaXYgZGF0YS1kcmF3aW8tY29sb3JzPSJjb2xvcjogcmdiKDAsIDAsIDApOyAiIHN0eWxlPSJib3gtc2l6aW5nOiBib3JkZXItYm94OyBmb250LXNpemU6IDBweDsgdGV4dC1hbGlnbjogY2VudGVyOyI+PGRpdiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyBmb250LXNpemU6IDEycHg7IGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7IGNvbG9yOiByZ2IoMCwgMCwgMCk7IGxpbmUtaGVpZ2h0OiAxLjI7IHBvaW50ZXItZXZlbnRzOiBhbGw7IHdoaXRlLXNwYWNlOiBub3JtYWw7IG92ZXJmbG93LXdyYXA6IG5vcm1hbDsiPjxmb250IGZhY2U9IkNvdXJpZXIgTmV3Ij5zZWNvbmRIb29rKCk8L2ZvbnQ+PC9kaXY+PC9kaXY+PC9kaXY+PC9mb3JlaWduT2JqZWN0Pjx0ZXh0IHg9IjMyMCIgeT0iNDkiIGZpbGw9InJnYigwLCAwLCAwKSIgZm9udC1mYW1pbHk9IkhlbHZldGljYSIgZm9udC1zaXplPSIxMnB4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5zZWNvbmRIb29rKCk8L3RleHQ+PC9zd2l0Y2g+PC9nPjxwYXRoIGQ9Ik0gNjgwIDQ1IEwgNzAwIDQ1IEwgNjkwIDQ1IEwgNzAzLjYzIDQ1IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigwLCAwLCAwKSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0ic3Ryb2tlIi8+PHBhdGggZD0iTSA3MDguODggNDUgTCA3MDEuODggNDguNSBMIDcwMy42MyA0NSBMIDcwMS44OCA0MS41IFoiIGZpbGw9InJnYigwLCAwLCAwKSIgc3Ryb2tlPSJyZ2IoMCwgMCwgMCkiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxyZWN0IHg9IjU2MCIgeT0iMTUiIHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIHJ4PSI5IiByeT0iOSIgZmlsbD0icmdiKDI1NSwgMjU1LCAyNTUpIiBzdHJva2U9InJnYigwLCAwLCAwKSIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjUgLTAuNSkiPjxzd2l0Y2g+PGZvcmVpZ25PYmplY3QgcG9pbnRlci1ldmVudHM9Im5vbmUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSIgc3R5bGU9Im92ZXJmbG93OiB2aXNpYmxlOyB0ZXh0LWFsaWduOiBsZWZ0OyI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiB1bnNhZmUgY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHVuc2FmZSBjZW50ZXI7IHdpZHRoOiAxMThweDsgaGVpZ2h0OiAxcHg7IHBhZGRpbmctdG9wOiA0NXB4OyBtYXJnaW4tbGVmdDogNTYxcHg7Ij48ZGl2IGRhdGEtZHJhd2lvLWNvbG9ycz0iY29sb3I6IHJnYigwLCAwLCAwKTsgIiBzdHlsZT0iYm94LXNpemluZzogYm9yZGVyLWJveDsgZm9udC1zaXplOiAwcHg7IHRleHQtYWxpZ246IGNlbnRlcjsiPjxkaXYgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAxMnB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogcmdiKDAsIDAsIDApOyBsaW5lLWhlaWdodDogMS4yOyBwb2ludGVyLWV2ZW50czogYWxsOyB3aGl0ZS1zcGFjZTogbm9ybWFsOyBvdmVyZmxvdy13cmFwOiBub3JtYWw7Ij48Zm9udCBmYWNlPSJDb3VyaWVyIE5ldyI+ZW50aXR5LmZpbmQoKTwvZm9udD48L2Rpdj48L2Rpdj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PHRleHQgeD0iNjIwIiB5PSI0OSIgZmlsbD0icmdiKDAsIDAsIDApIiBmb250LWZhbWlseT0iSGVsdmV0aWNhIiBmb250LXNpemU9IjEycHgiIHRleHQtYW5jaG9yPSJtaWRkbGUiPmVudGl0eS5maW5kKCk8L3RleHQ+PC9zd2l0Y2g+PC9nPjxwYXRoIGQ9Ik0gNzEwIDExIEMgNzEwIC0zLjY3IDc5MCAtMy42NyA3OTAgMTEgTCA3OTAgNzkgQyA3OTAgOTMuNjcgNzEwIDkzLjY3IDcxMCA3OSBaIiBmaWxsPSJyZ2IoMjU1LCAyNTUsIDI1NSkiIHN0cm9rZT0icmdiKDAsIDAsIDApIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz48cGF0aCBkPSJNIDcxMCAxMSBDIDcxMCAyMiA3OTAgMjIgNzkwIDExIE0gNzEwIDE2LjUgQyA3MTAgMjcuNSA3OTAgMjcuNSA3OTAgMTYuNSBNIDcxMCAyMiBDIDcxMCAzMyA3OTAgMzMgNzkwIDIyIiBmaWxsPSJub25lIiBzdHJva2U9InJnYigwLCAwLCAwKSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuNSAtMC41KSI+PHN3aXRjaD48Zm9yZWlnbk9iamVjdCBwb2ludGVyLWV2ZW50cz0ibm9uZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgcmVxdWlyZWRGZWF0dXJlcz0iaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNFeHRlbnNpYmlsaXR5IiBzdHlsZT0ib3ZlcmZsb3c6IHZpc2libGU7IHRleHQtYWxpZ246IGxlZnQ7Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IHVuc2FmZSBjZW50ZXI7IGp1c3RpZnktY29udGVudDogdW5zYWZlIGNlbnRlcjsgd2lkdGg6IDc4cHg7IGhlaWdodDogMXB4OyBwYWRkaW5nLXRvcDogNTlweDsgbWFyZ2luLWxlZnQ6IDcxMXB4OyI+PGRpdiBkYXRhLWRyYXdpby1jb2xvcnM9ImNvbG9yOiByZ2IoMCwgMCwgMCk7ICIgc3R5bGU9ImJveC1zaXppbmc6IGJvcmRlci1ib3g7IGZvbnQtc2l6ZTogMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7Ij48ZGl2IHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMTJweDsgZm9udC1mYW1pbHk6ICZxdW90O0NvdXJpZXIgTmV3JnF1b3Q7OyBjb2xvcjogcmdiKDAsIDAsIDApOyBsaW5lLWhlaWdodDogMS4yOyBwb2ludGVyLWV2ZW50czogYWxsOyB3aGl0ZS1zcGFjZTogbm9ybWFsOyBvdmVyZmxvdy13cmFwOiBub3JtYWw7Ij48Zm9udCBmYWNlPSJIZWx2ZXRpY2EiPkRhdGFiYXNlPC9mb250PjwvZGl2PjwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48dGV4dCB4PSI3NTAiIHk9IjYzIiBmaWxsPSJyZ2IoMCwgMCwgMCkiIGZvbnQtZmFtaWx5PSJDb3VyaWVyIE5ldyIgZm9udC1zaXplPSIxMnB4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5EYXRhYmFzZTwvdGV4dD48L3N3aXRjaD48L2c+PHBhdGggZD0iTSAyMjAgNDUgTCAyNTMuNjMgNDUiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiKDAsIDAsIDApIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJzdHJva2UiLz48cGF0aCBkPSJNIDI1OC44OCA0NSBMIDI1MS44OCA0OC41IEwgMjUzLjYzIDQ1IEwgMjUxLjg4IDQxLjUgWiIgZmlsbD0icmdiKDAsIDAsIDApIiBzdHJva2U9InJnYigwLCAwLCAwKSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PHJlY3QgeD0iMCIgeT0iMTUiIHdpZHRoPSIyMjAiIGhlaWdodD0iNjAiIHJ4PSI5IiByeT0iOSIgZmlsbD0icmdiKDI1NSwgMjU1LCAyNTUpIiBzdHJva2U9InJnYigwLCAwLCAwKSIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjUgLTAuNSkiPjxzd2l0Y2g+PGZvcmVpZ25PYmplY3QgcG9pbnRlci1ldmVudHM9Im5vbmUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSIgc3R5bGU9Im92ZXJmbG93OiB2aXNpYmxlOyB0ZXh0LWFsaWduOiBsZWZ0OyI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiB1bnNhZmUgY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHVuc2FmZSBjZW50ZXI7IHdpZHRoOiAyMThweDsgaGVpZ2h0OiAxcHg7IHBhZGRpbmctdG9wOiA0NXB4OyBtYXJnaW4tbGVmdDogMXB4OyI+PGRpdiBkYXRhLWRyYXdpby1jb2xvcnM9ImNvbG9yOiByZ2IoMCwgMCwgMCk7ICIgc3R5bGU9ImJveC1zaXppbmc6IGJvcmRlci1ib3g7IGZvbnQtc2l6ZTogMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7Ij48ZGl2IHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMTJweDsgZm9udC1mYW1pbHk6IEhlbHZldGljYTsgY29sb3I6IHJnYigwLCAwLCAwKTsgbGluZS1oZWlnaHQ6IDEuMjsgcG9pbnRlci1ldmVudHM6IGFsbDsgd2hpdGUtc3BhY2U6IG5vcm1hbDsgb3ZlcmZsb3ctd3JhcDogbm9ybWFsOyI+PGZvbnQgZmFjZT0iQ291cmllciBOZXciPm1hcHBlci5lbnRpdGllcy5wYWdlLmZpbmQoKTwvZm9udD48L2Rpdj48L2Rpdj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PHRleHQgeD0iMTEwIiB5PSI0OSIgZmlsbD0icmdiKDAsIDAsIDApIiBmb250LWZhbWlseT0iSGVsdmV0aWNhIiBmb250LXNpemU9IjEycHgiIHRleHQtYW5jaG9yPSJtaWRkbGUiPm1hcHBlci5lbnRpdGllcy5wYWdlLmZpbmQoKTwvdGV4dD48L3N3aXRjaD48L2c+PC9nPjxzd2l0Y2g+PGcgcmVxdWlyZWRGZWF0dXJlcz0iaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNFeHRlbnNpYmlsaXR5Ii8+PGEgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwtNSkiIHhsaW5rOmhyZWY9Imh0dHBzOi8vd3d3LmRpYWdyYW1zLm5ldC9kb2MvZmFxL3N2Zy1leHBvcnQtdGV4dC1wcm9ibGVtcyIgdGFyZ2V0PSJfYmxhbmsiPjx0ZXh0IHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMTBweCIgeD0iNTAlIiB5PSIxMDAlIj5UZXh0IGlzIG5vdCBTVkcgLSBjYW5ub3QgZGlzcGxheTwvdGV4dD48L2E+PC9zd2l0Y2g+PC9zdmc+"}}]);