import "../styles/globals.css";

import fbase, { FirebaseContext } from "../firebase/index";
import useAuth from "../hooks/useAuth";

function MyApp({ Component, pageProps }) {
  const user = useAuth();

  return (
    <FirebaseContext.Provider value={{ fbase, user }}>
      <Component {...pageProps} />
    </FirebaseContext.Provider>
  );
}

export default MyApp;
