"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const TeamService_1 = require("../../service/TeamService");
class TeamController {
    constructor() {
        this.teamRouter = express_1.default.Router();
        this.addMember = async (req, res) => {
            const team = await TeamService_1.TeamService.addMember(req.body.teamName, req.body.memberName);
            res.status(200).json(team);
        };
        this.removeMember = async (req, res) => {
            const team = await TeamService_1.TeamService.removeMember(req.body.teamName, req.body.memberName);
            res.status(200).json(team);
        };
        this.teamRouter.post('/member', this.addMember);
        this.teamRouter.delete('/member', this.removeMember);
    }
    static getInstance() {
        if (!TeamController.instance) {
            TeamController.instance = new TeamController();
        }
        return TeamController.instance;
    }
    getRouter() {
        return this.teamRouter;
    }
}
exports.TeamController = TeamController;
//# sourceMappingURL=TeamController.js.map