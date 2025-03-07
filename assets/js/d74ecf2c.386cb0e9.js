"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5087],{5350:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>o});const a=JSON.parse('{"id":"frontend/Components/Applicants/Applicants","title":"Applicants","description":"The Applicants component is a React-based component designed to display and manage a list of job applicants within the CandidHR application. It provides a tabular view of applicants, allowing users to filter, sort, and interact with applicant data.","source":"@site/docs/frontend/Components/Applicants/Applicants.md","sourceDirName":"frontend/Components/Applicants","slug":"/frontend/Components/Applicants/","permalink":"/hr-documentation/frontend/Components/Applicants/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Applicant Tracking","permalink":"/hr-documentation/frontend/Components/Applicants/Applicant Tracking"},"next":{"title":"Audio Player","permalink":"/hr-documentation/frontend/Components/Applicants/Audio Player"}}');var s=t(4848),i=t(8453);const l={sidebar_position:3},r=void 0,c={},o=[{value:"State Management",id:"state-management",level:3},{value:"Field Mapping",id:"field-mapping",level:3},{value:"Table Columns",id:"table-columns",level:3},{value:"Functions and Methods",id:"functions-and-methods",level:3},{value:"Rendering",id:"rendering",level:3}];function d(e){const n={code:"code",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"Applicants"})," component is a React-based component designed to display and manage a list of job applicants within the CandidHR application. It provides a tabular view of applicants, allowing users to filter, sort, and interact with applicant data."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"File Path:"})," ",(0,s.jsx)(n.code,{children:"\\hr-frontend\\src\\components\\applicants\\Applicants.js"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Table Component:"})," A custom table component for rendering applicant data."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"DefaultUserImage:"})," A default avatar image used when an applicant's profile picture is not available."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"API Constants:"})," ",(0,s.jsx)(n.code,{children:"api"})," is used to define the base URL for API requests."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"state-management",children:"State Management"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Variable Name"}),(0,s.jsx)(n.th,{children:"Purpose"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"userDetails"}),", ",(0,s.jsx)(n.code,{children:"authTokens"}),", ",(0,s.jsx)(n.code,{children:"logoutUser"}),", and ",(0,s.jsx)(n.code,{children:"domain"})]}),(0,s.jsxs)(n.td,{children:["extracted from the ",(0,s.jsx)(n.code,{children:"AuthContext"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"error"})," and ",(0,s.jsx)(n.code,{children:"successMessage"})]}),(0,s.jsx)(n.td,{children:"used to handle and display error and success messages."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"navigate"})}),(0,s.jsx)(n.td,{children:"used for programmatic navigation."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"applicants"})," and ",(0,s.jsx)(n.code,{children:"filteredApplicants"})]}),(0,s.jsx)(n.td,{children:"store the list of applicants and the filtered list, respectively."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"applicantsLoading"})}),(0,s.jsx)(n.td,{children:"indicates whether the applicant data is being fetched."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"searchTerm"}),", ",(0,s.jsx)(n.code,{children:"sortingOption"}),", and ",(0,s.jsx)(n.code,{children:"filterSearchTerm"})]}),(0,s.jsx)(n.td,{children:"manage the search and filter criteria."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"tableInstance"})}),(0,s.jsx)(n.td,{children:"stores the instance of the table for further manipulation."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"tableRowCount"})," and ",(0,s.jsx)(n.code,{children:"totalCount"})]}),(0,s.jsx)(n.td,{children:"manage the count of rows in the table."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"url"})}),(0,s.jsx)(n.td,{children:"stores the API endpoint for fetching applicant data."})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"field-mapping",children:"Field Mapping"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'const fieldMapping = {\n  name: "name",\n  overall_score: "resumes__resume_score__overall_score",\n  total_duration: "resumes__total_duration",\n  city: "candidate_city",\n  state: "candidate_state",\n  created_at: "latest_resume_created_at",\n  experience: "resumes__relevant_experience_in_months",\n  job_name: "applied_jobs__title"\n};\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Field Mapping:"})," Maps the frontend table fields to the corresponding backend fields."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"table-columns",children:"Table Columns"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'const columns = [\n  {\n    title: "Name",\n    field: "name",\n    hozAlign: "left",\n    vertAlign: "middle",\n    minWidth: 120,\n    titleFormatter: function (cell, formatterParams, onRendered) {\n      return (\n        \'<div class="column-container">\' +\n        `<label class="column-title">${cell.getValue()}</label>` +\n        "</div>"\n      );\n    },\n    formatter: linkFormatter,\n    cellClick: function (e, cell) {\n      const id = cell.getData().id;\n      const latestJobId = cell.getData().applied_jobs[0]?.id || null;\n      if (latestJobId) {\n        navigate(`/app/user/applicants/applicant/${id}/profile/${latestJobId}/overview/`);\n      }\n    },\n    headerFilter: true,\n    headerFilterFunc: "like",\n    headerFilterParams: {\n      elementAttributes: {\n        class: "w-full rounded-lg border border-gray-300 p-2 my-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500",\n        placeholder: "",\n      },\n    },\n  },\n];\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Columns Configuration:"})," Defines the columns for the table, including their titles, alignment, formatters, and filter options."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"functions-and-methods",children:"Functions and Methods"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Formatter Functions"}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Formatter Functions:"})," Custom functions to format the display of email, contact, and other fields in the table."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'function emailFormatter(cell, formatterParams, onRendered) {\n  return `<div class="flex gap-x-2">\n            //More Formatting Logic...\n            <span class="me-2">${cell.getValue()}</span>\n          </div>`;\n}\n\nfunction contactFormatter(cell, formatterParams, onRendered) {\n  const str = cell?.getValue()?.toString();\n  const match = str?.match(/["\'\\(]?(\\d{10,})["\'\\)]?/);\n  const value = match ? match[1] : null;\n  return value\n    ? `<div class="flex gap-x-2">\n        //More Formatting Logic...\n        <span class="me-2">${value}</span>\n      </div>`\n    : null;\n}\n\nfunction openOutlook(toEmail) {\n  const subject = "CandidHR : Your Subject";\n  const mailtoUrl = `mailto:${encodeURIComponent(toEmail)}?subject=${encodeURIComponent(subject)}`;\n  window.location.href = mailtoUrl;\n}\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"Search and Filter Functions"}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Search and Filter Functions:"})," Functions to handle search and filter operations on the applicant data."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"const handleSearch = (fieldName, searchValue) => {\n  setSearchTerm(searchValue);\n  const newSearch = { ...filterSearchTerm };\n  newSearch[fieldName] = searchValue;\n  setFilterSearchTerm(newSearch);\n  const filtered = applicants.filter((applicant) =>\n    applicant[fieldName].toLowerCase().includes(searchValue.toLowerCase())\n  );\n  setFilteredApplicants(filtered);\n};\n\nfunction skillsFilterFunction(value, data, filterParams) {\n  if (data && value) {\n    return data.some((skill) =>\n      skill.toLowerCase().includes(value.toLowerCase())\n    );\n  }\n}\n\nfunction dateFilter(value, data, filterParams) {\n  return new Date(data).toDateString() == new Date(value).toDateString();\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"rendering",children:"Rendering"}),"\n",(0,s.jsxs)(n.p,{children:["The component renders a header section with applicant count and status indicators, followed by the ",(0,s.jsx)(n.code,{children:"Table"})," component that displays the applicant data."]}),"\n",(0,s.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>r});var a=t(6540);const s={},i=a.createContext(s);function l(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);