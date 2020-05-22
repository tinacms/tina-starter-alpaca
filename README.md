# Tina Starter Alpaca

This example project uses Next.js + Tina

## A starting point for your documentation


## :memo: Getting started

First you have to add an .env file that looks like this

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

Install dependencies and run the example:

```bash
npm install
npm run dev
```
# or
```bash
yarn install
yarn dev
```

Your doc starter should be up and running on [http://localhost:3000](http://localhost:3000)!

Deploy it to the cloud with [Vercel](https://vercel.com/import?filter=next.js&utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
