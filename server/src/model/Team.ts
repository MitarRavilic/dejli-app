import * as mongoose from 'mongoose';

interface ITeam extends mongoose.Document{
    teamId?: string;
    teamName: string;
    teamPassword: string;
    members: string[];
}

// export class Team {
//     private teamPassword: string;
//     private teamName: string;
//     private members: string[];

//     constructor(teamName: string, teamPassword: string) {
//         this.teamName = teamName;
//         this.teamPassword = teamPassword;
//         this.members = [];
//     }
// }

const TeamSchema = new mongoose.Schema({
    teamId: { type: mongoose.Schema.Types.ObjectId },
    teamName: { type: String, required: true},
    teamPassword: { type: String, required: true},
    members: [{ type: String}],
});

// add password hashing

export const TeamModel = mongoose.model<ITeam>('Team', TeamSchema);
