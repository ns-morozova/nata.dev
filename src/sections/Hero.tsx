import React from 'react';

const Hero: React.FC = () => {
    return (
        <section id="home" className="px-4 md:px-8 overflow-hidden">
        {/* <section id="home" className="relative bg-cover bg-center bg-no-repeat px-4 md:px-8 md:bg-top overflow-hidden"
            style={{ backgroundImage: "url('/nata.dev/images/banner-hero.jpg')" }}
        > */}
            <div className="absolute inset-0 w-full h-full bg-black/40 z-10"></div>
            <div className="relative max-w-7xl mx-auto py-52 md:py-56">
                <div className="relative flex flex-col">
                    <div className="relative flex flex-col z-10">
                        <h1 className="font-semibold uppercase text-5xl md:text-7xl">
                            Frontend <br></br> Developer
                        </h1>
                        <p className="w-5/6 text-sm sm:w-2/3 md:w-3/5 md:text-base lg:w-1/2 xl:w-2/5">
                            There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope.
                        </p>
                        <button className="bg-white w-max text-black px-4 py-2 mt-4 rounded">Learn More</button>
                    </div>

                    <div className="absolute -top-80 -right-[550px] w-[1288px]">
                        <img
                            alt=""
                            src="/nata.dev/images/spheres/GEO_SPHERE 6.png"
                            className="w-full"
                        />
                    </div>

                    <div className="absolute -bottom-60 -left-68 w-[500px] md:w-[1288px] md:-left-[750px] lg:w-[1600px] lg:-left-[850px] lg:-bottom-96">
                        <img
                            alt=""
                            src="/nata.dev/images/spheres/GEO_SPHERE 6.png"
                            className="w-full"
                        />
                    </div>
                    
            </div>
         </div>
        </section>
    );
};

export default Hero;