import './App.css';
import React, { Component } from 'react'; //Импортируем компонент реакт
import TopMenu from './components/topMenu';

class App extends Component {

   render(){

    return (
        <div className="App">
        <div className="gradient-background"></div>
          <header className="App-header">
            <TopMenu></TopMenu>
          </header>
        </div>
      );
   }
}

export default App;
