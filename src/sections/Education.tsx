import React from 'react';
import { SectionTitle } from '../components/Ui';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { HiAcademicCap } from "react-icons/hi2";

const Education: React.FC = () => {
    const cards = [
        {
            id: 1,
            image: '/nata.dev/images/certificates/1.jpg',
            description: 'Основы программирования',
        },
        {
            id: 2,
            image: '/nata.dev/images/certificates/2.jpg',
            description: 'Основы JavaScript',
        },
        {
            id: 3,
            image: '/nata.dev/images/certificates/3.jpg',
            description: 'Основы JavaScript в браузере',
        },
        {
            id: 4,
            image: '/nata.dev/images/certificates/4.jpg',
            description: 'Продвинутый JavaScript',
        },
        {
            id: 5,
            image: '/nata.dev/images/certificates/5.jpg',
            description: 'Продвинутый JavaScript в браузере',
        },
        {
            id: 6,
            image: '/nata.dev/images/certificates/6.jpg',
            description: 'Библиотека React',
        },
        {
            id: 7,
            image: '/nata.dev/images/certificates/7.jpg',
            description: 'Основы PHP',
        },
        {
            id: 8,
            image: '/nata.dev/images/certificates/8.jpg',
            description: 'Продвинутый PHP',
        },
        {
            id: 9,
            image: '/nata.dev/images/certificates/9.jpg',
            description: 'Фреймворк Laravel',
        },
        {
            id: 10,
            image: '/nata.dev/images/certificates/10.jpg',
            description: 'Git - система контроля версий',
        },
        {
            id: 11,
            image: '/nata.dev/images/certificates/11.jpg',
            description: 'HTML-верстка',
        },
        {
            id: 12,
            image: '/nata.dev/images/certificates/12.jpg',
            description: 'Адаптивная и мобильная верстка',
        },
    ];

    return (
        <section className="relative px-4 py-12 md:px-8 md:py-16">
            <div className="max-w-7xl mx-auto">
                <SectionTitle className="mb-10 md:mb-12">Образование</SectionTitle>
                <div className="mb-10 flex flex-col gap-3 md:mb-12 md:flex-row md:items-start md:gap-5 lg:gap-10">
                    <div className="flex gap-3">
                        <HiAcademicCap className="size-6" />
                        <p className="text-sm md:text-base">
                            Высшее образование: ИвГПУ, 2022<br></br> Информационные системы и технологии
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <HiAcademicCap className="size-6" />
                        <p className="text-sm md:text-base">Повышение квалификации: <br></br>Профильное обучение</p>
                    </div>
                </div>

                <div className="relative px-8.5 md:px-8">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={20} // Расстояние между слайдами
                        slidesPerView={1} // Количество видимых слайдов
                        navigation={{
                            prevEl: '.swiper-button-prev', // Класс для кнопки "назад"
                            nextEl: '.swiper-button-next', // Класс для кнопки "вперед"
                        }}
                        loop={true} // Зацикленность
                        breakpoints={{
                            640: {
                                slidesPerView: 2, // На маленьких экранах 2 слайда
                            },
                            1024: {
                                slidesPerView: 3, // На больших экранах 3 слайда
                            },
                        }}
                        className="swiper-container"
                    >
                        {cards.map((card) => (
                            <SwiperSlide key={card.id}>
                                <div className="flex flex-col items-center text-center">
                                    <img
                                        src={card.image}
                                        alt={`Card ${card.id}`}
                                        className="w-full h-auto object-cover rounded-lg mb-4 md:mb-2"
                                    />
                                    <p className="font-medium text-xs md:text-sm">{card.description}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="swiper-button-prev absolute left-0 -ml-4 top-1/2 -translate-y-1/2 z-10"></div>
                    <div className="swiper-button-next absolute right-0 -mr-4 top-1/2 -translate-y-1/2 z-10"></div>
                </div>
            </div>
        </section>
    );
};

export default Education;