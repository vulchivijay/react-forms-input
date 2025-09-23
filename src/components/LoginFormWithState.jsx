import { useState } from "react";

export default function LoginFormWithState() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    event.preventDefault();
    return setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    event.preventDefault();
    return setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('email, password'.email, password);
  }

  const handleReset = (event) => {
    event.preventDefault();
    setEmail('');
    setPassword('');
    console.log('email, password', email, password);
  }

  return (
    <form>
      <h2>Login - With useState() Hook</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" value={email} onChange={handleEmailChange} />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" value={password} onChange={handlePasswordChange} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat" onClick={handleReset}>Reset</button>
        <button className="button" onClick={handleSubmit}>Login</button>
      </p>
    </form>
  );
}
