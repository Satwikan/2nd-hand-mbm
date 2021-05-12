import React from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import Header from "./Head/Header"; //Include Heder
import Footer from "./Footer/Footer"; //Include Footer
import Routes from "./Routes";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <br/>
        <Routes />
        <br/>
        <Footer />
      </div>
    );
  }
}
export default App;
