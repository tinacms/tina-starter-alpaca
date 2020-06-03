# <img width="50" src="https://raw.githubusercontent.com/tinacms/tinacms.org/master/public/svg/tina-icon.svg" /> Tina Starter Alpaca
> A starting point for your documentation


## :sparkles: Features

- Full integration with [TinaCMS](https://tinacms.org)
- Edit and add new documentation pages
- Fully customizable Navigation
  - Organized your documentation into groups and subgroups
  - Change order of or the navigation 
- Theme Customization
  - Colors
  - Fonts
  - Titles
  


## :memo: Getting started on localhost
1. Clone the repo
   - ssh: ```git clone git@github.com:tinacms/tina-starter-alpaca.git```
   - https: ```git clone https://github.com/tinacms/tina-starter-alpaca.git``` 
2. ```cd tina-starter-alpaca```
3. [Set up a GitHub OAuth App](https://tinacms.org/guides/nextjs/github-open-authoring/github-oauth-app)  
4. Add a new file called .env with the credentials from your Github OAuth App

```env
# OAuth App Credentials from GitHub
GITHUB_CLIENT_ID=***
GITHUB_CLIENT_SECRET=***

# The path to your repository in GitHub
REPO_FULL_NAME=<GitHub Username>/<Repo Name>

# The base branch that new changes and forks are created from. Defaults to 'master'.
BASE_BRANCH=feature/open-authoring
```
You can learn more about [Open Authoring With Github in our guide](https://tinacms.org/guides/nextjs/github-open-authoring/initial-setup)

5. Install dependencies and run the doc starter:
   
```bash
yarn install
yarn dev
```
#### or
```bash
npm install
npm run dev
```
6. Your doc starter should be up and running on [http://localhost:3000](http://localhost:3000)!


## :link: Hosting
Deploy it to the cloud with [Vercel](https://vercel.com/import?filter=next.js&utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

You will have to make a **new GitHub OAuth App** with the url in vercel. [You can learn how to do that in our guide.](https://tinacms.org/guides/nextjs/github-open-authoring/hosting-vercel).

## :octocat: Issues

If you notice any bugs or have any problems please [report them here](https://github.com/tinacms/tina-starter-alpaca/issues/new)

