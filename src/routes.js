
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Manager from "layouts/manager";
import Employee from "layouts/employee";
import { IoStatsChart } from "react-icons/io5";
import { IoHome } from "react-icons/io5";

const routes = [
  {
    type: "collapse",
    name: "Admin",
    key: "dashboard",
    route: "/dashboard",
    icon: <IoHome size="15px" color="inherit" />,
    component: Dashboard,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Tables",
    key: "tables",
    route: "/tables",
    icon: <IoStatsChart size="15px" color="inherit" />,
    component: Tables,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Manager",
    key: "manager",
    route: "/manager",
    icon: <IoHome size="15px" color="inherit" />,
    component: Manager,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Employee",
    key: "employee",
    route: "/employee",
    icon: <IoHome size="15px" color="inherit" />,
    component: Employee,
    noCollapse: true,
  },
];

export default routes;
