import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login' 
import Navigation from './components/Navigation'

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <Login></Login>
    </div>
  );
}

export default App;