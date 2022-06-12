import { DataTypes } from "sequelize";
import { database } from "../../database/database.js";
import { miC } from "./miC.js";
import { miO } from "./miO.js";


export const miU = database.define('miUs',{
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: false,
        allowNull: false
    },
    Account: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    Address: {
        type: DataTypes.STRING,
        allowNull: false
    }
});


miU.hasOne(miC);

miC.belongsTo(miU, {
    foreignKey: 'miUCid'
})

miU.hasMany(miO);

miO.belongsTo(miU, {
    foreignKey: 'miUOid'
})