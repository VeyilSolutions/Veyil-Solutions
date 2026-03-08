import React, { useState, useRef, useEffect, useCallback } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import ReactMarkdown from "react-markdown";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

/* ─────────────────────────────────────────────
   SYSTEM PROMPTS
───────────────────────────────────────────── */
const makeSystemPrompt = (lang) =>
  lang === "en"
    ? `
You are Veyil AI, the sales assistant for Veyil Solutions based in Tamil Nadu, India.
YOUR GOAL: Convert website visitors into paying clients.

WHAT WE DO:
Veyil Solutions builds professional Shopify ecommerce websites for product businesses currently selling on Instagram and WhatsApp.

EXACT PRICING — never deviate from this:
1. Free Sample — ₹0
   • Homepage preview concept
   • Design direction clarity
   • No payment required

2. Launch Store — ₹8,000
   • Shopify store setup
   • Up to 7 pages
   • Mobile optimized design
   • Payment gateway integration
   • Basic SEO setup
   • 30 days free support
   • Delivery: 5–7 days

3. Growth Store — ₹15,000
   • Up to 20 products setup
   • Custom homepage layout
   • Structured navigation
   • Conversion focused design
   • Advanced mobile optimization
   • Basic on-page SEO
   • 30 days free support
   • Delivery: 7–10 days

4. Monthly Support — ₹3,000/month
   • Product uploads
   • Banner updates
   • Social media creatives
   • Minor website edits
   • Priority support

ADDITIONAL COSTS (client pays separately — NOT included in our prices):
• Shopify subscription (~₹1,999/month) paid directly to Shopify
• Domain name
• Third-party apps (if needed)
• Payment gateway transaction fees

RULES:
- Reply ONLY in English
- Keep answers SHORT (3–5 lines) unless detail is asked
- Always end with a soft CTA: suggest free sample or WhatsApp
- NEVER invent features or prices
- Encourage free sample as the first step
`
    : `
நீங்கள் Veyil AI — Veyil Solutions-இன் sales assistant.
குறிக்கோள்: வருகையாளர்களை வாடிக்கையாளர்களாக மாற்றுவது.

நாங்கள் என்ன செய்கிறோம்:
Instagram மற்றும் WhatsApp-ல் விற்கும் வணிகங்களுக்கு Shopify ecommerce இணையதளங்கள் உருவாக்குகிறோம்.

சரியான விலை (மாற்றாதீர்கள்):
1. இலவச மாதிரி — ₹0
   • Homepage preview concept • Design direction தெளிவு • கட்டணம் இல்லை

2. Launch Store — ₹8,000
   • Shopify store setup • 7 பக்கங்கள் வரை • Mobile optimized design
   • Payment gateway integration • Basic SEO • 30 நாள் support
   • Delivery: 5–7 நாட்கள்

3. Growth Store — ₹15,000
   • 20 products வரை • Custom homepage • Structured navigation
   • Conversion design • Advanced mobile SEO • 30 நாள் support
   • Delivery: 7–10 நாட்கள்

4. Monthly Support — ₹3,000/மாதம்
   • Product uploads • Banner updates • Social creatives • Minor edits • Priority support

கூடுதல் செலவுகள் (தனியாக):
• Shopify (~₹1,999/மாதம்) • Domain • Third-party apps • Gateway fees

விதிகள்:
- தமிழிலேயே பதில் தரவும்
- சுருக்கமாக (3–5 வரிகள்)
- இலவச மாதிரி அல்லது WhatsApp CTA சேர்க்கவும்
- விலை அல்லது features மாற்றாதீர்கள்
`;

/* ─────────────────────────────────────────────
   INSTANT LOCAL RESPONSES  (sub-200ms)
───────────────────────────────────────────── */
const WA = "https://wa.me/918489559160?text=Hi%20Veyil%20Solutions%2C%20I%20want%20a%20website%20for%20my%20business";
const CO = "https://veyil-solutions.vercel.app/contact";

