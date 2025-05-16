import React, { useState } from 'react';
import { MdExpandMore } from "react-icons/md";
import { MdExpandLess } from "react-icons/md";

interface CaseShowProps {
    video: string;
    cover?: string;
    title: string;
    description: string;
    isEven: boolean;
    expandedContent?: React.ReactNode;
}

const CaseShow: React.FC<CaseShowProps> = ({
    video,
    cover,
    title,
    description,
    isEven,
    expandedContent,
}) => {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const handleVideoLoad = () => {
        setIsVideoLoaded(true);
    };

    const handleVideoError = () => {
        setHasError(true);
        setIsVideoLoaded(false);
    };

    const showPreview = video && !isVideoLoaded && !hasError;

    return (
        <article className="flex flex-col gap-3 lg:gap-4">
            <div className="flex flex-col gap-3 lg:grid lg:grid-cols-2 lg:gap-x-4">
                {/* Блок с демо */}
                <div
                    className={`relative ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                >
                    <div className="h-56 border border-white/20 rounded-3xl sm:h-72 md:h-96 lg:h-[500px] overflow-hidden">
                        <img
                            src={cover}
                            alt={title}
                            className="w-full h-full object-cover object-[center_3%]"
                        />
                    </div>

                    <div
                        className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full h-full lg:w-5/6 lg:h-5/6 -z-10"
                        style={{
                            background:
                                'radial-gradient(circle, rgba(190, 24, 93, 0.9), rgba(55, 65, 81, 0.9))',
                            filter: 'blur(170px)',
                            willChange: 'transform, opacity',
                        }}
                    >
                    </div>
                </div>

                {/* Блок инфо */}
                <div
                    className={`grid grid-cols-3 gap-3 lg:flex lg:flex-col ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                >
                    <div className="relative col-span-2 bg-gray-700/45 rounded-3xl px-4 py-3 md:px-6 md:py-5 lg:h-1/2 overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="mb-3 font-medium text-xl md:mb-5 md:text-3xl">{title}</h3>
                            <p className="text-white/80 text-xs md:text-base xl:w-4/5">{description}</p>
                        </div>

                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-700/50 to-transparent"></div>
                    </div>

                    <div className="relative border border-white/20 rounded-3xl lg:h-1/2 overflow-hidden">
                        {showPreview && (
                            <img
                                src={cover}
                                alt={title}
                                className="w-full h-full object-cover object-[center_3%]"
                            />
                        )}

                        {video && (
                            <video
                                src={video}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className={`w-full h-full object-cover object-[center_5%] ${isVideoLoaded ? 'block' : 'hidden'}`}
                                aria-label={title}
                                onLoadedData={handleVideoLoad}
                                onError={handleVideoError}
                            />
                        )}

                        <div
                            className={`absolute bottom-2 right-2 ${isEven ? 'lg:right-auto lg:left-2' : ''} flex items-center justify-center p-1 border border-white/40 text-white/60 rounded-full hover:border-white/50 hover:text-white/70 cursor-pointer transition-all duration-300`}
                            onClick={() => setIsExpanded(!isExpanded)}
                        >
                            {isExpanded ? (
                                <MdExpandLess className="size-6" />
                            ) : (
                                <MdExpandMore className="size-6" />
                            )}
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Раскрывающийся блок с деталями */}
            {isExpanded && (
                <div
                    className="bg-white/60 rounded-3xl px-4 py-3 shadow-lg md:px-6 md:py-4 transition-all duration-500 ease-in-out"
                    style={{ maxHeight: isExpanded ? '1000px' : '0', overflow: 'hidden' }}
                >
                    {expandedContent}
                </div>
            )}
        </article>
    );
};

export default CaseShow;