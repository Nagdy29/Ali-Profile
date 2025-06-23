/* eslint-disable no-unused-vars */
// components/StatsSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaUserGraduate, FaProjectDiagram, FaUsers } from "react-icons/fa";

const StatsSection = () => {
  const stats = [
    { value: "60%", label: "  من طلاب غيّروا مسارهم المهني", icon: <FaUserGraduate size={30} /> },
    { value: "+20", label: "مشروع تم إنجازه", icon: <FaProjectDiagram size={30} /> },
    { value: "+50", label: "طالب مسجل", icon: <FaUsers size={30} /> },
  ];

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 py-16 px-4 sm:px-6 lg:px-8">
      {/* خلفية متحركة - دوائر */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-1/4 left-10 w-40 h-40 bg-blue-300 opacity-30 rounded-full animate-ping"></div>
        <div className="absolute bottom-10 right-20 w-32 h-32 bg-blue-200 opacity-30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-10 w-24 h-24 bg-blue-100 opacity-20 rounded-full animate-ping"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex gap-6 justify-center items-center flex-col lg:flex-row  md:justify-between">
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          وصول غير محدود إلى جميع الكورسات
        </motion.h1>

        {/* كل العناصر في صف واحد وتكون Responsive */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-6 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl px-8 py-6 shadow-xl w-[250px] text-center border border-blue-100"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex justify-center text-blue-600 mb-2">{stat.icon}</div>
              <div className="text-3xl font-extrabold text-blue-800">{stat.value}</div>
              <p className="text-sm mt-2 text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
