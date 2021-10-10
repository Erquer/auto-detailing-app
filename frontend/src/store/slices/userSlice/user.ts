import { createSlice } from '@reduxjs/toolkit';
import axios from '../../../utils/axios';
import { AppDispatch } from '../rootReducer';

export interface UserState {
  username: string;
  isLogged: boolean;
  isLogging: boolean;
}

const initialState: UserState = {
  username: '',
  isLogged: false,
  isLogging: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearLoggingState: () => initialState,
    setLoggedSuccessful: (state, action) => {
      state.username = action.payload;
      state.isLogged = true;
      state.isLogging = false;
    },
    startLogging: (state) => {
      state.isLogged = false;
      state.isLogging = true;
    },
  },
});

export const { clearLoggingState, setLoggedSuccessful, startLogging } =
  userSlice.actions;

export const loginUser =
  (username: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(startLogging());
      const { data: isSuccess } = await axios.post('/users/login', {
        firstName: username,
        password,
      });
      if (isSuccess) {
        dispatch(setLoggedSuccessful(username));
      } else {
        dispatch(clearLoggingState());
      }
    } catch (error) {
      console.error(error);
    }
  };

export default userSlice.reducer;
