import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import cfgStore from './store';
import App from './containers/App';
import { Provider } from 'react-redux'

const store = cfgStore()

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>
    ,
    document.getElementById('root')
)
