import App from "../App";
import Index from "../pages/Index";
import Impressum from "../pages/Impressum";
import AgbsApp from "../pages/AgbsApp";
import ImpressumApp from "../pages/ImpressumApp";
import {createBrowserRouter} from "react-router-dom";
import NutzungsbedingungenApp from "../pages/NutzungsbedingungenApp";
import DatenschutzApp from "../pages/DatenschutzApp";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "", element: <Index /> },
            { path: "impressum", element: <Impressum /> },
            { path: "app-impressum", element: <ImpressumApp /> },
            { path: "app-agbs", element: <AgbsApp /> },
            { path: "app-datenschutz", element: <DatenschutzApp /> },
            { path: "app-nutzungsbedingungen", element: <NutzungsbedingungenApp /> },
        ],
    },
]);
