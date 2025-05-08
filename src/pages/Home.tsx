import React from 'react';
import { Hero } from '../sections';
import { About } from '../sections';
import { CasesPreview } from '../sections';

const Home: React.FC = () => {
    return (
        <div>
            <Hero />
            <About />
            <CasesPreview />
        </div>
    );
};

export default Home;