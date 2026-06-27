import { useEffect, useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { supabase } from "../../../supabase/client";

export default function MyAssignedRequests() {
  const { user } = useAuth();

  const [requests, setRequests] =
    useState([]);

  useEffect(() => {
    loadRequests();
  }, []);

  async function loadRequests() {
    const { data } = await supabase
      .from("service_requests")
      .select("*")
      .eq(
        "assigned_staff",
        user.id
      );

    setRequests(data || []);
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Assigned Requests
      </h1>

      <table className="w-full">
        <thead>
          <tr>
            <th>Client</th>
            <th>Service</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {requests.map((request) => (
            <tr key={request.id}>
              <td>{request.full_name}</td>
              <td>{request.service_name}</td>
              <td>{request.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}