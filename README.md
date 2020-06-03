#  <svg width="65" viewBox="0 0 49 68" fill="inherit" aria-labelledby="title desc"><path d="M31.462 30.178c3.301-2.73 4.764-18.868 6.193-24.669 1.43-5.8 7.34-5.507 7.34-5.507s-1.534 2.671-.909 4.664C44.712 6.659 49 8.44 49 8.44l-.925 2.438s-1.93-.247-3.08 2.052c-1.15 2.298.739 25.058.739 25.058s-6.907 13.623-6.907 19.374c0 5.752 2.723 10.572 2.723 10.572h-3.82s-5.605-6.67-6.754-10.002c-1.15-3.333-.69-6.666-.69-6.666s-6.091-.345-11.493 0c-5.401.345-9.004 4.988-9.654 7.585-.65 2.598-.92 9.083-.92 9.083H5.2C3.361 62.26 1.9 60.227 2.693 57.362c2.194-7.935 1.763-12.436 1.255-14.44C3.44 40.917 0 39.168 0 39.168c1.685-3.433 3.405-5.083 10.803-5.255 7.398-.172 17.357-1.004 20.658-3.735z"></path><path d="M12.25 57.03s.78 7.223 4.927 10.904h3.554c-3.554-4.026-3.941-14.519-3.941-14.519-1.808.589-4.31 2.696-4.54 3.615z"></path></svg>Tina Starter Alpaca

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

