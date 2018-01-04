# InGenious Table

## Technology Stack
This project is built using Node/Express on the backend, React on the frontend, and Rethinkdb (Thinky ORM) as a database 

## Server Architecture
For ease of development, we are using two separate servers for the backend and frontend. The two servers are fired up using `npm run dev` in the root directory which makes use of concurrently npm package and update both the client and the backend after any change in the code base. 

In production, the frontend server is compiled a `main.js` file and our Node/Express server is configured to handle all the incoming request during production.

