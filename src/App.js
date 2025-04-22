import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {

  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
       <h1>Wellcome to TECHNO  Academy</h1>
       <button className='login_btn'>Login</button>
        <button className='signup_btn' onClick= {()=> navigate('/Student')}>Signup</button>
      </header>
    </div>
  );
}

export default App;
