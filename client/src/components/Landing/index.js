import React from 'react';

import InfoSection from './components/InfoSection';
import AboutSection from './components/AboutSection';
import TeamSection from './components/TeamSection';
import InvestorSection from './components/InvestorSection';

require('./index.css');

const Landing = () => (
    <div>
        <InfoSection />
        <AboutSection />
        <TeamSection />
        <InvestorSection />
    </div>
)

export default Landing;