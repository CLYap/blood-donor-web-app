import API from './api';

export const getDonationHistoriesService = (donorId) => {
  return API.get('/donor/donations/' + donorId).then((response) =>
    response.status === 200 ? response : null
  );
};

export const createDonationRecordService = (staffId, donorId, values) => {
  return API.post('/create/donation/' + staffId + '/' + donorId, values).then(
    (response) => (response.status === 200 ? response : null)
  );
};

export const getDonorService = (icNo) => {
  return API.get('/user/profile/donor/' + icNo).then((response) =>
    response.status === 200 ? response : null
  );
};

export const getDonationsOfStaffService = (bloodCentreId, year, month) => {
  return API.get(
    '/count/histories/' + bloodCentreId + '/' + year + '/' + month
  ).then((response) => (response.status === 200 ? response : null));
};

export const getDonationsBloodTypeService = (bloodCentreId, year, month) => {
  return API.get(
    '/count/histories/bloodtypes/' + bloodCentreId + '/' + year + '/' + month
  ).then((response) => (response.status === 200 ? response : null));
};

export const getDonationsBloodUnitService = (bloodCentreId, year, month) => {
  return API.get(
    '/count/histories/bloodunit/' + bloodCentreId + '/' + year + '/' + month
  ).then((response) => (response.status === 200 ? response : null));
};
