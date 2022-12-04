import { DataTypes, Model, Sequelize } from 'sequelize';

import sequelize from '../Connection/db';
import { StandardAttributes } from '../typeModel/modelTypes';
import Student from './students';
import Teacher from './teachers';

// export default () => {
    class Standard extends Model<StandardAttributes>{

    }
    Standard.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false

        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true

        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    }, {
        tableName: "standards",
        sequelize: sequelize
    })

    // Standard.hasOne(Student,{
    //     foreignKey:'stdId',
    //     as:'student'
    // })

    // Standard.hasOne(Teacher,{
    //     foreignKey:'stdId',
    //     as:'teacher'
    // })

    console.log(Standard === sequelize.models.Standard); // true
    export default Standard
    // return Standard;
// }

