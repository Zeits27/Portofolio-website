// import React, { useState } from 'react';
import './components/Home.jsx'
import { Home } from './components/Home.jsx';
import { Contact } from './components/Contact.jsx';
import { Skills } from './components/Skills.jsx';
import { Project } from './components/Project.jsx';
import { Navbar } from './components/Navbar.jsx';
const Portfolio = () => {
 

  return (
    <div className="min-h-screen" style={{ fontFamily: 'Epilogue, sans-serif' }}>


      <Navbar></Navbar>
      <Home></Home>
      <Skills></Skills>
      <Project></Project>
      {/* <Contact></Contact> */}


  
    </div>
  );
};

export default Portfolio;