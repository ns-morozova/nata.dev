import React from 'react';
import { Button } from '../components/Ui';
import { Link as ScrollLink } from 'react-scroll';

const Hero: React.FC = () => {
    return (
        <section id="home" className="relative px-4 md:px-8 overflow-hidden">
            <div className="absolute inset-0 w-full h-full bg-black/20 z-10"></div>
            <div className="relative max-w-7xl mx-auto py-52 md:py-56">
                <div className="relative flex flex-col">
                    <div className="relative flex flex-col z-10">
                        <h1 className="font-semibold uppercase text-5xl md:text-7xl">
                            Frontend <br></br> Developer
                        </h1>
                        <p className="mt-8 w-5/6 text-sm sm:w-2/3 sm:text-base md:w-3/5 lg:w-1/2">
                            Качественный фронтенд делает сайты удобными, красивыми и функциональными, превращая идеи в реальный пользовательский опыт.
                        </p>
                        <ScrollLink to="about" smooth={true} duration={1000}>
                            <Button
                                type="primary"
                                label="узнать больше"
                                className="max-w-max uppercase mt-8"
                            />
                        </ScrollLink>
                    </div>

                    <div className="absolute w-[500px] -top-96 -right-72 md:-top-[400px] lg:-top-48 lg:-right-36 xl:-top-40 xl:-right-28">
                        <img
                            alt=""
                            src="/nata.dev/images/shapes/Shape12.png"
                            className="w-full"
                        />
                    </div>

                    {/* <div className="absolute w-96 -bottom-64 -right-60 -rotate-15">
                        <img
                            alt=""
                            src="/nata.dev/images/shapes/Shape12.png"
                            className="w-full"
                        />
                    </div> */}

                    <div className="absolute w-96 -bottom-56 -right-56 lg:-bottom-60 lg:right-36 xl:right-60 xl:-bottom-60">
                        <img
                            alt=""
                            src="/nata.dev/images/shapes/Shape14.png"
                            className="w-full"
                        />
                    </div>

                    {/* <div className="absolute -top-80 -right-44 w-[500px] md:w-[950px] md:-right-[500px]">
                        <img
                            alt=""
                            src="/nata.dev/images/shapes/Shape7.png"
                            className="w-full"
                        />
                    </div>

                    <div className="absolute -bottom-60 -left-68 w-[500px] md:w-[1288px] md:-left-[750px] lg:w-[1600px] lg:-left-[850px] lg:-bottom-96">
                        <img
                            alt=""
                            src="/nata.dev/images/shapes/Shape10.png"
                            className="w-full"
                        />
                    </div> */}
                    
            </div>
         </div>
        </section>
    );
};

export default Hero;