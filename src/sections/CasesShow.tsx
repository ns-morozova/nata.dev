import React from 'react';
import { SectionTitle } from '../components/Ui';
import { CaseShow } from '../components/Cards';
import { ShmoneDetails } from '../details';

const CasesShow: React.FC = () => {
    const projects = [
        {
            video: '/nata.dev/video/shmoneloops.MP4',
            cover: '/nata.dev/images/cover/shmoneloops.png',
            title: 'ShmoneLoops',
            description: 'Современный интерактивный лендинг с анимациями и возможностью записи в лист ожидания',
            expandedContent: <ShmoneDetails />,
        },
        {
            video: '/nata.dev/video/shmoneloops.MP4',
            cover: '/nata.dev/images/cover/academy.png',
            title: 'Beauty Academy',
            description: 'Многостраничный сайт для продажи курсов и обучений в сфере бьюти-индустрии',
            expandedContent: (
                <div>
                    <h4 className="text-lg font-medium">Особенности:</h4>
                    <ul className="list-disc pl-4">
                        <li>Адаптивный дизайн;</li>
                        <li>Интерактивные элементы;</li>
                        <li>Интеграция с платежными системами.</li>
                    </ul>
                </div>
            ),
        },
        {
            video: '/nata.dev/video/chicscoin.MP4',
            cover: '/nata.dev/images/cover/chicscoin.png',
            title: 'Chicscoin',
            description: 'Мультиязычный лендинг с самостоятельно разработанным дизайном и базовой анимацией',
            expandedContent: (
                <div>
                    <h4 className="text-lg font-medium">Особенности:</h4>
                    <ul className="list-disc pl-4">
                        <li>Адаптивный дизайн;</li>
                        <li>Интерактивные элементы;</li>
                        <li>Интеграция с платежными системами.</li>
                    </ul>
                </div>
            ),
        },
    ];

    return (
        <section id="cases" className="py-8 px-4 md:py-16 md:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10">
                    <SectionTitle className="mb-10 md:mb-12">Мои работы</SectionTitle>
                    <div className="mb-10 flex flex-col gap-10 md:gap-16">
                        {projects.map((project, index) => (
                            <CaseShow
                                isEven={index % 2 === 1}
                                key={index}
                                video={project.video}
                                cover={project.cover}
                                title={project.title}
                                description={project.description}
                                expandedContent={project.expandedContent}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CasesShow;