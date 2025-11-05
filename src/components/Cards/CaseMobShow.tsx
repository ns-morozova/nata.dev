import React, { useState } from 'react';
import { MdExpandMore } from "react-icons/md";
import { MdExpandLess } from "react-icons/md";

interface CaseMobShowProps {
    mainImage: string;
    extraImage1: string;
    extraImage2: string;
    title: string;
    description: string;
    // isEven: boolean;
    expandedContent?: React.ReactNode;
    extraClasses?: string;
    expandedBgColor?: string;
}

const CaseMobShow: React.FC<CaseMobShowProps> = ({
    mainImage,
    extraImage1,
    extraImage2,
    title,
    description,
    // isEven,
    expandedContent,
    extraClasses = "",
    expandedBgColor = "rgba(27, 33, 45, 1)",
}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <article className="flex flex-col gap-3 lg:gap-4">
            <div className="flex flex-col gap-3 lg:flex-row lg:gap-4">
                <div className={`rounded-3xl px-4 pt-3 pb-5 md:px-6 md:py-5 lg:w-1/2 overflow-hidden ${extraClasses}`}>
                    <h3 className="mb-3 font-medium text-xl md:mb-5 md:text-3xl">{title}</h3>
                    <p className="text-xs md:text-base xl:w-4/5">{description}</p>
                </div>

                <div className="flex lg:w-1/2">
                    <img src={mainImage} alt={title} className="w-1/3" />
                    <img src={extraImage1} alt={title} className="w-1/3" />
                    <img src={extraImage2} alt={title} className="w-1/3" />
                </div>
            </div>

            <div
                className="w-max text-gray-300 text-sm md:text-base"
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

export default CaseMobShow;
