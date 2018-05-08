import React from 'react';

import Header from './components/Header';
import InfoSection from './components/InfoSection';
import AboutSection from './components/AboutSection';
import PressSection from './components/PressSection';

require('./index.css');

const Landing = () => (
    <div>
        <Header />
        <InfoSection />
        <AboutSection />
        <PressSection />
    </div>
)

export default Landing;