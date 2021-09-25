import { createSlice } from '@reduxjs/toolkit';
import axios from '../../../utils/axios';
import { AppDispatch } from '../rootReducer';

interface UserState {
  username: string;
  isLogged: boolean;
  message: string;
}

const initialState: UserState = {
  username: '',
  isLogged: false,
  message: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoggedSuccessful: (state, action) => {
      state.username = action.payload.username;
      state.isLogged = true;
      state.message = 'Logged successful';
    },
    setIsLogged: (state, action) => {
      state.isLogged = action.payload.isLogged;
      state.username = action.payload.username;
    },
    startLogging: (state) => {
      state.isLogged = false;
      state.message = 'Logging';
    },
  },
});

export const { setIsLogged, setLoggedSuccessful, startLogging } =
  userSlice.actions;

export const loginUser =
  (username: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(startLogging());
      const { data } = await axios.post('/users', { params: { username } });
      console.log(data, password);
    } catch (error) {
      console.error(error);
    }
  };

export default userSlice.reducer;
