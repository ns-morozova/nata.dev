import React from 'react';
import { FaLaravel } from "react-icons/fa";
import { BiLogoPhp } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { RxComponentBoolean } from "react-icons/rx";
import { IoLogoGithub } from 'react-icons/io';
import { RxFigmaLogo } from 'react-icons/rx';

const AcademyDetails = () => {
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
                            <li>Кастомизация админ-панели Filament</li>
                            <li>Динамическое отображение данных</li>
                        </ul>
                    </div>

                    <div className="">
                        <h5 className="mb-2 font-medium text-sm md:text-lg">Стек и технологии:</h5>
                        <ul className="space-y-1 text-xs md:text-base">
                            {[
                                { icon: <FaLaravel />, text: 'Фреймворк: Laravel' },
                                { icon: <BiLogoPhp />, text: 'Язык программирования: PHP' },
                                { icon: <RiTailwindCssFill />, text: 'Стили: Tailwind CSS' },
                                { icon: <RxComponentBoolean />, text: 'Шаблонизатор: Blade' },
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

                <div></div>
            </div>
        </div>
    );
};

export default AcademyDetails;