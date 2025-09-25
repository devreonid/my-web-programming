import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  { image: "/images/pustaka.webp", 
    title: "Soeman HS Library",
    rating: " 4.5 / 5",
    desc: 
      `Soeman H.S. Library is one of the national libraries and archives that holds the 
      status of a provincial library. It is the largest regional library in Indonesia. 
      The Soeman H.S. Library is located on Sudirman Street, Pekanbaru City.`,
    address: `Jl. Jend. Sudirman No.462, Jadirejo, Kec. Sukajadi, Kota Pekanbaru, Riau 28126`,
    website: `https://id.wikipedia.org/wiki/Perpustakaan_Soeman_H.S.`,
    link: `https://maps.app.goo.gl/a5KqVsxHi9hBVHGH6`},
  { image: "/images/kaca-mayang.webp", 
    title: "Kaca Mayang Park",
    rating: " 4.3 / 5",
    desc: 
      `Putri Kaca Mayang Park is located in the heart of Pekanbaru, making it very easy to reach. Surrounded by main roads,
       the park is strategically positioned and allows visitors to access it from various 
       directions. This certainly provides convenience for the community to integrate a visit 
       to the park with their daily activities. To reach the park, visitors can use various 
       modes of transportation, including public transport. In addition, the park also offers 
       a spacious and comfortable parking area for private vehicle users, ensuring optimal 
       accessibility for all visitors.`,
    address: `Jl. Jend. Sudirman No.474, Jadirejo, Kec. Sukajadi, Kota Pekanbaru, Riau 28121`,
    website: `https://www.discoverasr.com/id/destinations/indonesia/pekanbaru/rth-putri-kaca-mayang-taman-hijau-di-tengah-kota-pekanbaru`,
    link: `https://maps.app.goo.gl/dHj7PKNR5kQTYb6t5`},
  { image: "/images/asia-heritage.webp", 
    title: "Asia Heritage", 
    rating: " 4.3 / 5",
    desc: 
      `What does it feel like to explore even just a small part of the world? 
      For a bit of fun and entertainment, you can travel around Asia in Pekanbaru, Riau. 
      Asia Heritage in Pekanbaru is a tourist attraction with a unique and fascinating 
      concept. Here, you can experience the sensation of being in four countries all in 
      one place: Indonesia, Korea, Japan, and China.`,
    address: `Jl. Yos Sudarso No.KM.12, RW.05, Muara Fajar, Kec. Rumbai, Kota Pekanbaru, Riau 28265`,
    website: `https://smarttourism.pekanbaru.go.id/p/destinasi/asia-heritage/keliling-4-negara-di-asia-heritage-pekanbaru`,
    link: `https://maps.app.goo.gl/S28Yb3dPvnKC4tVt5`},
];

export default function Slideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((p) => (p + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="grid lg:grid-cols-2 gap-10 mt-10">
      {/* group gambar utama & selector */}
      <div className="w-full max-w-4xl">
        {/* Gambar utama */}
        <div className="relative overflow-hidden rounded-2xl h-80">
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={slides[current].image}
              alt={slides[current].title}
              className="absolute inset-0 aspect-[4/3] w-full h-full object-cover"
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>

        {/* Selector */}
        <div className="mt-6 grid grid-cols-3 gap-6 place-items-center w-full">
          {slides.map((s, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-xl overflow-hidden box-border 
                          ring-2 ${i === current ? "ring-indigo-500" : "ring-transparent"}
                          ring-offset-2 ring-offset-neutral-800 focus:outline-none`}
              aria-label={`Pilih slide ${i + 1}`}
            >
              <img
                src={s.image}
                alt={s.title}
                className="w-32 h-20 object-cover select-none pointer-events-none"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Deskripsi */}
      <div className="grid-cols-1 break-words text-justify">
        <h2 className="font-bold text-3xl">{slides[current].title}</h2>
        <p className="font-medium mt-3">
          <span className="icon-[solar--star-bold]"></span>{slides[current].rating}
        </p>
        <p className="mt-3">{slides[current].desc}</p>
        <a href={slides[current].website}
           target="_blank" rel="noopener noreferrer" 
           className="font-medium rounded-lg border 
                    border-indigo-500 mt-5 mb-5 p-2 inline-block 
                    hover:bg-indigo-50 dark:hover:bg-indigo-900 
                    text-indigo-500 dark:text-indigo-300
                    transition-all duration-300">
          More Details <span class="icon-[solar--arrow-right-up-linear]"></span>
        </a>
        <p className="mt-5">
          Adress: <br />
          <a href={slides[current].link} target="_blank" rel="noopener noreferrer" className="font-light">{slides[current].address}</a>
        </p>
      </div>
    </div>
  );
}
