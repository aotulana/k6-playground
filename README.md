<div align="center">
  
![banner](https://github.com/grafana/k6-template-typescript/blob/main/docs/ts-js-k6.png)

# k6 with Typescript

</div>

This project leverages [Template to use Typescript with k6](https://github.com/grafana/k6-template-typescript) project.

It also provides an API with two endpoints to serve as the target while running the k6 tests.

## Prerequisites

- [k6](https://k6.io/docs/getting-started/installation)
- [NodeJS](https://nodejs.org/en/download/)

**Install dependencies**

Clone the generated repository, move to the project root folder and install the dependencies defined in [`package.json`](./package.json)

```bash
$ npm install
```

## Running the test

To run the TypeScript tests, the TypeScript code has to be transpiled into JavaScript and bundle the project

```bash
$ npm run bundle
```

This command creates the final test files to the `./dist` folder.

Once that is done, test script can be run the usual way, for instance:

```bash
$ k6 run dist/get-200-status-test.js
```

### Transpiling and Bundling

By default, k6 can only run ES5.1 JavaScript code. To use TypeScript, a bundeler is set up to convert TypeScript to JavaScript code. 

This project uses `Babel` and `Webpack` to bundle the different files - using the configuration of the [`webpack.config.js`](./webpack.config.js) file.

For more information, check out [Bundling node modules in k6](https://k6.io/docs/using-k6/modules#bundling-node-modules).
