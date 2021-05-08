import React from 'react';
import Navbar from '../Navbar';
// eslint-disable-next-line import/named
import { HeroBtn, HeroContainer, HeroContent, HeroH1, HeroItem, HeroP } from './HeroElements';

const Hero = () => (
    <HeroContainer>
        <Navbar />
        <HeroContent>
            {/* flex container */}
            <HeroItem>
                {/* flex item */}
                <HeroH1>Greatest Pizaa Ever</HeroH1>
                {/* flex item */}
                <HeroP>Ready in 60 seconds</HeroP>
                {/* flex item */}
                <HeroBtn>Place Order</HeroBtn>
            </HeroItem>
        </HeroContent>
    </HeroContainer>
);

export default Hero;
