export default function Reports() {
  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">
        Reports
      </h1>

      <div className="grid md:grid-cols-4 gap-6">

        <div className="bg-white p-6 rounded-xl shadow">
          Total Requests
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          Completed Requests
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          Active Clients
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          Active Staff
        </div>

      </div>

    </div>
  );
}