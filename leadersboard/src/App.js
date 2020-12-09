import React, { Component } from 'react';
import './App.css';
import Student from './Student';

class App extends Component {
  render(){
    return (
      <div className="App">
        <h1 className="leadersboardHeading">Leadersboard</h1>
         <Student name="Rizwan Ahmed" university="SMIU" score={349}/> 
         <Student name="Nauman Khan" university="Iqra University" score={349}/> 
         <Student name="Qasim Awan" university="SMIU" score={319}/> 
         <Student name="Shahzaib Ali" university="University Of Karachi" score={202}/> 
      </div>
    );
  }
}

export default App;
