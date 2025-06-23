import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { CoursesData } from "./CoursesData";
import { FaCheckCircle, FaWhatsapp } from "react-icons/fa";
import Modal from "../components/Modal";

const CourseDetail = () => {
  const { id } = useParams();
  const course = CoursesData.find((c) => c.id === id);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    countryCode: "+20",
    email: "",
  });

  const [isModalOpen, setModalOpen] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendToWhatsApp = () => {
    if (!form.name || !form.phone || !form.email) {
      alert("من فضلك املأ جميع الحقول");
      return;
    }

    const msg = `👤 الاسم: ${form.name}%0A📞 الهاتف: ${form.countryCode}${form.phone}%0A✉️ البريد: ${form.email}%0A📚 الكورس: ${course.name}%0A💰 السعر: ${course.price} جنيه`;
    const phoneNumber = "201274512413"; // رقم المدرب
    const url = `https://wa.me/${phoneNumber}?text=${msg}`;
    window.open(url, "_blank");
    setModalOpen(false);
  };

  if (!course) {
    return (
      <div className="text-center py-20 text-2xl font-bold text-red-600">
        لم يتم العثور على الدورة المطلوبة
      </div>
    );
  }

  return (
    <section className="container mx-auto px-4 py-10 flex flex-col md:flex-row-reverse gap-8">
      {/* الصورة */}
      <div className="md:w-1/3 bg-white rounded-xl shadow-md p-4 space-y-4">
        <img
          src={course.image}
          alt={course.name}
          className="w-full h-64 object-cover rounded-lg"
        />
        <div className="text-center space-y-2">
          <h2 className="text-xl font-bold text-gray-800">{course.name}</h2>
          <p className="text-yellow-600 text-lg font-bold">
            {course.price} جنيه
          </p>
        </div>
        <button
          onClick={() => setModalOpen(true)}
          className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-medium transition"
        >
          <FaWhatsapp className="inline-block ml-2" />
          اطلب الآن عبر واتساب
        </button>
      </div>

      {/* التفاصيل */}
      <div className="md:w-2/3 bg-white rounded-xl shadow p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">{course.name}</h1>
        <p className="text-gray-700 mb-6">{course.description}</p>

        <h3 className="text-lg font-semibold mb-3 text-[#7C5F53]">
          ماذا ستتعلم في هذه الدورة؟
        </h3>
        <ul className="space-y-2">
          {course.details.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-gray-700">
              <FaCheckCircle className="text-green-500 mt-1" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* مودال */}
      {isModalOpen && (
        <Modal onClose={() => setModalOpen(false)}>
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-md mx-auto">
            <h2 className="text-xl font-bold mb-4 text-[#0B2B4E]">طلب الدورة</h2>
            <input
              type="text"
              name="name"
              placeholder="اسمك"
              onChange={handleChange}
              className="w-full p-2 border rounded mb-2"
            />
            <div className="flex gap-2 mb-2">
              <select
                name="countryCode"
                value={form.countryCode}
                onChange={handleChange}
                className="w-1/3 p-2 border rounded"
              >
                <option value="+20">🇪🇬 +20</option>
                <option value="+966">🇸🇦 +966</option>
                <option value="+971">🇦🇪 +971</option>
              </select>
              <input
                type="tel"
                name="phone"
                placeholder="رقم الواتساب"
                onChange={handleChange}
                className="w-2/3 p-2 border rounded"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="البريد الإلكتروني"
              onChange={handleChange}
              className="w-full p-2 border rounded mb-2"
            />
            <button
              onClick={sendToWhatsApp}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg"
            >
              إرسال عبر واتساب
            </button>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default CourseDetail;
