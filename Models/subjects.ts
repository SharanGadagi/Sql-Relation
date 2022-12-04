import { DataTypes, Model, Sequelize } from 'sequelize';

import sequelize from '../Connection/db';
import { SubjectAttributes } from '../typeModel/modelTypes';
import Student from './students';

// export default()=>{
class Subjects extends Model<SubjectAttributes>{

}
Subjects.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    firstSubject: {
        type: DataTypes.INTEGER
    },
    secondSubject: {
        type: DataTypes.INTEGER
    },
    thirdSubject: {
        type: DataTypes.INTEGER
    },
    fourthSubject: {
        type: DataTypes.INTEGER
    },
    totalMarks: {
        type: DataTypes.INTEGER
    },
    studentId: {
        type: DataTypes.UUID,
        references: {
            model: Student,
            key: 'id',

        }
    }

}, {
    tableName: "subjects",
    sequelize: sequelize
}
)

Student.hasMany(Subjects, {
    foreignKey: "studentId",
    as: 'subject'
})

Subjects.belongsTo(Student, {
    foreignKey: "studentId",
    as: 'student'
})


// Student.belongsTo(Subjects, {
//     foreignKey: "studentId",
//     as: 'subject'
// })

// Subjects.hasMany(Student, {
//     foreignKey: "studentId",
//     as: 'student'
// })

console.log(Subjects === sequelize.models.Subjects);
// return Subjects
export default Subjects

// }