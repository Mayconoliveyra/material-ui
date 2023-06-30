<!-- Formik com props -->

<Formik
... >
{(props: FormikProps<InitialValuesProps>) => {
const { touched, errors, isSubmitting } = props;
return (

<Form>
<FTextField label="Nome" name="name" placeholder="Nome" />
<FTextField label="E-mail" name="email" placeholder="E-mail" />
<FTextField label="Cidade" name="id_city" placeholder="Cidade" type="number" />
</Form>
);
}}
</Formik>
