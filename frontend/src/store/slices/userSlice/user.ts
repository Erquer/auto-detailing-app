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
    setLoggedSuccessful: (state, action) => ({
      ...state,
      username: action.payload.username,
      isLogged: true,
      isLogging: false,
    }),
    setIsLogged: (state, action) => ({
      ...state,
      isLogged: action.payload.isLogged,
      username: action.payload.username,
    }),
    startLogging: (state) => ({
      ...state,
      isLogged: false,
      isLogging: true,
    }),
  },
});

export const { setIsLogged, setLoggedSuccessful, startLogging } =
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
        dispatch(setLoggedSuccessful({ payload: { username } }));
      }
    } catch (error) {
      console.error(error);
    }
  };

export default userSlice.reducer;
