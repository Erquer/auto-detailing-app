import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  Appointments,
  Toolbar,
  DateNavigator,
  TodayButton,
} from '@devexpress/dx-react-scheduler-material-ui';
import Button from '../../../common/Button/Button';
import { StyledCalendar, StyledHeading } from './Calendar.styled';

const schedulerData = [
  {
    startDate: '2021-05-26T09:45',
    endDate: '2021-05-26T11:00',
    title: 'Ford Mustang',
  },
  {
    startDate: '2021-05-26T12:00',
    endDate: '2021-05-26T13:30',
    title: 'Porshe 911',
  },
];

const Calendar = () => {
  const date = new Date();
  const [currentDate, setCurrentDate] = useState(date);
  const currentDateChange = (newDate: Date) => setCurrentDate(newDate);
  return (
    <StyledCalendar>
      <StyledHeading>Kalendarz</StyledHeading>
      <div>
        <Paper>
          <Scheduler height={450} data={schedulerData}>
            <ViewState
              currentDate={currentDate}
              onCurrentDateChange={currentDateChange}
            />

            <DayView startDayHour={8} endDayHour={18} />
            <Toolbar />
            <DateNavigator />
            <TodayButton />
            <Appointments />
          </Scheduler>
        </Paper>
      </div>
      <div style={{ marginTop: '30px' }}>
        <Button innerText="DODAJ ZAMÓWIENIE" to="/orders" />
      </div>
    </StyledCalendar>
  );
};

export default Calendar;
