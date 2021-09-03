import {configureStore, EnhancedStore} from "@reduxjs/toolkit";
import thunkMiddleware from 'redux-thunk';
import rootReducer from "./slices/rootReducer";

declare global {
    interface Window {
        reduxStore: EnhancedStore;
    }
}

const getOrCreateStore = () => {
    if(!window.reduxStore) {
        window.reduxStore = configureStore({
            reducer: rootReducer,
            middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunkMiddleware)
        })
    }
}

export default getOrCreateStore();