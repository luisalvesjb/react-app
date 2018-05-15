import React, { Component } from 'react'
import { Provider } from 'react-redux'

import store from './store'
import Hello from './components/Hello'



class App extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <Provider store={store}>
                <div>
                    <Hello />
                </div>
            </Provider>
        )
    }

}

export default App
