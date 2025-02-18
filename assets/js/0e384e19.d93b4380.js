"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3976],{7879:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"intro","title":"Setup","description":"Let\'s discover how to set-up CandidHR.ai..","source":"@site/docs/intro.md","sourceDirName":".","slug":"/intro","permalink":"/hr-documentation/intro","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"sidebar_label":"Homepage"},"sidebar":"tutorialSidebar","next":{"title":"Backend","permalink":"/hr-documentation/category/backend"}}');var r=s(4848),i=s(8453);const l={sidebar_position:1,sidebar_label:"Homepage"},o="Setup",d={},a=[{value:"Getting Started",id:"getting-started",level:2},{value:"Clone the repositories",id:"clone-the-repositories",level:3},{value:"What you&#39;ll need",id:"what-youll-need",level:3},{value:"Environment setup",id:"environment-setup",level:2},{value:"Django Backend",id:"django-backend",level:3},{value:"React frontend",id:"react-frontend",level:3},{value:"Start CandidHR site",id:"start-candidhr-site",level:2},{value:"Run the development server:",id:"run-the-development-server",level:3},{value:"Common Troubleshooting",id:"common-troubleshooting",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"setup",children:"Setup"})}),"\n",(0,r.jsxs)(n.p,{children:["Let's discover how to set-up ",(0,r.jsx)(n.strong,{children:"CandidHR.ai."}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,r.jsx)(n.p,{children:"Ask the CandidHR team to add you as the collaborators to the following repositories and then clone them locally."}),"\n",(0,r.jsx)(n.h3,{id:"clone-the-repositories",children:"Clone the repositories"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/diacto-technologies/hr-app\ngit clone https://github.com/diacto-technologies/hr-frontend\n"})}),"\n",(0,r.jsx)(n.h3,{id:"what-youll-need",children:"What you'll need"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://nodejs.org/en/download/",children:"Node.js"})," version 18.0 or above:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"When installing Node.js, you are recommended to check all checkboxes related to dependencies."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://www.python.org/downloads/release/python-3100/",children:"Python"})," version 3.10:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["With python, ",(0,r.jsx)(n.a,{href:"https://pip.pypa.io/en/stable/installation/",children:"pip"})," has to be installed to fetch other dependencies."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/",children:"MySQL"})," version ",(0,r.jsx)(n.em,{children:"latest"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Install MySQL CLI and workbench to have server access."}),"\n",(0,r.jsxs)(n.li,{children:["While in development environment, ask the CandidHR team for the ",(0,r.jsx)(n.code,{children:".sql"})," file, which needs to be imported to local SQL Database for development and testing."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://redis.io/docs/latest/operate/oss_and_stack/install/install-redis/",children:"Redis"})," version ",(0,r.jsx)(n.em,{children:"latest"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["In Windows environment, you will need to set up WSL for hosting ",(0,r.jsx)(n.code,{children:"redis-server"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"environment-setup",children:"Environment setup"}),"\n",(0,r.jsx)(n.h3,{id:"django-backend",children:"Django Backend"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Create and activate a virtual environment:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd hr-app\npython -m venv venv\nsource venv/bin/activate  \n# On Windows use: ./venv/Scripts/activate\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Download all the requirements"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pip install -r requirements-prod.txt\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Create a ",(0,r.jsx)(n.code,{children:".env"})," file in the Backend/ directory:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Ask the CandidHR team for .env file and copy the contents in your local copy"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Apply migrations and create a superuser:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"python ./Backend/manage.py migrate\npython ./Backend/manage.py createsuperuser\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"react-frontend",children:"React frontend"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Install dependencies:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd hr-frontend\nnpm install\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Create a ",(0,r.jsx)(n.code,{children:".env"})," file in the root project directory:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Ask the CandidHR team for .env file and copy the contents in your local copy"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"start-candidhr-site",children:"Start CandidHR site"}),"\n",(0,r.jsx)(n.h3,{id:"run-the-development-server",children:"Run the development server:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Backend"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd ./hr-app\nsource ./venv/bin activate \n#on windows: ./venv/Scripts/activate\npython ./Backend/manage.py runserver\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Frontend"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd ./hr-frontend\nnpm start\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Make sure that before running these commands ",(0,r.jsx)(n.code,{children:"mysql-server"})," and ",(0,r.jsx)(n.code,{children:"redis-server"})," services are running:"]})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"cd"})," command changes the directory you're working with. You'll need to navigate the terminal to the directory your files are in."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"source ./venv/bin activate"})," command activates the python virtual environment."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"python ./Backend/manage.py runserver"})," command builds your django api locally and serves it through a development server, ready for you to access at ",(0,r.jsx)(n.a,{href:"http://localhost:8000/",children:"http://localhost:8000/"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"npm run start"})," command builds your website locally and serves it through a development server, ready for you to view at ",(0,r.jsx)(n.a,{href:"http://localhost:3000/",children:"http://localhost:3000/"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"common-troubleshooting",children:"Common Troubleshooting"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Apply migrations if missing:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"python Backend/manage.py makemigrations\npython Backend/manage.py migrate\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Clear frontend cache"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"rm -rf node_modules package-lock.json #on windows: rm -r -F node_modules package-lock.json\nnpm install\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Check configuration and connection settings in ",(0,r.jsx)(n.code,{children:".env"})," for both frontend and backend."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>o});var t=s(6540);const r={},i=t.createContext(r);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);