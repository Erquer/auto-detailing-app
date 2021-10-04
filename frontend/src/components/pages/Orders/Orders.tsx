import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  // eslint-disable-next-line max-len
  ViewState, EditingState, GroupingState, IntegratedGrouping, IntegratedEditing,
} from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  Resources,
  Appointments,
  AppointmentTooltip,
  AppointmentForm,
  DragDropProvider,
  GroupingPanel,
  WeekView,
  MonthView,
  Toolbar,
  DateNavigator,
  TodayButton,
} from '@devexpress/dx-react-scheduler-material-ui';

const appointments = [
  {
    title: 'Website Re-Design Plan',
    startDate: new Date(2018, 6, 23, 9, 30),
    endDate: new Date(2018, 6, 23, 11, 30),
    workerId: 1,
  }, {
    title: 'Book Flights to San Fran for Sales Trip',
    startDate: new Date(2018, 6, 23, 12, 0),
    endDate: new Date(2018, 6, 23, 13, 0),
    workerId: 2,
  }, {
    title: 'Install New Router in Dev Room',
    startDate: new Date(2018, 6, 23, 14, 30),
    endDate: new Date(2018, 6, 23, 15, 30),
    workerId: 3,
  }, {
    title: 'Approve Personal Computer Upgrade Plan',
    startDate: new Date(2018, 6, 24, 10, 0),
    endDate: new Date(2018, 6, 24, 11, 0),
    workerId: 1,
  }, {
    title: 'Final Budget Review',
    startDate: new Date(2018, 6, 24, 12, 0),
    endDate: new Date(2018, 6, 24, 13, 35),
    workerId: 2,
  }, {
    title: 'New Brochures',
    startDate: new Date(2018, 6, 24, 14, 30),
    endDate: new Date(2018, 6, 24, 15, 45),
    workerId: 3,
  },
];

const workerData = [
  { text: 'Arek',
    id: 0 },
  { text: 'Balazej',
    id: 1 },
  { text: 'Tobiasz',
    id: 2 },
];

const isWeekOrMonthView = (viewName: string) => viewName === 'Week' || viewName === 'Month';

export default class Orders extends React.PureComponent {
  onGroupOrderChange: () => void;

  constructor(props:any) {
    super(props);
    this.state = {
      data: appointments.filter((appointment) => appointment.workerId < 3),
      resources: [{
        fieldName: 'workerId',
        title: 'Pracownik',
        instances: workerData,
      }],
      grouping: [{
        resourceName: 'workerId',
      }],
      groupByDate: isWeekOrMonthView,
      isGroupByDate: true,
    };

    this.commitChanges = this.commitChanges.bind(this);
    this.onGroupOrderChange = () => {
      const { isGroupByDate }:any = this.state;
      this.setState({
        isGroupByDate: !isGroupByDate,
        groupByDate: isGroupByDate ? undefined : isWeekOrMonthView,
      });
    };
  }

  commitChanges({ added, changed, deleted }:any) {
    this.setState((state) => {
      let { data }:any = state;
      if (added) {
        const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
        data = [...data, { id: startingAddedId, ...added }];
      }
      if (changed) {
        data = data.map((appointment: { id: string | number; }) => (
          changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
      }
      if (deleted !== undefined) {
        data = data.filter((appointment: { id: any; }) => appointment.id !== deleted);
      }
      return { data };
    });
  }

  render() {
    const {
      data, resources, grouping, groupByDate,
    }:any = this.state;

    return (
      <>
        <Paper>
          <Scheduler
            data={data}
          >
            <ViewState
              defaultCurrentDate="2018-05-30"
            />
            <EditingState
              onCommitChanges={this.commitChanges}
            />
            <GroupingState
              grouping={grouping}
              groupByDate={groupByDate}
            />

            <WeekView
              startDayHour={9}
              endDayHour={17}
              excludedDays={[0, 6]}
            />
            <MonthView />
            <Toolbar />
            <DateNavigator />
            <TodayButton />
            <Appointments />
            <Resources
              data={resources}
              mainResourceName="workerId"
            />
            <IntegratedGrouping />
            <IntegratedEditing />

            <AppointmentTooltip showOpenButton />
            <AppointmentForm />

            <GroupingPanel />
            <DragDropProvider />
          </Scheduler>
        </Paper>
      </>
    );
  }
}
