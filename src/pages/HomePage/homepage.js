import './homepage.css';
import Topbar from '../../components/topbar/topbar.js';
import Card from '../../components/card/card.js';
import Videocard from '../../components/videoCard/videocard.js'
import Footer from '../../components/footer/footer'
import bedroom from './../../img/bedroom-416062_1280.jpg';
import chairsLivingRome from './../../img/chairsLivingRome.jpg';
import office from './../../img/office-730681_1920.jpg';
import road from './../../img/road-336594_1920.jpg';

function Homepage() {
  return (
    <div className="App">
      <Topbar />
      <Videocard  alt="test"/>
      <div className="Container">
      <div className="row">
      <Card text="Rent a rome" src={bedroom} className="cardContainer"/>
      <Card text="Take a walk i the great city" src={road} className="cardContainer"/>
      </div>
      <div className="row">
      <Card text="Rent a rome" src={chairsLivingRome} className="cardContainer"/>
      <Card text="Rent a rome" src={office} className="cardContainer"/>
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
/*
src={require('./img/chairsLivingRome.jpg')}
src={require('./img/chairsLivingRome.jpg')}className="cardContainer"
src={require('./img/chairsLivingRome.jpg')}className="cardContainer"
src={require('./img/chairsLivingRome.jpg')}className="cardContainer"
*/