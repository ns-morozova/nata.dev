import React from 'react';
import { SectionTitle } from '../components/Ui';
import { IoLogoCss3 } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";

import { IoGitMerge } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
import { TbBrandVite } from "react-icons/tb";
import { SiWebpack } from "react-icons/si";
import { RxFigmaLogo } from "react-icons/rx";
import { VscVscodeInsiders } from "react-icons/vsc";

import { FaLaravel } from "react-icons/fa";
import { SiFilament } from "react-icons/si";

const Stack: React.FC = () => {
    const stack = [
        {
            name: 'HTML5',
            description:
                'Семантическая разметка',
            icon: IoLogoHtml5,
        },
        {
            name: 'JavaScript',
            description:
                'Динамика и интерактив',
            icon: IoLogoJavascript,
        },
        {
            name: 'CSS3',
            description:
                'Адаптивность, Flexbox, Grid',
            icon: IoLogoCss3,
        },
        {
            name: 'Tailwind CSS',
            description:
                'Быстрая вёрстка через утилиты',
            icon: RiTailwindCssFill,
        },
        {
            name: 'React',
            description:
                'Компонентный подход',
            icon: RiReactjsLine,
        },
        {
            name: 'TypeScript ',
            description:
                'Типизация для надежности',
            icon: TbBrandTypescript,
        },
    ]

    const tools = [
        {
            name: 'Git',
            description:
                'Контроль версий',
            icon: IoGitMerge,
        },
        {
            name: 'GitHub',
            description:
                'Совместная разработка',
            icon: IoLogoGithub,
        },
        {
            name: 'Vite',
            description:
                'Сборка проектов, оптимизация',
            icon: TbBrandVite,
        },
        {
            name: 'Webpack',
            description:
                'Сборка проектов, оптимизация',
            icon: SiWebpack,
        },
        {
            name: 'Figma',
            description:
                'Работа с дизайн-макетами',
            icon: RxFigmaLogo,
        },
        {
            name: 'VS Code',
            description:
                'Редактор кода',
            icon: VscVscodeInsiders,
        },
    ]

    return (
        <section id="stack" className="px-4 py-8 lg:px-8 md:py-16">
            <div className="max-w-7xl mx-auto">
                <SectionTitle className="mb-10 md:mb-12">Инструменты разработки</SectionTitle>
                <div className="mb-10 md:mb-16">
                    <h3 className="mb-6 font-medium text-lg md:text-xl">Основной стек</h3>
                    <div className="grid grid-cols-2 gap-y-6 md:grid-cols-3 md:gap-y-10 md:gap-x-6 lg:gap-x-10">
                        {stack.map((item) => (
                            <div key={item.name} className="flex items-center gap-3 lg:gap-5">
                                <div className="flex flex-shrink-0 size-13 items-center justify-center rounded-lg bg-gradient-to-r from-cyan-700 to-cyan-400 lg:size-10">
                                    <item.icon aria-hidden="true" className="size-6 text-white" />
                                </div>
                                <div>
                                    <dt className="font-medium text-sm md:text-base md:leading-3 md:mb-2">{item.name}</dt>
                                    <dd className="text-gray-400 text-xs md:text-sm md:leading-3.5">{item.description}</dd>
                                </div> 
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mb-10 md:mb-16">
                    <h3 className="mb-6 font-medium text-lg md:text-xl">Инструменты и прочее</h3>
                    <div className="grid grid-cols-2 gap-y-6 md:grid-cols-3 md:gap-y-10 md:gap-x-6 lg:gap-x-10">
                        {tools.map((item) => (
                            <div key={item.name} className="flex items-center gap-3 lg:gap-5">
                                <div className="flex flex-shrink-0 size-13 items-center justify-center rounded-lg bg-gradient-to-r from-green-800 to-green-400 lg:size-10">
                                    <item.icon aria-hidden="true" className="size-6 text-white" />
                                </div>
                                <div>
                                    <dt className="font-medium text-sm md:text-base md:leading-3 md:mb-2">{item.name}</dt>
                                    <dd className="text-gray-400 text-xs md:text-sm md:leading-3.5">{item.description}</dd>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="mb-6 font-medium text-lg md:text-xl">Дополнительно</h3>
                    <div className="grid sm:grid-cols-2">
                        <div className="flex gap-4 lg:gap-7">
                            <div className="h-full flex flex-col gap-3.5 md:gap-3.5">
                                {/* <div className="flex flex-shrink-0 size-13 items-center justify-center rounded-lg bg-gradient-to-r from-amber-700 to-amber-400 lg:size-10">
                                    <FaLaravel className="size-6 text-white" />
                                </div> */}
                                <div className="relative flex items-center justify-center w-24 !h-1/2 rounded-lg bg-gradient-to-r from-amber-700 to-amber-400">
                                    <FaLaravel className="absolute size-6 text-white" />
                                </div>
                                <div className="relative flex items-center justify-center w-24 !h-1/2 rounded-lg bg-gradient-to-r from-amber-700 to-amber-400 lg:h-10">
                                    <SiFilament className="absolute size-14 text-white" />
                                </div>
                            </div>

                            <div>
                                <p className="mb-0.5 font-medium text-sm md:text-base md:leading-3 md:mb-4">
                                    Laravel
                                </p>
                                <div className="flex flex-col gap-2 text-gray-400 text-xs md:text-sm md:leading-3.5 md:gap-2.5">
                                    <p>- Blade-компоненты для управления фронтендом</p>
                                    <p>- Взаимодействие с backend-логикой</p>
                                    <p>- Laravel Filament: настройка ресурсов, кастомизация интерфейса</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default Stack;