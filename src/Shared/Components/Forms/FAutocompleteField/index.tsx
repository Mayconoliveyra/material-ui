import { Field, FieldProps } from 'formik';

import { TextField, Autocomplete } from '@mui/material';

type FAutocompleteFieldProps = {
  label: string;
  name: string;
};

const options = ['PB', 'RJ', 'SP', 'GO'];

export const FAutocompleteField: React.FC<FAutocompleteFieldProps> = ({ label, name }) => {
  return (
    <Field name={name}>
      {({ field, form: { errors, touched, setFieldValue } }: FieldProps) => {
        /*   console.log(field); */
        return (
          <Autocomplete
            disablePortal
            id={name}
            options={options}
            fullWidth
            renderInput={(params) => {
              console.log(params.inputProps.value ?? field.value);
              return (
                <TextField
                  {...params}
                  error={!!errors[name] && !!touched[name]}
                  helperText={!!touched[name] && errors[name]?.toString()}
                  label={label}
                  name={name}
                  value={params.inputProps.value ?? field.value}
                  onBlur={() => setFieldValue(name, params.inputProps.value)}
                />
              );
            }}
          />
        );
      }}
    </Field>
  );
};
