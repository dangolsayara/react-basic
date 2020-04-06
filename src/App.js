import React from 'react';
// import logo from './logo.svg';
import './App.css';
import  ContactCard from "./ContactCard"
function App() {
  return (
      
    <div className="contact">
    <ContactCard 
        contact={{name:"fluffy" ,imgUrl:"http://placekitten.com/300/200",
        email:"fluff@gamil.com"}}
    />
     <ContactCard 
        contact={{name:"fluffy" ,imgUrl:"http://placekitten.com/300/200",
        email:"fluff@gamil.com"}}
    />
     <ContactCard 
        contact={{name:"fluffy" ,imgUrl:"http://placekitten.com/300/200",
        email:"fluff@gamil.com"}}
    />
     <ContactCard 
        contact={{name:"fluffy" ,imgUrl:"http://placekitten.com/300/200",
        email:"fluff@gamil.com"}}
    />
  </div>

        
  );
}

export default App;
