import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Slideshow from "../../components/slideshow";
import { motion } from "framer-motion";

export default function TouristPlace() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <motion.main
        className="px-6 md:px-32 pt-24 pb-24 flex-grow"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Header */}
        <div>
          <Link to="/quiz1" className="text-gray-500 font-light italic">
            Back to Homepage
          </Link>
          <h2 className="font-bold text-3xl mt-2">TOURIST PLACE</h2>
        </div>

        {/* Slideshow */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          <Slideshow />
        </motion.div>
      </motion.main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
