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
