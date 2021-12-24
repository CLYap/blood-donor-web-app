import React from 'react';
import MaterialTable from 'material-table';
import {
  StyledContainer,
  InnerContainer,
  StyledTitle,
  Colors,
  FlexRowContainer,
  StyledButton,
  StyledText,
  Line,
} from '../components/global-styles';
import { useNavigate } from 'react-router-dom';
import SideBar from '../components/navigation/side-bar';

const { theme, lightTheme } = Colors;

const HistoryLs = [
  {
    sessionID: '1',
    donorUUID: '128499393333',
    date: '28-09-2012',
    time: '1400',
    staffUUID: '983749393933',
    staffName: 'Siti Norway',
    centreId: 'C0001',
    centreName: 'Gland Eagers',
    bloodGroup: 'O+',
    bP: '126/64',
    heamoglobinCount: '800',
    pulse: '70',
    bloodUnit: '450',
    covidAntibody: '-',
  },
  {
    sessionID: '2',
    donorUUID: '128499393333',
    date: '28-09-2013',
    time: '1430',
    staffUUID: '983749393933',
    staffName: 'Siti Norway 2',
    centreId: 'C0002',
    centreName: 'Gland Eagers2',
    bloodGroup: 'O-',
    bP: '126/65',
    heamoglobinCount: '800',
    pulse: '70',
    bloodUnit: '330',
    covidAntibody: '-',
  },
  {
    sessionID: '3',
    donorUUID: '128499393333',
    date: '28-09-2013',
    time: '1430',
    staffUUID: '983749393933',
    staffName: 'Siti Norway Psildm',
    centreId: 'C0003',
    centreName: 'Pantai Hospital',
    bloodGroup: 'AB+',
    bP: '128/64',
    heamoglobinCount: '800',
    pulse: '70',
    bloodUnit: '350',
    covidAntibody: '+',
  },
  {
    sessionID: '4',
    donorUUID: '128499393333',
    date: '28-09-2013',
    time: '1430',
    staffUUID: '983749393933',
    staffName: 'Siti Norway Psildm',
    centreId: 'C0003',
    centreName: 'Pantai Hospital',
    bloodGroup: 'B+',
    bP: '126/62',
    heamoglobinCount: '800',
    pulse: '70',
    bloodUnit: '400',
    covidAntibody: '-',
  },
  {
    sessionID: '5',
    donorUUID: '128499393333',
    date: '28-09-2013',
    time: '1430',
    staffUUID: '983749393933',
    staffName: 'Siti Norway Psildm',
    centreId: 'C0003',
    centreName: 'Pantai Hospital',
    bloodGroup: 'B-',
    bP: '128/64',
    heamoglobinCount: '800',
    pulse: '70',
    bloodUnit: '300',
    covidAntibody: '-',
  },
  {
    sessionID: '6',
    date: '28-09-2013',
    time: '1430',
    staffUUID: '983749393933',
    staffName: 'Siti Norway sw',
    centreId: 'C0003',
    centreName: 'Pantai Hospital',
    bloodGroup: 'B+',
    bP: '126/60',
    heamoglobinCount: '800',
    pulse: '70',
    bloodUnit: '300',
    covidAntibody: '+',
  },
  {
    sessionID: '7',
    date: '28-09-2013',
    time: '1430',
    staffUUID: '983749393933',
    staffName: 'Siti Norway sw',
    centreId: 'C0003',
    centreName: 'Pantai Hospital',
    bloodGroup: 'B+',
    bP: '126/60',
    heamoglobinCount: '800',
    pulse: '70',
    bloodUnit: '300',
    covidAntibody: '+',
  },
  {
    sessionID: '8',
    date: '28-09-2013',
    time: '1430',
    staffUUID: '983749393933',
    staffName: 'Siti Norway sw',
    centreId: 'C0003',
    centreName: 'Pantai Hospital',
    bloodGroup: 'B+',
    bP: '126/60',
    heamoglobinCount: '800',
    pulse: '70',
    bloodUnit: '300',
    covidAntibody: '+',
  },
  {
    sessionID: '9',
    date: '28-09-2013',
    time: '1430',
    staffUUID: '983749393933',
    staffName: 'Siti Norway sw',
    centreId: 'C0003',
    centreName: 'Pantai Hospital',
    bloodGroup: 'B+',
    bP: '126/60',
    heamoglobinCount: '800',
    pulse: '70',
    bloodUnit: '300',
    covidAntibody: '+',
  },
  {
    sessionID: '10',
    date: '28-09-2013',
    time: '1430',
    staffUUID: '983749393933',
    staffName: 'Siti Norway sw',
    centreId: 'C0003',
    centreName: 'Pantai Hospital',
    bloodGroup: 'B+',
    bP: '126/60',
    heamoglobinCount: '800',
    pulse: '70',
    bloodUnit: '300',
    covidAntibody: '+',
  },
  {
    sessionID: '11',
    date: '28-09-2013',
    time: '1430',
    staffUUID: '983749393933',
    staffName: 'Siti Norway sw',
    centreId: 'C0003',
    centreName: 'Pantai Hospital',
    bloodGroup: 'B+',
    bP: '126/60',
    heamoglobinCount: '800',
    pulse: '70',
    bloodUnit: '300',
    covidAntibody: '+',
  },
];

const DonationHistory = () => {
  const navigate = useNavigate();
  const routeChange = () => {
    navigate('/donor/donation/update');
  };

  const columns = [
    { title: 'Session ID', field: 'sessionID' },
    { title: 'Date', field: 'date', searchable: false },
    { title: 'Time', field: 'time', searchable: false },
    { title: 'Blood Centre', field: 'centreName' },
    { title: 'Nurse ID', field: 'staffUUID', searchable: false },
    { title: 'Blood Unit', field: 'bloodUnit', searchable: false },
    { title: 'Blood Pressure', field: 'bP', searchable: false },
    {
      title: 'Heamoglobin Count',
      field: 'heamoglobinCount',
      searchable: false,
    },
    { title: 'Pulse', field: 'pulse', searchable: false },

    {
      title: 'Covid-19 Antibody',
      field: 'covidAntibody',
      render: (rowData) =>
        rowData.covidAntibody === '+' ? 'Positive' : 'Negative',
    },
  ];
  return (
    <>
      <SideBar />
      <StyledContainer secondaryBackground>
        <InnerContainer>
          <FlexRowContainer justifyContentSpaceBetween>
            <StyledTitle pageTitle>Donor Details</StyledTitle>
            <StyledButton onClick={routeChange}>
              <FlexRowContainer>
                <StyledText primaryText buttonText>
                  Add Donation History
                </StyledText>
              </FlexRowContainer>
            </StyledButton>
          </FlexRowContainer>
          <Line />
          <MaterialTable
            title=''
            data={HistoryLs}
            columns={columns}
            options={{
              headerStyle: {
                backgroundColor: lightTheme,
                color: theme,
                fontSize: 17,
                padding: 5,
              },
              padding: 5,
              margin: 0,
              pageSize: 10,
              pageSizeOptions: [10],
              search: false,
            }}
            style={{
              minWidth: '50rem',
              padding: 20,
              paddingTop: 0,
              zIndex: 1,
              fontSize: 15,
            }}
          ></MaterialTable>
        </InnerContainer>
      </StyledContainer>
    </>
  );
};

export default DonationHistory;
