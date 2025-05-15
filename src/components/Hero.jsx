import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-indigo-700 to-indigo-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg"
        >
          <span className="block text-4xl font-extrabold mb-4 text-teal-300">
            SoftSell
          </span>
          Turn Unused Software Into Cash 💸
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg md:text-xl mb-10 text-indigo-200 max-w-xl mx-auto"
        >
          SoftSell helps you sell your unused software licenses in 3 simple steps.
        </motion.p>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-teal-400 text-indigo-900 font-semibold px-8 py-3 rounded-md shadow-md hover:bg-teal-500 transition"
        >
          Sell My Licenses
        </motion.a>
      </div>
    </section>
  );
}
