import React from 'react';

const Banner: React.FC = () => {
    return (
        <div>
            <div
                className="relative bg-cover bg-center bg-no-repeat py-56"
                style={{ backgroundImage: "url('https://avatars.mds.yandex.net/i?id=f747ba761e6132a4858ecb54a7aac605_l-5228069-images-thumbs&n=13')" }}
            >
                <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-200/10 backdrop-blur-md"></div>

                <div className="relative flex">
                    <div className="w-1/2 p-10">
                        <h1 className="text-6xl font-bold text-white uppercase">Developer</h1>
                        <p className="text-xl text-white">There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope.</p>
                        <button className="bg-white text-black px-4 py-2 mt-4 rounded">Learn More</button>
                    </div>
                    <div className="w-1/2"></div>
                </div>
            </div>
        </div>
    );
};

export default Banner;