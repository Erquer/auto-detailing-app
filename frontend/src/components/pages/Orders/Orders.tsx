/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
// eslint-disable
import React from 'react';
import Paper from '@material-ui/core/Paper';
import {
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
import { Order, OrderService } from '../../../services/OrderService';
import { ClientService } from '../../../services/ClientService';

const BooleanEditor = (props: any) => <AppointmentForm.BooleanEditor {...props} readOnly />;

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

const workerData1 = [
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
      isLoading: true,
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

  componentDidMount() {
    (async () => {
      // eslint-disable-next-line max-len
      const [result, result2, result3, result4] = await Promise.all([OrderService.getWorkers(), OrderService.getServices(), OrderService.getOrders(), ClientService.getClients()]);
      const allWorkersName = result.data.map((n) => ({ text: `${n.firstName} ${n.lastName}`, id: n.id }));
      const allServices = result2.data.map((s) => ({ text: s.serviceName, id: s.id }));
      const allAppointments = result3.data.map((a) => ({ startDate: a.orderDate, workerId: a?.worker, service: a.service.map((serviceId) => serviceId.id), client: a.client.id }));
      const allClients = result4.data.map((c) => ({ text: `${c.firstName} ${c.lastName}`, id: c.id }));
      this.setState(
        { isLoading: false,
          data: allAppointments,
          resources: [{
            fieldName: 'workerId',
            title: 'Worker',
            instances: allWorkersName,
          },
          {
            fieldName: 'service',
            title: 'Services',
            instances: allServices,
            allowMultiple: true,
          },
          {
            fieldName: 'client',
            title: 'Client',
            instances: allClients,
          },
          ],
        },
      );
    })();
  }

  commitChanges({ added, changed, deleted }:any) {
    if (added) {
    //   const order: Orders = {  };
    //   const response = OrderService.addOrders(order);
    //   console.log(response);
    }
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
      data, resources, grouping, groupByDate, isLoading,
    }:any = this.state;

    return isLoading ? 'Loading...' : (
      <>
        <Paper>
          <Scheduler
            data={data}
          >
            <ViewState
              defaultCurrentDate="2021-10-04"
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
            <AppointmentForm booleanEditorComponent={BooleanEditor} />

            <GroupingPanel />
            <DragDropProvider />
          </Scheduler>
        </Paper>
      </>
    );
  }
}
