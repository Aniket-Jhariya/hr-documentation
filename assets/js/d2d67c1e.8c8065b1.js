"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1219],{6558:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>a,frontMatter:()=>l,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"backend/accounts/endpoints","title":"Endpoints","description":"users/","source":"@site/docs/backend/accounts/endpoints.md","sourceDirName":"backend/accounts","slug":"/backend/accounts/endpoints","permalink":"/hr-documentation/docs/backend/accounts/endpoints","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/backend/accounts/endpoints.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Accounts","permalink":"/hr-documentation/docs/category/accounts"},"next":{"title":"Models","permalink":"/hr-documentation/docs/backend/accounts/models"}}');var d=s(4848),r=s(8453);const l={sidebar_position:1},t="Endpoints",c={},o=[{value:"<code>users/ </code>",id:"users-",level:3},{value:"<code>organizations/ </code>",id:"organizations-",level:3},{value:"<code>roles/ </code>",id:"roles-",level:3},{value:"<code>delete/ </code>",id:"delete-",level:3},{value:"<code>demo/ </code>",id:"demo-",level:3},{value:"<code>request-demo/ </code>",id:"request-demo-",level:3},{value:"<code>request_demo/&lt;int:pk&gt;/</code>",id:"request_demointpk",level:3},{value:"<code>send-reset-password-email/</code>",id:"send-reset-password-email",level:3},{value:"<code>user/reset-password/&lt;uid&gt;/&lt;token&gt;/</code>",id:"userreset-passworduidtoken",level:3},{value:"<code>organizations/&lt;int:org_id&gt;/users/</code>",id:"organizationsintorg_idusers",level:3},{value:"<code>profile-pic/</code>",id:"profile-pic",level:3},{value:"<code>organization-logo/&lt;int:orgId&gt;/</code>",id:"organization-logointorgid",level:3},{value:"<code>avatar/&lt;int:id&gt;/</code>",id:"avatarintid",level:3},{value:"<code>profile-kpi/</code>",id:"profile-kpi",level:3},{value:"<code>token/</code>",id:"token",level:3},{value:"<code>token/refresh/</code>",id:"tokenrefresh",level:3},{value:"<code>user-add/</code>",id:"user-add",level:3},{value:"<code>organizations/&lt;int:org_id&gt;/users-list/</code>",id:"organizationsintorg_idusers-list",level:3},{value:"<code>invite-users/</code>",id:"invite-users",level:3},{value:"<code>onboard-organization/</code>",id:"onboard-organization",level:3}];function h(e){const n={code:"code",h1:"h1",h3:"h3",header:"header",li:"li",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"endpoints",children:"Endpoints"})}),"\n",(0,d.jsx)(n.h3,{id:"users-",children:(0,d.jsx)(n.code,{children:"users/ "})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"View:"})," UserViewSet"]}),"\n",(0,d.jsx)(n.li,{children:"Manages CRUD operations of users in the application"}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"organizations-",children:(0,d.jsx)(n.code,{children:"organizations/ "})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"View:"})," OrganizationViewSet"]}),"\n",(0,d.jsx)(n.li,{children:"Manages CRUD operations of organizations in the application"}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"roles-",children:(0,d.jsx)(n.code,{children:"roles/ "})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"View:"})," RolesViewSet"]}),"\n",(0,d.jsx)(n.li,{children:"Manages CRUD operations of roles in the application"}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"delete-",children:(0,d.jsx)(n.code,{children:"delete/ "})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"View:"})," UserDeleteViewSet"]}),"\n",(0,d.jsxs)(n.li,{children:["Manages deleting operations of users in the application","\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Response Code"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"200"}),(0,d.jsx)(n.td,{children:"SUCCESS: User deleted"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"404"}),(0,d.jsx)(n.td,{children:"FAIL: User not found"})]})]})]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"demo-",children:(0,d.jsx)(n.code,{children:"demo/ "})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"View:"})," UserDeleteViewSet"]}),"\n",(0,d.jsx)(n.li,{children:"Manages CRUD operations of demos in the application"}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"request-demo-",children:(0,d.jsx)(n.code,{children:"request-demo/ "})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"View:"})," RequestdDemoViewSet"]}),"\n",(0,d.jsx)(n.li,{children:"Adds demo requests."}),"\n",(0,d.jsxs)(n.li,{children:["Payload","\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"POST"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n         "first_name": "John",\n         "last_name": "Doe",\n         "email": "johndoe@example.com",\n         "phone": "+1234567890",\n         "job_title": "Software Engineer",\n         "company": "TechCorp",\n         "consent": true\n }\n'})}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Response Code"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"201"}),(0,d.jsx)(n.td,{children:"SUCCESS: Demo Request created"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"400"}),(0,d.jsx)(n.td,{children:"FAIL: Invalid Format"})]})]})]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"request_demointpk",children:(0,d.jsx)(n.code,{children:"request_demo/<int:pk>/"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"View:"})," RequestdDemoViewSet"]}),"\n",(0,d.jsx)(n.li,{children:"Updates demo requests based on private key."}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Payload"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"PATCH"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'    {\n        "status": "scheduled",\n        "demo_date": "2024-11-25T14:30:00Z",\n        "feedback": "Looking forward to the demo!"\n    }\n'})}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Response Code"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"200"}),(0,d.jsx)(n.td,{children:"SUCCESS: Demo Request updated"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"400"}),(0,d.jsx)(n.td,{children:"FAIL: Invalid Format"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"404"}),(0,d.jsx)(n.td,{children:"FAIL: Demo Request not found"})]})]})]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"send-reset-password-email",children:(0,d.jsx)(n.code,{children:"send-reset-password-email/"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"View:"})," SendPasswordResetEmailView"]}),"\n",(0,d.jsx)(n.li,{children:"Sends password reset email to requested email address after validation."}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Payload"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"POST"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n    "email":"john.doe@email.com"\n}\n'})}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Response Code"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"200"}),(0,d.jsx)(n.td,{children:"SUCCESS: Password reset email sent."})]})})]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"userreset-passworduidtoken",children:(0,d.jsx)(n.code,{children:"user/reset-password/<uid>/<token>/"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"View:"})," PasswordResetView"]}),"\n",(0,d.jsxs)(n.li,{children:["Reset password of a user based on the ",(0,d.jsx)(n.code,{children:"uid"})," and ",(0,d.jsx)(n.code,{children:"token"})," retrieved from the user model."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Payload"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"POST"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n    "password":"johndoe@123",\n    "password2":"johndoe@123",\n    "agree_to_terms_and_conditions":true\n}\n'})}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Response Code"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"200"}),(0,d.jsx)(n.td,{children:"SUCCESS: Password was reset."})]})})]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"organizationsintorg_idusers",children:(0,d.jsx)(n.code,{children:"organizations/<int:org_id>/users/"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"View:"})," UserListByOrg"]}),"\n",(0,d.jsxs)(n.li,{children:["List all the users by organization with basic user details based on the ",(0,d.jsx)(n.code,{children:"organisation id"}),"."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Response"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"Query list"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n    "id":1234, \n    "name":"John Doe", \n    "org":"1234xyz", \n    "username":"JohnD123", \n    "email":"johndoe@example.com", \n    "role":"admin", \n    "profile_pic":"pfp_id", \n    "password":"johndoe@123", \n    "is_active":true,\n    "is_staff":true, \n    "is_superuser":false, \n    "last_login":"2024-11-25T14:30:00Z", \n    "last_seen":"2024-12-25T14:30:00Z", \n    "contact":"+123456789", \n    "country":"India", \n    "invited_by":"user_id", \n    "created_at":"2024-10-25T14:30:00Z"\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"profile-pic",children:(0,d.jsx)(n.code,{children:"profile-pic/"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"View:"})," DownloadProfilePic"]}),"\n",(0,d.jsxs)(n.li,{children:["Retrieves profile picture of the user based on ",(0,d.jsx)(n.code,{children:"user ID"})," and ",(0,d.jsx)(n.code,{children:"authentication"}),"."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Payload"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"GET"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n    "user":{\n        ...\n        "id":"1234"\n    }\n}\n'})}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Response Code"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"200"}),(0,d.jsx)(n.td,{children:"SUCCESS: Image retrieved."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"404"}),(0,d.jsx)(n.td,{children:"FAIL: Image not found"})]})]})]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"organization-logointorgid",children:(0,d.jsx)(n.code,{children:"organization-logo/<int:orgId>/"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"View:"})," getOrgLogo"]}),"\n",(0,d.jsxs)(n.li,{children:["Retrieves logo picture of the organization based on ",(0,d.jsx)(n.code,{children:"organization ID"}),"."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Payload"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"GET"}),"\n"]}),"\n",(0,d.jsx)(n.strong,{children:"Response"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n    "attachment":...logo file, \n    "filename":...name of the file\n}\n\n'})}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Response Code"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"200"}),(0,d.jsx)(n.td,{children:"SUCCESS: Image retrieved."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"404"}),(0,d.jsx)(n.td,{children:"FAIL: Image not found"})]})]})]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"avatarintid",children:(0,d.jsx)(n.code,{children:"avatar/<int:id>/"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"View:"})," getUserAvatar"]}),"\n",(0,d.jsxs)(n.li,{children:["Retrieves profile picture of the user based on ",(0,d.jsx)(n.code,{children:"user ID"})," and ",(0,d.jsx)(n.code,{children:"authentication"}),"."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Payload"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"GET"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n    "user":{\n        ...\n        "id":"1234"\n    }\n}\n'})}),"\n",(0,d.jsx)(n.strong,{children:"Response"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n    "attachment":...logo file, \n    "filename":...name of the file\n}\n\n'})}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Response Code"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"200"}),(0,d.jsx)(n.td,{children:"SUCCESS: Image retrieved."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"404"}),(0,d.jsx)(n.td,{children:"FAIL: Image not found"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"500"}),(0,d.jsx)(n.td,{children:"FAIL: Internal server error"})]})]})]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"profile-kpi",children:(0,d.jsx)(n.code,{children:"profile-kpi/"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"View:"})," getProfileKPIData"]}),"\n",(0,d.jsxs)(n.li,{children:["Retrieves key performance indicaters from user's profile based on ",(0,d.jsx)(n.code,{children:"user ID"})," and ",(0,d.jsx)(n.code,{children:"authentication"}),"."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Payload"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"GET"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n    "user":{\n        ...\n        "id":"1234"\n    }\n}\n'})}),"\n",(0,d.jsx)(n.strong,{children:"Response"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n    "owned_jobs": [...Job Objects],\n    "shared_jobs": [...Job Objects],\n    "total_jobs": 123,\n    "jobs_open": 321,\n    "total_applicants": 12,\n    "team_members": [...user Objects],\n    "cost": 1234,\n}\n'})}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Response Code"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"200"}),(0,d.jsx)(n.td,{children:"SUCCESS: Profile KPI retrieved"})]})})]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"token",children:(0,d.jsx)(n.code,{children:"token/"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"View:"})," MyTokenObtainPairView"]}),"\n",(0,d.jsxs)(n.li,{children:["Generates and retrieves json web token for ",(0,d.jsx)(n.code,{children:"authentication"}),".","\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Response Code"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"200"}),(0,d.jsx)(n.td,{children:"SUCCESS: Token generated"})]})})]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"tokenrefresh",children:(0,d.jsx)(n.code,{children:"token/refresh/"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"View:"})," MyTokenRefreshView"]}),"\n",(0,d.jsxs)(n.li,{children:["Refreshes and retrieves json web token for ",(0,d.jsx)(n.code,{children:"authentication"}),".","\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Response Code"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"200"}),(0,d.jsx)(n.td,{children:"SUCCESS: Token generated"})]})})]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"user-add",children:(0,d.jsx)(n.code,{children:"user-add/"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"View:"})," UserAddView"]}),"\n",(0,d.jsxs)(n.li,{children:["Creates user with ",(0,d.jsx)(n.code,{children:"role"})," and ",(0,d.jsx)(n.code,{children:"email"})," from invite by ",(0,d.jsx)(n.code,{children:"authenticated admin"})," user. Sends password reset email if user successfully created."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Payload"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"Get Query"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n    "user":...inviting user object,\n    "role": 1,\n    "email" : "johndoe@example.com",\n    ..other details of invited user \n}\n'})}),"\n",(0,d.jsx)(n.strong,{children:"Response"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n    ...\n    "result":{\n        {\n            \n            "org": ...inviting user org id,\n            "password": ...default password,\n            "role": 1,\n            "is_admin": false, \n            "invited_by": ...inviting user org id\n        }\n    }\n}\n'})}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Response Code"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"201"}),(0,d.jsx)(n.td,{children:"SUCCESS: User Created"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"400"}),(0,d.jsx)(n.td,{children:"FAIL: Invalid format/role doesn't exist/validation error."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"500"}),(0,d.jsx)(n.td,{children:"FAIL: Server error/email not sent"})]})]})]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"organizationsintorg_idusers-list",children:(0,d.jsx)(n.code,{children:"organizations/<int:org_id>/users-list/"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"View:"})," UserForDelete"]}),"\n",(0,d.jsxs)(n.li,{children:["Lists all the users from an organisation for a deleting based on ",(0,d.jsx)(n.code,{children:"organisation id"})," and ",(0,d.jsx)(n.code,{children:"authentication"}),"."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Payload"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"Create"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n    "users":[...users list filtered by org_id] \n}\n'})}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"invite-users",children:(0,d.jsx)(n.code,{children:"invite-users/"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"View:"})," UploadUsersView"]}),"\n",(0,d.jsxs)(n.li,{children:["Creates multiple users under an ",(0,d.jsx)(n.code,{children:"organisation"})," with detail using invite by ",(0,d.jsx)(n.code,{children:"authenticated admin"})," user, through a excel sheet. Sends password reset email to users successfully created. Checks for existing users."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Payload"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"POST"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n    "user":...inviting user object,\n    "file":...excel file with users detail,\n}\n'})}),"\n",(0,d.jsx)(n.strong,{children:"Response"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n    ...\n    "existing_users": ...existing_users,\n    "failed_users": ...failed_users,\n    "created_users": ...created_users\n}\n'})}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Response Code"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"201"}),(0,d.jsx)(n.td,{children:"SUCCESS: Users Created"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"400"}),(0,d.jsx)(n.td,{children:"FAIL: Invalid format/organisation doesn't exist/no file uploaded"})]})]})]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"onboard-organization",children:(0,d.jsx)(n.code,{children:"onboard-organization/"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"View:"})," UploadUsersView"]}),"\n",(0,d.jsx)(n.li,{children:"Onboards a new organization and create a corresponding user."}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Payload"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"POST"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n    "org":{\n        "name":"XYZ pvt ltd",\n        "domain": "Software",\n        "location":"India",\n        ...\n    },\n    "user":{\n        "name":"John Doe",\n        "email":"johndoe@example.com",\n        "contact":"+123456789",\n        "country":"India",\n        "position":"Manager",\n        ...            \n    }\n}\n'})}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Response Code"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"201"}),(0,d.jsx)(n.td,{children:"SUCCESS: Organization registered"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"400"}),(0,d.jsx)(n.td,{children:"FAIL: Duplicate entry(contact/email)/Invalid input format"})]})]})]}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>t});var i=s(6540);const d={},r=i.createContext(d);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);