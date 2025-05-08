import React from 'react';
import { CasePreview } from '../components/Cards';

const CasesPreview: React.FC = () => {
    const projects = [
        {
            image: '/images/unnamed.jpg',
            title: 'ShmoneLoops',
            category: 'Landing',
            description: 'Современный интерактивный лендинг с возможностью записи в лист ожидания',
            link: '/cases/shmoneloops',
        },
        {
            image: '/images/cardpreview-academy.png',
            title: 'Beauty Academy',
            category: 'Educational',
            description: 'Многостраничный сайт для продажи курсов и обучений в бьюти-индустрии',
            link: '/cases/academy',
        },
        {
            image: '/images/cardpreview-chicscoin.jpg',
            title: 'Chicscoin',
            category: 'Landing',
            description: 'Мультиязычный лендинг с самостоятельно разработанным дизайном',
            link: '/cases/chicscoin',
        },
    ];

    return (
        <div className="px-4 py-8 lg:px-8 md:py-16">
            <div className="relative max-w-7xl mx-auto">
                <h2 className="mb-10 font-medium text-5xl uppercase">Мои работы</h2>
                <div className="mb-10 grid grid-cols-1 gap-x-8 gap-y-10 sm:gap-y-16 md:grid-cols-3 lg:gap-10 xl:grid-cols-3">
                    {projects.map((project, index) => (
                        <CasePreview
                            key={index}
                            image={project.image}
                            title={project.title}
                            category={project.category}
                            description={project.description}
                            link={project.link}
                        />
                    ))}
                </div>
                <a
                    href='/cases'
                    className="group inline-flex items-center text-sm font-medium transition-all duration-500 group-hover:text-teal-300"
                >
                    <span className="relative">
                        Посмотреть все проекты
                    </span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="ml-1 h-4 w-4 transition-transform duration-500 group-hover:translate-x-1"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default CasesPreview;