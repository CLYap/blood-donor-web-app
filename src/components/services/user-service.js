import API from './api';

export const authenticationService = (values) => {
  const params = new URLSearchParams();
  params.append('username', values.email);
  params.append('password', values.password);

  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };

  return API.post('/login', params, config).then((response) =>
    response.status === 200 ? response : null
  );
};

export const staffProfileService = () => {
  return API.get('/users/staffs').then((response) => {
    console.log(response);
  });
};
