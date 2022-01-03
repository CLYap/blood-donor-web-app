import API from './api';

export const createAppUserService = (username, tempPassword) => {
  return API.post('/create/user/account', {
    username: username,
    password: tempPassword,
  }).then((response) => (response.status === 200 ? response : null));
};

export const assignRoleToUserService = (username, role) => {
  return API.post('/role/addtouser', {
    username: username,
    roleName: role,
  }).then((response) => (response.status === 200 ? response : null));
};

export const createStaffProfileService = (values) => {
  return API.post(
    '/create/user/staff/' + values.centreId + '/' + values.companyEmail,
    {
      lName: values.lName,
      fName: values.fName,
      gender: values.gender,
      dob: values.dob,
      address: values.address,
      personalEmail: values.personalEmail,
      contactNo: values.contactNo,
    }
  ).then((response) => (response.status === 200 ? response : null));
};

export const createDonorProfileService = (values) => {
  return API.post('/create/user/donor/' + values.icNo, {
    lName: values.lName,
    fName: values.fName,
    gender: values.gender,
    contactNo: values.contactNo,
    email: values.email,
    bloodType: values.bloodType,
  }).then((response) => (response.status === 200 ? response : null));
};

export const resetPasswordService = (values) => {
  return API.put('/reset/password', {
    username: values.email,
    password: values.password,
  }).then((response) => (response.status === 200 ? response : null));
};
