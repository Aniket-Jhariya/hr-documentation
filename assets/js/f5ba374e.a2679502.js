"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1864],{7096:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>n,toc:()=>o});const n=JSON.parse('{"id":"backend/credits/models","title":"Models","description":"Organization","source":"@site/docs/backend/credits/models.md","sourceDirName":"backend/credits","slug":"/backend/credits/models","permalink":"/docs/backend/credits/models","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/backend/credits/models.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Endpoints","permalink":"/docs/backend/credits/endpoints"},"next":{"title":"Tasks","permalink":"/docs/backend/credits/tasks"}}');var d=s(4848),r=s(8453);const l={sidebar_position:2},t="Models",c={},o=[{value:"Organization",id:"organization",level:2},{value:"Fields:",id:"fields",level:3},{value:"Methods:",id:"methods",level:3},{value:"Roles",id:"roles",level:2},{value:"Fields:",id:"fields-1",level:3},{value:"Methods:",id:"methods-1",level:3},{value:"MyUserManager",id:"myusermanager",level:2},{value:"Methods:",id:"methods-2",level:3},{value:"MyUser",id:"myuser",level:2},{value:"Fields:",id:"fields-2",level:3},{value:"Methods:",id:"methods-3",level:3},{value:"DemoRequest",id:"demorequest",level:2},{value:"Fields:",id:"fields-3",level:3},{value:"Methods:",id:"methods-4",level:3},{value:"ThirdPartyServiceKeys",id:"thirdpartyservicekeys",level:2},{value:"Fields:",id:"fields-4",level:3},{value:"Methods:",id:"methods-5",level:3},{value:"Utility Functions",id:"utility-functions",level:2},{value:"<code>encrypt_text(plain_text)</code>",id:"encrypt_textplain_text",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"Returns:",id:"returns",level:4},{value:"<code>decrypt_text(encrypted_text)</code>",id:"decrypt_textencrypted_text",level:3},{value:"Parameters:",id:"parameters-1",level:4},{value:"Returns:",id:"returns-1",level:4}];function a(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i.header,{children:(0,d.jsx)(i.h1,{id:"models",children:"Models"})}),"\n",(0,d.jsx)(i.h2,{id:"organization",children:"Organization"}),"\n",(0,d.jsx)(i.p,{children:"Represents an organization with attributes such as name, domain, logos, location, and services offered."}),"\n",(0,d.jsx)(i.h3,{id:"fields",children:"Fields:"}),"\n",(0,d.jsxs)(i.ul,{children:["\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"logo"})," (ImageField): Primary logo of the organization."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"secondary_logo"})," (ImageField): Secondary logo of the organization."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"org_id"})," (BigAutoField): Primary key, auto-generated."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"org_domain"})," (CharField): Unique domain of the organization."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"org_name"})," (CharField): Name of the organization."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"org_tier"})," (CharField): Tier of the organization."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"org_location"})," (CharField): Location of the organization."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"services"})," (ManyToManyField): Related to ",(0,d.jsx)(i.code,{children:"Service"}),"."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"credits"})," (PositiveIntegerField): Organization credits (default: 0)."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"business_model"})," (ForeignKey): Related to ",(0,d.jsx)(i.code,{children:"BusinessModel"}),"."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"support_email"})," (EmailField): Support email address."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"created_at"})," (DateTimeField): Timestamp of creation."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"is_verified"})," (BooleanField): Verification status."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"is_active"})," (BooleanField): Activation status."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"is_email_sent"})," (BooleanField): Email sent status."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"updated_by"})," (ForeignKey): Reference to the user who last updated."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"created_by"})," (ForeignKey): Reference to the user who created it."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"updated_at"})," (DateTimeField): Timestamp of last update."]}),"\n"]}),"\n",(0,d.jsx)(i.h3,{id:"methods",children:"Methods:"}),"\n",(0,d.jsxs)(i.ul,{children:["\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"__str__"}),": Returns the organization name."]}),"\n"]}),"\n",(0,d.jsx)(i.hr,{}),"\n",(0,d.jsx)(i.h2,{id:"roles",children:"Roles"}),"\n",(0,d.jsx)(i.p,{children:"Defines roles for users."}),"\n",(0,d.jsx)(i.h3,{id:"fields-1",children:"Fields:"}),"\n",(0,d.jsxs)(i.ul,{children:["\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"name"})," (CharField): Name of the role."]}),"\n"]}),"\n",(0,d.jsx)(i.h3,{id:"methods-1",children:"Methods:"}),"\n",(0,d.jsxs)(i.ul,{children:["\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"__str__"}),": Returns the role name."]}),"\n"]}),"\n",(0,d.jsx)(i.hr,{}),"\n",(0,d.jsx)(i.h2,{id:"myusermanager",children:"MyUserManager"}),"\n",(0,d.jsxs)(i.p,{children:["Custom manager for the ",(0,d.jsx)(i.code,{children:"MyUser"})," model."]}),"\n",(0,d.jsx)(i.h3,{id:"methods-2",children:"Methods:"}),"\n",(0,d.jsxs)(i.ul,{children:["\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"_create_user"}),": Creates and saves a user."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"create_user"}),": Creates a regular user."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"create_superuser"}),": Creates a superuser."]}),"\n"]}),"\n",(0,d.jsx)(i.hr,{}),"\n",(0,d.jsx)(i.h2,{id:"myuser",children:"MyUser"}),"\n",(0,d.jsxs)(i.p,{children:["Custom user model extending ",(0,d.jsx)(i.code,{children:"AbstractBaseUser"})," and ",(0,d.jsx)(i.code,{children:"PermissionsMixin"}),"."]}),"\n",(0,d.jsx)(i.h3,{id:"fields-2",children:"Fields:"}),"\n",(0,d.jsxs)(i.ul,{children:["\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"org"})," (ForeignKey): Organization to which the user belongs."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"name"})," (CharField): Full name of the user."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"username"})," (CharField): Unique username."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"position"})," (CharField): Job position."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"profile_pic"})," (ImageField): Profile picture."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"email"})," (EmailField): Unique email address (used for authentication)."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"contact"})," (BigIntegerField): Contact number."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"role"})," (ForeignKey): Role assigned to the user."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"state"})," (CharField): State of residence."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"country"})," (CharField): Country of residence."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"is_active"})," (BooleanField): Active status."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"is_staff"})," (BooleanField): Staff status."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"is_superuser"})," (BooleanField): Superuser status."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"is_superadmin"})," (BooleanField): Superadmin status."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"is_admin"})," (BooleanField): Admin status."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"created_at"})," (DateTimeField): Timestamp of creation."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"updated_at"})," (DateTimeField): Timestamp of last update."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"invited_by"})," (ForeignKey): Reference to another user who invited this user."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"agree_to_terms_and_conditions"})," (BooleanField): User agreement to terms."]}),"\n"]}),"\n",(0,d.jsx)(i.h3,{id:"methods-3",children:"Methods:"}),"\n",(0,d.jsxs)(i.ul,{children:["\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"__str__"}),": Returns the user's name."]}),"\n"]}),"\n",(0,d.jsx)(i.hr,{}),"\n",(0,d.jsx)(i.h2,{id:"demorequest",children:"DemoRequest"}),"\n",(0,d.jsx)(i.p,{children:"Tracks requests for product demos."}),"\n",(0,d.jsx)(i.h3,{id:"fields-3",children:"Fields:"}),"\n",(0,d.jsxs)(i.ul,{children:["\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"first_name"})," (CharField): First name of the requester."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"last_name"})," (CharField): Last name of the requester."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"email"})," (EmailField): Unique email address."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"phone"})," (CharField): Contact number."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"job_title"})," (CharField): Job title of the requester."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"company"})," (CharField): Company name."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"consent"})," (BooleanField): Consent to terms."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"created_at"})," (DateTimeField): Timestamp of creation."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"status"})," (CharField): Status of the request (choices: Pending, Scheduled, Provided, Cancelled)."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"demo_date"})," (DateTimeField): Scheduled demo date and time."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"feedback"})," (TextField): Feedback after the demo."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"ip_address"})," (GenericIPAddressField): IP address of the requester."]}),"\n"]}),"\n",(0,d.jsx)(i.h3,{id:"methods-4",children:"Methods:"}),"\n",(0,d.jsxs)(i.ul,{children:["\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"__str__"}),": Returns the full name and email of the requester."]}),"\n"]}),"\n",(0,d.jsx)(i.hr,{}),"\n",(0,d.jsx)(i.h2,{id:"thirdpartyservicekeys",children:"ThirdPartyServiceKeys"}),"\n",(0,d.jsx)(i.p,{children:"Stores API keys for third-party services."}),"\n",(0,d.jsx)(i.h3,{id:"fields-4",children:"Fields:"}),"\n",(0,d.jsxs)(i.ul,{children:["\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"key"})," (TextField): Encrypted API key."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"org"})," (ForeignKey): Organization associated with the key."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"third_party_service_name"})," (CharField): Name of the third-party service (choices: OpenAI)."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"created_by"})," (ForeignKey): User who created the key."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"updated_by"})," (ForeignKey): User who updated the key."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"created_at"})," (DateTimeField): Timestamp of creation."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"updated_at"})," (DateTimeField): Timestamp of last update."]}),"\n"]}),"\n",(0,d.jsx)(i.h3,{id:"methods-5",children:"Methods:"}),"\n",(0,d.jsxs)(i.ul,{children:["\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"save"}),": Encrypts the key before saving."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"get_decrypted_key"}),": Decrypts and returns the key."]}),"\n"]}),"\n",(0,d.jsx)(i.hr,{}),"\n",(0,d.jsx)(i.hr,{}),"\n",(0,d.jsx)(i.h2,{id:"utility-functions",children:"Utility Functions"}),"\n",(0,d.jsx)(i.h3,{id:"encrypt_textplain_text",children:(0,d.jsx)(i.code,{children:"encrypt_text(plain_text)"})}),"\n",(0,d.jsx)(i.p,{children:"Encrypts a plain text string using Fernet symmetric encryption."}),"\n",(0,d.jsx)(i.h4,{id:"parameters",children:"Parameters:"}),"\n",(0,d.jsxs)(i.ul,{children:["\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"plain_text"})," (str): The text to encrypt."]}),"\n"]}),"\n",(0,d.jsx)(i.h4,{id:"returns",children:"Returns:"}),"\n",(0,d.jsxs)(i.ul,{children:["\n",(0,d.jsx)(i.li,{children:"Encrypted text (str)."}),"\n"]}),"\n",(0,d.jsx)(i.hr,{}),"\n",(0,d.jsx)(i.h3,{id:"decrypt_textencrypted_text",children:(0,d.jsx)(i.code,{children:"decrypt_text(encrypted_text)"})}),"\n",(0,d.jsx)(i.p,{children:"Decrypts an encrypted string using Fernet symmetric encryption."}),"\n",(0,d.jsx)(i.h4,{id:"parameters-1",children:"Parameters:"}),"\n",(0,d.jsxs)(i.ul,{children:["\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"encrypted_text"})," (str): The encrypted text to decrypt."]}),"\n"]}),"\n",(0,d.jsx)(i.h4,{id:"returns-1",children:"Returns:"}),"\n",(0,d.jsxs)(i.ul,{children:["\n",(0,d.jsx)(i.li,{children:"Decrypted text (str)."}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,d.jsx)(i,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},8453:(e,i,s)=>{s.d(i,{R:()=>l,x:()=>t});var n=s(6540);const d={},r=n.createContext(d);function l(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function t(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);