import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandTypescript } from 'react-icons/tb';
import { IoLogoCss3 } from 'react-icons/io';
import { IoLogoGithub } from 'react-icons/io';
import { RxFigmaLogo } from 'react-icons/rx';
import { AiOutlineApi } from 'react-icons/ai';
import { TbWebhook } from "react-icons/tb";

const TokenhoundDetails = () => {
    return (
        <div className="text-white">
            <h4 className="mb-3 font-semibold uppercase text-base md:text-xl md:mb-5">
                Детали проекта
            </h4>

            <div className="flex flex-col gap-6 lg:flex-row md:gap-7 lg:justify-between lg:gap-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-between lg:w-full">
                    <div className="flex flex-col gap-3 md:flex-row-reverse md:gap-7">
                        <div className="">
                            <h5 className="mb-2 font-medium text-sm md:text-lg">Основные задачи:</h5>
                            <ul className="pl-4 list-disc flex flex-col gap-1 leading-5.5 text-xs sm:pl-3 md:text-base">
                                <li>Реализация интерфейса по готовому дизайн-макету</li>
                                <li>Интеграция с бэкендом через API</li>
                            </ul>
                        </div>

                        <div className="flex-shrink-0">
                            <h5 className="mb-2 font-medium text-sm md:text-lg">Стек и технологии:</h5>
                            <ul className="space-y-1 text-xs md:text-base">
                                {[
                                    { icon: <RiReactjsLine />, text: 'Библиотека: React' },
                                    { icon: <TbBrandTypescript />, text: 'Язык программирования: TypeScript' },
                                    { icon: <IoLogoCss3 />, text: 'Стили: SCSS-модули' },
                                    { icon: <AiOutlineApi />, text: 'Работа с данными: Fetch API' },
                                    { icon: <TbWebhook />, text: 'Работа с состоянием: React Hooks' },
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
                </div>
            </div>
        </div>
    );
};

export default TokenhoundDetails;