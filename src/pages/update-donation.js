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
import { parseDateTime } from '../components/utils';
import { createDonationRecordService } from '../components/services/donation-service';

const UpdateDonation = () => {
  const initialValues = {
    date: '',
    time: '',
    bloodUnit: '',
    bP: '',
    haemoglobinCount: '',
    pulse: '',
    covidAntibody: '',
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
    covidAntibody: Yup.string().required('Required!'),
  });

  const onSubmit = (values) => {
    values.time = parseDateTime(values.date, values.time);
    console.log(values);
    createDonationRecordService('S0001', 'D0001', values).then(() => {
      console.log('success');
    });
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
                      <InputFieldContainer>
                        <ReadOnlyField>
                          <StyledLabel>Donor ID</StyledLabel>
                          <StyledText>D0001</StyledText>
                        </ReadOnlyField>
                      </InputFieldContainer>
                      <FlexColumnContainer paddingLeft35>
                        <InputFieldContainer>
                          <ReadOnlyField>
                            <StyledLabel>Donor Name</StyledLabel>
                            <StyledText>Yap Chee Ling</StyledText>
                          </ReadOnlyField>
                        </InputFieldContainer>
                      </FlexColumnContainer>
                    </FlexRowContainer>
                    <FlexRowContainer>
                      <InputFieldContainer>
                        <ReadOnlyField>
                          <StyledLabel>Blood Centre ID</StyledLabel>
                          <StyledText>BC0001</StyledText>
                        </ReadOnlyField>
                      </InputFieldContainer>
                      <FlexColumnContainer paddingLeft35>
                        <InputFieldContainer>
                          <ReadOnlyField>
                            <StyledLabel>Blood Centre Name</StyledLabel>
                            <StyledText>Pantai Hospital</StyledText>
                          </ReadOnlyField>
                        </InputFieldContainer>
                      </FlexColumnContainer>
                    </FlexRowContainer>
                    <FlexRowContainer>
                      <InputFieldContainer>
                        <ReadOnlyField>
                          <StyledLabel>Nurse ID</StyledLabel>
                          <StyledText>S0001</StyledText>
                        </ReadOnlyField>
                      </InputFieldContainer>
                      <FlexColumnContainer paddingLeft35>
                        <InputFieldContainer>
                          <ReadOnlyField>
                            <StyledLabel>Nurse Name</StyledLabel>
                            <StyledText>Siti Noraidah</StyledText>
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
                            <StyledText>O+</StyledText>
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
                        options={testOptions}
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

export default UpdateDonation;
