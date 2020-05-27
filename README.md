# Tina Starter Alpaca

This project uses Next.js + Tina

## A starting point for your documentation


## :memo: Getting started on localhost
1. clone the repo or a fork of the repo
2. ```cd tina-starter-alpaca``` 
3. Add a file called .env to the root of the project that looks like this

```env
# OAuth App Credentials from GitHub
GITHUB_CLIENT_ID=***
GITHUB_CLIENT_SECRET=***

# The path to your repository in GitHub
REPO_FULL_NAME=<GitHub Username>/<Repo Name>

# The base branch that new changes and forks are created from. Defaults to 'master'.
BASE_BRANCH=feature/open-authoring
```
You can learn more about how to [generate these credentials here](https://tinacms.org/guides/nextjs/github-open-authoring/github-oauth-app)

4. Install dependencies and run the doc starter:
   
```bash
yarn install
yarn dev
```
#### or
```bash
npm install
npm run dev
```
5. Your doc starter should be up and running on [http://localhost:3000](http://localhost:3000)!


## :link: Hosting on Vercel

You will have to generate a new set of keys with the url of vercel

Deploy it to the cloud with [Vercel](https://vercel.com/import?filter=next.js&utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
