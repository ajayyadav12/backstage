/*! For license information please see fa984ba0.c54a964e.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[988469],{79328:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=t(824246),o=t(511151);const a={id:"plugin-catalog-node.placeholderresolverparams",title:"PlaceholderResolverParams",description:"API reference for PlaceholderResolverParams"},c=void 0,l={id:"reference/plugin-catalog-node.placeholderresolverparams",title:"PlaceholderResolverParams",description:"API reference for PlaceholderResolverParams",source:"@site/../docs/reference/plugin-catalog-node.placeholderresolverparams.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-node.placeholderresolverparams",permalink:"/docs/reference/plugin-catalog-node.placeholderresolverparams",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-catalog-node.placeholderresolverparams.md",tags:[],version:"current",frontMatter:{id:"plugin-catalog-node.placeholderresolverparams",title:"PlaceholderResolverParams",description:"API reference for PlaceholderResolverParams"}},u={},s=[];function i(e){const r={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-node",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-catalog-node"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-node.placeholderresolverparams",children:(0,n.jsx)(r.code,{children:"PlaceholderResolverParams"})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"export type PlaceholderResolverParams = {\n    key: string;\n    value: JsonValue;\n    baseUrl: string;\n    read: PlaceholderResolverRead;\n    resolveUrl: PlaceholderResolverResolveUrl;\n    emit: CatalogProcessorEmit;\n};\n"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"References:"})," ",(0,n.jsx)(r.a,{href:"/docs/reference/types.jsonvalue",children:"JsonValue"}),", ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-node.placeholderresolverread",children:"PlaceholderResolverRead"}),", ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-node.placeholderresolverresolveurl",children:"PlaceholderResolverResolveUrl"}),", ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-node.catalogprocessoremit",children:"CatalogProcessorEmit"})]})]})}function f(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}},371426:(e,r,t)=>{var n=t(827378),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function s(e,r,t){var n,a={},s=null,i=null;for(n in void 0!==t&&(s=""+t),void 0!==r.key&&(s=""+r.key),void 0!==r.ref&&(i=r.ref),r)c.call(r,n)&&!u.hasOwnProperty(n)&&(a[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===a[n]&&(a[n]=r[n]);return{$$typeof:o,type:e,key:s,ref:i,props:a,_owner:l.current}}r.Fragment=a,r.jsx=s,r.jsxs=s},541535:(e,r)=>{var t=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),i=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,m={};function v(e,r,t){this.props=e,this.context=r,this.refs=m,this.updater=t||y}function _(){}function g(e,r,t){this.props=e,this.context=r,this.refs=m,this.updater=t||y}v.prototype.isReactComponent={},v.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=v.prototype;var b=g.prototype=new _;b.constructor=g,h(b,v.prototype),b.isPureReactComponent=!0;var R=Array.isArray,P=Object.prototype.hasOwnProperty,j={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function x(e,r,n){var o,a={},c=null,l=null;if(null!=r)for(o in void 0!==r.ref&&(l=r.ref),void 0!==r.key&&(c=""+r.key),r)P.call(r,o)&&!S.hasOwnProperty(o)&&(a[o]=r[o]);var u=arguments.length-2;if(1===u)a.children=n;else if(1<u){for(var s=Array(u),i=0;i<u;i++)s[i]=arguments[i+2];a.children=s}if(e&&e.defaultProps)for(o in u=e.defaultProps)void 0===a[o]&&(a[o]=u[o]);return{$$typeof:t,type:e,key:c,ref:l,props:a,_owner:j.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var E=/\/+/g;function w(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function C(e,r,o,a,c){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var u=!1;if(null===e)u=!0;else switch(l){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case t:case n:u=!0}}if(u)return c=c(u=e),e=""===a?"."+w(u,0):a,R(c)?(o="",null!=e&&(o=e.replace(E,"$&/")+"/"),C(c,r,o,"",(function(e){return e}))):null!=c&&(k(c)&&(c=function(e,r){return{$$typeof:t,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(c,o+(!c.key||u&&u.key===c.key?"":(""+c.key).replace(E,"$&/")+"/")+e)),r.push(c)),1;if(u=0,a=""===a?".":a+":",R(e))for(var s=0;s<e.length;s++){var i=a+w(l=e[s],s);u+=C(l,r,o,i,c)}else if(i=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof i)for(e=i.call(e),s=0;!(l=e.next()).done;)u+=C(l=l.value,r,o,i=a+w(l,s++),c);else if("object"===l)throw r=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return u}function $(e,r,t){if(null==e)return e;var n=[],o=0;return C(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function O(e){if(-1===e._status){var r=e._result;(r=r()).then((function(r){0!==e._status&&-1!==e._status||(e._status=1,e._result=r)}),(function(r){0!==e._status&&-1!==e._status||(e._status=2,e._result=r)})),-1===e._status&&(e._status=0,e._result=r)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},U={transition:null},T={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:U,ReactCurrentOwner:j};function A(){throw Error("act(...) is not supported in production builds of React.")}r.Children={map:$,forEach:function(e,r,t){$(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return $(e,(function(){r++})),r},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!k(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=v,r.Fragment=o,r.Profiler=c,r.PureComponent=g,r.StrictMode=a,r.Suspense=i,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,r.act=A,r.cloneElement=function(e,r,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),a=e.key,c=e.ref,l=e._owner;if(null!=r){if(void 0!==r.ref&&(c=r.ref,l=j.current),void 0!==r.key&&(a=""+r.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in r)P.call(r,s)&&!S.hasOwnProperty(s)&&(o[s]=void 0===r[s]&&void 0!==u?u[s]:r[s])}var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){u=Array(s);for(var i=0;i<s;i++)u[i]=arguments[i+2];o.children=u}return{$$typeof:t,type:e.type,key:a,ref:c,props:o,_owner:l}},r.createContext=function(e){return(e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},r.createElement=x,r.createFactory=function(e){var r=x.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:s,render:e}},r.isValidElement=k,r.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:O}},r.memo=function(e,r){return{$$typeof:f,type:e,compare:void 0===r?null:r}},r.startTransition=function(e){var r=U.transition;U.transition={};try{e()}finally{U.transition=r}},r.unstable_act=A,r.useCallback=function(e,r){return I.current.useCallback(e,r)},r.useContext=function(e){return I.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return I.current.useDeferredValue(e)},r.useEffect=function(e,r){return I.current.useEffect(e,r)},r.useId=function(){return I.current.useId()},r.useImperativeHandle=function(e,r,t){return I.current.useImperativeHandle(e,r,t)},r.useInsertionEffect=function(e,r){return I.current.useInsertionEffect(e,r)},r.useLayoutEffect=function(e,r){return I.current.useLayoutEffect(e,r)},r.useMemo=function(e,r){return I.current.useMemo(e,r)},r.useReducer=function(e,r,t){return I.current.useReducer(e,r,t)},r.useRef=function(e){return I.current.useRef(e)},r.useState=function(e){return I.current.useState(e)},r.useSyncExternalStore=function(e,r,t){return I.current.useSyncExternalStore(e,r,t)},r.useTransition=function(){return I.current.useTransition()},r.version="18.3.1"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Z:()=>l,a:()=>c});var n=t(667294);const o={},a=n.createContext(o);function c(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);