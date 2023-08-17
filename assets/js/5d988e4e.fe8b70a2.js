"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[79380],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},23854:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={},o="Platformatic Client",l={unversionedId:"reference/client/introduction",id:"version-0.36.0/reference/client/introduction",title:"Platformatic Client",description:"Create a Fastify plugin that exposes a client for a remote OpenAPI or GraphQL API.",source:"@site/versioned_docs/version-0.36.0/reference/client/introduction.md",sourceDirName:"reference/client",slug:"/reference/client/introduction",permalink:"/docs/reference/client/introduction",draft:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-0.36.0/reference/client/introduction.md",tags:[],version:"0.36.0",frontMatter:{},sidebar:"docs",previous:{title:"Packages",permalink:"/docs/category/packages"},next:{title:"Platformatic Client",permalink:"/docs/reference/client/introduction"}},s={},p=[{value:"Usage with Platformatic Service or Platformatic DB",id:"usage-with-platformatic-service-or-platformatic-db",level:2},{value:"Generating a client for a service running within Platformatic Runtime",id:"generating-a-client-for-a-service-running-within-platformatic-runtime",level:2},{value:"Example",id:"example",level:3},{value:"Types Generator",id:"types-generator",level:2},{value:"OpenAPI",id:"openapi",level:3},{value:"GraphQL",id:"graphql",level:3},{value:"Usage with standalone Fastify",id:"usage-with-standalone-fastify",level:2},{value:"How are the method names defined in OpenAPI",id:"how-are-the-method-names-defined-in-openapi",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Telemetry propagation",id:"telemetry-propagation",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"platformatic-client"},"Platformatic Client"),(0,r.kt)("p",null,"Create a Fastify plugin that exposes a client for a remote OpenAPI or GraphQL API."),(0,r.kt)("p",null,"To create a client for a remote OpenAPI API, you can use the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ platformatic client http://exmaple.com/to/schema/file --name myclient\n")),(0,r.kt)("p",null,"To create a client for a remote Graphql API, you can use the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ platformatic client http://exmaple.com/grapqhl --name myclient\n")),(0,r.kt)("h2",{id:"usage-with-platformatic-service-or-platformatic-db"},"Usage with Platformatic Service or Platformatic DB"),(0,r.kt)("p",null,"If you run the generator in in a Platformatic application, and it will\nautomatically extend it to load your client by editing the configuration file\nand adding a ",(0,r.kt)("inlineCode",{parentName:"p"},"clients")," section.\nThen, in any part of your Platformatic application you can use the client."),(0,r.kt)("p",null,"You can use the client in your application in Javascript, calling a GraphQL endpoint:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Use a typescript reference to set up autocompletion\n// and explore the generated APIs.\n\n/// <reference path=\"./myclient\" />\n\n/**  @type {import('fastify').FastifyPluginAsync<{} */\nmodule.exports = async function (app, opts) {\n  app.post('/', async (request, reply) => {\n    const res = await app.myclient.graphql({\n      query: 'query { movies { title } }'\n    })\n    return res\n  })\n}\n")),(0,r.kt)("p",null,"or in Typescript, calling an OpenAPI endpoint:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { FastifyInstance } from 'fastify'\n/// <reference path=\"./myclient\" />\n\nexport default async function (app: FastifyInstance) {\n  app.get('/', async () => {\n    return app.myclient.get({})\n  })\n}\n")),(0,r.kt)("p",null,"The client configuration in the ",(0,r.kt)("inlineCode",{parentName:"p"},"platformatic.db.json")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"platformatic.service.json")," would look like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "clients": [{\n    "schema": "./myclient/myclient.openapi.json" // or ./myclient/myclient.schema.graphl\n    "name": "myclient",\n    "type": "openapi" // or graphql\n    "url": "{ PLT_MYCLIENT_URL }"\n  }]\n}\n')),(0,r.kt)("p",null,"Note that the generator would also have updated the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," and ",(0,r.kt)("inlineCode",{parentName:"p"},".env.sample")," files if they exists."),(0,r.kt)("h2",{id:"generating-a-client-for-a-service-running-within-platformatic-runtime"},"Generating a client for a service running within Platformatic Runtime"),(0,r.kt)("p",null,"Platformatic Runtime allows you to create a network of services that are not exposed.\nTo create a client to invoke one of those services from another, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ platformatic client --name <clientname> --runtime <serviceId>\n")),(0,r.kt)("p",null,"Where ",(0,r.kt)("inlineCode",{parentName:"p"},"<clientname>")," is the name of the client and ",(0,r.kt)("inlineCode",{parentName:"p"},"<serviceId>")," is the id of the given service\n(which correspond in the basic case with the folder name of that service).\nThe client generated is identical to the one in the previous section."),(0,r.kt)("p",null,"Note that this command looks for a ",(0,r.kt)("inlineCode",{parentName:"p"},"platformatic.runtime.json")," in a parent directory."),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"As an example, consider a network of three microservices:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"somber-chariot"),", an instance of Platformatic DB;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"languid-noblemen"),", an instance of Platformatic Service;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pricey-paesant"),", an instance of Platformatic Composer, which is also the runtime entrypoint.")),(0,r.kt)("p",null,"From within the ",(0,r.kt)("inlineCode",{parentName:"p"},"languid-noblemen")," folder, we can run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ platformatic client --name chariot --runtime somber-chariot\n")),(0,r.kt)("p",null,"The client configuration in the ",(0,r.kt)("inlineCode",{parentName:"p"},"platformatic.db.json")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"platformatic.service.json")," would look like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "clients": [{\n    "path": "./chariot",\n    "serviceId": "somber-chariot"\n  }]\n}\n')),(0,r.kt)("p",null,"Even if the client is generated from an HTTP endpoint, it is possible to add a ",(0,r.kt)("inlineCode",{parentName:"p"},"serviceId")," property each client object shown above.\nThis is not required, but if using the Platformatic Runtime, the ",(0,r.kt)("inlineCode",{parentName:"p"},"serviceId"),"\nproperty will be used to identify the service dependency."),(0,r.kt)("h2",{id:"types-generator"},"Types Generator"),(0,r.kt)("p",null,"The types for the client are automatically generated for both OpenAPI and GraphQL schemas."),(0,r.kt)("p",null,"You can generate only the types with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--types-only")," flag."),(0,r.kt)("p",null,"For example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ platformatic client http://exmaple.com/to/schema/file --name myclient --types-only\n")),(0,r.kt)("p",null,"Will create the single ",(0,r.kt)("inlineCode",{parentName:"p"},"myclient.d.ts")," file in current directory"),(0,r.kt)("h3",{id:"openapi"},"OpenAPI"),(0,r.kt)("p",null,"We provide a fully typed experience for OpenAPI, Typing both the request and response for\neach individual OpenAPI operation."),(0,r.kt)("p",null,"Consider this example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// Omitting all the individual Request and Reponse payloads for brevity\n\ninterface Client {\n  getMovies(req: GetMoviesRequest): Promise<Array<GetMoviesResponse>>;\n  createMovie(req: CreateMovieRequest): Promise<CreateMovieResponse>;\n  updateMovies(req: UpdateMoviesRequest): Promise<Array<UpdateMoviesResponse>>;\n  getMovieById(req: GetMovieByIdRequest): Promise<GetMovieByIdResponse>;\n  updateMovie(req: UpdateMovieRequest): Promise<UpdateMovieResponse>;\n  updateMovie(req: UpdateMovieRequest): Promise<UpdateMovieResponse>;\n  deleteMovies(req: DeleteMoviesRequest): Promise<DeleteMoviesResponse>;\n  getQuotesForMovie(req: GetQuotesForMovieRequest): Promise<Array<GetQuotesForMovieResponse>>;\n  getQuotes(req: GetQuotesRequest): Promise<Array<GetQuotesResponse>>;\n  createQuote(req: CreateQuoteRequest): Promise<CreateQuoteResponse>;\n  updateQuotes(req: UpdateQuotesRequest): Promise<Array<UpdateQuotesResponse>>;\n  getQuoteById(req: GetQuoteByIdRequest): Promise<GetQuoteByIdResponse>;\n  updateQuote(req: UpdateQuoteRequest): Promise<UpdateQuoteResponse>;\n  updateQuote(req: UpdateQuoteRequest): Promise<UpdateQuoteResponse>;\n  deleteQuotes(req: DeleteQuotesRequest): Promise<DeleteQuotesResponse>;\n  getMovieForQuote(req: GetMovieForQuoteRequest): Promise<GetMovieForQuoteResponse>;\n}\n\ntype ClientPlugin = FastifyPluginAsync<NonNullable<client.ClientOptions>>\n\ndeclare module 'fastify' {\n  interface FastifyInstance {\n    'client': Client;\n  }\n\n  interface FastifyRequest {\n    'client': Client;\n  }\n}\n\ndeclare namespace Client {\n  export interface ClientOptions {\n    url: string\n  }\n  export const client: ClientPlugin;\n  export { client as default };\n}\n\ndeclare function client(...params: Parameters<ClientPlugin>): ReturnType<ClientPlugin>;\nexport = client;\n")),(0,r.kt)("h3",{id:"graphql"},"GraphQL"),(0,r.kt)("p",null,"We provide a partially typed experience for GraphQL, because we do not want to limit\nhow you are going to query the remote system. Take a look at this example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"declare module 'fastify' {\n  interface GraphQLQueryOptions {\n    query: string;\n    headers: Record<string, string>;\n    variables: Record<string, unknown>;\n  }\n  interface GraphQLClient {\n    graphql<T>(GraphQLQuery): PromiseLike<T>;\n  }\n  interface FastifyInstance {\n    'client'\n    : GraphQLClient;\n\n  }\n\n  interface FastifyRequest {\n    'client'<T>(GraphQLQuery): PromiseLike<T>;\n  }\n}\n\ndeclare namespace client {\n  export interface Clientoptions {\n    url: string\n  }\n  export interface Movie {\n    'id'?: string;\n\n    'title'?: string;\n\n    'realeasedDate'?: string;\n\n    'createdAt'?: string;\n\n    'preferred'?: string;\n\n    'quotes'?: Array<Quote>;\n\n  }\n  export interface Quote {\n    'id'?: string;\n\n    'quote'?: string;\n\n    'likes'?: number;\n\n    'dislikes'?: number;\n\n    'movie'?: Movie;\n\n  }\n  export interface MoviesCount {\n    'total'?: number;\n\n  }\n  export interface QuotesCount {\n    'total'?: number;\n\n  }\n  export interface MovieDeleted {\n    'id'?: string;\n\n  }\n  export interface QuoteDeleted {\n    'id'?: string;\n\n  }\n  export const client: Clientplugin;\n  export { client as default };\n}\n\ndeclare function client(...params: Parameters<Clientplugin>): ReturnType<Clientplugin>;\nexport = client;\n")),(0,r.kt)("p",null,"Given only you can know what GraphQL query you are producing, you are responsible for typing\nit accordingly."),(0,r.kt)("h2",{id:"usage-with-standalone-fastify"},"Usage with standalone Fastify"),(0,r.kt)("p",null,"If a platformatic configuration file is not found, a complete Fastify plugin is generated to be\nused in your Fastify application like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const fastify = require('fastify')()\nconst client = require('./your-client-name')\n\nfastify.register(client, {\n  url: 'http://example.com'\n})\n\n// GraphQL\nfastify.post('/', async (request, reply) => {\n  const res = await request.movies.graphql({\n    query: 'mutation { saveMovie(input: { title: \"foo\" }) { id, title } }'\n  })\n  return res\n})\n\n// OpenAPI\nfastify.post('/', async (request, reply) => {\n  const res = await request.movies.createMovie({ title: 'foo' })\n  return res\n})\n\nfastify.listen({ port: 3000 })\n")),(0,r.kt)("p",null,"Note that you would need to install ",(0,r.kt)("inlineCode",{parentName:"p"},"@platformatic/client")," as a depedency."),(0,r.kt)("h2",{id:"how-are-the-method-names-defined-in-openapi"},"How are the method names defined in OpenAPI"),(0,r.kt)("p",null,"The names of the operations are defined in the OpenAPI specification.\nSpecifically, we use the ",(0,r.kt)("a",{parentName:"p",href:"https://swagger.io/specification/"},(0,r.kt)("inlineCode",{parentName:"a"},"operationId")),".\nIf that's not part of the spec,\nthe name is generated by combining the parts of the path,\nlike ",(0,r.kt)("inlineCode",{parentName:"p"},"/something/{param1}/")," and a method ",(0,r.kt)("inlineCode",{parentName:"p"},"GET"),", it genertes ",(0,r.kt)("inlineCode",{parentName:"p"},"getSomethingParam1"),"."),(0,r.kt)("h2",{id:"authentication"},"Authentication"),(0,r.kt)("p",null,"It's very common that downstream services requires some form of Authentication.\nHow could we add the necessary headers? You can configure them from your plugin:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"/// <reference path=\"./myclient\" />\n\n/**  @type {import('fastify').FastifyPluginAsync<{} */\nmodule.exports = async function (app, opts) {\n  app.configureMyclient({\n    async getHeaders (req, reply) {\n      return {\n        'foo': 'bar'\n      }\n    }\n  })\n\n  app.post('/', async (request, reply) => {\n    const res = await app.myclient.graphql({\n      query: 'query { movies { title } }'\n    })\n    return res\n  })\n}\n")),(0,r.kt)("h2",{id:"telemetry-propagation"},"Telemetry propagation"),(0,r.kt)("p",null,"To correctly propagate telemetry information, be sure to get the client from the request object, e.g.:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"fastify.post('/', async (request, reply) => {\n  const res = await request.movies.createMovie({ title: 'foo' })\n  return res\n})\n")))}m.isMDXComponent=!0}}]);