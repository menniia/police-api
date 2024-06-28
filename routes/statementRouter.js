import { Router } from "express";
import { addStatement, deleteStatement, getSingleStatement, receiveStatements, statementUpdate } from "../controllers/statementController.js";

export const statementRouter = Router();


statementRouter.get('/statements', receiveStatements);
// get one statement
statementRouter.get("/statements/:id", getSingleStatement);
statementRouter.delete("/statements/:id", deleteStatement);
statementRouter.post("/statements", addStatement);
statementRouter.patch("/statements/:id", statementUpdate);

export default statementRouter;