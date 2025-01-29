"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6138],{7351:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"backend/candidates/endpoints","title":"Endpoints","description":"filter/","source":"@site/docs/backend/candidates/endpoints.md","sourceDirName":"backend/candidates","slug":"/backend/candidates/endpoints","permalink":"/docs/backend/candidates/endpoints","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/backend/candidates/endpoints.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Candidates","permalink":"/docs/category/candidates"},"next":{"title":"Models","permalink":"/docs/backend/candidates/models"}}');var d=s(4848),i=s(8453);const r={sidebar_position:1},a="Endpoints",c={},o=[{value:"<code>filter/</code>",id:"filter",level:3},{value:"<code>list/</code>",id:"list",level:3}];function l(e){const n={code:"code",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"endpoints",children:"Endpoints"})}),"\n",(0,d.jsx)(n.h3,{id:"filter",children:(0,d.jsx)(n.code,{children:"filter/"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"View:"})," CandidateFilterView"]}),"\n",(0,d.jsx)(n.li,{children:"Filters and retrieves a list of candidates created by requesting user and associated users in the organisation. Filters resumes based on job_id context."}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Payload"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"POST"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n    "user":{\n        ... \n        "user_id":123,\n        "org":{\n            ...\n            "org_id":1234\n        }           \n    }\n}\n'})}),"\n",(0,d.jsx)(n.strong,{children:"Response"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'[\n    ...\n    {\n        "job_id":1234,\n        "name":"John Doe",\n        ...candidate details\n    }\n]\n'})}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"list",children:(0,d.jsx)(n.code,{children:"list/"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"View:"})," CandidateListView"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"Filters and retrieves a list of candidates under the same job they applied to and on resume basis, ordered on the basis of the time of creation."}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Payload"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"POST"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n    "user":{\n        ... \n        "user_id":123      \n    }\n}\n'})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Response"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'[\n    ...\n    {\n        "job_id":1234,\n        "name":"John Doe",\n        ...candidate details\n    }\n]\n'})}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Response Code"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"201"}),(0,d.jsx)(n.td,{children:"SUCCESS: Organization registered"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"400"}),(0,d.jsx)(n.td,{children:"FAIL: Duplicate entry(contact/email)/Invalid input format"})]})]})]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var t=s(6540);const d={},i=t.createContext(d);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);