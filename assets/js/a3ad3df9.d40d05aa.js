/*! For license information please see a3ad3df9.d40d05aa.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[20857],{812878:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>l,frontMatter:()=>u,metadata:()=>a,toc:()=>s});var r=t(824246),o=t(511151);const u={id:"backend-openapi-utils.internal.unknownifnever",title:"internal.UnknownIfNever",description:"API reference for internal.UnknownIfNever"},c=void 0,a={id:"reference/backend-openapi-utils.internal.unknownifnever",title:"internal.UnknownIfNever",description:"API reference for internal.UnknownIfNever",source:"@site/../docs/reference/backend-openapi-utils.internal.unknownifnever.md",sourceDirName:"reference",slug:"/reference/backend-openapi-utils.internal.unknownifnever",permalink:"/docs/reference/backend-openapi-utils.internal.unknownifnever",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-openapi-utils.internal.unknownifnever.md",tags:[],version:"current",frontMatter:{id:"backend-openapi-utils.internal.unknownifnever",title:"internal.UnknownIfNever",description:"API reference for internal.UnknownIfNever"}},i={},s=[];function f(e){const n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/backend-openapi-utils",children:(0,r.jsx)(n.code,{children:"@backstage/backend-openapi-utils"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/backend-openapi-utils.internal",children:(0,r.jsx)(n.code,{children:"internal"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/backend-openapi-utils.internal.unknownifnever",children:(0,r.jsx)(n.code,{children:"UnknownIfNever"})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"export type UnknownIfNever<P> = [P] extends [never] ? unknown : P;\n"})})]})}function l(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},371426:(e,n,t)=>{var r=t(827378),o=Symbol.for("react.element"),u=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function s(e,n,t){var r,u={},s=null,f=null;for(r in void 0!==t&&(s=""+t),void 0!==n.key&&(s=""+n.key),void 0!==n.ref&&(f=n.ref),n)c.call(n,r)&&!i.hasOwnProperty(r)&&(u[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===u[r]&&(u[r]=n[r]);return{$$typeof:o,type:e,key:s,ref:f,props:u,_owner:a.current}}n.Fragment=u,n.jsx=s,n.jsxs=s},541535:(e,n)=>{var t=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),i=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,v={};function m(e,n,t){this.props=e,this.context=n,this.refs=v,this.updater=t||y}function _(){}function b(e,n,t){this.props=e,this.context=n,this.refs=v,this.updater=t||y}m.prototype.isReactComponent={},m.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=m.prototype;var k=b.prototype=new _;k.constructor=b,h(k,m.prototype),k.isPureReactComponent=!0;var w=Array.isArray,S=Object.prototype.hasOwnProperty,x={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function g(e,n,r){var o,u={},c=null,a=null;if(null!=n)for(o in void 0!==n.ref&&(a=n.ref),void 0!==n.key&&(c=""+n.key),n)S.call(n,o)&&!j.hasOwnProperty(o)&&(u[o]=n[o]);var i=arguments.length-2;if(1===i)u.children=r;else if(1<i){for(var s=Array(i),f=0;f<i;f++)s[f]=arguments[f+2];u.children=s}if(e&&e.defaultProps)for(o in i=e.defaultProps)void 0===u[o]&&(u[o]=i[o]);return{$$typeof:t,type:e,key:c,ref:a,props:u,_owner:x.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var R=/\/+/g;function C(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function $(e,n,o,u,c){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var i=!1;if(null===e)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case t:case r:i=!0}}if(i)return c=c(i=e),e=""===u?"."+C(i,0):u,w(c)?(o="",null!=e&&(o=e.replace(R,"$&/")+"/"),$(c,n,o,"",(function(e){return e}))):null!=c&&(E(c)&&(c=function(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(c,o+(!c.key||i&&i.key===c.key?"":(""+c.key).replace(R,"$&/")+"/")+e)),n.push(c)),1;if(i=0,u=""===u?".":u+":",w(e))for(var s=0;s<e.length;s++){var f=u+C(a=e[s],s);i+=$(a,n,o,f,c)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),s=0;!(a=e.next()).done;)i+=$(a=a.value,n,o,f=u+C(a,s++),c);else if("object"===a)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return i}function I(e,n,t){if(null==e)return e;var r=[],o=0;return $(e,r,"","",(function(e){return n.call(t,e,o++)})),r}function P(e){if(-1===e._status){var n=e._result;(n=n()).then((function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n)}),(function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n)})),-1===e._status&&(e._status=0,e._result=n)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},N={transition:null},U={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:N,ReactCurrentOwner:x};function T(){throw Error("act(...) is not supported in production builds of React.")}n.Children={map:I,forEach:function(e,n,t){I(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return I(e,(function(){n++})),n},toArray:function(e){return I(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=m,n.Fragment=o,n.Profiler=c,n.PureComponent=b,n.StrictMode=u,n.Suspense=f,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U,n.act=T,n.cloneElement=function(e,n,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),u=e.key,c=e.ref,a=e._owner;if(null!=n){if(void 0!==n.ref&&(c=n.ref,a=x.current),void 0!==n.key&&(u=""+n.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(s in n)S.call(n,s)&&!j.hasOwnProperty(s)&&(o[s]=void 0===n[s]&&void 0!==i?i[s]:n[s])}var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){i=Array(s);for(var f=0;f<s;f++)i[f]=arguments[f+2];o.children=i}return{$$typeof:t,type:e.type,key:u,ref:c,props:o,_owner:a}},n.createContext=function(e){return(e={$$typeof:i,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},n.createElement=g,n.createFactory=function(e){var n=g.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:s,render:e}},n.isValidElement=E,n.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:P}},n.memo=function(e,n){return{$$typeof:l,type:e,compare:void 0===n?null:n}},n.startTransition=function(e){var n=N.transition;N.transition={};try{e()}finally{N.transition=n}},n.unstable_act=T,n.useCallback=function(e,n){return O.current.useCallback(e,n)},n.useContext=function(e){return O.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return O.current.useDeferredValue(e)},n.useEffect=function(e,n){return O.current.useEffect(e,n)},n.useId=function(){return O.current.useId()},n.useImperativeHandle=function(e,n,t){return O.current.useImperativeHandle(e,n,t)},n.useInsertionEffect=function(e,n){return O.current.useInsertionEffect(e,n)},n.useLayoutEffect=function(e,n){return O.current.useLayoutEffect(e,n)},n.useMemo=function(e,n){return O.current.useMemo(e,n)},n.useReducer=function(e,n,t){return O.current.useReducer(e,n,t)},n.useRef=function(e){return O.current.useRef(e)},n.useState=function(e){return O.current.useState(e)},n.useSyncExternalStore=function(e,n,t){return O.current.useSyncExternalStore(e,n,t)},n.useTransition=function(){return O.current.useTransition()},n.version="18.3.1"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>c});var r=t(667294);const o={},u=r.createContext(o);function c(e){const n=r.useContext(u);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(u.Provider,{value:n},e.children)}}}]);