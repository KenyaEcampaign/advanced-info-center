import { Link } from "react-router-dom";

export default function ClientDashboard() {
  return (
    <div className="min-h-screen bg-slate-100 p-6">

      <h1 className="text-3xl font-bold mb-6">
        Client Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-bold text-lg">
            Request Service
          </h2>

          <p className="mt-2 text-gray-600">
            Submit a new service request.
          </p>

          <Link
            to="/request-service"
            className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded"
          >
            Request Now
          </Link>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-bold text-lg">
            My Requests
          </h2>

          <p className="mt-2 text-gray-600">
            Track your submitted requests.
          </p>

          <Link
            to="/my-requests"
            className="inline-block mt-4 bg-green-600 text-white px-4 py-2 rounded"
          >
            View Requests
          </Link>
        </div>

      </div>

    </div>
  );
}