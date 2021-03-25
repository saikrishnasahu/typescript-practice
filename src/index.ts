import * as _ from 'lodash';

import { GitHubAPIService } from "./github/service/gitHubAPIService";
import { User } from "./github/model/user";
import { Repo } from "./github/model/repo";

var svc: GitHubAPIService = new GitHubAPIService();

if (process.argv.length > 2) {
    svc.getUserInfo(process.argv[2], (user: User) => {
        svc.getRepos(process.argv[2], (repos: Repo[]) => {
            let sortedRepos = _.sortBy(repos, [(repo: Repo) => repo.forkCount * -1]);
            let reducedRepos = _.take(sortedRepos, 2);
            user.repos = reducedRepos;
            console.log(user);
        })
    });
} else {
    console.log('Provide the user name as command line argument');
}

