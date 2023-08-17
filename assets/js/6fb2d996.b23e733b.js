"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[56799],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},75722:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={},o="Platformatic Client",s={unversionedId:"reference/client/introduction",id:"version-0.21.1/reference/client/introduction",title:"Platformatic Client",description:"Create a Fastify plugin that exposes a client for a remote OpenAPI or GraphQL API.",source:"@site/versioned_docs/version-0.21.1/reference/client/introduction.md",sourceDirName:"reference/client",slug:"/reference/client/introduction",permalink:"/docs/0.21.1/reference/client/introduction",draft:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-0.21.1/reference/client/introduction.md",tags:[],version:"0.21.1",frontMatter:{}},l={},p=[{value:"Usage with Platformatic Service or Platformatic DB",id:"usage-with-platformatic-service-or-platformatic-db",level:2},{value:"Types Generator",id:"types-generator",level:2},{value:"OpenAPI",id:"openapi",level:3},{value:"GraphQL",id:"graphql",level:3},{value:"Usage with standalone Fastify",id:"usage-with-standalone-fastify",level:2},{value:"How are the method names defined in OpenAPI",id:"how-are-the-method-names-defined-in-openapi",level:2},{value:"Authentication",id:"authentication",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"platformatic-client"},"Platformatic Client"),(0,a.kt)("p",null,"Create a Fastify plugin that exposes a client for a remote OpenAPI or GraphQL API."),(0,a.kt)("p",null,"To create a client for a remote OpenAPI API, you can use the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ platformatic client http://exmaple.com/to/schema/file --name myclient\n")),(0,a.kt)("p",null,"To create a client for a remote Graphql API, you can use the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ platformatic client http://exmaple.com/grapqhl --name myclient\n")),(0,a.kt)("h2",{id:"usage-with-platformatic-service-or-platformatic-db"},"Usage with Platformatic Service or Platformatic DB"),(0,a.kt)("p",null,"If you run the generator in in a Platformatic application, and it will\nautomatically extend it to load your client by editing the configuration file\nand adding a ",(0,a.kt)("inlineCode",{parentName:"p"},"clients")," section.\nThen, in any part of your Platformatic application you can use the client."),(0,a.kt)("p",null,"You can use the client in your application in Javascript, calling a GraphQL endpoint:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// Use a typescript reference to set up autocompletion\n// and explore the generated APIs.\n\n/// <reference path=\"./myclient\" />\n\n/**  @type {import('fastify').FastifyPluginAsync<{} */\nmodule.exports = async function (app, opts) {\n  app.post('/', async (request, reply) => {\n    const res = await app.myclient.graphql({\n      query: 'query { movies { title } }'\n    })\n    return res \n  })\n}\n")),(0,a.kt)("p",null,"or in Typescript, calling an OpenAPI endpoint:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { FastifyInstance } from 'fastify'\n/// <reference path=\"./myclient\" />\n\nexport default async function (app: FastifyInstance) {\n  app.get('/', async () => {\n    return app.myclient.get({})\n  })\n}\n")),(0,a.kt)("p",null,"The client configuration in the ",(0,a.kt)("inlineCode",{parentName:"p"},"platformatic.db.json")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"platformatic.service.json")," would look like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "clients": [{\n    "path": "./myclient",\n    "url": "{ PLT_MYCLIENT_URL }"\n  }]\n}\n')),(0,a.kt)("p",null,"Note that the generator would also have updated the ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," and ",(0,a.kt)("inlineCode",{parentName:"p"},".env.sample")," files if they exists."),(0,a.kt)("h2",{id:"types-generator"},"Types Generator"),(0,a.kt)("p",null,"The types for the client are automatically generated for both OpenAPI and GraphQL schemas."),(0,a.kt)("h3",{id:"openapi"},"OpenAPI"),(0,a.kt)("p",null,"We provide a fully typed experience for OpenAPI, Typing both the request and response for\neach individual OpenAPI operation."),(0,a.kt)("p",null,"Consider this example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// Omitting all the individual Request and Reponse payloads for brevity\n\ninterface Client {\n  getMovies(req: GetMoviesRequest): Promise<Array<GetMoviesResponse>>;\n  createMovie(req: CreateMovieRequest): Promise<CreateMovieResponse>;\n  updateMovies(req: UpdateMoviesRequest): Promise<Array<UpdateMoviesResponse>>;\n  getMovieById(req: GetMovieByIdRequest): Promise<GetMovieByIdResponse>;\n  updateMovie(req: UpdateMovieRequest): Promise<UpdateMovieResponse>;\n  updateMovie(req: UpdateMovieRequest): Promise<UpdateMovieResponse>;\n  deleteMovies(req: DeleteMoviesRequest): Promise<DeleteMoviesResponse>;\n  getQuotesForMovie(req: GetQuotesForMovieRequest): Promise<Array<GetQuotesForMovieResponse>>;\n  getQuotes(req: GetQuotesRequest): Promise<Array<GetQuotesResponse>>;\n  createQuote(req: CreateQuoteRequest): Promise<CreateQuoteResponse>;\n  updateQuotes(req: UpdateQuotesRequest): Promise<Array<UpdateQuotesResponse>>;\n  getQuoteById(req: GetQuoteByIdRequest): Promise<GetQuoteByIdResponse>;\n  updateQuote(req: UpdateQuoteRequest): Promise<UpdateQuoteResponse>;\n  updateQuote(req: UpdateQuoteRequest): Promise<UpdateQuoteResponse>;\n  deleteQuotes(req: DeleteQuotesRequest): Promise<DeleteQuotesResponse>;\n  getMovieForQuote(req: GetMovieForQuoteRequest): Promise<GetMovieForQuoteResponse>;\n}\n\ntype ClientPlugin = FastifyPluginAsync<NonNullable<client.ClientOptions>>\n\ndeclare module 'fastify' {\n  interface FastifyInstance {\n    'client': Client;\n  }\n\n  interface FastifyRequest {\n    'client': Client;\n  }\n}\n\ndeclare namespace client {\n  export interface ClientOptions {\n    url: string\n  }\n  export const client: ClientPlugin;\n  export { client as default };\n}\n\ndeclare function client(...params: Parameters<ClientPlugin>): ReturnType<ClientPlugin>;\nexport = client;\n")),(0,a.kt)("h3",{id:"graphql"},"GraphQL"),(0,a.kt)("p",null,"We provide a partially typed experience for GraphQL, because we do not want to limit\nhow you are going to query the remote system. Take a look at this example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"declare module 'fastify' {\n  interface GraphQLQueryOptions {\n    query: string;\n    headers: Record<string, string>;\n    variables: Record<string, unknown>;\n  }\n  interface GraphQLClient {\n    graphql<T>(GraphQLQuery): PromiseLike<T>;\n  }\n  interface FastifyInstance {\n    'client'\n    : GraphQLClient;\n\n  }\n\n  interface FastifyRequest {\n    'client'<T>(GraphQLQuery): PromiseLike<T>;\n  }\n}\n\ndeclare namespace client {\n  export interface Clientoptions {\n    url: string\n  }\n  export interface Movie {\n    'id'?: string;\n\n    'title'?: string;\n\n    'realeasedDate'?: string;\n\n    'createdAt'?: string;\n\n    'preferred'?: string;\n\n    'quotes'?: Array<Quote>;\n\n  }\n  export interface Quote {\n    'id'?: string;\n\n    'quote'?: string;\n\n    'likes'?: number;\n\n    'dislikes'?: number;\n\n    'movie'?: Movie;\n\n  }\n  export interface MoviesCount {\n    'total'?: number;\n\n  }\n  export interface QuotesCount {\n    'total'?: number;\n\n  }\n  export interface MovieDeleted {\n    'id'?: string;\n\n  }\n  export interface QuoteDeleted {\n    'id'?: string;\n\n  }\n  export const client: Clientplugin;\n  export { client as default };\n}\n\ndeclare function client(...params: Parameters<Clientplugin>): ReturnType<Clientplugin>;\nexport = client;\n")),(0,a.kt)("p",null,"Given only you can know what GraphQL query you are producing, you are responsible for typing\nit accordingly."),(0,a.kt)("h2",{id:"usage-with-standalone-fastify"},"Usage with standalone Fastify"),(0,a.kt)("p",null,"You can know use the client in your Fastify application:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const fastify = require('fastify')()\nconst client = require('./your-client-name')\n\nfastify.register(client, {\n  url: 'http://example.com'\n})\n\n// GraphQL\nfastify.post('/', async (request, reply) => {\n  const res = await request.movies.graphql({\n    query: 'mutation { saveMovie(input: { title: \"foo\" }) { id, title } }'\n  })\n  return res \n})\n\n// OpenAPI\nfastify.post('/', async (request, reply) => {\n  const res = await request.movies.createMovie({ title: 'foo' })\n  return res \n})\n\nfastify.listen({ port: 3000 })\n")),(0,a.kt)("p",null,"Note that you would need to install ",(0,a.kt)("inlineCode",{parentName:"p"},"@platformatic/client")," as a depedency."),(0,a.kt)("h2",{id:"how-are-the-method-names-defined-in-openapi"},"How are the method names defined in OpenAPI"),(0,a.kt)("p",null,"The names of the operations are defined in the OpenAPI specification.\nSpecifically, we use the ",(0,a.kt)("a",{parentName:"p",href:"https://swagger.io/specification/"},(0,a.kt)("inlineCode",{parentName:"a"},"operationId")),".\nIf that's not part of the spec,\nthe name is generated by combining the parts of the path,\nlike ",(0,a.kt)("inlineCode",{parentName:"p"},"/something/{param1}/")," and a method ",(0,a.kt)("inlineCode",{parentName:"p"},"GET"),", it genertes ",(0,a.kt)("inlineCode",{parentName:"p"},"getSomethingParam1"),"."),(0,a.kt)("h2",{id:"authentication"},"Authentication"),(0,a.kt)("p",null,"It's very common that downstream services requires some form of Authentication.\nHow could we add the necessary headers? You can configure them from your plugin:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/// <reference path=\"./myclient\" />\n\n/**  @type {import('fastify').FastifyPluginAsync<{} */\nmodule.exports = async function (app, opts) {\n  app.configureMyclient({\n    async getHeaders (req, reply) {\n      return {\n        'foo': 'bar'\n      }\n    }\n  })\n\n  app.post('/', async (request, reply) => {\n    const res = await app.myclient.graphql({\n      query: 'query { movies { title } }'\n    })\n    return res \n  })\n}\n")))}d.isMDXComponent=!0}}]);