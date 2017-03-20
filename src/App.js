import React, { Component, PropTypes } from 'react';
import logo from './logo.svg';
import './App.css';
import './css/bootstrap.css'
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import {Cinema} from './Cinema.js'


class App extends Component 
{
  img_logan = './logo-main.png';
  render() 
  {
    return (
          <div>
               <Cinema />
          </div>
      
    );
  }
}



export default App;
