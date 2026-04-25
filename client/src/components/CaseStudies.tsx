import { projects } from "../data/projects";
import { motion } from "framer-motion";

export default function CaseStudies() {
  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="mx-auto mb-14 max-w-2xl text-center"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-xs sm:text-sm font-medium text-purple-600">Portfolio</p>
          <h2 className="mt-3 text-balance text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
            Enterprise & Freelance Projects
          </h2>
          <p className="mt-4 sm:mt-5 text-pretty text-sm sm:text-base text-gray-600">
            12+ projects delivered as a solo MERN full stack developer. From healthcare platforms to e-commerce—scalable solutions with measurable impact.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              className={`group relative rounded-2xl border border-purple-200 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 p-4 sm:p-5 md:p-6 lg:p-7 shadow-sm transition will-change-transform hover:-translate-y-1 hover:border-purple-300 ${p.link ? 'cursor-pointer' : ''}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              {...(p.link && { as: "a", href: p.link, target: "_blank", rel: "noreferrer" })}
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition group-hover:opacity-100">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-purple-100/50 to-pink-100/30" />
              </div>

              <h3 className="relative text-base sm:text-lg md:text-xl font-semibold text-purple-900">
                {p.title}
              </h3>
              <p className="relative mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed text-purple-700">
                {p.impact}
              </p>

              <div className="relative mt-4 sm:mt-6 flex flex-wrap gap-2">
                <div className="inline-flex items-center rounded-full border border-purple-300 bg-purple-100 px-2 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-medium text-purple-700">
                  {p.tech}
                </div>
                {p.link && (
                  <div className="inline-flex items-center rounded-full border border-pink-300 bg-pink-100 px-2 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-medium text-pink-700">
                    Live Demo
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}