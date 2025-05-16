import React from 'react';
import { HeroCases } from '../sections';
import { CasesShow } from '../sections';

const Cases: React.FC = () => {
    return (
        <div className="overflow-hidden">
            <HeroCases />
            <CasesShow />
        </div>
    );
};

export default Cases;