import express from "express";
import "dotenv/config";
import { dbConnection } from "./config/db.js";
import { statementRouter } from "./routes/statementRouter.js";



// create express app
const app = express();

dbConnection();

app.use(express.json());

app.use(statementRouter);

// define routes
app.get("/", (req, res) => {
    res.json("Get all statements");
});


// listen for incoming requests
const port = 3000;

app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
});