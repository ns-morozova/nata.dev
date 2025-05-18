import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandTypescript } from 'react-icons/tb';
import { IoLogoCss3 } from 'react-icons/io';
import { IoLogoGithub } from 'react-icons/io';
import { RxFigmaLogo } from 'react-icons/rx';
import { AiOutlineApi } from 'react-icons/ai';
import { MdOutlineAnimation } from 'react-icons/md';

const ShmoneDetails = () => {
    return (
        <div className="text-black">
            <h4 className="mb-3 font-semibold uppercase text-base md:text-xl md:mb-5">
                Детали проекта
            </h4>

            <div className="flex flex-col gap-4 md:flex-row md:justify-between lg:flex-row lg:justify-between lg:gap-6">
                <div className="lg:max-w-1/3">
                    <div className="mb-3 md:mb-5">
                        <h5 className="mb-2 font-medium text-sm md:text-lg">Основные задачи:</h5>
                        <ul className="pl-4 list-disc text-xs sm:pl-5 md:text-base">
                            <li>Реализация интерфейса по готовому дизайн-макету</li>
                            <li>Создание CSS-анимаций</li>
                            <li>Интеграция с API для отправки данных</li>
                        </ul>
                    </div>

                    <div className="">
                        <h5 className="mb-2 font-medium text-sm md:text-lg">Стек и технологии:</h5>
                        <ul className="space-y-1 text-xs md:text-base">
                            {[
                                { icon: <RiReactjsLine />, text: 'Библиотека: React' },
                                { icon: <TbBrandTypescript />, text: 'Язык программирования: TypeScript' },
                                { icon: <IoLogoCss3 />, text: 'Стили: CSS-модули' },
                                { icon: <AiOutlineApi />, text: 'Работа с данными: Fetch API' },
                                { icon: <MdOutlineAnimation />, text: 'Анимации: CSS-анимации' },
                                { icon: <IoLogoGithub />, text: 'Совместная разработка: GitHub' },
                                { icon: <RxFigmaLogo />, text: 'Работа с дизайн-макетом: Figma' },
                            ].map(({ icon, text }, index) => (
                                <li
                                    key={index}
                                    className="flex items-center gap-2 md:gap-2.5"
                                >
                                    <div className="flex flex-shrink-0 size-6 items-center justify-center rounded-lg bg-gradient-to-r from-pink-900 to-pink-600 md:size-7 overflow-hidden">
                                        {React.cloneElement(icon, {
                                            className: 'text-white size-4 md:size-5',
                                        })}
                                    </div>
                                    <p>{text}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="flex gap-2 md:flex-col md:items-end lg:flex-row-reverse lg:items-stretch lg:h-96">
                    <div className="flex-shrink-0 h-56 lg:h-96">
                        <img
                            alt="mockup"
                            src="/nata.dev/images/cases/shmoneloops_mob.png"
                            className="relative h-full object-cover"
                        />
                    </div>

                    <div className="flex flex-col justify-between gap-2">
                        <div className="flex-grow-1 px-4 py-3 border border-black/30 rounded-2xl sm:rounded-3xl md:px-6 md:py-5 lg:flex-grow-1 overflow-hidden"></div>
                        <div className="grid grid-cols-2 gap-2 xs:flex">
                            <div className="order-1 rounded-2xl xs:w-28 sm:rounded-3xl lg:w-48 lg:order-2 overflow-hidden">
                                <video
                                    src="/nata.dev/video/shmoneloops_anim.MP4"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover"
                                    aria-label="animation"
                                />
                            </div>

                            <div className="aspect-square order-2 rounded-2xl xs:w-28 sm:rounded-3xl lg:w-48 lg:order-1 overflow-hidden">
                                <img
                                    alt="mockup"
                                    src="/nata.dev/images/cases/shmoneloops_ex.png"
                                    className="relative h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShmoneDetails;