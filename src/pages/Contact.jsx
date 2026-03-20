import { useState, useRef, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import "@/styles/form.css";

const FORMSPREE_URL = "https://formspree.io/f/mykdqvzz";
const RULES = { nameMin: 3, mobileLength: 10, messageMin: 10 };
const INITIAL_FORM = { fullName: "", mobile: "", email: "", projectPlan: "", message: "" };
const STORAGE_KEY = "contactFormData";

function loadSaved() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return INITIAL_FORM;
    return { ...INITIAL_FORM, ...JSON.parse(saved), projectPlan: "" };
  } catch { return INITIAL_FORM; }
}

function Toast({ toasts }) {
  return (
    <div className="toast-container" aria-live="polite" aria-atomic="false">
      {toasts.map((t) => (
        <div key={t.id} className={`toast toast--${t.type} toast--visible`}>
          <span className="toast__icon">
            {t.type === "success" ? "✅" : t.type === "error" ? "❌" : "⚠️"}
          </span>
          <span className="toast__message">{t.message}</span>
          <div className="toast__progress" style={{ animationDuration: `${t.duration}ms` }} />
        </div>
      ))}
    </div>
  );
}

function FieldErrorPopup({ id, message }) {
  if (!message) return null;
  return (
    <div id={id} className="field-error-popup" role="alert">
      <span className="field-error-popup__arrow" />
      <span className="field-error-popup__icon">⚠</span>
      {message}
    </div>
  );
}

function useToast() {
  const [toasts, setToasts] = useState([]);
  const timers = useRef({});
  const addToast = useCallback((message, type = "info", duration = 3500) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type, duration }]);
    timers.current[id] = setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
      delete timers.current[id];
    }, duration);
  }, []);
  useEffect(() => {
    const t = timers.current;
    return () => Object.values(t).forEach(clearTimeout);
  }, []);
  return { toasts, addToast };
}

