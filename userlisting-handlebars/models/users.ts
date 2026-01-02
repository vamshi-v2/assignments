import { DataTypes } from "sequelize";
import { sequelize } from ".";
const { Model } = require('sequelize');
const bcrypt = require('bcrypt')
// interface UserAttributes {
//     id: number;
//     name: string;
//     email: string;
// }
export class User extends Model {
    declare id: number;
    declare name: string;
    declare email: string;
    declare password: string;
    
//     checkPassword(password: any) {
//     return bcrypt.compare(password, this.password)
//   }

}
User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        unique: true,
    },
}, {

    sequelize,  
    modelName: 'Users', 
}); 

// User.addHook('beforeSave', async user => {
//   if (user.changed('password')) {
//     user.password = await bcrypt.hash(user.password, 10)
//   }
// })