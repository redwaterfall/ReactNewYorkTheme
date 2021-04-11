import './footer.css';
import { FaAirbnb, FaInstagram, FaTwitter } from 'react-icons/fa';
function Footer(props){
    return(<div className="footer">
             <div className="footertextContainer">
                <h1 className="footertext" href={props.home}>Home </h1>
                <h2 className="footertext" href={props.about}> About </h2>
                <h3 className="footertext" href={props.contact}> Contact </h3>
            </div>
            <div className="footerIcons">
                <FaAirbnb className="iconsFooter"/>
                <FaInstagram className="iconsFooter"/>
                <FaTwitter className="iconsFooter"/>
                </div>
            </div>
            );
}
export default Footer;