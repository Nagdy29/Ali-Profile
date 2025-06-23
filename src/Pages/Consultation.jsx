// ✅ صفحة الاستشارة مع إرسال البيانات عبر EmailJS
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";

const Consultation = () => {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    phone: "",
    countryCode: "+20",
    message: "",
  });

  const [status, setStatus] = useState("");
  emailjs.init("YpxDqsTZEAZXET7e7");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\d{7,15}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, type, phone, message, countryCode } = formData;

    if (!name || !type || !phone || !message) {
      setStatus("من فضلك املأ جميع الحقول");
      return;
    }
    if (!validatePhone(phone)) {
      setStatus("رقم الهاتف غير صحيح. يرجى إدخال رقم بدون رموز أو مسافات، بين 7 إلى 15 رقمًا.");
      return;
    }

    const dataToSend = {
      ...formData,
      phone: `${countryCode}${phone}`,
    };

    emailjs
      .send("service_acb6lqc", "template_jd2hufc", dataToSend)
      .then(
        (result) => {
          console.log("Email sent successfully:", result);
          setStatus("تم إرسال الاستشارة بنجاح!");
          setFormData({ name: "", type: "", phone: "", countryCode: "+20", message: "" });
        },
        (error) => {
          console.error("Email sending failed:", error);
          setStatus(`حدث خطأ أثناء الإرسال: ${error.text}`);
        }
      );
  };

  return (
    <section className="container mx-auto px-4 py-10">
      {/* ✅ شريط التصفح العلوي */}
      <div className="bg-[#FDFCF9] py-16 px-4 md:px-12 rounded-xl mb-8 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-24 h-24 rounded-full bg-blue-300 opacity-30 border border-black border-dashed rotate-45"></div>
        <div className="absolute top-20 left-10 w-6 h-6 rounded-full border border-blue-500"></div>
        <div className="absolute bottom-10 left-32 w-20 h-20 bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:4px_4px] opacity-30 rotate-45"></div>
        <h1 className="text-4xl md:text-5xl font-bold text-[#0B2B4E] mb-4 text-center">طلب استشارة</h1>
        <p className="text-center text-[#2EBFA5]">
          <Link to="/" className="text-[#0B2B4E] font-medium">الرئيسية</Link> &nbsp; &gt; &nbsp; طلب استشارة
        </p>
      </div>

      {/* ✅ نموذج الطلب */}
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6 bg-white shadow-xl rounded-xl p-8">
        <div>
          <label className="block text-gray-700 mb-1 font-semibold">الاسم</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1 font-semibold">نوع الاستشارة</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">اختر نوع الاستشارة</option>
            <option value="مالية">مالية</option>
            <option value="قانونية">قانونية</option>
            <option value="تسويقية">تسويقية</option>
            <option value="تعليمية">تعليمية</option>
            <option value="أخرى">أخرى</option>
          </select>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div>
            <label className="block text-gray-700 mb-1 font-semibold">رمز الدولة</label>
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="+20">🇪🇬 +20</option>
              <option value="+966">🇸🇦 +966</option>
              <option value="+971">🇦🇪 +971</option>
              <option value="+965">🇰🇼 +965</option>
              <option value="+1">🇺🇸 +1</option>
            </select>
          </div>
          <div className="col-span-2">
            <label className="block text-gray-700 mb-1 font-semibold">رقم الهاتف</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 mb-1 font-semibold">تفاصيل الاستشارة</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            required
          ></textarea>
        </div>

        {status && <p className="text-center text-red-600 font-semibold">{status}</p>}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
        >
          إرسال الطلب
        </button>
      </form>
    </section>
  );
};

export default Consultation;
