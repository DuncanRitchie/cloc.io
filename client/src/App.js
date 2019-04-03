import React, { Component } from 'react';
import TimeTable from './components/user/Rota_Timesheet/TimeTable';
import './App.css';

class App extends Component {
  state={
    currentUser: 2,
    rotaOrTimes: "rota"}
  render() {
    return (
      <div className="App">
              <TimeTable userid={this.state.currentUser} rotaOrTimes={this.state.rotaOrTimes}/>

      </div>
    );
  }
}

export default App;