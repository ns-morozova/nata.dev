import React from 'react';
import { SectionTitle } from '../components/Ui';
import { CasePreview } from '../components/Cards';

const CasesPreview: React.FC = () => {
    const projects = [
        {
            image: '/nata.dev/images/unnamed.jpg',
            title: 'ShmoneLoops',
            category: 'Landing',
            description: 'Современный интерактивный лендинг с возможностью записи в лист ожидания',
            link: '/cases/shmoneloops',
        },
        {
            image: '/nata.dev/images/cardpreview-academy.png',
            title: 'Beauty Academy',
            category: 'Educational',
            description: 'Многостраничный сайт для продажи курсов и обучений в сфере бьюти-индустрии',
            link: '/cases/academy',
        },
        {
            image: '/nata.dev/images/cardpreview-chicscoin.jpg',
            title: 'Chicscoin',
            category: 'Landing',
            description: 'Мультиязычный лендинг с самостоятельно разработанным дизайном и базовой анимацией',
            link: '/cases/chicscoin',
        },
    ];

    return (
        <section className="px-4 py-8 lg:px-8 md:py-16">
            <div className="relative max-w-7xl mx-auto">
                <SectionTitle className="mb-10 md:mb-12">Мои работы</SectionTitle>
                <div className="mb-10 grid grid-cols-1 gap-y-10 sm:gap-y-16 md:grid-cols-3 md:gap-x-6 lg:gap-10 xl:grid-cols-3">
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
                    className="group inline-flex items-center text-sm font-medium transition-all duration-500 group-hover:text-teal-300 md:text-base"
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
                        className="ml-1 mt-0.5 h-4 w-4 transition-transform duration-500 group-hover:translate-x-1"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                    </svg>
                </a>
            </div>
        </section>
    );
};

export default CasesPreview;