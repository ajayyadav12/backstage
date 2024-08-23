/*! For license information please see fa583ecd.cf3bc562.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[468552],{370666:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>u,toc:()=>c});var r=n(824246),o=n(511151);const a={id:"dry-run-testing",title:"Dry Run Testing",description:"How to enable and implement dry run testing in actions"},i=void 0,u={id:"features/software-templates/dry-run-testing",title:"Dry Run Testing",description:"How to enable and implement dry run testing in actions",source:"@site/../docs/features/software-templates/dry-run-testing.md",sourceDirName:"features/software-templates",slug:"/features/software-templates/dry-run-testing",permalink:"/docs/features/software-templates/dry-run-testing",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/software-templates/dry-run-testing.md",tags:[],version:"current",frontMatter:{id:"dry-run-testing",title:"Dry Run Testing",description:"How to enable and implement dry run testing in actions"},sidebar:"docs",previous:{title:"Migrating to v1beta3 templates",permalink:"/docs/features/software-templates/migrating-from-v1beta2-to-v1beta3"},next:{title:"Overview",permalink:"/docs/features/search/"}},s={},c=[{value:"Enabling dry run testing",id:"enabling-dry-run-testing",level:2},{value:"Adding handling for dry run",id:"adding-handling-for-dry-run",level:2},{value:"Testing dry run handling",id:"testing-dry-run-handling",level:2}];function l(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Scaffolder templates can be tested using the dry run feature of scaffolder actions. This allows you to simulate the effects of running a scaffolder action without making any actual changes to your environment, for example creating a webhook in Github. Once dry run is enabled in the scaffolder action, you can add handling to actions you use in your scaffolder templates to define how an action should operate in a dry run scenario."}),"\n",(0,r.jsx)(t.h2,{id:"enabling-dry-run-testing",children:"Enabling dry run testing"}),"\n",(0,r.jsxs)(t.p,{children:["To enable dry run for your scaffolder action you need to add ",(0,r.jsx)(t.code,{children:"supportsDryRun: true"})," to the configuration object of ",(0,r.jsx)(t.code,{children:"createTemplateAction"})," in the function where the behavior of your action is defined:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"export function exampleAction() {\n  return createTemplateAction<{\n    example: string;\n  }>({\n    id: 'action:example',\n    description: 'Example action',\n    schema: {\n      input: {\n        type: 'object',\n        properties: {\n          example: {\n            title: 'example',\n            type: 'string',\n          },\n        },\n      },\n    },\n    supportsDryRun: true,\n    async handler(ctx) {\n      ...\n    },\n  });\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"adding-handling-for-dry-run",children:"Adding handling for dry run"}),"\n",(0,r.jsxs)(t.p,{children:["To add handling for dry run functionality you need to add a check for ",(0,r.jsx)(t.code,{children:"ctx.isDryRun"})," inside the handler of the configuration object which is being passed into ",(0,r.jsx)(t.code,{children:"createTemplateAction"})," in the function where the behavior of your action is defined. Once the check is successful, you can perform the desired actions expected in a dry run, e.g. outputting non-sensitive inputs."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"async handler(ctx) {\n      ...\n\n      // If this is a dry run, log and return\n      if (ctx.isDryRun) {\n        ctx.logger.info(`Dry run complete`);\n        return;\n      }\n\n      ...\n    },\n"})}),"\n",(0,r.jsx)(t.h2,{id:"testing-dry-run-handling",children:"Testing dry run handling"}),"\n",(0,r.jsx)(t.p,{children:"You will also need to add tests for the dry run handling, for example:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"  it('should not perform action during dry run', async () => {\n    ...\n\n    // Create the context object with the necessary properties for a dry run\n    const ctx = {\n      ...mockContext,\n      isDryRun: true,\n      input: {\n        ...\n      },\n    };\n\n    // Call the handler with the context\n    await action.handler(ctx);\n\n    expect(...);\n  });\n"})})]})}function f(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},371426:(e,t,n)=>{var r=n(827378),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,u=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,a={},c=null,l=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,r)&&!s.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:c,ref:l,props:a,_owner:u.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),s=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),p=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,m={};function g(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||y}function b(){}function v(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||y}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=g.prototype;var _=v.prototype=new b;_.constructor=v,h(_,g.prototype),_.isPureReactComponent=!0;var x=Array.isArray,w=Object.prototype.hasOwnProperty,j={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,r){var o,a={},i=null,u=null;if(null!=t)for(o in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(i=""+t.key),t)w.call(t,o)&&!k.hasOwnProperty(o)&&(a[o]=t[o]);var s=arguments.length-2;if(1===s)a.children=r;else if(1<s){for(var c=Array(s),l=0;l<s;l++)c[l]=arguments[l+2];a.children=c}if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===a[o]&&(a[o]=s[o]);return{$$typeof:n,type:e,key:i,ref:u,props:a,_owner:j.current}}function R(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var E=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function $(e,t,o,a,i){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var s=!1;if(null===e)s=!0;else switch(u){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return i=i(s=e),e=""===a?"."+C(s,0):a,x(i)?(o="",null!=e&&(o=e.replace(E,"$&/")+"/"),$(i,t,o,"",(function(e){return e}))):null!=i&&(R(i)&&(i=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(E,"$&/")+"/")+e)),t.push(i)),1;if(s=0,a=""===a?".":a+":",x(e))for(var c=0;c<e.length;c++){var l=a+C(u=e[c],c);s+=$(u,t,o,l,i)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),c=0;!(u=e.next()).done;)s+=$(u=u.value,t,o,l=a+C(u,c++),i);else if("object"===u)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function O(e,t,n){if(null==e)return e;var r=[],o=0;return $(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function T(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var D={current:null},P={transition:null},I={ReactCurrentDispatcher:D,ReactCurrentBatchConfig:P,ReactCurrentOwner:j};function A(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:O,forEach:function(e,t,n){O(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return O(e,(function(){t++})),t},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!R(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=g,t.Fragment=o,t.Profiler=i,t.PureComponent=v,t.StrictMode=a,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,t.act=A,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),a=e.key,i=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,u=j.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)w.call(t,c)&&!k.hasOwnProperty(c)&&(o[c]=void 0===t[c]&&void 0!==s?s[c]:t[c])}var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){s=Array(c);for(var l=0;l<c;l++)s[l]=arguments[l+2];o.children=s}return{$$typeof:n,type:e.type,key:a,ref:i,props:o,_owner:u}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=R,t.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:T}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=P.transition;P.transition={};try{e()}finally{P.transition=t}},t.unstable_act=A,t.useCallback=function(e,t){return D.current.useCallback(e,t)},t.useContext=function(e){return D.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return D.current.useDeferredValue(e)},t.useEffect=function(e,t){return D.current.useEffect(e,t)},t.useId=function(){return D.current.useId()},t.useImperativeHandle=function(e,t,n){return D.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return D.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return D.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return D.current.useMemo(e,t)},t.useReducer=function(e,t,n){return D.current.useReducer(e,t,n)},t.useRef=function(e){return D.current.useRef(e)},t.useState=function(e){return D.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return D.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return D.current.useTransition()},t.version="18.3.1"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>u,a:()=>i});var r=n(667294);const o={},a=r.createContext(o);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function u(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);