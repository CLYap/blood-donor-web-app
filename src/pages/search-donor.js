import React from 'react';
import MaterialTable from 'material-table';
import {
  StyledContainer,
  InnerContainer,
  StyledTitle,
  Colors,
  Line,
} from '../components/global-styles';
import SideBar from '../components/navigation/side-bar';

const { theme, lightTheme } = Colors;

const donorLs = [
  {
    icNo: '991203136202',
    fName: 'Cheel',
    lName: 'Yap',
    bloodType: 'O+',
    distance: '5km',
    lastUpdated: '30 minutes ago',
  },
  {
    icNo: '891203136202',
    fName: 'Cheel',
    lName: 'Yap',
    bloodType: 'O+',
    distance: '5km',
    lastUpdated: '10 minutes ago',
  },
  {
    icNo: '951203136203',
    fName: 'Cheel',
    lName: 'Yap',
    bloodType: 'AB+',
    distance: '5km',
    lastUpdated: '15 minutes ago',
  },
  {
    icNo: '671203056202',
    fName: 'Cheel',
    lName: 'Yap',
    bloodType: 'A-',
    distance: '5km',
    lastUpdated: '1 hour ago',
  },
  {
    icNo: '921103106202',
    fName: 'Cheel',
    lName: 'Yap',
    bloodType: 'B+',
    distance: '5km',
    lastUpdated: '2 hours ago',
  },
  {
    icNo: '691203126208',
    fName: 'Cheel',
    lName: 'Yap',
    bloodType: 'O-',
    distance: '5km',
    lastUpdated: '15 hours ago',
  },
];

const SearchDonor = () => {
  const columns = [
    { title: 'IC No.', field: 'icNo', searchable: true, sorting: false },
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
    <>
      <SideBar />
      <StyledContainer secondaryBackground>
        <InnerContainer>
          <StyledTitle pageTitle>Search Donor</StyledTitle>
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
                width: '300px',
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
              toolbar: { searchPlaceholder: 'Search by IC No. / Blood Group' },
            }}
          ></MaterialTable>
        </InnerContainer>
      </StyledContainer>
    </>
  );
};

export default SearchDonor;
