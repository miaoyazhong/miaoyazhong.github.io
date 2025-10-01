// SplashScreen.js
import React, { useEffect, useState } from "react";
// import nyanCatGif from "./assets/images/nyanCat.gif"; // Adjust path if needed

const SplashScreen = ({ duration, onComplete }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onComplete) onComplete(); // Callback to remove splash screen
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onComplete]);

  if (!visible) return null;

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#171c28", // Background color for splash screen
      zIndex: 9999
    }}>
      <img
        src={`${process.env.PUBLIC_URL}/nyan_cat.gif`}
        alt="Nyan Cat Animation"
        style={{
          width: "1500px",                  // Initial size
          height: "auto",
          transform: "translateX(-500px)",
          animation: "stayAndMove 2s ease forwards", // Apply animation
          animationDelay: "1s"              // Delay the start by 1 second
        }}
      />
      <style>{`
        @keyframes stayAndMove {
          0% {
            width: 1500px;
            transform: translate(-500px, 0); // Start centered
          }
          33% {
            width: 1500px;
            transform: translate(-500px, 0); // Stay centered for the first 1 second
          }
          100% {
            width: 250px;
            transform: translate(-44vw, -44vh); // Move to top-left corner and shrink
          }
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;


// // SplashScreen.js
// import React, { useEffect, useState } from "react";
// import nyanCatGif from "./assets/images/nyanCat.gif"; // Adjust the path to your GIF file

// const SplashScreen = ({ duration, onComplete }) => {
//   const [visible, setVisible] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setVisible(false);
//       if (onComplete) onComplete(); // Call the onComplete callback to remove the splash screen
//     }, duration);
//     return () => clearTimeout(timer); // Clear the timer on component unmount
//   }, [duration, onComplete]);

//   if (!visible) return null; // Hide the component when time is up

//   return (
//     <div style={{
//       position: "fixed",
//       top: 0,
//       left: 0,
//       width: "100%",
//       height: "100%",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       backgroundColor: "#06172b", // Background color
//       zIndex: 9999
//     }}>
//     <img
//         src={nyanCatGif}
//         alt="Nyan Cat Animation"
//         style={{
//           width: "1500px",       // Increase the width for a larger GIF size
//           height: "auto",       // Maintain aspect ratio
//           transform: "translateX(-500px)" // Move 50px to the left
//         }}
//       />    
//     </div>
//   );
// };

// export default SplashScreen;
