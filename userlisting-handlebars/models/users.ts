'use strict';
import { DataTypes } from "sequelize";
import { sequelize } from ".";
const { Model } = require('sequelize');
interface UserAttributes {
    id: number;
    name: string;
    email: string;
}

export class User extends Model {
    declare id: number;
    declare name: string;
    declare email: string;
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
}, {

    sequelize,  
    modelName: 'Users', 
}); 