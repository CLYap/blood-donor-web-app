import React from 'react';
import FormikControl from '../components/form/formik-control';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
  StyledContainer,
  InnerContainer,
  StyledTitle,
  StyledButton,
  StyledText,
} from '../components/global-styles';
import { resetPasswordService } from '../components/services/account-service';

const ResetPassword = () => {
  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password do not match!')
      .required('Required'),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    resetPasswordService(values);
  };

  return (
    <StyledContainer>
      <InnerContainer>
        <StyledTitle pageTitle>Blood Donor Management System</StyledTitle>
        <StyledTitle subtitle>Reset Password</StyledTitle>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <FormikControl
                control='input'
                type='email'
                label='Email'
                name='email'
                error={errors.email && touched.email}
              />
              <FormikControl
                control='input'
                type='password'
                label='Password'
                name='password'
                error={errors.password && touched.password}
              />
              <FormikControl
                control='input'
                type='password'
                label='Confirm Password'
                name='confirmPassword'
                error={errors.confirmPassword && touched.confirmPassword}
              />
              <StyledButton type='submit'>
                <StyledText primaryText>Submit</StyledText>
              </StyledButton>
            </Form>
          )}
        </Formik>
      </InnerContainer>
    </StyledContainer>
  );
};

export default ResetPassword;
