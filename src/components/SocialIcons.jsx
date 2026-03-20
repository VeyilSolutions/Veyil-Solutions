import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { useState } from "react";

function SocialIcons() {
  const [instaHover, setInstaHover] = useState(false);

  return (
    <div className="flex items-center gap-6 text-2xl">

      <svg width="0" height="0">
        <linearGradient id="instagramGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#feda75" />
          <stop offset="50%" stopColor="#d62976" />
          <stop offset="100%" stopColor="#4f5bd5" />
        </linearGradient>
      </svg>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/veyil_solutions"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="transform transition duration-300 hover:scale-110"
        onMouseEnter={() => setInstaHover(true)}
        onMouseLeave={() => setInstaHover(false)}
      >
        <svg
          viewBox="0 0 24 24"
          fill={instaHover ? "url(#instagramGradient)" : "currentColor"}
          className="w-6 h-6 text-slate-400 transition-all duration-300"
        >
          <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zM12 7.3A4.7 4.7 0 1112 16.7 4.7 4.7 0 0112 7.3zm5.2-.9a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0zM12 9a3 3 0 100 6 3 3 0 000-6z" />
        </svg>
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/profile.php?id=61581734370254"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="text-slate-400 hover:text-blue-600 transform transition duration-300 hover:scale-110"
      >
        <FaFacebookF />
      </a>

      {/* LinkedIn */}
      <a
        href="www.linkedin.com/in/veyil-solutions-75868a3a5"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="text-slate-400 hover:text-blue-700 transform transition duration-300 hover:scale-110"
      >
        <FaLinkedinIn />
      </a>

    </div>
  );
}

export default SocialIcons;