import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div>
        <footer class="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-500">
          <div class="flex flex-col md:flex-row justify-center gap-10 border-b border-gray-500/30 pb-6">
            <div class="md:max-w-96">
  <Link to="/" className="flex items-center gap-2">
        <span className="text-[#2563EB] font-bold text-xl hidden sm:inline">
          <span className="text-black">Ali</span> The Analyst
        </span>
      </Link>              <p class="mt-6 text-sm">
                منصة تعليمية بتقدّم محتوى عملي واحترافي في البرمجة وتحليل البيانات، بإشراف مباشر
                من خبراء في مجال علوم البيانات
              </p>
            </div>
            <div class="flex-1 flex  md:justify-center gap-20">
              <div>
                <h2 class="font-semibold mb-5 text-gray-800">روابط سريعه</h2>
                <ul class="text-sm space-y-2 flex justify-center flex-col">
                  <Link to="/" className="font-bold hover:text-[#4BA7E4]">
                    الرئيسية
                  </Link>
                  <Link to="/about" className="font-bold hover:text-[#4BA7E4]">
                    من نحن
                  </Link>
                  <Link
                    to="/courses"
                    className="font-bold hover:text-[#4BA7E4]"
                  >
                    الدورات التدريبية
                  </Link>
                  <Link
                    to="/consultation"
                    className="font-bold hover:text-[#4BA7E4]"
                  >
                    طلب استشارة
                  </Link>
                  <Link
                    to="/faqData"
                    className="font-bold hover:text-[#4BA7E4]"
                  >
                    الأسئلة الشائعة
                  </Link>
                </ul>
              </div>
              <div>
                <h2 class="font-semibold mb-5 text-gray-800">تواصل معنا</h2>
                <div class="text-sm space-y-2">
                  <p>+201281022796</p>
                  <p>rabeeali500@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        
        </footer>
      </div>
    </>
  );
};

export default Footer;
