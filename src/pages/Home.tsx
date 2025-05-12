import React from 'react';
import { Hero } from '../sections';
import { About } from '../sections';
import { SiteCreation } from '../sections';
import { CasesPreview } from '../sections';
import { Stack } from '../sections';
import { Education } from '../sections';

const Home: React.FC = () => {
    return (
        <div className="overflow-hidden">
            <Hero />
            <About />
            <SiteCreation />
            <CasesPreview />
            <Stack />
            <Education />
        </div>
    );
};

export default Home;