# falopez10.github.io

## Author

Fabio Andrés López Corredor.

This is my personal web page. It includes my previous experiences, projects and hobbies.

## Let me see it!

Just [go to my website](https://falopez10.github.io/)

## Technologies used

* **[React](https://reactjs.org/)**: My favorite javascript framework so far. I used create-react-app just to get the basis folder structure.
* **[Typescript](https://www.typescriptlang.org/)**: Really simple to use and to learn either if you know JS or not.
* **[Material-ui](https://material-ui.com/)**: As I love tweaking my apps with CSS and native resources, I recomend this highly-customizable library to save time developing react apps.
* **CSS**: Along with [SASS](https://sass-lang.com/) and [jss](https://cssinjs.org/), I believe the language used for styling will keep being the standard in web development.
* **[webpack](https://webpack.js.org/)**: I configured webpack from scratch to generate the static web files needed. create-react-app is a good option but for experimented web developers I recommend using webpack to get a better understanding of how everything is bundled.
* **gh-pages**: Currently I serve the webpage on github pages.

## Initial setup

### template from create-react-app

npx create-react-app ./ --template cra-template-typescript

npm uninstall react-scripts

npm install --save typescript @types/node @types/react @types/react-dom @types/jest

### dev dependencies

npm install -D webpack webpack-cli

npm install -D webpack-dev-server html-webpack-plugin html-loader style-loader css-loader ts-loader inline-source-map file-loader tslint tslint-loader copy-webpack-plugin

npm install -D babel-loader @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript @babel/plugin-proposal-class-properties @babel/plugin-proposal-object-rest-spread @babel/plugin-transform-runtime @babel/runtime

*Made by Fabio. From Colombia, for the 🌍*