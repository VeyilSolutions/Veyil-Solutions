import { Link } from "react-router-dom";

export default function ServiceCTA() {
  return (
    <section className="bg-teal py-20 px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Improve Your Business Performance?
          </h2>
          <p className="text-lg mb-10 opacity-90">
            Talk to our Veyil Solutions experts today.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-teal px-10 py-4 rounded-xl font-bold shadow-xl transition hover:scale-105"
          >
            Talk to an Expert
          </Link>
        </div>
      </section>
  );
}
