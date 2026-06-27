export default function Contact() {
  return (
    <>
      <section className="bg-gradient-to-r from-slate-950 to-blue-950 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-6xl font-bold">
            Contact Us
          </h1>

          <p className="mt-6 text-xl text-gray-300">
            We're ready to assist you with all digital services.
          </p>

        </div>
      </section>

      <section className="py-24 bg-slate-100">

        <div className="max-w-6xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-12">

            <div className="bg-white p-10 rounded-3xl shadow-lg">

              <h2 className="text-3xl font-bold mb-8">
                Contact Information
              </h2>

              <div className="space-y-6">

                <div>
                  <h3 className="font-bold">Phone</h3>
                  <p>0721 830 380</p>
                </div>

                <div>
                  <h3 className="font-bold">Email</h3>
                  <p>asanyotechservices@gmail.com</p>
                </div>

                <div>
                  <h3 className="font-bold">Location</h3>
                  <p>Embu, Kenya</p>
                </div>

                <div>
                  <h3 className="font-bold">Business Hours</h3>
                  <p>Monday - Saturday</p>
                  <p>8:00 AM - 7:00 PM</p>
                </div>

              </div>

            </div>

            <div className="bg-white p-10 rounded-3xl shadow-lg">

              <h2 className="text-3xl font-bold mb-8">
                Send a Message
              </h2>

              <form className="space-y-5">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border p-4 rounded-xl"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border p-4 rounded-xl"
                />

                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className="w-full border p-4 rounded-xl"
                />

                <button
                  className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold"
                >
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}