# Global City Data

## Table of Contents

1. [Develop](#develop)
2. [What's Inside](#what's-inside?)

## Develop

1. **Clone this repo.**

   If you don't have [git](https://git-scm.com/) installed, go install that and come back.

   Clone this repo in your terminal with the following command.

   ```sh
   git clone https://github.com/globalcitydata/globalcitydata.git
   ```

2. **Start up a local instance of the website.**

   Navigate into your new site’s directory, create a local git branch, and start it up. Checkout [this article](https://medium.freecodecamp.org/what-is-git-and-how-to-use-it-c341b049ae61) if you are not familiar with Git.

   ```sh
   # Move into globalcitydata directory
   cd globalcitydata/
   # Switch into local branch named "my-branch"
   git checkout -b my-branch
   # Start website on local server
   npm run start
   ```

3. **Open the source code and start editing!**

   Your site is now running at `http://localhost:8000`!

   _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

   Open the `globalcitydata` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

4. **Brush up on the tech stack.**

   This website is entirely coded on the frontend, using external resources in place of a backend.

   _Frontend Resources_

   - [React.js](https://reactjs.org/) is a Javascript library used for the view logic.

   - [Gatsby.js](https://www.gatsbyjs.org/) is a static site generator for React.

   If these mean nothing to you, read this [this article](https://www.contentful.com/r/knowledgebase/jamstack-cms/), and then check out those links on React and Gatsby (look at React before Gatsby).

   _Backend Resources_

   - Majority of text and all data on this website queried from [Contentful](https://www.contentful.com/). This is a headless CMS that simply holds data that a website can query and use.

   - [GraphQL](https://graphql.org/) used to query data and pull into website.

   _Other Resources_

   - [Netlify](https://www.netlify.com/) used for hosting.

## What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.
