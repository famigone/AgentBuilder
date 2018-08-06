import React, { Component} from 'react';
import PropTypes from 'prop-types'; // ES6
import  Bloques from './Bloques.js';
import  Codigo from './Codigo.js';


class RealTimeCode extends Component {


    
   render() {
     return (
              <div className="row">          
                  <div className="col-8">
                    <Bloques></Bloques>
                  </div>            

                  <div className="col-4">
                    <Codigo></Codigo>
                  </div> 
              </div>
     );
   }
 }

export default RealTimeCode;