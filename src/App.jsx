import { useEffect, useRef, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import NotFoundPage from "@/components/NotFoundPage";
import VeyilChatbot from "@/components/VeyilChatbot";

import Home from "@/pages/Home";
import Contact from "@/pages/Contact";
import PrivacyPolicy from "@/pages/policies/PrivacyPolicy";
import TermsConditions from "@/pages/policies/TermsConditions";
import WorkProcess from "@/pages/policies/WorkProcess";
import CookiePolicy from "@/pages/policies/CookiePolicy";
import Faq from "@/pages/faq";
import Price from "@/pages/price";

import WebDevelopment from "@/pages/services/WebDevelopment";
import MobileAppDevelopment from "@/pages/services/MobileAppDevelopment";
import WebDesign from "@/pages/services/WebDesign";

/* BLOG PAGES */
import Blogs from "@/pages/Blogs/Blogs";
import BlogDetails from "@/pages/Blogs/BlogDetails";

function App() {
  const location = useLocation();
  const aosInitialized = useRef(false);
  const isFirstLoad = useRef(true);
  const [loading, setLoading] = useState(false);

  // 1. Initial HTML Loader removal (on site entry)
  useEffect(() => {
    const htmlLoader = document.getElementById("initial-loader");
    if (htmlLoader) {
      htmlLoader.style.opacity = "0";
      htmlLoader.style.transition = "opacity 0.4s ease";
      setTimeout(() => htmlLoader.remove(), 400);
    }
  }, []);

  // 2. AOS Initialization & Refresh
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

  // 3. Combined Page Transition, Loader, and Scroll Logic
  useEffect(() => {
    // Skip the transition loader for the very first visit to the Home page
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      if (location.pathname === "/") return;
    }

    setLoading(true);

    // Determine timing
    const delay = location.pathname === "/" ? 100 : 1800;

    const timer = setTimeout(() => {
      setLoading(false);

      // CRITICAL: Scroll only after loading is false and DOM height is restored
      // Using a small timeout to ensure the "h-0" class is removed first
      setTimeout(() => {
        if (location.hash) {
          const el = document.querySelector(location.hash);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        } else {
          // Reset to top instantly so the page is ready when the loader disappears
          window.scrollTo({ top: 0, behavior: "instant" });
        }
      }, 10);

    }, delay);

    return () => clearTimeout(timer);
  }, [location.pathname, location.hash]);

  return (
    <div className="bg-white text-slate-800 font-baloo min-h-screen flex flex-col">
      
      {/* LOADER OVERLAY */}
      {loading && <Loader visible={true} />}

      {/* Main Content Wrapper: 
          We use 'invisible' and 'h-0' to keep the component mounted 
          but prevent the user from seeing the page jump while it's loading.
      */}
      <div 
        className={`flex flex-col flex-grow transition-opacity duration-300 ${
          loading ? "invisible h-0 overflow-hidden opacity-0" : "visible opacity-100"
        }`}
      >
        <Navbar />

        <div className="flex-grow">
          <Routes>
            {/* MAIN */}
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />

            {/* BLOG */}
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog/:slug" element={<BlogDetails />} />

            {/* POLICIES */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsConditions />} />
            <Route path="/work-process" element={<WorkProcess />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />

            {/* SERVICES */}
            <Route path="/services/e-commercedevelopment" element={<WebDevelopment />} />
            <Route path="/services/businesswebsitedevelopment" element={<MobileAppDevelopment />} />
            <Route path="/services/designservices" element={<WebDesign />} />

            {/* OTHER */}
            <Route path="/faq" element={<Faq />} />
            <Route path="/price" element={<Price />} />

            {/* 404 */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>

        <Footer />
        <VeyilChatbot />
      </div>
    </div>
  );
}

export default App;