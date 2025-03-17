"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import FeedbackReaction from '@/components/detailBlog/FeedbackReaction';
import BlogCard from '@/components/landingPage/BlogCard';
import { blogPosts } from '@/data/blogPosts';

export default function DetailBlog() {
  const [isTableOfContentsOpen, setIsTableOfContentsOpen] = useState(true);

  return (
    <div className="bg-white flex flex-col gap-12 min-h-screen">
      <div className="py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-500">
            <span>Trang chủ</span>
            <span className="mx-2">&gt;</span>
            <span>Tư liệu</span>
            <span className="mx-2">&gt;</span>
            <span>Blog</span>
            <span className="mx-2">&gt;</span>
            <Link href="/quan-ly-san-xuat" className="font-bold">
              Quản lý Sản Xuất
            </Link>
          </div>
        </div>
      </div>

      <main className="flex-grow container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar social sharing */}
          <div className="hidden md:flex flex-col items-center w-16 mr-4">
            <div className="sticky top-20 flex flex-col items-center">
              <div className="mb-6 text-center">
                <p className="text-xs mt-1">Chia sẻ</p>
              </div>
              <button className="mb-4 bg-blue-500 text-white rounded-full h-8 w-8 flex items-center justify-center">
                <FaFacebook />
              </button>
              <button className="mb-4 bg-blue-400 text-white rounded-full h-8 w-8 flex items-center justify-center">
                <FaTwitter />
              </button>
              <button className="mb-4 bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center">
                <FaLinkedin />
              </button>
              <button className="mb-4 bg-green-500 text-white rounded-full h-8 w-8 flex items-center justify-center">
                <FaWhatsapp />
              </button>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-grow">
            <span className="text-xs text-[#0F4F9E] px-2 py-1 bg-[#E2F0FE] rounded-lg">Quản Lý Sản Xuất</span>
            <h1 className="text-4xl font-bold mb-6 mt-4 leading-[100%]">Quy Trình 5S Là Gì? Cách Ứng Dụng Hiệu Quả Nên Biết</h1>
            
            <div className="flex items-center mb-4 text-sm text-gray-500 justify-between">
              <div className="mr-4 flex gap-3">
                <Image
                  src="/images/Logo/avatar.png"
                  alt='icon'
                  width={64}
                  height={64}
                  className='h-auto'
                />
                <div className='flex flex-col self-center'>
                  <span>Tác giả</span> 
                  <span className='font-bold'>FOSD Creator</span>
                </div>  
              </div>
              <div className='flex gap-4'>
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  Cập nhật: 04/11/2023
                </span>
                <span>|</span>
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  10 phút đọc
                </span>
              </div>
              
            </div>

            <div className="rounded-lg mb-8">
              <Image
                src="/images/Bg/image_2.png"
                alt='Process'
                width={900}
                height={600}
              />
              <p className='text-center text-[#667F93] mt-2'>Quy trình 5s là gì?</p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
              <blockquote className="italic text-gray-700">
                &quot;Chắc hẳn bạn đã từng nghe qua thôi niệm về quy trình 5S là gì? Nếu doanh nghiệp nào áp dụng đúng cách thì sẽ tạo ra cho doanh nghiệp đó một điều kiện môi trường làm việc tốt nhất. Hãy cùng tìm hiểu về quy trình 5S để biết cách ứng dụng quy trình này nhé.&quot;
              </blockquote>
            </div>

            <section id="quy-trinh-5s-la-gi" className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-green-600">1. Quy trình 5S là gì?</h2>
              <p className="mb-4">Quy trình 5S được biết đến là một thuật ngữ kỹ thuật trong sản xuất. Nguồn gốc của quy trình 5S là đến từ nước Nhật với 5 chữ cái đầu tiên là:</p>
              <p className="mb-4">Quy trình 5S doanh nghiệp được áp dụng để nâng cao trình độ sản xuất và hiệu quả làm việc trong doanh nghiệp. Quy trình này bao gồm 5 bước S được thực hiện như:</p>
              <ul className="list-disc list-inside ml-4 mb-4 text-green-600">
                <li>Seiri (Sàng lọc)</li>
                <li>Seiton (Sắp xếp)</li>
                <li>Seiso (Vệ sinh)</li>
                <li>Seiketsu (Tiêu chuẩn hóa)</li>
                <li>Shitsuke (Kỷ luật)</li>
              </ul>
            </section>

            <section id="loi-ich-quy-trinh-5s" className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-green-600">2. Lợi ích quy trình 5S đem lại</h2>
              <p className="mb-4">Quy trình 5S được kết hợp từ 5 chữ S và mỗi chữ S thể hiện cho mỗi bước của quy trình với mục đích cải tiến môi trường làm việc của doanh nghiệp.</p>
              <p className="mb-4">Khi doanh nghiệp áp dụng quy trình vào trong tổ chức, doanh nghiệp sẽ tạo nên một môi trường được sắp xếp theo nguyên tắc logic. Nơi làm việc sẽ trở nên sạch sẽ hơn, các công cụ, đồ dùng sẽ được đặt theo vị trí quy định và dễ dàng tìm kiếm khi cần thiết.</p>
              <p className="mb-4">Và khi doanh nghiệp áp dụng như vậy cũng hình thành tạo ra thói quen tốt cho mỗi nhân viên. Và từ đó, cũng góp phần vào tạo nên một văn hóa doanh nghiệp tích cực.</p>
            </section>

            <div className="rounded-lg mb-8">
              <Image
                src="/images/Bg/image (1).png"
                alt='Process'
                width={900}
                height={600}
              />
              <p className='text-center text-[#667F93] mt-2'>Tại sao doanh nghiệp cần quy trình 5S?</p>
            </div>
            
            <section id="tai-sao-lai-ap-dung-5s" className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-green-600">3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?</h2>
              <p className="mb-4">Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp trên toàn thế giới, bao gồm cả Việt Nam. Điều này càng chứng minh rõ nét tính hiệu quả của quy trình đem lại. Sau đây là các lý do vì sao bạn nên lựa chọn quy trình:</p>
              <h3 className="text-green-600">3.1 Cải thiện rõ nét môi trường làm việc</h3>
              <p className='mb-4'>Môi trường làm việc tại doanh nghiệp sẽ trở nên sạch sẽ hơn, gọn gàng hơn và có tổ chức hơn. Điều này tạo ra một không gian làm việc hiệu quả cho từng cá nhân trong doanh nghiệp</p>
              <h3 className="text-green-600">3.2 Tiết kiệm thời gian đáng kể</h3>
              <p className='mb-4'>Khi doanh nghiệp áp dụng quy trình này, doanh nghiệp giảm được thời gian đáng kể khi không còn mất nhiều thời gian tìm kiếm đồ dùng, máy móc cần sử dụng trong quá trình làm việc. Khi mọi thứ đều có trật tự, mọi sự tìm kiếm đều trở nên dễ dàng.</p>
              <h3 className="text-green-600">3.3 Tăng năng suất làm việc</h3>
              <p className='mb-4'>Nhờ vào quy tắc 5S, bằng cách loại bỏ những thứ không cần thiết, tăng cường sắp xếp và vệ sinh, nhân viên có thể dễ dàng tìm kiếm và sử dụng các dụng cụ, thiết bị và tài liệu, giúp tiết kiệm thời gian và tăng năng suất làm việc</p>
              <h3 className="text-green-600">3.4 Tiết kiệm chi phí</h3>
              <p className='mb-4'>Bằng cách tối ưu hóa không gian làm việc, giảm thiểu lãng phí và sử dụng tài nguyên hiệu quả hơn, doanh nghiệp có thể giảm thiểu chi phí vận hành đáng kể cho doanh nghiệp của mình</p>
              <h3 className="text-green-600">3.5 Tăng chất lượng sản phẩm</h3>
              <p className='mb-4'>5S giúp giữ cho môi trường làm việc luôn sạch sẽ và gọn gàng. Từ đó, giúp tăng cường chất lượng sản phẩm và giảm thiểu lỗi sản xuất không mong muốn</p>
            </section>

            <div className="rounded-lg mb-8">
              <Image
                src="/images/Bg/image (2).png"
                alt='Process'
                width={900}
                height={600}
              />
              <p className='text-center text-[#667F93] mt-2'>Quy trình 5s gồm các bước</p>
            </div>

            <section id="tai-sao-lai-ap-dung-5s" className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-green-600">5. Quy trình được thực hiện như sau:</h2>
              <p className="mb-4">Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp trên toàn thế giới, bao gồm cả Việt Nam. Điều này càng chứng minh rõ nét tính hiệu quả của quy trình đem lại. Sau đây là các lý do vì sao bạn nên lựa chọn quy trình:</p>
              <h3 className="text-green-600">5.1 Giai đoạn chuẩn bị</h3>
              <p className='mb-4'>Trong giai đoạn chuẩn bị, doanh nghiệp cần bố trí nhân lực đứng ra điều hành và quản lý quá trình thực hiện quy trình 5S. Việc phân bổ cụ thể như vậy sẽ giúp quá trình áp dụng quy tắc 5S sẽ hiệu quả hơn.</p>
              <h3 className="text-green-600">5.2 Triển khai rộng rãi </h3>
              <p className='mb-4'>Đầu tiên doanh nghiệp cần chuẩn bị tài liệu, kiến thức về quy trình 5S cho tất cả mọi người trong doanh nghiệp nắm rõ kiến thức cũng như cách áp dụng như thế nào vào doanh nghiệp của bạn</p>
              <h3 className="text-green-600">5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp</h3>
              <p className='mb-4'>Đây là bước có thể khiến mọi người không hào hứng trong các bước của quy trình. Doanh nghiệp nên tuyên truyền tích cực và tạo không khí hào hứng cho từng cá nhân</p>
              <h3 className="text-green-600">5.4 Sàng lọc, sắp xếp và đánh giá</h3>
              <p className='mb-4'>Đây là bước tiếp theo sau khi đã hoàn thành bước vệ sinh toàn bộ doanh nghiệp. Doanh nghiệp cần đưa ra tiêu chuẩn rõ ràng để việc thực hiện sàng lọc và sắp xếp trở nên khoa học hơn, hiệu quả hơn và dễ dàng tìm kiếm sau này</p>
              <h3 className="text-green-600">5.5 Đánh giá</h3>
              <p className='mb-4'>5S giúp giữ cho môi trường làm việc luôn sạch sẽ và gọn gàng. Từ đó, giúp tăng cường chất lượng sản phẩm và giảm thiểu lỗi sản xuất không mong muốn</p>
            </section>

            <section id="tai-sao-lai-ap-dung-5s" className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-green-600">6. Quy trình 5S có giống với Kaizen?</h2>
              <p className="mb-4">Vậy câu hỏi đặt ra ở đây là quy trình 5S có giống với Kaizen hay không? Quy trình 5S với Kaizen là 2 khái niệm khác nhau nhưng giữa chúng có mối quan hệ chặt chẽ với nhau</p>
              <div className=" border-l-4 border-[#15AA7A] p-4 mb-8">
                <blockquote className="italic text-gray-700">
                  Về Kaizen, thì đây được xem là một triết lý cải tiến liên tục trong doanh nghiệp. Phương pháp này nhằm tạo ra sự thay đổi tích cực, mang tính liên tục và bền vững. 
                </blockquote>
              </div>
              <div className=" border-l-4 border-[#15AA7A] p-4 mb-8">
                <blockquote className="italic text-gray-700">
                 Còn đối với quy tắc 5S, đây là một phương pháp quản lý và cải tiến trong sản xuất. 5S tập trung vào việc sắp xếp, sạch sẽ, sắp đặt, tiêu chuẩn hóa và kỷ luật trong môi trường làm việc
                </blockquote>
              </div>
              <p className='mb-4'>Tuy nhiên, quy trình 5S được xem là một phần của Kaizen. Và quy tắc này đóng vai trò quan trọng trong việc tạo ra môi trường làm việc sạch sẽ, an toàn. Quy tắc 5S thường được sử dụng làm bước đầu tiên trong quá trình cải tiến liên tục của phương pháp Kaizen để tạo ra một nền tảng vững chắc cho các hoạt động cải tiến tiếp theo.</p>
            </section>

            <section id="tai-sao-lai-ap-dung-5s" className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-green-600">7. Đối tượng nào nên áp dụng 5S?</h2>
              <p className="mb-4">Quy trình 5S được xem là phương pháp quản lý được áp dụng rộng rãi ở nhiều ngành công nghiệp và các loại doanh nghiệp khác nhau. Tuy nhiên, 5S phù hợp đặc biệt cho các doanh nghiệp sản xuất, các cơ quan hành chính, các tổ chức phi lợi nhuận và các doanh nghiệp nhỏ</p>
              <p className="mb-4">Các tổ chức có sự xuất hiện của nhiều nhân viên, hoạt động phức tạp, các trang thiết bị và vật dụng phải được quản lý và sử dụng hiệu quả.</p>
            </section>

            <div className="rounded-lg mb-8">
              <Image
                src="/images/Bg/Frame 1171276042.png"
                alt='Process'
                width={900}
                height={600}
              />
            </div>

            <section id="tai-sao-lai-ap-dung-5s" className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-green-600">8. Các yếu tố tạo nên thành công cho quy trình 5S</h2>
              <p className="mb-4">Và những nhân tố quyết định đến quá trình thành công của quy trình nhằm cải tiến môi trường làm việc của doanh nghiệp đó là từ phía</p>
              <ul className="list-disc  ml-4 mb-4">
                <li>Lãnh đạo cởi mở và ủng hộ áp dụng quy trình vào doanh nghiệp. Bởi đây yếu tố quan trọng nhất để quyết định doanh nghiệp có áp dụng quy tắc này hay không</li>
                <li>Chương trình, kế hoạch thực hiện quy trình: Sau khi phía lãnh đạo đồng ý, doanh nghiệp cần bộ phận đưa lên ý tưởng, kế hoạch thực hiện triển khai 5S</li>
                <li>Sự tự nguyện tham gia của toàn thể nhân viên: Doanh nghiệp cần huy động và khuyến khích nhân viên tự nguyện thực hiện vì lợi ích chung của tổ chức, của doanh nghiệp.</li>
              </ul>
              <p className="mb-4">
              Đồng thời, trên đây là các yếu tố tạo nên sự thành công nhưng cũng là các lưu ý cho mỗi doanh nghiệp cần nắm bắt trước khi bắt tay vào triển khai quy trình 5S vào doanh nghiệp của mình. Và với những thông tin bổ ích như trên, FOSO mong rằng phần nào giúp được doanh nghiệp của bạn phát triển, cải tiến vượt bậc trong tương lai.</p>
            </section>

            <FeedbackReaction />
          </div>

          {/* Right sidebar - Table of Contents */}
          <div className="md:w-3/4 md:ml-6 mt-8 md:mt-0">
            <div className="bg-white rounded-lg p-4">
              <div className="flex justify-between items-center mb-6" onClick={() => setIsTableOfContentsOpen(!isTableOfContentsOpen)}>
                <h3 className="font-bold text-lg leading-[200%]">Nội Dung Bài Viết</h3>
                <button>
                  <svg className={`w-5 h-5 transform ${isTableOfContentsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
              </div>
              
              {isTableOfContentsOpen && (
                <div className="">
                  <div className="mb-2">
                    <a href="#quy-trinh-5s-la-gi" className="text-green-600 hover:underline">1. Quy trình 5S là gì?</a>
                  </div>
                  <div className="mb-2">
                    <a href="#loi-ich-quy-trinh-5s" className="text-green-600 hover:underline">2. Lợi ích quy trình 5S đem lại</a>
                  </div>
                  <div className="mb-2">
                    <a href="#ap-dung-quy-trinh-5s" className="text-green-600 hover:underline">3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?</a>
                    <div className="ml-4">
                      <div className="mb-1">
                        <a href="#3-1" className="text-gray-600 hover:underline text-sm">3.1 Cải thiện tư thế, môi trường làm việc</a>
                      </div>
                      <div className="mb-1">
                        <a href="#3-2" className="text-gray-600 hover:underline text-sm">3.2 Trật tự thời gian đang tài</a>
                      </div>
                      <div className="mb-1">
                        <a href="#3-3" className="text-gray-600 hover:underline text-sm">3.3 Tránh hỏng hóc siêu việc</a>
                      </div>
                      <div className="mb-1">
                        <a href="#3-4" className="text-gray-600 hover:underline text-sm">3.4 Tiết kiệm chi phí</a>
                      </div>
                      <div className="mb-1">
                        <a href="#3-5" className="text-gray-600 hover:underline text-sm">3.5 Tăng chất lượng sản phẩm</a>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2">
                    <a href="#cac-buoc-thuc-hien" className="text-green-600 hover:underline">4. Quy trình 5S gồm các bước:</a>
                    <div className="ml-4">
                      <div className="mb-1">
                        <a href="#4-1" className="text-gray-600 hover:underline text-sm">4.1 Seiri (Sàng lọc)</a>
                      </div>
                      <div className="mb-1">
                        <a href="#4-2" className="text-gray-600 hover:underline text-sm">4.2 Seiton (Sắp xếp)</a>
                      </div>
                      <div className="mb-1">
                        <a href="#4-3" className="text-gray-600 hover:underline text-sm">4.3 Seiso (Vệ sinh)</a>
                      </div>
                      <div className="mb-1">
                        <a href="#4-4" className="text-gray-600 hover:underline text-sm">4.4 Seiketsu (Tiêu chuẩn hóa)</a>
                      </div>
                      <div className="mb-1">
                        <a href="#4-5" className="text-gray-600 hover:underline text-sm">4.5 Shitsuke (Kỷ luật)</a>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2">
                    <a href="#thuc-hien-hieu-qua" className="text-green-600 hover:underline">5. Quy trình được thực hiện như sau:</a>
                    <div className="ml-4">
                      <div className="mb-1">
                        <a href="#5-1" className="text-gray-600 hover:underline text-sm">5.1 Giai đoạn chuẩn bị</a>
                      </div>
                      <div className="mb-1">
                        <a href="#5-2" className="text-gray-600 hover:underline text-sm">5.2 Triển khai thực thi</a>
                      </div>
                      <div className="mb-1">
                        <a href="#5-3" className="text-gray-600 hover:underline text-sm">5.3 Thực hiện về tiêu chuẩn hóa doanh nghiệp</a>
                      </div>
                      <div className="mb-1">
                        <a href="#5-4" className="text-gray-600 hover:underline text-sm">5.4 Sáng tạo, cải tiến và đánh giá</a>
                      </div>
                      <div className="mb-1">
                        <a href="#5-5" className="text-gray-600 hover:underline text-sm">5.5 Đánh giá</a>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2">
                    <a href="#5s-co-gi-giong-kaizen" className="text-green-600 hover:underline">6. Quy trình 5S có gì giống với Kaizen?</a>
                  </div>
                  <div className="mb-2">
                    <a href="#loi-khuyen-5s" className="text-green-600 hover:underline">7. Đôi lời khuyên nên áp dụng 5S?</a>
                  </div>
                  <div className="mb-2">
                    <a href="#phan-mem-co-the-ho-tro" className="text-green-600 hover:underline">8. Các phần mềm nên tham khảo cho quy trình 5S</a>
                  </div>
                </div>
              )}
            </div>
            
            {/* Banner quảng cáo */}
            <div className="mt-6 space-y-8">
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
          </div>
        </div>
        <div>
            <h1 className='text-4xl font-bold leading-[200%] mb-6'>Bài Viết Liên Quan</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPosts.slice(0,3).map((post) => (
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
        </div>
        
      </main>

    </div>
  );
}