import BoluKemojoImg from "../../assets/bolukemojo.webp";
import RotiJalaImg from "../../assets/rotijala.webp";
import MieSaguImg from "../../assets/miesagu.webp";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { motion } from "framer-motion";

export default function LocalFood() {
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
        <Link to="/quiz1" className="text-gray-500 font-light italic">
          Back to Homepage
        </Link>
        <h2 className="font-bold text-3xl mt-2">LOCAL FOOD</h2>

        <div className="grid grid-cols-1 gap-12 mt-10">
          {/* Bolu Kemojo */}
          <motion.div
            className="flex flex-col md:flex-row gap-6 items-start"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src={BoluKemojoImg}
              alt="bolukemojo"
              className="rounded-2xl w-full md:w-80 aspect-[4/3] object-cover"
            />
            <div className="min-w-0">
              <h3 className="text-2xl md:text-3xl font-bold">Bolu Kemojo</h3>
              <p className="font-medium mt-3 flex items-center gap-2">
                <span className="icon-[solar--stars-minimalistic-bold]"></span> Must Try
              </p>
              <p className="break-words text-justify mt-3 text-sm md:text-base leading-relaxed">
                Bolu Kemojo is a traditional Malay cake, especially from Riau, well-known for 
                its shape resembling a frangipani flower and its dense texture. Made from flour, 
                coconut milk, eggs, sugar, and a blend of suji leaves and pandan extract for its 
                fragrance and green color, this cake is a culinary icon often served at traditional 
                ceremonies, festive celebrations, and is popular as a souvenir.
              </p>
            </div>
          </motion.div>

          {/* Roti Jala */}
          <motion.div
            className="flex flex-col md:flex-row gap-6 items-start"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <img
              src={RotiJalaImg}
              alt="rotijala"
              className="rounded-2xl w-full md:w-80 aspect-[4/3] object-cover"
            />
            <div className="min-w-0">
              <h3 className="text-2xl md:text-3xl font-bold">Roti Jala</h3>
              <p className="font-medium mt-3 flex items-center gap-2">
                <span className="icon-[solar--star-bold]"></span> 4.5 / 5
              </p>
              <p className="break-words text-justify mt-3 text-sm md:text-base leading-relaxed">
                Roti Jala is a traditional dish of the Malay community in Johor, Peninsular Malaysia, 
                North Sumatra, and the Riau Islands. This dish is also commonly found in Riau. 
                It is usually served with Malay curry, while in Deli, North Sumatra, it is well-known 
                for being paired with mutton curry and pineapple pickle.
              </p>
            </div>
          </motion.div>

          {/* Mi Sagu */}
          <motion.div
            className="flex flex-col md:flex-row gap-6 items-start"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <img
              src={MieSaguImg}
              alt="miesagu"
              className="rounded-2xl w-full md:w-80 aspect-[4/3] object-cover"
            />
            <div className="min-w-0">
              <h3 className="text-2xl md:text-3xl font-bold">Mi Sagu</h3>
              <p className="font-medium mt-3 flex items-center gap-2">
                <span className="icon-[solar--star-bold]"></span> 4.7 / 5
              </p>
              <p className="break-words text-justify mt-3 text-sm md:text-base leading-relaxed">
                Mi Sagu is a type of noodle made from sago, originating from Bengkalis and the Meranti Islands 
                in Riau. Unlike noodles made from wheat flour, sago noodles are thicker in size and more 
                transparent in appearance.
              </p>
            </div>
          </motion.div>

          {/* Extra Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p className="break-words text-justify text-sm md:text-base leading-relaxed">
              After enjoying a variety of Pekanbaru’s delicious traditional cuisines, it’s 
              time to explore the natural beauty and other exciting attractions this city 
              has to offer.
            </p>
            <Link
              to="/quiz1/tourist-place"
              className="flex justify-end mt-14 text-white hover:text-gray-400 font-medium transition-all duration-300"
            >
              Go to Tourist Place <span class="icon-[solar--arrow-right-up-linear]"></span>
            </Link>
          </motion.div>
        </div>
      </motion.main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
