
import { Link } from "react-router-dom";

export default function ServiceCTA() {
  return (
    <section className="bg-zinc-100 py-20 px-6 border-t border-gray-200">
      <div className="max-w-4xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
          Ready to Launch Your Website?
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
          Get a modern website or ecommerce store designed to attract customers,
          increase trust, and grow your business online.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">

          {/* Primary CTA */}
          <Link
            to="/contact"
            className="bg-black text-white px-10 py-4 rounded-xl font-semibold transition hover:scale-105"
          >
            Talk to an Expert
          </Link>

          {/* Secondary CTA */}
          <Link
            to="/Portfolio"
            className="border border-black text-black px-10 py-4 rounded-xl font-semibold transition hover:bg-black hover:text-white"
          >
            View Our Works
          </Link>

        </div>

        {/* Trust text */}
        <p className="text-sm text-gray-500 mt-6">
          Free sample available before any commitment.
        </p>

      </div>
    </section>
  );
}
