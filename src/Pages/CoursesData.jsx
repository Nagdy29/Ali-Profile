import excl from "../assets/12.jpg";
import excl1 from "../assets/11.jpg";
import excl2 from "../assets/20.jpg";
import excl3 from "../assets/images.png";
import excl4 from "../assets/122.jpg";

export const CoursesData = [
  {
    id: 1,
    name: "كورس Excel",
    type: "Excel",
    price: 250,
    lessons: 40,
    category: "Excel",
    description:
      "الصيغ، الدوال، الجداول المحورية، المخططات، Power Query، تطبيق عملي",
    image: excl,
    details: [
      "فهم واجهة Excel والتعامل مع الخلايا",
      "استخدام الصيغ والدوال",
      "إنشاء الجداول المحورية والتقارير",
      "العمل باستخدام Power Query",
      "تنسيقات متقدمة وتصميم الشيتات",
    ],
  },
  {
    id: 2,
    name: "Power BI",
    type: "Power BI",
    price: 250,
    lessons: 40,
    category: "BI",
    description: "مقدمة، Power Query، نمذجة البيانات، DAX، العرض والتحليل",
    image: excl4,
    details: [
      "استيراد وتنظيف البيانات باستخدام Power Query",
      "إنشاء نماذج علاقات بين الجداول",
      "كتابة دوال DAX",
      "تصميم تقارير تفاعلية",
      "مشاركة التقارير عبر الإنترنت",
    ],
  },
  {
    id: 3,
    name: "تحليل البيانات باستخدام Python",
    type: "Python",
    price: 320,
    lessons: 50,
    category: "Python",
    description:
      "Numpy، Pandas، ETL، Web Scraping، Matplotlib، Seaborn، Streamlit",
    image: excl1,
    details: [
      "التعامل مع البيانات باستخدام Pandas وNumpy",
      "تحليل البيانات وتنظيفها",
      "استخدام مكتبات التصوير البياني",
      "تصميم تطبيقات تحليل تفاعلية بـ Streamlit",
      "تنفيذ مشاريع تحليل بيانات واقعية",
    ],
  },
  {
    id: 4,
    name: "SQL",
    type: "SQL",
    price: 150,
    lessons: 20,
    category: "SQL",
    description:
      "مقدمة، تصميم قواعد البيانات، استعلامات SQL، Joins، تحليل وربط",
    image: excl3,
    details: [
      "فهم قواعد البيانات وعلاقتها",
      "كتابة استعلامات SELECT و WHERE",
      "العمل مع JOINs",
      "بناء قواعد بيانات بسيطة",
      "تحليل البيانات باستخدام SQL",
    ],
  },
  {
    id: 5,
    name: "دبلومة تحليل البيانات المتكامل",
    type: "Diploma",
    price: 500,
    lessons: 100,
    category: "Diploma",
    description:
      "Excel + SQL + Power BI + Python + Dashboards: دورة شاملة لبناء مشروع متكامل",
    image: excl2,
    details: [
      "إتقان Excel من الأساسيات للاحتراف",
      "تعلم SQL للاستعلامات والتحليل",
      "استخدام Power BI لبناء لوحات تحكم",
      "تحليل البيانات باستخدام Python",
      "تنفيذ مشروع تحليل متكامل",
    ],
  },
];
