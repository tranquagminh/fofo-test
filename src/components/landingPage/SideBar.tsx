"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

interface Category {
  name: string;
  slug: string;
  count: number;
}

interface SidebarProps {
  categories?: Category[];
}

const Sidebar: React.FC<SidebarProps> = ({ 
  categories = [
    { name: 'Tất cả', slug: 'tat-ca', count: 108 },
    { name: 'Thiết Kế Website', slug: 'thiet-ke-website', count: 36 },
    { name: 'Thiết Kế App Mobile', slug: 'thiet-ke-app-mobile', count: 13 },
    { name: 'Quản Lý Sản Xuất', slug: 'quan-ly-san-xuat', count: 25 },
    { name: 'Quản Lý Bán Hàng', slug: 'quan-ly-ban-hang', count: 22 },
    { name: 'Báo Chí Nói Về FOSO', slug: 'bao-chi-foso', count: 7 },
    { name: 'Tin Tức FOSO', slug: 'tin-tuc-foso', count: 5 },
  ] 
}) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <aside className="md:w-1/3 space-y-8">
      {/* Search */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-6 leading-[200%]">Tìm Kiếm</h3>
        <form onSubmit={handleSearch} className="flex items-center bg-white rounded-lg shadow-sm">
          <input
            type="text"
            placeholder="Tìm kiếm bài viết"
            className="flex-grow p-6 outline-none text-[#ACB3C7] rounded-l-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Tìm kiếm bài viết"
          />
          <button 
            type="submit" 
            className="bg-[#15AA7A] p-3 mr-2 text-white rounded-lg hover:bg-[#0E8B63] transition-colors"
            aria-label="Tìm kiếm"
          >
            <FontAwesomeIcon icon={faSearch} className="w-6 h-6" />
          </button>
        </form>
      </div>
      
      {/* Categories */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-6 leading-[200%]">Danh Mục</h3>
        <ul className="space-y-4">
          {categories.map((category) => (
            <li key={category.slug} className="flex justify-between items-center leading-[150%] border-b border-gray-100 pb-2">
              <Link 
                href={`/category/${category.slug}`} 
                className="text-gray-700 hover:text-[#15AA7A] transition-colors"
              >
                {category.name}
              </Link>
              <span className="text-gray-500 text-sm">{category.count}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Promotional Cards */}
      <div className="space-y-8">
        {/* FMRP Free Trial Card */}
        <div className="relative bg-white rounded-xl overflow-hidden shadow-md text-white">
          <div className="w-full">
            <Image 
              src="/images/Bg/image 18.png" 
              alt="FMRP Background" 
              width={400}
              height={150}
              className="object-cover w-full rounded-t-xl"
            />
          </div>
          <Image 
            src="/images/Logo/Frame 1171276018.png"
            alt="Decorative Element"
            width={367}
            height={245}
            className="absolute top-0 right-0"
          />
          <div className="absolute bottom-10 w-full p-6">
            <Image 
              src="/images/Logo/Mask group.png"
              alt="FMRP Logo"
              width={136}
              height={136}
              className="absolute left-4 bottom-[200%]"
            />
            <div className="absolute right-6 bottom-[200%]">
              <h3 className="text-xl font-bold mb-2">Miễn phí dùng thử</h3>
              <Image 
                src="/images/Logo/Group 2.png"
                alt="Trial Period"
                width={154}
                height={46}
              />
            </div>
            <Link 
              href="/dung-thu" 
              className="bg-white border-2 text-[#0F4F9E] font-medium rounded-full px-6 py-2 flex items-center justify-between w-full hover:bg-[#F5F7FA] transition-colors"
            >
              Trải Nghiệm Ngay
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* FMRP Community Card */}
        <div className="relative bg-white rounded-xl overflow-hidden shadow-md text-white">
          <div className="w-full">
            <Image 
              src="/images/Bg/image 18.png" 
              alt="FMRP Community Background" 
              width={400}
              height={150}
              className="object-cover w-full rounded-t-xl"
            />
          </div>
          <Image 
            src="/images/Logo/Group.png"
            alt="Community Decorative Element"
            width={472}
            height={400}
            className="absolute top-0 right-0"
          />
          <div className="absolute bottom-10 w-full p-6">
            <div className="absolute w-full left-0 p-6 bottom-[80%]">
              <h3 className="text-xl text-center font-bold mb-2">Gia nhập cộng đồng FMRP Việt – Kết nối, chia sẻ, cùng phát triển!</h3>
            </div>
            <Link 
              href="/cong-dong" 
              className="bg-white border-2 text-[#0F4F9E] font-medium rounded-full px-6 py-2 flex items-center justify-between w-full hover:bg-[#F5F7FA] transition-colors"
            >
              Tham gia ngay
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default React.memo(Sidebar);