import { motion } from "framer-motion";

const plans = [
  {
    name: "Frontend Development",
    price: "₹8,000",
    period: "Starting from",
    desc: "Perfect for React-based UI projects",
    features: [
      "React Landing Page",
      "React Multi Page Website",
      "React Dashboard (UI Only)",
      "Responsive Design",
      "Animations",
      "2 Revisions",
      "1 Week Support",
    ],
    popular: false,
  },
  {
    name: "Backend Development",
    price: "₹15,000",
    period: "Starting from",
    desc: "Robust API and database solutions",
    features: [
      "REST API Development",
      "Node + Express + MongoDB",
      "Authentication System",
      "Database Design",
      "API Documentation",
      "2 Revisions",
      "1 Week Support",
    ],
    popular: false,
  },
  {
    name: "Full Stack MERN",
    price: "₹35,000",
    period: "Starting from",
    desc: "Complete end-to-end solutions",
    features: [
      "Complete MERN Application",
      "User Authentication",
      "Admin Dashboard",
      "Payment Integration (Razorpay)",
      "Responsive Design",
      "SEO Optimization",
      "4 Revisions",
      "2 Weeks Support",
    ],
    popular: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="mx-auto mb-14 max-w-2xl text-center"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-xs sm:text-sm font-medium text-orange-600">Pricing</p>
          <h2 className="mt-3 text-balance text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight bg-gradient-to-r from-orange-600 via-yellow-600 to-pink-500 bg-clip-text text-transparent">
            Flexible Pricing for Your Needs
          </h2>
          <p className="mt-4 sm:mt-5 text-pretty text-sm sm:text-base text-gray-600">
            Choose the right package for your project. From frontend to full stack—quality solutions at competitive rates.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`relative rounded-2xl border p-4 sm:p-5 md:p-6 lg:p-7 ${
                plan.popular
                  ? "border-orange-300 bg-gradient-to-br from-orange-50 via-yellow-50 to-pink-50 shadow-lg"
                  : "border-orange-200 bg-gradient-to-br from-orange-50 to-yellow-50"
              }`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.06 }}
              whileHover={{ y: -6 }}
            >
              {plan.popular && (
                <div className="absolute -top-2.5 sm:-top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-gradient-to-r from-orange-500 to-pink-500 px-3 py-0.5 sm:px-4 sm:py-1 text-[10px] sm:text-xs font-semibold text-white">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-base sm:text-lg font-semibold text-orange-900">{plan.name}</h3>
              <p className="mt-2 text-xs sm:text-sm text-orange-700">{plan.desc}</p>

              <div className="mt-4 sm:mt-6">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-900">{plan.price}</p>
                <p className="text-xs sm:text-sm text-orange-600">{plan.period}</p>
              </div>

              <div className="mt-4 sm:mt-6 h-px w-full bg-orange-200" />

              <ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-orange-800">
                    <svg
                      className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-orange-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-6 sm:mt-8 block w-full rounded-xl px-4 py-2.5 sm:px-6 sm:py-3 text-center text-xs sm:text-sm font-semibold transition ${
                  plan.popular
                    ? "bg-gradient-to-r from-orange-500 via-yellow-500 to-pink-500 text-white shadow-lg hover:from-orange-400 hover:via-yellow-400 hover:to-pink-400"
                    : "border border-orange-300 bg-white/80 text-orange-700 hover:bg-orange-50"
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mx-auto mt-8 sm:mt-12 max-w-2xl text-center text-xs sm:text-sm text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Final price depends on project complexity. Contact for custom quote.
        </motion.p>
      </div>
    </section>
  );
}
