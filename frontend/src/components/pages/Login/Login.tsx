import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, UserState } from '../../../store/slices/userSlice/user';
import {
  StyledLogin,
  StyledLoginCard,
  StyledLoginHeader,
  StyledLoginForm,
  StyledInput,
  StyledButton,
  StyledLoading,
} from './Login.styled';

const Login = () => {
  const dispatch = useDispatch();
  const isSubmitting = useSelector((state: UserState) => state.isLogging);

  const onSubmit = (event: any) => {
    event.preventDefault();

    dispatch(loginUser('John', 'Wick'));
  };

  return (
    <StyledLogin>
      <StyledLoginCard>
        <StyledLoginHeader>Auto Detailing App</StyledLoginHeader>

        {isSubmitting ? (
          <StyledLoading>Loading...</StyledLoading>
        ) : (
          <StyledLoginForm>
            <StyledInput
              id="login"
              type="text"
              placeholder="Enter your login here"
              required
            />
            <StyledInput
              id="password"
              type="password"
              placeholder="Enter your password here"
              required
            />
            <StyledButton
              onClick={onSubmit}
              type="submit"
              disabled={isSubmitting}
            >
              Sign in
            </StyledButton>
          </StyledLoginForm>
        )}
      </StyledLoginCard>
    </StyledLogin>
  );
};

export default Login;
