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
import {
  createAppUserService,
  assignRoleToUserService,
  createDonorProfileService,
} from '../components/services/account-service';
import { genderOptions, bloodGroupOptions } from '../components/utils';

const CreateDonor = () => {
  const initialValues = {
    lName: '',
    fName: '',
    gender: '',
    icNo: '',
    bloodType: '',
    contactNo: '',
    email: '',
  };

  const validationSchema = Yup.object({
    lName: Yup.string().required('Required!'),
    fName: Yup.string().required('Required!'),
    gender: Yup.string().required('Required!'),
    icNo: Yup.string()
      .required()
      .matches(/^[0-9]+$/, 'Must be only digits')
      .min(12, 'Must be exactly 12 digits')
      .max(12, 'Must be exactly 12 digits'),
    bloodType: Yup.string().required('Required!'),
    contactNo: Yup.number()
      .integer()
      .typeError('Enter numeric characters only')
      .required('Required!'),
    email: Yup.string().email('Invalid email format').required('Required!'),
  });

  const onSubmit = (values) => {
    console.log(values);
    //user contactNo is the temporary password created for donors
    createAppUserService(values.icNo, values.contactNo).then(
      setTimeout(() => {
        // set timer to wait for backend to update the app_user_t table which is related to this API
        assignRoleToUserService(values.icNo, 'ROLE_DONOR').then(
          createDonorProfileService(values)
        );
      }, 1000)
    );
  };

  return (
    <>
      <SideBar />
      <StyledContainer secondaryBackground>
        <InnerContainer>
          <StyledTitle pageTitle>Create Donor Account</StyledTitle>
          <Line />
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ errors, touched, resetForm }) => (
              <Form>
                <FlexRowContainer>
                  <CardContainer>
                    <StyledTitle subtitle>Personal Information</StyledTitle>
                    <Line />
                    <FormikControl
                      control='input'
                      type='lName'
                      label='Last Name'
                      name='lName'
                      error={errors.lName && touched.lName}
                    />
                    <FormikControl
                      control='input'
                      type='fName'
                      label='First Name'
                      name='fName'
                      error={errors.fName && touched.fName}
                    />
                    <FormikControl
                      control='input'
                      type='icNo'
                      label='IC no.'
                      name='icNo'
                      error={errors.icNo && touched.icNo}
                    />
                    <FormikControl
                      control='select'
                      label='Gender'
                      name='gender'
                      options={genderOptions}
                      error={errors.gender && touched.gender}
                    />
                  </CardContainer>
                  <FlexColumnContainer paddingLeft70>
                    <CardContainer>
                      <StyledTitle subtitle>Blood Detail</StyledTitle>
                      <Line />
                      <FormikControl
                        control='select'
                        label='Blood Group'
                        name='bloodType'
                        options={bloodGroupOptions}
                        error={errors.bloodType && touched.bloodType}
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
                        type='email'
                        label='Email Address'
                        name='email'
                        error={errors.email && touched.email}
                      />
                    </CardContainer>
                  </FlexColumnContainer>
                </FlexRowContainer>
                <FlexRowContainer justifyContentRight>
                  <SecondaryButton marginRight30 onClick={() => resetForm()}>
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

export default CreateDonor;
