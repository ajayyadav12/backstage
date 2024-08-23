/*! For license information please see fb77e175.4ffa2b55.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[327622],{433837:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>f,frontMatter:()=>u,metadata:()=>s,toc:()=>i});var n=r(824246),o=r(511151);const u={id:"plugin-scaffolder-react.layoutoptions",title:"LayoutOptions",description:"API reference for LayoutOptions"},c=void 0,s={id:"reference/plugin-scaffolder-react.layoutoptions",title:"LayoutOptions",description:"API reference for LayoutOptions",source:"@site/../docs/reference/plugin-scaffolder-react.layoutoptions.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-react.layoutoptions",permalink:"/docs/reference/plugin-scaffolder-react.layoutoptions",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-scaffolder-react.layoutoptions.md",tags:[],version:"current",frontMatter:{id:"plugin-scaffolder-react.layoutoptions",title:"LayoutOptions",description:"API reference for LayoutOptions"}},a={},i=[{value:"Properties",id:"properties",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-react",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-scaffolder-react"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-react.layoutoptions",children:(0,n.jsx)(t.code,{children:"LayoutOptions"})})]}),"\n",(0,n.jsx)(t.p,{children:"The type of layouts that is passed to the TemplateForms"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"export interface LayoutOptions<P = any> \n"})}),"\n",(0,n.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Property"}),(0,n.jsx)(t.th,{children:"Modifiers"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-react.layoutoptions.component",children:"component"})}),(0,n.jsx)(t.td,{}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-react.layouttemplate",children:"LayoutTemplate"}),"<P>"]}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-react.layoutoptions.name",children:"name"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{})]})]})]})]})}function f(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},371426:(e,t,r)=>{var n=r(827378),o=Symbol.for("react.element"),u=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,r){var n,u={},i=null,l=null;for(n in void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(l=t.ref),t)c.call(t,n)&&!a.hasOwnProperty(n)&&(u[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===u[n]&&(u[n]=t[n]);return{$$typeof:o,type:e,key:i,ref:l,props:u,_owner:s.current}}t.Fragment=u,t.jsx=i,t.jsxs=i},541535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),a=Symbol.for("react.context"),i=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,m={};function _(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||y}function b(){}function v(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||y}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=_.prototype;var j=v.prototype=new b;j.constructor=v,h(j,_.prototype),j.isPureReactComponent=!0;var x=Array.isArray,g=Object.prototype.hasOwnProperty,S={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,n){var o,u={},c=null,s=null;if(null!=t)for(o in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(c=""+t.key),t)g.call(t,o)&&!k.hasOwnProperty(o)&&(u[o]=t[o]);var a=arguments.length-2;if(1===a)u.children=n;else if(1<a){for(var i=Array(a),l=0;l<a;l++)i[l]=arguments[l+2];u.children=i}if(e&&e.defaultProps)for(o in a=e.defaultProps)void 0===u[o]&&(u[o]=a[o]);return{$$typeof:r,type:e,key:c,ref:s,props:u,_owner:S.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var O=/\/+/g;function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,o,u,c){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var a=!1;if(null===e)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case r:case n:a=!0}}if(a)return c=c(a=e),e=""===u?"."+R(a,0):u,x(c)?(o="",null!=e&&(o=e.replace(O,"$&/")+"/"),C(c,t,o,"",(function(e){return e}))):null!=c&&(w(c)&&(c=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,o+(!c.key||a&&a.key===c.key?"":(""+c.key).replace(O,"$&/")+"/")+e)),t.push(c)),1;if(a=0,u=""===u?".":u+":",x(e))for(var i=0;i<e.length;i++){var l=u+R(s=e[i],i);a+=C(s,t,o,l,c)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),i=0;!(s=e.next()).done;)a+=C(s=s.value,t,o,l=u+R(s,i++),c);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function P(e,t,r){if(null==e)return e;var n=[],o=0;return C(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function $(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var L={current:null},I={transition:null},T={ReactCurrentDispatcher:L,ReactCurrentBatchConfig:I,ReactCurrentOwner:S};function A(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:P,forEach:function(e,t,r){P(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return P(e,(function(){t++})),t},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=_,t.Fragment=o,t.Profiler=c,t.PureComponent=v,t.StrictMode=u,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.act=A,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),u=e.key,c=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,s=S.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(i in t)g.call(t,i)&&!k.hasOwnProperty(i)&&(o[i]=void 0===t[i]&&void 0!==a?a[i]:t[i])}var i=arguments.length-2;if(1===i)o.children=n;else if(1<i){a=Array(i);for(var l=0;l<i;l++)a[l]=arguments[l+2];o.children=a}return{$$typeof:r,type:e.type,key:u,ref:c,props:o,_owner:s}},t.createContext=function(e){return(e={$$typeof:a,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:i,render:e}},t.isValidElement=w,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:$}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}},t.unstable_act=A,t.useCallback=function(e,t){return L.current.useCallback(e,t)},t.useContext=function(e){return L.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return L.current.useDeferredValue(e)},t.useEffect=function(e,t){return L.current.useEffect(e,t)},t.useId=function(){return L.current.useId()},t.useImperativeHandle=function(e,t,r){return L.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return L.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return L.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return L.current.useMemo(e,t)},t.useReducer=function(e,t,r){return L.current.useReducer(e,t,r)},t.useRef=function(e){return L.current.useRef(e)},t.useState=function(e){return L.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return L.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return L.current.useTransition()},t.version="18.3.1"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Z:()=>s,a:()=>c});var n=r(667294);const o={},u=n.createContext(o);function c(e){const t=n.useContext(u);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(u.Provider,{value:t},e.children)}}}]);