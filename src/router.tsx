import { createBrowserRouter } from "react-router-dom";
import { Shell } from "./shell/shell";
import { DashboardPage } from "./pages/dashboard/dashboardPage";
import{LicencesPage} from "./pages/licences/licencesPage"
import { CoastersPage } from "./pages/coasters/coastersPage";
import { WalletPage } from "./pages/wallet/walletPage";
import { ProfilePage } from "./pages/profile/profilePage";
import { StorePage } from "./pages/store/storePage";
import { NewsPage } from "./pages/news/newsPage";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Shell,
        children: [
            {
                path: "",
                Component: DashboardPage,
            },
            ,
    
            {
                path: "/licences",
                Component: LicencesPage,
            },
            {
                path: "/coasters",
                Component: CoastersPage,
            },
              {
                path: "/wallet",
                Component: WalletPage,
            },
                 {
                path: "/me",
                Component: ProfilePage,
            },
                    {
                path: "/store",
                Component: StorePage,
            },
                       {
                path: "/news",
                Component: NewsPage,
            },
        ],

        
    },
]);
