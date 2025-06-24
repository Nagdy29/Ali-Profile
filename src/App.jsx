import { Route, Routes } from "react-router-dom";
import Navv from "./components/Navv";
import Home from "./Pages/Home";
import Courses from "./Pages/Courses";
import CourseDetails from "./Pages/CourseDetails";
import Consultation from "./Pages/Consultation";
import Contact from "./Pages/Contact";
import Fag from "./Pages/Faq";
import Footer from "./Pages/Footer";
import About from "./Pages/About";
import AdminDashboard from "./Pages/AdminDashboard";
import ScrollToTop from "./components/ScrollToTop";
import WhatsappButton from "./components/WhatsappButton";

function App() {
  return (
    <>
      <div>
        <Navv />
        <ScrollToTop /> {/* ✅ هنا مكانه الصح */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqData" element={<Fag />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<AdminDashboard />} />
        </Routes>
<WhatsappButton/>
        <Footer />
      </div>
    </>
  );
}

export default App;
