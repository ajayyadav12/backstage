/*! For license information please see 4bf92876.629f8b89.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[160861],{997457:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(824246),i=t(511151);const o={id:"writing",title:"Writing Backstage Configuration Files",description:"Documentation on Writing Backstage Configuration Files"},a=void 0,l={id:"conf/writing",title:"Writing Backstage Configuration Files",description:"Documentation on Writing Backstage Configuration Files",source:"@site/../docs/conf/writing.md",sourceDirName:"conf",slug:"/conf/writing",permalink:"/docs/conf/writing",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/conf/writing.md",tags:[],version:"current",frontMatter:{id:"writing",title:"Writing Backstage Configuration Files",description:"Documentation on Writing Backstage Configuration Files"},sidebar:"docs",previous:{title:"Reading Backstage Configuration",permalink:"/docs/conf/reading"},next:{title:"Defining Configuration for your Plugin",permalink:"/docs/conf/defining"}},s={},c=[{value:"File Format",id:"file-format",level:2},{value:"Environment Variable Overrides",id:"environment-variable-overrides",level:2},{value:"Configuration Files",id:"configuration-files",level:2},{value:"Includes and Dynamic Data",id:"includes-and-dynamic-data",level:2},{value:"Env Includes",id:"env-includes",level:3},{value:"File Includes",id:"file-includes",level:3},{value:"Including Files",id:"including-files",level:3},{value:"Environment Variable Substitution",id:"environment-variable-substitution",level:2},{value:"Combining Includes and Environment Variable Substitution",id:"combining-includes-and-environment-variable-substitution",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"file-format",children:"File Format"}),"\n",(0,r.jsxs)(n.p,{children:["Configuration is stored in YAML format in ",(0,r.jsx)(n.code,{children:"app-config.yaml"})," files. This\nconfiguration is shared between the frontend and backend and it looks something\nlike this:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"app:\n  title: Backstage Example App\n  baseUrl: http://localhost:3000\n\nbackend:\n  listen: 0.0.0.0:7007\n  baseUrl: http://localhost:7007\n\norganization:\n  name: CNCF\n\nproxy:\n  /my/api:\n    target: https://example.com/api/\n    changeOrigin: true\n    pathRewrite:\n      ^/proxy/my/api/: /\n"})}),"\n",(0,r.jsx)(n.p,{children:"Configuration files are typically checked in and stored in the repo that houses\nthe rest of the Backstage application."}),"\n",(0,r.jsx)(n.p,{children:"The particular configuration that is available to each Backstage app depends on\nwhat plugins and packages are installed. To view the configuration reference for\nyour own project, including what configuration keys available and whether they\nare needed by the frontend, use the following command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"yarn backstage-cli config:docs\n"})}),"\n",(0,r.jsx)(n.h2,{id:"environment-variable-overrides",children:"Environment Variable Overrides"}),"\n",(0,r.jsxs)(n.p,{children:["Individual configuration values can be overridden using environment variables\nprefixed with ",(0,r.jsx)(n.code,{children:"APP_CONFIG_"}),". Everything following that prefix in the environment\nvariable name will be used as the config key, with ",(0,r.jsx)(n.code,{children:"_"})," replaced by ",(0,r.jsx)(n.code,{children:"."}),". For\nexample, to override the ",(0,r.jsx)(n.code,{children:"app.baseUrl"})," value, set the ",(0,r.jsx)(n.code,{children:"APP_CONFIG_app_baseUrl"}),"\nenvironment variable to the desired value."]}),"\n",(0,r.jsxs)(n.p,{children:["The value of the environment variable is parsed as JSON, but it will fall back\nto being interpreted as a string if it fails to parse. Note that if you for\nexample want to pass on the string ",(0,r.jsx)(n.code,{children:'"false"'}),", you need to wrap it in double\nquotes, e.g. ",(0,r.jsx)(n.code,{children:"export APP_CONFIG_example='\"false\"'"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"While it may be tempting to use environment variable overrides for supplying a\nlot of configuration values, we recommend using them sparingly. Try to stick to\nusing configuration files, and only use environment variables for things like\nreusing deployment artifacts across staging and production environments."}),"\n",(0,r.jsxs)(n.p,{children:["Note that environment variables work for frontend configuration too. They are\npicked up by the serve tasks of ",(0,r.jsx)(n.code,{children:"@backstage/cli"})," for local development, and are\ninjected by the entrypoint of the nginx container serving the frontend in a\nproduction build."]}),"\n",(0,r.jsx)(n.h2,{id:"configuration-files",children:"Configuration Files"}),"\n",(0,r.jsxs)(n.p,{children:["It is possible to have multiple configuration files (bundled and/or remote*),\nboth to support different environments, but also to define configuration that is\nlocal to specific packages. The configuration files to load are selected using a\n",(0,r.jsx)(n.code,{children:"--config <local-path|url>"})," flag, and it is possible to load any number of\nfiles. Paths are relative to the working directory of the executed process, for\nexample ",(0,r.jsx)(n.code,{children:"package/backend"}),". This means that to select a config file in the repo\nroot when running the backend, you would use ",(0,r.jsx)(n.code,{children:"--config ../../my-config.yaml"}),",\nand for config file on a config server you would use\n",(0,r.jsx)(n.code,{children:"--config https://some.domain.io/app-config.yaml"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note"}),": In case URLs are passed, it is also needed to set the remote option in\nthe loadBackendConfig call."]}),"\n",(0,r.jsxs)(n.p,{children:["If no ",(0,r.jsx)(n.code,{children:"config"})," flags are specified, the default behavior is to load\n",(0,r.jsx)(n.code,{children:"app-config.yaml"})," and, if it exists, ",(0,r.jsx)(n.code,{children:"app-config.local.yaml"})," from the repo root.\nIn the provided project setup, ",(0,r.jsx)(n.code,{children:"app-config.local.yaml"})," is ",(0,r.jsx)(n.code,{children:".gitignore"}),"'d, making\nit a good place to add config overrides and secrets for local development."]}),"\n",(0,r.jsxs)(n.p,{children:["Note that if any config flags are provided, the default ",(0,r.jsx)(n.code,{children:"app-config.yaml"})," files\nare NOT loaded. To include them you need to explicitly include them with a flag,\nfor example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"yarn start --config ../../app-config.yaml --config ../../app-config.staging.yaml --config https://some.domain.io/app-config.yaml\n"})}),"\n",(0,r.jsx)(n.p,{children:"All loaded configuration files are merged together using the following rules:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Configurations have different priority, higher priority means you replace\nvalues from configurations with lower priority."}),"\n",(0,r.jsx)(n.li,{children:"Primitive values are completely replaced, as are arrays and all of their\ncontents."}),"\n",(0,r.jsx)(n.li,{children:"Objects are merged together deeply, meaning that if any of the included\nconfigs contain a value for a given path, it will be found."}),"\n",(0,r.jsxs)(n.li,{children:["A ",(0,r.jsx)(n.code,{children:"null"})," value in a config file will be treated as an explicit absence of\nconfiguration. This means that the reading will not fall back to a lower priority\nconfig, but it will still be treated as if the configuration was not present."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The priority of the configurations is determined by the following rules, in\norder:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Configuration from the ",(0,r.jsx)(n.code,{children:"APP_CONFIG_"})," environment variables has the highest\npriority, followed by files."]}),"\n",(0,r.jsx)(n.li,{children:"Files loaded with config flags are ordered by priority, where the last flag\nhas the highest priority."}),"\n",(0,r.jsxs)(n.li,{children:["If no config flags are provided, ",(0,r.jsx)(n.code,{children:"app-config.local.yaml"})," has higher priority\nthan ",(0,r.jsx)(n.code,{children:"app-config.yaml"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"includes-and-dynamic-data",children:"Includes and Dynamic Data"}),"\n",(0,r.jsxs)(n.p,{children:["Includes are supported via special data loading keys that are prefixed with ",(0,r.jsx)(n.code,{children:"$"}),",\nwhich in turn provide a number of different ways to read in data. To load in an\nexternal configuration value, supply an object with one of the special include\nkeys, for example ",(0,r.jsx)(n.code,{children:"$env"})," or ",(0,r.jsx)(n.code,{children:"$file"}),". A full list of supported include keys can\nbe found below. For example, the following will read the config key\n",(0,r.jsx)(n.code,{children:"backend.mySecretKey"})," from the environment variable ",(0,r.jsx)(n.code,{children:"MY_SECRET_KEY"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"backend:\n  mySecretKey:\n    $env: MY_SECRET_KEY\n"})}),"\n",(0,r.jsxs)(n.p,{children:["With the above configuration, calling ",(0,r.jsx)(n.code,{children:"config.getString('backend.mySecretKey')"}),"\nwill return the value of the environment variable ",(0,r.jsx)(n.code,{children:"MY_SECRET_KEY"})," when the\nbackend started up. All includes are loaded at startup, so changing the contents\nof files or environment variables will not be reflected at runtime."]}),"\n",(0,r.jsx)(n.p,{children:"Below is a list of the currently supported methods for loading includes."}),"\n",(0,r.jsx)(n.h3,{id:"env-includes",children:"Env Includes"}),"\n",(0,r.jsxs)(n.p,{children:["This reads a string value from an environment variable. For example, the\nfollowing configuration loads the string value from the ",(0,r.jsx)(n.code,{children:"MY_SECRET"})," environment\nvariable."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"$env: MY_SECRET\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Note however, that it's often more convenient to use\n",(0,r.jsx)(n.a,{href:"#environment-variable-substitution",children:"environment variable substitution"})," instead."]}),"\n",(0,r.jsx)(n.h3,{id:"file-includes",children:"File Includes"}),"\n",(0,r.jsxs)(n.p,{children:["This reads a string value from the entire contents of a text file. The file path\nis relative to the source config file. For example, the following reads the\ncontents of ",(0,r.jsx)(n.code,{children:"my-secret.txt"})," relative to the config file itself:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"$file: ./my-secret.txt\n"})}),"\n",(0,r.jsx)(n.h3,{id:"including-files",children:"Including Files"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"$include"})," keyword can be used to load configuration values from an external\nfile. It's able to load and parse data from ",(0,r.jsx)(n.code,{children:".json"}),", ",(0,r.jsx)(n.code,{children:".yml"}),", and ",(0,r.jsx)(n.code,{children:".yaml"})," files.\nIt's also possible to include a URL fragment (",(0,r.jsx)(n.code,{children:"#"}),") to point to a value at the\ngiven path in the file, using a dot-separated list of keys."]}),"\n",(0,r.jsxs)(n.p,{children:["For example, the following would read ",(0,r.jsx)(n.code,{children:"my-secret-key"})," from ",(0,r.jsx)(n.code,{children:"my-secrets.json"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"$include: ./my-secrets.json#deployment.key\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Example ",(0,r.jsx)(n.code,{children:"my-secrets.json"})," file:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "deployment": {\n    "key": "my-secret-key"\n  }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"environment-variable-substitution",children:"Environment Variable Substitution"}),"\n",(0,r.jsxs)(n.p,{children:["Configuration files support environment variable substitution via a ",(0,r.jsx)(n.code,{children:"${MY_VAR}"}),"\nsyntax. For example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"app:\n  baseUrl: https://${HOST}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Note that all environment variables must be available, or the entire\nconfiguration value will evaluate to ",(0,r.jsx)(n.code,{children:"undefined"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The substitution syntax can be escaped using ",(0,r.jsx)(n.code,{children:"$${...}"}),", which will be resolved\nas ",(0,r.jsx)(n.code,{children:"${...}"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Parameter substitution syntax (e.g. ",(0,r.jsx)(n.code,{children:"${MY_VAR:-default-value}"}),") is also\nsupported to provide a default or fallback value for a given environment\nvariable if it is unset, or is declared but has no value. For example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"app:\n  baseUrl: https://${HOST:-localhost:3000}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In the above example, when ",(0,r.jsx)(n.code,{children:"HOST"})," is unset or has no value, it will be\nsubstituted with ",(0,r.jsx)(n.code,{children:"localhost:3000"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"combining-includes-and-environment-variable-substitution",children:"Combining Includes and Environment Variable Substitution"}),"\n",(0,r.jsx)(n.p,{children:"The Includes and Environment Variable Substitutions can be combined to do\nsomething like read a secrets configuration for a specific environment. For\nexample:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"integrations:\n  github:\n    - host: github.com\n      apps:\n        - $include: secrets.${BACKSTAGE_ENVIRONMENT}.yaml\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Example ",(0,r.jsx)(n.code,{children:"secrets.prod.yaml"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"appId: 1\nwebhookUrl: https://smee.io/foo\nclientId: someGithubAppClientId\nclientSecret: someGithubAppClientSecret\nwebhookSecret: someWebhookSecret\nprivateKey: |\n  -----BEGIN RSA PRIVATE KEY-----\n  SomeRsaPrivateKeySecurelyStored\n  -----END RSA PRIVATE KEY-----\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Warning: Sensitive information, such as private keys, should not be hard coded"}),". We recommend that this entire file should be a secret and stored as such in a secure storage solution like Vault, to ensure they are neither exposed nor misused. This example key part only shows the format on how to use the yaml | syntax to make sure that the key is valid."]})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},371426:(e,n,t)=>{var r=t(827378),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,o={},c=null,d=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)a.call(n,r)&&!s.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:i,type:e,key:c,ref:d,props:o,_owner:l.current}}n.Fragment=o,n.jsx=c,n.jsxs=c},541535:(e,n)=>{var t=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),h=Symbol.iterator;var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function y(e,n,t){this.props=e,this.context=n,this.refs=g,this.updater=t||p}function v(){}function x(e,n,t){this.props=e,this.context=n,this.refs=g,this.updater=t||p}y.prototype.isReactComponent={},y.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=y.prototype;var b=x.prototype=new v;b.constructor=x,m(b,y.prototype),b.isPureReactComponent=!0;var j=Array.isArray,w=Object.prototype.hasOwnProperty,k={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function S(e,n,r){var i,o={},a=null,l=null;if(null!=n)for(i in void 0!==n.ref&&(l=n.ref),void 0!==n.key&&(a=""+n.key),n)w.call(n,i)&&!_.hasOwnProperty(i)&&(o[i]=n[i]);var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){for(var c=Array(s),d=0;d<s;d++)c[d]=arguments[d+2];o.children=c}if(e&&e.defaultProps)for(i in s=e.defaultProps)void 0===o[i]&&(o[i]=s[i]);return{$$typeof:t,type:e,key:a,ref:l,props:o,_owner:k.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var C=/\/+/g;function I(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function R(e,n,i,o,a){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case t:case r:s=!0}}if(s)return a=a(s=e),e=""===o?"."+I(s,0):o,j(a)?(i="",null!=e&&(i=e.replace(C,"$&/")+"/"),R(a,n,i,"",(function(e){return e}))):null!=a&&(E(a)&&(a=function(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(a,i+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(C,"$&/")+"/")+e)),n.push(a)),1;if(s=0,o=""===o?".":o+":",j(e))for(var c=0;c<e.length;c++){var d=o+I(l=e[c],c);s+=R(l,n,i,d,a)}else if(d=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof d)for(e=d.call(e),c=0;!(l=e.next()).done;)s+=R(l=l.value,n,i,d=o+I(l,c++),a);else if("object"===l)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return s}function T(e,n,t){if(null==e)return e;var r=[],i=0;return R(e,r,"","",(function(e){return n.call(t,e,i++)})),r}function $(e){if(-1===e._status){var n=e._result;(n=n()).then((function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n)}),(function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n)})),-1===e._status&&(e._status=0,e._result=n)}if(1===e._status)return e._result.default;throw e._result}var F={current:null},N={transition:null},O={ReactCurrentDispatcher:F,ReactCurrentBatchConfig:N,ReactCurrentOwner:k};function P(){throw Error("act(...) is not supported in production builds of React.")}n.Children={map:T,forEach:function(e,n,t){T(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return T(e,(function(){n++})),n},toArray:function(e){return T(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=y,n.Fragment=i,n.Profiler=a,n.PureComponent=x,n.StrictMode=o,n.Suspense=d,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O,n.act=P,n.cloneElement=function(e,n,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=m({},e.props),o=e.key,a=e.ref,l=e._owner;if(null!=n){if(void 0!==n.ref&&(a=n.ref,l=k.current),void 0!==n.key&&(o=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in n)w.call(n,c)&&!_.hasOwnProperty(c)&&(i[c]=void 0===n[c]&&void 0!==s?s[c]:n[c])}var c=arguments.length-2;if(1===c)i.children=r;else if(1<c){s=Array(c);for(var d=0;d<c;d++)s[d]=arguments[d+2];i.children=s}return{$$typeof:t,type:e.type,key:o,ref:a,props:i,_owner:l}},n.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},n.createElement=S,n.createFactory=function(e){var n=S.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:c,render:e}},n.isValidElement=E,n.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:$}},n.memo=function(e,n){return{$$typeof:u,type:e,compare:void 0===n?null:n}},n.startTransition=function(e){var n=N.transition;N.transition={};try{e()}finally{N.transition=n}},n.unstable_act=P,n.useCallback=function(e,n){return F.current.useCallback(e,n)},n.useContext=function(e){return F.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return F.current.useDeferredValue(e)},n.useEffect=function(e,n){return F.current.useEffect(e,n)},n.useId=function(){return F.current.useId()},n.useImperativeHandle=function(e,n,t){return F.current.useImperativeHandle(e,n,t)},n.useInsertionEffect=function(e,n){return F.current.useInsertionEffect(e,n)},n.useLayoutEffect=function(e,n){return F.current.useLayoutEffect(e,n)},n.useMemo=function(e,n){return F.current.useMemo(e,n)},n.useReducer=function(e,n,t){return F.current.useReducer(e,n,t)},n.useRef=function(e){return F.current.useRef(e)},n.useState=function(e){return F.current.useState(e)},n.useSyncExternalStore=function(e,n,t){return F.current.useSyncExternalStore(e,n,t)},n.useTransition=function(){return F.current.useTransition()},n.version="18.3.1"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>a});var r=t(667294);const i={},o=r.createContext(i);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);