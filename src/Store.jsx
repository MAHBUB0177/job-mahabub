import { createStore } from "redux";
import counterReducer from "./Service/Reducers/Reducers";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 


const persistConfig = {
          key: 'root',
          storage,
        }
const persistedReducer = persistReducer(persistConfig, counterReducer)

// const store =createStore(persistedReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store =createStore(persistedReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export let persistor = persistStore(store)


export default store;