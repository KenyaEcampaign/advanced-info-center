import { Link } from "react-router-dom";

export default function Home() {
  const services = [
    "HELB Applications",
    "KUCCPS Applications",
    "Passport Processing",
    "KRA Services",
    "SHA / NHIF Services",
    "Website Development",
  ];

  const categories = [
    {
      title: "Government Services",
      count: "12+ Services",
      color: "bg-blue-600",
    },
    {
      title: "Education Services",
      count: "10+ Services",
      color: "bg-green-600",
    },
    {
      title: "Business Services",
      count: "8+ Services",
      color: "bg-purple-600",
    },
    {
      title: "Technology Services",
      count: "8+ Services",
      color: "bg-orange-500",
    },
    {
      title: "Study Abroad",
      count: "8+ Services",
      color: "bg-indigo-600",
    },
    {
      title: "Cyber Services",
      count: "7+ Services",
      color: "bg-teal-600",
    },
  ];

  return (
    <>
      {/* HERO */}

<section className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white">

  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3')] bg-cover bg-center opacity-10"></div>

  <div className="relative max-w-7xl mx-auto px-6 py-28">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      <div>

        <div className="inline-flex items-center bg-blue-900/40 border border-blue-500/30 px-5 py-2 rounded-full mb-6">

          <span className="text-blue-300 text-sm">
            🇰🇪 Trusted Digital Services Partner
          </span>

        </div>

        <h1 className="text-6xl font-extrabold leading-tight">

          Advanced
          <span className="text-yellow-400">
            {" "}Info Center
          </span>

        </h1>

        <p className="text-2xl mt-4 text-blue-300 font-semibold">
          Powered by ASANYO TECH SERVICES
        </p>

        <p className="text-lg mt-8 text-gray-300 leading-relaxed">

          Fast, reliable and professional assistance
          for HELB, KUCCPS, Passport Applications,
          KRA Returns, SHA Services, Website Development,
          Study Abroad Applications and many more.

        </p>

        <div className="flex flex-wrap gap-4 mt-10">

          <Link
            to="/services"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 rounded-xl transition"
          >
            Explore Services
          </Link>

          <a
            href="https://wa.me/254792194894"
            target="_blank"
            rel="noreferrer"
            className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-xl font-bold transition"
          >
            WhatsApp Us
          </a>

<Link
  to="/blog"
  className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-xl font-bold"
>
  News & Updates
</Link>
        </div>

      </div>

      <div>

        <div className="backdrop-blur-lg bg-white/10 border border-white/10 rounded-3xl p-8 shadow-2xl">

          <h3 className="text-2xl font-bold mb-8 text-yellow-400">
            Popular Services
          </h3>

          <div className="grid grid-cols-2 gap-4">

            {services.map((service) => (

              <div
                key={service}
                className="bg-white/10 rounded-xl p-4 hover:bg-white/20 transition"
              >
                {service}
              </div>

            ))}

          </div>

        </div>

<div className="flex flex-wrap gap-4 mt-10">

  <Link
    to="/services"
    className="bg-yellow-400 text-slate-900 px-8 py-4 rounded-xl font-bold"
  >
    Explore Services
  </Link>

  <Link
    to="/blog"
    className="border-2 border-white px-8 py-4 rounded-xl font-bold"
  >
    News & Updates
  </Link>

  <Link
    to="/my-requests"
    className="bg-green-600 px-8 py-4 rounded-xl font-bold"
  >
    My Requests
  </Link>

</div>
      </div>

    </div>

  </div>


</section>

      {/* TRUST BAR */}

      <section className="bg-white -mt-8 relative z-10">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-4 bg-white shadow-xl rounded-2xl p-6">

            <div className="text-center">
              <h3 className="font-bold text-blue-600">
                100% Secure
              </h3>
              <p className="text-gray-500 text-sm">
                Data Protection
              </p>
            </div>

            <div className="text-center">
              <h3 className="font-bold text-green-600">
                Expert Team
              </h3>
              <p className="text-gray-500 text-sm">
                Trusted Professionals
              </p>
            </div>

            <div className="text-center">
              <h3 className="font-bold text-orange-500">
                Affordable
              </h3>
              <p className="text-gray-500 text-sm">
                Best Value
              </p>
            </div>

            <div className="text-center">
              <h3 className="font-bold text-teal-600">
                1000+
              </h3>
              <p className="text-gray-500 text-sm">
                Happy Clients
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* STATS */}

      <div className="grid md:grid-cols-4 gap-8">

  {[
    ["5000+", "Applications Processed"],
    ["20+", "Digital Services"],
    ["100%", "Customer Support"],
    ["24/7", "Online Availability"],
  ].map((item) => (

    <div
      key={item[0]}
      className="bg-white rounded-2xl shadow-lg p-8 text-center"
    >
      <h2 className="text-5xl font-bold text-blue-600">
        {item[0]}
      </h2>

      <p className="mt-3 text-gray-600">
        {item[1]}
      </p>
    </div>

  ))}

</div>

      {/* SERVICE CATEGORIES */}

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center">
            Our Service Categories
          </h2>

          <p className="text-center text-gray-500 mt-3">
            Comprehensive solutions for personal, business and educational needs.
          </p>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">

            {categories.map((cat) => (
              <div
                key={cat.title}
                className="bg-white rounded-2xl shadow-lg p-6 text-center hover:-translate-y-2 transition"
              >
                <h3 className="font-bold text-lg mb-3">
                  {cat.title}
                </h3>

                <p className="text-gray-500 mb-5">
                  {cat.count}
                </p>

                <button
                  className={`${cat.color} text-white px-4 py-2 rounded-lg`}
                >
                  View Services
                </button>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* WHY CHOOSE US */}

      <section className="py-24 bg-slate-950 text-white">

  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-5xl font-bold text-center">
      Why Choose Us
    </h2>

    <div className="grid md:grid-cols-3 gap-8 mt-16">

      <div className="bg-slate-900 p-8 rounded-2xl">
        <h3 className="text-xl font-bold text-yellow-400">
          Fast Service
        </h3>

        <p className="mt-4 text-gray-300">
          Quick processing and timely updates.
        </p>
      </div>

      <div className="bg-slate-900 p-8 rounded-2xl">
        <h3 className="text-xl font-bold text-yellow-400">
          Professional Team
        </h3>

        <p className="mt-4 text-gray-300">
          Experienced staff handling your applications.
        </p>
      </div>

      <div className="bg-slate-900 p-8 rounded-2xl">
        <h3 className="text-xl font-bold text-yellow-400">
          Affordable Pricing
        </h3>

        <p className="mt-4 text-gray-300">
          Quality services at competitive rates.
        </p>
      </div>

    </div>

  </div>

</section>

      {/* HOW IT WORKS */}

      <section className="py-20 bg-slate-50">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center">
            How It Works
          </h2>

          <div className="grid md:grid-cols-4 gap-8 mt-12">

            {[
              "Choose Service",
              "Upload Documents",
              "Make Payment",
              "Receive Results",
            ].map((step, index) => (
              <div
                key={step}
                className="bg-white rounded-2xl shadow-lg p-8 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto font-bold text-xl">
                  {index + 1}
                </div>

                <h3 className="font-bold mt-5">
                  {step}
                </h3>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-blue-700 text-white py-20">

        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-5xl font-bold">
            Need Assistance?
          </h2>

          <p className="mt-4 text-xl">
            Our team is ready to help you.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">

            <a
              href="https://wa.me/254721830380"
              className="bg-green-600 px-8 py-4 rounded-xl font-bold"
            >
              WhatsApp
            </a>

            <a
              href="tel:0721830380"
              className="bg-white text-blue-700 px-8 py-4 rounded-xl font-bold"
            >
              Call Us
            </a>

          </div>

        </div>

      </section>
      <section className="py-20 bg-slate-100">
  <div className="max-w-7xl mx-auto px-6">

    <div className="flex justify-between items-center mb-10">
      <h2 className="text-4xl font-bold">
        Latest Updates
      </h2>

      <Link
        to="/blog"
        className="text-blue-600 font-bold"
      >
        View All →
      </Link>
    </div>

    <div className="grid md:grid-cols-3 gap-6">

      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="font-bold">
          HELB Loan Applications Open
        </h3>

        <p className="mt-3 text-gray-600">
          Check eligibility and apply through
          Advanced Info Center.
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="font-bold">
          KUCCPS Revision Portal Open
        </h3>

        <p className="mt-3 text-gray-600">
          Get assistance selecting courses.
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="font-bold">
          New Study Abroad Scholarships
        </h3>

        <p className="mt-3 text-gray-600">
          Canada, Germany and Finland
          opportunities available.
        </p>
      </div>

    </div>

  </div>
</section>
    </>
  );
}