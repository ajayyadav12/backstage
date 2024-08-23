/*! For license information please see 5cc055c7.daae718a.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[799386],{466815:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(824246),o=n(511151);const a={id:"observability",title:"Observability",description:"Adding Observability to Your Plugin"},s=void 0,i={id:"plugins/observability",title:"Observability",description:"Adding Observability to Your Plugin",source:"@site/../docs/plugins/observability.md",sourceDirName:"plugins",slug:"/plugins/observability",permalink:"/docs/plugins/observability",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/plugins/observability.md",tags:[],version:"current",frontMatter:{id:"observability",title:"Observability",description:"Adding Observability to Your Plugin"},sidebar:"docs",previous:{title:"Add to Directory",permalink:"/docs/plugins/add-to-directory"},next:{title:"Static Configuration in Backstage",permalink:"/docs/conf/"}},c={},l=[{value:"Datadog RUM Events",id:"datadog-rum-events",level:2},{value:"Logging",id:"logging",level:2},{value:"New Backend",id:"new-backend",level:3},{value:"Old Backend",id:"old-backend",level:3},{value:"Health Checks",id:"health-checks",level:2},{value:"New Backend (post 1.29.0)",id:"new-backend-post-1290",level:3},{value:"New Backend (pre 1.29.0)",id:"new-backend-pre-1290",level:3},{value:"Old Backend",id:"old-backend-1",level:3}];function u(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"This article briefly describes the observability options that are available to a\nBackstage integrator."}),"\n",(0,r.jsx)(t.h2,{id:"datadog-rum-events",children:"Datadog RUM Events"}),"\n",(0,r.jsxs)(t.p,{children:["See how to install Datadog Events in your app\n",(0,r.jsx)(t.a,{href:"/docs/integrations/datadog-rum/installation",children:"here"})]}),"\n",(0,r.jsx)(t.h2,{id:"logging",children:"Logging"}),"\n",(0,r.jsx)(t.h3,{id:"new-backend",children:"New Backend"}),"\n",(0,r.jsxs)(t.p,{children:["The backend supplies a central logging service,\n",(0,r.jsx)(t.a,{href:"/docs/backend-system/core-services/root-logger",children:(0,r.jsx)(t.code,{children:"rootLogger"})}),", as well as a plugin\nbased logger, ",(0,r.jsx)(t.a,{href:"/docs/backend-system/core-services/logger",children:(0,r.jsx)(t.code,{children:"logger"})})," from ",(0,r.jsx)(t.code,{children:"coreServices"}),".\nTo add additional granularity to your logs, you can create children from the plugin\nbased logger, using the ",(0,r.jsx)(t.code,{children:".child()"})," method and provide is with JSON data. For example,\nif you wanted to log items for a specific span in your plugin, you could do"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"export function createRouter({ logger }) {\n  const router = Router();\n\n  router.post('/task/:taskId/queue', (req, res) => {\n    const { taskId } = req.params;\n    const taskLogger = logger.child({ task: taskId });\n    taskLogger.log('Queueing this task.');\n  });\n\n  router.get('/task/:taskId/results', (req, res) => {\n    const { taskId } = req.params;\n    const taskLogger = logger.child({ task: taskId });\n    taskLogger.log('Getting the results of this task.');\n  });\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["You can also add additional metadata to all logs for your Backstage instance by\noverriding the ",(0,r.jsx)(t.code,{children:"rootLogger"})," implementation, you can see an example in\n",(0,r.jsxs)(t.a,{href:"/docs/backend-system/core-services/root-logger#configuring-the-service",children:["the ",(0,r.jsx)(t.code,{children:"rootLogger"})," docs"]}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"old-backend",children:"Old Backend"}),"\n",(0,r.jsxs)(t.p,{children:["The backend supplies a central ",(0,r.jsx)(t.a,{href:"https://github.com/winstonjs/winston",children:"winston"}),"\nroot logger that plugins are expected to use for their logging needs. In the\ndefault production setup, it emits structured JSON logs on stdout, with a field\n",(0,r.jsx)(t.code,{children:'"service": "backstage"'})," and also tagged on a per-plugin basis. Plugins that\nwant to more finely specify what part of their processes that emitted the log\nmessage should add a ",(0,r.jsx)(t.code,{children:'"component"'})," field to do so."]}),"\n",(0,r.jsx)(t.p,{children:"An example log line could look as follows:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "service": "backstage",\n  "type": "plugin",\n  "plugin": "catalog",\n  "component": "catalog-all-locations-refresh",\n  "level": "info",\n  "message": "Locations Refresh: Refreshing location bootstrap:bootstrap"\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"health-checks",children:"Health Checks"}),"\n",(0,r.jsx)(t.h3,{id:"new-backend-post-1290",children:"New Backend (post 1.29.0)"}),"\n",(0,r.jsxs)(t.p,{children:["The new backend provides a ",(0,r.jsx)(t.code,{children:"RootHealthService"})," which implements\n",(0,r.jsx)(t.code,{children:"/.backstage/health/v1/readiness"})," and ",(0,r.jsx)(t.code,{children:"/.backstage/health/v1/liveness"})," endpoints\nto provide health checks for the entire backend instance."]}),"\n",(0,r.jsxs)(t.p,{children:["You can read more about this new service and how to customize it in the\n",(0,r.jsx)(t.a,{href:"/docs/backend-system/core-services/root-health",children:"Root Health Service documentation"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"new-backend-pre-1290",children:"New Backend (pre 1.29.0)"}),"\n",(0,r.jsx)(t.p,{children:"The new backend is moving towards health checks being plugin-based, as such there is no\ncurrent plugin for providing a health check route. You can add this yourself easily though,"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"import {\n  coreServices,\n  createBackendModule,\n  createBackendPlugin,\n} from '@backstage/backend-plugin-api';\n\nconst healthCheck = createBackendPlugin({\n  pluginId: 'healthcheck',\n\n  register(env) {\n    env.registerInit({\n      deps: {\n        rootHttpRouter: coreServices.rootHttpRouter,\n      },\n      init: async ({ rootHttpRouter }) => {\n        // You can adjust the route name and response as you need.\n        rootHttpRouter.use('/healthcheck', (req, res) => {\n          res.json({ status: 'ok' });\n        });\n      },\n    });\n  },\n});\n"})}),"\n",(0,r.jsx)(t.h3,{id:"old-backend-1",children:"Old Backend"}),"\n",(0,r.jsxs)(t.p,{children:["The example old backend in the Backstage repository\n",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/bc18571b7a742863a770b2a54e785d6bbef7e184/packages/backend/src/index.ts#L99",children:"supplies"}),"\na very basic health check endpoint on the ",(0,r.jsx)(t.code,{children:"/healthcheck"})," route. You may add such\na handler to your backend as well, and supply your own logic to it that fits\nyour particular health checking needs."]})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},371426:(e,t,n)=>{var r=n(827378),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,a={},l=null,u=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)s.call(t,r)&&!c.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:l,ref:u,props:a,_owner:i.current}}t.Fragment=a,t.jsx=l,t.jsxs=l},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,y={};function b(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||h}function v(){}function k(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||h}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=b.prototype;var m=k.prototype=new v;m.constructor=k,g(m,b.prototype),m.isPureReactComponent=!0;var x=Array.isArray,j=Object.prototype.hasOwnProperty,_={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,r){var o,a={},s=null,i=null;if(null!=t)for(o in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(s=""+t.key),t)j.call(t,o)&&!w.hasOwnProperty(o)&&(a[o]=t[o]);var c=arguments.length-2;if(1===c)a.children=r;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===a[o]&&(a[o]=c[o]);return{$$typeof:n,type:e,key:s,ref:i,props:a,_owner:_.current}}function R(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var E=/\/+/g;function O(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,o,a,s){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case r:c=!0}}if(c)return s=s(c=e),e=""===a?"."+O(c,0):a,x(s)?(o="",null!=e&&(o=e.replace(E,"$&/")+"/"),C(s,t,o,"",(function(e){return e}))):null!=s&&(R(s)&&(s=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,o+(!s.key||c&&c.key===s.key?"":(""+s.key).replace(E,"$&/")+"/")+e)),t.push(s)),1;if(c=0,a=""===a?".":a+":",x(e))for(var l=0;l<e.length;l++){var u=a+O(i=e[l],l);c+=C(i,t,o,u,s)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(i=e.next()).done;)c+=C(i=i.value,t,o,u=a+O(i,l++),s);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function $(e,t,n){if(null==e)return e;var r=[],o=0;return C(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},B={transition:null},L={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:B,ReactCurrentOwner:_};function N(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:$,forEach:function(e,t,n){$(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return $(e,(function(){t++})),t},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!R(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=b,t.Fragment=o,t.Profiler=s,t.PureComponent=k,t.StrictMode=a,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,t.act=N,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=g({},e.props),a=e.key,s=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,i=_.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)j.call(t,l)&&!w.hasOwnProperty(l)&&(o[l]=void 0===t[l]&&void 0!==c?c[l]:t[l])}var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];o.children=c}return{$$typeof:n,type:e.type,key:a,ref:s,props:o,_owner:i}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=R,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=B.transition;B.transition={};try{e()}finally{B.transition=t}},t.unstable_act=N,t.useCallback=function(e,t){return I.current.useCallback(e,t)},t.useContext=function(e){return I.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return I.current.useDeferredValue(e)},t.useEffect=function(e,t){return I.current.useEffect(e,t)},t.useId=function(){return I.current.useId()},t.useImperativeHandle=function(e,t,n){return I.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return I.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return I.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return I.current.useMemo(e,t)},t.useReducer=function(e,t,n){return I.current.useReducer(e,t,n)},t.useRef=function(e){return I.current.useRef(e)},t.useState=function(e){return I.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return I.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return I.current.useTransition()},t.version="18.3.1"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>s});var r=n(667294);const o={},a=r.createContext(o);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);