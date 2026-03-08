import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MoveLeft, Home } from "lucide-react";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <section className="relative bg-white min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-white to-blue-50 opacity-80" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20rem] sm:w-[40rem] h-[20rem] sm:h-[40rem] bg-yellow-200/20 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-3xl w-full text-center">
        <div className="flex justify-center items-center gap-4 sm:gap-10 mb-8 
                        text-[6rem] md:text-[11rem] 
                        font-black text-slate-900 leading-none select-none">
          <span className="flex items-center">4</span>
          <div className="relative flex items-center justify-center w-[0.7em] h-[0.7em]">
        
            <div className="absolute inset-0 animate-[spin_20s_linear_infinite] opacity-40">
              {[...Array(8)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute top-1/2 left-1/2 w-[110%] h-[2px] bg-gradient-to-r from-transparent via-orange-400 to-transparent"
                  style={{ transform: `translate(-50%, -50%) rotate(${i * 45}deg)` }}
                />
              ))}
            </div>
            <div 
              className="relative w-full h-full rounded-full 
                         bg-gradient-to-br from-yellow-400 to-orange-500
                         shadow-[0_0_60px_rgba(255,165,0,0.4)]
                         flex items-center justify-center overflow-hidden">
                <div className="absolute top-[10%] left-[10%] w-1/3 h-1/3 bg-white/30 rounded-full blur-md" />
            </div>
          </div>

          <span className="flex items-center">4</span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          This page has drifted beyond the horizon.
        </h2>

        <p className="text-slate-500 mt-6 mb-12 max-w-lg mx-auto text-base sm:text-lg leading-relaxed">
          The page you're looking for may have been moved, removed,
          or never existed. Let’s guide you back to building something impactful.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="group flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-orange-500 transition-all duration-300 shadow-xl shadow-slate-900/10 hover:shadow-orange-500/30 w-full sm:w-auto justify-center"
          >
            <Home size={20} className="group-hover:scale-110 transition-transform" />
            Back to Home
          </Link>

          <button
            onClick={handleGoBack}
            className="group flex items-center gap-2 text-slate-500 hover:text-slate-900 font-semibold px-6 py-4 transition-colors w-full sm:w-auto justify-center"
          >
            <MoveLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Go Back
          </button>
        </div>

        {/* Brand Footer */}
        <div className="mt-20 opacity-60">
          <div className="flex items-center justify-center gap-4">
            <div className="w-8 h-[1px] bg-slate-300"></div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-slate-500 font-bold">
              VEYIL SOLUTIONS
            </span>
            <div className="w-8 h-[1px] bg-slate-300"></div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}} />
    </section>
  );
};

export default NotFoundPage;