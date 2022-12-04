import express from 'express';

import {
	createStudent,
	deleteStudent,
	getallStudents,
	singleStudent,
	singleStudentAndStd,
	singleStudentAndSubjects,
	studentAndStd,
	StudentsAndSubjects,
	updateStudent,
} from '../Controllers/students';
import {
	paramsValidation,
	queryValidation,
	studentCreateUpdateValidation,
} from '../Validations/JoiValidation/JoiValidation';

export const studentRoutes = express.Router();



//student created
studentRoutes.route('/').post(studentCreateUpdateValidation, createStudent);

//get all students
studentRoutes.route('/all').get(queryValidation,getallStudents);

//get single student
studentRoutes.route('/single/:id').get(paramsValidation,singleStudent);

//update Student
studentRoutes.route('/update/:id').put(paramsValidation,studentCreateUpdateValidation, updateStudent);

//delete Student
studentRoutes.route('/delete/:id').delete(paramsValidation,deleteStudent);

//all students have which standard
studentRoutes.route('/studentAndStd').get(queryValidation,studentAndStd);

//particular student have which standard
studentRoutes.route('/studentAndStd/:id').get(paramsValidation,singleStudentAndStd);

//all students all subject Marks
studentRoutes.route('/StudentsAndSubjects').get(queryValidation,StudentsAndSubjects);

//particular student all subject marks
studentRoutes.route('/singleStudentAndSubjects/:id').get(paramsValidation,singleStudentAndSubjects);


export default studentRoutes;