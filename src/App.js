import React from 'react';
import logo from './logo.svg';
import './App.css';
import SideBar from '../src/components/side-bar'
import CardSection from './sections/card-section';
import StatSection from './sections/stat-section'
import PaymentSection from './sections/payment-section'
import HistorySection from './sections/history-section'
import TopBar from './components/top-bar'

function App() {
  return (
    <div className="App">
            <TopBar/>

    <div className="site">
      <SideBar/>
      <div className="page">
        <h1>Overview</h1>
      <CardSection/>
      <StatSection/>
      <div className="page-row">
      <PaymentSection/>
      <HistorySection/>
      </div>


      </div>
    
    </div>
    </div>
    
  );
}

export default App;
