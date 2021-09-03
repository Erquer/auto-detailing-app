import {createSlice} from "@reduxjs/toolkit";
import {AppDispatch} from "../rootReducer";
import axios from '../../../utils/axios';

interface UserState {
    username: string;
    isLogged: boolean;
    message: string
}

const initialState: UserState = {
    username: '',
    isLogged: false,
    message: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setLoggedSuccesful: (state, action) => {
            state.username = action.payload.username;
            state.isLogged = true;
            state.message = 'Logged successful';
        },
        setIsLogged: (state, action) => {
            state.isLogged = action.payload.isLogged;
            state.username = action.payload.username;
        }

    }
});

export const {setIsLogged} = userSlice.actions;

export const loginUser = (username: string, password:string) => async (dispatch: AppDispatch) => {
    try{
        dispatch()
        const { data } = await axios.post('/users', {params:{ username: username }});
        console.log(data);
    } catch (error) {
        console.error(error);

    }
}

export default userSlice.reducer;