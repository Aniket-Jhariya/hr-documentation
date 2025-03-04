---
sidebar_position: 1
sidebar_label: Setup-Guide
---

# Setup

Let's discover how to set-up **CandidHR.ai.**.

## Getting Started
Ask the CandidHR team to add you as the collaborators to the following repositories and then clone them locally.

### Clone the repositories

```bash
git clone https://github.com/diacto-technologies/hr-app
git clone https://github.com/diacto-technologies/hr-frontend
```
### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 18.0 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

- [Python](https://www.python.org/downloads/release/python-3100/) version 3.10:
  - With python, [pip](https://pip.pypa.io/en/stable/installation/) has to be installed to fetch other dependencies.

- [MySQL](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/) version *latest*:
  - Install MySQL CLI and workbench to have server access.
  - While in development environment, ask the CandidHR team for the `.sql` file, which needs to be imported to local SQL Database for development and testing.

- [Redis](https://redis.io/docs/latest/operate/oss_and_stack/install/install-redis/) version *latest*:
  - In Windows environment, you will need to set up WSL for hosting `redis-server`.

## Environment setup

### Django Backend

- Create and activate a virtual environment:

  ```bash
  cd hr-app
  python -m venv venv
  source venv/bin/activate  
  # On Windows use: ./venv/Scripts/activate
  ```

- Download all the requirements

  ```bash
  pip install -r requirements-prod.txt
  ```

- Create a `.env` file in the Backend/ directory:
  - Ask the CandidHR team for .env file and copy the contents in your local copy

- Apply migrations and create a superuser:

  ```bash
  python ./Backend/manage.py migrate
  python ./Backend/manage.py createsuperuser
  ```

### React frontend

- Install dependencies:
  
  ```bash
  cd hr-frontend
  npm install
  ```

- Create a `.env` file in the root project directory:
  - Ask the CandidHR team for .env file and copy the contents in your local copy

## Start CandidHR site

### Run the development server:

- **Backend**
  ```bash
  cd ./hr-app
  source ./venv/bin activate 
  #on windows: ./venv/Scripts/activate
  python ./Backend/manage.py runserver
  ```

- **Frontend**
  ```bash
  cd ./hr-frontend
  npm start
  ```

:::note
Make sure that before running these commands `mysql-server` and `redis-server` services are running:
:::

The `cd` command changes the directory you're working with. You'll need to navigate the terminal to the directory your files are in.

The `source ./venv/bin activate` command activates the python virtual environment.

The `python ./Backend/manage.py runserver` command builds your django api locally and serves it through a development server, ready for you to access at http://localhost:8000/.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

## Common Troubleshooting

- Apply migrations if missing:

  ```bash
  python Backend/manage.py makemigrations
  python Backend/manage.py migrate
  ```

- Clear frontend cache 

  ```bash
  rm -rf node_modules package-lock.json #on windows: rm -r -F node_modules package-lock.json
  npm install
  ```

- Check configuration and connection settings in `.env` for both frontend and backend.