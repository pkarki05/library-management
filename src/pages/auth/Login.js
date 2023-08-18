import React from "react";
import CustomInput from "../../components/customInput/CustomInput";
import DefaultLayout from "../../components/layouts/DefaultLayout";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Login() {
  const inputs = [
    {
      label: "E-mail",
      name: "email",
      type: "email",
      placeholder: "type your email",
    },

    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "*******",
    },
  ];
  return (
    <div>
      <DefaultLayout>
        <div className="p-3 border shadow rounded admin-form">
          <Form>
            {inputs.map((input) => (
              <CustomInput {...input} />
            ))}

            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form>{" "}
        </div>
      </DefaultLayout>
    </div>
  );
}

export default Login;
