"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
const AuthService_1 = require("../../service/AuthService");
//  ++ All Controller Classes are implemented as Singletons 
// and should only be called with getInstance() method ++
class AuthController {
    constructor() {
        this.authRouter = express.Router();
        this.registerTeam = async (req, res) => {
            const data = await AuthService_1.AuthService
                .registerTeam(req.body.teamName, req.body.teamPassword).catch(() => console.log('rejected promise'));
            return res.json(data);
        };
        this.loginTeam = (req, res) => {
            res.json(AuthService_1.AuthService.loginTeam(req.body.teamName, req.body.teamPassword));
        };
        this.testController = (req, res) => {
            const msg = AuthService_1.AuthService.testConnection();
            return res.status(200).send(msg);
        };
        this.authRouter.post('/register', this.registerTeam);
        this.authRouter.post('/login', this.loginTeam);
        this.authRouter.get('/test', this.testController);
    }
    // Singleton implementation
    static getInstance() {
        if (!AuthController.instance) {
            AuthController.instance = new AuthController();
        }
        return AuthController.instance;
    }
    getRouter() {
        return this.authRouter;
    }
}
exports.AuthController = AuthController;
//# sourceMappingURL=AuthController.js.map