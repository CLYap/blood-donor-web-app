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

const Appointment = () => {
  const [slots, setSlots] = useState([]);

  const createSlots = () => {
    let startTime = moment('06:00', 'HH:mm');
    let endTime = moment('22:00', 'HH:mm');
    if (endTime.isBefore(startTime)) {
      endTime.add(1, 'day');
    }
    let arr = [];
    while (startTime <= endTime) {
      arr.push(
        new moment(startTime).format('HH:mm') +
          ' - ' +
          new moment(startTime.add(30, 'minutes')).format('HH:mm')
      );
    }
    let options = arr.map((option) => {
      return { key: option, value: option };
    });
    setSlots(options);
  };

  useEffect(() => {
    createSlots();
  }, []);

  const center = {
    centreId: '1',
    centreName: 'Pantai Hospital',
  };

  const initialValues = {
    centreId: center.centreId,
    centreName: center.centreName,
    date: '',
    availableSlot: 5,
    timeSlots: [],
  };

  const validationSchema = Yup.object({
    date: Yup.string().required('Required!'),
    availableSlot: Yup.number()
      .integer()
      .typeError('Enter numeric characters only')
      .min(1, 'Slot cannot be less than 1')
      .required('Required!'),
    timeSlots: Yup.array().required('Required!'),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <StyledContainer secondaryBackground>
      <InnerContainer>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched }) => (
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
                  type='availableSlot'
                  label='Number of Available Slots per session'
                  name='availableSlot'
                  error={errors.availableSlot && touched.availableSlot}
                />
                <FormikControl
                  control='checkbox'
                  label='Time Slots'
                  name='timeSlots'
                  options={slots}
                  error={errors.timeSlots && touched.timeSlots}
                />
              </CardContainer>
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
  );
};

export default Appointment;
