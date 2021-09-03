import {combineReducers} from "@reduxjs/toolkit";
import store from "../store";
import userReducer from './userSlice/user';

const rootReducer = combineReducers({
    user: userReducer
});

export type RootState = ReturnType<typeof rootReducer>;
// @ts-ignore
export type AppDispatch = typeof store.dispatch;

export default rootReducer;