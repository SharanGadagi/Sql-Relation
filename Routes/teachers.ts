import express from 'express';

import {
	createTeacher,
	deleteTeacher,
	getallTeacher,
	singleTeacher,
	singleTeacherAndStd,
	teachersAndStd,
	updateTeacher,
} from '../Controllers/teachers';
import {
	paramsValidation,
	queryValidation,
	teacherCreateUpdateValidation,
} from '../Validations/JoiValidation/JoiValidation';

export const teacherRoutes = express.Router();



//create teacher
teacherRoutes.route('/').post(teacherCreateUpdateValidation, createTeacher);

//get all teachers
teacherRoutes.route('/all').get(queryValidation,getallTeacher);

//get particular teacher
teacherRoutes.route('/single/:id').get(paramsValidation,singleTeacher);

//update teacher
teacherRoutes.route('/update/:id').put(paramsValidation,teacherCreateUpdateValidation, updateTeacher);

//delete teacher
teacherRoutes.route('/delete/:id').delete(paramsValidation,deleteTeacher);

//all teachers in which standards
teacherRoutes.route('/teachersAndStds').get(queryValidation,teachersAndStd);

//particular teacher in which standards
teacherRoutes.route('/singleTeachersAndStd/:id').get(paramsValidation,singleTeacherAndStd)

export default teacherRoutes;