import { useEffect, useState } from "react";
import { supabase } from "../../supabase/client";
import { useAuth } from "../../contexts/AuthContext";

export default function MyRequests() {
  const { user } = useAuth();

const [requests, setRequests] = useState([]);

useEffect(() => {
  fetchRequests();
}, []);

async function fetchRequests() {
  const { data } = await supabase
    .from("service_requests")
    .select("*")
    .eq("client_id", user.id)
    .order("created_at", {
      ascending: false,
    });

  setRequests(data || []);
}
  return (
    <>
      <section className="bg-slate-950 text-white py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h1 className="text-5xl font-bold">
            My Requests
          </h1>

        </div>

      </section>

      <section className="py-20">

        <div className="max-w-6xl mx-auto px-6">

          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

            <table className="w-full">

              <thead className="bg-blue-600 text-white">

                <tr>
                  <th className="p-4 text-left">ID</th>
                  <th className="p-4 text-left">Service</th>
                  <th className="p-4 text-left">Status</th>
                  <th className="p-4 text-left">Date</th>
                </tr>

              </thead>

              <tbody>

                {requests.map((request) => (
                  <tr
                    key={request.id}
                    className="border-b"
                  >
                    <td>{request.id}</td>
                    <td>{request.service_name}</td>
                    <td>{request.status}</td>
                    <td>
  {new Date(
    request.created_at
  ).toLocaleDateString()}
</td>
                  </tr>
                ))}

              </tbody>

            </table>

          </div>

        </div>

      </section>
    </>
  );
}