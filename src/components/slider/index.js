import { Component } from 'react';
import './style.css';
import { photo } from '../constants';



class Slider extends Component  {

    constructor(props){
        super(props)
        this.state = {
            slide: photo,
            currentSlide: 0,
            currentNext: 0,
            currentPrev: 0,
            slidePrev: "slider-img-prev",
            slideNext: "slider-img-next",
            centSlide: "",
            counter: 0,
        }
        this.nextSlide = this.nextSlide.bind(this);
        this.nextImage = this.nextImage.bind(this);
        this.stopImage = this.stopImage.bind(this);
    }

    stopImage = () => {
        console.log(this.state.currentSlide - 1);
    }

    nextImage = () => {
        
        let current = (this.state.currentSlide + 1)%this.state.slide.length;

        if(current > this.state.slide.length - 1){
            current = 0;
        }

        this.setState({
            currentSlide: current,
        })
    }

    nextSlide = () => {

        let counter = this.state.counter;
        if(counter > 3){
            counter = 0;
        }
      
       let centrS = "";
       let nextS = "";
       let prevS = "";

       if(this.state.centSlide === ""){
            centrS = "slider-img-prev";
            nextS = "";
            prevS = "speed";
            // Картинка не меняется
            this.stopImage()
       }

       if(this.state.centSlide === "slider-img-prev"){
            centrS = "speed";
            nextS = "slider-img-prev";
            prevS = "";
             // Картинка не меняется
             this.stopImage()
       }

       if(this.state.centSlide === "speed"){
            centrS = "";
            nextS = "speed";
            prevS = "slider-img-prev";
             // Картинка  меняется
       }

       this.setState({
           slidePrev: prevS,
           slideNext: nextS,
           centSlide: centrS,
           counter: counter += 1,
        })

        this.nextImage();
    }

    componentDidMount = () =>{
        console.log(2313)
        let interval = setInterval(this.nextSlide, 3000);
    }

    render(){
        
        const {slide, slidePrev, slideNext ,currentSlide, centSlide,currentNext,currentPrev} = this.state;
        
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