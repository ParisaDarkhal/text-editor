# Text Editor

## Description

Text Editor is a Progressive Web Application that enables a developer to create notes or code snippets with or without internet connection and reliably retrieve them for later use.

## Features

- Offline support: The app can work offline using service workers and IndexedDB.
- Installable: The app can be installed as an icon on the desktop using a manifest file and a custom install button.
- Bundling: The app uses webpack to bundle the JavaScript files and generate a HTML file.
- Transpiling: The app uses Babel to transpile the next-gen JavaScript code and avoid errors.
- Styling: The app uses CSS and various loaders to style the UI.

## Technologies

- JavaScript
- Express
- Webpack
- Babel
- Workbox
- IndexedDB
- HTML
- CSS

## Installation

To install the app, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the root directory and run `npm install` to install the dependencies.
3. Run `npm run start` to start the backend server and serve the client.
4. Open your browser and go to `http://localhost:3000` to view the app.

## Usage

To use the app, follow these steps:

1. Enter your content in the text editor. You can use markdown syntax to format your text.
2. Click anywhere outside the text editor to save your content in IndexedDB.
3. To retrieve your content, reopen the app and it will load from IndexedDB.
4. To install the app on your desktop, click on the install button at the top right corner of the app.
5. To view the app offline, turn off your internet connection and reload the app. It will work using the cached assets and data.

## Screenshots

![Demo](./Assets/00-demo.gif)
![Manifest](./Assets/01-manifest.png)
![Service Worker](./Assets/02-service-worker.png)
![idb storage](./Assets/03-idb-storage.png)

## Deployment

The app is deployed on Heroku. You can access it here: https://text-editor-pwa.herokuapp.com/

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
