# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


### `NOAH'S NOTES`


Started off with this article:
https://mikejolley.com/2021/03/02/headless-wordpress-cookie-based-login-using-graphql/

Suggests to use the GraphQL plugin for wordpress to streamline querying the API.

Saves the login session using cookies, as they are more secure than JSON web tokens, which can be be accessed by javascript if held in local or session storage and can give a user access to the whole database if they are able to run their own scripts with the token.

Saves the login session using cookies, as they are more secure than JSON web tokens, which can be be accessed by javascript if held in local or session storage.
Will check on this concept later as the directions in the article were very vague involving what codes relates to each file.



Using JWT autentication


After more digging I found this article https://dzone.com/articles/cookies-vs-tokens-the-definitive-guide explaining the advantages of JWT authentication, including mobile compatibility. A happy medium for security might be storing the JWT inside a http only cookie, providing the JWT is under 4kb.

Using React should protect from XXS attacks by default.

using a JWT in local storage does not expose the server to XRSF attacks, but if stored in a cookie precautions have to be made for these. In the article: "To over-simplify, protecting against an XSRF attack, your server, upon establishing a session with a client will generate a unique token (note this is not a JWT). Then, anytime data is submitted to your server, a hidden input field will contain this token and the server will check to make sure the tokens match." 

One potential workaround is making the JWTs expire after a short oeriod of time. But it is not a complete failsafe.


Simple JWT PLugin
potential security issue here in SignupAPI + LoginAPI. But a JWT can be stored in a httpOnly cookie, which can then be used to persist login, see https://blog.logrocket.com/jwt-authentication-best-practices/
This may not be strictly necessary depending on whether the user can execute scripts on our page, which React should prevent. However I am unsure if the JWT that is visible in the inspector can be used on another site to access the database.

Simple JWT PLugin
potential security issue here in SignupAPI + LoginAPI. But a JWT can be stored in a httpOnly cookie, which can then be used to persist login, see https://blog.logrocket.com/jwt-authentication-best-practices/


Pages currently using the JWT method, SignUp/SignUpAPI, Login/LoginAPI, and ProfilePage, which currently acts as the homepage. reg.php is called on the wordpress end, and has been placed in the root of the live site, there is a copy of it here in the php folder.
Currently getting CORS errors from the main site, so I don't think the reg.php there is being reached. I think a http header of:  Access-Control-Allow-Origin: * is needed somewhere, but I'm not too sure.

To see site with calls to the live site, see branch 'doing-it-live'. A build of this branch is on github pages at https://noah3tone.github.io/3tonereact/

to make a new build: 
cd 3tonemusic
npm run build
npm run deploy




