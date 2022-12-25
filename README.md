# salestrekker-income-calculator

### Starting the app

In order to start the app you should install dependencies by running `yarn` and start the app with run `yarn start`.

### Building for production

You can build the production version of the app with the command `yarn run build`.

### Room for improvement

-   We can avoid storing state on App level. For this we could use React Context and/or state management libraries like Redux, Zustand, Jotai. With this setup we would avoid all the prop-drilling I'm using in this demo.
-   We can we can use React Router for navigating between screens. In this example I did not see the need for that.
