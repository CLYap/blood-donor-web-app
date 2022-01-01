import API from './api';

export const getDonationHistoriesService = (donorId) => {
  return API.get('/donations/' + donorId).then((response) =>
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
