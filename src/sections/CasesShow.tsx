import React from 'react';
import { SectionTitle } from '../components/Ui';
import { CaseShow } from '../components/Cards';
import { ShmoneDetails } from '../details';
import { AcademyDetails } from '../details';
import { ChicscoinDetails } from '../details';
import { QuickmarkDetails } from '../details';

const CasesShow: React.FC = () => {
    const projects = [
        {
            video: '/nata.dev/video/shmoneloops.MP4',
            cover: '/nata.dev/images/cover/shmoneloops.png',
            title: 'ShmoneLoops',
            description: 'Современный интерактивный лендинг с анимациями и возможностью записи в лист ожидания',
            expandedContent: <ShmoneDetails />,
            extraClasses: "bg-gradient-to-r from-[#141620] to-[#415674]",
        },
        {
            video: '/nata.dev/video/academy.MP4',
            cover: '/nata.dev/images/cover/academy.png',
            title: 'Beauty Academy',
            description: 'Многостраничный сайт для продажи курсов и обучений в сфере бьюти-индустрии',
            expandedContent: <AcademyDetails />,
            expandedBgColor: "rgba(241, 232, 223, 1)",
            extraClasses: "text-black bg-gradient-to-r from-[#D1A98C] to-[#EBC8A7]",
        },
        {
            video: '/nata.dev/video/chicscoin.MP4',
            cover: '/nata.dev/images/cover/chicscoin.png',
            title: 'Chicscoin',
            description: 'Мультиязычный лендинг с самостоятельно разработанным дизайном и базовой анимацией',
            expandedContent: <ChicscoinDetails />,
            expandedBgColor: "rgba(38, 38, 38, 0.8)",
            extraClasses: "bg-gradient-to-r from-[#AF0092] to-teal-900",
        },
        {
            video: '/nata.dev/video/quickmark.MP4',
            cover: '/nata.dev/images/cover/quickmark.png',
            title: 'Quickmark',
            description: 'Сервис маркировки товаров с лендингом и функциональной админ-панелью',
            expandedContent: <QuickmarkDetails />,
            expandedBgColor: "rgba(255, 210, 132, 1)",
            extraClasses: "text-black bg-gradient-to-r from-[#fe985d] to-[#ffea94]",
        },
    ];

    return (
        <section id="cases" className="py-8 px-4 md:py-16 md:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10">
                    <SectionTitle className="mb-10 md:mb-12">Мои работы</SectionTitle>
                    <div className="mb-10 flex flex-col gap-10 md:gap-16 md:mb-20">
                        {projects.map((project, index) => (
                            <CaseShow
                                isEven={index % 2 === 1}
                                key={index}
                                video={project.video}
                                cover={project.cover}
                                title={project.title}
                                description={project.description}
                                expandedContent={project.expandedContent}
                                extraClasses={project.extraClasses}
                                expandedBgColor={project.expandedBgColor}
                            />
                        ))}
                    </div>
                    <p className="w-5/6 mx-auto text-center text-sm md:text-base lg:w-2/3 xl:w-1/2">
                        Часть проектов находится под NDA и не могут быть размещены в портфолио. Свяжитесь со мной для уточнения деталей вашего проекта.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CasesShow;