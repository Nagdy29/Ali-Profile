// components/CoursesSection.jsx

import React from "react";
import { CoursesData } from "../Pages/CoursesData";
import { Link } from "react-router-dom";

const CoursesSection = () => {
  const displayedCourses = CoursesData.slice(0, 3);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* العنوان + زر جميع الكورسات */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              أبرز <span className="text-blue-500 relative">الكورسات</span>
            </h2>
            <div className="w-16 h-1 bg-yellow-400 mt-2 rounded-full"></div>
          </div>

          <Link
            to="/courses"
            className="text-blue-600 hover:text-blue-800 font-semibold text-sm md:text-base"
          >
            جميع الكورسات →
          </Link>
        </div>

        {/* الكروت */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {displayedCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden flex flex-col"
            >
              {/* صورة الكورس */}
              <img
                src={course.image}
                alt={course.name}
                className="w-full h-48 object-cover"
              />

              {/* التفاصيل */}
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  {/* العنوان وعدد الدروس */}
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold text-gray-800 text-right">
                      {course.name}
                    </h3>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {course.lessons} ساعه
                    </span>
                  </div>

                  {/* التقييم */}
                  <div className="flex justify-end items-center mb-4">
                    <div className="flex">
                      {[...Array(4)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-green-500 mx-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 mr-2">(0/0)</span>
                  </div>
                </div>

                {/* الوقت وزر التفاصيل */}
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span className="flex items-center">
                      <svg
                        className="w-4 h-4 ml-1 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {course.duration}
                    </span>
                  </div>

                  <Link
                    to={`/courses/${course.id}`}
                    className="text-blue-600 hover:text-blue-800 font-medium flex justify-end items-center"
                  >
                    عرض المزيد
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
