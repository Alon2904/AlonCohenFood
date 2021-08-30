import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent,HeroH1,HeroP,HeroBtnWrapper,ArrowForward,ArrowRight } from './HeroElements'
import {Button} from '../ButtonElement'


const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }


    return (
        <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
        </HeroBg>

        <HeroContent>
            <HeroH1>Recipes that everyone loves</HeroH1>
            <HeroP>Visit our website to get some great ideas for great meals</HeroP>

            <HeroBtnWrapper>
                <Button to="subscribe" onMouseEnter={onHover}
                onMouseLeave={onHover} primary="true" dark="true">
                    Subscribe
                </Button>

            </HeroBtnWrapper>
        </HeroContent>

        </HeroContainer>
    )
}

export default HeroSection
