import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { productsReducer } from '../reducers/productsReducer';

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducersEnviar = combineReducers({
    products: productsReducer,
})

export const store = createStore(
    reducersEnviar,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)