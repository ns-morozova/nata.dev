import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { to: "ideology", label: "lalala" },
        { to: "tokenomics", label: "lalala" },
        { to: "roadmap", label: "lalala" },
        { to: "apps", label: "lalala" },
    ];

    const dropdownRef = useRef<HTMLDivElement>(null);

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
        <header className="fixed top-0 left-0 w-full z-50">
            <div className="relative mx-auto">
                <nav
                    aria-label="Global"
                    className="relative mx-auto bg-gray-200/10 backdrop-blur-md shadow-lg overflow-hidden"
                >
                    <div className=""
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