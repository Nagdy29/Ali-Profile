


// BestSection.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    title: "Excel",
    icon: "📊",
    bg: "bg-blue-100",
  },
  {
    title: "تحليل البيانات",
    icon: "📈",
    bg: "bg-green-100",
  },
  {
    title: "Power BI & AI",
    icon: "🤖",
    bg: "bg-yellow-100",
  },
];

const BestSection = () => {
  const navigate = useNavigate();

  const handleClick = (category) => {
    // ممكن تمرر البيانات من هنا في URL أو Context
    navigate("/courses");
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800">
          أفضل <span className="text-blue-500 relative">الأقسام</span>
        </h2>
        <div className="w-16 h-1 bg-yellow-400 mx-auto mt-2 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {categories.map((cat, index) => (
          <div
            key={index}
            onClick={() => handleClick(cat.title)}
            className={`cursor-pointer p-6 rounded-lg shadow-md hover:shadow-xl transition hover:scale-105 ${cat.bg} text-center`}
          >
            <div className="text-5xl mb-4">{cat.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">{cat.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSection;
