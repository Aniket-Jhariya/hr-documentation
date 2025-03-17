"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7545],{1890:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>t,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"frontend/Utilities/Cards","title":"Cards","description":"Assessment Card","source":"@site/docs/frontend/Utilities/Cards.md","sourceDirName":"frontend/Utilities","slug":"/frontend/Utilities/Cards","permalink":"/hr-documentation/frontend/Utilities/Cards","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Private Route","permalink":"/hr-documentation/frontend/Utilities/Private Route"},"next":{"title":"Charts","permalink":"/hr-documentation/frontend/Utilities/Charts"}}');var d=n(4848),r=n(8453);const t={sidebar_position:1},l=void 0,c={},o=[{value:"Assessment Card",id:"assessment-card",level:2},{value:"Props",id:"props",level:3},{value:"State",id:"state",level:3},{value:"Functions and Methods",id:"functions-and-methods",level:3},{value:"Kpi Card",id:"kpi-card",level:2},{value:"Props",id:"props-1",level:3},{value:"Functions and Methods",id:"functions-and-methods-1",level:3},{value:"Styling and Layout",id:"styling-and-layout",level:3},{value:"Recent Applicant Card",id:"recent-applicant-card",level:2},{value:"Props",id:"props-2",level:3},{value:"Functions and Methods",id:"functions-and-methods-2",level:3},{value:"Top Location Card",id:"top-location-card",level:2},{value:"Props",id:"props-3",level:3},{value:"Functions and Methods",id:"functions-and-methods-3",level:3},{value:"Key Features",id:"key-features",level:3},{value:"Top Skills Card",id:"top-skills-card",level:2},{value:"Props",id:"props-4",level:3},{value:"Functions and Methods",id:"functions-and-methods-4",level:3},{value:"Styling",id:"styling",level:3}];function h(e){const s={code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.h2,{id:"assessment-card",children:"Assessment Card"}),"\n",(0,d.jsxs)(s.p,{children:["The ",(0,d.jsx)(s.code,{children:"AssessmentCard.js"})," file renders a card displaying details of an assessment. It is part of a larger React project, likely used in a user interface where assessments are listed and managed. The component supports viewing, editing, and publishing/unpublishing assessments, depending on the user's permissions. It also integrates with a custom hook (",(0,d.jsx)(s.code,{children:"usePublishPreBuiltAssessment"}),") to handle the publishing logic."]}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"File Path:"})," ",(0,d.jsx)(s.code,{children:"\\hr-frontend\\src\\utils\\cards\\AssessmentCard.js"})]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"Dependencies"}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.code,{children:"@heroicons/react/24/outline"}),": Provides icons used in the UI (e.g., ",(0,d.jsx)(s.code,{children:"ChevronDoubleRightIcon"}),", ",(0,d.jsx)(s.code,{children:"ClockIcon"}),", ",(0,d.jsx)(s.code,{children:"EllipsisVerticalIcon"}),", ",(0,d.jsx)(s.code,{children:"EyeIcon"}),", ",(0,d.jsx)(s.code,{children:"PencilIcon"}),")."]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.code,{children:"react-router-dom"}),": Used for navigation via the ",(0,d.jsx)(s.code,{children:"Link"})," component."]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.code,{children:"@headlessui/react"}),": Provides headless UI components for building accessible dropdown menus (",(0,d.jsx)(s.code,{children:"Menu"}),", ",(0,d.jsx)(s.code,{children:"MenuButton"}),", ",(0,d.jsx)(s.code,{children:"MenuItem"}),", ",(0,d.jsx)(s.code,{children:"MenuItems"}),", ",(0,d.jsx)(s.code,{children:"Transition"}),")."]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.code,{children:"usePublishPreBuiltAssessment"}),": A custom hook for handling the logic of publishing/unpublishing assessments."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(s.h3,{id:"props",children:"Props"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Prop Name"}),(0,d.jsx)(s.th,{children:"Description"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"item"})}),(0,d.jsxs)(s.td,{children:["An object representing the assessment data. It contains fields like ",(0,d.jsx)(s.code,{children:"title"}),", ",(0,d.jsx)(s.code,{children:"description"}),", ",(0,d.jsx)(s.code,{children:"category"}),", ",(0,d.jsx)(s.code,{children:"difficulty"}),", ",(0,d.jsx)(s.code,{children:"total_question"}),", ",(0,d.jsx)(s.code,{children:"time_duration"}),", and ",(0,d.jsx)(s.code,{children:"is_published"}),"."]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"editable"})}),(0,d.jsx)(s.td,{children:"A boolean indicating whether the assessment can be edited or published/unpublished by the user."})]})]})]}),"\n",(0,d.jsx)(s.h3,{id:"state",children:"State"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Variable Name"}),(0,d.jsx)(s.th,{children:"Purpose"})]})}),(0,d.jsx)(s.tbody,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"assessment"})}),(0,d.jsxs)(s.td,{children:["A state variable that stores the assessment data passed via the ",(0,d.jsx)(s.code,{children:"item"})," prop. It is updated whenever the ",(0,d.jsx)(s.code,{children:"item"})," prop changes."]})]})})]}),"\n",(0,d.jsx)(s.h3,{id:"functions-and-methods",children:"Functions and Methods"}),"\n",(0,d.jsxs)(s.ol,{children:["\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.code,{children:"updateAssessment(assessmentId, isPublished)"})}),"\n"]}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"Purpose"}),":","\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsx)(s.li,{children:"Updates the assessment's published status."}),"\n",(0,d.jsxs)(s.li,{children:["Calls ",(0,d.jsx)(s.code,{children:"publishPreBuiltAssessment"})," to update the assessment's status on the server."]}),"\n",(0,d.jsxs)(s.li,{children:["Updates the local ",(0,d.jsx)(s.code,{children:"assessment"})," state with the returned updated assessment data."]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"Parameters"}),":","\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.code,{children:"assessmentId"})," (string/number): The ID of the assessment to update."]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.code,{children:"isPublished"})," (boolean): The new published status (",(0,d.jsx)(s.code,{children:"true"})," for publish, ",(0,d.jsx)(s.code,{children:"false"})," for unpublish)."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(s.hr,{}),"\n",(0,d.jsx)(s.h2,{id:"kpi-card",children:"Kpi Card"}),"\n",(0,d.jsxs)(s.p,{children:["The ",(0,d.jsx)(s.code,{children:"KpiCard.js"})," file is a utility component in a React project designed to display Key Performance Indicator (KPI) metrics. It is a reusable, presentational component that renders a card with a title and a corresponding value. The component is styled using Tailwind CSS and is intended to be used across the application to consistently display KPI data."]}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"File Path:"})," ",(0,d.jsx)(s.code,{children:"\\hr-frontend\\src\\utils\\cards\\KpiCard.js"})]}),"\n"]}),"\n",(0,d.jsx)(s.h3,{id:"props-1",children:"Props"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Prop Name"}),(0,d.jsx)(s.th,{children:"Description"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"title"})}),(0,d.jsx)(s.td,{children:"The title or label for the KPI card. It describes the metric being displayed."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"value"})}),(0,d.jsx)(s.td,{children:"The value of the KPI metric. This is the primary data displayed in the card."})]})]})]}),"\n",(0,d.jsx)(s.h3,{id:"functions-and-methods-1",children:"Functions and Methods"}),"\n",(0,d.jsxs)(s.ol,{children:["\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.code,{children:"KpiCard"})}),"\n"]}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:["\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.strong,{children:"Purpose"}),":\r\nThe ",(0,d.jsx)(s.code,{children:"KpiCard"})," component is a functional React component that renders a styled card to display a KPI metric."]}),"\n"]}),"\n",(0,d.jsxs)(s.li,{children:["\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.strong,{children:"Parameters"}),":"]}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:(0,d.jsx)(s.code,{children:"title"})})," (",(0,d.jsx)(s.code,{children:"string"}),"): The title or label for the KPI card."]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:(0,d.jsx)(s.code,{children:"value"})})," (",(0,d.jsx)(s.code,{children:"string"})," or ",(0,d.jsx)(s.code,{children:"number"}),"): The value of the KPI metric."]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(s.li,{children:["\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.strong,{children:"Return Value"}),":"]}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:["Returns a JSX element representing a styled card with the provided ",(0,d.jsx)(s.code,{children:"title"})," and ",(0,d.jsx)(s.code,{children:"value"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(s.h3,{id:"styling-and-layout",children:"Styling and Layout"}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"Container"}),": The card container uses Tailwind classes for responsive width (",(0,d.jsx)(s.code,{children:"w-full md:w-1/4"}),"), height (",(0,d.jsx)(s.code,{children:"h-40"}),"), padding (",(0,d.jsx)(s.code,{children:"p-5"}),"), border (",(0,d.jsx)(s.code,{children:"border border-gray-300"}),"), shadow (",(0,d.jsx)(s.code,{children:"shadow-sm"}),"), background (",(0,d.jsx)(s.code,{children:"bg-white"}),"), and rounded corners (",(0,d.jsx)(s.code,{children:"rounded-lg"}),")."]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"Title"}),": The title is styled with medium font weight (",(0,d.jsx)(s.code,{children:"font-medium"}),"), gray text color (",(0,d.jsx)(s.code,{children:"text-gray-500"}),"), and margin-bottom (",(0,d.jsx)(s.code,{children:"mb-5"}),")."]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"Value"}),": The value is styled with bold font weight (",(0,d.jsx)(s.code,{children:"font-bold"}),"), large text size (",(0,d.jsx)(s.code,{children:"text-3xl"}),"), primary color (",(0,d.jsx)(s.code,{children:"text-primary-600"}),"), and truncation for long values (",(0,d.jsx)(s.code,{children:"truncate max-w-full"}),")."]}),"\n"]}),"\n",(0,d.jsx)(s.hr,{}),"\n",(0,d.jsx)(s.h2,{id:"recent-applicant-card",children:"Recent Applicant Card"}),"\n",(0,d.jsxs)(s.p,{children:["The ",(0,d.jsx)(s.code,{children:"RecentApplicantCard.js"})," file is a React functional component that renders a card displaying information about a recent applicant. This component is designed to be reusable and is likely used in a dashboard or list view to present key details such as the applicant's title, date, and time. It is styled using Tailwind CSS for a clean and responsive design."]}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"File Path:"})," ",(0,d.jsx)(s.code,{children:"\\hr-frontend\\src\\utils\\cards\\RecentApplicantCard.js"})]}),"\n"]}),"\n",(0,d.jsx)(s.h3,{id:"props-2",children:"Props"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Prop Name"}),(0,d.jsx)(s.th,{children:"Description"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"title"})}),(0,d.jsx)(s.td,{children:"The title or name of the applicant."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"date"})}),(0,d.jsx)(s.td,{children:"The date associated with the applicant."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"time"})}),(0,d.jsx)(s.td,{children:"The time associated with the applicant."})]})]})]}),"\n",(0,d.jsx)(s.h3,{id:"functions-and-methods-2",children:"Functions and Methods"}),"\n",(0,d.jsxs)(s.ol,{children:["\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.code,{children:"RecentApplicantCard"})}),"\n"]}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:["\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.strong,{children:"Purpose"}),":"]}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsx)(s.li,{children:"This functional component renders a card with details about a recent applicant. It uses Tailwind CSS for styling and is designed to be responsive."}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(s.li,{children:["\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.strong,{children:"Return Value"})}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:["Returns a JSX element representing a styled card with the provided ",(0,d.jsx)(s.code,{children:"title"}),", ",(0,d.jsx)(s.code,{children:"date"}),", and ",(0,d.jsx)(s.code,{children:"time"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(s.hr,{}),"\n",(0,d.jsx)(s.h2,{id:"top-location-card",children:"Top Location Card"}),"\n",(0,d.jsxs)(s.p,{children:["The ",(0,d.jsx)(s.code,{children:"TopLocationCard.js"})," file renders a card displaying key information about a top location. It is designed to present a title, a primary value, and a count of applicants in a visually appealing and structured format. This component is likely used in a dashboard or analytics section of the HR frontend application to highlight important metrics."]}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"File Path:"})," ",(0,d.jsx)(s.code,{children:"\\hr-frontend\\src\\utils\\cards\\TopLocationCard.js"})]}),"\n"]}),"\n",(0,d.jsx)(s.h3,{id:"props-3",children:"Props"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Prop Name"}),(0,d.jsx)(s.th,{children:"Description"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"title"})}),(0,d.jsx)(s.td,{children:'The title or label for the card (e.g., "Top Location").'})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"value"})}),(0,d.jsx)(s.td,{children:"The primary value to display (e.g., a location name or metric)."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"count"})}),(0,d.jsx)(s.td,{children:"The number of applicants associated with the location."})]})]})]}),"\n",(0,d.jsx)(s.h3,{id:"functions-and-methods-3",children:"Functions and Methods"}),"\n",(0,d.jsxs)(s.ol,{children:["\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.code,{children:"TopLocationCard"})," Component"]}),"\n"]}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"Description"}),":","\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:["The ",(0,d.jsx)(s.code,{children:"TopLocationCard"})," component is a stateless functional component that renders a card with a title, a primary value, and a count of applicants."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(s.ol,{start:"2",children:["\n",(0,d.jsxs)(s.li,{children:["Return Value","\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:["Returns a JSX element representing a styled card with the provided ",(0,d.jsx)(s.code,{children:"title"}),", ",(0,d.jsx)(s.code,{children:"value"}),", and ",(0,d.jsx)(s.code,{children:"count"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(s.h3,{id:"key-features",children:"Key Features"}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"Responsive Design"}),": The card's width adjusts based on screen size (",(0,d.jsx)(s.code,{children:"w-full md:w-1/4"}),")."]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"Truncation"}),": The primary value (",(0,d.jsx)(s.code,{children:"value"}),") is truncated if it exceeds the available space (",(0,d.jsx)(s.code,{children:"truncate max-w-full"}),")."]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"Styling"}),": Tailwind CSS classes are used for consistent styling, including background color, border, shadow, and text formatting."]}),"\n"]}),"\n",(0,d.jsx)(s.hr,{}),"\n",(0,d.jsx)(s.h2,{id:"top-skills-card",children:"Top Skills Card"}),"\n",(0,d.jsxs)(s.p,{children:["The ",(0,d.jsx)(s.code,{children:"TopSkillsCard.js"})," file is to display a card that showcases the top skills of applicants. It is a reusable UI component that takes in a ",(0,d.jsx)(s.code,{children:"title"})," and a ",(0,d.jsx)(s.code,{children:"value"})," (an array of skills with their respective counts) as props and renders them."]}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"File Path:"})," ",(0,d.jsx)(s.code,{children:"\\hr-frontend\\src\\utils\\cards\\TopSkillsCard.js"})]}),"\n"]}),"\n",(0,d.jsx)(s.h3,{id:"props-4",children:"Props"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Prop Name"}),(0,d.jsx)(s.th,{children:"Description"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"title"})}),(0,d.jsx)(s.td,{children:"Used to label the card and provide context for the data being displayed."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.strong,{children:(0,d.jsx)(s.code,{children:"value"})})}),(0,d.jsx)(s.td,{children:"Used to populate the card with skill data. An array of objects, where each object contains:"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"skill"})}),(0,d.jsx)(s.td,{children:"The name of the skill."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"count"})}),(0,d.jsx)(s.td,{children:"The number of applicants associated with that skill."})]})]})]}),"\n",(0,d.jsx)(s.h3,{id:"functions-and-methods-4",children:"Functions and Methods"}),"\n",(0,d.jsxs)(s.ol,{children:["\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.code,{children:"TopSkillsCard"})," Component"]}),"\n"]}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:["\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.strong,{children:"Purpose"})}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:["The ",(0,d.jsx)(s.code,{children:"value"})," array is mapped to render each skill and its associated count."]}),"\n",(0,d.jsx)(s.li,{children:"The first skill in the array is styled differently (larger font size) to emphasize its importance."}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(s.li,{children:["\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.strong,{children:"Return Value"})}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:["Returns a JSX element representing a styled card with the provided ",(0,d.jsx)(s.code,{children:"title"})," and ",(0,d.jsx)(s.code,{children:"value"})," data."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(s.h3,{id:"styling",children:"Styling"}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"Layout"}),": ",(0,d.jsx)(s.code,{children:"flex"}),", ",(0,d.jsx)(s.code,{children:"flex-col"}),", ",(0,d.jsx)(s.code,{children:"justify-start"}),", ",(0,d.jsx)(s.code,{children:"items-start"}),", ",(0,d.jsx)(s.code,{children:"w-full"}),", ",(0,d.jsx)(s.code,{children:"md:w-1/4"}),", ",(0,d.jsx)(s.code,{children:"h-40"}),", ",(0,d.jsx)(s.code,{children:"max-w-96"}),", ",(0,d.jsx)(s.code,{children:"p-4"}),"."]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"Typography"}),": ",(0,d.jsx)(s.code,{children:"font-medium"}),", ",(0,d.jsx)(s.code,{children:"font-bold"}),", ",(0,d.jsx)(s.code,{children:"text-2xl"}),", ",(0,d.jsx)(s.code,{children:"text-sm"}),", ",(0,d.jsx)(s.code,{children:"text-gray-500"}),", ",(0,d.jsx)(s.code,{children:"text-primary-600"}),", ",(0,d.jsx)(s.code,{children:"text-gray-400"}),"."]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"Borders and Shadows"}),": ",(0,d.jsx)(s.code,{children:"border"}),", ",(0,d.jsx)(s.code,{children:"border-gray-300"}),", ",(0,d.jsx)(s.code,{children:"shadow-sm"}),", ",(0,d.jsx)(s.code,{children:"rounded-lg"}),"."]}),"\n"]}),"\n",(0,d.jsx)(s.hr,{})]})}function a(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>l});var i=n(6540);const d={},r=i.createContext(d);function t(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);