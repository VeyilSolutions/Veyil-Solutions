import React, { useState, useRef, useEffect, useCallback } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import ReactMarkdown from "react-markdown";
import "@/styles/chatbot.css";

import { makeSystemPrompt } from "@/data/chatbot/systemPrompt";
import { matchLocal, WA, CO } from "@/data/chatbot/localResponses";
import { QUICK } from "@/data/chatbot/quickActions";
import { WELCOME } from "@/data/chatbot/welcome";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

/* SUN ICON */

const SunIcon = ({ size = 28 }) => (
  <svg
    className="veyil-sun-icon"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Sun Core */}
    <circle cx="12" cy="12" r="4.5" fill="white"/>

    {/* Rays */}
    <g stroke="white" strokeWidth="2" strokeLinecap="round">
      <line x1="12" y1="2" x2="12" y2="5"/>
      <line x1="12" y1="19" x2="12" y2="22"/>

      <line x1="2" y1="12" x2="5" y2="12"/>
      <line x1="19" y1="12" x2="22" y2="12"/>

      <line x1="4.5" y1="4.5" x2="6.7" y2="6.7"/>
      <line x1="17.3" y1="17.3" x2="19.5" y2="19.5"/>

      <line x1="17.3" y1="6.7" x2="19.5" y2="4.5"/>
      <line x1="4.5" y1="19.5" x2="6.7" y2="17.3"/>
    </g>
  </svg>
);

