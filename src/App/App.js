import React, { Component } from 'react';
import './App.scss';
import MemberTable from '../Component/memberTable/MemberTable';
import Header from '../Component/header/Header';
import Footer from '../Component/footer/Footer';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <Header />
        <MemberTable />
        {/* TODO 学员列表不是footer */}
        <Footer />
      </div>
    );
  }
}

export default App;
