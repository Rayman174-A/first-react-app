import React, { useState } from 'react';
import logo from './logo.svg';
import classes from './App.css';
import styled from 'styled-components';

import Person from './Person/Person';
import ErrorBoundary from './Error Boundary/ErrorBoundary';
const StyledButton=styled.button`
background-color: ${props => props.alt ? 'red': 'green'};
  color: ${props => props.alt? 'white': 'white'};
  font: inherit;
  border: 1px solid blue;
  padding:8px;
  cursor:pointer;
  &:hover{
    background-color: ${props=> props.alt? 'salmon':'seagreen'};
    color:black
  }
`
  const app=props=>  {
    const[personsState, setPersonsState]=useState({
      persons: [
      {
        name: 'Max',age: 28,id:'ehdbf'
      },
      {
        name: 'Manu',age: 26,id:'sjfdh'
      },
      {
        name: 'Stephanie',age: 23,id:'dfkg'
      }
    ],
  //  otherState: 'Some other state!'

  });
  const [otherState,setOtherState]=useState('some other value!!');
  const[showPersons,setShowPersons]=useState(true);
  console.log(personsState,otherState);

  // const switchNameHandler=(newName)=>{
  //   //console.log('It clicked!');
  //   //Dont do this:- this.state.persons[0].name='Maximillian';
  //   setPersonsState({persons: [
  //     {
  //       name: newName,age: 28
  //     },
  //     {
  //       name: 'Manu',age: 26
  //     },
  //     {
  //       name: 'Stephanie',age: 27
  //     }
  //   ],
  //   otherState: personsState.otherState
  // });
  // };

 const deletePersonhandler=(personIndex)=>{
   //const persons=personsState.persons;
   const personss=[...personsState.persons];
   personss.splice(personIndex,1);
   setPersonsState({persons:personss});
  
 }

  //for input type in person.js

  const nameChangedHandler=(nameC,id)=>{
    const personIndex=personsState.persons.findIndex(p=>{
     return p.id === id;
    });
    const person=personsState.persons[personIndex]
    person.name=nameC.target.value;

    const persons=[...personsState.persons];
    persons[personIndex]=person;
    setPersonsState({persons: persons}) 
    otherState: personsState.otherState;
  
  };
  

  const togglePersonsHandler=()=>
  {
    const doesShow=showPersons;
    setShowPersons(!doesShow);
  }

//button styling
// const style={
//   backgroundColor: 'green',
//   color: 'white',
//   font: 'inherit',
//   border: '1px solid blue',
//   padding:'8px',
//   cursor:'pointer',
//   ':hover':{
//     backgroundColor: 'lightgreen',
//     color:'black'
//   }
// };changed it to styled components from library styled-components

console.log(showPersons);
let persons=null;
let btnClass=[classes.button];
if(showPersons===true)
{
  persons= (
    <div>
      {personsState.persons.map((person,index)=>
      {
        return <ErrorBoundary><Person
        click={()=>deletePersonhandler(index)}
       name={person.name}
        age={person.age}
        changed={(event)=>nameChangedHandler(event,person.id)}  
        >
         
        </Person>
        </ErrorBoundary> 
        
      })
    }
    
      </div>
  );
  btnClass.push(classes.red);
}

// console.log(showPersons);

const Assignedclasses=[];
if(personsState.persons.length<=2)
    Assignedclasses.push(classes.red);//classes=[red]
if(personsState.persons.length<=1)
  Assignedclasses.push(classes.bold);//classes=[red,bold]

return (
  
      <div className={classes.App}>
        <h1>Hi! I am a react App</h1>
        <p className={Assignedclasses.join(' ')}>How's it going?</p>
        <button className={btnClass.join(' ')}
        onClick={togglePersonsHandler}>Toggle Name</button>
        
        {/* <Person name={personsState.persons[0].name} age={personsState.persons[0].age}></Person>
        <Person
         name={personsState.persons[1].name} age={personsState.persons[1].age} 
         click={switchNameHandler.bind(this,'Ray!')} changed={nameChangedHandler}>My hobbies:- Racing!</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}></Person> */}
        {persons}
      </div>
      
    );
    //return React.createElement('div',{className: 'App'},React.createElement('h1',null,'Does this work now?'));
  }


export default app;
