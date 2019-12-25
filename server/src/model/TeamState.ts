import { MemberState } from "./MemberState";

export interface ITeamState {
    teamName: string;
    members: MemberState[];
}