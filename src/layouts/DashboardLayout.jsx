import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="flex">

      <aside className="w-64 bg-slate-900 text-white min-h-screen p-4">
        Dashboard Menu
      </aside>

      <main className="flex-1 p-6">
        <Outlet />
      </main>

    </div>
  );
}