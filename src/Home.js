import 'animate.css'
import './styles/App.css';
import { SocialCardItem } from './components/SocialCardItem';
import { NavButton } from './components/NavButton';

import { TEXTS } from './CONSTANTS';

export function Home () {

    return (
        <div className='App'>
            <div className='infobox-1-outer'>
                <div className='infobox-2a-profile'>
                </div>
                <div className='infobox-2b-socials'>
                    <h1>{TEXTS.HOME_MAIN}</h1>
                    <div className='infobox-3a-mainpages'>
                        <SocialCardItem
                            social='linkedin'
                            title='Tian Brown'
                            url='https://www.linkedin.com/in/tian-brown/'
                        />
                        <SocialCardItem
                            social='resume'
                            title='Résumé'
                            url='src/assets/Resume 2026.pdf'
                        />
                        <SocialCardItem
                            social='github'
                            title='TLeonBrown'
                            url='https://github.com/TLeonBrown'
                        />
                    </div>
                    <div className='infobox-2c-about-me'>
                        {TEXTS.HOME_SECONDARY.map(line => {
                            return <div className='about-me-line'>
                                <l >{line}</l>
                            </div>
                        })}
                    </div>
                    <div className='infobox-2d-more'>
                        <NavButton url='credits' text='More About Me!'/>
                    </div>
                </div>
            </div>
        </div>
    )
}