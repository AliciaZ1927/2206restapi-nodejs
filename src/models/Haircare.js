
import { DataTypes } from "sequelize";
import { database } from "../database/database.js";



export const Haircare = database.define('Haircares',{
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: false,
        allowNull: false
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    imgUrl: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Description:{
        type: DataTypes.STRING,
        allowNull: false
    },
    Price: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});