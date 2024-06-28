import { Schema, model } from "mongoose";

const statementSchema = new Schema({

  
    incidentType: {type: String, enum: ["criminal", "non-criminal"]},
    civilianStatus: {type: String, enum: ["suspect", "complainant", "witness"]},
    statement: {type: String},
    caseStatus: {type: String, enum: ["open", "close"]},
    createdAt: {type: Date, default: Date.now()},
    updatedAt: {type: Date, default: Date.now()}

});

export const statementModel = model("statement", statementSchema);