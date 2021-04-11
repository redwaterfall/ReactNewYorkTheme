import './card.css';


function Card(props){
    return(<div className="cardContainer">
            <div className="imgContainer">
            <img  className="img" src={props.src}  alt=""/>
            </div>
            <h5 className="textCard">{props.text}</h5>
            </div>);
}

export default Card;
//src={props.src}