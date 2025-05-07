import React from 'react';

const Hero: React.FC = () => {
    return (
        <div className="relative bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://avatars.mds.yandex.net/i?id=f747ba761e6132a4858ecb54a7aac605_l-5228069-images-thumbs&n=13')" }}
        >
            <div className="absolute inset-0 w-full h-full bg-black/60 z-0"></div>
            <div className="max-w-7xl mx-auto py-56">
                <div className="relative flex flex-col">
                    <h1 className="text-6xl font-bold text-white uppercase">Developer</h1>
                    <p className="text-xl text-white">There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope.</p>
                    <button className="bg-white w-max text-black px-4 py-2 mt-4 rounded">Learn More</button>
            </div>
         </div>
    </div>
    );
};

export default Hero;