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
  ReadOnlyField,
} from '../components/global-styles';
import FormikControl from '../components/form/formik-control';
import {
  InputFieldContainer,
  StyledLabel,
} from '../components/form/form.styles';
import SideBar from '../components/navigation/side-bar';
import { parseDateTime, covidAntibodyTestOptions } from '../components/utils';
import { createDonationRecordService } from '../components/services/donation-service';
import { useLocation } from 'react-router-dom';
import { useUserInfo } from '../components/context/user-info-provider';

const CreateDonationHistory = () => {
  let { staffInfo } = useUserInfo();
  const bloodCentreId = staffInfo && staffInfo.bloodCentre.bloodCentreId;
  const bloodCentreName = staffInfo && staffInfo.bloodCentre.bloodCentreName;
  const staffId = staffInfo && staffInfo.staffId;
  const staffName = staffInfo && staffInfo.fName + ' ' + staffInfo.lName;

  const { state } = useLocation();
  const donorId = state && state.donorId;
  const donorName = state && state.fName + ' ' + state.lName;
  const bloodType = state && state.bloodType;

  const initialValues = {
    date: '',
    time: '',
    bloodUnit: '',
    bP: '',
    haemoglobinCount: '',
    pulse: '',
    covidAntibody: '',
  };

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
    covidAntibody: Yup.string().required('Required!'),
  });

  const onSubmit = (values, { resetForm }) => {
    values.time = parseDateTime(values.date, values.time);
    console.log(values);
    createDonationRecordService(staffId, donorId, values).then(() => {
      console.log('success');
    });
    resetForm();
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
            {({ errors, touched, resetForm }) => (
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
                      <InputFieldContainer>
                        <ReadOnlyField>
                          <StyledLabel>Donor ID</StyledLabel>
                          <StyledText>{donorId}</StyledText>
                        </ReadOnlyField>
                      </InputFieldContainer>
                      <FlexColumnContainer paddingLeft35>
                        <InputFieldContainer>
                          <ReadOnlyField>
                            <StyledLabel>Donor Name</StyledLabel>
                            <StyledText>{donorName}</StyledText>
                          </ReadOnlyField>
                        </InputFieldContainer>
                      </FlexColumnContainer>
                    </FlexRowContainer>
                    <FlexRowContainer>
                      <InputFieldContainer>
                        <ReadOnlyField>
                          <StyledLabel>Blood Centre ID</StyledLabel>
                          <StyledText>{bloodCentreId}</StyledText>
                        </ReadOnlyField>
                      </InputFieldContainer>
                      <FlexColumnContainer paddingLeft35>
                        <InputFieldContainer>
                          <ReadOnlyField>
                            <StyledLabel>Blood Centre Name</StyledLabel>
                            <StyledText>{bloodCentreName}</StyledText>
                          </ReadOnlyField>
                        </InputFieldContainer>
                      </FlexColumnContainer>
                    </FlexRowContainer>
                    <FlexRowContainer>
                      <InputFieldContainer>
                        <ReadOnlyField>
                          <StyledLabel>Nurse ID</StyledLabel>
                          <StyledText>{staffId}</StyledText>
                        </ReadOnlyField>
                      </InputFieldContainer>
                      <FlexColumnContainer paddingLeft35>
                        <InputFieldContainer>
                          <ReadOnlyField>
                            <StyledLabel>Nurse Name</StyledLabel>
                            <StyledText>{staffName}</StyledText>
                          </ReadOnlyField>
                        </InputFieldContainer>
                      </FlexColumnContainer>
                    </FlexRowContainer>
                  </CardContainer>
                  <FlexColumnContainer paddingLeft70>
                    <CardContainer>
                      <FlexRowContainer>
                        <InputFieldContainer>
                          <ReadOnlyField>
                            <StyledLabel>Blood Type</StyledLabel>
                            <StyledText>{bloodType}</StyledText>
                          </ReadOnlyField>
                        </InputFieldContainer>
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
                        label='Covid-19 Antibody'
                        name='covidAntibody'
                        options={covidAntibodyTestOptions}
                        error={errors.covidAntibody && touched.covidAntibody}
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

export default CreateDonationHistory;
