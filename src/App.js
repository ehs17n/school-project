import React, { Component } from 'react';
import './App.css';
import CardList from './components/card-list/Card-list';


class App extends Component{
  constructor(){
    super();

    this.state = {
      students:[
        {
          name: 'john',
          FamilyName:"ken",
          id:1
        },
        {
          name: 'ali',
          FamilyName:"ken",
          id:2
        }
      ]
    }

  }
  render() {
  return (
    <div className="App">
    
      <header>
        <h2>Hello</h2>
      </header> 
     <CardList students={this.state.students}/>
      
     
     
    </div>
  );
}
}
export default App;
