import express from 'express';

import {
	createStandard,
	deleteStandard,
	getallStandard,
	singleStandard,
	singleStdAndStudents,
	singleStdAndTeacher,
	stdsAndStudents,
	stdsAndTeachers,
	updateStandard,
} from '../Controllers/standards';
import {
	paramsValidation,
	queryValidation,
	standardCreateUpdateValidation,
} from '../Validations/JoiValidation/JoiValidation';

export const standardRoutes = express.Router();



//create standard
standardRoutes.route('/').post(standardCreateUpdateValidation, createStandard);

//get all standards
standardRoutes.route('/all').get(queryValidation,getallStandard);

//get single standard
standardRoutes.route('/single/:id').get(paramsValidation,singleStandard);

//update standard
standardRoutes.route('/update/:id').put(paramsValidation,standardCreateUpdateValidation, updateStandard);

//delete standard
standardRoutes.route('/delete/:id').delete(paramsValidation,deleteStandard);

//all standards have which students
standardRoutes.route('/stdstAndStudents').get(queryValidation,stdsAndStudents);

//particular standard have which students
standardRoutes.route('/singlestdAndStudent/:id').get(paramsValidation,singleStdAndStudents);

//all standards  have which teachers
standardRoutes.route('/stdsAndTeachers').get(queryValidation,stdsAndTeachers);

//particular standard have which teachers
standardRoutes.route('/singleStdAndTeacher/:id').get(paramsValidation,singleStdAndTeacher);


export default standardRoutes;