import React from 'react';

import InfoSection from './components/InfoSection';
import AboutSection from './components/AboutSection';
import PressSection from './components/PressSection';
import TeamSection from './components/TeamSection';
import InvestorSection from './components/InvestorSection';
import SubscribeSection from './components/SubscribeSection';

require('./index.css');

const Landing = () => (
    <div>
        <InfoSection />
        <AboutSection />
        <PressSection />
        <TeamSection />
        <InvestorSection />
        <SubscribeSection />
    </div>
)

export default Landing;