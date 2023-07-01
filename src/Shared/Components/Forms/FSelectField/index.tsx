import { Field, FieldProps } from 'formik';

import {
  FormControl,
  InputLabel,
  FormHelperText,
  Select,
  MenuItem,
  SelectProps,
} from '@mui/material';

type FSelectFieldProps = SelectProps & {
  label: string;
  name: string;
  data: { value: number | string; name: number | string }[];
};

export const FSelectField: React.FC<FSelectFieldProps> = ({ label, name, data, ...rest }) => {
  return (
    <Field name={name}>
      {({ field, form: { errors, touched } }: FieldProps) => (
        <FormControl fullWidth error={!!errors[name] && !!touched[name]}>
          <InputLabel id={name}>{label}</InputLabel>
          <Select {...field} {...rest} id={name} labelId={label} label={label} value={field.value}>
            {data.map((item, key) => (
              <MenuItem key={key} value={item.value}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>{!!touched[name] && errors[name]?.toString()}</FormHelperText>
        </FormControl>
      )}
    </Field>
  );
};
