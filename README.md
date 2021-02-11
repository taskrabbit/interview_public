## React State Management

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

---

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
