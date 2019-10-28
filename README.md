# Interview-code-challenge frontend

An extremely simple [React](https://reactjs.org)  App for [GuideSmiths](https://www.guidesmiths.com/) Interview Challenge. It has been developed following [Redux](https://react-redux.js.org/) pattern to manage App state.

This App is packed using [Docker](https://www.docker.com/) container, including the following file:
- A Dockerfile to create the App image along with a [NGINX](https://www.nginx.com/) image .

You can run it with [npm scripts](https://docs.npmjs.com/misc/scripts). Please, refer to the [Usage](#usage) section for further instructions.

:warning: Please, note this App is thought be run with [this specific backend](https://github.com/neodmy/interview-code-challenge). Make sure you follow the instructions provided in that repository REAMDE before running this App (unless you want to test fetching no data App response).

# Table of Contents
- [Overview](#overview)
	- [Main features](#main-features)
	- [Admin mode](#admin-mode)
	- [Limitations](#limitations)
- [Usage](#usage)
	- [Tests](#tests)
	- [Running the App](#running-the-app)

# Overview
## Main features
The App simulates a phone store web. It offers a variety of products, with a brief description. On top of that, you can check phone details (i.e. manufacturer, ram amount, price, etc) by clicking on any of the products.

For the shake of completeness, although not required at all, it offers the remaining CRUD operations (create, update and delete) by faking an admin mode.

## Admin mode
As mention above, the admin mode is enable by clicking on the `ADMIN` button. Toggle it to activate or deactivate this mode mode.

It will allow you to add a *phone* from the `Products` page, and delete or modify an existing one from the selected `Phone` page.

## Limitations
Due to one's domain of React App development at the moment, you will quickly spot the underlying limitations, although I would like to list them:

- When adding a phone, you will not be able to add a custom image. Every new phone you add will be supplied with a generic image.
- There are no CSS transitions, so that you may appreciate components suddenly appear in front of your eyes.
- Tests are extremely simple.

# Usage

## Tests

To run tests, execute:
```
 $ npm test
```
which will execute very simple tests from `src/test` folder.


## Running the App

:warning: Do not forget to run the [backend](https://github.com/neodmy/interview-code-challenge) before executing this App to fetch data.

You can either run locally with the development server executing:
```
$ npm start
```
and then access the App with your browser on `http://localhost:3000`, or building the production image:

```
$ npm run app:build
```
which will execute `docker build -t neodmy/frontend .`  being `neodmy/frontend` the image tag. That image also contains a NGINX image. To run the container execute:
```
$ npm run app:up
``` 
resulting `docker run -d --name neodmy-frontend -p 3000:80 neodmy/frontend`.

Again, you can access the App on your browser on `http://localhost:3000`.

To stop the App execute:
```
$ npm run app:down
```
