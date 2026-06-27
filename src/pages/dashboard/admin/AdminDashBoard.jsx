import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../../../supabase/client";


export default function AdminDashboard() {
  const [requests, setRequests] = useState([]);
  const [totalRequests, setTotalRequests] =
  useState(0);

const [pendingRequests, setPendingRequests] =
  useState(0);

const [completedRequests, setCompletedRequests] =
  useState(0);

const [clients, setClients] =
  useState(0);

  useEffect(() => {
  loadStats();
  setRequests(requests || []);
}, []);

async function loadStats() {
  const { data: requests } =
    await supabase
      .from("service_requests")
      .select("*");

  const { data: profiles } =
    await supabase
      .from("profiles")
      .select("*");

  setTotalRequests(
    requests?.length || 0
  );

  setPendingRequests(
    requests?.filter(
      (r) => r.status === "Pending"
    ).length || 0
  );

  setCompletedRequests(
    requests?.filter(
      (r) => r.status === "Completed"
    ).length || 0
  );

  setClients(
    profiles?.filter(
      (p) => p.role === "client"
    ).length || 0
  );
}
  return (
    <div className="min-h-screen bg-slate-100">

      {/* Header */}

      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto p-6">

          <h1 className="text-3xl font-bold text-slate-800">
            Admin Dashboard
          </h1>

          <p className="text-slate-500">
            Manage clients, staff, requests and website content.
          </p>

        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">

        {/* Statistics */}

        <div className="grid md:grid-cols-4 gap-6 mb-8">

          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-gray-500">Total Requests</h3>
            <p className="text-3xl font-bold text-blue-700">
              {totalRequests}
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-gray-500">Pending</h3>
            <p className="text-3xl font-bold text-yellow-500">
              {pendingRequests}
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-gray-500">Completed</h3>
            <p className="text-3xl font-bold text-green-600">
              {completedRequests}
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-gray-500">Registered Clients</h3>
            <p className="text-3xl font-bold text-purple-600">
              {clients}
            </p>
          </div>

        </div>

        {/* Quick Actions */}

        <div className="grid md:grid-cols-3 gap-6">

          <Link
            to="/admin/requests"
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg"
          >
            <h2 className="font-bold text-xl">
              Manage Requests
            </h2>

            <p className="text-gray-600 mt-2">
              View, assign and update service requests.
            </p>
          </Link>

          <Link
            to="/admin/staff"
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg"
          >
            <h2 className="font-bold text-xl">
              Staff Management
            </h2>

            <p className="text-gray-600 mt-2">
              Create and manage staff accounts.
            </p>
          </Link>

          <Link
            to="/admin/blog"
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg"
          >
            <h2 className="font-bold text-xl">
              News & Blog
            </h2>

            <p className="text-gray-600 mt-2">
              Publish updates and announcements.
            </p>
          </Link>

        </div>

        {/* Recent Requests */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-xl font-bold">
              Recent Requests
            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead className="bg-slate-50">

                <tr>

                  <th className="text-left p-4">
                    Client
                  </th>

                  <th className="text-left p-4">
                    Service
                  </th>

                  <th className="text-left p-4">
                    Status
                  </th>

                  <th className="text-left p-4">
                    Assigned Staff
                  </th>

                </tr>

              </thead>

              <tbody>
  {requests.length > 0 ? (
    requests.slice(0, 5).map((request) => (
      <tr key={request.id} className="border-b">
        <td className="p-4">
          {request.full_name}
        </td>

        <td className="p-4">
          {request.service_name}
        </td>

        <td className="p-4">
          {request.status}
        </td>

        <td className="p-4">
          {request.assigned_staff || "Unassigned"}
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td className="p-4">
        No requests yet
      </td>

      <td className="p-4">-</td>
      <td className="p-4">-</td>
      <td className="p-4">-</td>
    </tr>
  )}
</tbody>
            </table>

          </div>

        </div>

      </div>

    </div>
  );
}