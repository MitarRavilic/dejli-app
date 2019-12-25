"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
exports.initDB = () => {
    const MONGO_HOSTNAME = 'localhost';
    const MONGO_PORT = '27017';
    const MONGO_DB = 'dejli-db';
    mongoose_1.default.connect(`mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`, { useNewUrlParser: true, useUnifiedTopology: true });
    const database = mongoose_1.default.connection;
    database.on('error', console.error.bind(console, 'connection error:'));
    database.once('open', () => {
        console.log('Connected to db');
    });
};
//# sourceMappingURL=DB.js.map