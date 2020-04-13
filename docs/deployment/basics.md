---
date: "2019-07-10T07:00:00.000Z"
title: Basics
---

Welcome to the Next.js documentation!

If you're new to Next.js we recommend that you start with the [learn course](https://nextjs.org/learn/basics/getting-started).

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis et nibh vel blandit. Fusce sit amet volutpat purus. Pellentesque finibus sapien sit amet tortor sagittis, sit amet rhoncus erat aliquet. Cras efficitur quam eu turpis rhoncus aliquam. Suspendisse ultricies, arcu at lobortis lobortis, massa nulla faucibus eros, quis lacinia orci justo a ipsum. Suspendisse faucibus venenatis laoreet.

If you have questions about anything related to Next.js, you're always welcome to ask our community on [GitHub Discussions](https://github.com/zeit/next.js/discussions).

#### [**System Requirements**](https://nextjs.org/docs/getting-started#system-requirements)

- [Node.js 10](https://nodejs.org/) or later
- MacOS, Windows (including WSL), and Linux are supported

## [**Setup**](https://nextjs.org/docs/getting-started#setup)

We recommend creating a new Next.js app using `create-next-app`, which sets up everything automatically for you. To create a project, run:

    npm init next-app
    # or
    yarn create next-app

After the installation is complete, follow the instructions to start the development server. Try editing `pages/index.js` and see the result on your browser.

## [**Manual Setup**](https://nextjs.org/docs/getting-started#manual-setup)

Install `next`, `react` and `react-dom` in your project:

    npm install next react react-dom

Open `package.json` and add the following `scripts`:

    "scripts": {
      "dev": "next",
      "build": "next build",
      "start": "next start"
    }

These scripts refer to the different stages of developing an application:

- `dev` - Runs `next` which starts Next.js in development mode
- `build` - Runs `next build` which builds the application for production usage
- `start` - Runs `next start` which starts a Next.js production server

Next.js is built around the concept of pages. A page is a [React Component](https://reactjs.org/docs/components-and-props.html) exported from a `.js`, `.jsx`, `.ts`, or `.tsx` file in the `pages` directory.

Pages are associated with a route based on their file name. For example `pages/about.js` is mapped to `/about`. You can even add dynamic route parameters with the filename.

Create a `pages` directory inside your project.

Populate `./pages/index.js` with the following contents:
