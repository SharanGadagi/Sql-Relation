import { DataTypes, Model, Sequelize } from 'sequelize';

// import sequelize from 'sequelize/types/sequelize';
// import sequelize from 'sequelize/types/sequelize';
import sequelize from '../Connection/db';
import { StudentAttributes } from '../typeModel/modelTypes';
import Standard from './standard';
import Subjects from './subjects';

// export default()=>{

class Student extends Model<StudentAttributes>{
 
 
    

}
Student.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
       allowNull:false
    },
    address: {
        type: DataTypes.TEXT,

    },
    mobile: {
        type: DataTypes.STRING,
        unique: true

    },
    active: {
        type: DataTypes.BOOLEAN
    },
    stdId: {
        type: DataTypes.UUID,
        references: {
            model:Standard,
            key:'id'

        }

    }
},{
    tableName: 'student',
        sequelize: sequelize, 
},



);



Standard.hasOne(Student,{
    foreignKey:"stdId",
    as:'student'
})

Student.belongsTo(Standard,{
    foreignKey:"stdId",
    as:'std'
})


// Student.hasMany(Subjects, {
//     foreignKey: "studentId",
//     as: 'subject'
// })

// Subjects.belongsTo(Student, {
//     foreignKey: "studentId",
//     as: 'student'
// })

console.log(Student === sequelize.models.Student); // true
// return Student;
export default Student
