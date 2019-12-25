import * as express from 'express';
import { AuthService } from '../../service/AuthService';

//  ++ All Controller Classes are implemented as Singletons 
// and should only be called with getInstance() method ++
export class AuthController {

    // Singleton implementation
     public static getInstance(): AuthController {
        if (!AuthController.instance) {
            AuthController.instance = new AuthController();
        }
        return AuthController.instance;
    }

    private static instance: AuthController;
    private authRouter = express.Router();

    private constructor() {
        this.authRouter.post('/register', this.registerTeam);
        this.authRouter.post('/login', this.loginTeam);
        this.authRouter.get('/test', this.testController);
    }

   public getRouter() {
        return this.authRouter;
    }

    private registerTeam = async (req: express.Request, res: express.Response) => {
            const data = await AuthService
            .registerTeam(req.body.teamName, req.body.teamPassword).catch(() => console.log('rejected promise'));
            return res.json(data);

    }

    private loginTeam = (req: express.Request, res: express.Response) => {
       res.json(AuthService.loginTeam(req.body.teamName, req.body.teamPassword));
    }

    private testController = (req: express.Request, res: express.Response) => {
       const msg = AuthService.testConnection();
       return res.status(200).send(msg);
    }
}
