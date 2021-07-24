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
            test1: 0,
            test2: 0,
        }
        this.nextSlide = this.nextSlide.bind(this);
        this.nextImage = this.nextImage.bind(this);
        this.test = this.test.bind(this);
    }

    test = () => {
        
        let test1 = this.state.test1;
        let test2 = this.state.test2;
        let test = this.state.currentSlide;
        
        test = test2;

        if(this.state.test2 >= this.state.slide.length -1){
            test1 = 0;
        }else{
            test1 = this.state.test2 + 1;
        }
        if(this.state.test2 >= this.state.slide.length -2){
            test2 = 0;
        }else{
            test2 = this.state.test2 + 2;
        }
        // let test1 = this.state.test2 + 1;
        // let test2 = this.state.test2 + 2;
        console.log(test)

        this.setState({
            test: test,
            test1: test1,
            test2: test2,
        })

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
        // console.log(this.state.counter)
        if(counter >= 2){
            counter = 0;
            // console.log('smena kartinki kotoraya seichas poyavitsa');
            let length = this.state.slide.length - 1;
            
            // console.log(length)
            console.log( this.state);
            this.test()
            this.nextImage();
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
        
        const {slide, slidePrev, slideNext ,currentSlide, centSlide,test1,test2,test} = this.state;
        
        return(
            <div className="slider">
              <img className={centSlide} src={slide[test].src}></img>
              <img className={slideNext} src={slide[test1 ].src}></img>
              <img className={slidePrev} src={slide[test2 ].src}></img>
            </div>
        )
    }
}

export default Slider;