import React from 'react';

const About: React.FC = () => {

    return (
        <div className="px-4 py-8 md:px-8 md:py-16">
            <div className="relative max-w-7xl mx-auto">
                <div className="flex flex-col gap-10 md:gap-16">
                    <div className="md:max-w-2/3">
                        <h2 className="mb-6 md:mb-10 font-medium text-5xl uppercase">Обо мне</h2>
                        <div className="flex flex-col gap-5 text-sm md:text-base">
                            <p>
                                Всем привет! Меня зовут Наташа, я фронтенд-разработчик.
                            </p>
                            <p>
                                Горю своим делом и результатом, постоянно учусь новому и расширяю свои навыки, не боюсь браться за сложные задачи и стремлюсь доводить работу до максимально качественного результата.
                            </p>
                            <p>
                                Всегда открыта предложениям и рада новым проектам и продуктивному сотрудничеству!
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6 md:flex-row md:justify-between md:gap-16">
                        <div className="aspect-5/6 max-h-[550px] rounded-3xl md:w-1/2 overflow-hidden">
                            <img
                                alt=""
                                src="/nata.dev/images/me.JPG"
                                className="w-full h-full object-cover object-[center_35%]"
                            />
                        </div>
                        <div className="flex flex-col gap-6 md:w-1/2 md:gap-8">
                            <div className="relative pb-6 md:pb-8">
                                <h3 className="mb-4 font-medium text-xl md:text-2xl">
                                    Анкета
                                </h3>
                                <div className="w-max grid grid-cols-2 gap-x-6 gap-y-3 text-sm md:text-base md:gap-x-10">
                                    <p>Должность:</p>
                                    <p>Frontend-разработчик <br></br> (junior+)</p>
                                    <p>Возраст:</p>
                                    <p>25 лет</p>
                                    <p>Город проживания:</p>
                                    <p>Санкт-Петербург</p>
                                    <p>Образование:</p>
                                    <p>Оконченное высшее</p>
                                </div>
                                <div
                                    className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-cyan-600 to-cyan-300 md:h-0.5 transition-all duration-2000 ease-out"
                                ></div>
                            </div>

                            <div className="relative pb-6 md:pb-8">
                                <h3 className="mb-4 font-medium text-xl md:text-2xl">
                                    Опыт работы
                                </h3>
                                <p className="mb-3 text-sm md:text-base">
                                    Апрель 2024 - текущее время
                                </p>
                                <p className="text-sm md:text-base">
                                    За это время удалось поработать с проектами для Израиля, Норвегии и России, а также принять участие в разработке сервиса маркировки для стран СНГ
                                </p>
                                <div
                                    className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-cyan-600 to-cyan-300 md:h-0.5 transition-all duration-2000 ease-out"
                                ></div>
                            </div>

                            <a
                                href="/"
                                className="group inline-flex items-center text-sm font-medium transition-all duration-500 md:text-base"
                            >
                                <span className="relative">
                                    Ознакомиться со стеком технологий
                                </span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="ml-1 h-4 w-4 transition-transform duration-500 group-hover:translate-x-1"
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
            </div>
        </div>
    );
};

export default About;