# salestrekker-income-calculator

## Link to the hosted app
https://salestrekker-income-calculator.vercel.app/

### Starting the app

In order to start the app you should install dependencies by running `yarn` and start the app with run `yarn start`.

### Building for production

You can build the production version of the app with the command `yarn build`.

### Room for improvement

-   We can avoid storing state on App level. For this we could use [React Context](https://reactjs.org/docs/context.html) and/or state management libraries like [Redux](https://redux.js.org/), [Zustand](https://github.com/pmndrs/zustand), [Jotai](https://jotai.org/). With this setup we would avoid all the prop-drilling I'm using in this demo.
-   We can we can use [React Router](https://reactrouter.com/en/main) for navigating between screens. In this example I did not see the need for that.
-   Components such as buttons, input fields and tab selection can all be extracted into separate atom/molecule components in a real-world app, since that would make it much more reusable and maintainable throughout the app. I love the concepts covered via [atomic design](https://bradfrost.com/blog/post/atomic-web-design/), even though it's not always the best option
-   Form validation can be done by using form validators such as [yup](https://github.com/jquense/yup)

### Info: Error in calculation logic
Table calculation is done by firstly converting chosen income into daily income, which is afterwards calculated to all needed time frames. This is not the most precise operation and there are small differences when calculating income.
