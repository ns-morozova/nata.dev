import React from 'react';
import { Hero } from '../sections';
import CasesPreview from '../sections/CasesPreview';

const Home: React.FC = () => {
    return (
        <div>
            <Hero />
            <CasesPreview />
        </div>
    );
};

export default Home;