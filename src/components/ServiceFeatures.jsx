import { CheckCircle2 } from "lucide-react";

export default function ServiceFeatures({ title, features = [] }) {
  if (!features.length) return null;

  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">

        {/* SECTION TITLE */}
        {title && (
          <h2 className="text-3xl font-bold text-navy mb-12 text-center">
            {title}
          </h2>
        )}

        {/* FEATURES */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex gap-4 items-start bg-white p-6 rounded-xl border border-slate-200"
            >
              <CheckCircle2
                className="text-teal w-6 h-6 flex-shrink-0 mt-1"
                aria-hidden="true"
              />
              <p className="text-slate-600 leading-relaxed">
                {feature}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
