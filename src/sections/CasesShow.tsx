import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SectionTitle } from '../components/Ui';
import { CaseWebShow } from '../components/Cards';
import { CaseMobShow } from '../components/Cards';
import { ShmoneDetails } from '../details';
import { AcademyDetails } from '../details';
import { TokenhoundDetails } from '../details';
import { QuickmarkDetails } from '../details';
import { PrkillerDetails } from '../details';
import { ChicscoinDetails } from '../details';
import { NeighborDetails } from '../details';
import type { Media } from '../components/Cards/CaseWebShow';

type ProjectWebItem = {
    media: Media;
    mainImage: string;
    title: string;
    description: string;
    expandedContent?: React.ReactNode;
    extraClasses?: string;
    expandedBgColor?: string;
  };

const CasesShow: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        const handleScrollToHash = () => {
            const hash = location.hash;
            if (hash) {
                const element = document.querySelector(hash);
                if (element) {
                    // Определяем смещение в зависимости от ширины экрана
                    const isMobile = window.innerWidth < 768;
                    const offset = isMobile ? 100 : 300;

                    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                    const offsetPosition = elementPosition - offset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth',
                    });
                }
            }
        };

        // Инициализация при монтировании компонента
        handleScrollToHash();

        // Добавляем обработчик изменения размера окна
        window.addEventListener('resize', handleScrollToHash);

        // Удаляем обработчик при размонтировании компонента
        return () => {
            window.removeEventListener('resize', handleScrollToHash);
        };
    }, [location]);

    const projectsWeb: ProjectWebItem[] = [
        {
            media: { type: 'video', src: '/nata.dev/video/shmoneloops.MP4' },
            mainImage: '/nata.dev/images/cover/shmoneloops.png',
            title: 'ShmoneLoops',
            description: 'Современный интерактивный лендинг с анимациями и возможностью записи в лист ожидания',
            expandedContent: <ShmoneDetails />,
            extraClasses: "bg-gradient-to-r from-[#141620] to-[#415674]",
        },
        {
            media: { type: 'video', src: '/nata.dev/video/academy.MP4' },
            mainImage: '/nata.dev/images/cover/academy.png',
            title: 'Beauty Academy',
            description: 'Многостраничный сайт для продажи курсов и обучений в сфере бьюти-индустрии',
            expandedContent: <AcademyDetails />,
            expandedBgColor: "rgba(241, 232, 223, 1)",
            extraClasses: "text-black bg-gradient-to-r from-[#D1A98C] to-[#EBC8A7]",
        },
        {
            media: { type: 'image', src: '/nata.dev/images/cover/tokenhound_ex.png' },
            mainImage: '/nata.dev/images/cover/tokenhound.png',
            title: 'TokenHound',
            description: 'DEX-платформа для торговли криптоактивами',
            expandedContent: <TokenhoundDetails />,
            expandedBgColor: "rgba(27, 27, 31, 1)",
            extraClasses: "bg-gradient-to-r from-[#1B1B1F] to-[#27272A]",
        },
        {
            media: { type: 'video', src: '/nata.dev/video/quickmark.MP4' },
            mainImage: '/nata.dev/images/cover/quickmark.png',
            title: 'Quickmark',
            description: 'Сервис маркировки товаров с лендингом и функциональной админ-панелью',
            expandedContent: <QuickmarkDetails />,
            expandedBgColor: "rgba(255, 226, 168, 1)",
            extraClasses: "text-black bg-gradient-to-r from-[#fe985d] to-[#ffea94]",
        },
        {
            media: { type: 'image', src: '/nata.dev/images/cover/prkiller_exx.png' },
            mainImage: '/nata.dev/images/cover/prkiller.png',
            title: 'PrKiller',
            description: 'Медиа-платформа с функционалом для артистов и медиа',
            expandedContent: <PrkillerDetails />,
            expandedBgColor: "rgba(23, 22, 24, 1)",
            extraClasses: "bg-gradient-to-r from-[#171618] to-[#C04B33]",
        },
        {
            media: { type: 'video', src: '/nata.dev/video/chicscoin.MP4' },
            mainImage: '/nata.dev/images/cover/chicscoin.png',
            title: 'Chicscoin',
            description: 'Мультиязычный лендинг с самостоятельно разработанным дизайном и базовой анимацией',
            expandedContent: <ChicscoinDetails />,
            expandedBgColor: "rgba(38, 38, 38, 0.8)",
            extraClasses: "bg-gradient-to-r from-[#AF0092] to-teal-900",
        },
    ];

    const projectMob = [
        {
            mainImage: '/nata.dev/images/cases/neighbor_ex.png',
            extraImage1: '/nata.dev/images/cases/neighbor_ex2.png',
            extraImage2: '/nata.dev/images/cases/neighbor_ex3.png',
            title: 'Мой товарищ',
            description: 'Мобильное приложение (Telegram Mini App) для поиска жилья в стиле сайта знакомств',
            expandedContent: <NeighborDetails />,
            expandedBgColor: "rgba(255, 232, 174, 1)",
            extraClasses: "text-black bg-[#FFE8AE]",
        },
    ];

    return (
        <section id="cases" className="py-8 px-4 md:py-16 md:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10">
                    <SectionTitle className="mb-10 md:mb-12">Мои работы</SectionTitle>
                    <div className="mb-10 flex flex-col gap-10 md:gap-16 md:mb-20">
                        {projectsWeb.map((project, index) => (
                            <div id={`case-${index}`} key={index}>
                                <CaseWebShow
                                    isEven={index % 2 === 1}
                                    media={project.media}
                                    mainImage={project.mainImage}
                                    title={project.title}
                                    description={project.description}
                                    expandedContent={project.expandedContent}
                                    extraClasses={project.extraClasses}
                                    expandedBgColor={project.expandedBgColor}
                                />
                            </div>
                        ))}
                    </div>

                    <div className="mb-10 flex flex-col gap-10 md:gap-16 md:mb-20">
                        {projectMob.map((project, index) => (
                            <div id={`case-${index}`} key={index}>
                                <CaseMobShow
                                    isEven={index % 2 === 1}
                                    mainImage={project.mainImage}
                                    extraImage1={project.extraImage1}
                                    extraImage2={project.extraImage2}
                                    title={project.title}
                                    description={project.description}
                                    expandedContent={project.expandedContent}
                                    extraClasses={project.extraClasses}
                                    expandedBgColor={project.expandedBgColor}
                                />
                            </div>
                        ))}
                    </div>

                    <p className="w-5/6 mx-auto text-center text-sm md:text-base lg:w-2/3 xl:w-1/2">
                        Часть проектов находится под NDA и не может быть размещена в портфолио. Свяжитесь со мной для уточнения деталей вашего проекта.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CasesShow;