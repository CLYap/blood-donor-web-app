import API from './api';

export const CreateAppointmentSlotService = (bloodCentreId, values) => {
  return API.post('/create/appointment/' + bloodCentreId, {
    date: values.date,
    startTime: values.startTime,
    endTime: values.endTime,
    slot: values.slot,
  }).then((response) => (response.status === 200 ? response : null));
};

export const GetAppointmentSlotsService = (bloodCentreId) => {
  return API.get('/appointments/' + bloodCentreId).then((response) =>
    response.status === 200 ? response : null
  );
};
