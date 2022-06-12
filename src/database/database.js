import Sequelize from "sequelize";

export const database = new Sequelize('project-dyson', 'root', '0325', {
    dialect: 'mysql',
    host: 'localhost'
});

