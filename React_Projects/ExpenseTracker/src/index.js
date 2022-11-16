//This will be the first file to be executed on the page all the time

import ReactDOM from 'react-dom/client'; //This is imported in a local dependency, in package.json
import React from 'react'; //Technically not necessary with JSX, but we should always keep in mind that it works under the hood


import './index.css';//This wouldn't work in regular JS, but with React it can!
import App from './App'; /*If it's a third party library, or a .js file I can omit
 the extentions, whereas I have to use it for all other files*/

const root = ReactDOM.createRoot(document.getElementById('root'));//createRoot is the basis of everything
root.render(<App />); //Another non JS-regular thing. It's transformed before it's rendered to the app

//This syntax is JSX, not a JS
//App is a Component, which will be rendered 