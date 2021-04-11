import './videocard.css';
import video from '../../img/Subway - 1003.mp4'
function Videocard(props){
    return(<div className="videoContainer">
            
           <video width="100%" height="100%" src={video} autoPlay muted loop data-reactid=".0.1.0.0">
               
               </video>
               <h1 className="displayText">EXPLORE NEW YORK</h1>
  
            </div>);
}

export default Videocard;