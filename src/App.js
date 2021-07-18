import './App.css';
import React, { Component } from 'react'; //Импортируем компонент реакт
import TopMenu from './components/topMenu';
import Background from './components/background';
import PhotoBlock from './components/photoblock';
import Slider from './components/slider';

class App extends Component {

   render(){

    return (
        <div className="App">
        <Background></Background>
        <div className="maxwidth">
          <header className="App-header">
            <TopMenu></TopMenu>
            <Slider></Slider>
            <PhotoBlock></PhotoBlock>
          </header>
        </div>
        </div>
      );
   }
}

export default App;
