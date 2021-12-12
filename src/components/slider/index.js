import { Component } from 'react';
import './style.css';
import { photo } from '../constants';



class Slider extends Component  {

    constructor(props){
        super(props)
        this.state = {
            slide: photo,
            prev: "",
        }
        this.coordsElement = this.coordsElement.bind(this);
        this.setClass = this.setClass.bind(this)
    }

    setClass = () => {
        this.setState({
            prev: "slider-img-prev",
        })
        this.coordsElement();
    }

    coordsElement = () => {
        const obj = document.getElementsByClassName('slider-img-prev');
        let posX =  obj.offsetLeft;
        console.log(obj);
    }

    componentDidMount = () => {
        const interval = setInterval(this.setClass,3000)
    }

    render(){
        
        const {slide,prev} = this.state;
        
        return(
            <div className="slider">
               <img className={prev} src={slide[0].src}></img>
            </div>
        )
    }
}

export default Slider;