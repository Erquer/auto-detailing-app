import React from 'react';
// import { StyledLoginPage, StyledLoginHeader } from './LoginPage.styled';

const Login = () => (
  <div>
    <h1>Login</h1>
    <form>
      <input type="text" placeholder="Enter your login here" />
      <input type="text" placeholder="Enter your password here" />
      <button type="submit">Sign in</button>
    </form>
  </div>
);

export default Login;
