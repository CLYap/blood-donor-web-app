import API from './api';

export const createDonationRecord = (staffId, donorId, values) => {
  return API.post('/create/donation/' + staffId + '/' + donorId, values).then(
    (response) => (response.status === 200 ? response : null)
  );
};
