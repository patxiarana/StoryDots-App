import express from "express";
import routesOperations from "./routes/routes.products.js"


const app = express();

// middleware
app.use(express.json())


// routes
app.use(routesOperations)


export default app ;