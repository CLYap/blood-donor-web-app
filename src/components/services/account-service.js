import API from './api';

export const createAppUser = (username, tempPassword) => {
  return API.post('/create/user/account', {
    username: username,
    password: tempPassword,
  }).then((response) => (response.status === 200 ? response : null));
};

export const assignRoleToUser = (username, role) => {
  return API.post('/role/addtouser', {
    username: username,
    roleName: role,
  }).then((response) => (response.status === 200 ? response : null));
};

export const createStaffProfile = (values) => {
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

export const createDonorProfile = (values) => {
  return API.post('/create/user/donor/' + values.icNo, {
    lName: values.lName,
    fName: values.fName,
    gender: values.gender,
    contactNo: values.contactNo,
    email: values.email,
    bloodType: values.bloodType,
  }).then((response) => (response.status === 200 ? response : null));
};
