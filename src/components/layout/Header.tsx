import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-[#F5F5F5] pb-3.5">
      <div className="container mx-auto max-w-[1280px] px-4 py-4 flex items-center justify-around rounded-full shadow-lg">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/images/Logo/6e981218d4aee7968a13351e9bc8d935.png" 
            alt="FOSO Logo" 
            width={134} 
            height={55.41} 
            priority
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/ve-chung-toi" className="text-gray-700 hover:text-foso-green transition-colors">
            Về Chúng tôi
          </Link>
          <Link href="/giai-phap" className="text-gray-700 hover:text-foso-green transition-colors flex gap-2">
            Giải pháp
            <svg className="w-4 h-4 ml-1 self-center" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </Link>
          <Link href="/tai-nguyen" className="text-gray-700 hover:text-foso-green transition-colors flex gap-2">
            Tài nguyên
            <svg className="w-4 h-4 ml-1 self-center" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </Link>
          <Link href="/lien-he" className="text-gray-700 hover:text-foso-green transition-colors">
            Liên hệ
          </Link>
        </nav>

        {/* User Actions */}
        <div className="flex items-center space-x-3">
          <div className="hidden md:flex items-center text-[#25272A] bg-gray-100 text-sm rounded-full px-3 py-1">
            <span className="text-red-500 font-medium">
                <Image 
                    src="/images/Logo/icon_country.png"
                    alt="Logo VI"
                    width={24}
                    height={24}
                    className='mr-3'
                />
            </span>
            VI
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          <button className="hidden md:flex gap-3 bg-[#1AD598] text-[#052B1E] rounded-full px-6 py-2 font-medium text-sm hover:bg-green-600 transition-colors">
            <span className='self-center font-bold'>Trở Thành Khách Hàng</span>
            <Image 
                src="/images/Logo/Frame 37.png"
                alt='Forward'
                width={22}
                height={22}
            />
          </button>

          {/* Mobile menu button */}
          <button className="md:hidden text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;