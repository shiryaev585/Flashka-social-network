import React from "react";
import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/validators";
import { Input } from "../common/FormsControls/FormsControls";
import classes from "./Login.module.scss";
import image from "../../assets/icons/flashka_logo.svg";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={classes.loginForm}>
      <h1 className={classes.loginForm__title}>Login</h1>
      <div>
        <Field
          validate={[required]}
          placeholder={"Login"}
          name={"login"}
          component={Input}
          className={classes.input}
        />
      </div>
      <div>
        <Field
          validate={[required]}
          placeholder={"Password"}
          name={"password"}
          component={Input}
          className={classes.input}
        />
      </div>
      <div className={classes.checkboxWrapper}>
        <Field
          type={"checkbox"}
          name={"rememberMe"}
          component={Input}
          className={classes.input}
        />{" "}
        <p>Remember me</p>
      </div>

      <button className={classes.btn}>Login</button>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div className={classes.wrapper}>
      <img src={image} alt="logo_picture" height="400px" />
      <div>
        <LoginReduxForm onSubmit={onSubmit} />
        <div className={classes.reg}><h3>Here will be registration form</h3></div>
      </div>
    </div>
  );
};

export default Login;
