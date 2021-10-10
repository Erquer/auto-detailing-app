import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/slices/rootReducer';
import { loginUser } from '../../../store/slices/userSlice/user';
import {
  StyledLogin,
  StyledLoginCard,
  StyledLoginHeader,
  StyledLoginForm,
  StyledInput,
  StyledButton,
  StyledLoading,
  StyledError,
} from './Login.styled';

const Login = () => {
  const dispatch = useDispatch();
  const isSubmitting = useSelector((state: RootState) => state.user.isLogging);
  const form = useRef<HTMLFormElement>(null);
  const [inputs, setInputs] = useState({
    login: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleSubmit = (event: any): void => {
    event.preventDefault();

    if (inputs.login.length === 0 || inputs.password.length === 0) {
      setError('Please fill inputs');
      return;
    }

    setError('');

    dispatch(loginUser('John', 'Wick'));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const [name, value] = [event.target.id, event.target.value];

    setInputs({ ...inputs, [name]: value });
  };

  return (
    <StyledLogin>
      <StyledLoginCard>
        <StyledLoginHeader>Auto Detailing App</StyledLoginHeader>

        {isSubmitting ? (
          <StyledLoading>Submitting...</StyledLoading>
        ) : (
          <StyledLoginForm ref={form}>
            <StyledInput
              id="login"
              type="text"
              placeholder="Enter your login here"
              value={inputs.login}
              onChange={handleChange}
              required
            />
            <StyledInput
              id="password"
              type="password"
              placeholder="Enter your password here"
              value={inputs.password}
              onChange={handleChange}
              required
            />
            {error !== '' && <StyledError>{error}</StyledError>}
            <StyledButton
              onClick={handleSubmit}
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
