import { DataTypes } from "sequelize";
import { sequelize } from ".";
const { Model } = require('sequelize');

export class Creds extends Model {
    declare id: number;
    declare userName: string;
    declare password: string;
}
Creds.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        unique: true,
    },
}, {

    sequelize,  
    modelName: 'AdminCreds', 
}); 