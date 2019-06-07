This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

This will install all prerequisits required to run the project


### `sudo npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### Ctrl + Shift + T

Opens a new tab on console, the previous tab will stay running.
Makes it easier to run backend and frontend simultaneously

### `npm install -g json-server`

Installing the json-server and adding it to dependencies

### `json-server --watch ./db.json --port 3003`



IF THIS FAILS ^^^^^^ Run this command in the console:

### `echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p`

After this rerun the previous command and it should work