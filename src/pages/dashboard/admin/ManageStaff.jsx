export default function ManageStaff() {
  return (
    <div className="p-6">

      <div className="flex justify-between items-center mb-6">

        <h1 className="text-3xl font-bold">
          Staff Management
        </h1>

        <button className="bg-blue-600 text-white px-5 py-3 rounded-lg">
          Add Staff
        </button>

      </div>

      <div className="bg-white rounded-xl shadow p-6">

        <p>
          Staff accounts will appear here.
        </p>

      </div>

    </div>
  );
}