import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Loader from "react-loader-spinner";

function LoadingToRedirect() {
  const [count, setcount] = useState(5);
  let history = useHistory();

  useEffect(() => {
    const interval = setInterval(() => {
      setcount((current) => --current);
    }, 1000);

    // redirect once count is equal to 0
    count === 0 && history.push("/");

    // cleanup

    return () => clearInterval(interval);
  }, [count]);
  return (
    <div className="container p-5 text-center">
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
      <br />
      <p>Redirecting you in {count}</p>
    </div>
  );
}

export default LoadingToRedirect;
