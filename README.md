# InGenious Table

## Online Demo
Link: https://nameless-dawn-98079.herokuapp.com/

## Technology Stack
This project is built using Node/Express on the backend, React on the frontend, and Rethinkdb (Thinky ORM).

Please check the `package.json` file in the root directory and the client directory for the specific versions.

## Server Architecture
For ease of development, we are using two separate servers for the backend and frontend. The two servers are fired up using `npm run dev` in the root directory which makes use of concurrently npm package and update both the client and the backend after any change in the code base. 

In production, the frontend server is compiled a `main.js` file and our Node/Express server is configured to handle all the incoming request during production.

## How to run locally
1. Clone the github repo
2. Create a .env file in the root directory where your environment variables will be initalized
3. Setup a rethinkdb server either locally or using an online service such as Compose or AWS
4. Configure your environment variables accordingly and update `/models/row.js` with the appropriate fields to connect to your database servers
5. You are all set!
