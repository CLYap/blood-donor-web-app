import React from 'react';

import { Bar, Doughnut } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
import MaterialTable from 'material-table';
import { Colors } from '../components/global-styles';
Chart.register(CategoryScale);

const { theme, lightTheme } = Colors;

const BarData = (data) => {
  const bloodUnit = [0, 0, 0, 0, 0, 0, 0, 0];
  data.forEach((elem) => {
    const value = parseFloat(elem.bloodUnit);
    if (elem.bloodType === 'A+') {
      bloodUnit[0] = value;
    } else if (elem.bloodType === 'A-') {
      bloodUnit[1] = value;
    } else if (elem.bloodType === 'B+') {
      bloodUnit[2] = value;
    } else if (elem.bloodType === 'B-') {
      bloodUnit[3] = value;
    } else if (elem.bloodType === 'AB+') {
      bloodUnit[4] = value;
    } else if (elem.bloodType === 'AB-') {
      bloodUnit[5] = value;
    } else if (elem.bloodType === 'O+') {
      bloodUnit[6] = value;
    } else if (elem.bloodType === 'O-') {
      bloodUnit[7] = value;
    }
  });
  return bloodUnit;
};

const DoughnutChartData = (data) => {
  const bloodUnit = [0, 0, 0, 0, 0, 0, 0, 0];
  data.forEach((elem) => {
    const value = parseInt(elem.donations);
    if (elem.bloodType === 'A+') {
      bloodUnit[0] = value;
    } else if (elem.bloodType === 'A-') {
      bloodUnit[1] = value;
    } else if (elem.bloodType === 'B+') {
      bloodUnit[2] = value;
    } else if (elem.bloodType === 'B-') {
      bloodUnit[3] = value;
    } else if (elem.bloodType === 'AB+') {
      bloodUnit[4] = value;
    } else if (elem.bloodType === 'AB-') {
      bloodUnit[5] = value;
    } else if (elem.bloodType === 'O+') {
      bloodUnit[6] = value;
    } else if (elem.bloodType === 'O-') {
      bloodUnit[7] = value;
    }
  });
  return bloodUnit;
};

export const BarChart = ({ info }) => {
  const data = {
    labels: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    datasets: [
      {
        label: 'Blood Unit  (mL)',
        data: BarData(info),
        borderColor: ['rgb(255, 225, 225)'],
        backgroundColor: ['rgb(255, 225, 225)'],
      },
    ],
  };

  return <Bar data={data} />;
};

export const DoughnutChart = ({ info }) => {
  const data = {
    labels: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    datasets: [
      {
        label: 'Blood Unit  (mL)',
        data: DoughnutChartData(info),
        backgroundColor: [
          'rgb(255,225,225)',
          'rgb(255,225,255)',
          'rgb(255,225,225)',
          'rgb(225,255,225)',
          'rgb(225,255,255)',
          'rgb(225,240,255)',
          'rgb(225,225,255)',
        ],
      },
    ],
  };

  return (
    <Doughnut
      data={data}
      width={'15%'}
      options={{ maintainAspectRatio: false }}
    />
  );
};

export const TableChart = ({ info }) => {
  const columns = [
    { title: 'Staff ID', field: 'staffId' },
    { title: 'Staff First Name', field: 'staffFName' },
    { title: 'Staff Last Name', field: 'staffLName' },
    { title: 'Number of Donations Managed', field: 'donations' },
  ];

  return (
    <MaterialTable
      title=''
      data={info}
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
  );
};
