"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6074],{3684:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"frontend/Components/Applicants/Tab","title":"Tab","description":"The Tab.js file renders a tab-like navigation element. It is designed to be reusable and customizable, allowing for dynamic rendering of tabs with optional icons, counts and locked states.","source":"@site/docs/frontend/Components/Applicants/Tab.md","sourceDirName":"frontend/Components/Applicants","slug":"/frontend/Components/Applicants/Tab","permalink":"/hr-documentation/frontend/Components/Applicants/Tab","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"sidebar_position":12},"sidebar":"tutorialSidebar","previous":{"title":"Send Email","permalink":"/hr-documentation/frontend/Components/Applicants/Send Email"},"next":{"title":"Transcript Timeline","permalink":"/hr-documentation/frontend/Components/Applicants/Transcript Timeline"}}');var i=t(4848),r=t(8453);const d={sidebar_position:12},l=void 0,o={},c=[{value:"Props",id:"props",level:3},{value:"Functions and Methods",id:"functions-and-methods",level:3},{value:"Purpose",id:"purpose",level:4},{value:"Return Value",id:"return-value",level:4},{value:"Error Handling",id:"error-handling",level:4}];function a(e){const n={code:"code",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"Tab.js"})," file renders a tab-like navigation element. It is designed to be reusable and customizable, allowing for dynamic rendering of tabs with optional icons, counts and locked states."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"File Path"}),": ",(0,i.jsx)(n.code,{children:"\\hr-frontend\\src\\components\\applicants\\Tab.js"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"props",children:"Props"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Prop Name"}),(0,i.jsx)(n.th,{children:"Purpose"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"link"})}),(0,i.jsx)(n.td,{children:"The URL or path to navigate to when the tab is clicked."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"title"})}),(0,i.jsx)(n.td,{children:"The display text of the tab."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"iconClass"})}),(0,i.jsx)(n.td,{children:"CSS class for the icon displayed alongside the title."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"isActive"})}),(0,i.jsx)(n.td,{children:"Indicates whether the tab is currently active."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"isLocked"})}),(0,i.jsx)(n.td,{children:"Determines if the tab is locked (disabled)."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"show"})}),(0,i.jsx)(n.td,{children:"Controls whether the tab should be rendered."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"lockIcon"})}),(0,i.jsx)(n.td,{children:"CSS class for the lock icon displayed when the tab is locked."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"onClick"})}),(0,i.jsx)(n.td,{children:"Callback function triggered when the tab is clicked."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"applicantsCount"})}),(0,i.jsx)(n.td,{children:'Displays a count of applicants (only for the "Applicants" tab).'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"jobCount"})}),(0,i.jsx)(n.td,{children:'Displays a count of jobs (only for the "Jobs" tab).'})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"functions-and-methods",children:"Functions and Methods"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Tab"})," Component"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"purpose",children:"Purpose"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"None directly within the component."}),"\n",(0,i.jsxs)(n.li,{children:["The component triggers the ",(0,i.jsx)(n.code,{children:"onClick"})," callback when the tab is clicked."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"return-value",children:"Return Value"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"JSX Element"}),": Returns a ",(0,i.jsx)(n.code,{children:"Link"})," element wrapped in a fragment (",(0,i.jsx)(n.code,{children:"<>...</>"}),"). The ",(0,i.jsx)(n.code,{children:"Link"})," element is conditionally rendered based on the ",(0,i.jsx)(n.code,{children:"show"})," prop."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"error-handling",children:"Error Handling"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"No explicit error handling is implemented. Errors are likely to be handled by the parent component or React's error boundaries."}),"\n"]}),"\n",(0,i.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>l});var s=t(6540);const i={},r=s.createContext(i);function d(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);