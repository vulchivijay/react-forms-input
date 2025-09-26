import { useState } from "react";

export default function LoginFormWithValidationOnBlur() {
  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: '',
  });

  const [isDidEdit, setIsDidEdit] = useState({
    email: false,
    password: false,
  });

  const isEmailValid = isDidEdit.email && !enteredValues.email.includes('@');

  const handleEmailBlur = (identifier) => {
    setIsDidEdit(prevEdit => ({
      ...prevEdit,
      [identifier]: true,
    }));
  };

  const handlePasswordBlur = (identifier) => {
    setIsDidEdit(prev => ({
      ...prev,
      [identifier]: true,
    }));
  };

  const handleEmailChange = (identifier, event, value) => {
    event.preventDefault();
    setEnteredValues(prev => ({
      ...prev,
      [identifier]: value,
    }));
    setIsDidEdit(prevEdit => ({
      ...prevEdit,
      [identifier]: false,
    }));
  }

  const handlePasswordChange = (identifier, event, value) => {
    event.preventDefault();
    setEnteredValues(prev => ({
      ...prev,
      [identifier]: value,
    }));
    setIsDidEdit(prevEdit => ({
      ...prevEdit,
      [identifier]: false,
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email, Password', enteredValues);
  }

  const handleReset = (event) => {
    event.preventDefault();
    console.log('Reset', enteredValues);
  }

  return (
    <form>
      <h2>Login - With useState() Hook - With Validations.</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            onBlur={() => { handleEmailBlur('email'); }}
            onChange={(event) => handleEmailChange('email', event, event.target.value)}
          />
          <div className="control-error">{isEmailValid && <p>Please enter valid email address!</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            onBlur={() => { handlePasswordBlur('password'); }}
            onChange={(event) => handlePasswordChange('password', event, event.target.value)}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat" onClick={handleReset}>Reset</button>
        <button className="button" onClick={handleSubmit}>Login</button>
      </p>
    </form>
  );
}
