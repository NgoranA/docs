"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[77429],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(a),c=i,h=m["".concat(l,".").concat(c)]||m[c]||u[c]||r;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},83626:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));const r={},o="Integrate Prisma with Platformatic DB",s={unversionedId:"guides/prisma",id:"version-0.33.1/guides/prisma",title:"Integrate Prisma with Platformatic DB",description:"Prisma is an open-source ORM for Node.js and TypeScript. It is used as an alternative to writing SQL, or using another database access tool such as SQL query builders (like knex.js) or ORMs (like TypeORM and Sequelize). Prisma currently supports PostgreSQL, MySQL, SQL Server, SQLite, MongoDB, and CockroachDB.",source:"@site/versioned_docs/version-0.33.1/guides/prisma.md",sourceDirName:"guides",slug:"/guides/prisma",permalink:"/docs/0.33.1/guides/prisma",draft:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-0.33.1/guides/prisma.md",tags:[],version:"0.33.1",frontMatter:{},sidebar:"docs",previous:{title:"Debug Platformatic DB",permalink:"/docs/0.33.1/guides/debug-platformatic-db"},next:{title:"Generate Front-end Code to Consume Platformatic REST API",permalink:"/docs/0.33.1/guides/generate-frontend-code-to-consume-platformatic-rest-api"}},l={},p=[{value:"How Prisma can improve your workflow with Platformatic DB",id:"how-prisma-can-improve-your-workflow-with-platformatic-db",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup Prisma",id:"setup-prisma",level:2},{value:"Adding Prisma to an existing project",id:"adding-prisma-to-an-existing-project",level:2},{value:"Adding Prisma to a new project",id:"adding-prisma-to-a-new-project",level:2},{value:"Evolving your database schema",id:"evolving-your-database-schema",level:3},{value:"Using Prisma Client in your plugins",id:"using-prisma-client-in-your-plugins",level:2},{value:"Workarounds",id:"workarounds",level:2},{value:"Using Prisma with SQLite",id:"using-prisma-with-sqlite",level:3},{value:"Foreign keys, field, and table names naming conventions",id:"foreign-keys-field-and-table-names-naming-conventions",level:3},{value:"Learn more",id:"learn-more",level:2}],d={toc:p},m="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"integrate-prisma-with-platformatic-db"},"Integrate Prisma with Platformatic DB"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.prisma.io/"},"Prisma")," is an open-source ORM for Node.js and TypeScript. It is used as an alternative to writing SQL, or using another database access tool such as SQL query builders (like ",(0,i.kt)("a",{parentName:"p",href:"https://knexjs.org/"},"knex.js"),") or ORMs (like ",(0,i.kt)("a",{parentName:"p",href:"https://typeorm.io/"},"TypeORM")," and ",(0,i.kt)("a",{parentName:"p",href:"https://sequelize.org/"},"Sequelize"),"). Prisma currently supports PostgreSQL, MySQL, SQL Server, SQLite, MongoDB, and CockroachDB."),(0,i.kt)("p",null,"Prisma can be used with JavaScript or TypeScript, and provides a level to type-safety that goes beyond the guarantees made by other ORMs in the TypeScript ecosystem. You can find an in-depth comparison of Prisma against other ORMs ",(0,i.kt)("a",{parentName:"p",href:"https://www.prisma.io/docs/concepts/more/comparisons"},"here"),"."),(0,i.kt)("p",null,"If you want to get a quick overview of how Prisma works, you can follow the ",(0,i.kt)("a",{parentName:"p",href:"https://www.prisma.io/docs/getting-started/quickstart"},"Quickstart")," or read the ",(0,i.kt)("a",{parentName:"p",href:"https://www.prisma.io/docs/understand-prisma/introduction"},"Introduction")," in the Prisma documentation. "),(0,i.kt)("h2",{id:"how-prisma-can-improve-your-workflow-with-platformatic-db"},"How Prisma can improve your workflow with Platformatic DB"),(0,i.kt)("p",null,"While Platformatic speeds up development of your REST and GraphQL APIs, Prisma can complement the workflow in several ways:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Provides an intuitive data modeling language"),(0,i.kt)("li",{parentName:"ol"},"Provides auto-generated and customizable SQL migrations"),(0,i.kt)("li",{parentName:"ol"},"Provides type-safety and auto-completion for your database queries")),(0,i.kt)("p",null,"You can learn more about why Prisma and Platformatic are a great match ",(0,i.kt)("a",{parentName:"p",href:"https://dev.to/prisma/why-prisma-and-platformatic-are-a-great-match-2dkl"},"this article"),"."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"To follow along with this guide, you will need to have the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org/"},"Node.js")," >= v16.17.0 or >= v18.8.0"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.npmjs.com/cli/"},"npm")," v7 or later"),(0,i.kt)("li",{parentName:"ul"},"A code editor, for example ",(0,i.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"Visual Studio Code")),(0,i.kt)("li",{parentName:"ul"},"A Platformatic DB project")),(0,i.kt)("h2",{id:"setup-prisma"},"Setup Prisma"),(0,i.kt)("p",null,"Install the ",(0,i.kt)("a",{parentName:"p",href:"https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-cli"},"Prisma CLI")," and the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ruheni/db-diff"},(0,i.kt)("inlineCode",{parentName:"a"},"db-diff"))," development dependencies in your project:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev prisma @ruheni/db-diff\n")),(0,i.kt)("p",null,"Next, initialize Prisma in your project"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx prisma init\n")),(0,i.kt)("p",null,"This command does the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Creates a new directory called ",(0,i.kt)("inlineCode",{parentName:"li"},"prisma")," which contains a file called ",(0,i.kt)("inlineCode",{parentName:"li"},"schema.prisma"),". This file defines your database connection and the Prisma Client generator."),(0,i.kt)("li",{parentName:"ul"},"Creates a ",(0,i.kt)("inlineCode",{parentName:"li"},".env")," file at the root of your project if it doesn't exist. This defines your environment variables (used for your database connection).")),(0,i.kt)("p",null,"You can specify your preferred database provider using the ",(0,i.kt)("inlineCode",{parentName:"p"},"--datasource-provider")," flag, followed by the name of the provider: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx prisma init --datasource-provider postgresql # or sqlite, mysql, sqlserver, cockroachdb\n")),(0,i.kt)("p",null,"Prisma uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"DATABASE_URL")," environment variable to connect to your database to sync your database and Prisma schema. It also uses the variable to connect to your database to run your Prisma Client queries. "),(0,i.kt)("p",null,"If you're using PostgreSQL, MySQL, SQL Server, or CockroachDB, ensure that the ",(0,i.kt)("inlineCode",{parentName:"p"},"DATABASE_URL")," used by Prisma is the same as the one used by Platformatic DB project. If you're using SQLite, refer to the ",(0,i.kt)("a",{parentName:"p",href:"#using-prisma-with-sqlite"},"Using Prisma with SQLite")," section."),(0,i.kt)("p",null,"If you have an existing project, refer to the ",(0,i.kt)("a",{parentName:"p",href:"#adding-prisma-to-an-existing-project"},"Adding Prisma to an existing Platformatic DB project")," section. If you're adding Prisma to a new project, refer to the ",(0,i.kt)("a",{parentName:"p",href:"#adding-prisma-to-a-new-project"},"Adding Prisma to a new project"),"."),(0,i.kt)("h2",{id:"adding-prisma-to-an-existing-project"},"Adding Prisma to an existing project"),(0,i.kt)("p",null,"If you have an existing Platformatic DB project, you can introspect your database and generate the data model in your Prisma schema with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx prisma db pull\n")),(0,i.kt)("p",null,"The command will introspect your database and generate the ",(0,i.kt)("a",{parentName:"p",href:"https://www.prisma.io/docs/concepts/components/prisma-schema/data-model"},"data model")),(0,i.kt)("p",null,"Next, add the ",(0,i.kt)("inlineCode",{parentName:"p"},"@@ignore")," attribute to the ",(0,i.kt)("inlineCode",{parentName:"p"},"versions")," model to exclude it from the Prisma Client API:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"model versions {\n  version BigInt    @id\n  name    String?\n  md5     String?\n  run_at  DateTime? @db.Timestamptz(6)\n\n+  @@ignore\n}\n")),(0,i.kt)("p",null,"To learn how you can evolve your database schema, you can jump to the ",(0,i.kt)("a",{parentName:"p",href:"#evolving-your-database-schema"},"Evolving your database schema")," section."),(0,i.kt)("h2",{id:"adding-prisma-to-a-new-project"},"Adding Prisma to a new project"),(0,i.kt)("p",null,"Define a ",(0,i.kt)("inlineCode",{parentName:"p"},"Post")," model with the following fields at the end of your ",(0,i.kt)("inlineCode",{parentName:"p"},"schema.prisma")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-groovy",metastring:'title="prisma/schema.prisma"',title:'"prisma/schema.prisma"'},'model Post {\n  id        Int      @id @default(autoincrement())\n  title     String\n  content   String?\n  published Boolean  @default(false)\n  viewCount Int      @default(0)\n  createdAt DateTime @default(now())\n\n  @@map("posts")\n}\n')),(0,i.kt)("p",null,"The snippet above defines a ",(0,i.kt)("inlineCode",{parentName:"p"},"Post")," model with the following fields and properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id"),": An auto-incrementing integer that will be the primary key for the model."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"title"),": A non-nullable ",(0,i.kt)("inlineCode",{parentName:"li"},"String")," field."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"content"),": A nullable ",(0,i.kt)("inlineCode",{parentName:"li"},"String")," field."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"published"),": A ",(0,i.kt)("inlineCode",{parentName:"li"},"Boolean")," field with a default value of false."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"viewCount"),": An ",(0,i.kt)("inlineCode",{parentName:"li"},"Int")," field with a default value of 0."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"createdAt"),": A ",(0,i.kt)("inlineCode",{parentName:"li"},"DateTime")," field with a timestamp of when the value is created as its default value.")),(0,i.kt)("p",null,"By default, Prisma maps the model name and its format to the table name \u2014 which is also used im Prisma Client. Platformatic DB uses a snake casing and pluralized table names to map your table names to the generated API. The ",(0,i.kt)("inlineCode",{parentName:"p"},"@@map()")," attribute in the Prisma schema allows you to define the name and format of your table names to be used in your database. You can also use the ",(0,i.kt)("inlineCode",{parentName:"p"},"@map()")," attribute to define the format for field names to be used in your database. Refer to the ",(0,i.kt)("a",{parentName:"p",href:"#foreign-keys-and-table-names-naming-conventions"},"Foreign keys and table names naming conventions")," section to learn how you can automate formatting foreign keys and table names."),(0,i.kt)("p",null,"Next, run the following command to generate an up and down migration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx db-diff\n")),(0,i.kt)("p",null,"The previous command will generate both an ",(0,i.kt)("inlineCode",{parentName:"p"},"up")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"down")," migration based on your schema. The generated migration is stored in your ",(0,i.kt)("inlineCode",{parentName:"p"},"./migrations")," directory. If you are currently using a different path to store the migration, you can provide the ",(0,i.kt)("inlineCode",{parentName:"p"},"--migrations-dir")," flag followed by the path."),(0,i.kt)("p",null,"You can then apply the generated migration using the Platformatic DB CLI:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx platformatic db migrations apply\n")),(0,i.kt)("p",null,"Platformatic uses ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/postgrator"},"Postgrator")," to run migrations. Postgrator creates a table in the database called ",(0,i.kt)("inlineCode",{parentName:"p"},"versions")," to track the applied migrations. Since the ",(0,i.kt)("inlineCode",{parentName:"p"},"versions")," table is not yet captured in the Prisma schema, run the following command to introspect the database and populate it with the missing model:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npx prisma db pull\n")),(0,i.kt)("p",null,"Introspecting the database to populate the model prevents including the ",(0,i.kt)("inlineCode",{parentName:"p"},"versions")," table in the generated down migrations."),(0,i.kt)("p",null,"Your Prisma schema should now contain a ",(0,i.kt)("inlineCode",{parentName:"p"},"versions")," model that is similar to this one (it will vary depending on the database system you're using):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},'model Post {\n  id        Int      @id @default(autoincrement())\n  title     String\n  content   String?\n  published Boolean  @default(false)\n  viewCount Int      @default(0)\n  createdAt DateTime @default(now())\n\n  @@map("posts")\n}\n\n+model versions {\n+  version BigInt    @id\n+  name    String?\n+  md5     String?\n+  run_at  DateTime? @db.Timestamptz(6)\n+}\n')),(0,i.kt)("p",null,"Add the ",(0,i.kt)("inlineCode",{parentName:"p"},"@@ignore")," attribute function to the model to exclude it from the Prisma Client API:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"model versions {\n  version BigInt    @id\n  name    String?\n  md5     String?\n  run_at  DateTime? @db.Timestamptz(6)\n\n+  @@ignore\n}\n")),(0,i.kt)("h3",{id:"evolving-your-database-schema"},"Evolving your database schema"),(0,i.kt)("p",null,"Update the data model in your Prisma schema by adding a model or a field:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},'// based on the schema in the "Adding Prisma to a new project" section\n+model User {\n+  id    Int     @id @default(autoincrement())\n+  email String  @unique\n+  name  String?\n+  posts Post[]\n+\n+  @@map("users")\n+}\n\nmodel Post {\n  id        Int      @id @default(autoincrement())\n  createdAt DateTime @default(now())\n  title     String\n  content   String?\n  published Boolean  @default(false)\n  viewCount Int      @default(0)\n+  author    User?    @relation(fields: [authorId], references: [id])\n+  authorId  Int?     @map("author_id")\n\n  @@map("posts")\n}\n\n')),(0,i.kt)("p",null,"Next, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"@ruheni/db-diff")," CLI tool to generate ",(0,i.kt)("inlineCode",{parentName:"p"},"up")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"down")," migrations:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx db-diff\n")),(0,i.kt)("p",null,"This command will generate up and down migrations based off of your Prisma schema. If you are currently using a different path to store the migration, you can provide the ",(0,i.kt)("inlineCode",{parentName:"p"},"--migrations-dir")," flag followed by the path."),(0,i.kt)("p",null,"Next, apply the generated migration using the Platformatic CLI:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx platformatic db migrations apply\n")),(0,i.kt)("p",null,"And you're done!"),(0,i.kt)("h2",{id:"using-prisma-client-in-your-plugins"},"Using Prisma Client in your plugins"),(0,i.kt)("p",null,"Plugins allow you to add custom functionality to your REST and GraphQL API. Refer to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/guides/add-custom-functionality/introduction"},"Add Custom Functionality")," to learn more how you can add custom functionality."),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"Prisma Client usage with Platformatic is currently only supported in Node v18 ")),(0,i.kt)("p",null,"You can use Prisma Client to interact with your database in your plugin. "),(0,i.kt)("p",null,"To get started, run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx prisma generate\n")),(0,i.kt)("p",null,"The above command installs the ",(0,i.kt)("inlineCode",{parentName:"p"},"@prisma/client")," in your project and generates a Prisma Client based off of your Prisma schema."),(0,i.kt)("p",null,"Install ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/sabinadams/fastify-prisma"},(0,i.kt)("inlineCode",{parentName:"a"},"@sabinthedev/fastify-prisma"))," fastify plugin. The plugin takes care of shutting down database connections and makes Prisma Client available as a Fastify plugin."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @sabinthedev/fastify-prisma\n")),(0,i.kt)("p",null,"Register the plugin and extend your REST API:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// 1. \nconst prismaPlugin = require(\"@sabinthedev/fastify-prisma\")\n\nmodule.exports = async (app) => {\n  app.log.info('plugin loaded')\n  \n  // 2. \n  app.register(prismaPlugin)\n  \n  /** \n   * Plugin logic\n   */\n    // 3.\n    app.put('/post/:id/views', async (req, reply) => {\n  \n    const { id } = req.params\n    \n    // 4.\n    const post = await app.prisma.post.update({\n      where: {\n        id: Number(id)\n      },\n      data: {\n        viewCount: {\n          increment: 1\n        }\n      }\n    })\n    \n    // 5.\n    return reply.send(post)\n  })\n}\n")),(0,i.kt)("p",null,"The snippet does the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Imports the plugin"),(0,i.kt)("li",{parentName:"ol"},"Registers the ",(0,i.kt)("inlineCode",{parentName:"li"},"@sabinthedev/fastify-prisma")),(0,i.kt)("li",{parentName:"ol"},"Defines the endpoint for incrementing the views of a post"),(0,i.kt)("li",{parentName:"ol"},"Makes a query to the database on the Post model to increment a post's view count"),(0,i.kt)("li",{parentName:"ol"},"Returns the updated post on success")),(0,i.kt)("p",null,"If you would like to extend your GraphQL API, extend the schema and define the corresponding resolver:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="plugin.js"',title:'"plugin.js"'},"// ./plugin.js\nconst prismaPlugin = require(\"@sabinthedev/fastify-prisma\")\n\nmodule.exports = async (app) => {\n  app.log.info('plugin loaded')\n\n  app.graphql.extendSchema(`\n    extend type Mutation {\n      incrementPostViewCount(id: ID): Post\n    }\n  `)\n\n  app.graphql.defineResolvers({\n    Mutation: {\n      incrementPostViewCount: async (_, { id }) => {\n        const post = await prisma.post.update({\n          where: {\n            id: Number(id)\n          },\n          data: {\n            viewCount: {\n              increment: 1\n            }\n          }\n        })\n\n        if (!post) throw new Error(`Post with id:${id} was not found`)\n        return post\n      }\n    }\n  })\n}\n")),(0,i.kt)("p",null,"Start the server: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx platformatic db start\n")),(0,i.kt)("p",null,"The query should now be included in your GraphQL schema."),(0,i.kt)("p",null,"You can also use the Prisma Client in your REST API endpoints."),(0,i.kt)("h2",{id:"workarounds"},"Workarounds"),(0,i.kt)("h3",{id:"using-prisma-with-sqlite"},"Using Prisma with SQLite"),(0,i.kt)("p",null,"Currently, Prisma doesn't resolve the file path of a SQLite database the same way as Platformatic does. "),(0,i.kt)("p",null,"If your database is at the root of the project, create a new environment variable that Prisma will use called ",(0,i.kt)("inlineCode",{parentName:"p"},"PRISMA_DATABASE_URL"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# .env\nDATABASE_URL="sqlite://db.sqlite"\nPRISMA_DATABASE_URL="file:../db.sqlite"\n')),(0,i.kt)("p",null,"Next, update the ",(0,i.kt)("inlineCode",{parentName:"p"},"url")," value in the ",(0,i.kt)("inlineCode",{parentName:"p"},"datasource")," block in your Prisma schema with the updated value:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-groovy",metastring:'title="prisma/schema.prisma"',title:'"prisma/schema.prisma"'},'// ./prisma/schema.prisma\ndatasource db {\n  provider = "sqlite"\n  url      = env("PRISMA_DATABASE_URL")\n}\n')),(0,i.kt)("p",null,"Running migrations should now work smoothly and the path will be resolved correctly."),(0,i.kt)("h3",{id:"foreign-keys-field-and-table-names-naming-conventions"},"Foreign keys, field, and table names naming conventions"),(0,i.kt)("p",null,"Foreign key names should use underscores, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"author_id"),", for Platformatic DB to correctly map relations. You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},'@map("")')," attribute to define the names of your foreign keys and field names to be defined in the database."),(0,i.kt)("p",null,"Table names should be mapped to use the naming convention expected by Platformatic DB e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},'@@map("recipes")')," (the Prisma convention is Recipe, which corresponds with the model name)."),(0,i.kt)("p",null,"You can use ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iiian/prisma-case-format"},(0,i.kt)("inlineCode",{parentName:"a"},"prisma-case-format"))," to enforce your own database conventions, i.e., pascal, camel, and snake casing."),(0,i.kt)("h2",{id:"learn-more"},"Learn more"),(0,i.kt)("p",null,"If you would like to learn more about Prisma, be sure to check out the ",(0,i.kt)("a",{parentName:"p",href:"https://www.prisma.io/docs"},"Prisma docs"),"."))}u.isMDXComponent=!0}}]);