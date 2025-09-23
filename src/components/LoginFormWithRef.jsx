import { useRef } from "react";

export default function LoginFormWithRef() {
  const email = useRef();
  const password = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;
    console.log('email, password', enteredEmail, enteredPassword);
  }

  const handleReset = (event) => {
    event.preventDefault();
    email.current.value = ''
    password.current.value = '';
    console.log('email, password', email, password);
  }

  return (
    <form>
      <h2>Login - With useRef() Hook</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" ref={email} />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" ref={password} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat" onClick={handleReset}>Reset</button>
        <button className="button" onClick={handleSubmit}>Login</button>
      </p>
    </form>
  );
}
