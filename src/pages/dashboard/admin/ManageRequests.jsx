import { useEffect, useState } from "react";
import { supabase } from "../../../supabase/client";

export default function ManageRequests() {
  const [requests, setRequests] = useState([]);
const [staff, setStaff] = useState([]);
useEffect(() => {
  loadRequests();
  loadStaff();
}, []);

async function loadRequests() {
  const { data } = await supabase
    .from("service_requests")
    .select("*")
    .order("created_at", { ascending: false });

  setRequests(data || []);
}

async function loadStaff() {
  const { data } = await supabase
    .from("profiles")
    .select("*")
    .eq("role", "staff");

  setStaff(data || []);
}

async function assignStaff(requestId, staffId) {
  const { error } = await supabase
    .from("service_requests")
    .update({
      assigned_staff: staffId,
      status: "Assigned",
    })
    .eq("id", requestId);

  if (error) {
    alert(error.message);
    return;
  }

  loadRequests();
}
  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">
        Manage Requests
      </h1>

      <div className="bg-white rounded-xl shadow overflow-x-auto">

        <table className="w-full">
  <option>
    Assign Staff
  </option>

  {staff.map((member) => (
    <option
      key={member.id}
      value={member.id}
    >
      {member.full_name}
    </option>
  ))}
          <thead className="bg-slate-100">

            <tr>
              <th className="p-4 text-left">Client</th>
              <th className="p-4 text-left">Service</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Assigned Staff</th>
              <th className="p-4 text-left">Actions</th>
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

        <td className="p-4">

          <select
            className="border p-2 rounded"
            value={
              request.assigned_staff || ""
            }
            onChange={(e) =>
              assignStaff(
                request.id,
                e.target.value
              )
            }
          >
            <option value="">
              Assign Staff
            </option>

            {staff.map((member) => (
              <option
                key={member.id}
                value={member.id}
              >
                {member.full_name}
              </option>
            ))}
          </select>

        </td>

        <td className="p-4">

          <button
            className="bg-green-600 text-white px-3 py-1 rounded"
            onClick={async () => {

              await supabase
                .from("service_requests")
                .update({
                  status: "Completed",
                })
                .eq("id", request.id);

              loadRequests();
            }}
          >
            Complete
          </button>

        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td className="p-4">
        No Requests Yet
      </td>

      <td className="p-4">-</td>
      <td className="p-4">-</td>
      <td className="p-4">-</td>
      <td className="p-4">-</td>
    </tr>
  )}

</tbody>

        </table>

      </div>

    </div>
  );
}