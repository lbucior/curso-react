import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useAuthUIContext } from "../../providers/auth/AuthUIContext";
import { Field, Form, Formik } from "formik";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import CardHeader from "react-bootstrap/CardHeader";
import CardBody from "react-bootstrap/CardBody";
import Row from "react-bootstrap/Row";
import FormLabel from "react-bootstrap/FormLabel";
import Button from "react-bootstrap/Button";
import { Col, FormControl } from "react-bootstrap";
import * as Yup from "yup";

// Validation schema
const loginFormSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email("E-mail não é válido.")
    .required("Campo obrigatório."),
  password: Yup.string()
    .trim()
    .min(8, "No mínimo 8 caracteres.")
    .required("Campo obrigatório."),
});

const Login = () => {
  const authUIContext = useAuthUIContext();
  const authUIProps = useMemo(
    () => ({
      loginUserEmail: authUIContext.loginUserEmail,
    }),
    [authUIContext],
  );

  return (
    <Container className="" fluid="md">
      <Card>
        <CardHeader className="">
          <h2 className="text-center">Acessar Conta</h2>
          <h5 className="text-center">
            Bem-vindo(a) ao Tiander.
            <br />
            Por favor, digite seu e-mail e senha.
          </h5>
        </CardHeader>
        <CardBody className="p-4">
          <Formik
            enableReinitialize
            validateOnBlur
            validateOnChange
            validationSchema={loginFormSchema}
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={(values, { setSubmitting }) => {
              authUIProps
                .loginUserEmail(values)
                .then(() => {
                  // Close all
                })
                .catch((err) => {
                  setSubmitting(false);
                });
            }}
          >
            {({ handleSubmit, errors, touched, isSubmitting }) => (
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col xs={12} sm={12} md={12} className="mb-3">
                    <FormLabel htmlFor="email">E-mail</FormLabel>
                    <FormControl
                      as={Field}
                      id="email"
                      name="email"
                      type="email"
                      size="lg"
                      variant="outline"
                      isValid={!(touched.email && errors.email)}
                      disabled={isSubmitting}
                    />
                    {errors.email && <p>{errors.email}</p>}
                  </Col>

                  <Col xs={12} sm={12} md={12} className="mb-3">
                    <FormLabel htmlFor="email">Senha</FormLabel>
                    <FormControl
                      as={Field}
                      id="password"
                      name="password"
                      type="password"
                      size="lg"
                      variant="outline"
                      isValid={!(touched.email && errors.email)}
                      disabled={isSubmitting}
                    />
                    {errors.email && <p>{errors.email}</p>}
                  </Col>

                  <Col
                    xs={12}
                    sm={12}
                    md={12}
                    className="d-flex justify-content-center align-items-center"
                  >
                    <div className="mt-1">
                      <Button
                        type="submit"
                        size="lg"
                        variant="primary"
                        disabled={isSubmitting}
                      >
                        Entrar
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Form>
            )}
          </Formik>

          <div className="d-flex justify-content-center align-items-center mt-md-5">
            <Link to="/auth/register">Não tem uma conta?</Link>
          </div>
        </CardBody>
      </Card>
    </Container>
  );
};

export default Login;
