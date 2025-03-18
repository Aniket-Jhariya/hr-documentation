"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1207],{7293:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"frontend/Utilities/Tables","title":"Tables","description":"Table","source":"@site/docs/frontend/Utilities/Tables.md","sourceDirName":"frontend/Utilities","slug":"/frontend/Utilities/Tables","permalink":"/hr-documentation/frontend/Utilities/Tables","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":20,"frontMatter":{"sidebar_position":20},"sidebar":"tutorialSidebar","previous":{"title":"Switches","permalink":"/hr-documentation/frontend/Utilities/Switches"},"next":{"title":"Toasts","permalink":"/hr-documentation/frontend/Utilities/Toasts"}}');var l=s(4848),r=s(8453);const i={sidebar_position:20},d=void 0,o={},c=[{value:"Table",id:"table",level:2},{value:"Props",id:"props",level:3},{value:"Functions and Methods",id:"functions-and-methods",level:3},{value:"Styling",id:"styling",level:3},{value:"Menu",id:"menu",level:2},{value:"Props",id:"props-1",level:3},{value:"Functions and Methods",id:"functions-and-methods-1",level:3},{value:"Progressive Load Table",id:"progressive-load-table",level:2},{value:"Props",id:"props-2",level:3},{value:"Functions and Methods",id:"functions-and-methods-2",level:3}];function a(e){const n={code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"table",children:"Table"}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"Table.js"})," file integrates the Tabulator library to render and manage dynamic, server-side paginated, sortable, and filterable tables. It is designed to fetch data from a backend API, handle user interactions like sorting and filtering, and persist certain table states (e.g., filters, pagination) using cookies."]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"File Path:"})," ",(0,l.jsx)(n.code,{children:"\\hr-frontend\\src\\utils\\tables\\Table.js"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Dependencies"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"tabulator-tables"}),": Library used to render and manage the table."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"AuthContext"}),": Provides authentication tokens for API requests."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"props",children:"Props"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Prop Name"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"setTableInstance"})}),(0,l.jsx)(n.td,{children:"Callback to pass the Tabulator instance to the parent component."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"data"})}),(0,l.jsx)(n.td,{children:"Initial data to populate the table (optional)."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"columns"})}),(0,l.jsx)(n.td,{children:"Column definitions for the table."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"url"})}),(0,l.jsx)(n.td,{children:"API endpoint to fetch data from."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"fieldMapping"})}),(0,l.jsx)(n.td,{children:"Mapping of table fields to API fields for filtering and sorting."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"setTableRowCount"})}),(0,l.jsx)(n.td,{children:"Callback to pass the total row count to the parent component."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"initialSortColumns"})}),(0,l.jsx)(n.td,{children:"Initial sorting configuration for the table."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"persistenceId"})}),(0,l.jsxs)(n.td,{children:["Unique identifier for persisting table state (default: ",(0,l.jsx)(n.code,{children:'"custom-table"'}),")."]})]})]})]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"functions-and-methods",children:"Functions and Methods"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Table"})," Component"]}),"\n"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Purpose"}),":"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Initializes and destroys the Tabulator table on mount/unmount."}),"\n",(0,l.jsx)(n.li,{children:"Updates the parent component with the Tabulator instance and row count."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Return Value"}),":"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Returns a ",(0,l.jsx)(n.code,{children:"div"})," element containing the Tabulator table."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.ol,{start:"2",children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"useEffect"})," Hook"]}),"\n"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Purpose"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Initializes the Tabulator table when the ",(0,l.jsx)(n.code,{children:"url"})," prop changes."]}),"\n",(0,l.jsx)(n.li,{children:"Creates a new Tabulator instance with the provided configuration."}),"\n",(0,l.jsx)(n.li,{children:"Sets up server-side pagination, sorting, and filtering."}),"\n",(0,l.jsx)(n.li,{children:"Persists table state (filters, pagination) using cookies."}),"\n",(0,l.jsx)(n.li,{children:"Destroys the table instance when the component unmounts."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.ol,{start:"3",children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"buildQueryParams"})," Function"]}),"\n"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Purpose"}),":"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Constructs query parameters for filtering and sorting based on user input."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"filters"}),": Array of filter objects."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"sortModel"}),": Array of sort objects (unused in the current implementation)."]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Return Value"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"A string of query parameters formatted for the backend API."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"styling",children:"Styling"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"CSS Statement"}),(0,l.jsx)(n.th,{children:"Purpose"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:".dashboard-table.tabulator"})}),(0,l.jsx)(n.td,{children:"Styles for tables used in dashboards, including rounded corners, box shadows, and background colors."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:".data-table .tabulator"})}),(0,l.jsx)(n.td,{children:"Styles for general data tables, with similar properties but slightly different border radii and background colors."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:".dashboard-table.tabulator .tabulator-header .tabulator-col"})}),(0,l.jsx)(n.td,{children:"Styles for table headers in dashboard tables, including background color, font , and padding."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:".data-table .tabulator .tabulator-header .tabulator-col"})}),(0,l.jsx)(n.td,{children:"Styles for headers in general data tables, with a white background and gray text."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:".dashboard-table.tabulator .tabulator-row"})}),(0,l.jsx)(n.td,{children:"Styles for rows in dashboard tables, including padding, font size, and border."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:".data-table .tabulator .tabulator-row"})}),(0,l.jsx)(n.td,{children:"Styles for rows in general data tables, with similar properties but different padding and border styles."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:".dashboard-table .tabulator-cell"})}),(0,l.jsx)(n.td,{children:"Styles for cells in dashboard tables, including vertical alignment and padding."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:".data-table .tabulator-cell"})}),(0,l.jsx)(n.td,{children:"Styles for cells in general data tables, with similar properties."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:".dashboard-table.tabulator .tabulator-row:hover"})}),(0,l.jsx)(n.td,{children:"Adds a hover effect for rows in dashboard tables."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:".dashboard-table.tabulator-row.tabulator-selected"})}),(0,l.jsx)(n.td,{children:"Styles for selected rows in dashboard tables."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:".data-table .tabulator-row.tabulator-selected"})}),(0,l.jsx)(n.td,{children:"Styles for selected rows in general data tables."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:".dashboard-table .tabulator-cell .bg-green-100"})}),(0,l.jsx)(n.td,{children:"Styles for green status badges."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:".dashboard-table .tabulator-cell .bg-red-100"})}),(0,l.jsx)(n.td,{children:"Styles for red status badges."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:".dashboard-table .tabulator-footer"})}),(0,l.jsx)(n.td,{children:"Styles for table footers in dashboard tables."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:".dashboard-table .tabulator-footer .tabulator-page.active"})}),(0,l.jsx)(n.td,{children:"Styles for active pagination buttons in dashboard tables."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:".data-table .tabulator-footer .tabulator-page.active"})}),(0,l.jsx)(n.td,{children:"Styles for active pagination buttons in general data tables."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:".column-filter-icon"})}),(0,l.jsx)(n.td,{children:"Styles for filter icons in table columns."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:".column-filter"})}),(0,l.jsx)(n.td,{children:"Styles for filter inputs in table columns."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:".column-filter input"})}),(0,l.jsx)(n.td,{children:"Styles for input fields within column filters."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"#custom-table .tabulator .tabulator-header .tabulator-col .tabulator-col-content .tabulator-col-sorter"})}),(0,l.jsx)(n.td,{children:"Styles for sorting icons in custom tables."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"#custom-table .tabulator .tabulator-header .tabulator-col .tabulator-col-content .tabulator-col-sorter .tabulator-arrow"})}),(0,l.jsx)(n.td,{children:"Styles for sorting arrows."})]})]})]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"menu",children:"Menu"}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"Menu.js"}),' file provides a dropdown menu with options for "Edit" and "Delete" actions. The component manages its own state for toggling the visibility of the dropdown menu and logs actions to the console for demonstration purposes.']}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"File Path:"})," ",(0,l.jsx)(n.code,{children:"\\hr-frontend\\src\\utils\\tables\\Menu.js"})]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"props-1",children:"Props"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Prop Name"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"data"})}),(0,l.jsx)(n.td,{children:"An object representing the data associated with the menu item."})]})})]}),"\n",(0,l.jsx)(n.h3,{id:"functions-and-methods-1",children:"Functions and Methods"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"toggleMenu"})}),"\n"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Purpose"}),":","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Toggles the visibility of the dropdown menu."}),"\n",(0,l.jsxs)(n.li,{children:["Updates the ",(0,l.jsx)(n.code,{children:"menuOpen"})," state to either ",(0,l.jsx)(n.code,{children:"true"})," or ",(0,l.jsx)(n.code,{children:"false"}),", controlling the visibility of the dropdown menu."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.ol,{start:"2",children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"handleEdit"})}),"\n"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Purpose"}),":","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:'Handles the "Edit" action.'}),"\n",(0,l.jsxs)(n.li,{children:["Logs the associated ",(0,l.jsx)(n.code,{children:"props.data"})," to the console."]}),"\n",(0,l.jsxs)(n.li,{children:["Closes the dropdown menu by setting ",(0,l.jsx)(n.code,{children:"menuOpen"})," to ",(0,l.jsx)(n.code,{children:"false"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.ol,{start:"3",children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"handleDelete"})}),"\n"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Purpose"}),":","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:'Handles the "Delete" action.'}),"\n",(0,l.jsxs)(n.li,{children:["Logs the associated ",(0,l.jsx)(n.code,{children:"props.data"})," to the console."]}),"\n",(0,l.jsxs)(n.li,{children:["Closes the dropdown menu by setting ",(0,l.jsx)(n.code,{children:"menuOpen"})," to ",(0,l.jsx)(n.code,{children:"false"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"progressive-load-table",children:"Progressive Load Table"}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"ProgressiveLoadTable.js"})," file implements a progressively loading table using the Tabulator library. It is designed to handle large datasets by loading data in chunks as the user scrolls, reducing initial load time and improving performance. The component integrates with an API to fetch data dynamically and supports features like pagination, filtering, and column visibility toggling."]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"File Path:"})," ",(0,l.jsx)(n.code,{children:"\\hr-frontend\\src\\utils\\tables\\ProgressiveLoadTable.js"})]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"props-2",children:"Props"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Prop Name"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"setTableInstance"})}),(0,l.jsx)(n.td,{children:"A function to pass the Tabulator table instance to the parent component."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"data"})}),(0,l.jsx)(n.td,{children:"Initial data to populate the table (optional)."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"columns"})}),(0,l.jsx)(n.td,{children:"Column definitions for the table."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"url"})}),(0,l.jsx)(n.td,{children:"API endpoint URL for fetching data."})]})]})]}),"\n",(0,l.jsx)(n.h3,{id:"functions-and-methods-2",children:"Functions and Methods"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"ProgressiveLoadTable"}),"\r\n-",(0,l.jsx)(n.strong,{children:"Purpose"}),":","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Initializes and configures a Tabulator table on component mount."}),"\n",(0,l.jsx)(n.li,{children:"Destroys the table on component unmount to prevent memory leaks."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Return Value:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"A React component that renders a progressively loading table."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.ol,{start:"2",children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"useEffect"})}),"\n"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Purpose"}),":","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Initializes the Tabulator table when the component mounts."}),"\n",(0,l.jsx)(n.li,{children:"Configures the table with progressive loading, pagination, and API integration."}),"\n",(0,l.jsxs)(n.li,{children:["Creates a Tabulator instance and binds it to the ",(0,l.jsx)(n.code,{children:"#custom-table"})," DOM element."]}),"\n",(0,l.jsx)(n.li,{children:"Sets up AJAX configuration for API requests, including headers with authentication tokens."}),"\n",(0,l.jsx)(n.li,{children:"Destroys the table instance when the component unmounts."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.ol,{start:"3",children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"headerMenu"})}),"\n"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Purpose"}),":","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Generates a context menu for table columns to toggle visibility."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Return Value"}),":","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"An array of menu items, each containing a label and an action to focus the header filter."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.ol,{start:"4",children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"dynamicColumns"})}),"\n"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Purpose"}),":","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Dynamically generates column definitions based on the data structure."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Parameters"}),":","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"data"}),": Array of objects representing table rows."]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Return Value"}),":","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"An array of column definitions for the Tabulator table."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.ol,{start:"5",children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"headerPopupFormatter"})}),"\n"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Purpose"}),":","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Creates a custom header filter popup for columns."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Parameters"}),":","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"e"}),": Event object."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"column"}),": The column object."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"onRendered"}),": Callback function for rendering."]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Return Value"}),":","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"A DOM element containing an input field for filtering."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>d});var t=s(6540);const l={},r=t.createContext(l);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);