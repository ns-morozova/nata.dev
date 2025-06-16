import React from 'react';
import { FaLaravel } from "react-icons/fa";
import { BiLogoPhp } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { RxComponentBoolean } from "react-icons/rx";
import { MdTranslate } from "react-icons/md";
import { IoLogoGithub } from 'react-icons/io';

const QuickmarkDetails = () => {
    return (
        <div className="text-black">
            <h4 className="mb-3 font-semibold uppercase text-base md:text-xl md:mb-5">
                Детали проекта
            </h4>
            
            <div className="flex flex-col gap-6 lg:flex-row md:gap-7 lg:justify-between lg:gap-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-between lg:w-full">
                    <div className="flex flex-col gap-3 md:flex-row-reverse md:gap-7">
                        <div className="">
                            <h5 className="mb-2 font-medium text-sm md:text-lg">Основные задачи:</h5>
                            <ul className="pl-4 list-disc flex flex-col gap-1 leading-5.5 text-xs sm:pl-3 md:text-base">
                                <li>Разработка дизайна лендинга в соответствии с функциями сервиса</li>
                                <li>Реализация интерфейса</li>
                                <li>Кастомизация админ-панели Filament</li>
                                <li>Возможность переключения админ-панели на альтернативный язык</li>
                            </ul>
                        </div>

                        <div className="flex-shrink-0">
                            <h5 className="mb-2 font-medium text-sm md:text-lg">Стек и технологии:</h5>
                            <ul className="space-y-1 text-xs md:text-base">
                                {[
                                    { icon: <FaLaravel />, text: 'Фреймворк: Laravel' },
                                    { icon: <BiLogoPhp />, text: 'Язык программирования: PHP' },
                                    { icon: <RiTailwindCssFill />, text: 'Стили: Tailwind CSS' },
                                    { icon: <RxComponentBoolean />, text: 'Шаблонизатор: Blade' },
                                    { icon: <MdTranslate />, text: 'Интернационализация: localization' },
                                    { icon: <IoLogoGithub />, text: 'Совместная разработка: GitHub' },
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

                    <div className="hidden sm:block flex-shrink-0 h-80 md:h-64 lg:h-80 xl:h-96">
                        <img
                            alt="mockup"
                            src="/nata.dev/images/cases/quickmark_mob.png"
                            className="relative h-full object-cover"
                        />
                    </div>
                </div>

                <div className="flex gap-2 sm:block lg:h-80 xl:h-96">
                    <div className="sm:hidden w-1/2 flex-shrink-0">
                        <img
                            alt="mockup"
                            src="/nata.dev/images/cases/quickmark_mob.png"
                            className="relative w-full object-cover"
                        />
                    </div>

                    <div className="flex flex-col justify-between gap-2 sm:flex-row lg:flex-col lg:h-full">
                        <div className="order-1 rounded-3xl h-full sm:h-48 sm:w-full md:h-52 lg:h-1/2 lg:w-40 lg:order-2 xl:w-60 overflow-hidden">
                            <img
                                alt=""
                                src="/nata.dev/images/cases/quickmark_ex2.png"
                                className="relative w-full h-full object-cover"
                            />
                        </div>

                        <div className="order-2 rounded-3xl h-full sm:h-48 sm:w-full md:h-52 lg:h-1/2 lg:w-40 lg:order-1 xl:w-60 overflow-hidden">
                            <img
                                alt=""
                                src="/nata.dev/images/cases/quickmark_ex1.png"
                                className="relative w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuickmarkDetails;