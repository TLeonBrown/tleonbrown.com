import '../styles/ClickableButton.css';
import { ANIMATION_TYPES } from '../CONSTANTS'
import { useNavigate } from 'react-router';

export function CreditsButton () {

    let navigate = useNavigate();

    // Handle mouse-over animations
    function mouseEnter () {
        let button = document.getElementById('profile-button-credits')
        button.classList.add(ANIMATION_TYPES.SECONDARY)
        button.addEventListener('animationend', () => {
            button.classList.remove(ANIMATION_TYPES.SECONDARY)
        });
    }

    // Send user to the appropriate URL on click
    function onClick () {
        navigate('/credits')
    }

    return (
        <div 
            id='profile-button-credits'
            className='credits-button animate__animated'
            onMouseEnter={mouseEnter}
            onClick={onClick}
        >
            <button className='credits-button'>
                More About Me!
            </button>
        </div>
    )
}