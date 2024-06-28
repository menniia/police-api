import { statementModel } from "../models/statementModel.js";

// function to store data in the database
export const addStatement = async (req, res, next) => {

    try {
        console.log("request", req.body);
        const addData = await statementModel.create(req.body);
        res.status(200).send(addData);
    } catch (error) {
        next(error);
    }
    
}

export const deleteStatement = async (req, res, next) => {
    try {
        const deleteSomething = req.body
        const deletedID = await statementModel.findByIdAndDelete(req.params.id, {_id: deleteSomething});
        res.json(deletedID);
    } catch (error) {
        next(error)
    }
}

export const receiveStatements =  async (req, res, next) => {
    try {
        const allStatements = await statementModel.find();
        res.json(allStatements);
    } catch (error) {
        next(error);
    }
}

export const getSingleStatement = async (req, res, next) => {
    try {
        const getSingleId = await statementModel.findById(req.params.id);
        res.json(getSingleId);
    } catch (error) {
        next(error);
    }
}

export const statementUpdate = async (req, res, next) => {
    try {
        const status = req.body.caseStatus;
        const updateStatement = await statementModel.findByIdAndUpdate(req.params.id, {caseStatus: status});
        res.json(updateStatement);
    } catch (error) {
        next(error);
    }
}