import React, { useState, useEffect } from 'react';
import SideBar from '../components/navigation/side-bar';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  Appointments,
  Toolbar,
  DateNavigator,
  TodayButton,
  AppointmentTooltip,
} from '@devexpress/dx-react-scheduler-material-ui';
import { Colors } from '../components/global-styles';
import { GetAppointmentSlotsService } from '../components/services/appointment-service';
import { useUserInfo } from '../components/context/user-info-provider';
import { parseDateTime } from '../components/utils';

const { theme } = Colors;

const Appointment = ({ children, style, ...restProps }) => (
  <Appointments.Appointment
    {...restProps}
    style={{
      ...style,
      fontSize: '20px',
      backgroundColor: theme,
      borderRadius: '8px',
      opacity: 0.8,
    }}
  >
    {children}
  </Appointments.Appointment>
);

const AppointmentSchedule = () => {
  const { staffInfo } = useUserInfo();
  const bloodCentreId = staffInfo && staffInfo.bloodCentre.bloodCentreId;
  const [appointments, setAppointments] = useState([]);
  const currentDate = new Date();

  useEffect(() => {
    GetAppointmentSlotsService(bloodCentreId).then((data) => {
      const appointmentData = data.data;
      console.log(appointmentData);
      const info = [];
      appointmentData.forEach((e) => {
        const slot = { id: '', startDate: '', endDate: '', title: '' };
        slot.id = e.appointmentSessionId;
        slot.startDate = new Date(parseDateTime(e.date, e.startTime));
        slot.endDate = new Date(parseDateTime(e.date, e.endTime));
        const donor = e.appointmentRequests.map((e) => {
          let info =
            e.donor.fName + ' ' + e.donor.lName + ' (' + e.donor.donorId + ')';
          return info;
        });
        info.push(slot);
        slot.title = donor.length !== 0 ? donor : 'No appointment!';
      });
      setAppointments(info);
    });
  }, [bloodCentreId]);
  console.log(appointments);
  return (
    <>
      <SideBar />
      <Paper>
        <Scheduler data={appointments} height={660}>
          <ViewState defaultCurrentDate={currentDate} />
          <WeekView startDayHour={8} endDayHour={19} cellDuration={60} />
          <Toolbar />
          <DateNavigator />
          <TodayButton />
          <Appointments appointmentComponent={Appointment} />

          <AppointmentTooltip showCloseButton />
        </Scheduler>
      </Paper>
    </>
  );
};

export default AppointmentSchedule;
