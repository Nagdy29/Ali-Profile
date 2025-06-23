// ✅ صفحة الأسئلة الشائعة (FAQ) بتصميم متناسق وجذاب
import React, { useState } from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const faqData = [
  {
    question: "ما هي أفضل مصادر تعلم Excel؟",
    answer:
      "يمكنك تعلم Excel من خلال دورات مثل كورس مايكروسوفت Excel على Coursera، Udemy، أو قناتنا التعليمية."
  },
  {
    question: "ما هي فائدة تحليل البيانات باستخدام Power BI؟",
    answer:
      "Power BI يساعدك على تحويل البيانات إلى تقارير تفاعلية ورسوم بيانية احترافية لسهولة اتخاذ القرار."
  },
  {
    question: "هل أحتاج خلفية تقنية لتعلم تحليل البيانات؟",
    answer:
      "لا، يمكنك البدء من الصفر. فقط تحتاج لفهم بسيط في الإكسل والرغبة في التعلم والتطبيق."
  },
  {
    question: "هل شهادات هذه الدورات معتمدة؟",
    answer:
      "نعم، نقدم شهادات إتمام معتمدة بعد الانتهاء من الدورة والتقييم النهائي."
  },
  {
    question: "كم مدة تعلم تحليل البيانات بشكل فعّال؟",
    answer:
      "تختلف من شخص لآخر، ولكن المتوسط من 2 إلى 3 أشهر مع التطبيق العملي المنتظم."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="container mx-auto px-4 py-10 mb-10">
      {/* ✅ شريط التصفح العلوي */}
      <div className="bg-[#FDFCF9] py-16 px-4 md:px-12 rounded-xl mb-8 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-24 h-24 rounded-full bg-yellow-200 opacity-30 border border-black border-dashed rotate-45"></div>
        <div className="absolute top-20 left-10 w-6 h-6 rounded-full border border-yellow-500"></div>
        <div className="absolute bottom-10 left-32 w-20 h-20 bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:4px_4px] opacity-30 rotate-45"></div>
        <h1 className="text-4xl md:text-5xl font-bold text-[#0B2B4E] mb-4 text-center">الأسئلة الشائعة</h1>
        <p className="text-center text-[#2EBFA5]">
          <Link to="/" className="text-[#0B2B4E] font-medium">الرئيسية</Link> &nbsp; &gt; &nbsp; الأسئلة الشائعة
        </p>
      </div>

      {/* ✅ الأسئلة */}
      <div className="max-w-3xl mx-auto space-y-4">
        {faqData.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white rounded-xl shadow p-4 cursor-pointer border border-gray-200"
            onClick={() => toggleAnswer(index)}
          >
            <h3 className="text-lg font-semibold text-[#0B2B4E]">{faq.question}</h3>
            {openIndex === index && (
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
