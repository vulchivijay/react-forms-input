import { useState } from "react";

export default function LoginFormWithValidations() {
  const [singIn, setSingIn] = useState([{
    email: '',
    password: '',
  }]);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validation = (identifier, value) => {
    setEmailError('');
    if (identifier === 'email') {
      const check = value.includes('@');
      if (!check) {
        setEmailError('Please enter valid email address!');
      }
      else {
        setEmailError('');
      }
    }
    if (identifier === 'password') {
      const check = value.length > 7 ? true : false;
      if (!check) {
        setPasswordError('Please enter valid password!');
      }
      else {
        setPasswordError('');
      }
    }
  }

  const handleEmailChange = (identifier, value) => {
    event.preventDefault();
    validation(identifier, value);
    return setSingIn(prev => ({
      ...prev,
      [identifier]: value,
    }));
  }

  const handlePasswordChange = (identifier, value) => {
    event.preventDefault();
    validation(identifier, value);
    return setSingIn(prev => ({
      ...prev,
      [identifier]: value,
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('email, password', singIn.email, singIn.password);
  }

  const handleReset = (event) => {
    event.preventDefault();
    setSingIn([{
      email: '',
      password: '',
    }])
    setEmailError('');
    setPasswordError('');
  }

  return (
    <form>
      <h2>Login - With useState() Hook - With Validations.</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" onChange={() => handleEmailChange('email', event.target.value)} />
          <div className="control-error">{emailError && <p>{emailError}</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" onChange={(event) => handlePasswordChange('password', event.target.value)} />
          <div className="control-error">{passwordError && <p>{passwordError}</p>}</div>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat" onClick={handleReset}>Reset</button>
        <button className="button" onClick={handleSubmit}>Login</button>
      </p>
    </form>
  );
}
