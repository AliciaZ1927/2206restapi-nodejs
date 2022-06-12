import { DataTypes } from 'sequelize';
import {database} from '../../database/database.js';
import { Zhou } from './Zhou.js'
import { micItem } from './micItem.js';
import { miU } from './miU.js';

export const miC = database.define('miC', {
    CartId: {
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
    },

});



miC.belongsToMany(Zhou, {
    through: 'micItem'
})

Zhou.belongsToMany(miC, {
    through: 'micItem'
})