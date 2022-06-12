import { DataTypes } from 'sequelize';
import {database} from '../database/database.js';

export const Order = database.define('Order', {
    OrderId: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true,
        defaultValue: false,
        allowNull: false
    },
    Quantity:{
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    Amount:{
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }

});
