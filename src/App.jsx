import Header from './components/Header.jsx';
import LoginFormWithState from './components/LoginFormWithState.jsx';
import LoginFormWithRef from './components/LoginFormWithRef.jsx';
import Signup from './components/Signup.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <LoginFormWithState />
        <LoginFormWithRef />
        <Signup />
      </main>
    </>
  );
}

export default App;
