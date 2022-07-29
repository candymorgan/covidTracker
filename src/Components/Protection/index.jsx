import React from 'react';
import './Protection.css';
import maskman2 from '../../maskman2.jpeg'
import Ellipse12 from '../../Ellipse12.svg'
import Ellipse13 from '../../Ellipse13.svg' 
import Ellipse14 from '../../Ellipse14.svg'
import Ellipse15 from '../../Ellipse15.svg'
import Ellipse16 from '../../Ellipse16.svg'


const Protection = () => {
    return(
        <>
        <div className="childContainer4">
          <div className="leftImage">
          <img src={maskman2} alt="" />
          </div>
          <div className="rightContent">
            <h1>How can I protect myself from Covid-19?</h1>
            <p>Coronavirus disease spreads primarily through contact with an infected person when they cough or sneeze. It also spreads when a person touches a surface or object that has the virus on it, then touches their eyes, nose, or mouth.</p>
            <h3>What should <span>I do?</span></h3>

            <div className="images">
              <div className="image1">
                <img src={Ellipse12} alt="" />
                <h5>Wear a facemask</h5>
              </div>
              <div className="image2">
              <img src={Ellipse13} alt="" />
                <h5>Don't touch your face</h5>
              </div>
              <div className="image3">
              <img src={Ellipse14} alt="" />
                <h5>Avoid hand contact</h5>
              </div>
              <div className="image4">
              <img src={Ellipse15} alt="" />
                <h5>Keep safe distance</h5>
              </div>
              <div className="image5">
              <img src={Ellipse16} alt="" />
                <h5>Stay at home if you can</h5>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}
export default Protection;