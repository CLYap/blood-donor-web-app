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
  staffName: 'Siti Noraidah',
  centreId: '1',
  centreName: 'Pantai Hospital',
};

const CreateStaff = () => {
  const initialValues = {
    centreId: nurseInfo.centreId,
    centreName: nurseInfo.centreName,
    companyEmail: '',
    lName: '',
    fName: '',
    gender: '',
    icNo: '',
    contactNo: '',
    personalEmail: '',
    role: '',
  };

  const genderOptions = [
    { key: 'Select an option', value: '' },
    { key: 'Female', value: 'F' },
    { key: 'Male', value: 'M' },
  ];

  const roleOptions = [
    { key: 'Select an option', value: '' },
    { key: 'Nurse', value: 'ROLE_NURSE' }, //1
    { key: 'Admin', value: 'ROLE_ADMIN' }, //2
  ];

  const validationSchema = Yup.object({
    companyEmail: Yup.string()
      .email('Invalid email format')
      .required('Required!'),
    lName: Yup.string().required('Required!'),
    fName: Yup.string().required('Required!'),
    gender: Yup.string().required('Required!'),
    icNo: Yup.number()
      .integer()
      .typeError('Enter numeric characters only')
      .required('Required!'),
    contactNo: Yup.number()
      .integer()
      .typeError('Enter numeric characters only')
      .required('Required!'),
    personalEmail: Yup.string()
      .email('Invalid email format')
      .required('Required!'),
    role: Yup.string().required('Required!'),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <SideBar />
      <StyledContainer secondaryBackground>
        <InnerContainer>
          <StyledTitle pageTitle>Create Staff Account</StyledTitle>
          <Line />
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <FlexRowContainer>
                  <CardContainer>
                    <StyledTitle subtitle>Staff Details</StyledTitle>
                    <Line />
                    <FormikControl
                      control='input'
                      type='centreId'
                      label='Blood Centre ID'
                      name='centreId'
                      disabled={true}
                    />
                    <FormikControl
                      control='input'
                      type='centreName'
                      label='Blood Centre'
                      name='centreName'
                      disabled={true}
                    />
                    <FormikControl
                      control='input'
                      type='companyEmail'
                      label='Company Email'
                      name='companyEmail'
                      error={errors.companyEmail && touched.companyEmail}
                    />
                    <FlexRowContainer>
                      <FormikControl
                        control='input'
                        type='lName'
                        label='Last Name'
                        name='lName'
                        error={errors.lName && touched.lName}
                      />
                      <FlexColumnContainer paddingLeft70>
                        <FormikControl
                          control='input'
                          type='fName'
                          label='First Name'
                          name='fName'
                          error={errors.fName && touched.fName}
                        />
                      </FlexColumnContainer>
                    </FlexRowContainer>
                    <FormikControl
                      control='select'
                      label='Gender'
                      name='gender'
                      options={genderOptions}
                      error={errors.gender && touched.gender}
                    />
                    <FormikControl
                      control='input'
                      type='icNo'
                      label='IC no.'
                      name='icNo'
                      error={errors.icNo && touched.icNo}
                    />
                  </CardContainer>
                  <FlexColumnContainer paddingLeft70>
                    <CardContainer>
                      <StyledTitle subtitle>System Registration</StyledTitle>
                      <Line />
                      <FormikControl
                        control='select'
                        label='Role'
                        name='role'
                        options={roleOptions}
                        error={errors.role && touched.role}
                      />
                      <StyledTitle subtitle paddingTop25>
                        Contact Information
                      </StyledTitle>
                      <Line />
                      <FormikControl
                        control='input'
                        type='contactNo'
                        label='Contact no.'
                        name='contactNo'
                        error={errors.contactNo && touched.contactNo}
                      />
                      <FormikControl
                        control='input'
                        type='personalEmail'
                        label='Personal Email'
                        name='personalEmail'
                        error={errors.personalEmail && touched.personalEmail}
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

export default CreateStaff;
