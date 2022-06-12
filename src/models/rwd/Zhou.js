
import { DataTypes } from "sequelize";
import { database } from "../../database/database.js";
import { miO } from "./miO.js";
import { mioItem } from "./mioItem.js";



export const Zhou = database.define('Zhous',{
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


miO.belongsToMany(Zhou, {
    through: 'mioItem'
})