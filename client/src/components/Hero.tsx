import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-240px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-br from-purple-400/50 to-pink-400/30 blur-3xl" />
        <div className="absolute bottom-[-280px] right-[-220px] h-[520px] w-[520px] rounded-full bg-gradient-to-br from-yellow-400/50 to-orange-400/30 blur-3xl" />
        <div className="absolute bottom-[-260px] left-[-220px] h-[520px] w-[520px] rounded-full bg-gradient-to-br from-pink-400/50 to-rose-400/30 blur-3xl" />
      </div>

      <div className="mx-auto flex min-h-[80vh] sm:min-h-[86vh] max-w-7xl flex-col items-center justify-center px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:py-28 text-center">
        <motion.p
          className="mb-4 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-purple-300 bg-purple-100/80 px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs md:text-sm text-purple-700"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
          <span className="hidden xs:inline">AI-Enabled MERN Full Stack Developer | </span>
          <span className="inline xs:hidden">MERN Developer | </span>
          <span>Available for Contract</span>
        </motion.p>

        <motion.h1
          className="text-balance text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.1] sm:leading-[1.05] tracking-tight bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
        >
          AI-Powered MERN Full Stack Solutions for Modern Business
        </motion.h1>

        <motion.p
          className="mx-auto mt-4 sm:mt-6 max-w-2xl text-pretty text-sm sm:text-base md:text-lg lg:text-xl text-gray-600"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
        >
          Building scalable, production-ready applications with AI integration. From startups to enterprises—I deliver clean code, modern architecture, and measurable ROI that Indian businesses demand today.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.18 }}
        >
          <a
            href="#contact"
            className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 px-4 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-purple-500/30 transition hover:from-purple-400 hover:via-pink-400 hover:to-orange-400 sm:w-auto"
          >
            Hire Me
          </a>
          <a
            href="#projects"
            className="inline-flex w-full items-center justify-center rounded-xl border border-purple-300 bg-white/80 px-4 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-purple-700 transition hover:bg-purple-50 hover:border-purple-400 sm:w-auto"
          >
            View Work
          </a>
        </motion.div>

        <motion.div
          className="mt-10 sm:mt-14 grid w-full max-w-4xl grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-3"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.24 }}
        >
          <div className="rounded-2xl border border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50 px-4 py-3.5 sm:px-6 sm:py-5 text-left shadow-sm">
            <p className="text-xs sm:text-sm font-medium text-purple-900">AI-Integrated Development</p>
            <p className="mt-1 text-[10px] sm:text-sm text-purple-600">OpenAI, ChatGPT, AI chatbots, smart automation for business.</p>
          </div>
          <div className="rounded-2xl border border-pink-200 bg-gradient-to-br from-pink-50 to-orange-50 px-4 py-3.5 sm:px-6 sm:py-5 text-left shadow-sm">
            <p className="text-xs sm:text-sm font-medium text-pink-900">Enterprise MERN Stack</p>
            <p className="mt-1 text-[10px] sm:text-sm text-pink-600">React, Node.js, MongoDB, Express.js—scalable full stack solutions.</p>
          </div>
          <div className="rounded-2xl border border-orange-200 bg-gradient-to-br from-orange-50 to-yellow-50 px-4 py-3.5 sm:px-6 sm:py-5 text-left shadow-sm">
            <p className="text-xs sm:text-sm font-medium text-orange-900">Performance-First</p>
            <p className="mt-1 text-[10px] sm:text-sm text-orange-600">40% faster load times, SEO-optimized, Core Web Vitals focused.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}