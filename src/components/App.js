import { useEffect, useState } from 'react';
import AppRouter from 'components/Router';
import { authService } from 'fbase';
import { onAuthStateChanged } from 'firebase/auth';
import Navigation from './Navigation';

function App() {
  const auth = authService;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [init, setInit] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  });
  return (
    <>
      {init ? (
        <AppRouter isLoggedIn={isLoggedIn} />
      ) : (
        <span>잠시만 기다려주세요.</span>
      )}
      <footer>&copy; Nwitter {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;
