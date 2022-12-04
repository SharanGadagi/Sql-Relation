import { DataTypes, Model, Sequelize } from 'sequelize';

import {
	DATABASE_NAME,
	DATABASE_PASSWORD,
	DATABASE_USERNAME,
} from '../Config/config';

const sequelize: any = new Sequelize(DATABASE_NAME, DATABASE_USERNAME, DATABASE_PASSWORD, {
  host: '127.0.0.1',
  dialect: 'postgres',
  logging: false
})

try {
  sequelize.authenticate();
  console.log('Database Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}



//   let db: {
//       Teacher: any;
//       Standards: any;
//       Subjects: any;
//       Student: any;
//        sequelize: any; 
//        Sequelize: typeof Sequelize 
// }={
//   sequelize: sequelize,
//   Sequelize: Sequelize,
//   Student:undefined,
//   Teacher: undefined,
//   Standards: undefined,
//   Subjects: undefined
// };

//   db.sequelize=sequelize;
//   db.Sequelize=Sequelize;
//   db.Student=require('../Models/students')(DataTypes,sequelize,Model)
//   db.Teacher=require('../Models/teachers')(DataTypes,sequelize,Model)
//   db.Standards=require('../Models/standard')(DataTypes,sequelize,Model)
//   db.Subjects=require('../Models/subjects')(DataTypes,sequelize,Model)



//   db.sequelize.sync({force:true})

// module.exports=db
export default sequelize;

