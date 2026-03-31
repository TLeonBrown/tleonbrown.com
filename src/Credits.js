import 'animate.css'
import './styles/App.css';
import { BackButton } from './components/BackButton';
import PhotoCarousel from './components/PhotoCarousel';

import { useState, useEffect } from "react";

export function Credits () {

  const [windowWidth, setWindowWidth] = useState(1920)

  useEffect(() => {
  const detectScreenType = () => {
    setWindowWidth(window.innerWidth)
  };

  window.addEventListener("resize", detectScreenType)
  detectScreenType()
  return () => window.removeEventListener("resize", detectScreenType);
  }, []);

  return (
    <div className='App'>
          <div className='infobox-1-outer about-box'>
            <PhotoCarousel
              baseWidth={windowWidth > 600 ? 350 : windowWidth / 2}
              autoplay
              autoplayDelay={2000}
              pauseOnHover
              loop={true}
            />
            {/* <div className='back-button-container'>
              <BackButton></BackButton>
            </div> */}
            <h4>Website designed by Tian Brown.</h4>
          </div>
    </div>
  )
}