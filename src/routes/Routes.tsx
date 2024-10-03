import App from "../App";
import Index from "../pages/Index";
import Impressum from "../pages/Impressum";
import Agbs from "../pages/Agbs";
import ImpressumApp from "../pages/ImpressumApp";
import {createBrowserRouter} from "react-router-dom";
import Nutzungsbedingungen from "../pages/Nutzungsbedingungen";
import DatenschutzApp from "../pages/DatenschutzApp";
import Datenschutz from "../pages/Datenschutz";
import Widerrufsformular from "../pages/Widerrufsformular";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "", element: <Index /> },
            { path: "impressum", element: <Impressum /> },
            { path: "app-impressum", element: <ImpressumApp /> },
            { path: "agbs", element: <Agbs /> },
            { path: "datenschutz", element: <Datenschutz /> },
            { path: "app-datenschutz", element: <DatenschutzApp /> },
            { path: "nutzungsbedingungen", element: <Nutzungsbedingungen /> },
            { path: "widerrufsformular", element: <Widerrufsformular /> },
        ],
    },
]);
