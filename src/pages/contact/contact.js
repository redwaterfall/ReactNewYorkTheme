import './contact.css';
import Topbar from './../../components/topbar/topbar.js';
import Footer from './../../components/footer/footer';
import { FaEnvelope } from 'react-icons/fa';
import { BiMap } from "react-icons/bi";

const url = 'https://www.google.com/maps/place/52+8th+Ave,+Brooklyn,+NY+11217,+USA/data=!4m2!3m1!1s0x89c25b078d217b4d:0xbc941fde72b2029f?sa=X&ved=2ahUKEwi1xqrQ6fPvAhUQx4sKHeSsCRgQ8gEwAHoECAQQAQ';


function Contactpage(props){
        return(<>
                <Topbar />
                <div className="contactContainer">
                    <div className="contactContent">
                        <FaEnvelope className="contactIcon" /> <p>newYork@gmail.com</p>
                    </div>
                   
                        <div className="contactContent">
                            <BiMap className="contactIcon" />
                            
                            <a href={url}>52-54 Eighth Avenue in Park Slope</a>
                            
                        </div>
                    
                </div>
                <Footer />
               </>);
}

export default Contactpage;