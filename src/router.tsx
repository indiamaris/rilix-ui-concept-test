import { createBrowserRouter } from "react-router-dom";
import { Shell } from "./shell/shell";
import { DashboardPage } from "./pages/dashboard/dashboardPage";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Shell,
        children: [
            {
                path: "",
                Component: DashboardPage,
            },
        ],
    },
]);
