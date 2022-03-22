import 'dotenv/config';
import { GithubKV } from "github-keyvalue";
let db = new GithubKV({ token: process.env.PERSONAL_TOKEN, owner: 'xrdavies', repo: 'github-keyvalue', branch: 'db' });

// console.log(await db.get('test2.json'));
// console.log(await db.add({ d: 1 }));
// console.log(await db.update("test2.json", { d: 3 }));

// db.remove("99d26c869671a2412368e664a19568d4.json", (err, res) => {
//     console.log(err);
//     console.log(res);
// })

console.log(await db.list());

// import { Octokit } from "@octokit/rest";
// let octokit = new Octokit({ auth: process.env.PERSONAL_TOKEN });
// let {data} = await octokit.rest.repos.getContent({ owner: 'xrdavies', path: undefined, repo: 'github-keyvalue', ref: 'db' });
// console.log(data);