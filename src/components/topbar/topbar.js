import './topbar.css';
import {Link, BrowserRouter} from 'react-router-dom'
//import about from '../../pages/aboutpage/aboutPage'
function Topbar(props){
    function page(){
        console.log('clicked header')
    }
    return(
            <div className="topbar">
                
             <div className="textContainer">
             
                <Link to='/ReactNewYorkTheme'>
                    <h1 className="text" onClick={page} href={props.home}>Home </h1>
                    
                </Link>
                <Link to='/ReactNewYorkTheme/about'>
                    <h1 className="text" onClick={page} href={props.about}> About </h1>
                </Link>
                <Link to='/ReactNewYorkTheme/contact'>
                    <h1 className="text" onClick={page} href={props.contact}> Contact </h1>
                </Link>
                
            </div>
            </div>);
}

export default Topbar;