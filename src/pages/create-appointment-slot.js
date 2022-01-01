import React, { useState, useEffect } from 'react';
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
} from '../components/global-styles';
import FormikControl from '../components/form/formik-control';
import moment from 'moment';
import SideBar from '../components/navigation/side-bar';
import { useUserInfo } from '../components/context/user-info-provider';
import { CreateAppointmentSlotService } from '../components/services/appointment-service';
import { parseDateTime } from '../components/utils';

const CreateAppointmentSlot = () => {
  let { staffInfo } = useUserInfo();
  const bloodCentreId = staffInfo && staffInfo.bloodCentre.bloodCentreId;

  const initialValues = {
    date: '',
    startTime: '',
    endTime: '',
    slot: 1,
  };

  const validationSchema = Yup.object({
    date: Yup.string().required('Required!'),
    startTime: Yup.string().required('Required!'),
    endTime: Yup.string().required('Required!'),
    slot: Yup.number()
      .integer()
      .typeError('Enter numeric characters only')
      .min(1, 'Slot cannot be less than 1')
      .required('Required!'),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    values.startTime = parseDateTime(values.date, values.startTime);
    values.endTime = parseDateTime(values.date, values.endTime);
    CreateAppointmentSlotService(bloodCentreId, values)
      .then(resetForm())
      .catch((e) => console.log(e.message));
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
                <CardContainer>
                  <StyledTitle subtitle>Create Appointment Slot</StyledTitle>
                  <Line />
                  <FormikControl
                    control='input'
                    type='date'
                    label='Date'
                    name='date'
                    min={moment(new Date()).format('YYYY-MM-DD')}
                    error={errors.date && touched.date}
                  />
                  <FormikControl
                    control='input'
                    type='time'
                    label='Start Time'
                    name='startTime'
                    error={errors.startTime && touched.startTime}
                  />
                  <FormikControl
                    control='input'
                    type='time'
                    label='End Time'
                    name='endTime'
                    error={errors.endTime && touched.endTime}
                  />

                  <FormikControl
                    control='input'
                    type='text'
                    label='Number of Available Slots per session'
                    name='slot'
                    error={errors.slot && touched.slot}
                  />
                </CardContainer>
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

export default CreateAppointmentSlot;
