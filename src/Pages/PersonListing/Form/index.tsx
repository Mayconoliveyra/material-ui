import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { DetailTools } from '../../../Shared/Components/DetailTools';
import { FTextField } from '../../../Shared/Components/Forms/FTextField';

import { LayoutBasePag } from '../../../Shared/Layouts/LayoutBasePag';

import { PersonService } from '../../../Shared/Services/Api/Person';

import { Formik, FormikProps, Form } from 'formik';
import * as yup from 'yup';
import { pt } from 'yup-locale-pt';

import { Box, Paper, LinearProgress, Grid, Typography } from '@mui/material';

const prefixNavigate = '/pessoas';
const prefixNew: 'nova' | 'novo' = 'nova';

type InitialValuesProps = {
  name: string;
  email: string;
  id_city: number;
};

const initialValues: InitialValuesProps = {
  name: '',
  email: '',
  id_city: 0,
};
yup.setLocale(pt);
const scheme = yup.object().shape({
  name: yup.string().required().label('Nome'),
  email: yup.string().required().label('E-mail'),
  id_city: yup.number().required().label('Cidade'),
});

export const PersonForm: React.FC = () => {
  const { id = prefixNew } = useParams<'id'>();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');

  const formRef = useRef<FormikProps<InitialValuesProps>>(null);

  const handleDelete = (id: number) => {
    if (confirm('Realmente deseja apagar?')) {
      PersonService.deleteById(id).then((result) => {
        if (result instanceof Error) {
          alert(result.message);
          return;
        } else {
          alert('Registro apagado com sucesso!');
          navigate(prefixNavigate);
        }
      });
    }
  };

  useEffect(() => {
    if (id !== prefixNew) {
      setIsLoading(true);
      PersonService.getById(Number(id)).then((result) => {
        setIsLoading(false);

        if (result instanceof Error) {
          alert(result.message);
          navigate(prefixNavigate);
        } else {
          setName(result.name);
          formRef.current?.setValues(result);
        }
      });
    }
  }, [id]);

  return (
    <LayoutBasePag
      title={id === prefixNew ? 'Cadastrar pessoa' : name}
      toolbar={
        <DetailTools
          showBtnSaveClose
          textBtnNew={prefixNew}
          showBtnNew={id !== prefixNew}
          showBtnDelete={id !== prefixNew}
          onClickBtnNew={() => navigate(`${prefixNavigate}/detalhe/${prefixNew}`)}
          onClickBtnSave={() => formRef.current?.submitForm()}
          onClickBtnDelete={() => handleDelete(Number(id))}
          onClickBtnSaveClose={() => formRef.current?.submitForm()}
          onClickBtnBack={() => navigate(`${prefixNavigate}`)}
          skeletonBtnSave={isLoading}
          skeletonBtnSaveClose={isLoading}
          skeletonBtnDelete={isLoading}
        />
      }
    >
      <Formik
        innerRef={formRef}
        validationSchema={scheme}
        initialValues={initialValues}
        validateOnBlur={false}
        onSubmit={async (values) => {
          setIsLoading(true);
          if (id === prefixNew) {
            PersonService.create(values).then((result) => {
              setIsLoading(false);
              if (result instanceof Error) {
                alert(result.message);
              } else {
                navigate(`${prefixNavigate}/detalhe/${result}`);
              }
            });
          } else {
            PersonService.updateById(Number(id), values).then((result) => {
              setIsLoading(false);
              if (result instanceof Error) {
                alert(result.message);
              } else {
                navigate(prefixNavigate);
              }
            });
          }
        }}
      >
        {() => {
          return (
            <Form>
              <Box
                margin={1}
                display="flex"
                flexDirection="column"
                component={Paper}
                variant="outlined"
              >
                <Grid container padding={2} spacing={2}>
                  {isLoading && (
                    <Grid item sm={12}>
                      <LinearProgress variant="indeterminate" />
                    </Grid>
                  )}
                  <Grid item sm={12}>
                    <Typography variant="h6">Geral</Typography>
                  </Grid>

                  <Grid item xs={12} md={6} xl={4}>
                    <FTextField label="Nome" name="name" disabled={isLoading} />
                  </Grid>
                  <Grid item xs={12} md={6} xl={4}>
                    <FTextField label="E-mail" name="email" disabled={isLoading} />
                  </Grid>
                  <Grid item xs={12} md={6} xl={4}>
                    <FTextField label="Cidade" name="id_city" type="number" disabled={isLoading} />
                  </Grid>
                </Grid>
              </Box>
            </Form>
          );
        }}
      </Formik>
    </LayoutBasePag>
  );
};
