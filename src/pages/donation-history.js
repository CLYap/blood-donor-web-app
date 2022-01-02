import React, { useEffect, useState } from 'react';
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
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import SideBar from '../components/navigation/side-bar';
import { getDonationHistoriesService } from '../components/services/donation-service';
import { useUserInfo } from '../components/context/user-info-provider';

const { theme, lightTheme } = Colors;

const DonationHistory = () => {
  const navigate = useNavigate();
  let { role } = useUserInfo();
  const { state } = useLocation();
  const donorId = state && state.donorId;
  const donorName = state && state.fName + ' ' + state.lName;

  const { donorInfo } = useParams();
  const [historyLs, setHistoryLs] = useState([]);

  useEffect(() => {
    getDonationHistoriesService(donorId).then((data) => {
      const history = data.data;
      parseData(history);
    });
    return () => setHistoryLs([]);
  }, [donorId]);

  const parseData = (history) => {
    const ls = [];
    history.forEach((e) => {
      const item = {
        donationHistoryId: '',
        date: '',
        time: '',
        bloodCentreName: '',
        staffId: '',
        bloodUnit: '',
        bP: '',
        haemoglobinCount: '',
        pulse: '',
        covidAntibody: '',
      };
      item.donationHistoryId = e.donationHistoryId;
      item.date = e.date;
      item.time = e.time;
      item.bloodCentreName = e.staff.bloodCentre.bloodCentreName;
      item.staffId = e.staff.staffId;
      item.bloodUnit = e.bloodUnit;
      item.bP = e.bP;
      item.haemoglobinCount = e.haemoglobinCount;
      item.pulse = e.pulse;
      item.covidAntibody = e.covidAntibody;
      ls.push(item);
    });
    setHistoryLs(ls);
  };

  const goUpdateDonation = () => {
    navigate('/donor/' + donorInfo + '/donation-history/update', { state });
  };

  const columns = [
    { title: 'Session ID', field: 'donationHistoryId' },
    { title: 'Date', field: 'date' },
    { title: 'Time', field: 'time' },
    { title: 'Blood Centre', field: 'bloodCentreName' },
    { title: 'Nurse ID', field: 'staffId' },
    { title: 'Blood Unit', field: 'bloodUnit' },
    { title: 'Blood Pressure', field: 'bP' },
    {
      title: 'Heamoglobin Count',
      field: 'haemoglobinCount',
    },
    { title: 'Pulse', field: 'pulse' },

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
            <StyledTitle pageTitle>Donor History</StyledTitle>
            {role && role.includes('ROLE_NURSE') && (
              <StyledButton onClick={goUpdateDonation}>
                <FlexRowContainer>
                  <StyledText primaryText buttonText>
                    Add Donation History
                  </StyledText>
                </FlexRowContainer>
              </StyledButton>
            )}
          </FlexRowContainer>
          <StyledText>Donor ID: {donorId}</StyledText>
          <StyledText paddingBottom15>
            Donor Name: {String(donorName).replace('-', ' ')}
          </StyledText>
          <Line />
          <MaterialTable
            title=''
            data={historyLs}
            columns={columns}
            options={{
              headerStyle: {
                backgroundColor: lightTheme,
                color: theme,
                fontSize: 17,
                padding: 5,
              },
              margin: 0,
              pageSize: 5,
              pageSizeOptions: [5],
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
