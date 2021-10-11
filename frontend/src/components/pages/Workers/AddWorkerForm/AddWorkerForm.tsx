import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  StyledButton,
  StyledCardHeader,
  StyledInput,
} from '../../../common/styledComponents';
import { StyledLoading } from '../../Login/Login.styled';
import { Worker } from '../Workers';
import {
  StyledAddWorkersFormCard,
  StyledFormWrapper,
  StyledWorkerForm,
  StyledWorkersError,
} from './AddWorkerForm.styled';
/* eslint-disable */

interface FormProps {
  onAddWorker: (worker: Worker) => void;
}

const AddWorkerForm = ({ onAddWorker }: FormProps) => {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    workHours: '',
    salary: '',
  });

  const dispatch = useDispatch();

  const handleSubmit = (event: any): void => {
    event.preventDefault();

    const { firstName, lastName, salary, workHours } = inputs;

    if (
      firstName.length === 0 ||
      lastName.length === 0 ||
      salary.length === 0 ||
      workHours.length === 0
    ) {
      setError('Please fill inputs');
      return;
    }

    onAddWorker({
      ...inputs,
      salary: Number(salary),
      workHours: Number(workHours),
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const [name, value] = [event.target.id, event.target.value];

    setInputs({ ...inputs, [name]: value });
  };

  return isLoading ? (
    <StyledLoading>Loading...</StyledLoading>
  ) : (
    <StyledAddWorkersFormCard>
      <StyledCardHeader>Add Worker</StyledCardHeader>
      <StyledWorkerForm>
        <StyledFormWrapper>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}
          >
            <StyledInput
              id="firstName"
              type="text"
              placeholder="First name"
              value={inputs.firstName}
              onChange={handleChange}
              required
            />
            <StyledInput
              id="lastName"
              type="text"
              placeholder="Last name"
              value={inputs.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}
          >
            <StyledInput
              id="workHours"
              type="number"
              placeholder="Working hours"
              value={inputs.workHours}
              onChange={handleChange}
              required
            />
            <StyledInput
              id="salary"
              type="number"
              placeholder="Salary"
              value={inputs.salary}
              onChange={handleChange}
              required
            />
          </div>
        </StyledFormWrapper>
        {error !== '' && <StyledWorkersError>{error}</StyledWorkersError>}

        <StyledButton onClick={handleSubmit} type="submit" disabled={isLoading}>
          Add worker
        </StyledButton>
      </StyledWorkerForm>
    </StyledAddWorkersFormCard>
  );
};

export default AddWorkerForm;
