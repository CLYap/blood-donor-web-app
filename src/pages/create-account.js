import React, { useState } from 'react';
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
} from '../components/global-styles';
import FormikControl from '../components/form/formik-control';

const CreateAccount = () => {
  const [isStaff, setStaff] = useState(false);
  const [isDonor, setDonor] = useState(false);

  const initialDonorValues = {
    email: '',
    password: '',
  };

  return (
    <StyledContainer>
      <h1>CreateAccount</h1>
    </StyledContainer>
  );
};

export default CreateAccount;
