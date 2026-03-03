import React from "react";

function WorkProcess() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 bg-white mt-24 mb-12 rounded-2xl shadow-sm text-slate-700">
      
      {/* Header */}
      <header className="mb-10 border-b border-slate-100 pb-8">
        <h1 className="text-3xl font-bold text-navy mb-2">
          Work Process & Terms
        </h1>
        <p className="text-sm text-slate-500 font-medium text-teal uppercase tracking-widest">
          Veyil Solutions • Transparent Milestones
        </p>
      </header>

      <div className="space-y-12 text-sm leading-relaxed">
        <p className="text-base italic">
          At <strong>Veyil Solutions</strong>, we follow a transparent milestone-based process to ensure trust and quality. We believe you should see the value we provide before you commit.
        </p>

        {/* ================= PROCESS STEPS ================= */}
        <section className="space-y-8">
          <div className="relative pl-8 border-l-2 border-slate-100">
            <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-teal" />
            <h2 className="text-lg font-bold text-navy mb-2">Step 1: Free Concept Sample</h2>
            <p>We start by creating a watermarked or blurred design concept based on your specific requirements.</p>
            <ul className="list-disc ml-5 mt-3 space-y-1">
              <li><strong>No Upfront Cost:</strong> You see the idea before you pay.</li>
              <li><strong>Condition:</strong> This sample is for review only and cannot be used commercially.</li>
            </ul>
          </div>

          <div className="relative pl-8 border-l-2 border-slate-100">
            <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-teal" />
            <h2 className="text-lg font-bold text-navy mb-2">Step 2: Approval & 50% Advance</h2>
            <p>If you are happy with the sample and want to proceed:</p>
            <ul className="list-disc ml-5 mt-3 space-y-1">
              <li>You approve the design direction.</li>
              <li><strong>Payment 1:</strong> You pay 50% of the total project cost via UPI (GPay, PhonePe, Paytm).</li>
              <li>Once the 50% advance is received, we begin the full design/development work.</li>
            </ul>
          </div>

          <div className="relative pl-8 border-l-2 border-slate-100">
            <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-teal" />
            <h2 className="text-lg font-bold text-navy mb-2">Step 3: Finalization</h2>
            <p>We complete the project and send you a final preview (still watermarked or read-only link) for your verification.</p>
          </div>

          <div className="relative pl-8 border-l-2 border-slate-100">
            <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-teal" />
            <h2 className="text-lg font-bold text-navy mb-2">Step 4: Final 50% & Delivery</h2>
            <p>Once you are satisfied with the final result:</p>
            <ul className="list-disc ml-5 mt-3 space-y-1">
              <li><strong>Payment 2:</strong> You pay the remaining 50% balance.</li>
              <li><strong>Delivery:</strong> Immediately after the final payment is confirmed, we remove all watermarks and send you the original high-resolution files/access.</li>
            </ul>
          </div>
        </section>

        {/* ================= POLICIES ================= */}
        <div className="grid md:grid-cols-2 gap-6 pt-6">
          <section className="bg-slate-50 p-6 rounded-xl border-t-4 border-navy">
            <h2 className="text-lg font-bold text-navy mb-3">Payment Policy</h2>
            <ul className="space-y-3">
              <li className="flex gap-2">
                <span className="text-teal font-bold">✓</span>
                <span><strong>UPI Only:</strong> We accept payments exclusively via Google Pay, PhonePe, and Paytm.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-teal font-bold">✓</span>
                <span><strong>Non-Refundable:</strong> The 50% advance covers our time and resources and is non-refundable once work has commenced.</span>
              </li>
            </ul>
          </section>

          <section className="bg-red-50 p-6 rounded-xl border-t-4 border-red-500">
            <h2 className="text-lg font-bold text-red-900 mb-3">Anti-Theft Policy</h2>
            <p className="text-red-800">
              The free sample provided in Step 1 is for viewing purposes only. Using, tracing, or screenshotting the watermarked sample for commercial use without payment is <strong>strictly prohibited</strong> and violates our intellectual property rights.
            </p>
          </section>
        </div>

        {/* Contact Footer */}
        <section className="pt-10 border-t border-slate-100 text-center">
          <p className="mb-4 font-semibold text-navy">Ready to see your concept?</p>
          <a
            href="/contact"
            className="inline-block bg-teal text-white px-8 py-3 rounded-full font-bold hover:bg-navy transition-colors"
          >
            Start Free Sample
          </a>
        </section>
      </div>
    </main>
  );
}

export default WorkProcess;