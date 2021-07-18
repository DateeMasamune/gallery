import './style.css';
import { photo } from '../constants';

const PhotoBlock = () => {
  return <div className="container">
            {
                photo.map(item => {
                    return(
                        <div className="photo" key={ item.id }>
                            <img src={ item.src } alt=""></img>
                        </div>
                    )
                })
            }
         </div>
}

export default PhotoBlock;