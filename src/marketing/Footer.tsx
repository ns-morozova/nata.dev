import React from 'react';
import { FaTelegramPlane, FaGithub } from 'react-icons/fa';
import { LuMail } from "react-icons/lu";

const Footer: React.FC = () => {
    const socialLinks = [
        {
            name: 'Telegram',
            href: 'https://t.me/natamorozowa',
            icon: FaTelegramPlane,
        },
        {
            name: 'GitHub',
            href: 'https://github.com/ns-morozova',
            icon: FaGithub,
        },
        {
            name: 'Mail',
            href: 'mailto:ns_morozova@mail.ru',
            icon: LuMail,
        },
    ];

    return (
        <footer id="footer" className="px-4 py-8 lg:px-8 md:py-16">
            <div className="max-w-7xl mx-auto">
                <p className="mb-4 font-medium text-gray-400 text-center uppercase text-sm md:text-base">
                    Начало продуктивного сотрудничества
                </p>

                <div className="flex justify-center gap-x-8">
                    {socialLinks.map((item) => {
                        const IconComponent = item.icon;
                        return (
                            <a
                                key={item.name}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <IconComponent className="size-6 text-gray-400 hover:text-gray-300 transition-all duration-300 md:size-8" />
                                <span className="sr-only">{item.name}</span>
                            </a>
                        );
                    })}
                </div>

                {/* <p className="mt-10 text-center text-sm/6 text-gray-400">
                    &copy; 2024 Your Company, Inc. All rights reserved.
                </p> */}
            </div>
        </footer>
    );
};

export default Footer;