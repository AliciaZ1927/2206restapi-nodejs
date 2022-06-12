import { DataTypes } from "sequelize";
import { database } from "../../database/database.js";

export const micItem = database.define('micItem',{
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: false,
        allowNull: false
    },
    Quantity:{
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
})