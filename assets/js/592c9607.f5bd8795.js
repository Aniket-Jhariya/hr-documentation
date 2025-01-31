"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8186],{728:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"backend/interview/endpoints","title":"Endpoints","description":"list/","source":"@site/docs/backend/interview/endpoints.md","sourceDirName":"backend/interview","slug":"/backend/interview/endpoints","permalink":"/hr-documentation/docs/backend/interview/endpoints","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Interview","permalink":"/hr-documentation/docs/category/interview"},"next":{"title":"Models","permalink":"/hr-documentation/docs/backend/interview/models"}}');var d=s(4848),t=s(8453);const r={sidebar_position:1},l="Endpoints",c={},o=[{value:"<code>list/</code>",id:"list",level:3},{value:"<code>job/&lt;int:jobId&gt;/interview-modules/</code>",id:"jobintjobidinterview-modules",level:3},{value:"<code>interview-module/&lt;int:module_id&gt;/service/&lt;str:service_name&gt;/steps/</code>",id:"interview-moduleintmodule_idservicestrservice_namesteps",level:3},{value:"<code>feedbacks/&lt;int:job_id&gt;/&lt;int:candidate_id&gt;/</code>",id:"feedbacksintjob_idintcandidate_id",level:3},{value:"<code>shortlist-candidate/</code>",id:"shortlist-candidate",level:3},{value:"<code>unshortlist-candidate/</code>",id:"unshortlist-candidate",level:3},{value:"<code>update-step/</code>",id:"update-step",level:3},{value:"<code>update-status/</code>",id:"update-status",level:3}];function a(e){const n={code:"code",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"endpoints",children:"Endpoints"})}),"\n",(0,d.jsx)(n.h3,{id:"list",children:(0,d.jsx)(n.code,{children:"list/"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"View:"})," WorkflowListView"]}),"\n",(0,d.jsx)(n.li,{children:"Filter and retrieve Interview module objects created by employees of the user's organization."}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Payload"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"list"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n    "user":{\n        "org":{\n            ...organisation object\n        }\n    }\n}\n'})}),"\n",(0,d.jsx)(n.strong,{children:"Response"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:"[\n    ...list of Interview objects\n]\n"})}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"jobintjobidinterview-modules",children:(0,d.jsx)(n.code,{children:"job/<int:jobId>/interview-modules/"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"View:"})," InterviewModuleByJobView"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"Filter and retrieve Interview module objects by job."}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Payload"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"list"}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Response"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:"[\n    ...list of Interview module objects\n]\n"})}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Response Code"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"200"}),(0,d.jsx)(n.td,{children:"SUCCESS: OK"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"404"}),(0,d.jsx)(n.td,{children:"FAIL: Job not found"})]})]})]}),"\n",(0,d.jsx)(n.h3,{id:"interview-moduleintmodule_idservicestrservice_namesteps",children:(0,d.jsx)(n.code,{children:"interview-module/<int:module_id>/service/<str:service_name>/steps/"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"View:"})," ServiceInterviewStepListView"]}),"\n",(0,d.jsx)(n.li,{}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Payload"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"GET"}),"\n"]}),"\n",(0,d.jsx)(n.strong,{children:"Response"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:"{\n\n}\n"})}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"feedbacksintjob_idintcandidate_id",children:(0,d.jsx)(n.code,{children:"feedbacks/<int:job_id>/<int:candidate_id>/"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"View:"})," FeedbackByJobAndCandidate"]}),"\n",(0,d.jsx)(n.li,{children:"Retrieves feedback based on the job id and candidate id."}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Payload"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["GET\n",(0,d.jsx)(n.strong,{children:"Response"})]}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:"[\n    ...list of feedbacks\n]\n"})}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Response Code"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"200"}),(0,d.jsx)(n.td,{children:"SUCCESS: Feedback retrieve"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"404"}),(0,d.jsx)(n.td,{children:"FAIL: Feedback not found"})]})]})]}),"\n",(0,d.jsx)(n.h3,{id:"shortlist-candidate",children:(0,d.jsx)(n.code,{children:"shortlist-candidate/"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"View:"})," complete_resume_screening"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"Sets the resume screening step to shortlisted status and initiates further new interview steps."}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Payload"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"POST"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n    "candidate_id": 1234,\n    "job_id": 123,\n    "module_id": 135,\n    "service":{\n        ...service object details\n        "name": "Resume Screening"\n    }\n}\n'})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Response"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n    "message": "Resume screening completed successfully. Interview step updated.",\n    "interview_step_id": 125,\n    "candidate": ...candidate object\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Response Code"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"200"}),(0,d.jsx)(n.td,{children:"SUCCESS: Resume Screened/ interview step created/ interview step updated"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"400"}),(0,d.jsx)(n.td,{children:"FAIL: Invalid format"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"404"}),(0,d.jsx)(n.td,{children:"FAIL: User or Candidate or Service or Interview not found"})]})]})]}),"\n",(0,d.jsx)(n.h3,{id:"unshortlist-candidate",children:(0,d.jsx)(n.code,{children:"unshortlist-candidate/"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"View:"})," unshortlist_candidate"]}),"\n",(0,d.jsx)(n.li,{children:"Sets the resume screening step to shortlisted status and initiates if no interview step already."}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Payload"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"POST"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n    "status":"Shortlisted",\n    "candidate_id": 1234,\n    "job_id": 123,\n    "module_id": 135,\n    "service":{\n        ...service object details\n        "name": "Resume Screening"\n    }\n}\n'})}),"\n",(0,d.jsx)(n.strong,{children:"Response"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n    "message": "Candidate unshortlisted successfully",\n    "candidate" : ...candidate data\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"update-step",children:(0,d.jsx)(n.code,{children:"update-step/"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"View:"})," update_step"]}),"\n",(0,d.jsx)(n.li,{children:"Updates the interview step based on the candidate id or job id."}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Payload"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"POST"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n    "action":"Start",\n    "order":12,\n    "candidate_id": 1234,\n    "job_id": 123,\n    "module_id": 135,\n    "service":{\n        ...service object details\n        "name": "Resume Screening"\n    }\n}\n'})}),"\n",(0,d.jsx)(n.strong,{children:"Response"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n    "message": ...interview step data\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Response Code"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"200"}),(0,d.jsx)(n.td,{children:"SUCCESS: Step updated"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"400"}),(0,d.jsx)(n.td,{children:"FAIL: Invalid choice/ duplicate instances"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"404"}),(0,d.jsx)(n.td,{children:"FAIL: Instance not found/ instance not selected"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"405"}),(0,d.jsx)(n.td,{children:"FAIL: Invalid HTTP method"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"500"}),(0,d.jsx)(n.td,{children:"FAIL: Server error"})]})]})]}),"\n",(0,d.jsx)(n.h3,{id:"update-status",children:(0,d.jsx)(n.code,{children:"update-status/"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"View:"})," update_status"]}),"\n",(0,d.jsx)(n.li,{children:"Updates the interview status based on the candidate id or job id."}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Payload"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"PATCH"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n    "status":"Shortlisted",\n    "candidate_id": 1234,\n    "job_id": 123,\n    "module_id": 135,\n    "service":{\n        ...service object details\n        "name": "Resume Screening"\n    }\n}\n'})}),"\n",(0,d.jsx)(n.strong,{children:"Response"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n    "message": "Resume screening completed successfully. Interview step updated.",\n    "interview_step_id": 125,\n    "candidate": ...candidate object\n}\n'})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>l});var i=s(6540);const d={},t=i.createContext(d);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);