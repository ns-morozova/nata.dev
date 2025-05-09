import React from 'react';
import { Hero } from '../sections';
import { About } from '../sections';
import { CasesPreview } from '../sections';
import { Stack } from '../sections';

const Home: React.FC = () => {
    return (
        <div>
            <Hero />
            <About />
            <CasesPreview />
            <Stack />
        </div>
    );
};

export default Home;