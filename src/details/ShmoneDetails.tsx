import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandTypescript } from 'react-icons/tb';
import { IoLogoCss3 } from 'react-icons/io';
import { IoLogoGithub } from 'react-icons/io';
import { RxFigmaLogo } from 'react-icons/rx';
import { AiOutlineApi } from 'react-icons/ai';
import { MdOutlineAnimation } from 'react-icons/md';
// import { LuSquareCheckBig } from "react-icons/lu";

const ShmoneDetails = () => {
    return (
        <div className="text-white">
            <h4 className="mb-3 font-semibold uppercase text-base md:text-xl md:mb-5">
                Детали проекта
            </h4>

            <div className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:gap-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-5 sm:justify-between lg:max-w-4/5">
                    <div className="flex flex-col gap-3 md:flex-row-reverse md:gap-5">
                        <div className="">
                            <h5 className="mb-2 font-medium text-sm md:text-lg">Основные задачи:</h5>
                            <ul className="pl-4 list-disc text-xs sm:pl-5 md:text-base">
                                <li>Реализация интерфейса по готовому дизайн-макету</li>
                                <li>Создание CSS-анимаций</li>
                                <li>Интеграция с API для отправки данных</li>
                            </ul>
                        </div>

                        <div className="flex-shrink-0">
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

                    <div className="hidden sm:block flex-shrink-0 h-80 lg:h-96">
                        <img
                            alt="mockup"
                            src="/nata.dev/images/cases/shmoneloops_mob.png"
                            className="relative h-full object-cover"
                        />
                    </div>

                    {/* <div className="">
                        <h5 className="mb-2 font-medium text-sm md:text-lg">Основные задачи:</h5>
                        <ul className="pl-4 list-disc text-xs sm:pl-5 md:text-base">
                            <li>Реализация интерфейса по готовому дизайн-макету</li>
                            <li>Создание CSS-анимаций</li>
                            <li>Интеграция с API для отправки данных</li>
                        </ul>
                    </div>

                    <div className="flex-shrink-0">
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
                    </div> */}
                </div>

                <div className="flex gap-2 sm:block">
                    <div className="sm:hidden w-1/2 flex-shrink-0">
                        <img
                            alt="mockup"
                            src="/nata.dev/images/cases/shmoneloops_mob.png"
                            className="relative w-full object-cover"
                        />
                    </div>

                    <div className="flex flex-col justify-between gap-2 sm:flex-row">
                        <div className="order-1 rounded-3xl h-full sm:h-48 sm:w-full lg:w-48 lg:order-2 overflow-hidden">
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

                        <div className="order-2 rounded-3xl h-full sm:h-48 sm:w-full lg:w-48 lg:order-1 overflow-hidden">
                            <img
                                alt="mockup"
                                src="/nata.dev/images/cases/shmoneloops_ex.png"
                                className="relative w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* <div className="grid grid-cols-2 gap-2 xs:grid-cols-5 md:flex md:flex-col md:items-end lg:flex-row-reverse lg:items-stretch lg:h-96">
                    <div className="sm:hidden flex-shrink-0 xs:col-span-2 lg:h-96">
                        <img
                            alt="mockup"
                            src="/nata.dev/images/cases/shmoneloops_mob.png"
                            className="relative w-full object-cover"
                        />
                    </div>

                    <div className="flex flex-col gap-2 xs:col-span-3">
                        <div className="order-1 rounded-3xl xs:h-1/2 lg:w-48 lg:order-2 overflow-hidden">
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

                        <div className="order-2 rounded-3xl xs:h-1/2 lg:w-48 lg:order-1 overflow-hidden">
                            <img
                                alt="mockup"
                                src="/nata.dev/images/cases/shmoneloops_ex.png"
                                className="relative w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default ShmoneDetails;