# Verticurl-CLM-Discover-More
Footer update


Using the CLI command you can install the webpack on your project.
npm install --save-dev webpack@4.43.0

Along with the webpack, install webpack server, that would be more helpful for project development.
npm install --save-dev webpack-dev-server@3.11.0 webpack-cli@3.3.11

Add plugin to the webpack
We can use the HTMLWebpackPlugin to help us manage our HTML file.
npm install --save-dev html-webpack-plugin@4.3.0

Add CSS loader to import css files into main.js
npm install --save-dev css-loader@3.6.0 style-loader@2.0.0

Install the required PatternFly Elements to npm
npm install --save @patternfly/pfelement @patternfly/pfe-cta @patternfly/pfe-jump-links @patternfly/pfe-accordion @patternfly/pfe-navigation @patternfly/pfe-select @patternfly/pfe-styles

Depending on which browsers you support, you may also need to load the custom-elements and webcomponentsjs polyfills.
npm install @webcomponents/custom-elements
npm install @webcomponents/webcomponentsjs

You can run the project in development mode and production mode
For development,
npm run dev

For production
Once you completed the project in development mode, you have to build the project in production mode. For that, run the below cli comment.
npm run prod


