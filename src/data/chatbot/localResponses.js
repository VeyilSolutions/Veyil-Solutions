export const WA =
  "https://wa.me/918489559160?text=Hi%20Veyil%20Solutions%2C%20I%20want%20a%20website%20for%20my%20business";

export const CO = "https://veyilsolutions.in/contact";

export const LOCAL = {
  en: {
    hello: `Hi there! 👋 Welcome to **Veyil Solutions**.

We build **Shopify ecommerce websites** and **professional business websites** for growing brands.

Ask about **pricing**, **packages**, or request a **free homepage sample**.`,

    pricing: `Our pricing at **Veyil Solutions**:

🆓 **Free Sample** — ₹0  

🛒 **Shopify Ecommerce Store**

🚀 Launch Store — ₹8,000 *(5–7 day delivery)*  
📈 Growth Store — ₹15,000 *(7–10 day delivery)*  

💼 **Business Website Development**

🌐 Business Website — ₹10,000 *(Portfolio / Company / Static websites)*

🛠️ **Monthly Support** — ₹3,000/month  

⚠️ Domain, hosting, Shopify subscription, and database costs are **not included**.

Would you like a **free homepage sample** for your brand?`,

    free: `Great! 🎉 Our **Free Sample** is 100% free.

You'll get:

• Homepage preview concept  
• Clear design direction  
• No payment required  

Just tell me — **what products or services do you sell?**

Or [chat on WhatsApp](${WA}) to start immediately.`,

    launch: `**Launch Store — ₹8,000**

Perfect for starting ecommerce businesses.

Includes:

✅ Shopify store setup  
✅ Up to 7 pages  
✅ Mobile optimized design  
✅ Payment gateway integration  
✅ Basic SEO setup  
✅ 30 days free support  

🗓 Delivery: **5–7 days**

⚠️ Not included:

• Shopify subscription (~₹1,999/month + GST)  
• Domain name (~₹800–₹1,500/year)

[Chat on WhatsApp](${WA}) to start.`,

    growth: `**Growth Store — ₹15,000**

Best for scaling product businesses.

Includes:

✅ Up to 20 products setup  
✅ Custom homepage layout  
✅ Structured navigation  
✅ Conversion-focused design  
✅ Advanced mobile optimization  
✅ Basic on-page SEO  
✅ 30 days free support  

🗓 Delivery: **7–10 days**

⚠️ Not included:

• Shopify subscription (~₹1,999/month + GST)  
• Domain name (~₹800–₹1,500/year)

[Chat on WhatsApp](${WA}) to get started.`,

    business: `**Business Website Development — ₹10,000**

Ideal for:

• Company websites  
• Portfolio websites  
• Service websites  
• Static business websites  

Includes:

✅ Professional modern design  
✅ Mobile responsive layout  
✅ SEO-friendly structure  
✅ Contact form integration  
✅ Fast loading pages  

🗓 Delivery: **5–7 days**

⚠️ Not included:

• Domain name  
• Hosting / server  
• Database (if required)

These costs are **paid directly by the client**.

[Chat on WhatsApp](${WA}) to start your website.`,

    support: `**Monthly Support — ₹3,000/month**

Includes:

• Product uploads  
• Banner updates  
• Social media creatives  
• Minor website edits  
• Priority support  

Perfect for keeping your website updated.

[Contact us on WhatsApp](${WA})`,

    delivery: `**Delivery timelines**

🚀 Shopify Launch Store — **5–7 days**  
📈 Shopify Growth Store — **7–10 days**  
🌐 Business Website — **5–7 days**

We keep you updated throughout the process.`,

    shopify: `Shopify is the platform where your online store runs.

💳 Shopify Basic Plan

~₹1,999/month **+ GST**

Paid directly to Shopify.

You will also need:

• Domain name (~₹800–₹1,500/year)  
• Optional Shopify apps (if needed)

We help you set everything up.`,

    additional: `**Additional costs (paid separately by the client)**

These are **not included in our service pricing**:

• Shopify subscription (~₹1,999/month + GST)  
• Domain name (~₹800–₹1,500/year)  
• Hosting / server (for business websites)  
• Database (if required)  
• Third-party apps or integrations  
• Payment gateway transaction fees  

Our service pricing:

🚀 Shopify Launch Store — ₹8,000  
📈 Shopify Growth Store — ₹15,000  
🌐 Business Website — ₹10,000`,

    contact: `You can contact **Veyil Solutions** directly:

📱 WhatsApp: [+91 84895 59160](${WA})

We usually reply within a few minutes.`,
  },

  ta: {
    hello: `வணக்கம்! 👋 **Veyil Solutions**-க்கு வருக.

Shopify ecommerce store மற்றும் business websites உருவாக்குகிறோம்.

**விலை** அல்லது **இலவச homepage sample** பற்றி கேளுங்கள்.`,
  },
};

/* MATCHER */

export function matchLocal(msg, lang) {
  const m = msg.toLowerCase();
  const r = LOCAL[lang] || LOCAL.en;

  if (/\b(hi|hello|hey|hai|helo|start|வணக்கம்|ஹலோ)\b/.test(m))
    return r.hello;

  if (/\b(yes|ok|sure|yeah|yep|okay|ஆம்|சரி)\b/.test(m))
    return r.free;

  if (/launch|8000|8,000/.test(m))
    return r.launch;

  if (/growth|15000|15,000/.test(m))
    return r.growth;

  if (/business website|company website|portfolio website|static website/.test(m))
    return r.business;

  if (/deliver|delivery|how long|time|days|நாட்கள்|எத்தனை/.test(m))
    return r.delivery;

  if (/shopify|subscription|platform|1999/.test(m))
    return r.shopify;

  if (/support|3000|monthly/.test(m))
    return r.support;

  if (/additional|extra cost|separate/.test(m))
    return r.additional;

  if (/contact|reach|call|phone|number/.test(m))
    return r.contact;

  if (/free|sample|preview/.test(m))
    return r.free;

  if (/price|cost|pricing|rate|how much/.test(m))
    return r.pricing;

  if (/website|store|shop|ecommerce/.test(m))
    return r.pricing;

  return null;
}