const LOCAL = {
  en: {
    hello: `Hi there! 👋 Welcome to **Veyil Solutions**.\n\nWe build Shopify ecommerce websites for businesses selling on Instagram & WhatsApp.\n\nHow can I help? Ask about **pricing**, **packages**, or grab a **free homepage sample** — no payment needed!`,
    pricing: `Our pricing at Veyil Solutions:\n\n🆓 **Free Sample** — ₹0\n🚀 **Launch Store** — ₹8,000 *(5–7 day delivery)*\n📈 **Growth Store** — ₹15,000 *(7–10 day delivery)*\n🛠️ **Monthly Support** — ₹3,000/month\n\n> Shopify platform (~₹1,999/mo) + domain are **paid separately** to Shopify.\n\nWant a **free homepage sample** for your brand? 👇`,
    free: `Great! 🎉 Our **Free Sample** is 100% free — zero payment.\n\nYou'll get:\n- A homepage preview concept for your brand\n- Clear design direction before you commit\n\nJust tell me — **what products do you sell?** Or [chat on WhatsApp](${WA}) to get it set up right away!`,
    launch: `**Launch Store — ₹8,000**\n\n✅ Shopify store setup\n✅ Up to 7 pages\n✅ Mobile optimized design\n✅ Payment gateway integration\n✅ Basic SEO setup\n✅ 30 days free support\n🗓 Delivery: **5–7 days**\n\n> Shopify (~₹1,999/mo) + domain paid separately.\n\n[Chat on WhatsApp](${WA}) or request a **free sample** first!`,
    growth: `**Growth Store — ₹15,000**\n\n✅ Up to 20 products setup\n✅ Custom homepage layout\n✅ Structured navigation\n✅ Conversion focused design\n✅ Advanced mobile optimization\n✅ Basic on-page SEO\n✅ 30 days free support\n🗓 Delivery: **7–10 days**\n\n> Shopify (~₹1,999/mo) + domain paid separately.\n\nReady to scale? [Chat on WhatsApp](${WA})!`,
    support: `**Monthly Support — ₹3,000/month**\n\nIncludes:\n- Product uploads\n- Banner updates\n- Social media creatives\n- Minor website edits\n- Priority support\n\nPerfect for keeping your store fresh. [Message us on WhatsApp](${WA})!`,
    delivery: `**Delivery timelines:**\n\n🚀 Launch Store — **5–7 business days**\n📈 Growth Store — **7–10 business days**\n\nWe'll update you at every step. Want to start with a **free homepage sample**?`,
    shopify: `Shopify is the platform your store runs on. It costs **~₹1,999/month**, paid directly to Shopify — separate from our design fees.\n\nYou'll also need a **domain name** (~₹800–₹1,500/year). We'll guide you through the whole setup!\n\nAny other questions?`,
    additional: `**Additional costs (paid separately by you):**\n\n- Shopify subscription: ~₹1,999/month (to Shopify directly)\n- Domain name\n- Third-party apps (if required)\n- Payment gateway transaction fees\n\nOur design fees (₹8,000 / ₹15,000) don't include these. Happy to explain more!`,
    contact: `You can reach us directly on WhatsApp:\n\n📱 [+91 84895 59160](${WA})\n\nOr click the **WhatsApp** button below. We typically reply within minutes!`,
  },
  ta: {
    hello: `வணக்கம்! 👋 **Veyil Solutions**-க்கு வருக.\n\nInstagram & WhatsApp-ல் விற்கும் வணிகங்களுக்கு Shopify ecommerce இணையதளங்கள் உருவாக்குகிறோம்.\n\n**விலை**, **packages**, அல்லது **இலவச மாதிரி** பற்றி கேளுங்கள்!`,
    pricing: `Veyil Solutions விலை விவரம்:\n\n🆓 **இலவச மாதிரி** — ₹0\n🚀 **Launch Store** — ₹8,000 *(5–7 நாட்கள்)*\n📈 **Growth Store** — ₹15,000 *(7–10 நாட்கள்)*\n🛠️ **Monthly Support** — ₹3,000/மாதம்\n\n> Shopify (~₹1,999/மாதம்) + domain **தனியாக** செலுத்த வேண்டும்.\n\nஉங்கள் brand-க்கு **இலவச homepage மாதிரி** வேண்டுமா? 👇`,
    free: `சிறந்த தேர்வு! 🎉 **இலவச மாதிரி** — கட்டணம் இல்லை.\n\nகிடைப்பவை:\n- உங்கள் brand-க்கான homepage preview\n- Design direction தெளிவு\n\n**நீங்கள் என்ன விற்கிறீர்கள்?** என்று சொல்லுங்கள், அல்லது [WhatsApp-ல் தொடர்பு கொள்ளுங்கள்](${WA})!`,
    launch: `**Launch Store — ₹8,000**\n\n✅ Shopify store setup\n✅ 7 பக்கங்கள் வரை\n✅ Mobile optimized design\n✅ Payment gateway integration\n✅ Basic SEO setup\n✅ 30 நாள் இலவச support\n🗓 Delivery: **5–7 நாட்கள்**\n\n> Shopify (~₹1,999/மாதம்) + domain தனியாக.\n\n[WhatsApp-ல் பேசுங்கள்](${WA}) அல்லது இலவச மாதிரி கேளுங்கள்!`,
    growth: `**Growth Store — ₹15,000**\n\n✅ 20 products வரை setup\n✅ Custom homepage layout\n✅ Structured navigation\n✅ Conversion focused design\n✅ Advanced mobile optimization\n✅ Basic on-page SEO\n✅ 30 நாள் இலவச support\n🗓 Delivery: **7–10 நாட்கள்**\n\n> Shopify (~₹1,999/மாதம்) + domain தனியாக.\n\n[WhatsApp-ல் தொடர்பு கொள்ளுங்கள்](${WA})!`,
    support: `**Monthly Support — ₹3,000/மாதம்**\n\n- Product uploads\n- Banner updates\n- Social media creatives\n- Minor website edits\n- Priority support\n\nஉங்கள் store-ஐ புதுப்பித்து வைக்க சிறந்த தேர்வு! [WhatsApp](${WA})-ல் தொடர்பு கொள்ளுங்கள்!`,
    delivery: `**Delivery நேரம்:**\n\n🚀 Launch Store — **5–7 நாட்கள்**\n📈 Growth Store — **7–10 நாட்கள்**\n\nஒவ்வொரு கட்டத்திலும் update தருவோம். **இலவச மாதிரி** தொடங்கலாமா?`,
    shopify: `Shopify என்பது நாங்கள் கட்டும் platform. இதற்கு **~₹1,999/மாதம்** நேரடியாக Shopify-க்கு செலுத்த வேண்டும் — இது எங்கள் design கட்டணத்தில் சேராது.\n\n**Domain name** (~₹800–₹1,500/வருடம்) தனியாக வேண்டும். நாங்கள் வழிகாட்டுவோம்!`,
    additional: `**கூடுதல் செலவுகள் (தனியாக):**\n\n- Shopify subscription: ~₹1,999/மாதம் (Shopify-க்கு நேரடியாக)\n- Domain name\n- Third-party apps (தேவைப்பட்டால்)\n- Payment gateway transaction fees\n\nஎங்கள் design கட்டணம் (₹8,000 / ₹15,000) இவற்றை உள்ளடக்காது.`,
    contact: `நேரடியாக WhatsApp-ல் தொடர்பு கொள்ளுங்கள்:\n\n📱 [+91 84895 59160](${WA})\n\nகீழே உள்ள **WhatsApp** button-ஐ அழுத்துங்கள். சில நிமிடங்களில் பதில் தருவோம்!`,
  },
};

