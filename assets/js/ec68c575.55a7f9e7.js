"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[82033],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},A=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(a),A=r,m=c["".concat(l,".").concat(A)]||c[A]||d[A]||o;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=A;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}A.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>E});var n=a(87462),r=a(67294),o=a(86010),i=a(12466),p=a(16550),l=a(91980),s=a(67392),u=a(50012);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function A(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,p.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=d(e),[i,p]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!A({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[l,s]=m({queryString:a,groupId:n}),[c,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),k=(()=>{const e=l??c;return A({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{k&&p(k)}),[k]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!A({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);p(e),s(e),h(e)}),[s,h,o]),tabValues:o}}var k=a(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:a,selectedValue:p,selectValue:l,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),n=s[a].value;n!==p&&(c(t),l(n))},A=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:p===t?0:-1,"aria-selected":p===t,key:t,ref:e=>u.push(e),onKeyDown:A,onClick:d},i,{className:(0,o.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":p===t})}),a??t)})))}function b(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},r.createElement(f,(0,n.Z)({},e,t)),r.createElement(b,(0,n.Z)({},e,t)))}function E(e){const t=(0,k.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},71051:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>p,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),o=a(74866),i=a(85162);const p={sidebar_position:1},l="Cloud Quick Start Guide",s={unversionedId:"platformatic-cloud/quick-start-guide",id:"version-0.35.0/platformatic-cloud/quick-start-guide",title:"Cloud Quick Start Guide",description:"This guide shows you how to create and deploy an application to",source:"@site/versioned_docs/version-0.35.0/platformatic-cloud/quick-start-guide.md",sourceDirName:"platformatic-cloud",slug:"/platformatic-cloud/quick-start-guide",permalink:"/docs/0.35.0/platformatic-cloud/quick-start-guide",draft:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-0.35.0/platformatic-cloud/quick-start-guide.md",tags:[],version:"0.35.0",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Platformatic Cloud",permalink:"/docs/0.35.0/category/platformatic-cloud"},next:{title:"Deploy a PostgreSQL database with Neon",permalink:"/docs/0.35.0/platformatic-cloud/deploy-database-neon"}},u={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Log in to Platformatic Cloud",id:"log-in-to-platformatic-cloud",level:2},{value:"Create a Cloud app",id:"create-a-cloud-app",level:2},{value:"Create a static app workspace",id:"create-a-static-app-workspace",level:2},{value:"Create a dynamic app workspace",id:"create-a-dynamic-app-workspace",level:2},{value:"Create a GitHub repository",id:"create-a-github-repository",level:2},{value:"Add the workspace API keys as repository secrets",id:"add-the-workspace-api-keys-as-repository-secrets",level:2},{value:"Create a new Platformatic app",id:"create-a-new-platformatic-app",level:2},{value:"Deploy the app",id:"deploy-the-app",level:2},{value:"Test the deployed app",id:"test-the-deployed-app",level:2},{value:"Preview pull request changes",id:"preview-pull-request-changes",level:2}],d={toc:c},A="wrapper";function m(e){let{components:t,...p}=e;return(0,r.kt)(A,(0,n.Z)({},d,p,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cloud-quick-start-guide"},"Cloud Quick Start Guide"),(0,r.kt)("p",null,"This guide shows you how to create and deploy an application to\nPlatformatic Cloud."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To follow along with this guide you'll need to have these things installed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/"},"Node.js")," >= v18.8.0"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.npmjs.com/cli/"},"npm")," v7 or later"),(0,r.kt)("li",{parentName:"ul"},"A code editor, for example ",(0,r.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"Visual Studio Code"))),(0,r.kt)("p",null,"You will also need to have a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/"},"GitHub")," account."),(0,r.kt)("h2",{id:"log-in-to-platformatic-cloud"},"Log in to Platformatic Cloud"),(0,r.kt)("p",null,"Go to the ",(0,r.kt)("a",{parentName:"p",href:"https://platformatic.cloud/"},"Platformatic Cloud")," website and click on the\n",(0,r.kt)("strong",{parentName:"p"},"Continue with GitHub")," button. You'll be transferred to a GitHub page that\nasks you to Authorize Platformatic Cloud. To continue, click on the\n",(0,r.kt)("strong",{parentName:"p"},"Authorize platformatic")," button."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot of Continue with GitHub button",src:a(62648).Z,width:"482",height:"122"})),(0,r.kt)("p",null,"On the Platformatic Cloud Service Agreements page, check the boxes and\nclick the ",(0,r.kt)("strong",{parentName:"p"},"Continue")," button. You'll then be redirected to your Cloud Dashboard page."),(0,r.kt)("h2",{id:"create-a-cloud-app"},"Create a Cloud app"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot of an empty Apps page",src:a(517).Z,width:"2994",height:"686"})),(0,r.kt)("p",null,"Click the ",(0,r.kt)("strong",{parentName:"p"},"Create an app now")," button on your Cloud Dashboard page."),(0,r.kt)("p",null,"Enter ",(0,r.kt)("inlineCode",{parentName:"p"},"quick-start-app")," as your application name. Click the ",(0,r.kt)("strong",{parentName:"p"},"Create Application")," button."),(0,r.kt)("h2",{id:"create-a-static-app-workspace"},"Create a static app workspace"),(0,r.kt)("p",null,"Enter ",(0,r.kt)("inlineCode",{parentName:"p"},"production")," as the name for your workspace. Then click on the ",(0,r.kt)("strong",{parentName:"p"},"Create Workspace")," button."),(0,r.kt)("p",null,"On the next page you'll see the ",(0,r.kt)("strong",{parentName:"p"},"Workspace ID")," and ",(0,r.kt)("strong",{parentName:"p"},"API key")," for your app workspace.\nCopy them and store them somewhere secure for future reference, for example in a password manager app.\nThe API key will be used to deploy your app to the workspace that you've just created."),(0,r.kt)("p",null,"Click on the ",(0,r.kt)("strong",{parentName:"p"},"Back to dashboard")," button."),(0,r.kt)("h2",{id:"create-a-dynamic-app-workspace"},"Create a dynamic app workspace"),(0,r.kt)("p",null,"On your Cloud Dashboard, click on your app, then click on ",(0,r.kt)("strong",{parentName:"p"},"Create Workspace")," in the ",(0,r.kt)("strong",{parentName:"p"},"Workspaces"),"\nsidebar."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot of the create app workspace screen",src:a(34481).Z,width:"1446",height:"908"})),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Dynamic Workspace")," option will be automatically enabled as you have already created a\nstatic workspace. Dynamic workspaces can be used to deploy preview applications for GitHub\npull requests."),(0,r.kt)("p",null,"Enter ",(0,r.kt)("inlineCode",{parentName:"p"},"development")," as the name for your workspace, then click on the ",(0,r.kt)("strong",{parentName:"p"},"Create Workspace")," button.\nCopy the ",(0,r.kt)("strong",{parentName:"p"},"Workspace ID")," and ",(0,r.kt)("strong",{parentName:"p"},"API key")," and store them somewhere secure."),(0,r.kt)("h2",{id:"create-a-github-repository"},"Create a GitHub repository"),(0,r.kt)("p",null,"Go to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/new"},"Create a new repository")," page on GitHub.\nEnter ",(0,r.kt)("inlineCode",{parentName:"p"},"quick-start-app")," as the ",(0,r.kt)("strong",{parentName:"p"},"Repository name")," for your new repository.\nClick on the ",(0,r.kt)("strong",{parentName:"p"},"Add a README file")," checkbox and click the ",(0,r.kt)("strong",{parentName:"p"},"Create repository"),"\nbutton."),(0,r.kt)("h2",{id:"add-the-workspace-api-keys-as-repository-secrets"},"Add the workspace API keys as repository secrets"),(0,r.kt)("p",null,"Go to the ",(0,r.kt)("strong",{parentName:"p"},"Settings")," tab on your app's GitHub repository. Click into the\n",(0,r.kt)("strong",{parentName:"p"},"Secrets and variables > Actions")," section and add the following secrets:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Name")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Secret")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PLATFORMATIC_STATIC_WORKSPACE_ID")),(0,r.kt)("td",{parentName:"tr",align:null},"Your app's static workspace ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PLATFORMATIC_STATIC_WORKSPACE_API_KEY")),(0,r.kt)("td",{parentName:"tr",align:null},"Your app's static workspace API key")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PLATFORMATIC_DYNAMIC_WORKSPACE_ID")),(0,r.kt)("td",{parentName:"tr",align:null},"Your app's dynamic workspace ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PLATFORMATIC_DYNAMIC_WORKSPACE_API_KEY")),(0,r.kt)("td",{parentName:"tr",align:null},"Your app's dynamic workspace API key")))),(0,r.kt)("p",null,"Click on the ",(0,r.kt)("strong",{parentName:"p"},"New repository secret")," button to add a secret."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can also use the ",(0,r.kt)("a",{parentName:"p",href:"https://cli.github.com/"},"GitHub CLI")," to set secrets on your GitHub repository, for example:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"gh secret set \\\n  --app actions \\\n  --env-file <FILENAME_OF_ENV_FILE_WITH_SECRETS> \\\n  --repos <YOUR_GITHUB_USERNAME>/<REPO_NAME>\n"))),(0,r.kt)("h2",{id:"create-a-new-platformatic-app"},"Create a new Platformatic app"),(0,r.kt)("p",null,"In your terminal, use Git to clone your repository from GitHub. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:username/quick-start-app.git\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"See the GitHub documentation for help with\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository"},"Cloning a repository"),".")),(0,r.kt)("p",null,"Now change in to the project directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd quick-start-app\n")),(0,r.kt)("p",null,"Now run this command to start the Platformatic creator wizard:"),(0,r.kt)(o.Z,{groupId:"package-manager-create",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm create platformatic@latest\n"))),(0,r.kt)(i.Z,{value:"yarn",label:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn create platformatic\n"))),(0,r.kt)(i.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm create platformatic@latest\n")))),(0,r.kt)("p",null,"This interactive command-line tool will ask you some questions about how you'd\nlike to set up your new Platformatic app. For this guide, select these options:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"- Which kind of project do you want to create?     => DB\n- Where would you like to create your project?     => .\n- Do you want to create default migrations?        => yes\n- Do you want to create a plugin?                  => yes\n- Do you want to use TypeScript?                   => no\n- Do you want to overwrite the existing README.md? => yes\n- Do you want to run npm install?                  => yes (this can take a while)\n- Do you want to apply the migrations?             => yes\n- Do you want to generate types?                   => yes\n- Do you want to create the github action to deploy this application to Platformatic Cloud dynamic workspace? => yes\n- Do you want to create the github action to deploy this application to Platformatic Cloud static workspace? => yes\n")),(0,r.kt)("p",null,"Copy and paste your dynamic and static workspace IDs when prompted by the creator wizard."),(0,r.kt)("p",null,"Once the wizard is complete, you'll have a Platformatic app project in the\n",(0,r.kt)("inlineCode",{parentName:"p"},"quick-start-app")," directory, with example migration files and a plugin script."),(0,r.kt)("h2",{id:"deploy-the-app"},"Deploy the app"),(0,r.kt)("p",null,"In your project directory, commit your application with Git:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'git add .\n\ngit commit -m "Add Platformatic app"\n')),(0,r.kt)("p",null,"Now push your changes up to GitHub:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git push origin main\n")),(0,r.kt)("p",null,"On the GitHub repository page in your browser click on the ",(0,r.kt)("strong",{parentName:"p"},"Actions")," tab.\nYou should now see the Platformatic Cloud deployment workflow running."),(0,r.kt)("h2",{id:"test-the-deployed-app"},"Test the deployed app"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot of a static app workspace that has had an app deployed to it",src:a(95849).Z,width:"2994",height:"2288"})),(0,r.kt)("p",null,"Once the GitHub Actions deployment workflow has completed, go to the ",(0,r.kt)("inlineCode",{parentName:"p"},"production")," workspace\nfor your app in Platformatic Cloud. Click on the link for the ",(0,r.kt)("strong",{parentName:"p"},"Entry Point"),". You should now\nsee the Platformatic DB app home page."),(0,r.kt)("p",null,"Click on the ",(0,r.kt)("strong",{parentName:"p"},"OpenAPI Documentation")," link to try out your app's REST API using the Swagger UI."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot of Swagger UI for a Platformatic DB app",src:a(35250).Z,width:"2994",height:"1802"})),(0,r.kt)("h2",{id:"preview-pull-request-changes"},"Preview pull request changes"),(0,r.kt)("p",null,"When a pull request is opened on your project's GitHub repository, a preview app will automatically\nbe deployed to your app's dynamic workspace."),(0,r.kt)("p",null,"To see a preview app in action, create a new Git branch:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout -b add-hello-endpoint\n")),(0,r.kt)("p",null,"Then open up your app's ",(0,r.kt)("inlineCode",{parentName:"p"},"plugin.js")," file in your code editor. Add the following code inside\nthe existing empty function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"app.get('/hello', async function(request, reply) {\n  return { hello: 'from Platformatic Cloud' }\n})\n")),(0,r.kt)("p",null,"Save the changes, then commit and push them up to GitHub:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'git add plugin.js\n\ngit commit -m "Add hello endpoint"\n\ngit push -u origin add-hello-endpoint\n')),(0,r.kt)("p",null,"Now create a pull request for your changes on GitHub. At the bottom of the\npull request page you'll see that a deployment has been triggered to your\napp's dynamic workspace."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot of checks on a GitHub pull request",src:a(83332).Z,width:"1828",height:"552"})),(0,r.kt)("p",null,"Once the deployment has completed, a comment will appear on your pull request\nwith a link to the preview app."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot of a deployed preview app comment on a GitHub pull request",src:a(30909).Z,width:"1836",height:"402"})),(0,r.kt)("p",null,"Click on the ",(0,r.kt)("strong",{parentName:"p"},"Application URL")," link. If you add ",(0,r.kt)("inlineCode",{parentName:"p"},"/hello")," on to the URL,\nyou should receive a response from the endpoint that you just added to\nyour application."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot of a JSON response from an API endpoint",src:a(91564).Z,width:"888",height:"96"})))}m.isMDXComponent=!0},95849:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/app-workspace-static-deployed-76f8e3279aa037894d45647b7528261e.png"},62648:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"},517:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cloud-apps-empty-6b8f78009b9da6a74e8f03754b50c9c0.png"},30909:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/github-pr-deploy-comment-720f81cbacab20ce77fbd20206dafd51.png"},83332:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/github-pr-deploy-in-progress-95105f47cd34c895071ef4cca94754aa.png"},91564:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/hello-json-response-f52762d42d5844974b2a37d050c328a3.png"},35250:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/platformatic-db-swagger-ui-fc0f45a8422fcb6a96e05f0618b8b72d.png"},34481:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/workspace-create-dynamic-47b784d30bbdcfd4eb9da2dc224bae1a.png"}}]);