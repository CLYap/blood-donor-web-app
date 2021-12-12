import React from 'react';
import {
  InputFieldContainer,
  StyledLabel,
  StyledTextInput,
} from './form.styles';
import { StyledText } from '../global-styles';
import { ErrorMessage } from 'formik';

const FormikControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case 'input':
      return <Input {...rest} />;
    case 'textarea':
    case 'select':
      return <Select {...rest} />;
    case 'radio':
    case 'checkbox':
    case 'date':
    default:
      return null;
  }
};

const Input = (props) => {
  const { label, name, error, disabled, ...rest } = props;
  return (
    <InputFieldContainer>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledTextInput
        errors={error ? 1 : 0}
        disabled={disabled ? 1 : 0}
        id={name}
        name={name}
        {...rest}
      />
      <ErrorMessage name={name}>
        {(msg) => <StyledText errorText>{msg}</StyledText>}
      </ErrorMessage>
    </InputFieldContainer>
  );
};

const Select = (props) => {
  const { label, name, options, error, ...rest } = props;

  return (
    <InputFieldContainer>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledTextInput
        select={1}
        errors={error ? 1 : 0}
        component='select'
        id={name}
        name={name}
        {...rest}
      >
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </StyledTextInput>
      <ErrorMessage name={name}>
        {(msg) => <StyledText errorText>{msg}</StyledText>}
      </ErrorMessage>
    </InputFieldContainer>
  );
};

export default FormikControl;
