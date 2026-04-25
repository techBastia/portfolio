import { motion } from "framer-motion";

const services = [
  {
    title: "MERN Full Stack Development",
    desc: "End-to-end solutions with React, Node.js, MongoDB, Express.js. From concept to deployment—scalable, secure, and production-ready applications tailored for your business needs.",
  },
  {
    title: "AI Integration Services",
    desc: "Integrate OpenAI, ChatGPT, and custom AI solutions into your applications. Smart chatbots, automation workflows, and intelligent features that give your business a competitive edge.",
  },
  {
    title: "Enterprise Web Applications",
    desc: "Build enterprise-grade platforms with robust architecture, role-based access control, and scalable databases. Healthcare, finance, HR systems—delivered with security and performance in mind.",
  },
  {
    title: "E-commerce Solutions",
    desc: "Complete online stores with payment gateway integration, inventory management, and admin dashboards. From clothing brands to retail—conversion-focused and mobile-first design.",
  },
  {
    title: "API Development & Integration",
    desc: "RESTful and GraphQL API development with secure authentication, rate limiting, and comprehensive documentation. Third-party integrations, microservices, and backend optimization.",
  },
  {
    title: "Performance & SEO Optimization",
    desc: "Boost your Core Web Vitals by 40%. Faster load times, better SEO rankings, and improved user experience. Bundle optimization, lazy loading, and render profiling included.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="mx-auto mb-14 max-w-2xl text-center"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-xs sm:text-sm font-medium text-pink-600">Services</p>
          <h2 className="mt-3 text-balance text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight bg-gradient-to-r from-pink-600 via-orange-600 to-yellow-500 bg-clip-text text-transparent">
            Complete MERN Stack & AI Solutions
          </h2>
          <p className="mt-4 sm:mt-5 text-pretty text-sm sm:text-base text-gray-600">
            From startups to enterprises—I deliver production-ready applications with AI integration, scalable architecture, and measurable ROI. Your trusted MERN full stack partner.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="rounded-2xl border border-pink-200 bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50 p-4 sm:p-5 md:p-6 lg:p-7 transition hover:border-pink-300"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.06 }}
              whileHover={{ y: -6 }}
            >
              <h3 className="text-base sm:text-lg font-semibold text-pink-900">{s.title}</h3>
              <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed text-pink-700">{s.desc}</p>

              <div className="mt-4 sm:mt-6 h-px w-full bg-pink-200" />
              <p className="mt-4 sm:mt-5 text-[10px] sm:text-xs font-medium uppercase tracking-wide text-pink-600">
                Delivery: 2–6 weeks based on scope
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}