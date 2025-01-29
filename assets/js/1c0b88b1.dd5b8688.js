"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9262],{4070:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>t,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>o});const d=JSON.parse('{"id":"backend/business model/models","title":"Models","description":"Models","source":"@site/docs/backend/business model/models.md","sourceDirName":"backend/business model","slug":"/backend/business model/models","permalink":"/docs/backend/business model/models","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/backend/business model/models.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Endpoints","permalink":"/docs/backend/business model/endpoints"},"next":{"title":"Candidates","permalink":"/docs/category/candidates"}}');var s=n(4848),l=n(8453);const r={sidebar_position:2},c="Models",t={},o=[{value:"Models",id:"models-1",level:2},{value:"<code>Service</code>",id:"service",level:3},{value:"Fields:",id:"fields",level:4},{value:"Methods:",id:"methods",level:4},{value:"<code>BusinessModel</code>",id:"businessmodel",level:3},{value:"Fields:",id:"fields-1",level:4},{value:"Methods:",id:"methods-1",level:4},{value:"<code>CreditTransaction</code>",id:"credittransaction",level:3},{value:"Fields:",id:"fields-2",level:4},{value:"<code>CreditAddition</code>",id:"creditaddition",level:3},{value:"Fields:",id:"fields-3",level:4},{value:"<code>SubscriptionPlan</code>",id:"subscriptionplan",level:3},{value:"Fields:",id:"fields-4",level:4},{value:"<code>OrganizationSubscription</code>",id:"organizationsubscription",level:3},{value:"Fields:",id:"fields-5",level:4},{value:"<code>OrganizationService</code>",id:"organizationservice",level:3},{value:"Fields:",id:"fields-6",level:4},{value:"Meta Constraints:",id:"meta-constraints",level:4},{value:"Methods:",id:"methods-2",level:4},{value:"<code>FeatureUsage</code>",id:"featureusage",level:3},{value:"Fields:",id:"fields-7",level:4},{value:"<code>Invoice</code>",id:"invoice",level:3},{value:"Fields:",id:"fields-8",level:4}];function a(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"models",children:"Models"})}),"\n",(0,s.jsx)(i.h2,{id:"models-1",children:"Models"}),"\n",(0,s.jsx)(i.h3,{id:"service",children:(0,s.jsx)(i.code,{children:"Service"})}),"\n",(0,s.jsx)(i.p,{children:"Defines services offered by the platform with different pricing models."}),"\n",(0,s.jsx)(i.h4,{id:"fields",children:"Fields:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"name"})," (CharField): Name of the service."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"description"})," (TextField): Description of the service."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"key"})," (CharField): Unique key identifier."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"credits"})," (PositiveIntegerField): Number of credits assigned to the service."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"service_type"})," (CharField): Defines whether the service is ",(0,s.jsx)(i.code,{children:"Pay-As-You-Go"})," or ",(0,s.jsx)(i.code,{children:"One-Time"}),"."]}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"methods",children:"Methods:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"__str__()"}),": Returns the name of the service."]}),"\n"]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"businessmodel",children:(0,s.jsx)(i.code,{children:"BusinessModel"})}),"\n",(0,s.jsx)(i.p,{children:"Represents different business models under which services are offered."}),"\n",(0,s.jsx)(i.h4,{id:"fields-1",children:"Fields:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"name"})," (CharField): Defines the business model type (",(0,s.jsx)(i.code,{children:"Consumption"}),", ",(0,s.jsx)(i.code,{children:"Subscription"}),", etc.)."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"description"})," (TextField): Additional details about the model."]}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"methods-1",children:"Methods:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"__str__()"}),": Returns the human-readable display name of the business model."]}),"\n"]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"credittransaction",children:(0,s.jsx)(i.code,{children:"CreditTransaction"})}),"\n",(0,s.jsx)(i.p,{children:"Tracks credit consumption within an organization."}),"\n",(0,s.jsx)(i.h4,{id:"fields-2",children:"Fields:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"organization"})," (ForeignKey): Organization using the feature."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"feature"})," (ForeignKey): Service being utilized."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"user"})," (ForeignKey): User who used the feature."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"timestamp"})," (DateTimeField): Date and time of usage."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"credits_used"})," (PositiveIntegerField): Number of credits deducted."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"content_id"})," (PositiveIntegerField): ID of the related content (optional)."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"feature_version"})," (CharField): Feature version (optional)."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"project_id"})," (PositiveIntegerField): Associated project ID (optional)."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"metadata"})," (JSONField): Additional metadata for the transaction."]}),"\n"]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"creditaddition",children:(0,s.jsx)(i.code,{children:"CreditAddition"})}),"\n",(0,s.jsx)(i.p,{children:"Tracks credits added to an organization\u2019s account."}),"\n",(0,s.jsx)(i.h4,{id:"fields-3",children:"Fields:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"organization"})," (ForeignKey): Organization receiving the credits."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"timestamp"})," (DateTimeField): Date and time of the credit addition."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"credits_added"})," (IntegerField): Number of credits added."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"added_by"})," (ForeignKey): User who added the credits."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"remark"})," (TextField): Additional remarks (optional)."]}),"\n"]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"subscriptionplan",children:(0,s.jsx)(i.code,{children:"SubscriptionPlan"})}),"\n",(0,s.jsx)(i.p,{children:"Defines subscription plans available to organizations."}),"\n",(0,s.jsx)(i.h4,{id:"fields-4",children:"Fields:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"name"})," (CharField): Subscription plan name."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"monthly_cost"})," (DecimalField): Cost for monthly billing."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"annual_cost"})," (DecimalField): Cost for annual billing."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"feature_access"})," (JSONField): List of features included in the plan."]}),"\n"]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"organizationsubscription",children:(0,s.jsx)(i.code,{children:"OrganizationSubscription"})}),"\n",(0,s.jsx)(i.p,{children:"Tracks active subscription plans for organizations."}),"\n",(0,s.jsx)(i.h4,{id:"fields-5",children:"Fields:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"organization"})," (OneToOneField): Organization associated with the subscription."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"plan"})," (ForeignKey): Subscribed plan."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"start_date"})," (DateTimeField): Subscription start date."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"end_date"})," (DateTimeField): Subscription end date."]}),"\n"]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"organizationservice",children:(0,s.jsx)(i.code,{children:"OrganizationService"})}),"\n",(0,s.jsx)(i.p,{children:"Tracks negotiated service agreements between an organization and the platform."}),"\n",(0,s.jsx)(i.h4,{id:"fields-6",children:"Fields:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"organization"})," (ForeignKey): Organization using the service."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"service"})," (ForeignKey): Service provided."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"negotiated_credits"})," (PositiveIntegerField): Custom credit allocation."]}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"meta-constraints",children:"Meta Constraints:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"unique_together"}),": Ensures each organization-service pair is unique."]}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"methods-2",children:"Methods:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"__str__()"}),": Returns a formatted string of the organization, service, and credits."]}),"\n"]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"featureusage",children:(0,s.jsx)(i.code,{children:"FeatureUsage"})}),"\n",(0,s.jsx)(i.p,{children:"Tracks the usage of features under a Pay-Per-Use model."}),"\n",(0,s.jsx)(i.h4,{id:"fields-7",children:"Fields:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"organization"})," (ForeignKey): Organization using the feature."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"feature"})," (ForeignKey): Feature being used."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"content_id"})," (PositiveIntegerField): ID of the related content (optional)."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"user"})," (ForeignKey): User who accessed the feature."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"timestamp"})," (DateTimeField): Date and time of usage."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"usage_amount"})," (PositiveIntegerField): Number of units consumed."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"project_id"})," (PositiveIntegerField): Associated project ID (optional)."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"metadata"})," (JSONField): Additional metadata for the usage."]}),"\n"]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"invoice",children:(0,s.jsx)(i.code,{children:"Invoice"})}),"\n",(0,s.jsx)(i.p,{children:"Stores billing details for organizations."}),"\n",(0,s.jsx)(i.h4,{id:"fields-8",children:"Fields:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"organization"})," (ForeignKey): Organization being billed."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"period_start"})," (DateTimeField): Start date of the billing period."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"period_end"})," (DateTimeField): End date of the billing period."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"total_amount"})," (DecimalField): Total billed amount."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"created_at"})," (DateTimeField): Invoice creation timestamp."]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,l.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>c});var d=n(6540);const s={},l=d.createContext(s);function r(e){const i=d.useContext(l);return d.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),d.createElement(l.Provider,{value:i},e.children)}}}]);