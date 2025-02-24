"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7504],{6469:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"backend/resume parser/endpoints","title":"Endpoints","description":"haiku/","source":"@site/docs/backend/resume parser/endpoints.md","sourceDirName":"backend/resume parser","slug":"/backend/resume parser/endpoints","permalink":"/hr-documentation/backend/resume parser/endpoints","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Resume Parser","permalink":"/hr-documentation/category/resume-parser"},"next":{"title":"Models","permalink":"/hr-documentation/backend/resume parser/models"}}');var i=s(4848),d=s(8453);const l={sidebar_position:1},c="Endpoints",t={},a=[{value:"<code>haiku/</code>",id:"haiku",level:3},{value:"<code>analyze-audio/</code>",id:"analyze-audio",level:3},{value:"ViewSets",id:"viewsets",level:2},{value:"<code>ResumeViewSet</code>",id:"resumeviewset",level:3},{value:"Purpose:",id:"purpose",level:4},{value:"<code>ResumeScreeningPreferenceViewSet</code>",id:"resumescreeningpreferenceviewset",level:3},{value:"Purpose:",id:"purpose-1",level:4},{value:"<code>DeepgramAnalytics</code>",id:"deepgramanalytics",level:3},{value:"Purpose:",id:"purpose-2",level:4},{value:"<code>ResumeHaikuView</code>",id:"resumehaikuview",level:3},{value:"Purpose:",id:"purpose-3",level:4}];function o(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"endpoints",children:"Endpoints"})}),"\n",(0,i.jsx)(n.h3,{id:"haiku",children:(0,i.jsx)(n.code,{children:"haiku/"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"View:"})," ResumeHaikuView"]}),"\n",(0,i.jsx)(n.li,{children:"Generates structured resume insights using AI."}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Payload"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"POST"}),"\n"]}),"\n",(0,i.jsx)(n.strong,{children:"Response"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "result": "Generated resume insights in structured format."\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"analyze-audio",children:(0,i.jsx)(n.code,{children:"analyze-audio/"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"View:"})," DeepgramAnalytics"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Analyzes audio responses and provides transcription."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Payload"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"POST"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Response"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "result": "Audio transcription and sentiment analysis."\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"viewsets",children:"ViewSets"}),"\n",(0,i.jsx)(n.h3,{id:"resumeviewset",children:(0,i.jsx)(n.code,{children:"ResumeViewSet"})}),"\n",(0,i.jsxs)(n.p,{children:["Handles CRUD operations for the ",(0,i.jsx)(n.code,{children:"Resume"})," model."]}),"\n",(0,i.jsx)(n.h4,{id:"purpose",children:"Purpose:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Manages candidate resumes."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Restricted to authenticated users (",(0,i.jsx)(n.code,{children:"IsAuthenticated"}),")."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Supports filtering by ",(0,i.jsx)(n.code,{children:"job_id"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Allows partial updates, including candidate notifications."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Payload"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"GET"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Response"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "id": 1,\n    "candidate": 292,\n    "job": 7,\n    "status": "Reviewed",\n    "created_at": "2025-02-17T05:49:40.039652Z",\n    "updated_at": "2025-02-17T05:49:40.039652Z"\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"resumescreeningpreferenceviewset",children:(0,i.jsx)(n.code,{children:"ResumeScreeningPreferenceViewSet"})}),"\n",(0,i.jsxs)(n.p,{children:["Handles CRUD operations for ",(0,i.jsx)(n.code,{children:"ResumeScreeningPreference"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"purpose-1",children:"Purpose:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Manages resume screening preferences for jobs."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Ensures access control based on job ownership."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Restricts updates to Admin and Editor roles."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Payload"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"GET"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Response"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "id": 1,\n    "candidate": 292,\n    "job": 7,\n    "status": "Reviewed",\n    "created_at": "2025-02-17T05:49:40.039652Z",\n    "updated_at": "2025-02-17T05:49:40.039652Z"\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"deepgramanalytics",children:(0,i.jsx)(n.code,{children:"DeepgramAnalytics"})}),"\n",(0,i.jsx)(n.p,{children:"Handles audio processing for candidate responses."}),"\n",(0,i.jsx)(n.h4,{id:"purpose-2",children:"Purpose:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Processes audio responses using Deepgram API."}),"\n",(0,i.jsx)(n.li,{children:"Generates transcription, sentiment analysis, and insights."}),"\n",(0,i.jsx)(n.li,{children:"Returns structured response."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"resumehaikuview",children:(0,i.jsx)(n.code,{children:"ResumeHaikuView"})}),"\n",(0,i.jsx)(n.p,{children:"Processes and structures resume data using AI."}),"\n",(0,i.jsx)(n.h4,{id:"purpose-3",children:"Purpose:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Converts raw resume text into structured JSON format."}),"\n",(0,i.jsx)(n.li,{children:"Uses AI-based processing for better insights."}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>c});var r=s(6540);const i={},d=r.createContext(i);function l(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);