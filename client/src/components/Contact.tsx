import { motion } from "framer-motion";

export default function Contact() {
  const whatsappHref = `https://wa.me/${"+917894999440".replace(/\D/g, "")}?text=${encodeURIComponent(
    "Hi Ranjan — I'd like to hire you for a project."
  )}`;

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="relative overflow-hidden rounded-2xl border border-orange-200 bg-gradient-to-br from-orange-50 via-yellow-50 to-pink-50 px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-10 lg:py-14 text-center shadow-sm"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-160px] top-[-160px] h-[360px] w-[360px] rounded-full bg-gradient-to-br from-orange-400/50 to-yellow-400/30 blur-3xl" />
            <div className="absolute bottom-[-180px] right-[-180px] h-[420px] w-[420px] rounded-full bg-gradient-to-br from-pink-400/50 to-purple-400/30 blur-3xl" />
          </div>

          <p className="relative text-xs sm:text-sm font-medium text-orange-600">Contact</p>
          <h2 className="relative mt-3 text-balance text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight bg-gradient-to-r from-orange-600 via-yellow-600 to-pink-500 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="relative mx-auto mt-4 sm:mt-5 max-w-2xl text-pretty text-sm sm:text-base text-gray-600">
            If you want a fast, premium-feeling web app that's easy to maintain and built to convert, let's talk. I'll reply within 24 hours.
          </p>

          <div className="relative mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 via-yellow-500 to-pink-500 px-4 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:from-orange-400 hover:via-yellow-400 hover:to-pink-400 sm:w-auto"
            >
              Start a WhatsApp Chat
            </a>
            <a
              href="mailto:techbastia17@gmail.com?subject=Project%20Inquiry"
              className="inline-flex w-full items-center justify-center rounded-xl border border-orange-300 bg-white/80 px-4 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-orange-700 transition hover:bg-orange-50 hover:border-orange-400 sm:w-auto"
            >
              Email Me
            </a>
          </div>

          <p className="relative mt-5 sm:mt-7 text-[10px] sm:text-xs text-gray-500">
            Prefer async? Send scope + timeline + budget and I'll respond with next steps.
          </p>
        </motion.div>
      </div>
    </section>
  );
}