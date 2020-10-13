import React, { Component } from 'react';
import './App.scss';
import MemberTable from "../Component/memberTable/memberTable";
import Header from "../Component/header/Header";

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <Header />
        <MemberTable />
      </div>
    );
  }
}

export default App;
