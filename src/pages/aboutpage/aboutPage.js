import './aboutPage.css'
import Topbar from './../../components/topbar/topbar.js';
import manhattan from './../../img/manhattan-407703_1920.jpg';
import taxi from './../../img/taxi-381233_1920.jpg'; 
import sunset from './../../img/sunset-569093_1920.jpg';
import road from './../../img/road-336594_1920.jpg';

import { useState } from 'react';
import { FaAngleLeft } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';
import Footer from './../../components/footer/footer';
let next = 0;
function Aboutpage(){
  const[picSrc, setpicSrc] = useState(manhattan);
  const pictures = [manhattan, taxi, sunset, road];
  
  function changePictureLeft(){
    if(next <= 0 ){
      next=pictures.length-1;
    }
    else{
    next-=1;
    }    
    console.log('Picture: ' + next);
    setpicSrc(pictures[next]);

  }
  function changePictureRight(){
    if(next >= pictures.length -1 ){
      next=0;
    }
    else{
        next+=1;
    }

    console.log('Picture: ' + next);
    setpicSrc(pictures[next]);

  }
  /*setInterval(async ()=>{
    await console.log('test');
    await changePictureRight();
    },20000);*/
  return(<> 
          <Topbar />
          <div className="imgageContainer">
            <img key={next} className="image"src={picSrc} alt="" />
            <div onClick={changePictureLeft} className="leftArrowContainer">
              <FaAngleLeft className="Arrow" />
            </div>
            <div onClick={changePictureRight} className="rightArrowContainer">
              <FaAngleRight className="Arrow" />
            </div>
            <Footer />
          </div>
        </>);
}

export default Aboutpage