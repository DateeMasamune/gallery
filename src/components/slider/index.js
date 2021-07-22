import { Component } from 'react';
import './style.css';
import { photo } from '../constants';



class Slider extends Component  {

    constructor(props){
        super(props)
        this.state = {
            slide: photo,
            currentSlide: 0,
            slidePrev: "slider-img-prev",
            slideNext: "slider-img-next",
            centSlide: "",
        }
        this.nextSlide = this.nextSlide.bind(this);
    }

    nextSlide = () => {

       let current = (this.state.currentSlide+1)%this.state.slide.length;
       let centr = "";
       let nextS = "";
       let prevS = "";

       if(this.state.centSlide === ""){
            centr = "slider-img-prev";
       }
       if(this.state.slideNext === "slider-img-next"){
            nextS = "";
       }
       if(this.state.slidePrev === "slider-img-prev"){
            prevS = "slider-img-next";
       }
       if(current === this.state.slide.length - 1){
            current = 0
       }
       
       this.setState({
           currentSlide: current,
           slidePrev: prevS,
           slideNext: nextS,
           centSlide: centr,
        })
    }

    componentDidMount = () =>{
        console.log(2313)
        let interval = setInterval(this.nextSlide, 3000);
    }

    render(){
        
        const {slide, slidePrev, slideNext ,currentSlide, centSlide} = this.state;
        
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