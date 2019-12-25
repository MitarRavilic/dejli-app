"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const db = __importStar(require("./database/DB"));
const index_1 = require("./api/index");
const morgan_1 = __importDefault(require("morgan"));
const app = express_1.default();
app.use(cors_1.default());
// app.use(express.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use(morgan_1.default('dev'));
app.use('/', index_1.indexRouter);
// app.use('/auth', AuthController.getInstance().initializeRoutes());
const port = 3000;
app.set('port', process.env.port || port);
// == MongoDB connect ==
db.initDB();
// app.get('/', (req: Request, res: Response) => {
//   const message = 'req working';
//   console.log(message);
//   res.send({message});
// });
app.listen(port, (err) => {
    if (err) {
        return console.log(err);
    }
    return console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=app.js.map