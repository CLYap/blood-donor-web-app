import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
  StyledContainer,
  InnerContainer,
  StyledTitle,
  StyledButton,
  StyledText,
  CardContainer,
  FlexRowContainer,
  SecondaryButton,
} from '../components/global-styles';
import SideBar from '../components/navigation/side-bar';
import FormikControl from '../components/form/formik-control';
import { useNavigate } from 'react-router-dom';
import { getDonorService } from '../components/services/donation-service';

const SearchDonor = () => {
  const navigate = useNavigate();

  const initialValues = { icNo: '' };
  const validationSchema = Yup.object({
    icNo: Yup.string()
      .required()
      .matches(/^[0-9]+$/, 'Must be only digits')
      .min(12, 'Must be exactly 12 digits')
      .max(12, 'Must be exactly 12 digits'),
  });

  const onSubmit = (values) => {
    getDonorService(values.icNo).then((data) => {
      if (data !== undefined && data !== null) {
        const donorInfo = data.data;
        navigate(
          '/donor/' +
            donorInfo.donorId +
            '_' +
            donorInfo.fName +
            '-' +
            donorInfo.lName,
          { state: donorInfo }
        );
      }
    });
  };
  return (
    <>
      <SideBar />
      <StyledContainer secondaryBackground>
        <InnerContainer>
          <StyledTitle pageTitle>Search Donor</StyledTitle>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ errors, touched, resetForm }) => (
              <Form>
                <CardContainer>
                  <FormikControl
                    control='input'
                    type='icNo'
                    label='Donor IC No'
                    name='icNo'
                    placeholder='Search By IC No.'
                    error={errors.icNo && touched.icNo}
                  />
                  <FlexRowContainer justifyContentRight>
                    <SecondaryButton marginRight30 onClick={() => resetForm()}>
                      <StyledText tertiaryText>Cancel</StyledText>
                    </SecondaryButton>
                    <StyledButton type='submit'>
                      <StyledText primaryText>Search</StyledText>
                    </StyledButton>
                  </FlexRowContainer>
                </CardContainer>
              </Form>
            )}
          </Formik>
        </InnerContainer>
      </StyledContainer>
    </>
  );
};

export default SearchDonor;
