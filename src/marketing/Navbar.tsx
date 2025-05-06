import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState('ru');

    const menuItems = [
        { to: "ideology", label: "lalala" },
        { to: "tokenomics", label: "lalala" },
        { to: "roadmap", label: "lalala" },
        { to: "apps", label: "lalala" },
    ];

    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleLanguageChange = (language: string) => {
        setCurrentLanguage(language);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <header className="fixed top-0 left-0 w-full px-4 lg:px-8 z-50">
            <div className="relative mx-auto max-w-7xl">
                <nav
                    aria-label="Global"
                    className="relative mx-auto mt-4 rounded-full shadow-lg lg:mt-6 overflow-hidden"
                >
                    <div
                        style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(90deg, #AF0092, #14B8A6)',
                            opacity: 1,
                            zIndex: -1,
                        }}
                    ></div>

                    <div className="relative flex items-center justify-end px-3 py-3 sm:px-4 sm:py-3 md:px-5 md:py-3.5 lg:justify-center lg:py-4.5">
                        <div className="absolute left-1.5 flex lg:flex-1">
                            <Link
                                to="home"
                                smooth={true}
                                duration={600}
                                className="-m-1.5 p-1.5 cursor-pointer"
                            >
                                <div className="w-10 md:w-11 lg:w-13 h-auto rounded-full hover:rotate-12 hover:shadow-[0_0_15px] hover:scale-105 hover:shadow-teal-300 transition-all duration-500 ease-out overflow-hidden">
                                    <img
                                        alt="logo"
                                        src="/images/chiks-coin2.png"
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                            </Link>
                        </div>

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
                                    key={item.to}
                                    to={item.to}
                                    smooth={true}
                                    duration={600}
                                    className="relative group hover:text-teal-200 transition-colors duration-300 px-1 cursor-pointer"
                                >
                                    {item.label}
                                    <span className="absolute -bottom-0.5 left-1/2 h-px w-0 -translate-x-1/2 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            ))}
                        </div>
                    </div>
                    
                </nav>
                
                <div
                    className="lang-switcher pr-2 transition-colors duration-300 hidden lg:block lg:absolute lg:right-4 lg:top-1/2 lg:-translate-y-1/2"
                    ref={dropdownRef}
                >
                    <div className="lang-switcher relative w-max">
                        <div className="relative px-0.5">
                            <button
                                className="custom-selector m-0.5 ml-0 bg-[#141414] rounded px-3 w-full text-left outline-none focus:outline-none"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setIsOpen(!isOpen);
                                }}
                            >
                                {currentLanguage === 'en' ? 'EN' : 'RU'}
                            </button>
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-[#AF0092] to-teal-900 rounded -z-10"
                            ></div>
                        </div>
                        {isOpen && (
                            <div className="absolute top-full right-0 w-20 bg-white rounded shadow-lg mt-2 py-2">
                                <button
                                    className="block w-full mb-1 text-black hover:text-teal-700 text-center"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleLanguageChange('en');
                                    }}
                                >
                                    EN
                                </button>
                                <button
                                    className="block w-full text-black hover:text-teal-700 text-center"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleLanguageChange('ru');
                                    }}
                                >
                                    RU
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="lg:hidden">
                <div className="fixed inset-0 z-10 bg-black/50" />
                <DialogPanel className="fixed inset-y-0 right-0 w-full overflow-y-auto bg-[#141414] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10 z-50">
                    <div className="flex items-center justify-end">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/25">
                            <div className="font-medium text-base flex flex-col gap-6 py-6">
                                {menuItems.map((item) => (
                                    <Link
                                        key={item.to}
                                        to={item.to}
                                        smooth={true}
                                        duration={600}
                                        className="relative -mx-3 w-max group hover:text-teal-200 transition-colors duration-300 px-1 cursor-pointer"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.label}
                                        <span className="absolute -bottom-0.5 left-1/2 h-px w-0 -translate-x-1/2 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-6 left-6">
                        <div className="lang-switcher relative w-max">
                            <div className="relative px-0.5">
                                <button
                                    className="custom-selector m-0.5 ml-0 bg-[#141414] rounded px-5 w-full text-left outline-none focus:outline-none"
                                    onClick={() => setIsOpen(!isOpen)}
                                >
                                    {currentLanguage === 'en' ? 'EN' : 'RU'}
                                </button>
                                <div
                                    className="absolute inset-0 bg-gradient-to-r from-[#AF0092] to-[#14B8A6] rounded -z-10"
                                ></div>
                            </div>
                            
                            {isOpen && (
                                <div className="absolute bottom-full left-0 w-full bg-gradient-to-b from-[#AF0092] to-[#14B8A6] rounded shadow-lg mb-2 py-2 z-10">
                                    <button
                                        className="block w-full mb-1 hover:text-gray-100"
                                        onClick={() => handleLanguageChange('en')}
                                    >
                                        EN
                                    </button>
                                    <button
                                        className="block w-full hover:text-gray-100"
                                        onClick={() => handleLanguageChange('ru')}
                                    >
                                        RU
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="w-32 h-auto mx-auto mt-20 rounded-full hover:rotate-12 hover:shadow-[0_0_50px] hover:scale-105 hover:shadow-teal-600 transition-all duration-500 ease-out overflow-hidden">
                        <img
                            alt="logo"
                            src="/images/chiks-coin2.png"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
};

export default Navbar;