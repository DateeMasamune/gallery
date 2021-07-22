import { Component } from 'react';
import './style.css';
import { photo } from '../constants';



class Slider extends Component  {

    constructor(props){
        super(props)
        this.state = {
            slide: photo,
            currentSlide: 0,
            slidePrev: "",
            slideNext: "",
        }
        this.nextSlide = this.nextSlide.bind(this);
    }

    nextSlide = () => {

       let current = (this.state.currentSlide+1)%this.state.slide.length;
       const prev = "slider-img-prev";
       const next = "slider-img-next";
       
       this.setState({currentSlide: current})
    }

    componentDidMount = () =>{
        console.log(2313)
        let interval = setInterval(this.nextSlide, 3000);
    }

    render(){
        
        const {slide,nextSlide,currentSlide} = this.state;
        
        return(
            <div className="slider">
              <img className="" src={slide[currentSlide].src}></img>
              <img className="slider-img-next" src={slide[currentSlide].src}></img>
              <img className="slider-img-prev" src={slide[currentSlide].src}></img>
            </div>
        )
    }
}

export default Slider;