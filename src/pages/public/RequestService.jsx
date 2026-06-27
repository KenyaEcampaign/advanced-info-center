
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { supabase } from "../../supabase/client";
import { useNavigate } from "react-router-dom";

export default function RequestService() {
  const navigate = useNavigate();
const { user } = useAuth();

const [service, setService] = useState("");

const [formData, setFormData] = useState({
  fullName: "",
  email: "",
  phone: "",
  description: "",
});

async function handleSubmit(e) {
  e.preventDefault();

  const { error } = await supabase
    .from("service_requests")
    .insert([
      {
        client_id: user.id,
        service_name: service,
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        description: formData.description,
        status: "Pending",
      },
    ]);

  if (error) {
    alert(error.message);
    return;
  }

  alert("Request submitted successfully");

  navigate("/my-requests");
}
  return (
    <>
      <section className="bg-gradient-to-r from-blue-950 to-slate-950 text-white py-20">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold">
            Request a Service
          </h1>

          <p className="mt-4 text-gray-300">
            Submit your request and track progress from your dashboard.
          </p>

        </div>

      </section>

      <section className="py-20 bg-slate-100">

        <div className="max-w-4xl mx-auto px-6">

          <div className="bg-white rounded-3xl shadow-lg p-10">

            <form
  onSubmit={handleSubmit}
  className="space-y-6"
>

              <input
  type="text"
  placeholder="Full Name"
  className="w-full border p-4 rounded-xl"
  value={formData.fullName}
  onChange={(e) =>
    setFormData({
      ...formData,
      fullName: e.target.value,
    })
  }
/>

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border p-4 rounded-xl"
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
              />
              

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border p-4 rounded-xl"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    phone: e.target.value,
                  })
                }
              />

              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full border p-4 rounded-xl"
              >
                <option>Select Service</option>
                <option>HELB Application</option>
                <option>KUCCPS Application</option>
                <option>Passport Application</option>
                <option>KRA Returns</option>
                <option>SHA Services</option>
                <option>Website Development</option>
                <option>Study Abroad</option>
              </select>

              <textarea
                rows="5"
                placeholder="Describe your request"
                className="w-full border p-4 rounded-xl"
                value={formData.description}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    description: e.target.value,
                  })
                }
              />

              <input
                type="file"
                className="w-full border p-4 rounded-xl"
              />

              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold"
              >
                Submit Request
              </button>

            </form>

          </div>

        </div>

      </section>
    </>
  );
}