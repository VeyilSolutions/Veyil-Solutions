import { Link } from "react-router-dom";
import {
  Mail,
  MapPin,
  Home,
  Layers,
  Info,
  HelpCircle,
  ShoppingBag,
  Globe,
  Palette
} from "lucide-react";
import SocialIcons from "@/components/SocialIcons";

const WhatsAppIcon = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white pt-20 pb-5 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 border-b border-white/10 pb-16 mb-8">

        {/* ================= BRAND ================= */}
        <div>
          <Link to="/" className="flex items-center gap-2 mb-6">
            <div className="h-8 flex items-center">
               <img
                  src="/faviconbg.png"
                  alt="Veyil Solutions Logo"
                  className="h-full w-auto"
                />
            </div>
            <span className="font-bold tracking-tight uppercase">
              Veyil Solutions
            </span>
          </Link>

          <p className="text-slate-400 text-sm italic mb-8">
            We build structured, conversion-focused online stores for growing product businesses across Tamil Nadu.
          </p>

          <SocialIcons />
        </div>

        {/* ================= QUICK LINKS ================= */}
        <div>
          <h4 className="font-bold mb-8 text-sm uppercase tracking-widest text-teal">
            Quick Links
          </h4>
          <ul className="space-y-4 text-sm">
            <li>
              <Link to="/" className="flex items-center gap-3 text-slate-400 hover:text-white transition group">
                <Home className="w-4 h-4 text-teal group-hover:text-white" />
                Home
              </Link>
            </li>
            <li>
              <a href="#services" className="flex items-center gap-3 text-slate-400 hover:text-white transition group">
                <Layers className="w-4 h-4 text-teal group-hover:text-white" />
                Services
              </a>
            </li>
            <li>
              <a href="#about" className="flex items-center gap-3 text-slate-400 hover:text-white transition group">
                <Info className="w-4 h-4 text-teal group-hover:text-white" />
                About Us
              </a>
            </li>
            <li>
              <Link to="/contact" className="flex items-center gap-3 text-slate-400 hover:text-white transition group">
                <Mail className="w-4 h-4 text-teal group-hover:text-white" />
                Contact
              </Link>
            </li>
            <li>
              <Link to="/faq" className="flex items-center gap-3 text-slate-400 hover:text-white transition group">
                <HelpCircle className="w-4 h-4 text-teal group-hover:text-white" />
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* ================= SERVICES ================= */}
        <div>
          <h4 className="font-bold mb-8 text-sm uppercase tracking-widest text-teal">
            Services
          </h4>
          <ul className="space-y-4 text-sm">
            <li>
              <Link to="/services/e-commerce-development" className="flex items-center gap-3 text-slate-400 hover:text-white transition group">
                <ShoppingBag className="w-4 h-4 text-teal group-hover:text-white" />
                E-commerce Development
              </Link>
            </li>
            <li>
              <Link to="/services/business-website-development" className="flex items-center gap-3 text-slate-400 hover:text-white transition group">
                <Globe className="w-4 h-4 text-teal group-hover:text-white" />
                Business Website Development
              </Link>
            </li>
            <li>
              <Link to="/services/design-services" className="flex items-center gap-3 text-slate-400 hover:text-white transition group">
                <Palette className="w-4 h-4 text-teal group-hover:text-white" />
                Design Services
              </Link>
            </li>
          </ul>
        </div>

        {/* ================= CONTACT ================= */}
        <div>
          <h4 className="font-bold mb-8 text-sm uppercase tracking-widest text-teal">
            Contact
          </h4>
          <ul className="space-y-5 text-sm">
            <li>
              <a
                href="https://wa.me/918489559160"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-white transition group"
              >
                <WhatsAppIcon className="w-4 h-4 text-teal group-hover:text-white" />
                +91 84895 59160
              </a>
            </li>
            <li>
              <a
                href="mailto:veyilsolutions@gmail.com"
                className="flex items-center gap-3 text-slate-400 hover:text-white transition group"
              >
                <Mail className="w-4 h-4 text-teal group-hover:text-white" />
                <span className="break-all">Veyilsolutions@gmail.com</span>
              </a>
            </li>

            <li>
              <a
                href="https://maps.google.com/?q=Veyil+Solutions+Omalur+Salem"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-slate-400 hover:text-white transition group"
              >
                <MapPin className="w-4 h-4 text-teal mt-1 flex-shrink-0 group-hover:text-white" />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-slate-300">
                    Veyil Solutions
                  </p>
                  <p>Omalur, Salem – 636011</p>
                  <p>Tamil Nadu, India</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* ================= BOTTOM ================= */}
      <div className="max-w-7xl mx-auto px-3 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-[11px] text-slate-400 uppercase tracking-widest font-semibold text-center md:text-left">
        <p>© {currentYear} Veyil Solutions. All rights reserved.</p>
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
          <Link to="/work-process" className="hover:text-white transition whitespace-nowrap">
            Our Work Process
          </Link>
          <Link to="/privacy-policy" className="hover:text-white transition whitespace-nowrap">
            Privacy Policy
          </Link>
          <Link to="/terms-and-conditions" className="hover:text-white transition whitespace-nowrap">
            Terms & Conditions
          </Link>
          <Link to="/cookie-policy" className="hover:text-white transition whitespace-nowrap">
            Cookie Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;