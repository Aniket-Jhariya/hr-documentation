"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6287],{9626:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"backend/accounts/tasks","title":"Tasks","description":"Logging Configuration","source":"@site/docs/backend/accounts/tasks.md","sourceDirName":"backend/accounts","slug":"/backend/accounts/tasks","permalink":"/hr-documentation/docs/backend/accounts/tasks","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/backend/accounts/tasks.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Models","permalink":"/hr-documentation/docs/backend/accounts/models"},"next":{"title":"Admin","permalink":"/hr-documentation/docs/category/admin"}}');var r=s(4848),l=s(8453);const o={sidebar_position:3},d="Tasks",t={},a=[{value:"Logging Configuration",id:"logging-configuration",level:3},{value:"<code>send_bulk_invite(emails)</code>",id:"send_bulk_inviteemails",level:2},{value:"Parameters:",id:"parameters",level:3},{value:"Workflow:",id:"workflow",level:3},{value:"Key Points:",id:"key-points",level:3},{value:"<code>send_invite_to_organization_admin(email)</code>",id:"send_invite_to_organization_adminemail",level:2},{value:"Parameters:",id:"parameters-1",level:3},{value:"Workflow:",id:"workflow-1",level:3},{value:"Key Points:",id:"key-points-1",level:3},{value:"<code>send_password_reset_link(email)</code>",id:"send_password_reset_linkemail",level:2},{value:"Parameters:",id:"parameters-2",level:3},{value:"Workflow:",id:"workflow-2",level:3},{value:"Key Points:",id:"key-points-2",level:3},{value:"Utility Functions Used",id:"utility-functions-used",level:2},{value:"<code>urlsafe_base64_encode</code>",id:"urlsafe_base64_encode",level:3},{value:"<code>PasswordResetTokenGenerator</code>",id:"passwordresettokengenerator",level:3},{value:"<code>send_email</code>",id:"send_email",level:3}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"tasks",children:"Tasks"})}),"\n",(0,r.jsx)(n.h3,{id:"logging-configuration",children:"Logging Configuration"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:'logger = logging.getLogger("celery")'}),": Configures a logger for monitoring Celery tasks."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"send_bulk_inviteemails",children:(0,r.jsx)(n.code,{children:"send_bulk_invite(emails)"})}),"\n",(0,r.jsx)(n.p,{children:"Sends bulk invitation emails to multiple users."}),"\n",(0,r.jsx)(n.h3,{id:"parameters",children:"Parameters:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"emails (list)"}),": List of email addresses to send invitations to."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"workflow",children:"Workflow:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Iterates over the provided ",(0,r.jsx)(n.code,{children:"emails"})," list."]}),"\n",(0,r.jsx)(n.li,{children:"Retrieves the user associated with each email."}),"\n",(0,r.jsxs)(n.li,{children:["Generates a password reset link using ",(0,r.jsx)(n.code,{children:"urlsafe_base64_encode"})," and ",(0,r.jsx)(n.code,{children:"PasswordResetTokenGenerator"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Sends an email containing the reset link using the ",(0,r.jsx)(n.code,{children:"EmailMessage"})," class."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"key-points",children:"Key Points:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Utilizes ",(0,r.jsx)(n.code,{children:"@shared_task"})," to define it as a Celery task."]}),"\n",(0,r.jsx)(n.li,{children:"Skips non-existent users."}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"send_invite_to_organization_adminemail",children:(0,r.jsx)(n.code,{children:"send_invite_to_organization_admin(email)"})}),"\n",(0,r.jsx)(n.p,{children:"Sends an invitation email to an organization admin to set their password."}),"\n",(0,r.jsx)(n.h3,{id:"parameters-1",children:"Parameters:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsxs)(n.strong,{children:[(0,r.jsx)(n.code,{children:"email"})," (str)"]}),": Email address of the organization admin."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"workflow-1",children:"Workflow:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Retrieves the user associated with the provided email."}),"\n",(0,r.jsxs)(n.li,{children:["Generates a secure link for onboarding using ",(0,r.jsx)(n.code,{children:"DOMAIN"}),", ",(0,r.jsx)(n.code,{children:"urlsafe_base64_encode"}),", and ",(0,r.jsx)(n.code,{children:"PasswordResetTokenGenerator"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Creates an HTML email template, embedding the organization's logo if available."}),"\n",(0,r.jsxs)(n.li,{children:["Sends the email using the ",(0,r.jsx)(n.code,{children:"send_email"})," utility function."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"key-points-1",children:"Key Points:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Uses a styled HTML template for the email body."}),"\n",(0,r.jsx)(n.li,{children:"Logs the generated link for debugging purposes."}),"\n",(0,r.jsx)(n.li,{children:"Handles cases where the organization does not have a logo."}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"send_password_reset_linkemail",children:(0,r.jsx)(n.code,{children:"send_password_reset_link(email)"})}),"\n",(0,r.jsx)(n.p,{children:"Sends a password reset link to a user."}),"\n",(0,r.jsx)(n.h3,{id:"parameters-2",children:"Parameters:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsxs)(n.strong,{children:[(0,r.jsx)(n.code,{children:"email"})," (str)"]}),": Email address of the user."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"workflow-2",children:"Workflow:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Retrieves the user associated with the provided email."}),"\n",(0,r.jsxs)(n.li,{children:["Generates a secure reset link using ",(0,r.jsx)(n.code,{children:"DOMAIN"}),", ",(0,r.jsx)(n.code,{children:"urlsafe_base64_encode"}),", and ",(0,r.jsx)(n.code,{children:"PasswordResetTokenGenerator"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Creates an HTML email template with a reset password link."}),"\n",(0,r.jsxs)(n.li,{children:["Sends the email using the ",(0,r.jsx)(n.code,{children:"send_email"})," utility function."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"key-points-2",children:"Key Points:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Includes responsive email design for better mobile compatibility."}),"\n",(0,r.jsx)(n.li,{children:"Logs the generated link for debugging."}),"\n",(0,r.jsxs)(n.li,{children:["Similar structure to the ",(0,r.jsx)(n.code,{children:"send_invite_to_organization_admin"})," task."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"utility-functions-used",children:"Utility Functions Used"}),"\n",(0,r.jsx)(n.h3,{id:"urlsafe_base64_encode",children:(0,r.jsx)(n.code,{children:"urlsafe_base64_encode"})}),"\n",(0,r.jsx)(n.p,{children:"Encodes a user ID into a URL-safe format for secure transmission."}),"\n",(0,r.jsx)(n.h3,{id:"passwordresettokengenerator",children:(0,r.jsx)(n.code,{children:"PasswordResetTokenGenerator"})}),"\n",(0,r.jsx)(n.p,{children:"Generates a secure token for password reset or onboarding links."}),"\n",(0,r.jsx)(n.h3,{id:"send_email",children:(0,r.jsx)(n.code,{children:"send_email"})}),"\n",(0,r.jsx)(n.p,{children:"Custom utility for sending emails. Supports HTML email templates."})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>d});var i=s(6540);const r={},l=i.createContext(r);function o(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);