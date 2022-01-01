export const parseDateTime = (date, time) => {
  return date + 'T' + time + '+08:00'; //datetime format for Malaysia time zone
};

export const genderOptions = [
  { key: 'Select an option', value: '' },
  { key: 'Female', value: 'F' },
  { key: 'Male', value: 'M' },
];

export const roleOptions = [
  { key: 'Select an option', value: '' },
  { key: 'Nurse', value: 'ROLE_NURSE' },
  { key: 'Admin', value: 'ROLE_ADMIN' },
];

export const bloodGroupOptions = [
  { key: 'Select an option', value: '' },
  { key: 'A+', value: 'A+' },
  { key: 'A-', value: 'A-' },
  { key: 'B+', value: 'B+' },
  { key: 'B-', value: 'B-' },
  { key: 'O+', value: 'O+' },
  { key: 'O-', value: 'O-' },
  { key: 'AB+', value: 'AB+' },
  { key: 'AB-', value: 'AB-' },
];

export const covidAntibodyTestOptions = [
  { key: 'Select an option', value: '' },
  { key: 'Positive', value: '+' },
  { key: 'Negative', value: '-' },
];
