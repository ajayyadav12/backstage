/*! For license information please see 7d905226.5db140a9.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[118542],{942105:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>l,frontMatter:()=>u,metadata:()=>c,toc:()=>s});var n=r(824246),o=r(511151);const u={id:"frontend-plugin-api.routeresolutionapiref",title:"routeResolutionApiRef",description:"API reference for routeResolutionApiRef"},i=void 0,c={id:"reference/frontend-plugin-api.routeresolutionapiref",title:"routeResolutionApiRef",description:"API reference for routeResolutionApiRef",source:"@site/../docs/reference/frontend-plugin-api.routeresolutionapiref.md",sourceDirName:"reference",slug:"/reference/frontend-plugin-api.routeresolutionapiref",permalink:"/docs/reference/frontend-plugin-api.routeresolutionapiref",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/frontend-plugin-api.routeresolutionapiref.md",tags:[],version:"current",frontMatter:{id:"frontend-plugin-api.routeresolutionapiref",title:"routeResolutionApiRef",description:"API reference for routeResolutionApiRef"}},a={},s=[];function f(e){const t={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/frontend-plugin-api",children:(0,n.jsx)(t.code,{children:"@backstage/frontend-plugin-api"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/frontend-plugin-api.routeresolutionapiref",children:(0,n.jsx)(t.code,{children:"routeResolutionApiRef"})})]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"ApiRef"})," of ",(0,n.jsx)(t.a,{href:"/docs/reference/frontend-plugin-api.routeresolutionapi",children:"RouteResolutionApi"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:'routeResolutionApiRef: import("@backstage/core-plugin-api").ApiRef<RouteResolutionApi>\n'})})]})}function l(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},371426:(e,t,r)=>{var n=r(827378),o=Symbol.for("react.element"),u=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var n,u={},s=null,f=null;for(n in void 0!==r&&(s=""+r),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(f=t.ref),t)i.call(t,n)&&!a.hasOwnProperty(n)&&(u[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===u[n]&&(u[n]=t[n]);return{$$typeof:o,type:e,key:s,ref:f,props:u,_owner:c.current}}t.Fragment=u,t.jsx=s,t.jsxs=s},541535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),a=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,m={};function _(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||y}function b(){}function v(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||y}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=_.prototype;var R=v.prototype=new b;R.constructor=v,h(R,_.prototype),R.isPureReactComponent=!0;var g=Array.isArray,S=Object.prototype.hasOwnProperty,k={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,n){var o,u={},i=null,c=null;if(null!=t)for(o in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)S.call(t,o)&&!j.hasOwnProperty(o)&&(u[o]=t[o]);var a=arguments.length-2;if(1===a)u.children=n;else if(1<a){for(var s=Array(a),f=0;f<a;f++)s[f]=arguments[f+2];u.children=s}if(e&&e.defaultProps)for(o in a=e.defaultProps)void 0===u[o]&&(u[o]=a[o]);return{$$typeof:r,type:e,key:i,ref:c,props:u,_owner:k.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var w=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function $(e,t,o,u,i){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var a=!1;if(null===e)a=!0;else switch(c){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case r:case n:a=!0}}if(a)return i=i(a=e),e=""===u?"."+C(a,0):u,g(i)?(o="",null!=e&&(o=e.replace(w,"$&/")+"/"),$(i,t,o,"",(function(e){return e}))):null!=i&&(E(i)&&(i=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(w,"$&/")+"/")+e)),t.push(i)),1;if(a=0,u=""===u?".":u+":",g(e))for(var s=0;s<e.length;s++){var f=u+C(c=e[s],s);a+=$(c,t,o,f,i)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),s=0;!(c=e.next()).done;)a+=$(c=c.value,t,o,f=u+C(c,s++),i);else if("object"===c)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function A(e,t,r){if(null==e)return e;var n=[],o=0;return $(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function O(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var P={current:null},I={transition:null},T={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:I,ReactCurrentOwner:k};function D(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:A,forEach:function(e,t,r){A(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return A(e,(function(){t++})),t},toArray:function(e){return A(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=_,t.Fragment=o,t.Profiler=i,t.PureComponent=v,t.StrictMode=u,t.Suspense=f,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.act=D,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),u=e.key,i=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,c=k.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)S.call(t,s)&&!j.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==a?a[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){a=Array(s);for(var f=0;f<s;f++)a[f]=arguments[f+2];o.children=a}return{$$typeof:r,type:e.type,key:u,ref:i,props:o,_owner:c}},t.createContext=function(e){return(e={$$typeof:a,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=x,t.createFactory=function(e){var t=x.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:O}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}},t.unstable_act=D,t.useCallback=function(e,t){return P.current.useCallback(e,t)},t.useContext=function(e){return P.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return P.current.useDeferredValue(e)},t.useEffect=function(e,t){return P.current.useEffect(e,t)},t.useId=function(){return P.current.useId()},t.useImperativeHandle=function(e,t,r){return P.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return P.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return P.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return P.current.useMemo(e,t)},t.useReducer=function(e,t,r){return P.current.useReducer(e,t,r)},t.useRef=function(e){return P.current.useRef(e)},t.useState=function(e){return P.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return P.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return P.current.useTransition()},t.version="18.3.1"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Z:()=>c,a:()=>i});var n=r(667294);const o={},u=n.createContext(o);function i(e){const t=n.useContext(u);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(u.Provider,{value:t},e.children)}}}]);