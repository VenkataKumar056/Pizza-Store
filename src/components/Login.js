import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./CSS/Login.css"; 

function Login() {
  
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const onSubmit = (values) => {
    console.log("Form data", values);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <Field type="text" id="username" name="username" className="form-control" placeholder="Enter Username" />
            <ErrorMessage name="username" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Field type="password" id="password" name="password" className="form-control"placeholder="Enter password" />
            <ErrorMessage name="password" component="div" className="error-message" />
          </div>

          <button type="submit" className="btn btn-success rounded-pill px-3">Login</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
