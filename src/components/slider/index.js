import { Component } from 'react';
import './style.css';
import { photo } from '../constants';



class Slider extends Component  {

    constructor(props){
        super(props)
        this.state = {
            slide: photo,
            currentSlide: 0,
            lastSlide: 1,
            slidePrev: "slider-img-prev",
            slideNext: "slider-img-next",
            centSlide: "",
        }
        this.nextSlide = this.nextSlide.bind(this);
    }

    nextSlide = () => {

       let current = (this.state.currentSlide+1)%this.state.slide.length;
       let centrS = "";
       let nextS = "";
       let prevS = "";

       if(this.state.centSlide === ""){
            centrS = "slider-img-prev";
            nextS = "";
            prevS = "speed";
       }
       if(this.state.centSlide === "slider-img-prev"){
            centrS = "speed";
            nextS = "slider-img-prev";
            prevS = "";
       }
       if(this.state.centSlide === "speed"){
            centrS = "";
            nextS = "speed";
            prevS = "slider-img-prev";
       }
       if(current === this.state.slide.length - 1){
            current = 0
       }
       
       this.setState({
           currentSlide: current,
           slidePrev: prevS,
           slideNext: nextS,
           centSlide: centrS,
        })
    }

    componentDidMount = () =>{
        console.log(2313)
        // let interval = setInterval(this.nextSlide, 3000);
    }

    render(){
        
        const {slide, slidePrev, slideNext ,currentSlide, centSlide, lastSlide} = this.state;
        
        return(
            <div className="slider">
              <img className={centSlide} src={slide[currentSlide].src}></img>
              <img className={slideNext} src={slide[currentSlide].src}></img>
              <img className={slidePrev} src={slide[currentSlide].src}></img>
            </div>
        )
    }
}

export default Slider;