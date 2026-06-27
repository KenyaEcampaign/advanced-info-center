import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { supabase } from "../../supabase/client";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
const { user, profile } = useAuth();
async function handleLogout() {
  await supabase.auth.signOut();
  window.location.href = "/";
}
  return (
    <>
      {/* Top Contact Bar */}

    <div className="bg-yellow-500 text-black text-sm font-semibold">
  <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between flex-wrap">

    <span>
      📞 0721 830 380
    </span>

    <span>
      📧 asanyotechservices@gmail.com
    </span>

    <span>
      📍 Embu, Kenya
    </span>

  </div>
</div>

      {/* Main Navbar */}

      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex justify-between items-center h-20">

            <Link
              to="/"
              className="flex flex-col"
            >
              <span className="font-extrabold text-2xl text-blue-700">
                ADVANCED INFO CENTER
              </span>

              <span className="text-xs text-gray-500">
                Powered by ASANYO TECH SERVICES
              </span>
            </Link>

            <nav className="hidden lg:flex gap-8 font-medium text-slate-800">

  <Link to="/">Home</Link>

  <Link to="/services">Services</Link>

  {!user && (
    <>
      <Link to="/study-abroad">Study Abroad</Link>
      <Link to="/blog">News</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </>
  )}

  {user && (
    <>
      <Link to="/request-service">
        Request Service
      </Link>

      <Link to="/my-requests">
        My Requests
      </Link>

      <Link to="/dashboard">
        Dashboard
      </Link>
    </>
  )}

</nav>

            <div className="hidden lg:flex gap-3">

  {!user ? (
    <>
      <a
        href="https://wa.me/254721830380"
        target="_blank"
        rel="noreferrer"
        className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg font-semibold"
      >
        WhatsApp
      </a>

      <Link
        to="/login"
        className="border border-blue-700 text-blue-700 px-5 py-3 rounded-lg"
      >
        Login
      </Link>

      <Link
        to="/register"
        className="bg-blue-700 text-white px-5 py-3 rounded-lg"
      >
        Register
      </Link>
    </>
  ) : (
    <button
      onClick={handleLogout}
      className="bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-lg"
    >
      Logout
    </button>
  )}

</div>

            <button
              className="lg:hidden text-3xl text-blue-700"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>

          </div>

          {menuOpen && (
            <div className="flex flex-col gap-4">

  <Link
  to="/"
  onClick={() => setMenuOpen(false)}
>
  Home
</Link>
  <Link
  to="/services"
  onClick={() => setMenuOpen(false)}
>
  Services
</Link>

  {!user && (
    <>
      <Link to="/study-abroad" onClick={() => setMenuOpen(false)}>Study Abroad</Link>
      <Link to="/blog" onClick={() => setMenuOpen(false)}>News</Link>
      <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
      <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

      <Link
        to="/login"
        className="bg-slate-700 text-white p-3 rounded"
      >
        Login
      </Link>

      <Link
        to="/register"
        className="bg-blue-700 text-white p-3 rounded"
      >
        Register
      </Link>
    </>
  )}

  {user && (
    <>
      <Link to="/request-service" onClick={() => setMenuOpen(false)}>
        Request Service
      </Link>

      <Link to="/my-requests" onClick={() => setMenuOpen(false)}>
        My Requests
      </Link>

      <Link to="/dashboard" onClick={() => setMenuOpen(false)}>
        Dashboard
      </Link>

      <button
        onClick={handleLogout}
        className="bg-red-600 text-white p-3 rounded"
      >
        Logout
      </button>
    </>
  )}

</div>

          )}

        </div>
      </header>
    </>
  );
}