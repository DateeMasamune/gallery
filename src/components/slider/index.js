import { Component } from 'react';
import './style.css';
import { photo } from '../constants';

class Slider extends Component  {

    constructor(props){
        super(props)
        this.state = {slide: photo}
    }

    render(){

        const {slide} = this.state;

        return(
            <div className="slider"></div>
        )
    }
}

export default Slider;