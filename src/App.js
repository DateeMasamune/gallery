import './App.css';
import React, { Component } from 'react'; //Импортируем компонент реакт
import TopMenu from './components/topMenu';
import Background from './components/background';

class App extends Component {

   render(){

    return (
        <div className="App">
        <Background></Background>
          <header className="App-header">
            <TopMenu></TopMenu>
          </header>
        </div>
      );
   }
}

export default App;
