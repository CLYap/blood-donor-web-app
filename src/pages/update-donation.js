import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
  StyledContainer,
  InnerContainer,
  CardContainer,
  StyledTitle,
  StyledButton,
  SecondaryButton,
  StyledText,
  Line,
  FlexRowContainer,
  FlexColumnContainer,
} from '../components/global-styles';
import FormikControl from '../components/form/formik-control';
import SideBar from '../components/navigation/side-bar';

const nurseInfo = {
  //from redux
  staffId: 'siti@gmail.com',
  staffName: 'Siti Noraidah',
  centreId: '1',
  centreName: 'Pantai Hospital',
  role: 'ROLE_NURSE',
};

const donor = {
  donorId: '991203149553',
  donorName: 'Chee Ling Yap',
  bloodType: 'O+',
};

const UpdateDonation = () => {
  const initialValues = {
    centreId: nurseInfo.centreId,
    centreName: nurseInfo.centreName,
    staffId: nurseInfo.staffId,
    staffName: nurseInfo.staffName,
    donorId: donor.donorId,
    donorName: donor.donorName,
    bloodType: donor.bloodType,
    date: '',
    time: '',
    bloodUnit: '',
    bP: '',
    haemoglobinCount: '',
    pulse: '',
    covidAntibodyTest: '',
  };

  const testOptions = [
    { key: 'Select an option', value: '' },
    { key: 'Positive', value: '+' },
    { key: 'Negative', value: '-' },
  ];

  const validationSchema = Yup.object({
    date: Yup.string().required('Required!'),
    time: Yup.string().required('Required!'),
    bloodUnit: Yup.number()
      .integer()
      .typeError('Enter numeric characters only')
      .required('Required!'),
    bP: Yup.string().required('Required!'),
    haemoglobinCount: Yup.number()
      .integer()
      .typeError('Enter numeric characters only')
      .required('Required!'),
    pulse: Yup.number()
      .integer()
      .typeError('Enter numeric characters only')
      .required('Required!'),
    covidAntibodyTest: Yup.string().required('Required!'),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <SideBar />
      <StyledContainer secondaryBackground>
        <InnerContainer>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <FlexRowContainer>
                  <CardContainer>
                    <StyledTitle subtitle>Create Donation Record</StyledTitle>
                    <Line />
                    <FlexRowContainer justifyContentSpaceBetween>
                      <FormikControl
                        control='input'
                        type='date'
                        label='Date'
                        name='date'
                        error={errors.date && touched.date}
                      />
                      <FormikControl
                        control='input'
                        type='time'
                        label='Time'
                        name='time'
                        error={errors.time && touched.time}
                      />
                    </FlexRowContainer>
                    <FlexRowContainer>
                      <FormikControl
                        control='input'
                        type='donorId'
                        label='Donor ID'
                        name='donorId'
                        disabled={true}
                      />
                      <FlexColumnContainer paddingLeft35>
                        <FormikControl
                          control='input'
                          type='donorName'
                          label='Donor Name'
                          name='donorName'
                          disabled={true}
                        />
                      </FlexColumnContainer>
                    </FlexRowContainer>
                    <FlexRowContainer>
                      <FormikControl
                        control='input'
                        type='centreId'
                        label='Blood Centre ID'
                        name='centreId'
                        disabled={true}
                      />
                      <FlexColumnContainer paddingLeft35>
                        <FormikControl
                          control='input'
                          type='centreName'
                          label='Blood Centre'
                          name='centreName'
                          disabled={true}
                        />
                      </FlexColumnContainer>
                    </FlexRowContainer>
                    <FlexRowContainer>
                      <FormikControl
                        control='input'
                        type='staffId'
                        label='Nurse ID'
                        name='staffId'
                        disabled={true}
                      />
                      <FlexColumnContainer paddingLeft35>
                        <FormikControl
                          control='input'
                          type='staffName'
                          label='Nurse Name'
                          name='staffName'
                          disabled={true}
                        />
                      </FlexColumnContainer>
                    </FlexRowContainer>
                  </CardContainer>
                  <FlexColumnContainer paddingLeft70>
                    <CardContainer>
                      <FlexRowContainer>
                        <FormikControl
                          control='input'
                          type='bloodType'
                          label='Blood Group'
                          name='bloodType'
                          disabled={true}
                        />
                        <FlexColumnContainer paddingLeft35>
                          <FormikControl
                            control='input'
                            type='bloodUnit'
                            label='Blood Unit (mL)'
                            name='bloodUnit'
                            error={errors.bloodUnit && touched.bloodUnit}
                          />
                        </FlexColumnContainer>
                      </FlexRowContainer>
                      <FormikControl
                        control='input'
                        type='bP'
                        label='Blood Pressure'
                        name='bP'
                        error={errors.bP && touched.bP}
                      />
                      <FormikControl
                        control='input'
                        type='haemoglobinCount'
                        label='Haemoglobin Count (gm/dL)'
                        name='haemoglobinCount'
                        error={
                          errors.haemoglobinCount && touched.haemoglobinCount
                        }
                      />
                      <FormikControl
                        control='input'
                        type='pulse'
                        label='Pulse (bpm)'
                        name='pulse'
                        error={errors.pulse && touched.pulse}
                      />
                      <FormikControl
                        control='select'
                        label='Covid-19 Antibody Test'
                        name='covidAntibodyTest'
                        options={testOptions}
                        error={
                          errors.covidAntibodyTest && touched.covidAntibodyTest
                        }
                      />
                    </CardContainer>
                  </FlexColumnContainer>
                </FlexRowContainer>
                <FlexRowContainer justifyContentRight>
                  <SecondaryButton marginRight30>
                    <StyledText tertiaryText>Cancel</StyledText>
                  </SecondaryButton>
                  <StyledButton type='submit'>
                    <StyledText primaryText>Submit</StyledText>
                  </StyledButton>
                </FlexRowContainer>
              </Form>
            )}
          </Formik>
        </InnerContainer>
      </StyledContainer>
    </>
  );
};

export default UpdateDonation;
