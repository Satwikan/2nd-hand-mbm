import React from "react";
import Typewriter from "typewriter-effect";
import "./Jumbotrons.css"

const Jumbotron = () => {
  const JumbotronStyle = {
    // fontWeight: "100",
    //  color: CONSTANTS.text,
  };
  return (
    <div id="jumbo" style={
      {"background-color": "#F3B05A","fontFamily":"cursive","fontWeight":"100"}
    
    }  >
      <Typewriter
        options={{
          strings: [
            "Initiative by Students for Students",
            "Buy and Sell all needed material here",
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default Jumbotron;
