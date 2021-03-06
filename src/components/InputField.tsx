import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Textarea,
} from '@chakra-ui/react';
import { useField } from 'formik';
import React, { InputHTMLAttributes } from 'react';

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
  textArea?: boolean
};

// double !!
// return string to boolean
// '' = false
// 'this is a string' = true

export const InputField: React.FC<InputFieldProps> = ({
  label,
  size: _,
  textArea,
  ...props
}) => {
  const [field, { error }] = useField(props);
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      {textArea ? <Textarea {...field}
        {...props}
        id={field.name}
        placeholder={props.placeholder}/> : <Input
        {...field}
        {...props}
        id={field.name}
        placeholder={props.placeholder}
      />}
      {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    </FormControl>
  );
};
