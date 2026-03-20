function PrivacyPolicy() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 bg-white mt-24 mb-12 rounded-2xl shadow-sm">
      
      {/* Header */}
      <header className="mb-10 border-b border-slate-100 pb-8">
        <h1 className="text-3xl font-bold text-navy mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-slate-500 font-medium">
          Effective Date: December 25, 2025
        </p>
      </header>

      <div className="space-y-10 text-sm leading-relaxed text-slate-700">
        <p>
          At <strong>Veyil Solutions</strong>, we value your privacy and are committed 
          to protecting your personal information. This Privacy Policy explains how 
          we collect, use, and safeguard your data.
        </p>

        <section>
          <h2 className="text-lg font-semibold text-navy mb-3">
            1. Information We Collect
          </h2>
          <p>We collect only the information necessary to communicate with you effectively. This includes:</p>
          <ul className="list-disc ml-6 mt-3 space-y-2">
            <li><strong>Personal Information:</strong> Name, email address, phone number, and any other details you provide through our contact forms.</li>
            <li><strong>Voluntary Data:</strong> Any additional information you choose to share when interacting with our services.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-navy mb-3">
            2. How We Use Your Information
          </h2>
          <p>We use your data strictly for the following purposes:</p>
          <ul className="list-disc ml-6 mt-3 space-y-2">
            <li><strong>To Provide Services:</strong> To respond to your inquiries and fulfill your service requests.</li>
            <li><strong>To Improve Experience:</strong> To analyze and improve our website functionality and user experience.</li>
            <li><strong>Direct Communication Only:</strong> We use your contact details <strong>solely to contact you directly</strong> regarding your specific needs. We do not use your information for marketing campaigns, newsletters, or any unrelated purposes.</li>
          </ul>
        </section>

        <section className="bg-slate-50 p-6 rounded-xl border-l-4 border-teal">
          <h2 className="text-lg font-semibold text-navy mb-3">
            3. Sharing Your Information (Zero-Sharing Policy)
          </h2>
          <p>We operate under a strict <strong>Zero-Sharing Policy</strong>:</p>
          <ul className="list-disc ml-6 mt-3 space-y-2">
            <li>We <strong>do not</strong> sell, rent, trade, or give your personal information to any third parties, partners, or service providers.</li>
            <li>Your data is kept confidential and is not disclosed to anyone outside of Veyil Solutions.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-navy mb-3">
            4. Cookies & Tracking
          </h2>
          <p>
            We use cookies and similar technologies to enhance your browsing experience 
            and ensure our website functions correctly. For detailed information, 
            please refer to our <strong>Cookie Policy</strong>.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-navy mb-3">
            5. Data Security
          </h2>
          <p>
            We implement industry-standard security measures to protect your information. 
            However, please note that no method of online data transmission is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-navy mb-3">
            6. Your Consent
          </h2>
          <p>
            By using our website, you consent to the terms outlined in this Privacy Policy.
          </p>
        </section>

        <section className="pt-6 border-t border-slate-100">
          <h2 className="text-lg font-semibold text-navy mb-3">
            Contact Information
          </h2>
          <address className="not-italic space-y-2">
            <p className="flex items-center gap-2">
              <span className="font-semibold text-slate-900">Email:</span>
              <a
                href="mailto:veyilsolutions@gmail.com"
                className="text-teal font-semibold hover:underline"
              >
                veyilsolutions@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              <span className="font-semibold text-slate-900">Phone:</span>
              <a
                href="tel:+918489559160"
                className="text-teal font-semibold hover:underline"
              >
                +91 84895 59160
              </a>
            </p>
          </address>
        </section>
      </div>
    </main>
  );
}

export default PrivacyPolicy;