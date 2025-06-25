/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { CoursesData } from "./CoursesData";
import { FaCheckCircle, FaWhatsapp, FaCopy } from "react-icons/fa";
import Modal from "../components/Modal";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { motion } from "framer-motion";

const CourseDetail = () => {
  const { id } = useParams();
  const course = CoursesData.find((c) => c.id === Number(id));

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

  const getMessage = () => {
    const fullPhone = `${form.countryCode}${form.phone}`;
    return `👤 الاسم: ${form.name}\n📞 الهاتف: ${fullPhone}\n✉️ البريد: ${form.email}\n📚 الكورس المطلوب: ${course.name}\n💰 السعر: ${course.price} ريال`;
  };

  const sendToWhatsApp = async () => {
    if (!form.name || !form.phone || !form.email) {
      alert("من فضلك املأ جميع الحقول");
      return;
    }

    const encodedMsg = encodeURIComponent(getMessage());
    const phoneNumber = "201281022796";
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMsg}`;
    window.open(url, "_blank");

    await addDoc(collection(db, "requests"), {
      name: form.name,
      phone: form.phone,
      countryCode: form.countryCode,
      email: form.email,
      course: course.name,
      price: course.price,
      createdAt: new Date(),
    });

    alert("✅ تم إرسال الطلب وتسجيله بنجاح!");
    setModalOpen(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(getMessage());
    alert("تم نسخ الرسالة، لو لم تظهر تلقائيًا في واتساب يمكنك لصقها يدويًا ✌️");
  };

  if (!course) {
    return (
      <div className="text-center py-20 text-2xl font-bold text-red-600">
        لم يتم العثور على الدورة المطلوبة
      </div>
    );
  }

  const detailsToShow = course.details || [];
  const similarCourses = CoursesData.filter((c) => c.id !== course.id).slice(0, 2);

  return (
    <section className="container mx-auto px-4 py-10 space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl shadow p-6 flex flex-col md:flex-row-reverse gap-8"
      >
        <div className="md:w-1/3">
          <img
            src={course.image}
            alt={course.name}
            className="w-full h-56 object-cover rounded-lg object-top"
          />
          <div className="text-center mt-4 space-y-1">
            <h2 className="text-xl font-bold text-gray-800">{course.name}</h2>
            <p className="text-yellow-600 text-lg font-bold">{course.price} ريال</p>
            <p className="text-gray-500">عدد الساعات: {course.lessons} ساعة</p>
            <p className="text-gray-500">التصنيف: {course.category}</p>
            <button
              onClick={() => setModalOpen(true)}
              className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-medium transition"
            >
              <FaWhatsapp className="inline-block ml-2" />
              اطلب الآن عبر واتساب
            </button>
          </div>

       
        </div>

        <div className="md:w-2/3">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">{course.name}</h1>
          <p className="text-gray-700 mb-6">{course.description}</p>

          <h3 className="text-lg font-semibold mb-3 text-[#7C5F53]">
            ماذا ستتعلم في هذه الدورة؟
          </h3>
          <ul className="space-y-2">
            {detailsToShow.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-gray-700">
                <FaCheckCircle className="text-green-500 mt-1" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      <div className="space-y-6">
        <h2 className="text-xl font-bold text-blue-800 text-center border-b pb-2 w-fit mx-auto">
          كورسات مشابهة
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {similarCourses.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white rounded-lg shadow p-4 hover:shadow-md transition"
            >
              <img
                src={c.image}
                alt={c.name}
                className="w-full h-70 object-cover rounded object-top"
              />
              <h3 className="mt-3 text-lg font-semibold text-gray-800">{c.name}</h3>
              <p className="text-gray-600 text-sm mb-2">{c.price} ريال</p>
              <Link
                to={`/courses/${c.id}`}
                className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
              >
                تفاصيل الكورس
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

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
            <textarea
              readOnly
              value={getMessage()}
              className="w-full p-2 border rounded text-sm text-gray-600 mb-2"
              rows={4}
            />
            <button
              onClick={copyToClipboard}
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg mb-2 flex items-center justify-center gap-2"
            >
              <FaCopy /> نسخ الرسالة يدويًا
            </button>
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
