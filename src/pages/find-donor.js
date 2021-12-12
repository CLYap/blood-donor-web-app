import React from 'react';
import MaterialTable from 'material-table';
import {
  StyledContainer,
  InnerContainer,
  StyledTitle,
  Colors,
  Line,
} from '../components/global-styles';

const { theme, lightTheme } = Colors;

const donorLs = [
  {
    donorId: 'D0001',
    fName: 'Cheel',
    lName: 'Yap',
    bloodType: 'O+',
    distance: '5km',
    lastUpdated: 'Sat Dec 11 2021 09:33:40 GMT+0800 (Malaysia Time)',
  },
  {
    donorId: 'D0002',
    fName: 'Cheel',
    lName: 'Yap',
    bloodType: 'O+',
    distance: '5km',
    lastUpdated: 'Sat Dec 11 2021 09:33:40 GMT+0800 (Malaysia Time)',
  },
  {
    donorId: 'D0003',
    fName: 'Cheel',
    lName: 'Yap',
    bloodType: 'AB+',
    distance: '5km',
    lastUpdated: 'Sat Dec 11 2021 09:33:40 GMT+0800 (Malaysia Time)',
  },
  {
    donorId: 'D0004',
    fName: 'Cheel',
    lName: 'Yap',
    bloodType: 'A-',
    distance: '5km',
    lastUpdated: 'Sat Dec 04 2021 09:33:40 GMT+0800 (Malaysia Time)',
  },
  {
    donorId: 'D0005',
    fName: 'Cheel',
    lName: 'Yap',
    bloodType: 'B+',
    distance: '5km',
    lastUpdated: 'Sat Dec 11 2021 09:33:40 GMT+0800 (Malaysia Time)',
  },
  {
    donorId: 'D0006',
    fName: 'Cheel',
    lName: 'Yap',
    bloodType: 'O-',
    distance: '5km',
    lastUpdated: 'Fri Dec 10 2021 09:33:40 GMT+0800 (Malaysia Time)',
  },
];

const FindDonor = () => {
  const columns = [
    { title: 'Donor ID', field: 'donorId', searchable: false, sorting: false },
    { title: 'First Name', field: 'fName', searchable: false, sorting: false },
    { title: 'Last Name', field: 'lName', searchable: false, sorting: false },
    {
      title: 'Blood Group',
      field: 'bloodType',
      searchable: true,
      sorting: true,
    },
    { title: 'Within', field: 'distance', searchable: false, sorting: true },
    {
      title: 'Last Updated',
      field: 'lastUpdated',
      searchable: false,
      sorting: true,
    },
  ];

  return (
    <StyledContainer>
      <InnerContainer>
        <StyledTitle pageTitle>Find Donor</StyledTitle>
        <Line />
        <MaterialTable
          title=''
          data={donorLs}
          columns={columns}
          options={{
            headerStyle: {
              backgroundColor: lightTheme,
              color: theme,
              fontSize: 23,
            },
            margin: 10,
            pageSizeOptions: [5],
            searchFieldStyle: {
              height: '40px',
              fontSize: 15,
              marginBottom: 20,
            },
          }}
          style={{
            minWidth: '50rem',
            padding: 50,
            marginTop: 40,
            zIndex: 1,
            fontSize: 15,
          }}
          localization={{
            toolbar: { searchPlaceholder: 'Search by Blood Group' },
          }}
        ></MaterialTable>
      </InnerContainer>
    </StyledContainer>
  );
};

export default FindDonor;
