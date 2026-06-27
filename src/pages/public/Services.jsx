import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      title: "HELB Applications",
      description:
        "Loan applications, subsequent applications and appeals.",
    },
    {
      title: "KUCCPS Applications",
      description:
        "Course selection, revision and placement assistance.",
    },
    {
      title: "Passport Applications",
      description:
        "New passport, renewal and tracking services.",
    },
    {
      title: "KRA Services",
      description:
        "Returns filing, PIN registration and tax compliance.",
    },
    {
      title: "SHA Services",
      description:
        "Registration and updates for healthcare services.",
    },
    {
      title: "NSSF Services",
      description:
        "Registration and member account assistance.",
    },
    {
      title: "Website Development",
      description:
        "Business websites, portals and e-commerce solutions.",
    },
    {
      title: "Graphic Design",
      description:
        "Posters, flyers, logos and branding materials.",
    },
    {
      title: "Study Abroad",
      description:
        "University applications and visa guidance.",
    },
    {
      title: "Online Applications",
      description:
        "Government and institutional online services.",
    },
    {
      title: "Printing Services",
      description:
        "Professional printing and document preparation.",
    },
    {
      title: "Cyber Services",
      description:
        "General cyber and internet related services.",
    },
  ];

  return (
    <>
      <section className="bg-gradient-to-r from-blue-950 to-slate-950 text-white py-24">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-6xl font-bold">
            Our Services
          </h1>

          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            We provide professional government,
            education, technology and online services
            for individuals, students and businesses.
          </p>

        </div>

      </section>

      <section className="py-24 bg-slate-100">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">

            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-2 transition duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
                  ✓
                </div>

                <h3 className="font-bold text-xl mt-5">
                  {service.title}
                </h3>

                <p className="text-gray-600 mt-3">
                  {service.description}
                </p>

                <Link
                  to="/request-service"
                  className="inline-block mt-5 text-blue-600 font-bold"
                >
                  Request Service →
                </Link>
              </div>
            ))}

          </div>

        </div>

      </section>

      <section className="bg-blue-950 text-white py-20">

        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-5xl font-bold">
            Need Assistance?
          </h2>

          <p className="mt-5 text-xl text-gray-300">
            Our team is ready to help you process
            applications and digital services quickly.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">

            <a
              href="https://wa.me/254792194894"
              target="_blank"
              rel="noreferrer"
              className="bg-green-600 px-8 py-4 rounded-xl font-bold"
            >
              WhatsApp Us
            </a>

            <Link
              to="/request-service"
              className="bg-yellow-500 text-black px-8 py-4 rounded-xl font-bold"
            >
              Request Service
            </Link>

          </div>

        </div>

      </section>
    </>
  );
}