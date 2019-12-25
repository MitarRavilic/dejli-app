"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = __importStar(require("mongoose"));
const TeamSchema = new mongoose.Schema({
    teamId: { type: mongoose.Schema.Types.ObjectId },
    teamName: { type: String, required: true },
    teamPassword: { type: String, required: true },
    members: [{ type: String }],
});
exports.TeamModel = mongoose.model("Team", TeamSchema);
//# sourceMappingURL=Team.js.map