import React from 'react';

const Hero: React.FC = () => {
    return (
        <section id="home" className="relative bg-cover bg-center bg-no-repeat px-4 md:px-8 md:bg-top overflow-hidden"
            style={{ backgroundImage: "url('/nata.dev/images/banner-hero.jpg')" }}
        >
            <div className="absolute inset-0 w-full h-full bg-black/60 z-0"></div>
            <div className="relative max-w-7xl mx-auto py-56 md:py-56">
                <div className="relative flex flex-col">
                    <h1 className="font-semibold uppercase text-5xl md:text-7xl">
                        Frontend <br></br> Developer
                    </h1>
                    <p className="w-5/6 text-sm sm:w-2/3 md:w-3/5 md:text-base lg:w-1/2 xl:w-2/5">
                        There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope.
                    </p>
                    <button className="bg-white w-max text-black px-4 py-2 mt-4 rounded">Learn More</button>

                    <img
                        alt=""
                        src="/nata.dev/images/spheres/GEO_SPHERE 18.png"
                        className="absolute top-0 -right-10 w-44"
                    />
            </div>
         </div>
        </section>
    );
};

export default Hero;