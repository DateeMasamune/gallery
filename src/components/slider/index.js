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
            counter: 0,
        }
        this.nextSlide = this.nextSlide.bind(this);
        this.nextImage = this.nextImage.bind(this);
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
        console.log(this.state.counter)
        if(counter >= 2){
            counter = 0;
            console.log('smena kartinki kotoraya seichas poyavitsa');
            // this.nextImage();
        }else{
            counter++
        }
      
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

       this.setState({
           slidePrev: prevS,
           slideNext: nextS,
           centSlide: centrS,
           counter: counter,
        })

        
    }

    componentDidMount = () =>{
        
        let interval = setInterval(this.nextSlide, 3000);
        
    }

    render(){
        
        const {slide, slidePrev, slideNext ,currentSlide, centSlide,currentNext,currentPrev} = this.state;
        
        return(
            <div className="slider">
              <img className={centSlide} src={slide[currentSlide].src}></img>
              <img className={slideNext} src={slide[currentSlide + 1].src}></img>
              <img className={slidePrev} src={slide[currentSlide + 2].src}></img>
            </div>
        )
    }
}

export default Slider;