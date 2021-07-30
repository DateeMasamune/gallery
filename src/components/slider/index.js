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
            test: 0,
            test1: 1,
            test2: 2,
            A: 0,
            B: 1,
            C: 2,
        }
        this.nextSlide = this.nextSlide.bind(this);
        this.nextPicture = this.nextPicture.bind(this);
    }

    nextPicture = () => {
        let a = this.state.A
        let b = this.state.B
        let c = this.state.C

        a = c + 1;
        b = c + 2;
        c = c;

        this.setState({
            A: a,
            B: b,
            C: c,
        })
    }

    nextSlide = () => {

        let counter = this.state.counter;
        console.log(this.state.counter)
        if(counter === 2){
            
            this.nextPicture()
        }
       
        if(counter >= 2){
            counter = 0;
        
            // this.test()
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
        
        const {slide, slidePrev, slideNext ,currentSlide, centSlide,test1,test2,test,A,B,C} = this.state;
        
        return(
            <div className="slider">
              <img className={centSlide} src={slide[A].src}></img>
              <img className={slideNext} src={slide[B].src}></img>
              <img className={slidePrev} src={slide[C].src}></img>
            </div>
        )
    }
}

export default Slider;