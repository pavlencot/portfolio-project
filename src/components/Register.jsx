import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { emailValidator, passwordValidator, confirmPasswordValidator, formValidator } from './validations/validators';

const Register = () => {
  const t = useTranslation();

  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [emailState, setEmailState] = useState({
    state: false, 
    message: ""
  });

  const [passwordState, setPasswordState] = useState({
    state: false, 
    message: ""
  });

  const [confirmPasswordState, setConfirmPasswordState] = useState({
    state: false, 
    message: ""
  });

  const onUpdateEmail = e => {
    const nextFormEmailState = {
      ...form,
      [e.target.name]: e.target.value,
    }
    const nextEmailState = emailValidator(form.email, emailState.message);
    setForm(nextFormEmailState);
    setEmailState(nextEmailState);

    enableButton();
  }

  const onUpdatePassword = e => {
    const nextFormPasswordState = {
      ...form,
      [e.target.name]: e.target.value,
    }
    const nextPasswordState = passwordValidator(form.password, passwordState.state, passwordState.message)
    setForm(nextFormPasswordState);
    setPasswordState(nextPasswordState);

    enableButton();
  }

  const onUpdateConfirmPassword = e => {
    const nextFormConfirmPasswordState = {
      ...form,
      [e.target.name]: e.target.value,
    }
    const nextConfirmPasswordState = confirmPasswordValidator(form.confirmPassword, form, confirmPasswordState.message);
    setForm(nextFormConfirmPasswordState);
    setConfirmPasswordState(nextConfirmPasswordState);
    console.log(form.password + "--" + form.confirmPassword);
    console.log(confirmPasswordState.state);

    enableButton();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emailState.state+ "" + passwordState.state + confirmPasswordState.state)
      alert(JSON.stringify(form, null, 2));
  }

  const enableButton = () => {
    if (formValidator(emailState.state, passwordState.state, confirmPasswordState.state)) {
      document.getElementById("disabled").disabled = false;
    } else {
      document.getElementById("disabled").disabled = true;
    }
  }

  return (
    <div className='registerContainer'>
      <form className='register' onSubmit={handleSubmit}>
        <div className="topRegister">
          <input type="email" 
          name="email"
          placeholder='Email or Username'
          onChange={onUpdateEmail}
          value={form.email}
          />
          <div>
            {emailState.message !== "" && <div
              className='warning'
              >{t(emailState.message)}
              </div>}
          </div>
          <input type="password" 
          name='password'
          placeholder='Password'
          onChange={onUpdatePassword}
          value={form.password}
          />
          <div>
            {<div
              className='warning'
              >{t(passwordState.message)}
              </div>}
          </div>
          <input type="password" 
          name='confirmPassword'
          placeholder='Confirm Password'
          onChange={onUpdateConfirmPassword}
          value={form.confirmPassword}
          />
            {<div
              className='warning'
              >{t(confirmPasswordState.message)}
              </div>}
        </div>
        <div className="bottomRegister">
          <Link to="/">{t('back')}</Link>
          <button id="disabled" type="submit" to="personal_page" disabled>{t('signup')}</button>
        </div>
      </form>
    </div>
  )
}

export default Register
