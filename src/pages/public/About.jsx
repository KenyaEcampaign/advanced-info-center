export default function About() {
  return (
    <>
      <section className="bg-slate-950 text-white py-24">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-6xl font-bold">
            About Us
          </h1>

          <p className="text-xl mt-6 text-gray-300">
            Advanced Info Center Cyber is a trusted
            digital service center powered by
            ASANYO TECH SERVICES.
          </p>

        </div>

      </section>

      <section className="py-24">

        <div className="max-w-6xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-12">

            <div>
              <h2 className="text-4xl font-bold">
                Who We Are
              </h2>

              <p className="mt-6 text-gray-600 leading-8">
                We provide professional assistance
                for government services, educational
                applications, study abroad programs,
                web development and digital solutions.
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold">
                Our Mission
              </h2>

              <p className="mt-6 text-gray-600 leading-8">
                To simplify digital services and
                empower individuals, students and
                businesses through technology.
              </p>
            </div>

          </div>

        </div>

      </section>
    </>
  );
}