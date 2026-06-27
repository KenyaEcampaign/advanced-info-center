import { Link } from "react-router-dom";

export default function StudyAbroad() {
  const countries = [
    "Canada",
    "United Kingdom",
    "USA",
    "Australia",
    "Germany",
    "Finland",
    "Ireland",
    "France",
  ];

  return (
    <>
      <section className="bg-gradient-to-r from-blue-950 to-slate-950 text-white py-24">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-6xl font-bold">
            Study Abroad
          </h1>

          <p className="mt-6 text-xl text-gray-300">
            Begin your international education journey with us.
          </p>

        </div>

      </section>

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-8">

            {countries.map((country) => (
              <div
                key={country}
                className="bg-white shadow-lg rounded-3xl p-8 text-center hover:-translate-y-2 transition"
              >
                <h3 className="text-2xl font-bold">
                  {country}
                </h3>

                <p className="mt-4 text-gray-600">
                  University applications and visa guidance.
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

      <section className="bg-blue-950 text-white py-20">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-5xl font-bold">
            Ready to Study Abroad?
          </h2>

          <p className="mt-6 text-gray-300">
            Let us help you secure admission and process applications.
          </p>

          <Link
            to="/request-service"
            className="inline-block mt-8 bg-yellow-500 text-black px-8 py-4 rounded-xl font-bold"
          >
            Start Application
          </Link>

        </div>

      </section>
    </>
  );
}