import React from 'react';
import { Navbar } from '../marketing';
import { Footer } from '../marketing';
import { Hero } from '../sections';

const Home: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Footer />
        </div>
    );
};

export default Home;