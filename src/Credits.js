import 'animate.css'
import './styles/App.css';
import PhotoCarousel from './components/PhotoCarousel';
import { NavButton } from './components/NavButton';

import { useState, useEffect } from "react";

import { TEXTS } from './CONSTANTS';

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
    <div className='App credits-page-container'>
          <div className='credits-infobox-outer'>
            <div className='credits-box-left'>
              <PhotoCarousel
                baseWidth={windowWidth > 600 ? 350 : windowWidth / 1.25}
                autoplay
                autoplayDelay={2000}
                pauseOnHover
                loop={true}
                heightRatio={windowWidth > 600 ? 1.4 : 1.1}
              />
            </div>
            <div className='credits-box-right'>
              <div className='credits-about-me'>
                  {TEXTS.CREDITS_ABOUT_ME.map(line => {
                      return <div className='about-me-line'>
                          <l >{line}</l>
                      </div>
                  })}
              </div>
              <br></br> 
              <div className='credits-back-button'>
                <NavButton url='' text='Back to Home'/>
              </div>
              <br></br>
              <h4>Website designed by Tian Brown.</h4>
            </div>
          </div>
          
    </div>
  )
}