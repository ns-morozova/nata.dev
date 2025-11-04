import React, { useState } from 'react';
import { MdExpandMore } from "react-icons/md";
import { MdExpandLess } from "react-icons/md";

export type Media =
  | { type: 'video'; src: string }
  | { type: 'image'; src: string };

interface CaseShowProps {
    media: Media;
    mainImage: string;
    title: string;
    description: string;
    isEven: boolean;
    expandedContent?: React.ReactNode;
    extraClasses?: string;
    expandedBgColor?: string;
}

const CaseWebShow: React.FC<CaseShowProps> = ({
    media,
    mainImage,
    title,
    description,
    isEven,
    expandedContent,
    extraClasses = "",
    expandedBgColor = "rgba(27, 33, 45, 1)",
}) => {
    const [isMediaLoaded, setIsMediaLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const handleMediaLoad = () => setIsMediaLoaded(true);
    const handleMediaError = () => {
        setHasError(true);
        setIsMediaLoaded(false);
    };

    const showPreview = media.type === 'video' && !isMediaLoaded && !hasError;

    return (
        <article className="flex flex-col gap-3 lg:gap-4">
            {/* <div className="flex flex-col gap-3 lg:grid lg:grid-cols-2 lg:gap-x-4"> */}
            <div className="flex flex-col gap-3 lg:flex-row lg:gap-4">
                {/* Блок с демо */}
                <div
                    className={`relative lg:w-1/2 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                >
                    <div className="h-60 border border-white/20 rounded-3xl sm:h-72 md:h-96 lg:h-[500px] overflow-hidden">
                        <img
                            src={mainImage}
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
                    />
                </div>

                {/* Блок инфо */}
                <div
                    className={`grid grid-cols-5 gap-3 lg:lg:w-1/2 lg:flex lg:flex-col lg:h-[500px] ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                >
                    <div className={`relative col-span-3 rounded-3xl px-4 py-3 md:px-6 md:py-5 lg:h-1/2 overflow-hidden ${extraClasses}`}>
                        <div className="relative z-10">
                            <h3 className="mb-3 font-medium text-xl md:mb-5 md:text-3xl">{title}</h3>
                            <p className="text-xs md:text-base xl:w-4/5">{description}</p>
                        </div>
                    </div>

                    <div className="relative col-span-2 border border-white/20 rounded-3xl h-36 lg:h-1/2 overflow-hidden">
                        {showPreview && mainImage && (
                            <img
                                src={mainImage}
                                alt={title}
                                className="w-full h-full object-cover object-[center_3%]"
                                onLoad={handleMediaLoad} // чтобы быстро убрать прелоад, если cover подгрузился
                            />
                        )}

                        {media.type === 'video' ? (
                            <video
                                src={media.src}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className={`w-full h-full object-cover object-[center_5%] ${isMediaLoaded ? 'block' : 'hidden'}`}
                                aria-label={title}
                                onLoadedData={handleMediaLoad}
                                onError={handleMediaError}
                            />
                        ) : (
                            <img
                                src={media.src}
                                alt={title}
                                className="w-full h-full object-cover object-[center_5%]"
                                onLoad={handleMediaLoad}
                                onError={handleMediaError}
                            />
                        )}
                    </div>
                </div>
            </div>

            <div
                className="text-gray-300 text-sm md:text-base"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                {isExpanded ? (
                    <div className="flex items-center gap-1 cursor-pointer">
                        <MdExpandLess className="size-6" />
                        <span>Скрыть детали проекта</span>
                    </div>

                ) : (
                    <div className="flex items-center gap-1 cursor-pointer">
                        <MdExpandMore className="size-6" />
                        <span>Показать детали проекта</span>
                    </div>

                )}
            </div>
            
            {/* Раскрывающийся блок с деталями */}
            {isExpanded && (
                <div
                    className="bg-white/60 rounded-3xl p-4 shadow-lg md:p-6 transition-all duration-500 ease-in-out"
                    style={{
                        maxHeight: isExpanded ? '2000px' : '0',
                        overflow: 'hidden',
                        backgroundColor: `${expandedBgColor}`,
                    }}
                >
                    {expandedContent}
                </div>
            )}
        </article>
    );
};

export default CaseWebShow;
