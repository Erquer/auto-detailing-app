import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '../../../Button/Button';
import { StyledHeading } from '../Calendar/Calendar.styled';
import { StyledWorkers } from './Workers.styled';

const useStyles = makeStyles({
  table: {
    minWidth: 450,
    maxHeight: '150px',
    overflow: 'auto',
  },
});

const workersData = [
  {
    name: 'Arkadiusz',
    surname: 'Michalski',
  },
  {
    name: 'Tobiasz',
    surname: 'Ciesielski',
  },
  {
    name: 'Błażej',
    surname: 'Jankowiak',
  },
];

const Workers = () => {
  const classes = useStyles();

  return (
    <StyledWorkers>
      <StyledHeading>Lista pracowników</StyledHeading>
      <div>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Imię</TableCell>
                <TableCell>Nazwisko</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {workersData.map((worker) => (
                <TableRow>
                  <TableCell>{worker.name}</TableCell>
                  <TableCell>{worker.surname}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div style={{ marginTop: '30px' }}>
        <Button innerText="EDYTUJ PRACOWNIKÓW" to="/workers" />
      </div>
    </StyledWorkers>
  );
};

export default Workers;
