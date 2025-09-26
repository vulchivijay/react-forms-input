import Header from './components/Header.jsx';
import LoginFormWithState from './components/LoginFormWithState.jsx';
import LoginFormWithRef from './components/LoginFormWithRef.jsx';
import Signup from './components/Signup.jsx';
import LoginFormWithValidations from './components/LoginFormWithValidations.jsx';
import LoginFormWithValidationOnBlur from './components/LoginFromWithValidationOnBlur.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        {/* <LoginFormWithState />
        <LoginFormWithRef />
        <Signup />
        <LoginFormWithValidations /> */}
        <LoginFormWithValidationOnBlur />
      </main>
    </>
  );
}

export default App;
