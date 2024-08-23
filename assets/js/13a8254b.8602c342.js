/*! For license information please see 13a8254b.8602c342.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[216555],{967927:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(824246),o=n(511151);const a={id:"plugins",title:"Frontend Plugins",sidebar_label:"Plugins",description:"Frontend plugins"},i=void 0,s={id:"frontend-system/architecture/plugins",title:"Frontend Plugins",description:"Frontend plugins",source:"@site/../docs/frontend-system/architecture/15-plugins.md",sourceDirName:"frontend-system/architecture",slug:"/frontend-system/architecture/plugins",permalink:"/docs/frontend-system/architecture/plugins",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/frontend-system/architecture/15-plugins.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{id:"plugins",title:"Frontend Plugins",sidebar_label:"Plugins",description:"Frontend plugins"},sidebar:"docs",previous:{title:"App",permalink:"/docs/frontend-system/architecture/app"},next:{title:"Extensions",permalink:"/docs/frontend-system/architecture/extensions"}},u={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Creating a Plugin",id:"creating-a-plugin",level:2},{value:"<code>pluginId</code> option",id:"pluginid-option",level:3},{value:"<code>extensions</code> option",id:"extensions-option",level:3},{value:"<code>routes</code> and <code>externalRoutes</code> options",id:"routes-and-externalroutes-options",level:3},{value:"<code>featureFlags</code> option",id:"featureflags-option",level:3},{value:"Installing a Plugin in an App",id:"installing-a-plugin-in-an-app",level:2},{value:"Overriding a Plugin",id:"overriding-a-plugin",level:2}];function c(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"NOTE: The new frontend system is in alpha and is only supported by a small number of plugins."})}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(t.p,{children:"Frontend plugins are a foundational building block in Backstage and the frontend system. They are used to encapsulate and provide functionality for a Backstage app, such as new pages, navigational elements, and APIs; as well as extensions and features for other plugins, such as entity page cards and content for the Software Catalog, or result list items for the search plugin."}),"\n",(0,r.jsxs)(t.p,{children:["Each plugin is typically shipped in a separate NPM package, whether that's a published package, or just in the local workspace. The plugin instance should always the ",(0,r.jsx)(t.code,{children:"default"})," export of the package, either via the main entry-point or the ",(0,r.jsx)(t.code,{children:"/alpha"})," sub-path export. Each plugin package is limited to exporting a single plugin instance. In a local workspace you could use a different structure if preferred, but this is considered a non-standard layout and should be avoided in published packages."]}),"\n",(0,r.jsx)(t.h2,{id:"creating-a-plugin",children:"Creating a Plugin"}),"\n",(0,r.jsxs)(t.p,{children:["Frontend plugin instances are created with the ",(0,r.jsx)(t.code,{children:"createFrontendPlugin"})," function, which is provided by the ",(0,r.jsx)(t.code,{children:"@backstage/frontend-plugin-api"})," package. It takes a single options object that provides all of the necessary configuration for the plugin. In particular you will want to provide ",(0,r.jsx)(t.a,{href:"/docs/frontend-system/architecture/extensions",children:"extensions"})," for your plugin, as that is the way that you can provide new functionality to the app."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"// This creates a new extension, see \"Extension Blueprints\" documentation for more details\nconst myPage = PageBlueprint.make({\n  params: {\n    defaultPath: '/my-page',\n    loader: () => import('./MyPage').then(m => <m.MyPage />),\n  },\n});\n\nexport default createFrontendPlugin({\n  id: 'my-plugin',\n  extensions: [myPage],\n});\n"})}),"\n",(0,r.jsxs)(t.h3,{id:"pluginid-option",children:[(0,r.jsx)(t.code,{children:"pluginId"})," option"]}),"\n",(0,r.jsx)(t.p,{children:"Each plugin needs an ID, which is used to uniquely identify the plugin within an entire Backstage system. The ID does not have to be globally unique across all of the NPM ecosystem, although you generally want to strive for that. It is not possible to install multiple plugins with the same ID in a single Backstage app."}),"\n",(0,r.jsxs)(t.p,{children:["The plugin ID should generally be part of the of the package name and use kebab-case. See both the ",(0,r.jsx)(t.a,{href:"/docs/frontend-system/architecture/naming-patterns",children:"frontend naming patterns section"}),", as well as the ",(0,r.jsx)(t.a,{href:"/docs/tooling/package-metadata#name",children:"package metadata section"})," for more information."]}),"\n",(0,r.jsxs)(t.h3,{id:"extensions-option",children:[(0,r.jsx)(t.code,{children:"extensions"})," option"]}),"\n",(0,r.jsxs)(t.p,{children:["These are the ",(0,r.jsx)(t.a,{href:"/docs/frontend-system/architecture/extensions",children:"extensions"})," that the plugin provides to the app. Note that you should not export any of these extensions separately from the plugin package, as they can already by accessed via the ",(0,r.jsx)(t.code,{children:"getExtension"})," method of the plugin instance using the extension ID."]}),"\n",(0,r.jsxs)(t.p,{children:["The extensions that you provide to a plugin will have their ",(0,r.jsx)(t.code,{children:"namespace"})," set to the plugin ID by default. For example, if you create an extension using the ",(0,r.jsx)(t.code,{children:"PageBlueprint"})," without any particular naming options and install that via a plugin with the ID ",(0,r.jsx)(t.code,{children:"my-plugin"}),", the final extension ID will be ",(0,r.jsx)(t.code,{children:"page:my-plugin"}),". You can read more about how this works in the ",(0,r.jsx)(t.a,{href:"/docs/frontend-system/architecture/extensions#extension-structure",children:"extension structure documentation"}),"."]}),"\n",(0,r.jsxs)(t.h3,{id:"routes-and-externalroutes-options",children:[(0,r.jsx)(t.code,{children:"routes"})," and ",(0,r.jsx)(t.code,{children:"externalRoutes"})," options"]}),"\n",(0,r.jsxs)(t.p,{children:["These are the routes that the plugin exposes to the app. The ",(0,r.jsx)(t.code,{children:"routes"})," option declares all of the target routes that your plugin provides, i.e. routes that other plugins link to. The ",(0,r.jsx)(t.code,{children:"externalRoutes"})," option instead declares all the outgoing routes, i.e. routes that your plugins links to, which you can bind to the ",(0,r.jsx)(t.code,{children:"routes"})," of other plugins. See the ",(0,r.jsx)(t.a,{href:"/docs/frontend-system/architecture/routes",children:"routes documentation"})," for more information how to set up cross-plugin navigation."]}),"\n",(0,r.jsxs)(t.h3,{id:"featureflags-option",children:[(0,r.jsx)(t.code,{children:"featureFlags"})," option"]}),"\n",(0,r.jsxs)(t.p,{children:["This is a list of feature flag declarations that your plugin provides to the app. This makes sure that the feature flags are correctly registered and can be toggled in the app. To read a feature flag you can use the feature flags ",(0,r.jsx)(t.a,{href:"/docs/frontend-system/architecture/utility-apis",children:"Utility API"}),", accessible via ",(0,r.jsx)(t.code,{children:"featureFlagsApiRef"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"installing-a-plugin-in-an-app",children:"Installing a Plugin in an App"}),"\n",(0,r.jsxs)(t.p,{children:["A plugin instance is considered a frontend feature and can be installed directly in any Backstage frontend app. See the ",(0,r.jsx)(t.a,{href:"/docs/frontend-system/architecture/app",children:"app documentation"})," for more information about the different ways in which you can install new features in an app."]}),"\n",(0,r.jsx)(t.h2,{id:"overriding-a-plugin",children:"Overriding a Plugin"}),"\n",(0,r.jsxs)(t.p,{children:["A plugin might not always behave exactly the way you want. It could be that you want to remove particular extensions, decorate them a bit, replace them with your own, or simply add new ones. Regardless of your exact use-case, you can use the ",(0,r.jsx)(t.code,{children:"plugin.withOverrides"})," method to create a new copy of the plugin with the desired changes. When doing so you can also access the original extensions provided by the plugin, and use the ",(0,r.jsx)(t.a,{href:"/docs/frontend-system/architecture/extension-overrides",children:"extension override"})," API to make changes to individual extensions:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import plugin from '@backstage/plugin-catalog';\n\nexport default plugin.withOverrides({\n  // These overrides are merged with the original extensions\n  extensions: [\n    // Override the catalog nav item to use a custom icon\n    plugin.getExtension('nav-item:catalog').override({\n      factory: origFactory => [\n        NavItemBlueprint.dataRefs.target({\n          ...origFactory().get(NavItemBlueprint.dataRefs.target),\n          icon: CustomCatalogIcon,\n        }),\n      ],\n    }),\n    // Override the catalog index page with a completely custom implementation\n    PageBlueprint.make({\n      params: {\n        defaultPath: '/catalog',\n        routeRef: plugin.routes.catalogIndex,\n        loader: () => import('./CustomCatalogIndexPage').then(m => <m.Page />),\n      },\n    }),\n  ],\n});\n"})}),"\n",(0,r.jsxs)(t.p,{children:["You can keep the plugin override in your app package, but it can often be a good idea to separate it out into its own package, especially if the overrides are complex or you want distinct ownership of the override. For example, if you are overriding the ",(0,r.jsx)(t.code,{children:"@backstage/plugin-catalog"})," plugin, you might create a new package called ",(0,r.jsx)(t.code,{children:"@internal/plugin-catalog"})," at ",(0,r.jsx)(t.code,{children:"plugins/catalog"})," in your workspace, which exports the overridden plugin instance."]})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},371426:(e,t,n)=>{var r=n(827378),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,a={},l=null,c=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,r)&&!u.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:l,ref:c,props:a,_owner:s.current}}t.Fragment=a,t.jsx=l,t.jsxs=l},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),u=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),h=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,y={};function m(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||f}function x(){}function v(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||f}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=m.prototype;var b=v.prototype=new x;b.constructor=v,g(b,m.prototype),b.isPureReactComponent=!0;var j=Array.isArray,w=Object.prototype.hasOwnProperty,k={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,r){var o,a={},i=null,s=null;if(null!=t)for(o in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)w.call(t,o)&&!_.hasOwnProperty(o)&&(a[o]=t[o]);var u=arguments.length-2;if(1===u)a.children=r;else if(1<u){for(var l=Array(u),c=0;c<u;c++)l[c]=arguments[c+2];a.children=l}if(e&&e.defaultProps)for(o in u=e.defaultProps)void 0===a[o]&&(a[o]=u[o]);return{$$typeof:n,type:e,key:i,ref:s,props:a,_owner:k.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var I=/\/+/g;function E(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(e,t,o,a,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var u=!1;if(null===e)u=!0;else switch(s){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case n:case r:u=!0}}if(u)return i=i(u=e),e=""===a?"."+E(u,0):a,j(i)?(o="",null!=e&&(o=e.replace(I,"$&/")+"/"),R(i,t,o,"",(function(e){return e}))):null!=i&&(S(i)&&(i=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||u&&u.key===i.key?"":(""+i.key).replace(I,"$&/")+"/")+e)),t.push(i)),1;if(u=0,a=""===a?".":a+":",j(e))for(var l=0;l<e.length;l++){var c=a+E(s=e[l],l);u+=R(s,t,o,c,i)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),l=0;!(s=e.next()).done;)u+=R(s=s.value,t,o,c=a+E(s,l++),i);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return u}function C(e,t,n){if(null==e)return e;var r=[],o=0;return R(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function O(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var T={current:null},F={transition:null},$={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:F,ReactCurrentOwner:k};function D(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:C,forEach:function(e,t,n){C(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return C(e,(function(){t++})),t},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!S(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=m,t.Fragment=o,t.Profiler=i,t.PureComponent=v,t.StrictMode=a,t.Suspense=c,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,t.act=D,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=g({},e.props),a=e.key,i=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,s=k.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(l in t)w.call(t,l)&&!_.hasOwnProperty(l)&&(o[l]=void 0===t[l]&&void 0!==u?u[l]:t[l])}var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){u=Array(l);for(var c=0;c<l;c++)u[c]=arguments[c+2];o.children=u}return{$$typeof:n,type:e.type,key:a,ref:i,props:o,_owner:s}},t.createContext=function(e){return(e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=P,t.createFactory=function(e){var t=P.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=S,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:O}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=F.transition;F.transition={};try{e()}finally{F.transition=t}},t.unstable_act=D,t.useCallback=function(e,t){return T.current.useCallback(e,t)},t.useContext=function(e){return T.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return T.current.useDeferredValue(e)},t.useEffect=function(e,t){return T.current.useEffect(e,t)},t.useId=function(){return T.current.useId()},t.useImperativeHandle=function(e,t,n){return T.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return T.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return T.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return T.current.useMemo(e,t)},t.useReducer=function(e,t,n){return T.current.useReducer(e,t,n)},t.useRef=function(e){return T.current.useRef(e)},t.useState=function(e){return T.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return T.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return T.current.useTransition()},t.version="18.3.1"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>i});var r=n(667294);const o={},a=r.createContext(o);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);