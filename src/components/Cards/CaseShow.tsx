import React, { useState } from 'react';

interface CaseShowProps {
    video: string;
    cover?: string;
    title: string;
}

const CaseShow: React.FC<CaseShowProps> = ({
    video,
    cover,
    title,
}) => {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    const handleVideoLoad = () => {
        setIsVideoLoaded(true);
    };

    const handleVideoError = () => {
        setHasError(true);
        setIsVideoLoaded(false);
    };

    const showPreview = video && !isVideoLoaded && !hasError;

    return (
        <article className="flex flex-col md:grid md:grid-cols-2 md:gap-x-8">
            <div className="border border-white/20 rounded-3xl overflow-hidden">
                {/* <video
                    src={video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    aria-label={title}
                /> */}

                {showPreview && (
                    <img
                        src={cover}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                )}

                {/* Видео */}
                {video && (
                    <video
                        src={video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className={`w-full h-full object-cover ${isVideoLoaded ? 'block' : 'hidden'}`}
                        aria-label={title}
                        onLoadedData={handleVideoLoad}
                        onError={handleVideoError}
                    />
                )}
            </div>

            <div className="flex flex-col gap-3">
                <div className="h-full border border-pink-700/50 rounded-3xl md:h-full">
                    <span>{title}</span>
                </div>
                <div className="h-full border border-white/20 rounded-3xl md:h-full">
                    <span>lalala</span>
                </div>
            </div>
        </article>
    );
};

export default CaseShow;