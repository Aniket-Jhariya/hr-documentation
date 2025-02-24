"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8186],{728:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"backend/interview/endpoints","title":"Endpoints","description":"list/","source":"@site/docs/backend/interview/endpoints.md","sourceDirName":"backend/interview","slug":"/backend/interview/endpoints","permalink":"/hr-documentation/backend/interview/endpoints","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Interview","permalink":"/hr-documentation/category/interview"},"next":{"title":"Models","permalink":"/hr-documentation/backend/interview/models"}}');var d=s(4848),l=s(8453);const r={sidebar_position:1},t="Endpoints",c={},o=[{value:"<code>list/</code>",id:"list",level:3},{value:"<code>job/&lt;int:jobId&gt;/interview-modules/</code>",id:"jobintjobidinterview-modules",level:3},{value:"<code>interview-module/&lt;int:module_id&gt;/service/&lt;str:service_name&gt;/steps/</code>",id:"interview-moduleintmodule_idservicestrservice_namesteps",level:3},{value:"<code>feedbacks/&lt;int:job_id&gt;/&lt;int:candidate_id&gt;/</code>",id:"feedbacksintjob_idintcandidate_id",level:3},{value:"<code>shortlist-candidate/</code>",id:"shortlist-candidate",level:3},{value:"<code>unshortlist-candidate/</code>",id:"unshortlist-candidate",level:3},{value:"<code>update-step/</code>",id:"update-step",level:3},{value:"<code>update-status/</code>",id:"update-status",level:3},{value:"<code>candidate/&lt;int:candidate_id&gt;/answers/</code> OR",id:"candidateintcandidate_idanswers-or",level:3},{value:"<code>candidate/&lt;int:candidate_id&gt;/job/&lt;int:job_id&gt;/service/&lt;int:service_id&gt;/answers/</code>",id:"candidateintcandidate_idjobintjob_idserviceintservice_idanswers",level:3},{value:"<code>answers/&lt;int:pk&gt;/audio/</code>",id:"answersintpkaudio",level:3},{value:"<code>answers/&lt;int:pk&gt;/video/</code>",id:"answersintpkvideo",level:3},{value:"<code>answers/&lt;int:pk&gt;/thumbnail/</code>",id:"answersintpkthumbnail",level:3},{value:"<code>get-upload-presigned-url/</code>",id:"get-upload-presigned-url",level:3},{value:"ViewSets",id:"viewsets",level:2},{value:"InterviewModuleViewSet",id:"interviewmoduleviewset",level:3},{value:"Purpose:",id:"purpose",level:4},{value:"InterviewStepViewSet",id:"interviewstepviewset",level:3},{value:"Purpose:",id:"purpose-1",level:4},{value:"ServiceInterviewStepListView",id:"serviceinterviewsteplistview",level:3},{value:"Purpose:",id:"purpose-2",level:4},{value:"QuestionSetViewSet",id:"questionsetviewset",level:3},{value:"Purpose:",id:"purpose-3",level:4},{value:"QuestionViewSet",id:"questionviewset",level:3},{value:"Purpose:",id:"purpose-4",level:4},{value:"AnswerViewSet",id:"answerviewset",level:3},{value:"Purpose:",id:"purpose-5",level:4}];function a(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"endpoints",children:"Endpoints"})}),"\n",(0,d.jsx)(n.h3,{id:"list",children:(0,d.jsx)(n.code,{children:"list/"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"View:"})," WorkflowListView"]}),"\n",(0,d.jsx)(n.li,{children:"Filter and retrieve Interview module objects created by employees of the user's organization."}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Payload"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"list"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n    "user":{\n        "org":{\n            ...organisation object\n        }\n    }\n}\n'})}),"\n",(0,d.jsx)(n.strong,{children:"Response"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:"[\n    ...list of Interview objects\n]\n"})}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"jobintjobidinterview-modules",children:(0,d.jsx)(n.code,{children:"job/<int:jobId>/interview-modules/"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"View:"})," InterviewModuleByJobView"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"Filter and retrieve Interview module objects by job."}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Payload"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"list"}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Response"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:"[\n    ...list of Interview module objects\n]\n"})}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Response Code"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"200"}),(0,d.jsx)(n.td,{children:"SUCCESS: OK"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"404"}),(0,d.jsx)(n.td,{children:"FAIL: Job not found"})]})]})]}),"\n",(0,d.jsx)(n.h3,{id:"interview-moduleintmodule_idservicestrservice_namesteps",children:(0,d.jsx)(n.code,{children:"interview-module/<int:module_id>/service/<str:service_name>/steps/"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"View:"})," ServiceInterviewStepListView"]}),"\n",(0,d.jsx)(n.li,{}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Payload"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"GET"}),"\n"]}),"\n",(0,d.jsx)(n.strong,{children:"Response"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:"{\n\n}\n"})}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"feedbacksintjob_idintcandidate_id",children:(0,d.jsx)(n.code,{children:"feedbacks/<int:job_id>/<int:candidate_id>/"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"View:"})," FeedbackByJobAndCandidate"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"Retrieves feedback based on the job id and candidate id."}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Payload"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"GET"}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Response"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:"[\n    ...list of feedbacks\n]\n"})}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Response Code"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"200"}),(0,d.jsx)(n.td,{children:"SUCCESS: Feedback retrieve"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"404"}),(0,d.jsx)(n.td,{children:"FAIL: Feedback not found"})]})]})]}),"\n",(0,d.jsx)(n.h3,{id:"shortlist-candidate",children:(0,d.jsx)(n.code,{children:"shortlist-candidate/"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"View:"})," complete_resume_screening"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"Sets the resume screening step to shortlisted status and initiates further new interview steps."}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Payload"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"POST"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n    "candidate_id": 1234,\n    "job_id": 123,\n    "module_id": 135,\n    "service":{\n        ...service object details\n        "name": "Resume Screening"\n    }\n}\n'})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Response"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n    "message": "Resume screening completed successfully. Interview step updated.",\n    "interview_step_id": 125,\n    "candidate": ...candidate object\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Response Code"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"200"}),(0,d.jsx)(n.td,{children:"SUCCESS: Resume Screened/ interview step created/ interview step updated"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"400"}),(0,d.jsx)(n.td,{children:"FAIL: Invalid format"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"404"}),(0,d.jsx)(n.td,{children:"FAIL: User or Candidate or Service or Interview not found"})]})]})]}),"\n",(0,d.jsx)(n.h3,{id:"unshortlist-candidate",children:(0,d.jsx)(n.code,{children:"unshortlist-candidate/"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"View:"})," unshortlist_candidate"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"Sets the resume screening step to shortlisted status and initiates if no interview step already."}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Payload"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"POST"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n    "status":"Shortlisted",\n    "candidate_id": 1234,\n    "job_id": 123,\n    "module_id": 135,\n    "service":{\n        ...service object details\n        "name": "Resume Screening"\n    }\n}\n'})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Response"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n    "message": "Candidate unshortlisted successfully",\n    "candidate" : ...candidate data\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"update-step",children:(0,d.jsx)(n.code,{children:"update-step/"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"View:"})," update_step"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"Updates the interview step based on the candidate id or job id."}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Payload"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"POST"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n    "action":"Start",\n    "order":12,\n    "candidate_id": 1234,\n    "job_id": 123,\n    "module_id": 135,\n    "service":{\n        ...service object details\n        "name": "Resume Screening"\n    }\n}\n'})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Response"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n    "message": ...interview step data\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Response Code"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"200"}),(0,d.jsx)(n.td,{children:"SUCCESS: Step updated"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"400"}),(0,d.jsx)(n.td,{children:"FAIL: Invalid choice/ duplicate instances"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"404"}),(0,d.jsx)(n.td,{children:"FAIL: Instance not found/ instance not selected"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"405"}),(0,d.jsx)(n.td,{children:"FAIL: Invalid HTTP method"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"500"}),(0,d.jsx)(n.td,{children:"FAIL: Server error"})]})]})]}),"\n",(0,d.jsx)(n.h3,{id:"update-status",children:(0,d.jsx)(n.code,{children:"update-status/"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"View:"})," update_status"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"Updates the interview status based on the candidate id or job id."}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Payload"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"PATCH"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n    "status":"Shortlisted",\n    "candidate_id": 1234,\n    "job_id": 123,\n    "module_id": 135,\n    "service":{\n        ...service object details\n        "name": "Resume Screening"\n    }\n}\n'})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Response"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n    "message": "Resume screening completed successfully. Interview step updated.",\n    "interview_step_id": 125,\n    "candidate": ...candidate object\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.h3,{id:"candidateintcandidate_idanswers-or",children:[(0,d.jsx)(n.code,{children:"candidate/<int:candidate_id>/answers/"})," OR"]}),"\n",(0,d.jsx)(n.h3,{id:"candidateintcandidate_idjobintjob_idserviceintservice_idanswers",children:(0,d.jsx)(n.code,{children:"candidate/<int:candidate_id>/job/<int:job_id>/service/<int:service_id>/answers/"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"View:"})," CandidateAnswersAPIView"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"Filters and retrieves answer sets of personality and resume screening based on candidate id and service id."}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Payload"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"list"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n    "candidate_id": 123,\n    "job_id": 1234,\n    "service_id": 135\n}\n'})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Response"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n    {\n"count": 1,\n"next": null,\n"previous": null,\n"results": [\n    {\n        "id": 3636,\n        "question": {\n            "id": 96,\n            "text": "1.\\tLorem ipsum dolor..?",\n            "type": "audio",\n            "time_limit": 60,\n            "created_at": "2024-09-16T11:23:04.120923Z",\n            "is_deleted": false,\n            "question_set": 1,\n            "created_by": 2\n        },\n        "video_analysis": null,\n        "audio_analysis": [],\n        "duration": 0,\n        "question_text": null,\n        "type": "audio",\n        "screening_type": "resume-screening",\n        "screening_id": 1394,\n        "text": null,\n        "audio_file": ...link to object in S3 bucket,\n        "video_file": null,\n        "video_thumbnail": null,\n        "started": null,\n        "submitted_at": "2025-01-06T14:39:59.438407Z",\n        "question_set": null,\n        "candidate": 292,\n        "step": null\n    },\n    ...\n]\n}\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"answersintpkaudio",children:(0,d.jsx)(n.code,{children:"answers/<int:pk>/audio/"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"View:"})," AudioView"]}),"\n",(0,d.jsx)(n.li,{children:"Retrieves the audio answer files in the answer set using id."}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Payload"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["GET\n",(0,d.jsx)(n.strong,{children:"Response"})]}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-http",children:"FileResponse: ...audio file as attachment\n"})}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"answersintpkvideo",children:(0,d.jsx)(n.code,{children:"answers/<int:pk>/video/"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"View:"})," VideoView"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"Retrieves the video answer files in the answer set using id."}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Payload"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"GET"}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Response"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-http",children:"FileResponse: ...audio file as attachment\n"})}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"answersintpkthumbnail",children:(0,d.jsx)(n.code,{children:"answers/<int:pk>/thumbnail/"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"View:"})," ThumbnailView"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"Retrieves the thumbnail file of video answers in the answer set using id."}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Payload"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"GET"}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Response"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-http",children:"FileResponse: ...audio file as attachment\n"})}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"get-upload-presigned-url",children:(0,d.jsx)(n.code,{children:"get-upload-presigned-url/"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"View:"})," GeneratePresignedURLView"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"Creates connection with S3 client and generates a url for access to video responses."}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Payload"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"GET"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n    "video_filename":"xyz.mp4",\n    "content_type": "video/*"\n}\n'})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Response"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n    "key": ...video s3 path, \n    "presigned_upload_url": ...presigned upload url\n\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Response Code"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"201"}),(0,d.jsx)(n.td,{children:"SUCCESS: File path and upload url created"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"500"}),(0,d.jsx)(n.td,{children:"FAIL: URL not created"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"viewsets",children:"ViewSets"}),"\n",(0,d.jsx)(n.h3,{id:"interviewmoduleviewset",children:"InterviewModuleViewSet"}),"\n",(0,d.jsxs)(n.p,{children:["Handles CRUD operations for the ",(0,d.jsx)(n.code,{children:"InterviewModule"})," model."]}),"\n",(0,d.jsx)(n.h4,{id:"purpose",children:"Purpose:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Serializer Selection:","\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Uses ",(0,d.jsx)(n.code,{children:"InterviewModuleViewSerializer"})," for ",(0,d.jsx)(n.code,{children:"list"})," and ",(0,d.jsx)(n.code,{children:"retrieve"})," actions."]}),"\n",(0,d.jsxs)(n.li,{children:["Uses ",(0,d.jsx)(n.code,{children:"InterviewModuleSerializer"})," for other actions."]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["QuerySet Filtering:","\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"Filters modules based on the authenticated user's organization."}),"\n",(0,d.jsx)(n.li,{children:"Returns an empty queryset for unauthenticated users."}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["Update Operation:","\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Automatically sets the ",(0,d.jsx)(n.code,{children:"updated_at"})," and ",(0,d.jsx)(n.code,{children:"updated_by"})," fields during updates."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"interviewstepviewset",children:"InterviewStepViewSet"}),"\n",(0,d.jsxs)(n.p,{children:["Handles CRUD operations for the ",(0,d.jsx)(n.code,{children:"InterviewStep"})," model."]}),"\n",(0,d.jsx)(n.h4,{id:"purpose-1",children:"Purpose:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Uses ",(0,d.jsx)(n.code,{children:"InterviewStepSerializer"})," for all actions."]}),"\n",(0,d.jsx)(n.li,{children:"No custom filtering or logic is applied."}),"\n"]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"serviceinterviewsteplistview",children:"ServiceInterviewStepListView"}),"\n",(0,d.jsx)(n.p,{children:"Handles retrieval of interview step preferences for a specific service."}),"\n",(0,d.jsx)(n.h4,{id:"purpose-2",children:"Purpose:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Endpoint: ",(0,d.jsx)(n.code,{children:"GET /service-interview-steps/<module_id>/<service_name>/"})]}),"\n",(0,d.jsxs)(n.li,{children:["Parameters:","\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"module_id"}),": The ID of the interview module."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"service_name"}),": The name of the service."]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["Response:","\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"Returns the preferences for the specified service within the module."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"questionsetviewset",children:"QuestionSetViewSet"}),"\n",(0,d.jsxs)(n.p,{children:["Handles CRUD operations for the ",(0,d.jsx)(n.code,{children:"QuestionSet"})," model."]}),"\n",(0,d.jsx)(n.h4,{id:"purpose-3",children:"Purpose:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"QuerySet Filtering:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"Filters question sets based on the authenticated user's organization."}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"Serializer:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Uses ",(0,d.jsx)(n.code,{children:"QuestionSetSerializer"})," for all actions."]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Payload"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"GET"}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Response"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n"count": 16,\n"next": null,\n"previous": null,\n"results": [\n    {\n        "id": 12,\n        "name": "Tester Questions",\n        "created_at": "2024-07-01T07:19:59.554842Z",\n        "created_by": 123\n    },\n    ...\n]\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"questionviewset",children:"QuestionViewSet"}),"\n",(0,d.jsxs)(n.p,{children:["Handles CRUD operations for the ",(0,d.jsx)(n.code,{children:"Question"})," model."]}),"\n",(0,d.jsx)(n.h4,{id:"purpose-4",children:"Purpose:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"QuerySet Filtering:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Filters questions based on ",(0,d.jsx)(n.code,{children:"question_set_id"})," or ",(0,d.jsx)(n.code,{children:"question_ids"})," provided in query parameters."]}),"\n",(0,d.jsxs)(n.li,{children:["Excludes deleted questions (",(0,d.jsx)(n.code,{children:"is_deleted=False"}),")."]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"Serializer:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Uses ",(0,d.jsx)(n.code,{children:"QuestionSerializer"})," for all actions."]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Payload"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"GET"}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Response"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n"id": 123,\n"text": "lorem ipsum dolor...?",\n"type": "audio",\n"time_limit": 30,\n"created_at": "2024-07-01T07:23:22.382375Z",\n"is_deleted": true,\n"question_set": 1,\n"created_by": 2\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"answerviewset",children:"AnswerViewSet"}),"\n",(0,d.jsxs)(n.p,{children:["Handles CRUD operations for the ",(0,d.jsx)(n.code,{children:"Answer"})," model."]}),"\n",(0,d.jsx)(n.h4,{id:"purpose-5",children:"Purpose:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["File Upload:","\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"Supports video file uploads for answers."}),"\n",(0,d.jsx)(n.li,{children:"Processes video files and uploads them to S3 using a background task."}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["Validation:","\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Ensures required fields (",(0,d.jsx)(n.code,{children:"screening_id"}),", ",(0,d.jsx)(n.code,{children:"question"}),") are provided."]}),"\n",(0,d.jsx)(n.li,{children:"Prevents duplicate answers for the same question and screening."}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["Error Handling:","\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"Returns appropriate error responses for validation errors or processing failures."}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["Serializer:","\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Uses ",(0,d.jsx)(n.code,{children:"AnswerSerializer"})," for all actions."]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>t});var i=s(6540);const d={},l=i.createContext(d);function r(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);