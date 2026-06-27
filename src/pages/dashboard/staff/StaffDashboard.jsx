import { useEffect, useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { supabase } from "../../../supabase/client";

export default function StaffDashboard() {
  const { user } = useAuth();

  const [assigned, setAssigned] = useState(0);
  const [progress, setProgress] = useState(0);
  const [completed, setCompleted] = useState(0);
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    if (user) {
      loadRequests();
    }
  }, [user]);

  async function loadRequests() {
    const { data, error } = await supabase
      .from("service_requests")
      .select("*")
      .eq("assigned_staff", user.id)
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
      return;
    }

    setRequests(data || []);

    setAssigned(data?.length || 0);

    setProgress(
      data?.filter(
        (r) => r.status === "In Progress"
      ).length || 0
    );

    setCompleted(
      data?.filter(
        (r) => r.status === "Completed"
      ).length || 0
    );
  }

  async function updateStatus(requestId, status) {
    const { error } = await supabase
      .from("service_requests")
      .update({ status })
      .eq("id", requestId);

    if (error) {
      alert(error.message);
      return;
    }

    loadRequests();
  }

  return (
    <div className="min-h-screen bg-slate-100 p-6">

      <h1 className="text-3xl font-bold mb-6">
        Staff Dashboard
      </h1>

      {/* Statistics */}

      <div className="grid md:grid-cols-3 gap-6 mb-8">

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-bold">
            Assigned Requests
          </h2>

          <p className="text-4xl font-bold text-blue-600 mt-4">
            {assigned}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-bold">
            In Progress
          </h2>

          <p className="text-4xl font-bold text-yellow-500 mt-4">
            {progress}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-bold">
            Completed
          </h2>

          <p className="text-4xl font-bold text-green-600 mt-4">
            {completed}
          </p>
        </div>

      </div>

      {/* Assigned Requests */}

      <div className="bg-white rounded-xl shadow overflow-x-auto">

        <div className="p-6 border-b">
          <h2 className="text-xl font-bold">
            My Assigned Requests
          </h2>
        </div>

        <table className="w-full">

          <thead className="bg-slate-100">
            <tr>
              <th className="p-4 text-left">
                Client
              </th>

              <th className="p-4 text-left">
                Service
              </th>

              <th className="p-4 text-left">
                Status
              </th>

              <th className="p-4 text-left">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>

            {requests.length > 0 ? (
              requests.map((request) => (
                <tr
                  key={request.id}
                  className="border-b"
                >
                  <td className="p-4">
                    {request.full_name}
                  </td>

                  <td className="p-4">
                    {request.service_name}
                  </td>

                  <td className="p-4">
                    {request.status}
                  </td>

                  <td className="p-4 flex gap-2">

                    <button
                      onClick={() =>
                        updateStatus(
                          request.id,
                          "In Progress"
                        )
                      }
                      className="bg-yellow-500 text-white px-3 py-1 rounded"
                    >
                      Start
                    </button>

                    <button
                      onClick={() =>
                        updateStatus(
                          request.id,
                          "Completed"
                        )
                      }
                      className="bg-green-600 text-white px-3 py-1 rounded"
                    >
                      Complete
                    </button>

                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="p-6 text-center text-gray-500"
                >
                  No assigned requests.
                </td>
              </tr>
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}