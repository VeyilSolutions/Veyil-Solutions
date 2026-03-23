import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", to: "/#home", id: "home" },
  { name: "Services", to: "/#services", id: "services" },
  { name: "Price", to: "/price" },
  { name: "About", to: "/#about", id: "about" },
  { name: "FAQ", to: "/faq" },
];

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const ticking = useRef(false);

  // --- Helper: Smooth Scroll Logic ---
  const scrollToElement = (id) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("home");
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const offset = 100; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // --- Click Handler ---
  const handleLinkClick = (e, link) => {
    if (link.to.startsWith("/#")) {
      e.preventDefault();
      
      if (location.pathname === "/") {
        scrollToElement(link.id);
      } else {
        navigate("/");
        setTimeout(() => scrollToElement(link.id), 300);
      }
      setMobileMenuOpen(false);
    }
  };

  // --- Scroll Spy Logic ---
  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection("");
      return;
    }

    const sections = ["home", "services", "about"];

    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const scrollY = window.scrollY;

        if (scrollY < 100) {
          setActiveSection("home");
          ticking.current = false;
          return;
        }

        for (const id of sections) {
          const el = document.getElementById(id);
          if (!el) continue;

          const offsetTop = el.offsetTop - 160;
          const offsetBottom = offsetTop + el.offsetHeight;

          if (scrollY >= offsetTop && scrollY < offsetBottom) {
            setActiveSection(id);
            break;
          }
        }
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const isActive = (link) => {
    if (link.to === "/faq" || link.to === "/price") {
      return location.pathname === link.to;
    }
    if (location.pathname === "/" && link.id) {
      return activeSection === link.id;
    }
    return false;
  };

  return (
    <nav className="fixed w-full z-50 top-0 bg-slate-50/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
        <Link 
          to="/#home" 
          onClick={(e) => handleLinkClick(e, { to: "/#home", id: "home" })} 
          className="flex items-center gap-3 group"
        >
          <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <img 
              src="/img/Veyil_Solutions.png" 
              alt="Veyil Solutions Logo" 
              className="w-full h-full object-contain" 
            />
          </div>
          <span className="font-bold text-navy tracking-tight uppercase text-base md:text-lg">
            Veyil Solutions
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-8 text-sm font-bold">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              onClick={(e) => handleLinkClick(e, link)}
              className={`transition-all duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-teal after:transition-all ${
                isActive(link) 
                  ? "text-teal after:w-full" 
                  : "text-slate-500 hover:text-navy after:w-0 hover:after:w-full"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Link to="/contact" className="hidden lg:block">
          <button className="bg-navy hover:bg-teal text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 shadow-sm">
            Contact Us
          </button>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-navy"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-50 border-t border-slate-200 px-6 py-8 shadow-2xl">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                onClick={(e) => handleLinkClick(e, link)}
                className={`text-xl font-bold transition-colors ${
                  isActive(link) ? "text-teal" : "text-slate-600 hover:text-navy"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
              <button className="w-full bg-navy text-white px-6 py-4 rounded-xl font-bold">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;