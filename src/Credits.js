import 'animate.css'
import './styles/App.css';
import { BackButton } from './components/BackButton';

export function Credits () {

    return (
      <div className='App'>
            <div className='infobox-1-outer about-box'>
              <div className='back-button-container'>
                <BackButton></BackButton>
              </div>
              <h4>This website was fully written by LeonSBU. No AI was used in the creation of this site.</h4>
            </div>
      </div>
    )
}