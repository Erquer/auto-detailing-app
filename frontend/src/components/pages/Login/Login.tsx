import React, { useState } from 'react';
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
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (event: any) => {
    event.preventDefault();

    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      console.log('Submited');
    }, 3000);
  };

  return (
    <StyledLogin>
      <StyledLoginCard>
        <StyledLoginHeader>Auto Detailing App</StyledLoginHeader>

        {submitting ? (
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
              disabled={submitting}
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
