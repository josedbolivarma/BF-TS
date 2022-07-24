import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { productsReducer } from '../reducers/productsReducer';
import { modalReducer } from '../reducers/modalReducer';
import { obtenerLocalStorage, guardarLocalStorage } from '../../utils';

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const storageState = obtenerLocalStorage();

const reducersEnviar = combineReducers({
    products: productsReducer,
    modal: modalReducer,
})

export const store = createStore(
    reducersEnviar,
    storageState,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

store.subscribe(() => {
    guardarLocalStorage(
        {
           modal: store.getState().modal
        },
   )
})