import { Repo } from "./repo";

export class User {
    login: string = '';
    fullName: string = '';
    repoCount: number = 0;
    followerCount: number = 0;
    repos?: Repo[];

    constructor(userName:string) {
        this.login = userName;
        this.fullName = 'Koushik Kothagal';
        this.repoCount = 30;
        this.followerCount = 230;
    }
}