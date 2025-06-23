import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navv = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center gap-11 justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all z-50">
      {/* لوجو */}
      <Link to="/" className="text-5xl font-bold text-[#0B2B4E]">علي ربيع</Link>

      {/* ✅ Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8">
        <Link to="/" className="font-bold hover:text-[#4BA7E4]">الرئيسية</Link>
        <Link to="/about" className="font-bold hover:text-[#4BA7E4]">من نحن</Link>
        <Link to="/courses" className="font-bold hover:text-[#4BA7E4]">الدورات التدريبية</Link>
        <Link to="/consultation" className="font-bold hover:text-[#4BA7E4]">طلب استشارة</Link>
        <Link to="/faqData" className="font-bold hover:text-[#4BA7E4]">الأسئلة الشائعة</Link>
      </div>

      {/* زر التواصل */}
      <div className="hidden sm:block">
        <Link to="/contact">
          <button
            type="button"
            className="w-40 py-3 active:scale-95 transition text-sm text-white rounded-lg bg-indigo-500 shadow-md"
          >
            تواصل معنا
          </button>
        </Link>
      </div>

      {/* ✅ Menu Toggle for Mobile */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Menu"
        className="sm:hidden"
      >
        {/* Menu Icon */}
        <svg
          width="21"
          height="15"
          viewBox="0 0 21 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="21" height="1.5" rx=".75" fill="#426287" />
          <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
          <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
        </svg>
      </button>

      {/* ✅ Mobile Menu */}
      {open && (
        <div className="absolute top-0 left-0 w-full bg-white z-40 shadow-md py-6 px-6 text-right transition-all duration-300 flex flex-col gap-4 md:hidden">
          {/* زر الإغلاق */}
          <div className="flex justify-end mb-2">
            <button onClick={() => setOpen(false)} aria-label="Close Menu">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18 6L6 18" stroke="#000" strokeWidth="2" strokeLinecap="round" />
                <path d="M6 6L18 18" stroke="#000" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* روابط الموبايل */}
          <Link to="/" className="font-bold hover:text-[#4BA7E4]" onClick={() => setOpen(false)}>الرئيسية</Link>
          <Link to="/about" className="font-bold hover:text-[#4BA7E4]" onClick={() => setOpen(false)}>من نحن</Link>
          <Link to="/courses" className="font-bold hover:text-[#4BA7E4]" onClick={() => setOpen(false)}>الدورات التدريبية</Link>
          <Link to="/consultation" className="font-bold hover:text-[#4BA7E4]" onClick={() => setOpen(false)}>طلب استشارة</Link>
          <Link to="/faqData" className="font-bold hover:text-[#4BA7E4]" onClick={() => setOpen(false)}>الأسئلة الشائعة</Link>
          <Link to="/contact" className="font-bold hover:text-[#4BA7E4]" onClick={() => setOpen(false)}>تواصل معنا</Link>
        </div>
      )}
    </nav>
  );
};

export default Navv;