function matchLocal(msg, lang) {
  const m = msg.toLowerCase();
  const r = LOCAL[lang];

  // 1. Check for Greeting
  if (/\b(hi|hello|hey|hai|helo|start|வணக்கம்|ஹலோ)\b/.test(m)) return r.hello;
  
  // 2. NEW: Check for Affirmative "Yes" to trigger Free Sample
  if (/\b(yes|ok|sure|yeah|yep|okay|ஆம்|சரி)\b/.test(m)) return r.free;

  // 3. Existing Keyword Checks
  if (/additional|extra cost|separate|தனி|கூடுதல்/.test(m)) return r.additional;
  if (/contact|reach|call|phone|number|தொடர்பு|எண்/.test(m)) return r.contact;
  if (/shopify|platform|subscription|1999/.test(m)) return r.shopify;
  if (/deliver|how long|days|time|நாட்கள்|எத்தனை/.test(m)) return r.delivery;
  if (/support|3000|monthly|மாதாந்திர/.test(m)) return r.support;
  if (/growth|15000|15,000/.test(m)) return r.growth;
  if (/launch|8000|8,000/.test(m)) return r.launch;
  if (/free|sample|இலவச|மாதிரி|preview/.test(m)) return r.free;
  if (/price|cost|pricing|rate|how much|கட்டணம்|விலை|எவ்வளவு/.test(m)) return r.pricing;

  return null;
}

