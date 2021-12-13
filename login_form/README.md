# TaskRabbit React Coding Exercise

For this coding exercise, we will be building a login flow application in React. The components are already built, the goal here is to manage how the app transitions between different states.

--

## Setup

Ensure you have `Node.js` and `npm` ( or `yarn` ) installed before your interview. Confirm that the following commands can output their versions without error on your machine:

```bash
node -v
npm -v # or yarn -v
```

Clone the repository and cd into the `login_form` folder:

```
cd login_form
```

Next, install the project dependencies:

```bash
npm install # or yarn install
```

Then start the server:

```bash
npm run start # or yarn start
```

Open http://localhost:3000 with your browser to see the result. The page will reload as you make changes.

You can start editing the page by modifying `src/App.js`.

--

## Instructions

We will be building a login flow application. The components are already built, the goal here is to manage how the app transitions between different states.

It all starts with a login form:

![login_form](https://cl.ly/tSV5/Screen%20Shot%202018-08-02%20at%2010.58.14%20AM.png)

If you do not enter valid credentials there are two failure cases

1.  Incorrect or missing credentials:

![validation_error](https://cl.ly/tQlk/Screen%20Shot%202018-08-02%20at%2010.59.45%20AM.png)

2.  A connection error from the login service. In the event of a connection error, there is a 'Try Again' option to retry the request.

![connection_error](https://cl.ly/tSFe/Screen%20Shot%202018-08-02%20at%2011.00.25%20AM.png)

If the credentials are accepted, there is a logged in 'Profile' view. The logged in view also provides a link to logout, which should send you back to the login form and remove any known state about the logged in visitor.

![profile](https://cl.ly/tSW4/Screen%20Shot%202018-08-02%20at%2011.01.28%20AM.png)

During any network request, there should be a loading screen.

![loading_screen](https://cl.ly/tSj2/Screen%20Shot%202018-08-02%20at%2011.05.48%20AM.png)
