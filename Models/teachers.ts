import { DataTypes, Model, Sequelize } from 'sequelize';

import sequelize from '../Connection/db';
import { TeacherAttributes } from '../typeModel/modelTypes';
import Standard from './standard';
import subjects from './subjects';

//DataTypes:any,sequelize:any,Model:any
// export default()=>{

class Teacher extends Model<TeacherAttributes>{

}
Teacher.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false

    },
    address: {
        type: DataTypes.TEXT,

    },
    mobile: {
        type: DataTypes.STRING,
        unique: true

    },
    stdId: {
        type: DataTypes.UUID,
        references: {
            model: Standard,
            key: 'id'
        }

    }
}, {
    tableName: "teachers",
    sequelize: sequelize
})


Standard.hasOne(Teacher, {
    foreignKey: "stdId",
    as: 'teacher'
})

Teacher.belongsTo(Standard, {
    foreignKey: "stdId",
    as: 'std'
})

console.log(Teacher === sequelize.models.Teacher);
// return Teacher
export default Teacher
// }