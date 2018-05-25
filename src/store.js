
import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { compose } from 'redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import reducers from './reducers'

 const history = createHistory()
// const middlewaresRouters = routerMiddleware(history)



const store = () => { 

    // const middlewares = [
        
    // ]
    //const encharcers = []
    
    const middlewares = applyMiddleware(thunk, routerMiddleware(history))

    //encharcers.push(applyMiddleware(middlewaresRouters))
    //encharcers.push(applyMiddleware(...middlewares))

    return createStore( 
        reducers,
        middlewares
    ) 
}

export default { store, history }