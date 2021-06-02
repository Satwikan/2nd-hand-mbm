import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./App.css";

import Header from "./Components/Header"; //Include Heder
import Footer from "./Components/Footer"; //Include Footer
import Routes from "./Routes";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes />
      <br />
      <Footer />
    </div>
  );
};
export default App;
