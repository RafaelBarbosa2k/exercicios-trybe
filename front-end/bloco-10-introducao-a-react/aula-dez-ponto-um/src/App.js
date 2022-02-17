import React, { Component }  from 'react';
import Content from './Content';
import Header from './Header';
import './App.css';

class App extends Component {
  render(){
      return (
        <>
          <Header/>
          <Content/>        
        </>
    );
  }
}

export default App;
