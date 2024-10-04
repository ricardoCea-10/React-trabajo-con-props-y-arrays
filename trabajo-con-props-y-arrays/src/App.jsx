// src/App.jsx
import React from 'react';
import PersonCard from './PersonCard';
import './App.css';

const App = () => {
  const personList = [
    { id: "01", name: "Jose", username: "jose45", email: "jose@email.com" },
    { id: "02", name: "Luis", username: "lucho45", email: "luis@email.com" },
    { id: "03", name: "Cata", username: "cate10", email: "cata@email.com" },
    { id: "04", name: "Claudio", username: "claudio643", email: "claudio@email.com" },
  ];

  return (
    <div>
      <h1>Personas</h1>
      <div className='containerStyle1'>
        <div className='containerStyle2'>
          {personList.map(person => (
            <PersonCard 
              key={person.id}
              id={person.id}
              name={person.name}
              username={person.username}
              email={person.email}
            />
          ))}
        </div>
      </div>
    </div>
  );
};


export default App;
