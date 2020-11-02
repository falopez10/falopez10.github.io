# fb-lpz

## Author

Fabio Andrés López Corredor.

This is my personal web page. It includes my previous experiences, projects and hobbies.

## Let me see it!

Just [go to my website](https://fb-lpz.web.app/)

## Technologies used

* **[React](https://reactjs.org/)**: My favorite javascript library so far. I am fond of frameworks like angular as well, but to me react is simply easier to use and faster to work with.
* **[Typescript](https://www.typescriptlang.org/)**: Really simple to use and to learn either if you know JS or not.
* **[Material-ui](https://material-ui.com/)**: As I love tweaking my apps with CSS and native resources, I recomend this highly-customizable library to save time developing react apps.
* **CSS**: Along with [SASS](https://sass-lang.com/) and [jss](https://cssinjs.org/), I believe the language used for styling will keep being the standard in web development.
* **[snowpack](https://www.snowpack.dev/)**: An interesting alternative to webpack and other building tools. I used to configure webpack from scratch to generate the static web files needed, but in terms of dev experience I believe snowpack is better and still lets you customize your building processes as much as you want. create-snowpack-app is useful too and includes only the strictly needed (unlike CRA).
* **[Firebase hosting](https://firebase.google.com/)**: Currently I serve the webpage on firebase hosting. 
* **[Github actions](https://github.com/features/actions)**: The basic build and deployment is executed from github servers via github actions.

## Initial setup

### snowpack template

npm install --save-dev snowpack

npx create-snowpack-app new-dir --template @snowpack/app-template-react-typescript

### Additional steps

That's it! If you need an specific version of typescript or are using some features from a certain version of react *(I had some trouble using the new JSX syntax available since React 17.0.0)*, you may need to add plugins to snowpack, which will be pretty easy to do.


*Made by Fabio. From Colombia, for the 🌍*