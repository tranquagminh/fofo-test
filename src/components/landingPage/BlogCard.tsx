import Image from "next/image";
import Link from "next/link";
import React from "react";


interface BlogCardProps{
    id: number;
    slug: string;
    title: string;
    category: string;
    date: string;
    readTime: string;
    imageUrl: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
    id,
    slug,
    title,
    category,
    date,
    readTime,
    imageUrl
}) => {
    return (
        <div key={id} className="rounded-lg overflow-hidden">
            <Link href={`/blog/${slug}`}>
            <div className="relative h-auto w-full">
                <Image 
                src={imageUrl}
                alt={title}
                width={505}
                height={475}
                className='w-full'
                loading="lazy"
                />
            </div>
            <div className="py-4">
                <div className="mb-2">
                <span className="text-xs text-[#0F4F9E] px-2 py-1 bg-[#E2F0FE] rounded-lg">{category}</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{title}</h3>
                <div className="flex items-center text-xs text-gray-500 mb-2">
                <span className='flex items-center gap-2'>
                    <Image
                    src= "/images/Icon/CalendarBlank.png"
                    alt='clock'
                    width={24}
                    height={24}
                    />
                    {date}</span>
                    <span className="mx-2">|</span>
                    <span className='flex items-center gap-2'>
                        <Image
                        src= "/images/Icon/Clock.png"
                        alt='clock'
                        width={24}
                        height={24}
                        />
                        {readTime}
                    </span>
                </div>
                <Link href={`/blog/${slug}`} className="text-[#667F93] text-sm font-medium flex items-center">
                Khám phá thêm
                <div className='p-3 ml-4'>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </div>
                </Link>
            </div>
            </Link>
        </div>
    );
}

export default React.memo(BlogCard);