import React from 'react';

import Nav from './components/navbar';
import About from './components/about';
import Skills from './components/skills';
import HomePage from './components/HomePage';
import Contact from './components/contact';


function App(){
    return (
      <React.Fragment>
       
        <Nav />
        <HomePage />
        <About />
        <Skills />
        <Contact>
        </Contact>
      
      </React.Fragment>
    );
  }


export default App;
