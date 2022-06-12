import { DataTypes } from "sequelize";
import { database } from "../database/database.js";
import { Order } from "./Order.js";


export const User = database.define('Users',{
    UserId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: false,
        allowNull: false
    },
    UserName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    UserPassword: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    UserEmail:{
        type: DataTypes.STRING,
        allowNull: false
    },
    UserAddress: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

User.hasMany(Order, {
    foreignKey: 'UserOrderId',
    sourceKey: 'UserId'
})

Order.belongsTo(User, {
    foreignKey: 'UserOrderId',
    targetId: 'UserId'
})