import { Field, FieldProps } from 'formik';

import { TextField, TextFieldProps } from '@mui/material';

type FTextFieldProps = TextFieldProps & {
  label: string;
  name: string;
  autoComplete?: 'off' | 'on';
};

export const FTextField: React.FC<FTextFieldProps> = ({
  label,
  name,
  autoComplete = 'off',
  ...rest
}) => {
  return (
    <Field name={name}>
      {({ field, form: { errors, touched } }: FieldProps) => (
        <TextField
          {...field}
          {...rest}
          label={label}
          id={name}
          error={!!errors[name] && !!touched[name]}
          helperText={!!touched[name] && errors[name]?.toString()}
          autoComplete={autoComplete}
          value={field.value}
        />
      )}
    </Field>
  );
};
