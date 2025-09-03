import { HomeIcon, BarChart3, Users, GraduationCap } from "lucide-react";
import Index from "./pages/Index.jsx";
import Dashboard from "./pages/Dashboard.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "监控",
    to: "/",
    icon: <BarChart3 className="h-4 w-4" />,
    page: <Dashboard />,
  },
];
