"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4426],{7831:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>x,frontMatter:()=>t,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"backend/interview/models","title":"Models","description":"QuestionSet","source":"@site/docs/backend/interview/models.md","sourceDirName":"backend/interview","slug":"/backend/interview/models","permalink":"/hr-documentation/backend/interview/models","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Endpoints","permalink":"/hr-documentation/backend/interview/endpoints"},"next":{"title":"Job","permalink":"/hr-documentation/category/job"}}');var d=s(4848),r=s(8453);const t={sidebar_position:2},l="Models",o={},h=[{value:"QuestionSet",id:"questionset",level:2},{value:"Fields:",id:"fields",level:3},{value:"Methods:",id:"methods",level:3},{value:"Question",id:"question",level:2},{value:"Fields:",id:"fields-1",level:3},{value:"Methods:",id:"methods-1",level:3},{value:"InterviewModule",id:"interviewmodule",level:2},{value:"Fields:",id:"fields-2",level:3},{value:"Methods:",id:"methods-2",level:3},{value:"InterviewStep",id:"interviewstep",level:2},{value:"Fields:",id:"fields-3",level:3},{value:"Meta:",id:"meta",level:3},{value:"InterviewStepFeedback",id:"interviewstepfeedback",level:2},{value:"Fields:",id:"fields-4",level:3},{value:"Answer",id:"answer",level:2},{value:"Fields:",id:"fields-5",level:3},{value:"Methods:",id:"methods-3",level:3}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"models",children:"Models"})}),"\n",(0,d.jsx)(n.h2,{id:"questionset",children:"QuestionSet"}),"\n",(0,d.jsx)(n.p,{children:"Stores sets of questions for interviews or assessments."}),"\n",(0,d.jsx)(n.h3,{id:"fields",children:"Fields:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"name"})})," (CharField): The name of the question set."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"created_by"})})," (ForeignKey): The user who created the question set."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"created_at"})})," (DateTimeField): Timestamp when the question set was created."]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"methods",children:"Methods:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"__str__"})}),": Returns a string representation of the question set."]}),"\n"]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h2,{id:"question",children:"Question"}),"\n",(0,d.jsx)(n.p,{children:"Stores individual questions used in assessments or interviews."}),"\n",(0,d.jsx)(n.h3,{id:"fields-1",children:"Fields:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"text"})})," (TextField): The content of the question."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"type"})}),' (CharField): The type of question (default: "text").']}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"time_limit"})})," (PositiveIntegerField): The time limit for answering the question."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"question_set"})})," (ForeignKey): The question set this question belongs to."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"created_at"})})," (DateTimeField): Timestamp when the question was created."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"created_by"})})," (ForeignKey): The user who created the question."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"is_deleted"})})," (BooleanField): Indicates if the question is deleted (default: ",(0,d.jsx)(n.code,{children:"False"}),")."]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"methods-1",children:"Methods:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"__str__"})}),": Returns a string representation of the question."]}),"\n"]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h2,{id:"interviewmodule",children:"InterviewModule"}),"\n",(0,d.jsx)(n.p,{children:"Defines an interview process containing multiple steps."}),"\n",(0,d.jsx)(n.h3,{id:"fields-2",children:"Fields:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"name"})})," (CharField): The name of the interview module."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"description"})})," (CharField): A short description of the interview module."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"steps_json"})})," (JSONField): JSON structure defining interview steps."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"rounds"})})," (PositiveIntegerField): The number of rounds in the interview."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"created_by"})})," (ForeignKey): The user who created the module."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"created_at"})})," (DateTimeField): Timestamp when the module was created."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"updated_at"})})," (DateTimeField): Timestamp when the module was last updated."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"updated_by"})})," (ForeignKey): The user who last updated the module."]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"methods-2",children:"Methods:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"__str__"})}),": Returns a string representation of the module."]}),"\n"]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h2,{id:"interviewstep",children:"InterviewStep"}),"\n",(0,d.jsx)(n.p,{children:"Defines an individual step within an interview process."}),"\n",(0,d.jsx)(n.h3,{id:"fields-3",children:"Fields:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"job"})})," (ForeignKey): The job associated with this interview step."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"candidate"})})," (ForeignKey): The candidate participating in the step."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"module"})})," (ForeignKey): The interview module this step belongs to."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"service"})})," (ForeignKey): The service related to this step."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"order"})})," (PositiveIntegerField): The order of the step in the process."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"question_set"})})," (ForeignKey): The question set used in this step."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"preference"})})," (PositiveIntegerField): Preference level for this step."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"started"})})," (BooleanField): Whether the step has started."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"current"})})," (BooleanField): Whether the step is currently active."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"completed"})})," (BooleanField): Whether the step is completed."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"approved"})})," (BooleanField): Whether the step is approved."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"approved_by"})})," (ForeignKey): The user who approved the step."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"completed_time"})})," (DateTimeField): Timestamp when the step was completed."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"statusText"})}),' (CharField): Textual status of the step (default: "Not Started").']}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"feedback"})})," (TextField): Feedback provided for this step."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"duration"})})," (CharField): The duration of this step."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"feedback_status"})})," (BooleanField): Indicates whether feedback has been provided."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"questions"})})," (ManyToManyField): Questions used in this step."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"random_questions"})})," (BooleanField): Whether questions are randomly selected."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"random_questions_count"})})," (PositiveIntegerField): The number of random questions."]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"meta",children:"Meta:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Unique together: (",(0,d.jsx)(n.code,{children:"candidate"}),", ",(0,d.jsx)(n.code,{children:"module"}),", ",(0,d.jsx)(n.code,{children:"order"}),")"]}),"\n",(0,d.jsxs)(n.li,{children:["Ordering: [",(0,d.jsx)(n.code,{children:"module"}),", ",(0,d.jsx)(n.code,{children:"order"}),"]"]}),"\n"]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h2,{id:"interviewstepfeedback",children:"InterviewStepFeedback"}),"\n",(0,d.jsx)(n.p,{children:"Stores feedback given for interview steps."}),"\n",(0,d.jsx)(n.h3,{id:"fields-4",children:"Fields:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"step"})})," (ForeignKey): The interview step being reviewed."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"candidate"})})," (ForeignKey): The candidate receiving feedback."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"rating"})})," (IntegerField): The rating given to the candidate."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"step_name"})})," (CharField): The name of the interview step."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"user"})})," (ForeignKey): The user providing the feedback."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"job"})})," (ForeignKey): The job associated with the feedback."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"feedback"})})," (TextField): The content of the feedback."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"created_at"})})," (DateTimeField): Timestamp when feedback was created."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"updated_at"})})," (DateTimeField): Timestamp when feedback was last updated."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"anonymous"})})," (BooleanField): Indicates if feedback was given anonymously."]}),"\n"]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h2,{id:"answer",children:"Answer"}),"\n",(0,d.jsx)(n.p,{children:"Stores answers submitted by candidates for interview questions."}),"\n",(0,d.jsx)(n.h3,{id:"fields-5",children:"Fields:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"question"})})," (ForeignKey): The question being answered."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"question_text"})})," (TextField): The text of the question."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"question_set"})})," (ForeignKey): The question set this answer belongs to."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"candidate"})})," (ForeignKey): The candidate providing the answer."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"type"})}),' (TextField): The type of answer (default: "text").']}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"screening_type"})})," (CharField): The type of screening process."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"screening_id"})})," (PositiveIntegerField): The ID of the screening."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"text"})})," (TextField): The text response."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"audio_file"})})," (FileField): The audio file of the response."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"video_file"})})," (FileField): The video file of the response."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"video_thumbnail"})})," (FileField): The thumbnail for the video response."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"video_analysis"})})," (OneToOneField): Video analysis of the response."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"started"})})," (DateTimeField): Timestamp when the answer was started."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"submitted_at"})})," (DateTimeField): Timestamp when the answer was submitted."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"step"})})," (ForeignKey): The interview step this answer belongs to."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"duration"})})," (IntegerField): The duration taken to answer."]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"methods-3",children:"Methods:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"__str__"})}),": Returns a string representation of the answer."]}),"\n"]}),"\n",(0,d.jsx)(n.hr,{})]})}function x(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>l});var i=s(6540);const d={},r=i.createContext(d);function t(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);