import { BookCheck, Trophy, Lightbulb } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className="bg-[#eef7fc] py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white border-2 border-dotted border-[#82c7f5] hover:bg-blue-100 rounded-xl p-6 text-center shadow-sm">
          <div className="flex justify-center mb-4">
            <div className="relative w-12 h-12">
              <Trophy className="w-12 h-12 text-gray-800 z-10 relative" />
              <div className="absolute bottom-0 left-0 w-5 h-5 bg-[#39BDF5] rounded-full -z-10"></div>
            </div>
          </div>
          <h3 className="font-bold text-xl text-gray-800 mb-2">طريقك من المبتدئ للاحتراف</h3>
          <p className="text-gray-600 text-sm">
            ابدأ من الصفر، وامشي في مسار تعلم واضح، منظم، ومبني على خبرة حقيقية.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white border-2 border-dotted border-[#82c7f5] hover:bg-blue-100  rounded-xl p-6 text-center shadow-sm">
          <div className="flex justify-center mb-4">
            <div className="relative w-12 h-12">
              <Lightbulb className="w-12 h-12 text-gray-800 z-10 relative" />
              <div className="absolute bottom-0 left-0 w-5 h-5 bg-[#39BDF5] rounded-full -z-10"></div>
            </div>
          </div>
          <h3 className="font-bold text-xl text-gray-800 mb-2">تعليم عملي من خبير حقيقي</h3>
          <p className="text-gray-600 text-sm">
            هتتعلم البرمجة بأسلوب تطبيقي مباشر، على إيد Google Developer Expert.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white border-2 border-dotted hover:bg-blue-100  border-[#82c7f5] rounded-xl p-6 text-center shadow-sm">
          <div className="flex justify-center mb-4">
            <div className="relative w-12 h-12">
              <BookCheck className="w-12 h-12 text-gray-800 z-10 relative" />
              <div className="absolute bottom-0 left-0 w-5 h-5 bg-[#39BDF5] rounded-full -z-10"></div>
            </div>
          </div>
          <h3 className="font-bold text-xl text-gray-800 mb-2">5 دورات تعليمية</h3>
          <p className="text-gray-600 text-sm">
            استكشف مجموعة كبيرة ومتنوعة من الدورات التدريبية.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
