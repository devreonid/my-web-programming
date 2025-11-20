import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
      document.title = "Terserah";
    }, []);
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <motion.main
        className="flex-1 flex flex-col items-center justify-center text-center px-6 md:px-32 pt-24 pb-24"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Title */}
        <motion.h1
          className="font-extrabold text-4xl md:text-6xl bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          WELCOME TO HOMEPAGE
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mt-5 text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          THIS IS THE HOMEPAGE, where you can start exploring the content of this website.
        </motion.p>

        {/* Button */}
        <motion.div
          className="mt-8 flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <Link
            to="/quiz1/profile"
            className="px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-medium shadow-lg transition-all duration-300"
          >
            Get Started
          </Link>
          <Link
            to="/quiz1/tourist-place"
            className="px-6 py-3 rounded-xl border border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-900 text-indigo-500 dark:text-indigo-300 font-medium transition-all duration-300"
          >
            Explore More
          </Link>
          
        </motion.div>
      </motion.main>

      {/* Footer */}
      <Footer />
    </div>
  );
}