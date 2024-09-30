'use client'
import Image from "next/image";
import Link from "next/link";
import { MdPersonAddAlt1 } from "react-icons/md";
import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { usePathname } from 'next/navigation';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const handleClickOutside = (event) => {
        const menu = document.getElementById('mobile-menu');
        if (menu && !menu.contains(event.target) && menuOpen) {
            closeMenu();
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [menuOpen]);

    const isActiveLink = (path) => {
        return pathname === path ? 'text-[#FFA05D]' : 'text-[#777777]';  // Apply active color
    };

    return (
        <>
            <header className="flex justify-center relative">
                <nav className="navbar flex items-center justify-between bg-white absolute top-10 w-full">
                    <div className="flex items-center justify-between w-full px-5">
                        <div className="w-[25%] max-w-[140px] h-auto">
                            <Image src='/logo.png' width={140} height={60} alt="Logo" />
                        </div>
                        <div className="hidden md:flex text-[#777777] gap-10 text-base md:text-lg">
                            <Link href="/" className={`${isActiveLink("/")}`}>Home</Link>
                            <Link href="#" className={`${isActiveLink("#")}`}>We deal in</Link>
                            <Link href="/about-us" className={`${isActiveLink("/about-us")}`}>About us</Link>
                            <Link href="#" className={`${isActiveLink("#")}`}>Blogs</Link>
                            <Link href="#" className={`${isActiveLink("#")}`}>Events and Articles</Link>
                        </div>
                        <button className="flex items-center px-4 py-2 text-white font-bold text-sm md:text-base bg-[#33C9D2] rounded-[10px]">
                            Get Free Session <MdPersonAddAlt1 className="ml-2 text-base md:text-lg" />
                        </button>

                        <div className="md:hidden mr-5" onClick={toggleMenu}>
                            {menuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
                        </div>
                    </div>

                </nav>

                
                {menuOpen && (
                    <div
                        id="mobile-menu"
                        className="absolute bg-white top-[70px] left-0 w-full shadow-md p-5 flex flex-col items-center md:hidden z-50" // Added z-50
                    >
                       
                        <button className="flex items-center px-4 py-2 mb-4 text-white font-bold text-sm bg-[#33C9D2] rounded-[10px]">
                            Get Free Session <MdPersonAddAlt1 className="ml-2 text-base" />
                        </button>

                        <Link href="/" className={`${isActiveLink("/")} py-2`} onClick={closeMenu}>Home</Link>
                        <Link href="#" className="py-2 text-[#777777]" onClick={closeMenu}>We deal in</Link>
                        <Link href="/about-us" className={`${isActiveLink("/about-us")} py-2`} onClick={closeMenu}>About us</Link>
                        <Link href="#" className="py-2 text-[#777777]" onClick={closeMenu}>Blogs</Link>
                        <Link href="#" className="py-2 text-[#777777]" onClick={closeMenu}>Events and Articles</Link>
                    </div>

                )}
            </header>
        </>
    );
}
