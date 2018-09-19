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
