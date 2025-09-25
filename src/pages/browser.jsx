import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");
  const tasks = [
    { name: "QUIZ 1", path: "/quiz1" },
  ];

  useEffect(() => {
    document.title = "Task Browser";
  }, []);

  const filtered = tasks.filter((t) =>
    t.name.toLowerCase().includes(search.toLowerCase())
  );

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-neutral-900 text-white">
      {/* Header */}
      <motion.h1
        className="text-center font-black text-2xl md:text-3xl mt-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        RAZIQ DANISH - TASK BROWSER
      </motion.h1>

      {/* Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-10">
        <motion.div
          className="bg-neutral-950 rounded-2xl shadow-lg w-full max-w-lg h-[500px] flex flex-col p-6"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Search box */}
          <motion.input
            type="text"
            placeholder="Search task..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="mb-4 p-2 rounded-lg bg-neutral-800 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          />

          {/* List tugas */}
          <motion.div
            className="flex-1 overflow-y-auto space-y-3 pr-1"
            variants={listVariants}
            initial="hidden"
            animate="visible"
          >
            {filtered.map((task, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Link
                  to={task.path}
                  className="block bg-neutral-800 hover:bg-neutral-700 transition-all duration-300 rounded-lg p-4 font-medium text-center"
                >
                  {task.name}
                </Link>
              </motion.div>
            ))}
            {filtered.length === 0 && (
              <motion.p
                className="text-center text-neutral-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                No task found
              </motion.p>
            )}
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}