import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import cfg from './store'

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './components/Home';
import Hello from './components/Hello'

const store = cfg.store()

ReactDOM.render(

    <div id="wrapper">

        <Header />

            <Provider store={ store }>
                <ConnectedRouter history={ cfg.history }>
                <div>
                <Route exact path="/" component={ Home } />
                <Route exact path="/hello" component={ Hello } />
                </div>
                </ConnectedRouter>
            </Provider>

            <Footer />
    </div>
    ,
    document.getElementById('root')
)
