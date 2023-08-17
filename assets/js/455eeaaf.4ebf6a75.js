"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[95612],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(a),m=i,d=c["".concat(p,".").concat(m)]||c[m]||f[m]||r;return a?n.createElement(d,o(o({ref:t},u),{},{components:a})):n.createElement(d,o({ref:t},u))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},91224:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>f,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=a(87462),i=(a(67294),a(3905));const r={},o="Migrating a Fastify app to Platformatic Service",s={unversionedId:"guides/migrating-fastify-app-to-platformatic-service",id:"version-0.33.1/guides/migrating-fastify-app-to-platformatic-service",title:"Migrating a Fastify app to Platformatic Service",description:"Introduction",source:"@site/versioned_docs/version-0.33.1/guides/migrating-fastify-app-to-platformatic-service.md",sourceDirName:"guides",slug:"/guides/migrating-fastify-app-to-platformatic-service",permalink:"/docs/0.33.1/guides/migrating-fastify-app-to-platformatic-service",draft:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-0.33.1/guides/migrating-fastify-app-to-platformatic-service.md",tags:[],version:"0.33.1",frontMatter:{},sidebar:"docs",previous:{title:"Generate Front-end Code to Consume Platformatic REST API",permalink:"/docs/0.33.1/guides/generate-frontend-code-to-consume-platformatic-rest-api"},next:{title:"Migrating an Express app to Platformatic Service",permalink:"/docs/0.33.1/guides/migrating-express-app-to-platformatic-service"}},p={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Example Fastify application",id:"example-fastify-application",level:2},{value:"Creating a new Platformatic Service app",id:"creating-a-new-platformatic-service-app",level:2},{value:"App configuration",id:"app-configuration",level:3},{value:"Using ES modules",id:"using-es-modules",level:3},{value:"Refactoring Fastify server factories",id:"refactoring-fastify-server-factories",level:3},{value:"Migrating plugins",id:"migrating-plugins",level:2},{value:"Disabling plugin encapsulation",id:"disabling-plugin-encapsulation",level:3},{value:"Migrating routes",id:"migrating-routes",level:2},{value:"Explicit route paths",id:"explicit-route-paths",level:3},{value:"Route prefixing with file-system based routing",id:"route-prefixing-with-file-system-based-routing",level:3},{value:"Adapting existing usage of @fastify/autoload",id:"adapting-existing-usage-of-fastifyautoload",level:3},{value:"Migrating tests",id:"migrating-tests",level:2},{value:"Replacing your Fastify server factory function",id:"replacing-your-fastify-server-factory-function",level:3},{value:"Disabling server logging in your tests",id:"disabling-server-logging-in-your-tests",level:3},{value:"Building apps with Platformatic Service",id:"building-apps-with-platformatic-service",level:2},{value:"Application features",id:"application-features",level:3},{value:"Development features",id:"development-features",level:3},{value:"Next steps",id:"next-steps",level:2},{value:"Watch: Understand the parts of a Platformatic app",id:"watch-understand-the-parts-of-a-platformatic-app",level:3}],u={toc:l},c="wrapper";function f(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"migrating-a-fastify-app-to-platformatic-service"},"Migrating a Fastify app to Platformatic Service"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Building production ready Node.js application with Fastify can require a certain amount of boilerplate code. This is a side effect of some of Fastify's technical principles:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"If it can be a plugin, it should be a plugin")," \u2014 ",(0,i.kt)("a",{parentName:"li",href:"https://www.fastify.io/docs/latest/Reference/Plugins/"},"Plugins")," help with the separation of concerns, they improve testability, and also provide a way to logically organise and structure your applications."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Developer choice = developer freedom")," \u2014 Fastify only applies a few strong opinions, in key areas such as logging and validation. The framework features have been designed to give you the freedom to build your applications however you want."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"You know your needs best")," \u2014 Fastify doesn't make assumptions about what plugins you'll need in your application. As the Fastify ",(0,i.kt)("a",{parentName:"li",href:"https://www.fastify.io/ecosystem/"},"plugin ecosystem")," and the community has grown, a clear group of popular plugin choices has emerged.")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/reference/service/introduction"},"Platformatic Service")," is the natural evolution of the build-it-from-scratch Fastify development experience. It provides a solid foundation for building Node.js applications on top of Fastify, with best practices baked in."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"See the ",(0,i.kt)("a",{parentName:"p",href:"#building-apps-with-platformatic-service"},"Building apps with Platformatic Service")," section of this guide to learn more about the built-in features.")),(0,i.kt)("p",null,"The good news is that the path to migrate a Fastify application to use Platformatic Service is fairly straightforward. This guide covers some of the things you'll need to know when migrating an application, as well as tips on different migration approaches."),(0,i.kt)("p",null,"This guide assumes that you have some experience building applications with the ",(0,i.kt)("a",{parentName:"p",href:"https://www.fastify.io/"},"Fastify")," framework. If you'd like to learn more about about building web applications with Fastify, we recommend taking a look at:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"https://www.fastify.io/docs/latest/Guides/Getting-Started/"},"Fastify Getting Started guide"),"."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=e1jkA-ee_aY"},"Building a modular monolith with Fastify")," talk by Fastify co-creator and Platformatic co-founder, ",(0,i.kt)("a",{parentName:"li",href:"https://twitter.com/matteocollina"},"Matteo Collina"),"."),(0,i.kt)("li",{parentName:"ul"},"The new ",(0,i.kt)("a",{parentName:"li",href:"https://packt.link/DvIDB"},"Accelerating Server-Side Development with Fastify")," book.")),(0,i.kt)("h2",{id:"example-fastify-application"},"Example Fastify application"),(0,i.kt)("p",null,"For the purpose of this guide, we have a basic example Fastify application. Although this app has a specific structure, the migration steps covered in this guide can generally be applied to any Fastify application."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The code for the example Fastify and migrated Platformatic Service applications is available ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/platformatic/examples/blob/main/applications/migrate-fastify-app-to-platformatic-service/"},"on GitHub"),".")),(0,i.kt)("p",null,"Here's the structure of the example Fastify application:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 app.js\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 plugins\n\u2502\xa0\xa0 \u2514\u2500\u2500 data-source.js\n\u251c\u2500\u2500 routes\n\u2502\xa0\xa0 \u251c\u2500\u2500 movies.js\n\u2502\xa0\xa0 \u2514\u2500\u2500 quotes.js\n\u251c\u2500\u2500 server.js\n\u2514\u2500\u2500 test\n    \u2514\u2500\u2500 routes.test.js\n")),(0,i.kt)("p",null,"It has the following dependencies:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'// package.json\n\n"dependencies": {\n  "fastify": "^4.17.0",\n  "fastify-plugin": "^4.5.0"\n}\n')),(0,i.kt)("p",null,"The application has a plugin that decorates the Fastify server instance, as well as two Fastify plugins which define API routes. Here's the code for them:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// plugins/data-source.js\n\nimport fastifyPlugin from 'fastify-plugin'\n\n/** @param {import('fastify').FastifyInstance} app */\nasync function dataSource (app) {\n  app.decorate('movies', [\n    'Jaws',\n    'Star Wars',\n    'The Wizard of Oz'\n  ])\n\n  app.decorate('quotes', [\n    'You\\'re gonna need a bigger boat.',\n    'May the Force be with you.',\n    'Toto, I\\'ve got a feeling we\\'re not in Kansas anymore.'\n  ])\n}\n\nexport default fastifyPlugin(dataSource)\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/fastify-plugin"},(0,i.kt)("inlineCode",{parentName:"a"},"fastify-plugin"))," is used to to prevent Fastify from creating a new encapsulation context for the plugin. This makes the decorators that are registered in the ",(0,i.kt)("inlineCode",{parentName:"p"},"dataSource")," plugin available in the route plugins. You can learn about this fundamental Fastify concept in the Fastify ",(0,i.kt)("a",{parentName:"p",href:"https://www.fastify.io/docs/latest/Reference/Encapsulation/"},"Encapsulation")," documentation.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// routes/movies.js\n\n/** @param {import('fastify').FastifyInstance} app */\nexport default async function movieRoutes (app) {\n  app.get('/', async (request, reply) => {\n    return app.movies\n  })\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// routes/quotes.js\n\n/** @param {import('fastify').FastifyInstance} app */\nexport default async function quotesRoutes (app) {\n  app.get('/', async (request, reply) => {\n    return app.quotes\n  })\n}\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The route plugins aren't registering anything that needs to be available in other plugins. They have their own encapsulation context and don't need to be wrapped with ",(0,i.kt)("inlineCode",{parentName:"p"},"fastify-plugin"),".")),(0,i.kt)("p",null,"There's also a ",(0,i.kt)("inlineCode",{parentName:"p"},"buildApp()")," factory function in ",(0,i.kt)("inlineCode",{parentName:"p"},"app.js"),", which takes care of creating a new Fastify server instance and registering the plugins and routes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// app.js\n\nimport fastify from 'fastify'\n\nexport async function buildApp (options = {}) {\n  const app = fastify(options)\n\n  app.register(import('./plugins/data-source.js'))\n\n  app.register(import('./routes/movies.js'), { prefix: '/movies' })\n  app.register(import('./routes/quotes.js'), { prefix: '/quotes' })\n\n  return app\n}\n")),(0,i.kt)("p",null,"And ",(0,i.kt)("inlineCode",{parentName:"p"},"server.js"),", which calls the ",(0,i.kt)("inlineCode",{parentName:"p"},"buildApp")," function to create a new Fastify server, and then starts it listening:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// server.js\n\nimport { buildApp } from './app.js'\n\nconst port = process.env.PORT || 3042\nconst host = process.env.HOST || '127.0.0.1'\n\nconst options = {\n  logger: {\n    level: 'info'\n  }\n}\n\nconst app = await buildApp(options)\n\nawait app.listen({ port, host })\n")),(0,i.kt)("p",null,"As well as a couple of tests for the API routes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// tests/routes.test.js\n\nimport { test } from 'node:test'\nimport assert from 'node:assert/strict'\n\nimport { buildApp } from '../app.js'\n\ntest('Basic API', async (t) => {\n  const app = await buildApp()\n\n  t.after(async () => {\n    await app.close()\n  })\n\n  await t.test('GET request to /movies route', async () => {\n    const response = await app.inject({\n      method: 'GET',\n      url: '/movies'\n    })\n\n    assert.equal(response.statusCode, 200)\n    assert.deepEqual(response.json(), [\n      'Jaws',\n      'Star Wars',\n      'The Wizard of Oz'\n    ])\n  })\n\n  await t.test('GET request to /quotes route', async () => {\n    const response = await app.inject({\n      method: 'GET',\n      url: '/quotes'\n    })\n\n    assert.equal(response.statusCode, 200)\n    assert.deepEqual(response.json(), [\n      'You\\'re gonna need a bigger boat.',\n      'May the Force be with you.',\n      'Toto, I\\'ve got a feeling we\\'re not in Kansas anymore.'\n    ])\n  })\n})\n")),(0,i.kt)("p",null,"These tests are using the built in Node.js test runner, ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/api/test.html"},"node:test"),". They can be run with the command: ",(0,i.kt)("inlineCode",{parentName:"p"},"node --test --test-reporter=spec test/*.test.js"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"@param")," lines in this application code are ",(0,i.kt)("a",{parentName:"p",href:"https://jsdoc.app/"},"JSDoc")," blocks that import the ",(0,i.kt)("inlineCode",{parentName:"p"},"FastifyInstance")," type. This allows many code editors to provide auto-suggest, type hinting and type checking for your code.")),(0,i.kt)("h2",{id:"creating-a-new-platformatic-service-app"},"Creating a new Platformatic Service app"),(0,i.kt)("p",null,"To migrate your Fastify app to Platformatic Service, create a new Platformatic Service app with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm create platformatic@latest\n")),(0,i.kt)("p",null,"Be sure to select ",(0,i.kt)("inlineCode",{parentName:"p"},"Service")," as the project type. Once the project has been created, you can delete the example ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"routes")," directories."),(0,i.kt)("h3",{id:"app-configuration"},"App configuration"),(0,i.kt)("p",null,"The configuration for the Platformatic Service app is stored in ",(0,i.kt)("inlineCode",{parentName:"p"},"platformatic.service.json"),"."),(0,i.kt)("p",null,"The generated configuration is set up to load plugins from the ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"routes")," directories:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'// platformatic.service.json\n\n"plugins": {\n  "paths": [\n    "./plugins",\n    "./routes"\n  ]\n}\n')),(0,i.kt)("p",null,"The value for any configuration setting in ",(0,i.kt)("inlineCode",{parentName:"p"},"platformatic.service.json")," can be replaced with an environment variable by adding a placeholder, for example ",(0,i.kt)("inlineCode",{parentName:"p"},"{PLT_SERVER_LOGGER_LEVEL}"),". In development, environment variables are automatically loaded by your Platformatic Service app from a ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file in the root directory of your app. In production, you'll typically set these environment variables using a feature provided by your hosting provider."),(0,i.kt)("p",null,"See the Platformatic Service documentation for ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/service/configuration#environment-variable-placeholders"},"Environment variable placeholders")," to learn more about how this works."),(0,i.kt)("h3",{id:"using-es-modules"},"Using ES modules"),(0,i.kt)("p",null,"If you're using ES modules in the Fastify application code that you'll be migrating, ensure that there's a ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," field in ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," set to ",(0,i.kt)("inlineCode",{parentName:"p"},"module"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm pkg set type=module\n")),(0,i.kt)("h3",{id:"refactoring-fastify-server-factories"},"Refactoring Fastify server factories"),(0,i.kt)("p",null,"If your Fastify application has a script with a factory function to create and build up a Fastify server instance, you can refactor it into a Fastify plugin and use it in your Platformatic Service app."),(0,i.kt)("p",null,"Here are a few things to consider while refactoring it:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Move the options you're passing to Fastify when creating a new server instance to the ",(0,i.kt)("inlineCode",{parentName:"li"},"server")," block in ",(0,i.kt)("inlineCode",{parentName:"li"},"platformatic.service.json"),". These options will be passed through directly by Platformatic Service when it creates a Fastify server instance."),(0,i.kt)("li",{parentName:"ul"},"You can create a root plugin to be loaded by your Platformatic Service app, for example: ",(0,i.kt)("inlineCode",{parentName:"li"},"export default async function rootPlugin (app, options) { ... }")),(0,i.kt)("li",{parentName:"ul"},"When you copy the code from your factory function into your root plugin, remove the code which is creating the Fastify server instance."),(0,i.kt)("li",{parentName:"ul"},"You can configure your Platformatic Service to load the root plugin, for example:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"plugins": {\n  "paths": ["./root-plugin.js"]\n}\n'))),(0,i.kt)("li",{parentName:"ul"},"If you need to pass options to your root plugin, you can do it like this:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"plugins": {\n  "paths": [\n    {\n      "path": "./root-plugin.js",\n      "options": {\n        "someOption": true\n      }\n    }\n  ]\n}\n')))),(0,i.kt)("h2",{id:"migrating-plugins"},"Migrating plugins"),(0,i.kt)("p",null,"Copy over the ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins")," directory from your Fastify app. You shouldn't need to make any modifications for them to work with Platformatic Service."),(0,i.kt)("h3",{id:"disabling-plugin-encapsulation"},"Disabling plugin encapsulation"),(0,i.kt)("p",null,"Platformatic Service provides a configuration setting which enables you to disable encapsulation for a plugin, or all the plugins within a directory. This will make any decorators or hooks that you set in those plugins available to all other plugins. This removes the need for you to wrap your plugins with ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/fastify-plugin"},(0,i.kt)("inlineCode",{parentName:"a"},"fastify-plugin")),"."),(0,i.kt)("p",null,"To disable encapsulation for all plugins within the ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins")," directory, you would set your ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins")," configuration like this in ",(0,i.kt)("inlineCode",{parentName:"p"},"platformatic.service.json"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'// platformatic.service.json\n\n"plugins": {\n  "paths": [\n    {\n        "path": "./plugins",\n        "encapsulate": false\n    },\n    "./routes"\n  ]\n}\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"You can learn more about plugin encapsulation in the ",(0,i.kt)("a",{parentName:"p",href:"https://www.fastify.io/docs/latest/Guides/Plugins-Guide/"},"Fastify Plugins Guide"),".")),(0,i.kt)("h2",{id:"migrating-routes"},"Migrating routes"),(0,i.kt)("p",null,"Copy over the ",(0,i.kt)("inlineCode",{parentName:"p"},"routes")," directory from your Fastify app."),(0,i.kt)("h3",{id:"explicit-route-paths"},"Explicit route paths"),(0,i.kt)("p",null,"If you're registering routes in your Fastify application with full paths, for example ",(0,i.kt)("inlineCode",{parentName:"p"},"/movies"),", you won't need to make any changes to your route plugins."),(0,i.kt)("h3",{id:"route-prefixing-with-file-system-based-routing"},"Route prefixing with file-system based routing"),(0,i.kt)("p",null,"If you're using the ",(0,i.kt)("inlineCode",{parentName:"p"},"prefix")," option when registering route plugins in your Fastify application, for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"app.register(import('./routes/movies.js'), { prefix: '/movies' })\n")),(0,i.kt)("p",null,"You can achieve the same result with Platformatic Service by using file-system based routing. With the following directory and file structure:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"routes/\n\u251c\u2500\u2500 movies\n\u2502\xa0\xa0 \u2514\u2500\u2500 index.js\n\u2514\u2500\u2500 quotes\n    \u2514\u2500\u2500 index.js\n")),(0,i.kt)("p",null,"Assuming that both of the route files register a ",(0,i.kt)("inlineCode",{parentName:"p"},"/")," route, these are the route paths that will be registered in your Platformatic Service app:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/movies\n/quotes\n")),(0,i.kt)("p",null,"With the example Fastify application, this would mean copying the route files over to these places in the Platformatic Service app:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"routes/movies.js -> routes/movies/index.js\nroutes/quotes.js -> routes/quotes/index.js\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"How does this work?")," Plugins are loaded with the ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@fastify/autoload"},(0,i.kt)("inlineCode",{parentName:"a"},"@fastify/autoload"))," Fastify plugin. The ",(0,i.kt)("inlineCode",{parentName:"p"},"dirNameRoutePrefix")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify-autoload#global-configuration"},"plugin option")," for ",(0,i.kt)("inlineCode",{parentName:"p"},"@fastify/autoload"),' is enabled by default. This means that "routes will be automatically prefixed with the subdirectory name in an autoloaded directory".')),(0,i.kt)("p",null,"If you'd prefer not to use file-system based routing with Platformatic Service, you can add prefixes to the paths for the routes themselves (see ",(0,i.kt)("a",{parentName:"p",href:"#explicit-route-paths"},"Explicit route paths"),")."),(0,i.kt)("h3",{id:"adapting-existing-usage-of-fastifyautoload"},"Adapting existing usage of @fastify/autoload"),(0,i.kt)("p",null,"If you're using ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@fastify/autoload"},(0,i.kt)("inlineCode",{parentName:"a"},"@fastify/autoload"))," in your Fastify application, there are a couple of approaches you can take when migrating the app to Platformatic Service:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Configure ",(0,i.kt)("inlineCode",{parentName:"li"},"plugins")," in your Platformatic Service app's ",(0,i.kt)("inlineCode",{parentName:"li"},"platformatic.service.json"),". It will then take care of loading your routes and plugins for you with ",(0,i.kt)("inlineCode",{parentName:"li"},"@fastify/autoload")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/reference/service/configuration#plugins"},"configuration documentation"),")."),(0,i.kt)("li",{parentName:"ul"},"You can continue to use ",(0,i.kt)("inlineCode",{parentName:"li"},"@fastify/autoload")," directly with a little refactoring. See the tips in the ",(0,i.kt)("a",{parentName:"li",href:"#refactoring-fastify-server-factories"},"Refactoring Fastify server factories")," section.")),(0,i.kt)("h2",{id:"migrating-tests"},"Migrating tests"),(0,i.kt)("p",null,"You'll generally use the Platformatic CLI to start your Platformatic Service app (",(0,i.kt)("inlineCode",{parentName:"p"},"npx platformatic start"),"). However for testing, you can use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/service/programmatic/"},"programmatic API")," provided by Platformatic Service. This allows you to load your app in your test scripts and then run tests against it."),(0,i.kt)("p",null,"If you copy over the tests from your existing Fastify app, they will typically only require a small amount of refactoring to work with Platformatic Service."),(0,i.kt)("h3",{id:"replacing-your-fastify-server-factory-function"},"Replacing your Fastify server factory function"),(0,i.kt)("p",null,"The example Fastify app has a ",(0,i.kt)("inlineCode",{parentName:"p"},"buildApp()")," factory function which creates a Fastify server instance. The ",(0,i.kt)("inlineCode",{parentName:"p"},"import")," line for that function can be removed from ",(0,i.kt)("inlineCode",{parentName:"p"},"tests/routes.test.js"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// tests/routes.test.js\n\nimport { buildApp } from '../app.js'\n")),(0,i.kt)("p",null,"And replaced with an ",(0,i.kt)("inlineCode",{parentName:"p"},"import")," of the ",(0,i.kt)("inlineCode",{parentName:"p"},"buildServer()")," function from ",(0,i.kt)("inlineCode",{parentName:"p"},"@platformatic/service"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// tests/routes.test.js\n\nimport { buildServer } from '@platformatic/service'\n")),(0,i.kt)("p",null,"You can then load your Platformatic Service app like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"\nconst app = await buildServer('./platformatic.service.json')\n")),(0,i.kt)("h3",{id:"disabling-server-logging-in-your-tests"},"Disabling server logging in your tests"),(0,i.kt)("p",null,"If you have logged enabled for your Platformatic Service app, you'll probably want to disable the logging in your tests to remove noise from the output that you receive when you run your tests."),(0,i.kt)("p",null,"Instead of passing the path to your app's configuration to ",(0,i.kt)("inlineCode",{parentName:"p"},"buildServer()"),", you can import the app configuration and disable logging:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// tests/routes.test.js\n\nimport serviceConfig from '../platformatic.service.json' assert { type: 'json' }\n\nserviceConfig.server.logger = false\n")),(0,i.kt)("p",null,"Then pass that ",(0,i.kt)("inlineCode",{parentName:"p"},"serviceConfig")," configuration object to the ",(0,i.kt)("inlineCode",{parentName:"p"},"buildServer()")," function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// tests/routes.test.js\n\nconst app = await buildServer(serviceConfig)\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Import assertions \u2014 the ",(0,i.kt)("inlineCode",{parentName:"p"},"assert { type: 'json' }")," syntax \u2014 are not a stable feature of the JavaScript language, so you'll receive warning messages from Node.js when running your tests. You can disable these warnings by passing the ",(0,i.kt)("inlineCode",{parentName:"p"},"--no-warnings")," flag to ",(0,i.kt)("inlineCode",{parentName:"p"},"node"),".")),(0,i.kt)("h2",{id:"building-apps-with-platformatic-service"},"Building apps with Platformatic Service"),(0,i.kt)("p",null,"Because Platformatic Service is built on top of the Fastify framework, you're able to use the full functionality of the Fastify framework in your Platformatic Service app. This includes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fast, ",(0,i.kt)("a",{parentName:"li",href:"https://www.fastify.io/docs/latest/Reference/Logging/"},"structured logging"),", provided by ",(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/pino"},"Pino")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.fastify.io/docs/latest/Reference/Validation-and-Serialization/#validation-and-serialization"},"Request validation")," with JSON Schema and Ajv (other validation libraries are supported too)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.fastify.io/docs/latest/Reference/Hooks/"},"Hooks"),", which allow fine grained control over when code is run during the request/response lifecycle."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.fastify.io/docs/latest/Reference/Decorators/"},"Decorators"),", which allow you to customize core Fastify objects and write more modular code.")),(0,i.kt)("p",null,"Platformatic Service also provides many other features that are built on top of Fastify."),(0,i.kt)("h3",{id:"application-features"},"Application features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Metrics with ",(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/fastify-metrics"},(0,i.kt)("inlineCode",{parentName:"a"},"fastify-metrics"))),(0,i.kt)("li",{parentName:"ul"},"Healthcheck endpoint with ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/fastify/under-pressure"},(0,i.kt)("inlineCode",{parentName:"a"},"@fastify/under-pressure"))),(0,i.kt)("li",{parentName:"ul"},"OpenAPI specification and Swagger UI with ",(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@fastify/swagger"},(0,i.kt)("inlineCode",{parentName:"a"},"@fastify/swagger"))," and ",(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@fastify/swagger-ui"},(0,i.kt)("inlineCode",{parentName:"a"},"@fastify/swagger-ui"))),(0,i.kt)("li",{parentName:"ul"},"GraphQL API support with ",(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/mercurius"},(0,i.kt)("inlineCode",{parentName:"a"},"mercurius"))),(0,i.kt)("li",{parentName:"ul"},"CORS support with ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/fastify/fastify-cors"},(0,i.kt)("inlineCode",{parentName:"a"},"@fastify/cors"))),(0,i.kt)("li",{parentName:"ul"},"Configuration with environment variable validation")),(0,i.kt)("p",null,"All Platformatic Service features are fully configurable via ",(0,i.kt)("inlineCode",{parentName:"p"},"platformatic.service.json"),"."),(0,i.kt)("h3",{id:"development-features"},"Development features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Hot reloading \u2014 Your server will automatically reload in development as you develop features."),(0,i.kt)("li",{parentName:"ul"},"Write your plugins in JavaScript or TypeScript \u2014 TypeScript support is provided out-of-the-box and supports hot reloading."),(0,i.kt)("li",{parentName:"ul"},"Pretty printed logs \u2014 Making it easier to understand and debug your application during development.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"See the ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/service/configuration/"},"Platformatic Service Configuration")," documentation for all of the features which can be configured.")),(0,i.kt)("h2",{id:"next-steps"},"Next steps"),(0,i.kt)("p",null,"The documentation for ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/service/introduction"},"Platformatic Service")," is a helpful reference when building a Platformatic Service app."),(0,i.kt)("h3",{id:"watch-understand-the-parts-of-a-platformatic-app"},"Watch: Understand the parts of a Platformatic app"),(0,i.kt)("iframe",{class:"aspect-ratio-16-9 margin-bottom--md",src:"//www.youtube.com/embed/b6G3xZlzJNk",frameborder:"0",allowfullscreen:""}),(0,i.kt)("p",null,"You want to be confident that you understand how your applications work. In this video you'll learn about the parts that make up a Platformatic application, what each part does, and how they fit together."),(0,i.kt)("p",null,"Our series of ",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/playlist?list=PL_x4nRdxj60LEXoK5mO-ixOETQTfhqmA7"},"Platformatic How-to videos")," can help get you up and running building apps with Platformatic open-source tools."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Got questions or need help migrating your Fastify app to use Platformatic Service? Drop by our ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/platformatic"},"Discord server")," and we'll be happy to help you.")))}f.isMDXComponent=!0}}]);