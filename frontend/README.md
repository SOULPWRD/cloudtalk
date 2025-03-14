# Frontend

This project is running latest [Angular](https://angular.dev/) version (v19). All related dependencies have been updated to the latest in order to mitigate dependency vulnerabilities.

## Development server

First of all, install dependencies:

```
npm install
```

**Don't forget to run backend server first! :)**

To start a local development server, run:

```bash
npm run start
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
npm run test
```

To run tests with the code coverage report, use following command

```bash
npm run test -- --code-coverage
```
