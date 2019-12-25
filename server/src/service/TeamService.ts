import { TeamModel } from '../model/Team';

export class TeamService {

    // Add member to team
    public static async addMember(teamName: string, memberName: string) {
        // TODO: remove teamName from arguments, get it from jwt token instead
     return await TeamModel.findOne({teamName}).exec((err, doc) => {
          if (err) { return console.log(err); }
          doc?.members.push(memberName);
          doc?.save((err) => {
              if (err) { return console.log(err); }
              console.log(`Members Array for team ${teamName} Updated with ${memberName} added`);
          });
      });
    }

    public static async removeMember(teamName: string, memberName: string) {
        return await TeamModel.findOne({teamName}).exec((err, doc) => {
            if (err) { return console.log(err); }
            const index = doc?.members.findIndex((member) => member === memberName);
            if (index !== -1 && index !== undefined) {
            doc?.members.splice(index, 1);
            doc?.save((err) => {
                if (err) { return console.log(err); }
                console.log(`Members Array for team ${teamName} Updated with ${memberName} removed`);
            });
            }
            return console.log(`No member found in team ${teamName} with name ${memberName}`);
        });
    }
}
