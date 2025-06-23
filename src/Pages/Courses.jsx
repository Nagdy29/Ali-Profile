/* eslint-disable no-unused-vars */
// ✅ صفحة الكورسات الرئيسية بكروت متحركة
import { Link,  } from "react-router-dom";
import { CoursesData } from "./CoursesData";
import { FaUserGraduate, FaClock } from "react-icons/fa";
import { MdOutlinePriceChange } from "react-icons/md";
import { motion } from "framer-motion";
import { useState } from "react";

const Courses = () => {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("الكل");

  const allTypes = ["الكل", ...new Set(CoursesData.map((c) => c.type))];

  const filteredCourses = CoursesData.filter((course) => {
    const matchName = course.name.toLowerCase().includes(search.toLowerCase());
    const matchType = typeFilter === "الكل" || course.type === typeFilter;
    return matchName && matchType;
  });

  return (
    <section className="container mx-auto px-4 py-10 mb-20 md:mb-6">
      {/* Header */}
      <div className="flex justify-center">
        <motion.div
          className="relative bg-[#FDFCF9] py-20 px-4 md:px-16 text-right overflow-hidden"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* الزخارف */}
          <div className="absolute top-10 right-10 w-24 h-24 rounded-full bg-pink-300 opacity-30 border border-black border-dashed rotate-45"></div>
          <div className="absolute top-20 left-10 w-6 h-6 rounded-full border border-green-500"></div>
          <div className="absolute bottom-10 left-32 w-20 h-20 bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:4px_4px] opacity-40 rotate-45"></div>

          {/* المحتوى */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#0B2B4E] mb-4">
            كل الدورات التدريبيه
          </h1>
          <p className="text-[#2EBFA5]">
            <span className="text-[#2EBFA5]">كل الدورات التدريبيه</span> &nbsp; &gt; &nbsp;
            <Link to="/">
              <span className="text-[#0B2B4E]">الرئيسية</span>
            </Link>
          </p>
        </motion.div>
      </div>

      {/* Filters */}
      <div className="my-6 flex flex-col md:flex-row items-center gap-4 justify-center">
        <input
          type="text"
          placeholder="ابحث باسم الكورس..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border rounded w-full md:w-1/3"
        />
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="p-2 border rounded w-full md:w-1/4"
        >
          {allTypes.map((type, idx) => (
            <option key={idx} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <h1 className="text-3xl font-bold text-center mb-10 text-[#7C5F53]">
        الكورسات المتاحة
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course, index) => (
          <Link
            to={`/courses/${course.id}`}
            key={course.id}
            className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transform transition-all duration-500 ease-in-out hover:-translate-y-1 animate-fade-in-up`}
            style={{ animationDelay: `${index * 150}ms`, animationFillMode: "both" }}
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 space-y-2">
              <h2 className="text-xl font-semibold text-gray-800">
                {course.name}
              </h2>
              <p className="text-gray-500 text-sm line-clamp-2">
                {course.description}
              </p>
              <div className="flex items-center gap-3 text-sm text-gray-600 mt-2">
                <FaUserGraduate />
                {course.students} طالب
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <FaClock /> {course.duration}
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <MdOutlinePriceChange /> {course.price} جنيه
              </div>
              <button className="mt-4 w-full bg-[#498DEE] hover:bg-blue-900 text-white py-2 rounded-md font-medium">
                عرض التفاصيل
              </button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Courses;
