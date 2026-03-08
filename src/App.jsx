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

  // Initial HTML Loader removal
  useEffect(() => {
    const htmlLoader = document.getElementById("initial-loader");
    if (htmlLoader) {
      htmlLoader.style.opacity = "0";
      htmlLoader.style.transition = "opacity 0.4s ease";
      setTimeout(() => htmlLoader.remove(), 400);
    }
  }, []);

  // AOS Initialization
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

  // Page Transition Loader Logic
  useEffect(() => {
    // 1. Handle first site visit
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      // If landing on home, don't show the 1.8s delay
      if (location.pathname === "/") return;
    }

    // 2. Start Loading
    setLoading(true);

    // 3. Different timing for Home vs other pages
    let delay = 1800;
    if (location.pathname === "/") {
        delay = 100; // Fast clear for home
    }

    const timer = setTimeout(() => {
      setLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="bg-white text-slate-800 font-baloo min-h-screen flex flex-col">
      <ScrollToTop />

      {/* LOADER OVERLAY: Keep visible based on state */}
      {loading && <Loader visible={true} />}

      {/* Main Content: We use a wrapper to hide/show without unmounting the whole app */}
      <div className={`flex flex-col flex-grow ${loading ? "invisible h-0 overflow-hidden" : "visible"}`}>
        
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