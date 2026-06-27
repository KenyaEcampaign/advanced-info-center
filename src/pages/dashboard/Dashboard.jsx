import { useAuth } from "../../contexts/AuthContext";

import AdminDashboard from "./admin/AdminDashboard";
import StaffDashboard from "./staff/StaffDashboard";
import ClientDashboard from "./client/ClientDashboard";

export default function Dashboard() {
  const { profile, loading } = useAuth();

  if (loading) {
    return (
      <div className="p-10 text-center">
        Loading dashboard...
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="p-10 text-center">
        Profile not found
      </div>
    );
  }

  if (profile.role === "admin") {
    return <AdminDashboard />;
  }

  if (profile.role === "staff") {
    return <StaffDashboard />;
  }

  return <ClientDashboard />;
}