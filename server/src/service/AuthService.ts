import { TeamModel } from '../model/Team';
import { Document } from 'mongoose';

export class AuthService {

    public static async loginTeam(name: string, password: string) {
       await TeamModel.findOne({teamName: name}, (err: any, result: any) => {
            if (err) { return err; }
            // hash password and compare hashes
            if (password === result.teamPassword) {
                // generate and return token
             } else {
                 // return error
             }
        });
    }

    public static async registerTeam(teamName: string, teamPassword: string) {
        await TeamModel.create({teamName, teamPassword}, (err: any, result: any) => {
            if (err) { return err; }
            return  result;
        });

    }
    public static testConnection() {
        const message = 'its working';
        return message;
    }
}
