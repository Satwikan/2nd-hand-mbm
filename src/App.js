import React from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

import Header from './Header'; //Include Heder
import Footer from './Footer'; //Include Footer
import Card from './Card';
 
class App extends React.Component {
  
  render() {
    return (
      
    
     <div className="maincontainer">
      <Header/>
      <Card/>
      <Footer/>
 
      
    </div>

   )
  };
}
export default App;