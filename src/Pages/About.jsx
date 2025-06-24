/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { FaChalkboardTeacher, FaChartLine, FaUsers, FaGlobe } from "react-icons/fa";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: " يوسف الهديان",
    feedback: " الله يعطيك العافية الشرح واضح وسهل.",
    courses: "  كورس power bi "
  },
  {
    name: " احمد سري",
    feedback: "افضل شي التدريب العملي اثناء المحاضرة.",
        courses: "  كورس بايثون    "

  },
  {
    name: "  نوف الشمري",
    feedback: "الشرح مرة واضح وسهل.",
     courses: "   كورس الاكسيل +SQL    "
  },
  {
    name: " أبو تميم",
    feedback: "كل الشكر لك ي دكتور علي الشرح الرائع من خلال كورس بور بي تمكنت من اجتياز اختبار pl-300",
    courses: "  كورس power bi "

  }
];

const About = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2 }
    })
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    swipe: false,
    draggable: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className="bg-white text-gray-800 overflow-x-hidden">
      {/* Section Title */}
       {/* ✅ شريط التصفح العلوي */}
         <div className="bg-[#FDFCF9] py-16 px-4 md:px-12 rounded-xl mb-8 relative overflow-hidden">
           <div className="absolute top-10 right-10 w-24 h-24 rounded-full bg-green-300 opacity-30 border border-black border-dashed rotate-45"></div>
           <div className="absolute top-20 left-10 w-6 h-6 rounded-full border border-green-500"></div>
           <div className="absolute bottom-10 left-32 w-20 h-20 bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:4px_4px] opacity-30 rotate-45"></div>
           <h1 className="text-4xl md:text-5xl font-bold text-[#0B2B4E] mb-4 text-center"> من نحن </h1>
           <p className="text-center text-[#2EBFA5]">
             <Link to="/" className="text-[#0B2B4E] font-medium">الرئيسية</Link> &nbsp; &gt; &nbsp; من نحن
 
           </p>
         </div>

      {/* Section 1 - من هو */}
      <section className="container mx-auto px-4 py-16 flex flex-col md:flex-row-reverse items-center gap-10">
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">علي ربيع - مدرب تحليل بيانات</h2>
          <p className="text-gray-700 leading-loose mb-4">
            أنا علي ربيع، مدرب معتمد في تحليل البيانات بخبرة تمتد لسنوات. أقدم كورسات في Excel, Power BI, Python، وغيرها لمساعدة المهتمين ببناء مسار مهني قوي في مجال تحليل البيانات.
          </p>
          <p className="text-gray-700 leading-loose">
            أسعى دائمًا لمشاركة خبراتي وتقديم أفضل ما لدي في كل دورة، مع التركيز على التطبيق العملي والتطوير المستمر.
          </p>
        </motion.div>

        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="https://img.freepik.com/free-vector/presentation-concept-illustration_114360-5521.jpg"
            alt="Instructor"
            className="rounded-xl shadow-lg sm:w-80 md:w-full"
          />
        </motion.div>
      </section>

      {/* Section 2 - رؤيتنا */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl font-bold text-gray-800 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            رؤيتنا في تطوير المهارات الرقمية
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[ 
              { icon: <FaChalkboardTeacher />, title: "كورسات متخصصة" },
              { icon: <FaChartLine />, title: "خبرة عملية" },
              { icon: <FaUsers />, title: "مجتمع متعلم" },
              { icon: <FaGlobe />, title: "تأثير واسع" }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
              >
                <div className="text-blue-600 text-4xl mb-3 mx-auto">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-700">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 - آراء الطلاب */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center text-gray-800 mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            ماذا يقول طلابنا؟
          </motion.h2>

          <Slider {...settings}>
            {testimonials.map((t, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 rounded-full p-8 mb-4 ps-3 mx-2 shadow-md h-full flex gap-5 "
                whileHover={{ scale: 1.03 }}
              >
                <p className="text-gray-700 mb-4 items-center flex justify-center">"{t.feedback}"</p>
                <p className="text-right font-bold text-blue-600 items-center flex justify-center "> {t.courses} - {t.name}</p>
              </motion.div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default About;
