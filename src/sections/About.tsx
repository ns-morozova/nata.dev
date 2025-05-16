import React from 'react';
import { SectionTitle } from '../components/Ui';
import { Button } from '../components/Ui';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const About: React.FC = () => {
    return (
        <section className="px-4 py-8 md:px-8 md:py-16">
            <div className="relative max-w-7xl mx-auto z-10">
                <div className="flex flex-col gap-10 lg:gap-16">
                    <div className="md:max-w-2/3">
                        <SectionTitle className="mb-5 md:mb-7">Обо мне</SectionTitle>
                        <div className="flex flex-col gap-5 text-sm md:text-base">
                            <p>
                                Всем привет! Меня зовут Наташа, я фронтенд-разработчик.
                            </p>
                            <p>
                                Вдохновлена своим делом и результатом, постоянно учусь новому и расширяю свои навыки, не боюсь браться за сложные задачи и стремлюсь доводить работу до максимально качественного результата.
                            </p>
                            <p>
                                Всегда открыта предложениям и рада новым проектам и продуктивному сотрудничеству!
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6 md:flex-row md:justify-between md:gap-10 lg:gap-16">
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
                                <div className="w-max grid grid-cols-2 gap-x-6 gap-y-2 text-sm md:text-base md:gap-x-4 lg:gap-x-10">
                                    <p>Специальность:</p>
                                    <p>Frontend-разработчик</p>
                                    <p>Возраст:</p>
                                    <p>25 лет</p>
                                    <p>Город проживания:</p>
                                    <p>Санкт-Петербург</p>
                                    <p>Образование:</p>
                                    <p>Оконченное высшее</p>
                                </div>
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
                            </div>

                            <div className="flex gap-5 md:mt-auto">
                                <Link to="/services">
                                    <Button type="outline" label="услуги" className="max-w-max" />
                                </Link>

                                <Link to="/cases">
                                    <Button type="outline" label="кейсы" className="max-w-max" />
                                </Link>

                                <ScrollLink to="stack" smooth={true} duration={1000}>
                                    <Button type="outline" label="стек" className="max-w-max" />
                                </ScrollLink>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;