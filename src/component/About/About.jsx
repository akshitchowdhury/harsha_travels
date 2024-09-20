import React from 'react';
import { FaHardHat, FaProjectDiagram, FaUsers, FaRocket, FaHandshake, FaShieldAlt, FaMedal, FaTrophy } from 'react-icons/fa';

import AboutHero from './AboutHero';
import AboutText from './AboutText';
import AboutBody from './AboutBody';
import QuickConnect from './QuickConnect';
import AboutMessage from './AboutMessage';
import CoreValues from './CoreValues';
const About = () => {
  return (
    <>
    <AboutHero/>
    <AboutText/>
    
    <AboutMessage/>
    <AboutBody/>
    <CoreValues/>
    
    <QuickConnect/>
    </>
  );
};

export default About;