## TLDR

this projects contains bunch of subjects of a fullstack application:

* back-end - an express app using mongoDB, JTW authentication, logger service and more.
* front-end - a react application using the back-end services while showing the user simple ui using Material UI elements

## how to run the project (on localhost!)

1. docker build - run the command: `docker run --name mongoDB -p 27017:27017 -d mongo:latest`

2. go to auth directory (`cd auth`) => run: `npm start`

3. go to missions directory (`cd missions`) => run: `npm start`

4. go to client directory (`cd missions`) => run: `npm start`


todo: create this npm start of all services together in one command
todo: logger service & DB

## how to build the project 

TBD