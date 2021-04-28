import React from 'react'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { required } from '../../utils/validators'
import { Input } from '../common/FormsControls/FormsControls'
import image from '../../assets/icons/flashka_logo.svg'
import { login } from '../../store/authReducer'
import classes from './Login.module.scss'
import loginClasses from '../common/FormsControls/FormsControls.module.scss'

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit} className={classes.loginForm}>
      <h2 className={classes.loginForm__title}>Login</h2>
        <Field
          validate={[required]}
          type={'email'}
          placeholder={'Email'}
          name={'email'}
          component={Input}
          className={classes.input}
        />
        <Field
          validate={[required]}
          type={'password'}
          placeholder={'Password'}
          name={'password'}
          component={Input}
          className={classes.input}
        />
      <div className={classes.checkboxWrapper}>
        <Field
          type={'checkbox'}
          name={'rememberMe'}
          component={Input}
          className={classes.inputCheckbox}
        />{' '}
        <p>Remember me</p>
      </div>
      {error && <div className={loginClasses.formSummaryError}>{error}</div>}
      <button className={classes.btn}>Login</button>
    </form>
  )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe)
  }

  if (props.isAuth) {
    return <Redirect to={'/profile'} />
  }

  return (
    <div className={classes.wrapper}>
      <img src={image} alt='logo_picture' height='400px' />
      <div>
        <LoginReduxForm onSubmit={onSubmit} />
        <div className={classes.reg}>
          <a href='https://social-network.samuraijs.com/' className={classes.reg__link} rel='noreferrer' target='_blank'>
            Sing up
          </a>
          <p>
            or use <strong>free@samuraijs.com</strong> as test email and{' '}
            <strong>free</strong> as test password
          </p>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, { login })(Login)
