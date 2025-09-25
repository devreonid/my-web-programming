import { useState } from "react";
import { Link } from "react-router-dom"; // pakai react-router-dom biar SPA

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between fixed w-full bg-indigo-500 text-white z-50">
      <div className="text-xl font-bold">
        <Link to="/quiz1" className="leading-normal p-5">Terserah</Link>
      </div>

      {/* Menu Desktop */}
      <div className="hidden md:flex">
        <Link to="/quiz1/profile" className="hover:text-gray-200 leading-10 p-2.5">Profile</Link>
        <Link to="/quiz1/hometown" className="hover:text-gray-200 leading-10 p-2.5">Hometown</Link>
        <Link to="/quiz1/local-food" className="hover:text-gray-200 leading-10 p-2.5">Local Food</Link>
        <Link to="/quiz1/tourist-place" className="hover:text-gray-200 leading-10 p-2.5">Tourist Place</Link>
      </div>

      {/* Tombol Mobile */}
      <button
        className="md:hidden focus:outline-none p-5"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full leading-loose bg-indigo-600 text-white flex flex-col items-center py-4 space-y-6 z-40">
          <Link to="/" className="hover:text-gray-200 w-full text-center">Home</Link>
          <Link to="/quiz1/profile" className="hover:text-gray-200 w-full text-center">Profile</Link>
          <Link to="/quiz1/hometown" className="hover:text-gray-200 w-full text-center">Hometown</Link>
          <Link to="/quiz1/local-food" className="hover:text-gray-200 w-full text-center">Local Food</Link>
          <Link to="/quiz1/tourist-place" className="hover:text-gray-200 w-full text-center">Tourist Place</Link>
        </div>
      )}
    </nav>
  );
}