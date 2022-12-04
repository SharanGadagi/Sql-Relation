import { NextFunction, Request, Response } from 'express';
import ModelManager from 'sequelize/types/model-manager';

import {
	paramsSchema,
	querySchema,
	standardCreateUpdateSchema,
	studentCreateUpdateSchema,
	subjectMarksCreateUpdateSchema,
	teacherCreateUpdateSchema,
} from '../JoiSchema/JoiSchema';

//student
export const studentCreateUpdateValidation = (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;

    const { error, value } = studentCreateUpdateSchema.validate(body);
    if (error) {
        res.status(401).send({ error: error.details[0].message })
        console.log(error.details[0].message)
    }
    next();

}

//teacher
export const teacherCreateUpdateValidation = (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;

    const { error, value } = teacherCreateUpdateSchema.validate(body);
    if (error) {
        res.status(401).send({ error: error.details[0].message })
        console.log(error.details[0].message)
    }
    next();

}

//standard
export const standardCreateUpdateValidation = (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;

    const { error, value } = standardCreateUpdateSchema.validate(body);
    if (error) {
        res.status(401).send({ error: error.details[0].message })
        console.log(error.details[0].message)
    }
    next();

}


//subjectMarks
export const subjectMarksCreateUpdateValidation = (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;

    const { error, value } = subjectMarksCreateUpdateSchema.validate(body);
    if (error) {
        res.status(401).send({ error: error.details[0].message })
        console.log(error.details[0].message)
    }
    next();

}

//query validation
export const queryValidation=(req: Request, res: Response, next: NextFunction) =>{
    // const query=req.query;

    const { error, value } = querySchema.validate(req.query);
    if (error) {
        res.status(401).send({ error: error.details[0].message })
        console.log(error.details[0].message)
    }
    next();

}


//params validation
export const paramsValidation=(req: Request, res: Response, next: NextFunction)=>{
// const params=req.params;

const { error, value } = paramsSchema.validate(req.params);
if (error) {
    res.status(401).send({ error: error.details[0].message })
    console.log(error.details[0].message)
}
next();


}


module.exports = {
    standardCreateUpdateValidation,
    teacherCreateUpdateValidation,
    studentCreateUpdateValidation,
    subjectMarksCreateUpdateValidation,
    queryValidation,
    paramsValidation
}

