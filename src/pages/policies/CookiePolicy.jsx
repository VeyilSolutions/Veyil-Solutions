import React from "react";

function CookiePolicy() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 bg-white mt-24 mb-12 rounded-2xl shadow-sm text-slate-700">
      
      {/* Header */}
      <header className="mb-10 border-b border-slate-100 pb-8">
        <h1 className="text-3xl font-bold text-navy mb-2">
          Cookie Policy
        </h1>
        <p className="text-sm text-slate-500 font-medium">
          Effective Date: December 25, 2025
        </p>
      </header>

      <div className="space-y-10 text-sm leading-relaxed">
        <p className="text-base">
          This Cookie Policy explains how <strong>Veyil Solutions</strong> uses cookies and 
          similar technologies to recognize you when you visit our website. It explains 
          what these technologies are and why we use them, as well as your rights to 
          control our use of them.
        </p>

        {/* 1. What Are Cookies */}
        <section>
          <h2 className="text-lg font-semibold text-navy mb-3">
            1. What Are Cookies?
          </h2>
          <p>
            Cookies are small text files stored on your computer or mobile device when 
            you visit a website. They are widely used to make websites work more 
            efficiently and to provide reporting information to the site owners.
          </p>
        </section>

        {/* 2. How We Use Cookies */}
        <section>
          <h2 className="text-lg font-semibold text-navy mb-3">
            2. How We Use Cookies
          </h2>
          <p>We use cookies for the following specific purposes:</p>
          <ul className="list-disc ml-6 mt-3 space-y-3">
            <li>
              <strong>Essential Cookies:</strong> These are necessary for the website 
              to function properly (e.g., secure logins, page navigation). The website 
              cannot function properly without these.
            </li>
            <li>
              <strong>Performance & Analytics:</strong> We use these to understand how 
              visitors interact with our website (e.g., counting visits, traffic sources). 
              All data collected by these cookies is <strong>aggregated and anonymous</strong>.
            </li>
            <li>
              <strong>Functionality:</strong> These allow the website to remember choices 
              you make (such as your language or region) to provide a more personalized experience.
            </li>
          </ul>
        </section>

        {/* 3. Third-Party Cookies */}
        <section className="bg-slate-50 p-6 rounded-xl border-l-4 border-teal">
          <h2 className="text-lg font-semibold text-navy mb-3">
            3. Third-Party Cookies
          </h2>
          <p>
            In some cases, we use trusted third-party services to improve our website. For example:
          </p>
          <p className="mt-2">
            We may use <strong>Google Analytics</strong> to help us understand how you use 
            the site and ways that we can improve your experience. These cookies track 
            things such as how long you spend on the site and the pages that you visit.
          </p>
          <p className="mt-3 font-semibold text-teal italic">
            Note: These third-party services are strictly prohibited from using your data 
            for their own marketing purposes or selling your data.
          </p>
        </section>

        {/* 4. Managing Preferences */}
        <section>
          <h2 className="text-lg font-semibold text-navy mb-3">
            4. Managing Your Cookie Preferences
          </h2>
          <p>
            You have the right to decide whether to accept or reject cookies. You can 
            exercise your cookie rights by setting your browser controls to block or 
            delete cookies.
          </p>
          <p className="mt-3">
            Please note that if you choose to reject cookies, you may still use our 
            website, though your access to some functionality and areas of our 
            website may be restricted.
          </p>
        </section>

        {/* 5. Updates */}
        <section>
          <h2 className="text-lg font-semibold text-navy mb-3">
            5. Updates to This Policy
          </h2>
          <p>
            We may update this Cookie Policy from time to time in order to reflect 
            changes to the cookies we use or for other operational, legal, or 
            regulatory reasons. Please re-visit this page regularly to stay informed.
          </p>
        </section>

        {/* Contact info footer */}
        <section className="pt-6 border-t border-slate-100">
          <p className="font-semibold text-navy">Questions?</p>
          <p className="mt-2">
            If you have questions about our use of cookies or other technologies, please 
            email us at <a href="mailto:veyilsolutions@gmail.com" className="text-teal font-semibold hover:underline">veyilsolutions@gmail.com</a>.
          </p>
        </section>
      </div>
    </main>
  );
}

export default CookiePolicy;