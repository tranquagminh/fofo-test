import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Information */}
          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-4">FOSO</h3>
            <p className="text-gray-600 text-sm">
              Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản xuất ngay!
            </p>
            <div className="mt-4 flex space-x-3">
              <a href="#" className="text-gray-500 hover:text-foso-green">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-foso-green">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-foso-green">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm6.987 7.162a.67.67 0 00-.216-.064c-.323-.048-.816-.104-1.4-.152-1.155-.096-2.775-.132-4.366-.048-3.793.2-6.058 1.232-6.058 2.766 0 .6.28 1.002.718 1.298.436.296 1.048.5 1.72.616.672.116 1.438.164 2.213.164.776 0 1.542-.048 2.213-.164.672-.116 1.284-.32 1.72-.616.436-.296.718-.698.718-1.298 0-.324-.096-.628-.264-.9.156.024.308.052.44.08.144.032.267.104.363.208.096.104.152.236.152.38 0 .64-.823 1.2-2.063 1.56-1.24.36-2.774.56-4.367.56-1.593 0-3.127-.2-4.367-.56-1.24-.36-2.063-.92-2.063-1.56 0-.144.056-.276.152-.38a.76.76 0 01.363-.208c.6-.128 1.563-.256 2.741-.336 1.188-.08 2.577-.088 3.993.016 1.416.104 2.775.296 3.882.536 1.107.24 1.851.52 1.851.816 0 .144-.056.276-.152.38-.96.104-.219.176-.363.208-.6.128-1.563.256-2.741.336-1.188.08-2.577.088-3.993-.016-1.416-.104-2.775-.296-3.882-.536-1.107-.24-1.851-.52-1.851-.816 0-.324.576-.628 1.544-.864.968-.236 2.27-.384 3.68-.384 1.41 0 2.711.148 3.68.384.968.236 1.544.54 1.544.864z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-4">Sản phẩm</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/san-pham/fmrp" className="text-gray-600 hover:text-foso-green text-sm">
                  FMRP
                </Link>
              </li>
              <li>
                <Link href="/san-pham/dich-vu" className="text-gray-600 hover:text-foso-green text-sm">
                  Dịch vụ
                </Link>
              </li>
              <li>
                <Link href="/san-pham/giai-phap" className="text-gray-600 hover:text-foso-green text-sm">
                  Giải pháp
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-4">Hỗ trợ</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/ho-tro/tai-lieu" className="text-gray-600 hover:text-foso-green text-sm">
                  Tài liệu
                </Link>
              </li>
              <li>
                <Link href="/ho-tro/lien-he" className="text-gray-600 hover:text-foso-green text-sm">
                  Liên hệ
                </Link>
              </li>
              <li>
                <Link href="/ho-tro/blog" className="text-gray-600 hover:text-foso-green text-sm">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 3 */}
          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-4">Công ty</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/cong-ty/ve-chung-toi" className="text-gray-600 hover:text-foso-green text-sm">
                  Về chúng tôi
                </Link>
              </li>
              <li>
                <Link href="/cong-ty/tuyen-dung" className="text-gray-600 hover:text-foso-green text-sm">
                  Tuyển dụng
                </Link>
              </li>
              <li>
                <Link href="/cong-ty/doi-tac" className="text-gray-600 hover:text-foso-green text-sm">
                  Đối tác
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} FOSO. Tất cả các quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;