import * as request from 'request';
import { User } from '../model/user';
import { Repo } from '../model/repo';

const OPTIONS: any = {
    headers: {
        'User-Agent': 'request'
    },
    json: true
};

export class GitHubAPIService {
    getUserInfo(userName: string, cb: (user: User) => any) {

        request.get('https://api.github.com/users/' + userName, OPTIONS,
            (error: any, response: any, body: any) => {
                // let user = new User(JSON.parse(body));
                let user = new User(userName);
                cb(user);
            })
    }

    getRepos(userName: string, cb: (repos: Repo[]) => any) {
        request.get('https://api.github.com/users/' + userName + '/repos', OPTIONS,
            (error: any, response: any, body: any) => {
                // let repoArray = body;
                cb([0, 1, 2].map((repo: any) => new Repo(repo)));
            })
    }
}