# Let me Ask

## Purpose

App made at Rocket Seat's event Next Level Week #06 (Together), is to simply create a QA forum where people can created a room, and
send their questions to the owner and him can asnwer to it.

## Getting Started

You can use git clone to copy this repository by typing this command on your console:
`` https://github.com/gustavonikov/letmeask-NLW06 ``
or you can download the zip file and open it in your IDE.

Then you run ```npm install``` if you have npm installed on your machine or ```yarn add``` if you have yarn,
to install all the dependencies that are necessarily to run the project.

Then you must create a project on (Firebase website)[https://firebase.google.com/] to the app really function.

After you created your Firebase account, create your project, copy the config file containing the ApiKey, AuthDomain, etc...
and create a env.local file, where you must put this informations there, with those names:

```bash
REACT_APP_API_KEY
REACT_APP_AUTH_DOMAIN
REACT_APP_DATABASE_URL
REACT_APP_PROJECT_ID
REACT_APP_STORAGE_BUCKET
REACT_APP_MESSAGING_SENDER_ID
REACT_APP_APP_ID
```

After install the necessarily packages, Firebase being configured and opened in your Browser (it must be open), run the development server, that by default will open on http://localhost:3000,

```bash
npm start
# or
yarn start
```

## Main Tools
<li>ReactJs</li>
<li>ContextApi</li>
<li>TypeScript</li>
<li>Firebase</li>

