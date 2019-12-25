"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const AuthController_1 = require("./controllers/AuthController");
const TeamController_1 = require("./controllers/TeamController");
const router = express_1.default.Router();
exports.indexRouter = router;
router.use('/auth', AuthController_1.AuthController.getInstance().getRouter());
router.use('/team', TeamController_1.TeamController.getInstance().getRouter());
//# sourceMappingURL=index.js.map