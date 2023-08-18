import React, { useState } from "react";
import DefaultLayout from "../../components/layouts/DefaultLayout";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CustomInput from "../../components/customInput/CustomInput";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function SignUp() {
  const [form, setForm] = useState({});
  const [error, setError] = useState();
  const inputs = [
    {
      label: "First name",
      name: "fname",
      type: "text",
      placeholder: "smith",
      require: true,
    },
    {
      label: "Last name",
      name: "lname",
      type: "text",
      placeholder: "sam",
      require: true,
    },
    {
      label: "Phone Number",
      name: "phone",
      type: "number",
      placeholder: "0xxxxxxxxx",
      require: true,
    },
    {
      label: "E-mail",
      name: "e-mail",
      type: "e-mail",
      placeholder: "pkarki@gmail.com",
      require: true,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "*******",
      require: true,
      minLength: 6,
    },
    {
      label: "confirmpassword",
      name: "confirmpassword",
      type: "password",
      placeholder: "*******",
      require: true,
      minLength: 6,
    },
  ];
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    if (form.password !== form.confirmpasswor) {
      toast.error("password didn't match!");
    }
  };
  const handleOnChnage = (e) => {
    const { name, value } = e.target;
    // console.log(name,value);
    setForm({ ...form, [name]: value });
  };
  return (
    <div>
      <DefaultLayout>
        <div className="p-3 border shadow rounded admin-form">
          <Form onSubmit={handleOnSubmit}>
            {inputs.map((input) => (
              <CustomInput onChange={handleOnChnage} {...input} />
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

export default SignUp;
