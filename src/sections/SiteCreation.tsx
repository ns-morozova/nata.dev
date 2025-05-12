import React from 'react';
import { SectionTitle } from '../components/Ui';
import { Button } from '../components/Ui';
import { Link as ScrollLink } from 'react-scroll';

const SiteCreation: React.FC = () => {

    return (
        <section className="relative py-16 pl-4 md:py-24 md:pl-8">
            <div className="relative max-w-7xl mx-auto">
                <div className="flex flex-col gap-10 md:flex-row md:justify-between">
                    <div className="md:w-1/2 md:flex md:flex-col">
                        <SectionTitle className="mb-10 md:mb-12">Создание сайтов</SectionTitle>
                        <p className="mb-6 w-4/5 text-sm sm:w-full md:text-base lg:w-5/6">
                            Сайт - это визитная карточка бизнеса, бренда или специалиста, а также мощный инструмент для привлечения клиентов, повышения узнаваемости и продаж.
                        </p>
                        <p className="mb-4 w-4/5 text-sm sm:w-full md:text-base lg:w-5/6">
                            Моя задача как фронтенд-разработчика - реализация удобного интерфейса и всей визуальной составляющей сайта (по вашему дизайну или идее) с быстрой загрузкой страниц и адаптивностью под любые устройства.
                        </p>
                        <ScrollLink to="footer" smooth={true} duration={1000} className="hidden md:block md:mt-auto">
                            <Button type="outline" label="хочу свой сайт" className="max-w-max" />
                        </ScrollLink>
                    </div>

                    <div className="sm:h-96 md:w-1/2 md:h-auto">
                        <img
                            alt="Site preview"
                            src="/nata.dev/images/mockup_preview.png"
                            className="w-full h-full object-cover mb-6 sm:object-[center_0%] md:mb-0 md:object-[0%_0%]"
                        />
                        <ScrollLink to="footer" smooth={true} duration={1000} className="md:hidden">
                            <Button type="outline" label="хочу свой сайт" className="max-w-max" />
                        </ScrollLink>
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default SiteCreation;