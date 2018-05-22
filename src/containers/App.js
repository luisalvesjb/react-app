import React, { Component } from 'react'

import { Provider } from 'react-redux'
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import cfg from '../store'

import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import TopBar from '../components/layout/TopBar'
import Home from '../components/Home';
import Hello from '../components/Hello'
import Produtos from '../components/Produtos';


class App extends Component{

    render(){

    const store = cfg.store()

        return (
        <div className="container-fluid" id="wrapper">
            <div className="row">
                
                <Header />

                <main className="col-xs-12 col-sm-8 col-lg-9 col-xl-10 pt-3 pl-4 ml-auto">
                    
                    <TopBar />

                    <section className="row">
                        <div className="col-sm-12">

                            <Provider store={ store }>
                                <ConnectedRouter history={ cfg.history }>
                                <div>
                                <Route exact path="/" component={ Home } />
                                <Route exact path="/hello" component={ Hello } />
                                <Route exact path="/produtos" component={ Produtos } />
                                </div>
                                </ConnectedRouter>
                            </Provider>
                            
                            <Footer />
                            
                        </div>
                    </section>
                </main>
            </div>
        </div>
        )
        
    }
}

export default App