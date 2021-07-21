import './App.css';
import React, { Component } from 'react'; //Импортируем компонент реакт
import TopMenu from './components/topMenu';
import PhotoBlock from './components/photoblock';
import Slider from './components/slider';

class App extends Component {

    constructor(props){
        super(props);
    }

   render(){

    return (
        <div className="App">
            <div className="maxwidth">
                <TopMenu></TopMenu>
                <Slider></Slider>
                <PhotoBlock></PhotoBlock>
            </div>
        </div>
      );
   }
}

export default App;
