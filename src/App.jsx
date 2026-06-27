import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

// Public Pages
import Home from "./pages/public/Home";
import About from "./pages/public/About";
import Services from "./pages/public/Services";
import StudyAbroad from "./pages/public/StudyAbroad";
import Blog from "./pages/public/Blog";
import Contact from "./pages/public/Contact";
import RequestService from "./pages/public/RequestService";
import MyRequests from "./pages/public/MyRequests";

// Auth Pages
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

// Dashboard Pages
import Dashboard from "./pages/dashboard/Dashboard";
import AdminDashboard from "./pages/dashboard/admin/AdminDashboard";

import ManageRequests from "./pages/dashboard/admin/ManageRequests";
import ManageStaff from "./pages/dashboard/admin/ManageStaff";
import ManageClients from "./pages/dashboard/admin/ManageClients";
import ManageBlog from "./pages/dashboard/admin/ManageBlog";
import Reports from "./pages/dashboard/admin/Reports";

// Protected Route
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <Routes>
      {/* Public Website */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/study-abroad" element={<StudyAbroad />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
<Route
  path="/request-service"
  element={
    <ProtectedRoute>
      <RequestService />
    </ProtectedRoute>
  }
/>
<Route
  path="/my-requests"
  element={
    <ProtectedRoute>
      <MyRequests />
    </ProtectedRoute>
  }
/>     </Route>

      {/* Authentication */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Dashboard */}
<Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>
      {/* Admin Only */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute role="admin">
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
      <Route
  path="/admin/requests"
  element={
    <ProtectedRoute role="admin">
      <ManageRequests />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/staff"
  element={
    <ProtectedRoute role="admin">
      <ManageStaff />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/clients"
  element={
    <ProtectedRoute role="admin">
      <ManageClients />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/blog"
  element={
    <ProtectedRoute role="admin">
      <ManageBlog />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/reports"
  element={
    <ProtectedRoute role="admin">
      <Reports />
    </ProtectedRoute>
  }
/>
    </Routes>
  );
}