/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Gallery from './Gallery';

function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
}



function App() {

  let post = 'daily'
  let [logo, logoset] = useState('일상');

  return (
    <div className="App">
      
      <div className="black-nav">yeonjji's blog</div>
      
      <h4>{logo}</h4>
      <Profile/>
      
    </div>
  );
}

export default App;
