/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FeaturesSection from "../components/FeaturesSection ";
import BestSection from "../components/BestSection";
import CoursesSection from "../components/CoursesSection ";
import StatsSection from "../components/StatsSection";

const Home = () => {
  return (
    <div className="relative bg-[#FDFCF9] overflow-hidden py-10">
      {/* أشكال زخرفية */}
      <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-blue-300 opacity-30 rotate-45"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:6px_6px] opacity-20 rotate-12"></div>
      <div className="absolute top-40 right-10 w-6 h-6 rounded-full border border-blue-500"></div>

      <div className="container mx-auto px-6 md:px-16 lg:px-24 xl:px-32 mb-20 flex flex-col-reverse lg:flex-row items-center md:justify-between gap-12 min-h-[600px]">
        
        {/* ✅ النص بالأنميشن */}
        <motion.div
          className="w-full md:w-1/2 text-start flex justify-center flex-col items-center gap-4 "
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-extrabold text-4xl lg:text-6xl text-gray-900 mb-6 leading-tight flex gap-2">
            طور <p className="gap-1 font-bold text-blue-600">مهاراتك</p> وابدأ طريقك المهني بثقة
          </h1>
          <Link to="/courses">
            <button className="w-48 py-3 text-sm text-white rounded-lg bg-[#498dee] hover:bg-blue-900 transition active:scale-95">
              ابدأ رحلتك التعليمية الآن
            </button>
          </Link>
        </motion.div>

        {/* ✅ الصورة بالأنميشن */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4 }}
        >
          <img
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/rightSideImage.svg"
            alt="rightSideImage"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
          />
        </motion.div>
      </div>
      <FeaturesSection/>
      <BestSection/>
      {/* courses */}
      <CoursesSection/>
      {/* state */}
      <StatsSection/>
    </div>
   
  );
};

export default Home;
