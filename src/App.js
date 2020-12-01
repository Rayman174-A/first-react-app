import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Person from './Person/Person';


  const app=props=>  {
    const[personsState, setPersonsState]=useState({
      persons: [
      {
        name: 'Max',age: 28
      },
      {
        name: 'Manu',age: 26
      },
      {
        name: 'Stephanie',age: 23
      }
    ],
  //  otherState: 'Some other state!'

  });
  const [otherState,setOtherState]=useState('some other value!!');
  const[showPersons,setShowPersons]=useState(true);
  console.log(personsState,otherState);

  const switchNameHandler=(newName)=>{
    //console.log('It clicked!');
    //Dont do this:- this.state.persons[0].name='Maximillian';
    setPersonsState({persons: [
      {
        name: newName,age: 28
      },
      {
        name: 'Manu',age: 26
      },
      {
        name: 'Stephanie',age: 27
      }
    ],
    otherState: personsState.otherState
  });
  };

  //for input type in person.js

  const nameChangedHandler=(nameC)=>{
    setPersonsState({persons: [
      {
        name: 'Max',age: 28
      },
      {
        name: nameC.target.value,age: 26
      },
      {
        name: 'Stephanie',age: 27
      }
    ],
    otherState: personsState.otherState
  });
  };
  

  const togglePersonsHandler=()=>
  {
    const doesShow=showPersons;
    setShowPersons({showPersons: !doesShow});
  }

//button styling
const style={
  backgroundColor: 'white',
  font: 'inherit',
  border: '1px solid blue',
  padding:'8px',
  cursor:'pointer'
};

    return (
      <div className="App">
        <h1>Hi! I am a react App</h1>
        <p>How's it going?</p>
        <button 
         style={style}
        onClick={togglePersonsHandler}>Switch Name</button>
        {
          showPersons===true?
          <div>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}></Person>
        <Person
         name={personsState.persons[1].name} age={personsState.persons[1].age} 
         click={switchNameHandler.bind(this,'Ray!')} changed={nameChangedHandler}>My hobbies:- Racing!</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}></Person>
        </div>:null
        }
      </div>
      
    );
    //return React.createElement('div',{className: 'App'},React.createElement('h1',null,'Does this work now?'));
  }


export default app;
