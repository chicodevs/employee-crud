![NodeJS API by Francisco-gui](https://nodejs.org/static/images/logo.svg)

This is [Node.js](https://nodejs.org/) + [Express](https://expressjs.com/) rest API with a Relational Database in [PostgreSQL](https://www.postgresql.org/).
Front-end builded in [Vue.js](https://vuejs.org/) + [Boostrap 4](https://getbootstrap.com/).



## --> How to run the API

1) clone repository and go to project folder

```bash
git clone https://github.com/Francisco-gui/employee-crud.git
cd employee-crud
cd employee-api
```

2) Create a new database and a .env PostgreSQL connection string:

```bash
Schema:
  CREATE TABLE employee (
    employee_id uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    job_role VARCHAR(255) NOT NULL,
    salary NUMERIC(12,2) NOT NULL,
    birth DATE NOT NULL,
    employee_registration INTEGER NOT NULL
  )

PostGreSQL connection string:
  DATABASE_URL=postgres://YourUserName:YourPassword@YourHostname:5432/YourDatabaseName
```

3) run the development server:

```bash
npm run dev
```

You can use [insomnia](https://insomnia.rest/) to test all endpoints

```bash
# ROUTES
GET      /employees
POST     /employees
GET      /employees/:id
PUT      /employees/:id
DELETE   /employees/:id
```

## --> How to build Front-end

1) go to project folder

```bash
cd employee-crud
cd front-vue2
```

2) Run the command:

```bash
npm run serve
```

3) on PORT localhost:8080 you can acess the employees list and create a new employee registration
![image](https://user-images.githubusercontent.com/67576070/158083896-a755546c-2fa6-485d-a394-b851703ae995.png)
![image](https://user-images.githubusercontent.com/67576070/158083906-267d0e9d-b3fc-49bb-9e59-7290d0fc0220.png)





