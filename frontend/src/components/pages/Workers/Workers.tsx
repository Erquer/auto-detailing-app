import React, { useEffect, useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {
  StyledWorkersCard,
  StyledWorkers,
  StyledActionButtons,
} from './Workers.styled';
import AddWorkerForm from './AddWorkerForm/AddWorkerForm';
import axios from '../../../utils/axios';
import { StyledButton } from '../../common/styledComponents';

export interface Worker {
  id?: number;
  firstName: string;
  lastName: string;
  salary: number;
  workHours: number;
}

const Workers = () => {
  const [workers, setWorkers] = useState<Worker[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('/workers');
        setWorkers(response.data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  const handleAddWorker = (worker: Worker): void => {
    axios.post('/workers/addWorker', worker).then(() => {
      setWorkers([...workers, worker]);
    });
  };

  return (
    <StyledWorkers>
      <AddWorkerForm onAddWorker={handleAddWorker} />

      <StyledWorkersCard>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">First Name</TableCell>
                <TableCell align="right">Last Name</TableCell>
                <TableCell align="right">Salary</TableCell>
                <TableCell align="right">Working Hours</TableCell>
                <TableCell align="right" />
                <TableCell align="right" />
              </TableRow>
            </TableHead>
            <TableBody>
              {workers.map(({ firstName, lastName, salary, workHours }) => (
                <TableRow key={`${firstName}-${lastName}`}>
                  <TableCell align="right">{firstName}</TableCell>
                  <TableCell align="right">{lastName}</TableCell>
                  <TableCell align="right">{salary}</TableCell>
                  <TableCell align="right">{workHours}</TableCell>
                  <TableCell align="right">
                    <StyledActionButtons>
                      <StyledButton>Edit</StyledButton>
                      <StyledButton>Delete</StyledButton>
                    </StyledActionButtons>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </StyledWorkersCard>
    </StyledWorkers>
  );
};

export default Workers;
