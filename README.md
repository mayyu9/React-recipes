In this project we will be building the whole react project from scratch.
we will be utilizing some of the good practices.

install babel-cli:
- this binary get shipped with
  babel : this is responsible for all the es6 to es5 conversions.
  babel-node

  test babel command:
  ./node_modules/.bin/babel index.js
  execute the above command from project directory.

command for converting es6 to es5 using babel:
  ./node_modules/.bin/babel index.js --presets=es2015

command to store es6 to es5 compiled code:
  ./node_modules/.bin/babel index.js -o ./bundle.js --presets=es2015

we define .babelrc file for presets, as babel reads the presets information from that file and does the required translation.

Setting up the Webpack:
  install webpack as devDependencies

  What is Webpack?
    Webpack is a module bundler for modern javascript applications.
    To bundle means gather all pieces to generate something else.

  What is bundling Process?
    Grab all your JS files in addition to any other assets such as images /stylesheets and transform it into another representation of the very same code.
    this process is called bundling.so to do that
    webpack builds a dependency graph. it will start in entry point usually js file.
    from here webpack will start following the links imports/requires untill it hits the bottom of the tree.
    when it finishes webpack will know that to include and what to exclude from the bundle.
    at the end it will take the results and save it a folder.

    Loader is a transformation applied to a module through the bundling process.
    Plugins is a transformation applied for the bundled output through the bundling process.

command to execute and check webpack:

    ./node_modules/.bin/webpack index.js -o bundle.js --mode="development"

Setting up the webpack development server:

  Webpack Dev server:
  it is an express server, but has some additional functionality, that reads your webpack config file and keeps a fast-in-memory bundle that you can use for development purpose.
  It will also watch for src files and recompiles it whenever the file changes.

  install webpack-dev-server

  to run the application using webpack-dev-server
      ./node_modules/.bin/webpack-dev-server

  this will start the application on localhost:8080

  HTMLWebpackPlugin:
    First it simplifies the creation of the HTML file to server your webpack bundles, and also this is very important, it injects a script tag into the target HTML.
    This plugin will create a HTML file and insert a script tag for serving bundle file.

  Dotenv:
  this library will read data from .env file.
  we use this library to store some global data which can be used across the application.
  we can store api endpoints this will help us to load different urls for production and development

  Babel-preset-stage-0:
  this preset will help us in avoiding unwanted explicit binding for the fucntion.
  in this project we have onRecipieClick function, this function is having definition in App.js but we have utilized it in RecipeList component.
  so we have binded this function in both App.js and RecipeList.js. here we are creating two times binding.
  To avoid this way of binding use stage-0 preset, install this preset and convert the onRecipeClick function as arrow function.

  Prettier:
  this tool enforces the code to be in certain style. eslint will warn and throw errors if the code is not in the standard.
  Prettier will take the whole code and pretify it.

  command to execute prettier:
    ./node_modules/.bin/prettier ./src/*.js --write

  Husky:
  this library will help us to acheive the precommit workflow. on every commit to git, it should execute linting and prettier, if any issues found then commit should fail.

  lint-staged:
  this library also helps in the precommit workflow but using this library we will recheck only the file which got modified and not the rest.

  Devserver configuration is usefull when we have route which webpack tries to resolve by using the express server and get 404 response.
    historyApiFallback: true, webpack does is, whenever it encounters 404, then it re-routes it the request to index.html which will allow react to make the routing.
    example is routing to favourites.

  React-Router V4:

    BrowserRouter:  this component use html5 history API, to keep UI in sync with a URL.
    that means when URL's changes, react notice it and re-renders his content and also enables us to change the URL from inside the react code.
    Inside the BrowserRoute, we create routes. the route renders some UI if path matches.

    Switch:
    this component allows us to handle when no route is matching.
    switch component is react-router helper component that makes it possible to render just one route of the one that you define.

    Redirects:
    it is pretty straight forward, its just a way of saying that when a user goes to particular user it should redirect to a new one.
    redirect component allows us to do it declarative way, it takes two parameters, one is FROM(where) property and another is TO(Target) property.

    navLink:
    this component helps us to create a navigation menu, it helps in creating clickable anchors which will redirect to some other pages.
    
