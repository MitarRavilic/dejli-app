import mongoose from 'mongoose';

export const initDB = () => {
const MONGO_HOSTNAME = 'localhost';
const MONGO_PORT = '27017';
const MONGO_DB = 'dejli-db';
mongoose.connect(`mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`,
 { useNewUrlParser: true, useUnifiedTopology: true} );

const database = mongoose.connection;

database.on('error', console.error.bind(console, 'connection error:'));
database.once('open', () => {
    console.log('Connected to db');
});
};
