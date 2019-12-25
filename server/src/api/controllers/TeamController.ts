import * as team from '../../model/Team';
import express, { Request, Response } from 'express';
import { TeamService } from '../../service/TeamService';

export class TeamController {

    public static getInstance() {
        if (!TeamController.instance) {
            TeamController.instance = new TeamController();
        }
        return TeamController.instance;
    }

    private static instance: TeamController;
    private teamRouter = express.Router();

    private constructor() {
        this.teamRouter.post('/member', this.addMember);
        this.teamRouter.delete('/member', this.removeMember);
    }

    public getRouter() {
        return this.teamRouter;
    }

    private addMember = async (req: Request, res: Response) => {
       const team = await TeamService.addMember(req.body.teamName, req.body.memberName);
       res.status(200).json(team);
    }
    private removeMember = async (req: Request, res: Response) => {
        const team = await TeamService.removeMember(req.body.teamName, req.body.memberName);
        res.status(200).json(team);
     }
}
