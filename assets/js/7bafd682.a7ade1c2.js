/*! For license information please see 7bafd682.a7ade1c2.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[512591],{772141:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(824246),i=n(511151);const o={id:"configure-app-with-plugins",title:"Configuring App with plugins",description:"Documentation on How Configuring App with plugins"},a=void 0,s={id:"getting-started/configure-app-with-plugins",title:"Configuring App with plugins",description:"Documentation on How Configuring App with plugins",source:"@site/../docs/getting-started/configure-app-with-plugins.md",sourceDirName:"getting-started",slug:"/getting-started/configure-app-with-plugins",permalink:"/docs/getting-started/configure-app-with-plugins",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/getting-started/configure-app-with-plugins.md",tags:[],version:"current",frontMatter:{id:"configure-app-with-plugins",title:"Configuring App with plugins",description:"Documentation on How Configuring App with plugins"},sidebar:"docs",previous:{title:"Authentication",permalink:"/docs/getting-started/config/authentication"},next:{title:"Customize the look-and-feel of your App",permalink:"/docs/getting-started/app-custom-theme"}},c={},u=[{value:"Adding existing plugins to your app",id:"adding-existing-plugins-to-your-app",level:2},{value:"Adding a plugin page to the Sidebar",id:"adding-a-plugin-page-to-the-sidebar",level:3}];function l(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Backstage plugins customize the app for your needs. There is a\n",(0,r.jsx)(t.a,{href:"https://backstage.io/plugins",children:"plugin directory"})," with plugins for many common\ninfrastructure needs - CI/CD, monitoring, auditing, and more."]}),"\n",(0,r.jsx)(t.h2,{id:"adding-existing-plugins-to-your-app",children:"Adding existing plugins to your app"}),"\n",(0,r.jsxs)(t.p,{children:["The following steps assume that you have\n",(0,r.jsx)(t.a,{href:"/docs/getting-started/",children:"created a Backstage app"})," and want to add an existing plugin\nto it."]}),"\n",(0,r.jsxs)(t.p,{children:["We are using the\n",(0,r.jsx)(t.a,{href:"https://github.com/CircleCI-Public/backstage-plugin/tree/main/plugins/circleci",children:"CircleCI"}),"\nplugin in this example, which is designed to show CI/CD pipeline information attached\nto an entity in the software catalog."]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Add the plugin's npm package to the repo:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",metastring:'title="From your Backstage root directory"',children:"yarn --cwd packages/app add @circleci/backstage-plugin\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Note the plugin is added to the ",(0,r.jsx)(t.code,{children:"app"})," package, rather than the root\n",(0,r.jsx)(t.code,{children:"package.json"}),". Backstage Apps are set up as monorepos with\n",(0,r.jsx)(t.a,{href:"https://classic.yarnpkg.com/en/docs/workspaces/",children:"Yarn workspaces"}),". Since\nCircleCI is a frontend UI plugin, it goes in ",(0,r.jsx)(t.code,{children:"app"})," rather than ",(0,r.jsx)(t.code,{children:"backend"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Add the ",(0,r.jsx)(t.code,{children:"EntityCircleCIContent"})," extension to the entity pages in the app:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",metastring:'title="packages/app/src/components/catalog/EntityPage.tsx"',children:"/* highlight-add-start */\nimport {\n  EntityCircleCIContent,\n  isCircleCIAvailable,\n} from '@circleci/backstage-plugin';\n/* highlight-add-end */\n\nconst cicdContent = (\n  <EntitySwitch>\n    {/* ... */}\n    {/* highlight-add-next-line */}\n    <EntitySwitch.Case if={isCircleCIAvailable}>\n      <EntityCircleCIContent />\n    </EntitySwitch.Case>\n    ;{/* highlight-add-end */}\n  </EntitySwitch>\n);\n"})}),"\n",(0,r.jsxs)(t.p,{children:["This is just one example, but each Backstage instance may integrate content or\ncards to suit their needs on different pages, tabs, etc. In addition, while some\nplugins such as this example are designed to annotate or support specific software\ncatalog entities, others may be intended to be used in a stand-alone fashion and\nwould be added outside the ",(0,r.jsx)(t.code,{children:"EntityPage"}),", such as being added to the main navigation."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.em,{children:"[Optional]"})," Add a proxy config:"]}),"\n",(0,r.jsx)(t.p,{children:"Plugins that collect data off of external services may require the use of a proxy service.\nThis plugin accesses the CircleCI REST API, and thus requires a proxy definition."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",metastring:'title="app-config.yaml"',children:"proxy:\n  '/circleci/api':\n    target: https://circleci.com/api/v1.1\n    headers:\n      Circle-Token: ${CIRCLECI_AUTH_TOKEN}\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"adding-a-plugin-page-to-the-sidebar",children:"Adding a plugin page to the Sidebar"}),"\n",(0,r.jsxs)(t.p,{children:["In a standard Backstage app created with\n",(0,r.jsx)(t.a,{href:"/docs/getting-started/",children:"@backstage/create-app"}),", the sidebar is managed inside\n",(0,r.jsx)(t.code,{children:"packages/app/src/components/Root/Root.tsx"}),". The file exports the entire\n",(0,r.jsx)(t.code,{children:"Sidebar"})," element of your app, which you can extend with additional entries by\nadding new ",(0,r.jsx)(t.code,{children:"SidebarItem"})," elements."]}),"\n",(0,r.jsxs)(t.p,{children:["For example, if you install the ",(0,r.jsx)(t.code,{children:"api-docs"})," plugin, a matching ",(0,r.jsx)(t.code,{children:"SidebarItem"}),"\ncould be something like this:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",metastring:'title="packages/app/src/components/Root/Root.tsx"',children:'// Import icon from Material UI\nimport ExtensionIcon from \'@material-ui/icons/Extension\';\n\n// ... inside the AppSidebar component\n<SidebarItem icon={ExtensionIcon} to="api-docs" text="APIs" />;\n'})}),"\n",(0,r.jsxs)(t.p,{children:["You can also use your own SVGs directly as icon components. Just make sure they\nare sized according to the Material UI's\n",(0,r.jsx)(t.a,{href:"https://material-ui.com/api/svg-icon/",children:"SvgIcon"})," default of 24x24px, and set the\nextension to ",(0,r.jsx)(t.code,{children:".icon.svg"}),". For example:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import InternalToolIcon from './internal-tool.icon.svg';\n"})}),"\n",(0,r.jsxs)(t.p,{children:["On mobile devices the ",(0,r.jsx)(t.code,{children:"Sidebar"})," is displayed at the bottom of the screen. For\ncustomizing the experience you can group ",(0,r.jsx)(t.code,{children:"SidebarItems"})," in a ",(0,r.jsx)(t.code,{children:"SidebarGroup"}),"\n(Example 1) or create a ",(0,r.jsx)(t.code,{children:"SidebarGroup"})," with a link (Example 2). All\n",(0,r.jsx)(t.code,{children:"SidebarGroup"}),"s are displayed in the bottom navigation with an icon."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'// Example 1\n<SidebarGroup icon={<MenuIcon />} label="Menu">\n  ...\n  <SidebarItem icon={ExtensionIcon} to="api-docs" text="APIs" />\n  ...\n<SidebarGroup />\n'})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'// Example 2\n<SidebarGroup label="Search" icon={<SearchIcon />} to="/search">\n  ...\n  <SidebarItem icon={ExtensionIcon} to="api-docs" text="APIs" />\n  ...\n<SidebarGroup />\n'})}),"\n",(0,r.jsxs)(t.p,{children:["If no ",(0,r.jsx)(t.code,{children:"SidebarGroup"})," is provided a default menu will display the ",(0,r.jsx)(t.code,{children:"Sidebar"}),"\ncontent."]})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},371426:(e,t,n)=>{var r=n(827378),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,o={},u=null,l=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)a.call(t,r)&&!c.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:i,type:e,key:u,ref:l,props:o,_owner:s.current}}t.Fragment=o,t.jsx=u,t.jsxs=u},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),f=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,m={};function y(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}function x(){}function b(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=y.prototype;var j=b.prototype=new x;j.constructor=b,g(j,y.prototype),j.isPureReactComponent=!0;var v=Array.isArray,w=Object.prototype.hasOwnProperty,_={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,r){var i,o={},a=null,s=null;if(null!=t)for(i in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)w.call(t,i)&&!S.hasOwnProperty(i)&&(o[i]=t[i]);var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){for(var u=Array(c),l=0;l<c;l++)u[l]=arguments[l+2];o.children=u}if(e&&e.defaultProps)for(i in c=e.defaultProps)void 0===o[i]&&(o[i]=c[i]);return{$$typeof:n,type:e,key:a,ref:s,props:o,_owner:_.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var E=/\/+/g;function I(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(e,t,i,o,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case r:c=!0}}if(c)return a=a(c=e),e=""===o?"."+I(c,0):o,v(a)?(i="",null!=e&&(i=e.replace(E,"$&/")+"/"),R(a,t,i,"",(function(e){return e}))):null!=a&&(k(a)&&(a=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,i+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(E,"$&/")+"/")+e)),t.push(a)),1;if(c=0,o=""===o?".":o+":",v(e))for(var u=0;u<e.length;u++){var l=o+I(s=e[u],u);c+=R(s,t,i,l,a)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(s=e.next()).done;)c+=R(s=s.value,t,i,l=o+I(s,u++),a);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function A(e,t,n){if(null==e)return e;var r=[],i=0;return R(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var $={current:null},O={transition:null},T={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:O,ReactCurrentOwner:_};function N(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:A,forEach:function(e,t,n){A(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return A(e,(function(){t++})),t},toArray:function(e){return A(e,(function(e){return e}))||[]},only:function(e){if(!k(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=y,t.Fragment=i,t.Profiler=a,t.PureComponent=b,t.StrictMode=o,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.act=N,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=g({},e.props),o=e.key,a=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,s=_.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(u in t)w.call(t,u)&&!S.hasOwnProperty(u)&&(i[u]=void 0===t[u]&&void 0!==c?c[u]:t[u])}var u=arguments.length-2;if(1===u)i.children=r;else if(1<u){c=Array(u);for(var l=0;l<u;l++)c[l]=arguments[l+2];i.children=c}return{$$typeof:n,type:e.type,key:o,ref:a,props:i,_owner:s}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=k,t.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:p,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=O.transition;O.transition={};try{e()}finally{O.transition=t}},t.unstable_act=N,t.useCallback=function(e,t){return $.current.useCallback(e,t)},t.useContext=function(e){return $.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return $.current.useDeferredValue(e)},t.useEffect=function(e,t){return $.current.useEffect(e,t)},t.useId=function(){return $.current.useId()},t.useImperativeHandle=function(e,t,n){return $.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return $.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return $.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return $.current.useMemo(e,t)},t.useReducer=function(e,t,n){return $.current.useReducer(e,t,n)},t.useRef=function(e){return $.current.useRef(e)},t.useState=function(e){return $.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return $.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return $.current.useTransition()},t.version="18.3.1"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>a});var r=n(667294);const i={},o=r.createContext(i);function a(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);