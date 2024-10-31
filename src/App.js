// import React from "react";
import React, { useState } from "react";
import "./App.scss";
import Main from "./containers/Main";
import SplashScreen from "./SplashScreen";
import { splashScreen } from "./portfolio";
const App = () => {
  const [splashComplete, setSplashComplete] = useState(false);

  return (
    <>
      {/* Show the GIF-based splash screen if it's enabled and hasn't completed */}
      {!splashComplete && (
        <SplashScreen duration={splashScreen.duration} onComplete={() => setSplashComplete(true)} />
      )}
      {/* Show main content immediately after the GIF splash screen finishes */}
      {splashComplete && <Main />}
    </>
  );
};

// function App() {
//   return (
//     <div>
//       <Main />
//     </div>
//   );
// }

export default App;
