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

1. Clone the repo `git clone https://github.com/tinacms/tina-starter-alpaca.git`
2. `cd tina-starter-alpaca`
3. [Set up a GitHub OAuth App](https://tinacms.org/guides/nextjs/github-open-authoring/github-oauth-app)
4. Add a new file called `.env` with the credentials from your Github OAuth App

```env
# OAuth App Credentials from GitHub
GITHUB_CLIENT_ID=************
GITHUB_CLIENT_SECRET=************
SIGNING_KEY=*********

# The path to your repository in GitHub
REPO_FULL_NAME=<GitHub Username>/<Repo Name>

# The base branch that new changes and forks are created from. Defaults to 'master'.
BASE_BRANCH=master
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

7. If you want the search functionality to work, follow these steps

   1. Make an account at [algolia](https://www.algolia.com/)
   2. add environment variables to env file (found it the dashboard under the api keys tab)

   ```
    ALGOLIA_APP_ID=***
    ALGOLIA_API_KEY=***
    ALGOLIA_ADMIN_KEY=***
   ```

   3. run `yarn create-indices` (this command will have to be run every time you wish to update the indices)
   4. Complete the setup for each index (located on the right side panel)
      1. Configure searchable attributes (must add excerpt)
      2. Configure custom ranking (must add excerpt)
   5. Test and see the search is now working

## Deploy on Vercel

## Gathering Feedback

People can submit  feedback from any documentation page. This feedback is immediately posted to GitHub and stored as issues to the repository of your choosing.
GitHub issues are an awesome way to store feeback, make it searchable, filterable on page URL or reaction types for instance, and you can chosse to be notified of any new comment on your website 🔔.

### Setup

1. [Make a personal GitHub access token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) 👈 This is the GitHub user that posts any new feedback. Feel free to create a dedicated GitHub account for this.
2. Add the following environement variables:
```env
USERNAME_ISSUES=<GitHub username>
GITHUB_ACCESS_TOKEN=<personal access token>
REPO_ISSUES=<repository-name> 
```

Make sure issues are activated in the repository settings.

3. Run NextJS in development mode to test:
```bash
yarn
yarn dev
```
4. Submit a feedback from the form at the bottom of a documenation page on your site. 
5.  👀 Check your GitHub repository if an issue has been created.


## :link: Hosting

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/tinacms/tina-starter-alpaca&env=REPO_FULL_NAME,GITHUB_CLIENT_ID,GITHUB_CLIENT_SECRET,SIGNING_KEY&envDescription=Provide%20GitHub%20OAuth%20Keys&envLink=https://tinacms.org/guides/nextjs/github-open-authoring/hosting-vercel)

- [See how to deploy NextJS on Vercel](https://nextjs.org/docs/deployment).
- [You have to **create a GitHub OAuth App** with your Vercel URL](https://tinacms.org/guides/nextjs/github-open-authoring/hosting-vercel).

## :octocat: Issues

If you notice any bugs or have any problems please [report them here](https://github.com/tinacms/tina-starter-alpaca/issues/new)
