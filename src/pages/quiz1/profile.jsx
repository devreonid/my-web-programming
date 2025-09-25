import ProfileImg from "../../assets/profile.webp";
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

export default function Profile() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <motion.main
        className="px-6 md:px-32 pt-24 pb-24 flex-grow"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Link to="/quiz1" className="text-gray-500 font-light italic">
          Back to Homepage
        </Link>
        <h2 className="font-bold text-3xl mt-2">MY PROFILE</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mt-10">
          {/* Sidebar Profile */}
          <motion.div
            className="flex flex-col items-center md:items-start text-center md:text-left"
            variants={sidebarVariants}
          >
            <img
              src={ProfileImg}
              alt="profile"
              className="rounded-full aspect-[1/1] w-40 md:w-48 object-cover shadow-lg"
            />
            <h3 className="text-2xl font-bold mt-5 break-words">
              RAZIQ DANISH SAFARAZ
            </h3>
            <p className="text-justify break-words mt-2">
              Computer Science student with interests in UAV robotics, systems programming, and game development. \
              Experienced in ROS, C/C++, C#, Unity, and Godot.
            </p>
            <div className="grid gap-2 md:gap-4 mt-5 break-words">
              <p>Phone: +62 823 8368 2006</p>
              <p>Email: raziqdanish777@gmail.com</p>
            </div>
            <div className="flex gap-4 mt-5 justify-center md:justify-start">
              <a href="https://github.com/devreonid" target="_blank" rel="noreferrer">
                <span className="icon-[fa7-brands--github] text-2xl"></span>
              </a>
              <a href="https://instagram.com/dnshrq" target="_blank" rel="noreferrer">
                <span className="icon-[fa7-brands--instagram] text-2xl"></span>
              </a>
            </div>
          </motion.div>

          {/* Deskripsi Panjang */}
          <motion.div
            className="md:col-span-2 mt-6 md:mt-0"
            variants={contentVariants}
          >
            <p className="text-justify break-words">
              I am a Computer Science student with a strong interest in UAV robotics 
              (particularly VTOL), software development, and game development. 
              Since high school, I have mastered the fundamentals of C++ and C# 
              programming and have continuously expanded my skills across various 
              languages and technologies.
              <br /><br />
              I am known as a diligent and explorative individual who always strives 
              to understand things down to their core logic. In addition, I actively 
              develop skills in low-level programming, algorithms, and interactive 
              system development, while keeping up with advancements in AI, 
              data security, and modern software engineering.
            </p>
            
            <Link
              to="/quiz1/hometown"
              className="flex justify-end mt-14 text-white hover:text-gray-400 font-medium transition-all duration-300"
            >
              Go to Hometown <span class="icon-[solar--arrow-right-up-linear]"></span>
            </Link>
          </motion.div>
        </div>
      </motion.main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
