import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { reducers } from "./reducers/index"


const middleware = applyMiddleware(logger);

export const store = createStore(reducers, middleware);