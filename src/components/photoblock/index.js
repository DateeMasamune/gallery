import './style.css';
import { photo } from '../constants';
import { Component } from 'react';

const Close = () => {
    return <div className="close">
                <div className="x"></div>
                <div className="y"></div>
            </div>
}

class PhotoBlock extends Component {

    constructor(props){
        super(props);
        this.state = {
            photo: photo,
            hover: false,
            id: null,
        };

        this.mouseOver = this.mouseOver.bind(this);
        this.mouseOut = this.mouseOut.bind(this);
    }

    mouseOver = (id) => {
        this.setState({hover: true, id: id});
    }
    mouseOut = () => {
        this.setState({hover: false});
    }

    render(){

        const {hover, photo} = this.state;

        return(
            <div className="container">
            {
                photo.map(item => {
                    return(
                        <div
                        className="photo" 
                        key={ item.id } 
                        onMouseEnter={() => this.mouseOver(item.id)} 
                        onMouseLeave={this.mouseOut}
                        >
                            {
                                this.state.hover && this.state.id === item.id
                                ? <Close></Close>
                                : null
                            }
                            <img src={ item.src } alt={ item.name }></img>
                        </div>
                    )
                })
            }
         </div>
        );
    };
}

export default PhotoBlock;