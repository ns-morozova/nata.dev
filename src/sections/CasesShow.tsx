import React from 'react';
import { SectionTitle } from '../components/Ui';
import { CaseShow } from '../components/Cards';

const CasesShow: React.FC = () => {
    const projects = [
        {
            video: '/nata.dev/video/shmoneloops.MP4',
            cover: '/nata.dev/images/cover/shmoneloops.png',
            title: 'ShmoneLoops',
        },
        {
            video: '/nata.dev/video/shmoneloops.MP4',
            cover: '/nata.dev/images/cover/shmoneloops.png',
            title: 'ShmoneLoops',
        },
        {
            video: '/nata.dev/video/shmoneloops.MP4',
            cover: '/nata.dev/images/cover/shmoneloops.png',
            title: 'ShmoneLoops',
        },
    ];

    return (
        <section className="relative px-4 py-8 md:px-8 md:py-16">
            {/* <div className="absolute inset-0 w-full h-full bg-black/60 z-10"></div> */}
            <div className="relative max-w-7xl mx-auto">
                <div className="relative z-10">
                    <SectionTitle className="mb-10 md:mb-12">Мои работы</SectionTitle>
                    <div className="mb-10 flex flex-col gap-10 md:gap-16">
                        {projects.map((project, index) => (
                            <CaseShow
                                key={index}
                                video={project.video}
                                cover={project.cover}
                                title={project.title}
                            />
                        ))}
                    </div>
                </div>

                {/* <div className="absolute -right-40 -top-[550px] w-full h-full rotate-180 md:w-full md:top-2">
                    <img
                        alt="shape"
                        src="/nata.dev/images/shapes/Shape2.png"
                        className="w-full object-cover"
                    />
                </div> */}
                
            </div>
        </section>
    );
};

export default CasesShow;