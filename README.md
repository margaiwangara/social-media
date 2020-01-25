## CRUD application with auth developed with Express.js/MongoDB

This project contains REST API endpoint for authentication and posts. It is developed in Express.js utilizing Typescript and MongoDB as the database of choice.

#### Linting

- ESLint
- Airbnb
- Prettier

#### Languages

- Javascript / Typescript

#### Database

- MongoDB

#### Endpoints

- Authentication - using JWT
  - /api/auth/register
  - /api/auth/login
- Posts
  - /api/posts - GET | POST\[CREATE\]
  - /api/posts/:id - GET | PUT | DELETE

## Middleware

- Auth - For authentication to avoid unauthorized access
- Error - For error handling to display custom user-friendly error messages

## Config

Config file has not been added due to availability of sensitive information, however a config.env.example file is available with the requred config variables and value placeholders

## Folder Structure (src)

- controllers - contains all controller methods passed to routes
  - auth
  - post
- handlers
  - asyncWrapper
  - HttpException
- interfaces
  - post
  - user
- middleware
  - auth
  - errors
- models
  - index
  - Post
  - User
- routes
  - auth
  - posts
- index.ts

#### Running Project

The project has multiple npm run scripts for compilation, linting and running

- Typescript compilation
  `npm run build` or `yarn build`
- Run project on Typescript src/
  `npm run server` or `yarn server`
- Run project with Javascript on build/
  `npm run start` or `yarn start`
- Linting
  `npm run lint` or `yarn lint`
