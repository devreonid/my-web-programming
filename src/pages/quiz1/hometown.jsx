import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  exit: { opacity: 0, y: -40, transition: { duration: 0.5 } },
};

const sidebarVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const contentVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hometown() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Main Content */}
      <motion.main
        className="flex-1 px-4 sm:px-6 md:px-10 lg:px-24 xl:px-32 pt-24 pb-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Link to="/quiz1" className="text-gray-500 font-light italic">
          Back to Homepage
        </Link>
        <h2 className="font-bold text-3xl mt-2">HOMETOWN</h2>

        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 items-start gap-6 md:gap-10 mt-10 mb-10">
          {/* Sidebar Info */}
          <motion.div className="min-w-0" variants={sidebarVariants}>
            <img
              src="/images/hometown1.webp"
              alt="hometown1"
              className="w-full aspect-[16/9] object-cover rounded-2xl shadow-lg"
            />
            <div className="rounded-2xl bg-neutral-900 grid gap-2 mt-5 p-3 text-sm md:text-base w-full">
              <p>Province: Riau</p>
              <p>Postal Code: 28111-28299</p>
              <p>Height: 12 m (39 ft)</p>
              <p>Area Telephone Code: +62 761</p>
              <p>BPS Code: 1471</p>
              <p>SNI Code 7657:2023: PKU</p>
            </div>
          </motion.div>

          {/* Deskripsi */}
          <motion.div className="md:col-span-2 min-w-0" variants={contentVariants}>
            <h3 className="font-bold text-2xl md:text-3xl">PEKANBARU CITY</h3>
            <hr className="border-gray-600 mb-3 mt-2" />
            <p className="break-words text-justify leading-relaxed text-sm md:text-base">
              Pekanbaru is the capital and largest city of Riau Province, Indonesia. It is one of 
              the major economic centers on the island of Sumatra and is among the cities with high 
              levels of growth, migration, and urbanization. By the end of 2024, Pekanbaru had a 
              population of 1,167,599.
              <br /><br />
              Located on the banks of the Siak River, Pekanbaru was originally a small town with 
              a market known as Payung Sekaki or Senapelan. In the 18th century, the area that is 
              now Pekanbaru was within the sphere of influence of the Siak Sultanate, and Sultan 
              Abdul Jalil Alamuddin Syah (Marhum Pekan) is widely regarded as the founder of modern 
              Pekanbaru; the city’s anniversary is celebrated on June 23, 1784. Pekanbaru was 
              designated a “small town” in 1948 and a municipality in 1956, before being established 
              as the capital of Riau Province, replacing Tanjung Pinang, in 1959.
              <br /><br />
              The economy of Pekanbaru is supported by trade and petroleum mining. The city has an 
              international airport, an intercity and interprovincial bus terminal, as well as two 
              ports. Its population is cosmopolitan, influenced by its strategic location along the 
              East Cross of the Trans-Sumatra Highway. Several ethnic groups with significant 
              populations in the city include the Malays, Minangkabau, Ocu people, Javanese, Batak, 
              and Chinese.
            </p>
            <Link
              to="/quiz1/local-food"
              className="flex justify-end mt-14 text-white hover:text-gray-400 font-medium transition-all duration-300"
            >
              Go to Local Food <span class="icon-[solar--arrow-right-up-linear]"></span>
            </Link>
          </motion.div>
        </div>
        
      </motion.main>

      <Footer />
    </div>
  );
}
