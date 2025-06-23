// ✅ صفحة تواصل معنا بشكل جذاب
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      setStatus("من فضلك املأ جميع الحقول");
      return;
    }

    // هنا تقدر تركب EmailJS أو API خاص بالإرسال لاحقًا
    console.log("تم الإرسال", formData);
    setStatus("تم إرسال الرسالة بنجاح!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="container mx-auto px-4 py-10">
      {/* ✅ شريط التصفح العلوي */}
      <div className="bg-[#FDFCF9] py-16 px-4 md:px-12 rounded-xl mb-8 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-24 h-24 rounded-full bg-green-300 opacity-30 border border-black border-dashed rotate-45"></div>
        <div className="absolute top-20 left-10 w-6 h-6 rounded-full border border-green-500"></div>
        <div className="absolute bottom-10 left-32 w-20 h-20 bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:4px_4px] opacity-30 rotate-45"></div>
        <h1 className="text-4xl md:text-5xl font-bold text-[#0B2B4E] mb-4 text-center">تواصل معنا</h1>
        <p className="text-center text-[#2EBFA5]">
          <Link to="/" className="text-[#0B2B4E] font-medium">الرئيسية</Link> &nbsp; &gt; &nbsp; تواصل معنا
        </p>
      </div>

      {/* ✅ نموذج التواصل */}
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6 bg-white shadow-xl rounded-xl p-8">
        <div>
          <label className="block text-gray-700 mb-1 font-semibold">الاسم</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1 font-semibold">البريد الإلكتروني</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1 font-semibold">الموضوع</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1 font-semibold">الرسالة</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            rows="4"
            required
          ></textarea>
        </div>

        {status && <p className="text-center text-red-600 font-semibold">{status}</p>}
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition"
        >
          إرسال الرسالة
        </button>
      </form>
    </section>
  );
};

export default Contact;
