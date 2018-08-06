import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  Opciones from './components/Opciones.js';
import  Mundo from './components/Mundo.js';

import  RealTimeCode from './components/RealTimeCode.js';

class App extends Component { 
  render() {
    return (
      <div className="App">
        
        
        <Opciones></Opciones>      

        
      <div className="container">
          <div className="row">  
            <p></p>
          </div>     
          
            <RealTimeCode>        
               
            </RealTimeCode>          
          
        </div>

                
      </div>
    );
  }
}

export default App;
