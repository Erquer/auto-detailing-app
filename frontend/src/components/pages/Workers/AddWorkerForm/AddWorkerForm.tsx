import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { StyledCardHeader } from '../../../common/styledComponents';
import { StyledAddWorkersFormCard } from './AddWorkerForm.styled';
/* eslint-disable */

const AddWorkerForm = () => {
  const [error, setError] = useState('');
  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    workingHours: '',
    salary: '',
  });

  const dispatch = useDispatch();

  const handleSubmit = (event: any): void => {
    event.preventDefault();

    // const { login, password } = inputs;

    // if (login.length === 0 || password.length === 0) {
    //   setError('Please fill inputs');
    //   return;
    // }
    setError('');

    dispatch(null);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const [name, value] = [event.target.id, event.target.value];

    setInputs({ ...inputs, [name]: value });
  };

  return (
    <StyledAddWorkersFormCard>
      <StyledCardHeader>Add Worker</StyledCardHeader>
    </StyledAddWorkersFormCard>
  );
  // <StyledLogin>
  //   <StyledLoginCard>
  //     <StyledLoginHeader>Auto Detailing App</StyledLoginHeader>

  //     {isLogging ? (
  //       <StyledLoading>Submitting...</StyledLoading>
  //     ) : (
  //       <StyledLoginForm>
  //         <StyledInput
  //           id="login"
  //           type="text"
  //           placeholder="Enter your login here"
  //           value={inputs.login}
  //           onChange={handleChange}
  //           required
  //         />
  //         <StyledInput
  //           id="password"
  //           type="password"
  //           placeholder="Enter your password here"
  //           value={inputs.password}
  //           onChange={handleChange}
  //           required
  //         />
  //         {error !== '' && <StyledError>{error}</StyledError>}
  //         <StyledButton
  //           onClick={handleSubmit}
  //           type="submit"
  //           disabled={isLogging}
  //         >
  //           Sign in
  //         </StyledButton>
  //       </StyledLoginForm>
  //     )}
  //   </StyledLoginCard>
  // </StyledLogin>
};

export default AddWorkerForm;
