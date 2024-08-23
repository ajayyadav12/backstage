/*! For license information please see 9b952f2f.e58d96f2.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[476784],{997627:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var t=n(824246),o=n(511151);const i={id:"org--old",title:"Microsoft Entra Tenant Data",sidebar_label:"Org Data",description:"Importing users and groups from Microsoft Entra ID into Backstage"},a=void 0,s={id:"integrations/azure/org--old",title:"Microsoft Entra Tenant Data",description:"Importing users and groups from Microsoft Entra ID into Backstage",source:"@site/../docs/integrations/azure/org--old.md",sourceDirName:"integrations/azure",slug:"/integrations/azure/org--old",permalink:"/docs/integrations/azure/org--old",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/integrations/azure/org--old.md",tags:[],version:"current",frontMatter:{id:"org--old",title:"Microsoft Entra Tenant Data",sidebar_label:"Org Data",description:"Importing users and groups from Microsoft Entra ID into Backstage"}},l={},c=[{value:"Installation",id:"installation",level:2},{value:"Authenticating with Microsoft Graph",id:"authenticating-with-microsoft-graph",level:2},{value:"Local Development",id:"local-development",level:3},{value:"App Registration",id:"app-registration",level:3},{value:"Managed Identity",id:"managed-identity",level:3},{value:"Filtering imported Users and Groups",id:"filtering-imported-users-and-groups",level:2},{value:"Groups",id:"groups",level:3},{value:"Users",id:"users",level:3},{value:"User photos",id:"user-photos",level:3},{value:"Customizing Transformation",id:"customizing-transformation",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"No data",id:"no-data",level:3},{value:"Authentication / Token Errors",id:"authentication--token-errors",level:3},{value:"Error while reading users from Microsoft Graph: Authorization_RequestDenied - Insufficient privileges to complete the operation",id:"error-while-reading-users-from-microsoft-graph-authorization_requestdenied---insufficient-privileges-to-complete-the-operation",level:3}];function u(e){const r={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.admonition,{type:"info",children:(0,t.jsxs)(r.p,{children:["This documentation is written for the old backend which has been replaced by ",(0,t.jsx)(r.a,{href:"/docs/backend-system/",children:"the new backend system"}),", being the default since Backstage ",(0,t.jsx)(r.a,{href:"/docs/releases/v1.24.0",children:"version 1.24"}),". If have migrated to the new backend system, you may want to read ",(0,t.jsx)(r.a,{href:"/docs/integrations/azure/org",children:"its own article"})," instead.Otherwise, ",(0,t.jsx)(r.a,{href:"/docs/backend-system/building-backends/migrating",children:"consider migrating"}),"!"]})}),"\n",(0,t.jsx)(r.p,{children:"The Backstage catalog can be set up to ingest organizational data - users and\nteams - directly from a tenant in Microsoft Entra ID via the\nMicrosoft Graph API."}),"\n",(0,t.jsx)(r.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(r.p,{children:["The package is not installed by default, therefore you have to add ",(0,t.jsx)(r.code,{children:"@backstage/plugin-catalog-backend-module-msgraph"})," to your backend package."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",metastring:'title="From your Backstage root directory"',children:"yarn --cwd packages/backend add @backstage/plugin-catalog-backend-module-msgraph\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Next add the basic configuration to ",(0,t.jsx)(r.code,{children:"app-config.yaml"})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",metastring:'title="app-config.yaml"',children:"catalog:\n  providers:\n    microsoftGraphOrg:\n      default:\n        tenantId: ${AZURE_TENANT_ID}\n        user:\n          filter: accountEnabled eq true and userType eq 'member'\n        group:\n          filter: >\n            securityEnabled eq false\n            and mailEnabled eq true\n            and groupTypes/any(c:c+eq+'Unified')\n        schedule:\n          frequency: PT1H\n          timeout: PT50M\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Finally, register the plugin in ",(0,t.jsx)(r.code,{children:"catalog.ts"}),".\nFor large organizations, this plugin can take a long time, so be careful setting low frequency / timeouts and importing a large amount of users / groups for the first try."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",metastring:'title="packages/backend/src/plugins/catalog.ts"',children:"/* highlight-add-next-line */\nimport { MicrosoftGraphOrgEntityProvider } from '@backstage/plugin-catalog-backend-module-msgraph';\n\nexport default async function createPlugin(\n  env: PluginEnvironment,\n): Promise<Router> {\n  const builder = await CatalogBuilder.create(env);\n\n  /* highlight-add-start */\n  builder.addEntityProvider(\n    MicrosoftGraphOrgEntityProvider.fromConfig(env.config, {\n      logger: env.logger,\n      scheduler: env.scheduler,\n    }),\n  );\n  /* highlight-add-end */\n\n  // ..\n}\n"})}),"\n",(0,t.jsx)(r.h2,{id:"authenticating-with-microsoft-graph",children:"Authenticating with Microsoft Graph"}),"\n",(0,t.jsx)(r.h3,{id:"local-development",children:"Local Development"}),"\n",(0,t.jsxs)(r.p,{children:["For a local dev environment, it's recommended you have the Azure CLI or Azure PowerShell installed, and are logged in to those.\nAlternatively you can use VSCode with the Azure extension if you install ",(0,t.jsx)(r.code,{children:"@azure/identity-vscode"}),".\nWhen these are set up, the plugin will authenticate with the Microsoft Graph API without you needing to configure any credentials, or granting any special permissions.\nIf you can't do this, you'll have to create an App Registration."]}),"\n",(0,t.jsx)(r.h3,{id:"app-registration",children:"App Registration"}),"\n",(0,t.jsx)(r.p,{children:"If none of the other authentication methods work, you can create an app registration in the azure portal.\nBy default the graph plugin requires the following Application permissions (not Delegated) for Microsoft Graph:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.code,{children:"GroupMember.Read.All"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.code,{children:"User.Read.All"})}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"If your organization required Admin Consent for these permissions, that will need to be granted."}),"\n",(0,t.jsxs)(r.p,{children:["When authenticating with a ClientId/ClientSecret, you can either set the ",(0,t.jsx)(r.code,{children:"AZURE_TENANT_ID"}),", ",(0,t.jsx)(r.code,{children:"AZURE_CLIENT_ID"})," and ",(0,t.jsx)(r.code,{children:"AZURE_CLIENT_SECRET"})," environment variables, or specify the values in configuration"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:"microsoftGraphOrg:\n  default:\n    ##...\n    clientId: 9ef1aac6-b454-4e69-9cf5-7199df049281\n    clientSecret: REDACTED\n"})}),"\n",(0,t.jsxs)(r.p,{children:["To authenticate with a certificate rather than a client secret, you can set the ",(0,t.jsx)(r.code,{children:"AZURE_TENANT_ID"}),", ",(0,t.jsx)(r.code,{children:"AZURE_CLIENT_ID"})," and ",(0,t.jsx)(r.code,{children:"AZURE_CLIENT_CERTIFICATE_PATH"})," environments"]}),"\n",(0,t.jsx)(r.h3,{id:"managed-identity",children:"Managed Identity"}),"\n",(0,t.jsxs)(r.p,{children:["If deploying to resources that supports Managed Identity, and has identities configured (e.g. Azure App Services, Azure Container Apps), Managed Identity should be picked up without any additional configuration.\nIf your app has multiple managed identities, you may need to set the ",(0,t.jsx)(r.code,{children:"AZURE_CLIENT_ID"})," environment variable to tell Azure Identity which identity to use."]}),"\n",(0,t.jsxs)(r.p,{children:["To grant the managed identity the same permissions as mentioned in ",(0,t.jsx)(r.em,{children:"App Registration"})," above, ",(0,t.jsx)(r.a,{href:"https://docs.microsoft.com/en-us/azure/app-service/tutorial-connect-app-access-microsoft-graph-as-app-javascript?tabs=azure-powershell",children:"please follow this guide"})]}),"\n",(0,t.jsx)(r.h2,{id:"filtering-imported-users-and-groups",children:"Filtering imported Users and Groups"}),"\n",(0,t.jsxs)(r.p,{children:["By default, the plugin will import all users and groups from your directory.\nThis can be customized through ",(0,t.jsx)(r.a,{href:"https://learn.microsoft.com/en-us/graph/filter-query-parameter",children:"filters"})," and ",(0,t.jsx)(r.a,{href:"https://learn.microsoft.com/en-us/graph/search-query-parameter",children:"search"})," queries. Keep in mind that if you omit filters and search queries for the user or group properties, the plugin will automatically import all available users or groups."]}),"\n",(0,t.jsx)(r.h3,{id:"groups",children:"Groups"}),"\n",(0,t.jsxs)(r.p,{children:["A smaller set of groups can be obtained by configuring a search query or a filter.\nIf both ",(0,t.jsx)(r.code,{children:"filter"})," and ",(0,t.jsx)(r.code,{children:"search"})," are provided, then groups must match both to be ingested."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:'microsoftGraphOrg:\n  providerId:\n    group:\n      filter: securityEnabled eq false and mailEnabled eq true and groupTypes/any(c:c+eq+\'Unified\')\n      search: \'"description:One" AND ("displayName:Video" OR "displayName:Drive")\'\n'})}),"\n",(0,t.jsx)(r.p,{children:"In addition to these groups, one additional group will be created for your organization.\nAll imported groups will be a child of this group."}),"\n",(0,t.jsx)(r.h3,{id:"users",children:"Users"}),"\n",(0,t.jsxs)(r.p,{children:["There are two modes for importing users - You can import all user objects matching a ",(0,t.jsx)(r.code,{children:"filter"}),"."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:"microsoftGraphOrg:\n  providerId:\n    user:\n      filter: accountEnabled eq true and userType eq 'member'\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Alternatively you can import users that are members of specific groups.\nFor each group matching the ",(0,t.jsx)(r.code,{children:"search"})," and ",(0,t.jsx)(r.code,{children:"filter"})," query, each group member will be imported.\nOnly direct group members will be imported, not transient users."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:'microsoftGraphOrg:\n  providerId:\n    userGroupMember:\n      filter: "displayName eq \'Backstage Users\'"\n      search: \'"description:One" AND ("displayName:Video" OR "displayName:Drive")\'\n'})}),"\n",(0,t.jsx)(r.h3,{id:"user-photos",children:"User photos"}),"\n",(0,t.jsxs)(r.p,{children:["By default, the photos of users will be fetched and added to each user entity. For huge organizations this may be unfeasible, as it will take a ",(0,t.jsx)(r.em,{children:"very"})," long time, and can be disabled by setting ",(0,t.jsx)(r.code,{children:"loadPhotos"})," to ",(0,t.jsx)(r.code,{children:"false"}),":"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:"microsoftGraphOrg:\n  providerId:\n    user:\n      filter: ...\n      loadPhotos: false\n"})}),"\n",(0,t.jsx)(r.h2,{id:"customizing-transformation",children:"Customizing Transformation"}),"\n",(0,t.jsxs)(r.p,{children:["Ingested entities can be customized by providing custom transformers.\nThese can be used to completely replace the built in logic, or used to tweak it by using the default transformers (",(0,t.jsx)(r.code,{children:"defaultGroupTransformer"}),", ",(0,t.jsx)(r.code,{children:"defaultUserTransformer"})," and ",(0,t.jsx)(r.code,{children:"defaultOrganizationTransformer"}),"\nEntities can also be excluded from backstage by returning ",(0,t.jsx)(r.code,{children:"undefined"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["These Transformers are be registered when configuring ",(0,t.jsx)(r.code,{children:"MicrosoftGraphOrgEntityProvider"})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"builder.addEntityProvider(\n  MicrosoftGraphOrgEntityProvider.fromConfig(env.config, {\n    // ...\n    /* highlight-add-start */\n    groupTransformer: myGroupTransformer,\n    userTransformer: myUserTransformer,\n    organizationTransformer: myOrganizationTransformer,\n    /* highlight-add-end */\n  }),\n);\n"})}),"\n",(0,t.jsx)(r.p,{children:"When using custom transformers, you may want to customize the data returned.\nSeveral configuration options can be provided to tweak the Microsoft Graph query to get the data you need"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:"microsoftGraphOrg:\n  providerId:\n    user:\n      expand: manager\n    group:\n      expand: member\n      select: ['id', 'displayName', 'description']\n"})}),"\n",(0,t.jsx)(r.p,{children:"The following provides an example of each kind of transformer"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"import * as MicrosoftGraph from '@microsoft/microsoft-graph-types';\nimport {\n  defaultGroupTransformer,\n  defaultUserTransformer,\n  defaultOrganizationTransformer,\n} from '@backstage/plugin-catalog-backend-module-msgraph';\nimport { GroupEntity, UserEntity } from '@backstage/catalog-model';\n\n// This group transformer completely replaces the built in logic with custom logic.\nexport async function myGroupTransformer(\n  group: MicrosoftGraph.Group,\n  groupPhoto?: string,\n): Promise<GroupEntity | undefined> {\n  return {\n    apiVersion: 'backstage.io/v1alpha1',\n    kind: 'Group',\n    metadata: {\n      name: group.id!,\n      annotations: {},\n    },\n    spec: {\n      type: 'Microsoft Entra ID',\n      children: [],\n    },\n  };\n}\n\n// This user transformer makes use of the built in logic, but also sets the description field\nexport async function myUserTransformer(\n  graphUser: MicrosoftGraph.User,\n  userPhoto?: string,\n): Promise<UserEntity | undefined> {\n  const backstageUser = await defaultUserTransformer(graphUser, userPhoto);\n\n  if (backstageUser) {\n    backstageUser.metadata.description = 'Loaded from Microsoft Entra ID';\n  }\n\n  return backstageUser;\n}\n\n// Example organization transformer that removes the organization group completely\nexport async function myOrganizationTransformer(\n  graphOrganization: MicrosoftGraph.Organization,\n): Promise<GroupEntity | undefined> {\n  return undefined;\n}\n"})}),"\n",(0,t.jsx)(r.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,t.jsx)(r.h3,{id:"no-data",children:"No data"}),"\n",(0,t.jsxs)(r.p,{children:["First check your logs for the message ",(0,t.jsx)(r.code,{children:"Reading msgraph users and groups"}),".\nIf you don't see this, check you've registered the provider, and that the schedule is valid"]}),"\n",(0,t.jsxs)(r.p,{children:["If you see a log entry ",(0,t.jsx)(r.code,{children:"Read 0 msgraph users and 0 msgraph groups"}),", check your search and filter arguments."]}),"\n",(0,t.jsxs)(r.p,{children:["If you see the start message (",(0,t.jsx)(r.code,{children:"Reading msgraph users and groups"}),") but no end message (",(0,t.jsx)(r.code,{children:"Read X msgraph users and Y msgraph groups"}),"), then it is likely the job is taking a long time due to a large volume of data.\nThe default behavior is to import all users and groups, which is often more data than needed.\nTry importing a smaller set of data (e.g. ",(0,t.jsx)(r.code,{children:"filter: displayName eq 'John Smith'"}),")."]}),"\n",(0,t.jsx)(r.h3,{id:"authentication--token-errors",children:"Authentication / Token Errors"}),"\n",(0,t.jsxs)(r.p,{children:["See ",(0,t.jsx)(r.a,{href:"https://aka.ms/azsdk/js/identity/troubleshoot",children:"Troubleshooting Azure Identity Authentication Issues"})]}),"\n",(0,t.jsx)(r.h3,{id:"error-while-reading-users-from-microsoft-graph-authorization_requestdenied---insufficient-privileges-to-complete-the-operation",children:"Error while reading users from Microsoft Graph: Authorization_RequestDenied - Insufficient privileges to complete the operation"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Make sure you've granted all the required permissions to your application registration or managed identity"}),"\n",(0,t.jsxs)(r.li,{children:["Make sure the permissions are ",(0,t.jsx)(r.code,{children:"Application"})," permissions rather than ",(0,t.jsx)(r.code,{children:"Delegated"})]}),"\n",(0,t.jsx)(r.li,{children:'If your organization has configured "Admin consent" to be required, make sure this has been granted for your application permissions'}),"\n",(0,t.jsxs)(r.li,{children:["If your group queries are returning Microsoft Teams groups, you may need to grant addition permissions (e.g. ",(0,t.jsx)(r.code,{children:"Team.ReadBasic.All"}),", ",(0,t.jsx)(r.code,{children:"TeamMember.Read.All"}),")"]}),"\n",(0,t.jsxs)(r.li,{children:["If you've added additional ",(0,t.jsx)(r.code,{children:"select"})," or ",(0,t.jsx)(r.code,{children:"expand"})," fields, those may need additional permissions granted"]}),"\n"]})]})}function d(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},371426:(e,r,n)=>{var t=n(827378),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,n){var t,i={},c=null,u=null;for(t in void 0!==n&&(c=""+n),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(u=r.ref),r)a.call(r,t)&&!l.hasOwnProperty(t)&&(i[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===i[t]&&(i[t]=r[t]);return{$$typeof:o,type:e,key:c,ref:u,props:i,_owner:s.current}}r.Fragment=i,r.jsx=c,r.jsxs=c},541535:(e,r)=>{var n=Symbol.for("react.element"),t=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),p=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,m={};function y(e,r,n){this.props=e,this.context=r,this.refs=m,this.updater=n||f}function b(){}function x(e,r,n){this.props=e,this.context=r,this.refs=m,this.updater=n||f}y.prototype.isReactComponent={},y.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=y.prototype;var v=x.prototype=new b;v.constructor=x,g(v,y.prototype),v.isPureReactComponent=!0;var j=Array.isArray,k=Object.prototype.hasOwnProperty,_={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function w(e,r,t){var o,i={},a=null,s=null;if(null!=r)for(o in void 0!==r.ref&&(s=r.ref),void 0!==r.key&&(a=""+r.key),r)k.call(r,o)&&!E.hasOwnProperty(o)&&(i[o]=r[o]);var l=arguments.length-2;if(1===l)i.children=t;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(o in l=e.defaultProps)void 0===i[o]&&(i[o]=l[o]);return{$$typeof:n,type:e,key:a,ref:s,props:i,_owner:_.current}}function T(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var I=/\/+/g;function A(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function R(e,r,o,i,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case n:case t:l=!0}}if(l)return a=a(l=e),e=""===i?"."+A(l,0):i,j(a)?(o="",null!=e&&(o=e.replace(I,"$&/")+"/"),R(a,r,o,"",(function(e){return e}))):null!=a&&(T(a)&&(a=function(e,r){return{$$typeof:n,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(I,"$&/")+"/")+e)),r.push(a)),1;if(l=0,i=""===i?".":i+":",j(e))for(var c=0;c<e.length;c++){var u=i+A(s=e[c],c);l+=R(s,r,o,u,a)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),c=0;!(s=e.next()).done;)l+=R(s=s.value,r,o,u=i+A(s,c++),a);else if("object"===s)throw r=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return l}function z(e,r,n){if(null==e)return e;var t=[],o=0;return R(e,t,"","",(function(e){return r.call(n,e,o++)})),t}function S(e){if(-1===e._status){var r=e._result;(r=r()).then((function(r){0!==e._status&&-1!==e._status||(e._status=1,e._result=r)}),(function(r){0!==e._status&&-1!==e._status||(e._status=2,e._result=r)})),-1===e._status&&(e._status=0,e._result=r)}if(1===e._status)return e._result.default;throw e._result}var C={current:null},O={transition:null},M={ReactCurrentDispatcher:C,ReactCurrentBatchConfig:O,ReactCurrentOwner:_};function N(){throw Error("act(...) is not supported in production builds of React.")}r.Children={map:z,forEach:function(e,r,n){z(e,(function(){r.apply(this,arguments)}),n)},count:function(e){var r=0;return z(e,(function(){r++})),r},toArray:function(e){return z(e,(function(e){return e}))||[]},only:function(e){if(!T(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=y,r.Fragment=o,r.Profiler=a,r.PureComponent=x,r.StrictMode=i,r.Suspense=u,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M,r.act=N,r.cloneElement=function(e,r,t){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=g({},e.props),i=e.key,a=e.ref,s=e._owner;if(null!=r){if(void 0!==r.ref&&(a=r.ref,s=_.current),void 0!==r.key&&(i=""+r.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in r)k.call(r,c)&&!E.hasOwnProperty(c)&&(o[c]=void 0===r[c]&&void 0!==l?l[c]:r[c])}var c=arguments.length-2;if(1===c)o.children=t;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];o.children=l}return{$$typeof:n,type:e.type,key:i,ref:a,props:o,_owner:s}},r.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},r.createElement=w,r.createFactory=function(e){var r=w.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:c,render:e}},r.isValidElement=T,r.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:S}},r.memo=function(e,r){return{$$typeof:d,type:e,compare:void 0===r?null:r}},r.startTransition=function(e){var r=O.transition;O.transition={};try{e()}finally{O.transition=r}},r.unstable_act=N,r.useCallback=function(e,r){return C.current.useCallback(e,r)},r.useContext=function(e){return C.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return C.current.useDeferredValue(e)},r.useEffect=function(e,r){return C.current.useEffect(e,r)},r.useId=function(){return C.current.useId()},r.useImperativeHandle=function(e,r,n){return C.current.useImperativeHandle(e,r,n)},r.useInsertionEffect=function(e,r){return C.current.useInsertionEffect(e,r)},r.useLayoutEffect=function(e,r){return C.current.useLayoutEffect(e,r)},r.useMemo=function(e,r){return C.current.useMemo(e,r)},r.useReducer=function(e,r,n){return C.current.useReducer(e,r,n)},r.useRef=function(e){return C.current.useRef(e)},r.useState=function(e){return C.current.useState(e)},r.useSyncExternalStore=function(e,r,n){return C.current.useSyncExternalStore(e,r,n)},r.useTransition=function(){return C.current.useTransition()},r.version="18.3.1"},827378:(e,r,n)=>{e.exports=n(541535)},824246:(e,r,n)=>{e.exports=n(371426)},511151:(e,r,n)=>{n.d(r,{Z:()=>s,a:()=>a});var t=n(667294);const o={},i=t.createContext(o);function a(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);