import React from 'react';
import { InfoSection } from '../../components/index';
import { aboutObjOne, aboutObjTwo, aboutObjThree } from './aboutElements';

function About() {
    return (
        <>
            <InfoSection {...aboutObjOne} />
            <InfoSection {...aboutObjThree} />
            <InfoSection {...aboutObjTwo} />
        </>
    );
};

export default About;