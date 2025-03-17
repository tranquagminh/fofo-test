import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/data/blogPosts';
import BlogCard from '@/components/landingPage/BlogCard';
import Pagination from '@/components/landingPage/Pagination';
import SideBar from '@/components/landingPage/SideBar';

export default function Home() {
  return (
    <div className='relative'>
      <div className="absolute -left-100 top-[200px]  w-[500px] h-[500px]
        bg-gradient-to-br
        from-[#E0FFCC]
        to-[#CCFFEC]
        blur-[267px]
        -z-2          
        rounded-full  
      " />
        <div className='bg-[#F5F5F5] z-100'>
          {/* Hero Banner */}
          <section className="bg-[#F5F5F5] py-12">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div>
                  <Image 
                    src="/images/Icon/Frame 160.png"
                    alt="Schedule"
                    width={282}
                    height={268}
                  />
                </div>
                <div className="w-full text-center mb-8 md:mb-0">
                  <div className='mb-17'>
                    <Link href="#">Trang chủ</Link>
                    <span>{' > '}</span>
                    <Link href="#">Tài nguyên</Link>
                    <span>{' > '}</span>
                    <Link href="#" className='font-bold'>Blog</Link>
                  </div>
                  <h1 className="text-6xl font-normal mb-6 leading-28">
                    Blog <span className="text-transparent bg-clip-text font-bold
                                          bg-[linear-gradient(90deg,#54ABB1_0%,#54ABB1_40%,#85EEB3_71%,#54ABB1_100%)]">FOSO</span> – 
                    <br />
                    <span className="relative">
                      Cập Nhật Tin Tức
                      <span className="relative bg-foso-green/20 px-2 py-1 text-black font-bold">
                        Mới Nhất
                        <div className='absolute right-0 bottom-1 rounded-full  w-full h-[15px] bg-[#85EEB3B5]'></div>
                      </span>
                    </span>
                  </h1>
                  <p className="text-gray-600 mb-8">
                    Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản xuất ngay!
                  </p>
                </div>
                <div>
                  <Image 
                    src="/images/Icon/Frame 161.png"
                    alt="Schedule"
                    width={282}
                    height={268}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Blog Content */}
          <section className="container mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Main Content */}
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold mb-8">Tất Cả Bài Viết</h2>
                
                {/* Featured Blog Post */}
                <div className="bg-white rounded-4xl overflow-hidden shadow-lg mb-12">
                  <Link href="/blog/fmrp-community">
                    <div className="relative h-80 w-full">
                      <Image 
                        src="/images/Bg/res.png" 
                        alt="FMRP Community" 
                        fill
                        className="object-cover"
                      />
                      <div className="p-6 absolute top-1/2 -translate-y-1/2 text-white">
                        <h3 className="text-4xl font-bold mb-4 max-w-[376px]">Gia nhập cộng đồng FMRP – Kết nối, chia sẻ, cùng phát triển!</h3>
                       
                        <div className="flex items-center justify-between">
                          <button className="text-foso-blue py-2 px-6 rounded-full border-2 border-white font-medium flex items-center">
                            Tham Gia Ngay
                            <svg className="w-5 h-5 ml-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <Image 
                        src="/images/Bg/Group.png" 
                        alt="FMRP Community" 
                        width={472}
                        height={400}
                        className='absolute top-7 right-0'
                      />
                    </div>
                    
                  </Link>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {blogPosts.map((post) => (
                    <BlogCard 
                      key={post.id}
                      id={post.id}
                      slug={post.slug}
                      title={post.title}
                      category={post.category}
                      date={post.date}
                      readTime={post.readTime}
                      imageUrl={post.imageUrl}
                    />
                  ))}
                </div>
                
                {/* Pagination */}
                <Pagination />
              </div>
              
              {/* Sidebar */}
              <SideBar />
            </div>
          </section>
        </div>
    </div>
    
  );
}