import React from 'react';
import { HeroBtn, HeroContainer, HeroContent, HeroH1, HeroItems, HeroP } from './HeroElements'

function Hero () {  
    return (
        <>
            <HeroContainer>
                <HeroContent>
                    <HeroItems>
                        <HeroH1>Greatest Desserts Ever</HeroH1>
                        <HeroP>Delights for you</HeroP>
                        <HeroBtn href='/contact'>Place Order</HeroBtn>
                    </HeroItems>
                </HeroContent>
            </HeroContainer>  
        </>
    );
}

export default Hero;
