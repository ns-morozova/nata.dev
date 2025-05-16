import React from 'react';
import { Button } from '../components/Ui';
import { Link as ScrollLink } from 'react-scroll';
import { HiCode } from "react-icons/hi";

const HeroCases: React.FC = () => {
    return (
        <section id="herocases" className="relative px-4 md:px-8 overflow-hidden">
            <div className="mx-auto max-w-7xl pt-36 pb-32 sm:pt-60 lg:pt-32">
                <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                    {/* Левая часть: Текст и кнопки */}
                    <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
                        <h1 className="font-semibold uppercase text-5xl sm:text-7xl">
                            Обзор проектов
                        </h1>
                        <p className="mt-8 text-sm sm:max-w-md sm:text-base lg:max-w-none">
                            Качественный фронтенд делает сайты удобными, красивыми и функциональными, превращая идеи в реальный пользовательский опыт.
                        </p>

                        <ScrollLink to="cases" smooth={true} duration={1000}>
                            <Button type="primary" label="смотреть" className="max-w-max uppercase mt-10" />
                        </ScrollLink>
                    </div>

                    {/* Правая часть: Изображения */}
                    <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                        <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                            <div className="relative w-full h-52 md:h-60 lg:h-64 rounded-xl bg-gray-700/45 overflow-hidden">
                                <div className="absolute top-1 w-96 sm:w-80 md:top-auto lg:-right-36 xl:right-auto">
                                    <img
                                        alt="shape"
                                        src="/nata.dev/images/shapes/Shape15.png"
                                        className="w-full object-cover"
                                    />
                                </div>
                                
                            </div>
                        </div>
                        <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                            <div className="relative flex items-center justify-center w-full h-52 md:h-60 lg:h-64 rounded-xl bg-gray-700/45 overflow-hidden">
                                <div className="">
                                    <HiCode className="size-10 text-pink-700" />
                                </div>
                                <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-pink-700/50 to-transparent"></div>
                            </div>
    
                            <div className="relative flex items-center justify-center w-full h-52 md:h-60 lg:h-64 rounded-xl bg-gray-700/45 overflow-hidden">
                                <div className="relative flex flex-col items-center gap-3 font-semibold text-white/90 uppercase text-3xl z-10">
                                    <div className="flex gap-6 md:gap-7">
                                        <span>f</span>
                                        <span className="relative top-[-0.5em]">r</span>
                                    </div>
                                    <span>o</span>
                                    <div className="flex gap-8 pl-3 md:gap-7">
                                        <span>n</span>
                                        <span className="relative top-[0.5em]">t</span>
                                    </div>
                                </div>

                                <div className="absolute -left-24 -top-3 w-[250%] h-full md:top-2">
                                    <img
                                        alt="shape"
                                        src="/nata.dev/images/shapes/Shape10.png"
                                        className="w-full object-cover"
                                    />
                                </div>

                                <div className="absolute inset-0 w-full h-full bg-black/20"></div>
                            </div>
                        </div>
                        <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                            <div className="relative w-full h-52 md:h-60 lg:h-64 rounded-xl bg-gray-700/45">
                                <div className="h-full flex items-center">
                                    <img
                                        alt="shape"
                                        src="/nata.dev/images/shapes/Shape14.png"
                                        className="w-full object-cover"
                                    />
                                </div>
                            </div>
    
                            <div className="relative w-full h-52 md:h-60 lg:h-64 border border-pink-700/50 rounded-xl bg-gray-700/45">
                                <div className="h-full flex justify-center font-semibold text-pink-700 uppercase text-3xl py-12 md:py-16">
                                    <div className="self-start">d</div>
                                    <div className="self-center">e</div>
                                    <div className="self-end">v</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroCases;