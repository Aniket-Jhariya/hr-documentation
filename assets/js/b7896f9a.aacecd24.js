"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9937],{5293:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>r,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"frontend/Utilities/Sidebar","title":"Sidebar","description":"Sidebar","source":"@site/docs/frontend/Utilities/Sidebar.md","sourceDirName":"frontend/Utilities","slug":"/frontend/Utilities/Sidebar","permalink":"/hr-documentation/frontend/Utilities/Sidebar","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":16,"frontMatter":{"sidebar_position":16},"sidebar":"tutorialSidebar","previous":{"title":"React Quill","permalink":"/hr-documentation/frontend/Utilities/React Quill"},"next":{"title":"Slide Over","permalink":"/hr-documentation/frontend/Utilities/Slide Over"}}');var d=s(4848),t=s(8453);const r={sidebar_position:16},l=void 0,c={},h=[{value:"Sidebar",id:"sidebar",level:2},{value:"State Variables",id:"state-variables",level:3},{value:"Functions and Methods",id:"functions-and-methods",level:3},{value:"Rendering",id:"rendering",level:3},{value:"Icon Tab",id:"icon-tab",level:2},{value:"Props",id:"props",level:3},{value:"Functions and Methods",id:"functions-and-methods-1",level:3},{value:"Tab",id:"tab",level:2},{value:"Props",id:"props-1",level:3},{value:"Functions and Methods",id:"functions-and-methods-2",level:3}];function o(e){const n={code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h2,{id:"sidebar",children:"Sidebar"}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.code,{children:"Sidebar.js"})," file is responsible for rendering a dynamic and responsive sidebar in the HR Frontend application. It integrates with the application's routing system, authentication context, and sidebar state management to display navigation tabs and service-related tabs. The sidebar adapts to user roles, permissions, and screen sizes, providing a seamless navigation experience."]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"File Path:"})," ",(0,d.jsx)(n.code,{children:"\\hr-frontend\\src\\utils\\sidebar\\Sidebar.js"})]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"state-variables",children:"State Variables"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Variable Name"}),(0,d.jsx)(n.th,{children:"Purpose"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"Tab"})})}),(0,d.jsx)(n.td,{children:"Represents a navigation tab in the sidebar."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"name"})}),(0,d.jsx)(n.td,{children:"Display name of the tab"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"id"})}),(0,d.jsx)(n.td,{children:"Unique identifier for the tab"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"href"})}),(0,d.jsx)(n.td,{children:"URL path for navigation"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"current"})}),(0,d.jsx)(n.td,{children:"Indicates if the tab is currently active"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"icon"})}),(0,d.jsx)(n.td,{children:"FontAwesome icon class for the tab"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"show"})}),(0,d.jsx)(n.td,{children:"Determines if the tab should be displayed based on user role"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"isLocked"})}),(0,d.jsx)(n.td,{children:"Indicates if the tab is locked"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"lockIcon"})}),(0,d.jsx)(n.td,{children:"FontAwesome icon class for the lock icon"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"service-tab"})})}),(0,d.jsx)(n.td,{children:"Represents a service-related tab in the sidebar."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"name"})}),(0,d.jsx)(n.td,{children:"Display name of the service tab"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"id"})}),(0,d.jsx)(n.td,{children:"Unique identifier for the service"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"href"})}),(0,d.jsx)(n.td,{children:"URL path for navigation"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"key"})}),(0,d.jsx)(n.td,{children:"Key identifier for the service type"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"show"})}),(0,d.jsx)(n.td,{children:"Determines if the tab should be displayed"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"current"})}),(0,d.jsx)(n.td,{children:"Indicates if the tab is currently active"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"locked"})}),(0,d.jsx)(n.td,{children:"Indicates if the tab is locked"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"icon"})}),(0,d.jsx)(n.td,{children:"ontAwesome icon class for the tab"})]})]})]}),"\n",(0,d.jsx)(n.h3,{id:"functions-and-methods",children:"Functions and Methods"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"useEffect"})}),"\n"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Initialization of Tabs"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Purpose"}),":","\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"Sets up the navigation tabs based on the user's role and details."}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Side Effects"}),": Updates the ",(0,d.jsx)(n.code,{children:"tabs"})," state with an array of tab objects."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Active Tab Detection"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Purpose"}),":","\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"Determines the active tab based on the current URL path."}),"\n",(0,d.jsxs)(n.li,{children:["Updates the ",(0,d.jsx)(n.code,{children:"activeTab"})," state."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Service Tabs Initialization"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Purpose"}),":","\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"Maps organization services to service tabs."}),"\n",(0,d.jsxs)(n.li,{children:["Updates the ",(0,d.jsx)(n.code,{children:"serviceTabs"})," state."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Click Outside Handling"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Purpose"}),":","\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"Closes the mobile sidebar when clicking outside of it."}),"\n",(0,d.jsxs)(n.li,{children:["Adds/removes a ",(0,d.jsx)(n.code,{children:"mousedown"})," event listener."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.ol,{start:"2",children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"getCount"})}),"\n"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Purpose"}),":","\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"Fetches job and applicant counts from the API."}),"\n",(0,d.jsxs)(n.li,{children:["Updates ",(0,d.jsx)(n.code,{children:"jobCount"})," and ",(0,d.jsx)(n.code,{children:"applicantsCount"})," states."]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Error Handling"}),": Logs errors to the console."]}),"\n"]}),"\n",(0,d.jsxs)(n.ol,{start:"3",children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"handleToggleSidebar"})}),"\n"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Purpose"}),":","\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"Toggles the sidebar's open/closed state."}),"\n",(0,d.jsxs)(n.li,{children:["Calls ",(0,d.jsx)(n.code,{children:"toggleSidebar"})," from ",(0,d.jsx)(n.code,{children:"SidebarContext"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.ol,{start:"4",children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"handleTabClick"})}),"\n"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Purpose"}),":","\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"Updates the active tab state when a tab is clicked."}),"\n",(0,d.jsxs)(n.li,{children:["Updates the ",(0,d.jsx)(n.code,{children:"activeTab"})," state."]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Parameters"}),":","\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"tab"}),": The name of the clicked tab."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"rendering",children:"Rendering"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"Tab"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"Renders a full-width tab with an icon, title, and optional lock icon."}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"IconTab"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"Renders a compact tab with only an icon, used when the sidebar is collapsed."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h2,{id:"icon-tab",children:"Icon Tab"}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.code,{children:"IconTab"})," component is designed to render a clickable tab with an icon and a title. It is typically used in a sidebar or navigation menu within the React project. The component supports conditional rendering, styling based on active state, and locking functionality to disable interaction."]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"File Path:"})," ",(0,d.jsx)(n.code,{children:"\\hr-frontend\\src\\utils\\sidebar\\IconTab.js"})]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"props",children:"Props"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Prop Name"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"link"})}),(0,d.jsx)(n.td,{children:"The URL or path to navigate to when the tab is clicked."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"title"})}),(0,d.jsx)(n.td,{children:"The title or label associated with the tab."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"iconClass"})}),(0,d.jsx)(n.td,{children:"The CSS class for the icon displayed in the tab."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"isActive"})}),(0,d.jsxs)(n.td,{children:["Determines if the tab is in an active state. If ",(0,d.jsx)(n.code,{children:"true"}),", the tab will have additional styling to indicate its active status."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"isLocked"})}),(0,d.jsxs)(n.td,{children:["Determines if the tab is locked. If ",(0,d.jsx)(n.code,{children:"true"}),", the tab will be visually disabled (grayed out) and non-interactive."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"onClick"})}),(0,d.jsx)(n.td,{children:"A callback function triggered when the tab is clicked."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"show"})}),(0,d.jsxs)(n.td,{children:["Controls the visibility of the tab. If ",(0,d.jsx)(n.code,{children:"false"}),", the tab will not be rendered."]})]})]})]}),"\n",(0,d.jsx)(n.h3,{id:"functions-and-methods-1",children:"Functions and Methods"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"IconTab"})," Component"]}),"\n"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Purpose"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Navigation to the specified ",(0,d.jsx)(n.code,{children:"link"})," when clicked."]}),"\n",(0,d.jsxs)(n.li,{children:["Execution of the ",(0,d.jsx)(n.code,{children:"onClick"})," callback function when the tab is clicked."]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Return Value"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"JSX Element"}),": Returns a ",(0,d.jsx)(n.code,{children:"Link"})," component from ",(0,d.jsx)(n.code,{children:"react-router-dom"})," wrapped in a fragment. The ",(0,d.jsx)(n.code,{children:"Link"})," is conditionally rendered based on the ",(0,d.jsx)(n.code,{children:"show"})," prop."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h2,{id:"tab",children:"Tab"}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.code,{children:"Tab.js"}),' file renders a tab in a sidebar navigation. It is designed to be reusable and memoized for performance optimization. The tab can display a title, an icon, and optional counts for "Jobs" or "Applicants."']}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"File Path:"})," ",(0,d.jsx)(n.code,{children:"\\hr-frontend\\src\\utils\\sidebar\\Tab.js"})]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"props-1",children:"Props"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Prop Name"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"link"})}),(0,d.jsx)(n.td,{children:"The URL to navigate to when the tab is clicked."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"title"})}),(0,d.jsx)(n.td,{children:"The display text for the tab."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"iconClass"})}),(0,d.jsx)(n.td,{children:"CSS class for the icon displayed next to the title."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"isActive"})}),(0,d.jsx)(n.td,{children:"Indicates if the tab is currently active."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"isLocked"})}),(0,d.jsx)(n.td,{children:"Indicates if the tab is locked (disabled)."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"show"})}),(0,d.jsx)(n.td,{children:"Controls whether the tab is rendered."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"lockIcon"})}),(0,d.jsx)(n.td,{children:"CSS class for the lock icon displayed when the tab is locked."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"onClick"})}),(0,d.jsx)(n.td,{children:"Callback function triggered when the tab is clicked."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"applicantsCount"})}),(0,d.jsx)(n.td,{children:'Optional count displayed for the "Applicants" tab.'})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"jobCount"})}),(0,d.jsx)(n.td,{children:'Optional count displayed for the "Jobs" tab.'})]})]})]}),"\n",(0,d.jsx)(n.h3,{id:"functions-and-methods-2",children:"Functions and Methods"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"Tab"})}),"\n"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Purpose"}),":"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["The ",(0,d.jsx)(n.code,{children:"Tab"})," component is a memoized functional component that renders a navigation tab."]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Return Value"})}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"JSX Element"}),": A ",(0,d.jsx)(n.code,{children:"Link"})," element wrapped in a fragment. The ",(0,d.jsx)(n.code,{children:"Link"})," element includes:"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"A title and icon."}),"\n",(0,d.jsx)(n.li,{children:'Optional count badges for "Jobs" or "Applicants."'}),"\n",(0,d.jsx)(n.li,{children:"A lock icon if the tab is locked."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.hr,{})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>l});var i=s(6540);const d={},t=i.createContext(d);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);