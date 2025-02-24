"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6138],{7351:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"backend/candidates/endpoints","title":"Endpoints","description":"filter/","source":"@site/docs/backend/candidates/endpoints.md","sourceDirName":"backend/candidates","slug":"/backend/candidates/endpoints","permalink":"/hr-documentation/backend/candidates/endpoints","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Candidates","permalink":"/hr-documentation/category/candidates"},"next":{"title":"Models","permalink":"/hr-documentation/backend/candidates/models"}}');var r=s(4848),d=s(8453);const l={sidebar_position:1},t="Endpoints",a={},c=[{value:"<code>filter/</code>",id:"filter",level:3},{value:"<code>list/</code>",id:"list",level:3},{value:"<code>stages/</code>",id:"stages",level:3},{value:"<code>list-with-stages/</code>",id:"list-with-stages",level:3},{value:"<code>list-with-stages/</code>",id:"list-with-stages-1",level:3},{value:"<code>candidate-names-list/</code>",id:"candidate-names-list",level:3},{value:"<code>candidates-for-job/&lt;int:job_id&gt;/</code>",id:"candidates-for-jobintjob_id",level:3},{value:"<code>download-resume/&lt;str:pk&gt;/</code>",id:"download-resumestrpk",level:3},{value:"<code>check-email/&lt;int:job_id&gt;/&lt;str:email&gt;/</code>",id:"check-emailintjob_idstremail",level:3},{value:"<code>resume-screening-completed-candidates/&lt;int:job_id&gt;/</code>",id:"resume-screening-completed-candidatesintjob_id",level:3},{value:"ViewSet",id:"viewset",level:2},{value:"<code>CandidateViewSet</code>",id:"candidateviewset",level:3},{value:"Methods",id:"methods",level:3},{value:"<code>validate_job_access(self, job_id, user)</code>",id:"validate_job_accessself-job_id-user",level:4},{value:"<code>get_serializer_context(self)</code>",id:"get_serializer_contextself",level:4},{value:"<code>get_serializer_class(self)</code>",id:"get_serializer_classself",level:4},{value:"<code>get_queryset(self)</code>",id:"get_querysetself",level:4},{value:"<code>create(self, request, *args, **kwargs)</code>",id:"createself-request-args-kwargs",level:4},{value:"<code>perform_update(self, serializer)</code>",id:"perform_updateself-serializer",level:4},{value:"<code>perform_destroy(self, instance)</code>",id:"perform_destroyself-instance",level:4},{value:"Payload",id:"payload",level:4},{value:"<code>get_count</code>",id:"get_count",level:3}];function o(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"endpoints",children:"Endpoints"})}),"\n",(0,r.jsx)(n.h3,{id:"filter",children:(0,r.jsx)(n.code,{children:"filter/"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"View:"})," CandidateFilterView"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Filters and retrieves a list of candidates created by requesting user and associated users in the organisation. Filters resumes based on job_id context."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Payload"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"POST"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "user":{\n        ... \n        "user_id":123,\n        "org":{\n            ...\n            "org_id":1234\n        }           \n    }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Response"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'[\n    ...\n    {\n        "job_id":1234,\n        "name":"John Doe",\n        ...candidate details\n    }\n]\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"list",children:(0,r.jsx)(n.code,{children:"list/"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"View:"})," CandidateListView"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Filters and retrieves a list of candidates under the same job they applied to and on resume basis, ordered on the basis of the time of creation."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Payload"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"POST"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "user":{\n        ... \n        "user_id":123      \n    }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Response"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'[\n    ...\n    {\n        "job_id":1234,\n        "name":"John Doe",\n        ...candidate details\n    }\n]\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"stages",children:(0,r.jsx)(n.code,{children:"stages/"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"View:"})," CandidateStageProgressView"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Retrieves a the existing the stages of evaluation in the candidate records."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Payload"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"GET"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    ...\n   "job_id":123,\n   "candidate_id":1234\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Response"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:' {\n        "candidate_id": 1234,\n        "stages": {\n            "resume": {\n                "exists": true,\n                "key" : "resume-screening",\n                "stage_name" : "Resume Screening",\n                "service_id": 1,\n                "details": {\n                    ..resume details\n                }\n            },\n            "assessment": {\n                "exists": true,\n                "key" : "assessment",\n                "stage_name" : "Assessments",\n                "service_id": 23,\n                "details": {\n                    ...test log details\n                }\n            },\n            "video": {\n                "exists": true,\n                "key" : "automated-video-interview",\n                "stage_name" : "Automated Video Interview",\n                "service_id": 13,\n                "details":{\n                    ...personality screening video details\n                }\n            }\n            \n        }\n    }\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"list-with-stages",children:(0,r.jsx)(n.code,{children:"list-with-stages/"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"View:"})," CandidateListWithStagesByJobProgressView"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Filters and retrieves a list of candidates under the same job_id and optionally on the stage_name, for only authenticated user."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Payload"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"POST"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    ...\n    "job_id": 1234,\n    "stage_name":"assessment"\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Response"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n"count": 12,\n"next": null,\n"previous": null,\n"results": [\n    {\n        "id": 123,\n        "name": "John Doe",\n        "email": "johndoe@example.com",\n        "location": {\n            "city": "Pune",\n            "state": "Maharashtra "\n        },\n        "skills": [\n            {\n                "name": "Testing",\n                "relevance": "medium",\n                "relevance_score": 5\n            },\n            ...\n        ],\n        "created_at": "2024-11-10T09:50:55.373048Z",\n        "updated_at": "2024-11-10T09:51:14.310936Z",\n        "current_stage": "",\n        "stages": {\n            "resume": {\n                "exists": true,\n                "key": "resume-screening",\n                "stage_name": "Resume Screening",\n                "service_id": 1,\n                "details": {\n                    "id": 123,\n                    "name": "John Doe",\n                    "job": 50,\n                    "status_text": "Not Shortlisted",\n                    "relevant_experience_in_months": 12,\n                    "overall_score": "1.200",\n                    "resume_score": {\n                        "id": 1137,\n                        "ai_score": true,\n                        "skills_score": "0.00",\n                        "work_exp_score": "0.60",\n                        "projects_score": "0.40",\n                        "education_score": "0.00",\n                        "certifications_score": "0.20",\n                        "overall_score": "1.20",\n                        "feedback": null,\n                        "job": 50,\n                        "user": 2,\n                        "score_weight": 1\n                    },\n                    "completed": true,\n                    "updated_at": "2024-11-11T12:39:55.822448Z",\n                    "updated_by": null,\n                    "is_approved": false,\n                    "approved_by": null,\n                    "created_at": "2024-11-10T09:50:55.377856Z"\n                }\n            },\n            "assessment": {\n                "exists": false,\n                "key": "assessment",\n                "stage_name": "Assessments",\n                "service_id": 3,\n                "details": null\n            },\n            "video": {\n                "exists": false,\n                "key": "automated-video-interview",\n                "stage_name": "Automated Video Interview",\n                "service_id": 2,\n                "details": null\n            }\n        }\n    },\n]\n}\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"Responds with an empty list if no matching candidate found."})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"list-with-stages-1",children:(0,r.jsx)(n.code,{children:"list-with-stages/"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"View:"})," CandidateListWithStagesByJobProgressView"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Filters and retrieves a list of candidates under the same job_id and optionally on the stage_name, for only authenticated user."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Payload"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"list"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    ...\n    "job_id": 1234,\n    "stage_name":"assessment"\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Response"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'[\n    ...\n    {\n            "id": 123,\n            "name": "John Doe",\n            "email" : "johndoe@example.com",\n            "location" : "India",\n            "skills" : [...list of skills],\n            "created_at" : "2024-11-25T14:30:00Z",\n            "updated_at" : "2024-12-25T14:30:00Z",\n            "current_stage" : "Automated Video Interview", \n            "stages": {\n                "resume": {\n                    "exists": true,\n                    "key": "resume-screening",\n                    "stage_name": "Resume Screening",\n                    "service_id": 1,\n                    "details": ...resume details,\n                },\n                "assessment": {\n                    "exists": true,\n                    "key": "assessment",\n                    "stage_name": "Assessments",\n                    "service_id": 13,\n                    "details": ...test log details,\n                },\n                "video": {\n                    "exists": true,\n                    "key": "automated-video-intervie",\n                    "stage_name": "Automated Video Interview",\n                    "service_id": 23,\n                    "details": ...personality screening video details,\n                },\n            },\n        }\n]\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"candidate-names-list",children:(0,r.jsx)(n.code,{children:"candidate-names-list/"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"View:"})}),"\n",(0,r.jsx)(n.li,{children:"Retrieves a list of the candidates filtered by a user with admin or editor access."}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Payload"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"list"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    ...\n    "name":"John Doe",\n    "jobId":1234,\n    "shortlisted":true\n}\n'})}),"\n",(0,r.jsx)(n.strong,{children:"Response"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'[\n    ...list of candidates\n    {\n        "name": "John Doe",\n        "id": 123,\n        ...candidate details\n    }\n]\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"candidates-for-jobintjob_id",children:(0,r.jsx)(n.code,{children:"candidates-for-job/<int:job_id>/"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"View:"})," CandidatesForJobView"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Filters and retrieves a list of candidates by job_id for authenticated users in the order of latest updated."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Payload"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"list"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    ...\n    "job_id": 1234\n}\n\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Response"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:"[\n    ...list of job objects\n]\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"download-resumestrpk",children:(0,r.jsx)(n.code,{children:"download-resume/<str:pk>/"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"View:"})," DownloadPDF"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Retrieves and downloads the resume from the candidate's user id for authenticated users."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Payload"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"GET"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Response"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "file": ...resume downloaded\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"check-emailintjob_idstremail",children:(0,r.jsx)(n.code,{children:"check-email/<int:job_id>/<str:email>/"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"View:"})," check_email_existence"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Checks if a candidate with the given email has applied to the specified job and their resume for that job."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Payload"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"GET"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Response"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "exists": true,\n    "id": 123,\n    "applied_job": 1234,\n    "resume": 12345,\n    "retries": 2\n}\n'})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Response Code"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"200"}),(0,r.jsxs)(n.td,{children:["SUCCESS: Candidate and resume retrieved/Candidate or resume not found",(0,r.jsx)(n.code,{children:"(exists=false)"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"400"}),(0,r.jsx)(n.td,{children:"FAIL: Invalid email/"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"404"}),(0,r.jsx)(n.td,{children:"FAIL: Job not found/Candidate with the email not found"})]})]})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"resume-screening-completed-candidatesintjob_id",children:(0,r.jsx)(n.code,{children:"resume-screening-completed-candidates/<int:job_id>/"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"View:"})," ResumeScreeningCompletedCandidates"]}),"\n",(0,r.jsx)(n.li,{children:"Filters and retrieves a list of candidates based on the specified job, interview step service being 'resume Screening', and are completed."}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Payload"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"list"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "job_id": 1234\n}\n\n'})}),"\n",(0,r.jsx)(n.strong,{children:"Response"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:"[\n    ...list of candidates\n]\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"viewset",children:"ViewSet"}),"\n",(0,r.jsx)(n.h3,{id:"candidateviewset",children:(0,r.jsx)(n.code,{children:"CandidateViewSet"})}),"\n",(0,r.jsx)(n.p,{children:"Handles CRUD operations with custom logic for job access validation, dynamic serializer selection, and asynchronous file processing."}),"\n",(0,r.jsx)(n.h3,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(n.h4,{id:"validate_job_accessself-job_id-user",children:(0,r.jsx)(n.code,{children:"validate_job_access(self, job_id, user)"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Purpose"}),":","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Validates user access to a job."}),"\n",(0,r.jsx)(n.li,{children:"Checks user role and organization."}),"\n",(0,r.jsxs)(n.li,{children:["Raises ",(0,r.jsx)(n.code,{children:"PermissionDenied"})," if access is invalid."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"get_serializer_contextself",children:(0,r.jsx)(n.code,{children:"get_serializer_context(self)"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Purpose"}),": Adds ",(0,r.jsx)(n.code,{children:"request"})," and ",(0,r.jsx)(n.code,{children:"job_id"})," to serializer context."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"get_serializer_classself",children:(0,r.jsx)(n.code,{children:"get_serializer_class(self)"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Purpose"}),": Selects serializer based on action."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Returns"}),":","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"CandidateSerializer"})," for ",(0,r.jsx)(n.code,{children:"retrieve"}),"/",(0,r.jsx)(n.code,{children:"list"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"BasicCandidateListSerializer"})," otherwise."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"get_querysetself",children:(0,r.jsx)(n.code,{children:"get_queryset(self)"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Purpose"}),": Filters candidates based on user role and job access."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Returns"}),":","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Admins: All candidates in their organization."}),"\n",(0,r.jsx)(n.li,{children:"Editors/Participants: Candidates for owned or shared jobs."}),"\n",(0,r.jsxs)(n.li,{children:["Unauthenticated users: Empty queryset for ",(0,r.jsx)(n.code,{children:"list"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"createself-request-args-kwargs",children:(0,r.jsx)(n.code,{children:"create(self, request, *args, **kwargs)"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Purpose"}),":","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Creates a new candidate."}),"\n",(0,r.jsx)(n.li,{children:"Processes resumes, profile pictures, and videos."}),"\n",(0,r.jsx)(n.li,{children:"Triggers Celery tasks for file uploads and resume parsing."}),"\n",(0,r.jsxs)(n.li,{children:["Creates ",(0,r.jsx)(n.code,{children:"JobUniversalStatus"})," and ",(0,r.jsx)(n.code,{children:"CandidateStageEvent"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Returns"}),":\n|Response Code|Description|\n|---|---|\n|201|SUCCESS: Candidate created|\n|400|FAIL: Invalid format|\n|500|FAIL: Server error|"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"perform_updateself-serializer",children:(0,r.jsx)(n.code,{children:"perform_update(self, serializer)"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Purpose"}),":","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Updates an existing candidate."}),"\n",(0,r.jsxs)(n.li,{children:["Updates fields (e.g., ",(0,r.jsx)(n.code,{children:"name"}),", ",(0,r.jsx)(n.code,{children:"email"}),", ",(0,r.jsx)(n.code,{children:"linkedin"}),")."]}),"\n",(0,r.jsx)(n.li,{children:"Handles new resumes, profile pictures, and videos."}),"\n",(0,r.jsx)(n.li,{children:"Updates stage events."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"perform_destroyself-instance",children:(0,r.jsx)(n.code,{children:"perform_destroy(self, instance)"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Purpose"}),":","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Deletes a candidate."}),"\n",(0,r.jsx)(n.li,{children:"Deletes associated resume and files from AWS S3."}),"\n",(0,r.jsxs)(n.li,{children:["Calls parent ",(0,r.jsx)(n.code,{children:"perform_destroy"})," to delete the candidate."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"payload",children:"Payload"}),"\n",(0,r.jsx)(n.p,{children:"-GET"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Response"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "id": 292,\n    "applied_jobs": [\n        {\n            "id": 7,\n            "score_weight": {\n                "id": 2,\n                "skills": "0.40",\n                "work_experience": "0.10",\n                "projects": "0.30",\n                "education": "0.10",\n                "certifications": "0.10",\n                "user": null\n            },\n            "owner": {\n                "id": 2,\n                "name": "John Doe",\n                "org": 1,\n                "username": null,\n                "email": "johndoe@example.com",\n                "role": {\n                    "id": 1,\n                    "name": "Admin"\n                },\n                "profile_pic": ...link to object in S3 bucket,\n                "is_active": true,\n                "is_staff": true,\n                "is_superuser": true,\n                "last_login": "2025-02-17T05:23:08.498133Z",\n                "last_seen": "5 minutes ago",\n                "contact": 1234567890,\n                "country": null,\n                "invited_by": null,\n                "created_at": "2024-12-02T12:33:13.659653Z"\n            },\n            "applicants_count": 160,\n            "applicants_today_count": 0,\n            "title": "Software tester",\n            "description": "lorem ipsum dolor...",\n            "jd_html": "lorem ipsum dolor...",\n            "jd_json": {\n                "Skills": [\n                    "Software testing proficiency",\n                    ...\n                ],\n                "Projects": [\n                    "Example project",\n                    ...\n                ],\n                "Education": [\n                    "Software Engineering",\n                    ...\n                ],\n                "Certifications": [\n                    "Example certification",\n                    ...\n                ],\n                "Work Experience": [\n                    "Software Developer",\n                    ...\n                ]\n            },\n            "experience": 1,\n            "min_experience": 0,\n            "max_experience": 1,\n            "employment_type": "Full Time",\n            "location": "Pune / Remote",\n            "must_have_skills": [\n                {\n                    "label": "Testing",\n                    "value": "Software Testing"\n                },\n                ...\n            ],\n            "encrypted": "qwertyuiopasdfghjkl",\n            "published": true,\n            "close_date": "2025-01-17T00:00:00Z",\n            "new_applicant_notify": false,\n            "created_at": "2024-03-01T11:07:30.677457Z",\n            "updated_at": "2025-01-04T07:43:37.698840Z",\n            "is_deleted": false,\n            "interview_module": 2,\n            "workflow": null,\n            "deleted_by": null,\n            "users_shared_with": [\n                4\n            ]\n        },\n    ],\n    "resumes": {\n        "id": 1394,\n        "resume_score": {\n            "id": 1251,\n            "ai_score": true,\n            "skills_score": "3.90",\n            "work_exp_score": "1.00",\n            "projects_score": "3.00",\n            "education_score": "1.00",\n            "certifications_score": "0.00",\n            "overall_score": "8.90",\n            "feedback": null,\n            "job": 7,\n            "user": 2,\n            "score_weight": 2\n        },\n        "score_weight": {\n            "id": 2,\n            "skills": "0.40",\n            "work_experience": "0.10",\n            "projects": "0.30",\n            "education": "0.10",\n            "certifications": "0.10",\n            "user": null\n        },\n        "name": "Resume 1",\n        "resume_json": {\n            "name": "Jane Doe",\n            "emails": [],\n            "skills": [\n                {\n                    "name": "Tester",\n                    "relevance": "medium",\n                    "relevance_score": 5\n                },\n                ...\n            ],\n            "summary": "lorem ipsum dolor...",\n            "projects": [\n                {\n                    "name": "Example project",\n                    "relevance": "high",\n                    "description": "lorem ipsum dolor",\n                    "relevance_score": 8\n                },\n                ...\n            ],\n            "websites": [],\n            "addresses": {\n                "city": "Pune",\n                "state": "Maharashtra"\n            },\n            "education": [\n                {\n                    "cgpa": 6,\n                    "degree": "Software engineering",\n                    "school": "Example University",\n                    "endDate": "2021-06-30",\n                    "percent": null,\n                    "relevance": "high",\n                    "startDate": "2017-07-01",\n                    "relevance_score": 9\n                }\n            ],\n            "dateOfBirth": "",\n            "phoneNumbers": "",\n            "certifications": [],\n            "workExperience": [\n                {\n                    "company": "ABC example pvt ltd",\n                    "endDate": "2023-11-30",\n                    "position": "Software tester",\n                    "relevance": "medium",\n                    "startDate": "2022-12-01",\n                    "description": "lorem ipsum dolor...",\n                    "relevance_score": 6\n                },\n                ...\n            ]\n        },\n        "input_tokens": 3878,\n        "output_tokens": 1577,\n        "total_tokens": 5455,\n        "cost": "0.0030",\n        "phone_numbers": "9876543210",\n        "personal_website": ...link to personal websit,\n        "websites": [],\n        "emails": "janedoe@example.com",\n        "date_of_birth": "01.01.2000",\n        "addresses": {\n            "city": "Chennai",\n            "state": "Tamil Nadu"\n        },\n        "summary": "lorem ipsum...",\n        "ai_summary": "lorem ipsum dolor...",\n        "education": [\n            {\n                "cgpa": 6,\n                "degree": "Software Engineering",\n                "school": "Example university",\n                "endDate": "2021-06-30",\n                "percent": null,\n                "relevance": "high",\n                "startDate": "2017-07-01",\n                "relevance_score": 9\n            }\n        ],\n        "work_experience": [\n            {\n                "company": "ABC example pvt ltd",\n                "endDate": "2023-11-30",\n                "position": "Software tester",\n                "relevance": "medium",\n                "startDate": "2022-12-01",\n                "description": "lorem ipsum dolor...",\n                "relevance_score": 6\n            },\n            ...\n        ],\n        "duration_per_work": [\n            {\n                "company": "ABC example pvt ltd",\n                "relevance_score": 6,\n                "experience_in_months": 12\n            },\n            ...\n        ],\n        "total_duration": 26,\n        "skills": [\n            {\n                "name": "Testing",\n                "relevance": "high",\n                "relevance_score": 9\n            },\n            ...\n        ],\n        "skills_matched": [\n            {\n                "name": "Testing",\n                "relevance": "high",\n                "relevance_score": 9\n            },\n            ...\n        ],\n        "skill_match_count": 0,\n        "certifications": [],\n        "projects": [\n            {\n                "name": "Example project",\n                "relevance": "high",\n                "description": "lorem ispum dolor...",\n                "relevance_score": 8\n            },\n            ...\n        ],\n        "overall_score": "8.900",\n        "resume_file":...link to object in S3 bucket,\n        "introduction_video": null,\n        "upload_count": 1,\n        "task_duration_seconds": 30,\n        "completed": true,\n        "task_message": "Resume Parsed Successfully",\n        "retries": 1,\n        "created_at": "2025-01-06T14:39:19.599535Z",\n        "updated_at": "2025-01-06T14:40:03.684118Z",\n        "relevant_experience_in_months": 2,\n        "expected_ctc": 2,\n        "status_text": "Under Review",\n        "approved_at": null,\n        "is_approved": false,\n        "job": 7,\n        "preference": 17,\n        "approved_by": null,\n        "updated_by": null,\n        "users_shared_with": []\n    },\n    "created_at": "2024-07-02T12:38:00.405406Z",\n    "updated_at": "2025-01-06T14:39:59.433143Z",\n    "notice_period_in_months": 2,\n    "current_ctc": 2,\n    "last_increment": null,\n    "hired": false\n}\n\n'})}),"\n",(0,r.jsx)(n.h3,{id:"get_count",children:(0,r.jsx)(n.code,{children:"get_count"})}),"\n",(0,r.jsx)(n.p,{children:"Returns aggregated counts for jobs, applicants, or both, based on the authenticated user's role and permissions."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Payload"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"GET"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "user":{\n        "id":123,\n        "role":"Admin"\n    },\n    "field":"Editor"\n}\n'})}),"\n",(0,r.jsx)(n.strong,{children:"Response"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "jobs": 123,\n    "applicants":12\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Response Code"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"200"}),(0,r.jsx)(n.td,{children:"SUCCESS: Count retrieved"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"500"}),(0,r.jsx)(n.td,{children:"FAIL: Server error"})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>t});var i=s(6540);const r={},d=i.createContext(r);function l(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);