function Contact() {
  const location = useLocation();
  const { toasts, addToast } = useToast();
  const [formData, setFormData] = useState(loadSaved);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const debounceTimers = useRef({});
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) { isFirstRender.current = false; return; }
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...formData, projectPlan: "" }));
  }, [formData]);

  useEffect(() => {
    if (location.state?.selectedPlan) {
      setFormData((prev) => ({ ...prev, projectPlan: location.state.selectedPlan }));
      window.history.replaceState(null, "", location.pathname);
    }
  }, [location.state]);

  const validateField = (name, value, currentFormData = formData) => {
    switch (name) {
      case "fullName":
        if (!value.trim()) return "Full name is required";
        if (value.trim().length < RULES.nameMin) return `Name must be at least ${RULES.nameMin} characters`;
        break;
      case "mobile":
        if (!value) return "Mobile number is required";
        if (value.length !== RULES.mobileLength) return `Mobile must be exactly ${RULES.mobileLength} digits`;
        break;
      case "email":
        if (!value) return "Email is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Invalid email format";
        break;
      case "projectPlan":
        if (!value) return "Please select a project plan";
        break;
      case "message":
        if (currentFormData.projectPlan === "Others") {
          if (!value.trim()) return "Please describe your project";
          if (value.trim().length < RULES.messageMin) return `Minimum ${RULES.messageMin} characters required`;
        }
        break;
      default: break;
    }
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let processed = value;
    if (name === "fullName") processed = value.replace(/[^a-zA-Z\s]/g, "");
    if (name === "mobile") processed = value.replace(/\D/g, "").slice(0, RULES.mobileLength);
    const updatedForm = { ...formData, [name]: processed };
    setFormData(updatedForm);
    setErrors((prev) => ({ ...prev, [name]: "" }));
    clearTimeout(debounceTimers.current[name]);
    debounceTimers.current[name] = setTimeout(() => {
      const error = validateField(name, processed, updatedForm);
      if (error) setErrors((prev) => ({ ...prev, [name]: error }));
    }, 500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newErrors = {}, hasError = false;
    Object.keys(formData).forEach((key) => {
      if (key === "message" && formData.projectPlan !== "Others") return;
      const error = validateField(key, formData[key], formData);
      if (error) { newErrors[key] = error; hasError = true; }
    });
    setErrors(newErrors);
    if (hasError) { addToast("Please fix the highlighted errors before submitting.", "warning", 4000); return; }
    setIsSubmitting(true);
    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName, mobile: formData.mobile,
          email: formData.email, projectPlan: formData.projectPlan,
          ...(formData.projectPlan === "Others" && { message: formData.message }),
        }),
      });
      if (response.ok) {
        addToast("Message sent! We'll get back to you within 24 hours. 🎉", "success", 5000);
        localStorage.removeItem(STORAGE_KEY);
        setFormData(INITIAL_FORM);
        setErrors({});
      } else {
        console.error("Formspree error:", await response.json());
        addToast("Submission failed. Please try again.", "error", 4500);
      }
    } catch (err) {
      console.error("Network error:", err);
      addToast("Network error. Check your connection and retry.", "error", 4500);
    }
    setIsSubmitting(false);
  };

  const renderAnimatedLabel = (text) =>
    text.split("").map((char, index) => (
      <span key={index} style={{ transitionDelay: `${index * 40}ms` }}>
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  return (
    <main className="contact-wrapper">
      <Toast toasts={toasts} />

      <div className="contact-grid">

        {/* ── LEFT COLUMN ── */}
        <div className="contact-left">
          <div className="contact-left__inner">

            <div className="contact-left__intro">
              <h1>Let's Build Something Great</h1>
              <p>
                Whether you're planning a new product, improving an existing
                system, or exploring automation, our team is ready to help
                you move forward with clarity and confidence.
              </p>
            </div>

            <div className="contact-left__steps">
              <h3>What Happens After You Contact Us?</h3>
              <ul>
                <li>✔ We review your request within 24 hours</li>
                <li>✔ A specialist connects with you for clarity</li>
                <li>✔ You receive a clear roadmap &amp; next steps</li>
                <li>✔ No pressure. No spam. Just honest guidance.</li>
              </ul>
            </div>

            <div className="contact-cards">
              <div className="contact-card">
                <h4>Enterprise-Grade Approach</h4>
                <p>Structured delivery, transparent communication, and scalable solutions.</p>
              </div>
              <div className="contact-card">
                <h4>Secure &amp; Confidential</h4>
                <p>Your ideas and data are handled with strict confidentiality.</p>
              </div>
            </div>

            <p className="contact-note">
              Prefer email or a quick discussion?<br />
              <span>We usually respond within one business day.</span>
            </p>

          </div>
        </div>

        {/* ── RIGHT COLUMN — Form ── */}
        <div className="contact-form-box">
          <h2>Contact Our Team</h2>

          <form onSubmit={handleSubmit} noValidate>

            <div className="form-row">
              <div className="form-control-wrapper">
                <div className="form-control">
                  <input id="fullName" type="text" name="fullName" value={formData.fullName}
                    onChange={handleChange} required autoComplete="name"
                    aria-describedby={errors.fullName ? "fullName-error" : undefined}
                    className={errors.fullName ? "error" : ""} />
                  <label htmlFor="fullName">{renderAnimatedLabel("Full Name")}</label>
                </div>
                <FieldErrorPopup id="fullName-error" message={errors.fullName} />
              </div>

              <div className="form-control-wrapper">
                <div className="form-control">
                  <input id="mobile" type="tel" name="mobile" value={formData.mobile}
                    onChange={handleChange} required autoComplete="tel" inputMode="numeric"
                    aria-describedby={errors.mobile ? "mobile-error" : undefined}
                    className={errors.mobile ? "error" : ""} />
                  <label htmlFor="mobile">{renderAnimatedLabel("Mobile Number")}</label>
                </div>
                <FieldErrorPopup id="mobile-error" message={errors.mobile} />
              </div>
            </div>

            <div className="form-control-wrapper">
              <div className="form-control">
                <input id="email" type="email" name="email" value={formData.email}
                  onChange={handleChange} required autoComplete="email"
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={errors.email ? "error" : ""} />
                <label htmlFor="email">{renderAnimatedLabel("Email Address")}</label>
              </div>
              <FieldErrorPopup id="email-error" message={errors.email} />
            </div>

            <div className="form-control-wrapper">
              <div className="form-control dropdown-control">
                <select id="projectPlan" name="projectPlan" value={formData.projectPlan}
                  onChange={handleChange} required
                  aria-describedby={errors.projectPlan ? "projectPlan-error" : undefined}
                  className={errors.projectPlan ? "error" : ""}>
                  <option value="" disabled hidden></option>
                  <option value="Free Sample">Free Sample</option>
                  <option value="Launch Store">Launch Store</option>
                  <option value="Growth Store">Growth Store</option>
                  <option value="Monthly Support">Monthly Support</option>
                  <option value="Others">Others</option>
                </select>
                <label htmlFor="projectPlan" className={formData.projectPlan ? "active" : ""}>
                  {renderAnimatedLabel("Select Project Plan")}
                </label>
              </div>
              <FieldErrorPopup id="projectPlan-error" message={errors.projectPlan} />
            </div>

            {formData.projectPlan === "Others" && (
              <div className="form-control-wrapper fade-in">
                <div className="form-control">
                  <textarea id="message" name="message" value={formData.message}
                    onChange={handleChange} rows={3} required
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={errors.message ? "error" : ""} />
                  <label htmlFor="message">{renderAnimatedLabel("Tell us about your project")}</label>
                </div>
                <FieldErrorPopup id="message-error" message={errors.message} />
              </div>
            )}

            <button type="submit" disabled={isSubmitting} className="submit-btn">
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

          </form>
        </div>

      </div>
    </main>
  );
}

export default Contact;