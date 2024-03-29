import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
  StyledContainer,
  LeftContainer,
  RightContainer,
  InnerContainer,
  StyledTitle,
  StyledButton,
  StyledText,
  TextLink,
} from '../components/global-styles';
import FormikControl from '../components/form/formik-control';
import { useUserInfo } from '../components/context/user-info-provider';
import { Link } from 'react-router-dom';

const Login = () => {
  let { loginUser } = useUserInfo();

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required'),
  });

  const onSubmit = (values) => {
    loginUser(values);
  };

  return (
    <StyledContainer textAlignEnd>
      <LeftContainer img></LeftContainer>
      <RightContainer>
        <InnerContainer>
          <StyledTitle pageTitle>Blood Donor Management System</StyledTitle>
          <StyledTitle subtitle>Staff Login</StyledTitle>
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
                <Link to='/password/reset'>
                  <TextLink>Reset Your Password</TextLink>
                </Link>
                <StyledButton type='submit'>
                  <StyledText primaryText>Login</StyledText>
                </StyledButton>
              </Form>
            )}
          </Formik>
        </InnerContainer>
      </RightContainer>
    </StyledContainer>
  );
};

export default Login;
