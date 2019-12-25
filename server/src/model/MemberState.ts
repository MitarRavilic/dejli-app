export class MemberState {
    public memberName: string;
    public isActive: boolean;

    constructor(memberName: string) {
        this.memberName = memberName;
        this.isActive = true;
    }
}
