/*! For license information please see 85e164a8.31f57690.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[719523],{727774:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>f,frontMatter:()=>u,metadata:()=>a,toc:()=>s});var n=r(824246),o=r(511151);const u={id:"backend-openapi-utils.internal.immutablerequestbodyobject",title:"internal.ImmutableRequestBodyObject",description:"API reference for internal.ImmutableRequestBodyObject"},c=void 0,a={id:"reference/backend-openapi-utils.internal.immutablerequestbodyobject",title:"internal.ImmutableRequestBodyObject",description:"API reference for internal.ImmutableRequestBodyObject",source:"@site/../docs/reference/backend-openapi-utils.internal.immutablerequestbodyobject.md",sourceDirName:"reference",slug:"/reference/backend-openapi-utils.internal.immutablerequestbodyobject",permalink:"/docs/reference/backend-openapi-utils.internal.immutablerequestbodyobject",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-openapi-utils.internal.immutablerequestbodyobject.md",tags:[],version:"current",frontMatter:{id:"backend-openapi-utils.internal.immutablerequestbodyobject",title:"internal.ImmutableRequestBodyObject",description:"API reference for internal.ImmutableRequestBodyObject"}},i={},s=[];function l(e){const t={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/backend-openapi-utils",children:(0,n.jsx)(t.code,{children:"@backstage/backend-openapi-utils"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/backend-openapi-utils.internal",children:(0,n.jsx)(t.code,{children:"internal"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/backend-openapi-utils.internal.immutablerequestbodyobject",children:(0,n.jsx)(t.code,{children:"ImmutableRequestBodyObject"})})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"export type ImmutableRequestBodyObject = ImmutableObject<RequestBodyObject>;\n"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"References:"})," ",(0,n.jsx)(t.a,{href:"/docs/reference/backend-openapi-utils.internal.immutableobject",children:"ImmutableObject"})]})]})}function f(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},371426:(e,t,r)=>{var n=r(827378),o=Symbol.for("react.element"),u=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var n,u={},s=null,l=null;for(n in void 0!==r&&(s=""+r),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(l=t.ref),t)c.call(t,n)&&!i.hasOwnProperty(n)&&(u[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===u[n]&&(u[n]=t[n]);return{$$typeof:o,type:e,key:s,ref:l,props:u,_owner:a.current}}t.Fragment=u,t.jsx=s,t.jsxs=s},541535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),i=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,m={};function h(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||y}function _(){}function j(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||y}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=h.prototype;var v=j.prototype=new _;v.constructor=j,b(v,h.prototype),v.isPureReactComponent=!0;var k=Array.isArray,S=Object.prototype.hasOwnProperty,x={current:null},R={key:!0,ref:!0,__self:!0,__source:!0};function g(e,t,n){var o,u={},c=null,a=null;if(null!=t)for(o in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(c=""+t.key),t)S.call(t,o)&&!R.hasOwnProperty(o)&&(u[o]=t[o]);var i=arguments.length-2;if(1===i)u.children=n;else if(1<i){for(var s=Array(i),l=0;l<i;l++)s[l]=arguments[l+2];u.children=s}if(e&&e.defaultProps)for(o in i=e.defaultProps)void 0===u[o]&&(u[o]=i[o]);return{$$typeof:r,type:e,key:c,ref:a,props:u,_owner:x.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var E=/\/+/g;function w(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,o,u,c){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var i=!1;if(null===e)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case r:case n:i=!0}}if(i)return c=c(i=e),e=""===u?"."+w(i,0):u,k(c)?(o="",null!=e&&(o=e.replace(E,"$&/")+"/"),C(c,t,o,"",(function(e){return e}))):null!=c&&(O(c)&&(c=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,o+(!c.key||i&&i.key===c.key?"":(""+c.key).replace(E,"$&/")+"/")+e)),t.push(c)),1;if(i=0,u=""===u?".":u+":",k(e))for(var s=0;s<e.length;s++){var l=u+w(a=e[s],s);i+=C(a,t,o,l,c)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),s=0;!(a=e.next()).done;)i+=C(a=a.value,t,o,l=u+w(a,s++),c);else if("object"===a)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function I(e,t,r){if(null==e)return e;var n=[],o=0;return C(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function $(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var q={current:null},P={transition:null},B={ReactCurrentDispatcher:q,ReactCurrentBatchConfig:P,ReactCurrentOwner:x};function T(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:I,forEach:function(e,t,r){I(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return I(e,(function(){t++})),t},toArray:function(e){return I(e,(function(e){return e}))||[]},only:function(e){if(!O(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=h,t.Fragment=o,t.Profiler=c,t.PureComponent=j,t.StrictMode=u,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B,t.act=T,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=b({},e.props),u=e.key,c=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,a=x.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(s in t)S.call(t,s)&&!R.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==i?i[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){i=Array(s);for(var l=0;l<s;l++)i[l]=arguments[l+2];o.children=i}return{$$typeof:r,type:e.type,key:u,ref:c,props:o,_owner:a}},t.createContext=function(e){return(e={$$typeof:i,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=g,t.createFactory=function(e){var t=g.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=O,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:$}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=P.transition;P.transition={};try{e()}finally{P.transition=t}},t.unstable_act=T,t.useCallback=function(e,t){return q.current.useCallback(e,t)},t.useContext=function(e){return q.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return q.current.useDeferredValue(e)},t.useEffect=function(e,t){return q.current.useEffect(e,t)},t.useId=function(){return q.current.useId()},t.useImperativeHandle=function(e,t,r){return q.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return q.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return q.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return q.current.useMemo(e,t)},t.useReducer=function(e,t,r){return q.current.useReducer(e,t,r)},t.useRef=function(e){return q.current.useRef(e)},t.useState=function(e){return q.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return q.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return q.current.useTransition()},t.version="18.3.1"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Z:()=>a,a:()=>c});var n=r(667294);const o={},u=n.createContext(o);function c(e){const t=n.useContext(u);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(u.Provider,{value:t},e.children)}}}]);