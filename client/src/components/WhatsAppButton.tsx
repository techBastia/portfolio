import { motion } from "framer-motion";

type WhatsAppButtonProps = {
  phoneE164?: string;
  message?: string;
};

export default function WhatsAppButton({
  phoneE164 = "+919999999999",
  message = "Hi Ranjan — I’d like to discuss a project.",
}: WhatsAppButtonProps) {
  const href = `https://wa.me/${phoneE164.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 inline-flex items-center gap-2 sm:gap-3 rounded-full border border-purple-400 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 px-3 py-2 sm:px-4 sm:py-3 text-[10px] sm:text-xs md:text-sm font-semibold text-white shadow-lg shadow-purple-500/30 backdrop-blur transition hover:from-purple-400 hover:via-pink-400 hover:to-orange-400 focus:outline-none focus:ring-2 focus:ring-purple-400/50"
      initial={{ opacity: 0, y: 12, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="relative grid h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 place-items-center rounded-full bg-white text-black">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          className="sm:w-4 sm:h-4 md:w-[18px] md:h-[18px]"
        >
          <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.32-1.66a11.84 11.84 0 0 0 5.74 1.46h.01c6.56 0 11.9-5.34 11.9-11.9a11.82 11.82 0 0 0-3.45-8.42ZM12.07 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.75.99 1-3.65-.23-.38a9.86 9.86 0 0 1-1.52-5.27c0-5.46 4.45-9.9 9.91-9.9 2.65 0 5.15 1.03 7.03 2.9a9.86 9.86 0 0 1 2.9 7.02c0 5.46-4.45 9.9-9.93 9.9Zm5.74-7.85c-.31-.16-1.86-.92-2.15-1.02-.29-.11-.5-.16-.71.16-.21.31-.82 1.02-1 1.23-.19.21-.37.23-.68.08-.31-.16-1.32-.49-2.52-1.56-.93-.83-1.56-1.86-1.75-2.17-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.55.16-.19.21-.31.31-.52.11-.21.06-.39-.03-.55-.08-.16-.71-1.71-.98-2.34-.26-.63-.52-.55-.71-.55h-.61c-.21 0-.55.08-.84.39-.29.31-1.1 1.07-1.1 2.6 0 1.53 1.13 3 1.29 3.21.16.21 2.22 3.39 5.38 4.75.75.32 1.34.51 1.79.65.75.24 1.43.21 1.97.13.6-.09 1.86-.76 2.12-1.49.26-.73.26-1.36.18-1.49-.08-.13-.29-.21-.6-.37Z" />
        </svg>
      </span>
      <span className="hidden sm:inline">WhatsApp</span>
      <span className="sr-only">Open WhatsApp chat</span>
    </motion.a>
  );
}
