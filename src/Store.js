import app from './Reducer'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

function configStore(){
    let store = createStore(app, applyMiddleware(thunk))
    store.getState()
    return store
}
export default createStore(app,applyMiddleware(thunk))
