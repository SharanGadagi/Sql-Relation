import express from 'express';

import {
	createSubjectMarks,
	deleteSubjectMarks,
	getallSubjectMarks,
	singleSubject,
	singleSubjectAndStudents,
	subjectsAndStudents,
	updateSubjectMarks,
} from '../Controllers/subjects';
import {
	paramsValidation,
	queryValidation,
	subjectMarksCreateUpdateValidation,
} from '../Validations/JoiValidation/JoiValidation';

export const subjectMarkRoutes = express.Router();



//create subject marks
subjectMarkRoutes.route('/').post(subjectMarksCreateUpdateValidation, createSubjectMarks);

//get all subject marks
subjectMarkRoutes.route('/all').get(queryValidation,getallSubjectMarks);

//get single subject marks
subjectMarkRoutes.route('/single/:id').get(paramsValidation,singleSubject);

//update subject marks
subjectMarkRoutes.route('/update/:id').put(paramsValidation,subjectMarksCreateUpdateValidation, updateSubjectMarks);

//delete subject marks
subjectMarkRoutes.route('/delete/:id').delete(paramsValidation,deleteSubjectMarks);

//all subject marks for all students
subjectMarkRoutes.route('/subjectsAndStudents').get(queryValidation,subjectsAndStudents);

//particular subject marks for students 
subjectMarkRoutes.route('/singleSubjectAndStudents/:id').get(paramsValidation,singleSubjectAndStudents);


export default subjectMarkRoutes;