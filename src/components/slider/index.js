import { Component } from 'react';
import './style.css';
import { photo } from '../constants';

class Slider extends Component  {

    constructor(props){
        super(props)
        this.state = {
            slide: photo,
            nexSlide: 0,
            classNext: '',
        }
        this.nextSlide = this.nextSlide.bind(this);
    }

    nextSlide = () => {
        const next = 1;
        const classAdd = 'slider-img-prev';
        this.setState({
            classNext: classAdd,
        })
        console.log(this.state)
    }

    render(){

        const {slide, nexSlide, classNext} = this.state;
        setTimeout(() => {
            this.nextSlide();
        }, 3000); 
        return(
            <div className="slider">
                <img
                 className={classNext}
                 src={slide[nexSlide].src}
                 alt={slide[nexSlide].name}
                 key={slide[nexSlide].id}>

                 </img>
            </div>
        )
    }
}

export default Slider;