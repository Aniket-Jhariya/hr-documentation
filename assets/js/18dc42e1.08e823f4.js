"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6607],{9740:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>d,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"frontend/Utilities/Forms","title":"Forms","description":"Job Form","source":"@site/docs/frontend/Utilities/Forms.md","sourceDirName":"frontend/Utilities","slug":"/frontend/Utilities/Forms","permalink":"/hr-documentation/frontend/Utilities/Forms","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"sidebar_position":8},"sidebar":"tutorialSidebar","previous":{"title":"Dropdowns","permalink":"/hr-documentation/frontend/Utilities/Dropdowns"},"next":{"title":"template","permalink":"/hr-documentation/frontend/template"}}');var i=s(4848),r=s(8453);const d={sidebar_position:8},l=void 0,c={},o=[{value:"Job Form",id:"job-form",level:2},{value:"Props",id:"props",level:3},{value:"State Variables",id:"state-variables",level:3},{value:"Constants",id:"constants",level:3},{value:"Functions and Methods",id:"functions-and-methods",level:3}];function h(e){const n={code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"job-form",children:"Job Form"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"JobForm.js"})," file is responsible for rendering and managing a form used to create or edit job postings within the HR frontend application to provide a rich user interface for input fields such as job descriptions, skills, and notifications. The form handles user input, updates the state, and submits data to a parent component via a callback function."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Dependencies"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"react-select/creatable"}),": Provides a customizable dropdown for selecting and creating skills."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"react-quill"}),": Rich text editor for job descriptions."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"props",children:"Props"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Prop Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"handleFormSubmit"})}),(0,i.jsx)(n.td,{children:"Function to handle form submission."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"formData"})}),(0,i.jsx)(n.td,{children:"Object containing the current form data (e.g., job title, description, skills, etc.)."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"setFormData"})}),(0,i.jsxs)(n.td,{children:["Function to update the ",(0,i.jsx)(n.code,{children:"formData"})," state."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"errors"})}),(0,i.jsx)(n.td,{children:"Object containing validation errors (if any)."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"setErrors"})}),(0,i.jsxs)(n.td,{children:["Function to update the ",(0,i.jsx)(n.code,{children:"errors"})," state."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"successMessage"})}),(0,i.jsx)(n.td,{children:"String containing a success message (if applicable)."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"setSuccessMessage"})}),(0,i.jsxs)(n.td,{children:["Function to update the ",(0,i.jsx)(n.code,{children:"successMessage"})," state."]})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"state-variables",children:"State Variables"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Variable Name"}),(0,i.jsx)(n.th,{children:"Purpose"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"currentDate"})}),(0,i.jsxs)(n.td,{children:["String representing the current date in ",(0,i.jsx)(n.code,{children:"YYYY-MM-DD"})," format."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"text"})}),(0,i.jsx)(n.td,{children:"String containing the plain text version of the job description."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"htmlContent"})}),(0,i.jsx)(n.td,{children:"String containing the HTML version of the job description."})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"constants",children:"Constants"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Variable Name"}),(0,i.jsx)(n.th,{children:"Purpose"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"skills"})}),(0,i.jsx)(n.td,{children:'Array of predefined skill options for the "Must have skills" field.'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"modules"})}),(0,i.jsxs)(n.td,{children:["Configuration object for the ",(0,i.jsx)(n.code,{children:"ReactQuill"})," toolbar."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"formats"})}),(0,i.jsxs)(n.td,{children:["Array of supported formats for the ",(0,i.jsx)(n.code,{children:"ReactQuill"})," editor."]})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"functions-and-methods",children:"Functions and Methods"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"useEffect"})}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Purpose"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Synchronizes the ",(0,i.jsx)(n.code,{children:"text"})," and ",(0,i.jsx)(n.code,{children:"htmlContent"})," state with the ",(0,i.jsx)(n.code,{children:"formData.description"})," and ",(0,i.jsx)(n.code,{children:"formData.jd_html"})," fields when the form is loaded or updated."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"handleInputChange"})}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Purpose"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Handles changes to standard input fields (e.g., text, number, date)."}),"\n",(0,i.jsxs)(n.li,{children:["Updates the ",(0,i.jsx)(n.code,{children:"formData"})," state with the new input value."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Parameters"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"e"}),": Event object containing the target input field's name and value."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"handleChange"})}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Purpose"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Handles changes to the ",(0,i.jsx)(n.code,{children:"ReactQuill"})," editor (job description)."]}),"\n",(0,i.jsxs)(n.li,{children:["Updates ",(0,i.jsx)(n.code,{children:"htmlContent"}),", ",(0,i.jsx)(n.code,{children:"text"}),", and ",(0,i.jsx)(n.code,{children:"formData"})," state variables."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Parameters"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"content"}),": HTML content from the editor."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"delta"}),": Delta object representing the changes."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"source"}),': Source of the change (e.g., "user").']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"editor"}),": Editor instance."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"handleSkillsAdd"})}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Purpose"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Handles the selection of skills in the ",(0,i.jsx)(n.code,{children:"CreatableSelect"})," component."]}),"\n",(0,i.jsxs)(n.li,{children:["Updates the ",(0,i.jsx)(n.code,{children:"formData.must_have_skills"})," field."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Parameters"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"selectedOption"}),": Array of selected skill options."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>l});var t=s(6540);const i={},r=t.createContext(i);function d(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);