export default function VeyilChatbot() {

  const [open,setOpen] = useState(false);
  const [lang,setLang] = useState("en");
  const [input,setInput] = useState("");
  const [loading,setLoading] = useState(false);
  const [hasNew,setHasNew] = useState(true);
  const [messages,setMessages] = useState([{role:"bot",text:WELCOME.en}]);

  const scrollRef = useRef();
  const inputRef = useRef();
  const rootRef = useRef();

  /* AUTO SCROLL */

  useEffect(()=>{
    scrollRef.current?.scrollTo({
      top:scrollRef.current.scrollHeight,
      behavior:"smooth"
    });
  },[messages,loading]);

  /* INPUT FOCUS */

  useEffect(()=>{
    if(open){
      setHasNew(false);
      setTimeout(()=>inputRef.current?.focus(),200);
    }
  },[open]);

  /* CLICK OUTSIDE CLOSE */

  useEffect(()=>{
    const h=(e)=>{
      if(open && rootRef.current && !rootRef.current.contains(e.target)){
        setOpen(false);
      }
    };
    document.addEventListener("mousedown",h);
    return ()=>document.removeEventListener("mousedown",h);
  },[open]);

  /* LANGUAGE SWITCH */

  const switchLang = useCallback((l)=>{
    setLang(l);
    setMessages([{role:"bot",text:WELCOME[l]}]);
    setInput("");
  },[]);

  /* SEND MESSAGE */

  const sendMessage = useCallback(async(text)=>{

    const msg=(text || input).trim();
    if(!msg || loading) return;

    setInput("");
    setMessages(p=>[...p,{role:"user",text:msg}]);
    setLoading(true);

    const local = matchLocal(msg,lang);

    if(local){
      await new Promise(r=>setTimeout(r,120));
      setMessages(p=>[...p,{role:"bot",text:local}]);
      setLoading(false);
      return;
    }

    try{

      const model = genAI.getGenerativeModel({
        model:"gemini-2.5-flash",
        systemInstruction:makeSystemPrompt(lang),
        generationConfig:{
          maxOutputTokens:350,
          temperature:0.25
        }
      });

      const result = await model.generateContent(msg);

      const aiText =
        result?.response?.text?.() ||
        "⚠️ I couldn't generate a response.";

      setMessages(p=>[...p,{role:"bot",text:aiText}]);

    }catch(err){

      setMessages(p=>[
        ...p,
        {role:"bot",text:"⚠️ Connection error. Please try again."}
      ]);

    }

    setLoading(false);

  },[input,lang,loading]);

  return(
  <>
  <div className="veyil-ai" ref={rootRef}>

  {open && (

  <div className="veyil-ai-win">

  {/* HEADER */}

  <div className="veyil-ai-hdr">

  <div className="veyil-ai-av">
  <SunIcon size={24}/>
  </div>

  <div className="veyil-ai-hi">
  <div className="veyil-ai-hn">Veyil AI</div>

  <div className="veyil-ai-hs">
  <span className="veyil-ai-dot"/>
  <span className="veyil-ai-htxt">Online · Veyil Solutions</span>
  </div>
  </div>

  {/* LANGUAGE */}

  <div className="veyil-ai-lang">

  <button
  className={`veyil-ai-lb ${lang==="en"?"on":""}`}
  onClick={()=>switchLang("en")}
  >
  EN
  </button>

  <button
  className={`veyil-ai-lb ${lang==="ta"?"on":""}`}
  onClick={()=>switchLang("ta")}
  >
  தமிழ்
  </button>

  </div>

  {/* CLOSE BUTTON */}

  <button
  className="veyil-ai-x"
  onClick={()=>setOpen(false)}
  >

  <svg width="18" height="18" viewBox="0 0 24 24">

  <path
  d="M6 6L18 18M18 6L6 18"
  stroke="#0F172A"
  strokeWidth="2.5"
  strokeLinecap="round"
  />

  </svg>

  </button>

  </div>

  {/* BODY */}

  <div className="veyil-ai-body" ref={scrollRef}>

  {messages.map((m,i)=>(
  <div key={i} className={`veyil-ai-r ${m.role}`}>

  {m.role==="bot" && (
  <div className="veyil-ai-ico">
  <SunIcon size={18}/>
  </div>
  )}

  <div className={`veyil-ai-b ${m.role}`}>
  <ReactMarkdown>{m.text}</ReactMarkdown>
  </div>

  </div>
  ))}

  {loading && (

  <div className="veyil-ai-typ">
  <div className="veyil-ai-ds">
  <span/>
  <span/>
  <span/>
  </div>
  </div>

  )}

  </div>

  {/* QUICK BUTTONS */}

  <div className="veyil-ai-q">

  {QUICK[lang].map((q)=>(
  <button
  key={q.label}
  className="veyil-ai-qb"
  onClick={()=>sendMessage(q.msg)}
  >
  {q.label}
  </button>
  ))}

  <button
  className="veyil-ai-wa"
  onClick={()=>window.open(WA)}
  >
  WhatsApp
  </button>

  <button
  className="veyil-ai-co"
  onClick={()=>window.open(CO)}
  >
  Contact
  </button>

  </div>

  {/* INPUT */}

  <div className="veyil-ai-ir">

  <input
  ref={inputRef}
  className="veyil-ai-inp"
  value={input}
  onChange={(e)=>setInput(e.target.value)}
  onKeyDown={(e)=>e.key==="Enter" && sendMessage()}
  placeholder={lang==="en" ? "Ask anything..." : "கேள்வி கேளுங்கள்..."}
  />

  <button
  className="veyil-ai-snd"
  onClick={()=>sendMessage()}
  disabled={!input.trim() || loading}
  >
  ➤
  </button>

  </div>

  </div>
  )}

  {/* FAB */}

  <button
  className={`veyil-ai-fab ${open ? "open" : ""}`}
  onClick={()=>setOpen(o=>!o)}
  >

  {hasNew && !open && <span className="veyil-ai-badge"/>}

  {open ? (

  <svg width="20" height="20" viewBox="0 0 24 24">

  <path
  d="M6 6L18 18M18 6L6 18"
  stroke="white"
  strokeWidth="2.5"
  strokeLinecap="round"
  />

  </svg>

  ) : (

  <SunIcon size={34}/>

  )}

  </button>

  </div>
  </>
  );
}