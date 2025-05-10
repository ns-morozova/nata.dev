import React from 'react';

interface CasePreviewProps {
    image: string;
    title: string;
    category: string;
    description: string;
    link: string;
}

const CasePreview: React.FC<CasePreviewProps> = ({
    image,
    title,
    category,
    description,
    link,
}) => {
    return (
        <div className="group relative rounded-2xl bg-white shadow-lg transition-all duration-500 hover:shadow-2xl overflow-hidden z-10">
            {/* Градиентные эффекты */}
            <div className="absolute -right-12 -top-12 z-10 h-24 w-24 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-700 opacity-0 blur-xl transition-opacity duration-700 group-hover:opacity-80"></div>
            <div className="absolute -left-12 -bottom-12 z-10 h-24 w-24 rounded-full bg-gradient-to-tr from-slate-300 to-slate-500 opacity-0 blur-xl transition-opacity duration-700 group-hover:opacity-80"></div>

            {/* Изображение */}
            <div className="h-full min-h-60 max-h-60 sm:min-h-72 sm:max-h-72 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="relative w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                <div className="absolute inset-0 ring-1 ring-inset ring-white/0 transition-all duration-500 group-hover:ring-white/20"></div>
                <div className="absolute inset-0 w-full h-full bg-black/30 z-0"></div>
            </div>

            {/* Категория */}
            <div className="absolute top-4 left-4 md:left-6">
                <div className="inline-flex items-center rounded-full bg-gradient-to-r from-cyan-700 to-cyan-400 px-3 py-1 text-xs font-medium text-white shadow-sm transition-transform duration-500 group-hover:scale-105">
                    {category}
                </div>
            </div>

            {/* Инфо */}
            <div className="absolute bottom-0 w-full h-max bg-gray-900/70">
                <div className="px-4 py-3 md:px-6 md:py-4">
                    <h3 className="mb-2 text-xl font-bold text-white opacity-90 transition-all duration-500 group-hover:opacity-100 group-hover:text-cyan-50">
                        {title}
                    </h3>
                    <p className="mb-2 line-clamp-4 text-sm text-white/80 transition-all duration-500 group-hover:text-white/95">
                        {description}
                    </p>
                    <a
                        href={link}
                        className="inline-flex items-center text-sm font-medium text-cyan-400 transition-all duration-500 group-hover:text-cyan-300"
                    >
                        <span className="relative">
                            Подробнее о проекте
                            <span className="absolute bottom-0 left-0 h-px w-0 bg-cyan-300 transition-all duration-500 group-hover:w-full"></span>
                        </span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="ml-1 mt-0.5 h-4 w-4 transition-transform duration-500 group-hover:translate-x-1"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CasePreview;