import { DataTypes } from "sequelize";
import { database } from "../../database/database.js";

export const mioItem = database.define('mioItem',{
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: false,
        allowNull: false
    },
    Amount:{
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
})