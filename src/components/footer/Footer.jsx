import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          <div>
            <h2 className="text-2xl font-bold text-blue-400">
              Advanced Info Center Cyber
            </h2>

            <p className="mt-4 text-gray-300">
              Your trusted digital service center for
              government applications, education services,
              study abroad opportunities, technology solutions,
              cyber services and business support.
            </p>

            <p className="mt-4 text-sm text-blue-300">
              Powered by ASANYO TECH SERVICES
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">
              Popular Services
            </h3>

            <ul className="space-y-2 text-gray-300">

              <li>HELB Applications</li>
              <li>KUCCPS Applications</li>
              <li>KRA Services</li>
              <li>Passport Applications</li>
              <li>SHA Services</li>
              <li>NSSF Services</li>
              <li>Website Development</li>

            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-300">

              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/study-abroad">Study Abroad</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>

            </ul>
          </div>

          <div>

            <h3 className="font-bold mb-4">
              Contact Information
            </h3>

            <div className="space-y-3 text-gray-300">

              <p>📞 0721830380</p>

              <p>📧 asanyotechservices@gmail.com</p>

              <p>📍 Embu, Kenya</p>

              <p>🕒 Mon - Sat: 8:00 AM - 7:00 PM</p>

            </div>

            <a
              href="https://wa.me/254721830380"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-5 bg-green-600 px-5 py-3 rounded-lg font-semibold"
            >
              Chat on WhatsApp
            </a>

          </div>

        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between">

          <p className="text-gray-400">
            © {new Date().getFullYear()} ASANYO TECH SERVICES.
            All Rights Reserved.
          </p>

          <p className="text-gray-500">
            Advanced Info Center Cyber Platform
          </p>

        </div>

      </div>

    </footer>
  );
}