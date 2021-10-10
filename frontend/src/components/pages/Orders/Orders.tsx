/* eslint-disable max-len */
import React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  ViewState,
  EditingState,
  GroupingState,
  IntegratedGrouping,
  IntegratedEditing,
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
  CurrentTimeIndicator,
} from '@devexpress/dx-react-scheduler-material-ui';
import { Order, OrderService } from '../../../services/OrderService';
import { ClientService } from '../../../services/ClientService';

const BooleanEditor = (props: any) => <AppointmentForm.BooleanEditor {...props} readOnly />;

const car1 = {
  id: 1,
  color: 'Black',
  model: 'Toyota',
  registration: 'PO1236',
};

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
      // eslint-disable-next-line no-unused-vars
      const [result, result2, result3, result4, result5] = await Promise.all(
        [OrderService.getWorkers(),
          OrderService.getServices(),
          OrderService.getOrders(),
          ClientService.getClients(),
          OrderService.getCars()],
      );
      const allWorkersName = result.data.map((n) => ({ text: `${n.firstName} ${n.lastName}`, id: n.id }));
      const allServices = result2.data.map((s) => ({ text: s.serviceName, id: s.id }));
      const allAppointments = result3.data.map((a) => ({
        allDay: false,
        startDate: a.orderDate,
        workerId: a?.worker.id,
        service: a.service.map((serviceId) => serviceId.id),
        // dupa: a.service.reduce((wholeServiceDuration, serviceDuration) => wholeServiceDuration += serviceDuration.serviceDurationTime, 0),
        client: a.client.id }));

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
          grouping: [{
            resourceName: 'workerId',
          }],
          groupByDate: isWeekOrMonthView,
          isGroupByDate: true,
        },
      );
    })();
  }

  commitChanges({ added, changed, deleted }:any) {
    if (added) {
      const order: Order = {
        id: 99,
        orderDate: added.startDate,
        worker: added.workerId,
        client: added.client,
        service: added.service,
        deadline: added.startDate,
        finishDate: added.startDate,
        car: car1,
      };
      OrderService.addOrders(order);
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
            <CurrentTimeIndicator
              shadePreviousCells
              shadePreviousAppointments
            />
          </Scheduler>
        </Paper>
      </>
    );
  }
}
