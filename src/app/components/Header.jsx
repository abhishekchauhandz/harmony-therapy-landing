'use client';
import Image from 'next/image';
import Link from 'next/link';
import { MdPersonAddAlt1 } from 'react-icons/md';
import { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { usePathname, useRouter } from 'next/navigation';
import Popup from '../../components/Popup'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [weDealInDropdown, setWeDealInDropdown] = useState(false);
  const [meetOurTeamDropdown, setMeetOurTeamDropdown] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setWeDealInDropdown(false);
    setMeetOurTeamDropdown(false);
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
    return pathname === path ? 'text-[#FFA05D]' : 'text-[#777777]';
  };

  const handleSmoothScroll = async (e, path, targetId) => {
    e.preventDefault();

    if (pathname === path) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      router.push(path);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
    closeMenu();
  };

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  // Toggle Dropdowns on Click
  const handleToggleWeDealInDropdown = () => {
    setWeDealInDropdown(!weDealInDropdown);
    setMeetOurTeamDropdown(false); // Close other dropdown when opening this
  };

  const handleToggleMeetOurTeamDropdown = () => {
    setMeetOurTeamDropdown(!meetOurTeamDropdown);
    setWeDealInDropdown(false); // Close other dropdown when opening this
  };

  return (
    <>
      <header className="flex justify-center relative">
        <nav className="navbar flex items-center justify-between bg-white absolute top-10 w-full">
          <div className="flex items-center justify-between w-full px-5">
            <div className="w-[25%] max-w-[140px] h-auto md:ml-20">
              <Link href="/">
                <Image src="/logo.png" width={140} height={60} alt="Logo" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            {/* <div className="hidden md:flex text-[#777777] gap-10 text-base md:text-lg">
              <Link href="/" className={isActiveLink('/')}>Home</Link>
              <div
                onMouseEnter={() => setWeDealInDropdown(true)}
                onMouseLeave={() => setWeDealInDropdown(false)}
                className="relative group"
              >
                <Link
                  href="/#we-offer"
                  className={isActiveLink('/all-categories' || '/service')}
                >
                  We offer
                </Link>
                <span className="absolute top-2">&#129171;</span>
                {weDealInDropdown && (
                  <div className="absolute left-0 bg-white shadow-md p-2 rounded-xl z-10">
                    <Link href="/all-categories" className="block py-1 hover:bg-[#33C9D2] hover:text-white rounded-xl py-2 px-3">Category</Link>
                    <Link href="/service2" className="block py-1 hover:bg-[#33C9D2] hover:text-white rounded-xl py-2 px-3">Service</Link>
                  </div>
                )}
              </div>
              <div
                onMouseEnter={() => setMeetOurTeamDropdown(true)}
                onMouseLeave={() => setMeetOurTeamDropdown(false)}
                className="relative group"
              >
                <Link href="#" className={isActiveLink('/clinical-psychologist' || '/psychiatrist')}>
                  Meet Our Team
                </Link>
                <span className="absolute top-2">&#129171;</span>
                {meetOurTeamDropdown && (
                  <div className="absolute left-0 bg-white shadow-md p-2 rounded-xl z-10">
                    <Link href="/clinical-psychologist" className="block py-1 hover:bg-[#33C9D2] hover:text-white rounded-xl py-2 px-3">Clinical Psychologist</Link>
                    <Link href="/psychiatrist" className="block py-1 hover:bg-[#33C9D2] hover:text-white rounded-xl py-2 px-3">Psychiatrist</Link>
                  </div>
                )}
              </div>
              <Link href="/about-us" className={isActiveLink('/about-us')}>About us</Link>
              <Link href="/#allBlogs" className={`${isActiveLink('/allBlogs')} `} onClick={() => openPopup('Blogs')}>Blogs</Link>
              <Link href="/allArticles" className={isActiveLink('/allArticles')}>Events and Articles</Link>
            </div> */}

            {/* Call-to-Action Button */}
            <Link
              href="https://wa.me/917303366671?text=I'd%20like%20to%20book%20an%20appointment"
              target="_blank"
              rel="noopener noreferrer"
              className='md:mr-10'
            >
              <button className="flex items-center px-4 py-2 text-white font-bold text-sm md:text-base bg-[#33C9D2] rounded-[10px]">
                Book an appointment
              </button>
            </Link>


            {/* Mobile Menu Button */}
            {/* <div className="md:hidden mr-5" onClick={toggleMenu}>
              {menuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
            </div> */}
          </div>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            id="mobile-menu"
            className="absolute bg-white top-[70px] left-0 w-full shadow-md p-5 flex flex-col items-center md:hidden z-50"
          >

            <Link href="/" className={`${isActiveLink('/')} py-2`} onClick={closeMenu}>Home</Link>
            <div
              onClick={handleToggleWeDealInDropdown}
              className="relative group py-2 text-[#777777]"
            >
              <Link
                href="/#we-offer"
                className={isActiveLink('/category' || '/service')}
              >
                We offer
              </Link>
              <span className="absolute top-4">&#129171;</span>
              {weDealInDropdown && (
                <div className="absolute left-0 bg-white shadow-md p-2 rounded-xl z-10">
                  <Link href="/category2" className="block py-1 hover:bg-[#33C9D2] hover:text-white rounded-xl px-3">Category</Link>
                  <Link href="/service2" className="block py-1 hover:bg-[#33C9D2] hover:text-white rounded-xl px-3">Service</Link>
                </div>
              )}
            </div>
            <div
              onClick={handleToggleMeetOurTeamDropdown}
              className="relative group py-2 text-[#777777]"
            >
              <Link href="#" className={isActiveLink('/clinical-psychologist' || '/psychiatrist')}>
                Meet Our Team
              </Link>
              <span className="absolute top-4">&#129171;</span>
              {meetOurTeamDropdown && (
                <div className="absolute left-0 bg-white shadow-md p-2 rounded-xl z-10">
                  <Link href="/clinical-psychologist" className="block py-1 hover:bg-[#33C9D2] hover:text-white rounded-xl py-2 px-3">Clinical Psychologist</Link>
                  <Link href="/psychiatrist" className="block py-1 hover:bg-[#33C9D2] hover:text-white rounded-xl py-2 px-3">Psychiatrist</Link>
                </div>
              )}
            </div>
            <Link href="/about-us" className={`${isActiveLink('/about-us')} py-2`} onClick={closeMenu}>About us</Link>
            <Link href="#allBlogs" className={`${isActiveLink('/allBlogs')} py-2`} onClick={() => openPopup('Blogs')}>Blogs</Link>
            <Link href="/allArticles" className={`${isActiveLink('/allArticles')} py-2`} onClick={closeMenu}>Events and Articles</Link>
          </div>
        )}

        <Popup show={popupOpen} onClose={closePopup}>
          <div className='flex flex-col gap-5 flex items-center justify-center'>
            <div className='w-[320px] h-[220px] relative inset-x-0'>
              <Image src="/assets/stay-tuned.png" fill objectFit='cover' alt='Coming soon' />
            </div>
            <h2 className="text-xl font-bold">Posts will be coming soon</h2>
            <p>Stay Tuned!</p>
          </div>
        </Popup>

      </header>
    </>
  );
}
