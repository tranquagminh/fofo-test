import React from 'react';
import Link from 'next/link';

interface PaginationProps {
  currentPage?: number;
  totalPages?: number;
  baseUrl?: string;
}

const Pagination: React.FC<PaginationProps> = ({ 
  currentPage = 1, 
  totalPages = 10,
  baseUrl = '/blog/page'
}) => {
  // Generate array of page numbers to show
  const getPageNumbers = () => {
    const pages = [];
    
    // Always show first page
    pages.push(1);
    
    // Current page and surrounding pages
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      pages.push(i);
    }
    
    // Always show last page
    if (totalPages > 1) {
      pages.push(totalPages);
    }
    
    // Add ellipsis indicators
    const result = [];
    let prevPage = null;
    
    for (const page of pages) {
      if (prevPage && page - prevPage > 3) {
        result.push('ellipsis');
      }
      result.push(page);
      prevPage = page;
    }
    
    return result;
  };
  
  const pageNumbers = getPageNumbers();
  
  return (
    <nav className="flex justify-center mt-10" aria-label="Pagination">
      <div className="flex items-center space-x-1">
        {/* Previous page button */}
        <Link 
          href={currentPage > 1 ? `${baseUrl}/${currentPage - 1}` : '#'} 
          className={`text-gray-500 p-2 rounded-md hover:bg-gray-100 transition-colors ${currentPage <= 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
          aria-disabled={currentPage <= 1}
          aria-label="Previous page"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        
        {/* Page numbers */}
        {pageNumbers.map((page, index) => {
          if (page === 'ellipsis') {
            return (
              <span key={`ellipsis-${index}`} className="px-2 text-gray-500">...</span>
            );
          }
          
          const isCurrentPage = page === currentPage;
          
          return (
            <Link 
              key={`page-${page}`}
              href={`${baseUrl}/${page}`}
              className={`w-8 h-8 flex items-center justify-center rounded-md transition-colors
                ${isCurrentPage 
                  ? 'bg-[#D1F7EA] text-black font-medium' 
                  : 'hover:bg-gray-100 text-gray-700'}`}
              aria-current={isCurrentPage ? 'page' : undefined}
              aria-label={`Page ${page}`}
            >
              {page}
            </Link>
          );
        })}
        
        {/* Next page button */}
        <Link 
          href={currentPage < totalPages ? `${baseUrl}/${currentPage + 1}` : '#'} 
          className={`text-gray-500 p-2 rounded-md hover:bg-gray-100 transition-colors ${currentPage >= totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
          aria-disabled={currentPage >= totalPages}
          aria-label="Next page"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </nav>
  );
};

export default React.memo(Pagination);