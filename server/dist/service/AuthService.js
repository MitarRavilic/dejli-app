"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Team_1 = require("../model/Team");
class AuthService {
    static async loginTeam(name, password) {
        await Team_1.TeamModel.findOne({ teamName: name }, (err, result) => {
            if (err) {
                return err;
            }
            // hash password and compare hashes
            if (password === result.teamPassword) {
                // generate and return token
            }
            else {
                // return error
            }
        });
    }
    static async registerTeam(teamName, teamPassword) {
        await Team_1.TeamModel.create({ teamName, teamPassword }, (err, result) => {
            if (err) {
                return err;
            }
            return result;
        });
    }
    static testConnection() {
        const message = 'its working';
        return message;
    }
}
exports.AuthService = AuthService;
//# sourceMappingURL=AuthService.js.map