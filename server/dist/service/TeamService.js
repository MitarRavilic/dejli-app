"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Team_1 = require("../model/Team");
class TeamService {
    static async addMember(teamName, memberName) {
        return await Team_1.TeamModel.findOne({ teamName }).exec((err, doc) => {
            var _a, _b;
            if (err) {
                return console.log(err);
            }
            (_a = doc) === null || _a === void 0 ? void 0 : _a.members.push(memberName);
            (_b = doc) === null || _b === void 0 ? void 0 : _b.save((err) => {
                if (err) {
                    return console.log(err);
                }
                console.log(`Members Array for team ${teamName} Updated with ${memberName} added`);
            });
        });
    }
    static async removeMember(teamName, memberName) {
        return await Team_1.TeamModel.findOne({ teamName }).exec((err, doc) => {
            var _a, _b, _c;
            if (err) {
                return console.log(err);
            }
            const index = (_a = doc) === null || _a === void 0 ? void 0 : _a.members.findIndex((member) => member === memberName);
            if (index !== -1 && index !== undefined) {
                (_b = doc) === null || _b === void 0 ? void 0 : _b.members.splice(index, 1);
                (_c = doc) === null || _c === void 0 ? void 0 : _c.save((err) => {
                    if (err) {
                        return console.log(err);
                    }
                    console.log(`Members Array for team ${teamName} Updated with ${memberName} removed`);
                });
            }
            return console.log(`No member found with name ${memberName}`);
        });
    }
}
exports.TeamService = TeamService;
//# sourceMappingURL=TeamService.js.map