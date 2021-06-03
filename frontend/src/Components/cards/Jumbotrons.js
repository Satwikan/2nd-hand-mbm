import React from "react";
import Typewriter from "typewriter-effect";
const CONSTANTS = require("../../cssVariables").default;

const Jumbotron = () => {
  const JumbotronStyle = {
    fontWeight: "200",
    color: CONSTANTS.text,
  };
  return (
    <div style={JumbotronStyle}>
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
