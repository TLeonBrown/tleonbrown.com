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
              <h4>Website designed by Tian Brown.</h4>
            </div>
      </div>
    )
}