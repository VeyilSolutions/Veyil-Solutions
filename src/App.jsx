import { useEffect, useRef, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import NotFoundPage from "./components/NotFoundPage";
import VeyilChatbot from "./components/VeyilChatbot";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/policies/PrivacyPolicy";
import TermsConditions from "./pages/policies/TermsConditions";
import WorkProcess from "./pages/policies/WorkProcess";
import CookiePolicy from "./pages/policies/CookiePolicy";
import Faq from "./pages/faq";
import Price from "./pages/price";

import WebDevelopment from "./pages/services/WebDevelopment";
import MobileAppDevelopment from "./pages/services/MobileAppDevelopment";
import WebDesign from "./pages/services/WebDesign";

/* Scroll To Top */
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() => {
        const el = document.querySelector(hash);
        el?.scrollIntoView({ behavior: "smooth" });
      });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  const location = useLocation();
  const aosInitialized = useRef(false);
  const isFirstLoad = useRef(true);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const htmlLoader = document.getElementById("initial-loader");
    if (htmlLoader) {
      htmlLoader.style.opacity = "0";
      htmlLoader.style.transition = "opacity 0.4s ease";
      setTimeout(() => htmlLoader.remove(), 400);
    }
  }, []);


  useEffect(() => {
    if (!aosInitialized.current) {
      AOS.init({
        duration: 1000,
        once: true,
        easing: "ease-out-cubic",
      });
      aosInitialized.current = true;
    } else {
      AOS.refresh();
    }
  }, [location.pathname]);


  useEffect(() => {

    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }

    setLoading(true);
    if (location.pathname === "/") {
      requestAnimationFrame(() => {
        setLoading(false);
      });
      return;
    }
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);

  }, [location.pathname]);
  if (loading) {
    return <Loader visible={true} />;
  }

  return (
    <div className="bg-white text-slate-800 font-baloo min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />

      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsConditions />} />
          <Route path="/work-process" element={<WorkProcess />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />

          <Route path="/services/e-commercedevelopment" element={<WebDevelopment />} />
          <Route path="/services/businesswebsitedevelopment" element={<MobileAppDevelopment />} />
          <Route path="/services/designservices" element={<WebDesign />} />

          <Route path="/faq" element={<Faq />} />
          <Route path="/price" element={<Price />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>

      <Footer />
      <VeyilChatbot />
    </div>
  );
}

export default App;