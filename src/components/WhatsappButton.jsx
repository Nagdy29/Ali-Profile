import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  const phoneNumber = "201281022796"; // ← غير الرقم لرقمك
  const message = "مرحبًا، أريد الاستفسار عن الكورسات.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg- text-white p-8  rounded-full shadow-lg animate-pulse transition duration-300"
        title="للتواصل عبر الواتساب"
      >
        <FaWhatsapp className="text-5xl text-green-800 " />
      </a>

      <div className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">
        للتواصل عبر الواتساب
      </div>
    </div>
  );
};

export default WhatsappButton;
