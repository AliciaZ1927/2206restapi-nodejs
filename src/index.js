import app from './app.js';
import { database } from './database/database.js';



const port = 5000;

async function main(){
    try {
        await database.sync({force: false})
        // await database.authenticate()
        // console.log('Connection has been established successfully.');
        app.listen(port);
        console.log(`Server is listening on port ${port}`)
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    
};



main();