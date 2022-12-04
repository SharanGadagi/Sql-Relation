import joi from 'joi';

import {
	ParamsAttributes,
	QueryAttributes,
	StandardsCreateAndUpdateAttributes,
	StudentsCreateAndUpdateAttributes,
	SubjectsCreateAndUpdateAttributes,
	TeacherCreateAndUpdateAttributes,
} from '../ValidationTypes/validationTypes';

//student
export const studentCreateUpdateSchema = joi.object<StudentsCreateAndUpdateAttributes>({
    name: joi.string().min(2).required(),
    address: joi.string().min(5),
    mobile: joi.number().min(10),
    active: joi.boolean(),
    stdId: joi.string()

})


//teacher
export const teacherCreateUpdateSchema = joi.object<TeacherCreateAndUpdateAttributes>({
    name: joi.string().min(2).required(),
    address: joi.string().min(5),
    mobile: joi.number().min(10),
    stdId: joi.string()
})


//standard
export const standardCreateUpdateSchema = joi.object<StandardsCreateAndUpdateAttributes>({
    name: joi.string().min(2).required(),
    active: joi.boolean()
})


//subjectMarks
export const subjectMarksCreateUpdateSchema = joi.object<SubjectsCreateAndUpdateAttributes>({
    firstSubject: joi.number().integer(),
    secondSubject: joi.number().integer(),
    thirdSubject: joi.number().integer(),
    fourthSubject: joi.number().integer(),
    totalMarks: joi.number().integer(),
    studentId: joi.string()
})


export const querySchema = joi.object<QueryAttributes>({
    page: joi.number(),
    size: joi.number()
})

export const paramsSchema = joi.object<ParamsAttributes>({
    id: joi.string().required()
})




module.exports = {
    studentCreateUpdateSchema,
    teacherCreateUpdateSchema,
    standardCreateUpdateSchema,
    subjectMarksCreateUpdateSchema,
    paramsSchema,
    querySchema
}