import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { RootState } from '../../../store/slices/rootReducer';
import { loginUser } from '../../../store/slices/userSlice/user';
import {
  StyledInput,
  StyledCardHeader,
  StyledForm,
} from '../../common/styledComponents';
import {
  StyledLogin,
  StyledLoginCard,
  StyledLoading,
  StyledError,
  StyledSignInButton,
} from './Login.styled';

const Login = () => {
  const [error, setError] = useState('');
  const [inputs, setInputs] = useState({
    login: '',
    password: '',
  });

  const dispatch = useDispatch();
  const history = useHistory();
  const { isLogging, isLogged } = useSelector((state: RootState) => state.user);

  const handleSubmit = (event: any): void => {
    event.preventDefault();

    const { login, password } = inputs;

    if (login.length === 0 || password.length === 0) {
      setError('Please fill inputs');
      return;
    }
    setError('');

    dispatch(loginUser(login, password));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const [name, value] = [event.target.id, event.target.value];

    setInputs({ ...inputs, [name]: value });
  };

  useEffect(() => {
    if (isLogged) {
      history.push('/');
    }
  }, [isLogged]);

  return (
    <StyledLogin>
      <StyledLoginCard>
        <StyledCardHeader>Auto Detailing App</StyledCardHeader>

        {isLogging ? (
          <StyledLoading>Submitting...</StyledLoading>
        ) : (
          <StyledForm>
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
            <StyledSignInButton
              onClick={handleSubmit}
              type="submit"
              disabled={isLogging}
            >
              Sign in
            </StyledSignInButton>
          </StyledForm>
        )}
      </StyledLoginCard>
    </StyledLogin>
  );
};

export default Login;
