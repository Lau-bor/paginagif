import './GridGifs.css';
import {OneGif} from '../../components';
function GridGifs({gifs}) {
  return (
    <div className='contenedor-grid-gifs'>
      {
        gifs.map((gif, index) => {
          <OneGif
          gif={gif}
          key={index}
          index={index}
          />
        })
      }
    </div>
  )
}

export default GridGifs