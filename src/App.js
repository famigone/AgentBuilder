import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  Opciones from './components/Opciones.js';
import  Mundo from './components/Mundo.js';
import  Bloques from './components/Bloques.js';
import  Codigo from './components/Codigo.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        
        <Opciones></Opciones>      

                <div className="container">
          <div className="row">  
          <p></p>
          </div>     
          <div className="row">

          

            <div className="col-8">
              <Bloques></Bloques>
            </div>            

            <div className="col-4">
              <Codigo></Codigo>
            </div>                
          </div>
        </div>

                
      </div>
    );
  }
}

export default App;
