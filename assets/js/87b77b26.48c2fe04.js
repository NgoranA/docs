"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[6894,18351],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),o=n(86010);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(87462),o=n(67294),r=n(86010),i=n(12466),l=n(16550),s=n(91980),c=n(67392),p=n(50012);function u(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function d(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=d(e),[i,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[s,c]=f({queryString:n,groupId:a}),[u,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,p.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),h=(()=>{const e=s??u;return m({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),v(e)}),[c,v,r]),tabValues:r}}var h=n(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),a=c[n].value;a!==l&&(u(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},i,{className:(0,r.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function b(e){const t=v(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",g.tabList)},o.createElement(y,(0,a.Z)({},e,t)),o.createElement(k,(0,a.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return o.createElement(b,(0,a.Z)({key:String(t)},e))}},46773:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var a=n(87462),o=(n(67294),n(3905)),r=n(74866),i=n(85162);const l={},s=void 0,c={unversionedId:"getting-started/new-api-project-instructions",id:"version-0.33.1/getting-started/new-api-project-instructions",title:"new-api-project-instructions",description:"Run this command in your terminal to start the Platformatic creator wizard:",source:"@site/versioned_docs/version-0.33.1/getting-started/new-api-project-instructions.md",sourceDirName:"getting-started",slug:"/getting-started/new-api-project-instructions",permalink:"/docs/0.33.1/getting-started/new-api-project-instructions",draft:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-0.33.1/getting-started/new-api-project-instructions.md",tags:[],version:"0.33.1",frontMatter:{}},p={},u=[],d={toc:u},m="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Run this command in your terminal to start the Platformatic creator wizard:"),(0,o.kt)(r.Z,{groupId:"package-manager-create",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm create platformatic@latest\n"))),(0,o.kt)(i.Z,{value:"yarn",label:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn create platformatic\n"))),(0,o.kt)(i.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm create platformatic@latest\n")))),(0,o.kt)("p",null,"This interactive command-line tool will ask you some questions about how you'd\nlike to set up your new Platformatic project. For this guide, select these options:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- Which kind of project do you want to create?  => DB\n- Where would you like to create your project?  => quick-start\n- Do you want to create default migrations?     => Yes\n- Do you want to create a plugin?               => Yes\n- Do you want to use TypeScript?                => No\n- Do you want to install dependencies?          => Yes (this can take a while)\n- Do you want to apply the migrations?          => Yes\n- Do you want to generate types?                => Yes\n- Do you want to create the github action to deploy this application to Platformatic Cloud dynamic workspace? => No\n- Do you want to create the github action to deploy this application to Platformatic Cloud static workspace?  => No\n")),(0,o.kt)("p",null,"Once the wizard is complete, you'll have a Platformatic app project in the\nfolder ",(0,o.kt)("inlineCode",{parentName:"p"},"quick-start"),", with example migration files and a plugin script."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Make sure you run the npm/yarn/pnpm command ",(0,o.kt)("inlineCode",{parentName:"p"},"install")," command manually if you\ndon't ask the wizard to do it for you.")))}f.isMDXComponent=!0},20830:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>v,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var a=n(87462),o=(n(67294),n(3905)),r=n(74866),i=n(85162),l=n(46773);const s={},c="Generate Front-end Code to Consume Platformatic REST API",p={unversionedId:"guides/generate-frontend-code-to-consume-platformatic-rest-api",id:"version-0.33.1/guides/generate-frontend-code-to-consume-platformatic-rest-api",title:"Generate Front-end Code to Consume Platformatic REST API",description:"By default, a Platformatic app exposes REST API that provide CRUD (Create, Read,",source:"@site/versioned_docs/version-0.33.1/guides/generate-frontend-code-to-consume-platformatic-rest-api.md",sourceDirName:"guides",slug:"/guides/generate-frontend-code-to-consume-platformatic-rest-api",permalink:"/docs/0.33.1/guides/generate-frontend-code-to-consume-platformatic-rest-api",draft:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-0.33.1/guides/generate-frontend-code-to-consume-platformatic-rest-api.md",tags:[],version:"0.33.1",frontMatter:{},sidebar:"docs",previous:{title:"Integrate Prisma with Platformatic DB",permalink:"/docs/0.33.1/guides/prisma"},next:{title:"Migrating a Fastify app to Platformatic Service",permalink:"/docs/0.33.1/guides/migrating-fastify-app-to-platformatic-service"}},u={},d=[{value:"Create a new Platformatic app",id:"create-a-new-platformatic-app",level:2},{value:"Configure the new Platformatic app",id:"configure-the-new-platformatic-app",level:2},{value:"Create a new Front-end Application",id:"create-a-new-front-end-application",level:2},{value:"Generate the front-end code to consume the Platformatic app REST API",id:"generate-the-front-end-code-to-consume-the-platformatic-app-rest-api",level:2},{value:"React and Vue.js components that read, create, and update an entity",id:"react-and-vuejs-components-that-read-create-and-update-an-entity",level:2},{value:"Import the new component in your front-end application",id:"import-the-new-component-in-your-front-end-application",level:2},{value:"Have fun",id:"have-fun",level:2}],m={toc:d},f="wrapper";function v(e){let{components:t,...s}=e;return(0,o.kt)(f,(0,a.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"generate-front-end-code-to-consume-platformatic-rest-api"},"Generate Front-end Code to Consume Platformatic REST API"),(0,o.kt)("p",null,"By default, a Platformatic app exposes REST API that provide CRUD (Create, Read,\nUpdate, Delete) functionality for each entity (see the\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.platformatic.dev/docs/reference/sql-openapi/introduction"},"Introduction to the REST API"),"\ndocumentation for more information on the REST API)."),(0,o.kt)("p",null,"Platformatic CLI allows to auto-generate the front-end code to import in your\nfront-end application to consume the Platformatic REST API."),(0,o.kt)("p",null,"This guide"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Explains how to create a new Platformatic app."),(0,o.kt)("li",{parentName:"ul"},"Explains how to configure the new Platformatic app."),(0,o.kt)("li",{parentName:"ul"},"Explains how to create a new React or Vue.js front-end application."),(0,o.kt)("li",{parentName:"ul"},"Explains how to generate the front-end TypeScript code to consume the Platformatic app REST API."),(0,o.kt)("li",{parentName:"ul"},"Provide some React and Vue.js components (either of them written in TypeScript) that read, create, and update an entity."),(0,o.kt)("li",{parentName:"ul"},"Explains how to import the new component in your front-end application.")),(0,o.kt)("h2",{id:"create-a-new-platformatic-app"},"Create a new Platformatic app"),(0,o.kt)(l.default,{mdxType:"NewApiProjectInstructions"}),(0,o.kt)("h2",{id:"configure-the-new-platformatic-app"},"Configure the new Platformatic app"),(0,o.kt)("p",null,'documentation to create a new Platformatic app. Every Platformatic app uses the "Movie" demo entity and includes\nthe corresponding table, migrations, and REST API to create, read, update, and delete movies.'),(0,o.kt)("p",null,"Once the new Platformatic app is ready:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Set up CORS in ",(0,o.kt)("inlineCode",{parentName:"li"},"platformatic.db.json"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'{\n  "$schema": "https://platformatic.dev/schemas/v0.24.0/db",\n  "server": {\n    "hostname": "{PLT_SERVER_HOSTNAME}",\n    "port": "{PORT}",\n    "logger": {\n      "level": "{PLT_SERVER_LOGGER_LEVEL}"\n    },\n+   "cors": {\n+     "origin": {\n+       "regexp": "/*/"\n+     }\n+   }\n  },\n  ...\n}\n')),(0,o.kt)("p",null,"  You can find more details about the cors configuration ",(0,o.kt)("a",{parentName:"p",href:"https://docs.platformatic.dev/docs/guides/generate-frontend-code-to-consume-platformatic-rest-api"},"here"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"launch Platformatic through ",(0,o.kt)("inlineCode",{parentName:"li"},"npm start"),".\nThen, the Platformatic app should be available at the ",(0,o.kt)("inlineCode",{parentName:"li"},"http://127.0.0.1:3042/")," URL.")),(0,o.kt)("h2",{id:"create-a-new-front-end-application"},"Create a new Front-end Application"),(0,o.kt)("p",null,"Refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://vitejs.dev/guide/#scaffolding-your-first-vite-project"},"Scaffolding Your First Vite Project"),'\ndocumentation to create a new front-end application, and call it "rest-api-frontend".'),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Please note Vite is suggested only for practical reasons, but the bundler of choice does not make any difference.")),(0,o.kt)("p",null,"If you are using npm 7+ you should run"),(0,o.kt)(r.Z,{groupId:"import-new-component",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"react",label:"React",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm create vite@latest rest-api-frontend -- --template react-ts\n"))),(0,o.kt)(i.Z,{value:"vue",label:"Vue.js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm create vite@latest rest-api-frontend -- --template vue-ts\n")))),(0,o.kt)("p",null,"and then follow the Vite's instructions"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Scaffolding project in /Users/noriste/Sites/temp/platformatic/rest-api-frontend...\n\nDone. Now run:\n\n  cd rest-api-frontend\n  npm install\n  npm run dev\n")),(0,o.kt)("p",null,"Once done, the front-end application is available at ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:5174/"),"."),(0,o.kt)("h2",{id:"generate-the-front-end-code-to-consume-the-platformatic-app-rest-api"},"Generate the front-end code to consume the Platformatic app REST API"),(0,o.kt)("p",null,"Now that either the Platformatic app and the front-end app are running, go to the front-end codebase and run the Platformatic CLI"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd rest-api-frontend/src\nnpx platformatic frontend http://127.0.0.1:3042 ts\n")),(0,o.kt)("p",null,"Refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.platformatic.dev/docs/reference/cli#frontend"},"Platformatic CLI frontend command"),"\ndocumentation to know about the available options."),(0,o.kt)("p",null,"The Platformatic CLI generates"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"api.d.ts"),": A TypeScript module that includes all the OpenAPI-related types.\nHere is part of the generated code")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"interface GetMoviesRequest {\n  'limit'?: number;\n  'offset'?: number;\n  // ... etc.\n}\n\ninterface GetMoviesResponseOK {\n  'id'?: number;\n  'title': string;\n}\n\n\n// ... etc.\n\nexport interface Api {\n  setBaseUrl(baseUrl: string): void;\n  getMovies(req: GetMoviesRequest): Promise<Array<GetMoviesResponseOK>>;\n  createMovie(req: CreateMovieRequest): Promise<CreateMovieResponseOK>;\n  // ... etc.\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"api.ts"),": A TypeScript module that includes a typed function for every single OpenAPI endpoint.\nHere is part of the generated code")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import type { Api } from './api-types'\n\nlet baseUrl = ''\nexport function setBaseUrl(newUrl: string) { baseUrl = newUrl };\n\nexport const createMovie: Api['createMovie'] = async (request) => {\n  const response = await fetch(`${baseUrl}/movies/`, {\n    method:'post',\n    body: JSON.stringify(request),\n    headers: {\n      'Content-Type': 'application/json'\n    }\n  })\n\n  if (!response.ok) {\n    throw new Error(await response.text())\n  }\n\n  return await response.json()\n}\n\n// etc.\n\n")),(0,o.kt)("h2",{id:"react-and-vuejs-components-that-read-create-and-update-an-entity"},"React and Vue.js components that read, create, and update an entity"),(0,o.kt)("p",null,"You can copy/paste the following React or Vue.js components that import the code\nthe Platformatic CLI generated."),(0,o.kt)(r.Z,{groupId:"import-new-component",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"react",label:"React",mdxType:"TabItem"},(0,o.kt)("p",null,"Create a new file ",(0,o.kt)("inlineCode",{parentName:"p"},"src/PlatformaticPlayground.tsx")," and copy/paste the following code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useEffect, useState } from 'react'\n\n// getMovies, createMovie, and updateMovie are all functions automatically generated by Platformatic\n// in the `api.ts` module.\nimport { getMovies, createMovie, updateMovie, setBaseUrl } from './api'\n\nsetBaseUrl('http://127.0.0.1:3042') // configure this according to your needs\n\nexport function PlatformaticPlayground() {\n  const [movies, setMovies] = useState<Awaited<ReturnType<typeof getMovies>>>([])\n  const [newMovie, setNewMovie] = useState<Awaited<ReturnType<typeof createMovie>>>()\n\n  async function onCreateMovie() {\n    const newMovie = await createMovie({ title: 'Harry Potter' })\n    setNewMovie(newMovie)\n  }\n\n  async function onUpdateMovie() {\n    if (!newMovie || !newMovie.id) return\n\n    const updatedMovie = await updateMovie({ id: newMovie.id, title: 'The Lord of the Rings' })\n    setNewMovie(updatedMovie)\n  }\n\n  useEffect(() => {\n    async function fetchMovies() {\n      const movies = await getMovies({})\n      setMovies(movies)\n    }\n\n    fetchMovies()\n  }, [])\n\n  return (\n    <>\n      <h2>Movies</h2>\n\n      {movies.length === 0 ? (\n        <div>No movies yet</div>\n      ) : (\n        <ul>\n          {movies.map((movie) => (\n            <li key={movie.id}>{movie.title}</li>\n          ))}\n        </ul>\n      )}\n\n      <button onClick={onCreateMovie}>Create movie</button>\n      <button onClick={onUpdateMovie}>Update movie</button>\n\n      {newMovie && <div>Title: {newMovie.title}</div>}\n    </>\n  )\n}\n"))),(0,o.kt)(i.Z,{value:"vue",label:"Vue.js",mdxType:"TabItem"},(0,o.kt)("p",null,"Create a new file ",(0,o.kt)("inlineCode",{parentName:"p"},"src/PlatformaticPlayground.vue")," and copy/paste the following code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vue"},'<script lang="ts" setup>\nimport { ref, onMounted } from \'vue\';\n\n// getMovies, createMovie, and updateMovie are all functions automatically generated by Platformatic\n// in the `api.ts` module.\nimport { getMovies, createMovie, updateMovie } from \'./api\'\n\nconst movies = ref<Awaited<ReturnType<typeof getMovies>>>([])\nconst newMovie = ref<Awaited<ReturnType<typeof createMovie>> | undefined>()\n\nasync function onCreateMovie() {\n  const newMovie = await createMovie({ title: \'Harry Potter\' })\n  newMovie.value = newMovie\n}\n\nasync function onUpdateMovie() {\n  if (!newMovie.value || !newMovie.value.id) return\n\n  const updatedMovie = await updateMovie({ id: newMovie.value.id, title: \'The Lord of the Rings\' })\n  newMovie.value = updatedMovie\n}\n\nonMounted(async () => {\n  const movies = await getMovies({})\n  movies.value = movies\n})\n<\/script>\n\n<template>\n  <h2>Movies</h2>\n\n  <div v-if="movies.length === 0">No movies yet</div>\n  <ul v-else>\n    <li v-for="movie in movies" :key="movie.id">\n      {{ movie.title }}\n    </li>\n  </ul>\n\n  <button @click="onCreateMovie">Create movie</button>\n  <button @click="onUpdateMovie">Update movie</button>\n\n  <div v-if="newMovie">{{ newMovie.title }}</div>\n</template>\n')))),(0,o.kt)("h2",{id:"import-the-new-component-in-your-front-end-application"},"Import the new component in your front-end application"),(0,o.kt)("p",null,"You need to import and render the new component in the front-end application."),(0,o.kt)(r.Z,{groupId:"import-new-component",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"react",label:"React",mdxType:"TabItem"},(0,o.kt)("p",null,"Change the App.tsx as follows"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'import { useState } from \'react\'\nimport reactLogo from \'./assets/react.svg\'\nimport viteLogo from \'/vite.svg\'\nimport \'./App.css\'\n\n+import { PlatformaticPlayground } from \'./PlatformaticPlayground\'\n\nfunction App() {\n  const [count, setCount] = useState(0)\n\n  return (\n    <>\n+     <PlatformaticPlayground />\n      <div>\n        <a href="https://vitejs.dev" target="_blank">\n          <img src={viteLogo} className="logo" alt="Vite logo" />\n        </a>\n        <a href="https://react.dev" target="_blank">\n          <img src={reactLogo} className="logo react" alt="React logo" />\n        </a>\n      </div>\n      <h1>Vite + React</h1>\n      <div className="card">\n        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>\n        <p>\n          Edit <code>src/App.tsx</code> and save to test HMR\n        </p>\n      </div>\n      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>\n    </>\n  )\n}\n\nexport default App\n'))),(0,o.kt)(i.Z,{value:"vue",label:"Vue.js",mdxType:"TabItem"},(0,o.kt)("p",null,"Change the App.vue as follows"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'<script setup lang="ts">\nimport HelloWorld from \'./components/HelloWorld.vue\'\n\n+import PlatformaticPlayground from \'./PlatformaticPlayground.vue\'\n<\/script>\n\n<template>\n+ <PlatformaticPlayground />\n  <div>\n    <a href="https://vitejs.dev" target="_blank">\n      <img src="/vite.svg" class="logo" alt="Vite logo" />\n    </a>\n    <a href="https://vuejs.org/" target="_blank">\n      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />\n    </a>\n  </div>\n  <HelloWorld msg="Vite + Vue" />\n</template>\n\n<style scoped>\n.logo {\n  height: 6em;\n  padding: 1.5em;\n  will-change: filter;\n  transition: filter 300ms;\n}\n.logo:hover {\n  filter: drop-shadow(0 0 2em #646cffaa);\n}\n.logo.vue:hover {\n  filter: drop-shadow(0 0 2em #42b883aa);\n}\n</style>\n')))),(0,o.kt)("h2",{id:"have-fun"},"Have fun"),(0,o.kt)("p",null,"Art the top of the front-end application the new component requests the movies to the Platformatic app and list them."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Platformatic frontend guide: listing the movies",src:n(40152).Z,width:"780",height:"388"})),(0,o.kt)("p",null,'Click on "Create movie" to create a new movie called "Harry Potter".'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Platformatic frontend guide: creating a movie",src:n(54743).Z,width:"780",height:"388"})),(0,o.kt)("p",null,'Click on "Update movie" to rename "Harry Potter" into "Lord of the Rings".'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Platformatic frontend guide: editing a movie",src:n(69197).Z,width:"780",height:"388"})),(0,o.kt)("p",null,'Reload the front-end application to see the new "Lord of the Rings" movie listed.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Platformatic frontend guide: listing the movies",src:n(68287).Z,width:"780",height:"388"}),"\n."))}v.isMDXComponent=!0},40152:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/frontend-screenshot-1-f022d8dda7cf260804f2993653ef2672.jpg"},54743:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/frontend-screenshot-2-7063f363ce4395cfcbe7bfc7b14f27aa.jpg"},69197:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/frontend-screenshot-3-bd3cbacdf584cab7377be119f5986669.jpg"},68287:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/frontend-screenshot-4-e22c1f77cabb7e952ff8ea437349da4c.jpg"}}]);