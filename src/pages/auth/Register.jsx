import { useState } from "react";
import { supabase } from "../../supabase/client";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    const { data, error } =
      await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });

    if (error) {
      alert(error.message);
      setLoading(false);
      return;
    }

    await supabase.from("profiles").insert([
      {
        id: data.user.id,
        full_name: formData.fullName,
        phone: formData.phone,
        role: "client",
      },
    ]);

    alert("Registration successful. Please login.");

await supabase.auth.signOut();

navigate("/login");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md"
      >
        <h1 className="text-3xl font-bold mb-6">
          Create Account
        </h1>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full border p-3 rounded mb-4"
          required
          onChange={(e) =>
            setFormData({
              ...formData,
              fullName: e.target.value,
            })
          }
        />

        <input
          type="text"
          placeholder="Phone Number"
          className="w-full border p-3 rounded mb-4"
          required
          onChange={(e) =>
            setFormData({
              ...formData,
              phone: e.target.value,
            })
          }
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded mb-4"
          required
          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value,
            })
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded mb-4"
          required
          onChange={(e) =>
            setFormData({
              ...formData,
              password: e.target.value,
            })
          }
        />

        <button
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded"
        >
          {loading
            ? "Creating Account..."
            : "Register"}
        </button>

        <p className="text-center mt-4">
          Already have an account?
          <Link
            to="/login"
            className="text-blue-600 ml-2"
          >
            Login
          </Link>
        </p>
      </form>

    </div>
  );
}