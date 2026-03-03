function TermsConditions() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 bg-white mt-24 mb-12 rounded-2xl shadow-sm text-slate-700">
      
      {/* Header */}
      <header className="mb-10 border-b border-slate-100 pb-8">
        <h1 className="text-3xl font-bold text-navy mb-2">
          Terms & Conditions
        </h1>
        <p className="text-sm text-slate-500 font-medium">
          Effective Date: December 25, 2025
        </p>
      </header>

      <div className="space-y-10 text-sm leading-relaxed">
        <p className="text-base">
          Welcome to <strong>Veyil Solutions</strong>. By accessing our website, 
          purchasing our services, or signing a project proposal, you agree to 
          be bound by the following terms and conditions.
        </p>

       {/* 1. Scope of Services */}
        <section>
          <h2 className="text-lg font-semibold text-navy mb-3">
            1. Scope of Services
          </h2>
          <p>Veyil Solutions specializes in digital services including, but not limited to:</p>
          <ul className="list-disc ml-6 mt-3 space-y-4">
            <li>
              <strong>E-commerce Development:</strong> Building high-performance online stores (Shopify, Wix, etc.) designed to convert visitors into customers and scale your business effortlessly.
            </li>
            <li>
              <strong>Business Website Development:</strong> Creating custom-built professional sites designed to showcase your services, build brand authority, and capture high-quality leads.
            </li>
            <li>
              <strong>Creative Design Services:</strong> Providing high-impact visuals and custom branding designed to make your business stand out and capture your audience’s attention.
            </li>
          </ul>
          <p className="mt-4">
            Specific deliverables, timelines, and project scopes will be outlined in a 
            separate <strong>Project Proposal</strong> or <strong>Invoice</strong> provided to the client.
          </p>
        </section>

        {/* 2. Client Responsibilities */}
        <section>
          <h2 className="text-lg font-semibold text-navy mb-3">
            2. Client Responsibilities
          </h2>
          <ul className="list-disc ml-6 space-y-3">
            <li>
              <strong>Content:</strong> The client agrees to provide all necessary text, 
              images, and credentials required to complete the project in a timely manner.
            </li>
            <li>
              <strong>Delays:</strong> Veyil Solutions is not responsible for missed deadlines 
              caused by a delay in the client providing necessary materials or feedback.
            </li>
          </ul>
        </section>

        {/* 3. Payments & Refunds */}
        <section className="bg-slate-50 p-6 rounded-xl border-l-4 border-navy">
          <h2 className="text-lg font-semibold text-navy mb-3">
            3. Payments & Refunds
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Payment Schedule:</strong> Payment terms (e.g., 50% deposit, 50% upon completion) will be defined in the project invoice.</li>
            <li><strong>Non-Refundable Deposits:</strong> Unless otherwise agreed in writing, any upfront deposit required to begin a project is non-refundable to cover initial design time and resources.</li>
            <li><strong>Late Payments:</strong> We reserve the right to pause or withhold final deliverables until full payment is received.</li>
          </ul>
        </section>

        {/* 4. Intellectual Property */}
        <section>
          <h2 className="text-lg font-semibold text-navy mb-3">
            4. Intellectual Property & Ownership
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Transfer of Ownership:</strong> Upon full payment, the client owns the final designs and website files.</li>
            <li><strong>Veyil Solutions Rights:</strong> We retain the right to use the completed work in our portfolio, website, and social media for promotional purposes.</li>
            <li><strong>Unpaid Work:</strong> If the project is cancelled or unpaid, Veyil Solutions retains full ownership of all drafts, code, and designs created.</li>
          </ul>
        </section>

        {/* 5. Revisions */}
        <section>
          <h2 className="text-lg font-semibold text-navy mb-3">
            5. Revisions
          </h2>
          <p>
            We want you to be happy with the result. However, revisions are limited to 
            the scope defined in the original agreement. Additional work or significant 
            changes to the design after approval may incur extra charges.
          </p>
        </section>

        {/* 6. Limitation of Liability */}
        <section>
          <h2 className="text-lg font-semibold text-navy mb-3">
            6. Limitations of Liability
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Third-Party Platforms:</strong> We build on platforms like Shopify and Wix, but we are not responsible for changes, downtime, or data loss caused by these third-party providers.</li>
            <li><strong>Business Results:</strong> While we strive for high-quality design and functionality, we do not guarantee specific sales, traffic, or search engine rankings.</li>
          </ul>
        </section>

        {/* 7. Governing Law */}
        <section>
          <h2 className="text-lg font-semibold text-navy mb-3">
            7. Governing Law
          </h2>
          <p>
            These terms shall be governed by and construed in accordance with the 
            laws of <strong>India</strong>, and subject to the exclusive jurisdiction 
            of the courts in <strong>Tamil Nadu</strong>.
          </p>
        </section>

        {/* 8. Contact Information */}
        <section className="pt-6 border-t border-slate-100">
          <h2 className="text-lg font-semibold text-navy mb-3">
            Contact Us
          </h2>
          <address className="not-italic space-y-2">
            <p className="flex items-center gap-2">
              <span className="font-semibold text-slate-900">Email:</span>
              <a href="mailto:veyilsolutions@gmail.com" className="text-teal font-semibold hover:underline">
                veyilsolutions@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              <span className="font-semibold text-slate-900">Phone:</span>
              <a href="tel:+918489559160" className="text-teal font-semibold hover:underline">
                +91 84895 59160
              </a>
            </p>
          </address>
        </section>
      </div>
    </main>
  );
}

export default TermsConditions;