/* ─────────────────────────────────────────────
   QUICK ACTIONS & WELCOME
───────────────────────────────────────────── */
const QUICK = {
  en: [
    { label: "💰 Pricing", msg: "What is the pricing?" },
    { label: "🆓 Free Sample", msg: "free sample" },
    { label: "🚀 Launch Store", msg: "launch store" },
    { label: "📈 Growth Store", msg: "growth store" },
  ],
  ta: [
    { label: "💰 விலை", msg: "விலை என்ன?" },
    { label: "🆓 இலவச மாதிரி", msg: "இலவச மாதிரி" },
    { label: "🚀 Launch Store", msg: "launch store" },
    { label: "📈 Growth Store", msg: "growth store" },
  ],
};

const WELCOME = {
  en: `Hi there! 👋 I'm **Veyil AI**.\n\nAsk me about pricing, packages, or get a **free homepage sample** for your brand — no payment needed!`,
  ta: `வணக்கம்! 👋 நான் **Veyil AI**.\n\nவிலை, packages, அல்லது **இலவச மாதிரி** பற்றி கேளுங்கள்!`,
};

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
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
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&family=Noto+Sans+Tamil:wght@400;500;600&display=swap');

        .veyil-ai*,.veyil-ai *,.veyil-ai *::before,.veyil-ai *::after{box-sizing:border-box;margin:0;padding:0}

        .veyil-ai{
          font-family:'DM Sans','Noto Sans Tamil',sans-serif;
          position:fixed;bottom:24px;right:24px;z-index:99999;
        }

        /* FAB */
        .veyil-ai-fab{
          width:50px;height:50px;border-radius:15px;
          background:linear-gradient(145deg,#0f172a 0%,#1d4ed8 100%);
          border:none;cursor:pointer;
          display:flex;align-items:center;justify-content:center;
          box-shadow:0 8px 24px rgba(29,78,216,.42),0 2px 6px rgba(0,0,0,.18);
          transition:transform .18s,box-shadow .18s;
          position:relative;margin-left:auto;
        }
        .veyil-ai-fab:hover{transform:translateY(-2px);box-shadow:0 12px 32px rgba(29,78,216,.52)}
        .veyil-ai-fab svg{width:25px;height:25px;color:#fff;transition:transform .25s}
        .veyil-ai-fab.open svg{transform:rotate(90deg)}
        .veyil-ai-badge{
          position:absolute;top:-3px;right:-3px;
          width:13px;height:13px;background:#ef4444;
          border:2px solid #fff;border-radius:50%;
          animation:veyil-aiP 1.8s ease-in-out infinite;
        }
        @keyframes veyil-aiP{0%,100%{transform:scale(1)}50%{transform:scale(1.4)}}

        /* WINDOW */
        .veyil-ai-win{
          position:absolute;bottom:68px;right:0;
          width:376px;height:590px;
          background:#fff;border-radius:18px;
          box-shadow:0 28px 72px rgba(15,23,42,.16),0 4px 14px rgba(0,0,0,.08);
          display:flex;flex-direction:column;overflow:hidden;
          border:1px solid #e5e7eb;
          animation:veyil-aiS .26s cubic-bezier(.34,1.56,.64,1);
          transform-origin:bottom right;
        }
        @keyframes veyil-aiS{
          from{opacity:0;transform:scale(.88) translateY(14px)}
          to{opacity:1;transform:scale(1) translateY(0)}
        }

        /* HEADER */
        .veyil-ai-hdr{
          padding:13px 15px;
          background:linear-gradient(135deg,#0f172a 0%,#1e3a8a 55%,#1d4ed8 100%);
          display:flex;align-items:center;gap:9px;flex-shrink:0;
        }
        .veyil-ai-av{
          width:37px;height:37px;flex-shrink:0;
          background:rgba(255,255,255,.12);
          border:1px solid rgba(255,255,255,.2);
          border-radius:10px;
          display:flex;align-items:center;justify-content:center;
        }
        .veyil-ai-av svg{width:19px;height:19px;color:#fff}
        .veyil-ai-hi{flex:1;min-width:0}
        .veyil-ai-hn{color:#fff;font-weight:700;font-size:14px;letter-spacing:-.15px}
        .veyil-ai-hs{display:flex;align-items:center;gap:4px;margin-top:1px}
        .veyil-ai-dot{width:6px;height:6px;background:#4ade80;border-radius:50%;animation:veyil-aiBl 2s infinite;flex-shrink:0}
        @keyframes veyil-aiBl{0%,100%{opacity:1}50%{opacity:.3}}
        .veyil-ai-htxt{color:rgba(255,255,255,.6);font-size:10.5px;white-space:nowrap}

        /* Lang */
        .veyil-ai-lang{
          display:flex;background:rgba(255,255,255,.1);
          border-radius:7px;overflow:hidden;
          border:1px solid rgba(255,255,255,.15);flex-shrink:0;
        }
        .veyil-ai-lb{
          background:none;border:none;cursor:pointer;
          padding:4px 9px;font-size:11px;font-weight:600;
          color:rgba(255,255,255,.55);font-family:inherit;
          transition:background .12s,color .12s;
        }
        .veyil-ai-lb.on{background:rgba(255,255,255,.18);color:#fff}

        .veyil-ai-x{
          width:28px;height:28px;border-radius:7px;
          background:rgba(255,255,255,.1);border:none;cursor:pointer;
          display:flex;align-items:center;justify-content:center;
          color:#fff;transition:background .12s;flex-shrink:0;
        }
        .veyil-ai-x:hover{background:rgba(255,255,255,.2)}
        .veyil-ai-x svg{width:14px;height:14px}

        /* BODY */
        .veyil-ai-body{
          flex:1;overflow-y:auto;padding:13px;
          background:#f9fafb;
          display:flex;flex-direction:column;gap:10px;
        }
        .veyil-ai-body::-webkit-scrollbar{width:3px}
        .veyil-ai-body::-webkit-scrollbar-thumb{background:#d1d5db;border-radius:3px}

        /* MESSAGES */
        .veyil-ai-r{display:flex}
        .veyil-ai-r.user{justify-content:flex-end}
        .veyil-ai-r.bot{justify-content:flex-start;align-items:flex-end;gap:5px}
        .veyil-ai-ico{
          width:25px;height:25px;flex-shrink:0;
          background:linear-gradient(135deg,#0f172a,#1d4ed8);
          border-radius:50%;
          display:flex;align-items:center;justify-content:center;
        }
        .veyil-ai-ico svg{width:12px;height:12px;color:#fff}
        .veyil-ai-b{
          max-width:80%;padding:9px 12px;border-radius:13px;
          font-size:13.5px;line-height:1.65;
          animation:veyil-aiF .16s ease;
        }
        @keyframes veyil-aiF{from{opacity:0;transform:translateY(3px)}to{opacity:1;transform:translateY(0)}}
        .veyil-ai-b.bot{
          background:#fff;border:1px solid #e5e7eb;
          border-bottom-left-radius:3px;color:#111827;
          box-shadow:0 1px 3px rgba(0,0,0,.05);
        }
        .veyil-ai-b.user{
          background:linear-gradient(135deg,#1e3a8a,#1d4ed8);
          color:#fff;border-bottom-right-radius:3px;
        }
        .veyil-ai-b p{margin:0 0 5px}
        .veyil-ai-b p:last-child{margin-bottom:0}
        .veyil-ai-b strong{font-weight:600}
        .veyil-ai-b ul,.veyil-ai-b ol{padding-left:15px;margin:3px 0}
        .veyil-ai-b li{margin-bottom:2px}
        .veyil-ai-b blockquote{border-left:3px solid #60a5fa;padding-left:8px;color:#6b7280;font-size:12.5px;margin:4px 0}
        .veyil-ai-b a{color:#1d4ed8;text-decoration:underline}
        .veyil-ai-b.user a{color:#bfdbfe}
        .veyil-ai-b code{background:rgba(99,102,241,.08);padding:1px 5px;border-radius:4px;font-size:12px}

        /* TYPING */
        .veyil-ai-typ{display:flex;align-items:center;gap:5px}
        .veyil-ai-ds{
          background:#fff;border:1px solid #e5e7eb;
          padding:9px 12px;border-radius:13px;border-bottom-left-radius:3px;
          display:flex;gap:4px;align-items:center;
        }
        .veyil-ai-ds span{
          width:6px;height:6px;background:#9ca3af;
          border-radius:50%;animation:veyil-aiBo 1.1s infinite;
        }
        .veyil-ai-ds span:nth-child(2){animation-delay:.18s}
        .veyil-ai-ds span:nth-child(3){animation-delay:.36s}
        @keyframes veyil-aiBo{0%,60%,100%{transform:translateY(0)}30%{transform:translateY(-5px)}}

        /* QUICK */
        .veyil-ai-q{
          padding:7px 11px 6px;border-top:1px solid #f3f4f6;
          display:flex;gap:5px;flex-wrap:wrap;
          background:#fff;flex-shrink:0;
        }
        .veyil-ai-qb{
          background:#f3f4f6;border:1px solid #e5e7eb;
          border-radius:16px;padding:4px 10px;
          font-size:11.5px;font-family:inherit;
          cursor:pointer;color:#374151;font-weight:500;
          transition:background .11s;white-space:nowrap;
        }
        .veyil-ai-qb:hover{background:#e5e7eb}
        .veyil-ai-wa{
          background:linear-gradient(135deg,#16a34a,#15803d);
          border:none;border-radius:16px;padding:4px 10px;
          font-size:11.5px;font-family:inherit;cursor:pointer;
          color:#fff;font-weight:600;
          display:flex;align-items:center;gap:4px;white-space:nowrap;
          transition:opacity .11s;
        }
        .veyil-ai-co {
          background: linear-gradient(135deg, #059669, #10b981);
          border: none;
          border-radius: 12px;
          padding: 6px 14px;
          font-size: 13px;
          font-family: inherit;
          cursor: pointer;
          color: #fff;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 6px;
          white-space: nowrap;
          transition: all 0.2s ease;
          box-shadow: 0 2px 8px rgba(16, 185, 129, 0.25);
        }
        .veyil-ai-wa:hover{opacity:.88}
        .veyil-ai-wa svg{width:12px;height:12px}
        .veyil-ai-co:hover{opacity:.88}
        .veyil-ai-co svg{width:12px;height:12px}

        /* INPUT */
        .veyil-ai-ir{
          display:flex;align-items:center;
          border-top:1px solid #f3f4f6;background:#fff;
          padding:9px 10px;gap:7px;flex-shrink:0;
        }
        .veyil-ai-inp{
          flex:1;border:1.5px solid #e5e7eb;border-radius:10px;
          padding:8px 12px;font-size:13.5px;font-family:inherit;
          color:#111827;background:#f9fafb;outline:none;
          transition:border-color .15s;
        }
        .veyil-ai-inp:focus{border-color:#1d4ed8;background:#fff}
        .veyil-ai-inp::placeholder{color:#9ca3af}
        .veyil-ai-snd{
          width:37px;height:37px;
          background:linear-gradient(135deg,#1e3a8a,#1d4ed8);
          border:none;border-radius:9px;cursor:pointer;
          display:flex;align-items:center;justify-content:center;
          flex-shrink:0;transition:opacity .13s,transform .11s;
        }
        .veyil-ai-snd:hover{opacity:.9;transform:scale(1.06)}
        .veyil-ai-snd:disabled{opacity:.38;cursor:not-allowed;transform:none}
        .veyil-ai-snd svg{width:15px;height:15px;color:#fff}

        /* MOBILE */
        @media(max-width:480px){
          .veyil-ai{bottom:14px;right:14px;left:14px}
          .veyil-ai-win{
            width:100%;right:0;left:0;
            height:calc(100dvh - 84px);
            bottom:64px;border-radius:15px;
          }
          .veyil-ai-fab{margin-left:auto}
          .veyil-ai-q{gap:4px}
          .veyil-ai-qb,.veyil-ai-wa,.veyil-ai-co{font-size:11px;padding:4px 9px}
        }
      `}</style>

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