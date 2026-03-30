import {
    IconLinkedin,
    IconGithub,
    IconResume,
} from './icons/IconsSocials'
import '../styles/SocialCardItem.css';
import {useState, useEffect} from "react";

import { COLORS, SIZES, ANIMATION_TYPES } from '../CONSTANTS'

export function SocialCardItem ({ type, social, title, url }) {

    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
    const detectScreenType = () => {
        if (window.innerWidth < 600) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };

    window.addEventListener("resize", detectScreenType)
    detectScreenType()
    return () => window.removeEventListener("resize", detectScreenType);
    }, []);

    let SocialIcon = undefined
    switch (social) {
        case 'linkedin':
            SocialIcon = IconLinkedin
            break
        case 'github':
            SocialIcon = IconGithub
            break
        case 'resume':
            SocialIcon = IconResume
            break
        default:
            SocialIcon = undefined
            break
    }

    // Dynamic stylings for "main" & "secondary" socials
    let fontSize = type === 'main' ? SIZES.FONT_SIZE_MAIN : SIZES.FONT_SIZE_SECONDARY
    let iconSize = type === 'main' && !isMobile ? SIZES.ICON_SIZE_MAIN : SIZES.ICON_SIZE_SECONDARY

    // Handle mouse-over animations
    function mouseEnter () {
        let card = document.getElementById(`social-card-${social}`)
        card.classList.add(ANIMATION_TYPES.SECONDARY)
        card.addEventListener('animationend', () => {
            card.classList.remove(ANIMATION_TYPES.SECONDARY)
        });
    }

    // Send user to the appropriate URL on click
    function onClick () {
        window.open(url, '__blank')
    }

    return (
        <div
            id={`social-card-${social}`}
            className='cardItem-outer animate__animated'
            style={{backgroundColor: `#${COLORS[social]}`}}
            onMouseEnter={mouseEnter}
            onClick={onClick}
        >
            {SocialIcon ? <SocialIcon className={`card-social-icon icon-${type}`} size={iconSize}/> : ''}
            <h2 className={`card-social-text text-${type}`} style={{fontSize: `${fontSize}px`}}>{title}</h2>
        </div>
    )
}