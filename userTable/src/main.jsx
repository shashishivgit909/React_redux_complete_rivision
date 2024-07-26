import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import store from './storage/store.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>      // this way initially    : Note 
  //   <App />
  // </React.StrictMode>,

/*now we will wrap App.js in provider  and pass store as props to  provider :  Now any component in App.jsx (all componenet of our react app) can access store .

and then our react App will be connected to reduxtool kit .

*/

<Provider store={store}>
  <App/>
</Provider>
)


