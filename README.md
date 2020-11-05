# Avrios

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Theme-UI

I've been really impressed with theme-ui's contraint based styling and minimal base components to build more to one's needs. Since I'm still experimenting with the framework and would need to iron out some odd behaviours this has - most notibly the way it plays with react-transition-group which after digging around for quite a bit I realized the `sx` prop that it uses, overrides the animation steps of react-transition-group. One can envision themselves getting really productive with the prop based styling that can be applied by shorthand properties like pY for vertical padding etc.
Thus offering a middle ground between `styled components` and something like `tailwind`.

### Improvements

I want to make it clear that I did spend a bit more than 2 hours on the task but still had to opt out a lot of key things in the interest of time.

- I'd add more tests especially for the critical parts like the reducer
- Account for empty states
- Manipulate strings so they can be formatted/styled even though are largely unstructured
- Map out all the events on map which on hover highlights the respective place, for which I've layed the ground work.
