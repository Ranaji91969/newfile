// Dashbord.jsx

import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import  Video from './Video';

const Dashbord = () => {
  const handleSearch = (query) => {
    // Implement your search logic here or pass the query to other components
    console.log('Search query:', query);
  };



  return (
    <>
      
      <div className='cent'>
     
      <div class="scroll-container" >
      <button class="upgrade-button">Upgrade</button>

  <a href="#">Home</a>
  <a href="#">Library</a>
  <a href="#">Live events</a>
  <hr/>
  <a href="#">Showcases</a>
  <a href="#">Analytics</a>
  <a href="#">Monetize</a>
  
  <hr/>
  <a href="#">Watch</a>
  <hr/>
  <a href="#">What's New</a>
  <hr/>
  <a href="#">
  <span class="upgrade">Upgrade</span> for more videos
</a>

  </div>
        </div>
        
        <div className="main">
          <Video />
        </div>
      
    </>
  );
}

export default Dashbord;

