import React from 'react';
import {
  InputFieldContainer,
  StyledLabel,
  StyledTextInput,
  CheckboxLabel,
} from './form.styles';
import {
  StyledText,
  FlexRowContainer,
  ColumnThreeContainer,
} from '../global-styles';
import { ErrorMessage } from 'formik';

const FormikControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case 'input':
      return <Input {...rest} />;
    case 'select':
      return <Select {...rest} />;
    case 'checkbox':
      return <Checkbox {...rest} />;
    default:
      return null;
  }
};

const Input = (props) => {
  const { label, name, error, ...rest } = props;
  return (
    <InputFieldContainer>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledTextInput errors={error ? 1 : 0} id={name} name={name} {...rest} />
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

const Checkbox = (props) => {
  const { label, name, options, error, ...rest } = props;
  return (
    <InputFieldContainer>
      <CheckboxLabel htmlFor={name}>{label}</CheckboxLabel>
      <ColumnThreeContainer>
        <StyledTextInput
          checkbox={1}
          errors={error ? 1 : 0}
          name={name}
          {...rest}
        >
          {({ field }) => {
            return options.map((option) => {
              return (
                <FlexRowContainer key={option.key}>
                  <input
                    type='checkbox'
                    id={option.value}
                    {...field}
                    value={option.value}
                  />
                  <label htmlFor={option.value}>{option.key}</label>
                </FlexRowContainer>
              );
            });
          }}
        </StyledTextInput>
      </ColumnThreeContainer>
      <ErrorMessage name={name}>
        {(msg) => <StyledText errorText>{msg}</StyledText>}
      </ErrorMessage>
    </InputFieldContainer>
  );
};

export default FormikControl;
