import React, { useState, useRef, useEffect, useCallback } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import ReactMarkdown from "react-markdown";
import "@/styles/chatbot.css";
import { makeSystemPrompt } from "@/data/chatbot/systemPrompt";
import { LOCAL, matchLocal, WA, CO } from "@/data/chatbot/localResponses";
import { QUICK } from "@/data/chatbot/quickActions";
import { WELCOME } from "@/data/chatbot/welcome";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export default function VeyilChatbot() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("en");
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasNew, setHasNew] = useState(true);
  const [messages, setMessages] = useState([{ role: "bot", text: WELCOME.en }]);

  const scrollRef = useRef();
  const inputRef = useRef();
  const rootRef = useRef();

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (open) { setHasNew(false); setTimeout(() => inputRef.current?.focus(), 200); }
  }, [open]);

  useEffect(() => {
    const h = (e) => { if (open && rootRef.current && !rootRef.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, [open]);

  const switchLang = useCallback((l) => {
    setLang(l);
    setMessages([{ role: "bot", text: WELCOME[l] }]);
    setInput("");
  }, []);

  const sendMessage = useCallback(async (text) => {
    const msg = (text || input).trim();
    if (!msg || loading) return;
    setInput("");
    setMessages((p) => [...p, { role: "user", text: msg }]);
    setLoading(true);

    const local = matchLocal(msg, lang);
    if (local) {
      await new Promise((r) => setTimeout(r, 150));
      setMessages((p) => [...p, { role: "bot", text: local }]);
      setLoading(false);
      return;
    }

    try {
      const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash",
        systemInstruction: makeSystemPrompt(lang),
        generationConfig: { maxOutputTokens: 350, temperature: 0.25 },
      });
      const result = await model.generateContent(msg);
      setMessages((p) => [...p, { role: "bot", text: result.response.text() }]);
    } catch {
      setMessages((p) => [
        ...p,
        { role: "bot", text: lang === "en" ? "⚠️ Connection error. Please try again." : "⚠️ இணைப்பு பிழை. மீண்டும் முயற்சிக்கவும்." },
      ]);
    }
    setLoading(false);
  }, [input, lang, loading]);

  return (
    <>
      <div className="veyil-ai" ref={rootRef}>
        {open && (
          <div className="veyil-ai-win" role="dialog" aria-label="Veyil AI Chat">

            {/* Header */}
            <div className="veyil-ai-hdr">
              <div className="veyil-ai-av">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  <circle cx="12" cy="16" r="1.2" fill="currentColor" stroke="none"/>
                </svg>
              </div>

              <div className="veyil-ai-hi">
                <div className="veyil-ai-hn">Veyil AI</div>
                <div className="veyil-ai-hs">
                  <span className="veyil-ai-dot"/>
                  <span className="veyil-ai-htxt">Online · Veyil Solutions</span>
                </div>
              </div>

              {/* Language Toggle */}
              <div className="veyil-ai-lang" role="group" aria-label="Language selector">
                <button className={`veyil-ai-lb ${lang === "en" ? "on" : ""}`} onClick={() => switchLang("en")}>EN</button>
                <button className={`veyil-ai-lb ${lang === "ta" ? "on" : ""}`} onClick={() => switchLang("ta")}>தமிழ்</button>
              </div>

              <button className="veyil-ai-x" onClick={() => setOpen(false)} aria-label="Close chat">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="veyil-ai-body" ref={scrollRef}>
              {messages.map((m, i) => (
                <div key={i} className={`veyil-ai-r ${m.role}`}>
                  {m.role === "bot" && (
                    <div className="veyil-ai-ico">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="11" width="18" height="11" rx="2"/>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                      </svg>
                    </div>
                  )}
                  <div className={`veyil-ai-b ${m.role}`}>
                    <ReactMarkdown>{m.text}</ReactMarkdown>
                  </div>
                </div>
              ))}
              {loading && (
                <div className="veyil-ai-typ">
                  <div className="veyil-ai-ico">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="11" width="18" height="11" rx="2"/>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                  </div>
                  <div className="veyil-ai-ds"><span/><span/><span/></div>
                </div>
              )}
            </div>

            {/* Quick Actions */}
            <div className="veyil-ai-q">
              {QUICK[lang].map((q) => (
                <button key={q.label} className="veyil-ai-qb" onClick={() => sendMessage(q.msg)}>{q.label}</button>
              ))}
              <button className="veyil-ai-wa" onClick={() => window.open(WA)}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </button>
             <button className="veyil-ai-co" onClick={() => window.open(CO)}>
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                 <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                 <line x1="12" y1="7" x2="12" y2="13"></line>
                 <line x1="9" y1="10" x2="15" y2="10"></line>
               </svg>
               Contact
             </button>
            </div>

            {/* Input */}
            <div className="veyil-ai-ir">
              <input
                ref={inputRef}
                className="veyil-ai-inp"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && sendMessage()}
                placeholder={lang === "en" ? "Ask anything about our services..." : "கேள்வி கேளுங்கள்..."}
                disabled={loading}
                autoComplete="off"
              />
              <button
                className="veyil-ai-snd"
                onClick={() => sendMessage()}
                disabled={loading || !input.trim()}
                aria-label="Send message"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 2L11 13"/><path d="M22 2L15 22 11 13 2 9l20-7z"/>
                </svg>
              </button>
            </div>

          </div>
        )}

        {/* FAB */}
        <button
          className={`veyil-ai-fab ${open ? "open" : ""}`}
          onClick={() => setOpen((o) => !o)}
          aria-label="Open Veyil AI chat"
        >
          {hasNew && !open && <span className="veyil-ai-badge"/>}
          {open ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          ) : (
            <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className="w-8 h-8 sm:w-9 sm:h-9 text-blue-400 group-hover:text-white transition-all duration-300"
  >
    {/* Left Data Bracket */}
    <path 
      d="M7 8L3 12L7 16" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
    
    {/* Right Data Bracket */}
    <path 
      d="M17 8L21 12L17 16" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
    
    {/* The Central Neural Core (Diamond Eye) */}
    <rect 
      x="12" y="7" width="7" height="7" 
      rx="1" 
      transform="rotate(45 12 7)" 
      fill="currentColor" 
      className="animate-pulse" 
    />
    
    {/* Top Connectivity Signal */}
    <path d="M12 3V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
    
    {/* Bottom Stability Base */}
    <path d="M9 21H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
  </svg>
          )}
        </button>
      </div>
    </>
  );
}