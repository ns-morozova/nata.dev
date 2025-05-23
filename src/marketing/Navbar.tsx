import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Dialog, DialogPanel } from '@headlessui/react';
import { RiHome9Fill } from "react-icons/ri";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    const menuItems = [
        { id: 1, to: "/", label: "Главная" },
        { id: 3, to: "/services", label: "Услуги" },
        { id: 2, to: "/cases", label: "Кейсы" },
    ];

    // Функция для плавной прокрутки наверх
    const scrollToTop = () => {
        const duration = 800;
        const start = window.scrollY;
        const startTime = performance.now();

        const animateScroll = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            window.scrollTo(0, start - start * progress);

            if (progress < 1) {
                requestAnimationFrame(animateScroll);
            }
        };

        requestAnimationFrame(animateScroll);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        setMobileMenuOpen(false);
    }, [location]);

    return (
        <header className="fixed top-0 left-0 w-full z-50">
            <div className="relative mx-auto 2xl:max-w-7xl 2xl:rounded-b-3xl overflow-hidden">
                <nav
                    aria-label="Global"
                    className="relative mx-auto bg-gray-200/20 backdrop-blur-md shadow-lg overflow-hidden"
                >
                    <div className=""
                    ></div>

                    <div className="relative flex items-center justify-between px-3 py-3 md:px-8 md:py-3.5 lg:py-4.5 2xl:px-4">
                        {/* <ScrollLink
                            to="home"
                            smooth={true}
                            duration={1000}
                            className="cursor-pointer"
                        >
                            <RiHome9Fill className="size-6 hover:text-[#ebd7b0] transition-colors duration-300" />
                        </ScrollLink> */}

                        <button
                            onClick={scrollToTop}
                            className="cursor-pointer"
                        >
                            <RiHome9Fill className="size-6 hover:text-pink-400 transition-colors duration-300" />
                        </button>
                        

                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(true)}
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
                            >
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon aria-hidden="true" className="size-6" />
                            </button>
                        </div>

                        <div className="hidden text-base font-medium lg:flex lg:gap-x-14 xl:gap-x-20">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.id}
                                    to={item.to}
                                    className="relative group hover:text-pink-400 transition-colors duration-300 px-1 cursor-pointer"
                                >
                                    {item.label}
                                    {/* <span className="absolute -bottom-0.5 left-1/2 h-px w-0 -translate-x-1/2 bg-teal-500 transition-all duration-300 group-hover:w-full"></span> */}
                                </Link>
                            ))}
                        </div>
                    </div>
                    
                </nav>
            </div>

            <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="lg:hidden h-screen overflow-hidden">
                <div className="fixed inset-0 z-10 bg-black/50 overflow-hidden" />
                <DialogPanel className="fixed inset-y-0 right-0 w-full overflow-y-auto bg-[#141414] px-6 pt-3 sm:max-w-sm sm:ring-1 sm:ring-white/10 z-50 overflow-hidden">
                    <div className="flex items-center justify-end">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-mr-3 rounded-md"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="relative mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/25">
                            <div className="font-medium text-base flex flex-col items-center justify-center gap-6 pt-36 py-auto">
                                {menuItems.map((item) => (
                                    <Link
                                        key={item.id}
                                        to={item.to}
                                        className="relative w-max group hover:text-teal-200 transition-colors duration-300 px-1 cursor-pointer"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.label}
                                        <span className="absolute -bottom-0.5 left-1/2 h-px w-0 -translate-x-1/2 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
};

export default Navbar;