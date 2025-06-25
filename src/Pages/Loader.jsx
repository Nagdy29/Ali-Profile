// components/Loader.jsx
import React, { useEffect, useState } from "react";
import loadingGif from "../assets/looding.svg"; // استبدل بالصورة اللي عندك

const Loader = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 ثواني

    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
        <img src={loadingGif} alt="Loading..." className="w-32 h-32 animate-bounce" />
        <h2 className="mt-4 text-xl font-bold text-blue-800 animate-pulse">
          مرحباً بك! جاري تحميل الموقع...
        </h2>
      </div>
    );
  }

  return children;
};

export default Loader;
